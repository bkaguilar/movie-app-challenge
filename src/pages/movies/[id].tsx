import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';
import Layout from '@components/Layout/Layout';
import { FONT, BORDER, COLORS, PADDING, ANIMATION, SHADOW } from '../../styles/variables';
import { API_KEY, API_URL } from '../../constants';
import Button from '@components/Button/Button';
import { Children } from 'react';

type MovieProps = {
  movie: {
    Title: string;
    Year: string;
    Poster: string;
    Released: string;
    Runtime: string;
    Genre: string;
    Director: string;
    Writer: string;
    Actors: string;
    Plot: string;
    Language: string;
    Awards: string;
    imdbRating: string;
    Type: string;
    Production: string;
  };
};

const Movie: NextPage<MovieProps> = ({ movie }) => {
  return (
    <Layout>
      <header className="Movie__header">
        <a href="">back</a>
      </header>
      <main className="Movie__main">
        <figure className="Movie__cover">
          <img src={movie.Poster} alt={movie.Title} title={movie.Title} />
        </figure>
        <div className="Movie__information">
          <h1 className="Movie__title">{movie.Title}</h1>
          <section className="Movie__information__section">
            <Item label="duration" content={movie.Runtime} />
            <Item label="year" content={movie.Year} />
            <Item label="genre" content={movie.Genre} />
          </section>
          <section className="Movie__information__section">
            <Item label="IMDb Rating" content={movie.imdbRating} />
            <Button value="Add to favourites" icon="<3" className="Button--movie" />
          </section>
          <section className="Movie__information__section">
            <Item label="plot" content={movie.Plot} paragraph />
          </section>
          <section className="Movie__information__section">
            <Item label="director" content={movie.Director} />
          </section>
        </div>
      </main>
      <style jsx>{`
        .Movie__header,
        .Movie__main {
          padding: ${PADDING.LAYOUT};
        }

        .Movie__main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: auto;
          grid-auto-flow: row;
          grid-gap: 20px;
          // grid-template-areas: 'sidebar cover';
        }

        .Movie__cover {
          width: 400px;
          box-shadow: ${SHADOW.BLACK};
        }

        .Movie__cover img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .Movie__information {
          padding: 0 10px 0 50px;
        }

        .Movie__title {
          font-family: ${FONT.BITTER}
          font-size: 4em;
          line-height: 1;
          margin-bottom: 50px;
        }

        .Movie__information__section {
          display: flex;
          align-items: center;
          margin-bottom: 20px;
        }
      `}</style>
    </Layout>
  );
};

type ItemProps = {
  label: string;
  content: string;
  paragraph?: boolean;
};

const Item: React.FC<ItemProps> = ({ label, content, paragraph = false }) => {
  return (
    <div className="Item">
      <span className="Item__label">{label}</span>
      {paragraph ? (
        <p className="Item__content--paragraph">{content}</p>
      ) : (
        <span className="Item__content">{content}</span>
      )}
      <style jsx>
        {`
          .Item {
            margin-right: 40px;
            display: flex;
            flex-direction: column;
          }

          .Item__label {
            font-size: 0.9em;
            font-weight: bold;
            text-transform: capitalize;
            color: ${COLORS.DARK_ALPHA};
          }

          .Item__content {
            font-weight: bold;
            color: ${COLORS.MAIN_NEGATIVE};
          }

          .Item__content--paragraph {
            font-size: 1.2em;
            text-align: justify;
          }
        `}
      </style>
    </div>
  );
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${API_URL}?i=${id}&plot=full${API_KEY}`);
  const movie = await res.json();
  return { movie };
};

export default Movie;
