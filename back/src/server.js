require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const RegisterResource = require('./resource/register.resource')
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
const port = process.env.PORT || 4000
process.on('uncaughtException', (exception) => console.error(exception))

app.post('/register/user', RegisterResource.registerUser)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})