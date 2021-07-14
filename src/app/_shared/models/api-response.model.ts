export interface ApiResponse<T> {
  data: T;
  errors: string[];
  hasError: boolean;
  errorsCount: number;
  responseCode: number;
}
