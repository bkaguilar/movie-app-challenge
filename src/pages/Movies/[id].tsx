import fetch from 'isomorphic-unfetch';
import { API_KEY } from '../../constants';

const Movie = (props) => {
  return <div>{props.movie.id}</div>;
};

Movie.getInitialProps = async (ctx) => {
  const { id } = ctx.query;
  const res = await fetch(`http://www.omdbapi.com/?i=${id}&${API_KEY}&s`);
  const movie = await res.json();

  return { movie };
};

export default Movie;
