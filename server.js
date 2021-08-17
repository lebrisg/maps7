var express = require('express'),
    app     = express(),
    morgan  = require('morgan');
    
Object.assign=require('object-assign')

app.engine('html', require('ejs').renderFile);
app.use(morgan('combined'))

app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip   = process.env.IP   || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0';

app.get('/', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html>Hello world1!</html>');
});

app.get('/pagecount', function (req, res) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<html>Hello world2!</html>');
});

app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500).send('Something bad happened!');
});

app.listen(port, ip);
console.log('Server running on http://%s:%s', ip, port);

module.exports = app ;

