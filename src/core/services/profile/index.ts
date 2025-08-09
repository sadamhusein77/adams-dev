import { httpClientImpl } from '@/core/libs/http';
import { ProfileService } from './profile.service';

export const url = '/auth';

export const profileService = new ProfileService(httpClientImpl, url);
