let e=document.createElement("style");e.innerHTML="",document.head.appendChild(e);import{d as a,r as n,o as s,P as t,S as o,A as d,j as i,z as r,x as l,a as c,W as m,v as p,b as u,h as w}from"./index.acf22b8e.js";import{u as f,a as h}from"./index.3c8d0fcc.js";import{O as v}from"./OrbitControls.f1d10cd8.js";import{E as x,R as y,S as P,F as b,P as S}from"./PixelShader.deaa71cf.js";let g=0;const j=(e,a,n,s)=>{const t=e.addFolder(n);t.add(a,"x",-1e3,1e3).onChange(s),t.add(a,"y",-1e3,1e3).onChange(s),t.add(a,"z",-1e3,1e3).onChange(s),t.open()};var F=a({setup(){const e=n(null),a=n(null),F=f.create();return s(()=>{const n=new t(75,2,1,2e3);n.position.set(0,10,20);const s=new o,u=new d(500);s.add(u);const w=new i(500,60,40);w.scale(-1,1,1),a.value.play();const f=new r(a.value),C=new l({map:f}),z=new c(w,C);s.add(z),j(F,z.position,"sphere"),j(F,n.position,"camera");new v(n,e.value).update();const A=new m({canvas:e.value}),E=new x(A);E.addPass(new y(s,n));const q=new P(b);q.enabled=!1,E.addPass(q);const H=new P(S);H.uniforms.resolution.value=new p(1920,1080),H.uniforms.pixelSize.value=16,H.enabled=!1,E.addPass(H),F.add(q,"enabled").name("FilmShader"),F.add(H,"enabled").name("PixelShader");let M=0;const O=e=>{const a=(e*=.001)-M;if(M=e,h(A)){const e=A.domElement;n.aspect=e.clientWidth/e.clientHeight,n.updateProjectionMatrix(),E.setSize(e.width,e.height)}E.render(a),g=requestAnimationFrame(O)};g=requestAnimationFrame(O)}),u(()=>{cancelAnimationFrame(g),f.dispose()}),()=>[w("video",{ref:a,src:"textures/pano.mp4",loop:!0,muted:!0,playsinline:!0,autoplay:!0,crossorigin:"anonymous",style:{display:"none"}}),w("canvas",{ref:e,class:"canvas"})]}});export default F;
