var PORT = 2426;
var HOST = '127.0.0.1';
var dgram = require('dgram');
var message = new Buffer('Misaka Misaka is calling!!!');
var client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST, function(err, bytes){
  if(err) throw err;
  console.log('Message sent to ' + HOST + ':'+ PORT);
  client.close();
});
