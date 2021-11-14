const RegisterService = require('../service/register.service')

const registerUser = async (req, res) => {
    const nickname = req.body.nickname
    const email = req.body.email
    const password = req.body.password

    try {
        await RegisterService.registerUser(nickname, email, password)
        res.status(200).send({message: 'Cadastrado com sucesso!'})
    } catch(e) {
        console.error('## registerUser ##' + e)
        res.status(500).send({message: 'Não foi possível cadastrar o usuário, email duplicado!'})
    }
}

module.exports = {
    registerUser
}