<template>
  <Title :title="'数据专区'"></Title>
  <!-- 主体部分 -->
  <uni-collapse ref="collapse" v-model="value" @change="change">
    <uni-collapse-item v-for="item in list" :title="item.title" type="line">
      <view class="content">
        <iframe style="width: 100%; margin-top: 12px" :src="item.url" frameborder="0"></iframe>
      </view>
    </uni-collapse-item>
  </uni-collapse>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import Title from '../Title/index';
import { onLoad } from '@dcloudio/uni-app';
const url = 'https://console-docs.apipost.cn/preview/8d160c5a51156f4d/93bdcc988f6397ed?target_id=ba9d3c06-dc3c-4a12-8c9b-8a6935d7ec69';

const list = ref([
  {
    title: '客户看板',
    url,
  },
  {
    title: '业务经营指标',
    url,
  },
  {
    title: '重点工作台情况',
    url,
  },
  {
    title: '业务运营情况',
    url,
  },
]);
const change = e => {
  console.log(e);
};

onLoad(info => {});
</script>
<style lang="less" scoped>
.uni-collapse {
  background-color: unset !important;
}
/deep/ .uni-collapse-item__title-box {
  padding: 0 !important;
  margin-left: 6px;
}

/deep/ .uni-collapse-item {
  margin-bottom: 8px;
  box-shadow: 0px 2px 4px 0px rgba(0, 28, 56, 0.08);
  background-color: #fff;
}
</style>
