let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as a,r as n,o as t,S as s,P as o,B as i,M as r,a as c,D as d,W as l,b as m,h as p}from"./index.70147efe.js";import{r as u,a as w}from"./index.426d9030.js";let f=0;var v=a({setup(){const e=n(null);return t(()=>{const a=new s,n=new o(75,2,.1,5);n.position.z=2;const t=new i,m=new r({color:u()}),p=new c(t,m);a.add(p);const v=new d;v.position.set(-1,2,4),a.add(v);const x=new l({canvas:e.value}),h=()=>{if(w(x)){const e=x.domElement;n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix()}p.rotation.x+=.01,p.rotation.y+=.01,x.render(a,n),f=requestAnimationFrame(h)};h()}),m(()=>{cancelAnimationFrame(f)}),()=>p("canvas",{ref:e,class:"canvas"})}});export default v;
