import axios from 'axios';
import { FETCH_ITEMS_BY_CATEGORY, FETCH_ERROR } from './types';

export const fetchItemsByCategory = (category) => async dispatch => {
  try {
    const response = await axios.post(
      '/api/fetchItems', 
      { category }
    );

    let { objects } = response.data;
    // Calculate objects' cubic weight
    objects.map(obj => {
      const conversionFactor = 250;
      let { width, length, height } = obj.size;
      let cubicWeight = 0;

      // Unit conversion : cm to m
      width *= 0.01;
      length *= 0.01;
      height *= 0.01;

      // calculate cubic weight
      cubicWeight = (width * length * height) * conversionFactor;
      
      // Unit conversion : kg to g to match with weight
      cubicWeight = Math.round(cubicWeight * 1000);

      obj.cubicWeight = cubicWeight;
    });

    dispatch({
      type: FETCH_ITEMS_BY_CATEGORY, 
      payload : objects
    });
  } catch (e) {
    dispatch({
      type: FETCH_ERROR, 
      payload: 'Failed to fetch items'
    });
  }
}