var PORT = 2426;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var message = new Buffer('Misaka Misaka is calling!!!');
var client = dgram.createSocket('udp4');
function send(words){
  var host = '127.0.0.1';
  var port = 2426;
  var message = new Buffer(words);
  client.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Message sent to ' + HOST + ':'+ PORT);
    client.close();
  });
}
send("This is Misaka Misaka~");
