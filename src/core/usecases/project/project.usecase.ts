import { ProjectPresenter } from '@/core/entities/presenters/project.presenter';
import type { ProjectRepository } from '@/core/services/project';
import type { BaseUsecase } from '@/core/utils/base-usecase';
import { AxiosError } from 'axios';

export class ProjectUseCase implements BaseUsecase<ProjectPresenter> {
  constructor(private projectService: ProjectRepository) {}
  async execute(): Promise<ProjectPresenter> {
    try {
      const response = await this.projectService.get();
      return new ProjectPresenter(response);
    } catch (error) {
      if (error instanceof AxiosError) {
        throw error;
      }
      throw new Error('An unexpected error occurred');
    }
  }
}
