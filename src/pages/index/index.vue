<template>
  <view class="container">
    <UniversalTools></UniversalTools>
    <Swiper></Swiper>
    <CommonUse></CommonUse>
    <DataArea></DataArea>
    <Tools></Tools>
  </view>
</template>
<script setup>
import { computed, onMounted, ref } from 'vue';
import CommonUse from './components/CommonUse/index';
import UniversalTools from './components/UniversalTools/index';
import DataArea from './components/DataArea/index';
import Tools from './components/Tools/index';
import Swiper from './components/Swiper/index';
import { onLoad } from '@dcloudio/uni-app';

onLoad(info => {});
</script>
<style lang="less">
.container {
  padding: 12px 12px 30px;
}
</style>
