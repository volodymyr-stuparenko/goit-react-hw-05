import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
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

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map((item) => (
        <Link to={item.url} key={item.id}>
          <li key={item.id}>{item.author}</li>
        </Link>
      ))}
    </ul>
  );
};

export default MovieReviews;
