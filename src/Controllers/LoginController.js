const User = require('../Models/User')

module.exports = {
    async login(req, res) {
        const { username, pasword } = req.body

        try {
            const validUsername = await User.findOne({
                username
            })

            if (!validUsername) return res.status(400).send({
                message: 'User does not exist'
            })

            return
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}