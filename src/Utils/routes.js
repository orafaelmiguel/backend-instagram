const { Router } = require('express') // const router = require('express').Router()
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const UserController = require('../Controllers/UserController')
const ProfileController = require('../Controllers/ProfileController')
const LikeController = require('../Controllers/LikeController')

const router = Router()

router.get('/', (req, res) => {
    res.send('Instagram')
})

router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)

router.post('/login', LoginController.login)

router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listPosts)
router.delete('/posts/:post_id', PostController.deletePost)
router.put('/posts/:post_id', PostController.editPost)

router.get('/users/:user_id', ProfileController.getProfile)

router.post('/posts/:post_id/like', LikeController.likePost)
router.post('/posts/:post_id/dislike', LikeController.dislikePost)

module.exports = router