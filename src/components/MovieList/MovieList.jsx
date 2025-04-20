import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ trendFilm }) => {
  return (
    <div>
      <ul>
        {trendFilm.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id.toString()}`}>
              {item.original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MovieList;
