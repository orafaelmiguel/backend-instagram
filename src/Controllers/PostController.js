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

    async listPosts(req, res) {
        try {
            const allPosts = await Post.find()
                .populate('user')
            
            return res.status(200).send({
                message: 'All Posts',
                data: allPosts
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async deletePost(req, res) {

    },

    async editPost(req, res) {

    }
}