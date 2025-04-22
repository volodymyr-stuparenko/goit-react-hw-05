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

  if (!reviews.length) return <p>No reviews found.</p>;

  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <p>
            <strong>Author:</strong> {review.author}
          </p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default MovieReviews;
