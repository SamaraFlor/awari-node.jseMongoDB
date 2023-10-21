const express = require('express')
const router = express.Router()

const ClienteController = require('../Controller/clienteController')

router.post('/cliente', ClienteController.inserir)

module.exports = router