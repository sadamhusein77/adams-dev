import { AuthService } from '@/core/services/auth/auth.service';
import { AxiosError, AxiosRequestConfig } from 'axios';
import { BaseUsecase } from '@/core/utils/base-usecase';
import { GetAvailableOTPListPresenter } from '@/core/entities/presenters/auth/get-available-otp-list.presenter';
import { TGetAvailableOTPList } from '@/core/entities/dtos/auth/get-available-otp-list';

export class GetAvailableOTPListUseCase implements BaseUsecase<GetAvailableOTPListPresenter> {
  constructor(private readonly authService: AuthService) { }

  async execute(
    payload: TGetAvailableOTPList,
    config?: AxiosRequestConfig
  ): Promise<GetAvailableOTPListPresenter> {
    try {
      const response = await this.authService.getAvailableOTPList(payload, config);
      return new GetAvailableOTPListPresenter(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
