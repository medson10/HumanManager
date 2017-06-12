module.exports = function(app) {
  var controller = app.controllers.setores;

  app.route('/setores')
    .get(controller.index);
}
