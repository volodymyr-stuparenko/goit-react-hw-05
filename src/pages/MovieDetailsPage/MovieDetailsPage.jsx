import { useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  useParams,
  useLocation,
} from 'react-router-dom';
import { fetchTmdbById } from '../../services/MyApi';

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState({});
  const location = useLocation();
  const goBackRef = useRef(location.state ?? '/');

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchTmdbById(moviesId);
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [moviesId]);

  return (
    <div>
      <Link to={goBackRef.current}>Go back</Link>
      <h2>{movies.title}</h2>
      <p>{movies.id}</p>
      <div>
        <hr />
        <p>Additional information</p>
        <nav>
          <ul>
            <li>
              <NavLink to="moviecast">Cast</NavLink>
            </li>
            <li>
              <NavLink to="moviereviews">Revies</NavLink>
            </li>
          </ul>
        </nav>
        <hr />
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
