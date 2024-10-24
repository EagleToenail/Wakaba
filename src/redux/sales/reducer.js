
import { SET_DATA } from './actions';
import { SET_RSHOP_SHIPPING_DATA } from './actions';
import { SET_SHIPPING_DATA } from './actions';
import { SET_INVOICE_DATA } from './actions';
import { CLEAR_DATA } from './actions';
import { SET_STAMPS_DATA } from './actions';
import { SET_STAMPS_DATA_CLEAR } from './actions';
import { SET_CUSTOMER_ID } from './actions';
import { SET_OUTBOUND_STAMP } from './actions';

import { SET_PURCHASE_DATA } from './actions';
import { SET_PURCHASE_DATA_CLEAR } from './actions';


const initialState = {
  data: 'Initial Data',
  purchaseInvoiceData:'Initial Data',
  stampData:'Initial Data',     // purchase stamps
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_RSHOP_SHIPPING_DATA:
      return {...state, data: action.payload };
    case SET_SHIPPING_DATA:
      return {...state, data: action.payload };
    case SET_INVOICE_DATA:
      return {...state, data: action.payload };
    case CLEAR_DATA:
      return { ...state, data: 'Initial Data'};
    case SET_STAMPS_DATA:
      return {...state, data: action.payload };
    case SET_STAMPS_DATA_CLEAR:
      return {...state, stampData: 'Initial Data' };
    case SET_CUSTOMER_ID:
      return {...state, data: action.payload };  
    case SET_OUTBOUND_STAMP:
      return {...state, data: action.payload };  

    case SET_PURCHASE_DATA:
      return {...state, purchaseInvoiceData: action.payload };  
    case SET_PURCHASE_DATA_CLEAR:
      return {...state, purchaseInvoiceData: 'Initial Data' };  
    default:
      return state;
  }
};

export default dataReducer;
