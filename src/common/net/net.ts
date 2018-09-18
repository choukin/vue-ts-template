import axios, {AxiosRequestConfig}  from 'axios'
import config from './config'

let pending: Array<{url:string, cancel: Function}> = []
const cancelToken = axios.CancelToken

const removePending = (config: AxiosRequestConfig) => {
 for (const p in pending) {
    if (pending.hasOwnProperty(p)) {
     const item: any = p
     const list: any = pending[p]
     if (list.url === config.url + '&request_type' + config.method) {
         list.cancel()
         pending.splice(item, 1)
     }
    }
 }
}

const service = axios.create(config)
// 添加请求拦截器
service.interceptors.request.use(
    (config: AxiosRequestConfig) => {
        removePending(config)
        config.cancelToken = new cancelToken((c)=>{
            pending.push({url:config.url+'&request_type' + config.method, cancel:c})
        })
        return config
    },
    (error: any) => {
        return Promise.reject(error)
    },
)

// 添加响应拦截器
service.interceptors.response.use(
    res => {
        removePending(res.config)
        return res
    },
    error => {
        return Promise.reject(error)
    },
)

export default service
