import { ActivePackagePresenter } from '@/core/entities/presenters/active-package.presenter';
import { ActivePackageRepository } from '@/core/services/active-package';
import { BaseUsecase } from '@/core/utils/base-usecase';
import { AxiosError } from 'axios';

export class ActivePackageUsecase implements BaseUsecase<ActivePackagePresenter> {
  constructor(private ActivePackageService: ActivePackageRepository) {}
  async execute(): Promise<ActivePackagePresenter> {
    try {
      const response = await this.ActivePackageService.get();
      const presenter = new ActivePackagePresenter(response);
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
