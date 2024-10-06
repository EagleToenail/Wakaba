export const SET_DATA = 'SET_DATA';//message
export const SET_SHIPPING_DATA = 'SET_SHIPPING_DATA';//
export const CLEAR_DATA = 'CLEAR_DATA';// used all page
export const SET_STAMPS_DATA = 'SET_STAMPS_DATA';//#62 
export const SET_STAMPS_DATA_CLEAR = 'SET_STAMPS_DATA_CLEAR';//#62 
export const SET_CUSTOMER_ID = 'SET_CUSTOMER_ID';//in invoice purchase page
export const SET_OUTBOUND_STAMP = 'SET_OUTBOUND_STAMP';//in inventory list

export const SET_PURCHASE_DATA = 'SET_PURCHASE_DATA'//set purchase data to send receipt
export const SET_PURCHASE_DATA_CLEAR = 'SET_PURCHASE_DATA'//set purchase data to send receipt

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

export const setStampsDataClear = () => ({
  type: SET_STAMPS_DATA_CLEAR,
})

export const setCustomerID = (data) => ({
  type: SET_CUSTOMER_ID,
  payload: data,
})

export const setOutboundStamp = (data) => ({
  type: SET_OUTBOUND_STAMP,
  payload: data,
})

export const setPurchaseInvoice = (purchaseInvoiceData) => ({
  type: SET_PURCHASE_DATA,
  payload: purchaseInvoiceData,
})
export const setPurchaseInvoiceClear = () => ({
  type: SET_PURCHASE_DATA_CLEAR
})
