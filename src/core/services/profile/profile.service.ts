import { TGetServiceProfileDomain } from '@/core/entities/domains/profile/get-service-profile.domain';
import { HttpClient } from '@/core/libs/http/http-client.lib';
import { BaseResponse } from '@/core/utils/base-response';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export class ProfileService {
  constructor(
    private readonly http: HttpClient,
    private readonly url: string
  ) { }

  async getServiceProfile(
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<TGetServiceProfileDomain>> {
    const response = await this.http.request({
      url: `v1/service-profile`,
      method: 'GET',
      ...config
    });

    return httpAxiosMapper(response as AxiosResponse);
  }
}
