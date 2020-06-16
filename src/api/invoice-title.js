import { axiosGet, axiosPost } from '@/api/axios';

const getInvoiceTitleList = invoiceTitleTypeId => {
  return axiosGet('/invoice/title/' + invoiceTitleTypeId + '/type');
};

const saveInvoiceTitle = params => {
  if (params.invoiceTitleLibId) {
    return axiosPost('/invoice/update/' + params.invoiceTitleLibId + '/title', params);
  } else {
    return axiosPost('/invoice/save/title', params);
  }
};

const deleteInvoiceTitle = invoiceTitleId => {
  return axiosPost('/invoice/delete/' + invoiceTitleId + '/title');
};

const queryInvoiceTitle = params => {
  return axiosPost('/invoice/titles', params);
};

const invoiceTitleApi = {
  getInvoiceTitleList: getInvoiceTitleList,
  saveInvoiceTitle: saveInvoiceTitle,
  deleteInvoiceTitle: deleteInvoiceTitle,
  queryInvoiceTitle: queryInvoiceTitle
};

export default invoiceTitleApi;
