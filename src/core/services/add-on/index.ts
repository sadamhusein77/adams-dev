import { AddOnDomain } from '@/core/entities/domains/add-on.domain';
import { HttpClient } from '@/core/libs/http/http-client.lib';
import { BaseResponse } from '@/core/utils/base-response';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import { AxiosRequestConfig, AxiosResponse } from 'axios';

export abstract class AddOnRepository {
  abstract get(): Promise<BaseResponse<AddOnDomain>>;
}

export class AddOnService extends AddOnRepository {
  static url: string = '/v1/subscriptions/active/addons';

  constructor(private readonly http: HttpClient) {
    super();
  }

  async get(): Promise<BaseResponse<AddOnDomain>> {
    const response = await this.http.request<AxiosResponse<BaseResponse<AddOnDomain>>, AxiosRequestConfig>({
      url: AddOnService.url,
      method: 'GET'
    });
    return httpAxiosMapper(response as AxiosResponse);
  }
}
