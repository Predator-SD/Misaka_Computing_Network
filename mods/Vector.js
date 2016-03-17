/*

                   Y
                   |
                   |
                   |
                   |
                   |
                   |
                  /----------------Z
                 /
                /
               /
              /
             X

*/
var map=function(val,input,out){
  var min1=input[0];
  var max1=input[1];
  var min2=out[0];
  var max2=out[1];
  var a=input[1]-input[0];
  var b=out[1]-out[0];
  var res=(((val-min1)/a)*b)+min2;
  return res;
};
var vxm=function(u,v){
  var x=u[1]*v[2]-v[1]*u[2];
  var y=u[2]*v[0]-v[2]*u[0];
  var z=u[0]*v[1]-u[1]*v[0];
  var res=new Array();
  res[0]=x;
  res[1]=y;
  res[2]=z;
  return res;
};
var vdm=function(u,v){
  var p1=u[0]*v[0];
  var p2=u[1]*v[1];
  var p3=u[2]*v[2];
  var res=p1+p2+p3;
  return res;
};
var vp=function(u,v){
  var x=u[0]+v[0];
  var y=u[1]+v[1];
  var z=u[2]+v[2];
  var res=new Array();
  res[0]=x;
  res[1]=y;
  res[2]=z;
  return res;
};
var rtd=function(rad){
  var deg=rad*(180/Math.PI);
  return deg;
};
var arcsin=function(sin){
  var rasin=Math.asin(sin);
  var dasin=rtd(rasin);
  return dasin;
};
var arccos=function(cos){
  var racos=Math.acos(cos);
  var dacos=rtd(racos);
  return dacos;
};
var sind=function(theta){
  var rad=theta*Math.PI/180;
  return Math.sin(rad);
};
var cosd=function(theta){
  var rad=theta*Math.PI/180;
  return Math.cos(rad);
};
var Euler=function(xt,yt,zt){
  x=sind(yt/2)*sind(zt/2)*cosd(xt/2)+cosd(yt/2)*cosd(zt/2)*sind(xt/2);
  y=cosd(yt/2)*sind(zt/2)*sind(xt/2)+sind(yt/2)*cosd(zt/2)*cosd(xt/2);
  z=cosd(yt/2)*sind(zt/2)*cosd(xt/2)-sind(yt/2)*cosd(zt/2)*sind(xt/2);
  w=cosd(yt/2)*cosd(zt/2)*cosd(xt/2)-sind(yt/2)*sind(zt/2)*sind(xt/2);
  var Quaternion=new Array();
  Quaternion[0]=x;
  Quaternion[1]=y;
  Quaternion[2]=z;
  Quaternion[3]=w;
  return Quaternion;
};
var qv=function(q){
  var x=q[0];
  var y=q[1];
  var z=q[2];
  var res = new Array();
  res[0]=x;
  res[1]=y;
  res[2]=z;
  return res;
};
var nmv=function(num,vec){
  x=num*vec[0];
  y=num*vec[1];
  z=num*vec[2];
  res=new Array();
  res[0]=x;
  res[1]=y;
  res[2]=z;
  return res;
};
var qmu=function(q1,q2){
  var v1=new Array();
  var v2=new Array();
  v1=qv(q1);
  v2=qv(q2);
  var w1=q1[3];
  var w2=q2[3];
  var p1=new Array();
  p1=vp(vp(vxm(v1,v2),nmv(w1,v2)),nmv(w2,v1));
  var p2=w1*w2-vdm(v1,v2);
  var res=new Array();
  res[0]=p1[0];
  res[1]=p1[1];
  res[2]=p1[2];
  res[3]=p2;
  return res;
};
var vtq=function(vec){
  var Q=new Array();
  Q[0]=vec[0];
  Q[1]=vec[1];
  Q[2]=vec[2];
  Q[3]=0;
  return Q;
};
var cq=function(Q){
  var res=new Array();
  res[0]=(-1)*Q[0];
  res[1]=(-1)*Q[1];
  res[2]=(-1)*Q[2];
  res[3]=Q[3];
  return res;
};
var N=function(q){
  var orin=Math.pow(q[0],2)+Math.pow(q[1],2)+Math.pow(q[2],2)+Math.pow(q[3],2);
  return Math.sqrt(orin);
};
var iq=function(Q){
  var m=1;//Change this into N(Q)
  var con=cq(Q);
  var res=new Array();
  res[0]=con[0]/m;
  res[1]=con[1]/m;
  res[2]=con[2]/m;
  res[3]=con[3]/m;
  return res;
};
var Quaternion_Transform=function(V,Q){
  var QI=iq(Q);
  var P=vtq(V);
  var resq=qmu(qmu(Q,P),QI);
  var resv=new Array();
  resv[0]=resq[0];
  resv[1]=resq[1];
  resv[2]=resq[2];
  return resv;
};
var Vector_Transform=function(Vector,Theta){
  var Quaternion=Euler(Theta[0],Theta[1],Theta[2]);
  var Result=Quaternion_Transform(Vector,Quaternion);
  return Result;
};
var Utral_Vector_Transform=function(Vector,Axis,Theta){
  var Quaternion=new Array();
  var ts=sind(Theta/2);
  var tc=cosd(Theta/2);
  var W=tc;
  var V=nmv(ts,Axis);
  Quaternion[0]=V[0];
  Quaternion[1]=V[1];
  Quaternion[2]=V[2];
  Quaternion[3]=W;
  var Result=Quaternion_Transform(Vector,Quaternion);
  return Result;
};
var gtd=function(g){
  var t=0.9*g;
  return t;
};
var mo=function(x,y){
  var m=Math.sqrt(Math.pow(x,2)+Math.pow(y,2));
  return m;
};
var ta=function(x,y){
  var theta=arcsin(y/(mo(x,y)));
  return theta;
};
var accelerator_static_2D_predictor=function(vec1,vec2){
  var x1=vec1[0];
  var y1=vec1[1];
  var x2=vec2[0];
  var y2=vec2[1];
  var t1=ta(x1,y1);
  var t2=ta(x2,y2);
  var m=mo(x2,y2);
  var pt=t1+t2-90;
  var u=m*cosd(pt);
  var v=m*sind(pt);
  var Future_Vec=new Array();
  Future_Vec[0]=u;
  Future_Vec[1]=v;
  return Future_Vec;
};
var translate2d=function(vec,t){
	var u=cosd(t)*vec[0]+cosd(90+t)*vec[1];
	var v=sind(t)*vec[0]+sind(90+t)*vec[1];
	var Base=new Array();
	Base[0]=u;
	Base[1]=v;
	return Base;
};
//Exports:
module.exports.VT=Vector_Transform;
module.exports.UVT=Utral_Vector_Transform;
module.exports.Cross=vxm;
module.exports.Dot=vdm;
module.exports.Plus=vp;
module.exports.sind=sind;
module.exports.cosd=cosd;
module.exports.Euler=Euler;
module.exports.Quaternion_Inverse=iq;
module.exports.Quaternion_Norm=N;
module.exports.Quaternion_Multiply=qmu;
module.exports.RTD=rtd;
module.exports.ARCSIN=arcsin;
module.exports.ARCCOS=arccos;
module.exports.MAP=map;
module.exports.ASV2D=accelerator_static_2D_predictor;
module.exports.TA=ta;
module.exports.Mo=mo;
module.exports.T2D=translate2d;
