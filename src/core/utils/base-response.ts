export type BaseStatus = {
  code: number;
  message: string;
  trace_id?: string;
  support_id?: string; 
};

export type BaseResponse<T> = {
  status: BaseStatus;
  data: T;
  errors?: string;
};