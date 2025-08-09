export abstract class HttpClient {
  abstract request<R, O>(_options: O): Promise<R>;
}
