module.exports = {
    baseUrl:'./',
    devServer: {
        // proxy: 'https://api.github.com'
        proxy: {
          '/api': {
            target: 'https://api.github.com',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/api': '' // github 接口中不存在 api 把api 替换掉
            }
          },
          '/baiduapi': {
            target: 'https://aip.baidubce.com',
            changeOrigin: true,
            ws: true,
            pathRewrite: {
              '^/baiduapi': '' // baiduapi 接口中不存在 api 把api 替换掉
            }
          }          
        },
      // proxy: {
      //   '/api': {
      //     target: 'https://api.github.com',
      //     ws: true,
      //     changeOrigin: true,
        //   onProxyReq:(proxyReq, req, res) =>{
        //     // add custom header to reques
        //     // or log the req
        // },
        // onProxyRes:(proxyRes, req, res) => {
        //   proxyRes.headers['x-added'] = 'foobar';     // add new header to response
        //   proxyRes.headers['Access-Control-Allow-Origin'] = '*'
        //   proxyRes.headers['Access-Control-Allow-Methods'] = 'PUT,GET,POST,OPTIONS'
        //   proxyRes.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, Content-Type, X-File-Name'
        //   delete proxyRes.headers['x-removed'];       // remove header from response

          
        // }
        // },
        // '/foo': {
        //   target: '<other_url>'
        // }
      // }
    }
  }
