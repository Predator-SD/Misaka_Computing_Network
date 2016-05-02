#include <SoftwareSerial.h>

SoftwareSerial s1(1,2);
String num="";
String con="";
int del=27;
String data="";

void setup() {                
 s1.begin(9600);
}

void sendSms(String phonecode ,String content) {
  delay(del*1000);
  s1.println("AT+CMGS=\""+phonecode+"\"");
  delay(500);
  s1.print(content);
  s1.write(0x1A);
}

void met(String raw){
  String type,res;
  int i,j;
  for(i=0;i<=3;i++){
    type+=raw[i];
  }
  for(j=4;raw[j]!='>';j++){
    res+=raw[j];
  }
  if(type=="num<"){
    num=res;
  }else if(type=="con<"){
    con=res;
  }
}

void loop(){
  while(s1.available()>0){
    if(char(s1.read())=='X'){
      if(num!=""&&con!=""){
        sendSms(num,con);
      }
    }else{
      data+=char(s1.read());
      if(char(s1.read())=='>'){
        met(data);
        data="";
      }
      delay(7);
    }
  }
}
