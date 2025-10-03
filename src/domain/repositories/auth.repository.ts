import { User, LoginCredentials, RegisterData, AuthTokens } from '../entities/user';
import { Result } from '../entities/result';
import { HttpClient } from '../../infrastructure/http/http-client.interface';

export class AuthRepository {
  constructor(private readonly httpClient: HttpClient) {}
  
  async login(credentials: LoginCredentials): Promise<Result<AuthTokens>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'POST',
        url: '/api/v1/auth/login',
        data: credentials,
      });
      
      const tokens: AuthTokens = {
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
    } catch (error: any) {
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
  
  async register(data: RegisterData): Promise<Result<AuthTokens>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'POST',
        url: '/api/v1/auth/register',
        data,
      });
      
      const tokens: AuthTokens = {
        accessToken: response.data.data.token,
        refreshToken: response.data.data.refreshToken,
        expiresIn: response.data.data.expiresIn || 3600,
        user: response.data.data.user,
      };
      
      return { success: true, data: tokens };
    } catch (error: any) {
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
  
  async getProfile(): Promise<Result<User>> {
    try {
      const response = await this.httpClient.request<any>({
        method: 'GET',
        url: '/api/v1/auth/me',
      });
      
      return { success: true, data: response.data.data };
    } catch (error: any) {
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
  
  async logout(): Promise<Result<void>> {
    try {
      await this.httpClient.request({
        method: 'POST',
        url: '/api/v1/auth/logout',
      });
      
      this.httpClient.removeAuthToken();
      return { success: true, data: undefined };
    } catch (error: any) {
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
