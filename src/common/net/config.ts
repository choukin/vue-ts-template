import qs from 'qs'
import {AxiosResponse, AxiosRequestConfig} from 'axios'

const axiosConfig: AxiosRequestConfig = {
    // 处理请求后数据
    transformResponse: [ (data: AxiosResponse) => {
      return data
    }],
    // 查询对象序列化
    paramsSerializer: (params: any) => {
        return qs.stringify(params)
    },
    // 设置超时时间
    timeout: 80000,
    withCredentials: true, // 允许携带cookie
    responseType: 'json',
    // xsrf 设置
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
}

export default axiosConfig
