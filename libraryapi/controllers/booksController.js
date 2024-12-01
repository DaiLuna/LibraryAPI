const bookRepository = require('../models/books');

//POST
exports.addBook = async(req, res) => {
  try{
    const newBook = await bookRepository.create(req.body);
    res.status(201).json(newBook);
  }catch(err){
    res.status(500).json({ error: 'Erro ao adicionar livro.'});
    console.log(err.message);
  }
};

//GET
exports.findAllBooks = async(req, res) => {
  try{
    const books = await bookRepository.findAll();
    res.status(200).json(books);
  }catch(err){
    res.status(500).json({ error: 'Erro ao buscar livro. '});
    console.log(err.message);
  }
};

exports.findBook = async(req, res) => {
  try{
    const book = await bookRepository.findByPk(req.params.id);
    if(!book){
      return res.status(404).json({ error:'Livro não encontrado. '});
    }
    res.json(book);
  }catch(err){
    res.status(500).json({ error: 'Erro ao buscar Livro. '});
    console.log(err.message);
  }
};

//PUT
exports.updateBook = async(req, res)=>{
  try{
    const book = await bookRepository.findByPk(req.params.id);
    if(!book){
      return res.status(404).json({ message:'Livro não encontrado. '});
    }
    await book.update(req.body);
    res.json(book);
  }catch(err){
    res.status(500).json({ error: 'Erro ao atualizar livro. '});
    console.log(err.message);
  }
};

exports.deleteBook = async(req, res) =>{
  try{
    const book = await bookRepository.findByPk(req.params.id);
    if(!book){
      return res.status(404).json({ error: 'Livro não encontrado. '});
    }
    await book.destroy();
    res.json({ message: 'Livro deletado com sucesso. '});
  }catch(err){
    res.status(500).json({ error: 'Erro ao deletar livro'});
    console.log(err.message);
  }
};