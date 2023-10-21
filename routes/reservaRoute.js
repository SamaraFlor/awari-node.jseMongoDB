const express = require('express')
const router = express.Router()

const ReservaController = require('../Controller/reservaController')

router.post('/reserva', ReservaController.inserir)
router.get('/reserva', ReservaController.buscar)
router.put('/reserva', ReservaController.atualizar)

module.exports = router
