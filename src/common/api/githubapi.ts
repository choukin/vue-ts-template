import APPURL from '@/common/api/app.config'
import fetch from '../net/net'
const grant_type = process.env.VUE_APP_GRANT_TYPE
const client_id = process.env.VUE_APP_CLIENT_ID
const client_secret = process.env.VUE_APP_CLIENT_SECRET

export interface SearchUser {
    q: string
    sort?: string
    order?: string
}
class API {
    public static fetchUser(searchUser: SearchUser = {q: '1'}) {
        const params = searchUser
        return fetch.get(APPURL.SEARCH_USER,
            {params})
    }
}


export default API
