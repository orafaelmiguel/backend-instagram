const { Router } = require('express') // const router = require('express').Router()
const LoginController = require('../Controllers/LoginController')
const PostController = require('../Controllers/PostController')
const UserController = require('../Controllers/UserController')

const router = Router()

// Rotas linkadas aos arquivos na posta Controllers
// registro
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)
// login
router.post('/login', LoginController.login)
// logout
// feed
router.post('/posts', PostController.createPost)
router.get('/posts', PostController.listAllPosts)
router.delete('/post/:post_id', PostController.deletePost)
router.put('/post/:post_id', PostController.editPost)
// like
// postar foto
// deletar foto
// editar foto
// ver perfil

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router