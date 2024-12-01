const express = require('express');
const router = express.Router();
const reportsController = require('../controllers/reportsController');

//livros mais emprestados
router.get('/mostBorrowed', reportsController.mostBorrowed);
//lista de dividendos
router.get('/activeLoansList', reportsController.clientsWithActiveLoans);

module.exports = router