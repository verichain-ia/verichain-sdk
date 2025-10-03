import { Certificate, CreateCertificateDto, VerificationResult } from '../entities/certificate';
import { Result, PaginatedResult } from '../entities/result';
import { HttpClient } from '../../infrastructure/http/http-client.interface';

export class CertificateRepository {
  constructor(private readonly httpClient: HttpClient) {}
  
  async findAll(params?: {
    page?: number;
    limit?: number;
    status?: string;
  }): Promise<Result<PaginatedResult<Certificate>>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'GET',
        url: '/api/v1/certificates',
        params,
      });
      
      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          code: 'FETCH_ERROR',
          message: error.message || 'Failed to fetch certificates',
          statusCode: error.status || 500,
        },
      };
    }
  }
  
  async findById(id: string): Promise<Result<Certificate>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'GET',
        url: `/api/v1/certificates/${id}`,
      });
      
      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          code: 'NOT_FOUND',
          message: `Certificate ${id} not found`,
          statusCode: 404,
        },
      };
    }
  }
  
  async create(data: CreateCertificateDto): Promise<Result<Certificate>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'POST',
        url: '/api/v1/certificates',
        data,
      });
      
      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          code: 'CREATE_ERROR',
          message: error.message || 'Failed to create certificate',
          statusCode: error.status || 400,
        },
      };
    }
  }
  
  async verify(id: string): Promise<Result<VerificationResult>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'GET',
        url: `/api/v1/certificates/${id}/verify`,
      });
      
      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      return {
        success: false,
        error: {
          code: 'VERIFY_ERROR',
          message: error.message || 'Failed to verify certificate',
          statusCode: error.status || 400,
        },
      };
    }
  }
}
