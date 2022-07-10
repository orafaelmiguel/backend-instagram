const express = require('express')
const router = require('./Utils/routes')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const mongoConnection = process.env.MONGO_URI
var port = process.env.PORT || 3333

const app = express()
app.use(cors)
app.use(express.json())
app.use(router)


// conexão com banco de dados
mongoose.connect(mongoConnection, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
.then(() => {
    console.log('connected to database')
    app.listen(port, () => {
        console.log('Server running')
    })
})
.catch((error) => {console.log(error)})

