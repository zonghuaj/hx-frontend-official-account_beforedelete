import { axiosGet } from '@/api/axios'

// 供热交费订单状态
const getPaymentOrderStatusList = () => {
  return axiosGet('/dictionary/po_status')
}

// 地区
const getAreaList = () => {
  return axiosGet('/dictionary/areas')
}

// 停供原因
const getReasonList = () => {
  return axiosGet('/dictionary/reason')
}

const dictionaryApi = {
  getPaymentOrderStatusList: getPaymentOrderStatusList,
  getAreaList: getAreaList,
  getReasonList: getReasonList
}

export default dictionaryApi
