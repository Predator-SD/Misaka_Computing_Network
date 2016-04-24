#!/usr/bin/env node
var
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http'),
    nodemailer  = require("nodemailer");
var user = 'usr@outlook.com',
    pass = 'pass';
var transport = nodemailer.createTransport("SMTP", {
        host: "smtp-mail.outlook.com", // hostname
        secureConnection: false, // use SSL
        port: 587, // port for secure SMTP
        auth: {
            user: user,
            pass: pass
        }
});
function se(op,res){
  transport.sendMail({
      from    : 'Predator<' + user + '>'
      , to      : '<'+ op +'>'
      , subject : 'Calculation Result'
      , html    : res
  }, function(err, res) {
      console.log(err, res);
  });
}
function httpserver(){
  var root=path.resolve();
  var httpserver = http.createServer(function (request, response) {
      var pathname = url.parse(request.url).pathname;
      var filepath = path.join(root, pathname);
      fs.stat(filepath, function (err, stats) {
          if (!err && stats.isFile()) {
              console.log('200 Misaka Misaka is cheering for the new visitor~' + request.url);
              response.writeHead(200);
              fs.createReadStream(filepath).pipe(response);
          } else {
              console.log('404 Misaka Misaka is speaking regretfully...' + request.url);
              response.writeHead(404);
              response.end('Eee~ It seems that the file you want does not exist,Misaka Misaka is trying to show great sympathy for u~');
          }
      });
  });
  httpserver.listen(2333);
}
function reply(ope,host){
  var cal=require("./cal.js");
  resre((cal.compute()).toString(),host,2427);
  se(ope,cal.compute().toString());
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
  var fornet = "Misaka Misaka finished the work!!!Ah!I need a vacation!!!Here is the result:"+res;
  var message = new Buffer("Misaka Misaka finished the work!!!Ah!I need a vacation!!!Here is the result:"+res);
  net.send(message, 0, message.length, port, host, function(err, bytes){
    if(err) throw err;
    console.log('Result has been sent to ' + host + ':'+ port+" by Misaka!");
    net.close();
  });
  fs.writeFile('Result.SD', fornet, function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log('The result has been put on the site by Misaka Misaka~');
    }
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
    console.log("Contains Check:"+words);
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
    re=str.split(' ');
    var head=re[0];
    //console.log(typeof head);
    console.log(head);
    if(head=='c'){
      var opea=re[1];
      var pm='';
      for(var co in re){
        if(co>=2){
          pm+=re[co];
          pm+=' ';
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
              reply(opea,remote.address);
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
    if(head=='s'){
      var words=re[1];
      console.log(remote.address+':'+remote.port+'>'+words);
      fs.writeFile("./Raw.SD",words);
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
	httpserver();
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
    if(option!='-h'&&option!='-l'&&option!='-c'&&option!='-s'&&option!='-e'){
      console.log("Undefined Action!!! <-h for help>");
    }
    if(option=='-e'&&obj[1]!=undefined&&obj[2]!=undefined&&obj[3]!=undefined){
    	var head3='e ';
    	var insc2
    	for(var mp3 in obj){
    	  if(mp3>=3){
    	    if(obj[mp2]=='e'){
    	    	insc2+='; \n';
    	    }else{
    	    	insc2+=obj[mp2]+' ';
    	    }
    	  }
    	}
    	var rese=head3+insc2;
    	host+=obj[1];
    	communicate(rese,host);
    }
    if(option=='-c'&&obj[1]!=undefined&&obj[2]!=undefined&&obj[3]!=undefined){
      var m=obj[2];
      for(var mp2 in obj){
        if(mp2>=3){
          if(obj[mp2]=='e'){
            insc+='; \n';
          }else{
            insc+=obj[mp2]+' ';
          }
        }
      }
      var head2="c ";
      var res=head2+m+' '+insc;
      host+=obj[1];
      communicate(res,host);
      //listen(2427);
    }
  }
}
run(process.argv.slice(2));
