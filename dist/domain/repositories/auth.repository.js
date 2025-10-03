"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
class AuthRepository {
    constructor(httpClient) {
        this.httpClient = httpClient;
    }
    async login(credentials) {
        try {
            const response = await this.httpClient.request({
                method: 'POST',
                url: '/api/v1/auth/login',
                data: credentials,
            });
            const tokens = {
                accessToken: response.data.data.token,
                refreshToken: response.data.data.refreshToken,
                expiresIn: response.data.data.expiresIn || 3600,
                user: response.data.data.user,
            };
            // Auto-set token
            if (tokens.accessToken) {
                this.httpClient.setAuthToken(tokens.accessToken);
            }
            return { success: true, data: tokens };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    code: 'AUTH_ERROR',
                    message: error.message || 'Authentication failed',
                    statusCode: 401,
                },
            };
        }
    }
    async register(data) {
        try {
            const response = await this.httpClient.request({
                method: 'POST',
                url: '/api/v1/auth/register',
                data,
            });
            const tokens = {
                accessToken: response.data.data.token,
                refreshToken: response.data.data.refreshToken,
                expiresIn: response.data.data.expiresIn || 3600,
                user: response.data.data.user,
            };
            return { success: true, data: tokens };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    code: 'REGISTER_ERROR',
                    message: error.message || 'Registration failed',
                    statusCode: 400,
                },
            };
        }
    }
    async getProfile() {
        try {
            const response = await this.httpClient.request({
                method: 'GET',
                url: '/api/v1/auth/me',
            });
            return { success: true, data: response.data.data };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    code: 'PROFILE_ERROR',
                    message: error.message || 'Failed to get profile',
                    statusCode: error.status || 401,
                },
            };
        }
    }
    async logout() {
        try {
            await this.httpClient.request({
                method: 'POST',
                url: '/api/v1/auth/logout',
            });
            this.httpClient.removeAuthToken();
            return { success: true, data: undefined };
        }
        catch (error) {
            return {
                success: false,
                error: {
                    code: 'LOGOUT_ERROR',
                    message: error.message || 'Logout failed',
                    statusCode: error.status || 400,
                },
            };
        }
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map