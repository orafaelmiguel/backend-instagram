const Post = require('../Models/Post')
const { findById } = require('../Models/User')

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
        const { post_id } = req.params

        try {
            const deletedPost = await Post.findByIdAndDelete(post_id)

            return res.status(200).send({
                message: 'Deleted successfully',
                data: deletedPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async editPost(req, res) {

    }
}