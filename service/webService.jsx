import axios from 'axios'

class WebService{
    getApiCall(url){
        return axios.get(url)
    }
    postApiCall(url,data){
        return axios.post(url,data)
    }
}

export default new WebService()