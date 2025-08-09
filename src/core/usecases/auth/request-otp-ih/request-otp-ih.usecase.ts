import { TRequestOTPIH } from '@/core/entities/dtos/auth/request-otp-ih.dto';
import { AuthService } from '@/core/services/auth/auth.service';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { RequestOTPIHPresenter } from '@/core/entities/presenters/auth/request-otp-ih.presenter';
import { BaseUsecase } from '@/core/utils/base-usecase';

export class RequestOTPIHUseCase implements BaseUsecase<RequestOTPIHPresenter> {
  constructor(private readonly authService: AuthService) { }

  async execute(
    payload: TRequestOTPIH,
    config?: AxiosRequestConfig
  ): Promise<RequestOTPIHPresenter> {
    try {
      const response = await this.authService.requestOTPIH(payload, config);
      return new RequestOTPIHPresenter(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
