import axios from 'axios'

const localUrl = 'http://192.168.0.194:4000'
const prodUrl = 'https://back-fashion.herokuapp.com'

const api = axios.create({
    baseURL: prodUrl
})

export default api