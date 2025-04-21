import { Suspense, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchTmdbById } from '../../services/MyApi';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const goBackRef = useRef(location.state?.from || '/movies');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTmdbById(moviesId);
        setMovies(data);
      } catch (error) {
        console.log('Error fetching movie details:', error);
      }
    };
    getData();
  }, [moviesId]);

  if (!movies) return <p>Loading movie...</p>;

  const { poster_path, title, overview, genres, vote_average } = movies;

  return (
    <div>
      <Link to={goBackRef.current}>⬅ Go back</Link>
      <div className={css.poster}>
        {poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w300${poster_path}`}
            alt={title}
            width="300"
          />
        )}
        <div>
          <h2>{title}</h2>
          <p>
            <strong>Rating:</strong> {vote_average}
          </p>
          <p>
            <strong>Overview:</strong> {overview}
          </p>
          <p>
            <strong>Genres:</strong>
            {genres.map((genre) => genre.name).join(', ')}
          </p>
        </div>
      </div>

      <hr />

      <h3>Additional information</h3>
      <ul>
        <li>
          <NavLink to="moviecast">Cast</NavLink>
        </li>
        <li>
          <NavLink to="moviereviews">Reviews</NavLink>
        </li>
      </ul>

      <Suspense fallback={<p>Loading additional info...</p>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetailsPage;
