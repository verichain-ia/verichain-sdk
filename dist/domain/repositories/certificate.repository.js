"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificateRepository = void 0;
class CertificateRepository {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async findAll(params) {
        try {
            const response = await this.httpClient.request({
                method: 'GET',
                url: '/api/v1/certificates',
                params,
            });
            return {
                success: true,
                data: response.data.data,
            };
        }
        catch (error) {
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
    async findById(id) {
        try {
            const response = await this.httpClient.request({
                method: 'GET',
                url: `/api/v1/certificates/${id}`,
            });
            return {
                success: true,
                data: response.data.data,
            };
        }
        catch (error) {
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
    async create(data) {
        try {
            const response = await this.httpClient.request({
                method: 'POST',
                url: '/api/v1/certificates',
                data,
            });
            return {
                success: true,
                data: response.data.data,
            };
        }
        catch (error) {
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
    async verify(id) {
        try {
            const response = await this.httpClient.request({
                method: 'GET',
                url: `/api/v1/certificates/${id}/verify`,
            });
            return {
                success: true,
                data: response.data.data,
            };
        }
        catch (error) {
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
exports.CertificateRepository = CertificateRepository;
//# sourceMappingURL=certificate.repository.js.map