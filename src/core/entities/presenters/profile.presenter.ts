import type { BaseResponse } from '@/core/utils/base-response';
import type { ProfileDomain } from '../domains/profile.domain';

export class ProfilePresenter {
  constructor(public presenter: BaseResponse<ProfileDomain>) {}
}
