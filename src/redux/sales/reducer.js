// import { SET_DATA, SET_SHIPPING_DATA, CLEAR_DATA, SET_STAMPS_DATA, SET_CUSTOMER_ID, 
//           SET_OUTBOUND_STAMP ,CLEAR_SHIPPING_DATA, CLEAR_STAMPS_DATA ,CLEAR_CUSTOMER_ID , CLEAR_OUTBOUND_STAMP} from './actions';

// const initialState = {
//   data: 'Initial Data',
//   shippingData: null,
//   stampsData: null,
//   customerId: null,
//   outboundStamp: null,
// };

// const dataReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case SET_DATA:
//       return { ...state, data: action.payload };
//     case SET_SHIPPING_DATA:
//       return { ...state, shippingData: action.payload };
//     case CLEAR_DATA:
//       return { ...initialState }; // Resets the entire state to initial
//     case SET_STAMPS_DATA:
//       return { ...state, stampsData: action.payload };
//     case SET_CUSTOMER_ID:
//       return { ...state, customerId: action.payload };  
//     case SET_OUTBOUND_STAMP:
//       return { ...state, outboundStamp: action.payload };  

//     case CLEAR_SHIPPING_DATA:
//       return { ...state, shippingData: null }; // Clear specific part of the state
//     case CLEAR_STAMPS_DATA:
//       return { ...state, stampsData: null }; // Clear specific part of the state
//     case CLEAR_CUSTOMER_ID:
//       return { ...state, customerId: null }; // Clear specific part of the state
//     case CLEAR_OUTBOUND_STAMP:
//       return { ...state, outboundStamp: null }; // Clear specific part of the state
//     default:
//       return state;
//   }
// };

// export default dataReducer;

import { SET_DATA } from './actions';
import { SET_SHIPPING_DATA } from './actions';
import { CLEAR_DATA } from './actions';
import { SET_STAMPS_DATA } from './actions';
import { SET_CUSTOMER_ID } from './actions';
import { SET_OUTBOUND_STAMP } from './actions';

const initialState = {
  data: 'Initial Data',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_SHIPPING_DATA:
      return {...state, data: action.payload };
    case CLEAR_DATA:
      return { ...state, data: 'Initial Data'};
    case SET_STAMPS_DATA:
      return {...state, data: action.payload };
    case SET_CUSTOMER_ID:
      return {...state, data: action.payload };  
    case SET_OUTBOUND_STAMP:
      return {...state, data: action.payload };  
    default:
      return state;
  }
  console.log('state',state)
};

export default dataReducer;
