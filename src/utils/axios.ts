import axios from 'axios'
import {HOST_LINK} from "./consts";

const instance = axios.create({
    baseURL: HOST_LINK
})

instance.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${window.localStorage.getItem('token')}`

    return config
})

export default instance