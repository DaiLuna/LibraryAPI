const clientRepository = require('../models/clients');

//POST
exports.createClient = async(req,res) => {
  try{
    const newClient = await clientRepository.create(req.body);
    res.status(201).json(newClient)
  }catch(err){
    res.status(500).json({ error: 'Error ao criar cliente.'});
    console.log(err.message);
  }
};

//GET
exports.findAllClients = async(req, res) =>{
  try{
    const clients = await clientRepository.findAll();
    res.status(200).json(clients);
  }catch(err){
    res.status(500).json({ error: 'Error ao buscar Clientes'});
    console.log(err.message);
  }
};

exports.findClient = async(req,res) =>{
  try{
    const client = await clientRepository.findByPk(req.params.id);
    if(!client){
      return res.status(404).json({ error:'Cliente não encontrado.'});
    }
    res.json(client);
  }catch(err){
    res.status(500).json({ error: 'Erro ao buscar Cliente.'});
    console.log(err.message);
  }
};

//PUT
exports.updateClient = async(req, res) =>{
  try{
    const client = await clientRepository.findByPk(req.params.id);
    if(!client){
      return res.status(404).json({ error:'Cliente não encontrado'});
    }
    await client.update(req.body);
    res.json(client);
  }catch(err){
    res.status(500).json({ message: 'Error ao atualizar Cliente. '})
    console.log(err.message);
  }
};

//DELETE
exports.removeClient = async(req, res) =>{
  try{
    const client = await clientRepository.findByPk(req.params.id);
    if (!client){
      return res.status(404).json({ error: 'Cliente não encontrado. '});
    }
    await client.destroy();
    res.json({ message: 'Cliente removido com sucesso. '});
  }catch(err){
    res.status(500).json({ error: 'Erro ao remover cliente. '});
    console.log(err.message);
  }
};
