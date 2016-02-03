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
  if(obj[0]==undefined){
    console.log("=====================================================");
    console.log("|             Misaka_Computating_Network            |");
    console.log("|               Open Source Framework               |");
    console.log("|                       By SD                       |");
    console.log("|             Email:zswdzly@outlook.com             |");
    console.log("|   Git:Predator-SD/Misaka_Computating_Network.git  |");
    console.log("|                                                   |");
    console.log("|                     QWERTY                        |");
    console.log("|                      2333                         |");
    console.log("=====================================================");
  }else{
    var option='';
    option+=obj[0];
    if(option=='-h'){
      console.log("Misaka Network for computating");
      console.log('');
      console.log("Form:node Misaka_Network.js [-option] [stuff]");
      console.log('');
      console.log("Options:");
      console.log("->1. '-l' for Listen Mode > Used for starting a server.");
      console.log("->2. '-c' for Communicate Mode > Used for sending requesting.");
      console.log("================================================================");
    }
    if(option=='-l'){
      listen();
    }
    if(option=='-c'){
      for(var mp1 in obj){
        if(mp1>=2){
          ins+=obj[mp1]+' ';
        }
      }
      host+=obj[1];
      communicate(ins,host);
    }
    if(option!='-h'&&option!='-l'&&option!='-c'){
      console.log("Undefined Action!!! <-h for help>");
    }
  }
}
run(process.argv.slice(2));
