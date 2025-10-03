import { CertificateRepository } from './domain/repositories/certificate.repository';
import { AuthRepository } from './domain/repositories/auth.repository';
export interface VeriChainConfig {
    apiUrl?: string;
    apiKey?: string;
    debug?: boolean;
}
export declare class VeriChainClient {
    readonly certificates: CertificateRepository;
    readonly auth: AuthRepository;
    private readonly httpClient;
    constructor(config?: VeriChainConfig);
    setAuthToken(token: string): void;
    removeAuthToken(): void;
}
export declare function createClient(config?: VeriChainConfig): VeriChainClient;
export * from './domain/entities/certificate';
export * from './domain/entities/user';
export * from './domain/entities/result';
//# sourceMappingURL=index.d.ts.map