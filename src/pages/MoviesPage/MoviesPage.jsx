import MovieSearchBar from '../../components/MovieSearchBar/MovieSearchBar';
import { useEffect, useState } from 'react';
import { fetchSerchMovies } from '../../services/MyApi';

const MoviesPage = () => {
  const [serchMovies, setSerchMovies] = useState([]);
  const [query, setQuery] = useState('');

  const handleSubmitMovies = (newValue) => {
    setQuery(newValue);
  };
  useEffect(() => {
    if (!query) return;

    const getData = async () => {
      try {
        const data = await fetchSerchMovies(query);
        setSerchMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [query]);

  return (
    <div>
      <MovieSearchBar handleSubmitMavies={handleSubmitMovies} />
      <ul>
        {serchMovies.map((item) => (
          <li key={item.id}>{item.original_title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MoviesPage;
