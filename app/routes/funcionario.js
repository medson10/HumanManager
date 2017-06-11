module.exports = function(app) {
  var controller = app.controllers.funcionario;

  app.route('/funcionarios')
    .get(controller.listaFuncionarios)
    .post(controller.salvaFuncionario);

  app.route('/funcionarios/:id')
    .get(controller.obtemFuncionario)
    .delete(controller.removeFuncionario);
}
