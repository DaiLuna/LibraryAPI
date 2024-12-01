const express = require('express');
const router = express.Router();
const loansController = require('../controllers/loansController');

//Registra novo empréstimo
router.post('/', loansController.createLoan);
//Remove empréstimo
router.put('/:id/removeLoan', loansController.removeLoan)
//Lista todos os empréstimo pendentes
router.get('/activeLoans/:clientId', loansController.findAllLoans);

module.exports = router;