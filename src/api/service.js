import { axiosGet, axiosPost } from '@/api/axios';

const getHouseMaintenanceList = houseId => {
  return axiosGet('/business/' + houseId + '/repairnetwork');
};

const getCompanyList = () => {
  return axiosGet('/company');
};

const getOutletsList = params => {
  return axiosPost('/business/outlets', params);
};

const serviceApi = {
  getHouseMaintenanceList: getHouseMaintenanceList,
  getCompanyList: getCompanyList,
  getOutletsList: getOutletsList
};

export default serviceApi;
