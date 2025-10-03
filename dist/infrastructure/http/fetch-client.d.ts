import { HttpClient, HttpRequestConfig, HttpResponse } from './http-client.interface';
export declare class FetchHttpClient implements HttpClient {
    private readonly baseURL;
    private authToken?;
    constructor(baseURL: string);
    setAuthToken(token: string): void;
    removeAuthToken(): void;
    request<T = unknown>(config: HttpRequestConfig): Promise<HttpResponse<T>>;
    private buildUrl;
    private headersToObject;
}
//# sourceMappingURL=fetch-client.d.ts.map