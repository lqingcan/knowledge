import { defineStore } from 'pinia';

// option Store
export const drumpStore = defineStore('drump', {
  // 定义要状态数据
  state: () => ({
    // 购物车列表
    cartList: [],
    // 产品配置列表
    prodConfigList: [],
    // 公共协议列表
    commonList: [],
    // 商品协议列表
    offerAttrList: [],
    // 多场景商品支持
    svcCont: [],
    // 客户信息
    customer: {},
    // 是否是企宽
    isQK: false,
    // 地址信息
    addresInfo: {},
    // 网格通传递过来的token
    token: '',
    // 工作台返回用户信息
    userInfo: {},
    // 收款方信息
    accountReginInfo: {},
    // 测试数据
    testList: [1],
    // 协议附件信息
    attachmentList: [],
    // 是否展示附件上传
    showUploadFile: false,
    // 公众版
    GONGZHONG_VERSION: [],
    // 政企版
    ZHENGQI_VERSION: [],
    // 极简登录token
    kiteToken: '',
    // 客户ID
    custId: '',
    // 当前专线业务信息
    currentZXBizInfo: {},
    // 大礼包业务信息
    giftPackBizInfo: {},
    // 大礼包场景信息
    giftResSences: {},
    // 礼包协议信息
    giftCommAttrList: [],
    // 大礼包附件和备注
    packAttachment: {},
    // 是否是虚拟客户
    isVirtualUser: false,
  }),

  getters: {
    //
    getInfo: state => state.testList,
  },

  // 定义与状态数据相关的方法
  actions: {
    // 计算
    setInfo(info) {
      this.$patch(state => {
        state.testList.push(info);
      });
    },
    clearInfo() {
      this.$patch(state => {
        state.testList = [];
      });
    },
  },
});
