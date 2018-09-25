let appHost = process.env.VUE_APP_HOST
let githubHost = process.env.VUE_APP_GITHUB_HOST
const env = process.env.NODE_ENV
console.log('env' + env)
if (env === 'development') {
    appHost = '/baiduapi'
    githubHost = '/api'
}
// 定义枚举
class APPURL {
     public static FETCHTOKEN = `${appHost}/oauth/2.0/token`
     public static GENERAL_BASIC = `${appHost}/rest/2.0/ocr/v1/general_basic`
     public static SEARCH_USER = `${githubHost}/search/users`
}

export default APPURL
