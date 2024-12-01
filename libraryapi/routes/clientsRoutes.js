const express = require('express');
const router = express.Router();
const clientsController = require('../controllers/clientsController');

//Cria um novo cliente
router.post('/',clientsController.createClient);
//Lista todos os clientes
router.get('/',clientsController.findAllClients);
//Busca um cliente pelo id
router.get('/:id', clientsController.findClient);
//Atualiza cliente
router.put('/:id', clientsController.updateClient);
//Deleta cliente
router.delete('/:id', clientsController.removeClient);

module.exports = router;