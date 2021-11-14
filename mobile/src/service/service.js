import axios from 'axios'

const api = axios.create({
    baseURL: 'http://4334-2804-14d-1087-8360-2160-bd10-8087-83e4.ngrok.io'
})

export default api