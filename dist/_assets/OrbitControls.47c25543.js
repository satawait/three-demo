import{V as e,q as t,s as n,Q as o,t as a,u as i,v as s}from"./index.70147efe.js";var c=function(i,c){var r,u,m,l,h,p;void 0===c&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),c===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=i,this.domElement=c,this.enabled=!0,this.target=new e,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.enableKeys=!0,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:t.ROTATE,MIDDLE:t.DOLLY,RIGHT:t.PAN},this.touches={ONE:n.ROTATE,TWO:n.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this.getPolarAngle=function(){return T.phi},this.getAzimuthalAngle=function(){return T.theta},this.saveState=function(){d.target0.copy(d.target),d.position0.copy(d.object.position),d.zoom0=d.object.zoom},this.reset=function(){d.target.copy(d.target0),d.object.position.copy(d.position0),d.object.zoom=d.zoom0,d.object.updateProjectionMatrix(),d.dispatchEvent(b),d.update(),v=g.NONE},this.update=(r=new e,u=(new o).setFromUnitVectors(i.up,new e(0,1,0)),m=u.clone().inverse(),l=new e,h=new o,p=2*Math.PI,function(){var e=d.object.position;r.copy(e).sub(d.target),r.applyQuaternion(u),T.setFromVector3(r),d.autoRotate&&v===g.NONE&&C(2*Math.PI/60/60*d.autoRotateSpeed),d.enableDamping?(T.theta+=y.theta*d.dampingFactor,T.phi+=y.phi*d.dampingFactor):(T.theta+=y.theta,T.phi+=y.phi);var t=d.minAzimuthAngle,n=d.maxAzimuthAngle;return isFinite(t)&&isFinite(n)&&(t<-Math.PI?t+=p:t>Math.PI&&(t-=p),n<-Math.PI?n+=p:n>Math.PI&&(n-=p),T.theta=t<n?Math.max(t,Math.min(n,T.theta)):T.theta>(t+n)/2?Math.max(t,T.theta):Math.min(n,T.theta)),T.phi=Math.max(d.minPolarAngle,Math.min(d.maxPolarAngle,T.phi)),T.makeSafe(),T.radius*=P,T.radius=Math.max(d.minDistance,Math.min(d.maxDistance,T.radius)),!0===d.enableDamping?d.target.addScaledVector(L,d.dampingFactor):d.target.add(L),r.setFromSpherical(T),r.applyQuaternion(m),e.copy(d.target).add(r),d.object.lookAt(d.target),!0===d.enableDamping?(y.theta*=1-d.dampingFactor,y.phi*=1-d.dampingFactor,L.multiplyScalar(1-d.dampingFactor)):(y.set(0,0,0),L.set(0,0,0)),P=1,!!(A||l.distanceToSquared(d.object.position)>O||8*(1-h.dot(d.object.quaternion))>O)&&(d.dispatchEvent(b),l.copy(d.object.position),h.copy(d.object.quaternion),A=!1,!0)}),this.dispose=function(){d.domElement.removeEventListener("contextmenu",se,!1),d.domElement.removeEventListener("mousedown",J,!1),d.domElement.removeEventListener("wheel",te,!1),d.domElement.removeEventListener("touchstart",oe,!1),d.domElement.removeEventListener("touchend",ie,!1),d.domElement.removeEventListener("touchmove",ae,!1),d.domElement.ownerDocument.removeEventListener("mousemove",$,!1),d.domElement.ownerDocument.removeEventListener("mouseup",ee,!1),d.domElement.removeEventListener("keydown",ne,!1)};var d=this,b={type:"change"},E={type:"start"},f={type:"end"},g={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},v=g.NONE,O=1e-6,T=new a,y=new a,P=1,L=new e,A=!1,N=new s,w=new s,j=new s,R=new s,D=new s,k=new s,M=new s,Y=new s,x=new s;function S(){return Math.pow(.95,d.zoomSpeed)}function C(e){y.theta-=e}function H(e){y.phi-=e}var I,z=(I=new e,function(e,t){I.setFromMatrixColumn(t,0),I.multiplyScalar(-e),L.add(I)}),X=function(){var t=new e;return function(e,n){!0===d.screenSpacePanning?t.setFromMatrixColumn(n,1):(t.setFromMatrixColumn(n,0),t.crossVectors(d.object.up,t)),t.multiplyScalar(e),L.add(t)}}(),_=function(){var t=new e;return function(e,n){var o=d.domElement;if(d.object.isPerspectiveCamera){var a=d.object.position;t.copy(a).sub(d.target);var i=t.length();i*=Math.tan(d.object.fov/2*Math.PI/180),z(2*e*i/o.clientHeight,d.object.matrix),X(2*n*i/o.clientHeight,d.object.matrix)}else d.object.isOrthographicCamera?(z(e*(d.object.right-d.object.left)/d.object.zoom/o.clientWidth,d.object.matrix),X(n*(d.object.top-d.object.bottom)/d.object.zoom/o.clientHeight,d.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),d.enablePan=!1)}}();function F(e){d.object.isPerspectiveCamera?P/=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom*e)),d.object.updateProjectionMatrix(),A=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function Z(e){d.object.isPerspectiveCamera?P*=e:d.object.isOrthographicCamera?(d.object.zoom=Math.max(d.minZoom,Math.min(d.maxZoom,d.object.zoom/e)),d.object.updateProjectionMatrix(),A=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),d.enableZoom=!1)}function U(e){N.set(e.clientX,e.clientY)}function V(e){R.set(e.clientX,e.clientY)}function B(e){if(1==e.touches.length)N.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);N.set(t,n)}}function G(e){if(1==e.touches.length)R.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);R.set(t,n)}}function K(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);M.set(0,o)}function W(e){if(1==e.touches.length)w.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);w.set(t,n)}j.subVectors(w,N).multiplyScalar(d.rotateSpeed);var o=d.domElement;C(2*Math.PI*j.x/o.clientHeight),H(2*Math.PI*j.y/o.clientHeight),N.copy(w)}function q(e){if(1==e.touches.length)D.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);D.set(t,n)}k.subVectors(D,R).multiplyScalar(d.panSpeed),_(k.x,k.y),R.copy(D)}function Q(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);Y.set(0,o),x.set(0,Math.pow(Y.y/M.y,d.zoomSpeed)),F(x.y),M.copy(Y)}function J(e){if(!1!==d.enabled){var n;switch(e.preventDefault(),d.domElement.focus?d.domElement.focus():window.focus(),e.button){case 0:n=d.mouseButtons.LEFT;break;case 1:n=d.mouseButtons.MIDDLE;break;case 2:n=d.mouseButtons.RIGHT;break;default:n=-1}switch(n){case t.DOLLY:if(!1===d.enableZoom)return;!function(e){M.set(e.clientX,e.clientY)}(e),v=g.DOLLY;break;case t.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enablePan)return;V(e),v=g.PAN}else{if(!1===d.enableRotate)return;U(e),v=g.ROTATE}break;case t.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===d.enableRotate)return;U(e),v=g.ROTATE}else{if(!1===d.enablePan)return;V(e),v=g.PAN}break;default:v=g.NONE}v!==g.NONE&&(d.domElement.ownerDocument.addEventListener("mousemove",$,!1),d.domElement.ownerDocument.addEventListener("mouseup",ee,!1),d.dispatchEvent(E))}}function $(e){if(!1!==d.enabled)switch(e.preventDefault(),v){case g.ROTATE:if(!1===d.enableRotate)return;!function(e){w.set(e.clientX,e.clientY),j.subVectors(w,N).multiplyScalar(d.rotateSpeed);var t=d.domElement;C(2*Math.PI*j.x/t.clientHeight),H(2*Math.PI*j.y/t.clientHeight),N.copy(w),d.update()}(e);break;case g.DOLLY:if(!1===d.enableZoom)return;!function(e){Y.set(e.clientX,e.clientY),x.subVectors(Y,M),x.y>0?F(S()):x.y<0&&Z(S()),M.copy(Y),d.update()}(e);break;case g.PAN:if(!1===d.enablePan)return;!function(e){D.set(e.clientX,e.clientY),k.subVectors(D,R).multiplyScalar(d.panSpeed),_(k.x,k.y),R.copy(D),d.update()}(e)}}function ee(e){!1!==d.enabled&&(d.domElement.ownerDocument.removeEventListener("mousemove",$,!1),d.domElement.ownerDocument.removeEventListener("mouseup",ee,!1),d.dispatchEvent(f),v=g.NONE)}function te(e){!1===d.enabled||!1===d.enableZoom||v!==g.NONE&&v!==g.ROTATE||(e.preventDefault(),e.stopPropagation(),d.dispatchEvent(E),function(e){e.deltaY<0?Z(S()):e.deltaY>0&&F(S()),d.update()}(e),d.dispatchEvent(f))}function ne(e){!1!==d.enabled&&!1!==d.enableKeys&&!1!==d.enablePan&&function(e){var t=!1;switch(e.keyCode){case d.keys.UP:_(0,d.keyPanSpeed),t=!0;break;case d.keys.BOTTOM:_(0,-d.keyPanSpeed),t=!0;break;case d.keys.LEFT:_(d.keyPanSpeed,0),t=!0;break;case d.keys.RIGHT:_(-d.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),d.update())}(e)}function oe(e){if(!1!==d.enabled){switch(e.preventDefault(),e.touches.length){case 1:switch(d.touches.ONE){case n.ROTATE:if(!1===d.enableRotate)return;B(e),v=g.TOUCH_ROTATE;break;case n.PAN:if(!1===d.enablePan)return;G(e),v=g.TOUCH_PAN;break;default:v=g.NONE}break;case 2:switch(d.touches.TWO){case n.DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&K(e),d.enablePan&&G(e)}(e),v=g.TOUCH_DOLLY_PAN;break;case n.DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&K(e),d.enableRotate&&B(e)}(e),v=g.TOUCH_DOLLY_ROTATE;break;default:v=g.NONE}break;default:v=g.NONE}v!==g.NONE&&d.dispatchEvent(E)}}function ae(e){if(!1!==d.enabled)switch(e.preventDefault(),e.stopPropagation(),v){case g.TOUCH_ROTATE:if(!1===d.enableRotate)return;W(e),d.update();break;case g.TOUCH_PAN:if(!1===d.enablePan)return;q(e),d.update();break;case g.TOUCH_DOLLY_PAN:if(!1===d.enableZoom&&!1===d.enablePan)return;!function(e){d.enableZoom&&Q(e),d.enablePan&&q(e)}(e),d.update();break;case g.TOUCH_DOLLY_ROTATE:if(!1===d.enableZoom&&!1===d.enableRotate)return;!function(e){d.enableZoom&&Q(e),d.enableRotate&&W(e)}(e),d.update();break;default:v=g.NONE}}function ie(e){!1!==d.enabled&&(d.dispatchEvent(f),v=g.NONE)}function se(e){!1!==d.enabled&&e.preventDefault()}d.domElement.addEventListener("contextmenu",se,!1),d.domElement.addEventListener("mousedown",J,!1),d.domElement.addEventListener("wheel",te,!1),d.domElement.addEventListener("touchstart",oe,!1),d.domElement.addEventListener("touchend",ie,!1),d.domElement.addEventListener("touchmove",ae,!1),d.domElement.addEventListener("keydown",ne,!1),-1===d.domElement.tabIndex&&(d.domElement.tabIndex=0),this.update()};(c.prototype=Object.create(i.prototype)).constructor=c;var r=function(e,o){c.call(this,e,o),this.screenSpacePanning=!1,this.mouseButtons.LEFT=t.PAN,this.mouseButtons.RIGHT=t.ROTATE,this.touches.ONE=n.PAN,this.touches.TWO=n.DOLLY_ROTATE};(r.prototype=Object.create(i.prototype)).constructor=r;export{c as O};