const express = require('express')
const router = express.Router()

const FuncionarioController = require('../Controller/funcionarioController')

router.post('/funcionario', FuncionarioController.inserir)

module.exports = router