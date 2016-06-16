var sd=require('./Vector.js');
console.time('Matrix Permutation');
var i;
for(var j=0;j<=1000000;j++){
  i=sd.PR(j,2*j,1.2*j,1.5*j,1.7*j,1.8*j);
}
console.timeEnd('Matrix Permutation');
