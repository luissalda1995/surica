var connect = require('connect');
var serverStatic = require('serve-static');
connect().use(serverStatic('www'));