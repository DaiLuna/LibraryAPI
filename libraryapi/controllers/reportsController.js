const Books = require('../models/books');
const Loans = require('../models/loans');
const Clients = require('../models/clients');
const sequelize = require('../config/database');

exports.mostBorrowed = async (req,res) => {
  try{
    const mostBorrowed = await Books.findAll({
      attributes:[
        'id',
        'titulo',
        //conta emprestimos de um livro
        [sequelize.fn('COUNT', sequelize.col('Loans.id')), 'quantidadeEmprestimos']
      ],
      //JOIN loans
      include: [
        {
          model: Loans,
          as: 'empréstimos',
          attributes:[]
        }
      ],
      group: ['Books.id'],
      //ordena n de emprestimos de form decrescente
      order: [[sequelize.fn('COUNT', sequelize.col('Loans.id')), 'DESC']]
    });
  }catch(err){
    res.status(500).json({ error: 'Erro ao gerar relatório de livros mais emprestados. ' });
    console.log(err.message);
  }
};

//mostra clientes que estão devendo
exports.clientsWithActiveLoans = async(req, res) =>{
  try{
    const clients = await Clients.findAll({
      attributes: [
        'id',
        'nome',
        'CPF'
      ],
      include: {
        model: Loans,
        as: 'emprestimos',
        required: true,
        where: { devolvido: false }
      }
    });

    res.status(200).json(clients)
  }catch(err){
    res.status(500).json({ error: 'Erro ao gerar relatório de clientes com empréstimos pendentes. '});
  }
};