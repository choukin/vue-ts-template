import APPURL from '@/common/api/app.config'
import fetch from '../net/net'
const grant_type = process.env.VUE_APP_GRANT_TYPE
const client_id = process.env.VUE_APP_CLIENT_ID
const client_secret = process.env.VUE_APP_CLIENT_SECRET

class API {
   public static fetchToken() {
        const tokenUrl: string = APPURL.FETCHTOKEN
        const params = {
            grant_type,
            client_id,
            client_secret,
        }
        return fetch.get(tokenUrl, {params})
    }
}


export default API
