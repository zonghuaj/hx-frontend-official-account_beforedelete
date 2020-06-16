<template>
  <div id="content" class="content">
    <header>
      <i></i>
      <div class="heds-nr"><span>支付完成</span><span>（</span><span>5</span><span>/</span><span>5</span><span>）</span>
      </div>
    </header>
    <div class="pay-success">
      <div class="logo"><img src="../../../assets/icon/logo_pay.png"/></div>
      <div class="pay-remind">
        <img src="../../../assets/icon/pay_img_succeed.png"/>
        <span>订单支付成功！</span>
        <p>请您稍后留意电子发票信息。感谢您的使用！</p>
      </div>
    </div>
    <div class="pay-an">
      <input type="button" name="" id="" value="返回首页" @click="goBack" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'PaySuccess',
  components: {
  },
  data () {
    return {
    };
  },
  created: function () {
    var params = this.$route.params;
    if (Object.keys(params).length === 0) {
      if (sessionStorage.getItem('params')) {
        params = JSON.parse(sessionStorage.getItem('params'));
      }
    }
    this.curHouse = params.curHouse;
    this.bindHouse = params.bindHouse;
  },
  mounted: function () {
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
    }
  }
};
</script>

<style scoped>
#content{
  width: 750px;display: flex;flex-direction: column;
}
.content{
  background-color: #f4f5fa;height: 1206px;
}
header{
   width: 100%;height: 88px;background-color:#e3e3e3;text-align: center;line-height:88px ;position: relative;
}
header i{
  width: 20px;height: 35px;position: absolute;top: 26px;left: 30px;background: url(../../../assets/icon/ty_icon_back.png) no-repeat center;background-size: 20px 36px;
}
header>.heds-nr{
  width: 100%;height: 88px;display: flex;flex-direction: row;justify-content: center;
}
header>.heds-nr>span{
  font-size: 36px;color: #333333;
}
.pay-success{
  width: 690px;height: 880px; margin: 20px 30px 0 30px;border-radius: 10px;background-color: #fff;display: flex;flex-direction: column;
}
.pay-success .logo{
  width: 690px; display: flex;flex-direction: row;justify-content: flex-start;
}
.pay-success .logo>img{
  width: 249px;height: 59px;margin: 40px 0 0 46px;
}
.pay-success .pay-remind{
  width: 690px;display: flex;flex-direction: column;text-align: center;
}
.pay-success .pay-remind>img{
  width: 320px;height: 231px;margin: 100px 185px 0 185px;
}
.pay-success .pay-remind>span{
  font-size: 36px;color: #333;margin-top: 20px;
}
.pay-success .pay-remind>p{
  font-size: 28px;color: #999;margin-top: 30px;
}
.pay-an{
  width: 690px;height: 88px; margin: 30px 30px 0 30px;
}
.pay-an>input{
  width: 690px;height: 88px;border-radius: 10px;font-size: 32px;color: #fff;
  background: -webkit-linear-gradient(left,  #ff8500,#ff6016);
  background: -o-linear-gradient(right, #ff8500,#ff6016);
  background: -moz-linear-gradient(right, #ff8500,#ff6016);
  background: linear-gradient(to right, #ff8500,#ff6016);
}
</style>
