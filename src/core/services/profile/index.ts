import type { ProfileDomain } from '@/core/entities/domains/profile.domain';
import { HttpClient } from '@/core/libs/http/http-client.lib';
import type { BaseResponse } from '@/core/utils/base-response';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { mockRespProfile } from './mock';

export abstract class ProfileRepository {
  abstract get(): Promise<BaseResponse<ProfileDomain>>;
}

export class ProfileService extends ProfileRepository {
  static url: string = '/v1/profile';

  constructor(private readonly http: HttpClient) {
    super();
  }

  async get(): Promise<BaseResponse<ProfileDomain>> {
    const response = await this.http.request<AxiosResponse<BaseResponse<ProfileDomain>>, AxiosRequestConfig>({
      url: ProfileService.url,
      method: 'GET'
    });
    return mockRespProfile;
    return httpAxiosMapper(response as AxiosResponse);
  }
}
