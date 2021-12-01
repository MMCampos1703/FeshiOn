const ItemService = require('../service/item.service')

const newItem = async (req, res) => {
    const image64 = req.body.image.base64
    const category = req.body.category
    const name = req.body.name
    const userId = req.body.userId

    try {
        await ItemService.newItem(image64, category, name, userId)
        res.status(200).send({message: 'Cadastrado com sucesso!'})
    } catch(e) {
        console.error('## newItem ##' + e)
        res.status(500).send({message: 'Não foi possível inserir item!'})
    }
}

const getAll = async (req, res) => {
    const userId = req.params.user_id
    try {
        const items = await ItemService.getAll(userId)
        res.status(200).send(items)
    } catch(e) {
        console.error('## getAll ##' + e)
        res.status(500).send({message: 'Não foi possível buscar items!'})
    }
}

const getByCategory = async (req, res) => {
    const category = req.params.category
    try {
        const items = await ItemService.getByCategory(category)
        res.status(200).send(items)
    } catch(e) {
        console.error('## getByCategory ##' + e)
        res.status(500).send({message: 'Não foi possível buscar items!'})
    }
}

const updateFavorite = async (req, res) => {
    const itemId = req.params.item_id
    const userId = req.params.user_id

    try {
        await ItemService.updateFavorite(itemId, userId)
        res.status(200).send({message: 'Favoritado!'})
    } catch(e) {
        console.error('## updateFavorite ##' + e.message || e)
        res.status(500).send({message: e.message || 'Não foi possível atualizar items!'})
    }
}

const getAllFavorites = async (req, res) => {
    const userId = req.params.user_id

    try {
        const data = await ItemService.getAllFavorites(userId)
        res.status(200).send(data)
    } catch(e) {
        console.error('## getAllFavorites ##' + e)
        res.status(500).send({message: 'Não foi possível buscar itens!'})
    }
}

module.exports = {
    newItem,
    getAll,
    getByCategory,
    updateFavorite,
    getAllFavorites
}