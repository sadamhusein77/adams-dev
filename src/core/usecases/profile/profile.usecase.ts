import { ProfilePresenter } from '@/core/entities/presenters/profile.presenter';
import type { ProfileRepository } from '@/core/services/profile';
import type { BaseUsecase } from '@/core/utils/base-usecase';
import { AxiosError } from 'axios';

export class ProfileUsecase implements BaseUsecase<ProfilePresenter> {
  constructor(private profileService: ProfileRepository) {}
  async execute(): Promise<ProfilePresenter> {
    try {
      const response = await this.profileService.get();
      return new ProfilePresenter(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
