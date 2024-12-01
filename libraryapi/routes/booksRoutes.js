const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

//Adiciona Livro
router.post('/', booksController.addBook);
//Lista todos os Livros
router.get('/', booksController.findAllBooks);
//Busca um livro pelo id
router.get('/:id', booksController.findBook);
//Atualiza cliente
router.put('/:id', booksController.updateBook);
//Deleta cliente
router.delete('/:id', booksController.deleteBook);

module.exports = router;