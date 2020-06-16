import { axiosGet, axiosPost } from '@/api/axios';

const getHouseChargeMonthList = houseId => {
  return axiosGet('/payment/house/' + houseId + '/chargemonth');
};

const getInvoiceList = params => {
  return axiosPost('/invoice/list', params);
};

const sendInvoice = (invoiceId, params) => {
  return axiosPost('/invoice/' + invoiceId + '/mail', params);
};

const invoiceApi = {
  getHouseChargeMonthList: getHouseChargeMonthList,
  getInvoiceList: getInvoiceList,
  sendInvoice: sendInvoice
};

export default invoiceApi;
