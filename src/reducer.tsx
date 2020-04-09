import { Istate, Iaction } from './types/reduce';

export const initialState: Istate = {
  movies: [],
  isLoading: false,
  errorMessage: null,
  page: 1,
};

export const reducer = (state: Istate, action: Iaction): Istate => {
  switch (action.type) {
    case 'SEARCH_MOVIES_REQUEST':
      return {
        ...state,
        isLoading: true,
        errorMessage: null,
      };
    case 'SEARCH_MOVIES_SUCCESS':
      return {
        ...state,
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
