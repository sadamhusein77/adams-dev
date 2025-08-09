import type { AxiosResponse } from "axios";

export const httpAxiosMapper = (res: AxiosResponse<any, any>) => res.data;