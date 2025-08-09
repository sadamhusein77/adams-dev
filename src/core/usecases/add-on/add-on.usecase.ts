import { AddOnPresenter } from '@/core/entities/presenters/add-on.presenter';
import { AddOnRepository } from '@/core/services/add-on';
import { BaseUsecase } from '@/core/utils/base-usecase';
import { AxiosError } from 'axios';

export class AddOnUsecase implements BaseUsecase<AddOnPresenter> {
  constructor(private AddOnService: AddOnRepository) { }
  async execute(): Promise<AddOnPresenter> {
    try {
      const response = await this.AddOnService.get();
      const presenter = new AddOnPresenter(response);
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
