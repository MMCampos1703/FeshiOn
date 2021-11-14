require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const RegisterResource = require('./resource/register.resource')
const LoginResource = require('./resource/login.resource')

//Configurações do servidor
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = process.env.PORT || 4000
process.on('uncaughtException', (exception) => console.error(exception))

//Rotas
app.post('/register/user', RegisterResource.registerUser)
app.post('/login/user', LoginResource.login)

//Servidor rodando
app.listen(port, () => {
    console.log(`Example app listening at ${process.env.APP_URL}:${port}`)
})