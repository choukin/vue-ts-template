const appHost = process.env.VUE_APP_HOST

// 定义枚举
class APPURL {
     public static FETCHTOKEN = `${appHost}/oauth/2.0/token`
     public static GENERAL_BASIC = `${appHost}/rest/2.0/ocr/v1/general_basic`
}

export default APPURL
