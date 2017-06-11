import mongoose from 'mongoose';

module.exports = function() {
  let schema = mongoose.Schema({
    nome: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    cargo: {
      type: String,
      required: true
    },
    telefone: {
      type: String
    },
    setor: {
      type: String,
      required: true
    }

  });
  return mongoose.model('Funcionario', schema);
};
