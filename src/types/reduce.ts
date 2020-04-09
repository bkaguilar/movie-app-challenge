export interface Istate {
  isLoading: boolean;
  movies: [];
  errorMessage: null | string;
  page: number;
}

export interface Iaction {
  type: string;
  payload?: [];
  error?: string;
}
