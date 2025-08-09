import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpClient } from './http-client.lib';
import { useGlobalErrorStore } from '@/stores/useGlobalErrorStore';
import { baseApiUrl } from '@/utils/constants';
import { TDynamicErrorContent } from '@/utils/types';
import { BaseResponse } from '@/core/utils/base-response';
import { getDeviceId, getLangDevice } from '@/utils/helper';
export class HttpClientAxios extends HttpClient {
  private static instance = axios.create({
    baseURL: baseApiUrl || '/api'
  });

  private isRefreshing = false;
  private failedQueue: any[] = [];

  constructor() {
    super();

    HttpClientAxios.instance.interceptors.request.use(
      (config) => {
        const token = this.getAuthToken();
        if (token) {
          config.headers['X-Auth'] = `Bearer ${token}`;
        }
        config.headers['Device-Id'] = getDeviceId();
        config.headers['X-Localization'] = getLangDevice();
        return config;
      },
      (error) => Promise.reject(error)
    );

    HttpClientAxios.instance.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401) {
          const refreshToken = this.getRefreshToken();

          if (!refreshToken) {
            return Promise.reject(error);
          }

          if (this.isRefreshing) {
            return new Promise((resolve, reject) => {
              this.failedQueue.push({ resolve, reject });
            })
              .then((token) => {
                originalRequest.headers!["X-Auth"] = `Bearer ${token}`;
                return axios(originalRequest);
              })
              .catch((err) => Promise.reject(err));
          }

          originalRequest._retry = true;
          this.isRefreshing = true;

          return this.refreshToken(refreshToken)
            .then((newToken) => {
              this.processQueue(null, newToken);
              originalRequest.headers!["X-Auth"] = `Bearer ${newToken}`;
              return axios(originalRequest);
            })
            .catch((refreshError) => {
              this.processQueue(refreshError, null);
              return Promise.reject(refreshError);
            })
            .finally(() => {
              this.isRefreshing = false;
            });
        }

        const status = error.response?.status;
        const supportId = (error.response?.data as any)?.status?.support_id ?? undefined;
        const dynamicContent = error.response?.data as BaseResponse<TDynamicErrorContent> | null;
        const { showGlobalError } = useGlobalErrorStore.getState();
        showGlobalError(String(status), supportId, dynamicContent?.data);

        return Promise.reject(error);
      }
    );
  }

  private getAuthToken(): string | null {
    try {
      return JSON.parse(localStorage.getItem('auth-token') || 'null');
    } catch {
      return null;
    }
  }

  private getRefreshToken(): string | null {
    try {
      return JSON.parse(localStorage.getItem('refresh-token') || 'null');
    } catch {
      return null;
    }
  }

  private async refreshToken(refreshToken: string): Promise<string> {
    let retryCount = 0;
    const maxRetries = 3;
    const { showGlobalError } = useGlobalErrorStore.getState();

    while (retryCount < maxRetries) {
      try {
        const response = await axios.post(`${baseApiUrl}/v1/refresh-token`, {
          refresh_token: refreshToken,
        }, {
          headers: {
            'Device-Id': getDeviceId()
          }
        });

        const newAuthToken = response.data.data.token;
        const newRefreshToken = response.data.data.refresh_token;

        localStorage.setItem("auth-token", JSON.stringify(newAuthToken));
        localStorage.setItem("refresh-token", JSON.stringify(newRefreshToken));

        return newAuthToken;
      } catch (error) {
        retryCount++;
        console.error(`Token refresh attempt ${retryCount} failed`);

        if (retryCount >= maxRetries) {
          localStorage.removeItem("auth-token");
          localStorage.removeItem("refresh-token");
          showGlobalError('401');
          throw new Error("Token refresh failed after 3 attempts");
        }
      }
    }
    throw new Error("Token refresh failed");
  }

  private processQueue(error: any, token: string | null) {
    this.failedQueue.forEach((prom) => {
      if (error) prom.reject(error);
      else prom.resolve(token);
    });
    this.failedQueue = [];
  }

  async request<R = AxiosResponse<any, any>, O = AxiosRequestConfig>(options: O): Promise<R> {
    try {
      const response = await HttpClientAxios.instance.request(options as AxiosRequestConfig);
      return response as R;
    } catch (error) {
      throw error as AxiosError;
    }
  }

  async requestWithAuth<R, O>(_options: O): Promise<R> {
    const options = _options as AxiosRequestConfig;
    const token = this.getAuthToken();
    if (token) {
      options.headers = {
        ...(options.headers || {}),
        Authorization: `Bearer ${token}`,
      };
    }

    try {
      const response = await HttpClientAxios.instance.request(options);
      return response as R;
    } catch (error) {
      throw error as AxiosError;
    }
  }
}

