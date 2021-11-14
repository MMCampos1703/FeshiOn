const { pool } = require('../db')

const login = async (email, password) => {
    const { rows } = await pool.query(`
        SELECT *
        FROM user_account
        WHERE email = $1 AND PASSWORD = $2
    `, [email, password])

    if(!rows[0]) {
        throw {appError: 'Credenciais de login incorretas!'}
    }
    
    return rows[0]
}




module.exports = {
    login
}