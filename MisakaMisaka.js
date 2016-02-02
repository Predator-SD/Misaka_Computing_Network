var dgram = require('dgram');
var client = dgram.createSocket('udp4');
function send(words){
  var host = '127.0.0.1';
  var port = 2426;
  var message = new Buffer(words);
  client.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Message sent to ' + host + ':'+ port);
    client.close();
  });
}
send("This is Misaka Misaka~");
