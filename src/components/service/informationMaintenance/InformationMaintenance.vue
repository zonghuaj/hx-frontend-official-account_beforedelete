<template>
  <div class="content">
    <div class="nav">
      <img src="@/assets/icon/ty_icon_back.png" @click="goBack" />
      <span>信息维护</span>
    </div>
    <div class="xxwh-list">
      <div class="xxwh-item">
        <div class="xxwh-item-left">
          <img src="@/assets/icon/wh_btn_icon_sj.png" />
          <span>预留手机号维护</span>
        </div>
        <img class="xxwh-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="xxwh-item">
        <div class="xxwh-item-left">
          <img src="@/assets/icon/wh_btn_icon_hz.png" />
          <span>户主信息维护</span>
        </div>
        <img class="xxwh-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
      <div class="xxwh-item">
        <div class="xxwh-item-left">
          <img src="@/assets/icon/wh_btn_icon_fw.png" />
          <span>房屋面积维护</span>
        </div>
        <img class="xxwh-item-right" src="@/assets/icon/ty_icon_more.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InformationMaintenance',
  components: {},
  data () {
    return {
      curHouse: {},
      bindHouse: []
    };
  },
  beforeMount: function () {
    var params = this.$route.params;
    if (Object.keys(params).length === 0) {
      if (sessionStorage.getItem('params')) {
        params = JSON.parse(sessionStorage.getItem('params'));
      }
    }
    this.curHouse = params.curHouse;
    this.bindHouse = params.bindHouse;
  },
  mounted () {
    if (window.history && window.history.pushState) {
      history.pushState(null, null, document.URL);
      window.addEventListener('popstate', this.goBack, false);
    }
  },
  destroyed: function () {
    window.removeEventListener('popstate', this.goBack, false);
  },
  methods: {
    goBack: function () {
      history.pushState(null, null, document.URL);
      this.$router.push({
        name: 'serviceHall',
        params: {
          curHouse: this.curHouse,
          bindHouse: this.bindHouse
        }
      });
    },
    goMobile: function (item) {
      this.$router.push({
        name: 'mobileMaintenance',
        params: {
          curHouse: this.curHouse,
          bindHouse: this.bindHouse
        }
      });
    }
  }
};
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

.xxwh-list {
  width: 690px;
  margin: 0 30px;
}

.xxwh-item {
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

.xxwh-item-left {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.xxwh-item-left>img {
  width: 60px;
  height: 60px;
}

.xxwh-item-left>span {
  font-size: 28px;
  color: #333333;
  margin-left: 20px;
}

.xxwh-item-right {
  width: 18px;
  height: 30px;
}
</style>
