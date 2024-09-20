export const SET_DATA = 'SET_DATA';
export const SET_SHIPPING_DATA = 'SET_SHIPPING_DATA';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data,
});

export const setShippingData = (data) =>({
  type: SET_SHIPPING_DATA,
  payload: data,
})