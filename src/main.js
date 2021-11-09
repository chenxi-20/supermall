import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// 全局引入elementui
import Element from 'element-ui';
// 单独引入element样式
import 'element-ui/lib/theme-chalk/index.css';
// 引入网络模块axios
// import axios from 'axios';
// import {request} from './network/request';//全局引入网络方法

// 挂载
Vue.use(Element);

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");


// axios.defaults.baseURL = 'http://123.207.32.32:8000',
// axios({
//   url: 'home/multidata',  //接口地址
//   methods: 'get',   //指定方法/也是默认方法
// }).then(res => {
//   console.log(res);
// })

// axios({
//   url: 'home/data',
//   //专门针对get请求的参数拼接
//   params: {
//     type: 'sell',//或者'pop'
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// })

// axios发送并发请求
// axios.all([
//   axios({
//     url: 'home/multidata'
//   }),
//   axios({
//     url: 'home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1,res2);
// }))


// .then (res => {
//   console.log(res);
// })


// axios分别配置
// axios.all([
//   axios({
//     baseURL: 'http://123.207.32.32:8000',
//     // timeout: 5000,//设置超时时间
//     url: 'home/multidata'
//   }),
//   axios({
//     baseURL: 'http://123.207.32.32:8000',
//     url: 'home/data',
//     timeout: 5000,//设置超时时间
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1,res2);
// }))
// // 更方便：axios全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000';//全局固定的baseURL
// axios.defaults.timeout = 5000;//全局超时时间
// axios.defaults.headers.post['Content-type'] = 'application/x-www-form-urlencoded';
// axios.all([
//   axios({
//     url: 'home/multidata'
//   }),
//   axios({
//     url: 'home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1,res2) => {
//   console.log(res1,res2);
// }))


// //4、创建对应的axios实例
// // 比如创建首页的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// });
// // 使用实例
// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url: '/home/data',
//   params: {
//     type: 'pop',
//     page: 1,
//   }
// }).then(res => {
//   console.log(res);
// })


// // /封装的请求方法
// // 调用方法、
// request({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res)
// }).catch(res => {
//   console.log(res)
// })
