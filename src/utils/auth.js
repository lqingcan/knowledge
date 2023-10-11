import { drumpStore } from '../stores/drump';
import { storeToRefs } from 'pinia';
import { kiteWebLogin } from '../api/user';

const TokenKey = 'token';
const store = drumpStore();
const { kiteToken, custId } = storeToRefs(store);

// 认证令牌
export function getToken() {
  return kiteToken.value;
}

export function setToken(token) {
  return uni.setStorageSync(TokenKey, token);
}

export function removeToken() {
  kiteToken.value = '';
}

// 获取用户ID
export function getCustID() {
  return custId.value;
}

export const kiteLogin = () => {
  const token = uni.getStorageSync('gridToken');

  return new Promise((resolve, reject) => {
    kiteWebLogin(token)
      .then(res => {
        console.log(res);
        const { resultCode, resultMsg, resultObject } = res?.data || {};

        if (resultCode !== '0') {
          throw resultMsg;
        }

        kiteToken.value = resultObject;
        resolve();
      })
      .catch(err => {
        console.log('极简登录接口报错：', err);

        reject(err);
      });
  });
};
