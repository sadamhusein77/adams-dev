import { LoginUsecase } from './login.usecase';
import { loginService } from '@/core/services/login';

export const loginUseCase = new LoginUsecase(loginService);
