const Post = require('../Models/Post')

module.exports = {
    async createPost(req, res) {
        const {
            picture,
            description
        } = req.body

        const { user } = req.headers

        try {
            const newPost = await Post.create({
                picture,
                description,
                user
            })

            return res.status(200).send({
                message: 'Post created successfully',
                data: newPost
            })
        } catch (error) {
            res.status(400).send(error)
        }
    },

    async listAllPosts(req, res) {

    },

    async deletePost(req, res) {

    },

    async editPost(req, res) {

    }
}