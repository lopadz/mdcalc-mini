export interface ValidationField {
  field: string;
  message: string;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    fields?: ValidationField[];
  };
}

export interface PaginationMeta {
  total: number;
  limit: number;
  offset: number;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: PaginationMeta;
}
