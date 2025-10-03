import { User, LoginCredentials, RegisterData, AuthTokens } from '../entities/user';
import { Result } from '../entities/result';
import { HttpClient } from '../../infrastructure/http/http-client.interface';
export declare class AuthRepository {
    private readonly httpClient;
    constructor(httpClient: HttpClient);
    login(credentials: LoginCredentials): Promise<Result<AuthTokens>>;
    register(data: RegisterData): Promise<Result<AuthTokens>>;
    getProfile(): Promise<Result<User>>;
    logout(): Promise<Result<void>>;
}
//# sourceMappingURL=auth.repository.d.ts.map