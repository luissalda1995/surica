var connect = require('connect');
var serverStatic = require('serve-static');
connect().use(serverStatic('www')).listen(process.env.PORT || 3000);