import { BaseResponse } from '@/core/utils/base-response';
import { ActivePackageDomain } from '../domains/active-package.domain';

export class ActivePackagePresenter {
  constructor(public presenter: BaseResponse<ActivePackageDomain>) {}
}
