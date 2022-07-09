const User = require('../Models/User')

module.exports = {
    async getProfile(req,res) {
        const { user_id } = req.params

        try {
            const userInfo = await User.findById(user_id)

            return res.status(200).send({ 
                message: 'User found',
                userInfo
             })
        } catch (error) {
            return res.status(400).send(error)
        }
    }
}