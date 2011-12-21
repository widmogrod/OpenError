var io = require('socket.io');
var express = require('express');
var fs = require('fs');

/**
 * App.
 */

var app = express.createServer();

/**
 * App configuration.
 */

app.configure(function () {
  // app.use(stylus.middleware({ src: __dirname + '/public', compile: compile }));
  app.use('/public', express.static(__dirname + '/public'));
  // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  // app.set('views', __dirname);
  
  // app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
  
  // app.set('view engine', 'jade');

  // function compile (str, path) {
  //   return stylus(str)
  //     .set('filename', path)
  //     .use(nib());
  // };
});

/**
 * App routes.
 */

app.get('/', function (req, res) {
fs.readFile(__dirname + '/index.html',
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
});

/**
 * App listen.
 */
io = io.listen(app);
app.listen(3000, function () {
  var addr = app.address();
  console.log('   app listening on http://' + addr.address + ':' + addr.port);
});


io.sockets.on('connection', function (socket) {
  socket.emit('news', { hello: 'world' });
  socket.on('my other event', function (data) {
    console.log(data);
  });
});