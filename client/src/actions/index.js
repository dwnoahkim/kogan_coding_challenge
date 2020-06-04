import axios from 'axios';
import { FETCH_ITEMS_BY_CATEGORY, FETCH_ERROR } from './types';

export const fetchItemsByCategory = (category) => async dispatch => {
  try {
    const response = await axios.get('http://wp8m3he1wt.s3-website-ap-southeast-2.amazonaws.com/api/products/1');

    const payload = response.data.object.filter((item) => {
      return item.category === 'Air Conditioners';
    });

    dispatch({
      type: FETCH_ITEMS_BY_CATEGORY, 
      payload
    });
  } catch (e) {
    dispatch({
      type: FETCH_ERROR, 
      payload: 'Failed to fetch items'
    });
  }
}