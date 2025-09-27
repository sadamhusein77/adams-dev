import type { BaseResponse } from '@/core/utils/base-response';
import type { ProjectDomain } from '../domains/project.domain';

export class ProjectPresenter {
  constructor(public presenter: BaseResponse<ProjectDomain[]>) {}
}
