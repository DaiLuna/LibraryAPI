const express = require('express');
const sequelize = require('./config/database');
require('dotenv').config();

//modelos
const { Clients, Books, Loans } = require('./models/associations');

//importação de rotas
const clientsRoutes = require('./routes/clientsRoutes');
const booksRoutes = require('./routes/booksRoutes');
const loansRoutes = require('./routes/loansRoutes');
const reportsRoutes = require('./routes/reportsRoutes');

const PORT = process.env.PORT || 3000;

const app = express();

//JSON middleware
app.use(express.json());

//rotas
app.use('/clients', clientsRoutes);
app.use('/books', booksRoutes);
app.use('/loans', loansRoutes);
app.use('/reports', reportsRoutes)

//sync de modelos
sequelize.sync({ force: false })
.then(() =>{
  console.log('Modelos: OK');
})
.catch((err) =>{
  console.log('Erro ao sincronizar modelos', err)
});

//rota principal
app.get('/', (req,res) =>{
  res.send('API: OK');
});

app.listen(PORT, () =>{
  console.log(`servidor rodando na porta ${PORT}`)
})