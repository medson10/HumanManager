let sanitize = require('mongo-sanitize');

module.exports = function(app) {

  let controller = {};

  controller.index = function(req, res) {
    let setores = [
      { id: 1, setor: 'Vendas' },
      { id: 2, setor: 'Recursos Humanos' },
      { id: 3, setor: 'Financeiro' }
    ];
    res.status(200).json(setores);
  };

  return controller;
};
