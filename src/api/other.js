import { axiosGet } from '@/api/axios';

const getCompany = () => {
  return axiosGet('/company');
};

const getPartnerList = () => {
  return axiosGet('/company');
};

const otherApi = {
  getCompany: getCompany,
  getPartnerList: getPartnerList
};

export default otherApi;
