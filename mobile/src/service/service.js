import axios from 'axios'

// const localUrl = 'http://c331-2804-14d-1087-8360-a4b0-ae5c-b027-a79c.ngrok.io'
const prodUrl = 'https://back-fashion.herokuapp.com'

const api = axios.create({
    baseURL: prodUrl
})

export default api