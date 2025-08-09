import { HttpClient } from '@/core/libs/http/http-client.lib';
import { BaseResponse } from '@/core/utils/base-response';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import { TRequestOTPIH } from '@/core/entities/dtos/auth/request-otp-ih.dto';
import { RequestOTPIHDomain } from '@/core/entities/domains/auth/request-otp-ih.domain';
import { GetAvailableOTPListDomain } from '@/core/entities/domains/auth/get-available-otp-list.domain';
import { TGetAvailableOTPList } from '@/core/entities/dtos/auth/get-available-otp-list';

export class AuthService {
  constructor(
    private readonly http: HttpClient,
    private readonly url: string
  ) { }

  async requestOTPIH(
    payload: TRequestOTPIH,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<RequestOTPIHDomain>> {
    const response = await this.http.request({
      url: `/v1/auth/utility-monitoring/request-otp`,
      method: 'POST',
      data: payload,
      ...config
    });

    return httpAxiosMapper(response as AxiosResponse);
  }

  async getAvailableOTPList(
    payload: TGetAvailableOTPList,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<GetAvailableOTPListDomain>> {
    const response = await this.http.request({
      url: `/v1/auth/utility-monitoring/available-otp-list`,
      method: 'GET',
      params: payload,
      ...config
    })

    return httpAxiosMapper(response as AxiosResponse);
  }
}
