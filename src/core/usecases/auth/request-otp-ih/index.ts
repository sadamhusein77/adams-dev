import { RequestOTPIHUseCase } from "./request-otp-ih.usecase"
import { authService } from "@/core/services/auth"

export const requestOTPIHUseCase = new RequestOTPIHUseCase(authService)

