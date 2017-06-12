let sanitize = require('mongo-sanitize');

module.exports = function(app) {
  let Funcionario = app.models.funcionario;

  let controller = {};

  controller.by_sector = function(req, res) {
    let setor_nome = req.params.setor_nome;
    let promise = Funcionario.find({ setor: setor_nome }).exec()
      .then(
        function(funcionarios) {
          res.json(funcionarios);
        },
        function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        }
      );
  };

  controller.listaFuncionarios = function(req, res) {
    let promise = Funcionario.find().exec()
    .then(
      function(funcionarios) {
        res.json(funcionarios);
      },
      function(erro) {
        console.error(erro);
        res.status(500).json(erro);
      }
    );
  };

  controller.obtemFuncionario = function(req, res) {
    let _id = req.params.id;

    Funcionario.findById(_id).exec()
    .then(
      function(funcionario) {
        if(!funcionario) throw new Error("Funcionario não encontrado");
        res.json(funcionario);
      },
      function(erro) {
        console.log(erro);
        res.status(404).json(erro);
      });
  };

  controller.removeFuncionario = function(req, res) {
    let _id = sanitize(req.params.id);

    Funcionario.remove({"_id": _id}).exec()
    .then(
      function() {
        res.status(204).end();
      },
      function(erro) {
        return console.log(erro);
      }
    );
  };

  controller.salvaFuncionario = function(req, res) {
    let _id = req.body._id;

    let dados = {
      "nome" : req.body.nome,
      "email" : req.body.email,
      "cargo" : req.body.cargo,
      "telefone": req.body.telefone || null,
      "setor" : req.body.setor
    };

    if(_id) {
      Funcionario.findByIdAndUpdate(_id, dados).exec()
      .then (
        function(funcionario) {
          res.json(funcionario);
        },
        function(erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    } else {
      Funcionario.create(dados)
      .then(
        function(funcionario) {
          res.status(201).json(funcionario);
        },
        function(erro) {
          console.log(erro);
          res.status(500).json(erro);
        }
      );
    }
  };

  return controller
};
