#!/usr/bin/env node
var dgram = require('dgram');
var client = dgram.createSocket('udp4');
function send(words,host){
  var port = 2426;
  var message = new Buffer(words);
  client.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Message sent to ' + host + ':'+ port);
    client.close();
  });
}
var run=function(obj){
  var host=‘’;
  var ins='Misaka Misaka is speaking seriously:';
  for(var misakaparament1 in obj){
    if(misakaparament1==0){
      host+=obj[0];
    }else{
      ins+=obj[misakaparament1]+' ';
    }
  }
  send(ins,host);
}
run(process.argv.slice(2));
