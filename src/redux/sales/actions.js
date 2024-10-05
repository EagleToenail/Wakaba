export const SET_DATA = 'SET_DATA';//message
export const SET_SHIPPING_DATA = 'SET_SHIPPING_DATA';//
export const CLEAR_DATA = 'CLEAR_DATA';// used all page
export const SET_STAMPS_DATA = 'SET_STAMPS_DATA';//#62 
export const SET_CUSTOMER_ID = 'SET_CUSTOMER_ID';//in invoice purchase page
export const SET_OUTBOUND_STAMP = 'SET_OUTBOUND_STAMP';//in inventory list

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setShippingData = (data) =>({
  type: SET_SHIPPING_DATA,
  payload: data,
})

export const setClearData = () =>({
  type: CLEAR_DATA,
})

export const setStampsData = (data) => ({
  type: SET_STAMPS_DATA,
  payload: data,
})

export const setCustomerID = (data) => ({
  type: SET_CUSTOMER_ID,
  payload: data,
})

export const setOutboundStamp = (data) => ({
  type: SET_OUTBOUND_STAMP,
  payload: data,
})


// actions.js

// export const SET_DATA = 'SET_DATA';
// export const SET_SHIPPING_DATA = 'SET_SHIPPING_DATA';
// export const CLEAR_DATA = 'CLEAR_DATA';
// export const SET_STAMPS_DATA = 'SET_STAMPS_DATA';
// export const SET_CUSTOMER_ID = 'SET_CUSTOMER_ID';
// export const SET_OUTBOUND_STAMP = 'SET_OUTBOUND_STAMP';

// // New clear action types
// export const CLEAR_SHIPPING_DATA = 'CLEAR_SHIPPING_DATA';
// export const CLEAR_STAMPS_DATA = 'CLEAR_STAMPS_DATA';
// export const CLEAR_CUSTOMER_ID = 'CLEAR_CUSTOMER_ID';
// export const CLEAR_OUTBOUND_STAMP = 'CLEAR_OUTBOUND_STAMP';

// Set data actions
// export const setData = (data) => ({
//   type: SET_DATA,
//   payload: data,
// });

// export const setShippingData = (shippingData) => ({
//   type: SET_SHIPPING_DATA,
//   payload: shippingData,
// });

// export const setStampsData = (stampsData) => ({
//   type: SET_STAMPS_DATA,
//   payload: stampsData,
// });

// export const setCustomerId = (customerId) => ({
//   type: SET_CUSTOMER_ID,
//   payload: customerId,
// });

// export const setOutboundStamp = (outboundStamp) => ({
//   type: SET_OUTBOUND_STAMP,
//   payload: outboundStamp,
// });

// // Clear data actions
// export const clearData = () => ({
//   type: CLEAR_DATA,
// });

// export const clearShippingData = () => ({
//   type: CLEAR_SHIPPING_DATA,
// });

// export const clearStampsData = () => ({
//   type: CLEAR_STAMPS_DATA,
// });

// export const clearCustomerId = () => ({
//   type: CLEAR_CUSTOMER_ID,
// });

// export const clearOutboundStamp = () => ({
//   type: CLEAR_OUTBOUND_STAMP,
// });
