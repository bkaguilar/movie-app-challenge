import fetch from 'isomorphic-unfetch';
import { NextPage, NextPageContext } from 'next';
import { API_KEY, API_URL } from '../../constants';

type MovieProps = {
  movie: {
    Title: string;
    Year: string;
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
  return <span>{movie.Title}</span>;
};

Movie.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await fetch(`${API_URL}?i=${id}&plot=full${API_KEY}`);
  const movie = await res.json();
  return { movie };
};

export default Movie;
