import { Certificate, CreateCertificateDto, VerificationResult } from '../entities/certificate';
import { Result, PaginatedResult } from '../entities/result';
import { HttpClient } from '../../infrastructure/http/http-client.interface';
export declare class CertificateRepository {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    findAll(params?: {
        page?: number;
        limit?: number;
        status?: string;
    }): Promise<Result<PaginatedResult<Certificate>>>;
    findById(id: string): Promise<Result<Certificate>>;
    create(data: CreateCertificateDto): Promise<Result<Certificate>>;
    verify(id: string): Promise<Result<VerificationResult>>;
}
//# sourceMappingURL=certificate.repository.d.ts.map