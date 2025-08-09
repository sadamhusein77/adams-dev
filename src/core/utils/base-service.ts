export abstract class BaseService {
  abstract get(): Promise<any>;
  abstract getById(id: string): Promise<any>;
}
