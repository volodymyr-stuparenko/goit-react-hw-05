import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate('/');
    }, 4000);
  });

  return <h1>Page not found, wait 4 seconds...</h1>;
};

export default NotFoundPage;
