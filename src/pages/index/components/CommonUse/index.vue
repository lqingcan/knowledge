<template>
  <!-- <Title :title="'常用服务'"></Title> -->
  <!-- 轮播图下方常用工具 -->
  <view class="content">
    <view class="item" v-for="info in list">
      <view v-if="info.num > 0" class="num">{{ info.num }}</view>
      <img class="icon" :src="info.url" alt="" />
      <!-- <image src="../../../static/img/icon／金刚区／我的待办@2x.png"></image> -->
      <view class="title">{{ info.title }}</view>
    </view>
  </view>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import Title from '../Title/index';
import img_url from '../../../../static/img/icon／金刚区／我的待办@2x.png';
import { onLoad } from '@dcloudio/uni-app';

const list = ref([
  {
    num: 5,
    title: '我的待办',
    url: img_url,
    id: '',
    icon: 'icon-1',
  },
  {
    num: 0,
    title: '调度待办',
    url: img_url,
  },
  {
    num: 0,
    title: '一键甩单',
    url: img_url,
  },
  {
    num: 0,
    title: '服务提单',
    url: img_url,
  },
  {
    num: 0,
    title: '综合查询',
    url: img_url,
  },
  {
    num: 0,
    title: '营销人员管理',
    url: img_url,
  },
  {
    num: 0,
    title: '日志管理',
    url: img_url,
  },
  {
    num: 0,
    title: '人员考核管理',
    url: img_url,
  },
  {
    num: 0,
    title: '业务演示',
    url: img_url,
  },
  {
    num: 0,
    title: '全部',
    url: img_url,
  },
]);

onLoad(info => {});
</script>
<style lang="less" scoped>
.content {
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fill, 20%);

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
      width: 40px;
      height: 40px;
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
