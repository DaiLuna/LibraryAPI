const Clients = require('./clients');
const Books = require('./books');
const Loans = require('./loans');

Clients.hasMany(Loans, {foreignKey: 'clientId', as:'emprestimos'});
Loans.belongsTo(Clients, { foreignKey: 'clientId', as:'cliente'});

Books.hasMany(Loans, {foreignKey:'bookId', as:'emprestimos'});
Loans.belongsTo(Books, {foreignKey: 'bookId', as:'livro'});

module.exports = { Clients, Books, Loans};