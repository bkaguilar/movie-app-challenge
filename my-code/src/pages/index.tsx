import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { API_KEY } from '../constants';
import React, { useState, useEffect } from 'react';
import Layout from '@components/Layout/Layout';
import Card from '@components/Card/Card';

const Home = (props) => {
  // const [hasError, setErrors] = useState(false);
  // const [moviesSearch, setMoviesSearch] = useState();
  // const [search, setSearch] = useState('');

  // const fetchData = async () => {
  //   const res = await fetch(`http://www.omdbapi.com/?s=${search}&${API_KEY}&s`);
  //   res
  //     .json()
  //     .then((res) => setMoviesSearch(res.Search))
  //     .catch((err) => setErrors(err));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [search]);

  return (
    <Layout test={test}>
      <main className="Home"></main>
      <style jsx>{`
        .Home {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        }
      `}</style>
    </Layout>
  );
};

export default Home;
