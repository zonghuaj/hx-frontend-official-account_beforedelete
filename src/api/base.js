import { axiosGet, axiosPost } from '@/api/axios';

// 获取默认房屋提醒次数
const getReminder = () => {
  return axiosGet('/basic/house/binding/remind');
};

// 取消设置默认房屋提醒
const cancelReminder = () => {
  return axiosPost('/basic/house/binding/remind/never');
};

// 设置默认房屋
const setDefaultHouse = (houseId, bindId, params) => {
  return axiosPost('/basic/house/' + houseId + '/binding/' + bindId + '/primary', params);
};

const baseApi = {
  getReminder: getReminder,
  cancelReminder: cancelReminder,
  setDefaultHouse: setDefaultHouse
};

export default baseApi;
