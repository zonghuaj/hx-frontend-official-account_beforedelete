import axios from 'axios'

/* 取得用户绑定的房屋列表 */
export const houseBind = params => { return axios.get(`/basic/house/binding`, params) }
/* 取得供热公司列表 */
export const getCompany = () => { return axios.get(`/company`) }
/* 取得指定供热公司支持的房屋查询方式 */
export const getSearchMethod = params => { return axios.get(`/company/` + params + `/house_search_methods`) }
/* 根据供热卡号筛选房屋 */
export const getCardHouse = params => { return axios.post(`/basic/house/type/card_code`, params) }
/* 根据房屋地址筛选房屋列表 */
export const getAddressHouse = params => { return axios.post(`/basic/house/type/address`, params) }
/* 根据输入动态返回蓝牌地址列表 */
export const getBlueAddress = params => { return axios.post(`/basic/house/live/blue_address`, params) }
/* 根据蓝牌地址筛选房屋列表 */
export const getBlueAddressHouse = (id, params) => { return axios.post(`/basic/building/` + id + `/house`, params) }
/* 根据输入动态返回小区名称列表 */
export const getRegion = params => { return axios.post(`/basic/live/region`, params) }
/* 根据数据的小区取得大楼楼号列表 */
export const getBuildingNumber = params => { return axios.get(`/basic/region/` + params + `/building/code`) }
/* 根据选择的大楼楼号取得单元号列表 */
export const getBuildingUnit = params => { return axios.get(`/basic/building/` + params + `/unit`) }
/* 根据选择的单元号取得楼层列表 */
export const getBuildingFloor = (id, params) => { return axios.post(`/basic/building/` + id + `/unit/floor`, params) }
/* 根据选择的楼层取得房间号列表 */
export const getBuildingHouseNumber = (id, params) => { return axios.post(`/basic/building/` + id + `/unit/floor/house_number`, params) }
/* 向指定的手机号发送房屋搜索业务的验证码 */
export const postVerifyCode = params => { return axios.post(`/basic/house/verify_code`, params) }
/* 根据输入的手机号和验证码筛选房屋列表 */
export const getMoblieHouse = params => { return axios.post(`/basic/house/type/mobile`, params) }
/* 绑定房屋 */
export const modifyHouse = (id, type, params) => { return axios.post(`/basic/house/` + id + `/binding/` + type, params) }
/* 删除房屋 */
export const deleteHouse = params => { return axios.post(`/basic/house/unbinding/` + params) }
/* 获取绑定类型 */
export const getBindType = params => { return axios.get(`/dictionary/bind_type`, params) }
/* 保存 */
export const houseSave = (id, params) => { return axios.post(`/basic/house/binding/` + id, params) }
