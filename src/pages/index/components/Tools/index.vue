<template>
  <Title :title="'便捷工具'"></Title>
  <view class="container">
    <view class="item" v-for="info in list">
      <view v-if="info.num > 0" class="num">{{ info.num }}</view>
      <img class="icon" :src="info.url" alt="" />
      <view class="title">{{ info.title }}</view>
    </view>
  </view>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import Title from '../Title/index';
import img_url from '../../../../static/img/icon／便捷工具／网络测试@2x.png';

const list = ref([
  {
    num: 0,
    title: '网络测试',
    url: img_url,
  },
  {
    num: 0,
    title: '调查问卷',
    url: img_url,
  },
  {
    num: 0,
    title: '业务演示',
    url: img_url,
  },
]);
</script>
<style lang="less" scoped>
.container {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 20%);
  background-color: #ffffff;
  padding-top: 12px;

  .item {
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 20%;
    position: relative;

    .num {
      width: 16px;
      height: 16px;
      text-align: center;
      border-radius: 50%;
      position: absolute;
      background-color: #f23030;
      z-index: 1;
      top: 0;
      right: 15px;
      font-size: 12px;
      color: #ffffff;
      line-height: 16px;
    }
    .icon {
      width: 32px;
      height: 32px;
      border-radius: 50%;
    }

    .title {
      font-size: 11px;
      color: #333333;
      line-height: 18px;
      margin: 6px 0 12px 0;
    }
  }
}
</style>
<!-- <style src="./common.css" scoped></style> -->
