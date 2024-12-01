const loanRepository = require('../models/loans');
const bookRepository = require('../models/books');
const clientRepository = require('../models/clients');

//ver se tem que declarar bookrepo para atualizar status do livro
//POST
exports.createLoan = async(req, res) =>{
  try{
    //Foreign Keys
    const{ clientId, bookId } = req.body

    //verifica numero de emprestimos
    const activeLoans = await loanRepository.count({
      where: { clientId, devolvido: false } 
    });

    if(activeLoans >= 3 || !bookId.disponivel){
      return res.status(400).json({error:'Usuário atingiu o limite de Empréstimos. '});
    }

    const loan = await loanRepository.create({ clientId, bookId });    
    res.status(500).json({ message: 'Empréstimo registrado registrado com sucesso. '});

    //atualiza disponibilidade do livro
    bookId.disponivel = false;
  }catch(err){
    res.status(500).json({ error: 'Erro ao registrar empréstimo. '});
    console.log(err.message);
  }
};

//PUT
exports.removeLoan = async(req, res) =>{
  try{
    const { id } = req.params;

    const loan = await loanRepository.findByPk(id);
    if(!loan){
      return res.status(404).json({ error:'Empréstimo não encontrado. '})
    }

    //Atulizar status do empréstimo
    loan.devolvido = true;
    loan.dataDevolucao = new Date();
    await loan.save();

    res.json({message: 'Livro retornado com sucesso, status do empréstimo atualizado'})
  }catch(err){
    res.status(500).json({ error:'Erro ao remover empréstimo'});
    console.log(err.message);
  }
};

//GET
exports.findAllLoans = async(req, res) =>{
  try{
    const {clientId} = req.params;

    const activeLoans = await loanRepository.findAll({
      where: { clientId, devolvido: false},
      include: [
        { model: clientRepository, as:'cliente' },
        { model: bookRepository, as: 'livro'}
      ]
    });

    res.json(activeLoans);

  }catch(err){
    res.status(500).json({ error: 'Erro ao buscar empréstimo pendentes. '});
    console.log(err.message);
  }
};

