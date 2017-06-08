const http = require('http');
const app = require('./config/express') ();
require('./config/db.js')('mongodb://<medson>:<A12345678a>@ds161551.mlab.com:61551/humanmanager');

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express Server escutando na porta ' + app.get('port'));
});
