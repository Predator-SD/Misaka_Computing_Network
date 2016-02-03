var dgram = require('dgram');
var server = dgram.createSocket('udp4');
server.on('listening',function(){
  var address = server.address();
  console.log('Misaka Network Server is running properly on '+ address.address +":"+ address.port);
});
function receive(){
  server.on('message',function(message,remote){
    console.log(remote.address +':'+ remote.port +' - ' +message);
  });
}
receive();
server.bind(2426);