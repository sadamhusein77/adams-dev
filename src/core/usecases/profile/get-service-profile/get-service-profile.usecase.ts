import { GetServiceProfilePresenter } from '@/core/entities/presenters/profile/get-service-profile.presenter';
import { ProfileService } from '@/core/services/profile/profile.service';
import { BaseUsecase } from '@/core/utils/base-usecase';
import { AxiosError, AxiosRequestConfig } from 'axios';

export class GetServiceProfileUseCase implements BaseUsecase<GetServiceProfilePresenter> {
  constructor(private readonly profileService: ProfileService) { }

  async execute(
    config?: AxiosRequestConfig
  ): Promise<GetServiceProfilePresenter> {
    try {
      const response = await this.profileService.getServiceProfile(config);
      const presenter = new GetServiceProfilePresenter(response);
      if(presenter.presenter.status.code === 205) {
        throw new Error('Failed')
      }
      return presenter;
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
