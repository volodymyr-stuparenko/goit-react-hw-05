import css from './MovieList.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const MovieList = ({ trendFilm }) => {
  const location = useLocation();

  return (
    <div>
      <ul className={css.wrapper}>
        {trendFilm.map((item) => (
          <li className={css.listWrapper} key={item.id}>
            <NavLink
              className={css.link}
              state={location}
              to={`/movies/${item.id.toString()}`}
            >
              <div className={css.wrapperBox}>
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.backdrop_path}`}
                  width={300}
                />
                <div className={css.wrapperSpan}>
                  <span>{item.original_title}</span>
                  <span>Data release: {item.release_date}</span>
                  <span>Rating: {item.vote_average.toFixed(1)}</span>
                </div>
              </div>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
