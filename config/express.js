import express from 'express';
import bodyParser from 'body-parser';
import load from 'express-load';
import cookieParser from 'cookie-parser';

module.exports = function() {
  const app = express();
  app.set('port', 3000);

  app.use(express.static('./public'));
  app.set('view engine', 'ejs');
  app.set('views','./app/views');
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(cookieParser());
  app.use(require('method-override')());

  load('models', { cwd: 'app' })
        .then('controllers')
        .then('routes')
        .into(app);

  // app.get('*', function(req, res) {
  //     res.status(404).render('404');
  // });

  return app;

}
