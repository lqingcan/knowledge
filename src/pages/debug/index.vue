<template>
  <div class="nav">
    <br />
    <!-- <navigator :url="URL">
      <button>H5甩单</button>
    </navigator> -->
    <br />
    <h4>以下参数为模拟网格通跳转H5场景</h4>
    <h4>GridToken：网格通带过来的token</h4>
    <h4>BoosNum：CRM工号</h4>
    <h4 style="color: black; background: yellow">注意：默认使用网格通传递参数</h4>
    <div class="info">
      <div class="label">gridToken:</div>
      <input type="text" maxlength="-1" v-model="gridToken" />
    </div>
    <div class="info">
      <div class="label">bossNum:</div>
      <input type="text" maxlength="-1" v-model="bossNum" />
    </div>
    <div class="info">
      <div class="label">url:</div>
      <input type="text" maxlength="-1" v-model="tokenUrl" />
    </div>
    <br />
    <h4>当前环境：{{ ENV_INFO }}</h4>
    <div class="info">
      <div class="label">测试token:</div>
      <input type="text" value="qwertyuiosadfg231sddfsf23dsaxsfsad" />
    </div>
    <div class="info">
      <div class="label">线上开发CRM:</div>
      <input type="text" value="TESTKM06" />
    </div>
    <div class="info">
      <div class="label">线上测试CRM:</div>
      <input type="text" value="AX130058" />
    </div>
    <div class="info">
      <div class="label">线上生产CRM:</div>
      <input type="text" value="AH995834" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
const gridToken = ref('');
const bossNum = ref('');
const ENV_INFO = ref('');
const tokenUrl = ref('');

onLoad(info => {
  gridToken.value = uni.getStorageSync('gridToken');
  bossNum.value = uni.getStorageSync('bossNum');
});

const URL = computed(() => {
  // return `../drump/customers/customers?gridToken=${gridToken.value}&bossNum=${bossNum.value}`;
  return ``;
});

onMounted(() => {
  init();
  tokenUrl.value = uni.getStorageSync('url');
});
const init = () => {
  const env = import.meta.env['VITE_APP_MOD'];
  const mode = import.meta.env['MODE'];
  if (gridToken.value === '') gridToken.value = 'qwertyuiosadfg231sddfsf23dsaxsfsad';
  if (mode === 'production') {
    if (env === 'development') {
      ENV_INFO.value = '线上开发（所内）环境';
      bossNum.value = 'TESTKM06';
    } else if (env === 'test') {
      ENV_INFO.value = '线上测试（现场）环境';
      bossNum.value = 'AX130058';
    } else {
      ENV_INFO.value = '线上生产环境';
    }
  } else {
    if (env === 'development') {
      ENV_INFO.value = '线下开发（所内）环境';
    } else if (env === 'test') {
      ENV_INFO.value = '线下测试（现场）环境';
    } else {
      ENV_INFO.value = '线下生产环境';
    }
    bossNum.value = 'TESTKM06';
  }
};
</script>
<style lang="less">
.nav {
  margin: 0 12px;
}

button {
  height: 70px;
  line-height: 70px;
  font-weight: 600;
  background: #ffffff;
  color: #000000;
  border: 1px solid #eeeeee;
}

.info {
  display: flex;
  margin-top: 16px;
  align-items: center;
  font-weight: 600;

  .label {
    width: 90px;
  }
}

input {
  padding: 2px 4px;
  border: 1px solid #3e3e3e;
  margin-left: 6px;
}
</style>
