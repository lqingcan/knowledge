<template>
  <view class="title-area">
    <img class="icon" src="../../../../static/img/title-left.png" alt="" />
    <view class="title">{{ title }}</view>
    <img class="icon" src="../../../../static/img/title-left.png" alt="" />
  </view>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>
<style lang="less" scoped>
.title-area {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 0px 0px 16px 0px;
}
.title {
  font-size: 18px;
  font-weight: 500;
  color: #333333;
  // line-height: 26px;
  margin: 0 8px;
}

.title-area:not(:first-child) {
  margin-top: 20px;
}

.icon {
  width: 20px;
  height: 14px;
}
</style>
