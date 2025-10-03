import { FetchHttpClient } from './infrastructure/http/fetch-client';
import { CertificateRepository } from './domain/repositories/certificate.repository';
import { AuthRepository } from './domain/repositories/auth.repository';

export interface VeriChainConfig {
  apiUrl?: string;
  apiKey?: string;
  debug?: boolean;
}

export class VeriChainClient {
  public readonly certificates: CertificateRepository;
  public readonly auth: AuthRepository;
  private readonly httpClient: FetchHttpClient;
  
  constructor(config: VeriChainConfig = {}) {
    const apiUrl = config.apiUrl || 'https://api.verichain.app';
    
    this.httpClient = new FetchHttpClient(apiUrl);
    this.certificates = new CertificateRepository(this.httpClient);
    this.auth = new AuthRepository(this.httpClient);
    
    if (config.apiKey) {
      this.httpClient.setAuthToken(config.apiKey);
    }
  }
  
  setAuthToken(token: string): void {
    this.httpClient.setAuthToken(token);
  }
  
  removeAuthToken(): void {
    this.httpClient.removeAuthToken();
  }
}

export function createClient(config?: VeriChainConfig): VeriChainClient {
  return new VeriChainClient(config);
}

// Export types
export * from './domain/entities/certificate';
export * from './domain/entities/user';
export * from './domain/entities/result';
