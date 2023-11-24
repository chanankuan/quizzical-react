import axios from 'axios';

export const getCategoryList = async () => {
  const res = await axios.get('https://opentdb.com/api_category.php');
  return res.data.trivia_categories;
};
