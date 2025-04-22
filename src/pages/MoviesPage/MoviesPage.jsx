import MovieSearchBar from '../../components/MovieSearchBar/MovieSearchBar';
import MovieList from '../../components/MovieList/MovieList';
import { useEffect, useState } from 'react';
import { fetchSearchMovies } from '../../services/MyApi';
import { Link, useLocation, useSearchParams } from 'react-router-dom';

const MoviesPage = () => {
  const [searchMovies, setSearchMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const handleSubmitMovies = (newValue) => {
    searchParams.set('query', newValue);
    setSearchParams(searchParams);
  };

  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchSearchMovies(query);
        setSearchMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div>
      <MovieSearchBar handleSubmitMovies={handleSubmitMovies} />
      <MovieList trendFilm={searchMovies} />
    </div>
  );
};

export default MoviesPage;
