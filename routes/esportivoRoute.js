const express = require('express');
const router = express.Router();
const EsportivoController = require('../Controller/esportivoController');

router.post('/carro-esportivo',EsportivoController.inserir);

module.exports = router;