import { TLoginDto } from '@/core/entities/dtos/login.dto';
import { LoginPresenter } from '@/core/entities/presenters/login.presenter';
import { LoginService } from '@/core/services/login/login.service';
import { AxiosError, AxiosRequestConfig } from 'axios';

type TLoginPost = { payload: TLoginDto, config?: AxiosRequestConfig };

export type BaseLoginUsecase<T> = {
  post({ payload, config }: TLoginPost): Promise<T>;
};

export class LoginUsecase implements BaseLoginUsecase<LoginPresenter> {
  constructor(private readonly loginService: LoginService) {}
  private presenter = new LoginPresenter();

  post: ({ payload, config }: TLoginPost) => Promise<LoginPresenter> = async ({
    payload,
    config
  }: TLoginPost) => {
    try {
      const response = await this.loginService.postLoginOtp(payload, config);
      this.presenter.loginPost = response;
      return this.presenter;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error?.response?.data;
      } else {
        throw new Error('An unexpected error occurred');
      }
    }
  };
}
 