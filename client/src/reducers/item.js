import { FETCH_ITEMS_BY_CATEGORY, FETCH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  items: [],
  errorMessage: ''
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_ITEMS_BY_CATEGORY:
      return { ...state, items: action.payload };
    case FETCH_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}