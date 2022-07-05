const { Router } = require('express')
const router = Router()

// registro
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