import { profileService } from "@/core/services/profile"
import { GetServiceProfileUseCase } from "./get-service-profile.usecase"

export const getServiceProfileUsecase = new GetServiceProfileUseCase(profileService)