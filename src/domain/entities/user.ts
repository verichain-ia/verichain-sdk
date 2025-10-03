export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'issuer' | 'verifier' | 'student';
  organizationId?: string;
  twoFactorEnabled: boolean;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginCredentials {
  email: string;
  password: string;
  twoFactorCode?: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  organizationId?: string;
  role?: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
  expiresIn: number;
  user: User;
}
