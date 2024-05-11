import"https://code.jquery.com/jquery-3.6.0.min.js";var Ri="top",Eo="bottom",xo="right",zi="left",mu="auto",Ic=[Ri,Eo,xo,zi],Ba="start",Cc="end",kC="clippingParents",Zf="viewport",_c="popper",_C="reference",$f=Ic.reduce(function(x,f){return x.concat([f+"-"+Ba,f+"-"+Cc])},[]),Jf=[].concat(Ic,[mu]).reduce(function(x,f){return x.concat([f,f+"-"+Ba,f+"-"+Cc])},[]),wC="beforeRead",AC="read",vC="afterRead",CC="beforeMain",yC="main",EC="afterMain",xC="beforeWrite",TC="write",DC="afterWrite",SC=[wC,AC,vC,CC,yC,EC,xC,TC,DC];function zr(x){return x?(x.nodeName||"").toLowerCase():null}function To(x){if(x==null)return window;if(x.toString()!=="[object Window]"){var f=x.ownerDocument;return f&&f.defaultView||window}return x}function La(x){var f=To(x).Element;return x instanceof f||x instanceof Element}function Xo(x){var f=To(x).HTMLElement;return x instanceof f||x instanceof HTMLElement}function Xf(x){if(typeof ShadowRoot>"u")return!1;var f=To(x).ShadowRoot;return x instanceof f||x instanceof ShadowRoot}function aM(x){var f=x.state;Object.keys(f.elements).forEach(function(A){var P=f.styles[A]||{},j=f.attributes[A]||{},h=f.elements[A];!Xo(h)||!zr(h)||(Object.assign(h.style,P),Object.keys(j).forEach(function(L){var V=j[L];V===!1?h.removeAttribute(L):h.setAttribute(L,V===!0?"":V)}))})}function cM(x){var f=x.state,A={popper:{position:f.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(f.elements.popper.style,A.popper),f.styles=A,f.elements.arrow&&Object.assign(f.elements.arrow.style,A.arrow),function(){Object.keys(f.elements).forEach(function(P){var j=f.elements[P],h=f.attributes[P]||{},L=Object.keys(f.styles.hasOwnProperty(P)?f.styles[P]:A[P]),V=L.reduce(function(_,K){return _[K]="",_},{});!Xo(j)||!zr(j)||(Object.assign(j.style,V),Object.keys(h).forEach(function(_){j.removeAttribute(_)}))})}}const tp={name:"applyStyles",enabled:!0,phase:"write",fn:aM,effect:cM,requires:["computeStyles"]};function Pr(x){return x.split("-")[0]}var Oa=Math.max,uu=Math.min,yc=Math.round;function Wf(){var x=navigator.userAgentData;return x!=null&&x.brands&&Array.isArray(x.brands)?x.brands.map(function(f){return f.brand+"/"+f.version}).join(" "):navigator.userAgent}function IC(){return!/^((?!chrome|android).)*safari/i.test(Wf())}function Ec(x,f,A){f===void 0&&(f=!1),A===void 0&&(A=!1);var P=x.getBoundingClientRect(),j=1,h=1;f&&Xo(x)&&(j=x.offsetWidth>0&&yc(P.width)/x.offsetWidth||1,h=x.offsetHeight>0&&yc(P.height)/x.offsetHeight||1);var L=La(x)?To(x):window,V=L.visualViewport,_=!IC()&&A,K=(P.left+(_&&V?V.offsetLeft:0))/j,q=(P.top+(_&&V?V.offsetTop:0))/h,U=P.width/j,E=P.height/h;return{width:U,height:E,top:q,right:K+U,bottom:q+E,left:K,x:K,y:q}}function ep(x){var f=Ec(x),A=x.offsetWidth,P=x.offsetHeight;return Math.abs(f.width-A)<=1&&(A=f.width),Math.abs(f.height-P)<=1&&(P=f.height),{x:x.offsetLeft,y:x.offsetTop,width:A,height:P}}function MC(x,f){var A=f.getRootNode&&f.getRootNode();if(x.contains(f))return!0;if(A&&Xf(A)){var P=f;do{if(P&&x.isSameNode(P))return!0;P=P.parentNode||P.host}while(P)}return!1}function ks(x){return To(x).getComputedStyle(x)}function lM(x){return["table","td","th"].indexOf(zr(x))>=0}function ta(x){return((La(x)?x.ownerDocument:x.document)||window.document).documentElement}function bu(x){return zr(x)==="html"?x:x.assignedSlot||x.parentNode||(Xf(x)?x.host:null)||ta(x)}function Ov(x){return!Xo(x)||ks(x).position==="fixed"?null:x.offsetParent}function dM(x){var f=/firefox/i.test(Wf()),A=/Trident/i.test(Wf());if(A&&Xo(x)){var P=ks(x);if(P.position==="fixed")return null}var j=bu(x);for(Xf(j)&&(j=j.host);Xo(j)&&["html","body"].indexOf(zr(j))<0;){var h=ks(j);if(h.transform!=="none"||h.perspective!=="none"||h.contain==="paint"||["transform","perspective"].indexOf(h.willChange)!==-1||f&&h.willChange==="filter"||f&&h.filter&&h.filter!=="none")return j;j=j.parentNode}return null}function Il(x){for(var f=To(x),A=Ov(x);A&&lM(A)&&ks(A).position==="static";)A=Ov(A);return A&&(zr(A)==="html"||zr(A)==="body"&&ks(A).position==="static")?f:A||dM(x)||f}function np(x){return["top","bottom"].indexOf(x)>=0?"x":"y"}function Tl(x,f,A){return Oa(x,uu(f,A))}function uM(x,f,A){var P=Tl(x,f,A);return P>A?A:P}function NC(){return{top:0,right:0,bottom:0,left:0}}function OC(x){return Object.assign({},NC(),x)}function BC(x,f){return f.reduce(function(A,P){return A[P]=x,A},{})}var hM=function(f,A){return f=typeof f=="function"?f(Object.assign({},A.rects,{placement:A.placement})):f,OC(typeof f!="number"?f:BC(f,Ic))};function fM(x){var f,A=x.state,P=x.name,j=x.options,h=A.elements.arrow,L=A.modifiersData.popperOffsets,V=Pr(A.placement),_=np(V),K=[zi,xo].indexOf(V)>=0,q=K?"height":"width";if(!(!h||!L)){var U=hM(j.padding,A),E=ep(h),B=_==="y"?Ri:zi,Q=_==="y"?Eo:xo,J=A.rects.reference[q]+A.rects.reference[_]-L[_]-A.rects.popper[q],ot=L[_]-A.rects.reference[_],at=Il(h),ct=at?_==="y"?at.clientHeight||0:at.clientWidth||0:0,Et=J/2-ot/2,xt=U[B],Vt=ct-E[q]-U[Q],Kt=ct/2-E[q]/2+Et,v=Tl(xt,Kt,Vt),Gt=_;A.modifiersData[P]=(f={},f[Gt]=v,f.centerOffset=v-Kt,f)}}function pM(x){var f=x.state,A=x.options,P=A.element,j=P===void 0?"[data-popper-arrow]":P;j!=null&&(typeof j=="string"&&(j=f.elements.popper.querySelector(j),!j)||MC(f.elements.popper,j)&&(f.elements.arrow=j))}const LC={name:"arrow",enabled:!0,phase:"main",fn:fM,effect:pM,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function xc(x){return x.split("-")[1]}var gM={top:"auto",right:"auto",bottom:"auto",left:"auto"};function mM(x,f){var A=x.x,P=x.y,j=f.devicePixelRatio||1;return{x:yc(A*j)/j||0,y:yc(P*j)/j||0}}function Bv(x){var f,A=x.popper,P=x.popperRect,j=x.placement,h=x.variation,L=x.offsets,V=x.position,_=x.gpuAcceleration,K=x.adaptive,q=x.roundOffsets,U=x.isFixed,E=L.x,B=E===void 0?0:E,Q=L.y,J=Q===void 0?0:Q,ot=typeof q=="function"?q({x:B,y:J}):{x:B,y:J};B=ot.x,J=ot.y;var at=L.hasOwnProperty("x"),ct=L.hasOwnProperty("y"),Et=zi,xt=Ri,Vt=window;if(K){var Kt=Il(A),v="clientHeight",Gt="clientWidth";if(Kt===To(A)&&(Kt=ta(A),ks(Kt).position!=="static"&&V==="absolute"&&(v="scrollHeight",Gt="scrollWidth")),Kt=Kt,j===Ri||(j===zi||j===xo)&&h===Cc){xt=Eo;var W=U&&Kt===Vt&&Vt.visualViewport?Vt.visualViewport.height:Kt[v];J-=W-P.height,J*=_?1:-1}if(j===zi||(j===Ri||j===Eo)&&h===Cc){Et=xo;var jt=U&&Kt===Vt&&Vt.visualViewport?Vt.visualViewport.width:Kt[Gt];B-=jt-P.width,B*=_?1:-1}}var oe=Object.assign({position:V},K&&gM),ue=q===!0?mM({x:B,y:J},To(A)):{x:B,y:J};if(B=ue.x,J=ue.y,_){var Wt;return Object.assign({},oe,(Wt={},Wt[xt]=ct?"0":"",Wt[Et]=at?"0":"",Wt.transform=(Vt.devicePixelRatio||1)<=1?"translate("+B+"px, "+J+"px)":"translate3d("+B+"px, "+J+"px, 0)",Wt))}return Object.assign({},oe,(f={},f[xt]=ct?J+"px":"",f[Et]=at?B+"px":"",f.transform="",f))}function bM(x){var f=x.state,A=x.options,P=A.gpuAcceleration,j=P===void 0?!0:P,h=A.adaptive,L=h===void 0?!0:h,V=A.roundOffsets,_=V===void 0?!0:V,K={placement:Pr(f.placement),variation:xc(f.placement),popper:f.elements.popper,popperRect:f.rects.popper,gpuAcceleration:j,isFixed:f.options.strategy==="fixed"};f.modifiersData.popperOffsets!=null&&(f.styles.popper=Object.assign({},f.styles.popper,Bv(Object.assign({},K,{offsets:f.modifiersData.popperOffsets,position:f.options.strategy,adaptive:L,roundOffsets:_})))),f.modifiersData.arrow!=null&&(f.styles.arrow=Object.assign({},f.styles.arrow,Bv(Object.assign({},K,{offsets:f.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:_})))),f.attributes.popper=Object.assign({},f.attributes.popper,{"data-popper-placement":f.placement})}const ip={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:bM,data:{}};var eu={passive:!0};function kM(x){var f=x.state,A=x.instance,P=x.options,j=P.scroll,h=j===void 0?!0:j,L=P.resize,V=L===void 0?!0:L,_=To(f.elements.popper),K=[].concat(f.scrollParents.reference,f.scrollParents.popper);return h&&K.forEach(function(q){q.addEventListener("scroll",A.update,eu)}),V&&_.addEventListener("resize",A.update,eu),function(){h&&K.forEach(function(q){q.removeEventListener("scroll",A.update,eu)}),V&&_.removeEventListener("resize",A.update,eu)}}const op={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:kM,data:{}};var _M={left:"right",right:"left",bottom:"top",top:"bottom"};function cu(x){return x.replace(/left|right|bottom|top/g,function(f){return _M[f]})}var wM={start:"end",end:"start"};function Lv(x){return x.replace(/start|end/g,function(f){return wM[f]})}function rp(x){var f=To(x),A=f.pageXOffset,P=f.pageYOffset;return{scrollLeft:A,scrollTop:P}}function sp(x){return Ec(ta(x)).left+rp(x).scrollLeft}function AM(x,f){var A=To(x),P=ta(x),j=A.visualViewport,h=P.clientWidth,L=P.clientHeight,V=0,_=0;if(j){h=j.width,L=j.height;var K=IC();(K||!K&&f==="fixed")&&(V=j.offsetLeft,_=j.offsetTop)}return{width:h,height:L,x:V+sp(x),y:_}}function vM(x){var f,A=ta(x),P=rp(x),j=(f=x.ownerDocument)==null?void 0:f.body,h=Oa(A.scrollWidth,A.clientWidth,j?j.scrollWidth:0,j?j.clientWidth:0),L=Oa(A.scrollHeight,A.clientHeight,j?j.scrollHeight:0,j?j.clientHeight:0),V=-P.scrollLeft+sp(x),_=-P.scrollTop;return ks(j||A).direction==="rtl"&&(V+=Oa(A.clientWidth,j?j.clientWidth:0)-h),{width:h,height:L,x:V,y:_}}function ap(x){var f=ks(x),A=f.overflow,P=f.overflowX,j=f.overflowY;return/auto|scroll|overlay|hidden/.test(A+j+P)}function PC(x){return["html","body","#document"].indexOf(zr(x))>=0?x.ownerDocument.body:Xo(x)&&ap(x)?x:PC(bu(x))}function Dl(x,f){var A;f===void 0&&(f=[]);var P=PC(x),j=P===((A=x.ownerDocument)==null?void 0:A.body),h=To(P),L=j?[h].concat(h.visualViewport||[],ap(P)?P:[]):P,V=f.concat(L);return j?V:V.concat(Dl(bu(L)))}function qf(x){return Object.assign({},x,{left:x.x,top:x.y,right:x.x+x.width,bottom:x.y+x.height})}function CM(x,f){var A=Ec(x,!1,f==="fixed");return A.top=A.top+x.clientTop,A.left=A.left+x.clientLeft,A.bottom=A.top+x.clientHeight,A.right=A.left+x.clientWidth,A.width=x.clientWidth,A.height=x.clientHeight,A.x=A.left,A.y=A.top,A}function Pv(x,f,A){return f===Zf?qf(AM(x,A)):La(f)?CM(f,A):qf(vM(ta(x)))}function yM(x){var f=Dl(bu(x)),A=["absolute","fixed"].indexOf(ks(x).position)>=0,P=A&&Xo(x)?Il(x):x;return La(P)?f.filter(function(j){return La(j)&&MC(j,P)&&zr(j)!=="body"}):[]}function EM(x,f,A,P){var j=f==="clippingParents"?yM(x):[].concat(f),h=[].concat(j,[A]),L=h[0],V=h.reduce(function(_,K){var q=Pv(x,K,P);return _.top=Oa(q.top,_.top),_.right=uu(q.right,_.right),_.bottom=uu(q.bottom,_.bottom),_.left=Oa(q.left,_.left),_},Pv(x,L,P));return V.width=V.right-V.left,V.height=V.bottom-V.top,V.x=V.left,V.y=V.top,V}function RC(x){var f=x.reference,A=x.element,P=x.placement,j=P?Pr(P):null,h=P?xc(P):null,L=f.x+f.width/2-A.width/2,V=f.y+f.height/2-A.height/2,_;switch(j){case Ri:_={x:L,y:f.y-A.height};break;case Eo:_={x:L,y:f.y+f.height};break;case xo:_={x:f.x+f.width,y:V};break;case zi:_={x:f.x-A.width,y:V};break;default:_={x:f.x,y:f.y}}var K=j?np(j):null;if(K!=null){var q=K==="y"?"height":"width";switch(h){case Ba:_[K]=_[K]-(f[q]/2-A[q]/2);break;case Cc:_[K]=_[K]+(f[q]/2-A[q]/2);break}}return _}function Tc(x,f){f===void 0&&(f={});var A=f,P=A.placement,j=P===void 0?x.placement:P,h=A.strategy,L=h===void 0?x.strategy:h,V=A.boundary,_=V===void 0?kC:V,K=A.rootBoundary,q=K===void 0?Zf:K,U=A.elementContext,E=U===void 0?_c:U,B=A.altBoundary,Q=B===void 0?!1:B,J=A.padding,ot=J===void 0?0:J,at=OC(typeof ot!="number"?ot:BC(ot,Ic)),ct=E===_c?_C:_c,Et=x.rects.popper,xt=x.elements[Q?ct:E],Vt=EM(La(xt)?xt:xt.contextElement||ta(x.elements.popper),_,q,L),Kt=Ec(x.elements.reference),v=RC({reference:Kt,element:Et,strategy:"absolute",placement:j}),Gt=qf(Object.assign({},Et,v)),W=E===_c?Gt:Kt,jt={top:Vt.top-W.top+at.top,bottom:W.bottom-Vt.bottom+at.bottom,left:Vt.left-W.left+at.left,right:W.right-Vt.right+at.right},oe=x.modifiersData.offset;if(E===_c&&oe){var ue=oe[j];Object.keys(jt).forEach(function(Wt){var ze=[xo,Eo].indexOf(Wt)>=0?1:-1,$e=[Ri,Eo].indexOf(Wt)>=0?"y":"x";jt[Wt]+=ue[$e]*ze})}return jt}function xM(x,f){f===void 0&&(f={});var A=f,P=A.placement,j=A.boundary,h=A.rootBoundary,L=A.padding,V=A.flipVariations,_=A.allowedAutoPlacements,K=_===void 0?Jf:_,q=xc(P),U=q?V?$f:$f.filter(function(Q){return xc(Q)===q}):Ic,E=U.filter(function(Q){return K.indexOf(Q)>=0});E.length===0&&(E=U);var B=E.reduce(function(Q,J){return Q[J]=Tc(x,{placement:J,boundary:j,rootBoundary:h,padding:L})[Pr(J)],Q},{});return Object.keys(B).sort(function(Q,J){return B[Q]-B[J]})}function TM(x){if(Pr(x)===mu)return[];var f=cu(x);return[Lv(x),f,Lv(f)]}function DM(x){var f=x.state,A=x.options,P=x.name;if(!f.modifiersData[P]._skip){for(var j=A.mainAxis,h=j===void 0?!0:j,L=A.altAxis,V=L===void 0?!0:L,_=A.fallbackPlacements,K=A.padding,q=A.boundary,U=A.rootBoundary,E=A.altBoundary,B=A.flipVariations,Q=B===void 0?!0:B,J=A.allowedAutoPlacements,ot=f.options.placement,at=Pr(ot),ct=at===ot,Et=_||(ct||!Q?[cu(ot)]:TM(ot)),xt=[ot].concat(Et).reduce(function($n,tn){return $n.concat(Pr(tn)===mu?xM(f,{placement:tn,boundary:q,rootBoundary:U,padding:K,flipVariations:Q,allowedAutoPlacements:J}):tn)},[]),Vt=f.rects.reference,Kt=f.rects.popper,v=new Map,Gt=!0,W=xt[0],jt=0;jt<xt.length;jt++){var oe=xt[jt],ue=Pr(oe),Wt=xc(oe)===Ba,ze=[Ri,Eo].indexOf(ue)>=0,$e=ze?"width":"height",_e=Tc(f,{placement:oe,boundary:q,rootBoundary:U,altBoundary:E,padding:K}),ve=ze?Wt?xo:zi:Wt?Eo:Ri;Vt[$e]>Kt[$e]&&(ve=cu(ve));var Xe=cu(ve),We=[];if(h&&We.push(_e[ue]<=0),V&&We.push(_e[ve]<=0,_e[Xe]<=0),We.every(function($n){return $n})){W=oe,Gt=!1;break}v.set(oe,We)}if(Gt)for(var le=Q?3:1,Xn=function(tn){var Wn=xt.find(function(gi){var ge=v.get(gi);if(ge)return ge.slice(0,tn).every(function(mi){return mi})});if(Wn)return W=Wn,"break"},ti=le;ti>0;ti--){var Ke=Xn(ti);if(Ke==="break")break}f.placement!==W&&(f.modifiersData[P]._skip=!0,f.placement=W,f.reset=!0)}}const zC={name:"flip",enabled:!0,phase:"main",fn:DM,requiresIfExists:["offset"],data:{_skip:!1}};function Rv(x,f,A){return A===void 0&&(A={x:0,y:0}),{top:x.top-f.height-A.y,right:x.right-f.width+A.x,bottom:x.bottom-f.height+A.y,left:x.left-f.width-A.x}}function zv(x){return[Ri,xo,Eo,zi].some(function(f){return x[f]>=0})}function SM(x){var f=x.state,A=x.name,P=f.rects.reference,j=f.rects.popper,h=f.modifiersData.preventOverflow,L=Tc(f,{elementContext:"reference"}),V=Tc(f,{altBoundary:!0}),_=Rv(L,P),K=Rv(V,j,h),q=zv(_),U=zv(K);f.modifiersData[A]={referenceClippingOffsets:_,popperEscapeOffsets:K,isReferenceHidden:q,hasPopperEscaped:U},f.attributes.popper=Object.assign({},f.attributes.popper,{"data-popper-reference-hidden":q,"data-popper-escaped":U})}const jC={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:SM};function IM(x,f,A){var P=Pr(x),j=[zi,Ri].indexOf(P)>=0?-1:1,h=typeof A=="function"?A(Object.assign({},f,{placement:x})):A,L=h[0],V=h[1];return L=L||0,V=(V||0)*j,[zi,xo].indexOf(P)>=0?{x:V,y:L}:{x:L,y:V}}function MM(x){var f=x.state,A=x.options,P=x.name,j=A.offset,h=j===void 0?[0,0]:j,L=Jf.reduce(function(q,U){return q[U]=IM(U,f.rects,h),q},{}),V=L[f.placement],_=V.x,K=V.y;f.modifiersData.popperOffsets!=null&&(f.modifiersData.popperOffsets.x+=_,f.modifiersData.popperOffsets.y+=K),f.modifiersData[P]=L}const FC={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:MM};function NM(x){var f=x.state,A=x.name;f.modifiersData[A]=RC({reference:f.rects.reference,element:f.rects.popper,strategy:"absolute",placement:f.placement})}const cp={name:"popperOffsets",enabled:!0,phase:"read",fn:NM,data:{}};function OM(x){return x==="x"?"y":"x"}function BM(x){var f=x.state,A=x.options,P=x.name,j=A.mainAxis,h=j===void 0?!0:j,L=A.altAxis,V=L===void 0?!1:L,_=A.boundary,K=A.rootBoundary,q=A.altBoundary,U=A.padding,E=A.tether,B=E===void 0?!0:E,Q=A.tetherOffset,J=Q===void 0?0:Q,ot=Tc(f,{boundary:_,rootBoundary:K,padding:U,altBoundary:q}),at=Pr(f.placement),ct=xc(f.placement),Et=!ct,xt=np(at),Vt=OM(xt),Kt=f.modifiersData.popperOffsets,v=f.rects.reference,Gt=f.rects.popper,W=typeof J=="function"?J(Object.assign({},f.rects,{placement:f.placement})):J,jt=typeof W=="number"?{mainAxis:W,altAxis:W}:Object.assign({mainAxis:0,altAxis:0},W),oe=f.modifiersData.offset?f.modifiersData.offset[f.placement]:null,ue={x:0,y:0};if(Kt){if(h){var Wt,ze=xt==="y"?Ri:zi,$e=xt==="y"?Eo:xo,_e=xt==="y"?"height":"width",ve=Kt[xt],Xe=ve+ot[ze],We=ve-ot[$e],le=B?-Gt[_e]/2:0,Xn=ct===Ba?v[_e]:Gt[_e],ti=ct===Ba?-Gt[_e]:-v[_e],Ke=f.elements.arrow,$n=B&&Ke?ep(Ke):{width:0,height:0},tn=f.modifiersData["arrow#persistent"]?f.modifiersData["arrow#persistent"].padding:NC(),Wn=tn[ze],gi=tn[$e],ge=Tl(0,v[_e],$n[_e]),mi=Et?v[_e]/2-le-ge-Wn-jt.mainAxis:Xn-ge-Wn-jt.mainAxis,hn=Et?-v[_e]/2+le+ge+gi+jt.mainAxis:ti+ge+gi+jt.mainAxis,ji=f.elements.arrow&&Il(f.elements.arrow),fn=ji?xt==="y"?ji.clientTop||0:ji.clientLeft||0:0,ei=(Wt=oe==null?void 0:oe[xt])!=null?Wt:0,Do=ve+mi-ei-fn,we=ve+hn-ei,pn=Tl(B?uu(Xe,Do):Xe,ve,B?Oa(We,we):We);Kt[xt]=pn,ue[xt]=pn-ve}if(V){var gn,mn=xt==="x"?Ri:zi,qn=xt==="x"?Eo:xo,Me=Kt[Vt],oo=Vt==="y"?"height":"width",bn=Me+ot[mn],Be=Me-ot[qn],je=[Ri,zi].indexOf(at)!==-1,qt=(gn=oe==null?void 0:oe[Vt])!=null?gn:0,en=je?bn:Me-v[oo]-Gt[oo]-qt+jt.altAxis,Cn=je?Me+v[oo]+Gt[oo]-qt-jt.altAxis:Be,qe=B&&je?uM(en,Me,Cn):Tl(B?en:bn,Me,B?Cn:Be);Kt[Vt]=qe,ue[Vt]=qe-Me}f.modifiersData[P]=ue}}const VC={name:"preventOverflow",enabled:!0,phase:"main",fn:BM,requiresIfExists:["offset"]};function LM(x){return{scrollLeft:x.scrollLeft,scrollTop:x.scrollTop}}function PM(x){return x===To(x)||!Xo(x)?rp(x):LM(x)}function RM(x){var f=x.getBoundingClientRect(),A=yc(f.width)/x.offsetWidth||1,P=yc(f.height)/x.offsetHeight||1;return A!==1||P!==1}function zM(x,f,A){A===void 0&&(A=!1);var P=Xo(f),j=Xo(f)&&RM(f),h=ta(f),L=Ec(x,j,A),V={scrollLeft:0,scrollTop:0},_={x:0,y:0};return(P||!P&&!A)&&((zr(f)!=="body"||ap(h))&&(V=PM(f)),Xo(f)?(_=Ec(f,!0),_.x+=f.clientLeft,_.y+=f.clientTop):h&&(_.x=sp(h))),{x:L.left+V.scrollLeft-_.x,y:L.top+V.scrollTop-_.y,width:L.width,height:L.height}}function jM(x){var f=new Map,A=new Set,P=[];x.forEach(function(h){f.set(h.name,h)});function j(h){A.add(h.name);var L=[].concat(h.requires||[],h.requiresIfExists||[]);L.forEach(function(V){if(!A.has(V)){var _=f.get(V);_&&j(_)}}),P.push(h)}return x.forEach(function(h){A.has(h.name)||j(h)}),P}function FM(x){var f=jM(x);return SC.reduce(function(A,P){return A.concat(f.filter(function(j){return j.phase===P}))},[])}function VM(x){var f;return function(){return f||(f=new Promise(function(A){Promise.resolve().then(function(){f=void 0,A(x())})})),f}}function HM(x){var f=x.reduce(function(A,P){var j=A[P.name];return A[P.name]=j?Object.assign({},j,P,{options:Object.assign({},j.options,P.options),data:Object.assign({},j.data,P.data)}):P,A},{});return Object.keys(f).map(function(A){return f[A]})}var jv={placement:"bottom",modifiers:[],strategy:"absolute"};function Fv(){for(var x=arguments.length,f=new Array(x),A=0;A<x;A++)f[A]=arguments[A];return!f.some(function(P){return!(P&&typeof P.getBoundingClientRect=="function")})}function ku(x){x===void 0&&(x={});var f=x,A=f.defaultModifiers,P=A===void 0?[]:A,j=f.defaultOptions,h=j===void 0?jv:j;return function(V,_,K){K===void 0&&(K=h);var q={placement:"bottom",orderedModifiers:[],options:Object.assign({},jv,h),modifiersData:{},elements:{reference:V,popper:_},attributes:{},styles:{}},U=[],E=!1,B={state:q,setOptions:function(at){var ct=typeof at=="function"?at(q.options):at;J(),q.options=Object.assign({},h,q.options,ct),q.scrollParents={reference:La(V)?Dl(V):V.contextElement?Dl(V.contextElement):[],popper:Dl(_)};var Et=FM(HM([].concat(P,q.options.modifiers)));return q.orderedModifiers=Et.filter(function(xt){return xt.enabled}),Q(),B.update()},forceUpdate:function(){if(!E){var at=q.elements,ct=at.reference,Et=at.popper;if(Fv(ct,Et)){q.rects={reference:zM(ct,Il(Et),q.options.strategy==="fixed"),popper:ep(Et)},q.reset=!1,q.placement=q.options.placement,q.orderedModifiers.forEach(function(jt){return q.modifiersData[jt.name]=Object.assign({},jt.data)});for(var xt=0;xt<q.orderedModifiers.length;xt++){if(q.reset===!0){q.reset=!1,xt=-1;continue}var Vt=q.orderedModifiers[xt],Kt=Vt.fn,v=Vt.options,Gt=v===void 0?{}:v,W=Vt.name;typeof Kt=="function"&&(q=Kt({state:q,options:Gt,name:W,instance:B})||q)}}}},update:VM(function(){return new Promise(function(ot){B.forceUpdate(),ot(q)})}),destroy:function(){J(),E=!0}};if(!Fv(V,_))return B;B.setOptions(K).then(function(ot){!E&&K.onFirstUpdate&&K.onFirstUpdate(ot)});function Q(){q.orderedModifiers.forEach(function(ot){var at=ot.name,ct=ot.options,Et=ct===void 0?{}:ct,xt=ot.effect;if(typeof xt=="function"){var Vt=xt({state:q,name:at,instance:B,options:Et}),Kt=function(){};U.push(Vt||Kt)}})}function J(){U.forEach(function(ot){return ot()}),U=[]}return B}}var UM=ku(),$M=[op,cp,ip,tp],WM=ku({defaultModifiers:$M}),qM=[op,cp,ip,tp,FC,zC,VC,LC,jC],lp=ku({defaultModifiers:qM});const HC=Object.freeze(Object.defineProperty({__proto__:null,afterMain:EC,afterRead:vC,afterWrite:DC,applyStyles:tp,arrow:LC,auto:mu,basePlacements:Ic,beforeMain:CC,beforeRead:wC,beforeWrite:xC,bottom:Eo,clippingParents:kC,computeStyles:ip,createPopper:lp,createPopperBase:UM,createPopperLite:WM,detectOverflow:Tc,end:Cc,eventListeners:op,flip:zC,hide:jC,left:zi,main:yC,modifierPhases:SC,offset:FC,placements:Jf,popper:_c,popperGenerator:ku,popperOffsets:cp,preventOverflow:VC,read:AC,reference:_C,right:xo,start:Ba,top:Ri,variationPlacements:$f,viewport:Zf,write:TC},Symbol.toStringTag,{value:"Module"}));/*!
  * Bootstrap v5.3.3 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */const Ys=new Map,Df={set(x,f,A){Ys.has(x)||Ys.set(x,new Map);const P=Ys.get(x);if(!P.has(f)&&P.size!==0){console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(P.keys())[0]}.`);return}P.set(f,A)},get(x,f){return Ys.has(x)&&Ys.get(x).get(f)||null},remove(x,f){if(!Ys.has(x))return;const A=Ys.get(x);A.delete(f),A.size===0&&Ys.delete(x)}},GM=1e6,KM=1e3,Gf="transitionend",UC=x=>(x&&window.CSS&&window.CSS.escape&&(x=x.replace(/#([^\s"#']+)/g,(f,A)=>`#${CSS.escape(A)}`)),x),YM=x=>x==null?`${x}`:Object.prototype.toString.call(x).match(/\s([a-z]+)/i)[1].toLowerCase(),QM=x=>{do x+=Math.floor(Math.random()*GM);while(document.getElementById(x));return x},ZM=x=>{if(!x)return 0;let{transitionDuration:f,transitionDelay:A}=window.getComputedStyle(x);const P=Number.parseFloat(f),j=Number.parseFloat(A);return!P&&!j?0:(f=f.split(",")[0],A=A.split(",")[0],(Number.parseFloat(f)+Number.parseFloat(A))*KM)},$C=x=>{x.dispatchEvent(new Event(Gf))},ms=x=>!x||typeof x!="object"?!1:(typeof x.jquery<"u"&&(x=x[0]),typeof x.nodeType<"u"),Zs=x=>ms(x)?x.jquery?x[0]:x:typeof x=="string"&&x.length>0?document.querySelector(UC(x)):null,Mc=x=>{if(!ms(x)||x.getClientRects().length===0)return!1;const f=getComputedStyle(x).getPropertyValue("visibility")==="visible",A=x.closest("details:not([open])");if(!A)return f;if(A!==x){const P=x.closest("summary");if(P&&P.parentNode!==A||P===null)return!1}return f},Js=x=>!x||x.nodeType!==Node.ELEMENT_NODE||x.classList.contains("disabled")?!0:typeof x.disabled<"u"?x.disabled:x.hasAttribute("disabled")&&x.getAttribute("disabled")!=="false",WC=x=>{if(!document.documentElement.attachShadow)return null;if(typeof x.getRootNode=="function"){const f=x.getRootNode();return f instanceof ShadowRoot?f:null}return x instanceof ShadowRoot?x:x.parentNode?WC(x.parentNode):null},hu=()=>{},Ml=x=>{x.offsetHeight},qC=()=>window.jQuery&&!document.body.hasAttribute("data-bs-no-jquery")?window.jQuery:null,Sf=[],JM=x=>{document.readyState==="loading"?(Sf.length||document.addEventListener("DOMContentLoaded",()=>{for(const f of Sf)f()}),Sf.push(x)):x()},tr=()=>document.documentElement.dir==="rtl",nr=x=>{JM(()=>{const f=qC();if(f){const A=x.NAME,P=f.fn[A];f.fn[A]=x.jQueryInterface,f.fn[A].Constructor=x,f.fn[A].noConflict=()=>(f.fn[A]=P,x.jQueryInterface)}})},io=(x,f=[],A=x)=>typeof x=="function"?x(...f):A,GC=(x,f,A=!0)=>{if(!A){io(x);return}const P=5,j=ZM(f)+P;let h=!1;const L=({target:V})=>{V===f&&(h=!0,f.removeEventListener(Gf,L),io(x))};f.addEventListener(Gf,L),setTimeout(()=>{h||$C(f)},j)},dp=(x,f,A,P)=>{const j=x.length;let h=x.indexOf(f);return h===-1?!A&&P?x[j-1]:x[0]:(h+=A?1:-1,P&&(h=(h+j)%j),x[Math.max(0,Math.min(h,j-1))])},XM=/[^.]*(?=\..*)\.|.*/,tN=/\..*/,eN=/::\d+$/,If={};let Vv=1;const KC={mouseenter:"mouseover",mouseleave:"mouseout"},nN=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function YC(x,f){return f&&`${f}::${Vv++}`||x.uidEvent||Vv++}function QC(x){const f=YC(x);return x.uidEvent=f,If[f]=If[f]||{},If[f]}function iN(x,f){return function A(P){return up(P,{delegateTarget:x}),A.oneOff&&Ot.off(x,P.type,f),f.apply(x,[P])}}function oN(x,f,A){return function P(j){const h=x.querySelectorAll(f);for(let{target:L}=j;L&&L!==this;L=L.parentNode)for(const V of h)if(V===L)return up(j,{delegateTarget:L}),P.oneOff&&Ot.off(x,j.type,f,A),A.apply(L,[j])}}function ZC(x,f,A=null){return Object.values(x).find(P=>P.callable===f&&P.delegationSelector===A)}function JC(x,f,A){const P=typeof f=="string",j=P?A:f||A;let h=XC(x);return nN.has(h)||(h=x),[P,j,h]}function Hv(x,f,A,P,j){if(typeof f!="string"||!x)return;let[h,L,V]=JC(f,A,P);f in KC&&(L=(Q=>function(J){if(!J.relatedTarget||J.relatedTarget!==J.delegateTarget&&!J.delegateTarget.contains(J.relatedTarget))return Q.call(this,J)})(L));const _=QC(x),K=_[V]||(_[V]={}),q=ZC(K,L,h?A:null);if(q){q.oneOff=q.oneOff&&j;return}const U=YC(L,f.replace(XM,"")),E=h?oN(x,A,L):iN(x,L);E.delegationSelector=h?A:null,E.callable=L,E.oneOff=j,E.uidEvent=U,K[U]=E,x.addEventListener(V,E,h)}function Kf(x,f,A,P,j){const h=ZC(f[A],P,j);h&&(x.removeEventListener(A,h,!!j),delete f[A][h.uidEvent])}function rN(x,f,A,P){const j=f[A]||{};for(const[h,L]of Object.entries(j))h.includes(P)&&Kf(x,f,A,L.callable,L.delegationSelector)}function XC(x){return x=x.replace(tN,""),KC[x]||x}const Ot={on(x,f,A,P){Hv(x,f,A,P,!1)},one(x,f,A,P){Hv(x,f,A,P,!0)},off(x,f,A,P){if(typeof f!="string"||!x)return;const[j,h,L]=JC(f,A,P),V=L!==f,_=QC(x),K=_[L]||{},q=f.startsWith(".");if(typeof h<"u"){if(!Object.keys(K).length)return;Kf(x,_,L,h,j?A:null);return}if(q)for(const U of Object.keys(_))rN(x,_,U,f.slice(1));for(const[U,E]of Object.entries(K)){const B=U.replace(eN,"");(!V||f.includes(B))&&Kf(x,_,L,E.callable,E.delegationSelector)}},trigger(x,f,A){if(typeof f!="string"||!x)return null;const P=qC(),j=XC(f),h=f!==j;let L=null,V=!0,_=!0,K=!1;h&&P&&(L=P.Event(f,A),P(x).trigger(L),V=!L.isPropagationStopped(),_=!L.isImmediatePropagationStopped(),K=L.isDefaultPrevented());const q=up(new Event(f,{bubbles:V,cancelable:!0}),A);return K&&q.preventDefault(),_&&x.dispatchEvent(q),q.defaultPrevented&&L&&L.preventDefault(),q}};function up(x,f={}){for(const[A,P]of Object.entries(f))try{x[A]=P}catch{Object.defineProperty(x,A,{configurable:!0,get(){return P}})}return x}function Uv(x){if(x==="true")return!0;if(x==="false")return!1;if(x===Number(x).toString())return Number(x);if(x===""||x==="null")return null;if(typeof x!="string")return x;try{return JSON.parse(decodeURIComponent(x))}catch{return x}}function Mf(x){return x.replace(/[A-Z]/g,f=>`-${f.toLowerCase()}`)}const bs={setDataAttribute(x,f,A){x.setAttribute(`data-bs-${Mf(f)}`,A)},removeDataAttribute(x,f){x.removeAttribute(`data-bs-${Mf(f)}`)},getDataAttributes(x){if(!x)return{};const f={},A=Object.keys(x.dataset).filter(P=>P.startsWith("bs")&&!P.startsWith("bsConfig"));for(const P of A){let j=P.replace(/^bs/,"");j=j.charAt(0).toLowerCase()+j.slice(1,j.length),f[j]=Uv(x.dataset[P])}return f},getDataAttribute(x,f){return Uv(x.getAttribute(`data-bs-${Mf(f)}`))}};class Nl{static get Default(){return{}}static get DefaultType(){return{}}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}_getConfig(f){return f=this._mergeConfigObj(f),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}_configAfterMerge(f){return f}_mergeConfigObj(f,A){const P=ms(A)?bs.getDataAttribute(A,"config"):{};return{...this.constructor.Default,...typeof P=="object"?P:{},...ms(A)?bs.getDataAttributes(A):{},...typeof f=="object"?f:{}}}_typeCheckConfig(f,A=this.constructor.DefaultType){for(const[P,j]of Object.entries(A)){const h=f[P],L=ms(h)?"element":YM(h);if(!new RegExp(j).test(L))throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${P}" provided type "${L}" but expected type "${j}".`)}}}const sN="5.3.3";class _r extends Nl{constructor(f,A){super(),f=Zs(f),f&&(this._element=f,this._config=this._getConfig(A),Df.set(this._element,this.constructor.DATA_KEY,this))}dispose(){Df.remove(this._element,this.constructor.DATA_KEY),Ot.off(this._element,this.constructor.EVENT_KEY);for(const f of Object.getOwnPropertyNames(this))this[f]=null}_queueCallback(f,A,P=!0){GC(f,A,P)}_getConfig(f){return f=this._mergeConfigObj(f,this._element),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}static getInstance(f){return Df.get(Zs(f),this.DATA_KEY)}static getOrCreateInstance(f,A={}){return this.getInstance(f)||new this(f,typeof A=="object"?A:null)}static get VERSION(){return sN}static get DATA_KEY(){return`bs.${this.NAME}`}static get EVENT_KEY(){return`.${this.DATA_KEY}`}static eventName(f){return`${f}${this.EVENT_KEY}`}}const Nf=x=>{let f=x.getAttribute("data-bs-target");if(!f||f==="#"){let A=x.getAttribute("href");if(!A||!A.includes("#")&&!A.startsWith("."))return null;A.includes("#")&&!A.startsWith("#")&&(A=`#${A.split("#")[1]}`),f=A&&A!=="#"?A.trim():null}return f?f.split(",").map(A=>UC(A)).join(","):null},ne={find(x,f=document.documentElement){return[].concat(...Element.prototype.querySelectorAll.call(f,x))},findOne(x,f=document.documentElement){return Element.prototype.querySelector.call(f,x)},children(x,f){return[].concat(...x.children).filter(A=>A.matches(f))},parents(x,f){const A=[];let P=x.parentNode.closest(f);for(;P;)A.push(P),P=P.parentNode.closest(f);return A},prev(x,f){let A=x.previousElementSibling;for(;A;){if(A.matches(f))return[A];A=A.previousElementSibling}return[]},next(x,f){let A=x.nextElementSibling;for(;A;){if(A.matches(f))return[A];A=A.nextElementSibling}return[]},focusableChildren(x){const f=["a","button","input","textarea","select","details","[tabindex]",'[contenteditable="true"]'].map(A=>`${A}:not([tabindex^="-"])`).join(",");return this.find(f,x).filter(A=>!Js(A)&&Mc(A))},getSelectorFromElement(x){const f=Nf(x);return f&&ne.findOne(f)?f:null},getElementFromSelector(x){const f=Nf(x);return f?ne.findOne(f):null},getMultipleElementsFromSelector(x){const f=Nf(x);return f?ne.find(f):[]}},_u=(x,f="hide")=>{const A=`click.dismiss${x.EVENT_KEY}`,P=x.NAME;Ot.on(document,A,`[data-bs-dismiss="${P}"]`,function(j){if(["A","AREA"].includes(this.tagName)&&j.preventDefault(),Js(this))return;const h=ne.getElementFromSelector(this)||this.closest(`.${P}`);x.getOrCreateInstance(h)[f]()})},aN="alert",cN="bs.alert",t0=`.${cN}`,lN=`close${t0}`,dN=`closed${t0}`,uN="fade",hN="show";class wu extends _r{static get NAME(){return aN}close(){if(Ot.trigger(this._element,lN).defaultPrevented)return;this._element.classList.remove(hN);const A=this._element.classList.contains(uN);this._queueCallback(()=>this._destroyElement(),this._element,A)}_destroyElement(){this._element.remove(),Ot.trigger(this._element,dN),this.dispose()}static jQueryInterface(f){return this.each(function(){const A=wu.getOrCreateInstance(this);if(typeof f=="string"){if(A[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);A[f](this)}})}}_u(wu,"close");nr(wu);const fN="button",pN="bs.button",gN=`.${pN}`,mN=".data-api",bN="active",$v='[data-bs-toggle="button"]',kN=`click${gN}${mN}`;class Au extends _r{static get NAME(){return fN}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle(bN))}static jQueryInterface(f){return this.each(function(){const A=Au.getOrCreateInstance(this);f==="toggle"&&A[f]()})}}Ot.on(document,kN,$v,x=>{x.preventDefault();const f=x.target.closest($v);Au.getOrCreateInstance(f).toggle()});nr(Au);const _N="swipe",Nc=".bs.swipe",wN=`touchstart${Nc}`,AN=`touchmove${Nc}`,vN=`touchend${Nc}`,CN=`pointerdown${Nc}`,yN=`pointerup${Nc}`,EN="touch",xN="pen",TN="pointer-event",DN=40,SN={endCallback:null,leftCallback:null,rightCallback:null},IN={endCallback:"(function|null)",leftCallback:"(function|null)",rightCallback:"(function|null)"};class fu extends Nl{constructor(f,A){super(),this._element=f,!(!f||!fu.isSupported())&&(this._config=this._getConfig(A),this._deltaX=0,this._supportPointerEvents=!!window.PointerEvent,this._initEvents())}static get Default(){return SN}static get DefaultType(){return IN}static get NAME(){return _N}dispose(){Ot.off(this._element,Nc)}_start(f){if(!this._supportPointerEvents){this._deltaX=f.touches[0].clientX;return}this._eventIsPointerPenTouch(f)&&(this._deltaX=f.clientX)}_end(f){this._eventIsPointerPenTouch(f)&&(this._deltaX=f.clientX-this._deltaX),this._handleSwipe(),io(this._config.endCallback)}_move(f){this._deltaX=f.touches&&f.touches.length>1?0:f.touches[0].clientX-this._deltaX}_handleSwipe(){const f=Math.abs(this._deltaX);if(f<=DN)return;const A=f/this._deltaX;this._deltaX=0,A&&io(A>0?this._config.rightCallback:this._config.leftCallback)}_initEvents(){this._supportPointerEvents?(Ot.on(this._element,CN,f=>this._start(f)),Ot.on(this._element,yN,f=>this._end(f)),this._element.classList.add(TN)):(Ot.on(this._element,wN,f=>this._start(f)),Ot.on(this._element,AN,f=>this._move(f)),Ot.on(this._element,vN,f=>this._end(f)))}_eventIsPointerPenTouch(f){return this._supportPointerEvents&&(f.pointerType===xN||f.pointerType===EN)}static isSupported(){return"ontouchstart"in document.documentElement||navigator.maxTouchPoints>0}}const MN="carousel",NN="bs.carousel",ea=`.${NN}`,e0=".data-api",ON="ArrowLeft",BN="ArrowRight",LN=500,El="next",bc="prev",wc="left",lu="right",PN=`slide${ea}`,Of=`slid${ea}`,RN=`keydown${ea}`,zN=`mouseenter${ea}`,jN=`mouseleave${ea}`,FN=`dragstart${ea}`,VN=`load${ea}${e0}`,HN=`click${ea}${e0}`,n0="carousel",nu="active",UN="slide",$N="carousel-item-end",WN="carousel-item-start",qN="carousel-item-next",GN="carousel-item-prev",i0=".active",o0=".carousel-item",KN=i0+o0,YN=".carousel-item img",QN=".carousel-indicators",ZN="[data-bs-slide], [data-bs-slide-to]",JN='[data-bs-ride="carousel"]',XN={[ON]:lu,[BN]:wc},tO={interval:5e3,keyboard:!0,pause:"hover",ride:!1,touch:!0,wrap:!0},eO={interval:"(number|boolean)",keyboard:"boolean",pause:"(string|boolean)",ride:"(boolean|string)",touch:"boolean",wrap:"boolean"};class Ol extends _r{constructor(f,A){super(f,A),this._interval=null,this._activeElement=null,this._isSliding=!1,this.touchTimeout=null,this._swipeHelper=null,this._indicatorsElement=ne.findOne(QN,this._element),this._addEventListeners(),this._config.ride===n0&&this.cycle()}static get Default(){return tO}static get DefaultType(){return eO}static get NAME(){return MN}next(){this._slide(El)}nextWhenVisible(){!document.hidden&&Mc(this._element)&&this.next()}prev(){this._slide(bc)}pause(){this._isSliding&&$C(this._element),this._clearInterval()}cycle(){this._clearInterval(),this._updateInterval(),this._interval=setInterval(()=>this.nextWhenVisible(),this._config.interval)}_maybeEnableCycle(){if(this._config.ride){if(this._isSliding){Ot.one(this._element,Of,()=>this.cycle());return}this.cycle()}}to(f){const A=this._getItems();if(f>A.length-1||f<0)return;if(this._isSliding){Ot.one(this._element,Of,()=>this.to(f));return}const P=this._getItemIndex(this._getActive());if(P===f)return;const j=f>P?El:bc;this._slide(j,A[f])}dispose(){this._swipeHelper&&this._swipeHelper.dispose(),super.dispose()}_configAfterMerge(f){return f.defaultInterval=f.interval,f}_addEventListeners(){this._config.keyboard&&Ot.on(this._element,RN,f=>this._keydown(f)),this._config.pause==="hover"&&(Ot.on(this._element,zN,()=>this.pause()),Ot.on(this._element,jN,()=>this._maybeEnableCycle())),this._config.touch&&fu.isSupported()&&this._addTouchEventListeners()}_addTouchEventListeners(){for(const P of ne.find(YN,this._element))Ot.on(P,FN,j=>j.preventDefault());const A={leftCallback:()=>this._slide(this._directionToOrder(wc)),rightCallback:()=>this._slide(this._directionToOrder(lu)),endCallback:()=>{this._config.pause==="hover"&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(()=>this._maybeEnableCycle(),LN+this._config.interval))}};this._swipeHelper=new fu(this._element,A)}_keydown(f){if(/input|textarea/i.test(f.target.tagName))return;const A=XN[f.key];A&&(f.preventDefault(),this._slide(this._directionToOrder(A)))}_getItemIndex(f){return this._getItems().indexOf(f)}_setActiveIndicatorElement(f){if(!this._indicatorsElement)return;const A=ne.findOne(i0,this._indicatorsElement);A.classList.remove(nu),A.removeAttribute("aria-current");const P=ne.findOne(`[data-bs-slide-to="${f}"]`,this._indicatorsElement);P&&(P.classList.add(nu),P.setAttribute("aria-current","true"))}_updateInterval(){const f=this._activeElement||this._getActive();if(!f)return;const A=Number.parseInt(f.getAttribute("data-bs-interval"),10);this._config.interval=A||this._config.defaultInterval}_slide(f,A=null){if(this._isSliding)return;const P=this._getActive(),j=f===El,h=A||dp(this._getItems(),P,j,this._config.wrap);if(h===P)return;const L=this._getItemIndex(h),V=B=>Ot.trigger(this._element,B,{relatedTarget:h,direction:this._orderToDirection(f),from:this._getItemIndex(P),to:L});if(V(PN).defaultPrevented||!P||!h)return;const K=!!this._interval;this.pause(),this._isSliding=!0,this._setActiveIndicatorElement(L),this._activeElement=h;const q=j?WN:$N,U=j?qN:GN;h.classList.add(U),Ml(h),P.classList.add(q),h.classList.add(q);const E=()=>{h.classList.remove(q,U),h.classList.add(nu),P.classList.remove(nu,U,q),this._isSliding=!1,V(Of)};this._queueCallback(E,P,this._isAnimated()),K&&this.cycle()}_isAnimated(){return this._element.classList.contains(UN)}_getActive(){return ne.findOne(KN,this._element)}_getItems(){return ne.find(o0,this._element)}_clearInterval(){this._interval&&(clearInterval(this._interval),this._interval=null)}_directionToOrder(f){return tr()?f===wc?bc:El:f===wc?El:bc}_orderToDirection(f){return tr()?f===bc?wc:lu:f===bc?lu:wc}static jQueryInterface(f){return this.each(function(){const A=Ol.getOrCreateInstance(this,f);if(typeof f=="number"){A.to(f);return}if(typeof f=="string"){if(A[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);A[f]()}})}}Ot.on(document,HN,ZN,function(x){const f=ne.getElementFromSelector(this);if(!f||!f.classList.contains(n0))return;x.preventDefault();const A=Ol.getOrCreateInstance(f),P=this.getAttribute("data-bs-slide-to");if(P){A.to(P),A._maybeEnableCycle();return}if(bs.getDataAttribute(this,"slide")==="next"){A.next(),A._maybeEnableCycle();return}A.prev(),A._maybeEnableCycle()});Ot.on(window,VN,()=>{const x=ne.find(JN);for(const f of x)Ol.getOrCreateInstance(f)});nr(Ol);const nO="collapse",iO="bs.collapse",Bl=`.${iO}`,oO=".data-api",rO=`show${Bl}`,sO=`shown${Bl}`,aO=`hide${Bl}`,cO=`hidden${Bl}`,lO=`click${Bl}${oO}`,Bf="show",vc="collapse",iu="collapsing",dO="collapsed",uO=`:scope .${vc} .${vc}`,hO="collapse-horizontal",fO="width",pO="height",gO=".collapse.show, .collapse.collapsing",Yf='[data-bs-toggle="collapse"]',mO={parent:null,toggle:!0},bO={parent:"(null|element)",toggle:"boolean"};class Sl extends _r{constructor(f,A){super(f,A),this._isTransitioning=!1,this._triggerArray=[];const P=ne.find(Yf);for(const j of P){const h=ne.getSelectorFromElement(j),L=ne.find(h).filter(V=>V===this._element);h!==null&&L.length&&this._triggerArray.push(j)}this._initializeChildren(),this._config.parent||this._addAriaAndCollapsedClass(this._triggerArray,this._isShown()),this._config.toggle&&this.toggle()}static get Default(){return mO}static get DefaultType(){return bO}static get NAME(){return nO}toggle(){this._isShown()?this.hide():this.show()}show(){if(this._isTransitioning||this._isShown())return;let f=[];if(this._config.parent&&(f=this._getFirstLevelChildren(gO).filter(V=>V!==this._element).map(V=>Sl.getOrCreateInstance(V,{toggle:!1}))),f.length&&f[0]._isTransitioning||Ot.trigger(this._element,rO).defaultPrevented)return;for(const V of f)V.hide();const P=this._getDimension();this._element.classList.remove(vc),this._element.classList.add(iu),this._element.style[P]=0,this._addAriaAndCollapsedClass(this._triggerArray,!0),this._isTransitioning=!0;const j=()=>{this._isTransitioning=!1,this._element.classList.remove(iu),this._element.classList.add(vc,Bf),this._element.style[P]="",Ot.trigger(this._element,sO)},L=`scroll${P[0].toUpperCase()+P.slice(1)}`;this._queueCallback(j,this._element,!0),this._element.style[P]=`${this._element[L]}px`}hide(){if(this._isTransitioning||!this._isShown()||Ot.trigger(this._element,aO).defaultPrevented)return;const A=this._getDimension();this._element.style[A]=`${this._element.getBoundingClientRect()[A]}px`,Ml(this._element),this._element.classList.add(iu),this._element.classList.remove(vc,Bf);for(const j of this._triggerArray){const h=ne.getElementFromSelector(j);h&&!this._isShown(h)&&this._addAriaAndCollapsedClass([j],!1)}this._isTransitioning=!0;const P=()=>{this._isTransitioning=!1,this._element.classList.remove(iu),this._element.classList.add(vc),Ot.trigger(this._element,cO)};this._element.style[A]="",this._queueCallback(P,this._element,!0)}_isShown(f=this._element){return f.classList.contains(Bf)}_configAfterMerge(f){return f.toggle=!!f.toggle,f.parent=Zs(f.parent),f}_getDimension(){return this._element.classList.contains(hO)?fO:pO}_initializeChildren(){if(!this._config.parent)return;const f=this._getFirstLevelChildren(Yf);for(const A of f){const P=ne.getElementFromSelector(A);P&&this._addAriaAndCollapsedClass([A],this._isShown(P))}}_getFirstLevelChildren(f){const A=ne.find(uO,this._config.parent);return ne.find(f,this._config.parent).filter(P=>!A.includes(P))}_addAriaAndCollapsedClass(f,A){if(f.length)for(const P of f)P.classList.toggle(dO,!A),P.setAttribute("aria-expanded",A)}static jQueryInterface(f){const A={};return typeof f=="string"&&/show|hide/.test(f)&&(A.toggle=!1),this.each(function(){const P=Sl.getOrCreateInstance(this,A);if(typeof f=="string"){if(typeof P[f]>"u")throw new TypeError(`No method named "${f}"`);P[f]()}})}}Ot.on(document,lO,Yf,function(x){(x.target.tagName==="A"||x.delegateTarget&&x.delegateTarget.tagName==="A")&&x.preventDefault();for(const f of ne.getMultipleElementsFromSelector(this))Sl.getOrCreateInstance(f,{toggle:!1}).toggle()});nr(Sl);const Wv="dropdown",kO="bs.dropdown",Pa=`.${kO}`,hp=".data-api",_O="Escape",qv="Tab",wO="ArrowUp",Gv="ArrowDown",AO=2,vO=`hide${Pa}`,CO=`hidden${Pa}`,yO=`show${Pa}`,EO=`shown${Pa}`,r0=`click${Pa}${hp}`,s0=`keydown${Pa}${hp}`,xO=`keyup${Pa}${hp}`,Ac="show",TO="dropup",DO="dropend",SO="dropstart",IO="dropup-center",MO="dropdown-center",Ma='[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',NO=`${Ma}.${Ac}`,du=".dropdown-menu",OO=".navbar",BO=".navbar-nav",LO=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",PO=tr()?"top-end":"top-start",RO=tr()?"top-start":"top-end",zO=tr()?"bottom-end":"bottom-start",jO=tr()?"bottom-start":"bottom-end",FO=tr()?"left-start":"right-start",VO=tr()?"right-start":"left-start",HO="top",UO="bottom",$O={autoClose:!0,boundary:"clippingParents",display:"dynamic",offset:[0,2],popperConfig:null,reference:"toggle"},WO={autoClose:"(boolean|string)",boundary:"(string|element)",display:"string",offset:"(array|string|function)",popperConfig:"(null|object|function)",reference:"(string|element|object)"};class Rr extends _r{constructor(f,A){super(f,A),this._popper=null,this._parent=this._element.parentNode,this._menu=ne.next(this._element,du)[0]||ne.prev(this._element,du)[0]||ne.findOne(du,this._parent),this._inNavbar=this._detectNavbar()}static get Default(){return $O}static get DefaultType(){return WO}static get NAME(){return Wv}toggle(){return this._isShown()?this.hide():this.show()}show(){if(Js(this._element)||this._isShown())return;const f={relatedTarget:this._element};if(!Ot.trigger(this._element,yO,f).defaultPrevented){if(this._createPopper(),"ontouchstart"in document.documentElement&&!this._parent.closest(BO))for(const P of[].concat(...document.body.children))Ot.on(P,"mouseover",hu);this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.add(Ac),this._element.classList.add(Ac),Ot.trigger(this._element,EO,f)}}hide(){if(Js(this._element)||!this._isShown())return;const f={relatedTarget:this._element};this._completeHide(f)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_completeHide(f){if(!Ot.trigger(this._element,vO,f).defaultPrevented){if("ontouchstart"in document.documentElement)for(const P of[].concat(...document.body.children))Ot.off(P,"mouseover",hu);this._popper&&this._popper.destroy(),this._menu.classList.remove(Ac),this._element.classList.remove(Ac),this._element.setAttribute("aria-expanded","false"),bs.removeDataAttribute(this._menu,"popper"),Ot.trigger(this._element,CO,f)}}_getConfig(f){if(f=super._getConfig(f),typeof f.reference=="object"&&!ms(f.reference)&&typeof f.reference.getBoundingClientRect!="function")throw new TypeError(`${Wv.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);return f}_createPopper(){if(typeof HC>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let f=this._element;this._config.reference==="parent"?f=this._parent:ms(this._config.reference)?f=Zs(this._config.reference):typeof this._config.reference=="object"&&(f=this._config.reference);const A=this._getPopperConfig();this._popper=lp(f,this._menu,A)}_isShown(){return this._menu.classList.contains(Ac)}_getPlacement(){const f=this._parent;if(f.classList.contains(DO))return FO;if(f.classList.contains(SO))return VO;if(f.classList.contains(IO))return HO;if(f.classList.contains(MO))return UO;const A=getComputedStyle(this._menu).getPropertyValue("--bs-position").trim()==="end";return f.classList.contains(TO)?A?RO:PO:A?jO:zO}_detectNavbar(){return this._element.closest(OO)!==null}_getOffset(){const{offset:f}=this._config;return typeof f=="string"?f.split(",").map(A=>Number.parseInt(A,10)):typeof f=="function"?A=>f(A,this._element):f}_getPopperConfig(){const f={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return(this._inNavbar||this._config.display==="static")&&(bs.setDataAttribute(this._menu,"popper","static"),f.modifiers=[{name:"applyStyles",enabled:!1}]),{...f,...io(this._config.popperConfig,[f])}}_selectMenuItem({key:f,target:A}){const P=ne.find(LO,this._menu).filter(j=>Mc(j));P.length&&dp(P,A,f===Gv,!P.includes(A)).focus()}static jQueryInterface(f){return this.each(function(){const A=Rr.getOrCreateInstance(this,f);if(typeof f=="string"){if(typeof A[f]>"u")throw new TypeError(`No method named "${f}"`);A[f]()}})}static clearMenus(f){if(f.button===AO||f.type==="keyup"&&f.key!==qv)return;const A=ne.find(NO);for(const P of A){const j=Rr.getInstance(P);if(!j||j._config.autoClose===!1)continue;const h=f.composedPath(),L=h.includes(j._menu);if(h.includes(j._element)||j._config.autoClose==="inside"&&!L||j._config.autoClose==="outside"&&L||j._menu.contains(f.target)&&(f.type==="keyup"&&f.key===qv||/input|select|option|textarea|form/i.test(f.target.tagName)))continue;const V={relatedTarget:j._element};f.type==="click"&&(V.clickEvent=f),j._completeHide(V)}}static dataApiKeydownHandler(f){const A=/input|textarea/i.test(f.target.tagName),P=f.key===_O,j=[wO,Gv].includes(f.key);if(!j&&!P||A&&!P)return;f.preventDefault();const h=this.matches(Ma)?this:ne.prev(this,Ma)[0]||ne.next(this,Ma)[0]||ne.findOne(Ma,f.delegateTarget.parentNode),L=Rr.getOrCreateInstance(h);if(j){f.stopPropagation(),L.show(),L._selectMenuItem(f);return}L._isShown()&&(f.stopPropagation(),L.hide(),h.focus())}}Ot.on(document,s0,Ma,Rr.dataApiKeydownHandler);Ot.on(document,s0,du,Rr.dataApiKeydownHandler);Ot.on(document,r0,Rr.clearMenus);Ot.on(document,xO,Rr.clearMenus);Ot.on(document,r0,Ma,function(x){x.preventDefault(),Rr.getOrCreateInstance(this).toggle()});nr(Rr);const a0="backdrop",qO="fade",Kv="show",Yv=`mousedown.bs.${a0}`,GO={className:"modal-backdrop",clickCallback:null,isAnimated:!1,isVisible:!0,rootElement:"body"},KO={className:"string",clickCallback:"(function|null)",isAnimated:"boolean",isVisible:"boolean",rootElement:"(element|string)"};class c0 extends Nl{constructor(f){super(),this._config=this._getConfig(f),this._isAppended=!1,this._element=null}static get Default(){return GO}static get DefaultType(){return KO}static get NAME(){return a0}show(f){if(!this._config.isVisible){io(f);return}this._append();const A=this._getElement();this._config.isAnimated&&Ml(A),A.classList.add(Kv),this._emulateAnimation(()=>{io(f)})}hide(f){if(!this._config.isVisible){io(f);return}this._getElement().classList.remove(Kv),this._emulateAnimation(()=>{this.dispose(),io(f)})}dispose(){this._isAppended&&(Ot.off(this._element,Yv),this._element.remove(),this._isAppended=!1)}_getElement(){if(!this._element){const f=document.createElement("div");f.className=this._config.className,this._config.isAnimated&&f.classList.add(qO),this._element=f}return this._element}_configAfterMerge(f){return f.rootElement=Zs(f.rootElement),f}_append(){if(this._isAppended)return;const f=this._getElement();this._config.rootElement.append(f),Ot.on(f,Yv,()=>{io(this._config.clickCallback)}),this._isAppended=!0}_emulateAnimation(f){GC(f,this._getElement(),this._config.isAnimated)}}const YO="focustrap",QO="bs.focustrap",pu=`.${QO}`,ZO=`focusin${pu}`,JO=`keydown.tab${pu}`,XO="Tab",tB="forward",Qv="backward",eB={autofocus:!0,trapElement:null},nB={autofocus:"boolean",trapElement:"element"};class l0 extends Nl{constructor(f){super(),this._config=this._getConfig(f),this._isActive=!1,this._lastTabNavDirection=null}static get Default(){return eB}static get DefaultType(){return nB}static get NAME(){return YO}activate(){this._isActive||(this._config.autofocus&&this._config.trapElement.focus(),Ot.off(document,pu),Ot.on(document,ZO,f=>this._handleFocusin(f)),Ot.on(document,JO,f=>this._handleKeydown(f)),this._isActive=!0)}deactivate(){this._isActive&&(this._isActive=!1,Ot.off(document,pu))}_handleFocusin(f){const{trapElement:A}=this._config;if(f.target===document||f.target===A||A.contains(f.target))return;const P=ne.focusableChildren(A);P.length===0?A.focus():this._lastTabNavDirection===Qv?P[P.length-1].focus():P[0].focus()}_handleKeydown(f){f.key===XO&&(this._lastTabNavDirection=f.shiftKey?Qv:tB)}}const Zv=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",Jv=".sticky-top",ou="padding-right",Xv="margin-right";class Qf{constructor(){this._element=document.body}getWidth(){const f=document.documentElement.clientWidth;return Math.abs(window.innerWidth-f)}hide(){const f=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,ou,A=>A+f),this._setElementAttributes(Zv,ou,A=>A+f),this._setElementAttributes(Jv,Xv,A=>A-f)}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,ou),this._resetElementAttributes(Zv,ou),this._resetElementAttributes(Jv,Xv)}isOverflowing(){return this.getWidth()>0}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(f,A,P){const j=this.getWidth(),h=L=>{if(L!==this._element&&window.innerWidth>L.clientWidth+j)return;this._saveInitialAttribute(L,A);const V=window.getComputedStyle(L).getPropertyValue(A);L.style.setProperty(A,`${P(Number.parseFloat(V))}px`)};this._applyManipulationCallback(f,h)}_saveInitialAttribute(f,A){const P=f.style.getPropertyValue(A);P&&bs.setDataAttribute(f,A,P)}_resetElementAttributes(f,A){const P=j=>{const h=bs.getDataAttribute(j,A);if(h===null){j.style.removeProperty(A);return}bs.removeDataAttribute(j,A),j.style.setProperty(A,h)};this._applyManipulationCallback(f,P)}_applyManipulationCallback(f,A){if(ms(f)){A(f);return}for(const P of ne.find(f,this._element))A(P)}}const iB="modal",oB="bs.modal",er=`.${oB}`,rB=".data-api",sB="Escape",aB=`hide${er}`,cB=`hidePrevented${er}`,d0=`hidden${er}`,u0=`show${er}`,lB=`shown${er}`,dB=`resize${er}`,uB=`click.dismiss${er}`,hB=`mousedown.dismiss${er}`,fB=`keydown.dismiss${er}`,pB=`click${er}${rB}`,tC="modal-open",gB="fade",eC="show",Lf="modal-static",mB=".modal.show",bB=".modal-dialog",kB=".modal-body",_B='[data-bs-toggle="modal"]',wB={backdrop:!0,focus:!0,keyboard:!0},AB={backdrop:"(boolean|string)",focus:"boolean",keyboard:"boolean"};class Dc extends _r{constructor(f,A){super(f,A),this._dialog=ne.findOne(bB,this._element),this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._isShown=!1,this._isTransitioning=!1,this._scrollBar=new Qf,this._addEventListeners()}static get Default(){return wB}static get DefaultType(){return AB}static get NAME(){return iB}toggle(f){return this._isShown?this.hide():this.show(f)}show(f){this._isShown||this._isTransitioning||Ot.trigger(this._element,u0,{relatedTarget:f}).defaultPrevented||(this._isShown=!0,this._isTransitioning=!0,this._scrollBar.hide(),document.body.classList.add(tC),this._adjustDialog(),this._backdrop.show(()=>this._showElement(f)))}hide(){!this._isShown||this._isTransitioning||Ot.trigger(this._element,aB).defaultPrevented||(this._isShown=!1,this._isTransitioning=!0,this._focustrap.deactivate(),this._element.classList.remove(eC),this._queueCallback(()=>this._hideModal(),this._element,this._isAnimated()))}dispose(){Ot.off(window,er),Ot.off(this._dialog,er),this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new c0({isVisible:!!this._config.backdrop,isAnimated:this._isAnimated()})}_initializeFocusTrap(){return new l0({trapElement:this._element})}_showElement(f){document.body.contains(this._element)||document.body.append(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0;const A=ne.findOne(kB,this._dialog);A&&(A.scrollTop=0),Ml(this._element),this._element.classList.add(eC);const P=()=>{this._config.focus&&this._focustrap.activate(),this._isTransitioning=!1,Ot.trigger(this._element,lB,{relatedTarget:f})};this._queueCallback(P,this._dialog,this._isAnimated())}_addEventListeners(){Ot.on(this._element,fB,f=>{if(f.key===sB){if(this._config.keyboard){this.hide();return}this._triggerBackdropTransition()}}),Ot.on(window,dB,()=>{this._isShown&&!this._isTransitioning&&this._adjustDialog()}),Ot.on(this._element,hB,f=>{Ot.one(this._element,uB,A=>{if(!(this._element!==f.target||this._element!==A.target)){if(this._config.backdrop==="static"){this._triggerBackdropTransition();return}this._config.backdrop&&this.hide()}})})}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove(tC),this._resetAdjustments(),this._scrollBar.reset(),Ot.trigger(this._element,d0)})}_isAnimated(){return this._element.classList.contains(gB)}_triggerBackdropTransition(){if(Ot.trigger(this._element,cB).defaultPrevented)return;const A=this._element.scrollHeight>document.documentElement.clientHeight,P=this._element.style.overflowY;P==="hidden"||this._element.classList.contains(Lf)||(A||(this._element.style.overflowY="hidden"),this._element.classList.add(Lf),this._queueCallback(()=>{this._element.classList.remove(Lf),this._queueCallback(()=>{this._element.style.overflowY=P},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const f=this._element.scrollHeight>document.documentElement.clientHeight,A=this._scrollBar.getWidth(),P=A>0;if(P&&!f){const j=tr()?"paddingLeft":"paddingRight";this._element.style[j]=`${A}px`}if(!P&&f){const j=tr()?"paddingRight":"paddingLeft";this._element.style[j]=`${A}px`}}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(f,A){return this.each(function(){const P=Dc.getOrCreateInstance(this,f);if(typeof f=="string"){if(typeof P[f]>"u")throw new TypeError(`No method named "${f}"`);P[f](A)}})}}Ot.on(document,pB,_B,function(x){const f=ne.getElementFromSelector(this);["A","AREA"].includes(this.tagName)&&x.preventDefault(),Ot.one(f,u0,j=>{j.defaultPrevented||Ot.one(f,d0,()=>{Mc(this)&&this.focus()})});const A=ne.findOne(mB);A&&Dc.getInstance(A).hide(),Dc.getOrCreateInstance(f).toggle(this)});_u(Dc);nr(Dc);const vB="offcanvas",CB="bs.offcanvas",_s=`.${CB}`,h0=".data-api",yB=`load${_s}${h0}`,EB="Escape",nC="show",iC="showing",oC="hiding",xB="offcanvas-backdrop",f0=".offcanvas.show",TB=`show${_s}`,DB=`shown${_s}`,SB=`hide${_s}`,rC=`hidePrevented${_s}`,p0=`hidden${_s}`,IB=`resize${_s}`,MB=`click${_s}${h0}`,NB=`keydown.dismiss${_s}`,OB='[data-bs-toggle="offcanvas"]',BB={backdrop:!0,keyboard:!0,scroll:!1},LB={backdrop:"(boolean|string)",keyboard:"boolean",scroll:"boolean"};class Xs extends _r{constructor(f,A){super(f,A),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._focustrap=this._initializeFocusTrap(),this._addEventListeners()}static get Default(){return BB}static get DefaultType(){return LB}static get NAME(){return vB}toggle(f){return this._isShown?this.hide():this.show(f)}show(f){if(this._isShown||Ot.trigger(this._element,TB,{relatedTarget:f}).defaultPrevented)return;this._isShown=!0,this._backdrop.show(),this._config.scroll||new Qf().hide(),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add(iC);const P=()=>{(!this._config.scroll||this._config.backdrop)&&this._focustrap.activate(),this._element.classList.add(nC),this._element.classList.remove(iC),Ot.trigger(this._element,DB,{relatedTarget:f})};this._queueCallback(P,this._element,!0)}hide(){if(!this._isShown||Ot.trigger(this._element,SB).defaultPrevented)return;this._focustrap.deactivate(),this._element.blur(),this._isShown=!1,this._element.classList.add(oC),this._backdrop.hide();const A=()=>{this._element.classList.remove(nC,oC),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._config.scroll||new Qf().reset(),Ot.trigger(this._element,p0)};this._queueCallback(A,this._element,!0)}dispose(){this._backdrop.dispose(),this._focustrap.deactivate(),super.dispose()}_initializeBackDrop(){const f=()=>{if(this._config.backdrop==="static"){Ot.trigger(this._element,rC);return}this.hide()},A=!!this._config.backdrop;return new c0({className:xB,isVisible:A,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:A?f:null})}_initializeFocusTrap(){return new l0({trapElement:this._element})}_addEventListeners(){Ot.on(this._element,NB,f=>{if(f.key===EB){if(this._config.keyboard){this.hide();return}Ot.trigger(this._element,rC)}})}static jQueryInterface(f){return this.each(function(){const A=Xs.getOrCreateInstance(this,f);if(typeof f=="string"){if(A[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);A[f](this)}})}}Ot.on(document,MB,OB,function(x){const f=ne.getElementFromSelector(this);if(["A","AREA"].includes(this.tagName)&&x.preventDefault(),Js(this))return;Ot.one(f,p0,()=>{Mc(this)&&this.focus()});const A=ne.findOne(f0);A&&A!==f&&Xs.getInstance(A).hide(),Xs.getOrCreateInstance(f).toggle(this)});Ot.on(window,yB,()=>{for(const x of ne.find(f0))Xs.getOrCreateInstance(x).show()});Ot.on(window,IB,()=>{for(const x of ne.find("[aria-modal][class*=show][class*=offcanvas-]"))getComputedStyle(x).position!=="fixed"&&Xs.getOrCreateInstance(x).hide()});_u(Xs);nr(Xs);const PB=/^aria-[\w-]*$/i,g0={"*":["class","dir","id","lang","role",PB],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],dd:[],div:[],dl:[],dt:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},RB=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),zB=/^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,jB=(x,f)=>{const A=x.nodeName.toLowerCase();return f.includes(A)?RB.has(A)?!!zB.test(x.nodeValue):!0:f.filter(P=>P instanceof RegExp).some(P=>P.test(A))};function FB(x,f,A){if(!x.length)return x;if(A&&typeof A=="function")return A(x);const j=new window.DOMParser().parseFromString(x,"text/html"),h=[].concat(...j.body.querySelectorAll("*"));for(const L of h){const V=L.nodeName.toLowerCase();if(!Object.keys(f).includes(V)){L.remove();continue}const _=[].concat(...L.attributes),K=[].concat(f["*"]||[],f[V]||[]);for(const q of _)jB(q,K)||L.removeAttribute(q.nodeName)}return j.body.innerHTML}const VB="TemplateFactory",HB={allowList:g0,content:{},extraClass:"",html:!1,sanitize:!0,sanitizeFn:null,template:"<div></div>"},UB={allowList:"object",content:"object",extraClass:"(string|function)",html:"boolean",sanitize:"boolean",sanitizeFn:"(null|function)",template:"string"},$B={entry:"(string|element|function|null)",selector:"(string|element)"};class WB extends Nl{constructor(f){super(),this._config=this._getConfig(f)}static get Default(){return HB}static get DefaultType(){return UB}static get NAME(){return VB}getContent(){return Object.values(this._config.content).map(f=>this._resolvePossibleFunction(f)).filter(Boolean)}hasContent(){return this.getContent().length>0}changeContent(f){return this._checkContent(f),this._config.content={...this._config.content,...f},this}toHtml(){const f=document.createElement("div");f.innerHTML=this._maybeSanitize(this._config.template);for(const[j,h]of Object.entries(this._config.content))this._setContent(f,h,j);const A=f.children[0],P=this._resolvePossibleFunction(this._config.extraClass);return P&&A.classList.add(...P.split(" ")),A}_typeCheckConfig(f){super._typeCheckConfig(f),this._checkContent(f.content)}_checkContent(f){for(const[A,P]of Object.entries(f))super._typeCheckConfig({selector:A,entry:P},$B)}_setContent(f,A,P){const j=ne.findOne(P,f);if(j){if(A=this._resolvePossibleFunction(A),!A){j.remove();return}if(ms(A)){this._putElementInTemplate(Zs(A),j);return}if(this._config.html){j.innerHTML=this._maybeSanitize(A);return}j.textContent=A}}_maybeSanitize(f){return this._config.sanitize?FB(f,this._config.allowList,this._config.sanitizeFn):f}_resolvePossibleFunction(f){return io(f,[this])}_putElementInTemplate(f,A){if(this._config.html){A.innerHTML="",A.append(f);return}A.textContent=f.textContent}}const qB="tooltip",GB=new Set(["sanitize","allowList","sanitizeFn"]),Pf="fade",KB="modal",ru="show",YB=".tooltip-inner",sC=`.${KB}`,aC="hide.bs.modal",xl="hover",Rf="focus",QB="click",ZB="manual",JB="hide",XB="hidden",t4="show",e4="shown",n4="inserted",i4="click",o4="focusin",r4="focusout",s4="mouseenter",a4="mouseleave",c4={AUTO:"auto",TOP:"top",RIGHT:tr()?"left":"right",BOTTOM:"bottom",LEFT:tr()?"right":"left"},l4={allowList:g0,animation:!0,boundary:"clippingParents",container:!1,customClass:"",delay:0,fallbackPlacements:["top","right","bottom","left"],html:!1,offset:[0,6],placement:"top",popperConfig:null,sanitize:!0,sanitizeFn:null,selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',title:"",trigger:"hover focus"},d4={allowList:"object",animation:"boolean",boundary:"(string|element)",container:"(string|element|boolean)",customClass:"(string|function)",delay:"(number|object)",fallbackPlacements:"array",html:"boolean",offset:"(array|string|function)",placement:"(string|function)",popperConfig:"(null|object|function)",sanitize:"boolean",sanitizeFn:"(null|function)",selector:"(string|boolean)",template:"string",title:"(string|element|function)",trigger:"string"};class Oc extends _r{constructor(f,A){if(typeof HC>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(f,A),this._isEnabled=!0,this._timeout=0,this._isHovered=null,this._activeTrigger={},this._popper=null,this._templateFactory=null,this._newContent=null,this.tip=null,this._setListeners(),this._config.selector||this._fixTitle()}static get Default(){return l4}static get DefaultType(){return d4}static get NAME(){return qB}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(){if(this._isEnabled){if(this._activeTrigger.click=!this._activeTrigger.click,this._isShown()){this._leave();return}this._enter()}}dispose(){clearTimeout(this._timeout),Ot.off(this._element.closest(sC),aC,this._hideModalHandler),this._element.getAttribute("data-bs-original-title")&&this._element.setAttribute("title",this._element.getAttribute("data-bs-original-title")),this._disposePopper(),super.dispose()}show(){if(this._element.style.display==="none")throw new Error("Please use show on visible elements");if(!(this._isWithContent()&&this._isEnabled))return;const f=Ot.trigger(this._element,this.constructor.eventName(t4)),P=(WC(this._element)||this._element.ownerDocument.documentElement).contains(this._element);if(f.defaultPrevented||!P)return;this._disposePopper();const j=this._getTipElement();this._element.setAttribute("aria-describedby",j.getAttribute("id"));const{container:h}=this._config;if(this._element.ownerDocument.documentElement.contains(this.tip)||(h.append(j),Ot.trigger(this._element,this.constructor.eventName(n4))),this._popper=this._createPopper(j),j.classList.add(ru),"ontouchstart"in document.documentElement)for(const V of[].concat(...document.body.children))Ot.on(V,"mouseover",hu);const L=()=>{Ot.trigger(this._element,this.constructor.eventName(e4)),this._isHovered===!1&&this._leave(),this._isHovered=!1};this._queueCallback(L,this.tip,this._isAnimated())}hide(){if(!this._isShown()||Ot.trigger(this._element,this.constructor.eventName(JB)).defaultPrevented)return;if(this._getTipElement().classList.remove(ru),"ontouchstart"in document.documentElement)for(const j of[].concat(...document.body.children))Ot.off(j,"mouseover",hu);this._activeTrigger[QB]=!1,this._activeTrigger[Rf]=!1,this._activeTrigger[xl]=!1,this._isHovered=null;const P=()=>{this._isWithActiveTrigger()||(this._isHovered||this._disposePopper(),this._element.removeAttribute("aria-describedby"),Ot.trigger(this._element,this.constructor.eventName(XB)))};this._queueCallback(P,this.tip,this._isAnimated())}update(){this._popper&&this._popper.update()}_isWithContent(){return!!this._getTitle()}_getTipElement(){return this.tip||(this.tip=this._createTipElement(this._newContent||this._getContentForTemplate())),this.tip}_createTipElement(f){const A=this._getTemplateFactory(f).toHtml();if(!A)return null;A.classList.remove(Pf,ru),A.classList.add(`bs-${this.constructor.NAME}-auto`);const P=QM(this.constructor.NAME).toString();return A.setAttribute("id",P),this._isAnimated()&&A.classList.add(Pf),A}setContent(f){this._newContent=f,this._isShown()&&(this._disposePopper(),this.show())}_getTemplateFactory(f){return this._templateFactory?this._templateFactory.changeContent(f):this._templateFactory=new WB({...this._config,content:f,extraClass:this._resolvePossibleFunction(this._config.customClass)}),this._templateFactory}_getContentForTemplate(){return{[YB]:this._getTitle()}}_getTitle(){return this._resolvePossibleFunction(this._config.title)||this._element.getAttribute("data-bs-original-title")}_initializeOnDelegatedTarget(f){return this.constructor.getOrCreateInstance(f.delegateTarget,this._getDelegateConfig())}_isAnimated(){return this._config.animation||this.tip&&this.tip.classList.contains(Pf)}_isShown(){return this.tip&&this.tip.classList.contains(ru)}_createPopper(f){const A=io(this._config.placement,[this,f,this._element]),P=c4[A.toUpperCase()];return lp(this._element,f,this._getPopperConfig(P))}_getOffset(){const{offset:f}=this._config;return typeof f=="string"?f.split(",").map(A=>Number.parseInt(A,10)):typeof f=="function"?A=>f(A,this._element):f}_resolvePossibleFunction(f){return io(f,[this._element])}_getPopperConfig(f){const A={placement:f,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"preSetPlacement",enabled:!0,phase:"beforeMain",fn:P=>{this._getTipElement().setAttribute("data-popper-placement",P.state.placement)}}]};return{...A,...io(this._config.popperConfig,[A])}}_setListeners(){const f=this._config.trigger.split(" ");for(const A of f)if(A==="click")Ot.on(this._element,this.constructor.eventName(i4),this._config.selector,P=>{this._initializeOnDelegatedTarget(P).toggle()});else if(A!==ZB){const P=A===xl?this.constructor.eventName(s4):this.constructor.eventName(o4),j=A===xl?this.constructor.eventName(a4):this.constructor.eventName(r4);Ot.on(this._element,P,this._config.selector,h=>{const L=this._initializeOnDelegatedTarget(h);L._activeTrigger[h.type==="focusin"?Rf:xl]=!0,L._enter()}),Ot.on(this._element,j,this._config.selector,h=>{const L=this._initializeOnDelegatedTarget(h);L._activeTrigger[h.type==="focusout"?Rf:xl]=L._element.contains(h.relatedTarget),L._leave()})}this._hideModalHandler=()=>{this._element&&this.hide()},Ot.on(this._element.closest(sC),aC,this._hideModalHandler)}_fixTitle(){const f=this._element.getAttribute("title");f&&(!this._element.getAttribute("aria-label")&&!this._element.textContent.trim()&&this._element.setAttribute("aria-label",f),this._element.setAttribute("data-bs-original-title",f),this._element.removeAttribute("title"))}_enter(){if(this._isShown()||this._isHovered){this._isHovered=!0;return}this._isHovered=!0,this._setTimeout(()=>{this._isHovered&&this.show()},this._config.delay.show)}_leave(){this._isWithActiveTrigger()||(this._isHovered=!1,this._setTimeout(()=>{this._isHovered||this.hide()},this._config.delay.hide))}_setTimeout(f,A){clearTimeout(this._timeout),this._timeout=setTimeout(f,A)}_isWithActiveTrigger(){return Object.values(this._activeTrigger).includes(!0)}_getConfig(f){const A=bs.getDataAttributes(this._element);for(const P of Object.keys(A))GB.has(P)&&delete A[P];return f={...A,...typeof f=="object"&&f?f:{}},f=this._mergeConfigObj(f),f=this._configAfterMerge(f),this._typeCheckConfig(f),f}_configAfterMerge(f){return f.container=f.container===!1?document.body:Zs(f.container),typeof f.delay=="number"&&(f.delay={show:f.delay,hide:f.delay}),typeof f.title=="number"&&(f.title=f.title.toString()),typeof f.content=="number"&&(f.content=f.content.toString()),f}_getDelegateConfig(){const f={};for(const[A,P]of Object.entries(this._config))this.constructor.Default[A]!==P&&(f[A]=P);return f.selector=!1,f.trigger="manual",f}_disposePopper(){this._popper&&(this._popper.destroy(),this._popper=null),this.tip&&(this.tip.remove(),this.tip=null)}static jQueryInterface(f){return this.each(function(){const A=Oc.getOrCreateInstance(this,f);if(typeof f=="string"){if(typeof A[f]>"u")throw new TypeError(`No method named "${f}"`);A[f]()}})}}nr(Oc);const u4="popover",h4=".popover-header",f4=".popover-body",p4={...Oc.Default,content:"",offset:[0,8],placement:"right",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',trigger:"click"},g4={...Oc.DefaultType,content:"(null|string|element|function)"};class fp extends Oc{static get Default(){return p4}static get DefaultType(){return g4}static get NAME(){return u4}_isWithContent(){return this._getTitle()||this._getContent()}_getContentForTemplate(){return{[h4]:this._getTitle(),[f4]:this._getContent()}}_getContent(){return this._resolvePossibleFunction(this._config.content)}static jQueryInterface(f){return this.each(function(){const A=fp.getOrCreateInstance(this,f);if(typeof f=="string"){if(typeof A[f]>"u")throw new TypeError(`No method named "${f}"`);A[f]()}})}}nr(fp);const m4="scrollspy",b4="bs.scrollspy",pp=`.${b4}`,k4=".data-api",_4=`activate${pp}`,cC=`click${pp}`,w4=`load${pp}${k4}`,A4="dropdown-item",kc="active",v4='[data-bs-spy="scroll"]',zf="[href]",C4=".nav, .list-group",lC=".nav-link",y4=".nav-item",E4=".list-group-item",x4=`${lC}, ${y4} > ${lC}, ${E4}`,T4=".dropdown",D4=".dropdown-toggle",S4={offset:null,rootMargin:"0px 0px -25%",smoothScroll:!1,target:null,threshold:[.1,.5,1]},I4={offset:"(number|null)",rootMargin:"string",smoothScroll:"boolean",target:"element",threshold:"array"};class vu extends _r{constructor(f,A){super(f,A),this._targetLinks=new Map,this._observableSections=new Map,this._rootElement=getComputedStyle(this._element).overflowY==="visible"?null:this._element,this._activeTarget=null,this._observer=null,this._previousScrollData={visibleEntryTop:0,parentScrollTop:0},this.refresh()}static get Default(){return S4}static get DefaultType(){return I4}static get NAME(){return m4}refresh(){this._initializeTargetsAndObservables(),this._maybeEnableSmoothScroll(),this._observer?this._observer.disconnect():this._observer=this._getNewObserver();for(const f of this._observableSections.values())this._observer.observe(f)}dispose(){this._observer.disconnect(),super.dispose()}_configAfterMerge(f){return f.target=Zs(f.target)||document.body,f.rootMargin=f.offset?`${f.offset}px 0px -30%`:f.rootMargin,typeof f.threshold=="string"&&(f.threshold=f.threshold.split(",").map(A=>Number.parseFloat(A))),f}_maybeEnableSmoothScroll(){this._config.smoothScroll&&(Ot.off(this._config.target,cC),Ot.on(this._config.target,cC,zf,f=>{const A=this._observableSections.get(f.target.hash);if(A){f.preventDefault();const P=this._rootElement||window,j=A.offsetTop-this._element.offsetTop;if(P.scrollTo){P.scrollTo({top:j,behavior:"smooth"});return}P.scrollTop=j}}))}_getNewObserver(){const f={root:this._rootElement,threshold:this._config.threshold,rootMargin:this._config.rootMargin};return new IntersectionObserver(A=>this._observerCallback(A),f)}_observerCallback(f){const A=L=>this._targetLinks.get(`#${L.target.id}`),P=L=>{this._previousScrollData.visibleEntryTop=L.target.offsetTop,this._process(A(L))},j=(this._rootElement||document.documentElement).scrollTop,h=j>=this._previousScrollData.parentScrollTop;this._previousScrollData.parentScrollTop=j;for(const L of f){if(!L.isIntersecting){this._activeTarget=null,this._clearActiveClass(A(L));continue}const V=L.target.offsetTop>=this._previousScrollData.visibleEntryTop;if(h&&V){if(P(L),!j)return;continue}!h&&!V&&P(L)}}_initializeTargetsAndObservables(){this._targetLinks=new Map,this._observableSections=new Map;const f=ne.find(zf,this._config.target);for(const A of f){if(!A.hash||Js(A))continue;const P=ne.findOne(decodeURI(A.hash),this._element);Mc(P)&&(this._targetLinks.set(decodeURI(A.hash),A),this._observableSections.set(A.hash,P))}}_process(f){this._activeTarget!==f&&(this._clearActiveClass(this._config.target),this._activeTarget=f,f.classList.add(kc),this._activateParents(f),Ot.trigger(this._element,_4,{relatedTarget:f}))}_activateParents(f){if(f.classList.contains(A4)){ne.findOne(D4,f.closest(T4)).classList.add(kc);return}for(const A of ne.parents(f,C4))for(const P of ne.prev(A,x4))P.classList.add(kc)}_clearActiveClass(f){f.classList.remove(kc);const A=ne.find(`${zf}.${kc}`,f);for(const P of A)P.classList.remove(kc)}static jQueryInterface(f){return this.each(function(){const A=vu.getOrCreateInstance(this,f);if(typeof f=="string"){if(A[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);A[f]()}})}}Ot.on(window,w4,()=>{for(const x of ne.find(v4))vu.getOrCreateInstance(x)});nr(vu);const M4="tab",N4="bs.tab",Ra=`.${N4}`,O4=`hide${Ra}`,B4=`hidden${Ra}`,L4=`show${Ra}`,P4=`shown${Ra}`,R4=`click${Ra}`,z4=`keydown${Ra}`,j4=`load${Ra}`,F4="ArrowLeft",dC="ArrowRight",V4="ArrowUp",uC="ArrowDown",jf="Home",hC="End",Na="active",fC="fade",Ff="show",H4="dropdown",m0=".dropdown-toggle",U4=".dropdown-menu",Vf=`:not(${m0})`,$4='.list-group, .nav, [role="tablist"]',W4=".nav-item, .list-group-item",q4=`.nav-link${Vf}, .list-group-item${Vf}, [role="tab"]${Vf}`,b0='[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',Hf=`${q4}, ${b0}`,G4=`.${Na}[data-bs-toggle="tab"], .${Na}[data-bs-toggle="pill"], .${Na}[data-bs-toggle="list"]`;class Sc extends _r{constructor(f){super(f),this._parent=this._element.closest($4),this._parent&&(this._setInitialAttributes(this._parent,this._getChildren()),Ot.on(this._element,z4,A=>this._keydown(A)))}static get NAME(){return M4}show(){const f=this._element;if(this._elemIsActive(f))return;const A=this._getActiveElem(),P=A?Ot.trigger(A,O4,{relatedTarget:f}):null;Ot.trigger(f,L4,{relatedTarget:A}).defaultPrevented||P&&P.defaultPrevented||(this._deactivate(A,f),this._activate(f,A))}_activate(f,A){if(!f)return;f.classList.add(Na),this._activate(ne.getElementFromSelector(f));const P=()=>{if(f.getAttribute("role")!=="tab"){f.classList.add(Ff);return}f.removeAttribute("tabindex"),f.setAttribute("aria-selected",!0),this._toggleDropDown(f,!0),Ot.trigger(f,P4,{relatedTarget:A})};this._queueCallback(P,f,f.classList.contains(fC))}_deactivate(f,A){if(!f)return;f.classList.remove(Na),f.blur(),this._deactivate(ne.getElementFromSelector(f));const P=()=>{if(f.getAttribute("role")!=="tab"){f.classList.remove(Ff);return}f.setAttribute("aria-selected",!1),f.setAttribute("tabindex","-1"),this._toggleDropDown(f,!1),Ot.trigger(f,B4,{relatedTarget:A})};this._queueCallback(P,f,f.classList.contains(fC))}_keydown(f){if(![F4,dC,V4,uC,jf,hC].includes(f.key))return;f.stopPropagation(),f.preventDefault();const A=this._getChildren().filter(j=>!Js(j));let P;if([jf,hC].includes(f.key))P=A[f.key===jf?0:A.length-1];else{const j=[dC,uC].includes(f.key);P=dp(A,f.target,j,!0)}P&&(P.focus({preventScroll:!0}),Sc.getOrCreateInstance(P).show())}_getChildren(){return ne.find(Hf,this._parent)}_getActiveElem(){return this._getChildren().find(f=>this._elemIsActive(f))||null}_setInitialAttributes(f,A){this._setAttributeIfNotExists(f,"role","tablist");for(const P of A)this._setInitialAttributesOnChild(P)}_setInitialAttributesOnChild(f){f=this._getInnerElement(f);const A=this._elemIsActive(f),P=this._getOuterElement(f);f.setAttribute("aria-selected",A),P!==f&&this._setAttributeIfNotExists(P,"role","presentation"),A||f.setAttribute("tabindex","-1"),this._setAttributeIfNotExists(f,"role","tab"),this._setInitialAttributesOnTargetPanel(f)}_setInitialAttributesOnTargetPanel(f){const A=ne.getElementFromSelector(f);A&&(this._setAttributeIfNotExists(A,"role","tabpanel"),f.id&&this._setAttributeIfNotExists(A,"aria-labelledby",`${f.id}`))}_toggleDropDown(f,A){const P=this._getOuterElement(f);if(!P.classList.contains(H4))return;const j=(h,L)=>{const V=ne.findOne(h,P);V&&V.classList.toggle(L,A)};j(m0,Na),j(U4,Ff),P.setAttribute("aria-expanded",A)}_setAttributeIfNotExists(f,A,P){f.hasAttribute(A)||f.setAttribute(A,P)}_elemIsActive(f){return f.classList.contains(Na)}_getInnerElement(f){return f.matches(Hf)?f:ne.findOne(Hf,f)}_getOuterElement(f){return f.closest(W4)||f}static jQueryInterface(f){return this.each(function(){const A=Sc.getOrCreateInstance(this);if(typeof f=="string"){if(A[f]===void 0||f.startsWith("_")||f==="constructor")throw new TypeError(`No method named "${f}"`);A[f]()}})}}Ot.on(document,R4,b0,function(x){["A","AREA"].includes(this.tagName)&&x.preventDefault(),!Js(this)&&Sc.getOrCreateInstance(this).show()});Ot.on(window,j4,()=>{for(const x of ne.find(G4))Sc.getOrCreateInstance(x)});nr(Sc);const K4="toast",Y4="bs.toast",na=`.${Y4}`,Q4=`mouseover${na}`,Z4=`mouseout${na}`,J4=`focusin${na}`,X4=`focusout${na}`,tL=`hide${na}`,eL=`hidden${na}`,nL=`show${na}`,iL=`shown${na}`,oL="fade",pC="hide",su="show",au="showing",rL={animation:"boolean",autohide:"boolean",delay:"number"},sL={animation:!0,autohide:!0,delay:5e3};class Cu extends _r{constructor(f,A){super(f,A),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get Default(){return sL}static get DefaultType(){return rL}static get NAME(){return K4}show(){if(Ot.trigger(this._element,nL).defaultPrevented)return;this._clearTimeout(),this._config.animation&&this._element.classList.add(oL);const A=()=>{this._element.classList.remove(au),Ot.trigger(this._element,iL),this._maybeScheduleHide()};this._element.classList.remove(pC),Ml(this._element),this._element.classList.add(su,au),this._queueCallback(A,this._element,this._config.animation)}hide(){if(!this.isShown()||Ot.trigger(this._element,tL).defaultPrevented)return;const A=()=>{this._element.classList.add(pC),this._element.classList.remove(au,su),Ot.trigger(this._element,eL)};this._element.classList.add(au),this._queueCallback(A,this._element,this._config.animation)}dispose(){this._clearTimeout(),this.isShown()&&this._element.classList.remove(su),super.dispose()}isShown(){return this._element.classList.contains(su)}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(f,A){switch(f.type){case"mouseover":case"mouseout":{this._hasMouseInteraction=A;break}case"focusin":case"focusout":{this._hasKeyboardInteraction=A;break}}if(A){this._clearTimeout();return}const P=f.relatedTarget;this._element===P||this._element.contains(P)||this._maybeScheduleHide()}_setListeners(){Ot.on(this._element,Q4,f=>this._onInteraction(f,!0)),Ot.on(this._element,Z4,f=>this._onInteraction(f,!1)),Ot.on(this._element,J4,f=>this._onInteraction(f,!0)),Ot.on(this._element,X4,f=>this._onInteraction(f,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(f){return this.each(function(){const A=Cu.getOrCreateInstance(this,f);if(typeof f=="string"){if(typeof A[f]>"u")throw new TypeError(`No method named "${f}"`);A[f](this)}})}}_u(Cu);nr(Cu);var Qs=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function aL(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Uf={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var gC;function gp(){return gC||(gC=1,function(x){(function(f,A){x.exports=f.document?A(f,!0):function(P){if(!P.document)throw new Error("jQuery requires a window with a document");return A(P)}})(typeof window<"u"?window:Qs,function(f,A){var P=[],j=Object.getPrototypeOf,h=P.slice,L=P.flat?function(u){return P.flat.call(u)}:function(u){return P.concat.apply([],u)},V=P.push,_=P.indexOf,K={},q=K.toString,U=K.hasOwnProperty,E=U.toString,B=E.call(Object),Q={},J=function(g){return typeof g=="function"&&typeof g.nodeType!="number"&&typeof g.item!="function"},ot=function(g){return g!=null&&g===g.window},at=f.document,ct={type:!0,src:!0,nonce:!0,noModule:!0};function Et(u,g,k){k=k||at;var C,I,M=k.createElement("script");if(M.text=u,g)for(C in ct)I=g[C]||g.getAttribute&&g.getAttribute(C),I&&M.setAttribute(C,I);k.head.appendChild(M).parentNode.removeChild(M)}function xt(u){return u==null?u+"":typeof u=="object"||typeof u=="function"?K[q.call(u)]||"object":typeof u}var Vt="3.7.1",Kt=/HTML$/i,v=function(u,g){return new v.fn.init(u,g)};v.fn=v.prototype={jquery:Vt,constructor:v,length:0,toArray:function(){return h.call(this)},get:function(u){return u==null?h.call(this):u<0?this[u+this.length]:this[u]},pushStack:function(u){var g=v.merge(this.constructor(),u);return g.prevObject=this,g},each:function(u){return v.each(this,u)},map:function(u){return this.pushStack(v.map(this,function(g,k){return u.call(g,k,g)}))},slice:function(){return this.pushStack(h.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(v.grep(this,function(u,g){return(g+1)%2}))},odd:function(){return this.pushStack(v.grep(this,function(u,g){return g%2}))},eq:function(u){var g=this.length,k=+u+(u<0?g:0);return this.pushStack(k>=0&&k<g?[this[k]]:[])},end:function(){return this.prevObject||this.constructor()},push:V,sort:P.sort,splice:P.splice},v.extend=v.fn.extend=function(){var u,g,k,C,I,M,z=arguments[0]||{},tt=1,Z=arguments.length,st=!1;for(typeof z=="boolean"&&(st=z,z=arguments[tt]||{},tt++),typeof z!="object"&&!J(z)&&(z={}),tt===Z&&(z=this,tt--);tt<Z;tt++)if((u=arguments[tt])!=null)for(g in u)C=u[g],!(g==="__proto__"||z===C)&&(st&&C&&(v.isPlainObject(C)||(I=Array.isArray(C)))?(k=z[g],I&&!Array.isArray(k)?M=[]:!I&&!v.isPlainObject(k)?M={}:M=k,I=!1,z[g]=v.extend(st,M,C)):C!==void 0&&(z[g]=C));return z},v.extend({expando:"jQuery"+(Vt+Math.random()).replace(/\D/g,""),isReady:!0,error:function(u){throw new Error(u)},noop:function(){},isPlainObject:function(u){var g,k;return!u||q.call(u)!=="[object Object]"?!1:(g=j(u),g?(k=U.call(g,"constructor")&&g.constructor,typeof k=="function"&&E.call(k)===B):!0)},isEmptyObject:function(u){var g;for(g in u)return!1;return!0},globalEval:function(u,g,k){Et(u,{nonce:g&&g.nonce},k)},each:function(u,g){var k,C=0;if(Gt(u))for(k=u.length;C<k&&g.call(u[C],C,u[C])!==!1;C++);else for(C in u)if(g.call(u[C],C,u[C])===!1)break;return u},text:function(u){var g,k="",C=0,I=u.nodeType;if(!I)for(;g=u[C++];)k+=v.text(g);return I===1||I===11?u.textContent:I===9?u.documentElement.textContent:I===3||I===4?u.nodeValue:k},makeArray:function(u,g){var k=g||[];return u!=null&&(Gt(Object(u))?v.merge(k,typeof u=="string"?[u]:u):V.call(k,u)),k},inArray:function(u,g,k){return g==null?-1:_.call(g,u,k)},isXMLDoc:function(u){var g=u&&u.namespaceURI,k=u&&(u.ownerDocument||u).documentElement;return!Kt.test(g||k&&k.nodeName||"HTML")},merge:function(u,g){for(var k=+g.length,C=0,I=u.length;C<k;C++)u[I++]=g[C];return u.length=I,u},grep:function(u,g,k){for(var C,I=[],M=0,z=u.length,tt=!k;M<z;M++)C=!g(u[M],M),C!==tt&&I.push(u[M]);return I},map:function(u,g,k){var C,I,M=0,z=[];if(Gt(u))for(C=u.length;M<C;M++)I=g(u[M],M,k),I!=null&&z.push(I);else for(M in u)I=g(u[M],M,k),I!=null&&z.push(I);return L(z)},guid:1,support:Q}),typeof Symbol=="function"&&(v.fn[Symbol.iterator]=P[Symbol.iterator]),v.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(u,g){K["[object "+g+"]"]=g.toLowerCase()});function Gt(u){var g=!!u&&"length"in u&&u.length,k=xt(u);return J(u)||ot(u)?!1:k==="array"||g===0||typeof g=="number"&&g>0&&g-1 in u}function W(u,g){return u.nodeName&&u.nodeName.toLowerCase()===g.toLowerCase()}var jt=P.pop,oe=P.sort,ue=P.splice,Wt="[\\x20\\t\\r\\n\\f]",ze=new RegExp("^"+Wt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Wt+"+$","g");v.contains=function(u,g){var k=g&&g.parentNode;return u===k||!!(k&&k.nodeType===1&&(u.contains?u.contains(k):u.compareDocumentPosition&&u.compareDocumentPosition(k)&16))};var $e=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function _e(u,g){return g?u==="\0"?"�":u.slice(0,-1)+"\\"+u.charCodeAt(u.length-1).toString(16)+" ":"\\"+u}v.escapeSelector=function(u){return(u+"").replace($e,_e)};var ve=at,Xe=V;(function(){var u,g,k,C,I,M=Xe,z,tt,Z,st,_t,At=v.expando,gt=0,Mt=0,Xt=Fo(),se=Fo(),te=Fo(),Ve=Fo(),Ue=function(Y,rt){return Y===rt&&(I=!0),0},on="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",ln="(?:\\\\[\\da-fA-F]{1,6}"+Wt+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",he="\\["+Wt+"*("+ln+")(?:"+Wt+"*([*^$|!~]?=)"+Wt+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+ln+"))|)"+Wt+"*\\]",Gi=":("+ln+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+he+")*)|.*)\\)|)",me=new RegExp(Wt+"+","g"),Le=new RegExp("^"+Wt+"*,"+Wt+"*"),po=new RegExp("^"+Wt+"*([>+~]|"+Wt+")"+Wt+"*"),go=new RegExp(Wt+"|>"),ci=new RegExp(Gi),li=new RegExp("^"+ln+"$"),Ge={ID:new RegExp("^#("+ln+")"),CLASS:new RegExp("^\\.("+ln+")"),TAG:new RegExp("^("+ln+"|[*])"),ATTR:new RegExp("^"+he),PSEUDO:new RegExp("^"+Gi),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Wt+"*(even|odd|(([+-]|)(\\d*)n|)"+Wt+"*(?:([+-]|)"+Wt+"*(\\d+)|))"+Wt+"*\\)|)","i"),bool:new RegExp("^(?:"+on+")$","i"),needsContext:new RegExp("^"+Wt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Wt+"*((?:-\\d)?\\d*)"+Wt+"*\\)|)(?=[^-]|$)","i")},Pn=/^(?:input|select|textarea|button)$/i,rn=/^h\d$/i,Rn=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Ki=/[+~]/,Ze=new RegExp("\\\\[\\da-fA-F]{1,6}"+Wt+"?|\\\\([^\\r\\n\\f])","g"),Yn=function(Y,rt){var ht="0x"+Y.slice(1)-65536;return rt||(ht<0?String.fromCharCode(ht+65536):String.fromCharCode(ht>>10|55296,ht&1023|56320))},Ms=function(){Yi()},lr=$o(function(Y){return Y.disabled===!0&&W(Y,"fieldset")},{dir:"parentNode",next:"legend"});function Ns(){try{return z.activeElement}catch{}}try{M.apply(P=h.call(ve.childNodes),ve.childNodes),P[ve.childNodes.length].nodeType}catch{M={apply:function(rt,ht){Xe.apply(rt,h.call(ht))},call:function(rt){Xe.apply(rt,h.call(arguments,1))}}}function Ce(Y,rt,ht,mt){var vt,Lt,Ut,Pt,$t,ae,Yt,Qt=rt&&rt.ownerDocument,ee=rt?rt.nodeType:9;if(ht=ht||[],typeof Y!="string"||!Y||ee!==1&&ee!==9&&ee!==11)return ht;if(!mt&&(Yi(rt),rt=rt||z,Z)){if(ee!==11&&($t=Rn.exec(Y)))if(vt=$t[1]){if(ee===9)if(Ut=rt.getElementById(vt)){if(Ut.id===vt)return M.call(ht,Ut),ht}else return ht;else if(Qt&&(Ut=Qt.getElementById(vt))&&Ce.contains(rt,Ut)&&Ut.id===vt)return M.call(ht,Ut),ht}else{if($t[2])return M.apply(ht,rt.getElementsByTagName(Y)),ht;if((vt=$t[3])&&rt.getElementsByClassName)return M.apply(ht,rt.getElementsByClassName(vt)),ht}if(!Ve[Y+" "]&&(!st||!st.test(Y))){if(Yt=Y,Qt=rt,ee===1&&(go.test(Y)||po.test(Y))){for(Qt=Ki.test(Y)&&Ho(rt.parentNode)||rt,(Qt!=rt||!Q.scope)&&((Pt=rt.getAttribute("id"))?Pt=v.escapeSelector(Pt):rt.setAttribute("id",Pt=At)),ae=Pi(Y),Lt=ae.length;Lt--;)ae[Lt]=(Pt?"#"+Pt:":scope")+" "+mo(ae[Lt]);Yt=ae.join(",")}try{return M.apply(ht,Qt.querySelectorAll(Yt)),ht}catch{Ve(Y,!0)}finally{Pt===At&&rt.removeAttribute("id")}}}return Qr(Y.replace(ze,"$1"),rt,ht,mt)}function Fo(){var Y=[];function rt(ht,mt){return Y.push(ht+" ")>g.cacheLength&&delete rt[Y.shift()],rt[ht+" "]=mt}return rt}function zn(Y){return Y[At]=!0,Y}function Qn(Y){var rt=z.createElement("fieldset");try{return!!Y(rt)}catch{return!1}finally{rt.parentNode&&rt.parentNode.removeChild(rt),rt=null}}function dr(Y){return function(rt){return W(rt,"input")&&rt.type===Y}}function Vo(Y){return function(rt){return(W(rt,"input")||W(rt,"button"))&&rt.type===Y}}function jn(Y){return function(rt){return"form"in rt?rt.parentNode&&rt.disabled===!1?"label"in rt?"label"in rt.parentNode?rt.parentNode.disabled===Y:rt.disabled===Y:rt.isDisabled===Y||rt.isDisabled!==!Y&&lr(rt)===Y:rt.disabled===Y:"label"in rt?rt.disabled===Y:!1}}function di(Y){return zn(function(rt){return rt=+rt,zn(function(ht,mt){for(var vt,Lt=Y([],ht.length,rt),Ut=Lt.length;Ut--;)ht[vt=Lt[Ut]]&&(ht[vt]=!(mt[vt]=ht[vt]))})})}function Ho(Y){return Y&&typeof Y.getElementsByTagName<"u"&&Y}function Yi(Y){var rt,ht=Y?Y.ownerDocument||Y:ve;return ht==z||ht.nodeType!==9||!ht.documentElement||(z=ht,tt=z.documentElement,Z=!v.isXMLDoc(z),_t=tt.matches||tt.webkitMatchesSelector||tt.msMatchesSelector,tt.msMatchesSelector&&ve!=z&&(rt=z.defaultView)&&rt.top!==rt&&rt.addEventListener("unload",Ms),Q.getById=Qn(function(mt){return tt.appendChild(mt).id=v.expando,!z.getElementsByName||!z.getElementsByName(v.expando).length}),Q.disconnectedMatch=Qn(function(mt){return _t.call(mt,"*")}),Q.scope=Qn(function(){return z.querySelectorAll(":scope")}),Q.cssHas=Qn(function(){try{return z.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),Q.getById?(g.filter.ID=function(mt){var vt=mt.replace(Ze,Yn);return function(Lt){return Lt.getAttribute("id")===vt}},g.find.ID=function(mt,vt){if(typeof vt.getElementById<"u"&&Z){var Lt=vt.getElementById(mt);return Lt?[Lt]:[]}}):(g.filter.ID=function(mt){var vt=mt.replace(Ze,Yn);return function(Lt){var Ut=typeof Lt.getAttributeNode<"u"&&Lt.getAttributeNode("id");return Ut&&Ut.value===vt}},g.find.ID=function(mt,vt){if(typeof vt.getElementById<"u"&&Z){var Lt,Ut,Pt,$t=vt.getElementById(mt);if($t){if(Lt=$t.getAttributeNode("id"),Lt&&Lt.value===mt)return[$t];for(Pt=vt.getElementsByName(mt),Ut=0;$t=Pt[Ut++];)if(Lt=$t.getAttributeNode("id"),Lt&&Lt.value===mt)return[$t]}return[]}}),g.find.TAG=function(mt,vt){return typeof vt.getElementsByTagName<"u"?vt.getElementsByTagName(mt):vt.querySelectorAll(mt)},g.find.CLASS=function(mt,vt){if(typeof vt.getElementsByClassName<"u"&&Z)return vt.getElementsByClassName(mt)},st=[],Qn(function(mt){var vt;tt.appendChild(mt).innerHTML="<a id='"+At+"' href='' disabled='disabled'></a><select id='"+At+"-\r\\' disabled='disabled'><option selected=''></option></select>",mt.querySelectorAll("[selected]").length||st.push("\\["+Wt+"*(?:value|"+on+")"),mt.querySelectorAll("[id~="+At+"-]").length||st.push("~="),mt.querySelectorAll("a#"+At+"+*").length||st.push(".#.+[+~]"),mt.querySelectorAll(":checked").length||st.push(":checked"),vt=z.createElement("input"),vt.setAttribute("type","hidden"),mt.appendChild(vt).setAttribute("name","D"),tt.appendChild(mt).disabled=!0,mt.querySelectorAll(":disabled").length!==2&&st.push(":enabled",":disabled"),vt=z.createElement("input"),vt.setAttribute("name",""),mt.appendChild(vt),mt.querySelectorAll("[name='']").length||st.push("\\["+Wt+"*name"+Wt+"*="+Wt+`*(?:''|"")`)}),Q.cssHas||st.push(":has"),st=st.length&&new RegExp(st.join("|")),Ue=function(mt,vt){if(mt===vt)return I=!0,0;var Lt=!mt.compareDocumentPosition-!vt.compareDocumentPosition;return Lt||(Lt=(mt.ownerDocument||mt)==(vt.ownerDocument||vt)?mt.compareDocumentPosition(vt):1,Lt&1||!Q.sortDetached&&vt.compareDocumentPosition(mt)===Lt?mt===z||mt.ownerDocument==ve&&Ce.contains(ve,mt)?-1:vt===z||vt.ownerDocument==ve&&Ce.contains(ve,vt)?1:C?_.call(C,mt)-_.call(C,vt):0:Lt&4?-1:1)}),z}Ce.matches=function(Y,rt){return Ce(Y,null,null,rt)},Ce.matchesSelector=function(Y,rt){if(Yi(Y),Z&&!Ve[rt+" "]&&(!st||!st.test(rt)))try{var ht=_t.call(Y,rt);if(ht||Q.disconnectedMatch||Y.document&&Y.document.nodeType!==11)return ht}catch{Ve(rt,!0)}return Ce(rt,z,null,[Y]).length>0},Ce.contains=function(Y,rt){return(Y.ownerDocument||Y)!=z&&Yi(Y),v.contains(Y,rt)},Ce.attr=function(Y,rt){(Y.ownerDocument||Y)!=z&&Yi(Y);var ht=g.attrHandle[rt.toLowerCase()],mt=ht&&U.call(g.attrHandle,rt.toLowerCase())?ht(Y,rt,!Z):void 0;return mt!==void 0?mt:Y.getAttribute(rt)},Ce.error=function(Y){throw new Error("Syntax error, unrecognized expression: "+Y)},v.uniqueSort=function(Y){var rt,ht=[],mt=0,vt=0;if(I=!Q.sortStable,C=!Q.sortStable&&h.call(Y,0),oe.call(Y,Ue),I){for(;rt=Y[vt++];)rt===Y[vt]&&(mt=ht.push(vt));for(;mt--;)ue.call(Y,ht[mt],1)}return C=null,Y},v.fn.uniqueSort=function(){return this.pushStack(v.uniqueSort(h.apply(this)))},g=v.expr={cacheLength:50,createPseudo:zn,match:Ge,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(Y){return Y[1]=Y[1].replace(Ze,Yn),Y[3]=(Y[3]||Y[4]||Y[5]||"").replace(Ze,Yn),Y[2]==="~="&&(Y[3]=" "+Y[3]+" "),Y.slice(0,4)},CHILD:function(Y){return Y[1]=Y[1].toLowerCase(),Y[1].slice(0,3)==="nth"?(Y[3]||Ce.error(Y[0]),Y[4]=+(Y[4]?Y[5]+(Y[6]||1):2*(Y[3]==="even"||Y[3]==="odd")),Y[5]=+(Y[7]+Y[8]||Y[3]==="odd")):Y[3]&&Ce.error(Y[0]),Y},PSEUDO:function(Y){var rt,ht=!Y[6]&&Y[2];return Ge.CHILD.test(Y[0])?null:(Y[3]?Y[2]=Y[4]||Y[5]||"":ht&&ci.test(ht)&&(rt=Pi(ht,!0))&&(rt=ht.indexOf(")",ht.length-rt)-ht.length)&&(Y[0]=Y[0].slice(0,rt),Y[2]=ht.slice(0,rt)),Y.slice(0,3))}},filter:{TAG:function(Y){var rt=Y.replace(Ze,Yn).toLowerCase();return Y==="*"?function(){return!0}:function(ht){return W(ht,rt)}},CLASS:function(Y){var rt=Xt[Y+" "];return rt||(rt=new RegExp("(^|"+Wt+")"+Y+"("+Wt+"|$)"))&&Xt(Y,function(ht){return rt.test(typeof ht.className=="string"&&ht.className||typeof ht.getAttribute<"u"&&ht.getAttribute("class")||"")})},ATTR:function(Y,rt,ht){return function(mt){var vt=Ce.attr(mt,Y);return vt==null?rt==="!=":rt?(vt+="",rt==="="?vt===ht:rt==="!="?vt!==ht:rt==="^="?ht&&vt.indexOf(ht)===0:rt==="*="?ht&&vt.indexOf(ht)>-1:rt==="$="?ht&&vt.slice(-ht.length)===ht:rt==="~="?(" "+vt.replace(me," ")+" ").indexOf(ht)>-1:rt==="|="?vt===ht||vt.slice(0,ht.length+1)===ht+"-":!1):!0}},CHILD:function(Y,rt,ht,mt,vt){var Lt=Y.slice(0,3)!=="nth",Ut=Y.slice(-4)!=="last",Pt=rt==="of-type";return mt===1&&vt===0?function($t){return!!$t.parentNode}:function($t,ae,Yt){var Qt,ee,lt,ft,pt,H=Lt!==Ut?"nextSibling":"previousSibling",et=$t.parentNode,wt=Pt&&$t.nodeName.toLowerCase(),yt=!Yt&&!Pt,Rt=!1;if(et){if(Lt){for(;H;){for(lt=$t;lt=lt[H];)if(Pt?W(lt,wt):lt.nodeType===1)return!1;pt=H=Y==="only"&&!pt&&"nextSibling"}return!0}if(pt=[Ut?et.firstChild:et.lastChild],Ut&&yt){for(ee=et[At]||(et[At]={}),Qt=ee[Y]||[],ft=Qt[0]===gt&&Qt[1],Rt=ft&&Qt[2],lt=ft&&et.childNodes[ft];lt=++ft&&lt&&lt[H]||(Rt=ft=0)||pt.pop();)if(lt.nodeType===1&&++Rt&&lt===$t){ee[Y]=[gt,ft,Rt];break}}else if(yt&&(ee=$t[At]||($t[At]={}),Qt=ee[Y]||[],ft=Qt[0]===gt&&Qt[1],Rt=ft),Rt===!1)for(;(lt=++ft&&lt&&lt[H]||(Rt=ft=0)||pt.pop())&&!((Pt?W(lt,wt):lt.nodeType===1)&&++Rt&&(yt&&(ee=lt[At]||(lt[At]={}),ee[Y]=[gt,Rt]),lt===$t)););return Rt-=vt,Rt===mt||Rt%mt===0&&Rt/mt>=0}}},PSEUDO:function(Y,rt){var ht,mt=g.pseudos[Y]||g.setFilters[Y.toLowerCase()]||Ce.error("unsupported pseudo: "+Y);return mt[At]?mt(rt):mt.length>1?(ht=[Y,Y,"",rt],g.setFilters.hasOwnProperty(Y.toLowerCase())?zn(function(vt,Lt){for(var Ut,Pt=mt(vt,rt),$t=Pt.length;$t--;)Ut=_.call(vt,Pt[$t]),vt[Ut]=!(Lt[Ut]=Pt[$t])}):function(vt){return mt(vt,0,ht)}):mt}},pseudos:{not:zn(function(Y){var rt=[],ht=[],mt=Zi(Y.replace(ze,"$1"));return mt[At]?zn(function(vt,Lt,Ut,Pt){for(var $t,ae=mt(vt,null,Pt,[]),Yt=vt.length;Yt--;)($t=ae[Yt])&&(vt[Yt]=!(Lt[Yt]=$t))}):function(vt,Lt,Ut){return rt[0]=vt,mt(rt,null,Ut,ht),rt[0]=null,!ht.pop()}}),has:zn(function(Y){return function(rt){return Ce(Y,rt).length>0}}),contains:zn(function(Y){return Y=Y.replace(Ze,Yn),function(rt){return(rt.textContent||v.text(rt)).indexOf(Y)>-1}}),lang:zn(function(Y){return li.test(Y||"")||Ce.error("unsupported lang: "+Y),Y=Y.replace(Ze,Yn).toLowerCase(),function(rt){var ht;do if(ht=Z?rt.lang:rt.getAttribute("xml:lang")||rt.getAttribute("lang"))return ht=ht.toLowerCase(),ht===Y||ht.indexOf(Y+"-")===0;while((rt=rt.parentNode)&&rt.nodeType===1);return!1}}),target:function(Y){var rt=f.location&&f.location.hash;return rt&&rt.slice(1)===Y.id},root:function(Y){return Y===tt},focus:function(Y){return Y===Ns()&&z.hasFocus()&&!!(Y.type||Y.href||~Y.tabIndex)},enabled:jn(!1),disabled:jn(!0),checked:function(Y){return W(Y,"input")&&!!Y.checked||W(Y,"option")&&!!Y.selected},selected:function(Y){return Y.parentNode&&Y.parentNode.selectedIndex,Y.selected===!0},empty:function(Y){for(Y=Y.firstChild;Y;Y=Y.nextSibling)if(Y.nodeType<6)return!1;return!0},parent:function(Y){return!g.pseudos.empty(Y)},header:function(Y){return rn.test(Y.nodeName)},input:function(Y){return Pn.test(Y.nodeName)},button:function(Y){return W(Y,"input")&&Y.type==="button"||W(Y,"button")},text:function(Y){var rt;return W(Y,"input")&&Y.type==="text"&&((rt=Y.getAttribute("type"))==null||rt.toLowerCase()==="text")},first:di(function(){return[0]}),last:di(function(Y,rt){return[rt-1]}),eq:di(function(Y,rt,ht){return[ht<0?ht+rt:ht]}),even:di(function(Y,rt){for(var ht=0;ht<rt;ht+=2)Y.push(ht);return Y}),odd:di(function(Y,rt){for(var ht=1;ht<rt;ht+=2)Y.push(ht);return Y}),lt:di(function(Y,rt,ht){var mt;for(ht<0?mt=ht+rt:ht>rt?mt=rt:mt=ht;--mt>=0;)Y.push(mt);return Y}),gt:di(function(Y,rt,ht){for(var mt=ht<0?ht+rt:ht;++mt<rt;)Y.push(mt);return Y})}},g.pseudos.nth=g.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})g.pseudos[u]=dr(u);for(u in{submit:!0,reset:!0})g.pseudos[u]=Vo(u);function Uo(){}Uo.prototype=g.filters=g.pseudos,g.setFilters=new Uo;function Pi(Y,rt){var ht,mt,vt,Lt,Ut,Pt,$t,ae=se[Y+" "];if(ae)return rt?0:ae.slice(0);for(Ut=Y,Pt=[],$t=g.preFilter;Ut;){(!ht||(mt=Le.exec(Ut)))&&(mt&&(Ut=Ut.slice(mt[0].length)||Ut),Pt.push(vt=[])),ht=!1,(mt=po.exec(Ut))&&(ht=mt.shift(),vt.push({value:ht,type:mt[0].replace(ze," ")}),Ut=Ut.slice(ht.length));for(Lt in g.filter)(mt=Ge[Lt].exec(Ut))&&(!$t[Lt]||(mt=$t[Lt](mt)))&&(ht=mt.shift(),vt.push({value:ht,type:Lt,matches:mt}),Ut=Ut.slice(ht.length));if(!ht)break}return rt?Ut.length:Ut?Ce.error(Y):se(Y,Pt).slice(0)}function mo(Y){for(var rt=0,ht=Y.length,mt="";rt<ht;rt++)mt+=Y[rt].value;return mt}function $o(Y,rt,ht){var mt=rt.dir,vt=rt.next,Lt=vt||mt,Ut=ht&&Lt==="parentNode",Pt=Mt++;return rt.first?function($t,ae,Yt){for(;$t=$t[mt];)if($t.nodeType===1||Ut)return Y($t,ae,Yt);return!1}:function($t,ae,Yt){var Qt,ee,lt=[gt,Pt];if(Yt){for(;$t=$t[mt];)if(($t.nodeType===1||Ut)&&Y($t,ae,Yt))return!0}else for(;$t=$t[mt];)if($t.nodeType===1||Ut)if(ee=$t[At]||($t[At]={}),vt&&W($t,vt))$t=$t[mt]||$t;else{if((Qt=ee[Lt])&&Qt[0]===gt&&Qt[1]===Pt)return lt[2]=Qt[2];if(ee[Lt]=lt,lt[2]=Y($t,ae,Yt))return!0}return!1}}function Kr(Y){return Y.length>1?function(rt,ht,mt){for(var vt=Y.length;vt--;)if(!Y[vt](rt,ht,mt))return!1;return!0}:Y[0]}function Yr(Y,rt,ht){for(var mt=0,vt=rt.length;mt<vt;mt++)Ce(Y,rt[mt],ht);return ht}function Tr(Y,rt,ht,mt,vt){for(var Lt,Ut=[],Pt=0,$t=Y.length,ae=rt!=null;Pt<$t;Pt++)(Lt=Y[Pt])&&(!ht||ht(Lt,mt,vt))&&(Ut.push(Lt),ae&&rt.push(Pt));return Ut}function Ti(Y,rt,ht,mt,vt,Lt){return mt&&!mt[At]&&(mt=Ti(mt)),vt&&!vt[At]&&(vt=Ti(vt,Lt)),zn(function(Ut,Pt,$t,ae){var Yt,Qt,ee,lt,ft=[],pt=[],H=Pt.length,et=Ut||Yr(rt||"*",$t.nodeType?[$t]:$t,[]),wt=Y&&(Ut||!rt)?Tr(et,ft,Y,$t,ae):et;if(ht?(lt=vt||(Ut?Y:H||mt)?[]:Pt,ht(wt,lt,$t,ae)):lt=wt,mt)for(Yt=Tr(lt,pt),mt(Yt,[],$t,ae),Qt=Yt.length;Qt--;)(ee=Yt[Qt])&&(lt[pt[Qt]]=!(wt[pt[Qt]]=ee));if(Ut){if(vt||Y){if(vt){for(Yt=[],Qt=lt.length;Qt--;)(ee=lt[Qt])&&Yt.push(wt[Qt]=ee);vt(null,lt=[],Yt,ae)}for(Qt=lt.length;Qt--;)(ee=lt[Qt])&&(Yt=vt?_.call(Ut,ee):ft[Qt])>-1&&(Ut[Yt]=!(Pt[Yt]=ee))}}else lt=Tr(lt===Pt?lt.splice(H,lt.length):lt),vt?vt(null,Pt,lt,ae):M.apply(Pt,lt)})}function Qi(Y){for(var rt,ht,mt,vt=Y.length,Lt=g.relative[Y[0].type],Ut=Lt||g.relative[" "],Pt=Lt?1:0,$t=$o(function(Qt){return Qt===rt},Ut,!0),ae=$o(function(Qt){return _.call(rt,Qt)>-1},Ut,!0),Yt=[function(Qt,ee,lt){var ft=!Lt&&(lt||ee!=k)||((rt=ee).nodeType?$t(Qt,ee,lt):ae(Qt,ee,lt));return rt=null,ft}];Pt<vt;Pt++)if(ht=g.relative[Y[Pt].type])Yt=[$o(Kr(Yt),ht)];else{if(ht=g.filter[Y[Pt].type].apply(null,Y[Pt].matches),ht[At]){for(mt=++Pt;mt<vt&&!g.relative[Y[mt].type];mt++);return Ti(Pt>1&&Kr(Yt),Pt>1&&mo(Y.slice(0,Pt-1).concat({value:Y[Pt-2].type===" "?"*":""})).replace(ze,"$1"),ht,Pt<mt&&Qi(Y.slice(Pt,mt)),mt<vt&&Qi(Y=Y.slice(mt)),mt<vt&&mo(Y))}Yt.push(ht)}return Kr(Yt)}function Dr(Y,rt){var ht=rt.length>0,mt=Y.length>0,vt=function(Lt,Ut,Pt,$t,ae){var Yt,Qt,ee,lt=0,ft="0",pt=Lt&&[],H=[],et=k,wt=Lt||mt&&g.find.TAG("*",ae),yt=gt+=et==null?1:Math.random()||.1,Rt=wt.length;for(ae&&(k=Ut==z||Ut||ae);ft!==Rt&&(Yt=wt[ft])!=null;ft++){if(mt&&Yt){for(Qt=0,!Ut&&Yt.ownerDocument!=z&&(Yi(Yt),Pt=!Z);ee=Y[Qt++];)if(ee(Yt,Ut||z,Pt)){M.call($t,Yt);break}ae&&(gt=yt)}ht&&((Yt=!ee&&Yt)&&lt--,Lt&&pt.push(Yt))}if(lt+=ft,ht&&ft!==lt){for(Qt=0;ee=rt[Qt++];)ee(pt,H,Ut,Pt);if(Lt){if(lt>0)for(;ft--;)pt[ft]||H[ft]||(H[ft]=jt.call($t));H=Tr(H)}M.apply($t,H),ae&&!Lt&&H.length>0&&lt+rt.length>1&&v.uniqueSort($t)}return ae&&(gt=yt,k=et),pt};return ht?zn(vt):vt}function Zi(Y,rt){var ht,mt=[],vt=[],Lt=te[Y+" "];if(!Lt){for(rt||(rt=Pi(Y)),ht=rt.length;ht--;)Lt=Qi(rt[ht]),Lt[At]?mt.push(Lt):vt.push(Lt);Lt=te(Y,Dr(vt,mt)),Lt.selector=Y}return Lt}function Qr(Y,rt,ht,mt){var vt,Lt,Ut,Pt,$t,ae=typeof Y=="function"&&Y,Yt=!mt&&Pi(Y=ae.selector||Y);if(ht=ht||[],Yt.length===1){if(Lt=Yt[0]=Yt[0].slice(0),Lt.length>2&&(Ut=Lt[0]).type==="ID"&&rt.nodeType===9&&Z&&g.relative[Lt[1].type]){if(rt=(g.find.ID(Ut.matches[0].replace(Ze,Yn),rt)||[])[0],rt)ae&&(rt=rt.parentNode);else return ht;Y=Y.slice(Lt.shift().value.length)}for(vt=Ge.needsContext.test(Y)?0:Lt.length;vt--&&(Ut=Lt[vt],!g.relative[Pt=Ut.type]);)if(($t=g.find[Pt])&&(mt=$t(Ut.matches[0].replace(Ze,Yn),Ki.test(Lt[0].type)&&Ho(rt.parentNode)||rt))){if(Lt.splice(vt,1),Y=mt.length&&mo(Lt),!Y)return M.apply(ht,mt),ht;break}}return(ae||Zi(Y,Yt))(mt,rt,!Z,ht,!rt||Ki.test(Y)&&Ho(rt.parentNode)||rt),ht}Q.sortStable=At.split("").sort(Ue).join("")===At,Yi(),Q.sortDetached=Qn(function(Y){return Y.compareDocumentPosition(z.createElement("fieldset"))&1}),v.find=Ce,v.expr[":"]=v.expr.pseudos,v.unique=v.uniqueSort,Ce.compile=Zi,Ce.select=Qr,Ce.setDocument=Yi,Ce.tokenize=Pi,Ce.escape=v.escapeSelector,Ce.getText=v.text,Ce.isXML=v.isXMLDoc,Ce.selectors=v.expr,Ce.support=v.support,Ce.uniqueSort=v.uniqueSort})();var We=function(u,g,k){for(var C=[],I=k!==void 0;(u=u[g])&&u.nodeType!==9;)if(u.nodeType===1){if(I&&v(u).is(k))break;C.push(u)}return C},le=function(u,g){for(var k=[];u;u=u.nextSibling)u.nodeType===1&&u!==g&&k.push(u);return k},Xn=v.expr.match.needsContext,ti=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ke(u,g,k){return J(g)?v.grep(u,function(C,I){return!!g.call(C,I,C)!==k}):g.nodeType?v.grep(u,function(C){return C===g!==k}):typeof g!="string"?v.grep(u,function(C){return _.call(g,C)>-1!==k}):v.filter(g,u,k)}v.filter=function(u,g,k){var C=g[0];return k&&(u=":not("+u+")"),g.length===1&&C.nodeType===1?v.find.matchesSelector(C,u)?[C]:[]:v.find.matches(u,v.grep(g,function(I){return I.nodeType===1}))},v.fn.extend({find:function(u){var g,k,C=this.length,I=this;if(typeof u!="string")return this.pushStack(v(u).filter(function(){for(g=0;g<C;g++)if(v.contains(I[g],this))return!0}));for(k=this.pushStack([]),g=0;g<C;g++)v.find(u,I[g],k);return C>1?v.uniqueSort(k):k},filter:function(u){return this.pushStack(Ke(this,u||[],!1))},not:function(u){return this.pushStack(Ke(this,u||[],!0))},is:function(u){return!!Ke(this,typeof u=="string"&&Xn.test(u)?v(u):u||[],!1).length}});var $n,tn=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Wn=v.fn.init=function(u,g,k){var C,I;if(!u)return this;if(k=k||$n,typeof u=="string")if(u[0]==="<"&&u[u.length-1]===">"&&u.length>=3?C=[null,u,null]:C=tn.exec(u),C&&(C[1]||!g))if(C[1]){if(g=g instanceof v?g[0]:g,v.merge(this,v.parseHTML(C[1],g&&g.nodeType?g.ownerDocument||g:at,!0)),ti.test(C[1])&&v.isPlainObject(g))for(C in g)J(this[C])?this[C](g[C]):this.attr(C,g[C]);return this}else return I=at.getElementById(C[2]),I&&(this[0]=I,this.length=1),this;else return!g||g.jquery?(g||k).find(u):this.constructor(g).find(u);else{if(u.nodeType)return this[0]=u,this.length=1,this;if(J(u))return k.ready!==void 0?k.ready(u):u(v)}return v.makeArray(u,this)};Wn.prototype=v.fn,$n=v(at);var gi=/^(?:parents|prev(?:Until|All))/,ge={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({has:function(u){var g=v(u,this),k=g.length;return this.filter(function(){for(var C=0;C<k;C++)if(v.contains(this,g[C]))return!0})},closest:function(u,g){var k,C=0,I=this.length,M=[],z=typeof u!="string"&&v(u);if(!Xn.test(u)){for(;C<I;C++)for(k=this[C];k&&k!==g;k=k.parentNode)if(k.nodeType<11&&(z?z.index(k)>-1:k.nodeType===1&&v.find.matchesSelector(k,u))){M.push(k);break}}return this.pushStack(M.length>1?v.uniqueSort(M):M)},index:function(u){return u?typeof u=="string"?_.call(v(u),this[0]):_.call(this,u.jquery?u[0]:u):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(u,g){return this.pushStack(v.uniqueSort(v.merge(this.get(),v(u,g))))},addBack:function(u){return this.add(u==null?this.prevObject:this.prevObject.filter(u))}});function mi(u,g){for(;(u=u[g])&&u.nodeType!==1;);return u}v.each({parent:function(u){var g=u.parentNode;return g&&g.nodeType!==11?g:null},parents:function(u){return We(u,"parentNode")},parentsUntil:function(u,g,k){return We(u,"parentNode",k)},next:function(u){return mi(u,"nextSibling")},prev:function(u){return mi(u,"previousSibling")},nextAll:function(u){return We(u,"nextSibling")},prevAll:function(u){return We(u,"previousSibling")},nextUntil:function(u,g,k){return We(u,"nextSibling",k)},prevUntil:function(u,g,k){return We(u,"previousSibling",k)},siblings:function(u){return le((u.parentNode||{}).firstChild,u)},children:function(u){return le(u.firstChild)},contents:function(u){return u.contentDocument!=null&&j(u.contentDocument)?u.contentDocument:(W(u,"template")&&(u=u.content||u),v.merge([],u.childNodes))}},function(u,g){v.fn[u]=function(k,C){var I=v.map(this,g,k);return u.slice(-5)!=="Until"&&(C=k),C&&typeof C=="string"&&(I=v.filter(C,I)),this.length>1&&(ge[u]||v.uniqueSort(I),gi.test(u)&&I.reverse()),this.pushStack(I)}});var hn=/[^\x20\t\r\n\f]+/g;function ji(u){var g={};return v.each(u.match(hn)||[],function(k,C){g[C]=!0}),g}v.Callbacks=function(u){u=typeof u=="string"?ji(u):v.extend({},u);var g,k,C,I,M=[],z=[],tt=-1,Z=function(){for(I=I||u.once,C=g=!0;z.length;tt=-1)for(k=z.shift();++tt<M.length;)M[tt].apply(k[0],k[1])===!1&&u.stopOnFalse&&(tt=M.length,k=!1);u.memory||(k=!1),g=!1,I&&(k?M=[]:M="")},st={add:function(){return M&&(k&&!g&&(tt=M.length-1,z.push(k)),function _t(At){v.each(At,function(gt,Mt){J(Mt)?(!u.unique||!st.has(Mt))&&M.push(Mt):Mt&&Mt.length&&xt(Mt)!=="string"&&_t(Mt)})}(arguments),k&&!g&&Z()),this},remove:function(){return v.each(arguments,function(_t,At){for(var gt;(gt=v.inArray(At,M,gt))>-1;)M.splice(gt,1),gt<=tt&&tt--}),this},has:function(_t){return _t?v.inArray(_t,M)>-1:M.length>0},empty:function(){return M&&(M=[]),this},disable:function(){return I=z=[],M=k="",this},disabled:function(){return!M},lock:function(){return I=z=[],!k&&!g&&(M=k=""),this},locked:function(){return!!I},fireWith:function(_t,At){return I||(At=At||[],At=[_t,At.slice?At.slice():At],z.push(At),g||Z()),this},fire:function(){return st.fireWith(this,arguments),this},fired:function(){return!!C}};return st};function fn(u){return u}function ei(u){throw u}function Do(u,g,k,C){var I;try{u&&J(I=u.promise)?I.call(u).done(g).fail(k):u&&J(I=u.then)?I.call(u,g,k):g.apply(void 0,[u].slice(C))}catch(M){k.apply(void 0,[M])}}v.extend({Deferred:function(u){var g=[["notify","progress",v.Callbacks("memory"),v.Callbacks("memory"),2],["resolve","done",v.Callbacks("once memory"),v.Callbacks("once memory"),0,"resolved"],["reject","fail",v.Callbacks("once memory"),v.Callbacks("once memory"),1,"rejected"]],k="pending",C={state:function(){return k},always:function(){return I.done(arguments).fail(arguments),this},catch:function(M){return C.then(null,M)},pipe:function(){var M=arguments;return v.Deferred(function(z){v.each(g,function(tt,Z){var st=J(M[Z[4]])&&M[Z[4]];I[Z[1]](function(){var _t=st&&st.apply(this,arguments);_t&&J(_t.promise)?_t.promise().progress(z.notify).done(z.resolve).fail(z.reject):z[Z[0]+"With"](this,st?[_t]:arguments)})}),M=null}).promise()},then:function(M,z,tt){var Z=0;function st(_t,At,gt,Mt){return function(){var Xt=this,se=arguments,te=function(){var Ue,on;if(!(_t<Z)){if(Ue=gt.apply(Xt,se),Ue===At.promise())throw new TypeError("Thenable self-resolution");on=Ue&&(typeof Ue=="object"||typeof Ue=="function")&&Ue.then,J(on)?Mt?on.call(Ue,st(Z,At,fn,Mt),st(Z,At,ei,Mt)):(Z++,on.call(Ue,st(Z,At,fn,Mt),st(Z,At,ei,Mt),st(Z,At,fn,At.notifyWith))):(gt!==fn&&(Xt=void 0,se=[Ue]),(Mt||At.resolveWith)(Xt,se))}},Ve=Mt?te:function(){try{te()}catch(Ue){v.Deferred.exceptionHook&&v.Deferred.exceptionHook(Ue,Ve.error),_t+1>=Z&&(gt!==ei&&(Xt=void 0,se=[Ue]),At.rejectWith(Xt,se))}};_t?Ve():(v.Deferred.getErrorHook?Ve.error=v.Deferred.getErrorHook():v.Deferred.getStackHook&&(Ve.error=v.Deferred.getStackHook()),f.setTimeout(Ve))}}return v.Deferred(function(_t){g[0][3].add(st(0,_t,J(tt)?tt:fn,_t.notifyWith)),g[1][3].add(st(0,_t,J(M)?M:fn)),g[2][3].add(st(0,_t,J(z)?z:ei))}).promise()},promise:function(M){return M!=null?v.extend(M,C):C}},I={};return v.each(g,function(M,z){var tt=z[2],Z=z[5];C[z[1]]=tt.add,Z&&tt.add(function(){k=Z},g[3-M][2].disable,g[3-M][3].disable,g[0][2].lock,g[0][3].lock),tt.add(z[3].fire),I[z[0]]=function(){return I[z[0]+"With"](this===I?void 0:this,arguments),this},I[z[0]+"With"]=tt.fireWith}),C.promise(I),u&&u.call(I,I),I},when:function(u){var g=arguments.length,k=g,C=Array(k),I=h.call(arguments),M=v.Deferred(),z=function(tt){return function(Z){C[tt]=this,I[tt]=arguments.length>1?h.call(arguments):Z,--g||M.resolveWith(C,I)}};if(g<=1&&(Do(u,M.done(z(k)).resolve,M.reject,!g),M.state()==="pending"||J(I[k]&&I[k].then)))return M.then();for(;k--;)Do(I[k],z(k),M.reject);return M.promise()}});var we=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;v.Deferred.exceptionHook=function(u,g){f.console&&f.console.warn&&u&&we.test(u.name)&&f.console.warn("jQuery.Deferred exception: "+u.message,u.stack,g)},v.readyException=function(u){f.setTimeout(function(){throw u})};var pn=v.Deferred();v.fn.ready=function(u){return pn.then(u).catch(function(g){v.readyException(g)}),this},v.extend({isReady:!1,readyWait:1,ready:function(u){(u===!0?--v.readyWait:v.isReady)||(v.isReady=!0,!(u!==!0&&--v.readyWait>0)&&pn.resolveWith(at,[v]))}}),v.ready.then=pn.then;function gn(){at.removeEventListener("DOMContentLoaded",gn),f.removeEventListener("load",gn),v.ready()}at.readyState==="complete"||at.readyState!=="loading"&&!at.documentElement.doScroll?f.setTimeout(v.ready):(at.addEventListener("DOMContentLoaded",gn),f.addEventListener("load",gn));var mn=function(u,g,k,C,I,M,z){var tt=0,Z=u.length,st=k==null;if(xt(k)==="object"){I=!0;for(tt in k)mn(u,g,tt,k[tt],!0,M,z)}else if(C!==void 0&&(I=!0,J(C)||(z=!0),st&&(z?(g.call(u,C),g=null):(st=g,g=function(_t,At,gt){return st.call(v(_t),gt)})),g))for(;tt<Z;tt++)g(u[tt],k,z?C:C.call(u[tt],tt,g(u[tt],k)));return I?u:st?g.call(u):Z?g(u[0],k):M},qn=/^-ms-/,Me=/-([a-z])/g;function oo(u,g){return g.toUpperCase()}function bn(u){return u.replace(qn,"ms-").replace(Me,oo)}var Be=function(u){return u.nodeType===1||u.nodeType===9||!+u.nodeType};function je(){this.expando=v.expando+je.uid++}je.uid=1,je.prototype={cache:function(u){var g=u[this.expando];return g||(g={},Be(u)&&(u.nodeType?u[this.expando]=g:Object.defineProperty(u,this.expando,{value:g,configurable:!0}))),g},set:function(u,g,k){var C,I=this.cache(u);if(typeof g=="string")I[bn(g)]=k;else for(C in g)I[bn(C)]=g[C];return I},get:function(u,g){return g===void 0?this.cache(u):u[this.expando]&&u[this.expando][bn(g)]},access:function(u,g,k){return g===void 0||g&&typeof g=="string"&&k===void 0?this.get(u,g):(this.set(u,g,k),k!==void 0?k:g)},remove:function(u,g){var k,C=u[this.expando];if(C!==void 0){if(g!==void 0)for(Array.isArray(g)?g=g.map(bn):(g=bn(g),g=g in C?[g]:g.match(hn)||[]),k=g.length;k--;)delete C[g[k]];(g===void 0||v.isEmptyObject(C))&&(u.nodeType?u[this.expando]=void 0:delete u[this.expando])}},hasData:function(u){var g=u[this.expando];return g!==void 0&&!v.isEmptyObject(g)}};var qt=new je,en=new je,Cn=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,qe=/[A-Z]/g;function ws(u){return u==="true"?!0:u==="false"?!1:u==="null"?null:u===+u+""?+u:Cn.test(u)?JSON.parse(u):u}function As(u,g,k){var C;if(k===void 0&&u.nodeType===1)if(C="data-"+g.replace(qe,"-$&").toLowerCase(),k=u.getAttribute(C),typeof k=="string"){try{k=ws(k)}catch{}en.set(u,g,k)}else k=void 0;return k}v.extend({hasData:function(u){return en.hasData(u)||qt.hasData(u)},data:function(u,g,k){return en.access(u,g,k)},removeData:function(u,g){en.remove(u,g)},_data:function(u,g,k){return qt.access(u,g,k)},_removeData:function(u,g){qt.remove(u,g)}}),v.fn.extend({data:function(u,g){var k,C,I,M=this[0],z=M&&M.attributes;if(u===void 0){if(this.length&&(I=en.get(M),M.nodeType===1&&!qt.get(M,"hasDataAttrs"))){for(k=z.length;k--;)z[k]&&(C=z[k].name,C.indexOf("data-")===0&&(C=bn(C.slice(5)),As(M,C,I[C])));qt.set(M,"hasDataAttrs",!0)}return I}return typeof u=="object"?this.each(function(){en.set(this,u)}):mn(this,function(tt){var Z;if(M&&tt===void 0)return Z=en.get(M,u),Z!==void 0||(Z=As(M,u),Z!==void 0)?Z:void 0;this.each(function(){en.set(this,u,tt)})},null,g,arguments.length>1,null,!0)},removeData:function(u){return this.each(function(){en.remove(this,u)})}}),v.extend({queue:function(u,g,k){var C;if(u)return g=(g||"fx")+"queue",C=qt.get(u,g),k&&(!C||Array.isArray(k)?C=qt.access(u,g,v.makeArray(k)):C.push(k)),C||[]},dequeue:function(u,g){g=g||"fx";var k=v.queue(u,g),C=k.length,I=k.shift(),M=v._queueHooks(u,g),z=function(){v.dequeue(u,g)};I==="inprogress"&&(I=k.shift(),C--),I&&(g==="fx"&&k.unshift("inprogress"),delete M.stop,I.call(u,z,M)),!C&&M&&M.empty.fire()},_queueHooks:function(u,g){var k=g+"queueHooks";return qt.get(u,k)||qt.access(u,k,{empty:v.Callbacks("once memory").add(function(){qt.remove(u,[g+"queue",k])})})}}),v.fn.extend({queue:function(u,g){var k=2;return typeof u!="string"&&(g=u,u="fx",k--),arguments.length<k?v.queue(this[0],u):g===void 0?this:this.each(function(){var C=v.queue(this,u,g);v._queueHooks(this,u),u==="fx"&&C[0]!=="inprogress"&&v.dequeue(this,u)})},dequeue:function(u){return this.each(function(){v.dequeue(this,u)})},clearQueue:function(u){return this.queue(u||"fx",[])},promise:function(u,g){var k,C=1,I=v.Deferred(),M=this,z=this.length,tt=function(){--C||I.resolveWith(M,[M])};for(typeof u!="string"&&(g=u,u=void 0),u=u||"fx";z--;)k=qt.get(M[z],u+"queueHooks"),k&&k.empty&&(C++,k.empty.add(tt));return tt(),I.promise(g)}});var vs=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,yn=new RegExp("^(?:([+-])=|)("+vs+")([a-z%]*)$","i"),On=["Top","Right","Bottom","Left"],Si=at.documentElement,Ii=function(u){return v.contains(u.ownerDocument,u)},ir={composed:!0};Si.getRootNode&&(Ii=function(u){return v.contains(u.ownerDocument,u)||u.getRootNode(ir)===u.ownerDocument});var ni=function(u,g){return u=g||u,u.style.display==="none"||u.style.display===""&&Ii(u)&&v.css(u,"display")==="none"};function En(u,g,k,C){var I,M,z=20,tt=C?function(){return C.cur()}:function(){return v.css(u,g,"")},Z=tt(),st=k&&k[3]||(v.cssNumber[g]?"":"px"),_t=u.nodeType&&(v.cssNumber[g]||st!=="px"&&+Z)&&yn.exec(v.css(u,g));if(_t&&_t[3]!==st){for(Z=Z/2,st=st||_t[3],_t=+Z||1;z--;)v.style(u,g,_t+st),(1-M)*(1-(M=tt()/Z||.5))<=0&&(z=0),_t=_t/M;_t=_t*2,v.style(u,g,_t+st),k=k||[]}return k&&(_t=+_t||+Z||0,I=k[1]?_t+(k[1]+1)*k[2]:+k[2],C&&(C.unit=st,C.start=_t,C.end=I)),I}var Bn={};function jr(u){var g,k=u.ownerDocument,C=u.nodeName,I=Bn[C];return I||(g=k.body.appendChild(k.createElement(C)),I=v.css(g,"display"),g.parentNode.removeChild(g),I==="none"&&(I="block"),Bn[C]=I,I)}function Fe(u,g){for(var k,C,I=[],M=0,z=u.length;M<z;M++)C=u[M],C.style&&(k=C.style.display,g?(k==="none"&&(I[M]=qt.get(C,"display")||null,I[M]||(C.style.display="")),C.style.display===""&&ni(C)&&(I[M]=jr(C))):k!=="none"&&(I[M]="none",qt.set(C,"display",k)));for(M=0;M<z;M++)I[M]!=null&&(u[M].style.display=I[M]);return u}v.fn.extend({show:function(){return Fe(this,!0)},hide:function(){return Fe(this)},toggle:function(u){return typeof u=="boolean"?u?this.show():this.hide():this.each(function(){ni(this)?v(this).show():v(this).hide()})}});var bi=/^(?:checkbox|radio)$/i,or=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Cs=/^$|^module$|\/(?:java|ecma)script/i;(function(){var u=at.createDocumentFragment(),g=u.appendChild(at.createElement("div")),k=at.createElement("input");k.setAttribute("type","radio"),k.setAttribute("checked","checked"),k.setAttribute("name","t"),g.appendChild(k),Q.checkClone=g.cloneNode(!0).cloneNode(!0).lastChild.checked,g.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!g.cloneNode(!0).lastChild.defaultValue,g.innerHTML="<option></option>",Q.option=!!g.lastChild})();var Gn={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Gn.tbody=Gn.tfoot=Gn.colgroup=Gn.caption=Gn.thead,Gn.th=Gn.td,Q.option||(Gn.optgroup=Gn.option=[1,"<select multiple='multiple'>","</select>"]);function sn(u,g){var k;return typeof u.getElementsByTagName<"u"?k=u.getElementsByTagName(g||"*"):typeof u.querySelectorAll<"u"?k=u.querySelectorAll(g||"*"):k=[],g===void 0||g&&W(u,g)?v.merge([u],k):k}function Fr(u,g){for(var k=0,C=u.length;k<C;k++)qt.set(u[k],"globalEval",!g||qt.get(g[k],"globalEval"))}var ys=/<|&#?\w+;/;function xn(u,g,k,C,I){for(var M,z,tt,Z,st,_t,At=g.createDocumentFragment(),gt=[],Mt=0,Xt=u.length;Mt<Xt;Mt++)if(M=u[Mt],M||M===0)if(xt(M)==="object")v.merge(gt,M.nodeType?[M]:M);else if(!ys.test(M))gt.push(g.createTextNode(M));else{for(z=z||At.appendChild(g.createElement("div")),tt=(or.exec(M)||["",""])[1].toLowerCase(),Z=Gn[tt]||Gn._default,z.innerHTML=Z[1]+v.htmlPrefilter(M)+Z[2],_t=Z[0];_t--;)z=z.lastChild;v.merge(gt,z.childNodes),z=At.firstChild,z.textContent=""}for(At.textContent="",Mt=0;M=gt[Mt++];){if(C&&v.inArray(M,C)>-1){I&&I.push(M);continue}if(st=Ii(M),z=sn(At.appendChild(M),"script"),st&&Fr(z),k)for(_t=0;M=z[_t++];)Cs.test(M.type||"")&&k.push(M)}return At}var Es=/^([^.]*)(?:\.(.+)|)/;function ki(){return!0}function Tn(){return!1}function _i(u,g,k,C,I,M){var z,tt;if(typeof g=="object"){typeof k!="string"&&(C=C||k,k=void 0);for(tt in g)_i(u,tt,k,C,g[tt],M);return u}if(C==null&&I==null?(I=k,C=k=void 0):I==null&&(typeof k=="string"?(I=C,C=void 0):(I=C,C=k,k=void 0)),I===!1)I=Tn;else if(!I)return u;return M===1&&(z=I,I=function(Z){return v().off(Z),z.apply(this,arguments)},I.guid=z.guid||(z.guid=v.guid++)),u.each(function(){v.event.add(this,g,I,C,k)})}v.event={global:{},add:function(u,g,k,C,I){var M,z,tt,Z,st,_t,At,gt,Mt,Xt,se,te=qt.get(u);if(Be(u))for(k.handler&&(M=k,k=M.handler,I=M.selector),I&&v.find.matchesSelector(Si,I),k.guid||(k.guid=v.guid++),(Z=te.events)||(Z=te.events=Object.create(null)),(z=te.handle)||(z=te.handle=function(Ve){return typeof v<"u"&&v.event.triggered!==Ve.type?v.event.dispatch.apply(u,arguments):void 0}),g=(g||"").match(hn)||[""],st=g.length;st--;)tt=Es.exec(g[st])||[],Mt=se=tt[1],Xt=(tt[2]||"").split(".").sort(),Mt&&(At=v.event.special[Mt]||{},Mt=(I?At.delegateType:At.bindType)||Mt,At=v.event.special[Mt]||{},_t=v.extend({type:Mt,origType:se,data:C,handler:k,guid:k.guid,selector:I,needsContext:I&&v.expr.match.needsContext.test(I),namespace:Xt.join(".")},M),(gt=Z[Mt])||(gt=Z[Mt]=[],gt.delegateCount=0,(!At.setup||At.setup.call(u,C,Xt,z)===!1)&&u.addEventListener&&u.addEventListener(Mt,z)),At.add&&(At.add.call(u,_t),_t.handler.guid||(_t.handler.guid=k.guid)),I?gt.splice(gt.delegateCount++,0,_t):gt.push(_t),v.event.global[Mt]=!0)},remove:function(u,g,k,C,I){var M,z,tt,Z,st,_t,At,gt,Mt,Xt,se,te=qt.hasData(u)&&qt.get(u);if(!(!te||!(Z=te.events))){for(g=(g||"").match(hn)||[""],st=g.length;st--;){if(tt=Es.exec(g[st])||[],Mt=se=tt[1],Xt=(tt[2]||"").split(".").sort(),!Mt){for(Mt in Z)v.event.remove(u,Mt+g[st],k,C,!0);continue}for(At=v.event.special[Mt]||{},Mt=(C?At.delegateType:At.bindType)||Mt,gt=Z[Mt]||[],tt=tt[2]&&new RegExp("(^|\\.)"+Xt.join("\\.(?:.*\\.|)")+"(\\.|$)"),z=M=gt.length;M--;)_t=gt[M],(I||se===_t.origType)&&(!k||k.guid===_t.guid)&&(!tt||tt.test(_t.namespace))&&(!C||C===_t.selector||C==="**"&&_t.selector)&&(gt.splice(M,1),_t.selector&&gt.delegateCount--,At.remove&&At.remove.call(u,_t));z&&!gt.length&&((!At.teardown||At.teardown.call(u,Xt,te.handle)===!1)&&v.removeEvent(u,Mt,te.handle),delete Z[Mt])}v.isEmptyObject(Z)&&qt.remove(u,"handle events")}},dispatch:function(u){var g,k,C,I,M,z,tt=new Array(arguments.length),Z=v.event.fix(u),st=(qt.get(this,"events")||Object.create(null))[Z.type]||[],_t=v.event.special[Z.type]||{};for(tt[0]=Z,g=1;g<arguments.length;g++)tt[g]=arguments[g];if(Z.delegateTarget=this,!(_t.preDispatch&&_t.preDispatch.call(this,Z)===!1)){for(z=v.event.handlers.call(this,Z,st),g=0;(I=z[g++])&&!Z.isPropagationStopped();)for(Z.currentTarget=I.elem,k=0;(M=I.handlers[k++])&&!Z.isImmediatePropagationStopped();)(!Z.rnamespace||M.namespace===!1||Z.rnamespace.test(M.namespace))&&(Z.handleObj=M,Z.data=M.data,C=((v.event.special[M.origType]||{}).handle||M.handler).apply(I.elem,tt),C!==void 0&&(Z.result=C)===!1&&(Z.preventDefault(),Z.stopPropagation()));return _t.postDispatch&&_t.postDispatch.call(this,Z),Z.result}},handlers:function(u,g){var k,C,I,M,z,tt=[],Z=g.delegateCount,st=u.target;if(Z&&st.nodeType&&!(u.type==="click"&&u.button>=1)){for(;st!==this;st=st.parentNode||this)if(st.nodeType===1&&!(u.type==="click"&&st.disabled===!0)){for(M=[],z={},k=0;k<Z;k++)C=g[k],I=C.selector+" ",z[I]===void 0&&(z[I]=C.needsContext?v(I,this).index(st)>-1:v.find(I,this,null,[st]).length),z[I]&&M.push(C);M.length&&tt.push({elem:st,handlers:M})}}return st=this,Z<g.length&&tt.push({elem:st,handlers:g.slice(Z)}),tt},addProp:function(u,g){Object.defineProperty(v.Event.prototype,u,{enumerable:!0,configurable:!0,get:J(g)?function(){if(this.originalEvent)return g(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[u]},set:function(k){Object.defineProperty(this,u,{enumerable:!0,configurable:!0,writable:!0,value:k})}})},fix:function(u){return u[v.expando]?u:new v.Event(u)},special:{load:{noBubble:!0},click:{setup:function(u){var g=this||u;return bi.test(g.type)&&g.click&&W(g,"input")&&So(g,"click",!0),!1},trigger:function(u){var g=this||u;return bi.test(g.type)&&g.click&&W(g,"input")&&So(g,"click"),!0},_default:function(u){var g=u.target;return bi.test(g.type)&&g.click&&W(g,"input")&&qt.get(g,"click")||W(g,"a")}},beforeunload:{postDispatch:function(u){u.result!==void 0&&u.originalEvent&&(u.originalEvent.returnValue=u.result)}}}};function So(u,g,k){if(!k){qt.get(u,g)===void 0&&v.event.add(u,g,ki);return}qt.set(u,g,!1),v.event.add(u,g,{namespace:!1,handler:function(C){var I,M=qt.get(this,g);if(C.isTrigger&1&&this[g]){if(M)(v.event.special[g]||{}).delegateType&&C.stopPropagation();else if(M=h.call(arguments),qt.set(this,g,M),this[g](),I=qt.get(this,g),qt.set(this,g,!1),M!==I)return C.stopImmediatePropagation(),C.preventDefault(),I}else M&&(qt.set(this,g,v.event.trigger(M[0],M.slice(1),this)),C.stopPropagation(),C.isImmediatePropagationStopped=ki)}})}v.removeEvent=function(u,g,k){u.removeEventListener&&u.removeEventListener(g,k)},v.Event=function(u,g){if(!(this instanceof v.Event))return new v.Event(u,g);u&&u.type?(this.originalEvent=u,this.type=u.type,this.isDefaultPrevented=u.defaultPrevented||u.defaultPrevented===void 0&&u.returnValue===!1?ki:Tn,this.target=u.target&&u.target.nodeType===3?u.target.parentNode:u.target,this.currentTarget=u.currentTarget,this.relatedTarget=u.relatedTarget):this.type=u,g&&v.extend(this,g),this.timeStamp=u&&u.timeStamp||Date.now(),this[v.expando]=!0},v.Event.prototype={constructor:v.Event,isDefaultPrevented:Tn,isPropagationStopped:Tn,isImmediatePropagationStopped:Tn,isSimulated:!1,preventDefault:function(){var u=this.originalEvent;this.isDefaultPrevented=ki,u&&!this.isSimulated&&u.preventDefault()},stopPropagation:function(){var u=this.originalEvent;this.isPropagationStopped=ki,u&&!this.isSimulated&&u.stopPropagation()},stopImmediatePropagation:function(){var u=this.originalEvent;this.isImmediatePropagationStopped=ki,u&&!this.isSimulated&&u.stopImmediatePropagation(),this.stopPropagation()}},v.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},v.event.addProp),v.each({focus:"focusin",blur:"focusout"},function(u,g){function k(C){if(at.documentMode){var I=qt.get(this,"handle"),M=v.event.fix(C);M.type=C.type==="focusin"?"focus":"blur",M.isSimulated=!0,I(C),M.target===M.currentTarget&&I(M)}else v.event.simulate(g,C.target,v.event.fix(C))}v.event.special[u]={setup:function(){var C;if(So(this,u,!0),at.documentMode)C=qt.get(this,g),C||this.addEventListener(g,k),qt.set(this,g,(C||0)+1);else return!1},trigger:function(){return So(this,u),!0},teardown:function(){var C;if(at.documentMode)C=qt.get(this,g)-1,C?qt.set(this,g,C):(this.removeEventListener(g,k),qt.remove(this,g));else return!1},_default:function(C){return qt.get(C.target,u)},delegateType:g},v.event.special[g]={setup:function(){var C=this.ownerDocument||this.document||this,I=at.documentMode?this:C,M=qt.get(I,g);M||(at.documentMode?this.addEventListener(g,k):C.addEventListener(u,k,!0)),qt.set(I,g,(M||0)+1)},teardown:function(){var C=this.ownerDocument||this.document||this,I=at.documentMode?this:C,M=qt.get(I,g)-1;M?qt.set(I,g,M):(at.documentMode?this.removeEventListener(g,k):C.removeEventListener(u,k,!0),qt.remove(I,g))}}}),v.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(u,g){v.event.special[u]={delegateType:g,bindType:g,handle:function(k){var C,I=this,M=k.relatedTarget,z=k.handleObj;return(!M||M!==I&&!v.contains(I,M))&&(k.type=z.origType,C=z.handler.apply(this,arguments),k.type=g),C}}}),v.fn.extend({on:function(u,g,k,C){return _i(this,u,g,k,C)},one:function(u,g,k,C){return _i(this,u,g,k,C,1)},off:function(u,g,k){var C,I;if(u&&u.preventDefault&&u.handleObj)return C=u.handleObj,v(u.delegateTarget).off(C.namespace?C.origType+"."+C.namespace:C.origType,C.selector,C.handler),this;if(typeof u=="object"){for(I in u)this.off(I,g,u[I]);return this}return(g===!1||typeof g=="function")&&(k=g,g=void 0),k===!1&&(k=Tn),this.each(function(){v.event.remove(this,u,k,g)})}});var xs=/<script|<style|<link/i,ia=/checked\s*(?:[^=]|=\s*.checked.)/i,oa=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function ro(u,g){return W(u,"table")&&W(g.nodeType!==11?g:g.firstChild,"tr")&&v(u).children("tbody")[0]||u}function wr(u){return u.type=(u.getAttribute("type")!==null)+"/"+u.type,u}function Io(u){return(u.type||"").slice(0,5)==="true/"?u.type=u.type.slice(5):u.removeAttribute("type"),u}function Vr(u,g){var k,C,I,M,z,tt,Z;if(g.nodeType===1){if(qt.hasData(u)&&(M=qt.get(u),Z=M.events,Z)){qt.remove(g,"handle events");for(I in Z)for(k=0,C=Z[I].length;k<C;k++)v.event.add(g,I,Z[I][k])}en.hasData(u)&&(z=en.access(u),tt=v.extend({},z),en.set(g,tt))}}function rr(u,g){var k=g.nodeName.toLowerCase();k==="input"&&bi.test(u.type)?g.checked=u.checked:(k==="input"||k==="textarea")&&(g.defaultValue=u.defaultValue)}function an(u,g,k,C){g=L(g);var I,M,z,tt,Z,st,_t=0,At=u.length,gt=At-1,Mt=g[0],Xt=J(Mt);if(Xt||At>1&&typeof Mt=="string"&&!Q.checkClone&&ia.test(Mt))return u.each(function(se){var te=u.eq(se);Xt&&(g[0]=Mt.call(this,se,te.html())),an(te,g,k,C)});if(At&&(I=xn(g,u[0].ownerDocument,!1,u,C),M=I.firstChild,I.childNodes.length===1&&(I=M),M||C)){for(z=v.map(sn(I,"script"),wr),tt=z.length;_t<At;_t++)Z=I,_t!==gt&&(Z=v.clone(Z,!0,!0),tt&&v.merge(z,sn(Z,"script"))),k.call(u[_t],Z,_t);if(tt)for(st=z[z.length-1].ownerDocument,v.map(z,Io),_t=0;_t<tt;_t++)Z=z[_t],Cs.test(Z.type||"")&&!qt.access(Z,"globalEval")&&v.contains(st,Z)&&(Z.src&&(Z.type||"").toLowerCase()!=="module"?v._evalUrl&&!Z.noModule&&v._evalUrl(Z.src,{nonce:Z.nonce||Z.getAttribute("nonce")},st):Et(Z.textContent.replace(oa,""),Z,st))}return u}function nn(u,g,k){for(var C,I=g?v.filter(g,u):u,M=0;(C=I[M])!=null;M++)!k&&C.nodeType===1&&v.cleanData(sn(C)),C.parentNode&&(k&&Ii(C)&&Fr(sn(C,"script")),C.parentNode.removeChild(C));return u}v.extend({htmlPrefilter:function(u){return u},clone:function(u,g,k){var C,I,M,z,tt=u.cloneNode(!0),Z=Ii(u);if(!Q.noCloneChecked&&(u.nodeType===1||u.nodeType===11)&&!v.isXMLDoc(u))for(z=sn(tt),M=sn(u),C=0,I=M.length;C<I;C++)rr(M[C],z[C]);if(g)if(k)for(M=M||sn(u),z=z||sn(tt),C=0,I=M.length;C<I;C++)Vr(M[C],z[C]);else Vr(u,tt);return z=sn(tt,"script"),z.length>0&&Fr(z,!Z&&sn(u,"script")),tt},cleanData:function(u){for(var g,k,C,I=v.event.special,M=0;(k=u[M])!==void 0;M++)if(Be(k)){if(g=k[qt.expando]){if(g.events)for(C in g.events)I[C]?v.event.remove(k,C):v.removeEvent(k,C,g.handle);k[qt.expando]=void 0}k[en.expando]&&(k[en.expando]=void 0)}}}),v.fn.extend({detach:function(u){return nn(this,u,!0)},remove:function(u){return nn(this,u)},text:function(u){return mn(this,function(g){return g===void 0?v.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=g)})},null,u,arguments.length)},append:function(){return an(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var g=ro(this,u);g.appendChild(u)}})},prepend:function(){return an(this,arguments,function(u){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var g=ro(this,u);g.insertBefore(u,g.firstChild)}})},before:function(){return an(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this)})},after:function(){return an(this,arguments,function(u){this.parentNode&&this.parentNode.insertBefore(u,this.nextSibling)})},empty:function(){for(var u,g=0;(u=this[g])!=null;g++)u.nodeType===1&&(v.cleanData(sn(u,!1)),u.textContent="");return this},clone:function(u,g){return u=u??!1,g=g??u,this.map(function(){return v.clone(this,u,g)})},html:function(u){return mn(this,function(g){var k=this[0]||{},C=0,I=this.length;if(g===void 0&&k.nodeType===1)return k.innerHTML;if(typeof g=="string"&&!xs.test(g)&&!Gn[(or.exec(g)||["",""])[1].toLowerCase()]){g=v.htmlPrefilter(g);try{for(;C<I;C++)k=this[C]||{},k.nodeType===1&&(v.cleanData(sn(k,!1)),k.innerHTML=g);k=0}catch{}}k&&this.empty().append(g)},null,u,arguments.length)},replaceWith:function(){var u=[];return an(this,arguments,function(g){var k=this.parentNode;v.inArray(this,u)<0&&(v.cleanData(sn(this)),k&&k.replaceChild(g,this))},u)}}),v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(u,g){v.fn[u]=function(k){for(var C,I=[],M=v(k),z=M.length-1,tt=0;tt<=z;tt++)C=tt===z?this:this.clone(!0),v(M[tt])[g](C),V.apply(I,C.get());return this.pushStack(I)}});var Mo=new RegExp("^("+vs+")(?!px)[a-z%]+$","i"),wi=/^--/,Mi=function(u){var g=u.ownerDocument.defaultView;return(!g||!g.opener)&&(g=f),g.getComputedStyle(u)},Hr=function(u,g,k){var C,I,M={};for(I in g)M[I]=u.style[I],u.style[I]=g[I];C=k.call(u);for(I in g)u.style[I]=M[I];return C},Fi=new RegExp(On.join("|"),"i");(function(){function u(){if(st){Z.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",st.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Si.appendChild(Z).appendChild(st);var _t=f.getComputedStyle(st);k=_t.top!=="1%",tt=g(_t.marginLeft)===12,st.style.right="60%",M=g(_t.right)===36,C=g(_t.width)===36,st.style.position="absolute",I=g(st.offsetWidth/3)===12,Si.removeChild(Z),st=null}}function g(_t){return Math.round(parseFloat(_t))}var k,C,I,M,z,tt,Z=at.createElement("div"),st=at.createElement("div");st.style&&(st.style.backgroundClip="content-box",st.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle=st.style.backgroundClip==="content-box",v.extend(Q,{boxSizingReliable:function(){return u(),C},pixelBoxStyles:function(){return u(),M},pixelPosition:function(){return u(),k},reliableMarginLeft:function(){return u(),tt},scrollboxSize:function(){return u(),I},reliableTrDimensions:function(){var _t,At,gt,Mt;return z==null&&(_t=at.createElement("table"),At=at.createElement("tr"),gt=at.createElement("div"),_t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",At.style.cssText="box-sizing:content-box;border:1px solid",At.style.height="1px",gt.style.height="9px",gt.style.display="block",Si.appendChild(_t).appendChild(At).appendChild(gt),Mt=f.getComputedStyle(At),z=parseInt(Mt.height,10)+parseInt(Mt.borderTopWidth,10)+parseInt(Mt.borderBottomWidth,10)===At.offsetHeight,Si.removeChild(_t)),z}}))})();function kn(u,g,k){var C,I,M,z,tt=wi.test(g),Z=u.style;return k=k||Mi(u),k&&(z=k.getPropertyValue(g)||k[g],tt&&z&&(z=z.replace(ze,"$1")||void 0),z===""&&!Ii(u)&&(z=v.style(u,g)),!Q.pixelBoxStyles()&&Mo.test(z)&&Fi.test(g)&&(C=Z.width,I=Z.minWidth,M=Z.maxWidth,Z.minWidth=Z.maxWidth=Z.width=z,z=k.width,Z.width=C,Z.minWidth=I,Z.maxWidth=M)),z!==void 0?z+"":z}function Ai(u,g){return{get:function(){if(u()){delete this.get;return}return(this.get=g).apply(this,arguments)}}}var No=["Webkit","Moz","ms"],Ar=at.createElement("div").style,Oo={};function ra(u){for(var g=u[0].toUpperCase()+u.slice(1),k=No.length;k--;)if(u=No[k]+g,u in Ar)return u}function Ur(u){var g=v.cssProps[u]||Oo[u];return g||(u in Ar?u:Oo[u]=ra(u)||u)}var sa=/^(none|table(?!-c[ea]).+)/,Ni={position:"absolute",visibility:"hidden",display:"block"},vi={letterSpacing:"0",fontWeight:"400"};function Vi(u,g,k){var C=yn.exec(g);return C?Math.max(0,C[2]-(k||0))+(C[3]||"px"):g}function vr(u,g,k,C,I,M){var z=g==="width"?1:0,tt=0,Z=0,st=0;if(k===(C?"border":"content"))return 0;for(;z<4;z+=2)k==="margin"&&(st+=v.css(u,k+On[z],!0,I)),C?(k==="content"&&(Z-=v.css(u,"padding"+On[z],!0,I)),k!=="margin"&&(Z-=v.css(u,"border"+On[z]+"Width",!0,I))):(Z+=v.css(u,"padding"+On[z],!0,I),k!=="padding"?Z+=v.css(u,"border"+On[z]+"Width",!0,I):tt+=v.css(u,"border"+On[z]+"Width",!0,I));return!C&&M>=0&&(Z+=Math.max(0,Math.ceil(u["offset"+g[0].toUpperCase()+g.slice(1)]-M-Z-tt-.5))||0),Z+st}function Hi(u,g,k){var C=Mi(u),I=!Q.boxSizingReliable()||k,M=I&&v.css(u,"boxSizing",!1,C)==="border-box",z=M,tt=kn(u,g,C),Z="offset"+g[0].toUpperCase()+g.slice(1);if(Mo.test(tt)){if(!k)return tt;tt="auto"}return(!Q.boxSizingReliable()&&M||!Q.reliableTrDimensions()&&W(u,"tr")||tt==="auto"||!parseFloat(tt)&&v.css(u,"display",!1,C)==="inline")&&u.getClientRects().length&&(M=v.css(u,"boxSizing",!1,C)==="border-box",z=Z in u,z&&(tt=u[Z])),tt=parseFloat(tt)||0,tt+vr(u,g,k||(M?"border":"content"),z,C,tt)+"px"}v.extend({cssHooks:{opacity:{get:function(u,g){if(g){var k=kn(u,"opacity");return k===""?"1":k}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(u,g,k,C){if(!(!u||u.nodeType===3||u.nodeType===8||!u.style)){var I,M,z,tt=bn(g),Z=wi.test(g),st=u.style;if(Z||(g=Ur(tt)),z=v.cssHooks[g]||v.cssHooks[tt],k!==void 0){if(M=typeof k,M==="string"&&(I=yn.exec(k))&&I[1]&&(k=En(u,g,I),M="number"),k==null||k!==k)return;M==="number"&&!Z&&(k+=I&&I[3]||(v.cssNumber[tt]?"":"px")),!Q.clearCloneStyle&&k===""&&g.indexOf("background")===0&&(st[g]="inherit"),(!z||!("set"in z)||(k=z.set(u,k,C))!==void 0)&&(Z?st.setProperty(g,k):st[g]=k)}else return z&&"get"in z&&(I=z.get(u,!1,C))!==void 0?I:st[g]}},css:function(u,g,k,C){var I,M,z,tt=bn(g),Z=wi.test(g);return Z||(g=Ur(tt)),z=v.cssHooks[g]||v.cssHooks[tt],z&&"get"in z&&(I=z.get(u,!0,k)),I===void 0&&(I=kn(u,g,C)),I==="normal"&&g in vi&&(I=vi[g]),k===""||k?(M=parseFloat(I),k===!0||isFinite(M)?M||0:I):I}}),v.each(["height","width"],function(u,g){v.cssHooks[g]={get:function(k,C,I){if(C)return sa.test(v.css(k,"display"))&&(!k.getClientRects().length||!k.getBoundingClientRect().width)?Hr(k,Ni,function(){return Hi(k,g,I)}):Hi(k,g,I)},set:function(k,C,I){var M,z=Mi(k),tt=!Q.scrollboxSize()&&z.position==="absolute",Z=tt||I,st=Z&&v.css(k,"boxSizing",!1,z)==="border-box",_t=I?vr(k,g,I,st,z):0;return st&&tt&&(_t-=Math.ceil(k["offset"+g[0].toUpperCase()+g.slice(1)]-parseFloat(z[g])-vr(k,g,"border",!1,z)-.5)),_t&&(M=yn.exec(C))&&(M[3]||"px")!=="px"&&(k.style[g]=C,C=v.css(k,g)),Vi(k,C,_t)}}}),v.cssHooks.marginLeft=Ai(Q.reliableMarginLeft,function(u,g){if(g)return(parseFloat(kn(u,"marginLeft"))||u.getBoundingClientRect().left-Hr(u,{marginLeft:0},function(){return u.getBoundingClientRect().left}))+"px"}),v.each({margin:"",padding:"",border:"Width"},function(u,g){v.cssHooks[u+g]={expand:function(k){for(var C=0,I={},M=typeof k=="string"?k.split(" "):[k];C<4;C++)I[u+On[C]+g]=M[C]||M[C-2]||M[0];return I}},u!=="margin"&&(v.cssHooks[u+g].set=Vi)}),v.fn.extend({css:function(u,g){return mn(this,function(k,C,I){var M,z,tt={},Z=0;if(Array.isArray(C)){for(M=Mi(k),z=C.length;Z<z;Z++)tt[C[Z]]=v.css(k,C[Z],!1,M);return tt}return I!==void 0?v.style(k,C,I):v.css(k,C)},u,g,arguments.length>1)}});function Ye(u,g,k,C,I){return new Ye.prototype.init(u,g,k,C,I)}v.Tween=Ye,Ye.prototype={constructor:Ye,init:function(u,g,k,C,I,M){this.elem=u,this.prop=k,this.easing=I||v.easing._default,this.options=g,this.start=this.now=this.cur(),this.end=C,this.unit=M||(v.cssNumber[k]?"":"px")},cur:function(){var u=Ye.propHooks[this.prop];return u&&u.get?u.get(this):Ye.propHooks._default.get(this)},run:function(u){var g,k=Ye.propHooks[this.prop];return this.options.duration?this.pos=g=v.easing[this.easing](u,this.options.duration*u,0,1,this.options.duration):this.pos=g=u,this.now=(this.end-this.start)*g+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),k&&k.set?k.set(this):Ye.propHooks._default.set(this),this}},Ye.prototype.init.prototype=Ye.prototype,Ye.propHooks={_default:{get:function(u){var g;return u.elem.nodeType!==1||u.elem[u.prop]!=null&&u.elem.style[u.prop]==null?u.elem[u.prop]:(g=v.css(u.elem,u.prop,""),!g||g==="auto"?0:g)},set:function(u){v.fx.step[u.prop]?v.fx.step[u.prop](u):u.elem.nodeType===1&&(v.cssHooks[u.prop]||u.elem.style[Ur(u.prop)]!=null)?v.style(u.elem,u.prop,u.now+u.unit):u.elem[u.prop]=u.now}}},Ye.propHooks.scrollTop=Ye.propHooks.scrollLeft={set:function(u){u.elem.nodeType&&u.elem.parentNode&&(u.elem[u.prop]=u.now)}},v.easing={linear:function(u){return u},swing:function(u){return .5-Math.cos(u*Math.PI)/2},_default:"swing"},v.fx=Ye.prototype.init,v.fx.step={};var so,Dn,Ln=/^(?:toggle|show|hide)$/,Bo=/queueHooks$/;function ii(){Dn&&(at.hidden===!1&&f.requestAnimationFrame?f.requestAnimationFrame(ii):f.setTimeout(ii,v.fx.interval),v.fx.tick())}function sr(){return f.setTimeout(function(){so=void 0}),so=Date.now()}function Cr(u,g){var k,C=0,I={height:u};for(g=g?1:0;C<4;C+=2-g)k=On[C],I["margin"+k]=I["padding"+k]=u;return g&&(I.opacity=I.width=u),I}function yr(u,g,k){for(var C,I=(cn.tweeners[g]||[]).concat(cn.tweeners["*"]),M=0,z=I.length;M<z;M++)if(C=I[M].call(k,g,u))return C}function ao(u,g,k){var C,I,M,z,tt,Z,st,_t,At="width"in g||"height"in g,gt=this,Mt={},Xt=u.style,se=u.nodeType&&ni(u),te=qt.get(u,"fxshow");k.queue||(z=v._queueHooks(u,"fx"),z.unqueued==null&&(z.unqueued=0,tt=z.empty.fire,z.empty.fire=function(){z.unqueued||tt()}),z.unqueued++,gt.always(function(){gt.always(function(){z.unqueued--,v.queue(u,"fx").length||z.empty.fire()})}));for(C in g)if(I=g[C],Ln.test(I)){if(delete g[C],M=M||I==="toggle",I===(se?"hide":"show"))if(I==="show"&&te&&te[C]!==void 0)se=!0;else continue;Mt[C]=te&&te[C]||v.style(u,C)}if(Z=!v.isEmptyObject(g),!(!Z&&v.isEmptyObject(Mt))){At&&u.nodeType===1&&(k.overflow=[Xt.overflow,Xt.overflowX,Xt.overflowY],st=te&&te.display,st==null&&(st=qt.get(u,"display")),_t=v.css(u,"display"),_t==="none"&&(st?_t=st:(Fe([u],!0),st=u.style.display||st,_t=v.css(u,"display"),Fe([u]))),(_t==="inline"||_t==="inline-block"&&st!=null)&&v.css(u,"float")==="none"&&(Z||(gt.done(function(){Xt.display=st}),st==null&&(_t=Xt.display,st=_t==="none"?"":_t)),Xt.display="inline-block")),k.overflow&&(Xt.overflow="hidden",gt.always(function(){Xt.overflow=k.overflow[0],Xt.overflowX=k.overflow[1],Xt.overflowY=k.overflow[2]})),Z=!1;for(C in Mt)Z||(te?"hidden"in te&&(se=te.hidden):te=qt.access(u,"fxshow",{display:st}),M&&(te.hidden=!se),se&&Fe([u],!0),gt.done(function(){se||Fe([u]),qt.remove(u,"fxshow");for(C in Mt)v.style(u,C,Mt[C])})),Z=yr(se?te[C]:0,C,gt),C in te||(te[C]=Z.start,se&&(Z.end=Z.start,Z.start=0))}}function Ui(u,g){var k,C,I,M,z;for(k in u)if(C=bn(k),I=g[C],M=u[k],Array.isArray(M)&&(I=M[1],M=u[k]=M[0]),k!==C&&(u[C]=M,delete u[k]),z=v.cssHooks[C],z&&"expand"in z){M=z.expand(M),delete u[C];for(k in M)k in u||(u[k]=M[k],g[k]=I)}else g[C]=I}function cn(u,g,k){var C,I,M=0,z=cn.prefilters.length,tt=v.Deferred().always(function(){delete Z.elem}),Z=function(){if(I)return!1;for(var At=so||sr(),gt=Math.max(0,st.startTime+st.duration-At),Mt=gt/st.duration||0,Xt=1-Mt,se=0,te=st.tweens.length;se<te;se++)st.tweens[se].run(Xt);return tt.notifyWith(u,[st,Xt,gt]),Xt<1&&te?gt:(te||tt.notifyWith(u,[st,1,0]),tt.resolveWith(u,[st]),!1)},st=tt.promise({elem:u,props:v.extend({},g),opts:v.extend(!0,{specialEasing:{},easing:v.easing._default},k),originalProperties:g,originalOptions:k,startTime:so||sr(),duration:k.duration,tweens:[],createTween:function(At,gt){var Mt=v.Tween(u,st.opts,At,gt,st.opts.specialEasing[At]||st.opts.easing);return st.tweens.push(Mt),Mt},stop:function(At){var gt=0,Mt=At?st.tweens.length:0;if(I)return this;for(I=!0;gt<Mt;gt++)st.tweens[gt].run(1);return At?(tt.notifyWith(u,[st,1,0]),tt.resolveWith(u,[st,At])):tt.rejectWith(u,[st,At]),this}}),_t=st.props;for(Ui(_t,st.opts.specialEasing);M<z;M++)if(C=cn.prefilters[M].call(st,u,_t,st.opts),C)return J(C.stop)&&(v._queueHooks(st.elem,st.opts.queue).stop=C.stop.bind(C)),C;return v.map(_t,yr,st),J(st.opts.start)&&st.opts.start.call(u,st),st.progress(st.opts.progress).done(st.opts.done,st.opts.complete).fail(st.opts.fail).always(st.opts.always),v.fx.timer(v.extend(Z,{elem:u,anim:st,queue:st.opts.queue})),st}v.Animation=v.extend(cn,{tweeners:{"*":[function(u,g){var k=this.createTween(u,g);return En(k.elem,u,yn.exec(g),k),k}]},tweener:function(u,g){J(u)?(g=u,u=["*"]):u=u.match(hn);for(var k,C=0,I=u.length;C<I;C++)k=u[C],cn.tweeners[k]=cn.tweeners[k]||[],cn.tweeners[k].unshift(g)},prefilters:[ao],prefilter:function(u,g){g?cn.prefilters.unshift(u):cn.prefilters.push(u)}}),v.speed=function(u,g,k){var C=u&&typeof u=="object"?v.extend({},u):{complete:k||!k&&g||J(u)&&u,duration:u,easing:k&&g||g&&!J(g)&&g};return v.fx.off?C.duration=0:typeof C.duration!="number"&&(C.duration in v.fx.speeds?C.duration=v.fx.speeds[C.duration]:C.duration=v.fx.speeds._default),(C.queue==null||C.queue===!0)&&(C.queue="fx"),C.old=C.complete,C.complete=function(){J(C.old)&&C.old.call(this),C.queue&&v.dequeue(this,C.queue)},C},v.fn.extend({fadeTo:function(u,g,k,C){return this.filter(ni).css("opacity",0).show().end().animate({opacity:g},u,k,C)},animate:function(u,g,k,C){var I=v.isEmptyObject(u),M=v.speed(g,k,C),z=function(){var tt=cn(this,v.extend({},u),M);(I||qt.get(this,"finish"))&&tt.stop(!0)};return z.finish=z,I||M.queue===!1?this.each(z):this.queue(M.queue,z)},stop:function(u,g,k){var C=function(I){var M=I.stop;delete I.stop,M(k)};return typeof u!="string"&&(k=g,g=u,u=void 0),g&&this.queue(u||"fx",[]),this.each(function(){var I=!0,M=u!=null&&u+"queueHooks",z=v.timers,tt=qt.get(this);if(M)tt[M]&&tt[M].stop&&C(tt[M]);else for(M in tt)tt[M]&&tt[M].stop&&Bo.test(M)&&C(tt[M]);for(M=z.length;M--;)z[M].elem===this&&(u==null||z[M].queue===u)&&(z[M].anim.stop(k),I=!1,z.splice(M,1));(I||!k)&&v.dequeue(this,u)})},finish:function(u){return u!==!1&&(u=u||"fx"),this.each(function(){var g,k=qt.get(this),C=k[u+"queue"],I=k[u+"queueHooks"],M=v.timers,z=C?C.length:0;for(k.finish=!0,v.queue(this,u,[]),I&&I.stop&&I.stop.call(this,!0),g=M.length;g--;)M[g].elem===this&&M[g].queue===u&&(M[g].anim.stop(!0),M.splice(g,1));for(g=0;g<z;g++)C[g]&&C[g].finish&&C[g].finish.call(this);delete k.finish})}}),v.each(["toggle","show","hide"],function(u,g){var k=v.fn[g];v.fn[g]=function(C,I,M){return C==null||typeof C=="boolean"?k.apply(this,arguments):this.animate(Cr(g,!0),C,I,M)}}),v.each({slideDown:Cr("show"),slideUp:Cr("hide"),slideToggle:Cr("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(u,g){v.fn[u]=function(k,C,I){return this.animate(g,k,C,I)}}),v.timers=[],v.fx.tick=function(){var u,g=0,k=v.timers;for(so=Date.now();g<k.length;g++)u=k[g],!u()&&k[g]===u&&k.splice(g--,1);k.length||v.fx.stop(),so=void 0},v.fx.timer=function(u){v.timers.push(u),v.fx.start()},v.fx.interval=13,v.fx.start=function(){Dn||(Dn=!0,ii())},v.fx.stop=function(){Dn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fn.delay=function(u,g){return u=v.fx&&v.fx.speeds[u]||u,g=g||"fx",this.queue(g,function(k,C){var I=f.setTimeout(k,u);C.stop=function(){f.clearTimeout(I)}})},function(){var u=at.createElement("input"),g=at.createElement("select"),k=g.appendChild(at.createElement("option"));u.type="checkbox",Q.checkOn=u.value!=="",Q.optSelected=k.selected,u=at.createElement("input"),u.value="t",u.type="radio",Q.radioValue=u.value==="t"}();var Lo,Ci=v.expr.attrHandle;v.fn.extend({attr:function(u,g){return mn(this,v.attr,u,g,arguments.length>1)},removeAttr:function(u){return this.each(function(){v.removeAttr(this,u)})}}),v.extend({attr:function(u,g,k){var C,I,M=u.nodeType;if(!(M===3||M===8||M===2)){if(typeof u.getAttribute>"u")return v.prop(u,g,k);if((M!==1||!v.isXMLDoc(u))&&(I=v.attrHooks[g.toLowerCase()]||(v.expr.match.bool.test(g)?Lo:void 0)),k!==void 0){if(k===null){v.removeAttr(u,g);return}return I&&"set"in I&&(C=I.set(u,k,g))!==void 0?C:(u.setAttribute(g,k+""),k)}return I&&"get"in I&&(C=I.get(u,g))!==null?C:(C=v.find.attr(u,g),C??void 0)}},attrHooks:{type:{set:function(u,g){if(!Q.radioValue&&g==="radio"&&W(u,"input")){var k=u.value;return u.setAttribute("type",g),k&&(u.value=k),g}}}},removeAttr:function(u,g){var k,C=0,I=g&&g.match(hn);if(I&&u.nodeType===1)for(;k=I[C++];)u.removeAttribute(k)}}),Lo={set:function(u,g,k){return g===!1?v.removeAttr(u,k):u.setAttribute(k,k),k}},v.each(v.expr.match.bool.source.match(/\w+/g),function(u,g){var k=Ci[g]||v.find.attr;Ci[g]=function(C,I,M){var z,tt,Z=I.toLowerCase();return M||(tt=Ci[Z],Ci[Z]=z,z=k(C,I,M)!=null?Z:null,Ci[Z]=tt),z}});var oi=/^(?:input|select|textarea|button)$/i,Po=/^(?:a|area)$/i;v.fn.extend({prop:function(u,g){return mn(this,v.prop,u,g,arguments.length>1)},removeProp:function(u){return this.each(function(){delete this[v.propFix[u]||u]})}}),v.extend({prop:function(u,g,k){var C,I,M=u.nodeType;if(!(M===3||M===8||M===2))return(M!==1||!v.isXMLDoc(u))&&(g=v.propFix[g]||g,I=v.propHooks[g]),k!==void 0?I&&"set"in I&&(C=I.set(u,k,g))!==void 0?C:u[g]=k:I&&"get"in I&&(C=I.get(u,g))!==null?C:u[g]},propHooks:{tabIndex:{get:function(u){var g=v.find.attr(u,"tabindex");return g?parseInt(g,10):oi.test(u.nodeName)||Po.test(u.nodeName)&&u.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Q.optSelected||(v.propHooks.selected={get:function(u){var g=u.parentNode;return g&&g.parentNode&&g.parentNode.selectedIndex,null},set:function(u){var g=u.parentNode;g&&(g.selectedIndex,g.parentNode&&g.parentNode.selectedIndex)}}),v.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){v.propFix[this.toLowerCase()]=this});function Kn(u){var g=u.match(hn)||[];return g.join(" ")}function Qe(u){return u.getAttribute&&u.getAttribute("class")||""}function yi(u){return Array.isArray(u)?u:typeof u=="string"?u.match(hn)||[]:[]}v.fn.extend({addClass:function(u){var g,k,C,I,M,z;return J(u)?this.each(function(tt){v(this).addClass(u.call(this,tt,Qe(this)))}):(g=yi(u),g.length?this.each(function(){if(C=Qe(this),k=this.nodeType===1&&" "+Kn(C)+" ",k){for(M=0;M<g.length;M++)I=g[M],k.indexOf(" "+I+" ")<0&&(k+=I+" ");z=Kn(k),C!==z&&this.setAttribute("class",z)}}):this)},removeClass:function(u){var g,k,C,I,M,z;return J(u)?this.each(function(tt){v(this).removeClass(u.call(this,tt,Qe(this)))}):arguments.length?(g=yi(u),g.length?this.each(function(){if(C=Qe(this),k=this.nodeType===1&&" "+Kn(C)+" ",k){for(M=0;M<g.length;M++)for(I=g[M];k.indexOf(" "+I+" ")>-1;)k=k.replace(" "+I+" "," ");z=Kn(k),C!==z&&this.setAttribute("class",z)}}):this):this.attr("class","")},toggleClass:function(u,g){var k,C,I,M,z=typeof u,tt=z==="string"||Array.isArray(u);return J(u)?this.each(function(Z){v(this).toggleClass(u.call(this,Z,Qe(this),g),g)}):typeof g=="boolean"&&tt?g?this.addClass(u):this.removeClass(u):(k=yi(u),this.each(function(){if(tt)for(M=v(this),I=0;I<k.length;I++)C=k[I],M.hasClass(C)?M.removeClass(C):M.addClass(C);else(u===void 0||z==="boolean")&&(C=Qe(this),C&&qt.set(this,"__className__",C),this.setAttribute&&this.setAttribute("class",C||u===!1?"":qt.get(this,"__className__")||""))}))},hasClass:function(u){var g,k,C=0;for(g=" "+u+" ";k=this[C++];)if(k.nodeType===1&&(" "+Kn(Qe(k))+" ").indexOf(g)>-1)return!0;return!1}});var $i=/\r/g;v.fn.extend({val:function(u){var g,k,C,I=this[0];return arguments.length?(C=J(u),this.each(function(M){var z;this.nodeType===1&&(C?z=u.call(this,M,v(this).val()):z=u,z==null?z="":typeof z=="number"?z+="":Array.isArray(z)&&(z=v.map(z,function(tt){return tt==null?"":tt+""})),g=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()],(!g||!("set"in g)||g.set(this,z,"value")===void 0)&&(this.value=z))})):I?(g=v.valHooks[I.type]||v.valHooks[I.nodeName.toLowerCase()],g&&"get"in g&&(k=g.get(I,"value"))!==void 0?k:(k=I.value,typeof k=="string"?k.replace($i,""):k??"")):void 0}}),v.extend({valHooks:{option:{get:function(u){var g=v.find.attr(u,"value");return g??Kn(v.text(u))}},select:{get:function(u){var g,k,C,I=u.options,M=u.selectedIndex,z=u.type==="select-one",tt=z?null:[],Z=z?M+1:I.length;for(M<0?C=Z:C=z?M:0;C<Z;C++)if(k=I[C],(k.selected||C===M)&&!k.disabled&&(!k.parentNode.disabled||!W(k.parentNode,"optgroup"))){if(g=v(k).val(),z)return g;tt.push(g)}return tt},set:function(u,g){for(var k,C,I=u.options,M=v.makeArray(g),z=I.length;z--;)C=I[z],(C.selected=v.inArray(v.valHooks.option.get(C),M)>-1)&&(k=!0);return k||(u.selectedIndex=-1),M}}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]={set:function(u,g){if(Array.isArray(g))return u.checked=v.inArray(v(u).val(),g)>-1}},Q.checkOn||(v.valHooks[this].get=function(u){return u.getAttribute("value")===null?"on":u.value})});var ri=f.location,Ei={guid:Date.now()},$r=/\?/;v.parseXML=function(u){var g,k;if(!u||typeof u!="string")return null;try{g=new f.DOMParser().parseFromString(u,"text/xml")}catch{}return k=g&&g.getElementsByTagName("parsererror")[0],(!g||k)&&v.error("Invalid XML: "+(k?v.map(k.childNodes,function(C){return C.textContent}).join(`
`):u)),g};var co=/^(?:focusinfocus|focusoutblur)$/,Wi=function(u){u.stopPropagation()};v.extend(v.event,{trigger:function(u,g,k,C){var I,M,z,tt,Z,st,_t,At,gt=[k||at],Mt=U.call(u,"type")?u.type:u,Xt=U.call(u,"namespace")?u.namespace.split("."):[];if(M=At=z=k=k||at,!(k.nodeType===3||k.nodeType===8)&&!co.test(Mt+v.event.triggered)&&(Mt.indexOf(".")>-1&&(Xt=Mt.split("."),Mt=Xt.shift(),Xt.sort()),Z=Mt.indexOf(":")<0&&"on"+Mt,u=u[v.expando]?u:new v.Event(Mt,typeof u=="object"&&u),u.isTrigger=C?2:3,u.namespace=Xt.join("."),u.rnamespace=u.namespace?new RegExp("(^|\\.)"+Xt.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,u.result=void 0,u.target||(u.target=k),g=g==null?[u]:v.makeArray(g,[u]),_t=v.event.special[Mt]||{},!(!C&&_t.trigger&&_t.trigger.apply(k,g)===!1))){if(!C&&!_t.noBubble&&!ot(k)){for(tt=_t.delegateType||Mt,co.test(tt+Mt)||(M=M.parentNode);M;M=M.parentNode)gt.push(M),z=M;z===(k.ownerDocument||at)&&gt.push(z.defaultView||z.parentWindow||f)}for(I=0;(M=gt[I++])&&!u.isPropagationStopped();)At=M,u.type=I>1?tt:_t.bindType||Mt,st=(qt.get(M,"events")||Object.create(null))[u.type]&&qt.get(M,"handle"),st&&st.apply(M,g),st=Z&&M[Z],st&&st.apply&&Be(M)&&(u.result=st.apply(M,g),u.result===!1&&u.preventDefault());return u.type=Mt,!C&&!u.isDefaultPrevented()&&(!_t._default||_t._default.apply(gt.pop(),g)===!1)&&Be(k)&&Z&&J(k[Mt])&&!ot(k)&&(z=k[Z],z&&(k[Z]=null),v.event.triggered=Mt,u.isPropagationStopped()&&At.addEventListener(Mt,Wi),k[Mt](),u.isPropagationStopped()&&At.removeEventListener(Mt,Wi),v.event.triggered=void 0,z&&(k[Z]=z)),u.result}},simulate:function(u,g,k){var C=v.extend(new v.Event,k,{type:u,isSimulated:!0});v.event.trigger(C,null,g)}}),v.fn.extend({trigger:function(u,g){return this.each(function(){v.event.trigger(u,g,this)})},triggerHandler:function(u,g){var k=this[0];if(k)return v.event.trigger(u,g,k,!0)}});var Ts=/\[\]$/,Wr=/\r?\n/g,Ds=/^(?:submit|button|image|reset|file)$/i,Ro=/^(?:input|select|textarea|keygen)/i;function _n(u,g,k,C){var I;if(Array.isArray(g))v.each(g,function(M,z){k||Ts.test(u)?C(u,z):_n(u+"["+(typeof z=="object"&&z!=null?M:"")+"]",z,k,C)});else if(!k&&xt(g)==="object")for(I in g)_n(u+"["+I+"]",g[I],k,C);else C(u,g)}v.param=function(u,g){var k,C=[],I=function(M,z){var tt=J(z)?z():z;C[C.length]=encodeURIComponent(M)+"="+encodeURIComponent(tt??"")};if(u==null)return"";if(Array.isArray(u)||u.jquery&&!v.isPlainObject(u))v.each(u,function(){I(this.name,this.value)});else for(k in u)_n(k,u[k],g,I);return C.join("&")},v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var u=v.prop(this,"elements");return u?v.makeArray(u):this}).filter(function(){var u=this.type;return this.name&&!v(this).is(":disabled")&&Ro.test(this.nodeName)&&!Ds.test(u)&&(this.checked||!bi.test(u))}).map(function(u,g){var k=v(this).val();return k==null?null:Array.isArray(k)?v.map(k,function(C){return{name:g.name,value:C.replace(Wr,`\r
`)}}):{name:g.name,value:k.replace(Wr,`\r
`)}}).get()}});var si=/%20/g,qr=/#.*$/,Er=/([?&])_=[^&]*/,Ss=/^(.*?):[ \t]*([^\r\n]*)$/mg,lo=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,xi=/^(?:GET|HEAD)$/,ar=/^\/\//,Oi={},zo={},Ee="*/".concat("*"),xr=at.createElement("a");xr.href=ri.href;function Bi(u){return function(g,k){typeof g!="string"&&(k=g,g="*");var C,I=0,M=g.toLowerCase().match(hn)||[];if(J(k))for(;C=M[I++];)C[0]==="+"?(C=C.slice(1)||"*",(u[C]=u[C]||[]).unshift(k)):(u[C]=u[C]||[]).push(k)}}function uo(u,g,k,C){var I={},M=u===zo;function z(tt){var Z;return I[tt]=!0,v.each(u[tt]||[],function(st,_t){var At=_t(g,k,C);if(typeof At=="string"&&!M&&!I[At])return g.dataTypes.unshift(At),z(At),!1;if(M)return!(Z=At)}),Z}return z(g.dataTypes[0])||!I["*"]&&z("*")}function ai(u,g){var k,C,I=v.ajaxSettings.flatOptions||{};for(k in g)g[k]!==void 0&&((I[k]?u:C||(C={}))[k]=g[k]);return C&&v.extend(!0,u,C),u}function Gr(u,g,k){for(var C,I,M,z,tt=u.contents,Z=u.dataTypes;Z[0]==="*";)Z.shift(),C===void 0&&(C=u.mimeType||g.getResponseHeader("Content-Type"));if(C){for(I in tt)if(tt[I]&&tt[I].test(C)){Z.unshift(I);break}}if(Z[0]in k)M=Z[0];else{for(I in k){if(!Z[0]||u.converters[I+" "+Z[0]]){M=I;break}z||(z=I)}M=M||z}if(M)return M!==Z[0]&&Z.unshift(M),k[M]}function wn(u,g,k,C){var I,M,z,tt,Z,st={},_t=u.dataTypes.slice();if(_t[1])for(z in u.converters)st[z.toLowerCase()]=u.converters[z];for(M=_t.shift();M;)if(u.responseFields[M]&&(k[u.responseFields[M]]=g),!Z&&C&&u.dataFilter&&(g=u.dataFilter(g,u.dataType)),Z=M,M=_t.shift(),M){if(M==="*")M=Z;else if(Z!=="*"&&Z!==M){if(z=st[Z+" "+M]||st["* "+M],!z){for(I in st)if(tt=I.split(" "),tt[1]===M&&(z=st[Z+" "+tt[0]]||st["* "+tt[0]],z)){z===!0?z=st[I]:st[I]!==!0&&(M=tt[0],_t.unshift(tt[1]));break}}if(z!==!0)if(z&&u.throws)g=z(g);else try{g=z(g)}catch(At){return{state:"parsererror",error:z?At:"No conversion from "+Z+" to "+M}}}}return{state:"success",data:g}}v.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ri.href,type:"GET",isLocal:lo.test(ri.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ee,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":v.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(u,g){return g?ai(ai(u,v.ajaxSettings),g):ai(v.ajaxSettings,u)},ajaxPrefilter:Bi(Oi),ajaxTransport:Bi(zo),ajax:function(u,g){typeof u=="object"&&(g=u,u=void 0),g=g||{};var k,C,I,M,z,tt,Z,st,_t,At,gt=v.ajaxSetup({},g),Mt=gt.context||gt,Xt=gt.context&&(Mt.nodeType||Mt.jquery)?v(Mt):v.event,se=v.Deferred(),te=v.Callbacks("once memory"),Ve=gt.statusCode||{},Ue={},on={},ln="canceled",he={readyState:0,getResponseHeader:function(me){var Le;if(Z){if(!M)for(M={};Le=Ss.exec(I);)M[Le[1].toLowerCase()+" "]=(M[Le[1].toLowerCase()+" "]||[]).concat(Le[2]);Le=M[me.toLowerCase()+" "]}return Le==null?null:Le.join(", ")},getAllResponseHeaders:function(){return Z?I:null},setRequestHeader:function(me,Le){return Z==null&&(me=on[me.toLowerCase()]=on[me.toLowerCase()]||me,Ue[me]=Le),this},overrideMimeType:function(me){return Z==null&&(gt.mimeType=me),this},statusCode:function(me){var Le;if(me)if(Z)he.always(me[he.status]);else for(Le in me)Ve[Le]=[Ve[Le],me[Le]];return this},abort:function(me){var Le=me||ln;return k&&k.abort(Le),Gi(0,Le),this}};if(se.promise(he),gt.url=((u||gt.url||ri.href)+"").replace(ar,ri.protocol+"//"),gt.type=g.method||g.type||gt.method||gt.type,gt.dataTypes=(gt.dataType||"*").toLowerCase().match(hn)||[""],gt.crossDomain==null){tt=at.createElement("a");try{tt.href=gt.url,tt.href=tt.href,gt.crossDomain=xr.protocol+"//"+xr.host!=tt.protocol+"//"+tt.host}catch{gt.crossDomain=!0}}if(gt.data&&gt.processData&&typeof gt.data!="string"&&(gt.data=v.param(gt.data,gt.traditional)),uo(Oi,gt,g,he),Z)return he;st=v.event&&gt.global,st&&v.active++===0&&v.event.trigger("ajaxStart"),gt.type=gt.type.toUpperCase(),gt.hasContent=!xi.test(gt.type),C=gt.url.replace(qr,""),gt.hasContent?gt.data&&gt.processData&&(gt.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(gt.data=gt.data.replace(si,"+")):(At=gt.url.slice(C.length),gt.data&&(gt.processData||typeof gt.data=="string")&&(C+=($r.test(C)?"&":"?")+gt.data,delete gt.data),gt.cache===!1&&(C=C.replace(Er,"$1"),At=($r.test(C)?"&":"?")+"_="+Ei.guid+++At),gt.url=C+At),gt.ifModified&&(v.lastModified[C]&&he.setRequestHeader("If-Modified-Since",v.lastModified[C]),v.etag[C]&&he.setRequestHeader("If-None-Match",v.etag[C])),(gt.data&&gt.hasContent&&gt.contentType!==!1||g.contentType)&&he.setRequestHeader("Content-Type",gt.contentType),he.setRequestHeader("Accept",gt.dataTypes[0]&&gt.accepts[gt.dataTypes[0]]?gt.accepts[gt.dataTypes[0]]+(gt.dataTypes[0]!=="*"?", "+Ee+"; q=0.01":""):gt.accepts["*"]);for(_t in gt.headers)he.setRequestHeader(_t,gt.headers[_t]);if(gt.beforeSend&&(gt.beforeSend.call(Mt,he,gt)===!1||Z))return he.abort();if(ln="abort",te.add(gt.complete),he.done(gt.success),he.fail(gt.error),k=uo(zo,gt,g,he),!k)Gi(-1,"No Transport");else{if(he.readyState=1,st&&Xt.trigger("ajaxSend",[he,gt]),Z)return he;gt.async&&gt.timeout>0&&(z=f.setTimeout(function(){he.abort("timeout")},gt.timeout));try{Z=!1,k.send(Ue,Gi)}catch(me){if(Z)throw me;Gi(-1,me)}}function Gi(me,Le,po,go){var ci,li,Ge,Pn,rn,Rn=Le;Z||(Z=!0,z&&f.clearTimeout(z),k=void 0,I=go||"",he.readyState=me>0?4:0,ci=me>=200&&me<300||me===304,po&&(Pn=Gr(gt,he,po)),!ci&&v.inArray("script",gt.dataTypes)>-1&&v.inArray("json",gt.dataTypes)<0&&(gt.converters["text script"]=function(){}),Pn=wn(gt,Pn,he,ci),ci?(gt.ifModified&&(rn=he.getResponseHeader("Last-Modified"),rn&&(v.lastModified[C]=rn),rn=he.getResponseHeader("etag"),rn&&(v.etag[C]=rn)),me===204||gt.type==="HEAD"?Rn="nocontent":me===304?Rn="notmodified":(Rn=Pn.state,li=Pn.data,Ge=Pn.error,ci=!Ge)):(Ge=Rn,(me||!Rn)&&(Rn="error",me<0&&(me=0))),he.status=me,he.statusText=(Le||Rn)+"",ci?se.resolveWith(Mt,[li,Rn,he]):se.rejectWith(Mt,[he,Rn,Ge]),he.statusCode(Ve),Ve=void 0,st&&Xt.trigger(ci?"ajaxSuccess":"ajaxError",[he,gt,ci?li:Ge]),te.fireWith(Mt,[he,Rn]),st&&(Xt.trigger("ajaxComplete",[he,gt]),--v.active||v.event.trigger("ajaxStop")))}return he},getJSON:function(u,g,k){return v.get(u,g,k,"json")},getScript:function(u,g){return v.get(u,void 0,g,"script")}}),v.each(["get","post"],function(u,g){v[g]=function(k,C,I,M){return J(C)&&(M=M||I,I=C,C=void 0),v.ajax(v.extend({url:k,type:g,dataType:M,data:C,success:I},v.isPlainObject(k)&&k))}}),v.ajaxPrefilter(function(u){var g;for(g in u.headers)g.toLowerCase()==="content-type"&&(u.contentType=u.headers[g]||"")}),v._evalUrl=function(u,g,k){return v.ajax({url:u,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(C){v.globalEval(C,g,k)}})},v.fn.extend({wrapAll:function(u){var g;return this[0]&&(J(u)&&(u=u.call(this[0])),g=v(u,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&g.insertBefore(this[0]),g.map(function(){for(var k=this;k.firstElementChild;)k=k.firstElementChild;return k}).append(this)),this},wrapInner:function(u){return J(u)?this.each(function(g){v(this).wrapInner(u.call(this,g))}):this.each(function(){var g=v(this),k=g.contents();k.length?k.wrapAll(u):g.append(u)})},wrap:function(u){var g=J(u);return this.each(function(k){v(this).wrapAll(g?u.call(this,k):u)})},unwrap:function(u){return this.parent(u).not("body").each(function(){v(this).replaceWith(this.childNodes)}),this}}),v.expr.pseudos.hidden=function(u){return!v.expr.pseudos.visible(u)},v.expr.pseudos.visible=function(u){return!!(u.offsetWidth||u.offsetHeight||u.getClientRects().length)},v.ajaxSettings.xhr=function(){try{return new f.XMLHttpRequest}catch{}};var ho={0:200,1223:204},Li=v.ajaxSettings.xhr();Q.cors=!!Li&&"withCredentials"in Li,Q.ajax=Li=!!Li,v.ajaxTransport(function(u){var g,k;if(Q.cors||Li&&!u.crossDomain)return{send:function(C,I){var M,z=u.xhr();if(z.open(u.type,u.url,u.async,u.username,u.password),u.xhrFields)for(M in u.xhrFields)z[M]=u.xhrFields[M];u.mimeType&&z.overrideMimeType&&z.overrideMimeType(u.mimeType),!u.crossDomain&&!C["X-Requested-With"]&&(C["X-Requested-With"]="XMLHttpRequest");for(M in C)z.setRequestHeader(M,C[M]);g=function(tt){return function(){g&&(g=k=z.onload=z.onerror=z.onabort=z.ontimeout=z.onreadystatechange=null,tt==="abort"?z.abort():tt==="error"?typeof z.status!="number"?I(0,"error"):I(z.status,z.statusText):I(ho[z.status]||z.status,z.statusText,(z.responseType||"text")!=="text"||typeof z.responseText!="string"?{binary:z.response}:{text:z.responseText},z.getAllResponseHeaders()))}},z.onload=g(),k=z.onerror=z.ontimeout=g("error"),z.onabort!==void 0?z.onabort=k:z.onreadystatechange=function(){z.readyState===4&&f.setTimeout(function(){g&&k()})},g=g("abort");try{z.send(u.hasContent&&u.data||null)}catch(tt){if(g)throw tt}},abort:function(){g&&g()}}}),v.ajaxPrefilter(function(u){u.crossDomain&&(u.contents.script=!1)}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(u){return v.globalEval(u),u}}}),v.ajaxPrefilter("script",function(u){u.cache===void 0&&(u.cache=!1),u.crossDomain&&(u.type="GET")}),v.ajaxTransport("script",function(u){if(u.crossDomain||u.scriptAttrs){var g,k;return{send:function(C,I){g=v("<script>").attr(u.scriptAttrs||{}).prop({charset:u.scriptCharset,src:u.url}).on("load error",k=function(M){g.remove(),k=null,M&&I(M.type==="error"?404:200,M.type)}),at.head.appendChild(g[0])},abort:function(){k&&k()}}}});var jo=[],cr=/(=)\?(?=&|$)|\?\?/;v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var u=jo.pop()||v.expando+"_"+Ei.guid++;return this[u]=!0,u}}),v.ajaxPrefilter("json jsonp",function(u,g,k){var C,I,M,z=u.jsonp!==!1&&(cr.test(u.url)?"url":typeof u.data=="string"&&(u.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&cr.test(u.data)&&"data");if(z||u.dataTypes[0]==="jsonp")return C=u.jsonpCallback=J(u.jsonpCallback)?u.jsonpCallback():u.jsonpCallback,z?u[z]=u[z].replace(cr,"$1"+C):u.jsonp!==!1&&(u.url+=($r.test(u.url)?"&":"?")+u.jsonp+"="+C),u.converters["script json"]=function(){return M||v.error(C+" was not called"),M[0]},u.dataTypes[0]="json",I=f[C],f[C]=function(){M=arguments},k.always(function(){I===void 0?v(f).removeProp(C):f[C]=I,u[C]&&(u.jsonpCallback=g.jsonpCallback,jo.push(C)),M&&J(I)&&I(M[0]),M=I=void 0}),"script"}),Q.createHTMLDocument=function(){var u=at.implementation.createHTMLDocument("").body;return u.innerHTML="<form></form><form></form>",u.childNodes.length===2}(),v.parseHTML=function(u,g,k){if(typeof u!="string")return[];typeof g=="boolean"&&(k=g,g=!1);var C,I,M;return g||(Q.createHTMLDocument?(g=at.implementation.createHTMLDocument(""),C=g.createElement("base"),C.href=at.location.href,g.head.appendChild(C)):g=at),I=ti.exec(u),M=!k&&[],I?[g.createElement(I[1])]:(I=xn([u],g,M),M&&M.length&&v(M).remove(),v.merge([],I.childNodes))},v.fn.load=function(u,g,k){var C,I,M,z=this,tt=u.indexOf(" ");return tt>-1&&(C=Kn(u.slice(tt)),u=u.slice(0,tt)),J(g)?(k=g,g=void 0):g&&typeof g=="object"&&(I="POST"),z.length>0&&v.ajax({url:u,type:I||"GET",dataType:"html",data:g}).done(function(Z){M=arguments,z.html(C?v("<div>").append(v.parseHTML(Z)).find(C):Z)}).always(k&&function(Z,st){z.each(function(){k.apply(this,M||[Z.responseText,st,Z])})}),this},v.expr.pseudos.animated=function(u){return v.grep(v.timers,function(g){return u===g.elem}).length},v.offset={setOffset:function(u,g,k){var C,I,M,z,tt,Z,st,_t=v.css(u,"position"),At=v(u),gt={};_t==="static"&&(u.style.position="relative"),tt=At.offset(),M=v.css(u,"top"),Z=v.css(u,"left"),st=(_t==="absolute"||_t==="fixed")&&(M+Z).indexOf("auto")>-1,st?(C=At.position(),z=C.top,I=C.left):(z=parseFloat(M)||0,I=parseFloat(Z)||0),J(g)&&(g=g.call(u,k,v.extend({},tt))),g.top!=null&&(gt.top=g.top-tt.top+z),g.left!=null&&(gt.left=g.left-tt.left+I),"using"in g?g.using.call(u,gt):At.css(gt)}},v.fn.extend({offset:function(u){if(arguments.length)return u===void 0?this:this.each(function(I){v.offset.setOffset(this,u,I)});var g,k,C=this[0];if(C)return C.getClientRects().length?(g=C.getBoundingClientRect(),k=C.ownerDocument.defaultView,{top:g.top+k.pageYOffset,left:g.left+k.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var u,g,k,C=this[0],I={top:0,left:0};if(v.css(C,"position")==="fixed")g=C.getBoundingClientRect();else{for(g=this.offset(),k=C.ownerDocument,u=C.offsetParent||k.documentElement;u&&(u===k.body||u===k.documentElement)&&v.css(u,"position")==="static";)u=u.parentNode;u&&u!==C&&u.nodeType===1&&(I=v(u).offset(),I.top+=v.css(u,"borderTopWidth",!0),I.left+=v.css(u,"borderLeftWidth",!0))}return{top:g.top-I.top-v.css(C,"marginTop",!0),left:g.left-I.left-v.css(C,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var u=this.offsetParent;u&&v.css(u,"position")==="static";)u=u.offsetParent;return u||Si})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(u,g){var k=g==="pageYOffset";v.fn[u]=function(C){return mn(this,function(I,M,z){var tt;if(ot(I)?tt=I:I.nodeType===9&&(tt=I.defaultView),z===void 0)return tt?tt[g]:I[M];tt?tt.scrollTo(k?tt.pageXOffset:z,k?z:tt.pageYOffset):I[M]=z},u,C,arguments.length)}}),v.each(["top","left"],function(u,g){v.cssHooks[g]=Ai(Q.pixelPosition,function(k,C){if(C)return C=kn(k,g),Mo.test(C)?v(k).position()[g]+"px":C})}),v.each({Height:"height",Width:"width"},function(u,g){v.each({padding:"inner"+u,content:g,"":"outer"+u},function(k,C){v.fn[C]=function(I,M){var z=arguments.length&&(k||typeof I!="boolean"),tt=k||(I===!0||M===!0?"margin":"border");return mn(this,function(Z,st,_t){var At;return ot(Z)?C.indexOf("outer")===0?Z["inner"+u]:Z.document.documentElement["client"+u]:Z.nodeType===9?(At=Z.documentElement,Math.max(Z.body["scroll"+u],At["scroll"+u],Z.body["offset"+u],At["offset"+u],At["client"+u])):_t===void 0?v.css(Z,st,tt):v.style(Z,st,_t,tt)},g,z?I:void 0,z)}})}),v.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(u,g){v.fn[g]=function(k){return this.on(g,k)}}),v.fn.extend({bind:function(u,g,k){return this.on(u,null,g,k)},unbind:function(u,g){return this.off(u,null,g)},delegate:function(u,g,k,C){return this.on(g,u,k,C)},undelegate:function(u,g,k){return arguments.length===1?this.off(u,"**"):this.off(g,u||"**",k)},hover:function(u,g){return this.on("mouseenter",u).on("mouseleave",g||u)}}),v.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(u,g){v.fn[g]=function(k,C){return arguments.length>0?this.on(g,null,k,C):this.trigger(g)}});var fo=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;v.proxy=function(u,g){var k,C,I;if(typeof g=="string"&&(k=u[g],g=u,u=k),!!J(u))return C=h.call(arguments,2),I=function(){return u.apply(g||this,C.concat(h.call(arguments)))},I.guid=u.guid=u.guid||v.guid++,I},v.holdReady=function(u){u?v.readyWait++:v.ready(!0)},v.isArray=Array.isArray,v.parseJSON=JSON.parse,v.nodeName=W,v.isFunction=J,v.isWindow=ot,v.camelCase=bn,v.type=xt,v.now=Date.now,v.isNumeric=function(u){var g=v.type(u);return(g==="number"||g==="string")&&!isNaN(u-parseFloat(u))},v.trim=function(u){return u==null?"":(u+"").replace(fo,"$1")};var qi=f.jQuery,Is=f.$;return v.noConflict=function(u){return f.$===v&&(f.$=Is),u&&f.jQuery===v&&(f.jQuery=qi),v},typeof A>"u"&&(f.jQuery=f.$=v),v})}(Uf)),Uf.exports}gp();var mC={exports:{}};/*!
 * AdminLTE v3.1.0 (https://adminlte.io)
 * Copyright 2014-2021 Colorlib <https://colorlib.com>
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */(function(x,f){(function(A,P){P(f,gp())})(Qs,function(A,P){function j(lt){return lt&&typeof lt=="object"&&"default"in lt?lt:{default:lt}}var h=j(P),L="CardRefresh",V="lte.cardrefresh",_="."+V,K=h.default.fn[L],q="loaded"+_,U="overlay.added"+_,E="overlay.removed"+_,B="card",Q="."+B,J='[data-card-widget="card-refresh"]',ot={source:"",sourceSelector:"",params:{},trigger:J,content:".card-body",loadInContent:!0,loadOnInit:!0,responseType:"",overlayTemplate:'<div class="overlay"><i class="fas fa-2x fa-sync-alt fa-spin"></i></div>',onLoadStart:function(){},onLoadDone:function(ft){return ft}},at=function(){function lt(pt,H){if(this._element=pt,this._parent=pt.parents(Q).first(),this._settings=h.default.extend({},ot,H),this._overlay=h.default(this._settings.overlayTemplate),pt.hasClass(B)&&(this._parent=pt),this._settings.source==="")throw new Error("Source url was not defined. Please specify a url in your CardRefresh source option.")}var ft=lt.prototype;return ft.load=function(){var H=this;this._addOverlay(),this._settings.onLoadStart.call(h.default(this)),h.default.get(this._settings.source,this._settings.params,function(et){H._settings.loadInContent&&(H._settings.sourceSelector!==""&&(et=h.default(et).find(H._settings.sourceSelector).html()),H._parent.find(H._settings.content).html(et)),H._settings.onLoadDone.call(h.default(H),et),H._removeOverlay()},this._settings.responseType!==""&&this._settings.responseType),h.default(this._element).trigger(h.default.Event(q))},ft._addOverlay=function(){this._parent.append(this._overlay),h.default(this._element).trigger(h.default.Event(U))},ft._removeOverlay=function(){this._parent.find(this._overlay).remove(),h.default(this._element).trigger(h.default.Event(E))},ft._init=function(){var H=this;h.default(this).find(this._settings.trigger).on("click",function(){H.load()}),this._settings.loadOnInit&&this.load()},lt._jQueryInterface=function(H){var et=h.default(this).data(V),wt=h.default.extend({},ot,h.default(this).data());et||(et=new lt(h.default(this),wt),h.default(this).data(V,typeof H=="string"?et:H)),typeof H=="string"&&/load/.test(H)?et[H]():et._init(h.default(this))},lt}();h.default(document).on("click",J,function(lt){lt&&lt.preventDefault(),at._jQueryInterface.call(h.default(this),"load")}),h.default(function(){h.default(J).each(function(){at._jQueryInterface.call(h.default(this))})}),h.default.fn[L]=at._jQueryInterface,h.default.fn[L].Constructor=at,h.default.fn[L].noConflict=function(){return h.default.fn[L]=K,at._jQueryInterface};var ct="CardWidget",Et="lte.cardwidget",xt="."+Et,Vt=h.default.fn[ct],Kt="expanded"+xt,v="collapsed"+xt,Gt="maximized"+xt,W="minimized"+xt,jt="removed"+xt,oe="card",ue="collapsed-card",Wt="collapsing-card",ze="expanding-card",$e="was-collapsed",_e="maximized-card",ve='[data-card-widget="remove"]',Xe='[data-card-widget="collapse"]',We='[data-card-widget="maximize"]',le="."+oe,Xn=".card-header",ti=".card-body",Ke=".card-footer",$n={animationSpeed:"normal",collapseTrigger:Xe,removeTrigger:ve,maximizeTrigger:We,collapseIcon:"fa-minus",expandIcon:"fa-plus",maximizeIcon:"fa-expand",minimizeIcon:"fa-compress"},tn=function(){function lt(pt,H){this._element=pt,this._parent=pt.parents(le).first(),pt.hasClass(oe)&&(this._parent=pt),this._settings=h.default.extend({},$n,H)}var ft=lt.prototype;return ft.collapse=function(){var H=this;this._parent.addClass(Wt).children(ti+", "+Ke).slideUp(this._settings.animationSpeed,function(){H._parent.addClass(ue).removeClass(Wt)}),this._parent.find("> "+Xn+" "+this._settings.collapseTrigger+" ."+this._settings.collapseIcon).addClass(this._settings.expandIcon).removeClass(this._settings.collapseIcon),this._element.trigger(h.default.Event(v),this._parent)},ft.expand=function(){var H=this;this._parent.addClass(ze).children(ti+", "+Ke).slideDown(this._settings.animationSpeed,function(){H._parent.removeClass(ue).removeClass(ze)}),this._parent.find("> "+Xn+" "+this._settings.collapseTrigger+" ."+this._settings.expandIcon).addClass(this._settings.collapseIcon).removeClass(this._settings.expandIcon),this._element.trigger(h.default.Event(Kt),this._parent)},ft.remove=function(){this._parent.slideUp(),this._element.trigger(h.default.Event(jt),this._parent)},ft.toggle=function(){if(this._parent.hasClass(ue)){this.expand();return}this.collapse()},ft.maximize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.maximizeIcon).addClass(this._settings.minimizeIcon).removeClass(this._settings.maximizeIcon),this._parent.css({height:this._parent.height(),width:this._parent.width(),transition:"all .15s"}).delay(150).queue(function(){var H=h.default(this);H.addClass(_e),h.default("html").addClass(_e),H.hasClass(ue)&&H.addClass($e),H.dequeue()}),this._element.trigger(h.default.Event(Gt),this._parent)},ft.minimize=function(){this._parent.find(this._settings.maximizeTrigger+" ."+this._settings.minimizeIcon).addClass(this._settings.maximizeIcon).removeClass(this._settings.minimizeIcon),this._parent.css("cssText","height: "+this._parent[0].style.height+" !important; width: "+this._parent[0].style.width+" !important; transition: all .15s;").delay(10).queue(function(){var H=h.default(this);H.removeClass(_e),h.default("html").removeClass(_e),H.css({height:"inherit",width:"inherit"}),H.hasClass($e)&&H.removeClass($e),H.dequeue()}),this._element.trigger(h.default.Event(W),this._parent)},ft.toggleMaximize=function(){if(this._parent.hasClass(_e)){this.minimize();return}this.maximize()},ft._init=function(H){var et=this;this._parent=H,h.default(this).find(this._settings.collapseTrigger).click(function(){et.toggle()}),h.default(this).find(this._settings.maximizeTrigger).click(function(){et.toggleMaximize()}),h.default(this).find(this._settings.removeTrigger).click(function(){et.remove()})},lt._jQueryInterface=function(H){var et=h.default(this).data(Et),wt=h.default.extend({},$n,h.default(this).data());et||(et=new lt(h.default(this),wt),h.default(this).data(Et,typeof H=="string"?et:H)),typeof H=="string"&&/collapse|expand|remove|toggle|maximize|minimize|toggleMaximize/.test(H)?et[H]():typeof H=="object"&&et._init(h.default(this))},lt}();h.default(document).on("click",Xe,function(lt){lt&&lt.preventDefault(),tn._jQueryInterface.call(h.default(this),"toggle")}),h.default(document).on("click",ve,function(lt){lt&&lt.preventDefault(),tn._jQueryInterface.call(h.default(this),"remove")}),h.default(document).on("click",We,function(lt){lt&&lt.preventDefault(),tn._jQueryInterface.call(h.default(this),"toggleMaximize")}),h.default.fn[ct]=tn._jQueryInterface,h.default.fn[ct].Constructor=tn,h.default.fn[ct].noConflict=function(){return h.default.fn[ct]=Vt,tn._jQueryInterface};var Wn="ControlSidebar",gi="lte.controlsidebar",ge="."+gi,mi=h.default.fn[Wn],hn="collapsed"+ge,ji="expanded"+ge,fn=".control-sidebar",ei=".control-sidebar-content",Do='[data-widget="control-sidebar"]',we=".main-header",pn=".main-footer",gn="control-sidebar-animate",mn="control-sidebar-open",qn="control-sidebar-slide-open",Me="layout-fixed",oo="layout-navbar-fixed",bn="layout-sm-navbar-fixed",Be="layout-md-navbar-fixed",je="layout-lg-navbar-fixed",qt="layout-xl-navbar-fixed",en="layout-footer-fixed",Cn="layout-sm-footer-fixed",qe="layout-md-footer-fixed",ws="layout-lg-footer-fixed",As="layout-xl-footer-fixed",vs={controlsidebarSlide:!0,scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",target:fn},yn=function(){function lt(pt,H){this._element=pt,this._config=H}var ft=lt.prototype;return ft.collapse=function(){var H=h.default("body"),et=h.default("html"),wt=this._config.target;this._config.controlsidebarSlide?(et.addClass(gn),H.removeClass(qn).delay(300).queue(function(){h.default(wt).hide(),et.removeClass(gn),h.default(this).dequeue()})):H.removeClass(mn),h.default(this._element).trigger(h.default.Event(hn))},ft.show=function(){var H=h.default("body"),et=h.default("html");this._config.controlsidebarSlide?(et.addClass(gn),h.default(this._config.target).show().delay(10).queue(function(){H.addClass(qn).delay(300).queue(function(){et.removeClass(gn),h.default(this).dequeue()}),h.default(this).dequeue()})):H.addClass(mn),this._fixHeight(),this._fixScrollHeight(),h.default(this._element).trigger(h.default.Event(ji))},ft.toggle=function(){var H=h.default("body"),et=H.hasClass(mn)||H.hasClass(qn);et?this.collapse():this.show()},ft._init=function(){var H=this,et=h.default("body"),wt=et.hasClass(mn)||et.hasClass(qn);wt?(h.default(fn).not(this._config.target).hide(),h.default(this._config.target).css("display","block")):h.default(fn).hide(),this._fixHeight(),this._fixScrollHeight(),h.default(window).resize(function(){H._fixHeight(),H._fixScrollHeight()}),h.default(window).scroll(function(){var yt=h.default("body"),Rt=yt.hasClass(mn)||yt.hasClass(qn);Rt&&H._fixScrollHeight()})},ft._isNavbarFixed=function(){var H=h.default("body");return H.hasClass(oo)||H.hasClass(bn)||H.hasClass(Be)||H.hasClass(je)||H.hasClass(qt)},ft._isFooterFixed=function(){var H=h.default("body");return H.hasClass(en)||H.hasClass(Cn)||H.hasClass(qe)||H.hasClass(ws)||H.hasClass(As)},ft._fixScrollHeight=function(){var H=h.default("body"),et=h.default(this._config.target);if(H.hasClass(Me)){var wt={scroll:h.default(document).height(),window:h.default(window).height(),header:h.default(we).outerHeight(),footer:h.default(pn).outerHeight()},yt={bottom:Math.abs(wt.window+h.default(window).scrollTop()-wt.scroll),top:h.default(window).scrollTop()},Rt=this._isNavbarFixed()&&h.default(we).css("position")==="fixed",Tt=this._isFooterFixed()&&h.default(pn).css("position")==="fixed",fe=h.default(this._config.target+", "+this._config.target+" "+ei);if(yt.top===0&&yt.bottom===0)et.css({bottom:wt.footer,top:wt.header}),fe.css("height",wt.window-(wt.header+wt.footer));else if(yt.bottom<=wt.footer)if(Tt===!1){var Ae=wt.header-yt.top;et.css("bottom",wt.footer-yt.bottom).css("top",Ae>=0?Ae:0),fe.css("height",wt.window-(wt.footer-yt.bottom))}else et.css("bottom",wt.footer);else yt.top<=wt.header?Rt===!1?(et.css("top",wt.header-yt.top),fe.css("height",wt.window-(wt.header-yt.top))):et.css("top",wt.header):Rt===!1?(et.css("top",0),fe.css("height",wt.window)):et.css("top",wt.header);Tt&&Rt?(fe.css("height","100%"),et.css("height","")):(Tt||Rt)&&(fe.css("height","100%"),fe.css("height",""))}},ft._fixHeight=function(){var H=h.default("body"),et=h.default(this._config.target+" "+ei);if(!H.hasClass(Me)){et.attr("style","");return}var wt={window:h.default(window).height(),header:h.default(we).outerHeight(),footer:h.default(pn).outerHeight()},yt=wt.window-wt.header;this._isFooterFixed()&&h.default(pn).css("position")==="fixed"&&(yt=wt.window-wt.header-wt.footer),et.css("height",yt),typeof h.default.fn.overlayScrollbars<"u"&&et.overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}})},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(gi),wt=h.default.extend({},vs,h.default(this).data());if(et||(et=new lt(this,wt),h.default(this).data(gi,et)),et[H]==="undefined")throw new Error(H+" is not a function");et[H]()})},lt}();h.default(document).on("click",Do,function(lt){lt.preventDefault(),yn._jQueryInterface.call(h.default(this),"toggle")}),h.default(document).ready(function(){yn._jQueryInterface.call(h.default(Do),"_init")}),h.default.fn[Wn]=yn._jQueryInterface,h.default.fn[Wn].Constructor=yn,h.default.fn[Wn].noConflict=function(){return h.default.fn[Wn]=mi,yn._jQueryInterface};var On="DirectChat",Si="lte.directchat",Ii="."+Si,ir=h.default.fn[On],ni="toggled"+Ii,En='[data-widget="chat-pane-toggle"]',Bn=".direct-chat",jr="direct-chat-contacts-open",Fe=function(){function lt(pt){this._element=pt}var ft=lt.prototype;return ft.toggle=function(){h.default(this._element).parents(Bn).first().toggleClass(jr),h.default(this._element).trigger(h.default.Event(ni))},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(Si);et||(et=new lt(h.default(this)),h.default(this).data(Si,et)),et[H]()})},lt}();h.default(document).on("click",En,function(lt){lt&&lt.preventDefault(),Fe._jQueryInterface.call(h.default(this),"toggle")}),h.default.fn[On]=Fe._jQueryInterface,h.default.fn[On].Constructor=Fe,h.default.fn[On].noConflict=function(){return h.default.fn[On]=ir,Fe._jQueryInterface};var bi="Dropdown",or="lte.dropdown",Cs=h.default.fn[bi],Gn=".navbar",sn=".dropdown-menu",Fr=".dropdown-menu.show",ys='[data-toggle="dropdown"]',xn="dropdown-menu-right",Es="dropdown-submenu",ki={},Tn=function(){function lt(pt,H){this._config=H,this._element=pt}var ft=lt.prototype;return ft.toggleSubmenu=function(){this._element.siblings().show().toggleClass("show"),this._element.next().hasClass("show")||this._element.parents(sn).first().find(".show").removeClass("show").hide(),this._element.parents("li.nav-item.dropdown.show").on("hidden.bs.dropdown",function(){h.default(".dropdown-submenu .show").removeClass("show").hide()})},ft.fixPosition=function(){var H=h.default(Fr);if(H.length!==0){H.hasClass(xn)?H.css({left:"inherit",right:0}):H.css({left:0,right:"inherit"});var et=H.offset(),wt=H.width(),yt=h.default(window).width()-et.left;et.left<0?H.css({left:"inherit",right:et.left-5}):yt<wt&&H.css({left:"inherit",right:0})}},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(or),wt=h.default.extend({},ki,h.default(this).data());et||(et=new lt(h.default(this),wt),h.default(this).data(or,et)),(H==="toggleSubmenu"||H==="fixPosition")&&et[H]()})},lt}();h.default(sn+" "+ys).on("click",function(lt){lt.preventDefault(),lt.stopPropagation(),Tn._jQueryInterface.call(h.default(this),"toggleSubmenu")}),h.default(Gn+" "+ys).on("click",function(lt){lt.preventDefault(),!h.default(lt.target).parent().hasClass(Es)&&setTimeout(function(){Tn._jQueryInterface.call(h.default(this),"fixPosition")},1)}),h.default.fn[bi]=Tn._jQueryInterface,h.default.fn[bi].Constructor=Tn,h.default.fn[bi].noConflict=function(){return h.default.fn[bi]=Cs,Tn._jQueryInterface};var _i="ExpandableTable",So="lte.expandableTable",xs="."+So,ia=h.default.fn[_i],oa="expanded"+xs,ro="collapsed"+xs,wr=".expandable-table",Io=".expandable-body",Vr='[data-widget="expandable-table"]',rr="aria-expanded",an=function(){function lt(pt,H){this._options=H,this._element=pt}var ft=lt.prototype;return ft.init=function(){h.default(Vr).each(function(H,et){var wt=h.default(et).attr(rr),yt=h.default(et).next(Io).children().first().children();wt==="true"?yt.show():wt==="false"&&(yt.hide(),yt.parent().parent().addClass("d-none"))})},ft.toggleRow=function(){var H=this._element,et=500,wt=H.attr(rr),yt=H.next(Io).children().first().children();yt.stop(),wt==="true"?(yt.slideUp(et,function(){H.next(Io).addClass("d-none")}),H.attr(rr,"false"),H.trigger(h.default.Event(ro))):wt==="false"&&(H.next(Io).removeClass("d-none"),yt.slideDown(et),H.attr(rr,"true"),H.trigger(h.default.Event(oa)))},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(So);et||(et=new lt(h.default(this)),h.default(this).data(So,et)),typeof H=="string"&&/init|toggleRow/.test(H)&&et[H]()})},lt}();h.default(wr).ready(function(){an._jQueryInterface.call(h.default(this),"init")}),h.default(document).on("click",Vr,function(){an._jQueryInterface.call(h.default(this),"toggleRow")}),h.default.fn[_i]=an._jQueryInterface,h.default.fn[_i].Constructor=an,h.default.fn[_i].noConflict=function(){return h.default.fn[_i]=ia,an._jQueryInterface};var nn="Fullscreen",Mo="lte.fullscreen",wi=h.default.fn[nn],Mi='[data-widget="fullscreen"]',Hr=Mi+" i",Fi={minimizeIcon:"fa-compress-arrows-alt",maximizeIcon:"fa-expand-arrows-alt"},kn=function(){function lt(pt,H){this.element=pt,this.options=h.default.extend({},Fi,H)}var ft=lt.prototype;return ft.toggle=function(){document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement||document.msFullscreenElement?this.windowed():this.fullscreen()},ft.fullscreen=function(){document.documentElement.requestFullscreen?document.documentElement.requestFullscreen():document.documentElement.webkitRequestFullscreen?document.documentElement.webkitRequestFullscreen():document.documentElement.msRequestFullscreen&&document.documentElement.msRequestFullscreen(),h.default(Hr).removeClass(this.options.maximizeIcon).addClass(this.options.minimizeIcon)},ft.windowed=function(){document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen?document.webkitExitFullscreen():document.msExitFullscreen&&document.msExitFullscreen(),h.default(Hr).removeClass(this.options.minimizeIcon).addClass(this.options.maximizeIcon)},lt._jQueryInterface=function(H){var et=h.default(this).data(Mo);et||(et=h.default(this).data());var wt=h.default.extend({},Fi,typeof H=="object"?H:et),yt=new lt(h.default(this),wt);h.default(this).data(Mo,typeof H=="object"?H:et),typeof H=="string"&&/toggle|fullscreen|windowed/.test(H)?yt[H]():yt.init()},lt}();h.default(document).on("click",Mi,function(){kn._jQueryInterface.call(h.default(this),"toggle")}),h.default.fn[nn]=kn._jQueryInterface,h.default.fn[nn].Constructor=kn,h.default.fn[nn].noConflict=function(){return h.default.fn[nn]=wi,kn._jQueryInterface};var Ai="IFrame",No="lte.iframe",Ar=h.default.fn[Ai],Oo='[data-widget="iframe"]',ra='[data-widget="iframe-close"]',Ur='[data-widget="iframe-scrollleft"]',sa='[data-widget="iframe-scrollright"]',Ni='[data-widget="iframe-fullscreen"]',vi=".content-wrapper",Vi=vi+" iframe",vr=Oo+".iframe-mode .nav",Hi=Oo+".iframe-mode .navbar-nav",Ye=Hi+" .nav-item",so=Hi+" .nav-link",Dn=Oo+".iframe-mode .tab-content",Ln=Dn+" .tab-empty",Bo=Dn+" .tab-loading",ii=Dn+" .tab-pane",sr=".main-sidebar .nav-item > a.nav-link",Cr=".sidebar-search-results .list-group-item",yr=".main-header .nav-item a.nav-link",ao=".main-header a.dropdown-item",Ui="iframe-mode",cn="iframe-mode-fullscreen",Lo={onTabClick:function(ft){return ft},onTabChanged:function(ft){return ft},onTabCreated:function(ft){return ft},autoIframeMode:!0,autoItemActive:!0,autoShowNewTab:!0,allowDuplicates:!1,loadingScreen:!0,useNavbarItems:!0,scrollOffset:40,scrollBehaviorSwap:!1,iconMaximize:"fa-expand",iconMinimize:"fa-compress"},Ci=function(){function lt(pt,H){this._config=H,this._element=pt,this._init()}var ft=lt.prototype;return ft.onTabClick=function(H){this._config.onTabClick(H)},ft.onTabChanged=function(H){this._config.onTabChanged(H)},ft.onTabCreated=function(H){this._config.onTabCreated(H)},ft.createTab=function(H,et,wt,yt){var Rt=this,Tt="panel-"+wt,fe="tab-"+wt;this._config.allowDuplicates&&(Tt+="-"+Math.floor(Math.random()*1e3),fe+="-"+Math.floor(Math.random()*1e3));var Ae='<li class="nav-item" role="presentation"><a href="#" class="btn-iframe-close" data-widget="iframe-close" data-type="only-this"><i class="fas fa-times"></i></a><a class="nav-link" data-toggle="row" id="'+fe+'" href="#'+Tt+'" role="tab" aria-controls="'+Tt+'" aria-selected="false">'+H+"</a></li>";h.default(Hi).append(unescape(escape(Ae)));var Fn='<div class="tab-pane fade" id="'+Tt+'" role="tabpanel" aria-labelledby="'+fe+'"><iframe src="'+et+'"></iframe></div>';if(h.default(Dn).append(unescape(escape(Fn))),yt)if(this._config.loadingScreen){var Di=h.default(Bo);Di.fadeIn(),h.default(Tt+" iframe").ready(function(){typeof Rt._config.loadingScreen=="number"?(Rt.switchTab("#"+fe),setTimeout(function(){Di.fadeOut()},Rt._config.loadingScreen)):(Rt.switchTab("#"+fe),Di.fadeOut())})}else this.switchTab("#"+fe);this.onTabCreated(h.default("#"+fe))},ft.openTabSidebar=function(H,et){et===void 0&&(et=this._config.autoShowNewTab);var wt=h.default(H).clone();wt.attr("href")===void 0&&(wt=h.default(H).parent("a").clone()),wt.find(".right, .search-path").remove();var yt=wt.find("p").text();yt===""&&(yt=wt.text());var Rt=wt.attr("href");if(!(Rt==="#"||Rt===""||Rt===void 0)){var Tt=Rt.replace("./","").replace(/["&'./:=?[\]]/gi,"-").replace(/(--)/gi,""),fe="tab-"+Tt;if(!this._config.allowDuplicates&&h.default("#"+fe).length>0)return this.switchTab("#"+fe);(!this._config.allowDuplicates&&h.default("#"+fe).length===0||this._config.allowDuplicates)&&this.createTab(yt,Rt,Tt,et)}},ft.switchTab=function(H){var et=h.default(H),wt=et.attr("href");h.default(Ln).hide(),h.default(Hi+" .active").tab("dispose").removeClass("active"),this._fixHeight(),et.tab("show"),et.parents("li").addClass("active"),this.onTabChanged(et),this._config.autoItemActive&&this._setItemActive(h.default(wt+" iframe").attr("src"))},ft.removeActiveTab=function(H,et){if(H=="all")h.default(Ye).remove(),h.default(ii).remove(),h.default(Ln).show();else if(H=="all-other")h.default(Ye+":not(.active)").remove(),h.default(ii+":not(.active)").remove();else if(H=="only-this"){var wt=h.default(et),yt=wt.parent(".nav-item"),Rt=yt.parent(),Tt=yt.index(),fe=wt.siblings(".nav-link").attr("aria-controls");if(yt.remove(),h.default("#"+fe).remove(),h.default(Dn).children().length==h.default(Ln+", "+Bo).length)h.default(Ln).show();else{var Ae=Tt-1;this.switchTab(Rt.children().eq(Ae).find("a.nav-link"))}}else{var Fn=h.default(Ye+".active"),Di=Fn.parent(),Os=Fn.index();if(Fn.remove(),h.default(ii+".active").remove(),h.default(Dn).children().length==h.default(Ln+", "+Bo).length)h.default(Ln).show();else{var be=Os-1;this.switchTab(Di.children().eq(be).find("a.nav-link"))}}},ft.toggleFullscreen=function(){h.default("body").hasClass(cn)?(h.default(Ni+" i").removeClass(this._config.iconMinimize).addClass(this._config.iconMaximize),h.default("body").removeClass(cn),h.default(Ln+", "+Bo).height("auto"),h.default(vi).height("auto"),h.default(Vi).height("auto")):(h.default(Ni+" i").removeClass(this._config.iconMaximize).addClass(this._config.iconMinimize),h.default("body").addClass(cn)),h.default(window).trigger("resize"),this._fixHeight(!0)},ft._init=function(){if(window.frameElement&&this._config.autoIframeMode)h.default("body").addClass(Ui);else if(h.default(vi).hasClass(Ui)){if(h.default(Dn).children().length>2){var H=h.default(ii+":first-child");H.show(),this._setItemActive(H.find("iframe").attr("src"))}this._setupListeners(),this._fixHeight(!0)}},ft._navScroll=function(H){var et=h.default(Hi).scrollLeft();h.default(Hi).animate({scrollLeft:et+H},250,"linear")},ft._setupListeners=function(){var H=this;h.default(window).on("resize",function(){setTimeout(function(){H._fixHeight()},1)}),h.default(document).on("click",sr+", "+Cr,function(yt){yt.preventDefault(),H.openTabSidebar(yt.target)}),this._config.useNavbarItems&&h.default(document).on("click",yr+", "+ao,function(yt){yt.preventDefault(),H.openTabSidebar(yt.target)}),h.default(document).on("click",so,function(yt){yt.preventDefault(),H.onTabClick(yt.target),H.switchTab(yt.target)}),h.default(document).on("click",so,function(yt){yt.preventDefault(),H.onTabClick(yt.target),H.switchTab(yt.target)}),h.default(document).on("click",ra,function(yt){yt.preventDefault();var Rt=yt.target;Rt.nodeName=="I"&&(Rt=yt.target.offsetParent),H.removeActiveTab(Rt.attributes["data-type"]?Rt.attributes["data-type"].nodeValue:null,Rt)}),h.default(document).on("click",Ni,function(yt){yt.preventDefault(),H.toggleFullscreen()});var et=!1,wt=null;h.default(document).on("mousedown",Ur,function(yt){yt.preventDefault(),clearInterval(wt);var Rt=H._config.scrollOffset;H._config.scrollBehaviorSwap||(Rt=-Rt),et=!0,H._navScroll(Rt),wt=setInterval(function(){H._navScroll(Rt)},250)}),h.default(document).on("mousedown",sa,function(yt){yt.preventDefault(),clearInterval(wt);var Rt=H._config.scrollOffset;H._config.scrollBehaviorSwap&&(Rt=-Rt),et=!0,H._navScroll(Rt),wt=setInterval(function(){H._navScroll(Rt)},250)}),h.default(document).on("mouseup",function(){et&&(et=!1,clearInterval(wt),wt=null)})},ft._setItemActive=function(H){h.default(sr+", "+ao).removeClass("active"),h.default(yr).parent().removeClass("active");var et=h.default(yr+'[href$="'+H+'"]'),wt=h.default(ao+'[href$="'+H+'"]'),yt=h.default(sr+'[href$="'+H+'"]');et.each(function(Rt,Tt){h.default(Tt).parent().addClass("active")}),wt.each(function(Rt,Tt){h.default(Tt).addClass("active")}),yt.each(function(Rt,Tt){h.default(Tt).addClass("active"),h.default(Tt).parents(".nav-treeview").prevAll(".nav-link").addClass("active")})},ft._fixHeight=function(H){if(H===void 0&&(H=!1),h.default("body").hasClass(cn)){var et=h.default(window).height(),wt=h.default(vr).outerHeight();h.default(Ln+", "+Bo+", "+Vi).height(et-wt),h.default(vi).height(et)}else{var yt=parseFloat(h.default(vi).css("height")),Rt=h.default(vr).outerHeight();H==!0?setTimeout(function(){h.default(Ln+", "+Bo).height(yt-Rt)},50):h.default(Vi).height(yt-Rt)}},lt._jQueryInterface=function(H){var et=h.default(this).data(No),wt=h.default.extend({},Lo,h.default(this).data());if(et||(et=new lt(this,wt),h.default(this).data(No,et)),typeof H=="string"&&/createTab|openTabSidebar|switchTab|removeActiveTab/.test(H)){for(var yt,Rt=arguments.length,Tt=new Array(Rt>1?Rt-1:0),fe=1;fe<Rt;fe++)Tt[fe-1]=arguments[fe];(yt=et)[H].apply(yt,Tt)}},lt}();h.default(window).on("load",function(){Ci._jQueryInterface.call(h.default(Oo))}),h.default.fn[Ai]=Ci._jQueryInterface,h.default.fn[Ai].Constructor=Ci,h.default.fn[Ai].noConflict=function(){return h.default.fn[Ai]=Ar,Ci._jQueryInterface};var oi="Layout",Po="lte.layout",Kn=h.default.fn[oi],Qe=".main-header",yi=".main-sidebar",$i=".main-sidebar .sidebar",ri=".content-wrapper",Ei=".control-sidebar-content",$r='[data-widget="control-sidebar"]',co=".main-footer",Wi='[data-widget="pushmenu"]',Ts=".login-box",Wr=".register-box",Ds=".preloader",Ro="sidebar-collapse",_n="sidebar-focused",si="layout-fixed",qr="control-sidebar-slide-open",Er="control-sidebar-open",Ss={scrollbarTheme:"os-theme-light",scrollbarAutoHide:"l",panelAutoHeight:!0,panelAutoHeightMode:"min-height",preloadDuration:200,loginRegisterAutoHeight:!0},lo=function(){function lt(pt,H){this._config=H,this._element=pt}var ft=lt.prototype;return ft.fixLayoutHeight=function(H){H===void 0&&(H=null);var et=h.default("body"),wt=0;(et.hasClass(qr)||et.hasClass(Er)||H==="control_sidebar")&&(wt=h.default(Ei).outerHeight());var yt={window:h.default(window).height(),header:h.default(Qe).length>0?h.default(Qe).outerHeight():0,footer:h.default(co).length>0?h.default(co).outerHeight():0,sidebar:h.default($i).length>0?h.default($i).height():0,controlSidebar:wt},Rt=this._max(yt),Tt=this._config.panelAutoHeight;Tt===!0&&(Tt=0);var fe=h.default(ri);Tt!==!1&&(Rt===yt.controlSidebar?fe.css(this._config.panelAutoHeightMode,Rt+Tt):Rt===yt.window?fe.css(this._config.panelAutoHeightMode,Rt+Tt-yt.header-yt.footer):fe.css(this._config.panelAutoHeightMode,Rt+Tt-yt.header),this._isFooterFixed()&&fe.css(this._config.panelAutoHeightMode,parseFloat(fe.css(this._config.panelAutoHeightMode))+yt.footer)),et.hasClass(si)&&(typeof h.default.fn.overlayScrollbars<"u"?h.default($i).overlayScrollbars({className:this._config.scrollbarTheme,sizeAutoCapable:!0,scrollbars:{autoHide:this._config.scrollbarAutoHide,clickScrolling:!0}}):h.default($i).css("overflow-y","auto"))},ft.fixLoginRegisterHeight=function(){var H=h.default("body"),et=h.default(Ts+", "+Wr);if(et.length===0)H.css("height","auto"),h.default("html").css("height","auto");else{var wt=et.height();H.css(this._config.panelAutoHeightMode)!==wt&&H.css(this._config.panelAutoHeightMode,wt)}},ft._init=function(){var H=this;this.fixLayoutHeight(),this._config.loginRegisterAutoHeight===!0?this.fixLoginRegisterHeight():this._config.loginRegisterAutoHeight===parseInt(this._config.loginRegisterAutoHeight,10)&&setInterval(this.fixLoginRegisterHeight,this._config.loginRegisterAutoHeight),h.default($i).on("collapsed.lte.treeview expanded.lte.treeview",function(){H.fixLayoutHeight()}),h.default(yi).on("mouseenter mouseleave",function(){h.default("body").hasClass(Ro)&&H.fixLayoutHeight()}),h.default(Wi).on("collapsed.lte.pushmenu shown.lte.pushmenu",function(){setTimeout(function(){H.fixLayoutHeight()},300)}),h.default($r).on("collapsed.lte.controlsidebar",function(){H.fixLayoutHeight()}).on("expanded.lte.controlsidebar",function(){H.fixLayoutHeight("control_sidebar")}),h.default(window).resize(function(){H.fixLayoutHeight()}),setTimeout(function(){h.default("body.hold-transition").removeClass("hold-transition")},50),setTimeout(function(){var et=h.default(Ds);et&&(et.css("height",0),setTimeout(function(){et.children().hide()},200))},this._config.preloadDuration)},ft._max=function(H){var et=0;return Object.keys(H).forEach(function(wt){H[wt]>et&&(et=H[wt])}),et},ft._isFooterFixed=function(){return h.default(co).css("position")==="fixed"},lt._jQueryInterface=function(H){return H===void 0&&(H=""),this.each(function(){var et=h.default(this).data(Po),wt=h.default.extend({},Ss,h.default(this).data());et||(et=new lt(h.default(this),wt),h.default(this).data(Po,et)),H==="init"||H===""?et._init():(H==="fixLayoutHeight"||H==="fixLoginRegisterHeight")&&et[H]()})},lt}();h.default(window).on("load",function(){lo._jQueryInterface.call(h.default("body"))}),h.default($i+" a").on("focusin",function(){h.default(yi).addClass(_n)}).on("focusout",function(){h.default(yi).removeClass(_n)}),h.default.fn[oi]=lo._jQueryInterface,h.default.fn[oi].Constructor=lo,h.default.fn[oi].noConflict=function(){return h.default.fn[oi]=Kn,lo._jQueryInterface};var xi="PushMenu",ar="lte.pushmenu",Oi="."+ar,zo=h.default.fn[xi],Ee="collapsed"+Oi,xr="shown"+Oi,Bi='[data-widget="pushmenu"]',uo="body",ai="#sidebar-overlay",Gr=".wrapper",wn="sidebar-collapse",ho="sidebar-open",Li="sidebar-is-opening",jo="sidebar-closed",cr={autoCollapseSize:992,enableRemember:!1,noTransitionAfterReload:!0},fo=function(){function lt(pt,H){this._element=pt,this._options=h.default.extend({},cr,H),h.default(ai).length===0&&this._addOverlay(),this._init()}var ft=lt.prototype;return ft.expand=function(){var H=h.default(uo);this._options.autoCollapseSize&&h.default(window).width()<=this._options.autoCollapseSize&&H.addClass(ho),H.addClass(Li).removeClass(wn+" "+jo).delay(50).queue(function(){H.removeClass(Li),h.default(this).dequeue()}),this._options.enableRemember&&localStorage.setItem("remember"+Oi,ho),h.default(this._element).trigger(h.default.Event(xr))},ft.collapse=function(){var H=h.default(uo);this._options.autoCollapseSize&&h.default(window).width()<=this._options.autoCollapseSize&&H.removeClass(ho).addClass(jo),H.addClass(wn),this._options.enableRemember&&localStorage.setItem("remember"+Oi,wn),h.default(this._element).trigger(h.default.Event(Ee))},ft.toggle=function(){h.default(uo).hasClass(wn)?this.expand():this.collapse()},ft.autoCollapse=function(H){if(H===void 0&&(H=!1),!!this._options.autoCollapseSize){var et=h.default(uo);h.default(window).width()<=this._options.autoCollapseSize?et.hasClass(ho)||this.collapse():H===!0&&(et.hasClass(ho)?et.removeClass(ho):et.hasClass(jo)&&this.expand())}},ft.remember=function(){if(this._options.enableRemember){var H=h.default("body"),et=localStorage.getItem("remember"+Oi);et===wn?this._options.noTransitionAfterReload?H.addClass("hold-transition").addClass(wn).delay(50).queue(function(){h.default(this).removeClass("hold-transition"),h.default(this).dequeue()}):H.addClass(wn):this._options.noTransitionAfterReload?H.addClass("hold-transition").removeClass(wn).delay(50).queue(function(){h.default(this).removeClass("hold-transition"),h.default(this).dequeue()}):H.removeClass(wn)}},ft._init=function(){var H=this;this.remember(),this.autoCollapse(),h.default(window).resize(function(){H.autoCollapse(!0)})},ft._addOverlay=function(){var H=this,et=h.default("<div />",{id:"sidebar-overlay"});et.on("click",function(){H.collapse()}),h.default(Gr).append(et)},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(ar),wt=h.default.extend({},cr,h.default(this).data());et||(et=new lt(this,wt),h.default(this).data(ar,et)),typeof H=="string"&&/collapse|expand|toggle/.test(H)&&et[H]()})},lt}();h.default(document).on("click",Bi,function(lt){lt.preventDefault();var ft=lt.currentTarget;h.default(ft).data("widget")!=="pushmenu"&&(ft=h.default(ft).closest(Bi)),fo._jQueryInterface.call(h.default(ft),"toggle")}),h.default(window).on("load",function(){fo._jQueryInterface.call(h.default(Bi))}),h.default.fn[xi]=fo._jQueryInterface,h.default.fn[xi].Constructor=fo,h.default.fn[xi].noConflict=function(){return h.default.fn[xi]=zo,fo._jQueryInterface};var qi="SidebarSearch",Is="lte.sidebar-search",u=h.default.fn[qi],g="sidebar-search-open",k="fa-search",C="fa-times",I="nav-header",M="sidebar-search-results",z="list-group",tt='[data-widget="sidebar-search"]',Z=".main-sidebar .nav-sidebar",st=".nav-link",_t=".nav-treeview",At=tt+" .form-control",gt=tt+" .btn",Mt=gt+" i",Xt="."+z,se="."+M,te=se+" ."+z,Ve={arrowSign:"->",minLength:3,maxResults:7,highlightName:!0,highlightPath:!1,highlightClass:"text-light",notFoundText:"No element found!"},Ue=[],on=function(){function lt(pt,H){this.element=pt,this.options=h.default.extend({},Ve,H),this.items=[]}var ft=lt.prototype;return ft.init=function(){var H=this;h.default(tt).length!==0&&(h.default(tt).next(se).length===0&&h.default(tt).after(h.default("<div />",{class:M})),h.default(se).children(Xt).length===0&&h.default(se).append(h.default("<div />",{class:z})),this._addNotFound(),h.default(Z).children().each(function(et,wt){H._parseItem(wt)}))},ft.search=function(){var H=this,et=h.default(At).val().toLowerCase();if(et.length<this.options.minLength){h.default(te).empty(),this._addNotFound(),this.close();return}var wt=Ue.filter(function(Rt){return Rt.name.toLowerCase().includes(et)}),yt=h.default(wt.slice(0,this.options.maxResults));h.default(te).empty(),yt.length===0?this._addNotFound():yt.each(function(Rt,Tt){h.default(te).append(H._renderItem(escape(Tt.name),escape(Tt.link),Tt.path))}),this.open()},ft.open=function(){h.default(tt).parent().addClass(g),h.default(Mt).removeClass(k).addClass(C)},ft.close=function(){h.default(tt).parent().removeClass(g),h.default(Mt).removeClass(C).addClass(k)},ft.toggle=function(){h.default(tt).parent().hasClass(g)?this.close():this.open()},ft._parseItem=function(H,et){var wt=this;if(et===void 0&&(et=[]),!h.default(H).hasClass(I)){var yt={},Rt=h.default(H).clone().find("> "+st),Tt=h.default(H).clone().find("> "+_t),fe=Rt.attr("href"),Ae=Rt.find("p").children().remove().end().text();if(yt.name=this._trimText(Ae),yt.link=fe,yt.path=et,Tt.length===0)Ue.push(yt);else{var Fn=yt.path.concat([yt.name]);Tt.children().each(function(Di,Os){wt._parseItem(Os,Fn)})}}},ft._trimText=function(H){return P.trim(H.replace(/(\r\n|\n|\r)/gm," "))},ft._renderItem=function(H,et,wt){var yt=this;if(wt=wt.join(" "+this.options.arrowSign+" "),H=unescape(H),this.options.highlightName||this.options.highlightPath){var Rt=h.default(At).val().toLowerCase(),Tt=new RegExp(Rt,"gi");this.options.highlightName&&(H=H.replace(Tt,function(Di){return'<strong class="'+yt.options.highlightClass+'">'+Di+"</strong>"})),this.options.highlightPath&&(wt=wt.replace(Tt,function(Di){return'<strong class="'+yt.options.highlightClass+'">'+Di+"</strong>"}))}var fe=h.default("<a/>",{href:et,class:"list-group-item"}),Ae=h.default("<div/>",{class:"search-title"}).html(H),Fn=h.default("<div/>",{class:"search-path"}).html(wt);return fe.append(Ae).append(Fn),fe},ft._addNotFound=function(){h.default(te).append(this._renderItem(this.options.notFoundText,"#",[]))},lt._jQueryInterface=function(H){var et=h.default(this).data(Is);et||(et=h.default(this).data());var wt=h.default.extend({},Ve,typeof H=="object"?H:et),yt=new lt(h.default(this),wt);h.default(this).data(Is,typeof H=="object"?H:et),typeof H=="string"&&/init|toggle|close|open|search/.test(H)?yt[H]():yt.init()},lt}();h.default(document).on("click",gt,function(lt){lt.preventDefault(),on._jQueryInterface.call(h.default(tt),"toggle")}),h.default(document).on("keyup",At,function(lt){if(lt.keyCode==38){lt.preventDefault(),h.default(te).children().last().focus();return}if(lt.keyCode==40){lt.preventDefault(),h.default(te).children().first().focus();return}setTimeout(function(){on._jQueryInterface.call(h.default(tt),"search")},100)}),h.default(document).on("keydown",te,function(lt){var ft=h.default(":focus");lt.keyCode==38&&(lt.preventDefault(),ft.is(":first-child")?ft.siblings().last().focus():ft.prev().focus()),lt.keyCode==40&&(lt.preventDefault(),ft.is(":last-child")?ft.siblings().first().focus():ft.next().focus())}),h.default(window).on("load",function(){on._jQueryInterface.call(h.default(tt),"init")}),h.default.fn[qi]=on._jQueryInterface,h.default.fn[qi].Constructor=on,h.default.fn[qi].noConflict=function(){return h.default.fn[qi]=u,on._jQueryInterface};var ln="NavbarSearch",he="lte.navbar-search",Gi=h.default.fn[ln],me='[data-widget="navbar-search"]',Le=".navbar-search-block",po=".form-control",go="navbar-search-open",ci={resetOnClose:!0,target:Le},li=function(){function lt(pt,H){this._element=pt,this._config=h.default.extend({},ci,H)}var ft=lt.prototype;return ft.open=function(){h.default(this._config.target).css("display","flex").hide().fadeIn().addClass(go),h.default(this._config.target+" "+po).focus()},ft.close=function(){h.default(this._config.target).fadeOut().removeClass(go),this._config.resetOnClose&&h.default(this._config.target+" "+po).val("")},ft.toggle=function(){h.default(this._config.target).hasClass(go)?this.close():this.open()},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(he),wt=h.default.extend({},ci,h.default(this).data());if(et||(et=new lt(this,wt),h.default(this).data(he,et)),!/toggle|close|open/.test(H))throw new Error("Undefined method "+H);et[H]()})},lt}();h.default(document).on("click",me,function(lt){lt.preventDefault();var ft=h.default(lt.currentTarget);ft.data("widget")!=="navbar-search"&&(ft=ft.closest(me)),li._jQueryInterface.call(ft,"toggle")}),h.default.fn[ln]=li._jQueryInterface,h.default.fn[ln].Constructor=li,h.default.fn[ln].noConflict=function(){return h.default.fn[ln]=Gi,li._jQueryInterface};var Ge="Toasts",Pn="lte.toasts",rn="."+Pn,Rn=h.default.fn[Ge],Ki="init"+rn,Ze="created"+rn,Yn="removed"+rn,Ms="#toastsContainerTopRight",lr="#toastsContainerTopLeft",Ns="#toastsContainerBottomRight",Ce="#toastsContainerBottomLeft",Fo="toasts-top-right",zn="toasts-top-left",Qn="toasts-bottom-right",dr="toasts-bottom-left",Vo="topRight",jn="topLeft",di="bottomRight",Ho="bottomLeft",Yi={position:Vo,fixed:!0,autohide:!1,autoremove:!0,delay:1e3,fade:!0,icon:null,image:null,imageAlt:null,imageHeight:"25px",title:null,subtitle:null,close:!0,body:null,class:null},Uo=function(){function lt(pt,H){this._config=H,this._prepareContainer(),h.default("body").trigger(h.default.Event(Ki))}var ft=lt.prototype;return ft.create=function(){var H=h.default('<div class="toast" role="alert" aria-live="assertive" aria-atomic="true"/>');H.data("autohide",this._config.autohide),H.data("animation",this._config.fade),this._config.class&&H.addClass(this._config.class),this._config.delay&&this._config.delay!=500&&H.data("delay",this._config.delay);var et=h.default('<div class="toast-header">');if(this._config.image!=null){var wt=h.default("<img />").addClass("rounded mr-2").attr("src",this._config.image).attr("alt",this._config.imageAlt);this._config.imageHeight!=null&&wt.height(this._config.imageHeight).width("auto"),et.append(wt)}if(this._config.icon!=null&&et.append(h.default("<i />").addClass("mr-2").addClass(this._config.icon)),this._config.title!=null&&et.append(h.default("<strong />").addClass("mr-auto").html(this._config.title)),this._config.subtitle!=null&&et.append(h.default("<small />").html(this._config.subtitle)),this._config.close==!0){var yt=h.default('<button data-dismiss="toast" />').attr("type","button").addClass("ml-2 mb-1 close").attr("aria-label","Close").append('<span aria-hidden="true">&times;</span>');this._config.title==null&&yt.toggleClass("ml-2 ml-auto"),et.append(yt)}H.append(et),this._config.body!=null&&H.append(h.default('<div class="toast-body" />').html(this._config.body)),h.default(this._getContainerId()).prepend(H);var Rt=h.default("body");Rt.trigger(h.default.Event(Ze)),H.toast("show"),this._config.autoremove&&H.on("hidden.bs.toast",function(){h.default(this).delay(200).remove(),Rt.trigger(h.default.Event(Yn))})},ft._getContainerId=function(){if(this._config.position==Vo)return Ms;if(this._config.position==jn)return lr;if(this._config.position==di)return Ns;if(this._config.position==Ho)return Ce},ft._prepareContainer=function(){if(h.default(this._getContainerId()).length===0){var H=h.default("<div />").attr("id",this._getContainerId().replace("#",""));this._config.position==Vo?H.addClass(Fo):this._config.position==jn?H.addClass(zn):this._config.position==di?H.addClass(Qn):this._config.position==Ho&&H.addClass(dr),h.default("body").append(H)}this._config.fixed?h.default(this._getContainerId()).addClass("fixed"):h.default(this._getContainerId()).removeClass("fixed")},lt._jQueryInterface=function(H,et){return this.each(function(){var wt=h.default.extend({},Yi,et),yt=new lt(h.default(this),wt);H==="create"&&yt[H]()})},lt}();h.default.fn[Ge]=Uo._jQueryInterface,h.default.fn[Ge].Constructor=Uo,h.default.fn[Ge].noConflict=function(){return h.default.fn[Ge]=Rn,Uo._jQueryInterface};var Pi="TodoList",mo="lte.todolist",$o=h.default.fn[Pi],Kr='[data-widget="todo-list"]',Yr="done",Tr={onCheck:function(ft){return ft},onUnCheck:function(ft){return ft}},Ti=function(){function lt(pt,H){this._config=H,this._element=pt,this._init()}var ft=lt.prototype;return ft.toggle=function(H){if(H.parents("li").toggleClass(Yr),!h.default(H).prop("checked")){this.unCheck(h.default(H));return}this.check(H)},ft.check=function(H){this._config.onCheck.call(H)},ft.unCheck=function(H){this._config.onUnCheck.call(H)},ft._init=function(){var H=this,et=this._element;et.find("input:checkbox:checked").parents("li").toggleClass(Yr),et.on("change","input:checkbox",function(wt){H.toggle(h.default(wt.target))})},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(mo);et||(et=h.default(this).data());var wt=h.default.extend({},Tr,typeof H=="object"?H:et),yt=new lt(h.default(this),wt);h.default(this).data(mo,typeof H=="object"?H:et),H==="init"&&yt[H]()})},lt}();h.default(window).on("load",function(){Ti._jQueryInterface.call(h.default(Kr))}),h.default.fn[Pi]=Ti._jQueryInterface,h.default.fn[Pi].Constructor=Ti,h.default.fn[Pi].noConflict=function(){return h.default.fn[Pi]=$o,Ti._jQueryInterface};var Qi="Treeview",Dr="lte.treeview",Zi="."+Dr,Qr=h.default.fn[Qi],Y="expanded"+Zi,rt="collapsed"+Zi,ht="load"+Zi,mt=".nav-item",vt=".nav-link",Lt=".nav-treeview",Ut=".menu-open",Pt='[data-widget="treeview"]',$t="menu-open",ae="menu-is-opening",Yt="sidebar-collapse",Qt={trigger:Pt+" "+vt,animationSpeed:300,accordion:!0,expandSidebar:!1,sidebarButtonSelector:'[data-widget="pushmenu"]'},ee=function(){function lt(pt,H){this._config=H,this._element=pt}var ft=lt.prototype;return ft.init=function(){h.default(""+mt+Ut+" "+Lt+Ut).css("display","block"),this._setupListeners()},ft.expand=function(H,et){var wt=this,yt=h.default.Event(Y);if(this._config.accordion){var Rt=et.siblings(Ut).first(),Tt=Rt.find(Lt).first();this.collapse(Tt,Rt)}et.addClass(ae),H.stop().slideDown(this._config.animationSpeed,function(){et.addClass($t),h.default(wt._element).trigger(yt)}),this._config.expandSidebar&&this._expandSidebar()},ft.collapse=function(H,et){var wt=this,yt=h.default.Event(rt);et.removeClass(ae+" "+$t),H.stop().slideUp(this._config.animationSpeed,function(){h.default(wt._element).trigger(yt),H.find(Ut+" > "+Lt).slideUp(),H.find(Ut).removeClass($t)})},ft.toggle=function(H){var et=h.default(H.currentTarget),wt=et.parent(),yt=wt.find("> "+Lt);if(!(!yt.is(Lt)&&(wt.is(mt)||(yt=wt.parent().find("> "+Lt)),!yt.is(Lt)))){H.preventDefault();var Rt=et.parents(mt).first(),Tt=Rt.hasClass($t);Tt?this.collapse(h.default(yt),Rt):this.expand(h.default(yt),Rt)}},ft._setupListeners=function(){var H=this,et=this._element.attr("id")!==void 0?"#"+this._element.attr("id"):"";h.default(document).on("click",""+et+this._config.trigger,function(wt){H.toggle(wt)})},ft._expandSidebar=function(){h.default("body").hasClass(Yt)&&h.default(this._config.sidebarButtonSelector).PushMenu("expand")},lt._jQueryInterface=function(H){return this.each(function(){var et=h.default(this).data(Dr),wt=h.default.extend({},Qt,h.default(this).data());et||(et=new lt(h.default(this),wt),h.default(this).data(Dr,et)),H==="init"&&et[H]()})},lt}();h.default(window).on(ht,function(){h.default(Pt).each(function(){ee._jQueryInterface.call(h.default(this),"init")})}),h.default.fn[Qi]=ee._jQueryInterface,h.default.fn[Qi].Constructor=ee,h.default.fn[Qi].noConflict=function(){return h.default.fn[Qi]=Qr,ee._jQueryInterface},A.CardRefresh=at,A.CardWidget=tn,A.ControlSidebar=yn,A.DirectChat=Fe,A.Dropdown=Tn,A.ExpandableTable=an,A.Fullscreen=kn,A.IFrame=Ci,A.Layout=lo,A.NavbarSearch=li,A.PushMenu=fo,A.SidebarSearch=on,A.Toasts=Uo,A.TodoList=Ti,A.Treeview=ee,Object.defineProperty(A,"__esModule",{value:!0})})})(mC,mC.exports);var bC={exports:{}};/*!
  * Bootstrap v4.6.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */(function(x,f){(function(A,P){P(f,gp())})(Qs,function(A,P){function j(T){return T&&typeof T=="object"&&"default"in T?T:{default:T}}var h=j(P);function L(T,N){for(var O=0;O<N.length;O++){var b=N[O];b.enumerable=b.enumerable||!1,b.configurable=!0,"value"in b&&(b.writable=!0),Object.defineProperty(T,b.key,b)}}function V(T,N,O){return N&&L(T.prototype,N),O&&L(T,O),Object.defineProperty(T,"prototype",{writable:!1}),T}function _(){return _=Object.assign?Object.assign.bind():function(T){for(var N=1;N<arguments.length;N++){var O=arguments[N];for(var b in O)Object.prototype.hasOwnProperty.call(O,b)&&(T[b]=O[b])}return T},_.apply(this,arguments)}function K(T,N){T.prototype=Object.create(N.prototype),T.prototype.constructor=T,q(T,N)}function q(T,N){return q=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(b,D){return b.__proto__=D,b},q(T,N)}var U="transitionend",E=1e6,B=1e3;function Q(T){return T===null||typeof T>"u"?""+T:{}.toString.call(T).match(/\s([a-z]+)/i)[1].toLowerCase()}function J(){return{bindType:U,delegateType:U,handle:function(N){if(h.default(N.target).is(this))return N.handleObj.handler.apply(this,arguments)}}}function ot(T){var N=this,O=!1;return h.default(this).one(ct.TRANSITION_END,function(){O=!0}),setTimeout(function(){O||ct.triggerTransitionEnd(N)},T),this}function at(){h.default.fn.emulateTransitionEnd=ot,h.default.event.special[ct.TRANSITION_END]=J()}var ct={TRANSITION_END:"bsTransitionEnd",getUID:function(N){do N+=~~(Math.random()*E);while(document.getElementById(N));return N},getSelectorFromElement:function(N){var O=N.getAttribute("data-target");if(!O||O==="#"){var b=N.getAttribute("href");O=b&&b!=="#"?b.trim():""}try{return document.querySelector(O)?O:null}catch{return null}},getTransitionDurationFromElement:function(N){if(!N)return 0;var O=h.default(N).css("transition-duration"),b=h.default(N).css("transition-delay"),D=parseFloat(O),R=parseFloat(b);return!D&&!R?0:(O=O.split(",")[0],b=b.split(",")[0],(parseFloat(O)+parseFloat(b))*B)},reflow:function(N){return N.offsetHeight},triggerTransitionEnd:function(N){h.default(N).trigger(U)},supportsTransitionEnd:function(){return!!U},isElement:function(N){return(N[0]||N).nodeType},typeCheckConfig:function(N,O,b){for(var D in b)if(Object.prototype.hasOwnProperty.call(b,D)){var R=b[D],X=O[D],nt=X&&ct.isElement(X)?"element":Q(X);if(!new RegExp(R).test(nt))throw new Error(N.toUpperCase()+": "+('Option "'+D+'" provided type "'+nt+'" ')+('but expected type "'+R+'".'))}},findShadowRoot:function(N){if(!document.documentElement.attachShadow)return null;if(typeof N.getRootNode=="function"){var O=N.getRootNode();return O instanceof ShadowRoot?O:null}return N instanceof ShadowRoot?N:N.parentNode?ct.findShadowRoot(N.parentNode):null},jQueryDetection:function(){if(typeof h.default>"u")throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var N=h.default.fn.jquery.split(" ")[0].split("."),O=1,b=2,D=9,R=1,X=4;if(N[0]<b&&N[1]<D||N[0]===O&&N[1]===D&&N[2]<R||N[0]>=X)throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}};ct.jQueryDetection(),at();var Et="alert",xt="4.6.2",Vt="bs.alert",Kt="."+Vt,v=".data-api",Gt=h.default.fn[Et],W="alert",jt="fade",oe="show",ue="close"+Kt,Wt="closed"+Kt,ze="click"+Kt+v,$e='[data-dismiss="alert"]',_e=function(){function T(O){this._element=O}var N=T.prototype;return N.close=function(b){var D=this._element;b&&(D=this._getRootElement(b));var R=this._triggerCloseEvent(D);R.isDefaultPrevented()||this._removeElement(D)},N.dispose=function(){h.default.removeData(this._element,Vt),this._element=null},N._getRootElement=function(b){var D=ct.getSelectorFromElement(b),R=!1;return D&&(R=document.querySelector(D)),R||(R=h.default(b).closest("."+W)[0]),R},N._triggerCloseEvent=function(b){var D=h.default.Event(ue);return h.default(b).trigger(D),D},N._removeElement=function(b){var D=this;if(h.default(b).removeClass(oe),!h.default(b).hasClass(jt)){this._destroyElement(b);return}var R=ct.getTransitionDurationFromElement(b);h.default(b).one(ct.TRANSITION_END,function(X){return D._destroyElement(b,X)}).emulateTransitionEnd(R)},N._destroyElement=function(b){h.default(b).detach().trigger(Wt).remove()},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this),R=D.data(Vt);R||(R=new T(this),D.data(Vt,R)),b==="close"&&R[b](this)})},T._handleDismiss=function(b){return function(D){D&&D.preventDefault(),b.close(this)}},V(T,null,[{key:"VERSION",get:function(){return xt}}]),T}();h.default(document).on(ze,$e,_e._handleDismiss(new _e)),h.default.fn[Et]=_e._jQueryInterface,h.default.fn[Et].Constructor=_e,h.default.fn[Et].noConflict=function(){return h.default.fn[Et]=Gt,_e._jQueryInterface};var ve="button",Xe="4.6.2",We="bs.button",le="."+We,Xn=".data-api",ti=h.default.fn[ve],Ke="active",$n="btn",tn="focus",Wn="click"+le+Xn,gi="focus"+le+Xn+" "+("blur"+le+Xn),ge="load"+le+Xn,mi='[data-toggle^="button"]',hn='[data-toggle="buttons"]',ji='[data-toggle="button"]',fn='[data-toggle="buttons"] .btn',ei='input:not([type="hidden"])',Do=".active",we=".btn",pn=function(){function T(O){this._element=O,this.shouldAvoidTriggerChange=!1}var N=T.prototype;return N.toggle=function(){var b=!0,D=!0,R=h.default(this._element).closest(hn)[0];if(R){var X=this._element.querySelector(ei);if(X){if(X.type==="radio")if(X.checked&&this._element.classList.contains(Ke))b=!1;else{var nt=R.querySelector(Do);nt&&h.default(nt).removeClass(Ke)}b&&((X.type==="checkbox"||X.type==="radio")&&(X.checked=!this._element.classList.contains(Ke)),this.shouldAvoidTriggerChange||h.default(X).trigger("change")),X.focus(),D=!1}}this._element.hasAttribute("disabled")||this._element.classList.contains("disabled")||(D&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(Ke)),b&&h.default(this._element).toggleClass(Ke))},N.dispose=function(){h.default.removeData(this._element,We),this._element=null},T._jQueryInterface=function(b,D){return this.each(function(){var R=h.default(this),X=R.data(We);X||(X=new T(this),R.data(We,X)),X.shouldAvoidTriggerChange=D,b==="toggle"&&X[b]()})},V(T,null,[{key:"VERSION",get:function(){return Xe}}]),T}();h.default(document).on(Wn,mi,function(T){var N=T.target,O=N;if(h.default(N).hasClass($n)||(N=h.default(N).closest(we)[0]),!N||N.hasAttribute("disabled")||N.classList.contains("disabled"))T.preventDefault();else{var b=N.querySelector(ei);if(b&&(b.hasAttribute("disabled")||b.classList.contains("disabled"))){T.preventDefault();return}(O.tagName==="INPUT"||N.tagName!=="LABEL")&&pn._jQueryInterface.call(h.default(N),"toggle",O.tagName==="INPUT")}}).on(gi,mi,function(T){var N=h.default(T.target).closest(we)[0];h.default(N).toggleClass(tn,/^focus(in)?$/.test(T.type))}),h.default(window).on(ge,function(){for(var T=[].slice.call(document.querySelectorAll(fn)),N=0,O=T.length;N<O;N++){var b=T[N],D=b.querySelector(ei);D.checked||D.hasAttribute("checked")?b.classList.add(Ke):b.classList.remove(Ke)}T=[].slice.call(document.querySelectorAll(ji));for(var R=0,X=T.length;R<X;R++){var nt=T[R];nt.getAttribute("aria-pressed")==="true"?nt.classList.add(Ke):nt.classList.remove(Ke)}}),h.default.fn[ve]=pn._jQueryInterface,h.default.fn[ve].Constructor=pn,h.default.fn[ve].noConflict=function(){return h.default.fn[ve]=ti,pn._jQueryInterface};var gn="carousel",mn="4.6.2",qn="bs.carousel",Me="."+qn,oo=".data-api",bn=h.default.fn[gn],Be=37,je=39,qt=500,en=40,Cn="carousel",qe="active",ws="slide",As="carousel-item-right",vs="carousel-item-left",yn="carousel-item-next",On="carousel-item-prev",Si="pointer-event",Ii="next",ir="prev",ni="left",En="right",Bn="slide"+Me,jr="slid"+Me,Fe="keydown"+Me,bi="mouseenter"+Me,or="mouseleave"+Me,Cs="touchstart"+Me,Gn="touchmove"+Me,sn="touchend"+Me,Fr="pointerdown"+Me,ys="pointerup"+Me,xn="dragstart"+Me,Es="load"+Me+oo,ki="click"+Me+oo,Tn=".active",_i=".active.carousel-item",So=".carousel-item",xs=".carousel-item img",ia=".carousel-item-next, .carousel-item-prev",oa=".carousel-indicators",ro="[data-slide], [data-slide-to]",wr='[data-ride="carousel"]',Io={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},Vr={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},rr={TOUCH:"touch",PEN:"pen"},an=function(){function T(O,b){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(b),this._element=O,this._indicatorsElement=this._element.querySelector(oa),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=!!(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var N=T.prototype;return N.next=function(){this._isSliding||this._slide(Ii)},N.nextWhenVisible=function(){var b=h.default(this._element);!document.hidden&&b.is(":visible")&&b.css("visibility")!=="hidden"&&this.next()},N.prev=function(){this._isSliding||this._slide(ir)},N.pause=function(b){b||(this._isPaused=!0),this._element.querySelector(ia)&&(ct.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},N.cycle=function(b){b||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},N.to=function(b){var D=this;this._activeElement=this._element.querySelector(_i);var R=this._getItemIndex(this._activeElement);if(!(b>this._items.length-1||b<0)){if(this._isSliding){h.default(this._element).one(jr,function(){return D.to(b)});return}if(R===b){this.pause(),this.cycle();return}var X=b>R?Ii:ir;this._slide(X,this._items[b])}},N.dispose=function(){h.default(this._element).off(Me),h.default.removeData(this._element,qn),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},N._getConfig=function(b){return b=_({},Io,b),ct.typeCheckConfig(gn,b,Vr),b},N._handleSwipe=function(){var b=Math.abs(this.touchDeltaX);if(!(b<=en)){var D=b/this.touchDeltaX;this.touchDeltaX=0,D>0&&this.prev(),D<0&&this.next()}},N._addEventListeners=function(){var b=this;this._config.keyboard&&h.default(this._element).on(Fe,function(D){return b._keydown(D)}),this._config.pause==="hover"&&h.default(this._element).on(bi,function(D){return b.pause(D)}).on(or,function(D){return b.cycle(D)}),this._config.touch&&this._addTouchEventListeners()},N._addTouchEventListeners=function(){var b=this;if(this._touchSupported){var D=function(dt){b._pointerEvent&&rr[dt.originalEvent.pointerType.toUpperCase()]?b.touchStartX=dt.originalEvent.clientX:b._pointerEvent||(b.touchStartX=dt.originalEvent.touches[0].clientX)},R=function(dt){b.touchDeltaX=dt.originalEvent.touches&&dt.originalEvent.touches.length>1?0:dt.originalEvent.touches[0].clientX-b.touchStartX},X=function(dt){b._pointerEvent&&rr[dt.originalEvent.pointerType.toUpperCase()]&&(b.touchDeltaX=dt.originalEvent.clientX-b.touchStartX),b._handleSwipe(),b._config.pause==="hover"&&(b.pause(),b.touchTimeout&&clearTimeout(b.touchTimeout),b.touchTimeout=setTimeout(function(St){return b.cycle(St)},qt+b._config.interval))};h.default(this._element.querySelectorAll(xs)).on(xn,function(nt){return nt.preventDefault()}),this._pointerEvent?(h.default(this._element).on(Fr,function(nt){return D(nt)}),h.default(this._element).on(ys,function(nt){return X(nt)}),this._element.classList.add(Si)):(h.default(this._element).on(Cs,function(nt){return D(nt)}),h.default(this._element).on(Gn,function(nt){return R(nt)}),h.default(this._element).on(sn,function(nt){return X(nt)}))}},N._keydown=function(b){if(!/input|textarea/i.test(b.target.tagName))switch(b.which){case Be:b.preventDefault(),this.prev();break;case je:b.preventDefault(),this.next();break}},N._getItemIndex=function(b){return this._items=b&&b.parentNode?[].slice.call(b.parentNode.querySelectorAll(So)):[],this._items.indexOf(b)},N._getItemByDirection=function(b,D){var R=b===Ii,X=b===ir,nt=this._getItemIndex(D),dt=this._items.length-1,St=X&&nt===0||R&&nt===dt;if(St&&!this._config.wrap)return D;var Ft=b===ir?-1:1,Bt=(nt+Ft)%this._items.length;return Bt===-1?this._items[this._items.length-1]:this._items[Bt]},N._triggerSlideEvent=function(b,D){var R=this._getItemIndex(b),X=this._getItemIndex(this._element.querySelector(_i)),nt=h.default.Event(Bn,{relatedTarget:b,direction:D,from:X,to:R});return h.default(this._element).trigger(nt),nt},N._setActiveIndicatorElement=function(b){if(this._indicatorsElement){var D=[].slice.call(this._indicatorsElement.querySelectorAll(Tn));h.default(D).removeClass(qe);var R=this._indicatorsElement.children[this._getItemIndex(b)];R&&h.default(R).addClass(qe)}},N._updateInterval=function(){var b=this._activeElement||this._element.querySelector(_i);if(b){var D=parseInt(b.getAttribute("data-interval"),10);D?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=D):this._config.interval=this._config.defaultInterval||this._config.interval}},N._slide=function(b,D){var R=this,X=this._element.querySelector(_i),nt=this._getItemIndex(X),dt=D||X&&this._getItemByDirection(b,X),St=this._getItemIndex(dt),Ft=!!this._interval,Bt,kt,Nt;if(b===Ii?(Bt=vs,kt=yn,Nt=ni):(Bt=As,kt=On,Nt=En),dt&&h.default(dt).hasClass(qe)){this._isSliding=!1;return}var Zt=this._triggerSlideEvent(dt,Nt);if(!Zt.isDefaultPrevented()&&!(!X||!dt)){this._isSliding=!0,Ft&&this.pause(),this._setActiveIndicatorElement(dt),this._activeElement=dt;var ke=h.default.Event(jr,{relatedTarget:dt,direction:Nt,from:nt,to:St});if(h.default(this._element).hasClass(ws)){h.default(dt).addClass(kt),ct.reflow(dt),h.default(X).addClass(Bt),h.default(dt).addClass(Bt);var ui=ct.getTransitionDurationFromElement(X);h.default(X).one(ct.TRANSITION_END,function(){h.default(dt).removeClass(Bt+" "+kt).addClass(qe),h.default(X).removeClass(qe+" "+kt+" "+Bt),R._isSliding=!1,setTimeout(function(){return h.default(R._element).trigger(ke)},0)}).emulateTransitionEnd(ui)}else h.default(X).removeClass(qe),h.default(dt).addClass(qe),this._isSliding=!1,h.default(this._element).trigger(ke);Ft&&this.cycle()}},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this).data(qn),R=_({},Io,h.default(this).data());typeof b=="object"&&(R=_({},R,b));var X=typeof b=="string"?b:R.slide;if(D||(D=new T(this,R),h.default(this).data(qn,D)),typeof b=="number")D.to(b);else if(typeof X=="string"){if(typeof D[X]>"u")throw new TypeError('No method named "'+X+'"');D[X]()}else R.interval&&R.ride&&(D.pause(),D.cycle())})},T._dataApiClickHandler=function(b){var D=ct.getSelectorFromElement(this);if(D){var R=h.default(D)[0];if(!(!R||!h.default(R).hasClass(Cn))){var X=_({},h.default(R).data(),h.default(this).data()),nt=this.getAttribute("data-slide-to");nt&&(X.interval=!1),T._jQueryInterface.call(h.default(R),X),nt&&h.default(R).data(qn).to(nt),b.preventDefault()}}},V(T,null,[{key:"VERSION",get:function(){return mn}},{key:"Default",get:function(){return Io}}]),T}();h.default(document).on(ki,ro,an._dataApiClickHandler),h.default(window).on(Es,function(){for(var T=[].slice.call(document.querySelectorAll(wr)),N=0,O=T.length;N<O;N++){var b=h.default(T[N]);an._jQueryInterface.call(b,b.data())}}),h.default.fn[gn]=an._jQueryInterface,h.default.fn[gn].Constructor=an,h.default.fn[gn].noConflict=function(){return h.default.fn[gn]=bn,an._jQueryInterface};var nn="collapse",Mo="4.6.2",wi="bs.collapse",Mi="."+wi,Hr=".data-api",Fi=h.default.fn[nn],kn="show",Ai="collapse",No="collapsing",Ar="collapsed",Oo="width",ra="height",Ur="show"+Mi,sa="shown"+Mi,Ni="hide"+Mi,vi="hidden"+Mi,Vi="click"+Mi+Hr,vr=".show, .collapsing",Hi='[data-toggle="collapse"]',Ye={toggle:!0,parent:""},so={toggle:"boolean",parent:"(string|element)"},Dn=function(){function T(O,b){this._isTransitioning=!1,this._element=O,this._config=this._getConfig(b),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+O.id+'"],'+('[data-toggle="collapse"][data-target="#'+O.id+'"]')));for(var D=[].slice.call(document.querySelectorAll(Hi)),R=0,X=D.length;R<X;R++){var nt=D[R],dt=ct.getSelectorFromElement(nt),St=[].slice.call(document.querySelectorAll(dt)).filter(function(Ft){return Ft===O});dt!==null&&St.length>0&&(this._selector=dt,this._triggerArray.push(nt))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var N=T.prototype;return N.toggle=function(){h.default(this._element).hasClass(kn)?this.hide():this.show()},N.show=function(){var b=this;if(!(this._isTransitioning||h.default(this._element).hasClass(kn))){var D,R;if(this._parent&&(D=[].slice.call(this._parent.querySelectorAll(vr)).filter(function(kt){return typeof b._config.parent=="string"?kt.getAttribute("data-parent")===b._config.parent:kt.classList.contains(Ai)}),D.length===0&&(D=null)),!(D&&(R=h.default(D).not(this._selector).data(wi),R&&R._isTransitioning))){var X=h.default.Event(Ur);if(h.default(this._element).trigger(X),!X.isDefaultPrevented()){D&&(T._jQueryInterface.call(h.default(D).not(this._selector),"hide"),R||h.default(D).data(wi,null));var nt=this._getDimension();h.default(this._element).removeClass(Ai).addClass(No),this._element.style[nt]=0,this._triggerArray.length&&h.default(this._triggerArray).removeClass(Ar).attr("aria-expanded",!0),this.setTransitioning(!0);var dt=function(){h.default(b._element).removeClass(No).addClass(Ai+" "+kn),b._element.style[nt]="",b.setTransitioning(!1),h.default(b._element).trigger(sa)},St=nt[0].toUpperCase()+nt.slice(1),Ft="scroll"+St,Bt=ct.getTransitionDurationFromElement(this._element);h.default(this._element).one(ct.TRANSITION_END,dt).emulateTransitionEnd(Bt),this._element.style[nt]=this._element[Ft]+"px"}}}},N.hide=function(){var b=this;if(!(this._isTransitioning||!h.default(this._element).hasClass(kn))){var D=h.default.Event(Ni);if(h.default(this._element).trigger(D),!D.isDefaultPrevented()){var R=this._getDimension();this._element.style[R]=this._element.getBoundingClientRect()[R]+"px",ct.reflow(this._element),h.default(this._element).addClass(No).removeClass(Ai+" "+kn);var X=this._triggerArray.length;if(X>0)for(var nt=0;nt<X;nt++){var dt=this._triggerArray[nt],St=ct.getSelectorFromElement(dt);if(St!==null){var Ft=h.default([].slice.call(document.querySelectorAll(St)));Ft.hasClass(kn)||h.default(dt).addClass(Ar).attr("aria-expanded",!1)}}this.setTransitioning(!0);var Bt=function(){b.setTransitioning(!1),h.default(b._element).removeClass(No).addClass(Ai).trigger(vi)};this._element.style[R]="";var kt=ct.getTransitionDurationFromElement(this._element);h.default(this._element).one(ct.TRANSITION_END,Bt).emulateTransitionEnd(kt)}}},N.setTransitioning=function(b){this._isTransitioning=b},N.dispose=function(){h.default.removeData(this._element,wi),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},N._getConfig=function(b){return b=_({},Ye,b),b.toggle=!!b.toggle,ct.typeCheckConfig(nn,b,so),b},N._getDimension=function(){var b=h.default(this._element).hasClass(Oo);return b?Oo:ra},N._getParent=function(){var b=this,D;ct.isElement(this._config.parent)?(D=this._config.parent,typeof this._config.parent.jquery<"u"&&(D=this._config.parent[0])):D=document.querySelector(this._config.parent);var R='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',X=[].slice.call(D.querySelectorAll(R));return h.default(X).each(function(nt,dt){b._addAriaAndCollapsedClass(T._getTargetFromElement(dt),[dt])}),D},N._addAriaAndCollapsedClass=function(b,D){var R=h.default(b).hasClass(kn);D.length&&h.default(D).toggleClass(Ar,!R).attr("aria-expanded",R)},T._getTargetFromElement=function(b){var D=ct.getSelectorFromElement(b);return D?document.querySelector(D):null},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this),R=D.data(wi),X=_({},Ye,D.data(),typeof b=="object"&&b?b:{});if(!R&&X.toggle&&typeof b=="string"&&/show|hide/.test(b)&&(X.toggle=!1),R||(R=new T(this,X),D.data(wi,R)),typeof b=="string"){if(typeof R[b]>"u")throw new TypeError('No method named "'+b+'"');R[b]()}})},V(T,null,[{key:"VERSION",get:function(){return Mo}},{key:"Default",get:function(){return Ye}}]),T}();h.default(document).on(Vi,Hi,function(T){T.currentTarget.tagName==="A"&&T.preventDefault();var N=h.default(this),O=ct.getSelectorFromElement(this),b=[].slice.call(document.querySelectorAll(O));h.default(b).each(function(){var D=h.default(this),R=D.data(wi),X=R?"toggle":N.data();Dn._jQueryInterface.call(D,X)})}),h.default.fn[nn]=Dn._jQueryInterface,h.default.fn[nn].Constructor=Dn,h.default.fn[nn].noConflict=function(){return h.default.fn[nn]=Fi,Dn._jQueryInterface};/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */var Ln=typeof window<"u"&&typeof document<"u"&&typeof navigator<"u",Bo=function(){for(var T=["Edge","Trident","Firefox"],N=0;N<T.length;N+=1)if(Ln&&navigator.userAgent.indexOf(T[N])>=0)return 1;return 0}();function ii(T){var N=!1;return function(){N||(N=!0,window.Promise.resolve().then(function(){N=!1,T()}))}}function sr(T){var N=!1;return function(){N||(N=!0,setTimeout(function(){N=!1,T()},Bo))}}var Cr=Ln&&window.Promise,yr=Cr?ii:sr;function ao(T){var N={};return T&&N.toString.call(T)==="[object Function]"}function Ui(T,N){if(T.nodeType!==1)return[];var O=T.ownerDocument.defaultView,b=O.getComputedStyle(T,null);return N?b[N]:b}function cn(T){return T.nodeName==="HTML"?T:T.parentNode||T.host}function Lo(T){if(!T)return document.body;switch(T.nodeName){case"HTML":case"BODY":return T.ownerDocument.body;case"#document":return T.body}var N=Ui(T),O=N.overflow,b=N.overflowX,D=N.overflowY;return/(auto|scroll|overlay)/.test(O+D+b)?T:Lo(cn(T))}function Ci(T){return T&&T.referenceNode?T.referenceNode:T}var oi=Ln&&!!(window.MSInputMethodContext&&document.documentMode),Po=Ln&&/MSIE 10/.test(navigator.userAgent);function Kn(T){return T===11?oi:T===10?Po:oi||Po}function Qe(T){if(!T)return document.documentElement;for(var N=Kn(10)?document.body:null,O=T.offsetParent||null;O===N&&T.nextElementSibling;)O=(T=T.nextElementSibling).offsetParent;var b=O&&O.nodeName;return!b||b==="BODY"||b==="HTML"?T?T.ownerDocument.documentElement:document.documentElement:["TH","TD","TABLE"].indexOf(O.nodeName)!==-1&&Ui(O,"position")==="static"?Qe(O):O}function yi(T){var N=T.nodeName;return N==="BODY"?!1:N==="HTML"||Qe(T.firstElementChild)===T}function $i(T){return T.parentNode!==null?$i(T.parentNode):T}function ri(T,N){if(!T||!T.nodeType||!N||!N.nodeType)return document.documentElement;var O=T.compareDocumentPosition(N)&Node.DOCUMENT_POSITION_FOLLOWING,b=O?T:N,D=O?N:T,R=document.createRange();R.setStart(b,0),R.setEnd(D,0);var X=R.commonAncestorContainer;if(T!==X&&N!==X||b.contains(D))return yi(X)?X:Qe(X);var nt=$i(T);return nt.host?ri(nt.host,N):ri(T,$i(N).host)}function Ei(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"top",O=N==="top"?"scrollTop":"scrollLeft",b=T.nodeName;if(b==="BODY"||b==="HTML"){var D=T.ownerDocument.documentElement,R=T.ownerDocument.scrollingElement||D;return R[O]}return T[O]}function $r(T,N){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,b=Ei(N,"top"),D=Ei(N,"left"),R=O?-1:1;return T.top+=b*R,T.bottom+=b*R,T.left+=D*R,T.right+=D*R,T}function co(T,N){var O=N==="x"?"Left":"Top",b=O==="Left"?"Right":"Bottom";return parseFloat(T["border"+O+"Width"])+parseFloat(T["border"+b+"Width"])}function Wi(T,N,O,b){return Math.max(N["offset"+T],N["scroll"+T],O["client"+T],O["offset"+T],O["scroll"+T],Kn(10)?parseInt(O["offset"+T])+parseInt(b["margin"+(T==="Height"?"Top":"Left")])+parseInt(b["margin"+(T==="Height"?"Bottom":"Right")]):0)}function Ts(T){var N=T.body,O=T.documentElement,b=Kn(10)&&getComputedStyle(O);return{height:Wi("Height",N,O,b),width:Wi("Width",N,O,b)}}var Wr=function(T,N){if(!(T instanceof N))throw new TypeError("Cannot call a class as a function")},Ds=function(){function T(N,O){for(var b=0;b<O.length;b++){var D=O[b];D.enumerable=D.enumerable||!1,D.configurable=!0,"value"in D&&(D.writable=!0),Object.defineProperty(N,D.key,D)}}return function(N,O,b){return O&&T(N.prototype,O),b&&T(N,b),N}}(),Ro=function(T,N,O){return N in T?Object.defineProperty(T,N,{value:O,enumerable:!0,configurable:!0,writable:!0}):T[N]=O,T},_n=Object.assign||function(T){for(var N=1;N<arguments.length;N++){var O=arguments[N];for(var b in O)Object.prototype.hasOwnProperty.call(O,b)&&(T[b]=O[b])}return T};function si(T){return _n({},T,{right:T.left+T.width,bottom:T.top+T.height})}function qr(T){var N={};try{if(Kn(10)){N=T.getBoundingClientRect();var O=Ei(T,"top"),b=Ei(T,"left");N.top+=O,N.left+=b,N.bottom+=O,N.right+=b}else N=T.getBoundingClientRect()}catch{}var D={left:N.left,top:N.top,width:N.right-N.left,height:N.bottom-N.top},R=T.nodeName==="HTML"?Ts(T.ownerDocument):{},X=R.width||T.clientWidth||D.width,nt=R.height||T.clientHeight||D.height,dt=T.offsetWidth-X,St=T.offsetHeight-nt;if(dt||St){var Ft=Ui(T);dt-=co(Ft,"x"),St-=co(Ft,"y"),D.width-=dt,D.height-=St}return si(D)}function Er(T,N){var O=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,b=Kn(10),D=N.nodeName==="HTML",R=qr(T),X=qr(N),nt=Lo(T),dt=Ui(N),St=parseFloat(dt.borderTopWidth),Ft=parseFloat(dt.borderLeftWidth);O&&D&&(X.top=Math.max(X.top,0),X.left=Math.max(X.left,0));var Bt=si({top:R.top-X.top-St,left:R.left-X.left-Ft,width:R.width,height:R.height});if(Bt.marginTop=0,Bt.marginLeft=0,!b&&D){var kt=parseFloat(dt.marginTop),Nt=parseFloat(dt.marginLeft);Bt.top-=St-kt,Bt.bottom-=St-kt,Bt.left-=Ft-Nt,Bt.right-=Ft-Nt,Bt.marginTop=kt,Bt.marginLeft=Nt}return(b&&!O?N.contains(nt):N===nt&&nt.nodeName!=="BODY")&&(Bt=$r(Bt,N)),Bt}function Ss(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=T.ownerDocument.documentElement,b=Er(T,O),D=Math.max(O.clientWidth,window.innerWidth||0),R=Math.max(O.clientHeight,window.innerHeight||0),X=N?0:Ei(O),nt=N?0:Ei(O,"left"),dt={top:X-b.top+b.marginTop,left:nt-b.left+b.marginLeft,width:D,height:R};return si(dt)}function lo(T){var N=T.nodeName;if(N==="BODY"||N==="HTML")return!1;if(Ui(T,"position")==="fixed")return!0;var O=cn(T);return O?lo(O):!1}function xi(T){if(!T||!T.parentElement||Kn())return document.documentElement;for(var N=T.parentElement;N&&Ui(N,"transform")==="none";)N=N.parentElement;return N||document.documentElement}function ar(T,N,O,b){var D=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!1,R={top:0,left:0},X=D?xi(T):ri(T,Ci(N));if(b==="viewport")R=Ss(X,D);else{var nt=void 0;b==="scrollParent"?(nt=Lo(cn(N)),nt.nodeName==="BODY"&&(nt=T.ownerDocument.documentElement)):b==="window"?nt=T.ownerDocument.documentElement:nt=b;var dt=Er(nt,X,D);if(nt.nodeName==="HTML"&&!lo(X)){var St=Ts(T.ownerDocument),Ft=St.height,Bt=St.width;R.top+=dt.top-dt.marginTop,R.bottom=Ft+dt.top,R.left+=dt.left-dt.marginLeft,R.right=Bt+dt.left}else R=dt}O=O||0;var kt=typeof O=="number";return R.left+=kt?O:O.left||0,R.top+=kt?O:O.top||0,R.right-=kt?O:O.right||0,R.bottom-=kt?O:O.bottom||0,R}function Oi(T){var N=T.width,O=T.height;return N*O}function zo(T,N,O,b,D){var R=arguments.length>5&&arguments[5]!==void 0?arguments[5]:0;if(T.indexOf("auto")===-1)return T;var X=ar(O,b,R,D),nt={top:{width:X.width,height:N.top-X.top},right:{width:X.right-N.right,height:X.height},bottom:{width:X.width,height:X.bottom-N.bottom},left:{width:N.left-X.left,height:X.height}},dt=Object.keys(nt).map(function(kt){return _n({key:kt},nt[kt],{area:Oi(nt[kt])})}).sort(function(kt,Nt){return Nt.area-kt.area}),St=dt.filter(function(kt){var Nt=kt.width,Zt=kt.height;return Nt>=O.clientWidth&&Zt>=O.clientHeight}),Ft=St.length>0?St[0].key:dt[0].key,Bt=T.split("-")[1];return Ft+(Bt?"-"+Bt:"")}function Ee(T,N,O){var b=arguments.length>3&&arguments[3]!==void 0?arguments[3]:null,D=b?xi(N):ri(N,Ci(O));return Er(O,D,b)}function xr(T){var N=T.ownerDocument.defaultView,O=N.getComputedStyle(T),b=parseFloat(O.marginTop||0)+parseFloat(O.marginBottom||0),D=parseFloat(O.marginLeft||0)+parseFloat(O.marginRight||0),R={width:T.offsetWidth+D,height:T.offsetHeight+b};return R}function Bi(T){var N={left:"right",right:"left",bottom:"top",top:"bottom"};return T.replace(/left|right|bottom|top/g,function(O){return N[O]})}function uo(T,N,O){O=O.split("-")[0];var b=xr(T),D={width:b.width,height:b.height},R=["right","left"].indexOf(O)!==-1,X=R?"top":"left",nt=R?"left":"top",dt=R?"height":"width",St=R?"width":"height";return D[X]=N[X]+N[dt]/2-b[dt]/2,O===nt?D[nt]=N[nt]-b[St]:D[nt]=N[Bi(nt)],D}function ai(T,N){return Array.prototype.find?T.find(N):T.filter(N)[0]}function Gr(T,N,O){if(Array.prototype.findIndex)return T.findIndex(function(D){return D[N]===O});var b=ai(T,function(D){return D[N]===O});return T.indexOf(b)}function wn(T,N,O){var b=O===void 0?T:T.slice(0,Gr(T,"name",O));return b.forEach(function(D){D.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var R=D.function||D.fn;D.enabled&&ao(R)&&(N.offsets.popper=si(N.offsets.popper),N.offsets.reference=si(N.offsets.reference),N=R(N,D))}),N}function ho(){if(!this.state.isDestroyed){var T={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};T.offsets.reference=Ee(this.state,this.popper,this.reference,this.options.positionFixed),T.placement=zo(this.options.placement,T.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),T.originalPlacement=T.placement,T.positionFixed=this.options.positionFixed,T.offsets.popper=uo(this.popper,T.offsets.reference,T.placement),T.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",T=wn(this.modifiers,T),this.state.isCreated?this.options.onUpdate(T):(this.state.isCreated=!0,this.options.onCreate(T))}}function Li(T,N){return T.some(function(O){var b=O.name,D=O.enabled;return D&&b===N})}function jo(T){for(var N=[!1,"ms","Webkit","Moz","O"],O=T.charAt(0).toUpperCase()+T.slice(1),b=0;b<N.length;b++){var D=N[b],R=D?""+D+O:T;if(typeof document.body.style[R]<"u")return R}return null}function cr(){return this.state.isDestroyed=!0,Li(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[jo("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function fo(T){var N=T.ownerDocument;return N?N.defaultView:window}function qi(T,N,O,b){var D=T.nodeName==="BODY",R=D?T.ownerDocument.defaultView:T;R.addEventListener(N,O,{passive:!0}),D||qi(Lo(R.parentNode),N,O,b),b.push(R)}function Is(T,N,O,b){O.updateBound=b,fo(T).addEventListener("resize",O.updateBound,{passive:!0});var D=Lo(T);return qi(D,"scroll",O.updateBound,O.scrollParents),O.scrollElement=D,O.eventsEnabled=!0,O}function u(){this.state.eventsEnabled||(this.state=Is(this.reference,this.options,this.state,this.scheduleUpdate))}function g(T,N){return fo(T).removeEventListener("resize",N.updateBound),N.scrollParents.forEach(function(O){O.removeEventListener("scroll",N.updateBound)}),N.updateBound=null,N.scrollParents=[],N.scrollElement=null,N.eventsEnabled=!1,N}function k(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=g(this.reference,this.state))}function C(T){return T!==""&&!isNaN(parseFloat(T))&&isFinite(T)}function I(T,N){Object.keys(N).forEach(function(O){var b="";["width","height","top","right","bottom","left"].indexOf(O)!==-1&&C(N[O])&&(b="px"),T.style[O]=N[O]+b})}function M(T,N){Object.keys(N).forEach(function(O){var b=N[O];b!==!1?T.setAttribute(O,N[O]):T.removeAttribute(O)})}function z(T){return I(T.instance.popper,T.styles),M(T.instance.popper,T.attributes),T.arrowElement&&Object.keys(T.arrowStyles).length&&I(T.arrowElement,T.arrowStyles),T}function tt(T,N,O,b,D){var R=Ee(D,N,T,O.positionFixed),X=zo(O.placement,R,N,T,O.modifiers.flip.boundariesElement,O.modifiers.flip.padding);return N.setAttribute("x-placement",X),I(N,{position:O.positionFixed?"fixed":"absolute"}),O}function Z(T,N){var O=T.offsets,b=O.popper,D=O.reference,R=Math.round,X=Math.floor,nt=function(hi){return hi},dt=R(D.width),St=R(b.width),Ft=["left","right"].indexOf(T.placement)!==-1,Bt=T.placement.indexOf("-")!==-1,kt=dt%2===St%2,Nt=dt%2===1&&St%2===1,Zt=N?Ft||Bt||kt?R:X:nt,ke=N?R:nt;return{left:Zt(Nt&&!Bt&&N?b.left-1:b.left),top:ke(b.top),bottom:ke(b.bottom),right:Zt(b.right)}}var st=Ln&&/Firefox/i.test(navigator.userAgent);function _t(T,N){var O=N.x,b=N.y,D=T.offsets.popper,R=ai(T.instance.modifiers,function(ur){return ur.name==="applyStyle"}).gpuAcceleration;R!==void 0&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var X=R!==void 0?R:N.gpuAcceleration,nt=Qe(T.instance.popper),dt=qr(nt),St={position:D.position},Ft=Z(T,window.devicePixelRatio<2||!st),Bt=O==="bottom"?"top":"bottom",kt=b==="right"?"left":"right",Nt=jo("transform"),Zt=void 0,ke=void 0;if(Bt==="bottom"?nt.nodeName==="HTML"?ke=-nt.clientHeight+Ft.bottom:ke=-dt.height+Ft.bottom:ke=Ft.top,kt==="right"?nt.nodeName==="HTML"?Zt=-nt.clientWidth+Ft.right:Zt=-dt.width+Ft.right:Zt=Ft.left,X&&Nt)St[Nt]="translate3d("+Zt+"px, "+ke+"px, 0)",St[Bt]=0,St[kt]=0,St.willChange="transform";else{var ui=Bt==="bottom"?-1:1,hi=kt==="right"?-1:1;St[Bt]=ke*ui,St[kt]=Zt*hi,St.willChange=Bt+", "+kt}var Vn={"x-placement":T.placement};return T.attributes=_n({},Vn,T.attributes),T.styles=_n({},St,T.styles),T.arrowStyles=_n({},T.offsets.arrow,T.arrowStyles),T}function At(T,N,O){var b=ai(T,function(nt){var dt=nt.name;return dt===N}),D=!!b&&T.some(function(nt){return nt.name===O&&nt.enabled&&nt.order<b.order});if(!D){var R="`"+N+"`",X="`"+O+"`";console.warn(X+" modifier is required by "+R+" modifier in order to work, be sure to include it before "+R+"!")}return D}function gt(T,N){var O;if(!At(T.instance.modifiers,"arrow","keepTogether"))return T;var b=N.element;if(typeof b=="string"){if(b=T.instance.popper.querySelector(b),!b)return T}else if(!T.instance.popper.contains(b))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),T;var D=T.placement.split("-")[0],R=T.offsets,X=R.popper,nt=R.reference,dt=["left","right"].indexOf(D)!==-1,St=dt?"height":"width",Ft=dt?"Top":"Left",Bt=Ft.toLowerCase(),kt=dt?"left":"top",Nt=dt?"bottom":"right",Zt=xr(b)[St];nt[Nt]-Zt<X[Bt]&&(T.offsets.popper[Bt]-=X[Bt]-(nt[Nt]-Zt)),nt[Bt]+Zt>X[Nt]&&(T.offsets.popper[Bt]+=nt[Bt]+Zt-X[Nt]),T.offsets.popper=si(T.offsets.popper);var ke=nt[Bt]+nt[St]/2-Zt/2,ui=Ui(T.instance.popper),hi=parseFloat(ui["margin"+Ft]),Vn=parseFloat(ui["border"+Ft+"Width"]),ur=ke-T.offsets.popper[Bt]-hi-Vn;return ur=Math.max(Math.min(X[St]-Zt,ur),0),T.arrowElement=b,T.offsets.arrow=(O={},Ro(O,Bt,Math.round(ur)),Ro(O,kt,""),O),T}function Mt(T){return T==="end"?"start":T==="start"?"end":T}var Xt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],se=Xt.slice(3);function te(T){var N=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,O=se.indexOf(T),b=se.slice(O+1).concat(se.slice(0,O));return N?b.reverse():b}var Ve={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function Ue(T,N){if(Li(T.instance.modifiers,"inner")||T.flipped&&T.placement===T.originalPlacement)return T;var O=ar(T.instance.popper,T.instance.reference,N.padding,N.boundariesElement,T.positionFixed),b=T.placement.split("-")[0],D=Bi(b),R=T.placement.split("-")[1]||"",X=[];switch(N.behavior){case Ve.FLIP:X=[b,D];break;case Ve.CLOCKWISE:X=te(b);break;case Ve.COUNTERCLOCKWISE:X=te(b,!0);break;default:X=N.behavior}return X.forEach(function(nt,dt){if(b!==nt||X.length===dt+1)return T;b=T.placement.split("-")[0],D=Bi(b);var St=T.offsets.popper,Ft=T.offsets.reference,Bt=Math.floor,kt=b==="left"&&Bt(St.right)>Bt(Ft.left)||b==="right"&&Bt(St.left)<Bt(Ft.right)||b==="top"&&Bt(St.bottom)>Bt(Ft.top)||b==="bottom"&&Bt(St.top)<Bt(Ft.bottom),Nt=Bt(St.left)<Bt(O.left),Zt=Bt(St.right)>Bt(O.right),ke=Bt(St.top)<Bt(O.top),ui=Bt(St.bottom)>Bt(O.bottom),hi=b==="left"&&Nt||b==="right"&&Zt||b==="top"&&ke||b==="bottom"&&ui,Vn=["top","bottom"].indexOf(b)!==-1,ur=!!N.flipVariations&&(Vn&&R==="start"&&Nt||Vn&&R==="end"&&Zt||!Vn&&R==="start"&&ke||!Vn&&R==="end"&&ui),ba=!!N.flipVariationsByContent&&(Vn&&R==="start"&&Zt||Vn&&R==="end"&&Nt||!Vn&&R==="start"&&ui||!Vn&&R==="end"&&ke),rs=ur||ba;(kt||hi||rs)&&(T.flipped=!0,(kt||hi)&&(b=X[dt+1]),rs&&(R=Mt(R)),T.placement=b+(R?"-"+R:""),T.offsets.popper=_n({},T.offsets.popper,uo(T.instance.popper,T.offsets.reference,T.placement)),T=wn(T.instance.modifiers,T,"flip"))}),T}function on(T){var N=T.offsets,O=N.popper,b=N.reference,D=T.placement.split("-")[0],R=Math.floor,X=["top","bottom"].indexOf(D)!==-1,nt=X?"right":"bottom",dt=X?"left":"top",St=X?"width":"height";return O[nt]<R(b[dt])&&(T.offsets.popper[dt]=R(b[dt])-O[St]),O[dt]>R(b[nt])&&(T.offsets.popper[dt]=R(b[nt])),T}function ln(T,N,O,b){var D=T.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),R=+D[1],X=D[2];if(!R)return T;if(X.indexOf("%")===0){var nt=void 0;switch(X){case"%p":nt=O;break;case"%":case"%r":default:nt=b}var dt=si(nt);return dt[N]/100*R}else if(X==="vh"||X==="vw"){var St=void 0;return X==="vh"?St=Math.max(document.documentElement.clientHeight,window.innerHeight||0):St=Math.max(document.documentElement.clientWidth,window.innerWidth||0),St/100*R}else return R}function he(T,N,O,b){var D=[0,0],R=["right","left"].indexOf(b)!==-1,X=T.split(/(\+|\-)/).map(function(Ft){return Ft.trim()}),nt=X.indexOf(ai(X,function(Ft){return Ft.search(/,|\s/)!==-1}));X[nt]&&X[nt].indexOf(",")===-1&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var dt=/\s*,\s*|\s+/,St=nt!==-1?[X.slice(0,nt).concat([X[nt].split(dt)[0]]),[X[nt].split(dt)[1]].concat(X.slice(nt+1))]:[X];return St=St.map(function(Ft,Bt){var kt=(Bt===1?!R:R)?"height":"width",Nt=!1;return Ft.reduce(function(Zt,ke){return Zt[Zt.length-1]===""&&["+","-"].indexOf(ke)!==-1?(Zt[Zt.length-1]=ke,Nt=!0,Zt):Nt?(Zt[Zt.length-1]+=ke,Nt=!1,Zt):Zt.concat(ke)},[]).map(function(Zt){return ln(Zt,kt,N,O)})}),St.forEach(function(Ft,Bt){Ft.forEach(function(kt,Nt){C(kt)&&(D[Bt]+=kt*(Ft[Nt-1]==="-"?-1:1))})}),D}function Gi(T,N){var O=N.offset,b=T.placement,D=T.offsets,R=D.popper,X=D.reference,nt=b.split("-")[0],dt=void 0;return C(+O)?dt=[+O,0]:dt=he(O,R,X,nt),nt==="left"?(R.top+=dt[0],R.left-=dt[1]):nt==="right"?(R.top+=dt[0],R.left+=dt[1]):nt==="top"?(R.left+=dt[0],R.top-=dt[1]):nt==="bottom"&&(R.left+=dt[0],R.top+=dt[1]),T.popper=R,T}function me(T,N){var O=N.boundariesElement||Qe(T.instance.popper);T.instance.reference===O&&(O=Qe(O));var b=jo("transform"),D=T.instance.popper.style,R=D.top,X=D.left,nt=D[b];D.top="",D.left="",D[b]="";var dt=ar(T.instance.popper,T.instance.reference,N.padding,O,T.positionFixed);D.top=R,D.left=X,D[b]=nt,N.boundaries=dt;var St=N.priority,Ft=T.offsets.popper,Bt={primary:function(Nt){var Zt=Ft[Nt];return Ft[Nt]<dt[Nt]&&!N.escapeWithReference&&(Zt=Math.max(Ft[Nt],dt[Nt])),Ro({},Nt,Zt)},secondary:function(Nt){var Zt=Nt==="right"?"left":"top",ke=Ft[Zt];return Ft[Nt]>dt[Nt]&&!N.escapeWithReference&&(ke=Math.min(Ft[Zt],dt[Nt]-(Nt==="right"?Ft.width:Ft.height))),Ro({},Zt,ke)}};return St.forEach(function(kt){var Nt=["left","top"].indexOf(kt)!==-1?"primary":"secondary";Ft=_n({},Ft,Bt[Nt](kt))}),T.offsets.popper=Ft,T}function Le(T){var N=T.placement,O=N.split("-")[0],b=N.split("-")[1];if(b){var D=T.offsets,R=D.reference,X=D.popper,nt=["bottom","top"].indexOf(O)!==-1,dt=nt?"left":"top",St=nt?"width":"height",Ft={start:Ro({},dt,R[dt]),end:Ro({},dt,R[dt]+R[St]-X[St])};T.offsets.popper=_n({},X,Ft[b])}return T}function po(T){if(!At(T.instance.modifiers,"hide","preventOverflow"))return T;var N=T.offsets.reference,O=ai(T.instance.modifiers,function(b){return b.name==="preventOverflow"}).boundaries;if(N.bottom<O.top||N.left>O.right||N.top>O.bottom||N.right<O.left){if(T.hide===!0)return T;T.hide=!0,T.attributes["x-out-of-boundaries"]=""}else{if(T.hide===!1)return T;T.hide=!1,T.attributes["x-out-of-boundaries"]=!1}return T}function go(T){var N=T.placement,O=N.split("-")[0],b=T.offsets,D=b.popper,R=b.reference,X=["left","right"].indexOf(O)!==-1,nt=["top","left"].indexOf(O)===-1;return D[X?"left":"top"]=R[O]-(nt?D[X?"width":"height"]:0),T.placement=Bi(N),T.offsets.popper=si(D),T}var ci={shift:{order:100,enabled:!0,fn:Le},offset:{order:200,enabled:!0,fn:Gi,offset:0},preventOverflow:{order:300,enabled:!0,fn:me,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:on},arrow:{order:500,enabled:!0,fn:gt,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:Ue,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:go},hide:{order:800,enabled:!0,fn:po},computeStyle:{order:850,enabled:!0,fn:_t,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:z,onLoad:tt,gpuAcceleration:void 0}},li={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:ci},Ge=function(){function T(N,O){var b=this,D=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};Wr(this,T),this.scheduleUpdate=function(){return requestAnimationFrame(b.update)},this.update=yr(this.update.bind(this)),this.options=_n({},T.Defaults,D),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=N&&N.jquery?N[0]:N,this.popper=O&&O.jquery?O[0]:O,this.options.modifiers={},Object.keys(_n({},T.Defaults.modifiers,D.modifiers)).forEach(function(X){b.options.modifiers[X]=_n({},T.Defaults.modifiers[X]||{},D.modifiers?D.modifiers[X]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(X){return _n({name:X},b.options.modifiers[X])}).sort(function(X,nt){return X.order-nt.order}),this.modifiers.forEach(function(X){X.enabled&&ao(X.onLoad)&&X.onLoad(b.reference,b.popper,b.options,X,b.state)}),this.update();var R=this.options.eventsEnabled;R&&this.enableEventListeners(),this.state.eventsEnabled=R}return Ds(T,[{key:"update",value:function(){return ho.call(this)}},{key:"destroy",value:function(){return cr.call(this)}},{key:"enableEventListeners",value:function(){return u.call(this)}},{key:"disableEventListeners",value:function(){return k.call(this)}}]),T}();Ge.Utils=(typeof window<"u"?window:Qs).PopperUtils,Ge.placements=Xt,Ge.Defaults=li;var Pn=Ge,rn="dropdown",Rn="4.6.2",Ki="bs.dropdown",Ze="."+Ki,Yn=".data-api",Ms=h.default.fn[rn],lr=27,Ns=32,Ce=9,Fo=38,zn=40,Qn=3,dr=new RegExp(Fo+"|"+zn+"|"+lr),Vo="disabled",jn="show",di="dropup",Ho="dropright",Yi="dropleft",Uo="dropdown-menu-right",Pi="position-static",mo="hide"+Ze,$o="hidden"+Ze,Kr="show"+Ze,Yr="shown"+Ze,Tr="click"+Ze,Ti="click"+Ze+Yn,Qi="keydown"+Ze+Yn,Dr="keyup"+Ze+Yn,Zi='[data-toggle="dropdown"]',Qr=".dropdown form",Y=".dropdown-menu",rt=".navbar-nav",ht=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",mt="top-start",vt="top-end",Lt="bottom-start",Ut="bottom-end",Pt="right-start",$t="left-start",ae={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic",popperConfig:null},Yt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string",popperConfig:"(null|object)"},Qt=function(){function T(O,b){this._element=O,this._popper=null,this._config=this._getConfig(b),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var N=T.prototype;return N.toggle=function(){if(!(this._element.disabled||h.default(this._element).hasClass(Vo))){var b=h.default(this._menu).hasClass(jn);T._clearMenus(),!b&&this.show(!0)}},N.show=function(b){if(b===void 0&&(b=!1),!(this._element.disabled||h.default(this._element).hasClass(Vo)||h.default(this._menu).hasClass(jn))){var D={relatedTarget:this._element},R=h.default.Event(Kr,D),X=T._getParentFromElement(this._element);if(h.default(X).trigger(R),!R.isDefaultPrevented()){if(!this._inNavbar&&b){if(typeof Pn>"u")throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");var nt=this._element;this._config.reference==="parent"?nt=X:ct.isElement(this._config.reference)&&(nt=this._config.reference,typeof this._config.reference.jquery<"u"&&(nt=this._config.reference[0])),this._config.boundary!=="scrollParent"&&h.default(X).addClass(Pi),this._popper=new Pn(nt,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&h.default(X).closest(rt).length===0&&h.default(document.body).children().on("mouseover",null,h.default.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),h.default(this._menu).toggleClass(jn),h.default(X).toggleClass(jn).trigger(h.default.Event(Yr,D))}}},N.hide=function(){if(!(this._element.disabled||h.default(this._element).hasClass(Vo)||!h.default(this._menu).hasClass(jn))){var b={relatedTarget:this._element},D=h.default.Event(mo,b),R=T._getParentFromElement(this._element);h.default(R).trigger(D),!D.isDefaultPrevented()&&(this._popper&&this._popper.destroy(),h.default(this._menu).toggleClass(jn),h.default(R).toggleClass(jn).trigger(h.default.Event($o,b)))}},N.dispose=function(){h.default.removeData(this._element,Ki),h.default(this._element).off(Ze),this._element=null,this._menu=null,this._popper!==null&&(this._popper.destroy(),this._popper=null)},N.update=function(){this._inNavbar=this._detectNavbar(),this._popper!==null&&this._popper.scheduleUpdate()},N._addEventListeners=function(){var b=this;h.default(this._element).on(Tr,function(D){D.preventDefault(),D.stopPropagation(),b.toggle()})},N._getConfig=function(b){return b=_({},this.constructor.Default,h.default(this._element).data(),b),ct.typeCheckConfig(rn,b,this.constructor.DefaultType),b},N._getMenuElement=function(){if(!this._menu){var b=T._getParentFromElement(this._element);b&&(this._menu=b.querySelector(Y))}return this._menu},N._getPlacement=function(){var b=h.default(this._element.parentNode),D=Lt;return b.hasClass(di)?D=h.default(this._menu).hasClass(Uo)?vt:mt:b.hasClass(Ho)?D=Pt:b.hasClass(Yi)?D=$t:h.default(this._menu).hasClass(Uo)&&(D=Ut),D},N._detectNavbar=function(){return h.default(this._element).closest(".navbar").length>0},N._getOffset=function(){var b=this,D={};return typeof this._config.offset=="function"?D.fn=function(R){return R.offsets=_({},R.offsets,b._config.offset(R.offsets,b._element)),R}:D.offset=this._config.offset,D},N._getPopperConfig=function(){var b={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return this._config.display==="static"&&(b.modifiers.applyStyle={enabled:!1}),_({},b,this._config.popperConfig)},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this).data(Ki),R=typeof b=="object"?b:null;if(D||(D=new T(this,R),h.default(this).data(Ki,D)),typeof b=="string"){if(typeof D[b]>"u")throw new TypeError('No method named "'+b+'"');D[b]()}})},T._clearMenus=function(b){if(!(b&&(b.which===Qn||b.type==="keyup"&&b.which!==Ce)))for(var D=[].slice.call(document.querySelectorAll(Zi)),R=0,X=D.length;R<X;R++){var nt=T._getParentFromElement(D[R]),dt=h.default(D[R]).data(Ki),St={relatedTarget:D[R]};if(b&&b.type==="click"&&(St.clickEvent=b),!!dt){var Ft=dt._menu;if(h.default(nt).hasClass(jn)&&!(b&&(b.type==="click"&&/input|textarea/i.test(b.target.tagName)||b.type==="keyup"&&b.which===Ce)&&h.default.contains(nt,b.target))){var Bt=h.default.Event(mo,St);h.default(nt).trigger(Bt),!Bt.isDefaultPrevented()&&("ontouchstart"in document.documentElement&&h.default(document.body).children().off("mouseover",null,h.default.noop),D[R].setAttribute("aria-expanded","false"),dt._popper&&dt._popper.destroy(),h.default(Ft).removeClass(jn),h.default(nt).removeClass(jn).trigger(h.default.Event($o,St)))}}}},T._getParentFromElement=function(b){var D,R=ct.getSelectorFromElement(b);return R&&(D=document.querySelector(R)),D||b.parentNode},T._dataApiKeydownHandler=function(b){if(!(/input|textarea/i.test(b.target.tagName)?b.which===Ns||b.which!==lr&&(b.which!==zn&&b.which!==Fo||h.default(b.target).closest(Y).length):!dr.test(b.which))&&!(this.disabled||h.default(this).hasClass(Vo))){var D=T._getParentFromElement(this),R=h.default(D).hasClass(jn);if(!(!R&&b.which===lr)){if(b.preventDefault(),b.stopPropagation(),!R||b.which===lr||b.which===Ns){b.which===lr&&h.default(D.querySelector(Zi)).trigger("focus"),h.default(this).trigger("click");return}var X=[].slice.call(D.querySelectorAll(ht)).filter(function(dt){return h.default(dt).is(":visible")});if(X.length!==0){var nt=X.indexOf(b.target);b.which===Fo&&nt>0&&nt--,b.which===zn&&nt<X.length-1&&nt++,nt<0&&(nt=0),X[nt].focus()}}}},V(T,null,[{key:"VERSION",get:function(){return Rn}},{key:"Default",get:function(){return ae}},{key:"DefaultType",get:function(){return Yt}}]),T}();h.default(document).on(Qi,Zi,Qt._dataApiKeydownHandler).on(Qi,Y,Qt._dataApiKeydownHandler).on(Ti+" "+Dr,Qt._clearMenus).on(Ti,Zi,function(T){T.preventDefault(),T.stopPropagation(),Qt._jQueryInterface.call(h.default(this),"toggle")}).on(Ti,Qr,function(T){T.stopPropagation()}),h.default.fn[rn]=Qt._jQueryInterface,h.default.fn[rn].Constructor=Qt,h.default.fn[rn].noConflict=function(){return h.default.fn[rn]=Ms,Qt._jQueryInterface};var ee="modal",lt="4.6.2",ft="bs.modal",pt="."+ft,H=".data-api",et=h.default.fn[ee],wt=27,yt="modal-dialog-scrollable",Rt="modal-scrollbar-measure",Tt="modal-backdrop",fe="modal-open",Ae="fade",Fn="show",Di="modal-static",Os="hide"+pt,be="hidePrevented"+pt,aa="hidden"+pt,Bc="show"+pt,Lc="shown"+pt,ca="focusin"+pt,Je="resize"+pt,Zr="click.dismiss"+pt,Pc="keydown.dismiss"+pt,Bs="mouseup.dismiss"+pt,la="mousedown.dismiss"+pt,Ll="click"+pt+H,da=".modal-dialog",Jr=".modal-body",Pl='[data-toggle="modal"]',za='[data-dismiss="modal"]',Rc=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",zc=".sticky-top",ja={backdrop:!0,keyboard:!0,focus:!0,show:!0},yu={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},ua=function(){function T(O,b){this._config=this._getConfig(b),this._element=O,this._dialog=O.querySelector(da),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var N=T.prototype;return N.toggle=function(b){return this._isShown?this.hide():this.show(b)},N.show=function(b){var D=this;if(!(this._isShown||this._isTransitioning)){var R=h.default.Event(Bc,{relatedTarget:b});h.default(this._element).trigger(R),!R.isDefaultPrevented()&&(this._isShown=!0,h.default(this._element).hasClass(Ae)&&(this._isTransitioning=!0),this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),h.default(this._element).on(Zr,za,function(X){return D.hide(X)}),h.default(this._dialog).on(la,function(){h.default(D._element).one(Bs,function(X){h.default(X.target).is(D._element)&&(D._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return D._showElement(b)}))}},N.hide=function(b){var D=this;if(b&&b.preventDefault(),!(!this._isShown||this._isTransitioning)){var R=h.default.Event(Os);if(h.default(this._element).trigger(R),!(!this._isShown||R.isDefaultPrevented())){this._isShown=!1;var X=h.default(this._element).hasClass(Ae);if(X&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),h.default(document).off(ca),h.default(this._element).removeClass(Fn),h.default(this._element).off(Zr),h.default(this._dialog).off(la),X){var nt=ct.getTransitionDurationFromElement(this._element);h.default(this._element).one(ct.TRANSITION_END,function(dt){return D._hideModal(dt)}).emulateTransitionEnd(nt)}else this._hideModal()}}},N.dispose=function(){[window,this._element,this._dialog].forEach(function(b){return h.default(b).off(pt)}),h.default(document).off(ca),h.default.removeData(this._element,ft),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},N.handleUpdate=function(){this._adjustDialog()},N._getConfig=function(b){return b=_({},ja,b),ct.typeCheckConfig(ee,b,yu),b},N._triggerBackdropTransition=function(){var b=this,D=h.default.Event(be);if(h.default(this._element).trigger(D),!D.isDefaultPrevented()){var R=this._element.scrollHeight>document.documentElement.clientHeight;R||(this._element.style.overflowY="hidden"),this._element.classList.add(Di);var X=ct.getTransitionDurationFromElement(this._dialog);h.default(this._element).off(ct.TRANSITION_END),h.default(this._element).one(ct.TRANSITION_END,function(){b._element.classList.remove(Di),R||h.default(b._element).one(ct.TRANSITION_END,function(){b._element.style.overflowY=""}).emulateTransitionEnd(b._element,X)}).emulateTransitionEnd(X),this._element.focus()}},N._showElement=function(b){var D=this,R=h.default(this._element).hasClass(Ae),X=this._dialog?this._dialog.querySelector(Jr):null;(!this._element.parentNode||this._element.parentNode.nodeType!==Node.ELEMENT_NODE)&&document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),h.default(this._dialog).hasClass(yt)&&X?X.scrollTop=0:this._element.scrollTop=0,R&&ct.reflow(this._element),h.default(this._element).addClass(Fn),this._config.focus&&this._enforceFocus();var nt=h.default.Event(Lc,{relatedTarget:b}),dt=function(){D._config.focus&&D._element.focus(),D._isTransitioning=!1,h.default(D._element).trigger(nt)};if(R){var St=ct.getTransitionDurationFromElement(this._dialog);h.default(this._dialog).one(ct.TRANSITION_END,dt).emulateTransitionEnd(St)}else dt()},N._enforceFocus=function(){var b=this;h.default(document).off(ca).on(ca,function(D){document!==D.target&&b._element!==D.target&&h.default(b._element).has(D.target).length===0&&b._element.focus()})},N._setEscapeEvent=function(){var b=this;this._isShown?h.default(this._element).on(Pc,function(D){b._config.keyboard&&D.which===wt?(D.preventDefault(),b.hide()):!b._config.keyboard&&D.which===wt&&b._triggerBackdropTransition()}):this._isShown||h.default(this._element).off(Pc)},N._setResizeEvent=function(){var b=this;this._isShown?h.default(window).on(Je,function(D){return b.handleUpdate(D)}):h.default(window).off(Je)},N._hideModal=function(){var b=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._showBackdrop(function(){h.default(document.body).removeClass(fe),b._resetAdjustments(),b._resetScrollbar(),h.default(b._element).trigger(aa)})},N._removeBackdrop=function(){this._backdrop&&(h.default(this._backdrop).remove(),this._backdrop=null)},N._showBackdrop=function(b){var D=this,R=h.default(this._element).hasClass(Ae)?Ae:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=Tt,R&&this._backdrop.classList.add(R),h.default(this._backdrop).appendTo(document.body),h.default(this._element).on(Zr,function(St){if(D._ignoreBackdropClick){D._ignoreBackdropClick=!1;return}St.target===St.currentTarget&&(D._config.backdrop==="static"?D._triggerBackdropTransition():D.hide())}),R&&ct.reflow(this._backdrop),h.default(this._backdrop).addClass(Fn),!b)return;if(!R){b();return}var X=ct.getTransitionDurationFromElement(this._backdrop);h.default(this._backdrop).one(ct.TRANSITION_END,b).emulateTransitionEnd(X)}else if(!this._isShown&&this._backdrop){h.default(this._backdrop).removeClass(Fn);var nt=function(){D._removeBackdrop(),b&&b()};if(h.default(this._element).hasClass(Ae)){var dt=ct.getTransitionDurationFromElement(this._backdrop);h.default(this._backdrop).one(ct.TRANSITION_END,nt).emulateTransitionEnd(dt)}else nt()}else b&&b()},N._adjustDialog=function(){var b=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&b&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!b&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},N._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},N._checkScrollbar=function(){var b=document.body.getBoundingClientRect();this._isBodyOverflowing=Math.round(b.left+b.right)<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},N._setScrollbar=function(){var b=this;if(this._isBodyOverflowing){var D=[].slice.call(document.querySelectorAll(Rc)),R=[].slice.call(document.querySelectorAll(zc));h.default(D).each(function(dt,St){var Ft=St.style.paddingRight,Bt=h.default(St).css("padding-right");h.default(St).data("padding-right",Ft).css("padding-right",parseFloat(Bt)+b._scrollbarWidth+"px")}),h.default(R).each(function(dt,St){var Ft=St.style.marginRight,Bt=h.default(St).css("margin-right");h.default(St).data("margin-right",Ft).css("margin-right",parseFloat(Bt)-b._scrollbarWidth+"px")});var X=document.body.style.paddingRight,nt=h.default(document.body).css("padding-right");h.default(document.body).data("padding-right",X).css("padding-right",parseFloat(nt)+this._scrollbarWidth+"px")}h.default(document.body).addClass(fe)},N._resetScrollbar=function(){var b=[].slice.call(document.querySelectorAll(Rc));h.default(b).each(function(X,nt){var dt=h.default(nt).data("padding-right");h.default(nt).removeData("padding-right"),nt.style.paddingRight=dt||""});var D=[].slice.call(document.querySelectorAll(""+zc));h.default(D).each(function(X,nt){var dt=h.default(nt).data("margin-right");typeof dt<"u"&&h.default(nt).css("margin-right",dt).removeData("margin-right")});var R=h.default(document.body).data("padding-right");h.default(document.body).removeData("padding-right"),document.body.style.paddingRight=R||""},N._getScrollbarWidth=function(){var b=document.createElement("div");b.className=Rt,document.body.appendChild(b);var D=b.getBoundingClientRect().width-b.clientWidth;return document.body.removeChild(b),D},T._jQueryInterface=function(b,D){return this.each(function(){var R=h.default(this).data(ft),X=_({},ja,h.default(this).data(),typeof b=="object"&&b?b:{});if(R||(R=new T(this,X),h.default(this).data(ft,R)),typeof b=="string"){if(typeof R[b]>"u")throw new TypeError('No method named "'+b+'"');R[b](D)}else X.show&&R.show(D)})},V(T,null,[{key:"VERSION",get:function(){return lt}},{key:"Default",get:function(){return ja}}]),T}();h.default(document).on(Ll,Pl,function(T){var N=this,O,b=ct.getSelectorFromElement(this);b&&(O=document.querySelector(b));var D=h.default(O).data(ft)?"toggle":_({},h.default(O).data(),h.default(this).data());(this.tagName==="A"||this.tagName==="AREA")&&T.preventDefault();var R=h.default(O).one(Bc,function(X){X.isDefaultPrevented()||R.one(aa,function(){h.default(N).is(":visible")&&N.focus()})});ua._jQueryInterface.call(h.default(O),D,this)}),h.default.fn[ee]=ua._jQueryInterface,h.default.fn[ee].Constructor=ua,h.default.fn[ee].noConflict=function(){return h.default.fn[ee]=et,ua._jQueryInterface};var Rl=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],zl=/^aria-[\w-]*$/i,jl={"*":["class","dir","id","lang","role",zl],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Fl=/^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,jc=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;function Eu(T,N){var O=T.nodeName.toLowerCase();if(N.indexOf(O)!==-1)return Rl.indexOf(O)!==-1?!!(Fl.test(T.nodeValue)||jc.test(T.nodeValue)):!0;for(var b=N.filter(function(X){return X instanceof RegExp}),D=0,R=b.length;D<R;D++)if(b[D].test(O))return!0;return!1}function Fc(T,N,O){if(T.length===0)return T;if(O&&typeof O=="function")return O(T);for(var b=new window.DOMParser,D=b.parseFromString(T,"text/html"),R=Object.keys(N),X=[].slice.call(D.body.querySelectorAll("*")),nt=function(kt,Nt){var Zt=X[kt],ke=Zt.nodeName.toLowerCase();if(R.indexOf(Zt.nodeName.toLowerCase())===-1)return Zt.parentNode.removeChild(Zt),"continue";var ui=[].slice.call(Zt.attributes),hi=[].concat(N["*"]||[],N[ke]||[]);ui.forEach(function(Vn){Eu(Vn,hi)||Zt.removeAttribute(Vn.nodeName)})},dt=0,St=X.length;dt<St;dt++)var Ft=nt(dt);return D.body.innerHTML}var Xr="tooltip",xu="4.6.2",ha="bs.tooltip",re="."+ha,Tu=h.default.fn[Xr],ts="bs-tooltip",fa=new RegExp("(^|\\s)"+ts+"\\S+","g"),Fa=["sanitize","whiteList","sanitizeFn"],es="fade",xe="show",ns="show",Va="out",Du=".tooltip-inner",Vc=".arrow",pa="hover",Hc="focus",Su="click",Sr="manual",Iu={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Vl={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",customClass:"",sanitize:!0,sanitizeFn:null,whiteList:jl,popperConfig:null},Mu={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object",popperConfig:"(null|object)"},Nu={HIDE:"hide"+re,HIDDEN:"hidden"+re,SHOW:"show"+re,SHOWN:"shown"+re,INSERTED:"inserted"+re,CLICK:"click"+re,FOCUSIN:"focusin"+re,FOCUSOUT:"focusout"+re,MOUSEENTER:"mouseenter"+re,MOUSELEAVE:"mouseleave"+re},is=function(){function T(O,b){if(typeof Pn>"u")throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=O,this.config=this._getConfig(b),this.tip=null,this._setListeners()}var N=T.prototype;return N.enable=function(){this._isEnabled=!0},N.disable=function(){this._isEnabled=!1},N.toggleEnabled=function(){this._isEnabled=!this._isEnabled},N.toggle=function(b){if(this._isEnabled)if(b){var D=this.constructor.DATA_KEY,R=h.default(b.currentTarget).data(D);R||(R=new this.constructor(b.currentTarget,this._getDelegateConfig()),h.default(b.currentTarget).data(D,R)),R._activeTrigger.click=!R._activeTrigger.click,R._isWithActiveTrigger()?R._enter(null,R):R._leave(null,R)}else{if(h.default(this.getTipElement()).hasClass(xe)){this._leave(null,this);return}this._enter(null,this)}},N.dispose=function(){clearTimeout(this._timeout),h.default.removeData(this.element,this.constructor.DATA_KEY),h.default(this.element).off(this.constructor.EVENT_KEY),h.default(this.element).closest(".modal").off("hide.bs.modal",this._hideModalHandler),this.tip&&h.default(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,this._activeTrigger=null,this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},N.show=function(){var b=this;if(h.default(this.element).css("display")==="none")throw new Error("Please use show on visible elements");var D=h.default.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){h.default(this.element).trigger(D);var R=ct.findShadowRoot(this.element),X=h.default.contains(R!==null?R:this.element.ownerDocument.documentElement,this.element);if(D.isDefaultPrevented()||!X)return;var nt=this.getTipElement(),dt=ct.getUID(this.constructor.NAME);nt.setAttribute("id",dt),this.element.setAttribute("aria-describedby",dt),this.setContent(),this.config.animation&&h.default(nt).addClass(es);var St=typeof this.config.placement=="function"?this.config.placement.call(this,nt,this.element):this.config.placement,Ft=this._getAttachment(St);this.addAttachmentClass(Ft);var Bt=this._getContainer();h.default(nt).data(this.constructor.DATA_KEY,this),h.default.contains(this.element.ownerDocument.documentElement,this.tip)||h.default(nt).appendTo(Bt),h.default(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new Pn(this.element,nt,this._getPopperConfig(Ft)),h.default(nt).addClass(xe),h.default(nt).addClass(this.config.customClass),"ontouchstart"in document.documentElement&&h.default(document.body).children().on("mouseover",null,h.default.noop);var kt=function(){b.config.animation&&b._fixTransition();var ke=b._hoverState;b._hoverState=null,h.default(b.element).trigger(b.constructor.Event.SHOWN),ke===Va&&b._leave(null,b)};if(h.default(this.tip).hasClass(es)){var Nt=ct.getTransitionDurationFromElement(this.tip);h.default(this.tip).one(ct.TRANSITION_END,kt).emulateTransitionEnd(Nt)}else kt()}},N.hide=function(b){var D=this,R=this.getTipElement(),X=h.default.Event(this.constructor.Event.HIDE),nt=function(){D._hoverState!==ns&&R.parentNode&&R.parentNode.removeChild(R),D._cleanTipClass(),D.element.removeAttribute("aria-describedby"),h.default(D.element).trigger(D.constructor.Event.HIDDEN),D._popper!==null&&D._popper.destroy(),b&&b()};if(h.default(this.element).trigger(X),!X.isDefaultPrevented()){if(h.default(R).removeClass(xe),"ontouchstart"in document.documentElement&&h.default(document.body).children().off("mouseover",null,h.default.noop),this._activeTrigger[Su]=!1,this._activeTrigger[Hc]=!1,this._activeTrigger[pa]=!1,h.default(this.tip).hasClass(es)){var dt=ct.getTransitionDurationFromElement(R);h.default(R).one(ct.TRANSITION_END,nt).emulateTransitionEnd(dt)}else nt();this._hoverState=""}},N.update=function(){this._popper!==null&&this._popper.scheduleUpdate()},N.isWithContent=function(){return!!this.getTitle()},N.addAttachmentClass=function(b){h.default(this.getTipElement()).addClass(ts+"-"+b)},N.getTipElement=function(){return this.tip=this.tip||h.default(this.config.template)[0],this.tip},N.setContent=function(){var b=this.getTipElement();this.setElementContent(h.default(b.querySelectorAll(Du)),this.getTitle()),h.default(b).removeClass(es+" "+xe)},N.setElementContent=function(b,D){if(typeof D=="object"&&(D.nodeType||D.jquery)){this.config.html?h.default(D).parent().is(b)||b.empty().append(D):b.text(h.default(D).text());return}this.config.html?(this.config.sanitize&&(D=Fc(D,this.config.whiteList,this.config.sanitizeFn)),b.html(D)):b.text(D)},N.getTitle=function(){var b=this.element.getAttribute("data-original-title");return b||(b=typeof this.config.title=="function"?this.config.title.call(this.element):this.config.title),b},N._getPopperConfig=function(b){var D=this,R={placement:b,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:Vc},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(nt){nt.originalPlacement!==nt.placement&&D._handlePopperPlacementChange(nt)},onUpdate:function(nt){return D._handlePopperPlacementChange(nt)}};return _({},R,this.config.popperConfig)},N._getOffset=function(){var b=this,D={};return typeof this.config.offset=="function"?D.fn=function(R){return R.offsets=_({},R.offsets,b.config.offset(R.offsets,b.element)),R}:D.offset=this.config.offset,D},N._getContainer=function(){return this.config.container===!1?document.body:ct.isElement(this.config.container)?h.default(this.config.container):h.default(document).find(this.config.container)},N._getAttachment=function(b){return Iu[b.toUpperCase()]},N._setListeners=function(){var b=this,D=this.config.trigger.split(" ");D.forEach(function(R){if(R==="click")h.default(b.element).on(b.constructor.Event.CLICK,b.config.selector,function(dt){return b.toggle(dt)});else if(R!==Sr){var X=R===pa?b.constructor.Event.MOUSEENTER:b.constructor.Event.FOCUSIN,nt=R===pa?b.constructor.Event.MOUSELEAVE:b.constructor.Event.FOCUSOUT;h.default(b.element).on(X,b.config.selector,function(dt){return b._enter(dt)}).on(nt,b.config.selector,function(dt){return b._leave(dt)})}}),this._hideModalHandler=function(){b.element&&b.hide()},h.default(this.element).closest(".modal").on("hide.bs.modal",this._hideModalHandler),this.config.selector?this.config=_({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},N._fixTitle=function(){var b=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||b!=="string")&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},N._enter=function(b,D){var R=this.constructor.DATA_KEY;if(D=D||h.default(b.currentTarget).data(R),D||(D=new this.constructor(b.currentTarget,this._getDelegateConfig()),h.default(b.currentTarget).data(R,D)),b&&(D._activeTrigger[b.type==="focusin"?Hc:pa]=!0),h.default(D.getTipElement()).hasClass(xe)||D._hoverState===ns){D._hoverState=ns;return}if(clearTimeout(D._timeout),D._hoverState=ns,!D.config.delay||!D.config.delay.show){D.show();return}D._timeout=setTimeout(function(){D._hoverState===ns&&D.show()},D.config.delay.show)},N._leave=function(b,D){var R=this.constructor.DATA_KEY;if(D=D||h.default(b.currentTarget).data(R),D||(D=new this.constructor(b.currentTarget,this._getDelegateConfig()),h.default(b.currentTarget).data(R,D)),b&&(D._activeTrigger[b.type==="focusout"?Hc:pa]=!1),!D._isWithActiveTrigger()){if(clearTimeout(D._timeout),D._hoverState=Va,!D.config.delay||!D.config.delay.hide){D.hide();return}D._timeout=setTimeout(function(){D._hoverState===Va&&D.hide()},D.config.delay.hide)}},N._isWithActiveTrigger=function(){for(var b in this._activeTrigger)if(this._activeTrigger[b])return!0;return!1},N._getConfig=function(b){var D=h.default(this.element).data();return Object.keys(D).forEach(function(R){Fa.indexOf(R)!==-1&&delete D[R]}),b=_({},this.constructor.Default,D,typeof b=="object"&&b?b:{}),typeof b.delay=="number"&&(b.delay={show:b.delay,hide:b.delay}),typeof b.title=="number"&&(b.title=b.title.toString()),typeof b.content=="number"&&(b.content=b.content.toString()),ct.typeCheckConfig(Xr,b,this.constructor.DefaultType),b.sanitize&&(b.template=Fc(b.template,b.whiteList,b.sanitizeFn)),b},N._getDelegateConfig=function(){var b={};if(this.config)for(var D in this.config)this.constructor.Default[D]!==this.config[D]&&(b[D]=this.config[D]);return b},N._cleanTipClass=function(){var b=h.default(this.getTipElement()),D=b.attr("class").match(fa);D!==null&&D.length&&b.removeClass(D.join(""))},N._handlePopperPlacementChange=function(b){this.tip=b.instance.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(b.placement))},N._fixTransition=function(){var b=this.getTipElement(),D=this.config.animation;b.getAttribute("x-placement")===null&&(h.default(b).removeClass(es),this.config.animation=!1,this.hide(),this.show(),this.config.animation=D)},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this),R=D.data(ha),X=typeof b=="object"&&b;if(!(!R&&/dispose|hide/.test(b))&&(R||(R=new T(this,X),D.data(ha,R)),typeof b=="string")){if(typeof R[b]>"u")throw new TypeError('No method named "'+b+'"');R[b]()}})},V(T,null,[{key:"VERSION",get:function(){return xu}},{key:"Default",get:function(){return Vl}},{key:"NAME",get:function(){return Xr}},{key:"DATA_KEY",get:function(){return ha}},{key:"Event",get:function(){return Nu}},{key:"EVENT_KEY",get:function(){return re}},{key:"DefaultType",get:function(){return Mu}}]),T}();h.default.fn[Xr]=is._jQueryInterface,h.default.fn[Xr].Constructor=is,h.default.fn[Xr].noConflict=function(){return h.default.fn[Xr]=Tu,is._jQueryInterface};var Ls="popover",mp="4.6.2",Ha="bs.popover",bo="."+Ha,Ou=h.default.fn[Ls],Uc="bs-popover",$c=new RegExp("(^|\\s)"+Uc+"\\S+","g"),Bu="fade",Lu="show",Hl=".popover-header",Pu=".popover-body",ko=_({},is.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Sn=_({},is.DefaultType,{content:"(string|element|function)"}),In={HIDE:"hide"+bo,HIDDEN:"hidden"+bo,SHOW:"show"+bo,SHOWN:"shown"+bo,INSERTED:"inserted"+bo,CLICK:"click"+bo,FOCUSIN:"focusin"+bo,FOCUSOUT:"focusout"+bo,MOUSEENTER:"mouseenter"+bo,MOUSELEAVE:"mouseleave"+bo},Mn=function(T){K(N,T);function N(){return T.apply(this,arguments)||this}var O=N.prototype;return O.isWithContent=function(){return this.getTitle()||this._getContent()},O.addAttachmentClass=function(D){h.default(this.getTipElement()).addClass(Uc+"-"+D)},O.getTipElement=function(){return this.tip=this.tip||h.default(this.config.template)[0],this.tip},O.setContent=function(){var D=h.default(this.getTipElement());this.setElementContent(D.find(Hl),this.getTitle());var R=this._getContent();typeof R=="function"&&(R=R.call(this.element)),this.setElementContent(D.find(Pu),R),D.removeClass(Bu+" "+Lu)},O._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},O._cleanTipClass=function(){var D=h.default(this.getTipElement()),R=D.attr("class").match($c);R!==null&&R.length>0&&D.removeClass(R.join(""))},N._jQueryInterface=function(D){return this.each(function(){var R=h.default(this).data(Ha),X=typeof D=="object"?D:null;if(!(!R&&/dispose|hide/.test(D))&&(R||(R=new N(this,X),h.default(this).data(Ha,R)),typeof D=="string")){if(typeof R[D]>"u")throw new TypeError('No method named "'+D+'"');R[D]()}})},V(N,null,[{key:"VERSION",get:function(){return mp}},{key:"Default",get:function(){return ko}},{key:"NAME",get:function(){return Ls}},{key:"DATA_KEY",get:function(){return Ha}},{key:"Event",get:function(){return In}},{key:"EVENT_KEY",get:function(){return bo}},{key:"DefaultType",get:function(){return Sn}}]),N}(is);h.default.fn[Ls]=Mn._jQueryInterface,h.default.fn[Ls].Constructor=Mn,h.default.fn[Ls].noConflict=function(){return h.default.fn[Ls]=Ou,Mn._jQueryInterface};var Zn="scrollspy",Wc="4.6.2",Ps="bs.scrollspy",Rs="."+Ps,Ru=".data-api",Ul=h.default.fn[Zn],It="dropdown-item",Ir="active",pe="activate"+Rs,$l="scroll"+Rs,Wl="load"+Rs+Ru,ql="offset",qc="position",zu='[data-spy="scroll"]',Gl=".nav, .list-group",Ua=".nav-link",$a=".nav-item",Kl=".list-group-item",ju=".dropdown",zt=".dropdown-item",Yl=".dropdown-toggle",Ql={offset:10,method:"auto",target:""},Wa={offset:"number",method:"string",target:"(string|element)"},zs=function(){function T(O,b){var D=this;this._element=O,this._scrollElement=O.tagName==="BODY"?window:O,this._config=this._getConfig(b),this._selector=this._config.target+" "+Ua+","+(this._config.target+" "+Kl+",")+(this._config.target+" "+zt),this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,h.default(this._scrollElement).on($l,function(R){return D._process(R)}),this.refresh(),this._process()}var N=T.prototype;return N.refresh=function(){var b=this,D=this._scrollElement===this._scrollElement.window?ql:qc,R=this._config.method==="auto"?D:this._config.method,X=R===qc?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight();var nt=[].slice.call(document.querySelectorAll(this._selector));nt.map(function(dt){var St,Ft=ct.getSelectorFromElement(dt);if(Ft&&(St=document.querySelector(Ft)),St){var Bt=St.getBoundingClientRect();if(Bt.width||Bt.height)return[h.default(St)[R]().top+X,Ft]}return null}).filter(Boolean).sort(function(dt,St){return dt[0]-St[0]}).forEach(function(dt){b._offsets.push(dt[0]),b._targets.push(dt[1])})},N.dispose=function(){h.default.removeData(this._element,Ps),h.default(this._scrollElement).off(Rs),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},N._getConfig=function(b){if(b=_({},Ql,typeof b=="object"&&b?b:{}),typeof b.target!="string"&&ct.isElement(b.target)){var D=h.default(b.target).attr("id");D||(D=ct.getUID(Zn),h.default(b.target).attr("id",D)),b.target="#"+D}return ct.typeCheckConfig(Zn,b,Wa),b},N._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},N._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},N._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},N._process=function(){var b=this._getScrollTop()+this._config.offset,D=this._getScrollHeight(),R=this._config.offset+D-this._getOffsetHeight();if(this._scrollHeight!==D&&this.refresh(),b>=R){var X=this._targets[this._targets.length-1];this._activeTarget!==X&&this._activate(X);return}if(this._activeTarget&&b<this._offsets[0]&&this._offsets[0]>0){this._activeTarget=null,this._clear();return}for(var nt=this._offsets.length;nt--;){var dt=this._activeTarget!==this._targets[nt]&&b>=this._offsets[nt]&&(typeof this._offsets[nt+1]>"u"||b<this._offsets[nt+1]);dt&&this._activate(this._targets[nt])}},N._activate=function(b){this._activeTarget=b,this._clear();var D=this._selector.split(",").map(function(X){return X+'[data-target="'+b+'"],'+X+'[href="'+b+'"]'}),R=h.default([].slice.call(document.querySelectorAll(D.join(","))));R.hasClass(It)?(R.closest(ju).find(Yl).addClass(Ir),R.addClass(Ir)):(R.addClass(Ir),R.parents(Gl).prev(Ua+", "+Kl).addClass(Ir),R.parents(Gl).prev($a).children(Ua).addClass(Ir)),h.default(this._scrollElement).trigger(pe,{relatedTarget:b})},N._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(b){return b.classList.contains(Ir)}).forEach(function(b){return b.classList.remove(Ir)})},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this).data(Ps),R=typeof b=="object"&&b;if(D||(D=new T(this,R),h.default(this).data(Ps,D)),typeof b=="string"){if(typeof D[b]>"u")throw new TypeError('No method named "'+b+'"');D[b]()}})},V(T,null,[{key:"VERSION",get:function(){return Wc}},{key:"Default",get:function(){return Ql}}]),T}();h.default(window).on(Wl,function(){for(var T=[].slice.call(document.querySelectorAll(zu)),N=T.length,O=N;O--;){var b=h.default(T[O]);zs._jQueryInterface.call(b,b.data())}}),h.default.fn[Zn]=zs._jQueryInterface,h.default.fn[Zn].Constructor=zs,h.default.fn[Zn].noConflict=function(){return h.default.fn[Zn]=Ul,zs._jQueryInterface};var js="tab",Fu="4.6.2",qa="bs.tab",ga="."+qa,Gc=".data-api",Zl=h.default.fn[js],Vu="dropdown-menu",_o="active",Jl="disabled",Mr="fade",Ie="show",Wo="hide"+ga,qo="hidden"+ga,Xl="show"+ga,Kc="shown"+ga,Ga="click"+ga+Gc,Hu=".dropdown",Uu=".nav, .list-group",Ka=".active",Ya="> li > .active",$u='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',Wu=".dropdown-toggle",qu="> .dropdown-menu .active",ma=function(){function T(O){this._element=O}var N=T.prototype;return N.show=function(){var b=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&h.default(this._element).hasClass(_o)||h.default(this._element).hasClass(Jl)||this._element.hasAttribute("disabled"))){var D,R,X=h.default(this._element).closest(Uu)[0],nt=ct.getSelectorFromElement(this._element);if(X){var dt=X.nodeName==="UL"||X.nodeName==="OL"?Ya:Ka;R=h.default.makeArray(h.default(X).find(dt)),R=R[R.length-1]}var St=h.default.Event(Wo,{relatedTarget:this._element}),Ft=h.default.Event(Xl,{relatedTarget:R});if(R&&h.default(R).trigger(St),h.default(this._element).trigger(Ft),!(Ft.isDefaultPrevented()||St.isDefaultPrevented())){nt&&(D=document.querySelector(nt)),this._activate(this._element,X);var Bt=function(){var Nt=h.default.Event(qo,{relatedTarget:b._element}),Zt=h.default.Event(Kc,{relatedTarget:R});h.default(R).trigger(Nt),h.default(b._element).trigger(Zt)};D?this._activate(D,D.parentNode,Bt):Bt()}}},N.dispose=function(){h.default.removeData(this._element,qa),this._element=null},N._activate=function(b,D,R){var X=this,nt=D&&(D.nodeName==="UL"||D.nodeName==="OL")?h.default(D).find(Ya):h.default(D).children(Ka),dt=nt[0],St=R&&dt&&h.default(dt).hasClass(Mr),Ft=function(){return X._transitionComplete(b,dt,R)};if(dt&&St){var Bt=ct.getTransitionDurationFromElement(dt);h.default(dt).removeClass(Ie).one(ct.TRANSITION_END,Ft).emulateTransitionEnd(Bt)}else Ft()},N._transitionComplete=function(b,D,R){if(D){h.default(D).removeClass(_o);var X=h.default(D.parentNode).find(qu)[0];X&&h.default(X).removeClass(_o),D.getAttribute("role")==="tab"&&D.setAttribute("aria-selected",!1)}h.default(b).addClass(_o),b.getAttribute("role")==="tab"&&b.setAttribute("aria-selected",!0),ct.reflow(b),b.classList.contains(Mr)&&b.classList.add(Ie);var nt=b.parentNode;if(nt&&nt.nodeName==="LI"&&(nt=nt.parentNode),nt&&h.default(nt).hasClass(Vu)){var dt=h.default(b).closest(Hu)[0];if(dt){var St=[].slice.call(dt.querySelectorAll(Wu));h.default(St).addClass(_o)}b.setAttribute("aria-expanded",!0)}R&&R()},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this),R=D.data(qa);if(R||(R=new T(this),D.data(qa,R)),typeof b=="string"){if(typeof R[b]>"u")throw new TypeError('No method named "'+b+'"');R[b]()}})},V(T,null,[{key:"VERSION",get:function(){return Fu}}]),T}();h.default(document).on(Ga,$u,function(T){T.preventDefault(),ma._jQueryInterface.call(h.default(this),"show")}),h.default.fn[js]=ma._jQueryInterface,h.default.fn[js].Constructor=ma,h.default.fn[js].noConflict=function(){return h.default.fn[js]=Zl,ma._jQueryInterface};var Fs="toast",Gu="4.6.2",Qa="bs.toast",Vs="."+Qa,td=h.default.fn[Fs],Ku="fade",Za="hide",Nr="show",ed="showing",os="click.dismiss"+Vs,Yc="hide"+Vs,nd="hidden"+Vs,Yu="show"+Vs,Qu="shown"+Vs,Zu='[data-dismiss="toast"]',Hs={animation:!0,autohide:!0,delay:500},Ju={animation:"boolean",autohide:"boolean",delay:"number"},Ja=function(){function T(O,b){this._element=O,this._config=this._getConfig(b),this._timeout=null,this._setListeners()}var N=T.prototype;return N.show=function(){var b=this,D=h.default.Event(Yu);if(h.default(this._element).trigger(D),!D.isDefaultPrevented()){this._clearTimeout(),this._config.animation&&this._element.classList.add(Ku);var R=function(){b._element.classList.remove(ed),b._element.classList.add(Nr),h.default(b._element).trigger(Qu),b._config.autohide&&(b._timeout=setTimeout(function(){b.hide()},b._config.delay))};if(this._element.classList.remove(Za),ct.reflow(this._element),this._element.classList.add(ed),this._config.animation){var X=ct.getTransitionDurationFromElement(this._element);h.default(this._element).one(ct.TRANSITION_END,R).emulateTransitionEnd(X)}else R()}},N.hide=function(){if(this._element.classList.contains(Nr)){var b=h.default.Event(Yc);h.default(this._element).trigger(b),!b.isDefaultPrevented()&&this._close()}},N.dispose=function(){this._clearTimeout(),this._element.classList.contains(Nr)&&this._element.classList.remove(Nr),h.default(this._element).off(os),h.default.removeData(this._element,Qa),this._element=null,this._config=null},N._getConfig=function(b){return b=_({},Hs,h.default(this._element).data(),typeof b=="object"&&b?b:{}),ct.typeCheckConfig(Fs,b,this.constructor.DefaultType),b},N._setListeners=function(){var b=this;h.default(this._element).on(os,Zu,function(){return b.hide()})},N._close=function(){var b=this,D=function(){b._element.classList.add(Za),h.default(b._element).trigger(nd)};if(this._element.classList.remove(Nr),this._config.animation){var R=ct.getTransitionDurationFromElement(this._element);h.default(this._element).one(ct.TRANSITION_END,D).emulateTransitionEnd(R)}else D()},N._clearTimeout=function(){clearTimeout(this._timeout),this._timeout=null},T._jQueryInterface=function(b){return this.each(function(){var D=h.default(this),R=D.data(Qa),X=typeof b=="object"&&b;if(R||(R=new T(this,X),D.data(Qa,R)),typeof b=="string"){if(typeof R[b]>"u")throw new TypeError('No method named "'+b+'"');R[b](this)}})},V(T,null,[{key:"VERSION",get:function(){return Gu}},{key:"DefaultType",get:function(){return Ju}},{key:"Default",get:function(){return Hs}}]),T}();h.default.fn[Fs]=Ja._jQueryInterface,h.default.fn[Fs].Constructor=Ja,h.default.fn[Fs].noConflict=function(){return h.default.fn[Fs]=td,Ja._jQueryInterface},A.Alert=_e,A.Button=pn,A.Carousel=an,A.Collapse=Dn,A.Dropdown=Qt,A.Modal=ua,A.Popover=Mn,A.Scrollspy=zs,A.Tab=ma,A.Toast=Ja,A.Tooltip=is,A.Util=ct,Object.defineProperty(A,"__esModule",{value:!0})})})(bC,bC.exports);$(document).ready(function(){function x(j,h){var L=window.location.href,V=location.hash;if(L=L.replace(V,""),L.indexOf(j+"=")>=0){var _=L.substring(0,L.indexOf(j+"=")),K=L.substring(L.indexOf(j+"="));K=K.substring(K.indexOf("=")+1),K=K.indexOf("&")>=0?K.substring(K.indexOf("&")):"",L=_+j+"="+h+K}else L.indexOf("?")<0?L+="?"+j+"="+h:L+="&"+j+"="+h;window.history.replaceState({path:L},"",L+V)}function f(j,h){$.ajax({url:"/projets/?page="+j+"&searchValue="+h,success:function(L){var V=$(L);$("tbody").html(V.find("tbody").html()),$("#card-footer").html(V.find("#card-footer").html());var _=V.find(".pagination").html();_?$(".pagination").html(_):$(".pagination").html("")}}),j!==null&&h!==null?(x("page",j),x("searchValue",h)):window.history.replaceState({},document.title,window.location.pathname)}function A(j){j=j.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var h=new RegExp("[\\?&]"+j+"=([^&#]*)"),L=h.exec(location.search);return L===null?"":decodeURIComponent(L[1].replace(/\+/g," "))}var P=A("searchValue");P&&($("#table_search").val(P),f($("#page").val(),P)),$("body").on("click",".pagination a",function(j){j.preventDefault();var h=$(this).attr("href").split("page=")[1],L=$("#table_search").val();f(h,L)}),$("body").on("keyup","#table_search",function(){var j=$("#page").val(),h=$(this).val();f(j,h)}),$(document).ready(function(){$(".dropdown-toggle").dropdown()})});var gu={exports:{}};gu.exports;(function(x,f){(function(A){const P=A.en=A.en||{};P.dictionary=Object.assign(P.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(A,P){x.exports=P()}(self,()=>(()=>{var A={9246:(L,V,_)=>{const K=_(6931),q={};for(const E of Object.keys(K))q[K[E]]=E;const U={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};L.exports=U;for(const E of Object.keys(U)){if(!("channels"in U[E]))throw new Error("missing channels property: "+E);if(!("labels"in U[E]))throw new Error("missing channel labels property: "+E);if(U[E].labels.length!==U[E].channels)throw new Error("channel and label counts mismatch: "+E);const{channels:B,labels:Q}=U[E];delete U[E].channels,delete U[E].labels,Object.defineProperty(U[E],"channels",{value:B}),Object.defineProperty(U[E],"labels",{value:Q})}U.rgb.hsl=function(E){const B=E[0]/255,Q=E[1]/255,J=E[2]/255,ot=Math.min(B,Q,J),at=Math.max(B,Q,J),ct=at-ot;let Et,xt;at===ot?Et=0:B===at?Et=(Q-J)/ct:Q===at?Et=2+(J-B)/ct:J===at&&(Et=4+(B-Q)/ct),Et=Math.min(60*Et,360),Et<0&&(Et+=360);const Vt=(ot+at)/2;return xt=at===ot?0:Vt<=.5?ct/(at+ot):ct/(2-at-ot),[Et,100*xt,100*Vt]},U.rgb.hsv=function(E){let B,Q,J,ot,at;const ct=E[0]/255,Et=E[1]/255,xt=E[2]/255,Vt=Math.max(ct,Et,xt),Kt=Vt-Math.min(ct,Et,xt),v=function(Gt){return(Vt-Gt)/6/Kt+.5};return Kt===0?(ot=0,at=0):(at=Kt/Vt,B=v(ct),Q=v(Et),J=v(xt),ct===Vt?ot=J-Q:Et===Vt?ot=.3333333333333333+B-J:xt===Vt&&(ot=.6666666666666666+Q-B),ot<0?ot+=1:ot>1&&(ot-=1)),[360*ot,100*at,100*Vt]},U.rgb.hwb=function(E){const B=E[0],Q=E[1];let J=E[2];const ot=U.rgb.hsl(E)[0],at=1/255*Math.min(B,Math.min(Q,J));return J=1-.00392156862745098*Math.max(B,Math.max(Q,J)),[ot,100*at,100*J]},U.rgb.cmyk=function(E){const B=E[0]/255,Q=E[1]/255,J=E[2]/255,ot=Math.min(1-B,1-Q,1-J);return[100*((1-B-ot)/(1-ot)||0),100*((1-Q-ot)/(1-ot)||0),100*((1-J-ot)/(1-ot)||0),100*ot]},U.rgb.keyword=function(E){const B=q[E];if(B)return B;let Q,J=1/0;for(const ct of Object.keys(K)){const Et=K[ct],xt=(at=Et,((ot=E)[0]-at[0])**2+(ot[1]-at[1])**2+(ot[2]-at[2])**2);xt<J&&(J=xt,Q=ct)}var ot,at;return Q},U.keyword.rgb=function(E){return K[E]},U.rgb.xyz=function(E){let B=E[0]/255,Q=E[1]/255,J=E[2]/255;return B=B>.04045?((B+.055)/1.055)**2.4:B/12.92,Q=Q>.04045?((Q+.055)/1.055)**2.4:Q/12.92,J=J>.04045?((J+.055)/1.055)**2.4:J/12.92,[100*(.4124*B+.3576*Q+.1805*J),100*(.2126*B+.7152*Q+.0722*J),100*(.0193*B+.1192*Q+.9505*J)]},U.rgb.lab=function(E){const B=U.rgb.xyz(E);let Q=B[0],J=B[1],ot=B[2];return Q/=95.047,J/=100,ot/=108.883,Q=Q>.008856?Q**.3333333333333333:7.787*Q+.13793103448275862,J=J>.008856?J**.3333333333333333:7.787*J+.13793103448275862,ot=ot>.008856?ot**.3333333333333333:7.787*ot+.13793103448275862,[116*J-16,500*(Q-J),200*(J-ot)]},U.hsl.rgb=function(E){const B=E[0]/360,Q=E[1]/100,J=E[2]/100;let ot,at,ct;if(Q===0)return ct=255*J,[ct,ct,ct];ot=J<.5?J*(1+Q):J+Q-J*Q;const Et=2*J-ot,xt=[0,0,0];for(let Vt=0;Vt<3;Vt++)at=B+.3333333333333333*-(Vt-1),at<0&&at++,at>1&&at--,ct=6*at<1?Et+6*(ot-Et)*at:2*at<1?ot:3*at<2?Et+(ot-Et)*(.6666666666666666-at)*6:Et,xt[Vt]=255*ct;return xt},U.hsl.hsv=function(E){const B=E[0];let Q=E[1]/100,J=E[2]/100,ot=Q;const at=Math.max(J,.01);return J*=2,Q*=J<=1?J:2-J,ot*=at<=1?at:2-at,[B,100*(J===0?2*ot/(at+ot):2*Q/(J+Q)),100*((J+Q)/2)]},U.hsv.rgb=function(E){const B=E[0]/60,Q=E[1]/100;let J=E[2]/100;const ot=Math.floor(B)%6,at=B-Math.floor(B),ct=255*J*(1-Q),Et=255*J*(1-Q*at),xt=255*J*(1-Q*(1-at));switch(J*=255,ot){case 0:return[J,xt,ct];case 1:return[Et,J,ct];case 2:return[ct,J,xt];case 3:return[ct,Et,J];case 4:return[xt,ct,J];case 5:return[J,ct,Et]}},U.hsv.hsl=function(E){const B=E[0],Q=E[1]/100,J=E[2]/100,ot=Math.max(J,.01);let at,ct;ct=(2-Q)*J;const Et=(2-Q)*ot;return at=Q*ot,at/=Et<=1?Et:2-Et,at=at||0,ct/=2,[B,100*at,100*ct]},U.hwb.rgb=function(E){const B=E[0]/360;let Q=E[1]/100,J=E[2]/100;const ot=Q+J;let at;ot>1&&(Q/=ot,J/=ot);const ct=Math.floor(6*B),Et=1-J;at=6*B-ct,1&ct&&(at=1-at);const xt=Q+at*(Et-Q);let Vt,Kt,v;switch(ct){default:case 6:case 0:Vt=Et,Kt=xt,v=Q;break;case 1:Vt=xt,Kt=Et,v=Q;break;case 2:Vt=Q,Kt=Et,v=xt;break;case 3:Vt=Q,Kt=xt,v=Et;break;case 4:Vt=xt,Kt=Q,v=Et;break;case 5:Vt=Et,Kt=Q,v=xt}return[255*Vt,255*Kt,255*v]},U.cmyk.rgb=function(E){const B=E[0]/100,Q=E[1]/100,J=E[2]/100,ot=E[3]/100;return[255*(1-Math.min(1,B*(1-ot)+ot)),255*(1-Math.min(1,Q*(1-ot)+ot)),255*(1-Math.min(1,J*(1-ot)+ot))]},U.xyz.rgb=function(E){const B=E[0]/100,Q=E[1]/100,J=E[2]/100;let ot,at,ct;return ot=3.2406*B+-1.5372*Q+-.4986*J,at=-.9689*B+1.8758*Q+.0415*J,ct=.0557*B+-.204*Q+1.057*J,ot=ot>.0031308?1.055*ot**.4166666666666667-.055:12.92*ot,at=at>.0031308?1.055*at**.4166666666666667-.055:12.92*at,ct=ct>.0031308?1.055*ct**.4166666666666667-.055:12.92*ct,ot=Math.min(Math.max(0,ot),1),at=Math.min(Math.max(0,at),1),ct=Math.min(Math.max(0,ct),1),[255*ot,255*at,255*ct]},U.xyz.lab=function(E){let B=E[0],Q=E[1],J=E[2];return B/=95.047,Q/=100,J/=108.883,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,Q=Q>.008856?Q**.3333333333333333:7.787*Q+.13793103448275862,J=J>.008856?J**.3333333333333333:7.787*J+.13793103448275862,[116*Q-16,500*(B-Q),200*(Q-J)]},U.lab.xyz=function(E){let B,Q,J;Q=(E[0]+16)/116,B=E[1]/500+Q,J=Q-E[2]/200;const ot=Q**3,at=B**3,ct=J**3;return Q=ot>.008856?ot:(Q-.13793103448275862)/7.787,B=at>.008856?at:(B-.13793103448275862)/7.787,J=ct>.008856?ct:(J-.13793103448275862)/7.787,B*=95.047,Q*=100,J*=108.883,[B,Q,J]},U.lab.lch=function(E){const B=E[0],Q=E[1],J=E[2];let ot;return ot=360*Math.atan2(J,Q)/2/Math.PI,ot<0&&(ot+=360),[B,Math.sqrt(Q*Q+J*J),ot]},U.lch.lab=function(E){const B=E[0],Q=E[1],J=E[2]/360*2*Math.PI;return[B,Q*Math.cos(J),Q*Math.sin(J)]},U.rgb.ansi16=function(E,B=null){const[Q,J,ot]=E;let at=B===null?U.rgb.hsv(E)[2]:B;if(at=Math.round(at/50),at===0)return 30;let ct=30+(Math.round(ot/255)<<2|Math.round(J/255)<<1|Math.round(Q/255));return at===2&&(ct+=60),ct},U.hsv.ansi16=function(E){return U.rgb.ansi16(U.hsv.rgb(E),E[2])},U.rgb.ansi256=function(E){const B=E[0],Q=E[1],J=E[2];return B===Q&&Q===J?B<8?16:B>248?231:Math.round((B-8)/247*24)+232:16+36*Math.round(B/255*5)+6*Math.round(Q/255*5)+Math.round(J/255*5)},U.ansi16.rgb=function(E){let B=E%10;if(B===0||B===7)return E>50&&(B+=3.5),B=B/10.5*255,[B,B,B];const Q=.5*(1+~~(E>50));return[(1&B)*Q*255,(B>>1&1)*Q*255,(B>>2&1)*Q*255]},U.ansi256.rgb=function(E){if(E>=232){const Q=10*(E-232)+8;return[Q,Q,Q]}let B;return E-=16,[Math.floor(E/36)/5*255,Math.floor((B=E%36)/6)/5*255,B%6/5*255]},U.rgb.hex=function(E){const B=(((255&Math.round(E[0]))<<16)+((255&Math.round(E[1]))<<8)+(255&Math.round(E[2]))).toString(16).toUpperCase();return"000000".substring(B.length)+B},U.hex.rgb=function(E){const B=E.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!B)return[0,0,0];let Q=B[0];B[0].length===3&&(Q=Q.split("").map(ot=>ot+ot).join(""));const J=parseInt(Q,16);return[J>>16&255,J>>8&255,255&J]},U.rgb.hcg=function(E){const B=E[0]/255,Q=E[1]/255,J=E[2]/255,ot=Math.max(Math.max(B,Q),J),at=Math.min(Math.min(B,Q),J),ct=ot-at;let Et,xt;return Et=ct<1?at/(1-ct):0,xt=ct<=0?0:ot===B?(Q-J)/ct%6:ot===Q?2+(J-B)/ct:4+(B-Q)/ct,xt/=6,xt%=1,[360*xt,100*ct,100*Et]},U.hsl.hcg=function(E){const B=E[1]/100,Q=E[2]/100,J=Q<.5?2*B*Q:2*B*(1-Q);let ot=0;return J<1&&(ot=(Q-.5*J)/(1-J)),[E[0],100*J,100*ot]},U.hsv.hcg=function(E){const B=E[1]/100,Q=E[2]/100,J=B*Q;let ot=0;return J<1&&(ot=(Q-J)/(1-J)),[E[0],100*J,100*ot]},U.hcg.rgb=function(E){const B=E[0]/360,Q=E[1]/100,J=E[2]/100;if(Q===0)return[255*J,255*J,255*J];const ot=[0,0,0],at=B%1*6,ct=at%1,Et=1-ct;let xt=0;switch(Math.floor(at)){case 0:ot[0]=1,ot[1]=ct,ot[2]=0;break;case 1:ot[0]=Et,ot[1]=1,ot[2]=0;break;case 2:ot[0]=0,ot[1]=1,ot[2]=ct;break;case 3:ot[0]=0,ot[1]=Et,ot[2]=1;break;case 4:ot[0]=ct,ot[1]=0,ot[2]=1;break;default:ot[0]=1,ot[1]=0,ot[2]=Et}return xt=(1-Q)*J,[255*(Q*ot[0]+xt),255*(Q*ot[1]+xt),255*(Q*ot[2]+xt)]},U.hcg.hsv=function(E){const B=E[1]/100,Q=B+E[2]/100*(1-B);let J=0;return Q>0&&(J=B/Q),[E[0],100*J,100*Q]},U.hcg.hsl=function(E){const B=E[1]/100,Q=E[2]/100*(1-B)+.5*B;let J=0;return Q>0&&Q<.5?J=B/(2*Q):Q>=.5&&Q<1&&(J=B/(2*(1-Q))),[E[0],100*J,100*Q]},U.hcg.hwb=function(E){const B=E[1]/100,Q=B+E[2]/100*(1-B);return[E[0],100*(Q-B),100*(1-Q)]},U.hwb.hcg=function(E){const B=E[1]/100,Q=1-E[2]/100,J=Q-B;let ot=0;return J<1&&(ot=(Q-J)/(1-J)),[E[0],100*J,100*ot]},U.apple.rgb=function(E){return[E[0]/65535*255,E[1]/65535*255,E[2]/65535*255]},U.rgb.apple=function(E){return[E[0]/255*65535,E[1]/255*65535,E[2]/255*65535]},U.gray.rgb=function(E){return[E[0]/100*255,E[0]/100*255,E[0]/100*255]},U.gray.hsl=function(E){return[0,0,E[0]]},U.gray.hsv=U.gray.hsl,U.gray.hwb=function(E){return[0,100,E[0]]},U.gray.cmyk=function(E){return[0,0,0,E[0]]},U.gray.lab=function(E){return[E[0],0,0]},U.gray.hex=function(E){const B=255&Math.round(E[0]/100*255),Q=((B<<16)+(B<<8)+B).toString(16).toUpperCase();return"000000".substring(Q.length)+Q},U.rgb.gray=function(E){return[(E[0]+E[1]+E[2])/3/255*100]}},9047:(L,V,_)=>{const K=_(9246),q=_(802),U={};Object.keys(K).forEach(E=>{U[E]={},Object.defineProperty(U[E],"channels",{value:K[E].channels}),Object.defineProperty(U[E],"labels",{value:K[E].labels});const B=q(E);Object.keys(B).forEach(Q=>{const J=B[Q];U[E][Q]=function(ot){const at=function(...ct){const Et=ct[0];if(Et==null)return Et;Et.length>1&&(ct=Et);const xt=ot(ct);if(typeof xt=="object")for(let Vt=xt.length,Kt=0;Kt<Vt;Kt++)xt[Kt]=Math.round(xt[Kt]);return xt};return"conversion"in ot&&(at.conversion=ot.conversion),at}(J),U[E][Q].raw=function(ot){const at=function(...ct){const Et=ct[0];return Et==null?Et:(Et.length>1&&(ct=Et),ot(ct))};return"conversion"in ot&&(at.conversion=ot.conversion),at}(J)})}),L.exports=U},802:(L,V,_)=>{const K=_(9246);function q(B){const Q=function(){const ot={},at=Object.keys(K);for(let ct=at.length,Et=0;Et<ct;Et++)ot[at[Et]]={distance:-1,parent:null};return ot}(),J=[B];for(Q[B].distance=0;J.length;){const ot=J.pop(),at=Object.keys(K[ot]);for(let ct=at.length,Et=0;Et<ct;Et++){const xt=at[Et],Vt=Q[xt];Vt.distance===-1&&(Vt.distance=Q[ot].distance+1,Vt.parent=ot,J.unshift(xt))}}return Q}function U(B,Q){return function(J){return Q(B(J))}}function E(B,Q){const J=[Q[B].parent,B];let ot=K[Q[B].parent][B],at=Q[B].parent;for(;Q[at].parent;)J.unshift(Q[at].parent),ot=U(K[Q[at].parent][at],ot),at=Q[at].parent;return ot.conversion=J,ot}L.exports=function(B){const Q=q(B),J={},ot=Object.keys(Q);for(let at=ot.length,ct=0;ct<at;ct++){const Et=ot[ct];Q[Et].parent!==null&&(J[Et]=E(Et,Q))}return J}},6931:L=>{L.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const B=E},8708:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const B=E},1866:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const B=E},7793:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const B=E},7388:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},4098:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const B=E},8264:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const B=E},6269:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const B=E},265:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const B=E},5247:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const B=E},3350:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const B=E},7378:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const B=E},3469:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const B=E},6386:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},7693:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const B=E},1559:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const B=E},2267:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const B=E},4062:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},7719:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const B=E},8762:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},3817:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},4808:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const B=E},1232:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const B=E},6903:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},9968:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const B=E},7141:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const B=E},8991:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const B=E},70:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const B=E},7048:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},5651:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},5506:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},4043:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},2655:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const B=E},5032:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const B=E},2329:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const B=E},4143:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const B=E},8986:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},8795:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const B=E},8137:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const B=E},1623:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},5562:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},8423:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},1801:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const B=E},5727:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},9715:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const B=E},4391:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const B=E},25:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const B=E},7317:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const B=E},1905:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const B=E},6309:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const B=E},9819:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},9822:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const B=E},8149:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},3629:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},1792:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},1666:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const B=E},8527:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},1185:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},7913:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const B=E},9529:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const B=E},7621:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},253:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},7801:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const B=E},4962:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},5199:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},497:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const B=E},4:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const B=E},3344:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const B=E},9481:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const B=E},977:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const B=E},9108:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},3710:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},991:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const B=E},5380:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},8298:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},2722:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const B=E},8107:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const B=E},109:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const B=E},1671:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const B=E},2710:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const B=E},9677:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const B=E},9205:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const B=E},7676:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const B=E},695:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const B=E},4095:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const B=E},8508:(L,V,_)=>{_.d(V,{A:()=>B});var K=_(9372),q=_.n(K),U=_(935),E=_.n(U)()(q());E.push([L.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const B=E},935:L=>{L.exports=function(V){var _=[];return _.toString=function(){return this.map(function(K){var q=V(K);return K[2]?"@media ".concat(K[2]," {").concat(q,"}"):q}).join("")},_.i=function(K,q,U){typeof K=="string"&&(K=[[null,K,""]]);var E={};if(U)for(var B=0;B<this.length;B++){var Q=this[B][0];Q!=null&&(E[Q]=!0)}for(var J=0;J<K.length;J++){var ot=[].concat(K[J]);U&&E[ot[0]]||(q&&(ot[2]?ot[2]="".concat(q," and ").concat(ot[2]):ot[2]=q),_.push(ot))}},_}},9372:L=>{function V(K,q){return function(U){if(Array.isArray(U))return U}(K)||function(U,E){var B=U&&(typeof Symbol<"u"&&U[Symbol.iterator]||U["@@iterator"]);if(B!=null){var Q,J,ot=[],at=!0,ct=!1;try{for(B=B.call(U);!(at=(Q=B.next()).done)&&(ot.push(Q.value),!E||ot.length!==E);at=!0);}catch(Et){ct=!0,J=Et}finally{try{at||B.return==null||B.return()}finally{if(ct)throw J}}return ot}}(K,q)||function(U,E){if(U){if(typeof U=="string")return _(U,E);var B=Object.prototype.toString.call(U).slice(8,-1);if(B==="Object"&&U.constructor&&(B=U.constructor.name),B==="Map"||B==="Set")return Array.from(U);if(B==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(B))return _(U,E)}}(K,q)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function _(K,q){(q==null||q>K.length)&&(q=K.length);for(var U=0,E=new Array(q);U<q;U++)E[U]=K[U];return E}L.exports=function(K){var q=V(K,4),U=q[1],E=q[3];if(!E)return U;if(typeof btoa=="function"){var B=btoa(unescape(encodeURIComponent(JSON.stringify(E)))),Q="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(B),J="/*# ".concat(Q," */"),ot=E.sources.map(function(at){return"/*# sourceURL=".concat(E.sourceRoot||"").concat(at," */")});return[U].concat(ot).concat([J]).join(`
`)}return[U].join(`
`)}},2591:(L,V,_)=>{var K,q=function(){return K===void 0&&(K=!!(window&&document&&document.all&&!window.atob)),K},U=function(){var v={};return function(Gt){if(v[Gt]===void 0){var W=document.querySelector(Gt);if(window.HTMLIFrameElement&&W instanceof window.HTMLIFrameElement)try{W=W.contentDocument.head}catch{W=null}v[Gt]=W}return v[Gt]}}(),E=[];function B(v){for(var Gt=-1,W=0;W<E.length;W++)if(E[W].identifier===v){Gt=W;break}return Gt}function Q(v,Gt){for(var W={},jt=[],oe=0;oe<v.length;oe++){var ue=v[oe],Wt=Gt.base?ue[0]+Gt.base:ue[0],ze=W[Wt]||0,$e="".concat(Wt," ").concat(ze);W[Wt]=ze+1;var _e=B($e),ve={css:ue[1],media:ue[2],sourceMap:ue[3]};_e!==-1?(E[_e].references++,E[_e].updater(ve)):E.push({identifier:$e,updater:Kt(ve,Gt),references:1}),jt.push($e)}return jt}function J(v){var Gt=document.createElement("style"),W=v.attributes||{};if(W.nonce===void 0){var jt=_.nc;jt&&(W.nonce=jt)}if(Object.keys(W).forEach(function(ue){Gt.setAttribute(ue,W[ue])}),typeof v.insert=="function")v.insert(Gt);else{var oe=U(v.insert||"head");if(!oe)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");oe.appendChild(Gt)}return Gt}var ot,at=(ot=[],function(v,Gt){return ot[v]=Gt,ot.filter(Boolean).join(`
`)});function ct(v,Gt,W,jt){var oe=W?"":jt.media?"@media ".concat(jt.media," {").concat(jt.css,"}"):jt.css;if(v.styleSheet)v.styleSheet.cssText=at(Gt,oe);else{var ue=document.createTextNode(oe),Wt=v.childNodes;Wt[Gt]&&v.removeChild(Wt[Gt]),Wt.length?v.insertBefore(ue,Wt[Gt]):v.appendChild(ue)}}function Et(v,Gt,W){var jt=W.css,oe=W.media,ue=W.sourceMap;if(oe?v.setAttribute("media",oe):v.removeAttribute("media"),ue&&typeof btoa<"u"&&(jt+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ue))))," */")),v.styleSheet)v.styleSheet.cssText=jt;else{for(;v.firstChild;)v.removeChild(v.firstChild);v.appendChild(document.createTextNode(jt))}}var xt=null,Vt=0;function Kt(v,Gt){var W,jt,oe;if(Gt.singleton){var ue=Vt++;W=xt||(xt=J(Gt)),jt=ct.bind(null,W,ue,!1),oe=ct.bind(null,W,ue,!0)}else W=J(Gt),jt=Et.bind(null,W,Gt),oe=function(){(function(Wt){if(Wt.parentNode===null)return!1;Wt.parentNode.removeChild(Wt)})(W)};return jt(v),function(Wt){if(Wt){if(Wt.css===v.css&&Wt.media===v.media&&Wt.sourceMap===v.sourceMap)return;jt(v=Wt)}else oe()}}L.exports=function(v,Gt){(Gt=Gt||{}).singleton||typeof Gt.singleton=="boolean"||(Gt.singleton=q());var W=Q(v=v||[],Gt);return function(jt){if(jt=jt||[],Object.prototype.toString.call(jt)==="[object Array]"){for(var oe=0;oe<W.length;oe++){var ue=B(W[oe]);E[ue].references--}for(var Wt=Q(jt,Gt),ze=0;ze<W.length;ze++){var $e=B(W[ze]);E[$e].references===0&&(E[$e].updater(),E.splice($e,1))}W=Wt}}}}},P={};function j(L){var V=P[L];if(V!==void 0)return V.exports;var _=P[L]={id:L,exports:{}};return A[L](_,_.exports,j),_.exports}j.n=L=>{var V=L&&L.__esModule?()=>L.default:()=>L;return j.d(V,{a:V}),V},j.d=(L,V)=>{for(var _ in V)j.o(V,_)&&!j.o(L,_)&&Object.defineProperty(L,_,{enumerable:!0,get:V[_]})},j.o=(L,V)=>Object.prototype.hasOwnProperty.call(L,V),j.nc=void 0;var h={};return(()=>{function L({emitter:i,activator:t,callback:e,contextElements:n}){i.listenTo(document,"mousedown",(o,r)=>{if(!t())return;const s=typeof r.composedPath=="function"?r.composedPath():[],a=typeof n=="function"?n():n;for(const c of a)if(c.contains(r.target)||s.includes(c))return;e()})}function V(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...t){super(...t),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function _({view:i}){i.listenTo(i.element,"submit",(t,e)=>{e.preventDefault(),i.fire("submit")},{useCapture:!0})}function K({keystrokeHandler:i,focusTracker:t,gridItems:e,numberOfColumns:n,uiLanguageDirection:o}){const r=typeof n=="number"?()=>n:n;function s(l){return d=>{const p=e.find(y=>y.element===t.focusedElement),m=e.getIndex(p),w=l(m,e);e.get(w).focus(),d.stopPropagation(),d.preventDefault()}}function a(l,d){return l===d-1?0:l+1}function c(l,d){return l===0?d-1:l-1}i.set("arrowright",s((l,d)=>o==="rtl"?c(l,d.length):a(l,d.length))),i.set("arrowleft",s((l,d)=>o==="rtl"?a(l,d.length):c(l,d.length))),i.set("arrowup",s((l,d)=>{let p=l-r();return p<0&&(p=l+r()*Math.floor(d.length/r()),p>d.length-1&&(p-=r())),p})),i.set("arrowdown",s((l,d)=>{let p=l+r();return p>d.length-1&&(p=l%r()),p}))}j.d(h,{default:()=>Tf});const q=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var U;const E={isMac:B(q),isWindows:(U=q,U.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(q),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(q),isiOS:function(i){return!!i.match(/iphone|ipad/i)||B(i)&&navigator.maxTouchPoints>0}(q),isAndroid:function(i){return i.indexOf("android")>-1}(q),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(q),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function B(i){return i.indexOf("macintosh")>-1}function Q(i,t,e,n){e=e||function(c,l){return c===l};const o=Array.isArray(i)?i:Array.prototype.slice.call(i),r=Array.isArray(t)?t:Array.prototype.slice.call(t),s=function(c,l,d){const p=J(c,l,d);if(p===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const m=ot(c,p),w=ot(l,p),y=J(m,w,d),S=c.length-y,F=l.length-y;return{firstIndex:p,lastIndexOld:S,lastIndexNew:F}}(o,r,e);return n?function(c,l){const{firstIndex:d,lastIndexOld:p,lastIndexNew:m}=c;if(d===-1)return Array(l).fill("equal");let w=[];return d>0&&(w=w.concat(Array(d).fill("equal"))),m-d>0&&(w=w.concat(Array(m-d).fill("insert"))),p-d>0&&(w=w.concat(Array(p-d).fill("delete"))),m<l&&(w=w.concat(Array(l-m).fill("equal"))),w}(s,r.length):function(c,l){const d=[],{firstIndex:p,lastIndexOld:m,lastIndexNew:w}=l;return w-p>0&&d.push({index:p,type:"insert",values:c.slice(p,w)}),m-p>0&&d.push({index:p+(w-p),type:"delete",howMany:m-p}),d}(r,s)}function J(i,t,e){for(let n=0;n<Math.max(i.length,t.length);n++)if(i[n]===void 0||t[n]===void 0||!e(i[n],t[n]))return n;return-1}function ot(i,t){return i.slice(t).reverse()}function at(i,t,e){e=e||function(S,F){return S===F};const n=i.length,o=t.length;if(n>200||o>200||n+o>300)return at.fastDiff(i,t,e,!0);let r,s;if(o<n){const S=i;i=t,t=S,r="delete",s="insert"}else r="insert",s="delete";const a=i.length,c=t.length,l=c-a,d={},p={};function m(S){const F=(p[S-1]!==void 0?p[S-1]:-1)+1,G=p[S+1]!==void 0?p[S+1]:-1,it=F>G?-1:1;d[S+it]&&(d[S]=d[S+it].slice(0)),d[S]||(d[S]=[]),d[S].push(F>G?r:s);let ut=Math.max(F,G),Ct=ut-S;for(;Ct<a&&ut<c&&e(i[Ct],t[ut]);)Ct++,ut++,d[S].push("equal");return ut}let w,y=0;do{for(w=-y;w<l;w++)p[w]=m(w);for(w=l+y;w>l;w--)p[w]=m(w);p[l]=m(l),y++}while(p[l]!==c);return d[l].slice(1)}at.fastDiff=Q;const ct=function(){return function i(){i.called=!0}};class Et{constructor(t,e){this.source=t,this.name=e,this.path=[],this.stop=ct(),this.off=ct()}}const xt=new Array(256).fill("").map((i,t)=>("0"+t.toString(16)).slice(-2));function Vt(){const i=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+xt[255&i]+xt[i>>8&255]+xt[i>>16&255]+xt[i>>24&255]+xt[255&t]+xt[t>>8&255]+xt[t>>16&255]+xt[t>>24&255]+xt[255&e]+xt[e>>8&255]+xt[e>>16&255]+xt[e>>24&255]+xt[255&n]+xt[n>>8&255]+xt[n>>16&255]+xt[n>>24&255]}const Kt={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function v(i,t){const e=Kt.get(t.priority);for(let n=0;n<i.length;n++)if(Kt.get(i[n].priority)<e)return void i.splice(n,0,t);i.push(t)}const Gt="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class W extends Error{constructor(t,e,n){super(function(o,r){const s=new WeakSet,a=(d,p)=>{if(typeof p=="object"&&p!==null){if(s.has(p))return`[object ${p.constructor.name}]`;s.add(p)}return p},c=r?` ${JSON.stringify(r,a)}`:"",l=ue(o);return o+c+l}(t,n)),this.name="CKEditorError",this.context=e,this.data=n}is(t){return t==="CKEditorError"}static rethrowUnexpectedError(t,e){if(t.is&&t.is("CKEditorError"))throw t;const n=new W(t.message,e);throw n.stack=t.stack,n}}function jt(i,t){console.warn(...Wt(i,t))}function oe(i,t){console.error(...Wt(i,t))}function ue(i){return`
Read more: ${Gt}#error-${i}`}function Wt(i,t){const e=ue(i);return t?[i,t,e]:[i,e]}const ze="41.3.1",$e=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new W("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=ze;const _e=Symbol("listeningTo"),ve=Symbol("emitterId"),Xe=Symbol("delegations"),We=le(Object);function le(i){return i?class extends i{on(t,e,n){this.listenTo(this,t,e,n)}once(t,e,n){let o=!1;this.listenTo(this,t,(r,...s)=>{o||(o=!0,r.off(),e.call(this,r,...s))},n)}off(t,e){this.stopListening(this,t,e)}listenTo(t,e,n,o={}){let r,s;this[_e]||(this[_e]={});const a=this[_e];ti(t)||Xn(t);const c=ti(t);(r=a[c])||(r=a[c]={emitter:t,callbacks:{}}),(s=r.callbacks[e])||(s=r.callbacks[e]=[]),s.push(n),function(l,d,p,m,w){d._addEventListener?d._addEventListener(p,m,w):l._addEventListener.call(d,p,m,w)}(this,t,e,n,o)}stopListening(t,e,n){const o=this[_e];let r=t&&ti(t);const s=o&&r?o[r]:void 0,a=s&&e?s.callbacks[e]:void 0;if(!(!o||t&&!s||e&&!a))if(n)gi(this,t,e,n),a.indexOf(n)!==-1&&(a.length===1?delete s.callbacks[e]:gi(this,t,e,n));else if(a){for(;n=a.pop();)gi(this,t,e,n);delete s.callbacks[e]}else if(s){for(e in s.callbacks)this.stopListening(t,e);delete o[r]}else{for(r in o)this.stopListening(o[r].emitter);delete this[_e]}}fire(t,...e){try{const n=t instanceof Et?t:new Et(this,t),o=n.name;let r=tn(this,o);if(n.path.push(this),r){const a=[n,...e];r=Array.from(r);for(let c=0;c<r.length&&(r[c].callback.apply(this,a),n.off.called&&(delete n.off.called,this._removeEventListener(o,r[c].callback)),!n.stop.called);c++);}const s=this[Xe];if(s){const a=s.get(o),c=s.get("*");a&&Wn(a,n,e),c&&Wn(c,n,e)}return n.return}catch(n){W.rethrowUnexpectedError(n,this)}}delegate(...t){return{to:(e,n)=>{this[Xe]||(this[Xe]=new Map),t.forEach(o=>{const r=this[Xe].get(o);r?r.set(e,n):this[Xe].set(o,new Map([[e,n]]))})}}}stopDelegating(t,e){if(this[Xe])if(t)if(e){const n=this[Xe].get(t);n&&n.delete(e)}else this[Xe].delete(t);else this[Xe].clear()}_addEventListener(t,e,n){(function(s,a){const c=Ke(s);if(c[a])return;let l=a,d=null;const p=[];for(;l!==""&&!c[l];)c[l]={callbacks:[],childEvents:[]},p.push(c[l]),d&&c[l].childEvents.push(d),d=l,l=l.substr(0,l.lastIndexOf(":"));if(l!==""){for(const m of p)m.callbacks=c[l].callbacks.slice();c[l].childEvents.push(d)}})(this,t);const o=$n(this,t),r={callback:e,priority:Kt.get(n.priority)};for(const s of o)v(s,r)}_removeEventListener(t,e){const n=$n(this,t);for(const o of n)for(let r=0;r<o.length;r++)o[r].callback==e&&(o.splice(r,1),r--)}}:We}function Xn(i,t){i[ve]||(i[ve]=t||Vt())}function ti(i){return i[ve]}function Ke(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function $n(i,t){const e=Ke(i)[t];if(!e)return[];let n=[e.callbacks];for(let o=0;o<e.childEvents.length;o++){const r=$n(i,e.childEvents[o]);n=n.concat(r)}return n}function tn(i,t){let e;return i._events&&(e=i._events[t])&&e.callbacks.length?e.callbacks:t.indexOf(":")>-1?tn(i,t.substr(0,t.lastIndexOf(":"))):null}function Wn(i,t,e){for(let[n,o]of i){o?typeof o=="function"&&(o=o(t.name)):o=t.name;const r=new Et(t.source,o);r.path=[...t.path],n.fire(r,...e)}}function gi(i,t,e,n){t._removeEventListener?t._removeEventListener(e,n):i._removeEventListener.call(t,e,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{le[i]=We.prototype[i]});const ge=function(i){var t=typeof i;return i!=null&&(t=="object"||t=="function")},mi=Symbol("observableProperties"),hn=Symbol("boundObservables"),ji=Symbol("boundProperties"),fn=Symbol("decoratedMethods"),ei=Symbol("decoratedOriginal"),Do=we(le());function we(i){return i?class extends i{set(t,e){if(ge(t))return void Object.keys(t).forEach(o=>{this.set(o,t[o])},this);pn(this);const n=this[mi];if(t in this&&!n.has(t))throw new W("observable-set-cannot-override",this);Object.defineProperty(this,t,{enumerable:!0,configurable:!0,get:()=>n.get(t),set(o){const r=n.get(t);let s=this.fire(`set:${t}`,t,o,r);s===void 0&&(s=o),r===s&&n.has(t)||(n.set(t,s),this.fire(`change:${t}`,t,s,r))}}),this[t]=e}bind(...t){if(!t.length||!qn(t))throw new W("observable-bind-wrong-properties",this);if(new Set(t).size!==t.length)throw new W("observable-bind-duplicate-properties",this);pn(this);const e=this[ji];t.forEach(o=>{if(e.has(o))throw new W("observable-bind-rebind",this)});const n=new Map;return t.forEach(o=>{const r={property:o,to:[]};e.set(o,r),n.set(o,r)}),{to:gn,toMany:mn,_observable:this,_bindProperties:t,_to:[],_bindings:n}}unbind(...t){if(!this[mi])return;const e=this[ji],n=this[hn];if(t.length){if(!qn(t))throw new W("observable-unbind-wrong-properties",this);t.forEach(o=>{const r=e.get(o);r&&(r.to.forEach(([s,a])=>{const c=n.get(s),l=c[a];l.delete(r),l.size||delete c[a],Object.keys(c).length||(n.delete(s),this.stopListening(s,"change"))}),e.delete(o))})}else n.forEach((o,r)=>{this.stopListening(r,"change")}),n.clear(),e.clear()}decorate(t){pn(this);const e=this[t];if(!e)throw new W("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:t});this.on(t,(n,o)=>{n.return=e.apply(this,o)}),this[t]=function(...n){return this.fire(t,n)},this[t][ei]=e,this[fn]||(this[fn]=[]),this[fn].push(t)}stopListening(t,e,n){if(!t&&this[fn]){for(const o of this[fn])this[o]=this[o][ei];delete this[fn]}super.stopListening(t,e,n)}}:Do}function pn(i){i[mi]||(Object.defineProperty(i,mi,{value:new Map}),Object.defineProperty(i,hn,{value:new Map}),Object.defineProperty(i,ji,{value:new Map}))}function gn(...i){const t=function(...r){if(!r.length)throw new W("observable-bind-to-parse-error",null);const s={to:[]};let a;return typeof r[r.length-1]=="function"&&(s.callback=r.pop()),r.forEach(c=>{if(typeof c=="string")a.properties.push(c);else{if(typeof c!="object")throw new W("observable-bind-to-parse-error",null);a={observable:c,properties:[]},s.to.push(a)}}),s}(...i),e=Array.from(this._bindings.keys()),n=e.length;if(!t.callback&&t.to.length>1)throw new W("observable-bind-to-no-callback",this);if(n>1&&t.callback)throw new W("observable-bind-to-extra-callback",this);var o;t.to.forEach(r=>{if(r.properties.length&&r.properties.length!==n)throw new W("observable-bind-to-properties-length",this);r.properties.length||(r.properties=this._bindProperties)}),this._to=t.to,t.callback&&(this._bindings.get(e[0]).callback=t.callback),o=this._observable,this._to.forEach(r=>{const s=o[hn];let a;s.get(r.observable)||o.listenTo(r.observable,"change",(c,l)=>{a=s.get(r.observable)[l],a&&a.forEach(d=>{Me(o,d.property)})})}),function(r){let s;r._bindings.forEach((a,c)=>{r._to.forEach(l=>{s=l.properties[a.callback?0:r._bindProperties.indexOf(c)],a.to.push([l.observable,s]),function(d,p,m,w){const y=d[hn],S=y.get(m),F=S||{};F[w]||(F[w]=new Set),F[w].add(p),S||y.set(m,F)}(r._observable,a,l.observable,s)})})}(this),this._bindProperties.forEach(r=>{Me(this._observable,r)})}function mn(i,t,e){if(this._bindings.size>1)throw new W("observable-bind-to-many-not-one-binding",this);this.to(...function(n,o){const r=n.map(s=>[s,o]);return Array.prototype.concat.apply([],r)}(i,t),e)}function qn(i){return i.every(t=>typeof t=="string")}function Me(i,t){const e=i[ji].get(t);let n;e.callback?n=e.callback.apply(i,e.to.map(o=>o[0][o[1]])):(n=e.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,t)?i[t]=n:i.set(t,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{we[i]=Do.prototype[i]});class oo{constructor(){this._replacedElements=[]}replace(t,e){this._replacedElements.push({element:t,newElement:e}),t.style.display="none",e&&t.parentNode.insertBefore(e,t.nextSibling)}restore(){this._replacedElements.forEach(({element:t,newElement:e})=>{t.style.display="",e&&e.remove()}),this._replacedElements=[]}}function bn(i){let t=0;for(const e of i)t++;return t}function Be(i,t){const e=Math.min(i.length,t.length);for(let n=0;n<e;n++)if(i[n]!=t[n])return n;return i.length==t.length?"same":i.length<t.length?"prefix":"extension"}function je(i){return!(!i||!i[Symbol.iterator])}const qt=typeof Qs=="object"&&Qs&&Qs.Object===Object&&Qs;var en=typeof self=="object"&&self&&self.Object===Object&&self;const Cn=qt||en||Function("return this")(),qe=Cn.Symbol;var ws=Object.prototype,As=ws.hasOwnProperty,vs=ws.toString,yn=qe?qe.toStringTag:void 0;const On=function(i){var t=As.call(i,yn),e=i[yn];try{i[yn]=void 0;var n=!0}catch{}var o=vs.call(i);return n&&(t?i[yn]=e:delete i[yn]),o};var Si=Object.prototype.toString;const Ii=function(i){return Si.call(i)};var ir=qe?qe.toStringTag:void 0;const ni=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":ir&&ir in Object(i)?On(i):Ii(i)},En=Array.isArray,Bn=function(i){return i!=null&&typeof i=="object"},jr=function(i){return typeof i=="string"||!En(i)&&Bn(i)&&ni(i)=="[object String]"};function Fe(i,t,e={},n=[]){const o=e&&e.xmlns,r=o?i.createElementNS(o,t):i.createElement(t);for(const s in e)r.setAttribute(s,e[s]);!jr(n)&&je(n)||(n=[n]);for(let s of n)jr(s)&&(s=i.createTextNode(s)),r.appendChild(s);return r}const bi=function(i,t){return function(e){return i(t(e))}},or=bi(Object.getPrototypeOf,Object);var Cs=Function.prototype,Gn=Object.prototype,sn=Cs.toString,Fr=Gn.hasOwnProperty,ys=sn.call(Object);const xn=function(i){if(!Bn(i)||ni(i)!="[object Object]")return!1;var t=or(i);if(t===null)return!0;var e=Fr.call(t,"constructor")&&t.constructor;return typeof e=="function"&&e instanceof e&&sn.call(e)==ys},Es=function(){this.__data__=[],this.size=0},ki=function(i,t){return i===t||i!=i&&t!=t},Tn=function(i,t){for(var e=i.length;e--;)if(ki(i[e][0],t))return e;return-1};var _i=Array.prototype.splice;const So=function(i){var t=this.__data__,e=Tn(t,i);return!(e<0)&&(e==t.length-1?t.pop():_i.call(t,e,1),--this.size,!0)},xs=function(i){var t=this.__data__,e=Tn(t,i);return e<0?void 0:t[e][1]},ia=function(i){return Tn(this.__data__,i)>-1},oa=function(i,t){var e=this.__data__,n=Tn(e,i);return n<0?(++this.size,e.push([i,t])):e[n][1]=t,this};function ro(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}ro.prototype.clear=Es,ro.prototype.delete=So,ro.prototype.get=xs,ro.prototype.has=ia,ro.prototype.set=oa;const wr=ro,Io=function(){this.__data__=new wr,this.size=0},Vr=function(i){var t=this.__data__,e=t.delete(i);return this.size=t.size,e},rr=function(i){return this.__data__.get(i)},an=function(i){return this.__data__.has(i)},nn=function(i){if(!ge(i))return!1;var t=ni(i);return t=="[object Function]"||t=="[object GeneratorFunction]"||t=="[object AsyncFunction]"||t=="[object Proxy]"},Mo=Cn["__core-js_shared__"];var wi=function(){var i=/[^.]+$/.exec(Mo&&Mo.keys&&Mo.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const Mi=function(i){return!!wi&&wi in i};var Hr=Function.prototype.toString;const Fi=function(i){if(i!=null){try{return Hr.call(i)}catch{}try{return i+""}catch{}}return""};var kn=/^\[object .+?Constructor\]$/,Ai=Function.prototype,No=Object.prototype,Ar=Ai.toString,Oo=No.hasOwnProperty,ra=RegExp("^"+Ar.call(Oo).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const Ur=function(i){return!(!ge(i)||Mi(i))&&(nn(i)?ra:kn).test(Fi(i))},sa=function(i,t){return i==null?void 0:i[t]},Ni=function(i,t){var e=sa(i,t);return Ur(e)?e:void 0},vi=Ni(Cn,"Map"),Vi=Ni(Object,"create"),vr=function(){this.__data__=Vi?Vi(null):{},this.size=0},Hi=function(i){var t=this.has(i)&&delete this.__data__[i];return this.size-=t?1:0,t};var Ye=Object.prototype.hasOwnProperty;const so=function(i){var t=this.__data__;if(Vi){var e=t[i];return e==="__lodash_hash_undefined__"?void 0:e}return Ye.call(t,i)?t[i]:void 0};var Dn=Object.prototype.hasOwnProperty;const Ln=function(i){var t=this.__data__;return Vi?t[i]!==void 0:Dn.call(t,i)},Bo=function(i,t){var e=this.__data__;return this.size+=this.has(i)?0:1,e[i]=Vi&&t===void 0?"__lodash_hash_undefined__":t,this};function ii(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}ii.prototype.clear=vr,ii.prototype.delete=Hi,ii.prototype.get=so,ii.prototype.has=Ln,ii.prototype.set=Bo;const sr=ii,Cr=function(){this.size=0,this.__data__={hash:new sr,map:new(vi||wr),string:new sr}},yr=function(i){var t=typeof i;return t=="string"||t=="number"||t=="symbol"||t=="boolean"?i!=="__proto__":i===null},ao=function(i,t){var e=i.__data__;return yr(t)?e[typeof t=="string"?"string":"hash"]:e.map},Ui=function(i){var t=ao(this,i).delete(i);return this.size-=t?1:0,t},cn=function(i){return ao(this,i).get(i)},Lo=function(i){return ao(this,i).has(i)},Ci=function(i,t){var e=ao(this,i),n=e.size;return e.set(i,t),this.size+=e.size==n?0:1,this};function oi(i){var t=-1,e=i==null?0:i.length;for(this.clear();++t<e;){var n=i[t];this.set(n[0],n[1])}}oi.prototype.clear=Cr,oi.prototype.delete=Ui,oi.prototype.get=cn,oi.prototype.has=Lo,oi.prototype.set=Ci;const Po=oi,Kn=function(i,t){var e=this.__data__;if(e instanceof wr){var n=e.__data__;if(!vi||n.length<199)return n.push([i,t]),this.size=++e.size,this;e=this.__data__=new Po(n)}return e.set(i,t),this.size=e.size,this};function Qe(i){var t=this.__data__=new wr(i);this.size=t.size}Qe.prototype.clear=Io,Qe.prototype.delete=Vr,Qe.prototype.get=rr,Qe.prototype.has=an,Qe.prototype.set=Kn;const yi=Qe,$i=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n&&t(i[e],e,i)!==!1;);return i},ri=function(){try{var i=Ni(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Ei=function(i,t,e){t=="__proto__"&&ri?ri(i,t,{configurable:!0,enumerable:!0,value:e,writable:!0}):i[t]=e};var $r=Object.prototype.hasOwnProperty;const co=function(i,t,e){var n=i[t];$r.call(i,t)&&ki(n,e)&&(e!==void 0||t in i)||Ei(i,t,e)},Wi=function(i,t,e,n){var o=!e;e||(e={});for(var r=-1,s=t.length;++r<s;){var a=t[r],c=n?n(e[a],i[a],a,e,i):void 0;c===void 0&&(c=i[a]),o?Ei(e,a,c):co(e,a,c)}return e},Ts=function(i,t){for(var e=-1,n=Array(i);++e<i;)n[e]=t(e);return n},Wr=function(i){return Bn(i)&&ni(i)=="[object Arguments]"};var Ds=Object.prototype,Ro=Ds.hasOwnProperty,_n=Ds.propertyIsEnumerable;const si=Wr(function(){return arguments}())?Wr:function(i){return Bn(i)&&Ro.call(i,"callee")&&!_n.call(i,"callee")},qr=function(){return!1};var Er=f&&!f.nodeType&&f,Ss=Er&&!0&&x&&!x.nodeType&&x,lo=Ss&&Ss.exports===Er?Cn.Buffer:void 0;const xi=(lo?lo.isBuffer:void 0)||qr;var ar=/^(?:0|[1-9]\d*)$/;const Oi=function(i,t){var e=typeof i;return!!(t=t??9007199254740991)&&(e=="number"||e!="symbol"&&ar.test(i))&&i>-1&&i%1==0&&i<t},zo=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var Ee={};Ee["[object Float32Array]"]=Ee["[object Float64Array]"]=Ee["[object Int8Array]"]=Ee["[object Int16Array]"]=Ee["[object Int32Array]"]=Ee["[object Uint8Array]"]=Ee["[object Uint8ClampedArray]"]=Ee["[object Uint16Array]"]=Ee["[object Uint32Array]"]=!0,Ee["[object Arguments]"]=Ee["[object Array]"]=Ee["[object ArrayBuffer]"]=Ee["[object Boolean]"]=Ee["[object DataView]"]=Ee["[object Date]"]=Ee["[object Error]"]=Ee["[object Function]"]=Ee["[object Map]"]=Ee["[object Number]"]=Ee["[object Object]"]=Ee["[object RegExp]"]=Ee["[object Set]"]=Ee["[object String]"]=Ee["[object WeakMap]"]=!1;const xr=function(i){return Bn(i)&&zo(i.length)&&!!Ee[ni(i)]},Bi=function(i){return function(t){return i(t)}};var uo=f&&!f.nodeType&&f,ai=uo&&!0&&x&&!x.nodeType&&x,Gr=ai&&ai.exports===uo&&qt.process;const wn=function(){try{var i=ai&&ai.require&&ai.require("util").types;return i||Gr&&Gr.binding&&Gr.binding("util")}catch{}}();var ho=wn&&wn.isTypedArray;const Li=ho?Bi(ho):xr;var jo=Object.prototype.hasOwnProperty;const cr=function(i,t){var e=En(i),n=!e&&si(i),o=!e&&!n&&xi(i),r=!e&&!n&&!o&&Li(i),s=e||n||o||r,a=s?Ts(i.length,String):[],c=a.length;for(var l in i)!t&&!jo.call(i,l)||s&&(l=="length"||o&&(l=="offset"||l=="parent")||r&&(l=="buffer"||l=="byteLength"||l=="byteOffset")||Oi(l,c))||a.push(l);return a};var fo=Object.prototype;const qi=function(i){var t=i&&i.constructor;return i===(typeof t=="function"&&t.prototype||fo)},Is=bi(Object.keys,Object);var u=Object.prototype.hasOwnProperty;const g=function(i){if(!qi(i))return Is(i);var t=[];for(var e in Object(i))u.call(i,e)&&e!="constructor"&&t.push(e);return t},k=function(i){return i!=null&&zo(i.length)&&!nn(i)},C=function(i){return k(i)?cr(i):g(i)},I=function(i,t){return i&&Wi(t,C(t),i)},M=function(i){var t=[];if(i!=null)for(var e in Object(i))t.push(e);return t};var z=Object.prototype.hasOwnProperty;const tt=function(i){if(!ge(i))return M(i);var t=qi(i),e=[];for(var n in i)(n!="constructor"||!t&&z.call(i,n))&&e.push(n);return e},Z=function(i){return k(i)?cr(i,!0):tt(i)},st=function(i,t){return i&&Wi(t,Z(t),i)};var _t=f&&!f.nodeType&&f,At=_t&&!0&&x&&!x.nodeType&&x,gt=At&&At.exports===_t?Cn.Buffer:void 0,Mt=gt?gt.allocUnsafe:void 0;const Xt=function(i,t){if(t)return i.slice();var e=i.length,n=Mt?Mt(e):new i.constructor(e);return i.copy(n),n},se=function(i,t){var e=-1,n=i.length;for(t||(t=Array(n));++e<n;)t[e]=i[e];return t},te=function(i,t){for(var e=-1,n=i==null?0:i.length,o=0,r=[];++e<n;){var s=i[e];t(s,e,i)&&(r[o++]=s)}return r},Ve=function(){return[]};var Ue=Object.prototype.propertyIsEnumerable,on=Object.getOwnPropertySymbols;const ln=on?function(i){return i==null?[]:(i=Object(i),te(on(i),function(t){return Ue.call(i,t)}))}:Ve,he=function(i,t){return Wi(i,ln(i),t)},Gi=function(i,t){for(var e=-1,n=t.length,o=i.length;++e<n;)i[o+e]=t[e];return i},me=Object.getOwnPropertySymbols?function(i){for(var t=[];i;)Gi(t,ln(i)),i=or(i);return t}:Ve,Le=function(i,t){return Wi(i,me(i),t)},po=function(i,t,e){var n=t(i);return En(i)?n:Gi(n,e(i))},go=function(i){return po(i,C,ln)},ci=function(i){return po(i,Z,me)},li=Ni(Cn,"DataView"),Ge=Ni(Cn,"Promise"),Pn=Ni(Cn,"Set"),rn=Ni(Cn,"WeakMap");var Rn="[object Map]",Ki="[object Promise]",Ze="[object Set]",Yn="[object WeakMap]",Ms="[object DataView]",lr=Fi(li),Ns=Fi(vi),Ce=Fi(Ge),Fo=Fi(Pn),zn=Fi(rn),Qn=ni;(li&&Qn(new li(new ArrayBuffer(1)))!=Ms||vi&&Qn(new vi)!=Rn||Ge&&Qn(Ge.resolve())!=Ki||Pn&&Qn(new Pn)!=Ze||rn&&Qn(new rn)!=Yn)&&(Qn=function(i){var t=ni(i),e=t=="[object Object]"?i.constructor:void 0,n=e?Fi(e):"";if(n)switch(n){case lr:return Ms;case Ns:return Rn;case Ce:return Ki;case Fo:return Ze;case zn:return Yn}return t});const dr=Qn;var Vo=Object.prototype.hasOwnProperty;const jn=function(i){var t=i.length,e=new i.constructor(t);return t&&typeof i[0]=="string"&&Vo.call(i,"index")&&(e.index=i.index,e.input=i.input),e},di=Cn.Uint8Array,Ho=function(i){var t=new i.constructor(i.byteLength);return new di(t).set(new di(i)),t},Yi=function(i,t){var e=t?Ho(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.byteLength)};var Uo=/\w*$/;const Pi=function(i){var t=new i.constructor(i.source,Uo.exec(i));return t.lastIndex=i.lastIndex,t};var mo=qe?qe.prototype:void 0,$o=mo?mo.valueOf:void 0;const Kr=function(i){return $o?Object($o.call(i)):{}},Yr=function(i,t){var e=t?Ho(i.buffer):i.buffer;return new i.constructor(e,i.byteOffset,i.length)},Tr=function(i,t,e){var n=i.constructor;switch(t){case"[object ArrayBuffer]":return Ho(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return Yi(i,e);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Yr(i,e);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return Pi(i);case"[object Symbol]":return Kr(i)}};var Ti=Object.create;const Qi=function(){function i(){}return function(t){if(!ge(t))return{};if(Ti)return Ti(t);i.prototype=t;var e=new i;return i.prototype=void 0,e}}(),Dr=function(i){return typeof i.constructor!="function"||qi(i)?{}:Qi(or(i))},Zi=function(i){return Bn(i)&&dr(i)=="[object Map]"};var Qr=wn&&wn.isMap;const Y=Qr?Bi(Qr):Zi,rt=function(i){return Bn(i)&&dr(i)=="[object Set]"};var ht=wn&&wn.isSet;const mt=ht?Bi(ht):rt;var vt="[object Arguments]",Lt="[object Function]",Ut="[object Object]",Pt={};Pt[vt]=Pt["[object Array]"]=Pt["[object ArrayBuffer]"]=Pt["[object DataView]"]=Pt["[object Boolean]"]=Pt["[object Date]"]=Pt["[object Float32Array]"]=Pt["[object Float64Array]"]=Pt["[object Int8Array]"]=Pt["[object Int16Array]"]=Pt["[object Int32Array]"]=Pt["[object Map]"]=Pt["[object Number]"]=Pt[Ut]=Pt["[object RegExp]"]=Pt["[object Set]"]=Pt["[object String]"]=Pt["[object Symbol]"]=Pt["[object Uint8Array]"]=Pt["[object Uint8ClampedArray]"]=Pt["[object Uint16Array]"]=Pt["[object Uint32Array]"]=!0,Pt["[object Error]"]=Pt[Lt]=Pt["[object WeakMap]"]=!1;const $t=function i(t,e,n,o,r,s){var a,c=1&e,l=2&e,d=4&e;if(n&&(a=r?n(t,o,r,s):n(t)),a!==void 0)return a;if(!ge(t))return t;var p=En(t);if(p){if(a=jn(t),!c)return se(t,a)}else{var m=dr(t),w=m==Lt||m=="[object GeneratorFunction]";if(xi(t))return Xt(t,c);if(m==Ut||m==vt||w&&!r){if(a=l||w?{}:Dr(t),!c)return l?Le(t,st(a,t)):he(t,I(a,t))}else{if(!Pt[m])return r?t:{};a=Tr(t,m,c)}}s||(s=new yi);var y=s.get(t);if(y)return y;s.set(t,a),mt(t)?t.forEach(function(F){a.add(i(F,e,n,F,t,s))}):Y(t)&&t.forEach(function(F,G){a.set(G,i(F,e,n,G,t,s))});var S=p?void 0:(d?l?ci:go:l?Z:C)(t);return $i(S||t,function(F,G){S&&(F=t[G=F]),co(a,G,i(F,e,n,G,t,s))}),a},ae=function(i,t){return $t(i,5,t=typeof t=="function"?t:void 0)},Yt=function(i){return Bn(i)&&i.nodeType===1&&!xn(i)};class Qt{constructor(t,e){this._config={},e&&this.define(ee(e)),t&&this._setObjectToTarget(this._config,t)}set(t,e){this._setToTarget(this._config,t,e)}define(t,e){this._setToTarget(this._config,t,e,!0)}get(t){return this._getFromSource(this._config,t)}*names(){for(const t of Object.keys(this._config))yield t}_setToTarget(t,e,n,o=!1){if(xn(e))return void this._setObjectToTarget(t,e,o);const r=e.split(".");e=r.pop();for(const s of r)xn(t[s])||(t[s]={}),t=t[s];if(xn(n))return xn(t[e])||(t[e]={}),t=t[e],void this._setObjectToTarget(t,n,o);o&&t[e]!==void 0||(t[e]=n)}_getFromSource(t,e){const n=e.split(".");e=n.pop();for(const o of n){if(!xn(t[o])){t=null;break}t=t[o]}return t?ee(t[e]):void 0}_setObjectToTarget(t,e,n){Object.keys(e).forEach(o=>{this._setToTarget(t,o,e[o],n)})}}function ee(i){return ae(i,lt)}function lt(i){return Yt(i)||typeof i=="function"?i:void 0}function ft(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function pt(i){const t=Object.prototype.toString.apply(i);return t=="[object Window]"||t=="[object global]"}const H=et(le());function et(i){return i?class extends i{listenTo(t,e,n,o={}){if(ft(t)||pt(t)){const r={capture:!!o.useCapture,passive:!!o.usePassive},s=this._getProxyEmitter(t,r)||new wt(t,r);this.listenTo(s,e,n,o)}else super.listenTo(t,e,n,o)}stopListening(t,e,n){if(ft(t)||pt(t)){const o=this._getAllProxyEmitters(t);for(const r of o)this.stopListening(r,e,n)}else super.stopListening(t,e,n)}_getProxyEmitter(t,e){return function(n,o){const r=n[_e];return r&&r[o]?r[o].emitter:null}(this,yt(t,e))}_getAllProxyEmitters(t){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(e=>this._getProxyEmitter(t,e)).filter(e=>!!e)}}:H}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{et[i]=H.prototype[i]});class wt extends le(){constructor(t,e){super(),Xn(this,yt(t,e)),this._domNode=t,this._options=e}attach(t){if(this._domListeners&&this._domListeners[t])return;const e=this._createDomListener(t);this._domNode.addEventListener(t,e,this._options),this._domListeners||(this._domListeners={}),this._domListeners[t]=e}detach(t){let e;!this._domListeners[t]||(e=this._events[t])&&e.callbacks.length||this._domListeners[t].removeListener()}_addEventListener(t,e,n){this.attach(t),le().prototype._addEventListener.call(this,t,e,n)}_removeEventListener(t,e){le().prototype._removeEventListener.call(this,t,e),this.detach(t)}_createDomListener(t){const e=n=>{this.fire(t,n)};return e.removeListener=()=>{this._domNode.removeEventListener(t,e,this._options),delete this._domListeners[t]},e}}function yt(i,t){let e=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=Vt())}(i);for(const n of Object.keys(t).sort())t[n]&&(e+="-"+n);return e}let Rt;try{Rt={window,document}}catch{Rt={window:{},document:{}}}const Tt=Rt;function fe(i){const t=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(t.borderTopWidth,10),right:parseInt(t.borderRightWidth,10),bottom:parseInt(t.borderBottomWidth,10),left:parseInt(t.borderLeftWidth,10)}}function Ae(i){return Object.prototype.toString.call(i)=="[object Text]"}function Fn(i){return Object.prototype.toString.apply(i)=="[object Range]"}function Di(i){return i&&i.parentNode?i.offsetParent===Tt.document.body?null:i.offsetParent:null}const Os=["top","right","bottom","left","width","height"];class be{constructor(t){const e=Fn(t);if(Object.defineProperty(this,"_source",{value:t._source||t,writable:!0,enumerable:!1}),Lc(t)||e)if(e){const n=be.getDomRangeRects(t);aa(this,be.getBoundingRect(n))}else aa(this,t.getBoundingClientRect());else if(pt(t)){const{innerWidth:n,innerHeight:o}=t;aa(this,{top:0,right:n,bottom:o,left:0,width:n,height:o})}else aa(this,t)}clone(){return new be(this)}moveTo(t,e){return this.top=e,this.right=t+this.width,this.bottom=e+this.height,this.left=t,this}moveBy(t,e){return this.top+=e,this.right+=t,this.left+=t,this.bottom+=e,this}getIntersection(t){const e={top:Math.max(this.top,t.top),right:Math.min(this.right,t.right),bottom:Math.min(this.bottom,t.bottom),left:Math.max(this.left,t.left),width:0,height:0};if(e.width=e.right-e.left,e.height=e.bottom-e.top,e.width<0||e.height<0)return null;{const n=new be(e);return n._source=this._source,n}}getIntersectionArea(t){const e=this.getIntersection(t);return e?e.getArea():0}getArea(){return this.width*this.height}getVisible(){const t=this._source;let e=this.clone();if(Bc(t))return e;let n,o=t,r=t.parentNode||t.commonAncestorContainer;for(;r&&!Bc(r);){const a=((s=r)instanceof HTMLElement?s.ownerDocument.defaultView.getComputedStyle(s).overflow:"visible")==="visible";o instanceof HTMLElement&&ca(o)==="absolute"&&(n=o);const c=ca(r);if(a||n&&(c==="relative"&&a||c!=="relative")){o=r,r=r.parentNode;continue}const l=new be(r),d=e.getIntersection(l);if(!d)return null;d.getArea()<e.getArea()&&(e=d),o=r,r=r.parentNode}var s;return e}isEqual(t){for(const e of Os)if(this[e]!==t[e])return!1;return!0}contains(t){const e=this.getIntersection(t);return!(!e||!e.isEqual(t))}toAbsoluteRect(){const{scrollX:t,scrollY:e}=Tt.window,n=this.clone().moveBy(t,e);if(Lc(n._source)){const o=Di(n._source);o&&function(r,s){const a=new be(s),c=fe(s);let l=0,d=0;l-=a.left,d-=a.top,l+=s.scrollLeft,d+=s.scrollTop,l-=c.left,d-=c.top,r.moveBy(l,d)}(n,o)}return n}excludeScrollbarsAndBorders(){const t=this._source;let e,n,o;if(pt(t))e=t.innerWidth-t.document.documentElement.clientWidth,n=t.innerHeight-t.document.documentElement.clientHeight,o=t.getComputedStyle(t.document.documentElement).direction;else{const r=fe(t);e=t.offsetWidth-t.clientWidth-r.left-r.right,n=t.offsetHeight-t.clientHeight-r.top-r.bottom,o=t.ownerDocument.defaultView.getComputedStyle(t).direction,this.left+=r.left,this.top+=r.top,this.right-=r.right,this.bottom-=r.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=e,o==="ltr"?this.right-=e:this.left+=e,this.height-=n,this.bottom-=n,this}static getDomRangeRects(t){const e=[],n=Array.from(t.getClientRects());if(n.length)for(const o of n)e.push(new be(o));else{let o=t.startContainer;Ae(o)&&(o=o.parentNode);const r=new be(o.getBoundingClientRect());r.right=r.left,r.width=0,e.push(r)}return e}static getBoundingRect(t){const e={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const o of t)n++,e.left=Math.min(e.left,o.left),e.top=Math.min(e.top,o.top),e.right=Math.max(e.right,o.right),e.bottom=Math.max(e.bottom,o.bottom);return n==0?null:(e.width=e.right-e.left,e.height=e.bottom-e.top,new be(e))}}function aa(i,t){for(const e of Os)i[e]=t[e]}function Bc(i){return!!Lc(i)&&i===i.ownerDocument.body}function Lc(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function ca(i){return i instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).position:"static"}const Je=class{constructor(i,t){Je._observerInstance||Je._createObserver(),this._element=i,this._callback=t,Je._addElementCallback(i,t),Je._observerInstance.observe(i)}get element(){return this._element}destroy(){Je._deleteElementCallback(this._element,this._callback)}static _addElementCallback(i,t){Je._elementCallbacks||(Je._elementCallbacks=new Map);let e=Je._elementCallbacks.get(i);e||(e=new Set,Je._elementCallbacks.set(i,e)),e.add(t)}static _deleteElementCallback(i,t){const e=Je._getElementCallbacks(i);e&&(e.delete(t),e.size||(Je._elementCallbacks.delete(i),Je._observerInstance.unobserve(i))),Je._elementCallbacks&&!Je._elementCallbacks.size&&(Je._observerInstance=null,Je._elementCallbacks=null)}static _getElementCallbacks(i){return Je._elementCallbacks?Je._elementCallbacks.get(i):null}static _createObserver(){Je._observerInstance=new Tt.window.ResizeObserver(i=>{for(const t of i){const e=Je._getElementCallbacks(t.target);if(e)for(const n of e)n(t)}})}};let Zr=Je;function Pc(i,t){i instanceof HTMLTextAreaElement&&(i.value=t),i.innerHTML=t}function Bs(i){return t=>t+i}function la(i){let t=0;for(;i.previousSibling;)i=i.previousSibling,t++;return t}function Ll(i,t,e){i.insertBefore(e,i.childNodes[t]||null)}function da(i){return i&&i.nodeType===Node.COMMENT_NODE}function Jr(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}Zr._observerInstance=null,Zr._elementCallbacks=null;var Pl=Math.pow;function za({element:i,target:t,positions:e,limiter:n,fitInViewport:o,viewportOffsetConfig:r}){nn(t)&&(t=t()),nn(n)&&(n=n());const s=Di(i),a=function(m){m=Object.assign({top:0,bottom:0,left:0,right:0},m);const w=new be(Tt.window);return w.top+=m.top,w.height-=m.top,w.bottom-=m.bottom,w.height-=m.bottom,w}(r),c=new be(i),l=Rc(t,a);let d;if(!l||!a.getIntersection(l))return null;const p={targetRect:l,elementRect:c,positionedElementAncestor:s,viewportRect:a};if(n||o){if(n){const m=Rc(n,a);m&&(p.limiterRect=m)}d=function(m,w){const{elementRect:y}=w,S=y.getArea(),F=m.map(ut=>new zc(ut,w)).filter(ut=>!!ut.name);let G=0,it=null;for(const ut of F){const{limiterIntersectionArea:Ct,viewportIntersectionArea:Ht}=ut;if(Ct===S)return ut;const ie=Pl(Ht,2)+Pl(Ct,2);ie>G&&(G=ie,it=ut)}return it}(e,p)}else d=new zc(e[0],p);return d}function Rc(i,t){const e=new be(i).getVisible();return e?e.getIntersection(t):null}class zc{constructor(t,e){const n=t(e.targetRect,e.elementRect,e.viewportRect,e.limiterRect);if(!n)return;const{left:o,top:r,name:s,config:a}=n;this.name=s,this.config=a,this._positioningFunctionCoordinates={left:o,top:r},this._options=e}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const t=this._options.limiterRect;return t?t.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function ja(i){const t=i.parentNode;t&&t.removeChild(i)}function yu({window:i,rect:t,alignToTop:e,forceScroll:n,viewportOffset:o}){const r=t.clone().moveBy(0,o.bottom),s=t.clone().moveBy(0,-o.top),a=new be(i).excludeScrollbarsAndBorders(),c=e&&n,l=[s,r].every(y=>a.contains(y));let{scrollX:d,scrollY:p}=i;const m=d,w=p;c?p-=a.top-t.top+o.top:l||(zl(s,a)?p-=a.top-t.top+o.top:Rl(r,a)&&(p+=e?t.top-a.top-o.top:t.bottom-a.bottom+o.bottom)),l||(jl(t,a)?d-=a.left-t.left+o.left:Fl(t,a)&&(d+=t.right-a.right+o.right)),d==m&&p===w||i.scrollTo(d,p)}function ua({parent:i,getRect:t,alignToTop:e,forceScroll:n,ancestorOffset:o=0,limiterElement:r}){const s=jc(i),a=e&&n;let c,l,d;const p=r||s.document.body;for(;i!=p;)l=t(),c=new be(i).excludeScrollbarsAndBorders(),d=c.contains(l),a?i.scrollTop-=c.top-l.top+o:d||(zl(l,c)?i.scrollTop-=c.top-l.top+o:Rl(l,c)&&(i.scrollTop+=e?l.top-c.top-o:l.bottom-c.bottom+o)),d||(jl(l,c)?i.scrollLeft-=c.left-l.left+o:Fl(l,c)&&(i.scrollLeft+=l.right-c.right+o)),i=i.parentNode}function Rl(i,t){return i.bottom>t.bottom}function zl(i,t){return i.top<t.top}function jl(i,t){return i.left<t.left}function Fl(i,t){return i.right>t.right}function jc(i){return Fn(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function Eu(i){if(Fn(i)){let t=i.commonAncestorContainer;return Ae(t)&&(t=t.parentNode),t}return i.parentNode}function Fc(i,t){const e=jc(i),n=new be(i);if(e===t)return n;{let o=e;for(;o!=t;){const r=o.frameElement,s=new be(r).excludeScrollbarsAndBorders();n.moveBy(s.left,s.top),o=o.parent}}return n}const Xr={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},xu={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},ha={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},re=function(){const i={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let t=65;t<=90;t++)i[String.fromCharCode(t).toLowerCase()]=t;for(let t=48;t<=57;t++)i[t-48]=t;for(let t=112;t<=123;t++)i["f"+(t-111)]=t;return Object.assign(i,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),i}(),Tu=Object.fromEntries(Object.entries(re).map(([i,t])=>{let e;return e=t in ha?ha[t]:i.charAt(0).toUpperCase()+i.slice(1),[t,e]}));function ts(i){let t;if(typeof i=="string"){if(t=re[i.toLowerCase()],!t)throw new W("keyboard-unknown-key",null,{key:i})}else t=i.keyCode+(i.altKey?re.alt:0)+(i.ctrlKey?re.ctrl:0)+(i.shiftKey?re.shift:0)+(i.metaKey?re.cmd:0);return t}function fa(i){return typeof i=="string"&&(i=function(t){return t.split("+").map(e=>e.trim())}(i)),i.map(t=>typeof t=="string"?function(e){if(e.endsWith("!"))return ts(e.slice(0,-1));const n=ts(e);return(E.isMac||E.isiOS)&&n==re.ctrl?re.cmd:n}(t):t).reduce((t,e)=>e+t,0)}function Fa(i){let t=fa(i);return Object.entries(E.isMac||E.isiOS?Xr:xu).reduce((e,[n,o])=>(t&re[n]&&(t&=~re[n],e+=o),e),"")+(t?Tu[t]:"")}function es(i,t){const e=t==="ltr";switch(i){case re.arrowleft:return e?"left":"right";case re.arrowright:return e?"right":"left";case re.arrowup:return"up";case re.arrowdown:return"down"}}function xe(i){return Array.isArray(i)?i:[i]}const ns=function(i,t,e){(e!==void 0&&!ki(i[t],e)||e===void 0&&!(t in i))&&Ei(i,t,e)},Va=function(i){return function(t,e,n){for(var o=-1,r=Object(t),s=n(t),a=s.length;a--;){var c=s[i?a:++o];if(e(r[c],c,r)===!1)break}return t}}(),Du=function(i){return Bn(i)&&k(i)},Vc=function(i,t){if((t!=="constructor"||typeof i[t]!="function")&&t!="__proto__")return i[t]},pa=function(i){return Wi(i,Z(i))},Hc=function(i,t,e,n,o,r,s){var a=Vc(i,e),c=Vc(t,e),l=s.get(c);if(l)ns(i,e,l);else{var d=r?r(a,c,e+"",i,t,s):void 0,p=d===void 0;if(p){var m=En(c),w=!m&&xi(c),y=!m&&!w&&Li(c);d=c,m||w||y?En(a)?d=a:Du(a)?d=se(a):w?(p=!1,d=Xt(c,!0)):y?(p=!1,d=Yr(c,!0)):d=[]:xn(c)||si(c)?(d=a,si(a)?d=pa(a):ge(a)&&!nn(a)||(d=Dr(c))):p=!1}p&&(s.set(c,d),o(d,c,n,r,s),s.delete(c)),ns(i,e,d)}},Su=function i(t,e,n,o,r){t!==e&&Va(e,function(s,a){if(r||(r=new yi),ge(s))Hc(t,e,a,n,i,o,r);else{var c=o?o(Vc(t,a),s,a+"",t,e,r):void 0;c===void 0&&(c=s),ns(t,a,c)}},Z)},Sr=function(i){return i},Iu=function(i,t,e){switch(e.length){case 0:return i.call(t);case 1:return i.call(t,e[0]);case 2:return i.call(t,e[0],e[1]);case 3:return i.call(t,e[0],e[1],e[2])}return i.apply(t,e)};var Vl=Math.max;const Mu=function(i,t,e){return t=Vl(t===void 0?i.length-1:t,0),function(){for(var n=arguments,o=-1,r=Vl(n.length-t,0),s=Array(r);++o<r;)s[o]=n[t+o];o=-1;for(var a=Array(t+1);++o<t;)a[o]=n[o];return a[t]=e(s),Iu(i,this,a)}},Nu=function(i){return function(){return i}},is=ri?function(i,t){return ri(i,"toString",{configurable:!0,enumerable:!1,value:Nu(t),writable:!0})}:Sr;var Ls=Date.now;const Ha=function(i){var t=0,e=0;return function(){var n=Ls(),o=16-(n-e);if(e=n,o>0){if(++t>=800)return arguments[0]}else t=0;return i.apply(void 0,arguments)}}(is),bo=function(i,t){return Ha(Mu(i,t,Sr),i+"")},Ou=function(i,t,e){if(!ge(e))return!1;var n=typeof t;return!!(n=="number"?k(e)&&Oi(t,e.length):n=="string"&&t in e)&&ki(e[t],i)},Uc=function(i){return bo(function(t,e){var n=-1,o=e.length,r=o>1?e[o-1]:void 0,s=o>2?e[2]:void 0;for(r=i.length>3&&typeof r=="function"?(o--,r):void 0,s&&Ou(e[0],e[1],s)&&(r=o<3?void 0:r,o=1),t=Object(t);++n<o;){var a=e[n];a&&i(t,a,n,r)}return t})},$c=Uc(function(i,t,e){Su(i,t,e)});function Bu(i,t,e=1,n){if(typeof e!="number")throw new W("translation-service-quantity-not-a-number",null,{quantity:e});const o=n||Tt.window.CKEDITOR_TRANSLATIONS,r=function(d){return Object.keys(d).length}(o);r===1&&(i=Object.keys(o)[0]);const s=t.id||t.string;if(r===0||!function(d,p,m){return!!m[d]&&!!m[d].dictionary[p]}(i,s,o))return e!==1?t.plural:t.string;const a=o[i].dictionary,c=o[i].getPluralForm||(d=>d===1?0:1),l=a[s];return typeof l=="string"?l:l[Number(c(e))]}Tt.window.CKEDITOR_TRANSLATIONS||(Tt.window.CKEDITOR_TRANSLATIONS={});const Lu=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Hl(i){return Lu.includes(i)?"rtl":"ltr"}class Pu{constructor({uiLanguage:t="en",contentLanguage:e,translations:n}={}){this.uiLanguage=t,this.contentLanguage=e||this.uiLanguage,this.uiLanguageDirection=Hl(this.uiLanguage),this.contentLanguageDirection=Hl(this.contentLanguage),this.translations=function(o){return Array.isArray(o)?o.reduce((r,s)=>$c(r,s)):o}(n),this.t=(o,r)=>this._t(o,r)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(t,e=[]){e=xe(e),typeof t=="string"&&(t={string:t});const n=t.plural?e[0]:1;return function(o,r){return o.replace(/%(\d+)/g,(s,a)=>a<r.length?r[a]:s)}(Bu(this.uiLanguage,t,n,this.translations),e)}}class ko extends le(){constructor(t={},e={}){super();const n=je(t);if(n||(e=t),this._items=[],this._itemMap=new Map,this._idProperty=e.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const o of t)this._items.push(o),this._itemMap.set(this._getItemIdBeforeAdding(o),o)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(t,e){return this.addMany([t],e)}addMany(t,e){if(e===void 0)e=this._items.length;else if(e>this._items.length||e<0)throw new W("collection-add-item-invalid-index",this);let n=0;for(const o of t){const r=this._getItemIdBeforeAdding(o),s=e+n;this._items.splice(s,0,o),this._itemMap.set(r,o),this.fire("add",o,s),n++}return this.fire("change",{added:t,removed:[],index:e}),this}get(t){let e;if(typeof t=="string")e=this._itemMap.get(t);else{if(typeof t!="number")throw new W("collection-get-invalid-arg",this);e=this._items[t]}return e||null}has(t){if(typeof t=="string")return this._itemMap.has(t);{const e=t[this._idProperty];return e&&this._itemMap.has(e)}}getIndex(t){let e;return e=typeof t=="string"?this._itemMap.get(t):t,e?this._items.indexOf(e):-1}remove(t){const[e,n]=this._remove(t);return this.fire("change",{added:[],removed:[e],index:n}),e}map(t,e){return this._items.map(t,e)}forEach(t,e){this._items.forEach(t,e)}find(t,e){return this._items.find(t,e)}filter(t,e){return this._items.filter(t,e)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const t=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:t,index:0})}bindTo(t){if(this._bindToCollection)throw new W("collection-bind-to-rebind",this);return this._bindToCollection=t,{as:e=>{this._setUpBindToBinding(n=>new e(n))},using:e=>{typeof e=="function"?this._setUpBindToBinding(e):this._setUpBindToBinding(n=>n[e])}}}_setUpBindToBinding(t){const e=this._bindToCollection,n=(o,r,s)=>{const a=e._bindToCollection==this,c=e._bindToInternalToExternalMap.get(r);if(a&&c)this._bindToExternalToInternalMap.set(r,c),this._bindToInternalToExternalMap.set(c,r);else{const l=t(r);if(!l)return void this._skippedIndexesFromExternal.push(s);let d=s;for(const p of this._skippedIndexesFromExternal)s>p&&d--;for(const p of e._skippedIndexesFromExternal)d>=p&&d++;this._bindToExternalToInternalMap.set(r,l),this._bindToInternalToExternalMap.set(l,r),this.add(l,d);for(let p=0;p<e._skippedIndexesFromExternal.length;p++)d<=e._skippedIndexesFromExternal[p]&&e._skippedIndexesFromExternal[p]++}};for(const o of e)n(0,o,e.getIndex(o));this.listenTo(e,"add",n),this.listenTo(e,"remove",(o,r,s)=>{const a=this._bindToExternalToInternalMap.get(r);a&&this.remove(a),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((c,l)=>(s<l&&c.push(l-1),s>l&&c.push(l),c),[])})}_getItemIdBeforeAdding(t){const e=this._idProperty;let n;if(e in t){if(n=t[e],typeof n!="string")throw new W("collection-add-invalid-id",this);if(this.get(n))throw new W("collection-add-item-already-exists",this)}else t[e]=n=Vt();return n}_remove(t){let e,n,o,r=!1;const s=this._idProperty;if(typeof t=="string"?(n=t,o=this._itemMap.get(n),r=!o,o&&(e=this._items.indexOf(o))):typeof t=="number"?(e=t,o=this._items[e],r=!o,o&&(n=o[s])):(o=t,n=o[s],e=this._items.indexOf(o),r=e==-1||!this._itemMap.get(n)),r)throw new W("collection-remove-404",this);this._items.splice(e,1),this._itemMap.delete(n);const a=this._bindToInternalToExternalMap.get(o);return this._bindToInternalToExternalMap.delete(o),this._bindToExternalToInternalMap.delete(a),this.fire("remove",o,e),[o,e]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function Sn(i){const t=i.next();return t.done?null:t.value}class In extends et(we()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(t){if(this._elements.has(t))throw new W("focustracker-add-element-already-exist",this);this.listenTo(t,"focus",()=>this._focus(t),{useCapture:!0}),this.listenTo(t,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(t)}remove(t){t===this.focusedElement&&this._blur(),this._elements.has(t)&&(this.stopListening(t),this._elements.delete(t))}destroy(){this.stopListening()}_focus(t){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=t,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Mn{constructor(){this._listener=new(et())}listenTo(t){this._listener.listenTo(t,"keydown",(e,n)=>{this._listener.fire("_keydown:"+ts(n),n)})}set(t,e,n={}){const o=fa(t),r=n.priority;this._listener.listenTo(this._listener,"_keydown:"+o,(s,a)=>{e(a,()=>{a.preventDefault(),a.stopPropagation(),s.stop()}),s.return=!0},{priority:r})}press(t){return!!this._listener.fire("_keydown:"+ts(t),t)}stopListening(t){this._listener.stopListening(t)}destroy(){this.stopListening()}}function Zn(i){return je(i)?new Map(i):function(t){const e=new Map;for(const n in t)e.set(n,t[n]);return e}(i)}function Wc(i,t){let e;function n(...o){n.cancel(),e=setTimeout(()=>i(...o),t)}return n.cancel=()=>{clearTimeout(e)},n}function Ps(i,t){return!!(e=i.charAt(t-1))&&e.length==1&&/[\ud800-\udbff]/.test(e)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(t));var e}function Rs(i,t){return!!(e=i.charAt(t))&&e.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(e);var e}const Ru=function(){const i=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],t=new RegExp("\\p{Regional_Indicator}{2}","u").source,e="(?:"+i.map(n=>n.source).join("|")+")";return new RegExp(`${t}|${e}(?:‍${e})*`,"ug")}();function Ul(i,t){const e=String(i).matchAll(Ru);return Array.from(e).some(n=>n.index<t&&t<n.index+n[0].length)}class It extends we(){constructor(t){super(),this._disableStack=new Set,this.editor=t,this.set("isEnabled",!0)}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",Ir,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",Ir),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function Ir(i){i.return=!1,i.stop()}class pe extends we(){constructor(t){super(),this.editor=t,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(t,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",e=>{if(!this.affectsData)return;const n=t.model.document.selection,o=n.getFirstPosition().root.rootName!="$graveyard"&&t.model.canEditAt(n);(t.isReadOnly||this._isEnabledBasedOnSelection&&!o)&&(e.return=!1,e.stop())},{priority:"highest"}),this.on("execute",e=>{this.isEnabled||e.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(t){this._affectsData=t}refresh(){this.isEnabled=!0}forceDisabled(t){this._disableStack.add(t),this._disableStack.size==1&&(this.on("set:isEnabled",$l,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(t){this._disableStack.delete(t),this._disableStack.size==0&&(this.off("set:isEnabled",$l),this.refresh())}execute(...t){}destroy(){this.stopListening()}}function $l(i){i.return=!1,i.stop()}class Wl extends pe{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...t){const e=this._getFirstEnabledCommand();return!!e&&e.execute(t)}registerChildCommand(t,e={}){v(this._childCommandsDefinitions,{command:t,priority:e.priority||"normal"}),t.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const t=this._childCommandsDefinitions.find(({command:e})=>e.isEnabled);return t&&t.command}}class ql extends le(){constructor(t,e=[],n=[]){super(),this._plugins=new Map,this._context=t,this._availablePlugins=new Map;for(const o of e)o.pluginName&&this._availablePlugins.set(o.pluginName,o);this._contextPlugins=new Map;for(const[o,r]of n)this._contextPlugins.set(o,r),this._contextPlugins.set(r,o),o.pluginName&&this._availablePlugins.set(o.pluginName,o)}*[Symbol.iterator](){for(const t of this._plugins)typeof t[0]=="function"&&(yield t)}get(t){const e=this._plugins.get(t);if(!e){let n=t;throw typeof t=="function"&&(n=t.pluginName||t.name),new W("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return e}has(t){return this._plugins.has(t)}init(t,e=[],n=[]){const o=this,r=this._context;(function y(S,F=new Set){S.forEach(G=>{c(G)&&(F.has(G)||(F.add(G),G.pluginName&&!o._availablePlugins.has(G.pluginName)&&o._availablePlugins.set(G.pluginName,G),G.requires&&y(G.requires,F)))})})(t),m(t);const s=[...function y(S,F=new Set){return S.map(G=>c(G)?G:o._availablePlugins.get(G)).reduce((G,it)=>F.has(it)?G:(F.add(it),it.requires&&(m(it.requires,it),y(it.requires,F).forEach(ut=>G.add(ut))),G.add(it)),new Set)}(t.filter(y=>!d(y,e)))];(function(y,S){for(const F of S){if(typeof F!="function")throw new W("plugincollection-replace-plugin-invalid-type",null,{pluginItem:F});const G=F.pluginName;if(!G)throw new W("plugincollection-replace-plugin-missing-name",null,{pluginItem:F});if(F.requires&&F.requires.length)throw new W("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:G});const it=o._availablePlugins.get(G);if(!it)throw new W("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:G});const ut=y.indexOf(it);if(ut===-1){if(o._contextPlugins.has(it))return;throw new W("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:G})}if(it.requires&&it.requires.length)throw new W("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:G});y.splice(ut,1,F),o._availablePlugins.set(G,F)}})(s,n);const a=s.map(y=>{let S=o._contextPlugins.get(y);return S=S||new y(r),o._add(y,S),S});return w(a,"init").then(()=>w(a,"afterInit")).then(()=>a);function c(y){return typeof y=="function"}function l(y){return c(y)&&!!y.isContextPlugin}function d(y,S){return S.some(F=>F===y||p(y)===F||p(F)===y)}function p(y){return c(y)?y.pluginName||y.name:y}function m(y,S=null){y.map(F=>c(F)?F:o._availablePlugins.get(F)||F).forEach(F=>{(function(G,it){if(!c(G))throw it?new W("plugincollection-soft-required",r,{missingPlugin:G,requiredBy:p(it)}):new W("plugincollection-plugin-not-found",r,{plugin:G})})(F,S),function(G,it){if(l(it)&&!l(G))throw new W("plugincollection-context-required",r,{plugin:p(G),requiredBy:p(it)})}(F,S),function(G,it){if(it&&d(G,e))throw new W("plugincollection-required",r,{plugin:p(G),requiredBy:p(it)})}(F,S)})}function w(y,S){return y.reduce((F,G)=>G[S]?o._contextPlugins.has(G)?F:F.then(G[S].bind(G)):F,Promise.resolve())}}destroy(){const t=[];for(const[,e]of this)typeof e.destroy!="function"||this._contextPlugins.has(e)||t.push(e.destroy());return Promise.all(t)}_add(t,e){this._plugins.set(t,e);const n=t.pluginName;if(n){if(this._plugins.has(n))throw new W("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:t});this._plugins.set(n,e)}}}var qc=Object.getOwnPropertySymbols,zu=Object.prototype.hasOwnProperty,Gl=Object.prototype.propertyIsEnumerable;class Ua{constructor(t){this._contextOwner=null;const e=t||{},{translations:n}=e,o=((a,c)=>{var l={};for(var d in a)zu.call(a,d)&&c.indexOf(d)<0&&(l[d]=a[d]);if(a!=null&&qc)for(var d of qc(a))c.indexOf(d)<0&&Gl.call(a,d)&&(l[d]=a[d]);return l})(e,["translations"]);this.config=new Qt(o,this.constructor.defaultConfig);const r=this.constructor.builtinPlugins;this.config.define("plugins",r),this.plugins=new ql(this,r);const s=this.config.get("language")||{};this.locale=new Pu({uiLanguage:typeof s=="string"?s:s.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new ko}initPlugins(){const t=this.config.get("plugins")||[],e=this.config.get("substitutePlugins")||[];for(const n of t.concat(e)){if(typeof n!="function")throw new W("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new W("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(t,[],e)}destroy(){return Promise.all(Array.from(this.editors,t=>t.destroy())).then(()=>this.plugins.destroy())}_addEditor(t,e){if(this._contextOwner)throw new W("context-addeditor-private-context");this.editors.add(t),e&&(this._contextOwner=t)}_removeEditor(t){return this.editors.has(t)&&this.editors.remove(t),this._contextOwner===t?this.destroy():Promise.resolve()}_getEditorConfig(){const t={};for(const e of this.config.names())["plugins","removePlugins","extraPlugins"].includes(e)||(t[e]=this.config.get(e));return t}static create(t){return new Promise(e=>{const n=new this(t);e(n.initPlugins().then(()=>n))})}}class $a extends we(){constructor(t){super(),this.context=t}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class Kl extends Mn{constructor(t){super(),this.editor=t}set(t,e,n={}){if(typeof e=="string"){const o=e;e=(r,s)=>{this.editor.execute(o),s()}}super.set(t,e,n)}}var ju=j(2591),zt=j.n(ju),Yl=j(4098),Ql={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Yl.A,Ql),Yl.A.locals;const Wa=new WeakMap;let zs=!1;function js({view:i,element:t,text:e,isDirectHost:n=!0,keepOnFocus:o=!1}){const r=i.document;function s(a){Wa.get(r).set(t,{text:a,isDirectHost:n,keepOnFocus:o,hostElement:n?t:null}),i.change(c=>Gc(r,c))}Wa.has(r)||(Wa.set(r,new Map),r.registerPostFixer(a=>Gc(r,a)),r.on("change:isComposing",()=>{i.change(a=>Gc(r,a))},{priority:"high"})),t.is("editableElement")&&t.on("change:placeholder",(a,c,l)=>{s(l)}),t.placeholder?s(t.placeholder):e&&s(e),e&&function(){zs||jt("enableplaceholder-deprecated-text-option"),zs=!0}()}function Fu(i,t){return!t.hasClass("ck-placeholder")&&(i.addClass("ck-placeholder",t),!0)}function qa(i,t){return!!t.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",t),!0)}function ga(i,t){if(!i.isAttached()||Array.from(i.getChildren()).some(o=>!o.is("uiElement")))return!1;const e=i.document,n=e.selection.anchor;return(!e.isComposing||!n||n.parent!==i)&&(!!t||!e.isFocused||!!n&&n.parent!==i)}function Gc(i,t){const e=Wa.get(i),n=[];let o=!1;for(const[r,s]of e)s.isDirectHost&&(n.push(r),Zl(t,r,s)&&(o=!0));for(const[r,s]of e){if(s.isDirectHost)continue;const a=Vu(r);a&&(n.includes(a)||(s.hostElement=a,Zl(t,r,s)&&(o=!0)))}return o}function Zl(i,t,e){const{text:n,isDirectHost:o,hostElement:r}=e;let s=!1;return r.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,r),s=!0),(o||t.childCount==1)&&ga(r,e.keepOnFocus)?Fu(i,r)&&(s=!0):qa(i,r)&&(s=!0),s}function Vu(i){if(i.childCount){const t=i.getChild(0);if(t.is("element")&&!t.is("uiElement")&&!t.is("attributeElement"))return t}return null}class _o{is(){throw new Error("is() method is abstract")}}const Jl=function(i){return $t(i,4)};class Mr extends le(_o){constructor(t){super(),this.document=t,this.parent=null}get index(){let t;if(!this.parent)return null;if((t=this.parent.getChildIndex(this))==-1)throw new W("view-node-not-found-in-parent",this);return t}get nextSibling(){const t=this.index;return t!==null&&this.parent.getChild(t+1)||null}get previousSibling(){const t=this.index;return t!==null&&this.parent.getChild(t-1)||null}get root(){let t=this;for(;t.parent;)t=t.parent;return t}isAttached(){return this.root.is("rootElement")}getPath(){const t=[];let e=this;for(;e.parent;)t.unshift(e.index),e=e.parent;return t}getAncestors(t={}){const e=[];let n=t.includeSelf?this:this.parent;for(;n;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}getCommonAncestor(t,e={}){const n=this.getAncestors(e),o=t.getAncestors(e);let r=0;for(;n[r]==o[r]&&n[r];)r++;return r===0?null:n[r-1]}isBefore(t){if(this==t||this.root!==t.root)return!1;const e=this.getPath(),n=t.getPath(),o=Be(e,n);switch(o){case"prefix":return!0;case"extension":return!1;default:return e[o]<n[o]}}isAfter(t){return this!=t&&this.root===t.root&&!this.isBefore(t)}_remove(){this.parent._removeChildren(this.index)}_fireChange(t,e){this.fire(`change:${t}`,e),this.parent&&this.parent._fireChange(t,e)}toJSON(){const t=Jl(this);return delete t.parent,t}}Mr.prototype.is=function(i){return i==="node"||i==="view:node"};class Ie extends Mr{constructor(t,e){super(t),this._textData=e}get data(){return this._textData}get _data(){return this.data}set _data(t){this._fireChange("text",this),this._textData=t}isSimilar(t){return t instanceof Ie&&(this===t||this.data===t.data)}_clone(){return new Ie(this.document,this.data)}}Ie.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class Wo extends _o{constructor(t,e,n){if(super(),this.textNode=t,e<0||e>t.data.length)throw new W("view-textproxy-wrong-offsetintext",this);if(n<0||e+n>t.data.length)throw new W("view-textproxy-wrong-length",this);this.data=t.data.substring(e,e+n),this.offsetInText=e}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(t={}){const e=[];let n=t.includeSelf?this.textNode:this.parent;for(;n!==null;)e[t.parentFirst?"push":"unshift"](n),n=n.parent;return e}}Wo.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class qo{constructor(...t){this._patterns=[],this.add(...t)}add(...t){for(let e of t)(typeof e=="string"||e instanceof RegExp)&&(e={name:e}),this._patterns.push(e)}match(...t){for(const e of t)for(const n of this._patterns){const o=Xl(e,n);if(o)return{element:e,pattern:n,match:o}}return null}matchAll(...t){const e=[];for(const n of t)for(const o of this._patterns){const r=Xl(n,o);r&&e.push({element:n,pattern:o,match:r})}return e.length>0?e:null}getElementName(){if(this._patterns.length!==1)return null;const t=this._patterns[0],e=t.name;return typeof t=="function"||!e||e instanceof RegExp?null:e}}function Xl(i,t){if(typeof t=="function")return t(i);const e={};return t.name&&(e.name=function(n,o){return n instanceof RegExp?!!o.match(n):n===o}(t.name,i.name),!e.name)||t.attributes&&(e.attributes=function(n,o){const r=new Set(o.getAttributeKeys());return xn(n)?(n.style!==void 0&&jt("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&jt("matcher-pattern-deprecated-attributes-class-key",n)):(r.delete("style"),r.delete("class")),Kc(n,r,s=>o.getAttribute(s))}(t.attributes,i),!e.attributes)||t.classes&&(e.classes=function(n,o){return Kc(n,o.getClassNames(),()=>{})}(t.classes,i),!e.classes)||t.styles&&(e.styles=function(n,o){return Kc(n,o.getStyleNames(!0),r=>o.getStyle(r))}(t.styles,i),!e.styles)?null:e}function Kc(i,t,e){const n=function(s){return Array.isArray(s)?s.map(a=>xn(a)?(a.key!==void 0&&a.value!==void 0||jt("matcher-pattern-missing-key-or-value",a),[a.key,a.value]):[a,!0]):xn(s)?Object.entries(s):[[s,!0]]}(i),o=Array.from(t),r=[];if(n.forEach(([s,a])=>{o.forEach(c=>{(function(l,d){return l===!0||l===d||l instanceof RegExp&&d.match(l)})(s,c)&&function(l,d,p){if(l===!0)return!0;const m=p(d);return l===m||l instanceof RegExp&&!!String(m).match(l)}(a,c,e)&&r.push(c)})}),n.length&&!(r.length<n.length))return r}const Ga=function(i){return typeof i=="symbol"||Bn(i)&&ni(i)=="[object Symbol]"};var Hu=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Uu=/^\w*$/;const Ka=function(i,t){if(En(i))return!1;var e=typeof i;return!(e!="number"&&e!="symbol"&&e!="boolean"&&i!=null&&!Ga(i))||Uu.test(i)||!Hu.test(i)||t!=null&&i in Object(t)};function Ya(i,t){if(typeof i!="function"||t!=null&&typeof t!="function")throw new TypeError("Expected a function");var e=function(){var n=arguments,o=t?t.apply(this,n):n[0],r=e.cache;if(r.has(o))return r.get(o);var s=i.apply(this,n);return e.cache=r.set(o,s)||r,s};return e.cache=new(Ya.Cache||Po),e}Ya.Cache=Po;const $u=Ya,Wu=function(i){var t=$u(i,function(n){return e.size===500&&e.clear(),n}),e=t.cache;return t};var qu=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,ma=/\\(\\)?/g,Fs=Wu(function(i){var t=[];return i.charCodeAt(0)===46&&t.push(""),i.replace(qu,function(e,n,o,r){t.push(o?r.replace(ma,"$1"):n||e)}),t});const Gu=Fs,Qa=function(i,t){for(var e=-1,n=i==null?0:i.length,o=Array(n);++e<n;)o[e]=t(i[e],e,i);return o};var Vs=qe?qe.prototype:void 0,td=Vs?Vs.toString:void 0;const Ku=function i(t){if(typeof t=="string")return t;if(En(t))return Qa(t,i)+"";if(Ga(t))return td?td.call(t):"";var e=t+"";return e=="0"&&1/t==-1/0?"-0":e},Za=function(i){return i==null?"":Ku(i)},Nr=function(i,t){return En(i)?i:Ka(i,t)?[i]:Gu(Za(i))},ed=function(i){var t=i==null?0:i.length;return t?i[t-1]:void 0},os=function(i){if(typeof i=="string"||Ga(i))return i;var t=i+"";return t=="0"&&1/i==-1/0?"-0":t},Yc=function(i,t){for(var e=0,n=(t=Nr(t,i)).length;i!=null&&e<n;)i=i[os(t[e++])];return e&&e==n?i:void 0},nd=function(i,t,e){var n=-1,o=i.length;t<0&&(t=-t>o?0:o+t),(e=e>o?o:e)<0&&(e+=o),o=t>e?0:e-t>>>0,t>>>=0;for(var r=Array(o);++n<o;)r[n]=i[n+t];return r},Yu=function(i,t){return t.length<2?i:Yc(i,nd(t,0,-1))},Qu=function(i,t){return t=Nr(t,i),(i=Yu(i,t))==null||delete i[os(ed(t))]},Zu=function(i,t){return i==null||Qu(i,t)},Hs=function(i,t,e){var n=i==null?void 0:Yc(i,t);return n===void 0?e:n},Ju=function(i,t,e,n){if(!ge(i))return i;for(var o=-1,r=(t=Nr(t,i)).length,s=r-1,a=i;a!=null&&++o<r;){var c=os(t[o]),l=e;if(c==="__proto__"||c==="constructor"||c==="prototype")return i;if(o!=s){var d=a[c];(l=n?n(d,c,a):void 0)===void 0&&(l=ge(d)?d:Oi(t[o+1])?[]:{})}co(a,c,l),a=a[c]}return i},Ja=function(i,t,e){return i==null?i:Ju(i,t,e)};class T{constructor(t){this._styles={},this._styleProcessor=t}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(t){this.clear();const e=function(n){let o=null,r=0,s=0,a=null;const c=new Map;if(n==="")return c;n.charAt(n.length-1)!=";"&&(n+=";");for(let l=0;l<n.length;l++){const d=n.charAt(l);if(o===null)switch(d){case":":a||(a=n.substr(r,l-r),s=l+1);break;case'"':case"'":o=d;break;case";":{const p=n.substr(s,l-s);a&&c.set(a.trim(),p.trim()),a=null,r=l+1;break}}else d===o&&(o=null)}return c}(t);for(const[n,o]of e)this._styleProcessor.toNormalizedForm(n,o,this._styles)}has(t){if(this.isEmpty)return!1;const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)}set(t,e){if(ge(t))for(const[n,o]of Object.entries(t))this._styleProcessor.toNormalizedForm(n,o,this._styles);else this._styleProcessor.toNormalizedForm(t,e,this._styles)}remove(t){const e=O(t);Zu(this._styles,e),delete this._styles[t],this._cleanEmptyObjectsOnPath(e)}getNormalized(t){return this._styleProcessor.getNormalized(t,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(t=>t.join(":")).sort().join(";")+";"}getAsString(t){if(this.isEmpty)return;if(this._styles[t]&&!ge(this._styles[t]))return this._styles[t];const e=this._styleProcessor.getReducedForm(t,this._styles).find(([n])=>n===t);return Array.isArray(e)?e[1]:void 0}getStyleNames(t=!1){return this.isEmpty?[]:t?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([e])=>e)}clear(){this._styles={}}getStylesEntries(){const t=[],e=Object.keys(this._styles);for(const n of e)t.push(...this._styleProcessor.getReducedForm(n,this._styles));return t}_cleanEmptyObjectsOnPath(t){const e=t.split(".");if(!(e.length>1))return;const n=e.splice(0,e.length-1).join("."),o=Hs(this._styles,n);o&&!Object.keys(o).length&&this.remove(n)}}class N{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(t,e,n){if(ge(e))b(n,O(t),e);else if(this._normalizers.has(t)){const o=this._normalizers.get(t),{path:r,value:s}=o(e);b(n,r,s)}else b(n,t,e)}getNormalized(t,e){if(!t)return $c({},e);if(e[t]!==void 0)return e[t];if(this._extractors.has(t)){const n=this._extractors.get(t);if(typeof n=="string")return Hs(e,n);const o=n(t,e);if(o)return o}return Hs(e,O(t))}getReducedForm(t,e){const n=this.getNormalized(t,e);return n===void 0?[]:this._reducers.has(t)?this._reducers.get(t)(n):[[t,n]]}getStyleNames(t){const e=Array.from(this._consumables.keys()).filter(o=>{const r=this.getNormalized(o,t);return r&&typeof r=="object"?Object.keys(r).length:r}),n=new Set([...e,...Object.keys(t)]);return Array.from(n)}getRelatedStyles(t){return this._consumables.get(t)||[]}setNormalizer(t,e){this._normalizers.set(t,e)}setExtractor(t,e){this._extractors.set(t,e)}setReducer(t,e){this._reducers.set(t,e)}setStyleRelation(t,e){this._mapStyleNames(t,e);for(const n of e)this._mapStyleNames(n,[t])}_mapStyleNames(t,e){this._consumables.has(t)||this._consumables.set(t,[]),this._consumables.get(t).push(...e)}}function O(i){return i.replace("-",".")}function b(i,t,e){let n=e;ge(e)&&(n=$c({},Hs(i,t),e)),Ja(i,t,n)}class D extends Mr{constructor(t,e,n,o){if(super(t),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=e,this._attrs=function(r){const s=Zn(r);for(const[a,c]of s)c===null?s.delete(a):typeof c!="string"&&s.set(a,String(c));return s}(n),this._children=[],o&&this._insertChild(0,o),this._classes=new Set,this._attrs.has("class")){const r=this._attrs.get("class");R(this._classes,r),this._attrs.delete("class")}this._styles=new T(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(t){if(t=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(t=="style"){const e=this._styles.toString();return e==""?void 0:e}return this._attrs.get(t)}hasAttribute(t){return t=="class"?this._classes.size>0:t=="style"?!this._styles.isEmpty:this._attrs.has(t)}isSimilar(t){if(!(t instanceof D))return!1;if(this===t)return!0;if(this.name!=t.name||this._attrs.size!==t._attrs.size||this._classes.size!==t._classes.size||this._styles.size!==t._styles.size)return!1;for(const[e,n]of this._attrs)if(!t._attrs.has(e)||t._attrs.get(e)!==n)return!1;for(const e of this._classes)if(!t._classes.has(e))return!1;for(const e of this._styles.getStyleNames())if(!t._styles.has(e)||t._styles.getAsString(e)!==this._styles.getAsString(e))return!1;return!0}hasClass(...t){for(const e of t)if(!this._classes.has(e))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(t){return this._styles.getAsString(t)}getNormalizedStyle(t){return this._styles.getNormalized(t)}getStyleNames(t){return this._styles.getStyleNames(t)}hasStyle(...t){for(const e of t)if(!this._styles.has(e))return!1;return!0}findAncestor(...t){const e=new qo(...t);let n=this.parent;for(;n&&!n.is("documentFragment");){if(e.match(n))return n;n=n.parent}return null}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const t=Array.from(this._classes).sort().join(","),e=this._styles.toString(),n=Array.from(this._attrs).map(o=>`${o[0]}="${o[1]}"`).sort().join(" ");return this.name+(t==""?"":` class="${t}"`)+(e?` style="${e}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(t){return this._unsafeAttributesToRender.includes(t)}_clone(t=!1){const e=[];if(t)for(const o of this.getChildren())e.push(o._clone(t));const n=new this.constructor(this.document,this.name,this._attrs,e);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(t){return this._insertChild(this.childCount,t)}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Ie(r,s)]:(je(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ie(r,a):a instanceof Wo?new Ie(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,r.document=this.document,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_setAttribute(t,e){const n=String(e);this._fireChange("attributes",this),t=="class"?R(this._classes,n):t=="style"?this._styles.setTo(n):this._attrs.set(t,n)}_removeAttribute(t){return this._fireChange("attributes",this),t=="class"?this._classes.size>0&&(this._classes.clear(),!0):t=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(t)}_addClass(t){this._fireChange("attributes",this);for(const e of xe(t))this._classes.add(e)}_removeClass(t){this._fireChange("attributes",this);for(const e of xe(t))this._classes.delete(e)}_setStyle(t,e){this._fireChange("attributes",this),typeof t!="string"?this._styles.set(t):this._styles.set(t,e)}_removeStyle(t){this._fireChange("attributes",this);for(const e of xe(t))this._styles.remove(e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}function R(i,t){const e=t.split(/\s+/);i.clear(),e.forEach(n=>i.add(n))}D.prototype.is=function(i,t){return t?t===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class X extends D{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=nt}}function nt(){const i=[...this.getChildren()],t=i[this.childCount-1];if(t&&t.is("element","br"))return this.childCount;for(const e of i)if(!e.is("uiElement"))return null;return this.childCount}X.prototype.is=function(i,t){return t?t===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class dt extends we(X){constructor(t,e,n,o){super(t,e,n,o),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(t),this.bind("isFocused").to(t,"isFocused",r=>r&&t.selection.editableElement==this),this.listenTo(t.selection,"change",()=>{this.isFocused=t.isFocused&&t.selection.editableElement==this})}destroy(){this.stopListening()}}dt.prototype.is=function(i,t){return t?t===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const St=Symbol("rootName");class Ft extends dt{constructor(t,e){super(t,e),this.rootName="main"}get rootName(){return this.getCustomProperty(St)}set rootName(t){this._setCustomProperty(St,t)}set _name(t){this.name=t}}Ft.prototype.is=function(i,t){return t?t===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Bt{constructor(t={}){if(!t.boundaries&&!t.startPosition)throw new W("view-tree-walker-no-start-position",null);if(t.direction&&t.direction!="forward"&&t.direction!="backward")throw new W("view-tree-walker-unknown-direction",t.startPosition,{direction:t.direction});this.boundaries=t.boundaries||null,t.startPosition?this._position=kt._createAt(t.startPosition):this._position=kt._createAt(t.boundaries[t.direction=="backward"?"end":"start"]),this.direction=t.direction||"forward",this.singleCharacters=!!t.singleCharacters,this.shallow=!!t.shallow,this.ignoreElementEnd=!!t.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(t){let e,n;do n=this.position,e=this.next();while(!e.done&&t(e.value));e.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&t.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let o;if(n instanceof Ie){if(t.isAtEnd)return this._position=kt._createAfter(n),this._next();o=n.data[t.offset]}else o=n.getChild(t.offset);if(o instanceof D){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(t))return{done:!0,value:void 0};t.offset++}else t=new kt(o,0);return this._position=t,this._formatReturnValue("elementStart",o,e,t,1)}if(o instanceof Ie){if(this.singleCharacters)return t=new kt(o,0),this._position=t,this._next();let r,s=o.data.length;return o==this._boundaryEndParent?(s=this.boundaries.end.offset,r=new Wo(o,0,s),t=kt._createAfter(r)):(r=new Wo(o,0,o.data.length),t.offset++),this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof o=="string"){let r;this.singleCharacters?r=1:r=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-t.offset;const s=new Wo(n,t.offset,r);return t.offset+=r,this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=kt._createAfter(n),this._position=t,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,e,t)}_previous(){let t=this.position.clone();const e=this.position,n=t.parent;if(n.parent===null&&t.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&t.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let o;if(n instanceof Ie){if(t.isAtStart)return this._position=kt._createBefore(n),this._previous();o=n.data[t.offset-1]}else o=n.getChild(t.offset-1);if(o instanceof D)return this.shallow?(t.offset--,this._position=t,this._formatReturnValue("elementStart",o,e,t,1)):(t=new kt(o,o.childCount),this._position=t,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",o,e,t));if(o instanceof Ie){if(this.singleCharacters)return t=new kt(o,o.data.length),this._position=t,this._previous();let r,s=o.data.length;if(o==this._boundaryStartParent){const a=this.boundaries.start.offset;r=new Wo(o,a,o.data.length-a),s=r.data.length,t=kt._createBefore(r)}else r=new Wo(o,0,o.data.length),t.offset--;return this._position=t,this._formatReturnValue("text",r,e,t,s)}if(typeof o=="string"){let r;if(this.singleCharacters)r=1;else{const a=n===this._boundaryStartParent?this.boundaries.start.offset:0;r=t.offset-a}t.offset-=r;const s=new Wo(n,t.offset,r);return this._position=t,this._formatReturnValue("text",s,e,t,r)}return t=kt._createBefore(n),this._position=t,this._formatReturnValue("elementStart",n,e,t,1)}_formatReturnValue(t,e,n,o,r){return e instanceof Wo&&(e.offsetInText+e.data.length==e.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=kt._createAfter(e.textNode):(o=kt._createAfter(e.textNode),this._position=o)),e.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=kt._createBefore(e.textNode):(o=kt._createBefore(e.textNode),this._position=o))),{done:!1,value:{type:t,item:e,previousPosition:n,nextPosition:o,length:r}}}}class kt extends _o{constructor(t,e){super(),this.parent=t,this.offset=e}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const t=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===t}get root(){return this.parent.root}get editableElement(){let t=this.parent;for(;!(t instanceof dt);){if(!t.parent)return null;t=t.parent}return t}getShiftedBy(t){const e=kt._createAt(this),n=e.offset+t;return e.offset=n<0?0:n,e}getLastMatchingPosition(t,e={}){e.startPosition=this;const n=new Bt(e);return n.skip(t),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(t){const e=this.getAncestors(),n=t.getAncestors();let o=0;for(;e[o]==n[o]&&e[o];)o++;return o===0?null:e[o-1]}isEqual(t){return this.parent==t.parent&&this.offset==t.offset}isBefore(t){return this.compareWith(t)=="before"}isAfter(t){return this.compareWith(t)=="after"}compareWith(t){if(this.root!==t.root)return"different";if(this.isEqual(t))return"same";const e=this.parent.is("node")?this.parent.getPath():[],n=t.parent.is("node")?t.parent.getPath():[];e.push(this.offset),n.push(t.offset);const o=Be(e,n);switch(o){case"prefix":return"before";case"extension":return"after";default:return e[o]<n[o]?"before":"after"}}getWalker(t={}){return t.startPosition=this,new Bt(t)}clone(){return new kt(this.parent,this.offset)}static _createAt(t,e){if(t instanceof kt)return new this(t.parent,t.offset);{const n=t;if(e=="end")e=n.is("$text")?n.data.length:n.childCount;else{if(e=="before")return this._createBefore(n);if(e=="after")return this._createAfter(n);if(e!==0&&!e)throw new W("view-createpositionat-offset-required",n)}return new kt(n,e)}}static _createAfter(t){if(t.is("$textProxy"))return new kt(t.textNode,t.offsetInText+t.data.length);if(!t.parent)throw new W("view-position-after-root",t,{root:t});return new kt(t.parent,t.index+1)}static _createBefore(t){if(t.is("$textProxy"))return new kt(t.textNode,t.offsetInText);if(!t.parent)throw new W("view-position-before-root",t,{root:t});return new kt(t.parent,t.index)}}kt.prototype.is=function(i){return i==="position"||i==="view:position"};class Nt extends _o{constructor(t,e=null){super(),this.start=t.clone(),this.end=e?e.clone():t.clone()}*[Symbol.iterator](){yield*new Bt({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let t=this.start.getLastMatchingPosition(Zt,{direction:"backward"}),e=this.end.getLastMatchingPosition(Zt);return t.parent.is("$text")&&t.isAtStart&&(t=kt._createBefore(t.parent)),e.parent.is("$text")&&e.isAtEnd&&(e=kt._createAfter(e.parent)),new Nt(t,e)}getTrimmed(){let t=this.start.getLastMatchingPosition(Zt);if(t.isAfter(this.end)||t.isEqual(this.end))return new Nt(t,t);let e=this.end.getLastMatchingPosition(Zt,{direction:"backward"});const n=t.nodeAfter,o=e.nodeBefore;return n&&n.is("$text")&&(t=new kt(n,0)),o&&o.is("$text")&&(e=new kt(o,o.data.length)),new Nt(t,e)}isEqual(t){return this==t||this.start.isEqual(t.start)&&this.end.isEqual(t.end)}containsPosition(t){return t.isAfter(this.start)&&t.isBefore(this.end)}containsRange(t,e=!1){t.isCollapsed&&(e=!1);const n=this.containsPosition(t.start)||e&&this.start.isEqual(t.start),o=this.containsPosition(t.end)||e&&this.end.isEqual(t.end);return n&&o}getDifference(t){const e=[];return this.isIntersecting(t)?(this.containsPosition(t.start)&&e.push(new Nt(this.start,t.start)),this.containsPosition(t.end)&&e.push(new Nt(t.end,this.end))):e.push(this.clone()),e}getIntersection(t){if(this.isIntersecting(t)){let e=this.start,n=this.end;return this.containsPosition(t.start)&&(e=t.start),this.containsPosition(t.end)&&(n=t.end),new Nt(e,n)}return null}getWalker(t={}){return t.boundaries=this,new Bt(t)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let t=this.start.nodeAfter,e=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(t=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(e=this.end.parent.previousSibling),t&&t.is("element")&&t===e?t:null}clone(){return new Nt(this.start,this.end)}*getItems(t={}){t.boundaries=this,t.ignoreElementEnd=!0;const e=new Bt(t);for(const n of e)yield n.item}*getPositions(t={}){t.boundaries=this;const e=new Bt(t);yield e.position;for(const n of e)yield n.nextPosition}isIntersecting(t){return this.start.isBefore(t.end)&&this.end.isAfter(t.start)}static _createFromParentsAndOffsets(t,e,n,o){return new this(new kt(t,e),new kt(n,o))}static _createFromPositionAndShift(t,e){const n=t,o=t.getShiftedBy(e);return e>0?new this(n,o):new this(o,n)}static _createIn(t){return this._createFromParentsAndOffsets(t,0,t,t.childCount)}static _createOn(t){const e=t.is("$textProxy")?t.offsetSize:1;return this._createFromPositionAndShift(kt._createBefore(t),e)}}function Zt(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}Nt.prototype.is=function(i){return i==="range"||i==="view:range"};class ke extends le(_o){constructor(...t){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",t.length&&this.setTo(...t)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.end:t.start).clone()}get focus(){if(!this._ranges.length)return null;const t=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?t.start:t.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const t of this._ranges)yield t.clone()}getFirstRange(){let t=null;for(const e of this._ranges)t&&!e.start.isBefore(t.start)||(t=e);return t?t.clone():null}getLastRange(){let t=null;for(const e of this._ranges)t&&!e.end.isAfter(t.end)||(t=e);return t?t.clone():null}getFirstPosition(){const t=this.getFirstRange();return t?t.start.clone():null}getLastPosition(){const t=this.getLastRange();return t?t.end.clone():null}isEqual(t){if(this.isFake!=t.isFake||this.isFake&&this.fakeSelectionLabel!=t.fakeSelectionLabel||this.rangeCount!=t.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(t.anchor)||!this.focus.isEqual(t.focus))return!1;for(const e of this._ranges){let n=!1;for(const o of t._ranges)if(e.isEqual(o)){n=!0;break}if(!n)return!1}return!0}isSimilar(t){if(this.isBackward!=t.isBackward)return!1;const e=bn(this.getRanges());if(e!=bn(t.getRanges()))return!1;if(e==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let o=!1;for(let r of t.getRanges())if(r=r.getTrimmed(),n.start.isEqual(r.start)&&n.end.isEqual(r.end)){o=!0;break}if(!o)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...t){let[e,n,o]=t;if(typeof n=="object"&&(o=n,n=void 0),e===null)this._setRanges([]),this._setFakeOptions(o);else if(e instanceof ke||e instanceof ui)this._setRanges(e.getRanges(),e.isBackward),this._setFakeOptions({fake:e.isFake,label:e.fakeSelectionLabel});else if(e instanceof Nt)this._setRanges([e],o&&o.backward),this._setFakeOptions(o);else if(e instanceof kt)this._setRanges([new Nt(e)]),this._setFakeOptions(o);else if(e instanceof Mr){const r=!!o&&!!o.backward;let s;if(n===void 0)throw new W("view-selection-setto-required-second-parameter",this);s=n=="in"?Nt._createIn(e):n=="on"?Nt._createOn(e):new Nt(kt._createAt(e,n)),this._setRanges([s],r),this._setFakeOptions(o)}else{if(!je(e))throw new W("view-selection-setto-not-selectable",this);this._setRanges(e,o&&o.backward),this._setFakeOptions(o)}this.fire("change")}setFocus(t,e){if(this.anchor===null)throw new W("view-selection-setfocus-no-ranges",this);const n=kt._createAt(t,e);if(n.compareWith(this.focus)=="same")return;const o=this.anchor;this._ranges.pop(),n.compareWith(o)=="before"?this._addRange(new Nt(n,o),!0):this._addRange(new Nt(o,n)),this.fire("change")}_setRanges(t,e=!1){t=Array.from(t),this._ranges=[];for(const n of t)this._addRange(n);this._lastRangeBackward=!!e}_setFakeOptions(t={}){this._isFake=!!t.fake,this._fakeSelectionLabel=t.fake&&t.label||""}_addRange(t,e=!1){if(!(t instanceof Nt))throw new W("view-selection-add-range-not-range",this);this._pushRange(t),this._lastRangeBackward=!!e}_pushRange(t){for(const e of this._ranges)if(t.isIntersecting(e))throw new W("view-selection-range-intersects",this,{addedRange:t,intersectingRange:e});this._ranges.push(new Nt(t.start,t.end))}}ke.prototype.is=function(i){return i==="selection"||i==="view:selection"};class ui extends le(_o){constructor(...t){super(),this._selection=new ke,this._selection.delegate("change").to(this),t.length&&this._selection.setTo(...t)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(t){return this._selection.isEqual(t)}isSimilar(t){return this._selection.isSimilar(t)}_setTo(...t){this._selection.setTo(...t)}_setFocus(t,e){this._selection.setFocus(t,e)}}ui.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class hi extends Et{constructor(t,e,n){super(t,e),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Vn=Symbol("bubbling contexts");function ur(i){return class extends i{fire(t,...e){try{const n=t instanceof Et?t:new Et(this,t),o=Xu(this);if(!o.size)return;if(ba(n,"capturing",this),rs(o,"$capture",n,...e))return n.return;const r=n.startRange||this.selection.getFirstRange(),s=r?r.getContainedElement():null,a=!!s&&!!bp(o,s);let c=s||function(l){if(!l)return null;const d=l.start.parent,p=l.end.parent,m=d.getPath(),w=p.getPath();return m.length>w.length?d:p}(r);if(ba(n,"atTarget",c),!a){if(rs(o,"$text",n,...e))return n.return;ba(n,"bubbling",c)}for(;c;){if(c.is("rootElement")){if(rs(o,"$root",n,...e))return n.return}else if(c.is("element")&&rs(o,c.name,n,...e))return n.return;if(rs(o,c,n,...e))return n.return;c=c.parent,ba(n,"bubbling",c)}return ba(n,"bubbling",this),rs(o,"$document",n,...e),n.return}catch(n){W.rethrowUnexpectedError(n,this)}}_addEventListener(t,e,n){const o=xe(n.context||"$document"),r=Xu(this);for(const s of o){let a=r.get(s);a||(a=new(le()),r.set(s,a)),this.listenTo(a,t,e,n)}}_removeEventListener(t,e){const n=Xu(this);for(const o of n.values())this.stopListening(o,t,e)}}}{const i=ur(Object);["fire","_addEventListener","_removeEventListener"].forEach(t=>{ur[t]=i.prototype[t]})}function ba(i,t,e){i instanceof hi&&(i._eventPhase=t,i._currentTarget=e)}function rs(i,t,e,...n){const o=typeof t=="string"?i.get(t):bp(i,t);return!!o&&(o.fire(e,...n),e.stop.called)}function bp(i,t){for(const[e,n]of i)if(typeof e=="function"&&e(t))return n;return null}function Xu(i){return i[Vn]||(i[Vn]=new Map),i[Vn]}class id extends ur(we()){constructor(t){super(),this._postFixers=new Set,this.selection=new ui,this.roots=new ko({idProperty:"rootName"}),this.stylesProcessor=t,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(t="main"){return this.roots.get(t)}registerPostFixer(t){this._postFixers.add(t)}destroy(){this.roots.forEach(t=>t.destroy()),this.stopListening()}_callPostFixers(t){let e=!1;do for(const n of this._postFixers)if(e=n(t),e)break;while(e)}}class ka extends D{constructor(t,e,n,o){super(t,e,n,o),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=k0}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new W("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(t){return this.id!==null||t.id!==null?this.id===t.id:super.isSimilar(t)&&this.priority==t.priority}_clone(t=!1){const e=super._clone(t);return e._priority=this._priority,e._id=this._id,e}}function k0(){if(th(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(th(i)>1)return null;i=i.parent}return!i||th(i)>1?null:this.childCount}function th(i){return Array.from(i.getChildren()).filter(t=>!t.is("uiElement")).length}ka.DEFAULT_PRIORITY=10,ka.prototype.is=function(i,t){return t?t===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class eh extends D{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=_0}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new W("view-emptyelement-cannot-add",[this,e]);return 0}}function _0(){return null}eh.prototype.is=function(i,t){return t?t===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class od extends D{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=A0}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new W("view-uielement-cannot-add",[this,e]);return 0}render(t,e){return this.toDomElement(t)}toDomElement(t){const e=t.createElement(this.name);for(const n of this.getAttributeKeys())e.setAttribute(n,this.getAttribute(n));return e}}function w0(i){i.document.on("arrowKey",(t,e)=>function(n,o,r){if(o.keyCode==re.arrowright){const s=o.domTarget.ownerDocument.defaultView.getSelection(),a=s.rangeCount==1&&s.getRangeAt(0).collapsed;if(a||o.shiftKey){const c=s.focusNode,l=s.focusOffset,d=r.domPositionToView(c,l);if(d===null)return;let p=!1;const m=d.getLastMatchingPosition(w=>(w.item.is("uiElement")&&(p=!0),!(!w.item.is("uiElement")&&!w.item.is("attributeElement"))));if(p){const w=r.viewPositionToDom(m);a?s.collapse(w.parent,w.offset):s.extend(w.parent,w.offset)}}}}(0,e,i.domConverter),{priority:"low"})}function A0(){return null}od.prototype.is=function(i,t){return t?t===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class nh extends D{constructor(t,e,n,o){super(t,e,n,o),this.getFillerOffset=v0}_insertChild(t,e){if(e&&(e instanceof Mr||Array.from(e).length>0))throw new W("view-rawelement-cannot-add",[this,e]);return 0}render(t,e){}}function v0(){return null}nh.prototype.is=function(i,t){return t?t===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class _a extends le(_o){constructor(t,e){super(),this._children=[],this._customProperties=new Map,this.document=t,e&&this._insertChild(0,e)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(t){return this._customProperties.get(t)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(t){return this._insertChild(this.childCount,t)}getChild(t){return this._children[t]}getChildIndex(t){return this._children.indexOf(t)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(t,e){this._fireChange("children",this);let n=0;const o=function(r,s){return typeof s=="string"?[new Ie(r,s)]:(je(s)||(s=[s]),Array.from(s).map(a=>typeof a=="string"?new Ie(r,a):a instanceof Wo?new Ie(r,a.data):a))}(this.document,e);for(const r of o)r.parent!==null&&r._remove(),r.parent=this,this._children.splice(t,0,r),t++,n++;return n}_removeChildren(t,e=1){this._fireChange("children",this);for(let n=t;n<t+e;n++)this._children[n].parent=null;return this._children.splice(t,e)}_fireChange(t,e){this.fire("change:"+t,e)}_setCustomProperty(t,e){this._customProperties.set(t,e)}_removeCustomProperty(t){return this._customProperties.delete(t)}}_a.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class kp{constructor(t){this._cloneGroups=new Map,this._slotFactory=null,this.document=t}setSelection(...t){this.document.selection._setTo(...t)}setSelectionFocus(t,e){this.document.selection._setFocus(t,e)}createDocumentFragment(t){return new _a(this.document,t)}createText(t){return new Ie(this.document,t)}createAttributeElement(t,e,n={}){const o=new ka(this.document,t,e);return typeof n.priority=="number"&&(o._priority=n.priority),n.id&&(o._id=n.id),n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createContainerElement(t,e,n={},o={}){let r=null;xn(n)?o=n:r=n;const s=new X(this.document,t,e,r);return o.renderUnsafeAttributes&&s._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),s}createEditableElement(t,e,n={}){const o=new dt(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createEmptyElement(t,e,n={}){const o=new eh(this.document,t,e);return n.renderUnsafeAttributes&&o._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),o}createUIElement(t,e,n){const o=new od(this.document,t,e);return n&&(o.render=n),o}createRawElement(t,e,n,o={}){const r=new nh(this.document,t,e);return n&&(r.render=n),o.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...o.renderUnsafeAttributes),r}setAttribute(t,e,n){n._setAttribute(t,e)}removeAttribute(t,e){e._removeAttribute(t)}addClass(t,e){e._addClass(t)}removeClass(t,e){e._removeClass(t)}setStyle(t,e,n){xn(t)&&n===void 0?e._setStyle(t):n._setStyle(t,e)}removeStyle(t,e){e._removeStyle(t)}setCustomProperty(t,e,n){n._setCustomProperty(t,e)}removeCustomProperty(t,e){return e._removeCustomProperty(t)}breakAttributes(t){return t instanceof kt?this._breakAttributes(t):this._breakAttributesRange(t)}breakContainer(t){const e=t.parent;if(!e.is("containerElement"))throw new W("view-writer-break-non-container-element",this.document);if(!e.parent)throw new W("view-writer-break-root",this.document);if(t.isAtStart)return kt._createBefore(e);if(!t.isAtEnd){const n=e._clone(!1);this.insert(kt._createAfter(e),n);const o=new Nt(t,kt._createAt(e,"end")),r=new kt(n,0);this.move(o,r)}return kt._createAfter(e)}mergeAttributes(t){const e=t.offset,n=t.parent;if(n.is("$text"))return t;if(n.is("attributeElement")&&n.childCount===0){const s=n.parent,a=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new kt(s,a))}const o=n.getChild(e-1),r=n.getChild(e);if(!o||!r)return t;if(o.is("$text")&&r.is("$text"))return wp(o,r);if(o.is("attributeElement")&&r.is("attributeElement")&&o.isSimilar(r)){const s=o.childCount;return o._appendChild(r.getChildren()),r._remove(),this._removeFromClonedElementsGroup(r),this.mergeAttributes(new kt(o,s))}return t}mergeContainers(t){const e=t.nodeBefore,n=t.nodeAfter;if(!(e&&n&&e.is("containerElement")&&n.is("containerElement")))throw new W("view-writer-merge-containers-invalid-position",this.document);const o=e.getChild(e.childCount-1),r=o instanceof Ie?kt._createAt(o,"end"):kt._createAt(e,"end");return this.move(Nt._createIn(n),kt._createAt(e,"end")),this.remove(Nt._createOn(n)),r}insert(t,e){Ap(e=je(e)?[...e]:[e],this.document);const n=e.reduce((s,a)=>{const c=s[s.length-1],l=!a.is("uiElement");return c&&c.breakAttributes==l?c.nodes.push(a):s.push({breakAttributes:l,nodes:[a]}),s},[]);let o=null,r=t;for(const{nodes:s,breakAttributes:a}of n){const c=this._insertNodes(r,s,a);o||(o=c.start),r=c.end}return o?new Nt(o,r):new Nt(t)}remove(t){const e=t instanceof Nt?t:Nt._createOn(t);if(Qc(e,this.document),e.isCollapsed)return new _a(this.document);const{start:n,end:o}=this._breakAttributesRange(e,!0),r=n.parent,s=o.offset-n.offset,a=r._removeChildren(n.offset,s);for(const l of a)this._removeFromClonedElementsGroup(l);const c=this.mergeAttributes(n);return e.start=c,e.end=c.clone(),new _a(this.document,a)}clear(t,e){Qc(t,this.document);const n=t.getWalker({direction:"backward",ignoreElementEnd:!0});for(const o of n){const r=o.item;let s;if(r.is("element")&&e.isSimilar(r))s=Nt._createOn(r);else if(!o.nextPosition.isAfter(t.start)&&r.is("$textProxy")){const a=r.getAncestors().find(c=>c.is("element")&&e.isSimilar(c));a&&(s=Nt._createIn(a))}s&&(s.end.isAfter(t.end)&&(s.end=t.end),s.start.isBefore(t.start)&&(s.start=t.start),this.remove(s))}}move(t,e){let n;if(e.isAfter(t.end)){const o=(e=this._breakAttributes(e,!0)).parent,r=o.childCount;t=this._breakAttributesRange(t,!0),n=this.remove(t),e.offset+=o.childCount-r}else n=this.remove(t);return this.insert(e,n)}wrap(t,e){if(!(e instanceof ka))throw new W("view-writer-wrap-invalid-attribute",this.document);if(Qc(t,this.document),t.isCollapsed){let o=t.start;o.parent.is("element")&&(n=o.parent,!Array.from(n.getChildren()).some(s=>!s.is("uiElement")))&&(o=o.getLastMatchingPosition(s=>s.item.is("uiElement"))),o=this._wrapPosition(o,e);const r=this.document.selection;return r.isCollapsed&&r.getFirstPosition().isEqual(t.start)&&this.setSelection(o),new Nt(o)}return this._wrapRange(t,e);var n}unwrap(t,e){if(!(e instanceof ka))throw new W("view-writer-unwrap-invalid-attribute",this.document);if(Qc(t,this.document),t.isCollapsed)return t;const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._unwrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Nt(a,c)}rename(t,e){const n=new X(this.document,t,e.getAttributes());return this.insert(kt._createAfter(e),n),this.move(Nt._createIn(e),kt._createAt(n,0)),this.remove(Nt._createOn(e)),n}clearClonedElementsGroup(t){this._cloneGroups.delete(t)}createPositionAt(t,e){return kt._createAt(t,e)}createPositionAfter(t){return kt._createAfter(t)}createPositionBefore(t){return kt._createBefore(t)}createRange(t,e){return new Nt(t,e)}createRangeOn(t){return Nt._createOn(t)}createRangeIn(t){return Nt._createIn(t)}createSelection(...t){return new ke(...t)}createSlot(t="children"){if(!this._slotFactory)throw new W("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,t)}_registerSlotFactory(t){this._slotFactory=t}_clearSlotFactory(){this._slotFactory=null}_insertNodes(t,e,n){let o,r;if(o=n?ih(t):t.parent.is("$text")?t.parent.parent:t.parent,!o)throw new W("view-writer-invalid-position-container",this.document);r=n?this._breakAttributes(t,!0):t.parent.is("$text")?oh(t):t;const s=o._insertChild(r.offset,e);for(const d of e)this._addToClonedElementsGroup(d);const a=r.getShiftedBy(s),c=this.mergeAttributes(r);c.isEqual(r)||a.offset--;const l=this.mergeAttributes(a);return new Nt(c,l)}_wrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r),l=c.is("$text"),d=c.is("attributeElement");if(d&&this._wrapAttributeElement(o,c))s.push(new kt(t,r));else if(l||!d||C0(o,c)){const p=o._clone();c._remove(),p._appendChild(c),t._insertChild(r,p),this._addToClonedElementsGroup(p),s.push(new kt(t,r))}else this._wrapChildren(c,0,c.childCount,o);r++}let a=0;for(const c of s)c.offset-=a,c.offset!=e&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return Nt._createFromParentsAndOffsets(t,e,t,n)}_unwrapChildren(t,e,n,o){let r=e;const s=[];for(;r<n;){const c=t.getChild(r);if(c.is("attributeElement"))if(c.isSimilar(o)){const l=c.getChildren(),d=c.childCount;c._remove(),t._insertChild(r,l),this._removeFromClonedElementsGroup(c),s.push(new kt(t,r),new kt(t,r+d)),r+=d,n+=d-1}else this._unwrapAttributeElement(o,c)?(s.push(new kt(t,r),new kt(t,r+1)),r++):(this._unwrapChildren(c,0,c.childCount,o),r++);else r++}let a=0;for(const c of s)c.offset-=a,!(c.offset==e||c.offset==n)&&(this.mergeAttributes(c).isEqual(c)||(a++,n--));return Nt._createFromParentsAndOffsets(t,e,t,n)}_wrapRange(t,e){const{start:n,end:o}=this._breakAttributesRange(t,!0),r=n.parent,s=this._wrapChildren(r,n.offset,o.offset,e),a=this.mergeAttributes(s.start);a.isEqual(s.start)||s.end.offset--;const c=this.mergeAttributes(s.end);return new Nt(a,c)}_wrapPosition(t,e){if(e.isSimilar(t.parent))return _p(t.clone());t.parent.is("$text")&&(t=oh(t));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,t.parent._insertChild(t.offset,n);const o=new Nt(t,t.getShiftedBy(1));this.wrap(o,e);const r=new kt(n.parent,n.index);n._remove();const s=r.nodeBefore,a=r.nodeAfter;return s instanceof Ie&&a instanceof Ie?wp(s,a):_p(r)}_wrapAttributeElement(t,e){if(!vp(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&e.hasAttribute(n)&&e.getAttribute(n)!==t.getAttribute(n))return!1;for(const n of t.getStyleNames())if(e.hasStyle(n)&&e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&(e.hasAttribute(n)||this.setAttribute(n,t.getAttribute(n),e));for(const n of t.getStyleNames())e.hasStyle(n)||this.setStyle(n,t.getStyle(n),e);for(const n of t.getClassNames())e.hasClass(n)||this.addClass(n,e);return!0}_unwrapAttributeElement(t,e){if(!vp(t,e)||t.name!==e.name||t.priority!==e.priority)return!1;for(const n of t.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!e.hasAttribute(n)||e.getAttribute(n)!==t.getAttribute(n)))return!1;if(!e.hasClass(...t.getClassNames()))return!1;for(const n of t.getStyleNames())if(!e.hasStyle(n)||e.getStyle(n)!==t.getStyle(n))return!1;for(const n of t.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,e);return this.removeClass(Array.from(t.getClassNames()),e),this.removeStyle(Array.from(t.getStyleNames()),e),!0}_breakAttributesRange(t,e=!1){const n=t.start,o=t.end;if(Qc(t,this.document),t.isCollapsed){const c=this._breakAttributes(t.start,e);return new Nt(c,c)}const r=this._breakAttributes(o,e),s=r.parent.childCount,a=this._breakAttributes(n,e);return r.offset+=r.parent.childCount-s,new Nt(a,r)}_breakAttributes(t,e=!1){const n=t.offset,o=t.parent;if(t.parent.is("emptyElement"))throw new W("view-writer-cannot-break-empty-element",this.document);if(t.parent.is("uiElement"))throw new W("view-writer-cannot-break-ui-element",this.document);if(t.parent.is("rawElement"))throw new W("view-writer-cannot-break-raw-element",this.document);if(!e&&o.is("$text")&&rh(o.parent)||rh(o))return t.clone();if(o.is("$text"))return this._breakAttributes(oh(t),e);if(n==o.childCount){const r=new kt(o.parent,o.index+1);return this._breakAttributes(r,e)}if(n===0){const r=new kt(o.parent,o.index);return this._breakAttributes(r,e)}{const r=o.index+1,s=o._clone();o.parent._insertChild(r,s),this._addToClonedElementsGroup(s);const a=o.childCount-n,c=o._removeChildren(n,a);s._appendChild(c);const l=new kt(o.parent,r);return this._breakAttributes(l,e)}}_addToClonedElementsGroup(t){if(!t.root.is("rootElement"))return;if(t.is("element"))for(const o of t.getChildren())this._addToClonedElementsGroup(o);const e=t.id;if(!e)return;let n=this._cloneGroups.get(e);n||(n=new Set,this._cloneGroups.set(e,n)),n.add(t),t._clonesGroup=n}_removeFromClonedElementsGroup(t){if(t.is("element"))for(const o of t.getChildren())this._removeFromClonedElementsGroup(o);const e=t.id;if(!e)return;const n=this._cloneGroups.get(e);n&&n.delete(t)}}function ih(i){let t=i.parent;for(;!rh(t);){if(!t)return;t=t.parent}return t}function C0(i,t){return i.priority<t.priority||!(i.priority>t.priority)&&i.getIdentity()<t.getIdentity()}function _p(i){const t=i.nodeBefore;if(t&&t.is("$text"))return new kt(t,t.data.length);const e=i.nodeAfter;return e&&e.is("$text")?new kt(e,0):i}function oh(i){if(i.offset==i.parent.data.length)return new kt(i.parent.parent,i.parent.index+1);if(i.offset===0)return new kt(i.parent.parent,i.parent.index);const t=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Ie(i.root.document,t)),new kt(i.parent.parent,i.parent.index+1)}function wp(i,t){const e=i.data.length;return i._data+=t.data,t._remove(),new kt(i,e)}const y0=[Ie,ka,X,eh,nh,od];function Ap(i,t){for(const e of i){if(!y0.some(n=>e instanceof n))throw new W("view-writer-insert-invalid-node-type",t);e.is("$text")||Ap(e.getChildren(),t)}}function rh(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Qc(i,t){const e=ih(i.start),n=ih(i.end);if(!e||!n||e!==n)throw new W("view-writer-invalid-range-container",t)}function vp(i,t){return i.id===null&&t.id===null}const Cp=i=>i.createTextNode(" "),yp=i=>{const t=i.createElement("span");return t.dataset.ckeFiller="true",t.innerText=" ",t},Ep=i=>{const t=i.createElement("br");return t.dataset.ckeFiller="true",t},hr=7,Zc="⁠".repeat(hr);function wo(i){return typeof i=="string"?i.substr(0,hr)===Zc:Ae(i)&&i.data.substr(0,hr)===Zc}function Jc(i){return i.data.length==hr&&wo(i)}function xp(i){const t=typeof i=="string"?i:i.data;return wo(i)?t.slice(hr):t}function E0(i,t){if(t.keyCode==re.arrowleft){const e=t.domTarget.ownerDocument.defaultView.getSelection();if(e.rangeCount==1&&e.getRangeAt(0).collapsed){const n=e.getRangeAt(0).startContainer,o=e.getRangeAt(0).startOffset;wo(n)&&o<=hr&&e.collapse(n,0)}}}var Tp=j(8264),x0={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Tp.A,x0),Tp.A.locals;class T0 extends we(){constructor(t,e){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=t,this.selection=e,this.set("isFocused",!1),this.set("isSelecting",!1),E.isBlink&&!E.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(t,e){if(t==="text")this.domConverter.mapViewToDom(e.parent)&&this.markedTexts.add(e);else{if(!this.domConverter.mapViewToDom(e))return;if(t==="attributes")this.markedAttributes.add(e);else{if(t!=="children")throw new W("view-renderer-unknown-type",this);this.markedChildren.add(e)}}}render(){if(this.isComposing&&!E.isAndroid)return;let t=null;const e=!(E.isBlink&&!E.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);e?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?t=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(t=this.selection.getFirstPosition(),this.markedChildren.add(t.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(t=this.domConverter.domPositionToView(this._inlineFiller),t&&t.parent.is("$text")&&(t=kt._createBefore(t.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:t});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:t});if(e)if(t){const n=this.domConverter.viewPositionToDom(t),o=n.parent.ownerDocument;wo(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=Dp(o,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.childNodes),o=Array.from(this.domConverter.viewChildrenToDom(t,{withChildren:!1})),r=this._diffNodeLists(n,o),s=this._findUpdateActions(r,n,o,D0);if(s.indexOf("update")!==-1){const a={equal:0,insert:0,delete:0};for(const c of s)if(c==="update"){const l=a.equal+a.insert,d=a.equal+a.delete,p=t.getChild(l);!p||p.is("uiElement")||p.is("rawElement")||this._updateElementMappings(p,n[d]),ja(o[l]),a.equal++}else a[c]++}}_updateElementMappings(t,e){this.domConverter.unbindDomElement(e),this.domConverter.bindElements(e,t),this.markedChildren.add(t),this.markedAttributes.add(t)}_getInlineFillerPosition(){const t=this.selection.getFirstPosition();return t.parent.is("$text")?kt._createBefore(t.parent):t}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=this.domConverter.viewPositionToDom(t);return!!(e&&Ae(e.parent)&&wo(e.parent))}_removeInlineFiller(){const t=this._inlineFiller;if(!wo(t))throw new W("view-renderer-filler-was-lost",this);Jc(t)?t.remove():t.data=t.data.substr(hr),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const t=this.selection.getFirstPosition(),e=t.parent,n=t.offset;if(!this.domConverter.mapViewToDom(e.root)||!e.is("element")||!function(s){if(s.getAttribute("contenteditable")=="false")return!1;const a=s.findAncestor(c=>c.hasAttribute("contenteditable"));return!a||a.getAttribute("contenteditable")=="true"}(e)||n===e.getFillerOffset())return!1;const o=t.nodeBefore,r=t.nodeAfter;return!(o instanceof Ie||r instanceof Ie)&&(!E.isAndroid||!o&&!r)}_updateText(t,e){const n=this.domConverter.findCorrespondingDomText(t);let o=this.domConverter.viewToDom(t).data;const r=e.inlineFillerPosition;r&&r.parent==t.parent&&r.offset==t.index&&(o=Zc+o),Sp(n,o)}_updateAttrs(t){const e=this.domConverter.mapViewToDom(t);if(!e)return;const n=Array.from(e.attributes).map(r=>r.name),o=t.getAttributeKeys();for(const r of o)this.domConverter.setDomElementAttribute(e,r,t.getAttribute(r),t);for(const r of n)t.hasAttribute(r)||this.domConverter.removeDomElementAttribute(e,r)}_updateChildren(t,e){const n=this.domConverter.mapViewToDom(t);if(!n)return;if(E.isAndroid){let p=null;for(const m of Array.from(n.childNodes)){if(p&&Ae(p)&&Ae(m)){n.normalize();break}p=m}}const o=e.inlineFillerPosition,r=n.childNodes,s=Array.from(this.domConverter.viewChildrenToDom(t,{bind:!0}));o&&o.parent===t&&Dp(n.ownerDocument,s,o.offset);const a=this._diffNodeLists(r,s),c=this._findUpdateActions(a,r,s,S0);let l=0;const d=new Set;for(const p of c)p==="delete"?(d.add(r[l]),ja(r[l])):p!=="equal"&&p!=="update"||l++;l=0;for(const p of c)p==="insert"?(Ll(n,l,s[l]),l++):p==="update"?(Sp(r[l],s[l].data),l++):p==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(s[l])),l++);for(const p of d)p.parentNode||this.domConverter.unbindDomElement(p)}_diffNodeLists(t,e){return t=function(n,o){const r=Array.from(n);return r.length==0||!o||r[r.length-1]==o&&r.pop(),r}(t,this._fakeSelectionContainer),at(t,e,I0.bind(null,this.domConverter))}_findUpdateActions(t,e,n,o){if(t.indexOf("insert")===-1||t.indexOf("delete")===-1)return t;let r=[],s=[],a=[];const c={equal:0,insert:0,delete:0};for(const l of t)l==="insert"?a.push(n[c.equal+c.insert]):l==="delete"?s.push(e[c.equal+c.delete]):(r=r.concat(at(s,a,o).map(d=>d==="equal"?"update":d)),r.push("equal"),s=[],a=[]),c[l]++;return r.concat(at(s,a,o).map(l=>l==="equal"?"update":l))}_markDescendantTextToSync(t){if(t){if(t.is("$text"))this.markedTexts.add(t);else if(t.is("element"))for(const e of t.getChildren())this._markDescendantTextToSync(e)}}_updateSelection(){if(E.isBlink&&!E.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const t=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&t&&(this.selection.isFake?this._updateFakeSelection(t):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(t)):this.isComposing&&E.isAndroid||this._updateDomSelection(t))}_updateFakeSelection(t){const e=t.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(s){const a=s.createElement("div");return a.className="ck-fake-selection-container",Object.assign(a.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),a.textContent=" ",a}(e));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(t))return;n.parentElement&&n.parentElement==t||t.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const o=e.getSelection(),r=e.createRange();o.removeAllRanges(),r.selectNodeContents(n),o.addRange(r)}_updateDomSelection(t){const e=t.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(e))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),o=this.domConverter.viewPositionToDom(this.selection.focus);e.setBaseAndExtent(n.parent,n.offset,o.parent,o.offset),E.isGecko&&function(r,s){const a=r.parent;if(a.nodeType!=Node.ELEMENT_NODE||r.offset!=a.childNodes.length-1)return;const c=a.childNodes[r.offset];c&&c.tagName=="BR"&&s.addRange(s.getRangeAt(0))}(o,e)}_domSelectionNeedsUpdate(t){if(!this.domConverter.isDomSelectionCorrect(t))return!0;const e=t&&this.domConverter.domSelectionToView(t);return(!e||!this.selection.isEqual(e))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(e))}_fakeSelectionNeedsUpdate(t){const e=this._fakeSelectionContainer,n=t.ownerDocument.getSelection();return!e||e.parentElement!==t||n.anchorNode!==e&&!e.contains(n.anchorNode)||e.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const t of this.domDocuments){const e=t.getSelection();if(e.rangeCount){const n=t.activeElement,o=this.domConverter.mapDomToView(n);n&&o&&e.removeAllRanges()}}}_removeFakeSelection(){const t=this._fakeSelectionContainer;t&&t.remove()}_updateFocus(){if(this.isFocused){const t=this.selection.editableElement;t&&this.domConverter.focus(t)}}}function Dp(i,t,e){const n=t instanceof Array?t:t.childNodes,o=n[e];if(Ae(o))return o.data=Zc+o.data,o;{const r=i.createTextNode(Zc);return Array.isArray(t)?n.splice(e,0,r):Ll(t,e,r),r}}function D0(i,t){return ft(i)&&ft(t)&&!Ae(i)&&!Ae(t)&&!da(i)&&!da(t)&&i.tagName.toLowerCase()===t.tagName.toLowerCase()}function S0(i,t){return ft(i)&&ft(t)&&Ae(i)&&Ae(t)}function I0(i,t,e){return t===e||(Ae(t)&&Ae(e)?t.data===e.data:!(!i.isBlockFiller(t)||!i.isBlockFiller(e)))}function Sp(i,t){const e=i.data;if(e==t)return;const n=Q(e,t);for(const o of n)o.type==="insert"?i.insertData(o.index,o.values.join("")):i.deleteData(o.index,o.howMany)}const M0=Ep(Tt.document),N0=Cp(Tt.document),O0=yp(Tt.document),rd="data-ck-unsafe-attribute-",Ip="data-ck-unsafe-element";class sd{constructor(t,{blockFillerMode:e,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new qo,this._inlineObjectElementMatcher=new qo,this._elementsWithTemporaryCustomProperties=new Set,this.document=t,this.renderingMode=n,this.blockFillerMode=e||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?Tt.document:Tt.document.implementation.createHTMLDocument("")}bindFakeSelection(t,e){this._fakeSelectionMapping.set(t,new ke(e))}fakeSelectionToView(t){return this._fakeSelectionMapping.get(t)}bindElements(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}unbindDomElement(t){const e=this._domToViewMapping.get(t);if(e){this._domToViewMapping.delete(t),this._viewToDomMapping.delete(e);for(const n of Array.from(t.children))this.unbindDomElement(n)}}bindDocumentFragments(t,e){this._domToViewMapping.set(t,e),this._viewToDomMapping.set(e,t)}shouldRenderAttribute(t,e,n){return this.renderingMode==="data"||!(t=t.toLowerCase()).startsWith("on")&&(t!=="srcdoc"||!e.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(t==="src"||t==="srcset")||n==="source"&&t==="srcset"||!e.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(t,e){if(this.renderingMode==="data")return void(t.innerHTML=e);const n=new DOMParser().parseFromString(e,"text/html"),o=n.createDocumentFragment(),r=n.body.childNodes;for(;r.length>0;)o.appendChild(r[0]);const s=n.createTreeWalker(o,NodeFilter.SHOW_ELEMENT),a=[];let c;for(;c=s.nextNode();)a.push(c);for(const l of a){for(const p of l.getAttributeNames())this.setDomElementAttribute(l,p,l.getAttribute(p));const d=l.tagName.toLowerCase();this._shouldRenameElement(d)&&(Op(d),l.replaceWith(this._createReplacementDomElement(d,l)))}for(;t.firstChild;)t.firstChild.remove();t.append(o)}viewToDom(t,e={}){if(t.is("$text")){const n=this._processDataFromViewText(t);return this._domDocument.createTextNode(n)}{const n=t;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let o;if(n.is("documentFragment"))o=this._domDocument.createDocumentFragment(),e.bind&&this.bindDocumentFragments(o,n);else{if(n.is("uiElement"))return o=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),e.bind&&this.bindElements(o,n),o;this._shouldRenameElement(n.name)?(Op(n.name),o=this._createReplacementDomElement(n.name)):o=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(o,this),e.bind&&this.bindElements(o,n);for(const r of n.getAttributeKeys())this.setDomElementAttribute(o,r,n.getAttribute(r),n)}if(e.withChildren!==!1)for(const r of this.viewChildrenToDom(n,e))o.appendChild(r);return o}}setDomElementAttribute(t,e,n,o){const r=this.shouldRenderAttribute(e,n,t.tagName.toLowerCase())||o&&o.shouldRenderUnsafeAttribute(e);r||jt("domconverter-unsafe-attribute-detected",{domElement:t,key:e,value:n}),function(s){try{Tt.document.createAttribute(s)}catch{return!1}return!0}(e)?(t.hasAttribute(e)&&!r?t.removeAttribute(e):t.hasAttribute(rd+e)&&r&&t.removeAttribute(rd+e),t.setAttribute(r?e:rd+e,n)):jt("domconverter-invalid-attribute-detected",{domElement:t,key:e,value:n})}removeDomElementAttribute(t,e){e!=Ip&&(t.removeAttribute(e),t.removeAttribute(rd+e))}*viewChildrenToDom(t,e={}){const n=t.getFillerOffset&&t.getFillerOffset();let o=0;for(const r of t.getChildren()){n===o&&(yield this._getBlockFiller());const s=r.is("element")&&!!r.getCustomProperty("dataPipeline:transparentRendering")&&!Sn(r.getAttributes());s&&this.renderingMode=="data"?yield*this.viewChildrenToDom(r,e):(s&&jt("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:r}),yield this.viewToDom(r,e)),o++}n===o&&(yield this._getBlockFiller())}viewRangeToDom(t){const e=this.viewPositionToDom(t.start),n=this.viewPositionToDom(t.end),o=this._domDocument.createRange();return o.setStart(e.parent,e.offset),o.setEnd(n.parent,n.offset),o}viewPositionToDom(t){const e=t.parent;if(e.is("$text")){const n=this.findCorrespondingDomText(e);if(!n)return null;let o=t.offset;return wo(n)&&(o+=hr),{parent:n,offset:o}}{let n,o,r;if(t.offset===0){if(n=this.mapViewToDom(e),!n)return null;r=n.childNodes[0]}else{const s=t.nodeBefore;if(o=s.is("$text")?this.findCorrespondingDomText(s):this.mapViewToDom(s),!o)return null;n=o.parentNode,r=o.nextSibling}return Ae(r)&&wo(r)?{parent:r,offset:hr}:{parent:n,offset:o?la(o)+1:0}}}domToView(t,e={}){const n=[],o=this._domToView(t,e,n),r=o.next().value;return r?(o.next(),this._processDomInlineNodes(null,n,e),r.is("$text")&&r.data.length==0?null:r):null}*domChildrenToView(t,e={},n=[]){for(let o=0;o<t.childNodes.length;o++){const r=t.childNodes[o],s=this._domToView(r,e,n),a=s.next().value;a!==null&&(this._isBlockViewElement(a)&&this._processDomInlineNodes(t,n,e),yield a,s.next())}this._processDomInlineNodes(t,n,e)}domSelectionToView(t){if(function(o){if(!E.isGecko||!o.rangeCount)return!1;const r=o.getRangeAt(0).startContainer;try{Object.prototype.toString.call(r)}catch{return!0}return!1}(t))return new ke([]);if(t.rangeCount===1){let o=t.getRangeAt(0).startContainer;Ae(o)&&(o=o.parentNode);const r=this.fakeSelectionToView(o);if(r)return r}const e=this.isDomSelectionBackward(t),n=[];for(let o=0;o<t.rangeCount;o++){const r=t.getRangeAt(o),s=this.domRangeToView(r);s&&n.push(s)}return new ke(n,{backward:e})}domRangeToView(t){const e=this.domPositionToView(t.startContainer,t.startOffset),n=this.domPositionToView(t.endContainer,t.endOffset);return e&&n?new Nt(e,n):null}domPositionToView(t,e=0){if(this.isBlockFiller(t))return this.domPositionToView(t.parentNode,la(t));const n=this.mapDomToView(t);if(n&&(n.is("uiElement")||n.is("rawElement")))return kt._createBefore(n);if(Ae(t)){if(Jc(t))return this.domPositionToView(t.parentNode,la(t));const o=this.findCorrespondingViewText(t);let r=e;return o?(wo(t)&&(r-=hr,r=r<0?0:r),new kt(o,r)):null}if(e===0){const o=this.mapDomToView(t);if(o)return new kt(o,0)}else{const o=t.childNodes[e-1];if(Ae(o)&&Jc(o)||o&&this.isBlockFiller(o))return this.domPositionToView(o.parentNode,la(o));const r=Ae(o)?this.findCorrespondingViewText(o):this.mapDomToView(o);if(r&&r.parent)return new kt(r.parent,r.index+1)}return null}mapDomToView(t){return this.getHostViewElement(t)||this._domToViewMapping.get(t)}findCorrespondingViewText(t){if(Jc(t))return null;const e=this.getHostViewElement(t);if(e)return e;const n=t.previousSibling;if(n){if(!this.isElement(n))return null;const o=this.mapDomToView(n);if(o){const r=o.nextSibling;return r instanceof Ie?r:null}}else{const o=this.mapDomToView(t.parentNode);if(o){const r=o.getChild(0);return r instanceof Ie?r:null}}return null}mapViewToDom(t){return this._viewToDomMapping.get(t)}findCorrespondingDomText(t){const e=t.previousSibling;return e&&this.mapViewToDom(e)?this.mapViewToDom(e).nextSibling:!e&&t.parent&&this.mapViewToDom(t.parent)?this.mapViewToDom(t.parent).childNodes[0]:null}focus(t){const e=this.mapViewToDom(t);if(e&&e.ownerDocument.activeElement!==e){const{scrollX:n,scrollY:o}=Tt.window,r=[];Mp(e,s=>{const{scrollLeft:a,scrollTop:c}=s;r.push([a,c])}),e.focus(),Mp(e,s=>{const[a,c]=r.shift();s.scrollLeft=a,s.scrollTop=c}),Tt.window.scrollTo(n,o)}}_clearDomSelection(){const t=this.mapViewToDom(this.document.selection.editableElement);if(!t)return;const e=t.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(e);n&&n.rangeCount>0&&e.removeAllRanges()}isElement(t){return t&&t.nodeType==Node.ELEMENT_NODE}isDocumentFragment(t){return t&&t.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(t){return this.blockFillerMode=="br"?t.isEqualNode(M0):!(t.tagName!=="BR"||!Np(t,this.blockElements)||t.parentNode.childNodes.length!==1)||t.isEqualNode(O0)||function(e,n){return e.isEqualNode(N0)&&Np(e,n)&&e.parentNode.childNodes.length===1}(t,this.blockElements)}isDomSelectionBackward(t){if(t.isCollapsed)return!1;const e=this._domDocument.createRange();try{e.setStart(t.anchorNode,t.anchorOffset),e.setEnd(t.focusNode,t.focusOffset)}catch{return!1}const n=e.collapsed;return e.detach(),n}getHostViewElement(t){const e=function(n){const o=[];let r=n;for(;r&&r.nodeType!=Node.DOCUMENT_NODE;)o.unshift(r),r=r.parentNode;return o}(t);for(e.pop();e.length;){const n=e.pop(),o=this._domToViewMapping.get(n);if(o&&(o.is("uiElement")||o.is("rawElement")))return o}return null}isDomSelectionCorrect(t){return this._isDomSelectionPositionCorrect(t.anchorNode,t.anchorOffset)&&this._isDomSelectionPositionCorrect(t.focusNode,t.focusOffset)}registerRawContentMatcher(t){this._rawContentElementMatcher.add(t)}registerInlineObjectMatcher(t){this._inlineObjectElementMatcher.add(t)}_clearTemporaryCustomProperties(){for(const t of this._elementsWithTemporaryCustomProperties)t._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Cp(this._domDocument);case"markedNbsp":return yp(this._domDocument);case"br":return Ep(this._domDocument)}}_isDomSelectionPositionCorrect(t,e){if(Ae(t)&&wo(t)&&e<hr||this.isElement(t)&&wo(t.childNodes[e]))return!1;const n=this.mapDomToView(t);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(t,e,n){if(this.isBlockFiller(t))return null;const o=this.getHostViewElement(t);if(o)return o;if(da(t)&&e.skipComments)return null;if(Ae(t)){if(Jc(t))return null;{const r=t.data;if(r==="")return null;const s=new Ie(this.document,r);return n.push(s),s}}{let r=this.mapDomToView(t);if(r)return this._isInlineObjectElement(r)&&n.push(r),r;if(this.isDocumentFragment(t))r=new _a(this.document),e.bind&&this.bindDocumentFragments(t,r);else{r=this._createViewElement(t,e),e.bind&&this.bindElements(t,r);const a=t.attributes;if(a)for(let c=a.length,l=0;l<c;l++)r._setAttribute(a[l].name,a[l].value);if(this._isViewElementWithRawContent(r,e))return r._setCustomProperty("$rawContent",t.innerHTML),this._isBlockViewElement(r)||n.push(r),r;if(da(t))return r._setCustomProperty("$rawContent",t.data),r}yield r;const s=[];if(e.withChildren!==!1)for(const a of this.domChildrenToView(t,e,s))r._appendChild(a);if(this._isInlineObjectElement(r))n.push(r);else for(const a of s)n.push(a)}}_processDomInlineNodes(t,e,n){if(!e.length||t&&!this.isDocumentFragment(t)&&!this._isBlockDomElement(t))return;let o=!1;for(let r=0;r<e.length;r++){const s=e[r];if(!s.is("$text")){o=!1;continue}let a,c=!1;if(B0(s,this.preElements))a=xp(s.data);else{a=s.data.replace(/[ \n\t\r]{1,}/g," "),c=/[^\S\u00A0]/.test(a.charAt(a.length-1));const l=r>0?e[r-1]:null,d=r+1<e.length?e[r+1]:null,p=!l||l.is("element")&&l.name=="br"||o,m=!d&&!wo(s.data);n.withChildren!==!1&&(p&&(a=a.replace(/^ /,"")),m&&(a=a.replace(/ $/,""))),a=xp(a),a=a.replace(/ \u00A0/g,"  ");const w=d&&d.is("element")&&d.name!="br",y=d&&d.is("$text")&&d.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(a)||!d||w||y)&&(a=a.replace(/\u00A0$/," ")),(p||l&&l.is("element")&&l.name!="br")&&(a=a.replace(/^\u00A0/," "))}a.length==0&&s.parent?(s._remove(),e.splice(r,1),r--):(s._data=a,o=c)}e.length=0}_processDataFromViewText(t){let e=t.data;if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return e;if(e.charAt(0)==" "){const n=this._getTouchingInlineViewNode(t,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(e=" "+e.substr(1))}if(e.charAt(e.length-1)==" "){const n=this._getTouchingInlineViewNode(t,!0),o=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";e.charAt(e.length-2)!=" "&&n&&!o||(e=e.substr(0,e.length-1)+" ")}return e.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(t){if(t.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const e=this._processDataFromViewText(t);return e.charAt(e.length-1)==" "}_getTouchingInlineViewNode(t,e){const n=new Bt({startPosition:e?kt._createAfter(t):kt._createBefore(t),direction:e?"forward":"backward"});for(const o of n){if(o.item.is("element","br"))return null;if(this._isInlineObjectElement(o.item))return o.item;if(o.item.is("containerElement"))return null;if(o.item.is("$textProxy"))return o.item}return null}_isBlockDomElement(t){return this.isElement(t)&&this.blockElements.includes(t.tagName.toLowerCase())}_isBlockViewElement(t){return t.is("element")&&this.blockElements.includes(t.name)}_isInlineObjectElement(t){return!!t.is("element")&&(t.name=="br"||this.inlineObjectElements.includes(t.name)||!!this._inlineObjectElementMatcher.match(t))}_createViewElement(t,e){if(da(t))return new od(this.document,"$comment");const n=e.keepOriginalCase?t.tagName:t.tagName.toLowerCase();return new D(this.document,n)}_isViewElementWithRawContent(t,e){return e.withChildren!==!1&&t.is("element")&&!!this._rawContentElementMatcher.match(t)}_shouldRenameElement(t){const e=t.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(e)}_createReplacementDomElement(t,e){const n=this._domDocument.createElement("span");if(n.setAttribute(Ip,t),e){for(;e.firstChild;)n.appendChild(e.firstChild);for(const o of e.getAttributeNames())n.setAttribute(o,e.getAttribute(o))}return n}}function B0(i,t){return i.getAncestors().some(e=>e.is("element")&&t.includes(e.name))}function Mp(i,t){let e=i;for(;e;)t(e),e=e.parentElement}function Np(i,t){const e=i.parentNode;return!!e&&!!e.tagName&&t.includes(e.tagName.toLowerCase())}function Op(i){i==="script"&&jt("domconverter-unsafe-script-element-detected"),i==="style"&&jt("domconverter-unsafe-style-element-detected")}class Or extends et(){constructor(t){super(),this._isEnabled=!1,this.view=t,this.document=t.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(t){return t&&t.nodeType===3&&(t=t.parentNode),!(!t||t.nodeType!==1)&&t.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const Bp=Uc(function(i,t){Wi(t,Z(t),i)});class Xa{constructor(t,e,n){this.view=t,this.document=t.document,this.domEvent=e,this.domTarget=e.target,Bp(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Us extends Or{constructor(){super(...arguments),this.useCapture=!1}observe(t){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(e=>{this.listenTo(t,e,(n,o)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(o.target)&&this.onDomEvent(o)},{useCapture:this.useCapture})})}stopObserving(t){this.stopListening(t)}fire(t,e,n){this.isEnabled&&this.document.fire(t,new Xa(this.view,e,n))}}class L0 extends Us{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(t){const e={keyCode:t.keyCode,altKey:t.altKey,ctrlKey:t.ctrlKey,shiftKey:t.shiftKey,metaKey:t.metaKey,get keystroke(){return ts(this)}};this.fire(t.type,t,e)}}const sh=function(){return Cn.Date.now()};var P0=/\s/;const R0=function(i){for(var t=i.length;t--&&P0.test(i.charAt(t)););return t};var z0=/^\s+/;const j0=function(i){return i&&i.slice(0,R0(i)+1).replace(z0,"")};var F0=/^[-+]0x[0-9a-f]+$/i,V0=/^0b[01]+$/i,H0=/^0o[0-7]+$/i,U0=parseInt;const Lp=function(i){if(typeof i=="number")return i;if(Ga(i))return NaN;if(ge(i)){var t=typeof i.valueOf=="function"?i.valueOf():i;i=ge(t)?t+"":t}if(typeof i!="string")return i===0?i:+i;i=j0(i);var e=V0.test(i);return e||H0.test(i)?U0(i.slice(2),e?2:8):F0.test(i)?NaN:+i};var $0=Math.max,W0=Math.min;const tc=function(i,t,e){var n,o,r,s,a,c,l=0,d=!1,p=!1,m=!0;if(typeof i!="function")throw new TypeError("Expected a function");function w(it){var ut=n,Ct=o;return n=o=void 0,l=it,s=i.apply(Ct,ut)}function y(it){var ut=it-c;return c===void 0||ut>=t||ut<0||p&&it-l>=r}function S(){var it=sh();if(y(it))return F(it);a=setTimeout(S,function(ut){var Ct=t-(ut-c);return p?W0(Ct,r-(ut-l)):Ct}(it))}function F(it){return a=void 0,m&&n?w(it):(n=o=void 0,s)}function G(){var it=sh(),ut=y(it);if(n=arguments,o=this,c=it,ut){if(a===void 0)return function(Ct){return l=Ct,a=setTimeout(S,t),d?w(Ct):s}(c);if(p)return clearTimeout(a),a=setTimeout(S,t),w(c)}return a===void 0&&(a=setTimeout(S,t)),s}return t=Lp(t)||0,ge(e)&&(d=!!e.leading,r=(p="maxWait"in e)?$0(Lp(e.maxWait)||0,t):r,m="trailing"in e?!!e.trailing:m),G.cancel=function(){a!==void 0&&clearTimeout(a),l=0,n=c=o=a=void 0},G.flush=function(){return a===void 0?s:F(sh())},G};class q0 extends Or{constructor(t){super(t),this._fireSelectionChangeDoneDebounced=tc(e=>{this.document.fire("selectionChangeDone",e)},200)}observe(){const t=this.document;t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),t.on("arrowKey",(e,n)=>{t.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(t){const e=this.document.selection,n=new ke(e.getRanges(),{backward:e.isBackward,fake:!1});t!=re.arrowleft&&t!=re.arrowup||n.setTo(n.getFirstPosition()),t!=re.arrowright&&t!=re.arrowdown||n.setTo(n.getLastPosition());const o={oldSelection:e,newSelection:n,domSelection:null};this.document.fire("selectionChange",o),this._fireSelectionChangeDoneDebounced(o)}}const G0=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},K0=function(i){return this.__data__.has(i)};function ad(i){var t=-1,e=i==null?0:i.length;for(this.__data__=new Po;++t<e;)this.add(i[t])}ad.prototype.add=ad.prototype.push=G0,ad.prototype.has=K0;const Y0=ad,Q0=function(i,t){for(var e=-1,n=i==null?0:i.length;++e<n;)if(t(i[e],e,i))return!0;return!1},Z0=function(i,t){return i.has(t)},Pp=function(i,t,e,n,o,r){var s=1&e,a=i.length,c=t.length;if(a!=c&&!(s&&c>a))return!1;var l=r.get(i),d=r.get(t);if(l&&d)return l==t&&d==i;var p=-1,m=!0,w=2&e?new Y0:void 0;for(r.set(i,t),r.set(t,i);++p<a;){var y=i[p],S=t[p];if(n)var F=s?n(S,y,p,t,i,r):n(y,S,p,i,t,r);if(F!==void 0){if(F)continue;m=!1;break}if(w){if(!Q0(t,function(G,it){if(!Z0(w,it)&&(y===G||o(y,G,e,n,r)))return w.push(it)})){m=!1;break}}else if(y!==S&&!o(y,S,e,n,r)){m=!1;break}}return r.delete(i),r.delete(t),m},J0=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n,o){e[++t]=[o,n]}),e},X0=function(i){var t=-1,e=Array(i.size);return i.forEach(function(n){e[++t]=n}),e};var Rp=qe?qe.prototype:void 0,ah=Rp?Rp.valueOf:void 0;const ty=function(i,t,e,n,o,r,s){switch(e){case"[object DataView]":if(i.byteLength!=t.byteLength||i.byteOffset!=t.byteOffset)return!1;i=i.buffer,t=t.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=t.byteLength||!r(new di(i),new di(t)));case"[object Boolean]":case"[object Date]":case"[object Number]":return ki(+i,+t);case"[object Error]":return i.name==t.name&&i.message==t.message;case"[object RegExp]":case"[object String]":return i==t+"";case"[object Map]":var a=J0;case"[object Set]":var c=1&n;if(a||(a=X0),i.size!=t.size&&!c)return!1;var l=s.get(i);if(l)return l==t;n|=2,s.set(i,t);var d=Pp(a(i),a(t),n,o,r,s);return s.delete(i),d;case"[object Symbol]":if(ah)return ah.call(i)==ah.call(t)}return!1};var ey=Object.prototype.hasOwnProperty;const ny=function(i,t,e,n,o,r){var s=1&e,a=go(i),c=a.length;if(c!=go(t).length&&!s)return!1;for(var l=c;l--;){var d=a[l];if(!(s?d in t:ey.call(t,d)))return!1}var p=r.get(i),m=r.get(t);if(p&&m)return p==t&&m==i;var w=!0;r.set(i,t),r.set(t,i);for(var y=s;++l<c;){var S=i[d=a[l]],F=t[d];if(n)var G=s?n(F,S,d,t,i,r):n(S,F,d,i,t,r);if(!(G===void 0?S===F||o(S,F,e,n,r):G)){w=!1;break}y||(y=d=="constructor")}if(w&&!y){var it=i.constructor,ut=t.constructor;it==ut||!("constructor"in i)||!("constructor"in t)||typeof it=="function"&&it instanceof it&&typeof ut=="function"&&ut instanceof ut||(w=!1)}return r.delete(i),r.delete(t),w};var zp="[object Arguments]",jp="[object Array]",cd="[object Object]",Fp=Object.prototype.hasOwnProperty;const iy=function(i,t,e,n,o,r){var s=En(i),a=En(t),c=s?jp:dr(i),l=a?jp:dr(t),d=(c=c==zp?cd:c)==cd,p=(l=l==zp?cd:l)==cd,m=c==l;if(m&&xi(i)){if(!xi(t))return!1;s=!0,d=!1}if(m&&!d)return r||(r=new yi),s||Li(i)?Pp(i,t,e,n,o,r):ty(i,t,c,e,n,o,r);if(!(1&e)){var w=d&&Fp.call(i,"__wrapped__"),y=p&&Fp.call(t,"__wrapped__");if(w||y){var S=w?i.value():i,F=y?t.value():t;return r||(r=new yi),o(S,F,e,n,r)}}return!!m&&(r||(r=new yi),ny(i,t,e,n,o,r))},ld=function i(t,e,n,o,r){return t===e||(t==null||e==null||!Bn(t)&&!Bn(e)?t!=t&&e!=e:iy(t,e,n,o,i,r))},oy=function(i,t,e){var n=(e=typeof e=="function"?e:void 0)?e(i,t):void 0;return n===void 0?ld(i,t,void 0,e):!!n};class Vp extends Or{constructor(t){super(t),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=t.domConverter,this.renderer=t._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(t){this._domElements.add(t),this.isEnabled&&this._mutationObserver.observe(t,this._config)}stopObserving(t){if(this._domElements.delete(t),this.isEnabled){this._mutationObserver.disconnect();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}}enable(){super.enable();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(t){if(t.length===0)return;const e=this.domConverter,n=new Set,o=new Set;for(const s of t){const a=e.mapDomToView(s.target);a&&(a.is("uiElement")||a.is("rawElement")||s.type!=="childList"||this._isBogusBrMutation(s)||o.add(a))}for(const s of t){const a=e.mapDomToView(s.target);if((!a||!a.is("uiElement")&&!a.is("rawElement"))&&s.type==="characterData"){const c=e.findCorrespondingViewText(s.target);c&&!o.has(c.parent)?n.add(c):!c&&wo(s.target)&&o.add(e.mapDomToView(s.target.parentNode))}}let r=!1;for(const s of n)r=!0,this.renderer.markToSync("text",s);for(const s of o){const a=e.mapViewToDom(s),c=Array.from(s.getChildren()),l=Array.from(e.domChildrenToView(a,{withChildren:!1}));oy(c,l,ry)||(r=!0,this.renderer.markToSync("children",s))}r&&this.view.forceRender()}_isBogusBrMutation(t){let e=null;return t.nextSibling===null&&t.removedNodes.length===0&&t.addedNodes.length==1&&(e=this.domConverter.domToView(t.addedNodes[0],{withChildren:!1})),e&&e.is("element","br")}}function ry(i,t){if(!Array.isArray(i))return i===t||!(!i.is("$text")||!t.is("$text"))&&i.data===t.data}class dd extends Us{constructor(t){super(t),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const e=this.document;e.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),t.change(()=>{})},50)}),e.on("blur",(n,o)=>{const r=e.selection.editableElement;r!==null&&r!==o.target||(e.isFocused=!1,this._isFocusChanging=!1,t.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(t){this.fire(t.type,t)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class sy extends Or{constructor(t){super(t),this.mutationObserver=t.getObserver(Vp),this.focusObserver=t.getObserver(dd),this.selection=this.document.selection,this.domConverter=t.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=tc(e=>{this.document.fire("selectionChangeDone",e)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=tc(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(t){const e=t.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,e),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(t,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(t,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(e)||(this.listenTo(e,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"selectionchange",(o,r)=>{this.document.isComposing&&!E.isAndroid||(this._handleSelectionChange(r,e),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(e))}stopObserving(t){this.stopListening(t)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(t,e){if(!this.isEnabled)return;const n=e.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const o=this.domConverter.domSelectionToView(n);if(o.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(o)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(o))this.view.forceRender();else{const r={oldSelection:this.selection,newSelection:o,domSelection:n};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class ay extends Us{constructor(t){super(t),this.domEventType=["compositionstart","compositionupdate","compositionend"];const e=this.document;e.on("compositionstart",()=>{e.isComposing=!0},{priority:"low"}),e.on("compositionend",()=>{e.isComposing=!1},{priority:"low"})}onDomEvent(t){this.fire(t.type,t,{data:t.data})}}class Hp{constructor(t,e={}){this._files=e.cacheFiles?Up(t):null,this._native=t}get files(){return this._files||(this._files=Up(this._native)),this._files}get types(){return this._native.types}getData(t){return this._native.getData(t)}setData(t,e){this._native.setData(t,e)}set effectAllowed(t){this._native.effectAllowed=t}get effectAllowed(){return this._native.effectAllowed}set dropEffect(t){this._native.dropEffect=t}get dropEffect(){return this._native.dropEffect}setDragImage(t,e,n){this._native.setDragImage(t,e,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function Up(i){const t=Array.from(i.files||[]),e=Array.from(i.items||[]);return t.length?t:e.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class cy extends Us{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(t){const e=t.getTargetRanges(),n=this.view,o=n.document;let r=null,s=null,a=[];if(t.dataTransfer&&(r=new Hp(t.dataTransfer)),t.data!==null?s=t.data:r&&(s=r.getData("text/plain")),o.selection.isFake)a=Array.from(o.selection.getRanges());else if(e.length)a=e.map(c=>{const l=n.domConverter.domPositionToView(c.startContainer,c.startOffset),d=n.domConverter.domPositionToView(c.endContainer,c.endOffset);return l?n.createRange(l,d):d?n.createRange(d):void 0}).filter(c=>!!c);else if(E.isAndroid){const c=t.target.ownerDocument.defaultView.getSelection();a=Array.from(n.domConverter.domSelectionToView(c).getRanges())}if(E.isAndroid&&t.inputType=="insertCompositionText"&&s&&s.endsWith(`
`))this.fire(t.type,t,{inputType:"insertParagraph",targetRanges:[n.createRange(a[0].end)]});else if(t.inputType=="insertText"&&s&&s.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...e?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[e]}]:[],n],on:{dragstart:o.to(r=>r.preventDefault())}}]})}}function fb(i,t,e){return(n,o)=>{const r=new be(i);if(r.width<ux||r.height<dx)return null;let s;s=t.position==="inside"?r.bottom-o.height:r.bottom-o.height/2,s-=t.verticalOffset;const a=e(r,o),c=n.clone().moveTo(a,s).getIntersection(o.clone().moveTo(a,s)).getVisible();return!c||c.getArea()<o.getArea()?null:{top:s,left:a,name:`position_${t.position}-side_${t.side}`,config:{withArrow:!1}}}}function pb(i){const t=i.config.get("ui.poweredBy"),e=t&&t.position||"border";return lx({position:e,label:hx,verticalOffset:e==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},t)}var gb=j(1801),gx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(gb.A,gx),gb.A.locals;const mb="polite";class mx{constructor(t){this.editor=t}announce(t,e,n=mb){const o=this.editor;this.view||(this.view=new bx(o.locale),o.ui.view.body.add(this.view));let r=this.view.regionViews.find(s=>s.regionName===t);r||(r=new kx(this.view.locale),this.view.regionViews.add(r)),r.set({regionName:t,text:e,politeness:n})}}class bx extends Jt{constructor(t){super(t),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class kx extends Jt{constructor(t){super(t);const e=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",mb),this.setTemplate({tag:"div",attributes:{role:"region","data-region":e.to("regionName"),"aria-live":e.to("politeness")},children:[{text:e.to("text")}]})}}var _x=Object.defineProperty,bb=Object.getOwnPropertySymbols,wx=Object.prototype.hasOwnProperty,Ax=Object.prototype.propertyIsEnumerable,kb=(i,t,e)=>t in i?_x(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;class vx extends we(){constructor(t){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const e=t.editing.view;this.editor=t,this.componentFactory=new HE(t),this.focusTracker=new In,this.tooltipManager=new xd(t),this.poweredBy=new fx(t),this.ariaLiveAnnouncer=new mx(t),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(e.document,"layoutChanged",this.update.bind(this)),this.listenTo(e,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const t of this._editableElementsMap.values())t.ckeditorInstance=null,this.editor.keystrokes.stopListening(t);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(t,e){this._editableElementsMap.set(t,e),e.ckeditorInstance||(e.ckeditorInstance=this.editor),this.focusTracker.add(e);const n=()=>{this.editor.editing.view.getDomRoot(t)||this.editor.keystrokes.listenTo(e)};this.isReady?n():this.once("ready",n)}removeEditableElement(t){const e=this._editableElementsMap.get(t);e&&(this._editableElementsMap.delete(t),this.editor.keystrokes.stopListening(e),this.focusTracker.remove(e),e.ckeditorInstance=null)}getEditableElement(t="main"){return this._editableElementsMap.get(t)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(t,e={}){t.isRendered?(this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)):t.once("render",()=>{this.focusTracker.add(t.element),this.editor.keystrokes.listenTo(t.element)}),this._focusableToolbarDefinitions.push({toolbarView:t,options:e})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const t=this.editor,e=t.config.get("ui.viewportOffset");if(e)return e;const n=t.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const t=this.editor,e=t.editing.view;let n,o;t.keystrokes.set("Alt+F10",(r,s)=>{const a=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(a)&&!Array.from(e.domRoots.values()).includes(a)&&(n=a);const c=this._getCurrentFocusedToolbarDefinition();c&&o||(o=this._getFocusableCandidateToolbarDefinitions());for(let l=0;l<o.length;l++){const d=o.shift();if(o.push(d),d!==c&&this._focusFocusableCandidateToolbar(d)){c&&c.options.afterBlur&&c.options.afterBlur();break}}s()}),t.keystrokes.set("Esc",(r,s)=>{const a=this._getCurrentFocusedToolbarDefinition();a&&(n?(n.focus(),n=null):t.editing.view.focus(),a.options.afterBlur&&a.options.afterBlur(),s())})}_getFocusableCandidateToolbarDefinitions(){const t=[];for(const e of this._focusableToolbarDefinitions){const{toolbarView:n,options:o}=e;(Jr(n.element)||o.beforeFocus)&&t.push(e)}return t.sort((e,n)=>_b(e)-_b(n)),t}_getCurrentFocusedToolbarDefinition(){for(const t of this._focusableToolbarDefinitions)if(t.toolbarView.element&&t.toolbarView.element.contains(this.focusTracker.focusedElement))return t;return null}_focusFocusableCandidateToolbar(t){const{toolbarView:e,options:{beforeFocus:n}}=t;return n&&n(),!!Jr(e.element)&&(e.focus(),!0)}_handleScrollToTheSelection(t,e){const n=((o,r)=>{for(var s in r||(r={}))wx.call(r,s)&&kb(o,s,r[s]);if(bb)for(var s of bb(r))Ax.call(r,s)&&kb(o,s,r[s]);return o})({top:0,bottom:0,left:0,right:0},this.viewportOffset);e.viewportOffset.top+=n.top,e.viewportOffset.bottom+=n.bottom,e.viewportOffset.left+=n.left,e.viewportOffset.right+=n.right}}function _b(i){const{toolbarView:t,options:e}=i;let n=10;return Jr(t.element)&&n--,e.isContextual&&n--,n}var wb=j(1185),Cx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(wb.A,Cx),wb.A.locals;class yx extends Jt{constructor(t){super(t),this.body=new lE(t)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class Ex extends yx{constructor(t){super(t),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:t.uiLanguageDirection,lang:t.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const t=this.t,e=new bd;return e.text=t("Rich Text Editor"),e.extendTemplate({attributes:{class:"ck-voice-label"}}),e}}class xx extends Jt{constructor(t,e,n){super(t),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:t.contentLanguage,dir:t.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=e}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const t=this._editingView;function e(n){t.change(o=>{const r=t.document.getRoot(n.name);o.addClass(n.isFocused?"ck-focused":"ck-blurred",r),o.removeClass(n.isFocused?"ck-blurred":"ck-focused",r)})}t.isRenderingInProgress?function n(o){t.once("change:isRenderingInProgress",(r,s,a)=>{a?n(o):e(o)})}(this):e(this)}}class Tx extends xx{constructor(t,e,n,o={}){super(t,e,n);const r=t.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=o.label||(()=>r("Editor editing area: %0",this.name))}render(){super.render();const t=this._editingView;t.change(e=>{const n=t.document.getRoot(this.name);e.setAttribute("aria-label",this._generateLabel(this),n)})}}class Lh extends $a{static get pluginName(){return"Notification"}init(){this.on("show:warning",(t,e)=>{window.alert(e.message)},{priority:"lowest"})}showSuccess(t,e={}){this._showNotification({message:t,type:"success",namespace:e.namespace,title:e.title})}showInfo(t,e={}){this._showNotification({message:t,type:"info",namespace:e.namespace,title:e.title})}showWarning(t,e={}){this._showNotification({message:t,type:"warning",namespace:e.namespace,title:e.title})}_showNotification(t){const e=t.namespace?`show:${t.type}:${t.namespace}`:`show:${t.type}`;this.fire(e,{message:t.message,type:t.type,title:t.title||""})}}class Ab extends we(){constructor(t,e){super(),e&&Bp(this,e),t&&this.set(t)}}var vb=j(991),Dx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(vb.A,Dx),vb.A.locals;var Cb=j(5380),Sx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Cb.A,Sx),Cb.A.locals;const Dd=Bs("px");class Sd extends It{constructor(t){super(t),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const e=this.editor.editing.view,n=e.document.selection.editableElement;return n?e.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(t){return Array.from(this._viewToStack.keys()).includes(t)}add(t){if(this._view||this._createPanelView(),this.hasView(t.view))throw new W("contextualballoon-add-view-exist",[this,t]);const e=t.stackId||"main";if(!this._idToStack.has(e))return this._idToStack.set(e,new Map([[t.view,t]])),this._viewToStack.set(t.view,this._idToStack.get(e)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!t.singleViewMode||this.showStack(e));const n=this._idToStack.get(e);t.singleViewMode&&this.showStack(e),n.set(t.view,t),this._viewToStack.set(t.view,n),n===this._visibleStack&&this._showView(t)}remove(t){if(!this.hasView(t))throw new W("contextualballoon-remove-view-not-exist",[this,t]);const e=this._viewToStack.get(t);this._singleViewMode&&this.visibleView===t&&(this._singleViewMode=!1),this.visibleView===t&&(e.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(e.values())[e.size-2])),e.size===1?(this._idToStack.delete(this._getStackId(e)),this._numberOfStacks=this._idToStack.size):e.delete(t),this._viewToStack.delete(t)}updatePosition(t){t&&(this._visibleStack.get(this.visibleView).position=t),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(t){this.visibleStack=t;const e=this._idToStack.get(t);if(!e)throw new W("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==e&&this._showView(Array.from(e.values()).pop())}_createPanelView(){this._view=new to(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(t){return Array.from(this._idToStack.entries()).find(e=>e[1]===t)[0]}_showNextStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)+1;t[e]||(e=0),this.showStack(this._getStackId(t[e]))}_showPrevStack(){const t=Array.from(this._idToStack.values());let e=t.indexOf(this._visibleStack)-1;t[e]||(e=t.length-1),this.showStack(this._getStackId(t[e]))}_createRotatorView(){const t=new Ix(this.editor.locale),e=this.editor.locale.t;return this.view.content.add(t),t.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,o)=>!o&&n>1),t.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),t.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,o)=>{if(o<2)return"";const r=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return e("%0 of %1",[r,o])}),t.buttonNextView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),t.buttonPrevView.on("execute",()=>{t.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),t}_createFakePanelsView(){const t=new Mx(this.editor.locale,this.view);return t.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(e,n)=>!n&&e>=2?Math.min(e-1,2):0),t.listenTo(this.view,"change:top",()=>t.updatePosition()),t.listenTo(this.view,"change:left",()=>t.updatePosition()),this.editor.ui.view.body.add(t),t}_showView({view:t,balloonClassName:e="",withArrow:n=!0,singleViewMode:o=!1}){this.view.class=e,this.view.withArrow=n,this._rotatorView.showView(t),this.visibleView=t,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),o&&(this._singleViewMode=!0)}_getBalloonPosition(){let t=Array.from(this._visibleStack.values()).pop().position;return t&&(t.limiter||(t=Object.assign({},t,{limiter:this.positionLimiter})),t=Object.assign({},t,{viewportOffsetConfig:this.editor.ui.viewportOffset})),t}}class Ix extends Jt{constructor(t){super(t);const e=t.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new In,this.buttonPrevView=this._createButtonView(e("Previous"),ce.previousArrow),this.buttonNextView=this._createButtonView(e("Next"),ce.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",o=>o?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(t){this.hideView(),this.content.add(t)}hideView(){this.content.clear()}_createButtonView(t,e){const n=new De(this.locale);return n.set({label:t,icon:e,tooltip:!0}),n}}class Mx extends Jt{constructor(t,e){super(t);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=e,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",o=>o?"":"ck-hidden")],style:{top:n.to("top",Dd),left:n.to("left",Dd),width:n.to("width",Dd),height:n.to("height",Dd)}},children:this.content}),this.on("change:numberOfPanels",(o,r,s,a)=>{s>a?this._addPanels(s-a):this._removePanels(a-s),this.updatePosition()})}_addPanels(t){for(;t--;){const e=new Jt;e.setTemplate({tag:"div"}),this.content.add(e),this.registerChild(e)}}_removePanels(t){for(;t--;){const e=this.content.last;this.content.remove(e),this.deregisterChild(e),e.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:t,left:e}=this._balloonPanelView,{width:n,height:o}=new be(this._balloonPanelView.element);Object.assign(this,{top:t,left:e,width:n,height:o})}}}var yb=j(8298),Nx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(yb.A,Nx),yb.A.locals;const sc=Bs("px");class Ox extends Jt{constructor(t){super(t);const e=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new mr({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:e.to("isSticky",n=>n?"block":"none"),height:e.to("isSticky",n=>n?sc(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new mr({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",e.if("isSticky","ck-sticky-panel__content_sticky"),e.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:e.to("isSticky",n=>n?sc(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:e.to("_stickyTopOffset",n=>n&&sc(n)),bottom:e.to("_stickyBottomOffset",n=>n&&sc(n)),marginLeft:e.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(Tt.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const t=new be(this.limiterElement);let e=t.getVisible();if(e){const n=new be(Tt.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,e=e.getIntersection(n)}if(e&&t.top<e.top){const n=e.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>e.bottom){const o=Math.max(t.bottom-e.bottom,0)+this.limiterBottomOffset;t.bottom-o>t.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(o):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<t.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=t,this._stickyBottomOffset=null,this._marginLeft=sc(-Tt.window.scrollX)}_stickToBottomOfLimiter(t){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=t,this._marginLeft=sc(-Tt.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new be(this.contentPanelElement)}}class Bx extends wd{constructor(t,e){const n=t.t,o=Object.assign({},{showResetButton:!0,showIcon:!0,creator:Cd},e);super(t,o.creator),this.label=e.label,this._viewConfig=o,this._viewConfig.showIcon&&(this.iconView=new ds,this.iconView.content=ce.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new De(t),this.resetButtonView.set({label:n("Clear"),icon:ce.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",r=>!r),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class Lx extends Jt{constructor(){super();const t=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",t.if("isVisible","ck-hidden",e=>!e)],tabindex:-1},children:[{tag:"span",children:[{text:[t.to("primaryText")]}]},{tag:"span",children:[{text:[t.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class Px extends Jt{constructor(t){super(t),this.children=this.createCollection(),this.focusTracker=new In,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Yo({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const t of this.children)this.focusTracker.add(t.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Eb=/[\\^$.*+?()[\]{}|]/g,Rx=RegExp(Eb.source);const xb=function(i){return(i=Za(i))&&Rx.test(i)?i.replace(Eb,"\\$&"):i};var Tb=j(8107),zx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Tb.A,zx),Tb.A.locals;var jx=Object.defineProperty,Db=Object.getOwnPropertySymbols,Fx=Object.prototype.hasOwnProperty,Vx=Object.prototype.propertyIsEnumerable,Sb=(i,t,e)=>t in i?jx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e;class Hx extends Jt{constructor(t,e){super(t),this._config=e,this.filteredView=e.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new In,this.keystrokes=new Mn,this.resultsView=new Px(t),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),e.infoView&&e.infoView.instance?this.infoView=e.infoView.instance:(this.infoView=new Lx,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Yo({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:o,totalItemsCount:r})=>{this.resultsCount=o,this.totalItemsCount=r}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",e.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const t=e=>e.stopPropagation();for(const e of this.focusableChildren)this.focusTracker.add(e.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",t),this.keystrokes.set("arrowleft",t),this.keystrokes.set("arrowup",t),this.keystrokes.set("arrowdown",t)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(t){const e=t?new RegExp(xb(t),"ig"):null,n=this.filteredView.filter(e);this.fire("search",((o,r)=>{for(var s in r||(r={}))Fx.call(r,s)&&Sb(o,s,r[s]);if(Db)for(var s of Db(r))Vx.call(r,s)&&Sb(o,s,r[s]);return o})({query:t},n))}_createSearchTextQueryView(){const t=new Bx(this.locale,this._config.queryView);return this.listenTo(t.fieldView,"input",()=>{this.search(t.fieldView.element.value)}),t.on("reset",()=>this.reset()),t.bind("isEnabled").to(this),t}_enableDefaultInfoViewBehavior(){const t=this.locale.t,e=this.infoView;function n(o,{query:r,resultsCount:s,totalItemsCount:a}){return typeof o=="function"?o(r,s,a):o}this.on("search",(o,r)=>{if(r.resultsCount)e.set({isVisible:!1});else{const s=this._config.infoView&&this._config.infoView.text;let a,c;r.totalItemsCount?s&&s.notFound?(a=s.notFound.primary,c=s.notFound.secondary):(a=t("No results found"),c=""):s&&s.noSearchableItems?(a=s.noSearchableItems.primary,c=s.noSearchableItems.secondary):(a=t("No searchable items"),c=""),e.set({primaryText:n(a,r),secondaryText:n(c,r),isVisible:!0})}})}}var Ib=j(5727),Ux={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Ib.A,Ux),Ib.A.locals;const Ph=class extends Hx{constructor(i,t){super(i,t),this._config=t;const e=Bs("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",o=>!o),n.to("_position",o=>`ck-search__results_${o}`)],style:{width:n.to("_width",e)}}}),this.focusTracker.on("change:isFocused",(o,r,s)=>{this._updateResultsVisibility(),s?this.resultsView.element.scrollTop=0:t.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(o,r)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,r())}),this.listenTo(Tt.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(o,{value:r})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=r,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new be(this.queryView.fieldView.element).width;const i=Ph._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:Ph.defaultResultsPositions});this.resultsView._position=i?i.name:"s"}_updateResultsVisibility(){const i=this._config.queryMinChars===void 0?0:this._config.queryMinChars,t=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&t>=i}};let Mb=Ph;Mb.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,t)=>({top:i.top-t.height,left:i.left,name:"n"})],Mb._getOptimalPosition=za;var Nb=j(9529),$x={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Nb.A,$x),Nb.A.locals;var Ob=j(109),Wx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Ob.A,Wx),Ob.A.locals;var Bb=j(2710),qx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Bb.A,qx),Bb.A.locals;var Lb=j(3344),Gx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Lb.A,Gx),Lb.A.locals;class Kx extends De{constructor(t){super(t);const e=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":e.to("isOn")},on:{mouseenter:e.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const t=new ds;return t.content=_d,t.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),t}}var Pb=j(9481),Yx={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Pb.A,Yx),Pb.A.locals;class Rh extends rc{constructor(t,e){super(t);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(e)}}var Qx=Object.defineProperty,Rb=Object.getOwnPropertySymbols,Zx=Object.prototype.hasOwnProperty,Jx=Object.prototype.propertyIsEnumerable,zb=(i,t,e)=>t in i?Qx(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,jb=(i,t)=>{for(var e in t||(t={}))Zx.call(t,e)&&zb(i,e,t[e]);if(Rb)for(var e of Rb(t))Jx.call(t,e)&&zb(i,e,t[e]);return i};const dl={toggleMenusAndFocusItemsOnHover(i){i.on("menu:mouseenter",t=>{if(i.isOpen){for(const e of i.menus){const n=t.path[0],o=n instanceof Rh&&n.children.first===e;e.isOpen=(t.path.includes(e)||o)&&e.isEnabled}t.source.focus()}})},focusCycleMenusOnArrows(i){const t=i.locale.uiLanguageDirection==="rtl";function e(n,o){const r=i.children.getIndex(n),s=n.isOpen,a=i.children.length,c=i.children.get((r+a+o)%a);n.isOpen=!1,s&&(c.isOpen=!0),c.buttonView.focus()}i.on("menu:arrowright",n=>{e(n.source,t?-1:1)}),i.on("menu:arrowleft",n=>{e(n.source,t?1:-1)})},closeMenusWhenTheBarCloses(i){i.on("change:isOpen",()=>{i.isOpen||i.menus.forEach(t=>{t.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(i){i.on("menu:change:isOpen",(t,e,n)=>{n&&i.menus.filter(o=>t.source.parentMenuView===o.parentMenuView&&t.source!==o&&o.isOpen).forEach(o=>{o.isOpen=!1})})},closeOnClickOutside(i){L({emitter:i,activator:()=>i.isOpen,callback:()=>i.close(),contextElements:()=>i.children.map(t=>t.element)})}},ya={openAndFocusPanelOnArrowDownKey(i){i.keystrokes.set("arrowdown",(t,e)=>{i.focusTracker.focusedElement===i.buttonView.element&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),e())})},openOnArrowRightKey(i){const t=i.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";i.keystrokes.set(t,(e,n)=>{i.focusTracker.focusedElement===i.buttonView.element&&i.isEnabled&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),n())})},openOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!0,i.panelView.focus()})},toggleOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!i.isOpen,i.isOpen&&i.panelView.focus()})},closeOnArrowLeftKey(i){const t=i.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";i.keystrokes.set(t,(e,n)=>{i.isOpen&&(i.isOpen=!1,i.focus(),n())})},closeOnEscKey(i){i.keystrokes.set("esc",(t,e)=>{i.isOpen&&(i.isOpen=!1,i.focus(),e())})},closeOnParentClose(i){i.parentMenuView.on("change:isOpen",(t,e,n)=>{n||t.source!==i.parentMenuView||(i.isOpen=!1)})}},Xx={southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,t)=>({top:i.bottom,left:i.left-t.width+i.width,name:"sw"}),northEast:(i,t)=>({top:i.top-t.height,left:i.left,name:"ne"}),northWest:(i,t)=>({top:i.top-t.height,left:i.left-t.width+i.width,name:"nw"}),eastSouth:i=>({top:i.top,left:i.right-5,name:"es"}),eastNorth:(i,t)=>({top:i.top-t.height,left:i.right-5,name:"en"}),westSouth:(i,t)=>({top:i.top,left:i.left-t.width+5,name:"ws"}),westNorth:(i,t)=>({top:i.top-t.height,left:i.left-t.width+5,name:"wn"})},tT=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function eT({normalizedConfig:i,locale:t,componentFactory:e}){const n=fr(i);return function(o,r){const s=r.removeItems,a=[];r.items=r.items.filter(({menuId:c})=>!s.includes(c)||(a.push(c),!1)),ac(r.items,c=>{c.groups=c.groups.filter(({groupId:l})=>!s.includes(l)||(a.push(l),!1));for(const l of c.groups)l.items=l.items.filter(d=>{const p=Hb(d);return!s.includes(p)||(a.push(p),!1)})});for(const c of s)a.includes(c)||jt("menu-bar-item-could-not-be-removed",{menuBarConfig:o,itemName:c})}(i,n),function(o,r){const s=r.addItems,a=[];for(const c of s){const l=oT(c.position),d=rT(c.position);if(nT(c))if(d){const p=r.items.findIndex(m=>m.menuId===d);p!=-1?l==="before"?(r.items.splice(p,0,c.menu),a.push(c)):l==="after"&&(r.items.splice(p+1,0,c.menu),a.push(c)):Fb(r,c.menu,d,l)&&a.push(c)}else l==="start"?(r.items.unshift(c.menu),a.push(c)):l==="end"&&(r.items.push(c.menu),a.push(c));else iT(c)?ac(r.items,p=>{if(p.menuId===d)l==="start"?(p.groups.unshift(c.group),a.push(c)):l==="end"&&(p.groups.push(c.group),a.push(c));else{const m=p.groups.findIndex(w=>w.groupId===d);m!==-1&&(l==="before"?(p.groups.splice(m,0,c.group),a.push(c)):l==="after"&&(p.groups.splice(m+1,0,c.group),a.push(c)))}}):Fb(r,c.item,d,l)&&a.push(c)}for(const c of s)a.includes(c)||jt("menu-bar-item-could-not-be-added",{menuBarConfig:o,addedItemConfig:c})}(i,n),function(o,r,s){ac(r.items,a=>{for(const c of a.groups)c.items=c.items.filter(l=>{const d=typeof l=="string"&&!s.has(l);return d&&!r.isUsingDefaultConfig&&jt("menu-bar-item-unavailable",{menuBarConfig:o,parentMenuConfig:fr(a),componentName:l}),!d})})}(i,n,e),Vb(i,n),function(o,r){const s=r.t,a={File:s({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:s({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:s({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:s({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:s({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:s({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:s({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:s({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:s({string:"Font",id:"MENU_BAR_MENU_FONT"})};ac(o.items,c=>{c.label in a&&(c.label=a[c.label])})}(n,t),n}function Fb(i,t,e,n){let o=!1;return ac(i.items,r=>{for(const{groupId:s,items:a}of r.groups){if(o)return;if(s===e)n==="start"?(a.unshift(t),o=!0):n==="end"&&(a.push(t),o=!0);else{const c=a.findIndex(l=>Hb(l)===e);c!==-1&&(n==="before"?(a.splice(c,0,t),o=!0):n==="after"&&(a.splice(c+1,0,t),o=!0))}}}),o}function Vb(i,t){const e=t.isUsingDefaultConfig;let n=!1;t.items=t.items.filter(o=>!!o.groups.length||(zh(i,o,e),!1)),t.items.length?(ac(t.items,o=>{o.groups=o.groups.filter(r=>!!r.items.length||(n=!0,!1));for(const r of o.groups)r.items=r.items.filter(s=>!(Ub(s)&&!s.groups.length)||(zh(i,s,e),n=!0,!1))}),n&&Vb(i,t)):zh(i,i,e)}function zh(i,t,e){e||jt("menu-bar-menu-empty",{menuBarConfig:i,emptyMenuConfig:t})}function ac(i,t){if(Array.isArray(i))for(const n of i)e(n);function e(n){t(n);for(const o of n.groups)for(const r of o.items)Ub(r)&&e(r)}}function nT(i){return typeof i=="object"&&"menu"in i}function iT(i){return typeof i=="object"&&"group"in i}function oT(i){return i.startsWith("start")?"start":i.startsWith("end")?"end":i.startsWith("after")?"after":"before"}function rT(i){const t=i.match(/^[^:]+:(.+)/);return t?t[1]:null}function Hb(i){return typeof i=="string"?i:i.menuId}function Ub(i){return typeof i=="object"&&"menuId"in i}var $b=j(9108),sT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()($b.A,sT),$b.A.locals;class aT extends Jt{constructor(t){super(t);const e=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",e.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),e.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:e.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(t=1){this.children.length&&(t===1?this.children.first.focus():this.children.last.focus())}}var Wb=j(4),cT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Wb.A,cT),Wb.A.locals;const qb=class extends Jt{constructor(i){super(i);const t=this.bindTemplate;this.buttonView=new Kx(i),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new aT(i),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new Mn,this.focusTracker=new In,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",t.to("class"),t.if("isEnabled","ck-disabled",e=>!e),t.if("parentMenuView","ck-menu-bar__menu_top-level",e=>!e)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),ya.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(ya.openOnButtonClick(this),ya.openOnArrowRightKey(this),ya.closeOnArrowLeftKey(this),ya.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),ya.openAndFocusPanelOnArrowDownKey(this),ya.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(i,t)=>{this.fire("arrowright"),t()}),this.keystrokes.set("arrowleft",(i,t)=>{this.fire("arrowleft"),t()})}_repositionPanelOnOpen(){this.on("change:isOpen",(i,t,e)=>{if(!e)return;const n=qb._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:i,southWest:t,northEast:e,northWest:n,westSouth:o,eastSouth:r,westNorth:s,eastNorth:a}=Xx;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[r,a,o,s]:[i,t,e,n]:this.parentMenuView?[o,s,r,a]:[t,i,n,e]}};let cc=qb;cc._getOptimalPosition=za;class jh extends Sh{constructor(t){super(t),this.role="menu"}}var Gb=j(977),lT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Gb.A,lT),Gb.A.locals;class yo extends De{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class Kb extends Em{constructor(t){super(t),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var Yb=j(497),dT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Yb.A,dT),Yb.A.locals;const Qb=["mouseenter","arrowleft","arrowright","change:isOpen"];class uT extends Jt{constructor(t){super(t),this.menus=[];const e=t.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":e("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(t,e){const n=eT({normalizedConfig:t,locale:this.locale,componentFactory:e}).items.map(o=>this._createMenu({componentFactory:e,menuDefinition:o}));this.children.addMany(n)}render(){super.render(),dl.toggleMenusAndFocusItemsOnHover(this),dl.closeMenusWhenTheBarCloses(this),dl.closeMenuWhenAnotherOnTheSameLevelOpens(this),dl.focusCycleMenusOnArrows(this),dl.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const t of this.children)t.isOpen=!1}registerMenu(t,e=null){e?(t.delegate(...Qb).to(e),t.parentMenuView=e):t.delegate(...Qb).to(this,n=>"menu:"+n),t._attachBehaviors(),this.menus.push(t)}_createMenu({componentFactory:t,menuDefinition:e,parentMenuView:n}){const o=this.locale,r=new cc(o);return this.registerMenu(r,n),r.buttonView.set({label:e.label}),r.once("change:isOpen",()=>{const s=new jh(o);s.ariaLabel=e.label,r.panelView.children.add(s),s.items.addMany(this._createMenuItems({menuDefinition:e,parentMenuView:r,componentFactory:t}))}),r}_createMenuItems({menuDefinition:t,parentMenuView:e,componentFactory:n}){const o=this.locale,r=[];for(const s of t.groups){for(const a of s.items){const c=new Rh(o,e);if(ge(a))c.children.add(this._createMenu({componentFactory:n,menuDefinition:a,parentMenuView:e}));else{const l=this._createMenuItemContentFromFactory({componentName:a,componentFactory:n,parentMenuView:e});if(!l)continue;c.children.add(l)}r.push(c)}s!==t.groups[t.groups.length-1]&&r.push(new Dh(o))}return r}_createMenuItemContentFromFactory({componentName:t,parentMenuView:e,componentFactory:n}){const o=n.create(t);return o instanceof cc||o instanceof yo||o instanceof Kb?(this._registerMenuTree(o,e),o.on("execute",()=>{this.close()}),o):(jt("menu-bar-component-unsupported",{componentName:t,componentView:o}),null)}_registerMenuTree(t,e){if(!(t instanceof cc))return void t.delegate("mouseenter").to(e);this.registerMenu(t,e);const n=t.panelView.children.filter(r=>r instanceof jh)[0];if(!n)return void t.delegate("mouseenter").to(e);const o=n.items.filter(r=>r instanceof rc);for(const r of o)this._registerMenuTree(r.children.get(0),t)}_setupIsOpenUpdater(){let t;this.on("menu:change:isOpen",(e,n,o)=>{clearTimeout(t),o?this.isOpen=!0:t=setTimeout(()=>{this.isOpen=Array.from(this.children).some(r=>r.isOpen)},0)})}}class hT extends vx{constructor(t,e){super(t),this.view=e,this._toolbarConfig=Pm(t.config.get("toolbar")),this._menuBarConfig=function(n){let o;return o="items"in n&&n.items?jb({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):jb({items:fr(tT),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),o}(t.config.get("menuBar")||{}),this._elementReplacer=new oo,this.listenTo(t.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(t){const e=this.editor,n=this.view,o=e.editing.view,r=n.editable,s=o.document.getRoot();r.name=s.rootName,n.render();const a=r.element;this.setEditableElement(r.name,a),n.editable.bind("isFocused").to(this.focusTracker),o.attachDomRoot(a),t&&this._elementReplacer.replace(t,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const t=this.view,e=this.editor.editing.view;this._elementReplacer.restore(),e.detachDomRoot(t.editable.name),t.destroy()}_initToolbar(){const t=this.view;t.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),t.stickyPanel.limiterElement=t.element,t.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:e})=>e||0),t.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(t.toolbar)}_initMenuBar(){const t=this.view;t.menuBarView&&(this._setupMenuBarBehaviors(t.menuBarView.element),t.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const t=this.editor,e=t.editing.view,n=e.document.getRoot(),o=t.sourceElement;let r;const s=t.config.get("placeholder");s&&(r=typeof s=="string"?s:s[this.view.editable.name]),!r&&o&&o.tagName.toLowerCase()==="textarea"&&(r=o.getAttribute("placeholder")),r&&(n.placeholder=r),js({view:e,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(t,e,n){const o=this.view.stickyPanel;if(o.isSticky){const r=new be(o.element).height;e.viewportOffset.top+=r}else{const r=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(o,"change:isSticky",r),setTimeout(()=>{this.stopListening(o,"change:isSticky",r)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const t=this.view.stickyPanel,e=this.editor.plugins.get("Dialog");e.on("show",()=>{const n=e.view;n.on("moveTo",(o,r)=>{if(!t.isSticky||n.wasMoved)return;const s=new be(t.contentPanelElement);r[1]<s.bottom+Ed.defaultOffset&&(r[1]=s.bottom+Ed.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(t){const e=this.editor;this.focusTracker.add(t),e.keystrokes.listenTo(t),e.keystrokes.set("Esc",(n,o)=>{t.contains(this.focusTracker.focusedElement)&&(e.editing.view.focus(),o())}),e.keystrokes.set("Alt+F9",(n,o)=>{t.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),o())})}}var Zb=j(7388),fT={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};zt()(Zb.A,fT),Zb.A.locals;class pT extends Ex{constructor(t,e,n={}){super(t),this.stickyPanel=new Ox(t),this.toolbar=new Th(t,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new uT(t)),this.editable=new Tx(t,e)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class Jb{constructor(t){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof t.crashNumberLimit=="number"?t.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof t.minimumNonErrorTimePeriod=="number"?t.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=e=>{const n="error"in e?e.error:e.reason;n instanceof Error&&this._handleError(n,e)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(t,e){this._listeners[t]||(this._listeners[t]=[]),this._listeners[t].push(e)}off(t,e){this._listeners[t]=this._listeners[t].filter(n=>n!==e)}_fire(t,...e){const n=this._listeners[t]||[];for(const o of n)o.apply(this,[null,...e])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(t,e){if(this._shouldReactToError(t)){this.crashes.push({message:t.message,stack:t.stack,filename:e instanceof ErrorEvent?e.filename:void 0,lineno:e instanceof ErrorEvent?e.lineno:void 0,colno:e instanceof ErrorEvent?e.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:t,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(t){return t.is&&t.is("CKEditorError")&&t.context!==void 0&&t.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(t)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function Fh(i,t=new Set){const e=[i],n=new Set;let o=0;for(;e.length>o;){const r=e[o++];if(!n.has(r)&&gT(r)&&!t.has(r))if(n.add(r),Symbol.iterator in r)try{for(const s of r)e.push(s)}catch{}else for(const s in r)s!=="defaultValue"&&e.push(r[s])}return n}function gT(i){const t=Object.prototype.toString.call(i),e=typeof i;return!(e==="number"||e==="boolean"||e==="string"||e==="symbol"||e==="function"||t==="[object Date]"||t==="[object RegExp]"||t==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function Xb(i,t,e=new Set){if(i===t&&typeof(n=i)=="object"&&n!==null)return!0;var n;const o=Fh(i,e),r=Fh(t,e);for(const s of o)if(r.has(s))return!0;return!1}var mT=Object.defineProperty,bT=Object.defineProperties,kT=Object.getOwnPropertyDescriptors,Id=Object.getOwnPropertySymbols,tk=Object.prototype.hasOwnProperty,ek=Object.prototype.propertyIsEnumerable,nk=(i,t,e)=>t in i?mT(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,Vh=(i,t)=>{for(var e in t||(t={}))tk.call(t,e)&&nk(i,e,t[e]);if(Id)for(var e of Id(t))ek.call(t,e)&&nk(i,e,t[e]);return i};class ik extends Jb{constructor(t,e={}){super(e),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=Td(this._save.bind(this),typeof e.saveInterval=="number"?e.saveInterval:5e3),t&&(this._creator=(n,o)=>t.create(n,o)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(t){this._creator=t}setDestructor(t){this._destructor=t}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(t=>{console.error("An error happened during the editor destroying.",t)}).then(()=>{const t={},e=[],n=this._config.rootsAttributes||{},o={};for(const[c,l]of Object.entries(this._data.roots))l.isLoaded?(t[c]="",o[c]=n[c]||{}):e.push(c);const r=(s=Vh({},this._config),a={extraPlugins:this._config.extraPlugins||[],lazyRoots:e,rootsAttributes:o,_watchdogInitialData:this._data},bT(s,kT(a)));var s,a;return delete r.initialData,r.extraPlugins.push(_T),this._initUsingData?this.create(t,r,r.context):Yt(this._elementOrData)?this.create(this._elementOrData,r,r.context):this.create(this._editables,r,r.context)}).then(()=>{this._fire("restart")})}create(t=this._elementOrData,e=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=t,this._initUsingData=typeof t=="string"||Object.keys(t).length>0&&typeof Object.values(t)[0]=="string",this._config=this._cloneEditorConfiguration(e)||{},this._config.context=n,this._creator(t,this._config))).then(o=>{this._editor=o,o.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=o.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const t=this._editor;return this._editor=null,t.model.document.off("change:data",this._throttledSave),this._destructor(t)})}_save(){const t=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=t}catch(e){console.error(e,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(t){this._excludedProps=t}_getData(){const t=this._editor,e=t.model.document.roots.filter(a=>a.isAttached()&&a.rootName!="$graveyard"),{plugins:n}=t,o=n.has("CommentsRepository")&&n.get("CommentsRepository"),r=n.has("TrackChanges")&&n.get("TrackChanges"),s={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};e.forEach(a=>{s.roots[a.rootName]={content:JSON.stringify(Array.from(a.getChildren())),attributes:JSON.stringify(Array.from(a.getAttributes())),isLoaded:a._isLoaded}});for(const a of t.model.markers)a._affectsData&&(s.markers[a.name]={rangeJSON:a.getRange().toJSON(),usingOperation:a._managedUsingOperations,affectsData:a._affectsData});return o&&(s.commentThreads=JSON.stringify(o.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),r&&(s.suggestions=JSON.stringify(r.getSuggestions({toJSON:!0,skipNotAttached:!0}))),s}_getEditables(){const t={};for(const e of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(e);n&&(t[e]=n)}return t}_isErrorComingFromThisItem(t){return Xb(this._editor,t.context,this._excludedProps)}_cloneEditorConfiguration(t){return ae(t,(e,n)=>Yt(e)||n==="context"?e:void 0)}}class _T{constructor(t){this.editor=t,this._data=t.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",t=>{t.stop(),this.editor.model.enqueueChange({isUndoable:!1},e=>{this._restoreCollaborationData(),this._restoreEditorData(e)}),this.editor.data.fire("ready")},{priority:999})}_createNode(t,e){if("name"in e){const n=t.createElement(e.name,e.attributes);if(e.children)for(const o of e.children)n._appendChild(this._createNode(t,o));return n}return t.createText(e.data,e.attributes)}_restoreEditorData(t){const e=this.editor;Object.entries(this._data.roots).forEach(([n,{content:o,attributes:r}])=>{const s=JSON.parse(o),a=JSON.parse(r),c=e.model.document.getRoot(n);for(const[l,d]of a)t.setAttribute(l,d,c);for(const l of s){const d=this._createNode(t,l);t.insert(d,c,"end")}}),Object.entries(this._data.markers).forEach(([n,o])=>{const{document:r}=e.model,s=o,{rangeJSON:{start:a,end:c}}=s,l=((y,S)=>{var F={};for(var G in y)tk.call(y,G)&&S.indexOf(G)<0&&(F[G]=y[G]);if(y!=null&&Id)for(var G of Id(y))S.indexOf(G)<0&&ek.call(y,G)&&(F[G]=y[G]);return F})(s,["rangeJSON"]),d=r.getRoot(a.root),p=t.createPositionFromPath(d,a.path,a.stickiness),m=t.createPositionFromPath(d,c.path,c.stickiness),w=t.createRange(p,m);t.addMarker(n,Vh({range:w},l))})}_restoreCollaborationData(){const t=JSON.parse(this._data.commentThreads),e=JSON.parse(this._data.suggestions);t.forEach(n=>{const o=this.editor.config.get("collaboration.channelId"),r=this.editor.plugins.get("CommentsRepository");r.hasCommentThread(n.threadId)&&r.getCommentThread(n.threadId).remove(),r.addCommentThread(Vh({channelId:o},n))}),e.forEach(n=>{const o=this.editor.plugins.get("TrackChangesEditing");o.hasSuggestion(n.id)?o.getSuggestion(n.id).attributes=n.attributes:o.addSuggestionData(n)})}}const ul=Symbol("MainQueueId");class wT{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(t){this._onEmptyCallbacks.push(t)}enqueue(t,e){const n=t===ul;this._activeActions++,this._queues.get(t)||this._queues.set(t,Promise.resolve());const o=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(ul),this._queues.get(t)])).then(e),r=o.catch(()=>{});return this._queues.set(t,r),o.finally(()=>{this._activeActions--,this._queues.get(t)===r&&this._activeActions===0&&this._onEmptyCallbacks.forEach(s=>s())})}}function ok(i){return Array.isArray(i)?i:[i]}class Md extends Ah(J1){constructor(t,e={}){if(!Nd(t)&&e.initialData!==void 0)throw new W("editor-create-initial-data",null);super(e),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(s){return Nd(s)?(a=s,a instanceof HTMLTextAreaElement?a.value:a.innerHTML):s;var a}(t)),Nd(t)&&(this.sourceElement=t),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),o=this.config.get("menuBar"),r=new pT(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:o.isVisible});this.ui=new hT(this,r),function(s){if(!nn(s.updateSourceElement))throw new W("attachtoform-missing-elementapi-interface",s);const a=s.sourceElement;if(function(c){return!!c&&c.tagName.toLowerCase()==="textarea"}(a)&&a.form){let c;const l=a.form,d=()=>s.updateSourceElement();nn(l.submit)&&(c=l.submit,l.submit=()=>{d(),c.apply(l)}),l.addEventListener("submit",d),s.on("destroy",()=>{l.removeEventListener("submit",d),c&&(l.submit=c)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(t,e={}){return new Promise(n=>{const o=new this(t,e);n(o.initPlugins().then(()=>o.ui.init(Nd(t)?t:null)).then(()=>o.data.init(o.config.get("initialData"))).then(()=>o.fire("ready")).then(()=>o))})}}function Nd(i){return Yt(i)}Md.Context=Ua,Md.EditorWatchdog=ik,Md.ContextWatchdog=class extends Jb{constructor(i,t={}){super(t),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new wT,this._watchdogConfig=t,this._creator=e=>i.create(e),this._destructor=e=>e.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(ul,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const t=ok(i);return Promise.all(t.map(e=>this._actionQueues.enqueue(e.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(e.id))throw new Error(`Item with the given id is already added: '${e.id}'.`);if(e.type==="editor")return n=new ik(null,this._watchdogConfig),n.setCreator(e.creator),n._setExcludedProperties(this._contextProps),e.destructor&&n.setDestructor(e.destructor),this._watchdogs.set(e.id,n),n.on("error",(o,{error:r,causesRestart:s})=>{this._fire("itemError",{itemId:e.id,error:r}),s&&this._actionQueues.enqueue(e.id,()=>new Promise(a=>{const c=()=>{n.off("restart",c),this._fire("itemRestart",{itemId:e.id}),a()};n.on("restart",c)}))}),n.create(e.sourceElementOrData,e.config,this._context);throw new Error(`Not supported item type: '${e.type}'.`)})))}remove(i){const t=ok(i);return Promise.all(t.map(e=>this._actionQueues.enqueue(e,()=>{const n=this._getWatchdog(e);return this._watchdogs.delete(e),n.destroy()})))}destroy(){return this._actionQueues.enqueue(ul,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ul,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=Fh(this._context),Promise.all(Array.from(this._watchdogs.values()).map(t=>(t._setExcludedProperties(this._contextProps),t.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(t=>t.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const t=this._watchdogs.get(i);if(!t)throw new Error(`Item with the given id was not registered: ${i}.`);return t}_isErrorComingFromThisItem(i){for(const t of this._watchdogs.values())if(t._isErrorComingFromThisItem(i))return!1;return Xb(this._context,i.context)}};class hl extends Us{constructor(t){super(t),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const e=this.document;function n(o){return(r,s)=>{s.preventDefault();const a=s.dropRange?[s.dropRange]:null,c=new Et(e,o);e.fire(c,{dataTransfer:s.dataTransfer,method:r.name,targetRanges:a,target:s.target,domEvent:s.domEvent}),c.stop.called&&s.stopPropagation()}}this.listenTo(e,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(e,"dragover",n("dragging"),{priority:"low"})}onDomEvent(t){const e="clipboardData"in t?t.clipboardData:t.dataTransfer,n=t.type=="drop"||t.type=="paste",o={dataTransfer:new Hp(e,{cacheFiles:n})};t.type!="drop"&&t.type!="dragover"||(o.dropRange=function(r,s){const a=s.target.ownerDocument,c=s.clientX,l=s.clientY;let d;return a.caretRangeFromPoint&&a.caretRangeFromPoint(c,l)?d=a.caretRangeFromPoint(c,l):s.rangeParent&&(d=a.createRange(),d.setStart(s.rangeParent,s.rangeOffset),d.collapse(!0)),d?r.domConverter.domRangeToView(d):null}(this.view,t)),this.fire(t.type,t,o)}}const rk=["figcaption","li"],sk=["ol","ul"];function ak(i){if(i.is("$text")||i.is("$textProxy"))return i.data;if(i.is("element","img")&&i.hasAttribute("alt"))return i.getAttribute("alt");if(i.is("element","br"))return`
`;let t="",e=null;for(const n of i.getChildren())t+=AT(n,e)+ak(n),e=n;return t}function AT(i,t){return t?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||sk.includes(i.name)&&sk.includes(t.name)?`

`:i.is("containerElement")||t.is("containerElement")?rk.includes(i.name)||rk.includes(t.name)?`
`:`
