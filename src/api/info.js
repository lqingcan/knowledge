// 引用网络请求中间件
import request from '../utils/request';
import { getPort } from '../pages/drump/public/contants';

// 获取环境对应的端口
const { env, mode } = getPort();

let preFix = '';

if (mode !== 'production') {
  preFix = `/${env}/jjsl`;
}

/**
 *    获取商品列表
 */
export function getListH5Goods() {
  return request({
    url: `${preFix}/portal-react/portal/UserPostTempletRelController/qryPostTempletGridData.do`,
    method: 'GET',
  });
}

/**
 *    RJ企宽甩单，甩即签
 */
export function postChangeAcceptMode(params) {
  const { packageInstId } = params;
  return request({
    url: `${preFix}/portal-react/kite-web/packageScene/changeAcceptMode?packageInstId=${packageInstId}&acceptMode=RJ`,
    method: 'POST',
    data: {},
  });
}
