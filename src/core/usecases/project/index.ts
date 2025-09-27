import { httpClientImpl } from '@/core/libs/http';
import { ProjectService } from '@/core/services/project';
import { ProjectUseCase } from './project.usecase';

const project = new ProjectService(httpClientImpl);
export const projectUsecase = new ProjectUseCase(project);
