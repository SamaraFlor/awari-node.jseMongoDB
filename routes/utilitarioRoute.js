const express = require('express');
const router = express.Router();
const UtilitarioControler = require('../Controller/utilitarioController');

router.post('/carro-utilitario', UtilitarioControler.inserir);

module.exports = router;