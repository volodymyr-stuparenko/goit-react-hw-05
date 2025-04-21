import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCastById } from '../../services/MyApi';

const MovieCast = () => {
  const { moviesId } = useParams();

  const [cast, setCast] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCastById(moviesId);
        setCast(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [moviesId]);
  console.log(cast);

  return (
    <div>
      <ul>
        {cast.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieCast;
