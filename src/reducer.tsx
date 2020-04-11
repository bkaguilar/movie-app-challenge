import { Istate, Iaction } from './types/reduce';

export const initialState: Istate = {
  movies: [],
  isLoading: false,
  errorMessage: null,
  totalResult: 0,
};

export const reducer = (state: Istate, action: Iaction): Istate => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        totalResult: 0,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
        totalResult: action.total!,
        isLoading: false,
        movies: action.payload!,
      };
    case 'SEARCH_MOVIES_FAILURE':
      return {
        ...state,
        isLoading: false,
        errorMessage: action.error!,
      };
    default:
      return state;
  }
};
