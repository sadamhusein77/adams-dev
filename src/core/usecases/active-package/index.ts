import { httpClientImpl } from '@/core/libs/http';
import { ActivePackageUsecase } from './active-package.usecase';
import { ActivePackageService } from '@/core/services/active-package';

const activePackage = new ActivePackageService(httpClientImpl);
export const activePackageUsecase = new ActivePackageUsecase(activePackage);
