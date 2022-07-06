const { Router } = require('express') // const router = require('express').Router()
const UserController = require('../Controllers/UserController')

const router = Router()

// registro
router.post('/users', UserController.createUser)
router.get('/users', UserController.listUser)
// login
// logout
// feed
// like
// postar foto
// deletar foto
// editar foto
// ver perfil

router.get('/', (req, res) => {
    res.send('Hello World')
})

module.exports = router