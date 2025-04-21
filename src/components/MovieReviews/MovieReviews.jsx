import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchReviewsById } from '../../services/MyApi';

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchReviewsById(moviesId);
        setReviews(data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [moviesId]);

  return (
    <ul>
      {reviews.map((item) => (
        <li key={item.id}>{item.author}</li>
      ))}
    </ul>
  );
};

export default MovieReviews;
