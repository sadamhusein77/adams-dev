import { authService } from "@/core/services/auth"
import { GetAvailableOTPListUseCase } from "./get-available-otp-list.usecase"

export const getAvailableOTPListUseCase = new GetAvailableOTPListUseCase(authService); 
