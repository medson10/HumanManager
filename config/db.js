import mongoose from 'mongoose';

module.exports = function(uri) {

  const options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } },
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };

  mongoose.connect(uri, options);

  mongoose.connection.on('connected', function() {
    console.log('Mongoose! Conectado em ' + uri);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose! Desconectado de ' + uri);
  });

  mongoose.connection.on('error', function(erro) {
    console.log('Mongoose! Erro na conexão: ' + erro);
  });

  process.on('SIGINT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose! Desconectado pelo término da aplicação');
      process.exit(0);
    });
  });

}
