<template>
  <div id="content">
    <div class="search">
      <div class="house-company">
        <span class="house-company-left">供热公司</span>
        <span class="house-company-right">{{company.companyName}}</span>
      </div>
      <div class="house-region">
        <span class="house-region-left">小区名称</span>
        <el-autocomplete class="house-region-right" placeholder="请输入小区名称中的关键字" v-model="regionName" value-key="regionName" :fetch-suggestions="querySearchAsync" :trigger-on-focus="false" @select="handleSelect">
        </el-autocomplete>
      </div>
      <div class="house-building">
        <span class="house-building-left">楼宇编号</span>
        <div class="house-building-right">
          <span>{{buildingCode}}</span>
          <img src="@/assets/icon/ty_icon_pull_down.png" @click="showBuilding" />
        </div>
      </div>
      <van-popup v-model="showBuildingPopup">
        <span>请选择楼宇编号</span>
        <van-radio-group v-model="buildingCode">
          <van-cell-group>
            <van-cell :title-style="buildingCode == item ? 'color: #ff6016;' : ''" :title="item" clickable center @click="selectBuilding(item)" v-for="(item, index) in buildingCodeList" :key="index">
              <van-radio :name="item">
                <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" />
              </van-radio>
            </van-cell>
          </van-cell-group>
        </van-radio-group>
      </van-popup>
      <div class="house-dylcfh">
        <div class="house-unit">
          <span class="house-unit-left">单元</span>
          <div class="house-unit-right">
            <span>{{unit}}</span>
            <img src="@/assets/icon/ty_icon_pull_down.png" @click="showUnit" />
          </div>
        </div>
        <van-popup v-model="showUnitPopup">
          <span>请选择单元</span>
          <van-radio-group v-model="unit">
            <van-cell-group>
              <van-cell :title-style="unit == item ? 'color: #ff6016;' : ''" :title="item" clickable center @click="selectUnit(item)" v-for="(item, index) in unitList" :key="index">
                <van-radio :name="item">
                  <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" />
                </van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-popup>
        <div class="house-floor">
          <span class="house-floor-left">楼层</span>
          <div class="house-floor-right">
            <span>{{floor}}</span>
            <img src="@/assets/icon/ty_icon_pull_down.png" @click="showFloor" />
          </div>
        </div>
        <van-popup v-model="showFloorPopup">
          <span>请选择楼层</span>
          <van-radio-group v-model="floor">
            <van-cell-group>
              <van-cell :title-style="floor == item ? 'color: #ff6016;' : ''" :title="item" clickable center @click="selectFloor(item)" v-for="(item, index) in floorList" :key="index">
                <van-radio :name="item">
                  <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" />
                </van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-popup>
        <div class="house-number">
          <span class="house-number-left">房号</span>
          <div class="house-number-right">
            <span>{{number}}</span>
            <img src="@/assets/icon/ty_icon_pull_down.png" @click="showNumber" />
          </div>
        </div>
        <van-popup v-model="showNumberPopup">
          <span>请选择房号</span>
          <van-radio-group v-model="number">
            <van-cell-group>
              <van-cell :title-style="number == item ? 'color: #ff6016;' : ''" :title="item" clickable center @click="selectNumber(item)" v-for="(item, index) in numberList" :key="index">
                <van-radio :name="item">
                  <img slot="icon" slot-scope="props" :src="props.checked ? icon.active : icon.normal" />
                </van-radio>
              </van-cell>
            </van-cell-group>
          </van-radio-group>
        </van-popup>
      </div>
    </div>
    <span class="search-tip">若无法确定单元楼层 可直接点击查询</span>
    <van-button class="btn-search" text="查询" @click="doSearch" />
    <span class="total" v-if="total > 0">共&nbsp;<font color="red">{{total}}</font>&nbsp;个房屋</span>
    <div class="house-list" v-if="houseList.length > 0">
      <van-collapse v-model="activeName" accordion>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <van-collapse-item :style="activeName == item.houseId ? 'border: 1px solid #ff6016;' : ''" :title="item.hotAddress" :name="item.houseId" v-for="(item, index) in houseList" :key="index">
            <img slot="right-icon" :src="activeName == item.houseId ? icon.active : icon.normal" />
            <div class="house-item">
              <div class="house-item-left">
                <span class="house-item-left-left">小区楼号</span>
                <span class="house-item-left-right">{{item.regionName + item.buildingName}}</span>
              </div>
              <div class="house-item-right">
                <span class="house-item-left-left">供热卡号</span>
                <span class="house-item-left-right">{{item.cardCode}}</span>
              </div>
            </div>
            <div class="house-item">
              <div class="house-item-left">
                <span class="house-item-left-left">户主姓名</span>
                <span class="house-item-left-right">{{item.maskCustomerName == '无' ? '' : item.maskCustomerName}}</span>
              </div>
              <div class="house-item-right">
                <span class="house-item-left-left">房屋面积</span>
                <span class="house-item-left-right">{{item.areas[0].propertyArea}}m²</span>
              </div>
            </div>
            <div class="house-label">
              <span class="house-label-left"><font color="red">*</font>&nbsp;设置房屋标签</span>
              <div class="house-label-right">
                <input class="house-label-right-up" type="text" placeholder="请输入房屋标签" v-model="item.relationLabel" />
                <div class="house-label-right-down">
                  <span @click="setLabel(item, '我家')">我家</span>
                  <span @click="setLabel(item, '父母')">父母</span>
                  <span @click="setLabel(item, '朋友')">朋友</span>
                  <span @click="setLabel(item, '同事')">同事</span>
                </div>
              </div>
            </div>
            <div class="house-default">
              <span class="house-default-left">设置默认房屋</span>
              <van-switch class="house-default-right" v-model="isDefault" />
            </div>
            <div class="house-tip">
              <img src="@/assets/icon/ty_icon_warning.png" />
              <span>核对无误后 点击确认添加</span>
            </div>
            <van-button class="btn-add" text="确认添加" @click="doSave(item)" />
          </van-collapse-item>
        </van-list>
      </van-collapse>
    </div>
  </div>
