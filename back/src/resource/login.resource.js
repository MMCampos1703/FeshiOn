const LoginService = require('../service/login.service')

const login = async (req, res) => {
    const email = req.body.email
    const password = req.body.password

    try {
        const user = await LoginService.login(email, password)
        res.status(200).send(user)
    } catch(e) {
        if(e.appError) {
            console.error('## login ##' + e.appError)
            res.status(500).send({message: e.appError})
        } else {
            console.error('## login ##' + e)
            res.status(500).send({message: 'Não foi possível logar!'})
        }
    }
}

module.exports = {
    login
}