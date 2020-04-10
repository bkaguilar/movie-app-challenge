import React, { useReducer, useState } from 'react';
import Link from 'next/link';
import Cover from '../assets/cinema-svg.svg';
import Warning from '../assets/warning.svg';
import { BORDER, COLORS, PADDING, ANIMATION } from '../styles/variables';
import { API_URL, API_KEY } from '../constants';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';
import Spinner from '@components/Spinner/Spinner';
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
          <Spinner />
        ) : errorMessage && search ? (
          <figure className="Home__error">
            <Warning height="60%" width="100%" />
            <p className="Home__error__text">{errorMessage}</p>
          </figure>
        ) : search ? (
          <>
            {movies.map((movie: { Title: string; Poster: string; Year: string }, index: number) => (
              <Link key={index} href="/Movies/[id]" as={`/movies/${movie.Title}`}>
                <a href={`/movies/${movie.Title}`} className="Home__a">
                  <Card card={movie} />
                </a>
              </Link>
            ))}
          </>
        ) : (
          <figure className="Home__figure">
            <Cover height="60%" width="100%" />
          </figure>
        )}
      </main>
      <style jsx>{`
        .Home {
          min-height: 350px;
          padding: 50px ${PADDING.LAYOUT} 100px ${PADDING.LAYOUT};
          display: grid;
          grid-gap: 25px;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }

        .Home__figure,
        .Home__error {
          place-self: center;
          grid-column: 1 / lastline;
          grid-row: firstline / lastline;
          height: 300px;
          width: 100%;
          animation: ${ANIMATION.RULE};
        }

        .Home__error__text {
          width: 50%;
          margin: 0 auto;
          border-radius: ${BORDER.RADIUS};
          color: ${COLORS.MAIN_HIGHLIGHT};
          text-align: center;
          font-weight: bold;
          font-size: 1.4em;
          margin-top: 40px;
          padding: 10px;
          background: ${COLORS.MAIN_HIGHLIGHT_ALPHA};
        }

        .Home__a {
          place-self: center;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
