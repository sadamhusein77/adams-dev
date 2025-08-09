
import { HttpClient } from "./http-client.lib";
import { HttpClientAxios } from "./http-client-axios.lib";

export const httpClientImpl: HttpClient = new HttpClientAxios();