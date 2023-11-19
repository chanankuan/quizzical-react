import axios from 'axios';

export const getQuizData = async () => {
  const res = await axios.get('https://opentdb.com/api.php?amount=5');
  // console.log(res.data.results);
  return res.data.results;
};
