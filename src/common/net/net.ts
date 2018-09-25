import axios, {AxiosRequestConfig} from 'axios'
import config from './config'

const pending: Array<{url: string, cancel: () => void}> = []
const cancelToken = axios.CancelToken

const removePending = (configinfo: AxiosRequestConfig) => {
 for (const p in pending) {
    if (pending.hasOwnProperty(p)) {
     const item: any = p
     const list: any = pending[p]
     if (list.url === configinfo.url + '&request_type' + configinfo.method) {
         list.cancel()
         pending.splice(item, 1)
     }
    }
 }
}

const service = axios.create(config)
// 添加请求拦截器
service.interceptors.request.use(
    (paramconfig: AxiosRequestConfig) => {
        removePending(paramconfig)
        paramconfig.cancelToken = new cancelToken((c) => {
            pending.push({url: paramconfig.url + '&request_type' + paramconfig.method, cancel: c})
        })
        return paramconfig
    },
    (error: any) => {
        return Promise.reject(error)
    },
)

// 添加响应拦截器
service.interceptors.response.use(
    (res) => {
        removePending(res.config)
        return res
    },
    (error) => {
        return Promise.reject(error)
    },
)

export default service
