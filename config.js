var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

var mongoServiceName = 'MONGODB';
var mongoHost = process.env['MONGODB_SERVICE_HOST'];
var mongoPort = process.env['MONGODB_SERVICE_PORT'];
var mongoDatabase = process.env['MONGODB_DATABASE'];
var mongoPassword = process.env['MONGODB_PASSWORD'];
var mongoUser = process.env['MONGODB_USER'];

var mongoURL = 'mongodb://' + mongoHost + ':' +  mongoPort + '/' + mongoDatabase;
var mongoURLLabel = mongoURL;

function display() {
  console.log("port: "+port+", ip: "+ip);
  console.log("mongoURL: "+mongoURL+", mongoURLLabel: "+mongoURLLabel);
  console.log("mongoServiceName: "+mongoServiceName+", mongoHost: "+mongoHost+", mongoPort: "+mongoPort);
  console.log("mongoDatabase: "+mongoDatabase+", mongoPassword: "+mongoPassword+", mongoUser: "+mongoUser);
}

exports.port = port;
exports.ip = ip;
exports.mongoURL = mongoURL;
exports.mongoURLLabel = mongoURLLabel;
exports.mongoServiceName = mongoServiceName;
exports.mongoHost = mongoHost;
exports.mongoPort = mongoPort;
exports.mongoDatabase = mongoDatabase;
exports.mongoPassword = mongoPassword;
exports.mongoUser = mongoUser;

exports.display = display;