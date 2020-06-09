import { axiosPost } from '@/api/axios'

const getSignature = params => {
  return axiosPost('/env/jsapi/sign', params)
}

const wxApi = {
  getSignature: getSignature
}

export default wxApi
