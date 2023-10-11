// 引用网络请求中间件
import { getPort } from '../pages/drump/public/contants';
// eslint-disable-next-line import/no-cycle
import request from '../utils/request';

// 获取环境对应的端口
const {
  // port,
  env,
  mode,
} = getPort();

let url = '/portal-react/portal/CenterCallController/call.do';
if (mode === 'production') {
  url = `${url}`;
} else {
  url = `/${env}/user${url}`;
}

/**
 *    客户信息
 */
export function fetchUserInfo(token) {
  return request({
    url,
    method: 'POST',
    header: {
      'encrpty-flag': 'N',
    },
    data: {
      contractRoot: {
        tcpCont: {
          svcCode: 'BUP_wgtQueryUserInfo',
          transactionID: '3001000501201602021234567890',
          reqTime: '20180503145959001',
          token: '5b4fd310-d34b-4bf5-8cc8-e2c0ada931a7',
        },
        svcCont: {
          requestObject: {
            token,
          },
        },
      },
    },
  });
}
