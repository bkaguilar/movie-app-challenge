import React, { useReducer, useState, useEffect } from 'react';
import Link from 'next/link';
import Cover from '../assets/cinema-svg.svg';
import Warning from '../assets/warning.svg';
import { BORDER, COLORS, PADDING, ANIMATION } from '../styles/variables';
import { API_URL, API_KEY } from '../constants';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';
import Spinner from '@components/Spinner/Spinner';
import Header from '@components/Header/Header';
import Pagination from '@components/Pagination/Pagination';
import { reducer, initialState } from '../reducer';

const Home: React.FC = () => {
  const [search, setSearch] = useState('');
  const [state, dispatch] = useReducer(reducer, initialState);
  const [page, setPage] = useState(1);
  const { movies, errorMessage, isLoading, totalResult } = state;

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    fetchData();
  };

  const totalPages = () => {
    return Math.ceil(totalResult / 10);
  };

  const handlerPage = (num: number) => {
    setPage((prevPage) => {
      return prevPage + num;
    });
  };

  const fetchData = async () => {
    const controller = new AbortController();
    const { signal } = controller;

    dispatch({
      type: 'SEARCH_MOVIES_REQUEST',
    });

    const response = await fetch(`${API_URL}?s=${search}${API_KEY}&page=${page}`, { signal });
    response.json().then((data) => {
      if (data.Response === 'True') {
        dispatch({
          type: 'SEARCH_MOVIES_SUCCESS',
          total: data.totalResults,
          payload: data.Search,
        });
        controller.abort();
      } else {
        dispatch({
          type: 'SEARCH_MOVIES_FAILURE',
          error: data.Error,
        });
      }
    });
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <Layout>
      <Header handlerInput={handlerInput} />
      <Pagination showPrevLink={page > 1} showNextLink={totalPages() > page} handlerPage={handlerPage} />
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
            {movies.map((movie: { Title: string; Poster: string; Year: string; imdbID: string }, index: number) => (
              <Link key={index} href="/movies/[id]" as={`/movies/${movie.imdbID}`}>
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
          min-height: 550px;
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

        @media only screen and (max-width: 768px) {
          .Home {
            padding: 10px;
          }

          .Home__error__text {
            width: 100%;
            font-size: 1em;
          }
        }
      `}</style>
    </Layout>
  );
};

export default Home;
