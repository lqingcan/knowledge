<template>
  <view class="content">
    <uni-swiper-dot style="height: 100px; width: 100%" @clickItem="clickItem" :info="info" :current="current" :mode="mode" :dots-styles="dotsStyles">
      <swiper @change="change" :current="swiperDotIndex" autoplay="false" circular="true">
        <swiper-item v-for="(item, index) in info" :key="index">
          <!-- <view class="swiper-item" :class="'swiper-item' + index"> -->
          <image :src="item.url" alt="" mode="aspectFit" style="width: 100%; height: 100%"></image>
          <!-- <text style="color: #fff; font-size: 32px">{{ index + 1 }}</text> -->
          <!-- </view> -->
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { onLoad } from '@dcloudio/uni-app';
import IMGURL from '../../../../static/img/banner@2x.png';

const info = ref([
  {
    colorClass: 'uni-bg-red',
    url: IMGURL,
    content: '内容 A',
  },
  {
    colorClass: 'uni-bg-green',
    url: IMGURL,
    content: '内容 B',
  },
  {
    colorClass: 'uni-bg-blue',
    url: IMGURL,
    content: '内容 C',
  },
]);
const current = ref(0);
const mode = ref('default');
const dotsStyles = ref({
  backgroundColor: 'rgba(83, 200, 249,0.3)',
  border: '1px rgba(83, 200, 249,0.3) solid',
  color: '#fff',
  selectedBackgroundColor: 'rgba(83, 200, 249,0.9)',
  selectedBorder: '1px rgba(83, 200, 249,0.9) solid',
});
const swiperDotIndex = ref(0);

const change = e => {
  current.value = e.detail.current;
};

const clickItem = e => {
  swiperDotIndex.value = e;
};

onLoad(info => {});
</script>
<style lang="scss" scoped></style>
