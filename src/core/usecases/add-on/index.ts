import { httpClientImpl } from '@/core/libs/http';
import { AddOnUsecase } from './add-on.usecase';
import { AddOnService } from '@/core/services/add-on';

const addOn = new AddOnService(httpClientImpl);
export const addOnUsecase = new AddOnUsecase(addOn);
