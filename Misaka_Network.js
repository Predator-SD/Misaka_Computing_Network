#!/usr/bin/env node
var dgram = require('dgram');
var net = dgram.createSocket('udp4');
function communicate(words,host){
  var port = 2426;
  var message = new Buffer(words);
  net.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Message sent to ' + host + ':'+ port);
    net.close();
  });
}
function listen(){
  net.on('listening',function(){
    var address = net.address();
    console.log('Misaka Network Server is running properly on '+ address.address+":"+address.port);
  });
  net.on('message',function(message,remote){
    console.log(remote.address +':'+ remote.port +'>'+message);
  });
  net.bind(2426);
}
var run=function(obj){
  var host='';
  var type='';
  var ins='Misaka Misaka is speaking seriously:';
  type+=obj[0];
  if(type=='-l'){
    listen();
  }
  if(type=='-c'){
    for(var mp1 in obj){
      if(mp1>=2){
        ins+=obj[mp1]+' ';
      }
    }
    host+=obj[1];
    communicate(ins,host);
  }
}
run(process.argv.slice(2));
