
import { SET_DATA } from './actions';
import { SET_INVOICE_DATA } from './actions';
import { SET_INVOICE_ID } from './actions';
import { SET_RSHOP_SHIPPING_DATA } from './actions';
import { SET_SHIPPING_DATA } from './actions';
import { SET_STAMPS_DATA } from './actions';
import { SET_CUSTOMER_ID } from './actions';
import { SET_OUTBOUND_STAMP } from './actions';


const initialState = {
  data: 'Initial Data',
  invoiceData: '',
  invoiceId: '',
  shippingData: '',
  rshopShippingData: '',
  stampData:'',
  customerId: '',
  outboundStamp: '', 
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return { ...state, data: action.payload };
    case SET_INVOICE_DATA:
      return {...state, invoiceData: action.payload };
    case SET_INVOICE_ID:
      return {...state, invoiceId: action.payload };
    case SET_SHIPPING_DATA:
      return {...state, shippingData: action.payload };
    case SET_RSHOP_SHIPPING_DATA:
      return {...state, rshopShippingData: action.payload };
    case SET_STAMPS_DATA:
      return {...state, stampData: action.payload };
    case SET_CUSTOMER_ID:
      return {...state, customerId: action.payload };  
    case SET_OUTBOUND_STAMP:
      return {...state, outboundStamp: action.payload };  
    default:
      return state;
  }
};

export default dataReducer;
