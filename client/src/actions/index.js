import axios from 'axios';
import { FETCH_ITEMS_BY_CATEGORY, FETCH_ERROR } from './types';

export const fetchItemsByCategory = (category) => async dispatch => {
  try {
    const response = await axios.post(
      '/api/fetchItems', 
      { category }
    );

    dispatch({
      type: FETCH_ITEMS_BY_CATEGORY, 
      payload : response.data.objects
    });
  } catch (e) {
    dispatch({
      type: FETCH_ERROR, 
      payload: 'Failed to fetch items'
    });
  }
}