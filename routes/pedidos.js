const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).send({
        mensagem: 'Retorna todos os Pedidos'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Insere Pedido'
    });
});

router.get('/:id_pedido', (req, res, next) => {
    const id = req.params.id_pedido

    if( id === 'especial'){
        res.status(200).send({
            mensagem: 'Você descobriu o ID especial! :D ',
            id: id
        });
    } else {
        res.status(200).send({
           mensagem: 'Você passou um ID ;)' 
        });
    }
});

router.delete('/', (req, res, next) => {
    res.status(201).send({
        mensagem: 'Removido o pedido'
    });
});

module.exports = router;