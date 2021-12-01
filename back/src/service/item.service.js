const { pool } = require('../db')

const newItem = async (image64, category, name, userId) => {
    await pool.query(`
        INSERT INTO item (image64, category, name, user_id ) 
	        VALUES ($1, $2, $3, $4)
    `, [image64, category, name, userId])
}

const getAll = async (userId) => {
    const {rows} = await pool.query(`
        SELECT * 
        FROM item
        WHERE user_id = $1
        ORDER BY created_at desc
    `, [userId])

    return rows
}

const getByCategory = async (category) => {
    let data = []
    
    if(category === 'hot') {
        data = await pool.query(`
        SELECT * 
        FROM item
        ORDER BY favorites desc
        `)
        
    } else if (category === 'new') {
        data = await pool.query(`
        SELECT * 
        FROM item
        ORDER BY created_at desc
        `)
        
    } else {
        data = await pool.query(`
        SELECT * 
        FROM item
        WHERE category = $1
        ORDER BY created_at desc
        `, [category])
    }
    
    return data.rows
}

const updateFavorite = async (itemId, userId) => {
    try {
        await pool.query(`
            INSERT INTO user_account_item(user_account_id, item_id) 
            VALUES ($1,$2)
        `, [userId, itemId])
    } catch (e) {
        throw {message: 'Já favoritado!'}
    }
    
    await pool.query(`
        UPDATE item
        SET favorites = favorites+1
        WHERE item.id = $1
    `, [itemId])

}

const getAllFavorites = async (userId) => {

    const {rows} = await pool.query(`
        SELECT item.* 
        FROM user_account_item uai
        JOIN item ON item.id = item_id
        WHERE user_id = $1
    `, [userId])

    return rows
}

module.exports = {
    newItem,
    getAll,
    getByCategory,
    updateFavorite,
    getAllFavorites
}