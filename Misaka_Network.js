#!/usr/bin/env node
var path=require('path');
var fs=require("fs");
function reply(host){
  var cal=require("./cal.js");
  resre((cal.compute()).toString(),host,2427);
  console.log("Result:"+cal.compute());
  console.log("Misaka Misaka has perfectly finished the work!Misaka Misaka is speaking in a brilliant mood!");
  return 0;
}
function sleep(milliSeconds) {
  var startTime = new Date().getTime();
  while (new Date().getTime() < startTime + milliSeconds);
}
function cus(words){
  var fun="module.exports.compute=function(){"+words+"};";
  fs.writeFile("cal.js",fun,function(err){
    if(err) throw err;
    console.log("Request Accepted");
  });
}
function resre(res,host,port){
  var dgram = require('dgram');
  var net = dgram.createSocket('udp4');
  var message = new Buffer("Misaka Misaka finished the work!!!Ah!I need a vacation!!!Here is the result:"+res);
  net.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Result has been sent to ' + host + ':'+ port+" by Misaka!");
    net.close();
  });
}
function communicate(words,host){
  var dgram = require('dgram');
  var net = dgram.createSocket('udp4');
  var port = 2426;
  var message = new Buffer(words);
  net.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Message sent to ' + host + ':'+ port);
    net.close();
  });
}
function LASTORDER(){
  var dgram = require('dgram');
  var net = dgram.createSocket('udp4');
  net.on('listening',function(){
    var address = net.address();
    console.log('Misaka Network Server is running properly on '+ address.address+":"+address.port);
  });
  net.on('message',function(message,remote){
    //console.log('Raw message:'+message);
    var str=message.toString();
    var head='';
    head+=str[0];
    head+=str[1];
    //console.log(typeof head);
    console.log(head);
    if(head=='c '){
      var pm='';
      for(var m in str){
        if(m>=2){
          pm+=str[m];
        }
      }
      console.log(pm);
      cus(pm);
      console.log("Calculating...");
      var isready=false;
      var i;
      for(i=0;i<=7200;i++){
        if(isready==true){
          sleep(1000);
        }
        fs.readFile("cal.js","utf8",function(error,data){
          if(error) throw error;
          if(data!=''){
            if(isready==false){
              reply(remote.address);
              var pwd=path.resolve();
              pwd+='/cal.js';
              delete require.cache[pwd];
              console.log(remote.address);
              isready=true;
              fs.writeFile("./cal.js",'');
            }
          }
        });
      }
    }
    if(head=='s '){
      var words='';
      for(var n in str){
        if(n>=2){
          words+=str[n];
        }
      }
      console.log(remote.address+':'+remote.port+'>'+words);
    }
  });
  net.bind(2426);
}
function listen(port){
  var dgram = require('dgram');
  var net = dgram.createSocket('udp4');
  net.on('listening',function(){
    var address = net.address();
    console.log('Misaka Network Server is running properly on '+ address.address+":"+address.port);
  });
  net.on('message',function(message,remote){
    console.log(remote.address +':'+ remote.port +'>'+message);
  });
  net.bind(port);
}
var run=function(obj){
  var host='';
  var type='';
  var ins='';
  var insc='';
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
      console.log("->1. '-l' for LAST_ORDER Mode > Used for starting a server.");
      console.log("->2. '-s' for Sending Mode > Used for sending requesting.");
      console.log("->3. '-c' for Cloud_Computing Mode > Used for cluster computing.");
      console.log("================================================================");
    }
    if(option=='-l'){
      var portstart=new Number(0);
      var portend=new Number(0);
      if(obj[1]==undefined){
        LASTORDER();
      }
    }
    if(option=='-s'&&obj[1]!=undefined&&obj[2]!=undefined){
      for(var mp1 in obj){
        if(mp1>=2){
          ins+=obj[mp1]+' ';
        }
      }
      var head="s Misaka Misaka is speaking in a joyful voice:";
      var mes=head+ins;
      host+=obj[1];
      communicate(mes,host);
    }
    if(option!='-h'&&option!='-l'&&option!='-c'&&option!='-s'){
      console.log("Undefined Action!!! <-h for help>");
    }
    if(option=='-c'&&obj[1]!=undefined&&obj[2]!=undefined){
      for(var mp2 in obj){
        if(mp2>=2){
          if(obj[mp2]=='e'){
            insc+='; ';
          }else{
            insc+=obj[mp2]+' ';
          }
        }
      }
      var head2="c ";
      var res=head2+insc;
      host+=obj[1];
      communicate(res,host);
      listen(2427);
    }
  }
}
run(process.argv.slice(2));
