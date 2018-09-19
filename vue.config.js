module.exports = {
    outputDir:'../',
    devServer: {
      proxy: {
        '/api': {
          target: 'http://aip.baidubce.com',
          ws: true,
          changeOrigin: true
        },
        '/foo': {
          target: '<other_url>'
        }
      }
    }
  }
