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
        const { user_id } = req.headers

        try {
            // Proibindo qualquer usuário de deletar o post
            const belongToUser = await Post.findOne({ user: user_id }).where({ _id: post_id })
            if (!belongToUser) return res.status(400).send({ message: "You don't have permission to do this." })

            const postExists = await Post.findById(post_id)
            if (!postExists) return res.status(400).send('Post does not exists')

            const deletedPost = await Post.findByIdAndDelete(post_id)

            return res.status(200).send({
                message: 'Deleted successfully',
                data: deletedPost
            })
        } catch (error) {
            return res.status(404).send({ message: 'System Error' })
        }
    },

    async editPost(req, res) {
        const { description } = req.body
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            // Proibindo qualquer usuário de editar o post
            const belongToUser = await Post.findOne({ user: user_id }).where({ _id: post_id })
            if(!belongToUser) return res.status(400).send({ message: "You don't have permissions to do this." })

            const existsPost = await Post.findById(post_id)
            if (!existsPost) return res.status(400).send({ message: 'Post does not exists' })

            const editPost = await Post.findByIdAndUpdate(post_id, {
                description
            }, {
                new: true 
            })

            return res.status(200).send({
                message: 'Update Successfully',
                data: editPost
            })
        } catch (error) {
            return res.status(400).send({ message: 'Code error' })
        }
    }
}