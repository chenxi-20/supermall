import axios from 'axios';

// //方案一：
// export function request(config,success,failure) {
//   //创建axios实例
//   const instance = axios.created({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config)
//     .then (res = {
//       success(res);
//     })
//     .catch(err => {
//       failure(err)
//     });
// }

// //方案二：只传一个参数
// export function request(config) {
//   //创建axios实例
//   const instance = axios.created({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })

//   //发送真正的网络请求
//   instance(config.baseConfig)
//     .then (res => {
//       config.success(res);//回调传进来的参数函数
//     })
//     .catch(err => {
//       config.failure(err);
//     });
// }
// // Main.js里面使用
// request({
//   baseConfig: {

//   },
//   success: function (res) {

//   },
//   failure: function (err) {

//   }
// })


// // 方案三：promise
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })

//     // 通过promise返回的东西决定是调用resolve还是reject
//     instance(config)
//     .then(res => {
//       resolve(res)
//     })
//     .catch(res => {
//       reject(err)
//     })
//   });
// }
// // 调用方法、
//  request({
//    url: '/home/multidata'
//  }).then(res => {
//    console.log(res)
//  }).catch(res => {
//    console.log(res)
//  })

//最终方案
export function request(config) {
    //1、创建实例
    const instance = axios.create({
      baseURL: 'http://123.207.32.32:8000',
      timeout: 5000
    })

    // 2、响应拦截
    instance.interceptors.response.use( res => {
      // console.log(res);
      return res.data;  //返回的数据做处理
    }, err => {
      console.log(err);
    })

    return instance(config);//返回的是promise对象
}
