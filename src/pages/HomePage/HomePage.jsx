import { useEffect, useState } from 'react';
import { fetchTmdb } from '../../services/MyApi';
import MovieList from '../../components/MovieList/MovieList';

const HomePage = () => {
  const [trendFilm, setTrendFilm] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    const getData = async () => {
      try {
        const trendFilm = await fetchTmdb(abortController.signal);
        setTrendFilm(trendFilm);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
    return () => {
      abortController.abort();
    };
  }, []);
  console.log(trendFilm);
  return (
    <div>
      <h2>TRANDING TODAY</h2>
      <MovieList trendFilm={trendFilm} />
    </div>
  );
};

export default HomePage;
