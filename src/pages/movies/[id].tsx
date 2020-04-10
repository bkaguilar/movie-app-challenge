import fetch from 'isomorphic-unfetch';
import Link from 'next/link';
import { NextPage, NextPageContext } from 'next';
import Layout from '@components/Layout/Layout';
import { FONT, COLORS, PADDING, SHADOW, BORDER, TRANSITION } from '../../styles/variables';
import { API_KEY, API_URL, DEFAULT_POSTER_PLACEHOLDER } from '../../constants';
import Button from '@components/Button/Button';
import Heart from '../../assets/icons/heart.svg';
import Arrow from '../../assets/icons/arrow.svg';

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
  const posterPlaceholder = movie.Poster === 'N/A' ? DEFAULT_POSTER_PLACEHOLDER : movie.Poster;
  return (
    <Layout>
      <header className="Movie__header">
        <Link href="/">
          <a href="/" className="Movie__header__back">
            <Arrow className="ArrowIcon" fill={COLORS.MAIN_HIGHLIGHT} width="24px" />
            back
          </a>
        </Link>
      </header>
      <main className="Movie__main">
        <figure className="Movie__cover">
          <img src={posterPlaceholder} alt={movie.Title} title={movie.Title} />
        </figure>
        <h1 className="Movie__title">{movie.Title}</h1>
        <div className="Movie__information">
          <section className="Movie__information__section">
            <Item label="duration" content={movie.Runtime} />
            <Item label="year" content={movie.Year} />
            <Item label="genre" content={movie.Genre} />
          </section>
          <section className="Movie__information__section">
            <Item label="IMDb Rating" content={movie.imdbRating} />
          </section>
          <Button
            value="Add to favourites"
            activeValue="Added"
            icon={<Heart />}
            className="Button--movie"
            title="Add"
          />
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
          padding: 30px ${PADDING.LAYOUT};
        }

        .Movie__header__back {
          width: 110px;
          padding: 10px;
          border-radius: ${BORDER.RADIUS};
          text-transform: uppercase;
          color: ${COLORS.DARK};
          font-weight: bold;
          transition: ${TRANSITION.LINEAR};
          display: flex;
          align-items:center;
          justify-content: space-around;
        }

        .Movie__header__back:hover {
          background: ${COLORS.MAIN_HIGHLIGHT_ALPHA};
          color: ${COLORS.MAIN_HIGHLIGHT};
        }

        .Movie__main {
          display: grid;
          grid-template-columns: 1fr 2fr;
          grid-template-rows: auto auto;
          grid-gap: 20px;
          grid-template-areas:
            "poster title"
            "poster content";
        }

        .Movie__cover {
          grid-area: poster;
          place-self:center;
          width: 100%;
          height: 100%;
          border-radius: ${BORDER.RADIUS};
          overflow: hidden;
          box-shadow: ${SHADOW.BLACK};
        }

        .Movie__cover img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }

        .Movie__title {
          grid-area: title;
          font-family: ${FONT.BITTER}
          font-size: 3em;
          line-height: 1;
          padding: 0 10px 0 50px;
        }

        .Movie__information {
          grid-area: content;
          padding: 0 10px 0 50px;
        }

        .Movie__information__section {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          margin-bottom: 20px;
        }

        @media only screen and (max-width: 768px) {
          .Movie__main, .Movie__header {
            padding: 10px;
          }

          .Movie__main {
            grid-template-columns: 1fr;
            grid-template-rows: auto auto auto;
            grid-template-areas:
            "title"
            "poster"
            "content";
          }

          .Movie__title{
            text-align: center;
          }

          .Movie__title, .Movie__information {
            padding: 10px;
          }

          .Movie__cover {
            width: 250px;
          }
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
            font-size: 1.1em;
            text-align: justify;
          }

          @media only screen and (max-width: 768px) {
            .Item {
              margin: 10px;
            }
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
