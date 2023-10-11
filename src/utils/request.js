import { getToken, removeToken, getCustID } from './auth';

const isOutLine = window.location.host === '218.202.0.136';
const BASE_URL = isOutLine ? '/zqrhzt' : '';

function service(options = {}) {
  options.url = `${BASE_URL}${options.url}`;
  // 判断本地是否存在token，如果存在则带上请求头
  options.header = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    ...options.header,
    // 添加其他需要的头部信息
  };
  if (getToken()) {
    options.header = {
      ...options.header,
      'X-Auth-Token': `${getToken()}`, // 这里是token(可自行修改)
      Custid: getCustID(),
    };
  }

  return new Promise((resolved, rejected) => {
    options.success = res => {
      // 如果请求回来的状态码不是200则执行以下操作
      if (res.statusCode !== 200) {
        // 非成功状态码弹窗
        uni.showToast({
          icon: 'none',
          duration: 3000,
          title: `${res.data.msg}`,
        });
        // 登陆失效
        if (res.data.code === 403) {
          // 清除本地token
          removeToken();
          // 关闭所有页面返回到登录页
          uni.reLaunch({
            url: '/pages/login/login',
          });
        }
        // 返回错误信息
        rejected(res);
      } else {
        // 请求回来的状态码为200则返回内容
        resolved(res);
      }
    };
    options.fail = err => {
      // 请求失败弹窗
      uni.showToast({
        icon: 'none',
        duration: 3000,
        title: '服务器错误,请稍后再试',
      });
      rejected(err);
    };
    uni.request(options);
  });
}

export default service;
