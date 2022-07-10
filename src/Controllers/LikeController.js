const Post = require('../Models/Post')

module.exports = {
    async likePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const likedPost = await Post.findById(post_id)
            if (!likedPost) return res.status(400).send({ message: 'This post not exists' })

            if (likedPost.likes.includes(user_id)) return res.status(400).send({ message: 'Post already liked' })

            likedPost.likes.push(user_id)
            
            await likedPost.save()

            return res.status(200).send({
                message: 'Post liked',
                likedPost
            })
        } catch (error) {
            return res.status(400).send(error)
        }
    },

    async dislikePost(req, res) {
        const { post_id } = req.params
        const { user_id } = req.headers

        try {
            const dislikedPost = await Post.findById(post_id)
            if (!dislikedPost) return res.status(400).send({ message: 'This post not exists' })

            if (!dislikedPost.likes.includes(user_id)) return res.status(400).send({ message: 'Post not liked yet' })

            dislikedPost.likes.pull(user_id)
            await dislikedPost.save()

            return res.status(200).send({
                message: 'Unliked post',
                dislikedPost
            })
        } catch (error) {
            return res.status(200).send(error)
        }
    }
}