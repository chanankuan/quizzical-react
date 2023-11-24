import axios from 'axios';

export const getQuizData = async (queryObj) => {
axios.defaults.baseURL = 'https://opentdb.com/';
  const params = new URLSearchParams({
    amount: 5,
    ...queryObj,
  });

  const res = await axios.get('/api.php/', {params});
  return res.data.results;
};
