var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic('www')).listen(process.env.PORT)