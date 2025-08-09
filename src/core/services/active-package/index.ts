import { ActivePackageDomain } from '@/core/entities/domains/active-package.domain';
import { HttpClient } from '@/core/libs/http/http-client.lib';
import { BaseResponse } from '@/core/utils/base-response';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class ActivePackageRepository {
  abstract get(): Promise<BaseResponse<ActivePackageDomain>>;
}

export class ActivePackageService extends ActivePackageRepository {
  static url: string = '/v1/subscriptions/active/main';

  constructor(private readonly http: HttpClient) {
    super();
  }

  async get(): Promise<BaseResponse<ActivePackageDomain>> {
    const response = await this.http.request<AxiosResponse<BaseResponse<ActivePackageDomain>>, AxiosRequestConfig>({
      url: ActivePackageService.url,
      method: 'GET'
    });
    return httpAxiosMapper(response as AxiosResponse);
  }
}
