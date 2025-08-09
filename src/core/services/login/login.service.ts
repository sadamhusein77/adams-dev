import { HttpClient } from '@/core/libs/http/http-client.lib';
import { BaseResponse } from '@/core/utils/base-response';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import { TLoginDto } from '@/core/entities/dtos/login.dto';
import { LoginPostDomain } from '@/core/entities/domains/login.domain';

export class LoginService {
  constructor(
    private readonly http: HttpClient,
    private readonly url: string
  ) {}

  async postLoginOtp(
    payload: TLoginDto,
    config?: AxiosRequestConfig
  ): Promise<BaseResponse<LoginPostDomain>> {    
    const response = await this.http.request({
      url: this.url,
      method: 'POST',
      data: payload,
      ...config
    });

    return httpAxiosMapper(response as AxiosResponse);
  }
}
