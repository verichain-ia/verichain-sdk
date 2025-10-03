export interface ApiError {
  code: string;
  message: string;
  statusCode: number;
  details?: unknown;
}

export type Result<T, E = ApiError> = 
  | { success: true; data: T }
  | { success: false; error: E };

export interface PaginatedResult<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}
