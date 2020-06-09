import Vue from 'vue'
import Router from 'vue-router'
import ServiceHall from '@/components/ServiceHall'
import Profile from '@/components/Profile'
import EditInvoice from '@/components/order/charge/EditInvoice'
import ConfirmOrder from '@/components/order/charge/ConfirmOrder'
import OweList from '@/components/order/charge/OweList'
import ValidateName from '@/components/order/charge/ValidateName'
import PayOrder from '@/components/order/charge/PayOrder'
import PaySuccess from '@/components/order/charge/PaySuccess'
import PayFailure from '@/components/order/charge/PayFailure'
import AddRepair from '@/components/order/AddRepair'
import AddComplain from '@/components/order/AddComplain'
import AddStopHeating from '@/components/order/AddStopHeating'
import ConfirmStopHeating from '@/components/order/ConfirmStopHeating'
import OrderList from '@/components/order/OrderList'
import ChargeForm from '@/components/order/ChargeForm'
import RepairForm from '@/components/order/RepairForm'
import ComplainForm from '@/components/order/ComplainForm'
import StopHeatingForm from '@/components/order/StopHeatingForm'
import HistoryOrderList from '@/components/order/HistoryOrderList'
import HistoryChargeList from '@/components/order/HistoryChargeList'
import HistoryChargeForm from '@/components/order/HistoryChargeForm'
import HistoryRepairList from '@/components/order/HistoryRepairList'
import HistoryRepairForm from '@/components/order/HistoryRepairForm'
import HistoryComplainList from '@/components/order/HistoryComplainList'
import HistoryComplainForm from '@/components/order/HistoryComplainForm'
import HistoryStopHeatingList from '@/components/order/HistoryStopHeatingList'
import HistoryStopHeatingForm from '@/components/order/HistoryStopHeatingForm'
import BusinessList from '@/components/service/business/BusinessList'
import Area from '@/components/service/business/Area'
import MyMaintenance from '@/components/service/maintenance/MyMaintenance'
import MaintenanceList from '@/components/service/maintenance/MaintenanceList'
import TimeArea from '@/components/service/maintenance/TimeArea'
import InvoiceList from '@/components/profile/invoice/InvoiceList'
import PreviewInvoice from '@/components/profile/invoice/PreviewInvoice'
import InvoiceTitleList from '@/components/profile/invoiceTitle/InvoiceTitleList'
import InvoiceTitleForm from '@/components/profile/invoiceTitle/InvoiceTitleForm'
import InformationMaintenance from '@/components/service/informationMaintenance/InformationMaintenance'
import MobileMaintenance from '@/components/service/informationMaintenance/MobileMaintenance'
import ChooseRoom from '../components/house/ChooseRoom'
import Card from '../components/house/Card'
import Address from '../components/house/Address'
import Company from '../components/house/Company'
import blueAddress from '../components/house/BlueAddress'
import floorNumber from '../components/house/FloorNumber'
import phoneNumber from '../components/house/PhoneNumber'
import HouseList from '../components/house/HouseList'
import EditHouse from '../components/house/EditHouse'
import AboutUs from '@/components/other/AboutUs'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [{
    path: '/',
    redirect: '/homePage',
    meta: {
      title: '366e生活',
      keepAlive: false
    }
  }, {
    path: '/serviceHall',
    name: 'serviceHall',
    component: ServiceHall,
    meta: {
      title: '微营业厅',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
      title: '个人中心',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/editInvoice',
    name: 'editInvoice',
    component: EditInvoice,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/confirmOrder',
    name: 'confirmOrder',
    component: ConfirmOrder,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/oweList',
    name: 'oweList',
    component: OweList,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/validateName',
    name: 'validateName',
    component: ValidateName,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/payOrder',
    name: 'payOrder',
    component: PayOrder,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/paySuccess',
    name: 'paySuccess',
    component: PaySuccess,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/payFailure',
    name: 'payFailure',
    component: PayFailure,
    meta: {
      title: '供热交费',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/addRepair',
    name: 'addRepair',
    component: AddRepair,
    meta: {
      title: '供热报修',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/addComplain',
    name: 'addComplain',
    component: AddComplain,
    meta: {
      title: '供热投诉',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/addStopHeating',
    name: 'addStopHeating',
    component: AddStopHeating,
    meta: {
      title: '停供申请',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/confirmStopHeating',
    name: 'confirmStopHeating',
    component: ConfirmStopHeating,
    meta: {
      title: '停供申请',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/orderList',
    name: 'orderList',
    component: OrderList,
    meta: {
      title: '待办业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/chargeForm',
    name: 'chargeForm',
    component: ChargeForm,
    meta: {
      title: '待办业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/repairForm',
    name: 'repairForm',
    component: RepairForm,
    meta: {
      title: '待办业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/complainForm',
    name: 'complainForm',
    component: ComplainForm,
    meta: {
      title: '待办业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/stopHeatingForm',
    name: 'stopHeatingForm',
    component: StopHeatingForm,
    meta: {
      title: '待办业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyOrderList',
    name: 'historyOrderList',
    component: HistoryOrderList,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyChargeList',
    name: 'historyChargeList',
    component: HistoryChargeList,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyChargeForm',
    name: 'historyChargeForm',
    component: HistoryChargeForm,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyRepairList',
    name: 'historyRepairList',
    component: HistoryRepairList,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyRepairForm',
    name: 'historyRepairForm',
    component: HistoryRepairForm,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyComplainList',
    name: 'historyComplainList',
    component: HistoryComplainList,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyComplainForm',
    name: 'historyComplainForm',
    component: HistoryComplainForm,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyStopHeatingList',
    name: 'historyStopHeatingList',
    component: HistoryStopHeatingList,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/historyStopHeatingForm',
    name: 'historyStopHeatingForm',
    component: HistoryStopHeatingForm,
    meta: {
      title: '完结业务',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/businessList',
    name: 'businessList',
    component: BusinessList,
    meta: {
      title: '客服大厅',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/area',
    name: 'area',
    component: Area,
    meta: {
      title: '客服大厅',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/myMaintenance',
    name: 'myMaintenance',
    component: MyMaintenance,
    meta: {
      title: '换热站点',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/maintenanceList',
    name: 'maintenanceList',
    component: MaintenanceList,
    meta: {
      title: '换热站点',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/timeArea',
    name: 'timeArea',
    component: TimeArea,
    meta: {
      title: '换热站点',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/invoiceList',
    name: 'invoiceList',
    component: InvoiceList,
    meta: {
      title: '发票查询',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/previewInvoice',
    name: 'previewInvoice',
    component: PreviewInvoice,
    meta: {
      title: '发票查询',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/invoiceTitleList',
    name: 'invoiceTitleList',
    component: InvoiceTitleList,
    meta: {
      title: '发票抬头',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/invoiceTitleForm',
    name: 'invoiceTitleForm',
    component: InvoiceTitleForm,
    meta: {
      title: '发票抬头',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/informationMaintenance',
    name: 'informationMaintenance',
    component: InformationMaintenance,
    meta: {
      title: '信息维护',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/mobileMaintenance',
    name: 'mobileMaintenance',
    component: MobileMaintenance,
    meta: {
      title: '信息维护',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/chooseRoom',
    component: ChooseRoom,
    children: [
      {
        path: '/card',
        name: 'card',
        component: Card
      },
      {
        path: '/address',
        name: 'address',
        component: Address
      },
      {
        path: '/blueAddress',
        name: 'blueAddress',
        component: blueAddress
      },
      {
        path: '/floorNumber',
        name: 'floorNumber',
        component: floorNumber
      },
      {
        path: '/phoneNumber',
        name: 'phoneNumber',
        component: phoneNumber
      }
    ],
    meta: {
      title: '房屋列表'
    }
  }, {
    path: '/houseList',
    name: 'houseList',
    component: HouseList,
    meta: {
      title: '房屋列表',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/editHouse',
    name: 'editHouse',
    component: EditHouse,
    meta: {
      title: '房屋列表',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/company',
    name: 'company',
    component: Company,
    meta: {
      title: '房屋列表',
      keepAlive: true,
      isBack: false
    }
  }, {
    path: '/aboutUs',
    name: 'aboutUs',
    component: AboutUs,
    meta: {
      title: '关于我们',
      keepAlive: true,
      isBack: false
    }
  }],
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition || typeof savedPosition === 'undefined') {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : false
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : true
      if (savedPosition) {
        return savedPosition
      }
    } else {
      from.meta.isKeepAlive = typeof from.meta.isKeepAlive === 'undefined' ? undefined : true
      to.meta.isKeepAlive = typeof to.meta.isKeepAlive === 'undefined' ? undefined : false
    }
  }
})
