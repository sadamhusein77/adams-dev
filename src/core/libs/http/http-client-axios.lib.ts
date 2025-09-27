import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import { HttpClient } from './http-client.lib';
import { baseApiUrl } from '@/utils/constants';
import { getDeviceId, getLangDevice } from '@/utils/helper';
export class HttpClientAxios extends HttpClient {
  private static instance = axios.create({
    baseURL: baseApiUrl || '/api'
  });

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
  }

  private getAuthToken(): string | null {
    try {
      return JSON.parse(localStorage.getItem('auth-token') || 'null');
    } catch {
      return null;
    }
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

