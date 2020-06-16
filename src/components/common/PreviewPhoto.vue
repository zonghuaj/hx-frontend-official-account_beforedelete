<template>
  <div id="content">
    <div class="nav">
      <div class="nav-icon">
        <img src="@/assets/icon/ty_icon_back.png" @click="goBack" />
      </div>
      <span class="nav-title">预览照片</span>
      <div class="nav-btn">
        <span @click="doDelete" v-if="deleteFlag">删除</span>
      </div>
    </div>
    <van-image class="photo" :src="photo" />
  </div>
</template>

<script>
export default {
  name: 'PreviewPhoto',
  props: [
    'photo',
    'deleteFlag'
  ],
  data () {
    return {
    };
  },
  beforeMount: function () {
  },
  mounted: function () {
  },
  methods: {
    goBack: function () {
      this.$emit('goBack');
    },
    doDelete: function () {
      this.$emit('delete');
    }
  }
};
</script>

<style scoped>
.content {
  width: 750px;
  background-color: #f4f5fa;
}

.nav {
  width: 750px;
  background-color: #e3e3e3;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-icon {
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.nav-icon>img {
  width: 20px;
  height: 35px;
}

.nav-title {
  font-size: 36px;
  color: #333333;
}

.nav-btn {
  width: 80px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.nav-btn>span {
  font-size: 28px;
  color: #ff6016;
}

.photo {
  width: 690px;
  margin: 20px 30px 0;
}
</style>
