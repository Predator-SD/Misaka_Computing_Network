function vxm(u,v){
  var x=u.Y*v.Z-v.Y*u.Z;
  var y=u.Z*v.X-v.Z*u.X;
  var z=u.X*v.Y-u.Y*v.X;
  var res=new Object();
  res.X=x;
  res.Y=y;
  res.Z=z;
  return res;
}
function vdm(u,v){
  var p1=u.X*v.X;
  var p2=u.Y*v.Y;
  var p3=u.Z*v.Z;
  var res=p1+p2+p3;
  return res;
}
function vp(u,v){
  x=u.X+v.X;
  y=u.Y+v.Y;
  z=u.Z+v.Z;
  var res=new Object();
  res.X=x;
  res.Y=y;
  res.Z=z;
  return res;
}
function sind(theta){
  rad=theta*Math.PI/180;
  return Math.sin(rad);
}
function cosd(theta){
  rad=theta*Math.PI/180;
  return Math.cos(rad);
}
function Euler(xt,yt,zt){
  x=sind(yt/2)*sind(zt/2)*cosd(xt/2)+cosd(yt/2)*cosd(zt/2)*sind(xt/2);
  y=cosd(yt/2)*sind(zt/2)*sind(xt/2)+sind(yt/2)*cosd(zt/2)*cosd(xt/2);
  z=cosd(yt/2)*sind(zt/2)*cosd(xt/2)-sind(yt/2)*cosd(zt/2)*sind(xt/2);
  w=cosd(yt/2)*cosd(zt/2)*cosd(xt/2)-sind(yt/2)*sind(zt/2)*sind(xt/2);
  var Quaternion=new Object();
  Quaternion.X=x;
  Quaternion.Y=y;
  Quaternion.Z=z;
  Quaternion.W=w;
  return Quaternion;
}
function qv(q){
  var x=q.X;
  var y=q.Y;
  var Z=q.Z;
  var res = new Object();
  res.X=x;
  res.Y=y;
  res.Z=z;
  return res;
}
function nmv(num,vec){
  x=num*vec.X;
  y=num*vec.Y;
  z=num*vec.Z;
}
function qmu(q1,q2){
  var v1=new Object();
  var v2=new Object();
  v1=qv(q1);
  v2=qv(q2);
  var w1=q1.W;
  var w2=q2.W;
  var p1=new Object();
  p1=vp(vp(vxm(v1,v2),nmv(w1,v2)),nmv(w2,v1));
  var p2=w1*w2-vdm(v1,v2);
  var res=new Object();
  res.X=p1.X;
  res.Y=p1.Y;
  res.Z=p1.Z;
  res.W=p2;
  return res;
}
function N(q){
  var orin=Math.pow(q.X,2)+Math.pow(q.Y,2)+Math.pow(q.Z,2)+Math.pow(q.W,2);
  return Math.sqrt(orin);
}
var a=Euler(0,45,0);
console.log(a);
