import { axiosGet, axiosPost } from '@/api/axios';

// 获取供热交费列表
const getChargeList = houseId => {
  return axiosGet('/business/payOrder/' + houseId + '/list');
};

// 获取供热交费详细信息
const getPaymentOrder = orderId => {
  return axiosGet('/payment/order/' + orderId);
};

// 获取供热交费明细详细信息
const getPaymentOrderDetail = detailId => {
  return axiosGet('/payment/order/detail/' + detailId);
};

// 获取供热报修列表
const getRepairList = houseId => {
  return axiosGet('/business/repair/' + houseId + '/finish');
};

// 获取供热投诉列表
const getComplaintList = houseId => {
  return axiosGet('/business/complaint/' + houseId + '/finish');
};

// 获取供热报修、供热投诉详细信息
const getComplaint = compliantId => {
  return axiosGet('/business/complaint/' + compliantId);
};

// 获取供热报修、供热投诉类别
const getComplaintTypeList = compliantCategoryId => {
  return axiosGet('/business/customer/dictionary/' + compliantCategoryId);
};

// 保存供热报修、供热投诉
const saveComplaint = (houseId, params) => {
  return axiosPost('/business/complaint/house/' + houseId, params);
};

// 删除供热报修、供热投诉
const deleteComplaint = compliantId => {
  return axiosGet('/business/complaint/' + compliantId + '/cancel');
};

// 催办供热报修、供热投诉
const urgeComplaint = compliantId => {
  return axiosGet('/business/complaint/' + compliantId + '/urge');
};

// 评价供热报修、供热投诉
const evaluateComplaint = (compliantId, params) => {
  return axiosPost('/business/complaint/' + compliantId + '/assessment', params);
};

// 获取停供申请列表
const getStopHeatingList = houseId => {
  return axiosGet('/business/stop/heating/house/' + houseId + '/finish');
};

// 获取停供申请详细信息
const getStopHeating = stopHeatingId => {
  return axiosGet('/business/stop/heating/' + stopHeatingId);
};

// 验证停供申请
const verifyStopHeating = houseId => {
  return new Promise((resolve, reject) => {
    resolve({
      status: -1,
      data: {
        message: '您好！因已过10月20日最后办理期限，您目前无法发起停供申请。'
      }
    });
  });
  // return axiosGet('/business/stop/heating/limit/house/' + houseId)
};

// 保存停供申请
const saveStopHeating = (houseId, params) => {
  return axiosPost('/business/stop/heating/house/' + houseId, params);
};

// 删除停供申请
const deleteStopHeating = stopHeatingId => {
  return axiosGet('/business/stop/heating/' + stopHeatingId + '/cancel');
};

// 催办停供申请
const urgeStopHeating = stopHeatingId => {
  return axiosGet('/business/stop/heating/' + stopHeatingId + '/urge');
};

// 评价停供申请
const evaluateStopHeating = (stopHeatingId, params) => {
  return axiosPost('/business/stop/heating/' + stopHeatingId + '/assessment', params);
};

// 发送停供协议
const sendStopHeatingProtocol = params => {
  return axiosPost('/business/stop/heating/protocol/mail', params);
};

// 微营业厅-待办业务
const getHouseOrderList = houseId => {
  return axiosGet('/business/commission/house/' + houseId + '/list');
};

// 个人中心-待办业务
const getOrderList = () => {
  return axiosGet('/business/commission/user/list');
};

// 完结业务-业务类别
const getBusinessCategory = houseId => {
  return axiosGet('/business/finish/status/' + houseId);
};

const orderApi = {
  // 供热交费
  getChargeList: getChargeList,
  getPaymentOrder: getPaymentOrder,
  getPaymentOrderDetail: getPaymentOrderDetail,
  // 供热报修、供热投诉
  getRepairList: getRepairList,
  getComplaintList: getComplaintList,
  getComplaint: getComplaint,
  getComplaintTypeList: getComplaintTypeList,
  saveComplaint: saveComplaint,
  deleteComplaint: deleteComplaint,
  urgeComplaint: urgeComplaint,
  evaluateComplaint: evaluateComplaint,
  // 停供申请
  getStopHeatingList: getStopHeatingList,
  getStopHeating: getStopHeating,
  verifyStopHeating: verifyStopHeating,
  saveStopHeating: saveStopHeating,
  deleteStopHeating: deleteStopHeating,
  urgeStopHeating: urgeStopHeating,
  evaluateStopHeating: evaluateStopHeating,
  sendStopHeatingProtocol: sendStopHeatingProtocol,
  // 待办业务
  getHouseOrderList: getHouseOrderList,
  getOrderList: getOrderList,
  // 完结业务
  getBusinessCategory: getBusinessCategory
};

export default orderApi;
