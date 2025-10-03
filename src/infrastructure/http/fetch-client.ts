import { HttpClient, HttpRequestConfig, HttpResponse } from './http-client.interface';

export class FetchHttpClient implements HttpClient {
  private authToken?: string;
  
  constructor(private readonly baseURL: string) {}
  
  setAuthToken(token: string): void {
    this.authToken = token;
  }
  
  removeAuthToken(): void {
    this.authToken = undefined;
  }
  
  async request<T = unknown>(config: HttpRequestConfig): Promise<HttpResponse<T>> {
    const url = this.buildUrl(config.url, config.params);
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...config.headers,
    };
    
    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`;
    }
    
    const response = await fetch(url, {
      method: config.method,
      headers,
      body: config.data ? JSON.stringify(config.data) : undefined,
    });
    
    const data = await response.json() as T;
    
    return {
      data,
      status: response.status,
      statusText: response.statusText,
      headers: this.headersToObject(response.headers),
    };
  }
  
  private buildUrl(path: string, params?: Record<string, unknown>): string {
    const url = new URL(path, this.baseURL);
    
    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          url.searchParams.append(key, String(value));
        }
      });
    }
    
    return url.toString();
  }
  
  private headersToObject(headers: Headers): Record<string, string> {
    const obj: Record<string, string> = {};
    headers.forEach((value, key) => {
      obj[key] = value;
    });
    return obj;
  }
}
