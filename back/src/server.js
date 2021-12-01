require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const RegisterResource = require('./resource/register.resource')
const LoginResource = require('./resource/login.resource')
const ItemResource = require('./resource/item.resource')

//Configurações do servidor
app.use(cors())
app.use(express.urlencoded({limit: '200mb', extended: true}))
app.use(express.json({limit: '200mb'}))
const port = process.env.PORT || 4000
process.on('uncaughtException', (exception) => console.error(exception))

//Rotas
//register
app.post('/register/user', RegisterResource.registerUser)
//item
app.post('/item/new', ItemResource.newItem)
app.get('/item/get-all/:user_id', ItemResource.getAll)
app.get('/item/get-by-category/:category', ItemResource.getByCategory)
app.put('/item/favorite/:item_id/:user_id', ItemResource.updateFavorite)
app.get('/item/favorite/get-all/:user_id', ItemResource.getAllFavorites)
//login
app.post('/login/user', LoginResource.login)

//Servidor rodando
app.listen(port, () => {
    console.log(`Example app listening at ${process.env.APP_URL}:${port}`)
})