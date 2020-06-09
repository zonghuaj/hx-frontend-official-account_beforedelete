<template>
  <div class="content">
    <div class="nav">
      <img src="@/assets/icon/ty_icon_back.png" @click="goBack" />
      <span>完结业务列表</span>
    </div>
    <house-card :curHouse="curHouse" :bindHouse="bindHouse" @switch="switchHouse"></house-card>
    <div class="wjyw-list">
      <div class="wjyw-item" @click="nav('historyChargeList')" v-if="record.type1 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_jf.png" />
          <span>供热交费记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="nav('historyRepairList')" v-if="record.type2 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_bx.png" />
          <span>供热报修记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="nav('historyComplainList')" v-if="record.type3 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_ts.png" />
          <span>服务投诉记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="nav('historyStopHeatingList')" v-if="record.type4 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_tg.png" />
          <span>停供申请记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="unable" v-if="record.type5 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_ck.png" />
          <span>重开发票记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="unable" v-if="record.type6 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_xx.png" />
          <span>信息认证记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="unable" v-if="record.type7 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_sq.png" />
          <span>发票申请记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="wjyw-item" @click="unable" v-if="record.type8 == 1">
        <div class="wjyw-item-left">
          <img src="@/assets/icon/wj_btn_icon_tf.png" />
          <span>退费申请记录</span>
        </div>
        <img class="wjyw-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
    </div>
  </div>
</template>

<script>
import HouseCard from '@/components/common/HouseCard'
import orderApi from '@/api/order'

export default {
  name: 'HistoryOrderList',
  components: {
    HouseCard
  },
  data () {
    return {
      source: null,
      curHouse: {},
      bindHouse: [],
      record: {}
    }
  },
  beforeMount: function () {
    let params = this.$route.params
    if (Object.keys(params).length === 0) {
      if (sessionStorage.getItem('params')) {
        params = JSON.parse(sessionStorage.getItem('params'))
      }
    }
    this.source = params.source
    this.curHouse = params.curHouse
    this.bindHouse = params.bindHouse
    this.initPage()
  },
  mounted: function () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL)
      window.addEventListener('popstate', this.goBack, false)
    }
  },
  destroyed: function () {
    window.removeEventListener('popstate', this.goBack, false)
  },
  methods: {
    nav: function (routerName) {
      this.$router.push({
        name: routerName,
        params: {
          source: this.source,
          curHouse: this.curHouse,
          bindHouse: this.bindHouse
        }
      })
    },
    goBack: function () {
      history.pushState(null, null, document.URL)
      if (this.source === 'serviceHall') {
        this.$router.push({
          name: 'serviceHall',
          params: {
            curHouse: this.curHouse,
            bindHouse: this.bindHouse
          }
        })
      } else {
        if (this.bindHouse[0].isDefault === 0 && this.bindHouse.length > 1) {
          this.$router.push({
            path: '/chooseRoom',
            query: {
              label: 'historyOrderList'
            }
          })
        } else {
          this.$router.push({
            name: 'profile'
          })
        }
      }
    },
    switchHouse: function (house) {
      if (this.curHouse === house) {
        return
      }
      this.curHouse = house
      this.record = {}
      this.initPage()
    },
    initPage: function () {
      orderApi.getBusinessCategory(this.curHouse.houseId).then(result => {
        if (result.status === 1) {
          this.record = result.data
        } else {
          this.$toast(result.data.message)
        }
      })
    },
    unable: function () {
      this.$toast('功能尚未开放')
    }
  }
}
</script>

<style scoped>
.content {
  width: 750px;
  background-color: #f4f5fa;
  display: flex;
  flex-direction: column;
}

.nav {
  width: 750px;
  background-color: #e3e3e3;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.nav>img {
  width: 20px;
  height: 35px;
}

.nav>span {
  width: 650px;
  font-size: 36px;
  color: #333333;
}

.wjyw-list {
  width: 690px;
  margin: 0 30px;
}

.wjyw-item {
  width: 690px;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.wjyw-item-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.wjyw-item-left>img {
  width: 60px;
  height: 60px;
}

.wjyw-item-left>span {
  font-size: 28px;
  color: #333333;
  margin-left: 20px;
}

.wjyw-item-right {
  width: 18px;
  height: 30px;
}
</style>
