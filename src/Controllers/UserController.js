const User = require('../Models/User')

// criando usuário no banco de dados
module.exports = {
    async createUser(req, res) {
        const {
            username,
            password,
            name,
            description,
            site
        } = req.body

        try {
            const createdUser = await User.create({
                username,
                password,
                name,
                description,
                site
            })

            return res.status(200).send({
                message: 'User created succesfully',
                data: createdUser
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async listUser(req, res) {
        try {
            const allUsers = await User.find()
            return res.status(200).send({
                message: 'All users found',
                data: allUsers
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}