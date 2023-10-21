const express = require('express')
const router = express.Router()

const PromocaoController = require('../Controller/promocaoController')

router.post('/promocao', PromocaoController.inserir)
router.get('/enviar-promocao', PromocaoController.enviarPromocao)

module.exports = router