</template>

<script>
import constant from '@/assets/js/constant';
import { getRegion, getBuildingNumber, getBuildingUnit, getBuildingFloor, getBuildingHouseNumber, getBlueAddressHouse, modifyHouse } from '@/api/house';

export default {
  name: 'FloorNumber',
  components: {
  },
  data () {
    return {
      label: null,
      houseId: null,
      company: {},
      searchMethod: {},
      regionName: null,
      region: null,
      showBuildingPopup: false,
      buildingList: [],
      building: null,
      buildingCodeList: [],
      buildingCode: null,
      showUnitPopup: false,
      unitList: [],
      unit: null,
      showFloorPopup: false,
      floorList: [],
      floor: null,
      showNumberPopup: false,
      numberList: [],
      number: null,
      total: 0,
      houseList: [],
      isDefault: false,
      activeName: null,
      page: 1,
      loading: false,
      finished: false,
      icon: constant.radioStyle.icon
    };
  },
  beforeMount () {
    let params = this.$route.params;
    if (Object.keys(params).length === 0) {
      if (sessionStorage.getItem('params')) {
        params = JSON.parse(sessionStorage.getItem('params'));
      }
    }
    this.label = params.label;
    this.houseId = params.houseId;
    this.company = params.company;
    this.searchMethod = params.searchMethod;
  },
  mounted: function () {
  },
  methods: {
    querySearchAsync: function (queryString, callback) {
      if (queryString) {
        let params = {
          companyId: this.company.companyId,
          name: queryString
        };
        getRegion(params).then(result => {
          if (result.data.status === 1) {
            callback(result.data.data);
          } else {
            this.$toast(result.data.message);
          }
        });
      }
    },
    handleSelect: function (item) {
      this.region = item;
      this.buildingList = [];
      this.building = null;
      this.buildingCodeList = [];
      this.buildingCode = null;
      this.unitList = [];
      this.unit = null;
      this.floorList = [];
      this.floor = null;
      this.numberList = [];
      this.number = null;
      getBuildingNumber(this.region.regionId).then(result => {
        if (result.data.status === 1) {
          this.buildingList = result.data.data;
          for (let index = 0; index < this.buildingList.length; index++) {
            this.buildingCodeList.push(this.buildingList[index].buildingCode);
          }
        } else {
          this.$toast(result.data.message);
        }
      });
    },
    showBuilding: function () {
      if (this.buildingCodeList.length > 0) {
        this.showBuildingPopup = true;
      }
    },
    selectBuilding: function (item) {
      this.showBuildingPopup = false;
      this.buildingCode = item;
      for (let index = 0; index < this.buildingList.length; index++) {
        if (this.buildingCode === this.buildingList[index].buildingCode) {
          this.building = this.buildingList[index];
          break;
        }
      }
      this.unitList = [];
      this.unit = null;
      this.floorList = [];
      this.floor = null;
      this.numberList = [];
      this.number = null;
      getBuildingUnit(this.building.buildingId).then(result => {
        if (result.data.status === 1) {
          this.unitList = result.data.data;
        } else {
          this.$toast(result.data.message);
        }
      });
    },
    showUnit: function () {
      if (this.unitList.length > 0) {
        this.showUnitPopup = true;
      }
    },
    selectUnit: function (item) {
      this.showUnitPopup = false;
      this.unit = item;
      this.floorList = [];
      this.floor = null;
      this.numberList = [];
      this.number = null;
      let params = {
        unit: this.unit
      };
      getBuildingFloor(this.building.buildingId, params).then(result => {
        if (result.data.status === 1) {
          this.floorList = result.data.data;
        } else {
          this.$toast(result.data.message);
        }
      });
    },
    showFloor: function () {
      if (this.floorList.length > 0) {
        this.showFloorPopup = true;
      }
    },
    selectFloor: function (item) {
      this.showFloorPopup = false;
      this.floor = item;
      this.numberList = [];
      this.number = null;
      let params = {
        unit: this.unit,
        floor: this.floor
      };
      getBuildingHouseNumber(this.building.buildingId, params).then(result => {
        if (result.data.status === 1) {
          this.numberList = result.data.data;
        } else {
          this.$toast(result.data.message);
        }
      });
    },
    showNumber: function () {
      if (this.numberList.length > 0) {
        this.showNumberPopup = true;
      }
    },
    selectNumber: function (item) {
      this.showNumberPopup = false;
      this.number = item;
    },
    doSearch: function () {
      if (!this.region) {
        this.$toast('小区名称必须在下拉表中选择，自行输入无效');
        return;
      }
      if (!this.building) {
        this.$toast('请选择楼宇编号');
        return;
      }
      this.total = 0;
      this.houseList = [];
      this.isDefault = false;
      this.activeName = null;
      this.page = 1;
      this.loading = false;
      this.finished = false;
      this.getHouseList();
    },
    getHouseList: function () {
      let params = {
        companyId: this.company.companyId,
        unit: this.unit,
        floor: this.floor,
        code: this.number,
        page: this.page++,
        size: 15
      };
      getBlueAddressHouse(this.building.buildingId, params).then(result => {
        if (result.data.status === 1) {
          this.total = result.data.data.total;
          let records = result.data.data.records;
          for (let index = 0; index < records.length; index++) {
            let maskCustomerName = records[index].maskCustomerName;
            if (maskCustomerName && maskCustomerName !== '无') {
              records[index].relationLabel = maskCustomerName.charAt(maskCustomerName.length - 1);
            } else {
              records[index].relationLabel = '我家';
            }
          }
          this.houseList = this.houseList.concat(records);
          if (!this.activeName) {
            if (this.houseList.length > 0) {
              this.activeName = this.houseList[0].houseId;
            }
          }
        } else {
          this.$toast(result.data.data.message);
        }
      });
    },
    doSave: function (item) {
      let reg = /^.{1,5}$/;
      if (reg.test(item.relationLabel)) {
        this.$toast.loading({
          duration: 0,
          forbidClick: true,
          message: '保存中...'
        });
        let params = {
          relationLabel: item.relationLabel,
          isDefault: this.isDefault ? 1 : 0
        };
        modifyHouse(item.houseId, 4, params).then(result => {
          this.$toast.clear();
          if (result.data.status === 1) {
            this.$router.push({
              name: 'houseList',
              params: {
                label: this.label,
                houseId: this.houseId
              }
            });
          } else {
            this.$toast(result.data.data.message);
          }
        });
      } else {
        this.$toast('房屋标签最少1个字最多5个字');
      }
    },
    setLabel: function (item, label) {
      item.relationLabel = label;
    },
    onLoad: function () {
      setTimeout(() => {
        this.loading = false;
        if (this.houseList.length === this.total) {
          this.finished = true;
        } else {
          this.getHouseList();
        }
      }, 500);
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

.search {
  width: 690px;
  background-color: #ffffff;
  border-radius: 10px;
  margin: 20px 30px 0;
  display: flex;
  flex-direction: column;
}

.house-company {
  width: 690px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-company-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-company-right {
  font-size: 28px;
  color: #ff6016;
  margin-left: 20px;
  text-align: right;
}

.house-region {
  width: 690px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-region-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-region-right {
  width: 400px;
  font-size: 28px;
  color: #333333;
  margin-left: 20px;
  text-align: right;
}

.house-building {
  width: 690px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-building-left {
  font-size: 28px;
  color: #999999;
}

.house-building-right {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.house-building-right>span {
  font-size: 28px;
  color: #333333;
}

.house-building-right>img {
  width: 30px;
  height: 17px;
  margin-left: 10px;
}

.house-dylcfh {
  width: 690px;
  padding: 20px 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-unit {
  width: 190px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-unit-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-unit-right {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.house-unit-right>span {
  font-size: 28px;
  color: #333333;
  white-space: nowrap;
}

.house-unit-right>img {
  width: 30px;
  height: 17px;
  margin-left: 10px;
}

.house-floor {
  width: 220px;
  border-left: 1px solid #e8e8e8;
  padding-left: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-floor-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-floor-right {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.house-floor-right>span {
  font-size: 28px;
  color: #333333;
  white-space: nowrap;
}

.house-floor-right>img {
  width: 30px;
  height: 17px;
  margin-left: 10px;
}

.house-number {
  width: 220px;
  border-left: 1px solid #e8e8e8;
  padding-left: 15px;
  margin-left: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-number-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-number-right {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
}

.house-number-right>span {
  font-size: 28px;
  color: #333333;
  white-space: nowrap;
}

.house-number-right>img {
  width: 30px;
  height: 17px;
  margin-left: 10px;
}

.search-tip {
  width: 750px;
  font-size: 20px;
  color: red;
  background-color: #ffffff;
  padding: 10px 0;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.btn-search {
  width: 690px;
  height: 88px;
  font-size: 32px;
  color: #ffffff;
  border-radius: 10px;
  margin-top: 20px;
  background: -webkit-linear-gradient(left, #ff8500, #ff6016);
  background: -o-linear-gradient(right, #ff8500, #ff6016);
  background: -moz-linear-gradient(right, #ff8500, #ff6016);
  background: linear-gradient(to right, #ff8500, #ff6016);
}

.total {
  width: 690px;
  font-size: 22px;
  color: #333333;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 20px 30px;
  margin: 20px 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.house-list {
  width: 690px;
  background-color: #ffffff;
  margin: 20px 30px 0;
  display: flex;
  flex-direction: column;
}

.house-item {
  width: 630px;
  border-bottom: 1px solid #f7f7f7;
  padding: 20px 0;
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-item-left {
  width: 350px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.house-item-left-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-item-left-right {
  font-size: 28px;
  color: #333333;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.house-item-right {
  width: 260px;
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
}

.house-item-right-left {
  font-size: 28px;
  color: #999999;
  white-space: nowrap;
}

.house-item-right-right {
  font-size: 28px;
  color: #333333;
  margin-left: 10px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.house-label {
  width: 630px;
  border-bottom: 1px solid #f7f7f7;
  padding: 20px 0;
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
}

.house-label-left {
  font-size: 28px;
  color: #999999;
}

.house-label-right {
  width: 400px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.house-label-right-up {
  width: 400px;
  font-size: 28px;
  color: #333333;
}

.house-label-right-down {
  width: 400px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-label-right-down>span {
  font-size: 26px;
  color: #ff6016;
  border: 1px solid #ff6016;
  padding: 0 10px;
}

.house-default {
  width: 630px;
  padding: 20px 0;
  margin: 0 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.house-default-left {
  font-size: 28px;
  color: #999999;
}

.house-default-right {
  margin-left: 20px;
}

.house-tip {
  width: 630px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.house-tip>img {
  width: 20px;
  height: 20px;
}

.house-tip>span {
  font-size: 20px;
  color: red;
  margin-left: 10px;
}

.btn-add {
  width: 630px;
  height: 88px;
  margin: 20px 0;
  font-size: 32px;
  color: #ffffff;
  border-radius: 10px;
  background: -webkit-linear-gradient(left, #ff8500, #ff6016);
  background: -o-linear-gradient(right, #ff8500, #ff6016);
  background: -moz-linear-gradient(right, #ff8500, #ff6016);
  background: linear-gradient(to right, #ff8500, #ff6016);
}

.van-popup {
  width: 690px;
  border-radius: 10px;
}

.van-popup>span {
  font-size: 28px;
  color: #333333;
  margin: 30px 0;
}

.van-radio-group {
  padding: 0 30px;
  max-height: 600px;
  overflow-y: auto;
}

.van-cell {
  padding: 30px 0;
  line-height: normal;
}

.van-cell img {
  width: 28px;
  height: 28px;
}

.van-cell__title {
  font-size: 28px;
  color: #333333;
  text-align: left;
  flex: 1;
}

.van-cell__value {
  flex: none;
}
</style>
