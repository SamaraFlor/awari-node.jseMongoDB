const { query } = require("express");
const Promocao = require("../models/promocao");
const cliente = require("../models/cliente");

module.exports = class PromocaoController {

    static async inserir(req, res) {
        console.log(req.body)

        const promocao = new Promocao({
            titulo: req.body.titulo,
            descricao: req.body.descricao,
            dtValidade: req.body.dtValidade,
        });

        promocao.save(promocao).then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || `Erro ao tentar inserir os dados da promoção: ${promocao}.`
            });
        });
    }

    static async enviarPromocao(req,res){
        const { id }  =  req.query;

        const encontrarPromocao = await Promocao.findById(id);
        console.log(encontrarPromocao);
        const encontrarCliente = await cliente.find({});
        console.log(encontrarCliente);

        res.json({'promocao': encontrarPromocao, 'clientes': encontrarCliente})
    }

}