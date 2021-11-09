import {request} from './request';

//首页详情请求数据
export function getHomeMultiData() {
  return request({
    url: '/home/multidata'
  })
}
