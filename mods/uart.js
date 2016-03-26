var m = require('mraa'); 
u = new m.Uart(2)
function sleep(delay) {
  delay += new Date().getTime();
  while (new Date() < delay) { }
}
u.setBaudRate(9600);
u.setMode(8, 0, 1);
u.setFlowcontrol(false, false);
console.log("Serial Test will start in 1s...\n")
sleep(1000);
console.log(u.readStr(6));
sleeo(100);
console.log(u.readStr(10));
