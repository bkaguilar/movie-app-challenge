import React, { useState } from 'react';
import Link from 'next/link';
import { API_URL, API_KEY } from '../constants';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';

const Home: React.FC = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [page, setPage] = useState(1);

  const handlerInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
    fetchData();
  };

  const fetchData = async () => {
    setIsLoading(true);
    const params = {
      method: 'GET',
    };
    const response = await fetch(`${API_URL}/?s=${search}${API_KEY}&page=${page}`, params);
    response.json().then((data) => {
      if (data.Response === 'True') {
        setErrorMessage(null);
        setMovies(data.Search);
      } else {
        setMovies([]);
        setErrorMessage(data.Error);
      }
    });
    setIsLoading(false);
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
          <figure className="Home__figure">img</figure>
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
          height: 300px;
          width: 100%;
          background: black;
        }
      `}</style>
    </Layout>
  );
};

export default Home;
