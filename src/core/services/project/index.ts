import { HttpClient } from '@/core/libs/http/http-client.lib';
import type { BaseResponse } from '@/core/utils/base-response';
import { httpAxiosMapper } from '@/core/utils/http-mapper';
import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { mockRespProject } from './mock';
import type { ProjectDomain } from '@/core/entities/domains/project.domain';

export abstract class ProjectRepository {
  abstract get(): Promise<BaseResponse<ProjectDomain[]>>;
}

export class ProjectService extends ProjectRepository {
  static url: string = '/v1/project';

  constructor(private readonly http: HttpClient) {
    super();
  }

  async get(): Promise<BaseResponse<ProjectDomain[]>> {
    return mockRespProject;
    const response = await this.http.request<AxiosResponse<BaseResponse<ProjectDomain[]>>, AxiosRequestConfig>({
      url: ProjectService.url,
      method: 'GET'
    });
    return httpAxiosMapper(response as AxiosResponse);
  }
}
