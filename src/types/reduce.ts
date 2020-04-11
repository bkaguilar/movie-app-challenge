export interface Istate {
  isLoading: boolean;
  movies: [];
  errorMessage: null | string;
  totalResult: number;
}

export interface Iaction {
  type: string;
  payload?: [];
  error?: string;
  total?: number;
}
