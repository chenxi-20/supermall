//导出
module.exports = {
  configureWebpack: {  // 表示准备配置config
    resolve: {         // 解决路径相关的东西
        alias: {
            'assets': '@/assets', //@表示src
            'common': '@/common',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views'
        }
    }
  }
}




// @是默认的配置别名
