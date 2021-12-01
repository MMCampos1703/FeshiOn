const { pool } = require('../db')

const registerUser = async (nickname, email, password) => {
    await pool.query(`
        INSERT INTO user_account (nickname, email, password ) 
	        VALUES ($1, $2, $3)
    `, [nickname, email, password])
}

module.exports = {
    registerUser
}