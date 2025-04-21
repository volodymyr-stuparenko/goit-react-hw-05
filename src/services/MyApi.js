import axios from 'axios';

export const fetchTmdb = async (signal) => {
  const url = 'https://api.themoviedb.org/3/trending/movie/day?language=en-US';

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEyNDhmNjYxNmE5MWIzYWExZTZhOTBkNmMzMjRkYiIsIm5iZiI6MTc0NTA2MTI4My42OTYsInN1YiI6IjY4MDM4NWEzYjEzNDEwY2RjNzk5M2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eOcaR5tI_xjlW_G7e64BuDyaAWnPKAgCBQs37Iv1sc',
    },
  };

  try {
    const response = await axios.get(url, options, { signal });
    return response.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const fetchTmdbById = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEyNDhmNjYxNmE5MWIzYWExZTZhOTBkNmMzMjRkYiIsIm5iZiI6MTc0NTA2MTI4My42OTYsInN1YiI6IjY4MDM4NWEzYjEzNDEwY2RjNzk5M2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eOcaR5tI_xjlW_G7e64BuDyaAWnPKAgCBQs37Iv1sc',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data;
  } catch (error) {
    console.log(error);
    console.log('Error Api');
  }
};

export const fetchCastById = async (paramId) => {
  const url = `https://api.themoviedb.org/3/movie/${paramId}/credits?language=en-US`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEyNDhmNjYxNmE5MWIzYWExZTZhOTBkNmMzMjRkYiIsIm5iZiI6MTc0NTA2MTI4My42OTYsInN1YiI6IjY4MDM4NWEzYjEzNDEwY2RjNzk5M2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eOcaR5tI_xjlW_G7e64BuDyaAWnPKAgCBQs37Iv1sc',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.cast;
  } catch (error) {
    console.log(error);
    console.log('Error Api');
  }
};

export const fetchReviewsById = async (moviesId) => {
  const url = `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEyNDhmNjYxNmE5MWIzYWExZTZhOTBkNmMzMjRkYiIsIm5iZiI6MTc0NTA2MTI4My42OTYsInN1YiI6IjY4MDM4NWEzYjEzNDEwY2RjNzk5M2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eOcaR5tI_xjlW_G7e64BuDyaAWnPKAgCBQs37Iv1sc',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
    console.log('Error Api');
  }
};

export const fetchSerchMovies = async (query) => {
  const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;

  const options = {
    headers: {
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OGEyNDhmNjYxNmE5MWIzYWExZTZhOTBkNmMzMjRkYiIsIm5iZiI6MTc0NTA2MTI4My42OTYsInN1YiI6IjY4MDM4NWEzYjEzNDEwY2RjNzk5M2ZhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2eOcaR5tI_xjlW_G7e64BuDyaAWnPKAgCBQs37Iv1sc',
    },
  };

  try {
    const response = await axios.get(url, options);
    return response.data.results;
  } catch (error) {
    console.log(error);
    console.log('Error Api');
  }
};
