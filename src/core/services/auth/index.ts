import { httpClientImpl } from '@/core/libs/http';
import { AuthService } from './auth.service';

export const url = '/auth';

export const authService = new AuthService(httpClientImpl, url);
