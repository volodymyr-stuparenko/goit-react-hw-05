import React from 'react';
import { useParams } from 'react-router-dom';

const MovieReviews = () => {
  const { moviesId } = useParams();
  console.log(moviesId);
  return <div>MovieReviews</div>;
};

export default MovieReviews;
