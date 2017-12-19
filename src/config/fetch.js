import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'

Vue.prototype.$http = axios

// 应用请求后端数据的地址
let baseUrl = '/api/'

const ajaxURL = {
    SubjectID: baseUrl + 'home/subject', // 主题域数据
}

export let fetch = async(type='POST', url = '', data = {}) => {
    let result
    type = type.toUpperCase()
    url = ajaxURL[url]
    if(type == 'GET') {
        await axios.get(url, { params: data})
            .then(res => {
                result = res.data
            })
    } else if (type == 'POST') {
        await axios.post(url, qs.stringify(data))
            .then(res => {
                result = res.data
            })
    }
    return result
}



