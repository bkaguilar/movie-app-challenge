import React from 'react';

interface Istate {
  isLoading: boolean;
  movies: [];
  errorMessage: null | string;
  page: number;
}

interface Iaction {
  type: string;
  payload?: [];
  error?: string;
}

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
