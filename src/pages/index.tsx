import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import { ReactComponent as Cover } from '../assets/cinema.svg';
import { API_URL, API_KEY } from '../constants';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';
import { reducer, initialState } from '../reducer';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const { movies, errorMessage, isLoading, page } = state;

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    fetchData();
  };

  const fetchData = async () => {
    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    const params = {
      method: 'GET',
    };

    const response = await fetch(`${API_URL}/?s=${search}${API_KEY}&page=${page}`, params);
    response.json().then((data) => {
      if (data.Response === 'True') {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          payload: data.Search,
        });
      } else {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: data.Error,
        });
      }
    });
  };

  return (
    <Layout handlerInput={handlerInput}>
      <main className="Home">
        {isLoading ? (
          <figure className="Spinner">Loading....</figure>
        ) : errorMessage && search ? (
          <p className="Home__error">{errorMessage}</p>
        ) : search ? (
          <>
            {movies.map((movie: { Title: string }, index: number) => (
              <Link key={index} href="/Movies/[id]" as={`/movies/${movie.Title}`}>
                <a href={`/movies/${movie.Title}`}>
                  <Card card={movie} />
                </a>
              </Link>
            ))}
          </>
        ) : (
          <figure className="Home__figure">
            <Cover />
          </figure>
        )}
      </main>
      <style jsx>{`
        .Home {
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        .Home__figure {
          place-self: center;
          grid-column: 2 / 5;
          grid-row: 1 / lastline;
          height: 500px;
          width: 100%;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
