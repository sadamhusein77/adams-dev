export type BaseUsecase<T> = {
  execute(params?: any): Promise<T>;
};
