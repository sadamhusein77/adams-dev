import { httpClientImpl } from '@/core/libs/http';
import { ProfileService } from '@/core/services/profile';
import { ProfileUsecase } from './profile.usecase';

const profile = new ProfileService(httpClientImpl);
export const profileUsecase = new ProfileUsecase(profile);
