import { SET_DATA } from './actions';
import { SET_SHIPPING_DATA } from './actions';

const initialState = {
  data: 'Initial Data',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_SHIPPING_DATA:
      return {...state, data: action.payload };
    default:
      return state;
  }
  console.log('state',state)
};

export default dataReducer;