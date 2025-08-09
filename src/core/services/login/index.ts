import { httpClientImpl } from '@/core/libs/http';
import { LoginService } from './login.service';

export const url = '/v1/link/utility-monitoring/login';

export const loginService = new LoginService(httpClientImpl, url);
