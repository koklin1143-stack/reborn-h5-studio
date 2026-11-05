(()=>{var xu=Object.create;var Kl=Object.defineProperty;var _u=Object.getOwnPropertyDescriptor;var yu=Object.getOwnPropertyNames;var vu=Object.getPrototypeOf,Mu=Object.prototype.hasOwnProperty;var jl=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var Su=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of yu(e))!Mu.call(i,s)&&s!==t&&Kl(i,s,{get:()=>e[s],enumerable:!(n=_u(e,s))||n.enumerable});return i};var oi=(i,e,t)=>(t=i!=null?xu(vu(i)):{},Su(e||!i||!i.__esModule?Kl(t,"default",{value:i,enumerable:!0}):t,i));var Ql=Uint8Array.fromBase64||(()=>{for(var i=new Uint8Array(128),e=0;e<64;e++)i[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var n=t.length,s=new Uint8Array((n-(t[n-1]=="=")-(t[n-2]=="="))*3/4|0),r=0,a=0;r<n;){var o=i[t.charCodeAt(r++)],l=i[t.charCodeAt(r++)],c=i[t.charCodeAt(r++)],d=i[t.charCodeAt(r++)];s[a++]=o<<2|l>>4,s[a++]=l<<4|c>>2,s[a++]=c<<6|d}return s}})();var qh=jl((Xh,Bl)=>{(function(i,e){let t=e();typeof Bl=="object"?Bl.exports=t:i.TouchTransform=t})(typeof window<"u"?window:Xh,function(){let i=(s,r,a)=>Math.max(r,Math.min(a,s)),e=s=>{let[r,a]=s;return{x:(r.x+a.x)/2,y:(r.y+a.y)/2,distance:Math.hypot(a.x-r.x,a.y-r.y),angle:Math.atan2(a.y-r.y,a.x-r.x)}},t=(s,r,a)=>({...s,scale:Math.round(i(s.scale*a.distance/Math.max(1,r.distance),40,160)),rotation:Math.round((s.rotation+Math.atan2(Math.sin(a.angle-r.angle),Math.cos(a.angle-r.angle))*180/Math.PI+540)%360-180)});function n(s,{read:r,preview:a,commit:o,drag:l,transform:c=t}){let d=new Map,m,f,h,p,v=()=>{h={...f},p=d.size===1?[...d.values()][0]:e([...d.values()])};s.addEventListener("pointerdown",u=>{d.size>=2||(u.stopPropagation(),u.preventDefault(),d.size||(m={...r()},f={...m}),d.set(u.pointerId,{x:u.clientX,y:u.clientY}),s.setPointerCapture(u.pointerId),v())}),s.addEventListener("pointermove",u=>{d.has(u.pointerId)&&(u.stopPropagation(),d.set(u.pointerId,{x:u.clientX,y:u.clientY}),f=d.size===2?c(h,p,e([...d.values()])):l(h,p,{x:u.clientX,y:u.clientY}),a(f))}),s.addEventListener("pointerup",u=>{d.has(u.pointerId)&&(u.stopPropagation(),d.delete(u.pointerId),d.size?v():JSON.stringify(f)!==JSON.stringify(m)&&o(f))});let x=u=>{d.size&&(u.stopPropagation(),d.clear(),a(m))};s.addEventListener("pointercancel",x),s.addEventListener("lostpointercapture",u=>{d.has(u.pointerId)&&x(u)})}return{pair:e,pinch:t,bind:n,clamp:i}})});var Si=jl((Zy,to)=>{(function(i,e){let t=e();typeof to=="object"&&to.exports?to.exports=t:i.Vessels=t})(globalThis,()=>{let i={cup:{profile:[[.001,-1],[.83,-1],[.9,-.995],[.94,-.98],[.96,-.95],[.97,-.9],[1,.93],[1,.98],[.93,.98],[.91,.93],[.88,-.78],[.865,-.815],[.82,-.84],[.001,-.84]],name:"\u642A\u74F7\u676F",short:"\u676F",zone:"\u676F\u8EAB\u6B63\u9762",camera:{yaw:.22,pitch:.46,distance:4.8},rim:"#163d51"},plate:{name:"\u642A\u74F7\u76D8",short:"\u76D8",zone:"\u76D8\u9762\u5185\u4FA7",camera:{yaw:0,pitch:1.02,distance:5.5},rim:"#244f65",rimRadius:1.48,rimY:.2,rimTube:.028,foot:.54,floor:-.25,roughness:.22,printRadius:1.08,inner:[[0,-.1],[.82,-.1],[1.1,-.05],[1.33,.14],[1.48,.2]],profile:[[.001,-.18],[.48,-.18],[.52,-.23],[.6,-.23],[.65,-.18],[.9,-.16],[1.14,-.07],[1.36,.11],[1.48,.16],[1.5,.18],[1.48,.2],[1.33,.14],[1.1,-.05],[.82,-.1],[.001,-.1]]},bowl:{name:"\u642A\u74F7\u7897",short:"\u7897",zone:"\u7897\u5185\u5E95\u4E0E\u5185\u58C1",camera:{yaw:0,pitch:1.1,distance:4.9},rim:"#234c5d",rimRadius:1.16,rimY:.65,rimTube:.036,foot:.4,floor:-.66,roughness:.27,printRadius:.84,inner:[[0,-.525],[.33,-.525],[.49,-.485],[.68,-.333],[.9,-.045],[1.095,.37],[1.145,.625]],profile:[[.001,-.58],[.34,-.58],[.37,-.64],[.43,-.64],[.46,-.55],[.61,-.45],[.78,-.27],[.955,.02],[1.135,.43],[1.19,.63],[1.16,.65],[1.145,.625],[1.095,.37],[.9,-.045],[.68,-.333],[.49,-.485],[.33,-.525],[.001,-.525]]},basin:{name:"\u642A\u74F7\u76C6",short:"\u76C6",zone:"\u76C6\u5185\u5E95",camera:{yaw:0,pitch:.88,distance:6},rim:"#183d52",rimRadius:1.66,rimY:.44,rimTube:.055,foot:1.02,floor:-.53,roughness:.29,printRadius:1.05,inner:[[0,-.39],[.94,-.39],[1.02,-.36],[1.14,-.27],[1.43,.23],[1.48,.35],[1.66,.44]],profile:[[.001,-.48],[.94,-.48],[1.02,-.51],[1.1,-.47],[1.2,-.32],[1.5,.2],[1.55,.32],[1.68,.39],[1.66,.44],[1.48,.35],[1.43,.23],[1.14,-.27],[1.02,-.36],[.94,-.39],[.001,-.39]]}},e={enamel:"\u642A\u74F7\u5668\u76BF",textile:"\u5BB6\u5C45\u5E03\u827A",bags:"\u5305\u888B"};for(let S of Object.values(i))S.family="enamel";Object.assign(i,{cushion:{name:"\u62B1\u6795",short:"\u62B1\u6795",family:"textile",size:[2.25,2.25,.96],camera:{yaw:.5,pitch:.16,distance:5.4}},pillow:{name:"\u6795\u5934",short:"\u6795\u5934",family:"textile",size:[3,1.9,.84],camera:{yaw:.4,pitch:.2,distance:5.7}},duvet:{name:"\u88AB\u5957",short:"\u88AB\u5957",family:"textile",size:[2.7,3.25,.18],camera:{yaw:.26,pitch:.3,distance:6.3}},backpack:{name:"\u4E66\u5305",short:"\u4E66\u5305",family:"bags",size:[1.85,2.5,.88],camera:{yaw:.48,pitch:.18,distance:5.8}},tote:{name:"\u5E06\u5E03\u888B",short:"\u5E06\u5E03\u888B",family:"bags",size:[2.15,2.25,.6],camera:{yaw:.32,pitch:.22,distance:6.2}}});let t=S=>!!i[S]&&i[S].family!=="enamel",n=S=>t(S)?"\u5E03\u6599\u989C\u8272":"\u91C9\u8272",s=S=>({color:"white",finish:t(S)?"matte":"gloss"}),r=S=>JSON.parse(JSON.stringify(S)),a=S=>i[S]||i.cup,o={cup:{body:{label:"\u676F\u8EAB\u6B63\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986},outerFill:{label:"\u676F\u8EAB\u6EE1\u94FA",mode:"wrap",rows:[4,7],radius:.986,repeat:7,pitch:.34},back:{label:"\u676F\u8EAB\u80CC\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986,yaw:Math.PI},band:{label:"\u676F\u53E3\u73AF\u5E26",mode:"belt",rows:[0,7],low:.44,high:.88,count:14,pitch:.23}},plate:{center:{label:"\u76D8\u5FC3",mode:"disk",rows:[10,14],high:1.08},innerFill:{label:"\u76D8\u9762\u6EE1\u94FA",mode:"faceFill",rows:[10,14],repeat:3},rim:{label:"\u76D8\u6CBF\u82B1\u8FB9",mode:"ring",rows:[10,14],low:1.05,high:1.46,count:18},back:{label:"\u76D8\u80CC",mode:"back",rows:[0,8],high:1.3,pitch:-.65}},bowl:{center:{label:"\u7897\u5185",mode:"disk",rows:[11,17],high:.84},outer:{label:"\u7897\u8EAB\u5916\u58C1",mode:"wall",rows:[3,10],low:-.45,high:.56,span:1.2,radius:.85,pitch:.18,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[4,9],radius:.86,repeat:8,pitch:.24},innerFill:{label:"\u7897\u5185\u6EE1\u94FA",mode:"faceFill",rows:[11,17],repeat:3},rim:{label:"\u7897\u53E3\u82B1\u8FB9",mode:"ring",rows:[11,17],low:.86,high:1.12,count:14}},basin:{center:{label:"\u76C6\u5185\u5E95",mode:"disk",rows:[8,14],high:1.05},outer:{label:"\u76C6\u8EAB\u5916\u58C1",mode:"wall",rows:[3,8],low:-.35,high:.31,span:.6,radius:1.32,pitch:.13,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[3,7],radius:1.37,repeat:14,pitch:.21},innerFill:{label:"\u76C6\u5185\u6EE1\u94FA",mode:"faceFill",rows:[8,14],repeat:4},rim:{label:"\u76C6\u53E3\u82B1\u8FB9",mode:"ring",rows:[8,14],low:1.38,high:1.64,count:24}}};for(let S of Object.keys(i).filter(t)){o[S]={};let L=S==="backpack"?["front","pocket","back"]:["front","back"];for(let P of L){let C=P==="front"?S==="backpack"?"\u4E3B\u5305\u6B63\u9762":"\u6B63\u9762":P==="pocket"?"\u524D\u888B":"\u80CC\u9762";o[S][P]={label:C,mode:"fabric",face:P,repeat:3,pitch:P==="back"&&["pillow","duvet"].includes(S)?-.32:i[S].camera.pitch,yaw:P==="back"?Math.PI+.15:i[S].camera.yaw},o[S][P+"Fill"]={...o[S][P],label:C+"\u6EE1\u94FA",mode:"fabricFill"}}S==="duvet"&&(o[S].border={label:"\u6B63\u9762\u8FB9\u7F18",mode:"fabricBorder",face:"front",repeat:6})}let l=(S,L)=>o[S]?.[L]||Object.values(o[S]||o.cup)[0],c=S=>["wrap","faceFill","fabricFill","fabricBorder"].includes(S.mode),d=(S,L)=>t(S)?(l(S,L?.zone).face||"front")+"Fill":S==="plate"?"innerFill":"outerFill",m=S=>Number.isFinite(S)?Math.max(5,Math.min(100,S)):100;function f(S,L){let P=m(L.coverWidth)/200,C=m(L.coverHeight)/200,D=S.mode==="wrap",O=(L.x||0)/120,G=-(L.y||0)/120,Z=(V,Y)=>Math.max(Y-.5,Math.min(.5-Y,V));return[D?O:Z(O,P),(D?.5:0)+Z(G,C),P,C]}function h(S,L){let P=S.vesselPlacement,C=l(S.canvas,P.zone),D=c(C),O=t(S.canvas)?C.face:["wall","disk","back"].includes(C.mode)?P.zone:["faceFill","ring"].includes(C.mode)?"center":S.canvas==="cup"?"body":"outer",G=L==="local"?O:L==="custom"&&D?P.zone:d(S.canvas,P),Z=G===P.zone?{vesselPlacement:{...P}}:w(S,G),V=Z.vesselPlacement;return L==="full"&&(V.coverWidth=100,V.coverHeight=100),L==="custom"&&!D&&V.coverWidth==null&&(V.coverWidth=55,V.coverHeight=70),Z}function p(S,L=100){let P=S.mode==="wrap"?24:10,C=Math.max(40,Math.min(160,L));return Math.round(C<100?S.repeat+(100-C)*(P-S.repeat)/60:1+(160-C)*(S.repeat-1)/60)}function v(S,L){let P=S.mode==="wrap"?24:10,C=Math.max(1,Math.min(P,L));return C<S.repeat?160-(C-1)*60/(S.repeat-1):100-(C-S.repeat)*60/(P-S.repeat)}function x(S,L){let P=p(S,L.scale),C=(L.rotation||0)*Math.PI/180,D=P*Math.cos(C),O=P*Math.sin(C);return S.mode==="wrap"?[Math.round(D),Math.round(O)]:[D,O]}function u(S,L,P){if(S.mode!=="wrap")return 1;let C=Math.hypot(...L);return Math.max(1,Math.round(C*P/(2*Math.PI*S.radius)))/C}let T={white:"#f5f1e6",cream:"#e9ddc6",blue:"#c9dcdf"},R=S=>/^#[0-9a-f]{6}$/i.test(S)?S.toLowerCase():Object.hasOwn(T,S)?T[S]:T.white;function _(S,L){let P=l(S,L?.zone),C=a(S).camera;return{...C,pitch:P.pitch??C.pitch,yaw:(P.yaw??C.yaw)+(P.around?(L?.x||0)*Math.PI/60:0)}}function w(S,L){if(!o[S.canvas]?.[L])throw Error("\u8BE5\u5668\u578B\u6CA1\u6709\u8FD9\u4E2A\u5370\u82B1\u4F4D\u7F6E");let{zones:P={},faces:C={},...D}=S.vesselPlacement,O={...z(S.canvas),...P[L],zone:L},G=l(S.canvas,D.zone).face,Z=l(S.canvas,L).face,V={...C,[G]:D.zone};if(S.canvas==="backpack"){let Y=["front","pocket"].includes(Z)?Z:G;["front","pocket"].includes(Y)&&delete V[Y==="front"?"pocket":"front"]}return{vesselPlacement:{...O,zones:{...P,[D.zone]:D},...t(S.canvas)?{faces:V}:{}},cupCamera:_(S.canvas,O)}}function A(S,L){let P={};for(let[C,D]of Object.entries(L.faces||{}))L.zones?.[D]&&l(S,D).face===C&&(P[C]=L.zones[D]);return P[l(S,L.zone).face]=L,S==="backpack"&&P.front&&P.pocket&&delete P[l(S,L.zone).face==="pocket"?"front":"pocket"],P}let z=S=>({zone:t(S)?"front":S==="cup"?"body":S==="basin"?"outer":"center",x:0,y:0,scale:100,rotation:0});function g(S){S.vesselStates={...S.vesselStates||{},[S.canvas]:{placement:r(S.vesselPlacement||z(S.canvas)),camera:r(S.cupCamera||a(S.canvas).camera),material:r(S.cupMaterial||s(S.canvas))}}}function b(S,L){if(!i[L])throw Error("\u5668\u578B\u5C1A\u672A\u63A5\u5165");let P=r(S.vesselStates||{});P[S.canvas]={placement:r(S.vesselPlacement||z(S.canvas)),camera:r(S.cupCamera||a(S.canvas).camera),material:r(S.cupMaterial||s(S.canvas))};let C=P[L]||{placement:z(L),camera:_(L,z(L)),material:s(L)};return{canvas:L,vesselStates:P,vesselPlacement:r(C.placement),cupCamera:r(C.camera),cupMaterial:r(C.material)}}function E(S,L){let P=a(S).inner;for(let C=1;C<P.length;C++)if(L<=P[C][0]){let[D,O]=P[C-1],[G,Z]=P[C];return O+(Z-O)*(L-D)/(G-D)}return P.at(-1)[1]}return{data:i,get:a,families:e,textile:t,materialLabel:n,material:s,facePlacements:A,regions:o,region:l,isFill:c,primaryFill:d,coveragePercent:m,fillWindow:f,coverPatch:h,fillCount:p,fillScale:v,fillBasis:x,fillAspect:u,regionCamera:_,zonePatch:w,glazeHex:R,placement:z,remember:g,switchPatch:b,height:E}})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Cc=0,Wo=1,Rc=2;var gi=1,zc=2,es=3,Dt=0,kt=1,Xt=2,Tn=0,ts=1,Xo=2,qo=3,Yo=4,Ic=5;var xi=100,Pc=101,Lc=102,Dc=103,Nc=104,Uc=200,Fc=201,Oc=202,Bc=203,Zo=204,Jo=205,kc=206,Vc=207,Gc=208,Hc=209,Wc=210,Xc=211,qc=212,Yc=213,Zc=214,br=0,wr=1,Tr=2,Vi=3,Ar=4,Er=5,Cr=6,Rr=7,$o=0,Jc=1,$c=2,pn=0,Ko=1,jo=2,Qo=3,el=4,tl=5,nl=6,Gs=7;var il=300,ni=301,_i=302,ns=303,aa=304,Hs=306,Mn=1e3,nn=1001,zr=1002,wt=1003,Kc=1004;var Ws=1005;var nt=1006,oa=1007;var Qt=1008;var qt=1009,sl=1010,rl=1011,is=1012,la=1013,mn=1014,Yt=1015,Vt=1016,ca=1017,ha=1018,ss=1020,al=35902,ol=35899,ll=1021,cl=1022,Zt=1023,Sn=1026,ii=1027,hl=1028,ua=1029,si=1030,da=1031;var fa=1033,Xs=33776,qs=33777,Ys=33778,Zs=33779,pa=35840,ma=35841,ga=35842,xa=35843,_a=36196,ya=37492,va=37496,Ma=37488,Sa=37489,Js=37490,ba=37491,wa=37808,Ta=37809,Aa=37810,Ea=37811,Ca=37812,Ra=37813,za=37814,Ia=37815,Pa=37816,La=37817,Da=37818,Na=37819,Ua=37820,Fa=37821,Oa=36492,Ba=36494,ka=36495,Va=36283,Ga=36284,$s=36285,Ha=36286;var Ms=2300,Ir=2301,Mr=2302,Do=2303,No=2400,Uo=2401,Fo=2402;var jc=3200;var Wa=0,Qc=1,kn="",zt="srgb",Un="srgb-linear",Ss="linear",Qe="srgb";var Sr=7680;var eh=519,th=512,nh=513,ih=514,Xa=515,sh=516,rh=517,qa=518,ah=519,oh=35044;var ul="300 es",dn=2e3,Gi=2001;function bu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function wu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){let i=bs("canvas");return i.style.display="block",i}var ec={},Hi=null;function dl(...i){let e="THREE."+i.shift();Hi?Hi("log",e,...i):console.log(e,...i)}function ch(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Re(...i){i=ch(i);let e="THREE."+i.shift();if(Hi)Hi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=ch(i);let e="THREE."+i.shift();if(Hi)Hi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function di(...i){let e=i.join(" ");e in ec||(ec[e]=!0,Re(...i))}function hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var uh={[br]:wr,[Tr]:Cr,[Ar]:Rr,[Vi]:Er,[wr]:br,[Cr]:Tr,[Rr]:Ar,[Er]:Vi},bn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=1234567,xs=Math.PI/180,Wi=180/Math.PI;function rs(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function Oe(i,e,t){return Math.max(e,Math.min(t,i))}function fl(i,e){return(i%e+e)%e}function Tu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Au(i,e,t){return i!==e?(t-i)/(e-i):0}function _s(i,e,t){return(1-t)*i+t*e}function Eu(i,e,t,n){return _s(i,e,1-Math.exp(-t*n))}function Cu(i,e=1){return e-Math.abs(fl(i,e*2)-e)}function Ru(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function zu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Iu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Pu(i,e){return i+Math.random()*(e-i)}function Lu(i){return i*(.5-Math.random())}function Du(i){i!==void 0&&(tc=i);let e=tc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Nu(i){return i*xs}function Uu(i){return i*Wi}function Fu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Ou(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function ku(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),m=r((e-n)/2),f=a((e-n)/2),h=r((n-e)/2),p=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*m,l*f,o*c);break;case"YZY":i.set(l*f,o*d,l*m,o*c);break;case"ZXZ":i.set(l*m,l*f,o*d,o*c);break;case"XZX":i.set(o*d,l*p,l*h,o*c);break;case"YXY":i.set(l*h,o*d,l*p,o*c);break;case"ZYZ":i.set(l*p,l*h,o*d,o*c);break;default:Re("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Bi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ft(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Ya={DEG2RAD:xs,RAD2DEG:Wi,generateUUID:rs,clamp:Oe,euclideanModulo:fl,mapLinear:Tu,inverseLerp:Au,lerp:_s,damp:Eu,pingpong:Cu,smoothstep:Ru,smootherstep:zu,randInt:Iu,randFloat:Pu,randFloatSpread:Lu,seededRandom:Du,degToRad:Nu,radToDeg:Uu,isPowerOfTwo:Fu,ceilPowerOfTwo:Ou,floorPowerOfTwo:Bu,setQuaternionFromProperEuler:ku,normalize:Ft,denormalize:Bi},yl=class yl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};yl.prototype.isVector2=!0;var me=yl,wn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],m=n[s+3],f=r[a+0],h=r[a+1],p=r[a+2],v=r[a+3];if(m!==v||l!==f||c!==h||d!==p){let x=l*f+c*h+d*p+m*v;x<0&&(f=-f,h=-h,p=-p,v=-v,x=-x);let u=1-o;if(x<.9995){let T=Math.acos(x),R=Math.sin(T);u=Math.sin(u*T)/R,o=Math.sin(o*T)/R,l=l*u+f*o,c=c*u+h*o,d=d*u+p*o,m=m*u+v*o}else{l=l*u+f*o,c=c*u+h*o,d=d*u+p*o,m=m*u+v*o;let T=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=T,c*=T,d*=T,m*=T}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],m=r[a],f=r[a+1],h=r[a+2],p=r[a+3];return e[t]=o*p+d*m+l*h-c*f,e[t+1]=l*p+d*f+c*m-o*h,e[t+2]=c*p+d*h+o*f-l*m,e[t+3]=d*p-o*m-l*f-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),m=o(r/2),f=l(n/2),h=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=f*d*m+c*h*p,this._y=c*h*m-f*d*p,this._z=c*d*p+f*h*m,this._w=c*d*m-f*h*p;break;case"YXZ":this._x=f*d*m+c*h*p,this._y=c*h*m-f*d*p,this._z=c*d*p-f*h*m,this._w=c*d*m+f*h*p;break;case"ZXY":this._x=f*d*m-c*h*p,this._y=c*h*m+f*d*p,this._z=c*d*p+f*h*m,this._w=c*d*m-f*h*p;break;case"ZYX":this._x=f*d*m-c*h*p,this._y=c*h*m+f*d*p,this._z=c*d*p-f*h*m,this._w=c*d*m+f*h*p;break;case"YZX":this._x=f*d*m+c*h*p,this._y=c*h*m+f*d*p,this._z=c*d*p-f*h*m,this._w=c*d*m-f*h*p;break;case"XZY":this._x=f*d*m-c*h*p,this._y=c*h*m-f*d*p,this._z=c*d*p+f*h*m,this._w=c*d*m+f*h*p;break;default:Re("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],m=t[10],f=n+o+m;if(f>0){let h=.5/Math.sqrt(f+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>m){let h=2*Math.sqrt(1+n-o-m);this._w=(d-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>m){let h=2*Math.sqrt(1+o-n-m);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+m-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Oe(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},vl=class vl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*d,this.y=n+l*d+o*c-r*m,this.z=s+l*m+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return co.copy(this).projectOnVector(e),this.sub(co)}reflect(e){return this.sub(co.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Oe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};vl.prototype.isVector3=!0;var N=vl,co=new N,nc=new wn,Ml=class Ml{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],m=n[7],f=n[2],h=n[5],p=n[8],v=s[0],x=s[3],u=s[6],T=s[1],R=s[4],_=s[7],w=s[2],A=s[5],z=s[8];return r[0]=a*v+o*T+l*w,r[3]=a*x+o*R+l*A,r[6]=a*u+o*_+l*z,r[1]=c*v+d*T+m*w,r[4]=c*x+d*R+m*A,r[7]=c*u+d*_+m*z,r[2]=f*v+h*T+p*w,r[5]=f*x+h*R+p*A,r[8]=f*u+h*_+p*z,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=d*a-o*c,f=o*l-d*r,h=c*r-a*l,p=t*m+n*f+s*h;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/p;return e[0]=m*v,e[1]=(s*c-d*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(d*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=h*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ho.makeScale(e,t)),this}rotate(e){return di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ho.makeRotation(-e)),this}translate(e,t){return di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ho.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ml.prototype.isMatrix3=!0;var Le=Ml,ho=new Le,ic=new Le().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sc=new Le().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vu(){let i={enabled:!0,workingColorSpace:Un,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Qe&&(s.r=Nn(s.r),s.g=Nn(s.g),s.b=Nn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Qe&&(s.r=ki(s.r),s.g=ki(s.g),s.b=ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===kn?Ss:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Un]:{primaries:e,whitePoint:n,transfer:Ss,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:zt},outputColorSpaceConfig:{drawingBufferColorSpace:zt}},[zt]:{primaries:e,whitePoint:n,transfer:Qe,toXYZ:ic,fromXYZ:sc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:zt}}}),i}var Xe=Vu();function Nn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ai,Pr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ai===void 0&&(Ai=bs("canvas")),Ai.width=e.width,Ai.height=e.height;let s=Ai.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ai}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=bs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Nn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Nn(t[n]/255)*255):t[n]=Nn(t[n]);return{data:t,width:e.width,height:e.height}}else return Re("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Gu=0,Xi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Gu++}),this.uuid=rs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(uo(s[a].image)):r.push(uo(s[a]))}else r=uo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function uo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Re("Texture: Unable to serialize Texture."),{})}var Hu=0,fo=new N,Tt=class i extends bn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=nn,s=nn,r=nt,a=Qt,o=Zt,l=qt,c=i.DEFAULT_ANISOTROPY,d=kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hu++}),this.uuid=rs(),this.name="",this.source=new Xi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Le,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(fo).x}get height(){return this.source.getSize(fo).y}get depth(){return this.source.getSize(fo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Re(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==il)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mn:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case zr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mn:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case zr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Tt.DEFAULT_IMAGE=null;Tt.DEFAULT_MAPPING=il;Tt.DEFAULT_ANISOTROPY=1;var Sl=class Sl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],m=l[8],f=l[1],h=l[5],p=l[9],v=l[2],x=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(m-v)<.01&&Math.abs(p-x)<.01){if(Math.abs(d+f)<.1&&Math.abs(m+v)<.1&&Math.abs(p+x)<.1&&Math.abs(c+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(c+1)/2,_=(h+1)/2,w=(u+1)/2,A=(d+f)/4,z=(m+v)/4,g=(p+x)/4;return R>_&&R>w?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=A/n,r=z/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=A/s,r=g/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=z/r,s=g/r),this.set(n,s,r,t),this}let T=Math.sqrt((x-p)*(x-p)+(m-v)*(m-v)+(f-d)*(f-d));return Math.abs(T)<.001&&(T=1),this.x=(x-p)/T,this.y=(m-v)/T,this.z=(f-d)/T,this.w=Math.acos((c+h+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Oe(this.x,e.x,t.x),this.y=Oe(this.y,e.y,t.y),this.z=Oe(this.z,e.z,t.z),this.w=Oe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Oe(this.x,e,t),this.y=Oe(this.y,e,t),this.z=Oe(this.z,e,t),this.w=Oe(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Oe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Sl.prototype.isVector4=!0;var $e=Sl,Lr=class extends bn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Tt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:nt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Xi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Ht=class extends Lr{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ws=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Dr=class extends Tt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=wt,this.minFilter=wt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var ra=class ra{constructor(e,t,n,s,r,a,o,l,c,d,m,f,h,p,v,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,m,f,h,p,v,x)}set(e,t,n,s,r,a,o,l,c,d,m,f,h,p,v,x){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=m,u[14]=f,u[3]=h,u[7]=p,u[11]=v,u[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ra().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ei.setFromMatrixColumn(e,0).length(),r=1/Ei.setFromMatrixColumn(e,1).length(),a=1/Ei.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let f=a*d,h=a*m,p=o*d,v=o*m;t[0]=l*d,t[4]=-l*m,t[8]=c,t[1]=h+p*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=p+h*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*d,h=l*m,p=c*d,v=c*m;t[0]=f+v*o,t[4]=p*o-h,t[8]=a*c,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=h*o-p,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*d,h=l*m,p=c*d,v=c*m;t[0]=f-v*o,t[4]=-a*m,t[8]=p+h*o,t[1]=h+p*o,t[5]=a*d,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*d,h=a*m,p=o*d,v=o*m;t[0]=l*d,t[4]=p*c-h,t[8]=f*c+v,t[1]=l*m,t[5]=v*c+f,t[9]=h*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,h=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=v-f*m,t[8]=p*m+h,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*m+p,t[10]=f-v*m}else if(e.order==="XZY"){let f=a*l,h=a*c,p=o*l,v=o*c;t[0]=l*d,t[4]=-m,t[8]=c*d,t[1]=f*m+v,t[5]=a*d,t[9]=h*m-p,t[2]=p*m-h,t[6]=o*d,t[10]=v*m+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wu,e,Xu)}lookAt(e,t,n){let s=this.elements;return Jt.subVectors(e,t),Jt.lengthSq()===0&&(Jt.z=1),Jt.normalize(),Wn.crossVectors(n,Jt),Wn.lengthSq()===0&&(Math.abs(n.z)===1?Jt.x+=1e-4:Jt.z+=1e-4,Jt.normalize(),Wn.crossVectors(n,Jt)),Wn.normalize(),nr.crossVectors(Jt,Wn),s[0]=Wn.x,s[4]=nr.x,s[8]=Jt.x,s[1]=Wn.y,s[5]=nr.y,s[9]=Jt.y,s[2]=Wn.z,s[6]=nr.z,s[10]=Jt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],m=n[5],f=n[9],h=n[13],p=n[2],v=n[6],x=n[10],u=n[14],T=n[3],R=n[7],_=n[11],w=n[15],A=s[0],z=s[4],g=s[8],b=s[12],E=s[1],S=s[5],L=s[9],P=s[13],C=s[2],D=s[6],O=s[10],G=s[14],Z=s[3],V=s[7],Y=s[11],j=s[15];return r[0]=a*A+o*E+l*C+c*Z,r[4]=a*z+o*S+l*D+c*V,r[8]=a*g+o*L+l*O+c*Y,r[12]=a*b+o*P+l*G+c*j,r[1]=d*A+m*E+f*C+h*Z,r[5]=d*z+m*S+f*D+h*V,r[9]=d*g+m*L+f*O+h*Y,r[13]=d*b+m*P+f*G+h*j,r[2]=p*A+v*E+x*C+u*Z,r[6]=p*z+v*S+x*D+u*V,r[10]=p*g+v*L+x*O+u*Y,r[14]=p*b+v*P+x*G+u*j,r[3]=T*A+R*E+_*C+w*Z,r[7]=T*z+R*S+_*D+w*V,r[11]=T*g+R*L+_*O+w*Y,r[15]=T*b+R*P+_*G+w*j,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],m=e[6],f=e[10],h=e[14],p=e[3],v=e[7],x=e[11],u=e[15],T=l*h-c*f,R=o*h-c*m,_=o*f-l*m,w=a*h-c*d,A=a*f-l*d,z=a*m-o*d;return t*(v*T-x*R+u*_)-n*(p*T-x*w+u*A)+s*(p*R-v*w+u*z)-r*(p*_-v*A+x*z)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=e[9],f=e[10],h=e[11],p=e[12],v=e[13],x=e[14],u=e[15],T=t*o-n*a,R=t*l-s*a,_=t*c-r*a,w=n*l-s*o,A=n*c-r*o,z=s*c-r*l,g=d*v-m*p,b=d*x-f*p,E=d*u-h*p,S=m*x-f*v,L=m*u-h*v,P=f*u-h*x,C=T*P-R*L+_*S+w*E-A*b+z*g;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return e[0]=(o*P-l*L+c*S)*D,e[1]=(s*L-n*P-r*S)*D,e[2]=(v*z-x*A+u*w)*D,e[3]=(f*A-m*z-h*w)*D,e[4]=(l*E-a*P-c*b)*D,e[5]=(t*P-s*E+r*b)*D,e[6]=(x*_-p*z-u*R)*D,e[7]=(d*z-f*_+h*R)*D,e[8]=(a*L-o*E+c*g)*D,e[9]=(n*E-t*L-r*g)*D,e[10]=(p*A-v*_+u*T)*D,e[11]=(m*_-d*A-h*T)*D,e[12]=(o*b-a*S-l*g)*D,e[13]=(t*S-n*b+s*g)*D,e[14]=(v*R-p*w-x*T)*D,e[15]=(d*w-m*R+f*T)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,m=o+o,f=r*c,h=r*d,p=r*m,v=a*d,x=a*m,u=o*m,T=l*c,R=l*d,_=l*m,w=n.x,A=n.y,z=n.z;return s[0]=(1-(v+u))*w,s[1]=(h+_)*w,s[2]=(p-R)*w,s[3]=0,s[4]=(h-_)*A,s[5]=(1-(f+u))*A,s[6]=(x+T)*A,s[7]=0,s[8]=(p+R)*z,s[9]=(x-T)*z,s[10]=(1-(f+v))*z,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Ei.set(s[0],s[1],s[2]).length(),o=Ei.set(s[4],s[5],s[6]).length(),l=Ei.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ln.copy(this);let c=1/a,d=1/o,m=1/l;return ln.elements[0]*=c,ln.elements[1]*=c,ln.elements[2]*=c,ln.elements[4]*=d,ln.elements[5]*=d,ln.elements[6]*=d,ln.elements[8]*=m,ln.elements[9]*=m,ln.elements[10]*=m,t.setFromRotationMatrix(ln),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,d=2*r/(t-e),m=2*r/(n-s),f=(t+e)/(t-e),h=(n+s)/(n-s),p,v;if(l)p=r/(a-r),v=a*r/(a-r);else if(o===dn)p=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Gi)p=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn,l=!1){let c=this.elements,d=2/(t-e),m=2/(n-s),f=-(t+e)/(t-e),h=-(n+s)/(n-s),p,v;if(l)p=1/(a-r),v=a/(a-r);else if(o===dn)p=-2/(a-r),v=-(a+r)/(a-r);else if(o===Gi)p=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=p,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};ra.prototype.isMatrix4=!0;var at=ra,Ei=new N,ln=new at,Wu=new N(0,0,0),Xu=new N(1,1,1),Wn=new N,nr=new N,Jt=new N,rc=new at,ac=new wn,Fn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],m=s[2],f=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Oe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Oe(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Oe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Oe(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(f,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Oe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Oe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Re("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ac.setFromEuler(this),this.setFromQuaternion(ac,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Fn.DEFAULT_ORDER="XYZ";var qi=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},qu=0,oc=new N,Ci=new wn,Cn=new at,ir=new N,fs=new N,Yu=new N,Zu=new wn,lc=new N(1,0,0),cc=new N(0,1,0),hc=new N(0,0,1),uc={type:"added"},Ju={type:"removed"},Ri={type:"childadded",child:null},po={type:"childremoved",child:null},Lt=class i extends bn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Fn,n=new wn,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new at},normalMatrix:{value:new Le}}),this.matrix=new at,this.matrixWorld=new at,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new qi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.multiply(Ci),this}rotateOnWorldAxis(e,t){return Ci.setFromAxisAngle(e,t),this.quaternion.premultiply(Ci),this}rotateX(e){return this.rotateOnAxis(lc,e)}rotateY(e){return this.rotateOnAxis(cc,e)}rotateZ(e){return this.rotateOnAxis(hc,e)}translateOnAxis(e,t){return oc.copy(e).applyQuaternion(this.quaternion),this.position.add(oc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lc,e)}translateY(e){return this.translateOnAxis(cc,e)}translateZ(e){return this.translateOnAxis(hc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Cn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ir.copy(e):ir.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),fs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Cn.lookAt(fs,ir,this.up):Cn.lookAt(ir,fs,this.up),this.quaternion.setFromRotationMatrix(Cn),s&&(Cn.extractRotation(s.matrixWorld),Ci.setFromRotationMatrix(Cn),this.quaternion.premultiply(Ci.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(uc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ju),po.child=e,this.dispatchEvent(po),po.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Cn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Cn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Cn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(uc),Ri.child=e,this.dispatchEvent(Ri),Ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,e,Yu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(fs,Zu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),m=a(e.shapes),f=a(e.skeletons),h=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),f.length>0&&(n.skeletons=f),h.length>0&&(n.animations=h),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Lt.DEFAULT_UP=new N(0,1,0);Lt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Lt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ot=class extends Lt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$u={type:"move"},Yi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ot,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ot,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ot,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let x=t.getJointPose(v,n),u=this._getHandJoint(c,v);x!==null&&(u.matrix.fromArray(x.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=x.radius),u.visible=x!==null}let d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],f=d.position.distanceTo(m.position),h=.02,p=.005;c.inputState.pinching&&f>h+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=h-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($u)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ot;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},dh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},sr={h:0,s:0,l:0};function mo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ne=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=fl(e,1),t=Oe(t,0,1),n=Oe(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=mo(a,r,e+1/3),this.g=mo(a,r,e),this.b=mo(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=zt){function n(r){r!==void 0&&parseFloat(r)<1&&Re("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Re("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Re("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=zt){let n=dh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Re("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Nn(e.r),this.g=Nn(e.g),this.b=Nn(e.b),this}copyLinearToSRGB(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=zt){return Xe.workingToColorSpace(Rt.copy(this),e),Math.round(Oe(Rt.r*255,0,255))*65536+Math.round(Oe(Rt.g*255,0,255))*256+Math.round(Oe(Rt.b*255,0,255))}getHexString(e=zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(Rt.copy(this),t);let n=Rt.r,s=Rt.g,r=Rt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(Rt.copy(this),t),e.r=Rt.r,e.g=Rt.g,e.b=Rt.b,e}getStyle(e=zt){Xe.workingToColorSpace(Rt.copy(this),e);let t=Rt.r,n=Rt.g,s=Rt.b;return e!==zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Xn),this.setHSL(Xn.h+e,Xn.s+t,Xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Xn),e.getHSL(sr);let n=_s(Xn.h,sr.h,t),s=_s(Xn.s,sr.s,t),r=_s(Xn.l,sr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Rt=new Ne;Ne.NAMES=dh;var Ts=class extends Lt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Fn,this.environmentIntensity=1,this.environmentRotation=new Fn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},cn=new N,Rn=new N,go=new N,zn=new N,zi=new N,Ii=new N,dc=new N,xo=new N,_o=new N,yo=new N,vo=new $e,Mo=new $e,So=new $e,Jn=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),cn.subVectors(e,t),s.cross(cn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){cn.subVectors(s,t),Rn.subVectors(n,t),go.subVectors(e,t);let a=cn.dot(cn),o=cn.dot(Rn),l=cn.dot(go),c=Rn.dot(Rn),d=Rn.dot(go),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let f=1/m,h=(c*l-o*d)*f,p=(a*d-o*l)*f;return r.set(1-h-p,p,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,zn)===null?!1:zn.x>=0&&zn.y>=0&&zn.x+zn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,zn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,zn.x),l.addScaledVector(a,zn.y),l.addScaledVector(o,zn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return vo.setScalar(0),Mo.setScalar(0),So.setScalar(0),vo.fromBufferAttribute(e,t),Mo.fromBufferAttribute(e,n),So.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(vo,r.x),a.addScaledVector(Mo,r.y),a.addScaledVector(So,r.z),a}static isFrontFacing(e,t,n,s){return cn.subVectors(n,t),Rn.subVectors(e,t),cn.cross(Rn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),cn.cross(Rn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;zi.subVectors(s,n),Ii.subVectors(r,n),xo.subVectors(e,n);let l=zi.dot(xo),c=Ii.dot(xo);if(l<=0&&c<=0)return t.copy(n);_o.subVectors(e,s);let d=zi.dot(_o),m=Ii.dot(_o);if(d>=0&&m<=d)return t.copy(s);let f=l*m-d*c;if(f<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(zi,a);yo.subVectors(e,r);let h=zi.dot(yo),p=Ii.dot(yo);if(p>=0&&h<=p)return t.copy(r);let v=h*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(Ii,o);let x=d*p-h*m;if(x<=0&&m-d>=0&&h-p>=0)return dc.subVectors(r,s),o=(m-d)/(m-d+(h-p)),t.copy(s).addScaledVector(dc,o);let u=1/(x+v+f);return a=v*u,o=f*u,t.copy(n).addScaledVector(zi,a).addScaledVector(Ii,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Wt=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(hn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(hn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,hn):hn.fromBufferAttribute(r,a),hn.applyMatrix4(e.matrixWorld),this.expandByPoint(hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),rr.copy(n.boundingBox)),rr.applyMatrix4(e.matrixWorld),this.union(rr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,hn),hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ps),ar.subVectors(this.max,ps),Pi.subVectors(e.a,ps),Li.subVectors(e.b,ps),Di.subVectors(e.c,ps),qn.subVectors(Li,Pi),Yn.subVectors(Di,Li),li.subVectors(Pi,Di);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-li.z,li.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,li.z,0,-li.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-li.y,li.x,0];return!bo(t,Pi,Li,Di,ar)||(t=[1,0,0,0,1,0,0,0,1],!bo(t,Pi,Li,Di,ar))?!1:(or.crossVectors(qn,Yn),t=[or.x,or.y,or.z],bo(t,Pi,Li,Di,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(In[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),In[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),In[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),In[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),In[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),In[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),In[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),In[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(In),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},In=[new N,new N,new N,new N,new N,new N,new N,new N],hn=new N,rr=new Wt,Pi=new N,Li=new N,Di=new N,qn=new N,Yn=new N,li=new N,ps=new N,ar=new N,or=new N,ci=new N;function bo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ci.fromArray(i,r);let o=s.x*Math.abs(ci.x)+s.y*Math.abs(ci.y)+s.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),d=n.dot(ci);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Dn=Ku();function Ku(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function ju(i){Math.abs(i)>65504&&Re("DataUtils.toHalfFloat(): Value out of range."),i=Oe(i,-65504,65504),Dn.floatView[0]=i;let e=Dn.uint32View[0],t=e>>23&511;return Dn.baseTable[t]+((e&8388607)>>Dn.shiftTable[t])}function Qu(i){let e=i>>10;return Dn.uint32View[0]=Dn.mantissaTable[Dn.offsetTable[e]+(i&1023)]+Dn.exponentTable[e],Dn.floatView[0]}var $n=class{static toHalfFloat(e){return ju(e)}static fromHalfFloat(e){return Qu(e)}},yt=new N,lr=new me,ed=0,Pt=class extends bn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Yt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)lr.fromBufferAttribute(this,t),lr.applyMatrix3(e),this.setXY(t,lr.x,lr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix3(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyMatrix4(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.applyNormalMatrix(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)yt.fromBufferAttribute(this,t),yt.transformDirection(e),this.setXYZ(t,yt.x,yt.y,yt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Bi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ft(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Bi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Bi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Bi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Bi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ft(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ft(t,this.array),n=Ft(n,this.array),s=Ft(s,this.array),r=Ft(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var As=class extends Pt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Es=class extends Pt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Be=class extends Pt{constructor(e,t,n){super(new Float32Array(e),t,n)}},td=new Wt,ms=new N,wo=new N,Zi=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ms.subVectors(e,this.center);let t=ms.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ms,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ms.copy(e.center).add(wo)),this.expandByPoint(ms.copy(e.center).sub(wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nd=0,tn=new at,To=new Lt,Ni=new N,$t=new Wt,gs=new Wt,bt=new N,dt=class i extends bn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bu(e)?Es:As)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Le().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return tn.makeRotationFromQuaternion(e),this.applyMatrix4(tn),this}rotateX(e){return tn.makeRotationX(e),this.applyMatrix4(tn),this}rotateY(e){return tn.makeRotationY(e),this.applyMatrix4(tn),this}rotateZ(e){return tn.makeRotationZ(e),this.applyMatrix4(tn),this}translate(e,t,n){return tn.makeTranslation(e,t,n),this.applyMatrix4(tn),this}scale(e,t,n){return tn.makeScale(e,t,n),this.applyMatrix4(tn),this}lookAt(e){return To.lookAt(e),To.updateMatrix(),this.applyMatrix4(To.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Re("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];$t.setFromBufferAttribute(r),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,$t.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,$t.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint($t.min),this.boundingBox.expandByPoint($t.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if($t.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];gs.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors($t.min,gs.min),$t.expandByPoint(bt),bt.addVectors($t.max,gs.max),$t.expandByPoint(bt)):($t.expandByPoint(gs.min),$t.expandByPoint(gs.max))}$t.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)bt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)bt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),bt.add(Ni)),s=Math.max(s,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Pt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let g=0;g<n.count;g++)o[g]=new N,l[g]=new N;let c=new N,d=new N,m=new N,f=new me,h=new me,p=new me,v=new N,x=new N;function u(g,b,E){c.fromBufferAttribute(n,g),d.fromBufferAttribute(n,b),m.fromBufferAttribute(n,E),f.fromBufferAttribute(r,g),h.fromBufferAttribute(r,b),p.fromBufferAttribute(r,E),d.sub(c),m.sub(c),h.sub(f),p.sub(f);let S=1/(h.x*p.y-p.x*h.y);isFinite(S)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(m,-h.y).multiplyScalar(S),x.copy(m).multiplyScalar(h.x).addScaledVector(d,-p.x).multiplyScalar(S),o[g].add(v),o[b].add(v),o[E].add(v),l[g].add(x),l[b].add(x),l[E].add(x))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let g=0,b=T.length;g<b;++g){let E=T[g],S=E.start,L=E.count;for(let P=S,C=S+L;P<C;P+=3)u(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let R=new N,_=new N,w=new N,A=new N;function z(g){w.fromBufferAttribute(s,g),A.copy(w);let b=o[g];R.copy(b),R.sub(w.multiplyScalar(w.dot(b))).normalize(),_.crossVectors(A,b);let S=_.dot(l[g])<0?-1:1;a.setXYZW(g,R.x,R.y,R.z,S)}for(let g=0,b=T.length;g<b;++g){let E=T[g],S=E.start,L=E.count;for(let P=S,C=S+L;P<C;P+=3)z(e.getX(P+0)),z(e.getX(P+1)),z(e.getX(P+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Pt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,h=n.count;f<h;f++)n.setXYZ(f,0,0,0);let s=new N,r=new N,a=new N,o=new N,l=new N,c=new N,d=new N,m=new N;if(e)for(let f=0,h=e.count;f<h;f+=3){let p=e.getX(f+0),v=e.getX(f+1),x=e.getX(f+2);s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,x),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,x),o.add(d),l.add(d),c.add(d),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(x,c.x,c.y,c.z)}else for(let f=0,h=t.count;f<h;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(f+0,d.x,d.y,d.z),n.setXYZ(f+1,d.x,d.y,d.z),n.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,m=o.normalized,f=new c.constructor(l.length*d),h=0,p=0;for(let v=0,x=l.length;v<x;v++){o.isInterleavedBufferAttribute?h=l[v]*o.data.stride+o.offset:h=l[v]*d;for(let u=0;u<d;u++)f[p++]=c[h++]}return new Pt(f,d,m)}if(this.index===null)return Re("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,m=c.length;d<m;d++){let f=c[d],h=e(f,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let m=0,f=c.length;m<f;m++){let h=c[m];d.push(h.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],m=r[c];for(let f=0,h=m.length;f<h;f++)d.push(m[f].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Ao=new N,id=new N,sd=new Le,un=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ao.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ao),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sd.getNormalMatrix(e),s=this.coplanarPoint(Ao).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rd=0,On=class extends bn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=rs(),this.name="",this.type="Material",this.blending=ts,this.side=Dt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Zo,this.blendDst=Jo,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ne(0,0,0),this.blendAlpha=0,this.depthFunc=Vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=eh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sr,this.stencilZFail=Sr,this.stencilZPass=Sr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Re(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Re(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ne().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new un().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new me().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new me().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Pn=new N,Eo=new N,cr=new N,hr=new N,Cs=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Eo.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),hr.copy(this.origin).sub(Eo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(cr),o=hr.dot(this.direction),l=-hr.dot(cr),c=hr.lengthSq(),d=Math.abs(1-a*a),m,f,h,p;if(d>0)if(m=a*l-o,f=a*o-l,p=r*d,m>=0)if(f>=-p)if(f<=p){let v=1/d;m*=v,f*=v,h=m*(m+a*f+2*o)+f*(a*m+f+2*l)+c}else f=r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f=-r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;else f<=-p?(m=Math.max(0,-(-a*r+o)),f=m>0?-r:Math.min(Math.max(-r,-l),r),h=-m*m+f*(f+2*l)+c):f<=p?(m=0,f=Math.min(Math.max(-r,-l),r),h=f*(f+2*l)+c):(m=Math.max(0,-(a*r+o)),f=m>0?r:Math.min(Math.max(-r,-l),r),h=-m*m+f*(f+2*l)+c);else f=a>0?-r:r,m=Math.max(0,-(a*f+o)),h=-m*m+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Eo).addScaledVector(cr,f),h}intersectSphere(e,t){if(e.radius<0)return null;Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),d>=0?(r=(e.min.y-f.y)*d,a=(e.max.y-f.y)*d):(r=(e.max.y-f.y)*d,a=(e.min.y-f.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-f.z)*m,l=(e.max.z-f.z)*m):(o=(e.max.z-f.z)*m,l=(e.min.z-f.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,m=e.x-a.x,f=e.y-a.y,h=e.z-a.z,p=t.x-a.x,v=t.y-a.y,x=t.z-a.z,u=n.x-a.x,T=n.y-a.y,R=n.z-a.z,_=Math.abs(l),w=Math.abs(c),A=Math.abs(d),z,g,b,E,S,L,P,C,D,O,G,Z;if(_>=w&&_>=A?(b=l,L=m,D=p,Z=u,l>=0?(z=c,g=d,E=f,S=h,P=v,C=x,O=T,G=R):(z=d,g=c,E=h,S=f,P=x,C=v,O=R,G=T)):w>=A?(b=c,L=f,D=v,Z=T,c>=0?(z=d,g=l,E=h,S=m,P=x,C=p,O=R,G=u):(z=l,g=d,E=m,S=h,P=p,C=x,O=u,G=R)):(b=d,L=h,D=x,Z=R,d>=0?(z=l,g=c,E=m,S=f,P=p,C=v,O=u,G=T):(z=c,g=l,E=f,S=m,P=v,C=p,O=T,G=u)),b===0)return null;let V=z/b,Y=g/b,j=1/b,de=E-V*L,xe=S-Y*L,qe=P-V*D,Ge=C-Y*D,Ye=O-V*Z,J=G-Y*Z,te=Ye*Ge-J*qe,ye=de*J-xe*Ye,Pe=qe*xe-Ge*de;if(s){if(te<0||ye<0||Pe<0)return null}else if((te<0||ye<0||Pe<0)&&(te>0||ye>0||Pe>0))return null;let ne=te+ye+Pe;if(ne===0)return null;let Ce=j*(te*L+ye*D+Pe*Z);return(ne>0?Ce<0:Ce>0)?null:this.at(Ce/ne,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},fi=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.combine=$o,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},fc=new at,hi=new Cs,ur=new Zi,pc=new N,dr=new N,fr=new N,pr=new N,Co=new N,mr=new N,mc=new N,gr=new N,Fe=class extends Lt{constructor(e=new dt,t=new fi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){mr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],m=r[l];d!==0&&(Co.fromBufferAttribute(m,e),a?mr.addScaledVector(Co,d):mr.addScaledVector(Co.sub(t),d))}t.add(mr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(ur.containsPoint(hi.origin)===!1&&(hi.intersectSphere(ur,pc)===null||hi.origin.distanceToSquared(pc)>(e.far-e.near)**2))&&(fc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(fc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,f=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let x=f[p],u=a[x.materialIndex],T=Math.max(x.start,h.start),R=Math.min(o.count,Math.min(x.start+x.count,h.start+h.count));for(let _=T,w=R;_<w;_+=3){let A=o.getX(_),z=o.getX(_+1),g=o.getX(_+2);s=xr(this,u,e,n,c,d,m,A,z,g),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),v=Math.min(o.count,h.start+h.count);for(let x=p,u=v;x<u;x+=3){let T=o.getX(x),R=o.getX(x+1),_=o.getX(x+2);s=xr(this,a,e,n,c,d,m,T,R,_),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=f.length;p<v;p++){let x=f[p],u=a[x.materialIndex],T=Math.max(x.start,h.start),R=Math.min(l.count,Math.min(x.start+x.count,h.start+h.count));for(let _=T,w=R;_<w;_+=3){let A=_,z=_+1,g=_+2;s=xr(this,u,e,n,c,d,m,A,z,g),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=x.materialIndex,t.push(s))}}else{let p=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let x=p,u=v;x<u;x+=3){let T=x,R=x+1,_=x+2;s=xr(this,a,e,n,c,d,m,T,R,_),s&&(s.faceIndex=Math.floor(x/3),t.push(s))}}}};function ad(i,e,t,n,s,r,a,o){let l;if(e.side===kt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Dt,o),l===null)return null;gr.copy(o),gr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(gr);return c<t.near||c>t.far?null:{distance:c,point:gr.clone(),object:i}}function xr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,dr),i.getVertexPosition(l,fr),i.getVertexPosition(c,pr);let d=ad(i,e,t,n,dr,fr,pr,mc);if(d){let m=new N;Jn.getBarycoord(mc,dr,fr,pr,m),s&&(d.uv=Jn.getInterpolatedAttribute(s,o,l,c,m,new me)),r&&(d.uv1=Jn.getInterpolatedAttribute(r,o,l,c,m,new me)),a&&(d.normal=Jn.getInterpolatedAttribute(a,o,l,c,m,new N),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new N,materialIndex:0};Jn.getNormal(dr,fr,pr,f.normal),d.face=f,d.barycoord=m}return d}var sn=class extends Tt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=wt,d=wt,m,f){super(null,a,o,l,c,d,s,r,m,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ui=new Zi,od=new me(.5,.5),_r=new N,Ji=class{constructor(e=new un,t=new un,n=new un,s=new un,r=new un,a=new un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],m=r[5],f=r[6],h=r[7],p=r[8],v=r[9],x=r[10],u=r[11],T=r[12],R=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,h-d,u-p,w-T).normalize(),s[1].setComponents(c+a,h+d,u+p,w+T).normalize(),s[2].setComponents(c+o,h+m,u+v,w+R).normalize(),s[3].setComponents(c-o,h-m,u-v,w-R).normalize(),n)s[4].setComponents(l,f,x,_).normalize(),s[5].setComponents(c-l,h-f,u-x,w-_).normalize();else if(s[4].setComponents(c-l,h-f,u-x,w-_).normalize(),t===dn)s[5].setComponents(c+l,h+f,u+x,w+_).normalize();else if(t===Gi)s[5].setComponents(l,f,x,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){ui.center.set(0,0,0);let t=od.distanceTo(e.center);return ui.radius=.7071067811865476+t,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(_r.x=s.normal.x>0?e.max.x:e.min.x,_r.y=s.normal.y>0?e.max.y:e.min.y,_r.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_r)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends Tt{constructor(e=[],t=ni,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},zs=class extends Tt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Kn=class extends Tt{constructor(e,t,n=mn,s,r,a,o=wt,l=wt,c,d=Sn,m=1){if(d!==Sn&&d!==ii)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:m};super(f,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Xi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Nr=class extends Kn{constructor(e,t=mn,n=ni,s,r,a=wt,o=wt,l,c=Sn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Is=class extends Tt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},$i=class i extends dt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],m=[],f=0,h=0;p("z","y","x",-1,-1,n,t,e,a,r,0),p("z","y","x",1,-1,n,t,-e,a,r,1),p("x","z","y",1,1,e,n,t,s,a,2),p("x","z","y",1,-1,e,n,-t,s,a,3),p("x","y","z",1,-1,e,t,n,s,r,4),p("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(m,2));function p(v,x,u,T,R,_,w,A,z,g,b){let E=_/z,S=w/g,L=_/2,P=w/2,C=A/2,D=z+1,O=g+1,G=0,Z=0,V=new N;for(let Y=0;Y<O;Y++){let j=Y*S-P;for(let de=0;de<D;de++){let xe=de*E-L;V[v]=xe*T,V[x]=j*R,V[u]=C,c.push(V.x,V.y,V.z),V[v]=0,V[x]=0,V[u]=A>0?1:-1,d.push(V.x,V.y,V.z),m.push(de/z),m.push(1-Y/g),G+=1}}for(let Y=0;Y<g;Y++)for(let j=0;j<z;j++){let de=f+j+D*Y,xe=f+j+D*(Y+1),qe=f+(j+1)+D*(Y+1),Ge=f+(j+1)+D*Y;l.push(de,xe,Ge),l.push(xe,qe,Ge),Z+=6}o.addGroup(h,Z,b),h+=Z,f+=G}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var rn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Re("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],f=n[s+1]-d,h=(a-d)/f;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new me:new N);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,l=new at;for(let h=0;h<=e;h++){let p=h/e;s[h]=this.getTangentAt(p,new N)}r[0]=new N,a[0]=new N;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),m=Math.abs(s[0].y),f=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Oe(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,p))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Oe(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let p=1;p<=e;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],h*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ps=class extends rn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new me){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),f=l-this.aX,h=c-this.aY;l=f*d-h*m+this.aX,c=f*m+h*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ur=class extends Ps{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function pl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,m){let f=(a-r)/c-(o-r)/(c+d)+(o-a)/d,h=(o-a)/d-(l-a)/(d+m)+(l-o)/m;f*=d,h*=d,s(a,o,f,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var gc=new N,xc=new N,Ro=new pl,zo=new pl,Io=new pl,fn=class extends rn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(xc.subVectors(s[0],s[1]).add(s[0]),c=xc);let m=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(gc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=gc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(m),h),v=Math.pow(m.distanceToSquared(f),h),x=Math.pow(f.distanceToSquared(d),h);v<1e-4&&(v=1),p<1e-4&&(p=v),x<1e-4&&(x=v),Ro.initNonuniformCatmullRom(c.x,m.x,f.x,d.x,p,v,x),zo.initNonuniformCatmullRom(c.y,m.y,f.y,d.y,p,v,x),Io.initNonuniformCatmullRom(c.z,m.z,f.z,d.z,p,v,x)}else this.curveType==="catmullrom"&&(Ro.initCatmullRom(c.x,m.x,f.x,d.x,this.tension),zo.initCatmullRom(c.y,m.y,f.y,d.y,this.tension),Io.initCatmullRom(c.z,m.z,f.z,d.z,this.tension));return n.set(Ro.calc(l),zo.calc(l),Io.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function _c(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ld(i,e){let t=1-i;return t*t*e}function cd(i,e){return 2*(1-i)*i*e}function hd(i,e){return i*i*e}function ys(i,e,t,n){return ld(i,e)+cd(i,t)+hd(i,n)}function ud(i,e){let t=1-i;return t*t*t*e}function dd(i,e){let t=1-i;return 3*t*t*i*e}function fd(i,e){return 3*(1-i)*i*i*e}function pd(i,e){return i*i*i*e}function vs(i,e,t,n,s){return ud(i,e)+dd(i,t)+fd(i,n)+pd(i,s)}var Fr=class extends rn{constructor(e=new me,t=new me,n=new me,s=new me){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,s.x,r.x,a.x,o.x),vs(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Or=class extends rn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(vs(e,s.x,r.x,a.x,o.x),vs(e,s.y,r.y,a.y,o.y),vs(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Br=class extends rn{constructor(e=new me,t=new me){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new me){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new me){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kr=class extends rn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Vr=class extends rn{constructor(e=new me,t=new me,n=new me){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new me){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(e,s.x,r.x,a.x),ys(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ls=class extends rn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ys(e,s.x,r.x,a.x),ys(e,s.y,r.y,a.y),ys(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Gr=class extends rn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new me){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(_c(o,l.x,c.x,d.x,m.x),_c(o,l.y,c.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new me().fromArray(s))}return this}},md=Object.freeze({__proto__:null,ArcCurve:Ur,CatmullRomCurve3:fn,CubicBezierCurve:Fr,CubicBezierCurve3:Or,EllipseCurve:Ps,LineCurve:Br,LineCurve3:kr,QuadraticBezierCurve:Vr,QuadraticBezierCurve3:Ls,SplineCurve:Gr});var pi=class i extends dt{constructor(e=[new me(0,-.5),new me(.5,0),new me(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Oe(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,m=new N,f=new me,h=new N,p=new N,v=new N,x=0,u=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:x=e[T+1].x-e[T].x,u=e[T+1].y-e[T].y,h.x=u*1,h.y=-x,h.z=u*0,v.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:x=e[T+1].x-e[T].x,u=e[T+1].y-e[T].y,h.x=u*1,h.y=-x,h.z=u*0,p.copy(h),h.x+=v.x,h.y+=v.y,h.z+=v.z,h.normalize(),l.push(h.x,h.y,h.z),v.copy(p)}for(let T=0;T<=t;T++){let R=n+T*d*s,_=Math.sin(R),w=Math.cos(R);for(let A=0;A<=e.length-1;A++){m.x=e[A].x*_,m.y=e[A].y,m.z=e[A].x*w,a.push(m.x,m.y,m.z),f.x=T/t,f.y=A/(e.length-1),o.push(f.x,f.y);let z=l[3*A+0]*_,g=l[3*A+1],b=l[3*A+0]*w;c.push(z,g,b)}}for(let T=0;T<t;T++)for(let R=0;R<e.length-1;R++){let _=R+T*e.length,w=_,A=_+e.length,z=_+e.length+1,g=_+1;r.push(w,A,g),r.push(z,g,A)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var jn=class i extends dt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,m=e/o,f=t/l,h=[],p=[],v=[],x=[];for(let u=0;u<d;u++){let T=u*f-a;for(let R=0;R<c;R++){let _=R*m-r;p.push(_,-T,0),v.push(0,0,1),x.push(R/o),x.push(1-u/l)}}for(let u=0;u<l;u++)for(let T=0;T<o;T++){let R=T+c*u,_=T+c*(u+1),w=T+1+c*(u+1),A=T+1+c*u;h.push(R,_,A),h.push(_,w,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var Ds=class i extends dt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],m=new N,f=new N,h=[],p=[],v=[],x=[];for(let u=0;u<=n;u++){let T=[],R=u/n,_=a+R*o,w=e*Math.cos(_),A=Math.sqrt(e*e-w*w),z=0;u===0&&a===0?z=.5/t:u===n&&l===Math.PI&&(z=-.5/t);for(let g=0;g<=t;g++){let b=g/t,E=s+b*r;m.x=-A*Math.cos(E),m.y=w,m.z=A*Math.sin(E),p.push(m.x,m.y,m.z),f.copy(m).normalize(),v.push(f.x,f.y,f.z),x.push(b+z,1-R),T.push(c++)}d.push(T)}for(let u=0;u<n;u++)for(let T=0;T<t;T++){let R=d[u][T+1],_=d[u][T],w=d[u+1][T],A=d[u+1][T+1];(u!==0||a>0)&&h.push(R,_,A),(u!==n-1||l<Math.PI)&&h.push(_,w,A)}this.setIndex(h),this.setAttribute("position",new Be(p,3)),this.setAttribute("normal",new Be(v,3)),this.setAttribute("uv",new Be(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var an=class i extends dt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],m=[],f=new N,h=new N,p=new N;for(let v=0;v<=n;v++){let x=a+v/n*o;for(let u=0;u<=s;u++){let T=u/s*r;h.x=(e+t*Math.cos(x))*Math.cos(T),h.y=(e+t*Math.cos(x))*Math.sin(T),h.z=t*Math.sin(x),c.push(h.x,h.y,h.z),f.x=e*Math.cos(T),f.y=e*Math.sin(T),p.subVectors(h,f).normalize(),d.push(p.x,p.y,p.z),m.push(u/s),m.push(v/n)}}for(let v=1;v<=n;v++)for(let x=1;x<=s;x++){let u=(s+1)*v+x-1,T=(s+1)*(v-1)+x-1,R=(s+1)*(v-1)+x,_=(s+1)*v+x;l.push(u,T,_),l.push(T,R,_)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(d,3)),this.setAttribute("uv",new Be(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Bn=class i extends dt{constructor(e=new Ls(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,l=new N,c=new me,d=new N,m=[],f=[],h=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Be(m,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(h,2));function v(){for(let R=0;R<t;R++)x(R);x(r===!1?t:0),T(),u()}function x(R){d=e.getPointAt(R/t,d);let _=a.normals[R],w=a.binormals[R];for(let A=0;A<=s;A++){let z=A/s*Math.PI*2,g=Math.sin(z),b=-Math.cos(z);l.x=b*_.x+g*w.x,l.y=b*_.y+g*w.y,l.z=b*_.z+g*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,m.push(o.x,o.y,o.z)}}function u(){for(let R=1;R<=t;R++)for(let _=1;_<=s;_++){let w=(s+1)*(R-1)+(_-1),A=(s+1)*R+(_-1),z=(s+1)*R+_,g=(s+1)*(R-1)+_;p.push(w,A,g),p.push(A,z,g)}}function T(){for(let R=0;R<=t;R++)for(let _=0;_<=s;_++)c.x=R/t,c.y=_/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new md[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Ns=class extends On{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ne(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(yc(s))s.isRenderTargetTexture?(Re("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(yc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Nt(i){let e={};for(let t=0;t<i.length;t++){let n=yi(i[t]);for(let s in n)e[s]=n[s]}return e}function yc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ml(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}var fh={clone:yi,merge:Nt},xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,_d=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=_d,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=yi(e.uniforms),this.uniformsGroups=gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ne().setHex(s.value);break;case"v2":this.uniforms[n].value=new me().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Le().fromArray(s.value);break;case"m4":this.uniforms[n].value=new at().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Hr=class extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},mi=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Fn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bt=class extends mi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Oe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Wr=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=jc,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Xr=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Ui(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Po(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Qn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qr=class extends Qn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:No,endingEnd:No}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uo:r=e,o=2*t-n;break;case Fo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uo:a=e,l=2*n-t;break;case Fo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,m=this._offsetNext,f=this._weightPrev,h=this._weightNext,p=(n-t)/(s-t),v=p*p,x=v*p,u=-f*x+2*f*v-f*p,T=(1+f)*x+(-1.5-2*f)*v+(-.5+f)*p+1,R=(-1-h)*x+(1.5+h)*v+.5*p,_=h*x-h*v;for(let w=0;w!==o;++w)r[w]=u*a[d+w]+T*a[c+w]+R*a[l+w]+_*a[m+w];return r}},Yr=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),m=1-d;for(let f=0;f!==o;++f)r[f]=a[c+f]*m+a[l+f]*d;return r}},Zr=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Jr=class extends Qn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,m=this.outTangents;if(!d||!m){let p=(n-t)/(s-t),v=1-p;for(let x=0;x!==o;++x)r[x]=a[c+x]*v+a[l+x]*p;return r}let f=o*2,h=e-1;for(let p=0;p!==o;++p){let v=a[c+p],x=a[l+p],u=h*f+p*2,T=m[u],R=m[u+1],_=e*f+p*2,w=d[_],A=d[_+1],z=vd(n,t,T,w,s);r[p]=ph(z,v,R,A,x)}return r}};function ph(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function yd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function vd(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=ph(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var jt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ui(t,this.TimeBufferType),this.values=Ui(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ui(e.times,Array),values:Ui(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),Po(e.settings)&&(n.settings={inTangents:Ui(e.settings.inTangents,Array),outTangents:Ui(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Yr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new qr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Jr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ms:t=this.InterpolantFactoryMethodDiscrete;break;case Ir:t=this.InterpolantFactoryMethodLinear;break;case Mr:t=this.InterpolantFactoryMethodSmooth;break;case Do:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Re("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ms;case this.InterpolantFactoryMethodLinear:return Ir;case this.InterpolantFactoryMethodSmooth:return Mr;case this.InterpolantFactoryMethodBezier:return Do}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;Po(this.settings)&&(vc(this.settings.inTangents,e),vc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&wu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Mr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,f=m-n,h=m+n;for(let p=0;p!==n;++p){let v=t[m+p];if(v!==t[f+p]||v!==t[h+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,f=a*n;for(let h=0;h!==n;++h)t[f+h]=t[m+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,Po(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function vc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}jt.prototype.ValueTypeName="";jt.prototype.TimeBufferType=Float32Array;jt.prototype.ValueBufferType=Float32Array;jt.prototype.DefaultInterpolation=Ir;var ei=class extends jt{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ms;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var $r=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};$r.prototype.ValueTypeName="color";var Kr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Kr.prototype.ValueTypeName="number";var jr=class extends Qn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)wn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Us=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new jr(this.times,this.values,this.getValueSize(),e)}};Us.prototype.ValueTypeName="quaternion";Us.prototype.InterpolantFactoryMethodSmooth=void 0;var ti=class extends jt{constructor(e,t,n){super(e,t,n)}};ti.prototype.ValueTypeName="string";ti.prototype.ValueBufferType=Array;ti.prototype.DefaultInterpolation=Ms;ti.prototype.InterpolantFactoryMethodLinear=void 0;ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Qr=class extends jt{constructor(e,t,n,s){super(e,t,n,s)}};Qr.prototype.ValueTypeName="vector";var Oo={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Mc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Mc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Mc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ea=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,m){return c.push(d,m),this},this.removeHandler=function(d){let m=c.indexOf(d);return m!==-1&&c.splice(m,2),this},this.getHandler=function(d){for(let m=0,f=c.length;m<f;m+=2){let h=c[m],p=c[m+1];if(h.global&&(h.lastIndex=0),h.test(d))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},mh=new ea,Ki=class{constructor(e){this.manager=e!==void 0?e:mh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Ki.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ln={},Bo=class extends Error{constructor(e,t){super(e),this.response=t}},ta=class extends Ki{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Oo.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Ln[e]!==void 0){Ln[e].push({onLoad:t,onProgress:n,onError:s});return}Ln[e]=[],Ln[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Re("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=Ln[e],m=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=f?parseInt(f):0,p=h!==0,v=0,x=new ReadableStream({start(u){T();function T(){m.read().then(({done:R,value:_})=>{if(R)u.close();else{v+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:h});for(let A=0,z=d.length;A<z;A++){let g=d[A];g.onProgress&&g.onProgress(w)}u.enqueue(_),T()}},R=>{u.error(R)})}}});return new Response(x)}else throw new Bo(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let m=/charset="?([^;"\s]*)"?/i.exec(o),f=m&&m[1]?m[1].toLowerCase():void 0,h=new TextDecoder(f);return c.arrayBuffer().then(p=>h.decode(p))}}}).then(c=>{Oo.add(`file:${e}`,c);let d=Ln[e];delete Ln[e];for(let m=0,f=d.length;m<f;m++){let h=d[m];h.onLoad&&h.onLoad(c)}}).catch(c=>{let d=Ln[e];if(d===void 0)throw this.manager.itemError(e),c;delete Ln[e];for(let m=0,f=d.length;m<f;m++){let h=d[m];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Fs=class extends Ki{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new sn,o=new ta(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(d){s!==void 0?s(d):Ie(d);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new sn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:nn,e.wrapT=t.wrapT!==void 0?t.wrapT:nn,e.magFilter=t.magFilter!==void 0?t.magFilter:nt,e.minFilter=t.minFilter!==void 0?t.minFilter:nt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=Qt),t.mipmapCount===1&&(e.minFilter=nt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}};var Os=class extends Lt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ne(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Bs=class extends Os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ne(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Lo=new at,Sc=new N,bc=new N,na=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.mapType=qt,this.map=null,this.mapPass=null,this.matrix=new at,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ji,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Sc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sc),bc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Lo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Lo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Gi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Lo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},yr=new N,vr=new wn,vn=new N,ks=class extends Lt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new at,this.projectionMatrix=new at,this.projectionMatrixInverse=new at,this.coordinateSystem=dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(yr,vr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,vr,vn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(yr,vr,vn),vn.x===1&&vn.y===1&&vn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(yr,vr,vn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Zn=new N,wc=new me,Tc=new me,It=class extends ks{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Wi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(xs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wi*2*Math.atan(Math.tan(xs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z),Zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zn.x,Zn.y).multiplyScalar(-e/Zn.z)}getViewSize(e,t){return this.getViewBounds(e,wc,Tc),t.subVectors(Tc,wc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(xs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ji=class extends ks{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ko=class extends na{constructor(){super(new ji(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Qi=class extends Os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Lt.DEFAULT_UP),this.updateMatrix(),this.target=new Lt,this.shadow=new ko}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Fi=-90,Oi=1,ia=class extends Lt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new It(Fi,Oi,e,t);s.layers=this.layers,this.add(s);let r=new It(Fi,Oi,e,t);r.layers=this.layers,this.add(r);let a=new It(Fi,Oi,e,t);a.layers=this.layers,this.add(a);let o=new It(Fi,Oi,e,t);o.layers=this.layers,this.add(o);let l=new It(Fi,Oi,e,t);l.layers=this.layers,this.add(l);let c=new It(Fi,Oi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Gi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,m=e.getRenderTarget(),f=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,f,h),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},sa=class extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var gl="\\[\\]\\.:\\/",Md=new RegExp("["+gl+"]","g"),xl="[^"+gl+"]",Sd="[^"+gl.replace("\\.","")+"]",bd=/((?:WC+[\/:])*)/.source.replace("WC",xl),wd=/(WCOD+)?/.source.replace("WCOD",Sd),Td=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xl),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xl),Ed=new RegExp("^"+bd+wd+Td+Ad+"$"),Cd=["material","materials","bones","map"],Vo=class{constructor(e,t,n){let s=n||ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},ut=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Md,"")}static parseTrackName(e){let t=Ed.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Re("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ut.Composite=Vo;ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ut.prototype.GetterByBindingType=[ut.prototype._getValue_direct,ut.prototype._getValue_array,ut.prototype._getValue_arrayElement,ut.prototype._getValue_toArray];ut.prototype.SetterByBindingTypeAndVersioning=[[ut.prototype._setValue_direct,ut.prototype._setValue_direct_setNeedsUpdate,ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_array,ut.prototype._setValue_array_setNeedsUpdate,ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_arrayElement,ut.prototype._setValue_arrayElement_setNeedsUpdate,ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ut.prototype._setValue_fromArray,ut.prototype._setValue_fromArray_setNeedsUpdate,ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var C0=new Float32Array(1);var Ac=new at,Vs=class{constructor(e,t,n=0,s=1/0){this.ray=new Cs(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new qi,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ie("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Ac.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Ac),this}intersectObject(e,t=!0,n=[]){return Go(e,this,n,t),n.sort(Ec),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Go(e[s],this,n,t);return n.sort(Ec),n}};function Ec(i,e){return i.distance-e.distance}function Go(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Go(r[a],e,t,!0)}}var bl=class bl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};bl.prototype.isMatrix2=!0;var Ho=bl;function _l(i,e,t,n){let s=Rd(n);switch(t){case ll:return i*e;case hl:return i*e/s.components*s.byteLength;case ua:return i*e/s.components*s.byteLength;case si:return i*e*2/s.components*s.byteLength;case da:return i*e*2/s.components*s.byteLength;case cl:return i*e*3/s.components*s.byteLength;case Zt:return i*e*4/s.components*s.byteLength;case fa:return i*e*4/s.components*s.byteLength;case Xs:case qs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ys:case Zs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:case xa:return Math.max(i,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(e,8)/2;case _a:case ya:case Ma:case Sa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case va:case Js:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Aa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ea:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case za:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Pa:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case La:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oa:case Ba:case ka:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Va:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*8;case $s:case Ha:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rd(i){switch(i){case qt:case sl:return{byteLength:1,components:1};case is:case rl:case Vt:return{byteLength:2,components:1};case ca:case ha:return{byteLength:2,components:4};case mn:case la:case Yt:return{byteLength:4,components:1};case al:case ol:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Re("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Fh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Id(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,m=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let d=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,d);else{m.sort((h,p)=>h.start-p.start);let f=0;for(let h=1;h<m.length;h++){let p=m[f],v=m[h];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,m[f]=v)}m.length=f+1;for(let h=0,p=m.length;h<p;h++){let v=m[h];i.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ld=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Dd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Bd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Vd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Hd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,qd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$d=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,af=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,of=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,lf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,uf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,mf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,gf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_f=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Tf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Af=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ef=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Cf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,zf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,If=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Nf=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ff=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,kf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Vf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Gf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Hf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Xf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,qf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Zf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Jf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,$f=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,np=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ip=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,sp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ap=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,op=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,cp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,up=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,xp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_p=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,yp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,bp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Tp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ep=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Cp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Up=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Op=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,kp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Vp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Gp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Hp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Wp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Xp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Zp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,em=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,tm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,im=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,sm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,am=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,om=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,lm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,cm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,hm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,um=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:Pd,alphahash_pars_fragment:Ld,alphamap_fragment:Dd,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Fd,aomap_fragment:Od,aomap_pars_fragment:Bd,batching_pars_vertex:kd,batching_vertex:Vd,begin_vertex:Gd,beginnormal_vertex:Hd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:qd,clipping_planes_fragment:Yd,clipping_planes_pars_fragment:Zd,clipping_planes_pars_vertex:Jd,clipping_planes_vertex:$d,color_fragment:Kd,color_pars_fragment:jd,color_pars_vertex:Qd,color_vertex:ef,common:tf,cube_uv_reflection_fragment:nf,defaultnormal_vertex:sf,displacementmap_pars_vertex:rf,displacementmap_vertex:af,emissivemap_fragment:of,emissivemap_pars_fragment:lf,colorspace_fragment:cf,colorspace_pars_fragment:hf,envmap_fragment:uf,envmap_common_pars_fragment:df,envmap_pars_fragment:ff,envmap_pars_vertex:pf,envmap_physical_pars_fragment:Tf,envmap_vertex:mf,fog_vertex:gf,fog_pars_vertex:xf,fog_fragment:_f,fog_pars_fragment:yf,gradientmap_pars_fragment:vf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:bf,lights_pars_begin:wf,lights_toon_fragment:Af,lights_toon_pars_fragment:Ef,lights_phong_fragment:Cf,lights_phong_pars_fragment:Rf,lights_physical_fragment:zf,lights_physical_pars_fragment:If,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:Df,lightprobes_pars_fragment:Nf,logdepthbuf_fragment:Uf,logdepthbuf_pars_fragment:Ff,logdepthbuf_pars_vertex:Of,logdepthbuf_vertex:Bf,map_fragment:kf,map_pars_fragment:Vf,map_particle_fragment:Gf,map_particle_pars_fragment:Hf,metalnessmap_fragment:Wf,metalnessmap_pars_fragment:Xf,morphinstance_vertex:qf,morphcolor_vertex:Yf,morphnormal_vertex:Zf,morphtarget_pars_vertex:Jf,morphtarget_vertex:$f,normal_fragment_begin:Kf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:ep,normal_vertex:tp,normalmap_pars_fragment:np,clearcoat_normal_fragment_begin:ip,clearcoat_normal_fragment_maps:sp,clearcoat_pars_fragment:rp,iridescence_pars_fragment:ap,opaque_fragment:op,packing:lp,premultiplied_alpha_fragment:cp,project_vertex:hp,dithering_fragment:up,dithering_pars_fragment:dp,roughnessmap_fragment:fp,roughnessmap_pars_fragment:pp,shadowmap_pars_fragment:mp,shadowmap_pars_vertex:gp,shadowmap_vertex:xp,shadowmask_pars_fragment:_p,skinbase_vertex:yp,skinning_pars_vertex:vp,skinning_vertex:Mp,skinnormal_vertex:Sp,specularmap_fragment:bp,specularmap_pars_fragment:wp,tonemapping_fragment:Tp,tonemapping_pars_fragment:Ap,transmission_fragment:Ep,transmission_pars_fragment:Cp,uv_pars_fragment:Rp,uv_pars_vertex:zp,uv_vertex:Ip,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Np,backgroundCube_frag:Up,cube_vert:Fp,cube_frag:Op,depth_vert:Bp,depth_frag:kp,distance_vert:Vp,distance_frag:Gp,equirect_vert:Hp,equirect_frag:Wp,linedashed_vert:Xp,linedashed_frag:qp,meshbasic_vert:Yp,meshbasic_frag:Zp,meshlambert_vert:Jp,meshlambert_frag:$p,meshmatcap_vert:Kp,meshmatcap_frag:jp,meshnormal_vert:Qp,meshnormal_frag:em,meshphong_vert:tm,meshphong_frag:nm,meshphysical_vert:im,meshphysical_frag:sm,meshtoon_vert:rm,meshtoon_frag:am,points_vert:om,points_frag:lm,shadow_vert:cm,shadow_frag:hm,sprite_vert:um,sprite_frag:dm},ue={common:{diffuse:{value:new Ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Le}},envmap:{envMap:{value:null},envMapRotation:{value:new Le},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Le}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Le}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Le},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Le},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Le},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Le}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Le}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Le}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new Ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0},uvTransform:{value:new Le}},sprite:{diffuse:{value:new Ne(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Le},alphaMap:{value:null},alphaMapTransform:{value:new Le},alphaTest:{value:0}}},En={basic:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},envMapIntensity:{value:1}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Nt([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},specular:{value:new Ne(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Nt([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Nt([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new Ne(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Nt([ue.points,ue.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Nt([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Nt([ue.common,ue.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Nt([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Nt([ue.sprite,ue.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new Le},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Le}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distance:{uniforms:Nt([ue.common,ue.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distance_vert,fragmentShader:Ve.distance_frag},shadow:{uniforms:Nt([ue.lights,ue.fog,{color:{value:new Ne(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};En.physical={uniforms:Nt([En.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Le},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Le},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Le},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Le},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Le},sheen:{value:0},sheenColor:{value:new Ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Le},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Le},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Le},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Le},attenuationDistance:{value:0},attenuationColor:{value:new Ne(0)},specularColor:{value:new Ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Le},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Le},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Le}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};var Za={r:0,b:0,g:0},fm=new at,Oh=new Le;Oh.set(-1,0,0,0,1,0,0,0,1);function pm(i,e,t,n,s,r){let a=new Ne(0),o=s===!0?0:1,l,c,d=null,m=0,f=null;function h(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let _=T.backgroundBlurriness>0;R=e.get(R,_)}return R}function p(T){let R=!1,_=h(T);_===null?x(a,o):_&&_.isColor&&(x(_,1),R=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(T,R){let _=h(R);_&&(_.isCubeTexture||_.mapping===Hs)?(c===void 0&&(c=new Fe(new $i(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:yi(En.backgroundCube.uniforms),vertexShader:En.backgroundCube.vertexShader,fragmentShader:En.backgroundCube.fragmentShader,side:kt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,A,z){this.matrixWorld.copyPosition(z.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(fm.makeRotationFromEuler(R.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Oh),c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Qe,(d!==_||m!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,m=_.version,f=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Fe(new jn(2,2),new Kt({name:"BackgroundMaterial",uniforms:yi(En.background.uniforms),vertexShader:En.background.vertexShader,fragmentShader:En.background.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==Qe,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||m!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,m=_.version,f=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null))}function x(T,R){T.getRGB(Za,ml(i)),t.buffers.color.setClear(Za.r,Za.g,Za.b,R,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,x(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,x(a,o)},render:p,addToRenderList:v,dispose:u}}function mm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(S,L,P,C,D){let O=!1,G=m(S,C,P,L);r!==G&&(r=G,c(r.object)),O=h(S,C,P,D),O&&p(S,C,P,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(O||a)&&(a=!1,_(S,L,P,C),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return i.createVertexArray()}function c(S){return i.bindVertexArray(S)}function d(S){return i.deleteVertexArray(S)}function m(S,L,P,C){let D=C.wireframe===!0,O=n[L.id];O===void 0&&(O={},n[L.id]=O);let G=S.isInstancedMesh===!0?S.id:0,Z=O[G];Z===void 0&&(Z={},O[G]=Z);let V=Z[P.id];V===void 0&&(V={},Z[P.id]=V);let Y=V[D];return Y===void 0&&(Y=f(l()),V[D]=Y),Y}function f(S){let L=[],P=[],C=[];for(let D=0;D<t;D++)L[D]=0,P[D]=0,C[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:P,attributeDivisors:C,object:S,attributes:{},index:null}}function h(S,L,P,C){let D=r.attributes,O=L.attributes,G=0,Z=P.getAttributes();for(let V in Z)if(Z[V].location>=0){let j=D[V],de=O[V];if(de===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(de=S.instanceColor)),j===void 0||j.attribute!==de||de&&j.data!==de.data)return!0;G++}return r.attributesNum!==G||r.index!==C}function p(S,L,P,C){let D={},O=L.attributes,G=0,Z=P.getAttributes();for(let V in Z)if(Z[V].location>=0){let j=O[V];j===void 0&&(V==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),V==="instanceColor"&&S.instanceColor&&(j=S.instanceColor));let de={};de.attribute=j,j&&j.data&&(de.data=j.data),D[V]=de,G++}r.attributes=D,r.attributesNum=G,r.index=C}function v(){let S=r.newAttributes;for(let L=0,P=S.length;L<P;L++)S[L]=0}function x(S){u(S,0)}function u(S,L){let P=r.newAttributes,C=r.enabledAttributes,D=r.attributeDivisors;P[S]=1,C[S]===0&&(i.enableVertexAttribArray(S),C[S]=1),D[S]!==L&&(i.vertexAttribDivisor(S,L),D[S]=L)}function T(){let S=r.newAttributes,L=r.enabledAttributes;for(let P=0,C=L.length;P<C;P++)L[P]!==S[P]&&(i.disableVertexAttribArray(P),L[P]=0)}function R(S,L,P,C,D,O,G){G===!0?i.vertexAttribIPointer(S,L,P,D,O):i.vertexAttribPointer(S,L,P,C,D,O)}function _(S,L,P,C){v();let D=C.attributes,O=P.getAttributes(),G=L.defaultAttributeValues;for(let Z in O){let V=O[Z];if(V.location>=0){let Y=D[Z];if(Y===void 0&&(Z==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),Z==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor)),Y!==void 0){let j=Y.normalized,de=Y.itemSize,xe=e.get(Y);if(xe===void 0)continue;let qe=xe.buffer,Ge=xe.type,Ye=xe.bytesPerElement,J=Ge===i.INT||Ge===i.UNSIGNED_INT||Y.gpuType===la;if(Y.isInterleavedBufferAttribute){let te=Y.data,ye=te.stride,Pe=Y.offset;if(te.isInstancedInterleavedBuffer){for(let ne=0;ne<V.locationSize;ne++)u(V.location+ne,te.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ne=0;ne<V.locationSize;ne++)x(V.location+ne);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let ne=0;ne<V.locationSize;ne++)R(V.location+ne,de/V.locationSize,Ge,j,ye*Ye,(Pe+de/V.locationSize*ne)*Ye,J)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)u(V.location+te,Y.meshPerAttribute);S.isInstancedMesh!==!0&&C._maxInstanceCount===void 0&&(C._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<V.locationSize;te++)x(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,qe);for(let te=0;te<V.locationSize;te++)R(V.location+te,de/V.locationSize,Ge,j,de*Ye,de/V.locationSize*te*Ye,J)}}else if(G!==void 0){let j=G[Z];if(j!==void 0)switch(j.length){case 2:i.vertexAttrib2fv(V.location,j);break;case 3:i.vertexAttrib3fv(V.location,j);break;case 4:i.vertexAttrib4fv(V.location,j);break;default:i.vertexAttrib1fv(V.location,j)}}}}T()}function w(){b();for(let S in n){let L=n[S];for(let P in L){let C=L[P];for(let D in C){let O=C[D];for(let G in O)d(O[G].object),delete O[G];delete C[D]}}delete n[S]}}function A(S){if(n[S.id]===void 0)return;let L=n[S.id];for(let P in L){let C=L[P];for(let D in C){let O=C[D];for(let G in O)d(O[G].object),delete O[G];delete C[D]}}delete n[S.id]}function z(S){for(let L in n){let P=n[L];for(let C in P){let D=P[C];if(D[S.id]===void 0)continue;let O=D[S.id];for(let G in O)d(O[G].object),delete O[G];delete D[S.id]}}}function g(S){for(let L in n){let P=n[L],C=S.isInstancedMesh===!0?S.id:0,D=P[C];if(D!==void 0){for(let O in D){let G=D[O];for(let Z in G)d(G[Z].object),delete G[Z];delete D[O]}delete P[C],Object.keys(P).length===0&&delete n[L]}}}function b(){E(),a=!0,r!==s&&(r=s,c(r.object))}function E(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:b,resetDefaultState:E,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfObject:g,releaseStatesOfProgram:z,initAttributes:v,enableAttribute:x,disableUnusedAttributes:T}}function gm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let f=0;for(let h=0;h<d;h++)f+=c[h];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function xm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let z=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(z){return!(z!==Zt&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(z){let g=z===Vt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(z!==qt&&z!==Yt&&!g&&n.convert(z)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(z){if(z==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";z="mediump"}return z==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Re("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let m=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Re("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),x=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),A=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:f,maxTextures:h,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:x,maxAttributes:u,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:_,maxSamples:w,samples:A}}function _m(i){let e=this,t=null,n=0,s=!1,r=!1,a=new un,o=new Le,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,f){let h=m.length!==0||f||n!==0||s;return s=f,n=m.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,f){t=d(m,f,0)},this.setState=function(m,f,h){let p=m.clippingPlanes,v=m.clipIntersection,x=m.clipShadows,u=i.get(m);if(!s||p===null||p.length===0||r&&!x)r?d(null):c();else{let T=r?0:n,R=T*4,_=u.clippingState||null;l.value=_,_=d(p,f,R,h);for(let w=0;w!==R;++w)_[w]=t[w];u.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,f,h,p){let v=m!==null?m.length:0,x=null;if(v!==0){if(x=l.value,p!==!0||x===null){let u=h+v*4,T=f.matrixWorldInverse;o.getNormalMatrix(T),(x===null||x.length<u)&&(x=new Float32Array(u));for(let R=0,_=h;R!==v;++R,_+=4)a.copy(m[R]).applyMatrix4(T,o),a.normal.toArray(x,_),x[_+3]=a.constant}l.value=x,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,x}}var os=4,ym=6,vm=20,Mm=256,Ks=new ji,gh=new Ne,wl=null,Tl=0,Al=0,El=!1,Sm=new N,vi=new N,cs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sm}=r;wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=yh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_h(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(wl,Tl,Al),this._renderer.xr.enabled=El,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ni||e.mapping===_i?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wl=this._renderer.getRenderTarget(),Tl=this._renderer.getActiveCubeFace(),Al=this._renderer.getActiveMipmapLevel(),El=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nt,minFilter:nt,generateMipmaps:!1,type:Vt,format:Zt,colorSpace:Un,depthBuffer:!1},s=xh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=bm(r)),this._blurMaterial=Tm(r,e,t),this._ggxMaterial=wm(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new dt,e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,s,r){let l=new It(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,f=m.autoClear,h=m.toneMapping;m.getClearColor(gh),m.toneMapping=pn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new $i,new fi({name:"PMREM.Background",side:kt,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,x=v.material,u=!1,T=e.background;T?T.isColor&&(x.color.copy(T),e.background=null,u=!0):(x.color.copy(gh),u=!0);for(let R=0;R<6;R++){let _=R%3;_===0?(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[R],r.y,r.z)):_===1?(l.up.set(0,0,c[R]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[R],r.z)):(l.up.set(0,c[R],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[R]));let w=this._cubeSize;as(s,_*w,R>2?w:0,w,w),m.setRenderTarget(s),u&&m.render(v,l),m.render(e,l)}m.toneMapping=h,m.autoClear=f,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ni||e.mapping===_i;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=yh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_h());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;as(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-d*d),f=c*1.25,h=m*f,{_lodMax:p}=this,v=this._sizeLods[n],x=3*v*(n>p-os?n-p+os:0),u=4*(this._cubeSize-v);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=p-t,as(r,x,u,3*v,2*v),s.setRenderTarget(r),s.render(o,Ks),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=p-n,as(e,x,u,3*v,2*v),s.setRenderTarget(e),s.render(o,Ks)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-os?s-this._lodMax+os:0),f=4*(this._cubeSize-d);as(t,m,f,3*d,2*d),a.setRenderTarget(t),a.render(l,Ks)}};function bm(i){let e=[],t=[],n=i,s=i-os+1+ym;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,f=6,h=3,p=new Float32Array(h*f*m),v=new Float32Array(h*f*m);for(let u=0;u<m;u++){let T=u%3*2/3-1,R=u>2?0:-1,_=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];p.set(_,h*f*u);for(let w=0;w<f;w++){let A=d[w*2]*2-1,z=d[w*2+1]*2-1;u===0?vi.set(1,z,A):u===1?vi.set(-A,1,-z):u===2?vi.set(-A,z,1):u===3?vi.set(-1,z,-A):u===4?vi.set(-A,-1,z):vi.set(A,z,-1),vi.toArray(v,(u*f+w)*h)}}let x=new dt;x.setAttribute("position",new Pt(p,h)),x.setAttribute("outputDirection",new Pt(v,h)),t.push(new Fe(x,null)),n>os&&n--}return{lodMeshes:t,sizeLods:e}}function xh(i,e,t){let n=new Ht(i,e,t);return n.texture.mapping=Hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function as(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function wm(i,e,t){return new Kt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Mm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Tm(i,e,t){return new Kt({name:"SphericalGaussianBlur",defines:{SAMPLES:vm,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:ja(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function _h(){return new Kt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function yh(){return new Kt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ja(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ja(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var $a=class extends Ht{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Rs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new $i(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:kt,blending:Tn});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===Qt&&(t.minFilter=nt),new ia(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Am(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,h=!1){return f==null?null:h?a(f):r(f)}function r(f){if(f&&f.isTexture){let h=f.mapping;if(h===ns||h===aa)if(e.has(f)){let p=e.get(f).texture;return o(p,f.mapping)}else{let p=f.image;if(p&&p.height>0){let v=new $a(p.height);return v.fromEquirectangularTexture(i,f),e.set(f,v),f.addEventListener("dispose",c),o(v.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let h=f.mapping,p=h===ns||h===aa,v=h===ni||h===_i;if(p||v){let x=t.get(f),u=x!==void 0?x.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return n===null&&(n=new cs(i)),x=p?n.fromEquirectangular(f,x):n.fromCubemap(f,x),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),x.texture;if(x!==void 0)return x.texture;{let T=f.image;return p&&T&&T.height>0||v&&T&&l(T)?(n===null&&(n=new cs(i)),x=p?n.fromEquirectangular(f):n.fromCubemap(f),x.texture.pmremVersion=f.pmremVersion,t.set(f,x),f.addEventListener("dispose",d),x.texture):null}}}return f}function o(f,h){return h===ns?f.mapping=ni:h===aa&&(f.mapping=_i),f}function l(f){let h=0,p=6;for(let v=0;v<p;v++)f[v]!==void 0&&h++;return h===p}function c(f){let h=f.target;h.removeEventListener("dispose",c);let p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function d(f){let h=f.target;h.removeEventListener("dispose",d);let p=t.get(h);p!==void 0&&(t.delete(h),p.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function Em(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&di("WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){let s={},r=new WeakMap;function a(m){let f=m.target;f.index!==null&&e.remove(f.index);for(let p in f.attributes)e.remove(f.attributes[p]);f.removeEventListener("dispose",a),delete s[f.id];let h=r.get(f);h&&(e.remove(h),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(m,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(m){let f=m.attributes;for(let h in f)e.update(f[h],i.ARRAY_BUFFER)}function c(m){let f=[],h=m.index,p=m.attributes.position,v=0;if(p===void 0)return;if(h!==null){let T=h.array;v=h.version;for(let R=0,_=T.length;R<_;R+=3){let w=T[R+0],A=T[R+1],z=T[R+2];f.push(w,A,A,z,z,w)}}else{let T=p.array;v=p.version;for(let R=0,_=T.length/3-1;R<_;R+=3){let w=R+0,A=R+1,z=R+2;f.push(w,A,A,z,z,w)}}let x=new(p.count>=65535?Es:As)(f,1);x.version=v;let u=r.get(m);u&&e.remove(u),r.set(m,x)}function d(m){let f=r.get(m);if(f){let h=m.index;h!==null&&f.version<h.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function Rm(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,f){i.drawElements(n,f,r,m*a),t.update(f,n,1)}function c(m,f,h){h!==0&&(i.drawElementsInstanced(n,f,r,m*a,h),t.update(f,n,h))}function d(m,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,m,0,h);let v=0;for(let x=0;x<h;x++)v+=f[x];t.update(v,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function zm(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Im(i,e,t){let n=new WeakMap,s=new $e;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0,f=n.get(o);if(f===void 0||f.count!==m){let b=function(){z.dispose(),n.delete(o),o.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let h=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,x=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;h===!0&&(R=1),p===!0&&(R=2),v===!0&&(R=3);let _=o.attributes.position.count*R,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let A=new Float32Array(_*w*4*m),z=new ws(A,_,w,m);z.type=Yt,z.needsUpdate=!0;let g=R*4;for(let E=0;E<m;E++){let S=x[E],L=u[E],P=T[E],C=_*w*4*E;for(let D=0;D<S.count;D++){let O=D*g;h===!0&&(s.fromBufferAttribute(S,D),A[C+O+0]=s.x,A[C+O+1]=s.y,A[C+O+2]=s.z,A[C+O+3]=0),p===!0&&(s.fromBufferAttribute(L,D),A[C+O+4]=s.x,A[C+O+5]=s.y,A[C+O+6]=s.z,A[C+O+7]=0),v===!0&&(s.fromBufferAttribute(P,D),A[C+O+8]=s.x,A[C+O+9]=s.y,A[C+O+10]=s.z,A[C+O+11]=P.itemSize===4?s.w:1)}}f={count:m,texture:z,size:new me(_,w)},n.set(o,f),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let v=0;v<c.length;v++)h+=c[v];let p=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Pm(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,m=c.geometry,f=e.get(c,m);if(r.get(f)!==d&&(e.update(f),r.set(f,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return f}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Lm={[Ko]:"LINEAR_TONE_MAPPING",[jo]:"REINHARD_TONE_MAPPING",[Qo]:"CINEON_TONE_MAPPING",[el]:"ACES_FILMIC_TONE_MAPPING",[nl]:"AGX_TONE_MAPPING",[Gs]:"NEUTRAL_TONE_MAPPING",[tl]:"CUSTOM_TONE_MAPPING"};function Dm(i,e,t,n,s,r){let a=new Ht(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new dt;c.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Be([0,2,0,0,2,0],2));let d=new Hr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),m=new Fe(c,d),f=new ji(-1,1,1,-1,0,1),h=null,p=null,v=!1,x,u=null,T=[],R=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let A=0;A<T.length;A++){let z=T[A];z.setSize&&z.setSize(_,w)}},this.setEffects=function(_){T=_,R=T.length>0&&T[0].isRenderPass===!0;let w=a.width,A=a.height;T.length>0&&o===null&&(o=new Ht(w,A,{type:Vt,depthBuffer:!1,stencilBuffer:!1}),l=new Ht(w,A,{type:Vt,depthBuffer:!1,stencilBuffer:!1}));for(let z=0;z<T.length;z++){let g=T[z];g.setSize&&g.setSize(w,A)}},this.begin=function(_,w){if(v||_.toneMapping===pn&&T.length===0)return!1;if(u=w,w!==null){let A=w.width,z=w.height;(a.width!==A||a.height!==z)&&this.setSize(A,z)}return R===!1&&_.setRenderTarget(a),x=_.toneMapping,_.toneMapping=pn,!0},this.hasRenderPass=function(){return R},this.end=function(_,w){_.toneMapping=x,v=!0;let A=a,z=o;for(let g=0;g<T.length;g++){let b=T[g];b.enabled!==!1&&(b.render(_,z,A,w),b.needsSwap!==!1&&(A=z,z=z===o?l:o))}if(h!==_.outputColorSpace||p!==_.toneMapping){h=_.outputColorSpace,p=_.toneMapping,d.defines={},Xe.getTransfer(h)===Qe&&(d.defines.SRGB_TRANSFER="");let g=Lm[p];g&&(d.defines[g]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=A.texture,_.setRenderTarget(u),_.render(m,f),u=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var Bh=new Tt,zl=new Kn(1,1),kh=new ws,Vh=new Dr,Gh=new Rs,vh=[],Mh=[],Sh=new Float32Array(16),bh=new Float32Array(9),wh=new Float32Array(4);function hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Mt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=Mh[e];t===void 0&&(t=new Int32Array(e),Mh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2fv(this.addr,e),Mt(t,e)}}function Fm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vt(t,e))return;i.uniform3fv(this.addr,e),Mt(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4fv(this.addr,e),Mt(t,e)}}function Bm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;wh.set(n),i.uniformMatrix2fv(this.addr,!1,wh),Mt(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;bh.set(n),i.uniformMatrix3fv(this.addr,!1,bh),Mt(t,n)}}function Vm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Mt(t,e)}else{if(vt(t,n))return;Sh.set(n),i.uniformMatrix4fv(this.addr,!1,Sh),Mt(t,n)}}function Gm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Hm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2iv(this.addr,e),Mt(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3iv(this.addr,e),Mt(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4iv(this.addr,e),Mt(t,e)}}function qm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Ym(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vt(t,e))return;i.uniform2uiv(this.addr,e),Mt(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vt(t,e))return;i.uniform3uiv(this.addr,e),Mt(t,e)}}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vt(t,e))return;i.uniform4uiv(this.addr,e),Mt(t,e)}}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(zl.compareFunction=t.isReversedDepthBuffer()?qa:Xa,r=zl):r=Bh,t.setTexture2D(e||r,s)}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Vh,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Gh,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||kh,s)}function eg(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Fm;case 35666:return Om;case 35674:return Bm;case 35675:return km;case 35676:return Vm;case 5124:case 35670:return Gm;case 35667:case 35671:return Hm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return Zm;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return $m;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return jm;case 36289:case 36303:case 36311:case 36292:return Qm}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){let t=hs(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){let t=hs(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){let t=hs(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){let t=hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){let t=hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){let t=hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function cg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function dg(i,e){i.uniform1uiv(this.addr,e)}function fg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=zl:a=Bh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function xg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Vh,r[a])}function _g(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Gh,r[a])}function yg(i,e,t){let n=this.cache,s=e.length,r=Qa(t,s);vt(n,r)||(i.uniform1iv(this.addr,r),Mt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||kh,r[a])}function vg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return _g;case 36289:case 36303:case 36311:case 36292:return yg}}var Il=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}},Pl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=vg(t.type)}},Ll=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Cl=/(\w+)(\])?(\[|\.)?/g;function Th(i,e){i.seq.push(e),i.map[e.id]=e}function Mg(i,e,t){let n=i.name,s=n.length;for(Cl.lastIndex=0;;){let r=Cl.exec(n),a=Cl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(t,c===void 0?new Il(o,i,e):new Pl(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new Ll(o),Th(t,m)),t=m}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Mg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function Ah(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Sg=37297,bg=0;function wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Eh=new Le;function Tg(i){Xe._getMatrix(Eh,Xe.workingColorSpace,i);let e=`mat3( ${Eh.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case Ss:return[e,"LinearTransferOETF"];case Qe:return[e,"sRGBTransferOETF"];default:return Re("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ch(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wg(i.getShaderSource(e),o)}else return r}function Ag(i,e){let t=Tg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Eg={[Ko]:"Linear",[jo]:"Reinhard",[Qo]:"Cineon",[el]:"ACESFilmic",[nl]:"AgX",[Gs]:"Neutral",[tl]:"Custom"};function Cg(i,e){let t=Eg[e];return t===void 0?(Re("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Ja=new N;function Rg(){Xe.getLuminanceCoefficients(Ja);let i=Ja.x.toFixed(4),e=Ja.y.toFixed(4),t=Ja.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function zg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Qs).join(`
`)}function Ig(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Pg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Qs(i){return i!==""}function Rh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Dl(i){return i.replace(Lg,Ng)}var Dg=new Map;function Ng(i,e){let t=Ve[e];if(t===void 0){let n=Dg.get(e);if(n!==void 0)t=Ve[n],Re('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Dl(t)}var Ug=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ih(i){return i.replace(Ug,Fg)}function Fg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Og={[gi]:"SHADOWMAP_TYPE_PCF",[es]:"SHADOWMAP_TYPE_VSM"};function Bg(i){return Og[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var kg={[ni]:"ENVMAP_TYPE_CUBE",[_i]:"ENVMAP_TYPE_CUBE",[Hs]:"ENVMAP_TYPE_CUBE_UV"};function Vg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":kg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Gg={[_i]:"ENVMAP_MODE_REFRACTION"};function Hg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Gg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Wg={[$o]:"ENVMAP_BLENDING_MULTIPLY",[Jc]:"ENVMAP_BLENDING_MIX",[$c]:"ENVMAP_BLENDING_ADD"};function Xg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Wg[i.combine]||"ENVMAP_BLENDING_NONE"}function qg(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Bg(t),c=Vg(t),d=Hg(t),m=Xg(t),f=qg(t),h=zg(t),p=Ig(r),v=s.createProgram(),x,u,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),x.length>0&&(x+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Qs).join(`
`),u.length>0&&(u+=`
`)):(x=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Qs).join(`
`),u=[Ph(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==pn?"#define TONE_MAPPING":"",t.toneMapping!==pn?Ve.tonemapping_pars_fragment:"",t.toneMapping!==pn?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),Rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Qs).join(`
`)),a=Dl(a),a=Rh(a,t),a=zh(a,t),o=Dl(o),o=Rh(o,t),o=zh(o,t),a=Ih(a),o=Ih(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,x=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,u=["#define varying in",t.glslVersion===ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let R=T+x+a,_=T+u+o,w=Ah(s,s.VERTEX_SHADER,R),A=Ah(s,s.FRAGMENT_SHADER,_);s.attachShader(v,w),s.attachShader(v,A),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function z(S){if(i.debug.checkShaderErrors){let L=s.getProgramInfoLog(v)||"",P=s.getShaderInfoLog(w)||"",C=s.getShaderInfoLog(A)||"",D=L.trim(),O=P.trim(),G=C.trim(),Z=!0,V=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(Z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,w,A);else{let Y=Ch(s,w,"vertex"),j=Ch(s,A,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+S.name+`
Material Type: `+S.type+`

Program Info Log: `+D+`
`+Y+`
`+j)}else D!==""?Re("WebGLProgram: Program Info Log:",D):(O===""||G==="")&&(V=!1);V&&(S.diagnostics={runnable:Z,programLog:D,vertexShader:{log:O,prefix:x},fragmentShader:{log:G,prefix:u}})}s.deleteShader(w),s.deleteShader(A),g=new ls(s,v),b=Pg(s,v)}let g;this.getUniforms=function(){return g===void 0&&z(this),g};let b;this.getAttributes=function(){return b===void 0&&z(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(v,Sg)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=w,this.fragmentShader=A,this}var Zg=0,Nl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Ul(e),t.set(e,n)),n}},Ul=class{constructor(e){this.id=Zg++,this.code=e,this.usedTimes=0}};function Jg(i){return i===si||i===Js||i===$s}function $g(i,e,t,n,s,r){let a=new qi,o=new Nl,l=new Set,c=[],d=new Map,m=n.logarithmicDepthBuffer,f=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(g){return l.add(g),g===0?"uv":`uv${g}`}function v(g,b,E,S,L,P){let C=S.fog,D=L.geometry,O=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?S.environment:null,G=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,Z=e.get(g.envMap||O,G),V=Z&&Z.mapping===Hs?Z.image.height:null,Y=h[g.type];g.precision!==null&&(f=n.getMaxPrecision(g.precision),f!==g.precision&&Re("WebGLProgram.getParameters:",g.precision,"not supported, using",f,"instead."));let j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,de=j!==void 0?j.length:0,xe=0;D.morphAttributes.position!==void 0&&(xe=1),D.morphAttributes.normal!==void 0&&(xe=2),D.morphAttributes.color!==void 0&&(xe=3);let qe,Ge,Ye,J;if(Y){let lt=En[Y];qe=lt.vertexShader,Ge=lt.fragmentShader}else{qe=g.vertexShader,Ge=g.fragmentShader;let lt=o.getVertexShaderStage(g),Ke=o.getFragmentShaderStage(g);o.update(g,lt,Ke),Ye=lt.id,J=Ke.id}let te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Pe=L.isInstancedMesh===!0,ne=L.isBatchedMesh===!0,Ce=!!g.map,et=!!g.matcap,De=!!Z,Je=!!g.aoMap,ot=!!g.lightMap,We=!!g.bumpMap&&g.wireframe===!1,ft=!!g.normalMap,St=!!g.displacementMap,Gt=!!g.emissiveMap,pt=!!g.metalnessMap,xt=!!g.roughnessMap,B=g.anisotropy>0,At=g.clearcoat>0,tt=g.dispersion>0,I=g.retroreflectivity>0,y=g.iridescence>0,k=g.sheen>0,X=g.transmission>0,$=B&&!!g.anisotropyMap,se=At&&!!g.clearcoatMap,re=At&&!!g.clearcoatNormalMap,K=At&&!!g.clearcoatRoughnessMap,ee=y&&!!g.iridescenceMap,ae=y&&!!g.iridescenceThicknessMap,Te=k&&!!g.sheenColorMap,he=k&&!!g.sheenRoughnessMap,oe=!!g.specularMap,Ae=!!g.specularColorMap,ze=!!g.specularIntensityMap,Ue=X&&!!g.transmissionMap,F=X&&!!g.thicknessMap,le=!!g.gradientMap,Q=!!g.alphaMap,ce=g.alphaTest>0,ge=!!g.alphaHash,ie=!!g.extensions,Ee=pn;g.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ee=i.toneMapping);let be={shaderID:Y,shaderType:g.type,shaderName:g.name,vertexShader:qe,fragmentShader:Ge,defines:g.defines,customVertexShaderID:Ye,customFragmentShaderID:J,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:f,batching:ne,batchingColor:ne&&L._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&L.instanceColor!==null,instancingMorph:Pe&&L.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Ce,matcap:et,envMap:De,envMapMode:De&&Z.mapping,envMapCubeUVHeight:V,aoMap:Je,lightMap:ot,bumpMap:We,normalMap:ft,displacementMap:St,emissiveMap:Gt,normalMapObjectSpace:ft&&g.normalMapType===Qc,normalMapTangentSpace:ft&&g.normalMapType===Wa,packedNormalMap:ft&&g.normalMapType===Wa&&Jg(g.normalMap.format),metalnessMap:pt,roughnessMap:xt,anisotropy:B,anisotropyMap:$,clearcoat:At,clearcoatMap:se,clearcoatNormalMap:re,clearcoatRoughnessMap:K,dispersion:tt,retroreflection:I,iridescence:y,iridescenceMap:ee,iridescenceThicknessMap:ae,sheen:k,sheenColorMap:Te,sheenRoughnessMap:he,specularMap:oe,specularColorMap:Ae,specularIntensityMap:ze,transmission:X,transmissionMap:Ue,thicknessMap:F,gradientMap:le,opaque:g.transparent===!1&&g.blending===ts&&g.alphaToCoverage===!1,alphaMap:Q,alphaTest:ce,alphaHash:ge,combine:g.combine,mapUv:Ce&&p(g.map.channel),aoMapUv:Je&&p(g.aoMap.channel),lightMapUv:ot&&p(g.lightMap.channel),bumpMapUv:We&&p(g.bumpMap.channel),normalMapUv:ft&&p(g.normalMap.channel),displacementMapUv:St&&p(g.displacementMap.channel),emissiveMapUv:Gt&&p(g.emissiveMap.channel),metalnessMapUv:pt&&p(g.metalnessMap.channel),roughnessMapUv:xt&&p(g.roughnessMap.channel),anisotropyMapUv:$&&p(g.anisotropyMap.channel),clearcoatMapUv:se&&p(g.clearcoatMap.channel),clearcoatNormalMapUv:re&&p(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&p(g.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&p(g.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&p(g.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&p(g.sheenColorMap.channel),sheenRoughnessMapUv:he&&p(g.sheenRoughnessMap.channel),specularMapUv:oe&&p(g.specularMap.channel),specularColorMapUv:Ae&&p(g.specularColorMap.channel),specularIntensityMapUv:ze&&p(g.specularIntensityMap.channel),transmissionMapUv:Ue&&p(g.transmissionMap.channel),thicknessMapUv:F&&p(g.thicknessMap.channel),alphaMapUv:Q&&p(g.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(ft||B),vertexNormals:!!D.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!D.attributes.uv&&(Ce||Q),fog:!!C,useFog:g.fog===!0,fogExp2:!!C&&C.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||D.attributes.normal===void 0&&ft===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:ye,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:xe,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:P.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ee,decodeVideoTexture:Ce&&g.map.isVideoTexture===!0&&Xe.getTransfer(g.map.colorSpace)===Qe,decodeVideoTextureEmissive:Gt&&g.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(g.emissiveMap.colorSpace)===Qe,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===Xt,flipSided:g.side===kt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:ie&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ie&&g.extensions.multiDraw===!0||ne)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return be.vertexUv1s=l.has(1),be.vertexUv2s=l.has(2),be.vertexUv3s=l.has(3),l.clear(),be}function x(g){let b=[];if(g.shaderID?b.push(g.shaderID):(b.push(g.customVertexShaderID),b.push(g.customFragmentShaderID)),g.defines!==void 0)for(let E in g.defines)b.push(E),b.push(g.defines[E]);return g.isRawShaderMaterial===!1&&(u(b,g),T(b,g),b.push(i.outputColorSpace)),b.push(g.customProgramCacheKey),b.join()}function u(g,b){g.push(b.precision),g.push(b.outputColorSpace),g.push(b.envMapMode),g.push(b.envMapCubeUVHeight),g.push(b.mapUv),g.push(b.alphaMapUv),g.push(b.lightMapUv),g.push(b.aoMapUv),g.push(b.bumpMapUv),g.push(b.normalMapUv),g.push(b.displacementMapUv),g.push(b.emissiveMapUv),g.push(b.metalnessMapUv),g.push(b.roughnessMapUv),g.push(b.anisotropyMapUv),g.push(b.clearcoatMapUv),g.push(b.clearcoatNormalMapUv),g.push(b.clearcoatRoughnessMapUv),g.push(b.iridescenceMapUv),g.push(b.iridescenceThicknessMapUv),g.push(b.sheenColorMapUv),g.push(b.sheenRoughnessMapUv),g.push(b.specularMapUv),g.push(b.specularColorMapUv),g.push(b.specularIntensityMapUv),g.push(b.transmissionMapUv),g.push(b.thicknessMapUv),g.push(b.combine),g.push(b.fogExp2),g.push(b.sizeAttenuation),g.push(b.morphTargetsCount),g.push(b.morphAttributeCount),g.push(b.numSunLights),g.push(b.numDirLights),g.push(b.numPointLights),g.push(b.numSpotLights),g.push(b.numSpotLightMaps),g.push(b.numHemiLights),g.push(b.numRectAreaLights),g.push(b.numSunLightShadows),g.push(b.numDirLightShadows),g.push(b.numPointLightShadows),g.push(b.numSpotLightShadows),g.push(b.numSpotLightShadowsWithMaps),g.push(b.numLightProbes),g.push(b.shadowMapType),g.push(b.toneMapping),g.push(b.numClippingPlanes),g.push(b.numClipIntersection),g.push(b.depthPacking)}function T(g,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function R(g){let b=h[g.type],E;if(b){let S=En[b];E=fh.clone(S.uniforms)}else E=g.uniforms;return E}function _(g,b){let E=d.get(b);return E!==void 0?++E.usedTimes:(E=new Yg(i,b,g,s),c.push(E),d.set(b,E)),E}function w(g){if(--g.usedTimes===0){let b=c.indexOf(g);c[b]=c[c.length-1],c.pop(),d.delete(g.cacheKey),g.destroy()}}function A(g){o.remove(g)}function z(){o.dispose()}return{getParameters:v,getProgramCacheKey:x,getUniforms:R,acquireProgram:_,releaseProgram:w,releaseShaderCache:A,programs:c,dispose:z}}function Kg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function jg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Lh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Dh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let h=0;return f.isInstancedMesh&&(h+=2),f.isSkinnedMesh&&(h+=1),h}function o(f,h,p,v,x,u){let T=i[e];return T===void 0?(T={id:f.id,object:f,geometry:h,material:p,materialVariant:a(f),groupOrder:v,renderOrder:f.renderOrder,z:x,group:u},i[e]=T):(T.id=f.id,T.object=f,T.geometry=h,T.material=p,T.materialVariant=a(f),T.groupOrder=v,T.renderOrder=f.renderOrder,T.z=x,T.group=u),e++,T}function l(f,h,p,v,x,u,T){T.reversedDepth===!0&&(x=-x);let R=o(f,h,p,v,x,u);p.transmission>0?n.push(R):p.transparent===!0?s.push(R):t.push(R)}function c(f,h,p,v,x,u){let T=o(f,h,p,v,x,u);p.transmission>0?n.unshift(T):p.transparent===!0?s.unshift(T):t.unshift(T)}function d(f,h){t.length>1&&t.sort(f||jg),n.length>1&&n.sort(h||Lh),s.length>1&&s.sort(h||Lh)}function m(){for(let f=e,h=i.length;f<h;f++){let p=i[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:d}}function Qg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Dh,i.set(n,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function e0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new Ne};break;case"SpotLight":t={position:new N,direction:new N,color:new Ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new Ne,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new Ne,groundColor:new Ne};break;case"RectAreaLight":t={color:new Ne,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function t0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var n0=0;function i0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function s0(i){let e=new e0,t=t0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let s=new N,r=new at,a=new at;function o(c){let d=0,m=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let h=0,p=0,v=0,x=0,u=0,T=0,R=0,_=0,w=0,A=0,z=0,g=0,b=0,E=0;c.sort(i0);for(let L=0,P=c.length;L<P;L++){let C=c[L],D=C.color,O=C.intensity,G=C.distance,Z=null;if(C.shadow&&C.shadow.map&&(C.shadow.map.texture.format===si?Z=C.shadow.map.texture:Z=C.shadow.map.depthTexture||C.shadow.map.texture),C.isAmbientLight)d+=D.r*O,m+=D.g*O,f+=D.b*O;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],O);E++}else if(C.isSunLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[p]=j,n.sunShadowMap[p]=Z;let de=Y.getViewportCount();for(let xe=0;xe<de;xe++)n.sunShadowMatrix[v+xe]=Y.getMatrix(xe),n.sunShadowCascade[v+xe]=Y._cascadeData[xe];v+=de,p++}n.sun[h]=V,h++}else if(C.isDirectionalLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.directionalShadow[x]=j,n.directionalShadowMap[x]=Z,n.directionalShadowMatrix[x]=C.shadow.matrix,w++}n.directional[x]=V,x++}else if(C.isSpotLight){let V=e.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=G,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[T]=V;let Y=C.shadow;if(C.map&&(n.spotLightMap[g]=C.map,g++,Y.updateMatrices(C),C.castShadow&&b++),n.spotLightMatrix[T]=Y.matrix,C.castShadow){let j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,n.spotShadow[T]=j,n.spotShadowMap[T]=Z,z++}T++}else if(C.isRectAreaLight){let V=e.get(C);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[R]=V,R++}else if(C.isPointLight){let V=e.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){let Y=C.shadow,j=t.get(C);j.shadowIntensity=Y.intensity,j.shadowBias=Y.bias,j.shadowNormalBias=Y.normalBias,j.shadowRadius=Y.radius,j.shadowMapSize=Y.mapSize,j.shadowCameraNear=Y.camera.near,j.shadowCameraFar=Y.camera.far,n.pointShadow[u]=j,n.pointShadowMap[u]=Z,n.pointShadowMatrix[u]=C.shadow.matrix,A++}n.point[u]=V,u++}else if(C.isHemisphereLight){let V=e.get(C);V.skyColor.copy(C.color).multiplyScalar(O),V.groundColor.copy(C.groundColor).multiplyScalar(O),n.hemi[_]=V,_++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ue.LTC_FLOAT_1,n.rectAreaLTC2=ue.LTC_FLOAT_2):(n.rectAreaLTC1=ue.LTC_HALF_1,n.rectAreaLTC2=ue.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=f;let S=n.hash;(S.sunLength!==h||S.directionalLength!==x||S.pointLength!==u||S.spotLength!==T||S.rectAreaLength!==R||S.hemiLength!==_||S.numSunShadows!==p||S.numDirectionalShadows!==w||S.numPointShadows!==A||S.numSpotShadows!==z||S.numSpotMaps!==g||S.numLightProbes!==E)&&(n.sun.length=h,n.directional.length=x,n.spot.length=T,n.rectArea.length=R,n.point.length=u,n.hemi.length=_,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=v,n.sunShadowCascade.length=v,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=A,n.pointShadowMap.length=A,n.pointShadowMatrix.length=A,n.spotShadow.length=z,n.spotShadowMap.length=z,n.spotLightMatrix.length=z+g-b,n.spotLightMap.length=g,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=E,S.sunLength=h,S.directionalLength=x,S.pointLength=u,S.spotLength=T,S.rectAreaLength=R,S.hemiLength=_,S.numSunShadows=p,S.numDirectionalShadows=w,S.numPointShadows=A,S.numSpotShadows=z,S.numSpotMaps=g,S.numLightProbes=E,n.version=n0++)}function l(c,d){let m=0,f=0,h=0,p=0,v=0,x=0,u=d.matrixWorldInverse;for(let T=0,R=c.length;T<R;T++){let _=c[T];if(_.isSunLight){let w=n.sun[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(u),m++}else if(_.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(_.isSpotLight){let w=n.spot[p];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),p++}else if(_.isRectAreaLight){let w=n.rectArea[v];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(_.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),h++}else if(_.isHemisphereLight){let w=n.hemi[x];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(u),x++}}}return{setup:o,setupView:l,state:n}}function Nh(i){let e=new s0(i),t=[],n=[],s=[];function r(f){m.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function d(f){e.setupView(t,f)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function r0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Nh(i),e.set(s,[o])):r>=a.length?(o=new Nh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,l0=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],c0=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Uh=new at,js=new N,Rl=new N;function h0(i,e,t){let n=new Ji,s=new me,r=new me,a=new $e,o=new Wr,l=new Xr,c={},d=t.maxTextureSize,m={[Dt]:kt,[kt]:Dt,[Xt]:Xt},f=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:a0,fragmentShader:o0}),h=f.clone();h.defines.HORIZONTAL_PASS=1;let p=new dt;p.setAttribute("position",new Pt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Fe(p,f),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=gi;let u=this.type;this.render=function(A,z,g){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||A.length===0)return;this.type===zc&&(Re("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=gi);let b=i.getRenderTarget(),E=i.getActiveCubeFace(),S=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Tn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let P=u!==this.type;P&&z.traverse(function(C){C.material&&(Array.isArray(C.material)?C.material.forEach(D=>D.needsUpdate=!0):C.material.needsUpdate=!0)});for(let C=0,D=A.length;C<D;C++){let O=A[C],G=O.shadow;if(G===void 0){Re("WebGLShadowMap:",O,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let Z=G.getFrameExtents();s.multiply(Z),r.copy(G.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/Z.x),s.x=r.x*Z.x,G.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/Z.y),s.y=r.y*Z.y,G.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=V,G.map===null||P===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===es){if(O.isPointLight){Re("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new Ht(s.x,s.y,{format:si,type:Vt,minFilter:nt,magFilter:nt,generateMipmaps:!1}),G.map.texture.name=O.name+".shadowMap",G.map.depthTexture=new Kn(s.x,s.y,Yt),G.map.depthTexture.name=O.name+".shadowMapDepth",G.map.depthTexture.format=Sn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wt,G.map.depthTexture.magFilter=wt}else O.isPointLight?(G.map=new $a(s.x),G.map.depthTexture=new Nr(s.x,mn)):(G.map=new Ht(s.x,s.y),G.map.depthTexture=new Kn(s.x,s.y,mn)),G.map.depthTexture.name=O.name+".shadowMap",G.map.depthTexture.format=Sn,this.type===gi?(G.map.depthTexture.compareFunction=V?qa:Xa,G.map.depthTexture.minFilter=nt,G.map.depthTexture.magFilter=nt):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=wt,G.map.depthTexture.magFilter=wt);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Y=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();O.isPointLight!==!0&&G.updateMatrices(O,g);for(let j=0;j<Y;j++){let de=G.getCamera(j);if(O.isPointLight){let xe=G.camera,qe=G.matrix,Ge=O.distance||xe.far;Ge!==xe.far&&(xe.far=Ge,xe.updateProjectionMatrix()),js.setFromMatrixPosition(O.matrixWorld),xe.position.copy(js),Rl.copy(xe.position),Rl.add(l0[j]),xe.up.copy(c0[j]),xe.lookAt(Rl),xe.updateMatrixWorld(),qe.makeTranslation(-js.x,-js.y,-js.z),Uh.multiplyMatrices(xe.projectionMatrix,xe.matrixWorldInverse),G._frustum.setFromProjectionMatrix(Uh,xe.coordinateSystem,xe.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,j),i.clear();else{j===0&&(i.setRenderTarget(G.map),i.clear());let xe=G.getViewport(j);a.set(r.x*xe.x,r.y*xe.y,r.x*xe.z,r.y*xe.w),L.viewport(a)}n=G.getFrustum(j),_(z,g,de,O,this.type)}G.isPointLightShadow!==!0&&this.type===es&&T(G,g),G.needsUpdate=!1}u=this.type,x.needsUpdate=!1,i.setRenderTarget(b,E,S)};function T(A,z){let g=e.update(v);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null?A.mapPass=new Ht(s.x,s.y,{format:si,type:Vt}):(A.mapPass.width!==A.map.width||A.mapPass.height!==A.map.height)&&A.mapPass.setSize(A.map.width,A.map.height),f.uniforms.shadow_pass.value=A.map.depthTexture,f.uniforms.resolution.value.set(A.map.width,A.map.height),f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(z,null,g,f,v,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value.set(A.map.width,A.map.height),h.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(z,null,g,h,v,null)}function R(A,z,g,b){let E=null,S=g.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(S!==void 0)E=S;else if(E=g.isPointLight===!0?l:o,i.localClippingEnabled&&z.clipShadows===!0&&Array.isArray(z.clippingPlanes)&&z.clippingPlanes.length!==0||z.displacementMap&&z.displacementScale!==0||z.alphaMap&&z.alphaTest>0||z.map&&z.alphaTest>0||z.alphaToCoverage===!0){let L=E.uuid,P=z.uuid,C=c[L];C===void 0&&(C={},c[L]=C);let D=C[P];D===void 0&&(D=E.clone(),C[P]=D,z.addEventListener("dispose",w)),E=D}if(E.visible=z.visible,E.wireframe=z.wireframe,b===es?E.side=z.shadowSide!==null?z.shadowSide:z.side:E.side=z.shadowSide!==null?z.shadowSide:m[z.side],E.alphaMap=z.alphaMap,E.alphaTest=z.alphaToCoverage===!0?.5:z.alphaTest,E.map=z.map,E.clipShadows=z.clipShadows,E.clippingPlanes=z.clippingPlanes,E.clipIntersection=z.clipIntersection,E.displacementMap=z.displacementMap,E.displacementScale=z.displacementScale,E.displacementBias=z.displacementBias,E.wireframeLinewidth=z.wireframeLinewidth,E.linewidth=z.linewidth,g.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let L=i.properties.get(E);L.light=g}return E}function _(A,z,g,b,E){if(A.visible===!1)return;if(A.layers.test(z.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&E===es)&&(!A.frustumCulled||A.intersectsFrustum(n))){A.modelViewMatrix.multiplyMatrices(g.matrixWorldInverse,A.matrixWorld);let P=e.update(A),C=A.material;if(Array.isArray(C)){let D=P.groups;for(let O=0,G=D.length;O<G;O++){let Z=D[O],V=C[Z.materialIndex];if(V&&V.visible){let Y=R(A,V,b,E);A.onBeforeShadow(i,A,z,g,P,Y,Z),i.renderBufferDirect(g,null,P,Y,A,Z),A.onAfterShadow(i,A,z,g,P,Y,Z)}}}else if(C.visible){let D=R(A,C,b,E);A.onBeforeShadow(i,A,z,g,P,D,null),i.renderBufferDirect(g,null,P,D,A,null),A.onAfterShadow(i,A,z,g,P,D,null)}}let L=A.children;for(let P=0,C=L.length;P<C;P++)_(L[P],z,g,b,E)}function w(A){A.target.removeEventListener("dispose",w);for(let g in c){let b=c[g],E=A.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}function u0(i,e){function t(){let F=!1,le=new $e,Q=null,ce=new $e(0,0,0,0);return{setMask:function(ge){Q!==ge&&!F&&(i.colorMask(ge,ge,ge,ge),Q=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ie,Ee,be,lt){lt===!0&&(ge*=be,ie*=be,Ee*=be),le.set(ge,ie,Ee,be),ce.equals(le)===!1&&(i.clearColor(ge,ie,Ee,be),ce.copy(le))},reset:function(){F=!1,Q=null,ce.set(-1,0,0,0)}}}function n(){let F=!1,le=!1,Q=null,ce=null,ge=null;return{setReversed:function(ie){if(le!==ie){let Ee=e.get("EXT_clip_control");ie?Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.ZERO_TO_ONE_EXT):Ee.clipControlEXT(Ee.LOWER_LEFT_EXT,Ee.NEGATIVE_ONE_TO_ONE_EXT),le=ie;let be=ge;ge=null,this.setClear(be)}},getReversed:function(){return le},setTest:function(ie){ie?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ie){Q!==ie&&!F&&(i.depthMask(ie),Q=ie)},setFunc:function(ie){if(le&&(ie=uh[ie]),ce!==ie){switch(ie){case br:i.depthFunc(i.NEVER);break;case wr:i.depthFunc(i.ALWAYS);break;case Tr:i.depthFunc(i.LESS);break;case Vi:i.depthFunc(i.LEQUAL);break;case Ar:i.depthFunc(i.EQUAL);break;case Er:i.depthFunc(i.GEQUAL);break;case Cr:i.depthFunc(i.GREATER);break;case Rr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ce=ie}},setLocked:function(ie){F=ie},setClear:function(ie){ge!==ie&&(ge=ie,le&&(ie=1-ie),i.clearDepth(ie))},reset:function(){F=!1,Q=null,ce=null,ge=null,le=!1}}}function s(){let F=!1,le=null,Q=null,ce=null,ge=null,ie=null,Ee=null,be=null,lt=null;return{setTest:function(Ke){F||(Ke?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(Ke){le!==Ke&&!F&&(i.stencilMask(Ke),le=Ke)},setFunc:function(Ke,on,_n){(Q!==Ke||ce!==on||ge!==_n)&&(i.stencilFunc(Ke,on,_n),Q=Ke,ce=on,ge=_n)},setOp:function(Ke,on,_n){(ie!==Ke||Ee!==on||be!==_n)&&(i.stencilOp(Ke,on,_n),ie=Ke,Ee=on,be=_n)},setLocked:function(Ke){F=Ke},setClear:function(Ke){lt!==Ke&&(i.clearStencil(Ke),lt=Ke)},reset:function(){F=!1,le=null,Q=null,ce=null,ge=null,ie=null,Ee=null,be=null,lt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},m={},f={},h=new WeakMap,p=[],v=null,x=!1,u=null,T=null,R=null,_=null,w=null,A=null,z=null,g=new Ne(0,0,0),b=0,E=!1,S=null,L=null,P=null,C=null,D=null,O=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,Z=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Z=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=Z>=1):V.indexOf("OpenGL ES")!==-1&&(Z=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=Z>=2);let Y=null,j={},de=i.getParameter(i.SCISSOR_BOX),xe=i.getParameter(i.VIEWPORT),qe=new $e().fromArray(de),Ge=new $e().fromArray(xe);function Ye(F,le,Q,ce){let ge=new Uint8Array(4),ie=i.createTexture();i.bindTexture(F,ie),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ee=0;Ee<Q;Ee++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ce,0,i.RGBA,i.UNSIGNED_BYTE,ge):i.texImage2D(le+Ee,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ge);return ie}let J={};J[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Vi),We(!1),ft(Wo),te(i.CULL_FACE),Je(Tn);function te(F){d[F]!==!0&&(i.enable(F),d[F]=!0)}function ye(F){d[F]!==!1&&(i.disable(F),d[F]=!1)}function Pe(F,le){return f[F]!==le?(i.bindFramebuffer(F,le),f[F]=le,F===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=le),F===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=le),!0):!1}function ne(F,le){let Q=p,ce=!1;if(F){Q=h.get(le),Q===void 0&&(Q=[],h.set(le,Q));let ge=F.textures;if(Q.length!==ge.length||Q[0]!==i.COLOR_ATTACHMENT0){for(let ie=0,Ee=ge.length;ie<Ee;ie++)Q[ie]=i.COLOR_ATTACHMENT0+ie;Q.length=ge.length,ce=!0}}else Q[0]!==i.BACK&&(Q[0]=i.BACK,ce=!0);ce&&i.drawBuffers(Q)}function Ce(F){return v!==F?(i.useProgram(F),v=F,!0):!1}let et={[xi]:i.FUNC_ADD,[Pc]:i.FUNC_SUBTRACT,[Lc]:i.FUNC_REVERSE_SUBTRACT};et[Dc]=i.MIN,et[Nc]=i.MAX;let De={[Uc]:i.ZERO,[Fc]:i.ONE,[Oc]:i.SRC_COLOR,[Zo]:i.SRC_ALPHA,[Wc]:i.SRC_ALPHA_SATURATE,[Gc]:i.DST_COLOR,[kc]:i.DST_ALPHA,[Bc]:i.ONE_MINUS_SRC_COLOR,[Jo]:i.ONE_MINUS_SRC_ALPHA,[Hc]:i.ONE_MINUS_DST_COLOR,[Vc]:i.ONE_MINUS_DST_ALPHA,[Xc]:i.CONSTANT_COLOR,[qc]:i.ONE_MINUS_CONSTANT_COLOR,[Yc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function Je(F,le,Q,ce,ge,ie,Ee,be,lt,Ke){if(F===Tn){x===!0&&(ye(i.BLEND),x=!1);return}if(x===!1&&(te(i.BLEND),x=!0),F!==Ic){if(F!==u||Ke!==E){if((T!==xi||w!==xi)&&(i.blendEquation(i.FUNC_ADD),T=xi,w=xi),Ke)switch(F){case ts:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFunc(i.ONE,i.ONE);break;case qo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Yo:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",F);break}else switch(F){case ts:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Xo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case qo:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Yo:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",F);break}R=null,_=null,A=null,z=null,g.set(0,0,0),b=0,u=F,E=Ke}return}ge=ge||le,ie=ie||Q,Ee=Ee||ce,(le!==T||ge!==w)&&(i.blendEquationSeparate(et[le],et[ge]),T=le,w=ge),(Q!==R||ce!==_||ie!==A||Ee!==z)&&(i.blendFuncSeparate(De[Q],De[ce],De[ie],De[Ee]),R=Q,_=ce,A=ie,z=Ee),(be.equals(g)===!1||lt!==b)&&(i.blendColor(be.r,be.g,be.b,lt),g.copy(be),b=lt),u=F,E=!1}function ot(F,le){F.side===Xt?ye(i.CULL_FACE):te(i.CULL_FACE);let Q=F.side===kt;le&&(Q=!Q),We(Q),F.blending===ts&&F.transparent===!1?Je(Tn):Je(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ce=F.stencilWrite;o.setTest(ce),ce&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),Gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function We(F){S!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),S=F)}function ft(F){F!==Cc?(te(i.CULL_FACE),F!==L&&(F===Wo?i.cullFace(i.BACK):F===Rc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),L=F}function St(F){F!==P&&(G&&i.lineWidth(F),P=F)}function Gt(F,le,Q){F?(te(i.POLYGON_OFFSET_FILL),(C!==le||D!==Q)&&(C=le,D=Q,a.getReversed()&&(le=-le),i.polygonOffset(le,Q))):ye(i.POLYGON_OFFSET_FILL)}function pt(F){F?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function xt(F){F===void 0&&(F=i.TEXTURE0+O-1),Y!==F&&(i.activeTexture(F),Y=F)}function B(F,le,Q){Q===void 0&&(Y===null?Q=i.TEXTURE0+O-1:Q=Y);let ce=j[Q];ce===void 0&&(ce={type:void 0,texture:void 0},j[Q]=ce),(ce.type!==F||ce.texture!==le)&&(Y!==Q&&(i.activeTexture(Q),Y=Q),i.bindTexture(F,le||J[F]),ce.type=F,ce.texture=le)}function At(){let F=j[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function tt(){try{i.compressedTexImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function y(){try{i.texSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function k(){try{i.texSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function $(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function se(){try{i.texStorage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function re(){try{i.texStorage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function K(){try{i.texImage2D(...arguments)}catch(F){Ie("WebGLState:",F)}}function ee(){try{i.texImage3D(...arguments)}catch(F){Ie("WebGLState:",F)}}function ae(F){return m[F]!==void 0?m[F]:i.getParameter(F)}function Te(F,le){m[F]!==le&&(i.pixelStorei(F,le),m[F]=le)}function he(F){qe.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),qe.copy(F))}function oe(F){Ge.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),Ge.copy(F))}function Ae(F,le){let Q=c.get(le);Q===void 0&&(Q=new WeakMap,c.set(le,Q));let ce=Q.get(F);ce===void 0&&(ce=i.getUniformBlockIndex(le,F.name),Q.set(F,ce))}function ze(F,le){let ce=c.get(le).get(F);l.get(le)!==ce&&(i.uniformBlockBinding(le,ce,F.__bindingPointIndex),l.set(le,ce))}function Ue(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},Y=null,j={},f={},h=new WeakMap,p=[],v=null,x=!1,u=null,T=null,R=null,_=null,w=null,A=null,z=null,g=new Ne(0,0,0),b=0,E=!1,S=null,L=null,P=null,C=null,D=null,qe.set(0,0,i.canvas.width,i.canvas.height),Ge.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Pe,drawBuffers:ne,useProgram:Ce,setBlending:Je,setMaterial:ot,setFlipSided:We,setCullFace:ft,setLineWidth:St,setPolygonOffset:Gt,setScissorTest:pt,activeTexture:xt,bindTexture:B,unbindTexture:At,compressedTexImage2D:tt,compressedTexImage3D:I,texImage2D:K,texImage3D:ee,pixelStorei:Te,getParameter:ae,updateUBOMapping:Ae,uniformBlockBinding:ze,texStorage2D:se,texStorage3D:re,texSubImage2D:y,texSubImage3D:k,compressedTexSubImage2D:X,compressedTexSubImage3D:$,scissor:he,viewport:oe,reset:Ue}}function d0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new me,d=new WeakMap,m=new Set,f,h=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(I,y){return p?new OffscreenCanvas(I,y):bs("canvas")}function x(I,y,k){let X=1,$=tt(I);if(($.width>k||$.height>k)&&(X=k/Math.max($.width,$.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let se=Math.floor(X*$.width),re=Math.floor(X*$.height);f===void 0&&(f=v(se,re));let K=y?v(se,re):f;return K.width=se,K.height=re,K.getContext("2d").drawImage(I,0,0,se,re),Re("WebGLRenderer: Texture has been resized from ("+$.width+"x"+$.height+") to ("+se+"x"+re+")."),K}else return"data"in I&&Re("WebGLRenderer: Image in DataTexture is too big ("+$.width+"x"+$.height+")."),I;return I}function u(I){return I.generateMipmaps}function T(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(I,y,k,X,$,se=!1){if(I!==null){if(i[I]!==void 0)return i[I];Re("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let re;X&&(re=e.get("EXT_texture_norm16"),re||Re("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===i.RED&&(k===i.FLOAT&&(K=i.R32F),k===i.HALF_FLOAT&&(K=i.R16F),k===i.UNSIGNED_BYTE&&(K=i.R8),k===i.UNSIGNED_SHORT&&re&&(K=re.R16_EXT),k===i.SHORT&&re&&(K=re.R16_SNORM_EXT)),y===i.RED_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.R8UI),k===i.UNSIGNED_SHORT&&(K=i.R16UI),k===i.UNSIGNED_INT&&(K=i.R32UI),k===i.BYTE&&(K=i.R8I),k===i.SHORT&&(K=i.R16I),k===i.INT&&(K=i.R32I)),y===i.RG&&(k===i.FLOAT&&(K=i.RG32F),k===i.HALF_FLOAT&&(K=i.RG16F),k===i.UNSIGNED_BYTE&&(K=i.RG8),k===i.UNSIGNED_SHORT&&re&&(K=re.RG16_EXT),k===i.SHORT&&re&&(K=re.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RG8UI),k===i.UNSIGNED_SHORT&&(K=i.RG16UI),k===i.UNSIGNED_INT&&(K=i.RG32UI),k===i.BYTE&&(K=i.RG8I),k===i.SHORT&&(K=i.RG16I),k===i.INT&&(K=i.RG32I)),y===i.RGB_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGB8UI),k===i.UNSIGNED_SHORT&&(K=i.RGB16UI),k===i.UNSIGNED_INT&&(K=i.RGB32UI),k===i.BYTE&&(K=i.RGB8I),k===i.SHORT&&(K=i.RGB16I),k===i.INT&&(K=i.RGB32I)),y===i.RGBA_INTEGER&&(k===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),k===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),k===i.UNSIGNED_INT&&(K=i.RGBA32UI),k===i.BYTE&&(K=i.RGBA8I),k===i.SHORT&&(K=i.RGBA16I),k===i.INT&&(K=i.RGBA32I)),y===i.RGB&&(k===i.UNSIGNED_SHORT&&re&&(K=re.RGB16_EXT),k===i.SHORT&&re&&(K=re.RGB16_SNORM_EXT),k===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),k===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),y===i.RGBA){let ee=se?Ss:Xe.getTransfer($);k===i.FLOAT&&(K=i.RGBA32F),k===i.HALF_FLOAT&&(K=i.RGBA16F),k===i.UNSIGNED_BYTE&&(K=ee===Qe?i.SRGB8_ALPHA8:i.RGBA8),k===i.UNSIGNED_SHORT&&re&&(K=re.RGBA16_EXT),k===i.SHORT&&re&&(K=re.RGBA16_SNORM_EXT),k===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),k===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function w(I,y){let k;return I?y===null||y===mn||y===ss?k=i.DEPTH24_STENCIL8:y===Yt?k=i.DEPTH32F_STENCIL8:y===is&&(k=i.DEPTH24_STENCIL8,Re("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===mn||y===ss?k=i.DEPTH_COMPONENT24:y===Yt?k=i.DEPTH_COMPONENT32F:y===is&&(k=i.DEPTH_COMPONENT16),k}function A(I,y){return u(I)===!0||I.isFramebufferTexture&&I.minFilter!==wt&&I.minFilter!==nt?Math.log2(Math.max(y.width,y.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?y.mipmaps.length:1}function z(I){let y=I.target;y.removeEventListener("dispose",z),b(y),y.isVideoTexture&&d.delete(y),y.isHTMLTexture&&m.delete(y)}function g(I){let y=I.target;y.removeEventListener("dispose",g),S(y)}function b(I){let y=n.get(I);if(y.__webglInit===void 0)return;let k=I.source,X=h.get(k);if(X){let $=X[y.__cacheKey];$.usedTimes--,$.usedTimes===0&&E(I),Object.keys(X).length===0&&h.delete(k)}n.remove(I)}function E(I){let y=n.get(I);i.deleteTexture(y.__webglTexture);let k=I.source,X=h.get(k);delete X[y.__cacheKey],a.memory.textures--}function S(I){let y=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(y.__webglFramebuffer[X]))for(let $=0;$<y.__webglFramebuffer[X].length;$++)i.deleteFramebuffer(y.__webglFramebuffer[X][$]);else i.deleteFramebuffer(y.__webglFramebuffer[X]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[X])}else{if(Array.isArray(y.__webglFramebuffer))for(let X=0;X<y.__webglFramebuffer.length;X++)i.deleteFramebuffer(y.__webglFramebuffer[X]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let X=0;X<y.__webglColorRenderbuffer.length;X++)y.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[X]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let k=I.textures;for(let X=0,$=k.length;X<$;X++){let se=n.get(k[X]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),a.memory.textures--),n.remove(k[X])}n.remove(I)}let L=0;function P(){L=0}function C(){return L}function D(I){L=I}function O(){let I=L;return I>=s.maxTextures&&Re("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,I}function G(I){let y=[];return y.push(I.wrapS),y.push(I.wrapT),y.push(I.wrapR||0),y.push(I.magFilter),y.push(I.minFilter),y.push(I.anisotropy),y.push(I.internalFormat),y.push(I.format),y.push(I.type),y.push(I.generateMipmaps),y.push(I.premultiplyAlpha),y.push(I.flipY),y.push(I.unpackAlignment),y.push(I.colorSpace),y.join()}function Z(I,y){let k=n.get(I);if(I.isVideoTexture&&B(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&k.__version!==I.version){let X=I.image;if(X===null)Re("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Re("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(k,I,y);return}}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,k.__webglTexture,i.TEXTURE0+y)}function V(I,y){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){ye(k,I,y);return}else I.isExternalTexture&&(k.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,k.__webglTexture,i.TEXTURE0+y)}function Y(I,y){let k=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&k.__version!==I.version){ye(k,I,y);return}t.bindTexture(i.TEXTURE_3D,k.__webglTexture,i.TEXTURE0+y)}function j(I,y){let k=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&k.__version!==I.version){Pe(k,I,y);return}t.bindTexture(i.TEXTURE_CUBE_MAP,k.__webglTexture,i.TEXTURE0+y)}let de={[Mn]:i.REPEAT,[nn]:i.CLAMP_TO_EDGE,[zr]:i.MIRRORED_REPEAT},xe={[wt]:i.NEAREST,[Kc]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[nt]:i.LINEAR,[oa]:i.LINEAR_MIPMAP_NEAREST,[Qt]:i.LINEAR_MIPMAP_LINEAR},qe={[th]:i.NEVER,[ah]:i.ALWAYS,[nh]:i.LESS,[Xa]:i.LEQUAL,[ih]:i.EQUAL,[qa]:i.GEQUAL,[sh]:i.GREATER,[rh]:i.NOTEQUAL};function Ge(I,y){if(y.type===Yt&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===nt||y.magFilter===oa||y.magFilter===Ws||y.magFilter===Qt||y.minFilter===nt||y.minFilter===oa||y.minFilter===Ws||y.minFilter===Qt)&&Re("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,de[y.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,de[y.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,de[y.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,xe[y.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,xe[y.minFilter]),y.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,qe[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===wt||y.minFilter!==Ws&&y.minFilter!==Qt||y.type===Yt&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function Ye(I,y){let k=!1;I.__webglInit===void 0&&(I.__webglInit=!0,y.addEventListener("dispose",z));let X=y.source,$=h.get(X);$===void 0&&($={},h.set(X,$));let se=G(y);if(se!==I.__cacheKey){$[se]===void 0&&($[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,k=!0),$[se].usedTimes++;let re=$[I.__cacheKey];re!==void 0&&($[I.__cacheKey].usedTimes--,re.usedTimes===0&&E(y)),I.__cacheKey=se,I.__webglTexture=$[se].texture}return k}function J(I,y,k){return Math.floor(Math.floor(I/k)/y)}function te(I,y,k,X){let se=I.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,k,X,y.data);else{se.sort((Te,he)=>Te.start-he.start);let re=0;for(let Te=1;Te<se.length;Te++){let he=se[re],oe=se[Te],Ae=he.start+he.count,ze=J(oe.start,y.width,4),Ue=J(he.start,y.width,4);oe.start<=Ae+1&&ze===Ue&&J(oe.start+oe.count-1,y.width,4)===ze?he.count=Math.max(he.count,oe.start+oe.count-he.start):(++re,se[re]=oe)}se.length=re+1;let K=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let Te=0,he=se.length;Te<he;Te++){let oe=se[Te],Ae=Math.floor(oe.start/4),ze=Math.ceil(oe.count/4),Ue=Ae%y.width,F=Math.floor(Ae/y.width),le=ze,Q=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Ue),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Ue,F,le,Q,k,X,y.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,K),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ye(I,y,k){let X=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(X=i.TEXTURE_3D);let $=Ye(I,y),se=y.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+k);let re=n.get(se);if(se.version!==re.__version||$===!0){if(t.activeTexture(i.TEXTURE0+k),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Q=Xe.getPrimaries(Xe.workingColorSpace),ce=y.colorSpace===kn?null:Xe.getPrimaries(y.colorSpace),ge=y.colorSpace===kn||Q===ce?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge)}t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let ee=x(y.image,!1,s.maxTextureSize);ee=At(y,ee);let ae=r.convert(y.format,y.colorSpace),Te=r.convert(y.type),he=_(y.internalFormat,ae,Te,y.normalized,y.colorSpace,y.isVideoTexture);Ge(X,y);let oe,Ae=y.mipmaps,ze=y.isVideoTexture!==!0,Ue=re.__version===void 0||$===!0,F=se.dataReady,le=A(y,ee);if(y.isDepthTexture)he=w(y.format===ii,y.type),Ue&&(ze?t.texStorage2D(i.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,ae,Te,null));else if(y.isDataTexture)if(Ae.length>0){ze&&Ue&&t.texStorage2D(i.TEXTURE_2D,le,he,Ae[0].width,Ae[0].height);for(let Q=0,ce=Ae.length;Q<ce;Q++)oe=Ae[Q],ze?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,Te,oe.data):t.texImage2D(i.TEXTURE_2D,Q,he,oe.width,oe.height,0,ae,Te,oe.data);y.generateMipmaps=!1}else ze?(Ue&&t.texStorage2D(i.TEXTURE_2D,le,he,ee.width,ee.height),F&&te(y,ee,ae,Te)):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,ae,Te,ee.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){ze&&Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,Ae[0].width,Ae[0].height,ee.depth);for(let Q=0,ce=Ae.length;Q<ce;Q++)if(oe=Ae[Q],y.format!==Zt)if(ae!==null)if(ze){if(F)if(y.layerUpdates.size>0){let ge=_l(oe.width,oe.height,y.format,y.type);for(let ie of y.layerUpdates){let Ee=oe.data.subarray(ie*ge/oe.data.BYTES_PER_ELEMENT,(ie+1)*ge/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,ie,oe.width,oe.height,1,ae,Ee)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,ae,oe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Q,he,oe.width,oe.height,ee.depth,0,oe.data,0,0);else Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ze?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Q,0,0,0,oe.width,oe.height,ee.depth,ae,Te,oe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Q,he,oe.width,oe.height,ee.depth,0,ae,Te,oe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{ze&&Ue&&t.texStorage2D(i.TEXTURE_2D,le,he,Ae[0].width,Ae[0].height);for(let Q=0,ce=Ae.length;Q<ce;Q++)oe=Ae[Q],y.format!==Zt?ae!==null?ze?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(i.TEXTURE_2D,Q,he,oe.width,oe.height,0,oe.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ze?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,oe.width,oe.height,ae,Te,oe.data):t.texImage2D(i.TEXTURE_2D,Q,he,oe.width,oe.height,0,ae,Te,oe.data)}else if(y.isDataArrayTexture)if(ze){if(Ue&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,ee.width,ee.height,ee.depth),F)if(y.layerUpdates.size>0){let Q=_l(ee.width,ee.height,y.format,y.type);for(let ce of y.layerUpdates){let ge=ee.data.subarray(ce*Q/ee.data.BYTES_PER_ELEMENT,(ce+1)*Q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ce,ee.width,ee.height,1,ae,Te,ge)}y.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,ae,Te,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,ae,Te,ee.data);else if(y.isData3DTexture)ze?(Ue&&t.texStorage3D(i.TEXTURE_3D,le,he,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,ae,Te,ee.data)):t.texImage3D(i.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,ae,Te,ee.data);else if(y.isFramebufferTexture){if(Ue)if(ze)t.texStorage2D(i.TEXTURE_2D,le,he,ee.width,ee.height);else{let Q=ee.width,ce=ee.height;for(let ge=0;ge<le;ge++)t.texImage2D(i.TEXTURE_2D,ge,he,Q,ce,0,ae,Te,null),Q>>=1,ce>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let Q=i.canvas;if(Q.hasAttribute("layoutsubtree")||Q.setAttribute("layoutsubtree","true"),ee.parentNode!==Q){Q.appendChild(ee),m.add(y),Q.onpaint=ce=>{let ge=ce.changedElements;for(let ie of m)ge.includes(ie.image)&&(ie.needsUpdate=!0)},Q.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let ge=i.RGBA,ie=i.RGBA,Ee=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ge,ie,Ee,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ae.length>0){if(ze&&Ue){let Q=tt(Ae[0]);t.texStorage2D(i.TEXTURE_2D,le,he,Q.width,Q.height)}for(let Q=0,ce=Ae.length;Q<ce;Q++)oe=Ae[Q],ze?F&&t.texSubImage2D(i.TEXTURE_2D,Q,0,0,ae,Te,oe):t.texImage2D(i.TEXTURE_2D,Q,he,ae,Te,oe);y.generateMipmaps=!1}else if(ze){if(Ue){let Q=tt(ee);t.texStorage2D(i.TEXTURE_2D,le,he,Q.width,Q.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,Te,ee)}else t.texImage2D(i.TEXTURE_2D,0,he,ae,Te,ee);u(y)&&T(X),re.__version=se.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function Pe(I,y,k){if(y.image.length!==6)return;let X=Ye(I,y),$=y.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+k);let se=n.get($);if($.version!==se.__version||X===!0){t.activeTexture(i.TEXTURE0+k);let re=Xe.getPrimaries(Xe.workingColorSpace),K=y.colorSpace===kn?null:Xe.getPrimaries(y.colorSpace),ee=y.colorSpace===kn||re===K?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let ae=y.isCompressedTexture||y.image[0].isCompressedTexture,Te=y.image[0]&&y.image[0].isDataTexture,he=[];for(let ie=0;ie<6;ie++)!ae&&!Te?he[ie]=x(y.image[ie],!0,s.maxCubemapSize):he[ie]=Te?y.image[ie].image:y.image[ie],he[ie]=At(y,he[ie]);let oe=he[0],Ae=r.convert(y.format,y.colorSpace),ze=r.convert(y.type),Ue=_(y.internalFormat,Ae,ze,y.normalized,y.colorSpace),F=y.isVideoTexture!==!0,le=se.__version===void 0||X===!0,Q=$.dataReady,ce=A(y,oe);Ge(i.TEXTURE_CUBE_MAP,y);let ge;if(ae){F&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,oe.width,oe.height);for(let ie=0;ie<6;ie++){ge=he[ie].mipmaps;for(let Ee=0;Ee<ge.length;Ee++){let be=ge[Ee];y.format!==Zt?Ae!==null?F?Q&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,be.width,be.height,Ae,be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,Ue,be.width,be.height,0,be.data):Re("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,0,0,be.width,be.height,Ae,ze,be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee,Ue,be.width,be.height,0,Ae,ze,be.data)}}}else{if(ge=y.mipmaps,F&&le){ge.length>0&&ce++;let ie=tt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Ue,ie.width,ie.height)}for(let ie=0;ie<6;ie++)if(Te){F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,he[ie].width,he[ie].height,Ae,ze,he[ie].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,he[ie].width,he[ie].height,0,Ae,ze,he[ie].data);for(let Ee=0;Ee<ge.length;Ee++){let lt=ge[Ee].image[ie].image;F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,lt.width,lt.height,Ae,ze,lt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,Ue,lt.width,lt.height,0,Ae,ze,lt.data)}}else{F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Ae,ze,he[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,Ue,Ae,ze,he[ie]);for(let Ee=0;Ee<ge.length;Ee++){let be=ge[Ee];F?Q&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,0,0,Ae,ze,be.image[ie]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ie,Ee+1,Ue,Ae,ze,be.image[ie])}}}u(y)&&T(i.TEXTURE_CUBE_MAP),se.__version=$.version,y.onUpdate&&y.onUpdate(y)}I.__version=y.version}function ne(I,y,k,X,$,se){let re=r.convert(k.format,k.colorSpace),K=r.convert(k.type),ee=_(k.internalFormat,re,K,k.normalized,k.colorSpace),ae=n.get(y),Te=n.get(k);if(Te.__renderTarget=y,!ae.__hasExternalTextures){let he=Math.max(1,y.width>>se),oe=Math.max(1,y.height>>se);$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?t.texImage3D($,se,ee,he,oe,y.depth,0,re,K,null):t.texImage2D($,se,ee,he,oe,0,re,K,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,$,Te.__webglTexture,0,pt(y)):($===i.TEXTURE_2D||$>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&$<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,$,Te.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ce(I,y,k){if(i.bindRenderbuffer(i.RENDERBUFFER,I),y.depthBuffer){let X=y.depthTexture,$=X&&X.isDepthTexture?X.type:null,se=w(y.stencilBuffer,$),re=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;xt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(y),se,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(y),se,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,se,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,I)}else{let X=y.textures;for(let $=0;$<X.length;$++){let se=X[$],re=r.convert(se.format,se.colorSpace),K=r.convert(se.type),ee=_(se.internalFormat,re,K,se.normalized,se.colorSpace);xt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(y),ee,y.width,y.height):k?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(y),ee,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ee,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function et(I,y,k){let X=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let $=n.get(y.depthTexture);if($.__renderTarget=y,(!$.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),X){if($.__webglInit===void 0&&($.__webglInit=!0,y.depthTexture.addEventListener("dispose",z)),$.__webglTexture===void 0){$.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,y.depthTexture);let ae=r.convert(y.depthTexture.format),Te=r.convert(y.depthTexture.type),he;y.depthTexture.format===Sn?he=i.DEPTH_COMPONENT24:y.depthTexture.format===ii&&(he=i.DEPTH24_STENCIL8);for(let oe=0;oe<6;oe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,he,y.width,y.height,0,ae,Te,null)}}else Z(y.depthTexture,0);let se=$.__webglTexture,re=pt(y),K=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+k:i.TEXTURE_2D,ee=y.depthTexture.format===ii?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Sn)xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,se,0);else if(y.depthTexture.format===ii)xt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,K,se,0,re):i.framebufferTexture2D(i.FRAMEBUFFER,ee,K,se,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function De(I){let y=n.get(I),k=I.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),X){let $=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,X.removeEventListener("dispose",$)};X.addEventListener("dispose",$),y.__depthDisposeCallback=$}y.__boundDepthTexture=X}if(I.depthTexture&&!y.__autoAllocateDepthBuffer)if(k)for(let X=0;X<6;X++)et(y.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?et(y.__webglFramebuffer[0],I,0):et(y.__webglFramebuffer,I,0)}else if(k){y.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[X]),y.__webglDepthbuffer[X]===void 0)y.__webglDepthbuffer[X]=i.createRenderbuffer(),Ce(y.__webglDepthbuffer[X],I,!1);else{let $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),Ce(y.__webglDepthbuffer,I,!1);else{let $=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,se)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Je(I,y,k){let X=n.get(I);y!==void 0&&ne(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),k!==void 0&&De(I)}function ot(I){let y=I.texture,k=n.get(I),X=n.get(y);I.addEventListener("dispose",g);let $=I.textures,se=I.isWebGLCubeRenderTarget===!0,re=$.length>1;if(re||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=y.version,a.memory.textures++),se){k.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer[K]=[];for(let ee=0;ee<y.mipmaps.length;ee++)k.__webglFramebuffer[K][ee]=i.createFramebuffer()}else k.__webglFramebuffer[K]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){k.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)k.__webglFramebuffer[K]=i.createFramebuffer()}else k.__webglFramebuffer=i.createFramebuffer();if(re)for(let K=0,ee=$.length;K<ee;K++){let ae=n.get($[K]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&xt(I)===!1){k.__webglMultisampledFramebuffer=i.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let K=0;K<$.length;K++){let ee=$[K];k.__webglColorRenderbuffer[K]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,k.__webglColorRenderbuffer[K]);let ae=r.convert(ee.format,ee.colorSpace),Te=r.convert(ee.type),he=_(ee.internalFormat,ae,Te,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),oe=pt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,oe,he,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+K,i.RENDERBUFFER,k.__webglColorRenderbuffer[K])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(k.__webglDepthRenderbuffer=i.createRenderbuffer(),Ce(k.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ge(i.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ne(k.__webglFramebuffer[K][ee],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,ee);else ne(k.__webglFramebuffer[K],I,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);u(y)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(re){for(let K=0,ee=$.length;K<ee;K++){let ae=$[K],Te=n.get(ae),he=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),Ge(he,ae),ne(k.__webglFramebuffer,I,ae,i.COLOR_ATTACHMENT0+K,he,0),u(ae)&&T(he)}t.unbindTexture()}else{let K=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(K=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,X.__webglTexture),Ge(K,y),y.mipmaps&&y.mipmaps.length>0)for(let ee=0;ee<y.mipmaps.length;ee++)ne(k.__webglFramebuffer[ee],I,y,i.COLOR_ATTACHMENT0,K,ee);else ne(k.__webglFramebuffer,I,y,i.COLOR_ATTACHMENT0,K,0);u(y)&&T(K),t.unbindTexture()}I.depthBuffer&&De(I)}function We(I){let y=I.textures;for(let k=0,X=y.length;k<X;k++){let $=y[k];if(u($)){let se=R(I),re=n.get($).__webglTexture;t.bindTexture(se,re),T(se),t.unbindTexture()}}}let ft=[],St=[];function Gt(I){if(I.samples>0){if(xt(I)===!1){let y=I.textures,k=I.width,X=I.height,$=i.COLOR_BUFFER_BIT,se=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,re=n.get(I),K=y.length>1;if(K)for(let ae=0;ae<y.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,re.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglFramebuffer);for(let ae=0;ae<y.length;ae++){if(I.resolveDepthBuffer&&(I.depthBuffer&&($|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&($|=i.STENCIL_BUFFER_BIT)),K){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Te=n.get(y[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Te,0)}i.blitFramebuffer(0,0,k,X,0,0,k,X,$,i.NEAREST),l===!0&&(ft.length=0,St.length=0,ft.push(i.COLOR_ATTACHMENT0+ae),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(ft.push(se),St.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,St)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),K)for(let ae=0;ae<y.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,re.__webglColorRenderbuffer[ae]);let Te=n.get(y[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,Te,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,re.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&l){let y=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function pt(I){return Math.min(s.maxSamples,I.samples)}function xt(I){let y=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function B(I){let y=a.render.frame;d.get(I)!==y&&(d.set(I,y),I.update())}function At(I,y){let k=I.colorSpace,X=I.format,$=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||k!==Un&&k!==kn&&(Xe.getTransfer(k)===Qe?(X!==Zt||$!==qt)&&Re("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",k)),y}function tt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(c.width=I.naturalWidth||I.width,c.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(c.width=I.displayWidth,c.height=I.displayHeight):(c.width=I.width,c.height=I.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=P,this.getTextureUnits=C,this.setTextureUnits=D,this.setTexture2D=Z,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=j,this.rebindTextures=Je,this.setupRenderTarget=ot,this.updateRenderTargetMipmap=We,this.updateMultisampleRenderTarget=Gt,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function f0(i,e){function t(n,s=kn){let r,a=Xe.getTransfer(s);if(n===qt)return i.UNSIGNED_BYTE;if(n===ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ha)return i.UNSIGNED_SHORT_5_5_5_1;if(n===al)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===ol)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===sl)return i.BYTE;if(n===rl)return i.SHORT;if(n===is)return i.UNSIGNED_SHORT;if(n===la)return i.INT;if(n===mn)return i.UNSIGNED_INT;if(n===Yt)return i.FLOAT;if(n===Vt)return i.HALF_FLOAT;if(n===ll)return i.ALPHA;if(n===cl)return i.RGB;if(n===Zt)return i.RGBA;if(n===Sn)return i.DEPTH_COMPONENT;if(n===ii)return i.DEPTH_STENCIL;if(n===hl)return i.RED;if(n===ua)return i.RED_INTEGER;if(n===si)return i.RG;if(n===da)return i.RG_INTEGER;if(n===fa)return i.RGBA_INTEGER;if(n===Xs||n===qs||n===Ys||n===Zs)if(a===Qe)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Xs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Xs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===xa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_a||n===ya||n===va||n===Ma||n===Sa||n===Js||n===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_a||n===ya)return a===Qe?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===va)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Ma)return r.COMPRESSED_R11_EAC;if(n===Sa)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Js)return r.COMPRESSED_RG11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wa||n===Ta||n===Aa||n===Ea||n===Ca||n===Ra||n===za||n===Ia||n===Pa||n===La||n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ta)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Aa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ea)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===za)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ia)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Pa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===La)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Da)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ua)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fa)return a===Qe?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oa||n===Ba||n===ka)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oa)return a===Qe?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ba)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Va||n===Ga||n===$s||n===Ha)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===$s)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ha)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ss?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var p0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Fl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Is(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:p0,fragmentShader:m0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Ol=class extends bn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,f=null,h=null,p=null,v=typeof XRWebGLBinding<"u",x=new Fl,u={},T=t.getContextAttributes(),R=null,_=null,w=[],A=[],z=new me,g=null,b=null,E=new It;E.viewport=new $e;let S=new It;S.viewport=new $e;let L=[E,S],P=new sa,C=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let te=w[J];return te===void 0&&(te=new Yi,w[J]=te),te.getTargetRaySpace()},this.getControllerGrip=function(J){let te=w[J];return te===void 0&&(te=new Yi,w[J]=te),te.getGripSpace()},this.getHand=function(J){let te=w[J];return te===void 0&&(te=new Yi,w[J]=te),te.getHandSpace()};function O(J){let te=A.indexOf(J.inputSource);if(te===-1)return;let ye=w[te];ye!==void 0&&(ye.update(J.inputSource,J.frame,c||a),ye.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",Z);for(let J=0;J<w.length;J++){let te=A[J];te!==null&&(A[J]=null,w[J].disconnect(te))}C=null,D=null,x.reset();for(let J in u)delete u[J];if(e.setRenderTarget(R),h=null,f=null,m=null,s=null,_=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(g),e.setSize(z.width,z.height,!1),b!==null){let J=b.camera;J.fov=b.fov,J.zoom=b.zoom,J.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,n.isPresenting===!0&&Re("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return m===null&&v&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",G),s.addEventListener("inputsourceschange",Z),T.xrCompatible!==!0&&await t.makeXRCompatible(),g=e.getPixelRatio(),e.getSize(z),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Pe=null,ne=null;T.depth&&(ne=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=T.stencil?ii:Sn,Pe=T.stencil?ss:mn);let Ce={colorFormat:t.RGBA8,depthFormat:ne,scaleFactor:r};m=this.getBinding(),f=m.createProjectionLayer(Ce),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Ht(f.textureWidth,f.textureHeight,{format:Zt,type:qt,depthTexture:new Kn(f.textureWidth,f.textureHeight,Pe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new Ht(h.framebufferWidth,h.framebufferHeight,{format:Zt,type:qt,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function Z(J){for(let te=0;te<J.removed.length;te++){let ye=J.removed[te],Pe=A.indexOf(ye);Pe>=0&&(A[Pe]=null,w[Pe].disconnect(ye))}for(let te=0;te<J.added.length;te++){let ye=J.added[te],Pe=A.indexOf(ye);if(Pe===-1){for(let Ce=0;Ce<w.length;Ce++)if(Ce>=A.length){A.push(ye),Pe=Ce;break}else if(A[Ce]===null){A[Ce]=ye,Pe=Ce;break}if(Pe===-1)break}let ne=w[Pe];ne&&ne.connect(ye)}}let V=new N,Y=new N;function j(J,te,ye){V.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);let Pe=V.distanceTo(Y),ne=te.projectionMatrix.elements,Ce=ye.projectionMatrix.elements,et=ne[14]/(ne[10]-1),De=ne[14]/(ne[10]+1),Je=(ne[9]+1)/ne[5],ot=(ne[9]-1)/ne[5],We=(ne[8]-1)/ne[0],ft=(Ce[8]+1)/Ce[0],St=et*We,Gt=et*ft,pt=Pe/(-We+ft),xt=pt*-We;if(te.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(xt),J.translateZ(pt),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ne[10]===-1)J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let B=et+pt,At=De+pt,tt=St-xt,I=Gt+(Pe-xt),y=Je*De/At*B,k=ot*De/At*B;J.projectionMatrix.makePerspective(tt,I,y,k,B,At),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function de(J,te){te===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(te.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let te=J.near,ye=J.far;x.texture!==null&&(x.depthNear>0&&(te=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),P.near=S.near=E.near=te,P.far=S.far=E.far=ye,(C!==P.near||D!==P.far)&&(s.updateRenderState({depthNear:P.near,depthFar:P.far}),C=P.near,D=P.far),P.layers.mask=J.layers.mask|6,E.layers.mask=P.layers.mask&-5,S.layers.mask=P.layers.mask&-3;let Pe=J.parent,ne=P.cameras;de(P,Pe);for(let Ce=0;Ce<ne.length;Ce++)de(ne[Ce],Pe);ne.length===2?j(P,E,S):P.projectionMatrix.copy(E.projectionMatrix),b===null&&J.isPerspectiveCamera&&(b={camera:J,fov:J.fov,zoom:J.zoom}),xe(J,P,Pe)};function xe(J,te,ye){ye===null?J.matrix.copy(te.matrixWorld):(J.matrix.copy(ye.matrixWorld),J.matrix.invert(),J.matrix.multiply(te.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(te.projectionMatrix),J.projectionMatrixInverse.copy(te.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Wi*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(f===null&&h===null))return l},this.setFoveation=function(J){l=J,f!==null&&(f.fixedFoveation=J),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(P)},this.getCameraTexture=function(J){return u[J]};let qe=null;function Ge(J,te){if(d=te.getViewerPose(c||a),p=te,d!==null){let ye=d.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Pe=!1;ye.length!==P.cameras.length&&(P.cameras.length=0,Pe=!0);for(let De=0;De<ye.length;De++){let Je=ye[De],ot=null;if(h!==null)ot=h.getViewport(Je);else{let ft=m.getViewSubImage(f,Je);ot=ft.viewport,De===0&&(e.setRenderTargetTextures(_,ft.colorTexture,ft.depthStencilTexture),e.setRenderTarget(_))}let We=L[De];We===void 0&&(We=new It,We.layers.enable(De),We.viewport=new $e,L[De]=We),We.matrix.fromArray(Je.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Je.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(ot.x,ot.y,ot.width,ot.height),De===0&&(P.matrix.copy(We.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Pe===!0&&P.cameras.push(We)}let ne=s.enabledFeatures;if(ne&&ne.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){m=n.getBinding();let De=m.getDepthInformation(ye[0]);De&&De.isValid&&De.texture&&x.init(De,s.renderState)}if(ne&&ne.includes("camera-access")&&v){e.state.unbindTexture(),m=n.getBinding();for(let De=0;De<ye.length;De++){let Je=ye[De].camera;if(Je){let ot=u[Je];ot||(ot=new Is,u[Je]=ot);let We=m.getCameraImage(Je);ot.sourceTexture=We}}}}for(let ye=0;ye<w.length;ye++){let Pe=A[ye],ne=w[ye];Pe!==null&&ne!==void 0&&ne.update(Pe,te,c||a)}qe&&qe(J,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),p=null}let Ye=new Fh;Ye.setAnimationLoop(Ge),this.setAnimationLoop=function(J){qe=J},this.dispose=function(){}}},g0=new at,Hh=new Le;Hh.set(-1,0,0,0,1,0,0,0,1);function x0(i,e){function t(x,u){x.matrixAutoUpdate===!0&&x.updateMatrix(),u.value.copy(x.matrix)}function n(x,u){u.color.getRGB(x.fogColor.value,ml(i)),u.isFog?(x.fogNear.value=u.near,x.fogFar.value=u.far):u.isFogExp2&&(x.fogDensity.value=u.density)}function s(x,u,T,R,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(x,u):u.isMeshLambertMaterial?(r(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(x,u),m(x,u)):u.isMeshPhongMaterial?(r(x,u),d(x,u),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(x,u),f(x,u),u.isMeshPhysicalMaterial&&h(x,u,_)):u.isMeshMatcapMaterial?(r(x,u),p(x,u)):u.isMeshDepthMaterial?r(x,u):u.isMeshDistanceMaterial?(r(x,u),v(x,u)):u.isMeshNormalMaterial?r(x,u):u.isLineBasicMaterial?(a(x,u),u.isLineDashedMaterial&&o(x,u)):u.isPointsMaterial?l(x,u,T,R):u.isSpriteMaterial?c(x,u):u.isShadowMaterial?(x.color.value.copy(u.color),x.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(x,u){x.opacity.value=u.opacity,u.color&&x.diffuse.value.copy(u.color),u.emissive&&x.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(x.map.value=u.map,t(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.bumpMap&&(x.bumpMap.value=u.bumpMap,t(u.bumpMap,x.bumpMapTransform),x.bumpScale.value=u.bumpScale,u.side===kt&&(x.bumpScale.value*=-1)),u.normalMap&&(x.normalMap.value=u.normalMap,t(u.normalMap,x.normalMapTransform),x.normalScale.value.copy(u.normalScale),u.side===kt&&x.normalScale.value.negate()),u.displacementMap&&(x.displacementMap.value=u.displacementMap,t(u.displacementMap,x.displacementMapTransform),x.displacementScale.value=u.displacementScale,x.displacementBias.value=u.displacementBias),u.emissiveMap&&(x.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,x.emissiveMapTransform)),u.specularMap&&(x.specularMap.value=u.specularMap,t(u.specularMap,x.specularMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest);let T=e.get(u),R=T.envMap,_=T.envMapRotation;R&&(x.envMap.value=R,x.envMapRotation.value.setFromMatrix4(g0.makeRotationFromEuler(_)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Hh),x.reflectivity.value=u.reflectivity,x.ior.value=u.ior,x.refractionRatio.value=u.refractionRatio),u.lightMap&&(x.lightMap.value=u.lightMap,x.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,x.lightMapTransform)),u.aoMap&&(x.aoMap.value=u.aoMap,x.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,x.aoMapTransform))}function a(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,u.map&&(x.map.value=u.map,t(u.map,x.mapTransform))}function o(x,u){x.dashSize.value=u.dashSize,x.totalSize.value=u.dashSize+u.gapSize,x.scale.value=u.scale}function l(x,u,T,R){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.size.value=u.size*T,x.scale.value=R*.5,u.map&&(x.map.value=u.map,t(u.map,x.uvTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function c(x,u){x.diffuse.value.copy(u.color),x.opacity.value=u.opacity,x.rotation.value=u.rotation,u.map&&(x.map.value=u.map,t(u.map,x.mapTransform)),u.alphaMap&&(x.alphaMap.value=u.alphaMap,t(u.alphaMap,x.alphaMapTransform)),u.alphaTest>0&&(x.alphaTest.value=u.alphaTest)}function d(x,u){x.specular.value.copy(u.specular),x.shininess.value=Math.max(u.shininess,1e-4)}function m(x,u){u.gradientMap&&(x.gradientMap.value=u.gradientMap)}function f(x,u){x.metalness.value=u.metalness,u.metalnessMap&&(x.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,x.metalnessMapTransform)),x.roughness.value=u.roughness,u.roughnessMap&&(x.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,x.roughnessMapTransform)),u.envMap&&(x.envMapIntensity.value=u.envMapIntensity)}function h(x,u,T){x.ior.value=u.ior,u.sheen>0&&(x.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),x.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(x.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,x.sheenColorMapTransform)),u.sheenRoughnessMap&&(x.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,x.sheenRoughnessMapTransform))),u.clearcoat>0&&(x.clearcoat.value=u.clearcoat,x.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(x.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,x.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(x.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===kt&&x.clearcoatNormalScale.value.negate())),u.dispersion>0&&(x.dispersion.value=u.dispersion),u.retroreflectivity>0&&(x.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(x.iridescence.value=u.iridescence,x.iridescenceIOR.value=u.iridescenceIOR,x.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],x.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(x.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,x.iridescenceMapTransform)),u.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),u.transmission>0&&(x.transmission.value=u.transmission,x.transmissionSamplerMap.value=T.texture,x.transmissionSamplerSize.value.set(T.width,T.height),u.transmissionMap&&(x.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,x.transmissionMapTransform)),x.thickness.value=u.thickness,u.thicknessMap&&(x.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=u.attenuationDistance,x.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(x.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(x.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=u.specularIntensity,x.specularColor.value.copy(u.specularColor),u.specularColorMap&&(x.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,x.specularColorMapTransform)),u.specularIntensityMap&&(x.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,x.specularIntensityMapTransform))}function p(x,u){u.matcap&&(x.matcap.value=u.matcap)}function v(x,u){let T=e.get(u).light;x.referencePosition.value.setFromMatrixPosition(T.matrixWorld),x.nearDistance.value=T.shadow.camera.near,x.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function _0(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let A=w.program;n.uniformBlockBinding(_,A)}function c(_,w){let A=s[_.id];A===void 0&&(x(_),A=d(_),s[_.id]=A,_.addEventListener("dispose",T));let z=w.program;n.updateUBOMapping(_,z);let g=e.render.frame;r[_.id]!==g&&(f(_),r[_.id]=g)}function d(_){let w=m();_.__bindingPointIndex=w;let A=i.createBuffer(),z=_.__size,g=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,z,g),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,A),A}function m(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Ie("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){let w=s[_.id],A=_.uniforms,z=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let g=0,b=A.length;g<b;g++){let E=A[g];if(Array.isArray(E))for(let S=0,L=E.length;S<L;S++)h(E[S],g,S,z);else h(E,g,0,z)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,w,A,z){if(v(_,w,A,z)===!0){let g=_.__offset,b=_.value;if(Array.isArray(b)){let E=0;for(let S=0;S<b.length;S++){let L=b[S],P=u(L);p(L,_.__data,E),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(E+=P.storage/Float32Array.BYTES_PER_ELEMENT)}}else p(b,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,g,_.__data)}}function p(_,w,A){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,A)}function v(_,w,A,z){let g=_.value,b=w+"_"+A;if(z[b]===void 0)return typeof g=="number"||typeof g=="boolean"?z[b]=g:ArrayBuffer.isView(g)?z[b]=g.slice():z[b]=g.clone(),!0;{let E=z[b];if(typeof g=="number"||typeof g=="boolean"){if(E!==g)return z[b]=g,!0}else{if(ArrayBuffer.isView(g))return!0;if(E.equals(g)===!1)return E.copy(g),!0}}return!1}function x(_){let w=_.uniforms,A=0,z=16;for(let b=0,E=w.length;b<E;b++){let S=Array.isArray(w[b])?w[b]:[w[b]];for(let L=0,P=S.length;L<P;L++){let C=S[L],D=Array.isArray(C.value)?C.value:[C.value];for(let O=0,G=D.length;O<G;O++){let Z=D[O],V=u(Z),Y=A%z,j=Y%V.boundary,de=Y+j;A+=j,de!==0&&z-de<V.storage&&(A+=z-de),C.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),C.__offset=A,A+=V.storage}}}let g=A%z;return g>0&&(A+=z-g),_.__size=A,_.__cache={},this}function u(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Re("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Re("WebGLRenderer: Unsupported uniform value type.",_),w}function T(_){let w=_.target;w.removeEventListener("dispose",T);let A=a.indexOf(w.__bindingPointIndex);a.splice(A,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function R(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:R}}var y0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),An=null;function v0(){return An===null&&(An=new sn(y0,16,16,si,Vt),An.name="DFG_LUT",An.minFilter=nt,An.magFilter=nt,An.wrapS=nn,An.wrapT=nn,An.generateMipmaps=!1,An.needsUpdate=!0),An}var Ka=class{constructor(e={}){let{canvas:t=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:f=!1,outputBufferType:h=qt}=e;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let v=h,x=new Set([fa,da,ua]),u=new Set([qt,mn,is,ss,ca,ha]),T=new Uint32Array(4),R=new Int32Array(4),_=new N,w=null,A=null,z=[],g=[],b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=pn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let E=this,S=!1,L=null,P=null,C=null,D=null;this._outputColorSpace=zt;let O=0,G=0,Z=null,V=-1,Y=null,j=new $e,de=new $e,xe=null,qe=new Ne(0),Ge=0,Ye=t.width,J=t.height,te=1,ye=null,Pe=null,ne=new $e(0,0,Ye,J),Ce=new $e(0,0,Ye,J),et=!1,De=new Ji,Je=!1,ot=!1,We=new at,ft=new N,St=new $e,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function xt(){return Z===null?te:1}let B=n;function At(M,U){return t.getContext(M,U)}let tt,I,y,k,X,$,se,re,K,ee,ae,Te,he,oe,Ae,ze,Ue,F,le,Q,ce,ge,ie;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",lt,!1),t.addEventListener("webglcontextrestored",Ke,!1),t.addEventListener("webglcontextcreationerror",on,!1),B===null){let U="webgl2";if(B=At(U,M),B===null)throw At(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ee()}catch(M){throw t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ie("WebGLRenderer: "+M.message),M}function Ee(){tt=new Em(B),tt.init(),ce=new f0(B,tt),I=new xm(B,tt,e,ce),y=new u0(B,tt),I.reversedDepthBuffer&&f&&y.buffers.depth.setReversed(!0),P=B.createFramebuffer(),C=B.createFramebuffer(),D=B.createFramebuffer(),k=new zm(B),X=new Kg,$=new d0(B,tt,y,X,I,ce,k),se=new Am(E),re=new Id(B),ge=new mm(B,re),K=new Cm(B,re,k,ge),ee=new Pm(B,K,re,ge,k),F=new Im(B,I,$),Ae=new _m(X),ae=new $g(E,se,tt,I,ge,Ae),Te=new x0(E,X),he=new Qg,oe=new r0(tt),Ue=new pm(E,se,y,ee,p,l),ze=new h0(E,ee,I),ie=new _0(B,k,I,y),le=new gm(B,tt,k),Q=new Rm(B,tt,k),k.programs=ae.programs,E.capabilities=I,E.extensions=tt,E.properties=X,E.renderLists=he,E.shadowMap=ze,E.state=y,E.info=k}v!==qt&&(b=new Dm(v,t.width,t.height,o,s,r));let be=new Ol(E,B);this.xr=be,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let M=tt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=tt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(M){M!==void 0&&(te=M,this.setSize(Ye,J,!1))},this.getSize=function(M){return M.set(Ye,J)},this.setSize=function(M,U,q=!0){if(be.isPresenting){Re("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=M,J=U,t.width=Math.floor(M*te),t.height=Math.floor(U*te),q===!0&&(t.style.width=M+"px",t.style.height=U+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Ye*te,J*te).floor()},this.setDrawingBufferSize=function(M,U,q){Ye=M,J=U,te=q,t.width=Math.floor(M*q),t.height=Math.floor(U*q),this.setViewport(0,0,M,U)},this.setEffects=function(M){if(v===qt){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let U=0;U<M.length;U++)if(M[U].isOutputPass===!0){Re("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(j)},this.getViewport=function(M){return M.copy(ne)},this.setViewport=function(M,U,q,H){M.isVector4?ne.set(M.x,M.y,M.z,M.w):ne.set(M,U,q,H),y.viewport(j.copy(ne).multiplyScalar(te).round())},this.getScissor=function(M){return M.copy(Ce)},this.setScissor=function(M,U,q,H){M.isVector4?Ce.set(M.x,M.y,M.z,M.w):Ce.set(M,U,q,H),y.scissor(de.copy(Ce).multiplyScalar(te).round())},this.getScissorTest=function(){return et},this.setScissorTest=function(M){y.setScissorTest(et=M)},this.setOpaqueSort=function(M){ye=M},this.setTransparentSort=function(M){Pe=M},this.getClearColor=function(M){return M.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor(...arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha(...arguments)},this.clear=function(M=!0,U=!0,q=!0){let H=0;if(M){let W=!1;if(Z!==null){let pe=Z.texture.format;W=x.has(pe)}if(W){let pe=Z.texture.type,ve=u.has(pe),fe=Ue.getClearColor(),Me=Ue.getClearAlpha(),we=fe.r,ke=fe.g,He=fe.b;ve?(T[0]=we,T[1]=ke,T[2]=He,T[3]=Me,B.clearBufferuiv(B.COLOR,0,T)):(R[0]=we,R[1]=ke,R[2]=He,R[3]=Me,B.clearBufferiv(B.COLOR,0,R))}else H|=B.COLOR_BUFFER_BIT}U&&(H|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(H|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&B.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),L=M},this.dispose=function(){t.removeEventListener("webglcontextlost",lt,!1),t.removeEventListener("webglcontextrestored",Ke,!1),t.removeEventListener("webglcontextcreationerror",on,!1),Ue.dispose(),he.dispose(),oe.dispose(),X.dispose(),se.dispose(),ee.dispose(),ge.dispose(),ie.dispose(),ae.dispose(),be.dispose(),be.removeEventListener("sessionstart",Gl),be.removeEventListener("sessionend",Hl),ai.stop()};function lt(M){M.preventDefault(),dl("WebGLRenderer: Context Lost."),S=!0}function Ke(){dl("WebGLRenderer: Context Restored."),S=!1;let M=k.autoReset,U=ze.enabled,q=ze.autoUpdate,H=ze.needsUpdate,W=ze.type;Ee(),k.autoReset=M,ze.enabled=U,ze.autoUpdate=q,ze.needsUpdate=H,ze.type=W}function on(M){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function _n(M){let U=M.target;U.removeEventListener("dispose",_n),hu(U)}function hu(M){uu(M),X.remove(M)}function uu(M){let U=X.get(M).programs;U!==void 0&&(U.forEach(function(q){ae.releaseProgram(q)}),M.isShaderMaterial&&ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,q,H,W,pe){U===null&&(U=Gt);let ve=W.isMesh&&W.matrixWorld.determinantAffine()<0,fe=pu(M,U,q,H,W);y.setMaterial(H,ve);let Me=q.index,we=1;if(H.wireframe===!0){if(Me=K.getWireframeAttribute(q),Me===void 0)return;we=2}let ke=q.drawRange,He=q.attributes.position,Se=ke.start*we,je=(ke.start+ke.count)*we;pe!==null&&(Se=Math.max(Se,pe.start*we),je=Math.min(je,(pe.start+pe.count)*we)),Me!==null?(Se=Math.max(Se,0),je=Math.min(je,Me.count)):He!=null&&(Se=Math.max(Se,0),je=Math.min(je,He.count));let _t=je-Se;if(_t<0||_t===1/0)return;ge.setup(W,H,fe,q,Me);let ht,rt=le;if(Me!==null&&(ht=re.get(Me),rt=Q,rt.setIndex(ht)),W.isMesh)H.wireframe===!0?(y.setLineWidth(H.wireframeLinewidth*xt()),rt.setMode(B.LINES)):rt.setMode(B.TRIANGLES);else if(W.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),y.setLineWidth(Et*xt()),W.isLineSegments?rt.setMode(B.LINES):W.isLineLoop?rt.setMode(B.LINE_LOOP):rt.setMode(B.LINE_STRIP)}else W.isPoints?rt.setMode(B.POINTS):W.isSprite&&rt.setMode(B.TRIANGLES);if(W.isBatchedMesh)if(tt.get("WEBGL_multi_draw"))rt.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Et=W._multiDrawStarts,_e=W._multiDrawCounts,Ut=W._multiDrawCount,Ze=Me?re.get(Me).bytesPerElement:1,en=X.get(H).currentProgram.getUniforms();for(let yn=0;yn<Ut;yn++)en.setValue(B,"_gl_DrawID",yn),rt.render(Et[yn]/Ze,_e[yn])}else if(W.isInstancedMesh)rt.renderInstances(Se,_t,W.count);else if(q.isInstancedBufferGeometry){let Et=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,_e=Math.min(q.instanceCount,Et);rt.renderInstances(Se,_t,_e)}else rt.render(Se,_t)};function Vl(M,U,q,H){L!==null&&M.isNodeMaterial&&L.setObject(H,M),Je===!0&&Ae.setState(M,q,!1),M.transparent===!0&&M.side===Xt&&M.forceSinglePass===!1?(M.side=kt,M.needsUpdate=!0,tr(M,U,H),M.side=Dt,M.needsUpdate=!0,tr(M,U,H),M.side=Xt):tr(M,U,H)}this.compile=function(M,U,q=null){q===null&&(q=M),L!==null&&L.renderStart(M,U,q),A=oe.get(q),A.init(U),g.push(A),q.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),M!==q&&M.traverseVisible(function(W){W.isLight&&W.layers.test(U.layers)&&(A.pushLight(W),W.castShadow&&A.pushShadow(W))}),A.setupLights(),L!==null&&L.updateLights(A.state.lightsArray),ot=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,ot),Je===!0&&Ae.setGlobalState(this.clippingPlanes,U),L!==null&&ze.render(A.state.shadowsArray,q,U);let H=new Set;return M.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let pe=W.material;if(pe)if(Array.isArray(pe))for(let ve=0;ve<pe.length;ve++){let fe=pe[ve];Vl(fe,q,U,W),H.add(fe)}else Vl(pe,q,U,W),H.add(pe)}),A=g.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(M,U,q=null){let H=this.compile(M,U,q);return new Promise(W=>{function pe(){if(H.forEach(function(ve){let Me=X.get(ve).currentProgram;(Me===void 0||Me.isReady())&&H.delete(ve)}),H.size===0){W(M);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let oo=null;function du(M){oo&&oo(M)}function Gl(){ai.stop()}function Hl(){ai.start()}let ai=new Fh;ai.setAnimationLoop(du),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(M){oo=M,be.setAnimationLoop(M),M===null?ai.stop():ai.start()},be.addEventListener("sessionstart",Gl),be.addEventListener("sessionend",Hl),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;L!==null&&L.renderStart(M,U);let q=be.enabled===!0&&be.isPresenting===!0,H=b!==null&&(Z===null||q)&&b.begin(E,Z);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),be.enabled===!0&&be.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(be.cameraAutoUpdate===!0&&be.updateCamera(U),U=be.getCamera()),M.isScene===!0&&M.onBeforeRender(E,M,U,Z),A=oe.get(M,g.length),A.init(U),A.state.textureUnits=$.getTextureUnits(),g.push(A),We.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),De.setFromProjectionMatrix(We,dn,U.reversedDepth),ot=this.localClippingEnabled,Je=Ae.init(this.clippingPlanes,ot),w=he.get(M,z.length),w.init(),z.push(w),be.enabled===!0&&be.isPresenting===!0){let ve=E.xr.getDepthSensingMesh();ve!==null&&lo(ve,U,-1/0,E.sortObjects)}lo(M,U,0,E.sortObjects),w.finish(),L!==null&&L.updateLights(A.state.lightsArray),E.sortObjects===!0&&w.sort(ye,Pe),pt=be.enabled===!1||be.isPresenting===!1||be.hasDepthSensing()===!1,pt&&Ue.addToRenderList(w,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Je===!0&&Ae.beginShadows();let W=A.state.shadowsArray;if(ze.render(W,M,U),Je===!0&&Ae.endShadows(),(H&&b.hasRenderPass())===!1){let ve=w.opaque,fe=w.transmissive;if(A.setupLights(),U.isArrayCamera){let Me=U.cameras;if(fe.length>0)for(let we=0,ke=Me.length;we<ke;we++){let He=Me[we];Xl(ve,fe,M,He)}pt&&Ue.render(M);for(let we=0,ke=Me.length;we<ke;we++){let He=Me[we];Wl(w,M,He,He.viewport)}}else fe.length>0&&Xl(ve,fe,M,U),pt&&Ue.render(M),Wl(w,M,U)}Z!==null&&G===0&&($.updateMultisampleRenderTarget(Z),$.updateRenderTargetMipmap(Z)),H&&b.end(E),M.isScene===!0&&M.onAfterRender(E,M,U),ge.resetDefaultState(),V=-1,Y=null,g.pop(),g.length>0?(A=g[g.length-1],$.setTextureUnits(A.state.textureUnits),Je===!0&&Ae.setGlobalState(E.clippingPlanes,A.state.camera)):A=null,z.pop(),z.length>0?w=z[z.length-1]:w=null,L!==null&&L.renderEnd()};function lo(M,U,q,H){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLightProbeGrid)A.pushLightProbeGrid(M);else if(M.isLight)A.pushLight(M),M.castShadow&&A.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(De)){H&&St.setFromMatrixPosition(M.matrixWorld).applyMatrix4(We);let ve=ee.update(M),fe=M.material;fe.visible&&w.push(M,ve,fe,q,St.z,null,U)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(De))){let ve=ee.update(M),fe=M.material;if(H&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),St.copy(M.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),St.copy(ve.boundingSphere.center)),St.applyMatrix4(M.matrixWorld).applyMatrix4(We)),Array.isArray(fe)){let Me=ve.groups;for(let we=0,ke=Me.length;we<ke;we++){let He=Me[we],Se=fe[He.materialIndex];Se&&Se.visible&&w.push(M,ve,Se,q,St.z,He,U)}}else fe.visible&&w.push(M,ve,fe,q,St.z,null,U)}}let pe=M.children;for(let ve=0,fe=pe.length;ve<fe;ve++)lo(pe[ve],U,q,H)}function Wl(M,U,q,H){let{opaque:W,transmissive:pe,transparent:ve}=M;A.setupLightsView(q),Je===!0&&Ae.setGlobalState(E.clippingPlanes,q),H&&y.viewport(j.copy(H)),W.length>0&&er(W,U,q),pe.length>0&&er(pe,U,q),ve.length>0&&er(ve,U,q),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function Xl(M,U,q,H){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(A.state.transmissionRenderTarget[H.id]===void 0){let Se=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");A.state.transmissionRenderTarget[H.id]=new Ht(1,1,{generateMipmaps:!0,type:Se?Vt:qt,minFilter:Qt,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}let pe=A.state.transmissionRenderTarget[H.id],ve=H.viewport||j;pe.setSize(ve.z*E.transmissionResolutionScale,ve.w*E.transmissionResolutionScale);let fe=E.getRenderTarget(),Me=E.getActiveCubeFace(),we=E.getActiveMipmapLevel();E.setRenderTarget(pe),E.getClearColor(qe),Ge=E.getClearAlpha(),Ge<1&&E.setClearColor(16777215,.5),E.clear(),pt&&Ue.render(q);let ke=E.toneMapping;E.toneMapping=pn;let He=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),A.setupLightsView(H),Je===!0&&Ae.setGlobalState(E.clippingPlanes,H),er(M,q,H),$.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let Se=!1;for(let je=0,_t=U.length;je<_t;je++){let ht=U[je],{object:rt,geometry:Et,material:_e,group:Ut}=ht;if(_e.side===Xt&&rt.layers.test(H.layers)){let Ze=_e.side;_e.side=kt,_e.needsUpdate=!0,ql(rt,q,H,Et,_e,Ut),_e.side=Ze,_e.needsUpdate=!0,Se=!0}}Se===!0&&($.updateMultisampleRenderTarget(pe),$.updateRenderTargetMipmap(pe))}E.setRenderTarget(fe,Me,we),E.setClearColor(qe,Ge),He!==void 0&&(H.viewport=He),E.toneMapping=ke}function er(M,U,q){let H=U.isScene===!0?U.overrideMaterial:null;for(let W=0,pe=M.length;W<pe;W++){let ve=M[W],{object:fe,geometry:Me,group:we}=ve,ke=ve.material;ke.allowOverride===!0&&H!==null&&(ke=H),fe.layers.test(q.layers)&&ql(fe,U,q,Me,ke,we)}}function ql(M,U,q,H,W,pe){L!==null&&W.isNodeMaterial&&L.setObject(M,W),M.onBeforeRender(E,U,q,H,W,pe),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),W.onBeforeRender(E,U,q,H,M,pe),W.transparent===!0&&W.side===Xt&&W.forceSinglePass===!1?(W.side=kt,W.needsUpdate=!0,E.renderBufferDirect(q,U,H,W,M,pe),W.side=Dt,W.needsUpdate=!0,E.renderBufferDirect(q,U,H,W,M,pe),W.side=Xt):E.renderBufferDirect(q,U,H,W,M,pe),M.onAfterRender(E,U,q,H,W,pe)}function tr(M,U,q){U.isScene!==!0&&(U=Gt);let H=X.get(M),W=A.state.lights,pe=A.state.shadowsArray,ve=W.state.version,fe=ae.getParameters(M,W.state,pe,U,q,A.state.lightProbeGridArray),Me=ae.getProgramCacheKey(fe),we=H.programs;H.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?U.environment:null,H.fog=U.fog;let ke=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;H.envMap=se.get(M.envMap||H.environment,ke),H.envMapRotation=H.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,we===void 0&&(M.addEventListener("dispose",_n),we=new Map,H.programs=we);let He=we.get(Me);if(He!==void 0){if(H.currentProgram===He&&H.lightsStateVersion===ve)return Zl(M,fe),He}else fe.uniforms=ae.getUniforms(M),L!==null&&M.isNodeMaterial&&L.build(M,q,fe),M.onBeforeCompile(fe,E),He=ae.acquireProgram(fe,Me),we.set(Me,He),H.uniforms=fe.uniforms;let Se=H.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Se.clippingPlanes=Ae.uniform),Zl(M,fe),H.needsLights=gu(M),H.lightsStateVersion=ve,H.needsLights&&(Se.ambientLightColor.value=W.state.ambient,Se.lightProbe.value=W.state.probe,Se.sunLights.value=W.state.sun,Se.sunLightShadows.value=W.state.sunShadow,Se.directionalLights.value=W.state.directional,Se.directionalLightShadows.value=W.state.directionalShadow,Se.spotLights.value=W.state.spot,Se.spotLightShadows.value=W.state.spotShadow,Se.rectAreaLights.value=W.state.rectArea,Se.ltc_1.value=W.state.rectAreaLTC1,Se.ltc_2.value=W.state.rectAreaLTC2,Se.pointLights.value=W.state.point,Se.pointLightShadows.value=W.state.pointShadow,Se.hemisphereLights.value=W.state.hemi,Se.sunShadowMatrix.value=W.state.sunShadowMatrix,Se.sunShadowCascade.value=W.state.sunShadowCascade,Se.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Se.spotLightMatrix.value=W.state.spotLightMatrix,Se.spotLightMap.value=W.state.spotLightMap,Se.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=A.state.lightProbeGridArray.length>0,H.currentProgram=He,H.uniformsList=null,He}function Yl(M){if(M.uniformsList===null){let U=M.currentProgram.getUniforms();M.uniformsList=ls.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function Zl(M,U){let q=X.get(M);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function fu(M,U){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(U.matrixWorld);for(let q=0,H=M.length;q<H;q++){let W=M[q];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function pu(M,U,q,H,W){U.isScene!==!0&&(U=Gt),$.resetTextureUnits();let pe=U.fog,ve=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?U.environment:null,fe=Z===null?E.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:Xe.workingColorSpace,Me=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,we=se.get(H.envMap||ve,Me),ke=H.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,He=!!q.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Se=!!q.morphAttributes.position,je=!!q.morphAttributes.normal,_t=!!q.morphAttributes.color,ht=pn;H.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(ht=E.toneMapping);let rt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Et=rt!==void 0?rt.length:0,_e=X.get(H),Ut=A.state.lights;if(Je===!0&&(ot===!0||M!==Y)){let ct=M===Y&&H.id===V;Ae.setState(H,M,ct)}let Ze=!1;H.version===_e.__version?(_e.needsLights&&_e.lightsStateVersion!==Ut.state.version||_e.outputColorSpace!==fe||W.isBatchedMesh&&_e.batching===!1||!W.isBatchedMesh&&_e.batching===!0||W.isBatchedMesh&&_e.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&_e.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&_e.instancing===!1||!W.isInstancedMesh&&_e.instancing===!0||W.isSkinnedMesh&&_e.skinning===!1||!W.isSkinnedMesh&&_e.skinning===!0||W.isInstancedMesh&&_e.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&_e.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&_e.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&_e.instancingMorph===!1&&W.morphTexture!==null||_e.envMap!==we||H.fog===!0&&_e.fog!==pe||_e.numClippingPlanes!==void 0&&(_e.numClippingPlanes!==Ae.numPlanes||_e.numIntersection!==Ae.numIntersection)||_e.vertexAlphas!==ke||_e.vertexTangents!==He||_e.morphTargets!==Se||_e.morphNormals!==je||_e.morphColors!==_t||_e.toneMapping!==ht||_e.morphTargetsCount!==Et||!!_e.lightProbeGrid!=A.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,_e.__version=H.version);let en=_e.currentProgram;Ze===!0&&(en=tr(H,U,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,en,_e));let yn=!1,Vn=!1,wi=!1,st=en.getUniforms(),gt=_e.uniforms;if(y.useProgram(en.program)&&(yn=!0,Vn=!0,wi=!0),H.id!==V&&(V=H.id,Vn=!0),_e.needsLights){let ct=fu(A.state.lightProbeGridArray,W);_e.lightProbeGrid!==ct&&(_e.lightProbeGrid=ct,Vn=!0)}if(yn||Y!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),st.setValue(B,"projectionMatrix",M.projectionMatrix),st.setValue(B,"viewMatrix",M.matrixWorldInverse);let Hn=st.map.cameraPosition;Hn!==void 0&&Hn.setValue(B,ft.setFromMatrixPosition(M.matrixWorld)),I.logarithmicDepthBuffer&&st.setValue(B,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&st.setValue(B,"isOrthographic",M.isOrthographicCamera===!0),Y!==M&&(Y=M,Vn=!0,wi=!0)}if(_e.needsLights&&(Ut.state.sunShadowMap.length>0&&st.setValue(B,"sunShadowMap",Ut.state.sunShadowMap,$),Ut.state.directionalShadowMap.length>0&&st.setValue(B,"directionalShadowMap",Ut.state.directionalShadowMap,$),Ut.state.spotShadowMap.length>0&&st.setValue(B,"spotShadowMap",Ut.state.spotShadowMap,$),Ut.state.pointShadowMap.length>0&&st.setValue(B,"pointShadowMap",Ut.state.pointShadowMap,$)),W.isSkinnedMesh){st.setOptional(B,W,"bindMatrix"),st.setOptional(B,W,"bindMatrixInverse");let ct=W.skeleton;ct&&(ct.boneTexture===null&&ct.computeBoneTexture(),st.setValue(B,"boneTexture",ct.boneTexture,$))}W.isBatchedMesh&&(st.setOptional(B,W,"batchingTexture"),st.setValue(B,"batchingTexture",W._matricesTexture,$),st.setOptional(B,W,"batchingIdTexture"),st.setValue(B,"batchingIdTexture",W._indirectTexture,$),st.setOptional(B,W,"batchingColorTexture"),W._colorsTexture!==null&&st.setValue(B,"batchingColorTexture",W._colorsTexture,$));let Gn=q.morphAttributes;if((Gn.position!==void 0||Gn.normal!==void 0||Gn.color!==void 0)&&F.update(W,q,en),(Vn||_e.receiveShadow!==W.receiveShadow)&&(_e.receiveShadow=W.receiveShadow,st.setValue(B,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&U.environment!==null&&(gt.envMapIntensity.value=U.environmentIntensity),gt.dfgLUT!==void 0&&(gt.dfgLUT.value=v0()),Vn){if(st.setValue(B,"toneMappingExposure",E.toneMappingExposure),_e.needsLights&&mu(gt,wi),pe&&H.fog===!0&&Te.refreshFogUniforms(gt,pe),Te.refreshMaterialUniforms(gt,H,te,J,A.state.transmissionRenderTarget[M.id]),_e.needsLights&&_e.lightProbeGrid){let ct=_e.lightProbeGrid;gt.probesSH.value=ct.texture,gt.probesMin.value.copy(ct.boundingBox.min),gt.probesMax.value.copy(ct.boundingBox.max),gt.probesResolution.value.copy(ct.resolution)}ls.upload(B,Yl(_e),gt,$)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ls.upload(B,Yl(_e),gt,$),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&st.setValue(B,"center",W.center),st.setValue(B,"modelViewMatrix",W.modelViewMatrix),st.setValue(B,"normalMatrix",W.normalMatrix),st.setValue(B,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let ct=H.uniformsGroups;for(let Hn=0,Ti=ct.length;Hn<Ti;Hn++){let $l=ct[Hn];ie.update($l,en),ie.bind($l,en)}}return en}function mu(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.sunLights.needsUpdate=U,M.sunLightShadows.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function gu(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return Z},this.setRenderTargetTextures=function(M,U,q){let H=X.get(M);H.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(M.texture).__webglTexture=U,X.get(M.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:q,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,U){let q=X.get(M);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,q=0){Z=M,O=U,G=q;let H=null,W=!1,pe=!1;if(M){let fe=X.get(M);if(fe.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(B.FRAMEBUFFER,fe.__webglFramebuffer),j.copy(M.viewport),de.copy(M.scissor),xe=M.scissorTest,y.viewport(j),y.scissor(de),y.setScissorTest(xe),V=-1;return}else if(fe.__webglFramebuffer===void 0)$.setupRenderTarget(M);else if(fe.__hasExternalTextures)$.rebindTextures(M,X.get(M.texture).__webglTexture,X.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ke=M.depthTexture;if(fe.__boundDepthTexture!==ke){if(ke!==null&&X.has(ke)&&(M.width!==ke.image.width||M.height!==ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");$.setupDepthRenderbuffer(M)}}let Me=M.texture;(Me.isData3DTexture||Me.isDataArrayTexture||Me.isCompressedArrayTexture)&&(pe=!0);let we=X.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(we[U])?H=we[U][q]:H=we[U],W=!0):M.samples>0&&$.useMultisampledRTT(M)===!1?H=X.get(M).__webglMultisampledFramebuffer:Array.isArray(we)?H=we[q]:H=we,j.copy(M.viewport),de.copy(M.scissor),xe=M.scissorTest}else j.copy(ne).multiplyScalar(te).floor(),de.copy(Ce).multiplyScalar(te).floor(),xe=et;if(q!==0&&(H=P),y.bindFramebuffer(B.FRAMEBUFFER,H)&&y.drawBuffers(M,H),y.viewport(j),y.scissor(de),y.setScissorTest(xe),W){let fe=X.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+U,fe.__webglTexture,q)}else if(pe){let fe=U;for(let Me=0;Me<M.textures.length;Me++){let we=X.get(M.textures[Me]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Me,we.__webglTexture,q,fe)}}else if(M!==null&&q!==0){let fe=X.get(M.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,fe.__webglTexture,q)}V=-1};function Jl(M){let U=X.get(M);return(U.__readFormat!==M.format||U.__readType!==M.type)&&(U.__readFormat=M.format,U.__readType=M.type,U.__formatReadable=I.textureFormatReadable(M.format),U.__typeReadable=I.textureTypeReadable(M.type)),U}this.readRenderTargetPixels=function(M,U,q,H,W,pe,ve,fe=0){if(!(M&&M.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me){y.bindFramebuffer(B.FRAMEBUFFER,Me);try{let we=M.textures[fe],ke=we.format,He=we.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);let Se=Jl(we);if(Se.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Se.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-H&&q>=0&&q<=M.height-W&&B.readPixels(U,q,H,W,ce.convert(ke),ce.convert(He),pe)}finally{let we=Z!==null?X.get(Z).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(M,U,q,H,W,pe,ve,fe=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Me=X.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ve!==void 0&&(Me=Me[ve]),Me)if(U>=0&&U<=M.width-H&&q>=0&&q<=M.height-W){y.bindFramebuffer(B.FRAMEBUFFER,Me);let we=M.textures[fe],ke=we.format,He=we.type;M.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+fe);let Se=Jl(we);if(Se.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Se.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let je=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.bufferData(B.PIXEL_PACK_BUFFER,pe.byteLength,B.STREAM_READ),B.readPixels(U,q,H,W,ce.convert(ke),ce.convert(He),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let _t=Z!==null?X.get(Z).__webglFramebuffer:null;y.bindFramebuffer(B.FRAMEBUFFER,_t);let ht=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await hh(B,ht,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,je),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,pe),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(je),B.deleteSync(ht),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,U=null,q=0){let H=Math.pow(2,-q),W=Math.floor(M.image.width*H),pe=Math.floor(M.image.height*H),ve=U!==null?U.x:0,fe=U!==null?U.y:0;$.setTexture2D(M,0),B.copyTexSubImage2D(B.TEXTURE_2D,q,0,0,ve,fe,W,pe),y.unbindTexture()},this.copyTextureToTexture=function(M,U,q=null,H=null,W=0,pe=0){let ve,fe,Me,we,ke,He,Se,je,_t,ht=M.isCompressedTexture?M.mipmaps[pe]:M.image;if(q!==null)ve=q.max.x-q.min.x,fe=q.max.y-q.min.y,Me=q.isBox3?q.max.z-q.min.z:1,we=q.min.x,ke=q.min.y,He=q.isBox3?q.min.z:0;else{let gt=Math.pow(2,-W);ve=Math.floor(ht.width*gt),fe=Math.floor(ht.height*gt),M.isDataArrayTexture?Me=ht.depth:M.isData3DTexture?Me=Math.floor(ht.depth*gt):Me=1,we=0,ke=0,He=0}H!==null?(Se=H.x,je=H.y,_t=H.z):(Se=0,je=0,_t=0);let rt=ce.convert(U.format),Et=ce.convert(U.type),_e;U.isData3DTexture?($.setTexture3D(U,0),_e=B.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?($.setTexture2DArray(U,0),_e=B.TEXTURE_2D_ARRAY):($.setTexture2D(U,0),_e=B.TEXTURE_2D),y.activeTexture(B.TEXTURE0),y.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(B.UNPACK_ALIGNMENT,U.unpackAlignment);let Ut=y.getParameter(B.UNPACK_ROW_LENGTH),Ze=y.getParameter(B.UNPACK_IMAGE_HEIGHT),en=y.getParameter(B.UNPACK_SKIP_PIXELS),yn=y.getParameter(B.UNPACK_SKIP_ROWS),Vn=y.getParameter(B.UNPACK_SKIP_IMAGES);y.pixelStorei(B.UNPACK_ROW_LENGTH,ht.width),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,ht.height),y.pixelStorei(B.UNPACK_SKIP_PIXELS,we),y.pixelStorei(B.UNPACK_SKIP_ROWS,ke),y.pixelStorei(B.UNPACK_SKIP_IMAGES,He);let wi=M.isDataArrayTexture||M.isData3DTexture,st=U.isDataArrayTexture||U.isData3DTexture;if(M.isDepthTexture){let gt=X.get(M),Gn=X.get(U),ct=X.get(gt.__renderTarget),Hn=X.get(Gn.__renderTarget);y.bindFramebuffer(B.READ_FRAMEBUFFER,ct.__webglFramebuffer),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Ti=0;Ti<Me;Ti++)wi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(M).__webglTexture,W,He+Ti),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,X.get(U).__webglTexture,pe,_t+Ti)),B.blitFramebuffer(we,ke,ve,fe,Se,je,ve,fe,B.DEPTH_BUFFER_BIT,B.NEAREST);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(W!==0||M.isRenderTargetTexture||X.has(M)){let gt=X.get(M),Gn=X.get(U);y.bindFramebuffer(B.READ_FRAMEBUFFER,C),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,D);for(let ct=0;ct<Me;ct++)wi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gt.__webglTexture,W,He+ct):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gt.__webglTexture,W),st?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Gn.__webglTexture,pe,_t+ct):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Gn.__webglTexture,pe),W!==0?B.blitFramebuffer(we,ke,ve,fe,Se,je,ve,fe,B.COLOR_BUFFER_BIT,B.NEAREST):st?B.copyTexSubImage3D(_e,pe,Se,je,_t+ct,we,ke,ve,fe):B.copyTexSubImage2D(_e,pe,Se,je,we,ke,ve,fe);y.bindFramebuffer(B.READ_FRAMEBUFFER,null),y.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else st?M.isDataTexture||M.isData3DTexture?B.texSubImage3D(_e,pe,Se,je,_t,ve,fe,Me,rt,Et,ht.data):U.isCompressedArrayTexture?B.compressedTexSubImage3D(_e,pe,Se,je,_t,ve,fe,Me,rt,ht.data):B.texSubImage3D(_e,pe,Se,je,_t,ve,fe,Me,rt,Et,ht):M.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,pe,Se,je,ve,fe,rt,Et,ht.data):M.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,pe,Se,je,ht.width,ht.height,rt,ht.data):B.texSubImage2D(B.TEXTURE_2D,pe,Se,je,ve,fe,rt,Et,ht);y.pixelStorei(B.UNPACK_ROW_LENGTH,Ut),y.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ze),y.pixelStorei(B.UNPACK_SKIP_PIXELS,en),y.pixelStorei(B.UNPACK_SKIP_ROWS,yn),y.pixelStorei(B.UNPACK_SKIP_IMAGES,Vn),pe===0&&U.generateMipmaps&&B.generateMipmap(_e),y.unbindTexture()},this.initRenderTarget=function(M){X.get(M).__webglFramebuffer===void 0&&$.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?$.setTextureCube(M,0):M.isData3DTexture?$.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?$.setTexture2DArray(M,0):$.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){O=0,G=0,Z=null,y.reset(),ge.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}};var eo=class extends Fs{constructor(e){super(e),this.type=Vt}parse(e){let a=function(g,b){switch(g){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(b||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(b||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(b||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(b||""))}},m=function(g,b,E){b=b||1024;let L=g.pos,P=-1,C=0,D="",O=String.fromCharCode.apply(null,new Uint16Array(g.subarray(L,L+128)));for(;0>(P=O.indexOf(`
`))&&C<b&&L<g.byteLength;)D+=O,C+=O.length,L+=128,O=String.fromCharCode.apply(null,new Uint16Array(g.subarray(L,L+128)));return-1<P?(E!==!1&&(g.pos+=C+P+1),D+O.slice(0,P)):!1},f=function(g){let b=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,S=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*FORMAT=(\S+)\s*$/,P=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,C={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,O;for((g.pos>=g.byteLength||!(D=m(g)))&&a(1,"no header found"),(O=D.match(b))||a(3,"bad initial token"),C.valid|=1,C.programtype=O[1],C.string+=D+`
`;D=m(g),D!==!1;){if(C.string+=D+`
`,D.charAt(0)==="#"){C.comments+=D+`
`;continue}if((O=D.match(E))&&(C.gamma=parseFloat(O[1])),(O=D.match(S))&&(C.exposure=parseFloat(O[1])),(O=D.match(L))&&(C.valid|=2,C.format=O[1]),(O=D.match(P))&&(C.valid|=4,C.height=parseInt(O[1],10),C.width=parseInt(O[2],10)),C.valid&2&&C.valid&4)break}return C.valid&2||a(3,"missing format specifier"),C.valid&4||a(3,"missing image size specifier"),C},h=function(g,b,E){let S=b;if(S<8||S>32767||g[0]!==2||g[1]!==2||g[2]&128)return new Uint8Array(g);S!==(g[2]<<8|g[3])&&a(3,"wrong scanline width");let L=new Uint8Array(4*b*E);L.length||a(4,"unable to allocate buffer space");let P=0,C=0,D=4*S,O=new Uint8Array(4),G=new Uint8Array(D),Z=E;for(;Z>0&&C<g.byteLength;){C+4>g.byteLength&&a(1),O[0]=g[C++],O[1]=g[C++],O[2]=g[C++],O[3]=g[C++],(O[0]!=2||O[1]!=2||(O[2]<<8|O[3])!=S)&&a(3,"bad rgbe scanline format");let V=0,Y;for(;V<D&&C<g.byteLength;){Y=g[C++];let de=Y>128;if(de&&(Y-=128),(Y===0||V+Y>D)&&a(3,"bad scanline data"),de){let xe=g[C++];for(let qe=0;qe<Y;qe++)G[V++]=xe}else G.set(g.subarray(C,C+Y),V),V+=Y,C+=Y}let j=S;for(let de=0;de<j;de++){let xe=0;L[P]=G[de+xe],xe+=S,L[P+1]=G[de+xe],xe+=S,L[P+2]=G[de+xe],xe+=S,L[P+3]=G[de+xe],P+=4}Z--}return L},p=function(g,b,E,S){let L=g[b+3],P=Math.pow(2,L-128)/255;E[S+0]=g[b+0]*P,E[S+1]=g[b+1]*P,E[S+2]=g[b+2]*P,E[S+3]=1},v=function(g,b,E,S){let L=g[b+3],P=Math.pow(2,L-128)/255;E[S+0]=$n.toHalfFloat(Math.min(g[b+0]*P,65504)),E[S+1]=$n.toHalfFloat(Math.min(g[b+1]*P,65504)),E[S+2]=$n.toHalfFloat(Math.min(g[b+2]*P,65504)),E[S+3]=$n.toHalfFloat(1)},x=new Uint8Array(e);x.pos=0;let u=f(x),T=u.width,R=u.height,_=h(x.subarray(x.pos),T,R),w,A,z;switch(this.type){case Yt:z=_.length/4;let g=new Float32Array(z*4);for(let E=0;E<z;E++)p(_,E*4,g,E*4);w=g,A=Yt;break;case Vt:z=_.length/4;let b=new Uint16Array(z*4);for(let E=0;E<z;E++)v(_,E*4,b,E*4);w=b,A=Vt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:R,data:w,header:u.string,gamma:u.gamma,exposure:u.exposure,type:A,colorSpace:Un,minFilter:nt,magFilter:nt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Wh=Ql("Iz9SQURJQU5DRQpGT1JNQVQ9MzItYml0X3JsZV9yZ2JlCgotWSAxMjggK1ggMjU2CgICAQCAmZmampudpbfYgJKhrba8wsXHycjFwr24sq2oo6CempeVlJKRkJGRk5WYm56ho6Wmp6ioqqqsr7O2trW0s7KztLSzsa6sqqqrrK2trauqqainpqWioJ2bmZeVlJWXmZ2go6SmqKqrrK2vsrW5ury6t7OvqqKVhuvIr6Ogn5+enZ0fnp+iqbTD2PGFk6CsuMHJzs7KxsTExMK/urKrpaCcmoaYIpqdoKOlp6mrra+wsLCvsLGysbCvr66ura2ur7CytLW3uLqEuwK5t4S2L7W0sq+rqaakoqCenJqZmp2gpKqxt7q6vMHFys/U1tPNw7esoZWJ+uPOva6jnJmZgIqLi4yNj5enxXSFk52lqq6xs7Szsa6ppJ+bl5OQjoqIhoWDgoKDhIWHiYuOkJGTlJWWl5iYmpyfoaKioaCgoaKioqCem5mZmpubnJyamZiXlpaVk5COjIqIh4aGiIqNkJOUlZeZmpucn6Ckpqipp6SinpqSh3nWuKGWkpGQkI+PH5CRlZumtcfceoaRnaavtrq6t7Oys7KxrqiinJaSjoyFiimLjI+Rk5WYmZudn6Cfnp6foKCgn56dnZ2cnJ2dnp+hoqOkpqenpqako4WiLqGfnJqXlZSTkI6Mi4qKjI6Slpyho6Smqq6yt7u9vLiwpp2TiH3m0L6tn5WOi4o6gYKCg4SHjp65bXyIkpmeoaSnqKelop6ZlZCMiIWCf318e3l5eHl6e31/goSFh4mJi4uMjY6PkZSWloWVPpeXlpWSkI6Oj5CQkZGPjo6NjIyLiYeFg4KAfn5+gIKFiIqLjY6QkZKTlZeanJ2fnJqXlI+IfnHIrJeMiYeHhIZ/iIyTnaq6znJ9iJKcpKqurauop6enpaOemJKNiYaDgoGBgYCBg4WHiYuNj5GTlJWUlJOUlZWVk5OTkpGRkJGSkpOUlpaXmJmamZmYl5aWlZWVlJOQjoyKiYiGhIKBgICChYeLkZaYmJqdoaWpra+uqqKZkYh/ddfEsqOWjIWCgYl67XuSeu97iXoCAgEAgJWYm6yCzICMjIPoyq+XhezX2fWNnKSqq6qlnpqamZidp7G7v76/wb+4sa2qpZ+cm5aTk5SUk5GQlJmcmpiWlZWWlZSVl5eVl5eXlJCUlJifoaCkqayzu8LHxsTHxL64saqkn52dn6WoqKipppyQgezvgpOpwuKAjI+F35rEpKGggKCs0Yi24oOMhevPtZuD5NXl/pGls7Kurq6po6Gip6utsrm+xMPBvbq3squknpqYlpKPjo6PkpOTlZaVk5SWlZORkJWWk5KRkJCOjIqLjY6QkZGUmJ2hpquys7jBvrWxrKain56dnJ6ho6esq6CPge7h5P2RprvU8IH53LuW46+YMYeJjZ93t3J9fXbStp2IedjFxt+AjZOYmZeSjouKiomOl5+nrKurraymoZ6blZCNjIiEhYCEg4KFioyLiYeGh4eHhoeIiYiJiYqHhIeHipCRkZWZnKGprrSysbSxrKahmpWQjo6RlpmYmJmWjoN22dt3hpqxzXR+gHnLjraWkpKSoMR/p812fnfUuaOLd9DE0uiElqKgnJ2dmZORkpaZnKCmq7CwraqopaCalI+LioeEgoCBgkuEhYWHh4aFhoeGhYODh4iFhIOCgoB/fX6AgYODg4WJjJCUmaChpq2qop6ZlpGPjo6Mj5GTlpuZj4F128/Q5oOVp73Wc97FqYnRoouAgIGFlnCranR1bsSrlH9xybi5z3eCiI2OjYmFgYCCgYWMk5mdnZ2gnpmUkY6Jg4GBfXt7fHt6enl8gIKCf319fn5+fX+Af3+BgYJ+e319gIWGh4qNkJWcoqelo6akn5qVj4qGhYWHi46Ojo+MhXtvy81vfpClwG12eHG+hayNiYiAiZi8d5q+bnVvxayWgW/Ct8PYeouWlZGRkY6Jh4eKjZCUmp6joqCenJmUj4mFgoB+enh3eHl6e3t9fX17fH19fHp6fX57enp5eXd1dHV3d3l5eXt+gYWJjZOUmZ+blJGOioaEhISDhYeJjJCPhXhuzcLC1XmLnK/Gas62nIDGmYOEeoJ7hHyFe4R63HuCeoV7hHyCe4d6Bnt7e3x8fIV7hHrde4R6hXsBfIR7g3oCAgEAP5ybr7mRlIHAhcetuYi82tbHspiEiJaenZubmpWgt8bKysO4sKOblI+OkJejs7e7ure2t7i9u7OtraqlpqOgoYSfa6KjpKWnr7S8v8C3ubu6trO5qZyWk5KUl6CmsLe+wLiup6uwr6+ysKiYiJGs1/D47s6MtrPUkc2HmYiIp6Ci2Kf1lZbG8K6w3pTB6+XPu6aUiI2hu7u1sKyqrLO5wMG5raGZlZOTlJefqa+2hbpNuLixrKinp6KjoJ2dnJqbnZycnZyfpKSnqaqrrrW0s7OuqaWbk4yKiIyPlqGqs7axqZ+cmpyfoJ2RhoeUqb7X7OS9luC0tvezgojSkMCAj46ip4GFdK96tp6pe6nCv7KgiXh7h46OjIuKh5GlsrW2sKaek4uGg4KEipSho6eopaSkpqqoop2cmZWVk5CRj4+Qj5KTlZWXnaGorbCnp6mopKGkmI2HhYSGiJGXn6WsrqaemJqenp+hoJiKfIObwdbf17p/pqTDhLt6inp9mJIvlciZ24SEstyfocqGrtHOuqiWhnyAkaippJ+bmpyiqK6vqZ6TjIiGhYeJkJiepKiEpxClpZ6bl5aWkpORj4+NjI2PhI45kJWUmJmbm56ko6KinpmVjYZ/fHt/gYeRmaGjnpePjIqMj5GOg3p6hZmswdXOq4nOpKbfoXN5vYSygIWDl5x4e2uicqmTnXGbtLKlk35vcn2CgoGAfnyHmaWpqaKZkomAfHh5fIGKlpeam5iWlZidnJaRkI2Ji4iFhYSFhYaJiouMjZGUmaCjm5ydnJiVloyDfXt6fH6GjJOZoKKbk46Qk5OUlpSNgHR6kLPH0Miud5yZtnyvcn9xdY+HL4u8kcx6eqbNlZa8faHAvKuainxzd4abnZiTkI+Rlpyio52TioN+fX1+gIaOk5mchJtNmZiSj4yLi4eJhoSFhIKDhYSEhYSGi4qNj5CRk5mYlpaSjYqCfHZ0cnV4foaOlZeTjIWDgIGEhYJ5cXF7j5+yxb+efsCams6UanCwe6cMenp6e3x8fHt7enp66XsJenp6e3t8fHx7hHoFe3t8fHuEeut7hHoGe3x8e3t6AgIBAICanoCNiMrssrSM2vXAhMbyqrewpZWZoquwr7GxuLiuoZKMiIeNn66+ysW4raWimpSWl5ymr7Cxs7m7vMS+trS6urm3uLe2ure1s66tpqSblZOXoKm2x8vMxLGgmJeYmqG0vsjK68S63fWEhvr/gdnG0829oOKE7N2vxquHqL6tp4DHroWd8+qo2qrl6dam6oKrtdDdzLanrMXGxLywt76/rJ2Uk5SdrrrCxcO6q6CYmZiYm5+hp6+xt7m0srKyr6yrsLCsrbOztbSzsrGrqKWclpKMi4+Xo6+3u7Spn5eZoqqvuLqtoJWTkZWYmpOSoLXCvpXb3pvT8taRwqXJzIbM54CNkHZ+ebXYo6R+wtqsd7TbmKWflYeLkpugn6CgpqWdkoN8enp/j5yrtLGmnZaSjYeIio6WnqCho6ipqrKspqSoqKempaakqKWjopyblpSMhoWJkZqltLe5saCRiomJjJKjrLO13riqyuB4eeLndcSyvrqqkMx00cmftZx5lKmemIC3nXaL0tKZxZnN0LyS1HWapLrEtaOYnbS2tKyhp66unI+HhoePnqixs7Gpm5KKi4qKjJCRl56gpaejoqKhn5ybn5+cnaGhpKKhoKCamJWNiYV/foKJlJ6kqKOYj4mKk5qfpaabkIeEg4aJjIaFkqSuqobJy4u82L6DsJa5tna41YCDhW5zb6fKlpd0ssmgbqfKjJeRin2BiZGXlJaVm5qRhnpzcXB1g4+dp6WbkoyJhX6AgYeOlZeXmZ2fn6aknJufn56cnJuan5qZl5ORjIyEf36BiI+apqqrpJWGgH5/gYeXn6ap17qoyd94eeLmdMOxvLinkMluwrqTqZFvh5yTjICqkm2Avr+Ot4y+wa6GxG2NmKu0ppeNk6iqqqKXnKKjkoV9fX6Fk5ykpqSdkIeAgYCAgoWGjJKUmZuXlpaWk5GPlJOQkZWVl5aVlJOPjYuDf3x2dXh/iZKYm5aMg31/iI+SmJiOhHx6eHt/gXt6hZegnHq5vICtxa54pIusqWyoxwl6ent8fHt6enqFe4J61XsJfX5+fn9/fn5/hn4UfX17enp6e3x8e3p6ent8fHt6enqFewF65HuCeoV7B3p6ent8e3oCAgEALaiqp4jH06766OiXyuCty7qJ3JS40bqD8JS6ubG9sIads6amusW6ppaLi5SgrYSzgK+imZWOjI2Tnp+jpKOkpqeppqahn6WclZCPlKGir7a9vbmzqZaRlp2swMSzmpOVna29yNuAwdnw9/T8783aw6Kxr6f87I6P5dmtiPaI5ajEzZDfpKWR++nzr4XT1abs9KrEt6OSj6urpqGpx8Clmpmerbu8sJ2RgoCAgoSbjJGSEZCPi4T++/+ChomMjY6Oj4+NhI46i4iGg4OFiIyPjYyJhYKC//r4/Y6hsbexpZugpJyss62vrqeZhZKmtbiU34i52LPitpLt44CvtNuCmICam5d4ssKe487OiLfLm7anfMmGpbuoeduGpqefqaB8jaGXlqexqJWIfn2FkZuhoqKhnpOLiIJ/gIWPkJSUk5OWlpeWlJGPko2IgoGEj5KepKqppqGYh4OIj5uusaKMhoeOnKq02HexxNfZ1eDUt8OukJ6el+TWg37LxZ1723nQl0Gzt4DIlpeC39Dbnne7vZTV3Jivo5KDgZqalZOata+XjYyRnaqqn46DdXNydXiOgIWGhISBeu7s73p+gIKEhYaGhoWFOoJ/fXp6e36Bg4F/fHh2dOPe3uSBkqCmn5aOk5aOm6KdnpyViHiDlaKmhsx7psOhz6aD0sl1n6XCcYmAjo+LbaS1k9K8unyqu4+pmHG6fJirmnDKe5mblp6Vc4SWjIycpJyMf3Z0fIeRl5qYmJSKhIF7d3h+h4iMjYmKjo6OjYuIhomEf3l5e4SJlZqenpuWjX56f4WRo6aYg31+hJKfqdx2rsHT1dLc0bXBrI6bm5Xh1X1zt7ORcshuv4uAp6h0t4uMecy/yZNurK2IxsyMopiIeniOjoqIj6mjjYOBhpKdnZKDemxqamxxh3l+f39/fHbo5up3e32AgoODhIOCg4KCgn58enh3eHp8fXt5dXFua9DNztJ3h5Sak4uDh4mDjpWRkpGKfW93hpOVerxvlrKUv5p5wbhtlJmxZ34Nenp7fHt6enp7e3t6eoR7AXqFewF6zHsBfI9/F359fHx7enp7e3x6enp7fHt6ent7e3p6hHuCeqR7g3qde4R6l3sBeoR7gnqEewV6ent8ewICAQCAqbnw3dGuofKbuYHSxYLOqtC/jYujobismbGqpKWtuLixqbW2o6WblrjAuKaXi42bqLC2trq2tKupoqGem5eWlZWbmJ6jpqu0uL29wse/u7CdkpOgssHHva2Uj5Kanr3ApKOrtr/Fv7W6je+svraT/Mb69I/pjr24mfK0pdjuy6CAtdGI06CSgbCk7eHT4cqv27P8jLy9rZihrKSgpaaVkIiF+uvm+Y+Gl6Stt7evpZ2UjILs9Pb58+TVysTBx8nGxsG8ubnG0NbZ3eLr6/D5g42TnKWzur24rqOQiYDt+Y6fo9mHiIf3zrellpqus6Hugq+/kL+M1bXNtcTp+KmGgqeAm6nWxL+ektmMqXW7sXa8l7qrgH2RkaacjaGblpadpqagmqSkk5SKiKWspZaJfn+Ml5+kpKmlo5qXkpGPjIiHhoaMio+TlpmipaqprrKsqZ6OhIWRoK2yqZuGgYSLjqmsk5KZoqiuqKCog96drqaH5LTj34DQfqqpidahl8fTtJGAprp5wJGDcpyU18e7y7ecw6Dlf6mpnImRm5SRlZWHgXp239XT6Id+jpumsLGon5aOhn3i6Ort59rMwr26wMG/vrq1s7O/yM7Q1Njg4ebvfoeMlJyosLOto5eFfXTZ44CRlch9f3zkvKaWiIucoJDZdpyrga9+vaK7pa/O4Zl5dJaAkJ7Ds7KThsaCnWupomyvi6qddnOFhZqRg5WRjI2SmpuVj5mZiImCgJmfm46AdXeCjJSZmp+bmJCOioeFg4B+f36DgYaLj5CYnJ+eoqShn5SFfH2IlqOnn5J+eXyChZ2fh4eNlZufmpOdgNybqqCD3a3WzHW7cZuefsKSi7vAo4aAnKptsYd5Zo6KybervaqPtJTVdZuckH+GkIuHi4t+eHFt0MrL4YN7ipeirK6mnZWNhHvf5ebo49bJv7q3vb67u7ezsbG9xcvN0dXc3uPtfIWKkpqmrq+qn5KBeXDR2HiGi7t1dXPUsZuKfoCPk4XJa46cdqJ0rpWsl6G9zo1waooKenp7e3p6e3t7eoR7AXrae4J8hH0jfHx7ent7fHt6e3t7enp7e3p6e3x6ent8e3p6e3t6ent7e3qPe4R6jXuceo57gnqEe4N8iXsBeoR7DXp7e3t6ent7enp7fHsCAgEAPKXz/Iqnpu7yx8XL5PDHx4aPqrKtqLasoqSxwcK4qq22wbixtLi9vMW2o5iau8S6qZeOjJelsLO2tLOzs4SwgLKxsrGzuLe0tbKvo5eOkZ6uv8LCrJWPk5vDxbGzv7yvq7K9wLSoqrK/wbSrrrDYxo3RrrTZ9euC0dHb+qT2/8at1u6f54CtpJv0h76224zmvcOShr3EqJqalIz2w96BlKy5vKiUh4Lrz7Gcm629ysvX4NCytdnp8fLm2tTt/YH6QPLk0+P1+frp3tLU4uXdz8W6r6KZk5iruszvhZCku8TDsMipievIu8TCwrOon/iOrJ7OicCVs5ja8aW/zLy076uAltzgfZmV1d61r7bQ2rKyeYGYoJyYo5uUlKCtsKebnaavp5+jpqqpsaOTiIqnrqaXh4B/iJSeoaSjoaKinp2enZ+foJ6gpKSioqGck4qBhI+era+vnIiChIyvsJ+gqaebmJ6nqZ+Ulp2oqp6Ym57BsH69m6DE3tJzvr/B3Zfh4bKAnr/RkNJwmZWL13quo8N+06qwg3qrsZeLi4V92rTQe42ksbShjoJ84sirl5WmtcHEztfIq67P3+bn29HL4fB77+jby9rr7/Hg1cnL2NzUxr2yqJuUjpOkssLifombr7i5qb+Ee+C9rbWzsqOYkeJ/m468e6qFo4jC2ZWptauj05mAi8zMc46Jw8ynoajByqSjcHiLk5CPmJGKipSgopuQkpqjm5aZm56dpJiKf4Gbo5uOfnd2gIuTl5iZl5eXlJKVlJOUlZOVmJiXlpaRiYF4e4aToKKikX96e4Kio5OTm5mPjJGZm5KHiZCZm5GLjpCwoHOvjJCyzcBorrCwyI3SzKSAlK28hcRmi4uAwm6hl7F0xJ2heXKfpY2BgHtzy63MeYuirrGfjYB63sWolJKisLu9yNDDp6nI19/g1cvF2uh46eHUxtTl6evb0MXG09fPwbito5eQi5Girr3be4aXq7W2pr1+ddazo6mmpJeNhtF1j4Oucpx7l36xyoqcpp6XwYwNenp7e3p7e3p6e3t6euR7H3p7e3p6e3x6ent7enp7enp7e3p6fHt6e3t7ent7e3qLe4N6iXuXegF7m3qIe4J8iXsTent7e3p7e3t6e3t6ent7enp7ewICAQCAp6Tauf3t5ubekNXKwOimtqiuuKyorrnDvbKrssPFt7C5wbmytr69u7izv9LLl5m4uLm0o5WNj5aepq2wsrOws7Czs7Sws6uimZGPmqmyuL65pZGRmLXKx7+4u7q6vrWts8O6p6u1w7yroqe0uLexnqnIi9nNzMifhPzK9bWh55eAqeWxo8PXpaPy1f3imtW/su+tt5uYq5jZs/KRrruqjfTGrqious/p6uqGlZb+8PWNkoiFj4rk+oKGi4WAgIqOkoeBgI6RkIWBgIiOhv/+/vjw7v+G+N7g79/Ov8GsmpvC64qfvL6rneuakbjRqJq4ouSeqcaPxNbg2Pas3paexbmAl5PEqeTR0tLHg8G0rNSVpJieppyZnqiwrKKborCwpJ6mraagpKqpqKeirb63iImkpaaik4Z/goiQl5yeoaGeoaCioaOfoJqSioOBjJmhpqumlYODiKKzsKijpaSlqaCan6yklJafq6WWj5Sfo6GdjZazfMS3trWQdeO42KGTy4aAmsyclK6+lpPWwebJi8KroNucpo2JmonCp+aNqbSkh+rAqaKissbf4OCAjo/z5euGi4J/iYTc73yAhX96e4OIi4F8eoiLi4B7e4KIgfb09O3l4/WA69TW49XFt7illJS43oOXs7Smmvabg6i+mYynktCOmLWArsLKv9+cxYePsaaAjYezndO/wsO3ebSnnsSIl42Um5KPlJujoJiRmKSkmpOboZqVmJ6dnJqWobGqf3+YmpuWin12eX+FjJKTl5eUlZWWl5mUlZCJg3p4gpCWmqCbi3t7gJakn5iWmJaXmpONkp6Wh4mSnJeKg4eRlJSSgoqjcbaopaeEatCsxJKLt3qAkLmNip+ri4fBsta3f7SeksyQmYJ/j361oeKLp7Kihue+pp6ersHZ2tp9iozt4OWCh398hoHX6Hl9gXx4eH+FiX96d4SIh315eH6Ffu/v7ufg3u995s7P3NDBs7OikZK23IKWsLOkmveYepyyjYKaiMCBi6h3oLO8rs2StX2FopgOent7enp7enp7e3p7e3rlex56e3t6e3x6ent7ent7ent7ent7ent7enp7e3p7e3qGe4N6hXuKegZ7e3t6enqGe4J6lXuHegF7jXqHewF8h3sQent7ent7enp7enp7e3p7ewICAQCAqsWmsOyC7+vnlej0oMCit7CnqbW/vLKqtcjIr6q8zbawwci4usS8vb66xMOvx82Tj6y1ubatpJmNi42SmJ2an5ubm5eUkZSYqa61ubi2qZWM96TLzbezvr67t7vCvrO8x7iqsMO7paq2vLqrpq25ubSpq7ztnIaIhIjgkIOgv72AsP2E3oPMi/jNnd/brcLotbOEs6jJs4KjuKaIyZiZwMXigof9i5mP84WPiYGXp5eFhZSdj4eI9oCDg4eD/oyOjYeFh5OSh4eDj42GiIWDgYiSloqEj5CB8IHx6veOgNnEzamVkr33mbe4l/Gu8rOb5qWY2LWO0Mfz39vLiNq0pMqAm7CVotJ22tPShs7ekKyUpZ+XmqOsq6GbpLW3npmpuKSfrbSnp7Krq6yosrGfs7mFgZqip6SclYuBfn+Gio6NkI2NjImGg4aLmp6jqaelmYeA4pS1t6Ogp6emo6asqJ6mr6KWm6ukkZahpqWWk5mjo5+WmafUjHd8eXnLgnSSrKiAoOF2ynO4fty6jsfHna3TpKF4ope0qH2esaCExJWVub7ZfYHzhZKI6ICJg3uPn5GAgI2ViYGD7Xp9foJ+8oWIh4F/gYyMgoF9iYeAgn99e4GMkIR+iYl85nvm3+qGec+7w6KPjbTpkK2tjt6d16GL0ZOIxKJ/vK/dy8O5esOklLWAkKOLl8JuysHDfL/OhZ6KmZSNkZmhn5aRmamtlI+dqpmVoqebm6WenaGdp6SUqKt9eY+XmZeRjIF4dnd+gIWDhoSEg4B9e36DkpSan56bjn940Ienp5WSmpmZl5qempCYoJWKj5yVhYmTl5WJhoyVlJCIjJfCgm5xcG+8eWmJnZqAlsxsvWiodMesgra5kp/FmJVvlouopHydrp6CwpORs7nTen7tgY6E5H2Gf3iLm419fYmRhn+A53d6e3577IGEg317fYmJgH56hoR9f3x6eH6IjYF7hYV44Xnh2eODdsu4vp6MirHlj6qqjNiWx5OAwoh9tpV2r6LMvbOrcbKYiKYMent7ent7ent6e3t6xnsBfKF7G3p7fHt7fHp7fHp7e3p7e3p8ent7ent7ent7eoV7gnqFe4Z6B3t7ent7e3qOewF6hXsBepp7B3p7enp6e3uIeoR7Fnp6ent7ent7ent7ent6ent6e3t6e3sCAgEAgL3Z9ZjVw+v1nuLpzbq+tbK4xszGtLC/y72utsjDrrzMurHEwbi+wcC+wcvBw9GxydyglqSytsHBzrvMs7i7or+itLOqxLLCtK6pq6afj5arqszLqr24ub2/wL+9w7e2xr2vvsu0q7e/r6Gruratpau2vbmrvZGDjqCR7baB36begLqGwrbM0f7lqM3j3pyYzYCzpajXmLKj+6WIrsbdhpf2/YqChJmmiI+clIaQlYaQpJ+Hh5mWhYeDgoiHi4aQjYaFgo2Uio6Ei4eHiYWCiJaXh4uek/+ChfmBmpL+g4Xq5ZKC5uHMp5qbz5a2spS9rqOW7rfkk6vEwO2Utq3s+4jkgKzC4Iq/s9Pgj8zVuamspKGms7ezop+tuKuepLSvnqm3qJ6xrqasrq2rrreur72ftMaRiZOgpa6vuqm3oaeqk6ySoqGasaKvo56anJaQgoicmLWzlqiko6ipq6moraKhr6eap7GelqGom4+XpaGZkpmip6SYqIB3f5GE1qdzypbHgKp3saS2v+TRmLbQyI6KunWhlJnOlKqc8aGFqL/UgJDt84R9fpGdgomVjoGKjoCKnZiBgpOPgIJ+fYGAhH+HhoB/fIaNhId+hYGChIB8go+RgYSWjPR9f+57kovzfX/f2op829fDoZSVxY2rqYuqmZOG16PPhJqxrNeEpJ7R43vKgKCz0YCxp8PQhr3Hq52gmpicpqunmJWiqp+SmKijlJ2qnZOlo5qgoKCeoquho7CWp7eHf4mUmaOirp2rl5ueiaCIl5ePpZeil5OQk4yGeX+RjaWjipmXlpudnZ2bnpWTn5iNmaGQiZOZjoSLl5SNh42VmZaLm3VudIV6xJxou4u3gJ5tpJinsNPBjajAuYWAq2yXi5HJkqea76CCpLrOfI3n7IB5eo2ZgIaRin6Hi32GmJR+f46LfX96eX19gXqCgnx8eYKHf4J6gX1/gX16f4yNfoGRh+56fOd3j4jsenzZ1IZ51dK/nZGSwIuopomkj4h8x5a/e4+lnsd6lpPB03K7C3p7ent7ent6e3t67HsUfHt7e3p8ent7enx6e3t6e3p7e3qHewV6ent7e4Z6BHt7enqzew56e3t6e3t7ent7enp7e4d6hHsTenp7e3p7ent7ent6e3t6e3p7ewICAQCAuuzT2Y2ntvDq0u+Gr5m5x8TDtbbK0L2wvcq9r8bKtbzNubrLur/Gv8PAxbzDsqPEodOVtvixh6WCu+LguYijjJ3/uODhtYegiaf5yMjctKDcrbSxrsC3zc7GvL29sb++rr3Hq7LEuKa0wLenrbq7tqSip7CguJKNmL3qxt/7s8iA8e/B6dnbk6e1idGMxK2ktKvcoKqSu4epx9GGnOfvjv+WsIL0j4mQqpuDjpuJlJSHlqaZhJGbjoeBioeAgoWLh4aBkIqJg4aIh4mBg5SWh4eZkIGHh/+Qno6Ml4r4lZKLnIjsioj/+9Wto6Dyqa+PrOCy4rWQi8vgx/K3mJTE0u6AqtXDxYGXpdzSwdZ6n4uotbOwpKW3vKygrLarnbO2pKq4p6e3qKyyrK+tsaiwoZSykr2Fo96eeJN0qMnIpHmRe4zipMfKoXePeZXes7PFo5LFm6Gem6qjt7ivpqeonaqpmqewmJ2topSgq6KUmaSmo5KRlZ2QpoOAia/StcfjoLOA29ew0cXEhZakfLx/sJ2VopvSm6WNt4Okv8iAld7lh/SQp3zqiIOKopR9h5ODjo6Cj56Sf4qUiIF8hIB6fH6EgYB8iYSDfoCBgYN8fo2QgoGSiXuBgfSKl4eFkIPujouFlILhg4Lz7sumnJrln6aJnMehzqOCfrjLst+kioaywNiAoMi4uHmPm87GtMZyloKeqaimmpuqrqGWoKmflKepmZ+rnJ2pnKCmoaSipJyklomliK98mM2Sbohrm7m3l2+EcoLPlri6lW2EcIrMpKS1mIi1kJSQjpuVqKihmZqaj5uajpmgi5GflYiSnJSIjZaXlYeFiI+EmXh2faLAp7XQlKWAysajwLa0e4uWca52pZKLmJPRm6KKtYGfusN8kdnfg+2LoXnlhH+GnZB7hI6Aiop+i5mOfIaRhX95gHx4eXuBfn15hYB/e31+fYB5e4mMf36Phnh9feuFk4SBjIDoi4eBkH7cgX/s6MeimZjjnaWHl7mTv5d4day+pdCZgX2mtcoDent6hHsDent6rHsDfHt8hHsDfHt8hnsDfHt8r3sNfHp7ent6e3t6e3p7eot7BXp6e3t7hXoKe3t6ent6e3t7erF7AXqGewF6hXsDent7h3oHe3t7enp7eoR7A3p7eoR7Anp7AgIBAIC8+cHuyeTS5PLLhseXsqSin52nq6ynvMvDtcfLtb7Our/NuMfDvMm4pMucqaG5uaWXqLmrpvWwgaiFpY2gjKCKnYigh6aBr/i189DLz9jk3cCsyM++n7iwvqCwv7O5ybS9vqa2w6mywa+itra6mc6Y25XUjfb3u+bY1YiynJumzoCF2uvA/cvykZDM6s/vxO66k6iQqI20z+KRhOSNjZek9YaciJyk9IuWhqKh/4mXipWPhpudhouYj4X3iYL9gImF//+Hh4SAhYqJgoqSkYKOloKCioGOmoyVm4mLh4aelPSF/4ShieiGhYX4vKyK2aaqgaeRm5rFieXS6cH0vvK3+oCt4rLYudDBzt25erOJoJOSkI6YnJ6Yq7ixpLW5pKu6qK65prSwqballLiOl5Gnp5WIl6Wak9mecpZ3lH+OfI96jHiOd5VynNuh2Lq0vcXRyrCdtbuskaafqY+dqp+lsqCpqZOirpeeq5uQoaKlibiJx4jBguDiqM/DwHugjIuVuYB3wtWt5bjbfHe21bjYsditkKGLpImtx9mKfdmGh5Cc64CVg5Wc64WPgJqa9YOQhI6JgJSWgYaRiYDtgnzzeoN/9vaBgX56foODfISLin2Ij3x8g3uIk4WOlIOGgoCWjul/836Ygt5/f3/stKWFzpyieZKDj420f9HC07LdsN2p4oCk1qfKrsW3w9Cuc6iAlomKhoWOkZSOoKylmKqsmZ+tnaGtmqijnqmai6uFjYibnIx/jZqOiciSaYxtiXSFcoRwgW6Ebotoj8mVxqumq7bCu6OSqK2ehpmTm4SPm5GXoZScmoeVoIuSnY2Dk5SXfql+t36yeM/Sm760snGUgoCJqoButMag1anKZlWmxKrIo8mnkJ6Jo4apwdOGetSDhI2X5n2Rf5GY5YKLfZeW8H+LgYqGfZCSfoOOh37of3nueH988fB+fnt3en+AeoGIh3uEi3l5gHeEkIKKkICCf32SiuN87nuUf9h7fHzmsKGDy5mfdol7h4aqecW3x6jRps+g1gl6e3p7ent6e3quew98e3x7fHt8e3x7fHt8e3yvewN6e3qKexF6e3p7enx8e3p7ent6ent7e4V6A3t7eoR7AXqFewF6hXsBeo17CXp7e3p7e3t6ep17Cnp7ent7e3p7e3uFegR7e3t6hnsIent6e3p7ensCAgEAgL3vwuPzxZStqpi3h76Iv4zBlbmeqqOnl62hwbPQvL/QucnApcCjnrqvmLS6pZy2vrmkpranqfXF7NHe6cD9q4WghaKDr/rG3uDj187Q0sq60fLku7fTzKatyqmptLOpt8invb6pw7y1vs6uxKzBptOm0aTXmeON1+H93uPS1OnagPvCmpW69sqUiuDK7Lyv85uct4aqzOON+PWbjpOKgqGSiJX/mZWMnIaMlYelmfuNjouRhJGXhYubifOAhv33iIWA+4aFgP+IiIOHkYyCko37hYOHlY6TmoGHgYOkioiH9aCTgYTrl5bq+oGK+sKxiICklL7trYy6lrygo7+K1OHlgK/Zs8/fs4eemoqmeqt8rH+uh6iPm5OXip6TrqS+q6y8p7Wula6Uj6ediaKolY2kqqaUlqSWmNqw0rrG0KvhmXaPdpF0nN2wxMfLv7m8wLiqwNzQqqa/uZadt5mZo6CXo7KVqqmXr6ikrLyftJ+ymMGYvpXFjM+AwMzjy83Av9TEgOOvi4an37aDeM2216qc55eWs4KkxNmG7uuUiIyEfZqMg47zko6GlYCGj4Kdk/KHiIWLfouQgISThOl7gPLsgYB78oB/evSCgn2BioZ8i4fxgH2Bj4iMk3uBe32chIKB6pmNe37gkI/f73uE7rmq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m6vVmZ9yiaF3j5Z8k4uJlIaNio6LnJ6lmqSZpJWqmqaInpmTpo6doI6fn5SYn56clZ2ezWzPpWptqGt2r252rM5ws8Jtsb7GvKq2s66YqqqVpqqOraKcsaJ2u8a+0LHMs7mVnqGWmZWXkKaUpZiHrJCUs4WlttSDyteEuYBzh6qFdbCFdKKButGJyoKj2nl46pjmfIaO5oSKgXiDinh9fYt3hXqJfo/tgHiIe4CEeH6AhXqGfXuJfN945O176OZ46OZ77+l56np75Ht6fumCfnqEe3vsiON+5ZOBh+uNh4bmkIx+642E5IeC2+aGyLaBfIOXiHKpnnGzoNOtpwd6e3t6e3t6sXsRfHt7fHx7fHx7fHx7e3x7e3yUewF8nHsEent7eox7A3p6e4R6CXt7ent6e3t7epB7AXqQexZ6e3p6e3p6e3p6e3p6e3p7e3p7e3t6hnsfent6e3p7e3t6e3t7ent7e3p7e3p7e3p6e3p6ent7eod7A3p7ewICAQCA+Ly5mf3AuI6luKiNrK+SpbSgq6Wgoqawsby3tcG2xbfEu8C9xsO1sLe9q8C5r8G9sri4wbu4zdi8vcbKubjBwLnAxcPE0s6syYmG6eD5783Dw8vDs8Oxvb+w19Hu3vDZ8Nrv1/LZ4s+3vbe6tLS6tq3Dsqi81JS56perrsKPpruAmYu1uIegtaCJo7GK2oix8fzvhZfmlY6Egp7viIuV7YaOi/qHkof/gZGFiYeE/I6Bg4v+goaC/Yf0h4Png/j2g/b6gvKBgviCgvmH9oCEgfmFg4OG/fqIi4mIi4qTiIqFnIONjp7+mJSP+aL8gZOA7pHewIWD9qK5m4m9wIufwK2A5a2ojOivqYKXppmAnJ+ElaKQmpaRk5egoaqlpLCmtKazq6+rs7GloaasnK6on7Csoaior6mmusKsrLS3qaevrqivsrCzwL2cuH161s7k2ruysrqyo7Kira+gxb/cy9nG28jaxd7H0L6nrKWooqOopZ6wopiqv4ao1oqcn7CDmKqAi3+lqHuTpZJ+lKiG04Sr5/PmgJHdj4h/fZfngYWO44CIhfCBi4H0fIuAg4F/8od7fYX1fYB98oHrgX7dfe7rfezufel7fe58fO2B7Hp+fO+AfX1/8e+DhoKChYSMgoN/lX2GiJfzkY6J7prxe4x644vUuIF+74+pjn6sr4CRr56A2KOeg9ylnnqOnY94kpV7i5iHkIyIiY2WmKCamaWcqJunoaSgqKaal5yikqOdlqWgmJ6epJ6brbWgoKernpyjo52jpaWns6+RrHJwx7/Syq2lp66lmKaXoqOVubLMvsu5zLvKt8+5wa+boZqdl5idm5SlmI+etH6dyoKTlKR7jqCAgXaanXOJmYh1jKaF0oKo4u7hfY3Yi4V7eZPifoGK3XyFgep9h37ueYh9gH587IN4eoHwen167H3mfnvZeujleufoeuR4euh5eed953h8eel9enp86+iAg39/goGIfoB9kXqDhJTuj4uG6ZbseIl33ofPtIB974eghnajpXiHpZQFent7e3rEe4J8v3sCenuGegN7e3qFew16e3t7ent7e3p7e3t6hnsBeoR7Hnp7e3t6e3p7e3p7enp7enp7ent7ent7ent6e3t7eoR7gnqPexJ6e3t7ent6e3t7ent6enp7enqJewICAQCA66Shl4CEvr27vb7DrqS0v6WmpqClq7a9ur+zxbPCtL66wtHA0MPJyam9sLjAxMDDytrl0s7n79LJt7m0sLKztbu9vsHCxcTCkf+Lk46KkZqNhuvm7c20zsHm9Orq7eDz2+/Z7Nfq1uzc+s6ttrXBvLCuvrqhnbCyqqejnLSDk62ApP+En6qVgJmqlf/0gK7w9O+Kiu6a/YCXg4aNke+VgoaHjIn+joKS+YaDi+6Dg/aH+f6Gg/6G+4eB/Ibt8/XugvX7gPaCgfmF94H/+4iAgoiGhYb+gIn/iviB/ZGBgI6LifGfgoKOk4GLoP+bjfiKiOyP3bWMgdiykKGY+4uho4aA1pWSiXR4rayrrK2yn5akrZWWlpGWm6Wrqa2is6Kxo62or72uvrG4uJqsoaivsq+wtsXOvbnP1722pqmjn6OkpKusra6vs7GwhOh/hoF+hI2Be9nT27ulu7HS4NfV2czeyNrG2MXXxtnK5LydpqWxq5+grqmRjp6impqUjqR5hp6Al+t5kZuJdYyaifvwfqjn6+WEheWT8nqRfYGHiuaPfYCBhoPziH2L7oB9heV9feuB7/OAfvKA8IF98oHj6evkfevve+x9e+1/7Xz074J7fIKAf4DzeoT0hOx88Yt7eoeFg+eXfX2IjXyFmfSUiO6Eg+OK1K6HfM2dgpKI432Rk3mAyYuJf21woqOhoqOmlY2ao4yOjYiNkp2hnqOYqZqlmaKepLGjsqasrJGil56kpqWkqLe/sa3BybGpnJ6XlZeamp+goaOjqKaletd0fHh0eoN4csrEy6+ar6fF0svIy7/PvMy5yLjIucm81K6Tm5qln5WXo56Hg5OWkJGIhZhxfZOAjNtxh5CBboOQg/vufaXh59+BguGP7XiNen6Eht+Kenx9gn/thHqH6H15geB5euV86e19e+x96356637e4+beeubpeOZ5eOh86Hnw6n94eYB9fH7td4Huged57Id4d4SCgOKTenqEinmCle+RhemBgN+H0KqGfMyTeYd/03SHinEBesd7Anx7iHyvewF6h3uIegV7e3p7eoZ7AXqGexh6e3t7ent7e3p7e3p7enp7e3p7ent7enuEeg17enp7ent7ent6e3p6h3sIent7ent6e3qGewF6iHsSent7ent7ent6enp7enp7e3t6hHsCAgEAgPydk52ajLK/wLy3ur26vcG/xc22uKqtrLStvrHEtMu/yce/0MvG0MfIo93L1tnd2dbT2Obe0tTh4r+3trW3uLm7u7u6vMHRy4WRkIeJj52SioyOiIiBlvnp7vH03/Lt5fne693m2+PY6Nnbvrq+q7y6sq2tq6qrpqSlrpmOnZitgKCLgZGfpqaH9s6D+6be8eyOhP6X+5Ca+Zn48oj/hYKQ9ICS6oD9hf/9iPiI8veD9Ib2/oL9+4H1hPOFgOj47P/z9f7vgfj+gvGC84X2gISDgYiAiIf5jfqFhIKJ+4qNiIiIkoKQlvufi4GYiIqV/IuL8ozboaX6rZiI+4iYnZaDgOaOho2LgKKusKynqq2qrLCutrymqpyenKSdraGypLmttbauvre1v7e3l8m3wcPIxcO/ws/KvsDMzq2mpaWoqKmpqqqqq6+/u3mDgnp8gY+HfoCCfn52iufY3N7gzd3Z0uTM2MrSydDG1sjKrqyvnKyqopydmpqalZSVnoyCkIuegJOAdoSSmJl838l/9qHW6OSIf/WR84uV8ZPv6YP2f32K63uN4Xrzf/Tygu6C5+t96oHs833y8Hzrful/e97t4vTp7PPlfO7zfed86X7sen58e4F7goHuhu9/fnyD8YWGgYKCjHyKj/GYhnuSgoSQ84WG6YbSm6D1m4h85XyKj4h4PtiFfYSBd5ikpaKdoaOgoaWkqa+coJOUk5uUo5momq2iqqujsq2rs62skLurs7e7uLaztsK9s7S/wqCZmZqdhZ6An6Cksa9weXlxc3eFfnV3eXV0bn/ay9HR08HQzMXXwcq9xLzBuce6u6Kgo5KgnZaRkpCPj4uKi5KEeYaClIp3bn2Hjo9108l99p7R496FfPGO8IiS7JDr5IDwfHqH5XiJ3Xfte+7rf+d+4OR65H7n7Hrt6nnme+V8eNnn3e7k5u0933jq7nrheuV753d7enh/eH9+6YPqfHt5f+yCg39/fol6h4zrlYN5j4CCje6Dg+WDzpif9Jd/c9Z0gYV/cAF6x3uPfLF7BHp6e3mEeix7e3p7ent7ent6ent6e3t7ent7ent6e3p6e3p7enp7ent6ent6ent6e3p7e4h6CXt6ent6e3p7eoh7A3p7eoR7AXqJewF6h3sFent7enuFegN7e3qFewICAQCAipeWl52RtsXFxL+8wMC7wsbGw8OntaS2r7bBu7XFwNXJxtPIzM+6t7i0vtbb3dra3djV2eTx9fDrwLOysrG0t7azsrG1t7iSg4iNk5eamJGNjY6LhYGB08KA2e735/D14vXl6Ofb5tTR0r3Dx8zEvru+t6ypp6qmpaiclpSwmZuAnZeGh4+Vm5+YgKCh0ILmkYCDkPuYjoaW6YGL8o6M+Y6A+I36goT2iezxguqD+fCC6Yb08//vgeuC+PuB3fPp+u3u9ez+7P/19/jy+/SC+vmF+IX9/Y2BiIP0jfzyjPv4j4SGjYWDi4mHlYuMj4CVgYqD/4bIhcvOs5GUlpWZk4iAfYqIiY6EqLS2tq+tsLCtsra0srSapZanoaavq6WzrsK3tcG3usCtqaunsMPHyMXGyMPBxs/c4drXrqGgoaKlp6ajoaGkpaiGeHyAhomMioSAgYJ+eXZ3xLR3ytzl1t7j0OPT1dTK08PAwa2yub20r6utpZuZl5mVlZiOiYehjI2AkIp7e4SJjpGQf5+cyX3ejHx/i/OTiYKQ4X2G6omH8Il77ofxfX/sg+PnfeB97uZ84IDq6fPme+J87vB71ejf7+Tl6+Hz4vTr7e/n8Ol87+1/7X/y84d7g37oh/Hoh/HuiX+Ah4B+hYOBj4aHiXqQfIR/9oDAgcTInYSGiYeLhXuAdYF/gIR8n6usrKajp6WiqKypp6mSnY6emZ2mopyopbatrbetsLalo6OfqLe6vLm7vLe2usLP1c3Lo5eWl5ianJyYlpiam51+cXV4fYCDgXt3eHl1cW5vtalwvtDYytLXxNTIyMa8xbeys6GlrLCoo5+gmZCPjY+Lio2Ff36Wg4SAh4FzdHuAhomNfp+ZxnvaiXp8iPCRh4CN3nqC5YWE64Z46IPsen3mgN3hetp66OB523zj4u3heN156et40OHa6d7f5dvs3e3m6Ori6uN56ud8533t7YV4f3vjg+vihOzqh3x+hX58g4B/jYSFh3iNeYJ98X67f8TJk3t+gH6CfHPHe5B8A3t7fK57B3p7enp6e3qEewF6hHsaent7ent7ent7ent6e3t6e3p6e3p7enp7enuEegZ7ent6enuRegh7enp7ent6eoR7B3p7enp7enqSewJ6e4V6h3sCAgEAgJGWkpScrK+1vr23tbvAvsDHwreur62sprG5rrPBwcnBzMjAw8a6wbnCvb632OXp5+Po6ezs7e32+viusrrGzNXY08vAu7nJpJCRk5WXlpeUkZCMh+XU0czOwsu9zd7y6/jn5vLj2cPd0cfGxcLJwsC9urerrK6joaSqoZCstJaXgKCcl5COkJOFyemHxIPfkvKBi+uN+4iC+oH6iPaCifL+hPP/g/P6/fH88e2C4/j/6oHm+fXw8u/68IDwgeXu4/Hq6e/o9un86v3x+PT98vqE7oHygof7hYD+iIaCiYv+gIn2hZGBj476lIGDkIOT+5DvhePn5qHy26iYlJGRkI+NgIWKhoiPnqKnsLCqp6uxrrC3sqihoZ+emaSqoKWxsbeyu7mxtbittKy0r7Cqx9HT0s7T09jY2Nnh5eSfoqu2u8XGwruxq6m7l4SFh4iLi4qIhoOBfNXEwry/s7quvM3h2ufX1uDSyrTLwLa3tLG6tLGuqaacnJ6UkZSbk4SdpYmKgJKQi4SDhId6xuOFv3/YjOp9huSI8oN88n3xg+19her0f+r1furx8ujx5+R83O3043vc7uvl6OXx53vnfNzj2ebg3+Xe7N7x4fPn7ury5+5+5HvmfIDwf3ryg4B8g4Xye4PrgIt7iYjwjn1+in+N8ovngdvf3pzv1JiKh4WEg4KBgH2Cfn6FlJqfqKehn6KopKetqZ+ZmZeXkZyimZ2pqK2osK6orbCmrKWtqKiivcTIxsHHx8vLy83V2daWmaGtsbu7uLCmoJ+zkH1+f4GCgoJ/fXx5c8W3ta+wp66hr8DUztvMydPFvKe8sqmqp6StqKainJqRkZOKhoqRi3uTmoCCgImHgn17fH9zyOKDu3zViud7hOCF7YB67HvrgOl7gubvfOXwe+Xs7OPq4t941+fu3XjX6OXf4t/s4Xjhedfd1d/b2uDY5tjs3O3i6OTs4uh633jgeH3qfHfsgH15gILteIHnfoh4hoXri3p8iHyL7onkf9nc2pnt1JSCf3x7e3l5x3uNfLR7hHoYe3p7ent7ent6e3t6e3p7ent7enp7enp7h3oBe4R6AXuIegN7enuTegp7ent6e3t6e3t6hXsEent7eoV7AXqGewR6e3p7hHoDeXp6h3sCAgEAgJuYm5aktLizsbm9trLAwcLKuLGvsLK1sq2zvL61srTFvb+7zL/AwsXKy8XJvdXw8Ofl5/D/goaE//G9tsfEvb68vMfFy8qHkY2PkpCSk5WSkpSY7OPa1c/Pw8fCv8/G1/eB3tzBzcrGxb3CwsXGwsXAu7OvrKusqKOgn56rtJaegKGfoJ+foJOigJOv7OSF8IWC64nvhu3/5YCE6oT/8f/3+uz1ge38gO/36+ji9u3m9uT27fXs+uqA7/rx8+PW5+3p6Ozu8O/z7v3zgPD6+IH4g/SC+4CGgYH7hvn/j4iDkYn3hIOEh4KP94eP+obrheaH54Lr79CMn6/skJOTlJSVgI6Mj4qYqKunpa2uqKazsra6qqShoqWopqGnrrCnpaa2sLGuvrGztbi+vri9ssfc3dTT1Nrqd3p47OCwq7y4sLKwsLu5vb1/h4ODhoWHiIqFhoiK29PJxr+/tbiysL62yOV30Myzvrm3tK6xsrS1srexq6OfnJydmpSQkZGepYqSgJSTk5KSkoiZf5Ks5t+B6oF/5IToguX23nyA4oD36Pbv8OXsfeXye+bu4+Da7eXe7Nvs5Ovj7+F65u/n6drN3eHe3uLk5eTo4/Ppeubu7Xvtfup88HqAe3vwge71iYJ9i4Ptf31/gn2J7oKJ8YLjgN6C4H7k6MqInKrThYeHh4iIgIaFiIKPn6KfnaOln52qqa2woJ2am52hnpmgpqifnp+tp6mntqqsrrC2trG3q77P0cjIyM7bcXNx39Sno7OvqKinqLGvtLN6f317gH6AgIN/fn+BzMW7uLKyqa2npbGqvNhxwbylr6ypp6Klpaiqp6uln5iUkpKTkIuIiYiUmoKIgIqKiomJioCVf5Op49t/5n994YLkf+Dw2Xp93n3y5PLr7ODneuHteODp3tvW5+DZ5tbm3+Td6Nt34eri4tXI2NrZ2N3f4N7i3ezid+Dp53foe+V46nZ8eHfqfenwhoB7iIDpfXt8gHuH6oGH7YDgftuA3X3g5ciHnqvFfX9+f4CAtXuDfI57jXyOewF8pXsCenuEeg97ent7ent6e3p6ent7enuHegR7enp7kHoBe5J6Cnt6enp7ent6e3qEewR6e3p6hXsBeoZ7C3p7e3p7ent6e3p7h3qGewICAQCArrCtq52psKakoqe5vLzLvrK5sbSytbi5uri0s7PF6obxzce9xNHKzsXExMbEw9nx8Ojt7Ono6NnMysrHvrq6u7m6u8C7wePp8fH9iZGKj4yWlvvr2NnT09rNyc/Jxc/e/ILowMvIxL3IysnLx8S5s7zBs7ParaekpqWnw7i6r6WAsqioq7Otl73gkMrr5v32/vKD5YDpgOeI9Pr5/oPn/f7u9PL07ejn+d7r7unk6/Lq8/D56PPu+vL47fPj38vS2dvc4+7r8uPy4vbs8+j874OCgfqBgPf4gIP2+f2C+fyOg/2A9ob3i42C/OiB64XshuWG5Ynl8q7mt5qfpqirr62AoqWioJOdpJqZmJysr6+9sqWspKamqausrayop6e4233hv7myuMS8wLm4ubu3t8ve3dXc3NnZ2M3BwMC8tbGxsrGxsreyt9XZ4uDrgIeBhIKLiurdysvGxcvAvMC6uMDO6njWsru3tK23ubi6tbOqpbCypKPJnpiWmZeZsamroZeApJubnqagjbvdjsbn4vjw9uyA4H3jfOCD7PTx93/g9fXn7Ors5eHg8Nbj5+Hd4+rh6ubv3+jk7+ju4+na1cPJz9LS2ePg59nn2Ozi6N7x5X58e+98euvteX7r7vJ97vKJfvN67YHuhoh98+B944Djgd6B34Xg7KrktoqVm52fpKGAm56bmIuWm5SSkZSjpqezqZ2knZ+foaSlpqShoaCx0XjWuLOrsr20ubKxsrSxscTT0svQ0c/OzsS4uLi2rqqrq6qqq7CqsMrM1NPcen96fXuEgdvQvr+5ub+0sbSurLXC23HHpq2rp6CqrKyvqqiem6WnmZi8lI6Mjo2PpZ6hmI+AmpKSlZyXhb7fjcPl4PXs8+h+3XvfetyA6vDu8nzd8fDj5+Xo4d3c6tLe493Y3uXc5OHo2eLe6uLq3uPV0L3Eys3M093b4dTg0+Xc4tnr33t5eOl5d+bodnvl6e176+6GfO946X7rhIZ88Nx84H/hf9t/24Pe6ajkuIWOlJaWnZqfewF8q3uHfI97AXyle4p6B3t6e3p7enuEegF7snore3t7ent7enp7e3p6ent6ent7ent6e3p7e3t6ent6e3p7ent6e3p6enl6eoZ7AgIBAIC3sqimoKGjrK2qr6ihnK230Lq6s7S1uLu7vLzI6vj+goqI+NXHycnHyc3P0NPd09zEx8nI0NHJy9nczcK/wcfLz8/Oy8TQ4e/v8ejl+PLv++bt7O/u397W0NjX3t3qhIKC/vf/9cXAxcfFytDGvsbz3OK9wLyuq8Gru62zt77LqoCtqqetrKuJ75qv8+CD4YPvguqB5fvuhPGD9Ijt8O/x/+Lq7uXw2OTn7+nj6+3x5Ono6dzh3+Ts4+Ta4dnl0t3g5ebk5ubj2+Th7eby5dzp6PX19er6/Pv28vn7+e7t/IT/gvmB+vD03/bmgeOB7ofngeOF5v/q35GWmJumoqesuYCspp2blZaXoKGfopyWkaGswa6uqKmqrLCvsLC62ufseoF/6sm8vb68vsHDxcjQx9C7vr++x8jCw8/Sxbu4usDEx8fHw73H1eHi4trY5+Pg7Nrh4ODg0tDIwsrIz87bfHl57ebt47eytbi1ub62r7XhzdGvsK2gnbKfrKCmqK67nUCfnZqfnp6A8Jqt7tyB3YHqf+Z+4PXogOuA7oTn6+nr99vk6N/o0t3g6OLb4+Xo2uDg4NPY1tri2trR2NHcydTWhNs83NnS2tfj3Ofa0t7e6erp4fDx8Ovn7vHu5eXyf/Z+8Hzx6OzY7t993H3ngt9+3IHg+eTajpiQkZyYnKGsgKSgl5SPj5CZmZiclY+LmaO4pqaho6OnqaiqqrTR3eJ0e3rgwbW3uLa4ur2+wci/ybS3uLi/wLu9yMq/trK0ub3AwMC9t8DM1tXXz8zb2NTfz9bU09PFxLy3vr3Dw891cXHe193TqqWpq6mtsaqkqdPAwaOkopWTppWhlpueo6+TQJaVkZaVlXr0nKzs24DbgOh95H3d8uR+6H7qguTo5ufy2ODj2+TP2Nvi3tfe3+LV2draztPQ1dvV1MzSzdbDztCE1TzW1MzV0d3W4dXO2djj5OPb6+zq5+Lp6+rg4e598nzse+3l6NXq23vZe+SA3XzagN744teNmo+KlpKVmqSfe4N8vHuDfKZ7hXoPe3p7ent6e3p6ent6e3p7xHoFe3p7enuGegl7ent6e3p7enuHeoZ7AgIBAIC7rp6ip7O8qp2dqaimp6bO0d7e487Tv73Bw9H8gYKDh4eIjpOE0MrSy93b3+Dc8N/W1Mze2NXi5+Hi4e7b39vV0NDR1dzv/4H17YCG8PPu+Pfp7ODh6ePj29XQ54qPiomHg4GBgY3TwL/Qw9LVzMnKvePCxK25vcW+vqyvlbrItoCno6iyvLbQ6Iza8o34je+J+IHp9fnw7u/6/PDt5fPo8dzk5+fs5d/X497n4unh4+Hk29bc2ebd493h5efq1uHS3trZ6uDo2eDd4PLt/Ojg2+Xp3efj8+r39fXw8+3v9u/x9en54e7j7+Ht4/nigfKN84Hf8vnn97PilfuwpZ+fsoCwo5SXnaeun5KSnZybm5vCxdDQ1cHGs7G2uMXteHp7f39/hol8xcHHwdDP0dDO4NTMzcXW0M7Z3tra1+DU19XQysrKztXk8nrp4nl/4+bj7O3e4NXU29XVz8nE2IGGgoB9eXh5eILEtLG/tMHFvru9sNO0tKCqrrawr56iiqy3p4CalpujranL6Y3Y7ov1jO2H9H/l8fTr6ur09uro4O3i69fe4eHk39fQ29ff2uHZ2tjb0s3Sz9zU2dTY3N3gzdjJ1NDQ39Xez9bT1ubi8d3U0dre09va6eDs6+vm6uPn7Ofp7eLx2ufc59vn3fLdfeqH6n7b7fTi8rDjl+amm5aVp4CpnY2Rl6Cnl4yLlZSUk5S6vcfHy7i8rauwsb7kdHV2eXp7gIR3v7vBvMnHx8fF1szGxcDPysjT19PU0dXO0M/KxcXEyc7c53Xg2XR42NvY4eTV1srKz8fIw7+6zHp/enh2cnBxcXm3qaazqLW7tLC0psSnqJWfpKqkpJSXg6CtnYCSjpOaoqDL7I3W7Yr0i+yG8n7k7/Lo6Ofx8+fm3urf59Tb3N3g29PM1tLa1NvU1NLVzMjMytXO1M7T1tjbyNLDzsnK2M/YydDN0eDd6tfOy9TYztXV49vn5+fi5uDj6ePl6eDu1+PY5Njk2u/ae+aF53zY6/Df8a/lm9yflZCPoJx7iXyiewV8e3t8fJB7inyge4V6B3t6e3p7envbegV7ent6e4Z6A3l6eoV7AgIBAIC/qJmnwqmgoK6zoJ2np8LW4NPi2uPn7OfL3f6ChISGhYiLiomHkOfi4+Pl2+Ld4er14OTa4ezk6PP3+eng5Ovw7uzt8e78+/X7/PD3gPn++vjz/fPo19/d4/WAk5KPj5GRiYOD///8683f6NfP0MrCxuDCv77CurOoucjBjrDBxICmorXDsaPSvLb894OJ+o3uhf/9gPGC6fXh8eP27PXs7uHj5eTm5eHb0NTQ3tfX0d/b2d/a4dba19zq3+vn4NPQ19XP4dTi4N3o29zn5vLc3urs7t/n5erk6ubn5uvo6+zm29jb1+Pj7+jx5ebs6fzvhuDt9+SH49iBhZGruKaXpYCznpCctZ6WlqOolpScnLfK0sfUz9TZ3dfA0/F7fH1+foCEgoKAid3W19bWzdPR1t/p2N3U2+Pd4+zu8uLb3+Tp5+bl6un08uzx8ubqee3z8e3n7+fcztXS1+h5i4mGh4iHgXx78O/u28DR2cnBwb20t8+0sLCzrKacq7eyhqOytYCbl6i0pJjSvbb59IKI94zthP37fu+B5vDd7eDx6PDo6N3f4N7g39vVys7K1s/PydbT0NbS2M3SztPg1eHc1srGzcvG1svY1tTe0tLd3OfR09/h5Nbd2+Db4N7f3uLg4+Xe1dLV0d3d6eLr4OHn4/fpg9zo89+F39WBiISjrp2PnICrl4qWrZeQkJyikI2VlK/Cyb7KxsnO0sy4zOh2eHh6eXx/fX18hNfQ0M3Lw8jHzdff0tjP1t7Y3eTn69vW2t7j4eDe4uLu7eTp6t7idePo6OPd4tzSxMjHy9tzhYN/gIGAeXV04+DezbXFzb23uLOrrMGopKSooZyToqyngJqoqoCTkKCqnJHVv7b484KH9Yzsg/v6fu+A5O/b6t7v5u7l5dvd3drc29fRxsrG0crJxdHNzNHN0sjNyM7Zz9rW0MTAx8XB0MXS0M7YzczW1uHKzdjc3tHY1tvW3Nrb2t7b3+Ha0c/Sztra5uDo3d7k4PPmgdrm8d2E3tOBjIGdp5aKlpt7i3ymewF8jXuKfKJ7hXoLe3t6e3p7enp7envaegF7hHoBe4V6hXsCAgEAgL2jlLOxqKK2nqK1rJ+93OHP3tvm4ub17MK3v+GAg4aKiYmOivTg4Oj07/H17/by/PiC7P+Em9e/g6S+0+Tv/YaLi4qIg/ziyqj8o4+Eh4WHh4j79oj88/r8gouRjY+QkI2MiIOF8eDI0Ovi5tfS1cnIx8O+ucSluL2xqcSnzK7FgKKmw6mhmfah3veN9YeD9Yrt/YX5gfD97/jx8u7r6enl4+Hd3tnd1tXW1NDU1M3g0tLQ1dvJzdPT4tbY1dDSxcrMzc7S09Hg3eHo4ebe4O3i3eLk7eLo5tzl3d7g4d/cy9HN09TW0dvU5d3p4O3j3vXb8vLnguf08Kl7ipGiu5mWgLGZi6ilnZiqlJiqoZay0NbF0s/Y1Njm3bivt9d5fH+Dg4KGg+jW1t7q4uTn4unn8e595viAldG4fp23y9vl84CFhYSCfvHYwaHxnIp+gYCCgoLw64Hv5u7weoKHhYiIiIWEgHt949O9xN3T18rEx7u5uLWvq7Waq7ClnrecvqK3gJictZ6YkPak3PSM9IaD9Yrt/IX5gfD87fTt7uvo5ubi4N7Z2tTY0dDQzsrNzcbXy8vJztLCxcrL2s3PzcfJvcLExcbJysjX1Nfd19zU1+LY09ja49ne3dTc1tfY2tjVxsvIzs/SzNbQ4dnk2+ne2vLX7u3igOPw7ah/hImar5GOgKmThqGelZGijpGim5CsyM69yMXOy8/c07KrstB1eXt/fn6Cf+LR0djj2tnd19/d5+V44fF8ks61fJqzxtbg7X2BgoF/e+rRu5zql4d5fHt+fXvl4Hrj2uHic3l/foKCgn5+enR21sWwuNLJzMC7vbKwrqyloaqSoaadl62Us5uugJGWrJiRi/im2/KL9IaD9Irt/IT6gfD77fHr6+rn5eXg39zX2NLVz83Ny8fJyMHSxsbEycy9wMXG1MjIx8LEt7y/v8DExcTS0NLX0dfP0dvRztPV3NTa2dDY0dPU19XRwsnFy8zPytTO39fi2efd2O/W7Orhf+Hu66iDhIOVqIuInHuIfI17B3x7e3x8fX6Hf4aAhH8Dfn59hnwDe3t8hHuMfKF7hHoLe3p7e3p7enp7envfegF7hnqFewICAQA4rZKTqcLRz8W8zb+81tjd1eHf8vLz9OC1srG2urbRgIiIgObe3+Hj7fCB//r++YG5qZLSjKnCyMmFygrLysvMzc3Ozc3OhM+AzLiW5KGxuI+DhISHhoeEhYX77P6NkYmNhdLU08XBwOPhz9fOzcvQxsi/scq1udC9tsW+wta5286g2MLRo/H6hI33goTyhH3vhu75gfb88fTn5+Dh3d/b2NbQ1dHQ19Hb1M3TzsnD0tbJ0tnV283L09XW3MrP2dbS3NnT1tPR3OI14Onb1+Dh093e2Nnd3+Pe1drVw8TJzMvOzM3KzsnU1tTn0ufi4PPo7vjk9YLlze56+o6ml4o4oYqKnrfFxLqxwLSyy87SytXT5eXm5tOsqqqusq/JeoKCe9zT1dfZ4+Z79O/y73u1pI3Lh6O6wMCEwQXCwsLDw4XEgMXFxcbFwrCP2pmpsIl+fn2CgIF9fX3s4PKFiYKFfsjIx7m3ttXUw8nCv77Bt7qzpryrrcGyq7mzuMqv0MKYy73TpPD4g4z3gYTzhX/yh/D6gff77vHk5d/g297Z1dPN0c3M0szVzsjNyMK9ys7Cy9HN0sXDy83O08LG0M3J09DLOs3LyNPZ197Sz9bXy9TW0NHV2NrXz9TPvr/ExsfJyMrHy8bS1NLkz+Tf3e7k6vPg8YDhyvZ+54acjYISmYSElrC+u7Kpt62pwcjLw83KhNwgyqampquuq8V3fn941s7Q0dPd4Xjt5unnd7Gii8eFn7aEvIW9hL6Fv4C+v768qorSlKOqgnl4d3t5enV2dd3S5YCDfX52vby5r62sy8q6wLq1tbatsKmdsqOluKqksauwwqjIupLDvNel7/eDjPeChPWFgPSI8/yC+fvt7+Pk39/a3tnU0svOysnPydHLxcjEvrnGyb7Hy8fMwL7Gx8nNvMHKx8PNysXIxjjCzdPR2c3J0NLGz9HMzNHT1tPK0cu7vMHDxMbGyMXJxdDT0OLO4t7b7OLo8d7uf9/I+oHdgJSHfZ57hHyHewF8hHsFfHx+f3+bgAN/f36LfIN7hXyhe4V6DXt7ent7ent7ent6envfegZ7enp5enqEewICAQA1pIOTkLS3t7W2ubvAnZKXurHUkOzx0LGurbi3uLa4wvHz6ejp6vH09Pj+hufk05a/x8jIycqEzAjLzMzNzs/Q0IfRBNDR0dCEz4DQxJS2mZqTkZCNiISDgfj1k4Lm3tfQzsS5xMHq7N3Uw72tqJ7R0dPc0cjFw7u1q9Kb16mxt4d0s+z98PiI+n2BfX1/7/h+63/z8vPo7OTo1tfV0NPL0M3R0czPyMnTx8vY0MjZ19TOzMzZ2c/V0sPCzs3K0NjV1d/Y0NDc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x9DPyMStlo3Mm47DhouIL5+ekp+djJWhnaXAsqemo6OirsXDxMbFx83ZzMTM2HyBeoB9uPa4vsDDxsnKy8vMhc0KzMzNzc3MzM3MzIXNAs7PhM6Az83Mzs/Pz9DQz9DR0tPS0tHQo5y2eHHb0cjJxb/feHjj2s7JxI5/d+/86/GJk4+Vopecm8Wy2Ku6wbWB+9P0h4yRkY6F/N3Gv7rR8oaLioSGg4P08eXn7u7v5uDM0MbLwci/wsK1vLq0uLm4vL+7tbe5uru8ubq/vbq4tba7u7s3wMTBvb7EubW6sbC3rK+lnZ+inZqXm56qqKyxtLS7wcjH0tLTzdXWzsjR0cnFsJqR1aKVxoSIhZ57hXwCfn+3gAR/fHx8h3uCfIh7hHqQe4N6hnuHeod74XqDewICAQAwp6WkmZ+po5+ss+Lp6/n++efGzNra2dzk4cbP8dTk5/amjZa8wMTHyczP0dLT1NXVhdYF19fY2NiF2Rba2tvd3Nzd3t7e4OHi4+Tl5ujp6evshO2A7Ovp58rOi4j48OTZzszsg//o2MWvkuOEnKzJzMe40qSttrGk0uPgusHRv37g8YOHjI6PkZOPk5eShnW0i4CRvHF9eXly4d3k5+ft5+XKzcTHwL+7ucC3vL+5ur+/u77Gy8jCwsi/vsfEwsLBwcXKx8fFxc7NxsTHuLq4rLOeoZwnnJielpybmZuYrrKwtrm/v8bH0MvJwcXCvquXhYywwsrbvW7wqqCXL5+fnpSZo52ap6zc4OLu9PDfwMXR0NDS2dnByuvR3+HuoouUuLzAw8XIy83O0NDQh9GI0gfT09PU1dXVhNaA19fZ2trb29zd3t/h4ePj4uHg3tzAxYOA7OTZz8XD4n3z3tC+qZDnh56sxMS9r8ScpKunnMna2LS6ybmE7PaFiZCSlZebmJ6joJaG06iZptB7iIODevDr8PHw9O3pzs/GycC/u7i+tbm8tre7ure4wcXCvLvBubjAvby7uru+xME3wb6/x8bAvsKztbOosJyfm5qYnZacm5mbma6zsbi7w8PLzdbS0MfLyse2pJSbvMrS4MB76aKZkTKbm5qQlp+ZlqOp19zd5+zq2ru/y8rKzdTSvcbnz9zd6qGKlLm8wMPGyMvNz9DQ0NHQ0ITPgtCJz4LQiNGA0tPT1NPU1dTW19jZ2djX1tXTuLx9eN3WzcS6uth36NbIt6SP7IuhrMK/t6e5lZyin5bA0dKvtcKzh/T5h4uSlZicoZ+lq6mhkuvArrXfgpCKiYD69Pj49fnw69DQyMrAv7q3vLO2ubOzt7aztLzBvri3vbWzu7i3t7a3ur+8vLs1usPDvbu9r7Kvpq2anZmZl5yUm5qYm5mus7G4u8PFzM7X1NLKzs3Ku6qbosLP1uPCg+SclIygewJ8f7yAA399fId7AXyGewF6lXuCeo17hXqFe996g3sCAgEAgKapsqiho6iusMr+9oGGhonYsrW5w87g38vEyNDO5I6LmLa6v8PHy83P0tPU1tbX2NnZ2NnY2dnZ2Nna2dnZ2tra3N3e3t7f3+Hj5ebo6urr7O3u7+/w8vLy8fHv7OnlztGE++rczbamx9y5mI+nrr3TzdXR08rEp7O+t6esweHLgMK20rzhxYGMjoyMj5KTl56ho6unraqUend2xMl8gHx2dnbkd3ni39DMusC8u7i1ure4vLe5v8C+wcLFycTDvr7Bw8TCw8XHxMPDyMvJxsbGvLu5s7SanZWYkZWRlo6Ql5OZoaSrubm7yMnP1dTJxrWciJK40+jo5OPbv2rNo5ufL5+jrKKcnqOorMT3736CgYPRrrK2v8jZ2MfBxczL4IyKlrO4vL/Ex8nMztDR09PThNSJ0wjS09PT1NXV1oTXgNna3N3e3+Dg4uLj5OXm5ufn5+bk4t7axMh+8ODUxbCiwta1mZOqr7rMwsnFxr23nqiyrJ6judfDvLHLt+/QhY+SkZKWm52jq7G4xMDDv6mNiHzl5YuPiICAf/N+f+zn1dG+xL68ubW5tra5tLa6u7i7vL/Dv724uLy9vry9v8G+OL69wcXDv8DBuLe1sbGYm5WYkpWSl4+RmJWbo6auvb/C0NLa39/U0cOsm6bJ4vTx7evixnnNnZaZLJygqJ+Zm5+lqMHy63yAfoDNrLC0vMXV1MS+wsrK3ouJlbO4vMDEyMrNz9DShtOF0oPRhNAQz9DQ0dHS0tPT09TU1dfW14TYA9na24bdgNvZ1dC7v3jh08i7qZ680LOZlq6vt8a6v7u8sq2Vn6ijl5yxz722rcSy+9mIkpWUl5ugpKu1vMPQzNHQuZyVifz4lZiRiIeF/oOC8uvZ1MHFwLy5tbe0tLexs7e3tbe4u7+7ubS0t7m6uLi7vLq6ub3Bv7u9vbW0sq+ulpqUl5GVJZKXkJGYlZujpq69wcXT1t7j5dnXybSlsdPr+/bx7uXJgcyZkpWMe4R8jnsCfH/AgAJ/faJ7gnqUe4J6hnsDent72HqDewICAQAxrqjD6Obm3dvR2u2AiIyM7rm4ure6wMLDz8TI3uq0gKivtrvBxcnMztHU1dfY2tvb24TZA9jX1obXgNjZ2tvc3N7f4OLj5efo6uzt7/Dx8/T09fX19PTz8vHu6uTdv/726eDAq5SZ1eLapKCmv+fZ0MrHw7Szt7m7ssTQwrivtKpxwYGMj5KTlZaVm6Clsbi8wMDAvsKioXm2v2+DhHt3dePh4NvIw7y/trm0tre2ubmztry7u728v8HCQr67vL/BwcLBw8DBw8XEwsHFwsPEvLOfm5aYjpGLjYqKjZKTmaGgsL/K0tPd4uHdw6uszHmFhYF9enfs5M+Gp6KjqFappL7i4ODY1szU6H2EiIjotra4tbi9v8DMw8fb57F+payzub7CxsnLz9HS1NXX19fW1dTU1NPS0dLS0dLS0dHS09TV1tbX2Nrb3N7f4OLj5OXm6Ojp6YTqgOnn5ePf2dK19O3i2bypmKDa49egmp+22cvEvrq3qqmtr7Kqu8i7sqqwp3rOhpKWmpyfoqKqsrrM19vg4ePg4KvAkdzigJSTh4J+8+7r48/JwcO6u7W2t7S3trCyuLe1t7e6u7y4tba5u7u8u726u73Avry8v76/wLmxnpqXmY+SJo2PjIuPk5Wcpqa3yNTd4Ovy8u7XwcTlhJCOioWBfvjv2ZW2oKGlN6ahvN7c3NTRyNHlfIKHhuOztLa0try+vsnCxtrmsX6lrLS5v8TIy83Q0tPU1tfX1tbV1NPT0tGG0IDPzs/Q0dHS0tPU1NTV19fY2tvb293d3d/f3+Dg4N/d29jVz8ms6+HXz7WkmKPc4tKakpeszcC6s6+roKClp6mitMG2raespILWipacoKSnq6y1v8ne6vH4+vz69rHYo/f7jKCekIqF/vfy6dTNxcW8vba2trO1tK2vtbOys7S2t0O5tLKztra3uLe5tre6vLq4ub27vb63r52alpmPko6PjYyPk5adpqe4ytjj5/P8/fnj0NT1jJaUj4qFgv703Zy8nZ2ii3uEfI57AX7EgAF+onsBepN7BXx7e3p6hnvNeod7hXqDewICAQAxra3H7fD59fDvtLS0ucnu9uDIv7zBydnWxdTkqc2an6WutbvAxsvO0NPW2Nra2tva2YTYA9fW1oXVgNbW2NnZ2tvc3uDg4+Xn6evt7/Dx8/X29/n5+Pf29fTy8e3n39WS7t/tg+aNh863qKqmq6jFwruvn6GoxsXFwMPHt6ippqSA1t6HkZKVmJmanaSrtL9kaW1xdHh0lmpwZKaAZnCFh31zc+HZ18zBu7q3uLO1s7SzsrOztbS1uri4D7i3try+vLq4tbu8v8HAwITBML+7tKehnJWSj4mKiImMiI+PlJ6tvcfhd3+Fg3Vqd42hpaqlm5WLhIB+euach6KorCyqq8Po6/Xw6+mxsbK3x+rz38i+u8DH1dLD0uOpypido6yzub7DyMzN0NPV1oTXCNbV1NTT0tHRh9CA0dLT1NXV1tjZ29ze4OHj5Obn6Orr7Ozu7u3r6+ro5uLc1MuL+ODohu6Ohsqyo6SgpKG5t7CnmJmhvLy8uLq/sKOloqGB7OyPmZyhpairsLrE0uJ5gIWJjpOOrIOIesmbeoOYl4p+fO/k4dTKwr+6urS1s7Kxr7CusbCwtbOzs7JBsLa3trSyr7a3uby7u7y7vL28uLKloJuWk5GLjYqKi4iRkpqmt8rV8oGJkI6DeIWcsLW6s6mil4+Kh4LzrZWhpqk5qKnB5eny7ejmr7Cxtsbo8d3Gvbq/x9TRw9HhqcqYnaOstLq/xsvOz9LV19fX2NjX1tXU09LS0NDPhc6Azc7Pz9HR0tLT09TV19jZ29vb3d/f4OHi5OTj4uHf3NvX0crAhPrb4ITxjoTDqpucmJyZrqynnpCRmrOztLGzuqyfoZ+fgvv0lKCkqq+zuL/L2er+iZGYnaOpo76Wm4rksImRpKOUhYL57OjazsbCvLu0tbKxsK2trK6srLGvsK9CrqyztLKxrqyztLa5uLi4ubq6ubavpJ+blZSRjI2Li4yJkpObp7jM2/iFj5eYjYOQqL3Cxb6yqp6Vj4uF+rWfoKSnm3sCfH/GgAd7e3t8e3x8mnuCeox7i3yJe8F6k3sGenp6e3t7AgIBADits8z79vTz89WztLW2vpGWmp2XgMbY5+bi4Ja1lJqcoqu0u8HHy9DT1tfY2dnZ2tnY1dTU1dXV1ITTgNTU1NbX2NjZ2dvc3uHk5unr7e/w8vT29vb4+fr5+fj28/Dt5+DWy46ItN75v7iusLiys7q5uamUkIeKjZD4sOiNorC3tq6N2YzWgZCYnqWlq7C0XmVpc3yFkJmgo6uQl46BeWqldGp6g3lx3NrUzsa6uLe0sbKwsrCura+vsa+2RLzBvLa5vb7Bwry4ubu7urm9vbm3t7CfnpiVlJOQi4iIhoeEh4yZo7fJd4yksKyVm7DD0NPR0Mu1opaPiYeDfMCDo66qgKuxyPby7+/v0bGytLW9j5OYmZV+xtfl5eLfnbqSmJugqbK5v8TJztHT1dbX1tfX1tTS0dDR0dDPz87Ozs/Pz9DQ0dLT09TV19nb3d/h4+Xm5+nq6+zu7u/v7uzr6ebh3NTMwYiFud34vLWrrLKrq7GurqKQjIOGiYzwq+GKnquygLKpitee6YucqK+4u8PM1HB7g4+cprO8xMjNs7qvn5WByIt+jZSFe+3n4NrRwb27t7Kyr7Cuq6qrq6yrsba3s6ytsbK2ubWytLW2tbS4uLWztK6dnJeUlJaTjouLhoeGipGhr8jeg5mxvLqkqsDV5eno6N/Is6ael5OOhdKYo62oKqqvx/Pv7O3szq+xs7W+j5OYmJN9xdbk5OHgosCTmJugqrS7wcfM0NPV14XYBNbV0tGE0IDOzs3MzM3MzMzNzs/Pz9DQ0tPV19jZ2tvc3t7g4eLk5ebm5OPg3tvX0srBtoGBudjytq6lpamjoaakpJmJhn6AhIjqp9uGmaeuraWH1Kn1k6Wxu8fL1uLugI2Yp7XC0dzk6OzR1sq3q5PknYyaoI6C+PLp4tfGwL24s7Gvr6ypqEmpqKmorrKwraWmqquws7GvsbKzsrK1tbOxsqycm5eUlJWTj42MiImIi5OjssvliKC6x8ayuM/m9/v6+e7Vva+mn5qTityloqynjnuGfId7AX3IgAF+k3sEfHx9fYd+A3x6eol7kXyHe756lnsFenp7e3sCAgEAgJmfqJ2psrTM8+fn1MuAlpmcm5bbzcra5NaMf5Kcm5ufqLG6wsjN0dPW2NjZ2djY2NbV09LT1NPT0tHQ0NHS0tPV1tbW1dfZ2t3g4+bq7O7u8vP09fX3+fn6+fj29PDq5NvSx7mkoH6ov8K9vcnUwb+/s7CPg5jezLLyhY+Yn6OlgKWji9PEmXOEj5iosLZhZm12gIyZqWB3cG1tYGRfV6KYh3CtcWV7e3Ld3NbRx7q3tbKwrKShoKOmuo7KiOvs1NPZ3NvW1drvg5CUlp2gqbGwqZ6blpOSkY6MjIuHhoGFiZKlt9B6m8WLjqaUi4mIi4aAdm/Ptqidl4+GfdGHhaKVKpecpp6psbPL8eXk08p/lZeampXazsvb5tmcf5GbmpqeprC4wMXLz9HU1YTWC9XU09LQz9DQz87OhMyAzc3Oz8/Q0M/Q0tLV2Nrd4OLj5efp6uvs7e7v7+7t6+jl39jQyL2wnZuDq76/u7nEy7i2taqpjIGh38et7IKMlJufoaGfh87LooSYprHEzth0fYaToLHD1XeIh4WEeHx2bsy9qIvUiXeNin7x7eXe0MG8uLOxrKSdmZiYpXOrfN9D4s/N0dTSzsvO33qFio2VmqKsrKacmZWTkpKRkI+Oi4iDiY+asMfoiarShn6lko2Qk5iTjoR75sy8sKiflIroo4ihlYCVmqWeqLG0y/Dj4tPLgJaYmpmV2s7M3OfbqYKSnJqanqexusLIztHU1tfX2NjX1tXU09DPz8/OzczKycnKy8rKysvMzMvMzs7Q0tTW19nb3N7f4OLj5eXm5ePj4N3a1M/HvbSnlpaFp7i5tLG5v62rq6KgiH2j28Kp5X6IkJebnVedm4TIyqSPpbTC2ObzhJCdrb7R6P2LmZ2amY6RioHv3MKg85yEm5WG/vjv59jHwLq1sqyjm5OQjpVek3TW28vIys7NycbF1HV+hIeQlZ+oqqWbmZWTk5KEkCWNjIiOkp2zzPCQtNyFd6iWk5qfpaCaj4X328m8sqidkfS0iZ+TjXuGfId7AX/KgAJ/fI97BHp+gICJgQJ/eoh7iHyJfYR8hnuRegN7enqLeZ16BXt7e3x9inyIewV6ent7ewICAQCA3efd3nfle5/Gz+Dz1qO31O2CxcHG3s6aoOWgoqKhoKGlr7jAxszQ09TW19fW1tXU0tLR0M7Pz8/Ozs3MzMzLzM3P0NLS1NfY2t3g5Ojo6+3v8PHz9fX29/f39vPx7ebf1cq/sqah+9uf1Mu9trvhrqSgn5mTxqKa/KCorrS3uruAu7qg952ZkI+xqq9dYmhyfIqZVmN1vovyrOh8oIt8bGJYmINtoGeybXHb2dHIwrSzrK+i4Onw8oGFjZOYnaaA09PZ3d3b19bRy8zHw8nJxdzx9/2IiomMiIiGg4aHhouTorrTe53Jrf2tzI+CseiAzI62j3zcu6eShH1zyKN4heM07fXs7X7zgqTJz9/z2Ke61u+Cx8PJ4dGlpeWfoKGgn5+krba+xMrP0dLU1dXU09PR0NDPzYTLgMrKycjIx8fIyMvLzMzO0M/S1dja3d7h4+Tm5+rs7Ozt7Ozq6Obh29TKwbaqn5vz2KXTyruzt9uqoqChn5zar5b2nKSqr7O1tra1nPGurKar18rScXmCkJ2uwGt6jdSF5arvi72qmoh7b7+khsJ70Hx98Org08u7t7CwpOvt8fSBSIOKkJWZoX3P0NXY2dbT0s3JysfEycjE2Ozw+oeLio6NjYuIjY+PlZ6uyemIq9Sp3ZKrd26UwHCyjcCah+/RvKeYj4TpxIiM80H1/fb3g/6Hp8rR4PXaqr3Z8YPJxcvj1K2s6aCioqGgoKWuuMDIzdLU1dfX19bV1NPR0M/Ny8vKysnJyMfHxsXFxYTIgMrMy83P0dPV1tjZ2t3e4uPj5OTj4t/e29bRysG4rqKYlenVpc3Cta2w0aOdnKChoei2k++Yn6aqrrCysrCY67q7t7/w4+2Bi5iqu9HogZKn74ror/+b2ca1opKD4b+b3ovnh4b+9urc0sC7srKl8e/y9ICCiY6Tl557zc3S1dXTO9DQy8bIxsTKx8PU6O34h4uLjo2PjYuRlZadp7bS9I+13anOg5ltZoiwaKiRyqOO/uDKtKSajvzWkI77hHoCe3qLewF8hnsCfX/MgAJ/fY17BHp7gIGKggGAh3uHfIR9BYCAgH5+hn0IfHx8e3t6e3uKeoR5iHqUeZB6BXt7e3yChIMIgoGAf318fHyHewV6ent7egICAQAp1tNu1NBucHaBjJKThX+Fh5SUpam4s3C2kJ+jpaampqeorLO7wsjMztGE01HR0M7PzsrHw768ube1s7Kys7Oytba3t7m7v8LIzdPa4uTm6uzt7/Dy8vP09PPw7erl3tXMwbSmoJyWhcSCqqOqrquLqailqbSwoIbWhYiLjY+EkH76wZiUlZ2tuWBkbHN/kaJdb7eppNvd39rg57i+hZt+ZliWdl2EmZ3T0L+1rbixsKimnpudnpyeoZ+fn6aM3uDi5OPj4+Xi3tvj5eXm7vjr282xt83pgH+BgoGCiI+ds9CBncvIuOH28vbv7qrM+6mnme2SwLyZoYR3dGttc20c7Oh56ud6fYSRnaKhkYuOjpuZqa69uX25j5+ipISlCaarsrrBxsvNz4TRDs/OzMzMyMXBvLq3tbOyhLGAsLO0tLS1uLu9wsjN09rb3eDi4+bn6enp6uno5uPf2tPMw7isoJqWkIC/j62mrbW3mLi0r7C4sp+D0YGFh4mLjI2NjPO8oaKntczfd32KlKW6znSHz6el297f2tvmtMiTupyCb7uTcp61terk0cS5wLe1q6ifm5ycmpuenJybookD2tzehN864d7b2ODj4+Ps9evd0Le80vKFhIaJiYyTnKzE5Y2o08Gjx9DQ0s7Jka3YkpCJzoCira67m4yJfX2AeDv7+IL8+4WLkqGsr6yakpSUnpysssG9hr+SoqWmp6emp6ittLzEys7Q09PU1NLRz87OzMnGwby7t7W0soSwgK+xsrOxs7a4ub7EyM7T1NXX2Nnd39/g39/f3dvZ1NDJwrmwpJmUkIt7u5Kro6q0up6/u7Oxt7Cbf8t+gYSGh4iJiYjtt6istcjk/YmTo7LH4vuMoeyusOXo6OTh77rXo9m4m4TdrIOzysj88t7Pwse8uK2pn5ucm5iZnJqamZ+GQdjY2tzd3Nze3NjW3eHh4en06t7Su8DW9IaHio2PlJ2outP3mLXgwZe3u7u+uriFn8uIhYDAd5GivMqqmpWJiImABXp6e3p6knsBftCAAX6OewKBgomDAoKBhnuHfAV9fX1/goWDBIKBfn6EfQR8fHx7mHqYeYt6BHt7e3yJgwiCg4OBgoB+fIl7AgIBADWRjIurfXyIfJPBeYyVmaOjq5GJf4SswO2Pmp+jpqioqamssba7wcfKy83Ozs7Mx8K9uLSysYSwRLGwsLGwsbKztLW1tba4ury+wsXIzdLa4ejr7O3u7+7t6+nl4drRyb6xo5iQhuu117yNttG8pKOVkYR/5dnNtI6tr7GyhbN+nPKhrl5vhJNWZHCAk1JgfZDl29ze397e4ODe3tOXgJO5XZFzXI7BjJqrqaSlrqmnoZ+en5+hnZudnJqdj+jg4d/f4uns6eTj4+Ts84aLiYeFf+3RtZqt2n+AgYmVrM9/nHPhwtP64fPt8+3Zvbu/6a2g/Z2ImIN2a2TGgIOONpiTkqiAgpuSq9iEmKSqsrW/opeMj8vE7Y+an6Olp6ioqKuwtbrAxcjKzMzMzcvGwry4s7GwsISvRK6vr66vr7GxsrGxs7W2uLq9wMPHzdPZ4OPj4+Tk4+Pg3trW0MjAtqqckYqA46/Sv53K5s63rpuUh4Ls4deviqmrrK2uhK8UmOzB1HaNq8NzhJWpwWt7mJrl296E34TeYtOTe5rTd7qScqrjpa6+urKwuLCtpqGfn56fm5iamZaZi+Pc3Nvb3uXn5eDg4OHp8IWJiIaFgPDawam86YaJi5Siu+SLqnjarLzVwtHM0cu7oqGozpmP2od5r5qLfnfnjY2XOpyXlaCBiKqkwvOSqLS6w8bQr6GWl9/K8pOdo6aoqaurq66zuL7EyszNzs/O0M7JxL65trKxsLCwr6+Grj6vsLCurrCys7W3ubu+wsjN09jb2tna2djX1dPQy8a+tqyhlYuFfNupzLyj0/DWvrGYkIN/6t/Zq4akpqipqYSqfpTm0uuFo8joi6C20O+FmLer8uXp6ejq6efm5+nemoCq9Y/grYTA/7e9zMi9uLyzrqWhnp6dnpmWmJiVlojf2dnX2Nvh4+Le3d7f5+6Eh4eFhYDy3ceyxvOLkJSfr8r4mLqA256tv6+9uL65q5STmsGNhMl7crynmYuC+5STnIZ7hHqLewN6fn/OgAR/f358insEenp6gYuDA4F6eoR7hXwFfX19foKMgwiBf319fHx8e5d6j3mGeoZ5h3oEe3t8fIyDBoKDg4KBfoV7BHp7e3sCAgEAeXnO0Nzi173Cw7SRc3FvrL3l7Ni01oqShtyCkZ6goqaoqaqtsbS5vMDCw8C9uLa2tbW1tLOzsrKxsLGwr7GwsbGytLW1tbe5vL3Aw8XHycvMzs/T2uDl6Obk4d7Y0srBtqmZie+rwZt8hnrWkXqJgnV1qKCit66PyZyJvH6kgKObWGd4hkpVZHpHZ6V/kNzb39/g39/g4ODc3dvf18h+VIRjnH5qf3yjpqCfpJ+alJGOhfz27OPi4OLl4tzd2tnc3d3Z2tzd4uj4hImKjo2IhoF+8da2pMp0jKPDcpl6jcPT9un67e3qweC5vrW2qLiIz6bAr62yw7fBxsI3ftjZ4+jgx8zMv6CBgH/Fwunz48bclJeK3oKSnqCipaipqaywtLi8v8HCwL25tra1tbSzsrKxsYSvAa6ErzmwsbKysrS1uLm8vsDDw8XGycrO1drd3dvZ1tPOycK4rqKTg+alupaDkIPoo42dmIyFxLq70MemxJiJuBagfcrFdIyowm59kaxkhsR/kd/e39/eh99h3d3Syp9wrX/AlXuTkLe3ramspaCXk5CG+/Tq4N/e3+He2drW1tjY2dbW2drf5vSDiImNjIiHhIH44ci63X6Ys9l/qYGHqrnTx9PKy8qov56jnp+Vpnm3lcDHw8bUxs3RzTuD4ePr8erS2NfLro6OjNrH7Pvw0+yeoJDmhpWhpKapq6ysr7O3u8DCxcbEwby5uLe3trW0s7KysbCvr4WuOa+wsK+vsLO0tri5u72+v7/CxMjP0tTS0c/NycS+uLCmm4193p+0kYaVh+6qlKWilonNxcbc07O/lImzfpx63+CGpsvxjKG73oCm6oWa6uno6Ofo5+Xn5+rq5+ba18GJ05jeqImioMfDtrCvpp+Xko6F+vPp393c3N3a1dfT09XW1tPU1tfc4/KBh4iMjIiHhIP+6tPK6oejwOyMuYmHm6m9tL21t7ibrZGXkpSKm3CpjMDT0NLd0NbZ1QF8jXsBeoZ7BHx+f3/KgAd/f359fHx8h3uGegGBi4MDgnp6hHuEfAR9fX2BkIMIf319fHx7e3uNepd5iXqFeYR6BHt7fH2PgwWCg4J+fIh7AgIBAC6lra6opK+1qcXWzJudtnXBt7SbrY1zlNWps4iVm5yfoaOjpaeqra6ura6xtLa2hLcKtrW1tLOysbGxsISxObO0tbW2uLq8vsHExsnKzM7P0NDR0M/P0dLSzsfAtqqbiNLklc56cpbWqYiLb72kqpx0bclmk3XNnIm8fqWEuqONY4JMVWBxRWBvfa7Y1t3d397g4OHi3+Df4ODeh4ZjlXRbk4BsrpKanZePhX3r5ODd2dfU1NHT16XRzM7LzczMycrKycrM0dLV2ODk6/2Egn9+end0cnWQqMqQeYvR5vHp+vTp7bvhtqi5garnlI2gosS2q6SfoKmqqjqyuLq0sr3FutPn3Lq61IDFvLqjuJSCntuxuomVm52foaOjpKaqrK6vrq+ytba2t7e3tra1tLOysbCwhq85sbKysrO0trm6vb/CxMXHyMrLy8vKycnKy8rFvreuo5SCyNuS3YN7qfOvjqF71L7DtIh+6XmqgsiYibgToYHNtp90pnCBkKdjgn5/teDc34feZN/f397e34OUhcqadLOVeseqrKuhl4uC8+nl4NrW09LP0dSWzsnLyMnJycbIx8bIys/R09ff5Oz+h4WCgX99fHyBn7/mn36GtcbOxtPOxcmgwZyQnnOWzYN+j5G30MO5s7K4t7c8vMPFwsHP2M3l++7RzuuKysHArcWdj6vlvMSNmZ+ho6anpqepra+ytLO0tri5ubq6urm4tra0s7KxsK+vhK4QsLCxsLCxtLa3ubq8vsDBwoTEJcPCwsPEwLu1r6abjny/1I3ih4Cw/a6RqoDeyM28j4X3graLw5WJs36dft/IsYTDjqW824KmkofC7+vp6Ofn5+bl5Ojn6ejp6omop/y8is2ohty9u7apnI6D9Onk39nW0tHNz9F7ysfIxcbGx8TFxcTFyM3P0tbf5Ov9hoWDhIKCgoOJqc/8rYWFpLC4r7y3sbaSsI6EkWuLwHp1hoqy287Fv77BwsGLe4N6hHsIfH19fH1+fn7HgAx/fn17fHx7ent8e3yGewV6e3t8gYuDAYKEfYV8A319fpODCH59fHx8e3t7iHqLeQF6lXmMegN7fH2PgwaCg4OCgH2IewICAQAtdIh/jozBjGttaIKssJ9niKO+e7CPpW6M4bKBiYuRlJiampiVk5acpKuxtbi6hLsJubm3t7a1s7OyhrE5s7W1tre5u77AwsXIy83P0NLT1NTT0M3IwLeyrqiZgbiusoh93+WFj6O84tSFyIC2pvKCs8zR1NydibxFpYnYz8rKvbmunYRhmrbR1s/X1d3a3uDg4N/h3d3c393bhn5Vh2eokXpqu4V2hoF4593Z083NycrGycPIzcTDxMHBwsC/hL41vcLEw8XGxsbKzNfi6Ol2eoaavGuj5pbd4vTd8f3e0ruyrJ2RhobVxaLix4OicqiMjXl7enwshZaOnJvPnnSAfJXP0b11la3HgbSRzneP47WCiYyRlJiZmZiUk5adpayytbiEuwu6ubi3trW0srKxsIWvObGys7O0tre6vL7Bw8bIysvNzs/PzsvHwbqyrqmhknuwp7KRiO/zi5+nwunslOiS17f4hrvZ4OPYmYm4FaGG6ODd3dPPxbSdcpm82+DZ3dre3IreX9/ci6N1tYfQrIt41pmFkYp+8uXe1tDOycnGx8LGysPBwb6/v728u7y8vLvAw8LFxsfIztLd6PHzfIKQqNB4n+qHwcPPt8nTvLKfmJGGfHN0vK+VzLZ2k3zBpKONj4yMLJChmqqr37CAkIyn6ujTgJ+2zoS2keyAley8ho2PlZicnZybl5aboqqxtrq9hL8Lvry7ubi2tbOysbCErwKusISxNLO0t7i6vL7AwsPExsfHx8bDv7qzq6eim4x2qZ+ulYz3+I2mqcTt9pr0meS994fB5e/y1JaJsxadhPz29PXr593Mt4aiyuzw6erl5+XlhORk5efp6urs55bJk+Cl9cOahOupkJmPgvXm39fQzsrJxMXAxMPAv767vL27ubm6ubq6v8LBxMXHyM7T3+z2+oGIlrHdgqv1gbGvt5+wuaiikouFenJqa6+jjMCqbYuBzbGvmpuXlod7B3x7e3t6enqEewh8fH16fX9/f8WAE39+fHx8e3t8e3x8fHt8e3x7fH2FfgGBi4MBgop+AX+UgwV/fX18fIR7hnqneYV6BHt7e4CPg4aCAn58h3sCAgEAeaCeoaWZa1tyhomO07+Hr9iAk6KpysqPi7mj1LHJzdCKjIaChY2ZoquyuLy/wMHBwL69vLu5uLa1tLOysbGysrK0tba3uLq8v8HEx8rNz9LU1tjZ2djU0cvDuKuci+DSkI93gqTAx8edtbPTzovO6Ler69vl5HR33Z2JvH6liW9ramvRzc1nZrah29jW2Nfc293e39/g4d7e29vb3du4XWGScViSfGzEq3e03N/Y0cfEwL27t7iysrS2v7y7ubm8ura3tra1t7e6u7q8v8PCwcPHydTfd5Cx04e/xNPc8fTqgd/bxI60puuW1MPQw9Cd6te6gaKdnJmWnp07sq+xtqt+b4abnqLZw4iw13+SoajIy6aVt6rctMvO0YqLhoKFjZmkrbO5vb/BwcHAvr28urm3trSzsrGFsDmys7S0tbe4u73Aw8XIys3P0dLT09LPy8a9s6aYh9nLlpqBiajEy8uwvbzd2pve5res69zo7Xp+2pmJuBShhnh0dHXm4+Nzc8iZ3d/c3tre3YjeYt3e39/fuHGExZVwr5B74MKGzO7t4tjNyMO/u7e3srGytb25uba2uLe0trW1tLa3uru6vcHHyMbK0NTg7ICcw+mRxrS8wM/MxGq7uaV5mYzJgLiqtqy7j9fHqXu6tLGtqrCveby6v8W7joCYra+x38eKsdd/kaCnxcu4oLix573T1deNjoqFiJCeqrK5v8PFxsbGxMLAv727ube1tLOxsK+wsLCxsbKysrS1uLm8vsDDxMfIy8zMzMvHxL62rKCTg9LElp6Fi6nEy824v7/g3qPl6Lyw7N3t9oCE1paJsxadhIKAgIH8/P6Bg+Kc5+3o6uTm5uXlhORk5ubn6+7s7MSIqPm5h8miiPjSkdv58+XazsjDv7y3trGwsbO7t7e0tLa1srOysbG0tbi5urzBxsjIzdXa6PeHpc75ms+wra+3s6xbpaSVbop/uHWpnqefsInNvaJ4ycO/u7e7uot7BXx9fn5+hX8GfXt8fn5+hH++gAJ/foh8AXuGfId+A39/gYuDAYKEfwd+fn5/f36ClIMMgn59fHx8e3t7enp6q3mEegN7e3+FgwGEhoMCgoOGggSBgYB9h3sCAgEAO6eur6Whq+TUnsv3hYqPlZqdpauy1JqfsITrgWx0ieip7PaBipWhrbW7wcTGx8jIxsTCwL+8uri3trW0hbM5tba2t7m7vcHDxsrNz9PW2dzf4ODf3NjSyb2vnovPpJCFs8vee4eP4ZlloMik5aSNiYSAffXt592dibx+pYlybXN1cnFvb27OgNvc19rb1d3c39/e397f3NrZ2NrT1KZqTHJXj31qwquPb5Sywr20sKyrqaeko6Kjpq2rqqusrq2rqKqprK6vsbG1uMC/vcDAxMvO3HyQtXSnkc/F6vfr9s/U16u3t6KjidfTrMaGgPDG1+K2oqGgn56kPLe+wb22w+rUm8fxhIuQlZqdpKqx0pu2uYbvjHuFl/Oq7veCipWjr7e9wsbHyMnIxsTBwL68uri2tbSzsoSxObO0tLW2uLq9v8LFyMvO0dPW2dra2dbSzMO3qpqHyqSZirjP43+MlOuvebXWt+mijYmEgHz06+bYmYm4fqGHe3d8fnx8ent74YHe3tvc3Nje3d7e3t/e393d3d7f2te2kGibcq+Uet7An3uov83FubSvraunpKOioqWsqamqqqysqqepqaytrrCytbrEx8PFyM7X2+qFnsZ8rJC4sMzRx82tsbSOmJaGiHO4t5e0eHbhusjOzLm3tbOxtTzEy9DJx8/v1ZvF74SMkZaanaOpr9GbzMWL95eJlaT+rvT/ho+ZqLW+xMnNzs7OzcvIxsTBv7y6uLa1s7KEsTmys7O0tLa3ubu9wcPGycvN0NLT09HOy8W8saSVg8Ohmou30OSAjZfwuIK/3MHpo5CMh4OA+vLs1JWJs36dhIWChoiHiIeJivyJ6urp5+Xh5uXk5eXk5eXn5+rs7evm0LeFworLqIj20quDssbQx7u1sK6rqKSjoaGkq6inqKirqqikpqWpq62usLW6wsXFx8zU3+b2janVhLKSrKG4uK6zmJyggIiGdnpnpqiLqXBw2LO/xdnIxsPAvcGGewV8fX5+fop/DX57fH59fH19fHx/f3+7gAJ/fYV8Cn19fXx7e3t8fH2GfwR+fn6Bi4MBgol/AX6Wgwh+fX18fHt7e4R6qnkGenp6e3t+j4MKgoKCgYKCgYGAfYd7AgIBAHmxq57Bm9Dg7PiAhYqQlpugpqyyudynnq2xrLCRxH+VweZ7hJCerbjAxsvO0NDQz83Kx8XDwL67ube2tbW0tLS1tra3ubu8v8PFyc3Q09fb3+Pm6Onp5uLb0sa3pZHxgum7oY612cicpLG+wuu4v6eTjomFgX318N6dibx+pYp2cXd4dnZ0c3PKldLP3NvZ29ze3t7f3d7b3NvW1srWz+SES3NXi3pmv6aKeMuqk6qjoJ2cnZyeoKGjp6eoqqqqpqSfmJiYmpuco6ars7q4ur3Gx8fRcn6PrYOX2sPk8uv42LzWvqS/r5qnitrIlojRy4fcttzHo6CbmpuiPMG7sdWZzNvo832DiZCWm6Clq7G42qeotbq0upzTh5jE6X2GkaCvusLIzdDR0dHPzcrHxcK/vbu5t7W0tISzObS1tba4ury/wsXIy8/S1trd4OLj4+Dc1szAs6GN7IDuwKmawufVqbbBysvxvMClko6JhYF99O7ZmYm4fqGHgHuAgYCAf39/3Zbb1d7d293d397e397f3t/e29zT39Xiq2mfc6yRdty9moPcu52wqaWhoKGfoaGjpaioqKuqqqWkoJqamp2cnaSnrbjBwMDEz9LU3nmHmLmJg7+uys7H0LWdsZ2JnZB/inS8r4R6vr6AzarIvrm1sK2uszzQy8Plmczb5/J9gomQlpugpauwt9motcHGv8Wn4o+ezPGBi5emt8PM0tbY2tnY1tLPy8nGw8C9u7i2tbSGsze0tba4ubu+wMTGys3Q09bZ2tzb2NTOxbqsm4nmfO7BrJ/I7tyvv8nSz/S+vqaWkoyIhID69NSVibMRnYWKhouMjI2Njo/7oOrk6eeE5Gnl5OTl5efo5+br4vDk8NWIyo3JpIT1z6aL5sSitKyopKOjoqOkpaipqqqtrKqmpKCZmJibm5yipq22vsDCyNTZ3uqAkKLHjneuoLm3sLSijJ2KeoqAcntprKF7cbO1e8SjvrzI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x8fIycrM0rKoorCWhYeHi7nb5YGQqLXQ7oiUkZfwr7i0rI6Rhfqel7GS7pqF/4aB//ioiKGsrbW1uMrDw8WpoYbCr9p8d36IcW6ChouAmIBv2JRssYjl4orWiYyOefDa186WnqixusPL09zk63l9gYSMrr6AgffXwLOjzO2QrLzCytjl7Orl2tDGvLOqoZqTjYeC/vjz7enk4d7c3Nva29vc3+Lk5+rt8nt/g4mOlJqgp66ytbe1s66kmYx/5MnM2+Hn6+z2gIWHh4OA39HIwLiyq6Sf2paJs36diK+tqaainZybmJSTjPXugpaUut26g7aDnePihoDg29fQzszLysvRwLWvu56MjI2Ru93ngo+ns83qhJCOlO+vt7OrjpGF+peVspLol4T+hID99qiOqbW1u7q+z5uus5qTe7WlzXRuc3plY3R4fnOHcmXZn4O7kPX1lOKQlJYEe3t7fYt/hoCDfoV9An+AloGWgJSBiYCGgYl/AYGLgwGCjH+Gfgp/f3+Cg4KCfn5+iX0BfIx5hnqEe4h6Dnl6enl5fH19fH19fHx7iHkLe36BgoKCgYGAgICKfw1+e3t8e3t6ent7fHx8AgIBAD1yzMPenqq3xM3X4Onw+oCFio+Tl7KUvsjIuqWckcDchJqmr7rI09nZ1MzEurSrpJ2XkYuGgn/79vDs6ebkhOI45OXm6ezv8vb6/oKGi5KYnqautb3DyMjGw7y0qJqL+9/Z5uzw8/b3+v+AgP6B4tPLw7q0raah5Z6JvH6mjqyppaKdmJKRjoyLiH7enMRrjcFuk57Cm9elrqyvsrOztrq+wsjWj4mGmIGCeHuNueKClrHK4P+LoL/Fx6aevra10tHHwuCEtZKCm5iRhoSCiON/nquusrKwuYfL+KPGwauQxsiHm/n6mrWahq7+1pyEfTGffsZyu4eWmZh5eNrT2Zuns77G0Njg5/B7gISJjZCslsrT0sSvp5zI5oqfqrK8ytXb2tbMxLu0q6Sdl5CLhYF++fPu6ebj4d/f3t7f4OHk5+ns8PP3f4KHjpOZn6eutbq+v726ta2hlIbz2NXk6e3y9PX5/n9//H/g0srCurSspqDgmom4fqKLrqunpJ+alpSRkI+LguSp33qdz3aZoMCe47O6uLq8u7m6vL/CxtWel5OmjYyBg5S+5YKWr8fb+Iaatr2/oZ2qqJ+4uK+q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3eXwtIeFiY7Vy3uMnK24vlS9tax75nuBh4yRlZmdoqarr7S3uMOOhIF+erCxyMLS5POBiZGXm56hpampp6ekoqCenJqXlJGOjIqIh4WEg4KBgIB/fn9+fn5/f4CAgYOEhYaHiYmEiyGKiIaDgHzw6NzQxcjP0NLS1dXU1tjFh4OA+vPt5t3U6ZqJuH6ijLq3sqynoZyYk4+MiYeDfLHGhoaUlaytrNut2dGpjKlxekRKZLx/9Zq9l3HHssJ7g4eQhomUSMKWtIOEqMCPj2p2eXtvadnyg+OJ0e62yaOnsYSB8JHLW3/Aoqaku76gyqbTj4rvjZqmscDn2uTr9bKKiI+U5NuCk6KyvcJDwbqydNx1e4CFio+Slpufo6essK+5lo2KhoPBvNPL3fD/h5CXnKGkp6qurqurqKajoZ6bmZaTkI2LiYeFhIOBgH9/foR9Mnx8fX1+fn+BgYKCg4SFhYWEg4KAfXp149vRxLu+xsjKys7Qz9HSwIaDgPrz7ebd1OSWibN+nom6t7KtqKKdmJSQjYqKhoG/2Y+Nopymqa3jsNnRqY2pZnpESle0feuMkXVsxKqsV2KDi1hXgiu9kq6CgaK9hm1NV1laUEu77YThhs7ptMikp7CDge2N3LWcxOCopr3Bo82n4JWQ9I6cqLPD69zm7fiwi4qRmOvjhpamtcHGBXt7e39/kICGfYaAvYGTgIZ/AYGLgwGCjn8FfHl5enqGeYh6DXt7enl6eHl7e3p5eXmEeg17enp8eXp6ent8enx7hnwQe3l5en18e3t6enp5eXl4fIp6Bnl5ent7eYp6hXuCeoZ7AgIBAGaro5WK+YWMk5meoqarr7W6vcLGydKEeXRyedTOucfa6XqCiZKZnqKlqKurqamop6Shnpyal5SSkI6Mi4mIh4aFhIODg4KCgoODhISFhoeJiouMjY+RkpKSkY+MioaC//fr4NTO1dmF2w7f4MyMiISB/PXs5dzvnom8fqaPvrm0sKmjnZiUkIuJg3/UgKeB03zFsLqNeZbBxrGAj8/b9YHbhqDX4oKo9rrajKnGvdnak57Qw5iq8cG+/fKez9rd1bmZt6d/nOXioJjBgn99fNbXUIh1fPVRk9Lz0qOZoJW7xYyIl6GpscPQ2ePthdh+h4vSu+GAjp2prkOwqJt/5nyBh42Slpueo6itsLW4ucOJf3t4gNnO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zc/S08GMiISBfvXu593qmom4fqKMubexq6Wfm5aQivOD+ue9dH2CodWVjpmIj6u2tbSajaWanZ6Th4Pw9Ndv/OTPyNVzhIqhdoelkIP0l3/tlO6Iqr/Kyb2kgYzDt8GhgOP72NDmgdg7loOIgJGNaZONqsSit4+eonmKn6yytcXS2uXx/IOEiKPVpb/Q5HqDh0eMhr+C3XZ8gYWKjpWXnKKlqq6xsbqA8f/L7b7Az9/u/IOKkZedoqWpra+uraypp6Whn52ZlpOQjoyLiYiGhYOCgoGAgIB/f4Z+LH+AgICBgoKDgoKBgX99enh1493WzcO6tLe9wMPGyczNvIuHhIF99e7n3eWWibN+nom6t7KspqGblpGM+Yb/7MeAiY2356ClmoWRrLe2tJqNrKCjpJeNiPj3t1376NLFxWyDiIVnd4ONg/eWe+eU43qTpK6rn491ib+1vJ9/4P3UzOKA15Obxrvak5K1lpCtxqK6kqyxhYyhrrW4x9Xd6PP/hIaKpt2tydrugImOBXt7e39/kIAEfXx8f4eAvoGVgIR/AYGLgwGCiX8Kfn5/fn57enp6eYx6h3kEeHh5eoV4iXkGeHl6eXl5iHoGeXl5enp6hnkFeHp6eXmHegd5eXl9fX18i3qEe4V6g3sCAgEAQruqnrL6hY2Tmp+iqKyyuLzBxcnL0tWkgs2ytsTT3+x7gIaMkpieo6errayrq6mnpKKfnZuZlpSSkY+NjIqJiIeGhoSFDYSEhYWFhoeIiYqLjo6EjyKOjYyKh4SC//ny6uDVy8jN0NLU1tnZx5GNiYWB/fbu5fGeibx+po+7t7Ksp6Gcl5K1+oP65JTGu51/n8+XvX76nqOmp5eDvrC4ua6ciG/YxuL54NLg9vyEi8mqtcPwg4SG6YSH/JO91OXn2raIheGir5CEgZ/CnY15eDGcs31CgoVQiIPml5yrf4mPdICRn6qrvMfQ1+PseX94d76Dk52nsr2/QtLCoKTofIOHjpOWm5+lq6+0t7q6xOOxhc6yt8TS3+t6gIWLkZacoKWoqaiop6WkoZ+dm5iVk5GPjYuKiIeGhIODgoSBDYCAgIGBgYKDg4SFh4aEhyKGhYSCgH178Ovl3dPJv7zBxcjKzM/Qv42JhYJ/9/Hp4Ouaibh+ooy4tbCqpJ6ZlZC1+4L65ZTKyrqLmrZzqobqpKiqqZqFv66zsaielH30tsb649fZ3OaCiJyBjJL1hoiM5oGM8oajtcPEuqB+ifasrpGFg6PJpJSDiUKht4FVfYBbgn7ooae2g5ifgoaYprGzxNDZ4ev1foN+f9GYqbS+ydTXUeDQp5zddn2AhouOk5ieoqessLOxvPS/jde5vszb6faAhYuRlpugpKmsrayrq6imo6GenJmWk5KQjouKiIeFhIOCgYGAgIB/fn9+f39/gH+AgYSCJIGBgIB+fHp3dOTf2dLHvbS0uLzAwsTIybqMiYWCfvbw6N/mlomzfp6JubWwqqWfmpWRuf+E/+qZ0NTJq8bTfpWL5KSqq6qch8e3urmupJmC+qOq++ja1M/bgYaCaXV28YWHjOB8jeZ5jZunp56Mc4f5rKqQhIakyaOUhK6HndOFr3+BqYWB7aKpuYWmr46Jmqm0tsbS3OTv+ICFgYPYoLO+ytXh5AV6en1/f5CAAnx9iIC/gZWAhH8BgYuDAYKJfwh+fn9+fnt6eoR5BHp6enmGeoh5A3h5eYZ4hnkBeIR5A3p5eYh6CHl4eXp6ent6hXkEenp6eYZ6hHkEfX19fIt6hHuIegICAQBClp2esfuGjZKaoKSqq7Kzu8LFy83Uu7m7qrLAztvo8X2CiI6UmJ2jqKusrKypqKajoZ+cmpmWlZOSkI6Ni4qJiIiHhIYBhYWGLYeJiouLjY6Njo2NjIuLiYeFgoD79e7k2tLLyMrOz9PW1cOTjoqGgv/47+jxnom8fqaPu7awq6WempaSi4WB+OeZ8IOmrqDjvtb1iZmdn6CWj/DW3trV2rV6bafEf97V3O/y94G3jIuw2eLk6NGFrIeNrcLHzL+i9IHVjoiA+be2y4rjyCzD46p5dbKHa2iWu9aGleGCd4vgg5KkrrvEydLb4+t5f3TUl5yXsJ6rpEawt6Om6HyAg46UmJ6fpqittLe8vMbAu7uqsr/N2ufwfYKHjJKWm6ClqKmpqKalo6CenJmXlZORkI6Mi4mIhoaFhIODgoKChYEGgoKDhIWEhIYkhYWEg4OCgH58eO3n4NfOxr+9v8TGyszNvI+KhoN/+fLq4+uaibh+ooy4tK6oopyYlJCJhID46aDkepKLfbWlychgnqKjo5mR8tjc19HXvIh7oLCC5dva3eX3gJN3eYnj8fT7z4CtgIKWqKyvpZHlh+yYiYP9v7/TlfvlPcruu4GMuoFzbqPb9Zik8pGFnu6Kmqy2w8zS3OXt93+EfeapsKzKtcO+R77GrZ/ddnl5hoyPl5ieoKWsr7Szv8nEwrG6x9bj7/uCh42Sl5qfpKmsrKyrqaeloqCdm5iXlJKRjoyKiYeGhYSDgoKBgICAhn8sgIGBgYKBgYGAgH9+fXx7eHVy4dzVzMO7tbW3vL/CxMW3joqGgn/48eri5paJs36diLi0rqmjnZiUkYqFgf3wqOZ5iXxxrqLGulOfo6WlmpL23+Le1tq/joCVnoPs39jU3fh/f2pscuLz9/7Keqp5doKRlZeOgNOG8JuHg/3BwtSX/uiF1erigtHqg6eKo+L7nqr7npKs842dr7nHz9Xg6fH8gYeB7bG5tdfB0csFenp9f3+QgAF/iYDAgZSAhH8BgYuDAYKMfwh+fnt7e3p6eoR5h3qMeYZ4hXmEeAN5enmIeiF5eXh5enp5eXl6eXh4enp7eXl6eXp6enl4eHl5e319e3mLeoN7iHoCAgEARKaaxbn6hIyTm6Gmqa20s7vDxsrO3sGoqbC9y9fj7PaAhYuRl5ufpKirrKuqqKekoqCfnJuZl5WTkpCPjYyLioqJiIeHh4Yuh4iJiouMjY6NjYyKiouKiYeFg4D89vDp39bPyMbKztHU0sKUj4uHg4D48enynom8fqaPubWuqaOdmJSPiYSA8t+CdpD/g5We34CUko+UmZqSlZOOjoyKi9iEcouX6N/fx7vW8POfio2U0LW215LwgYr/mKmxrqWR6Ybei93Z0a6mktDKuDzU4XnaZUppZTDH0dRt2vaweburiZSms7i9xc3U3OHoeXZ71b21vrCnoUO+scqu53p/ho+Vmpyfp6attbi8vdHBqKmwvMrW4uv0f4OKj5WZnaGlp6iop6SjoZ+dnJmYlZSSkI+Ni4qJiIeGhYSDhYIxgYKCgoODhIWFhoeFhoWDg4OCgoF+fHnu6ePb0svDvbu/xMjKybqQi4eEgHzy6+Tsmom4fqKMtrKrpqGblpGNh4N/8+KMiIbih6K284l1YpSanZ6WlpONjIqHh9uUgZKV8+vs1sfe8/OFeH1/3cvP7pnneoHuh5SZmJGE3Iz2luPg2LmxnOvn107z7oj3dV1we0Ls8/V+8yqRkM66lp2vvcHH0Njf6O72f36D5dHK08a+uUPMv9Kp3HN3fYeOkpSXnp6krK+zs8nIr6+3xdPf7PX/hImPlJmdoKSoq6urqqelo6GfnZqZlpSSkI+Ni4mIh4aFhIOChIEygICAf3+AgIGBgYKCgIGAf35/fXx7eHVz4t7Y0MfAubSztrzAw8K1j4uHg4B88erj5paJs36diLazrKeinJeSjoeDgPjplJaH3YyqwPuNbFOWnJ+fl5eTjYyKh4bcmoeRj/n0893M4vf0d2xycd7S1vWa3nN523aBhYN/dcmM/Jni4dm8tJ7y7fqW+OmQ/5GnjamM9f3/gv0hmpzeyaCitMHFy9Tc5O30/IKChezb1N3SysUFenp9f3+agMCBlYAEf39/gYuDAYKMfwp+fnt6fHp6eXl5j3qFeYh4hHmEeAV5eXp6eYZ6A3l5eId5E3h4eHp4eXl4enp6eXp4eHh5eHyFe4t6g3uHegICAQBEb3HBl/mDjJSco6errbS4vcPIzM/eoay1vsnU3+nxfYGHjpSZn6KmqKqrqqmnpaKioJ6cm5mXlZOTkZCOjo2Mi4qJiIiHhy6IiImKi4uMjY2NjIqKiomIh4WCgf348uzi2tPOyMbIzM/Ov5WQjIiDgPjx6vKeibx+po+1sKunoZyXkYyHhID02m92++N4ls11fJKNho2Qko6RmZiampiR5Id0c3LZ5NS4ur/W6oWSl4W6rqzIhJ2bodCFkpuZk4Xai3aEvcS+q5R8ysBlcHCMem9zcYaHmGtwdXiRnYuKbNOax4qmuMTJ2dnc4+F1hnvj3M/T0c7FR3p8z47meYGIkJeanZ+lqq+0uL2/0KGstL3I09/o8HyAhoySl5yfo6Wnp6elo6Kfnp2bmpiWk5KQj46MioqJiIeGhYSEg4ODhIIug4OEhIWFhoaGhYSDg4OCgYB+fHnv6uXf1s7Iw727vsPGxbiRjIiEgH3y7OTsmom4fqKLsq6ppKCblY+KhoJ+8956ldSvk7PlgIV0YYuUlpaSlJmYmZmWj+eZhoJ+7PTmztDS4fB7eXx4y8bG4YyjoqbId4GJh4N60JKCkcTOyLaiiujfdYGAnop/hIqVl6p9goaJlaGYl3bmqd6WtMXQ1uXm6vDwfI2B8/Hm6efl3UWCg9yI2nN6gYiPkZaWnKGmq6+0tcmps7vF0Nvn8fqBhYuRl5ugo6aoqqupqKWkoaCenJqZlpSSkI+OjIqJiIeGhYSDg4KFgS+AgICBgYKBgYKBgYB+fn59fHt4dnPj3trVzMS+ubWzt7y/v7OPi4eDgHzx6uPnlomzfp2Is6+qpaCclpCLhoN/9+WCp8meoL7vhIlrU42WmJeUlZqYmZiVjeigjYaB9fzu2Nrb6PN1bW5w0M/R6o+ko6a9anF4dnNuw5OGlcXQy7qnj/HogJuEopGFivCcn9yEiI2Plaijo4D1teqcu8zX3Ors7/f3gJGE+/vy9PTz7AV7e3t/f5mAwYGVgAR/f3+Bi4MBgox/CX5+e3l7enl5eZB6hXmIeIR5hHiFeYZ6inmCeId5AXqHeQF6hHwDe3x5inqDe4d6AgIBACe7436894OMk5yhp6uxtLq/w8jMz+GuusLJ093m7fN9g4mQlpyhpKeEqBmnpaSjop+dnZuZl5aVk5GQj46OjIyLiomJhIghh4eHiIiIiYqMjI2NjoyKiIqJh4aEgoD++PPu6N7X0s7KhMcMu5aQjIiD//jy6vKeibx+po+xrKmloZuWkYyHg4D23bqO9+GNvdd1e5SNgo2Rj4qNlpeZm5qQ3ot5bGrU5OHCxMnb4O36gO7Nvb+91XaDh7j4h5CTj4LekHiAuL64tZeGf3Z5d4iEe36DWYmAhoiBf42ugaLMctBvprDC1HeJk6jF1XWCwpeTjY6Sf4SAJ7vggLDleYGHj5WbnKKlqrC0uL2/1a+6wsjS3OXs8n2CiI6Ump6hpISlH6SioZ+enZqZmJaUk5GPjo2LioqIiIeGhYWEhIODg4KEgwOEhIWEhiSFg4KCgYGAfnx57+vn4tzSzMfDv72+v8C1kYyIhID58uzk7JqJuH6ii66qpqOfmpSPioWCfvXe0K7PsKfW74CFemWHk5aUj5KYmJqamo/lnYt+evL49Nrf3+3t8Ox26N3X2trxg46QtON6gYOBedSXhI7Bx8PBp5aOhYiJmZWNj5Nol5GXmZKTn72KseB74X2+yt3whpmiuNfnfovBnJmTlZiJjotHstqDqtlzeoCHjZOUmZyhpquwtbbPtsPL0Nrk7fX9goeNk5idoaSmqKinp6ako6GfnpyamZaVk5GPjo2LiYmIh4aFhIODgoKEgYOAh4EkgH59fXx7e3l2dOTf3NjRycK+ura1trm6sJCLh4N/9/Hr4+eWibN+nYivqqekn5qVkIuGgn/55eHBw6Cy3/mFi3NZipeZl5KUmZmZmpmO56aThYD+//vm6uj28u/jcOXj4ebl/IiSk63ObHN0cm7ImIiTw8rHxqyck4mOmJ6alpmavp+dpqCamqfEkrzugu2EydXn/Iugqb/g8IKPwZ6bl5ibj5WSBXx9fn9/mYDBgZSAhH8BgYuDAYKMfwl+fnp5e3p5eXmQeoV5ingBeYZ4hXmFepN5AXqIeQZ6e3t9e3qEeYZ6i3sCAgEASNuCjajlg4yTnKGorbG0ub7Dx8zQ4rnFz9bb5Orve4CGjJKZnqKlpqenpqalpKOhoJ6dnJuZmJeVk5KRkI+OjYyMi4qJiYmIiYSILYmJiYqLjIyNjY2KiImIh4WDgoD++fXw6+Td2NTRzsvKxbmWkIyHgv748enynom8fqaOrqunpJ6alZCKhoL76s2bvPvjkrHUd4Dp0YiIhoOAjJaYmpyZkeeTdm1syNnWvsLF097Y097SxrjEytFteoGn3PmFhYP82JKBkLXEureypp+Rin+Df4WMh46QkJienpGOmoRtvodsqKmotcPNa3J3fnuLl6Scx9h4ja2r6Ujago2k1HiBho+VnJ+jpaqvs7i8wNa5xc/W2+Lq7np/hIqQlpufoqOko6OjoqCfnp2cmpmYlpWUkpCPjYyLiomIiIeGhYWEhISGgyuEhIWFhYaGhYOCgoGAf318efDs6eTf2NHNysfFwsG9s5KMiIN/+PHr4+yaibh+oousqKWhnJiSjoiEgPnpzJm40LOwzuyCi+/Hj5COi4eQmZqbnZqQ7aaKgH3o8vDc4N/r8Obe5d3Z0+Lo7nuHi6nP5np7eezQm4+evs3Gw7+1rZ6YkJWQmJ6ZoaGjqK6vpaKrbHnXk3rCwcPR4Ot7goiPjJ6tu7Hb7oSUsqnmSN+HlaPKcnp/hoyUl5qcoKWqr7O30MHO2eDj6vL4gIOJjpSZnqKlpqempaWkoqGfnp2bmpiXlZSSkI+Ni4uKiIeHhoWEg4ODgoSBg4CGgSSAfn1+fHt6eHZ05eLe2tXPx8S/vbu5ubatkIuHgn728Ori5paJs36diK2ppaKcmJOOiIWB+uzQlq7CpL3Z+ImS9siTlJKQjJObm5ydmpDwrpKIhfb7+unt6/X46uLn4+Pf7vb8goyPpb/Rbm9t2cWclKPB0cvJxLqyo52boJegqaK4rbO0triurLZwgeiagc/Nz9zr+IGKj5aUp7bJu+X6i5e1peYBfoR/mIDCgZSAhH8BgYuDAYKLfw5+fn59fHt6eXl5enp5eYx6hXmReIZ5g3qdeQV6enl6eoZ5i3oFe3t7fH0CAgEAJn2Hjn7Ig4yRmqGnq7C1uLvCx8nO5MfS2N/l6e31f4KJj5abn6GkhKUepKOjoqGgn52cnJqZmJaUk5KRkI+Ojo2MjIuLiomKhokEioqLi4SMI4uJiIeGhYOBgP359fLu6+Tf2tjV0tDNupWQioWB/fbw6PKeibx+po6ppaKdlo+Igvbn2tHFtpWAnKSkmtmQrc2ohpyIf3+MlJeYl5aO3ZF7dG9rbmrOwsTR3OVyz8e+vr/JaGlufZ7N5e3y7ebJk4SQrcjEv8fFtaeUgYGGgYGEjJSVl6ColoaTdImUdaSjoK/B0tNpg292fISNkoSht/e1ntLqSXyHj4C8eIGFjpWbnqKmqayytri92MfS2N/l6OzzfYGHjZOYnJ6hoaGioqGgoJ+enZybmZiXlZSSkI+OjYyLiomIiIeGhoaFhYWEhCyDhISFhYSFhYWEg4KBgH59e3nw7Onm497Y08/Ny8nGxLOQi4aBfvbv6uLsmom4fqKKp6Ogm5SNhoDz5NjPw7WVf4eKo5nUj7Liv5CjkYiHkpmbm5qYj+emj4eCfH157+Lj7fP4fOPf2dve6Hh4fIigxdnf5OHdx52ToLjQzsrS0MK0pJSUmJOUlqCnqKmxuKiaqHyXpIW+vbrK3e/yepOBiY+Xoaebuc/0sJrN50qBjpeBs3F6foaOk5eanZ+gqK2us9LP2uHp7vH1/IGFi5CWm5+ho6OkpKOioaGfnp2dm5qYl5WTkpCPjYyLi4mIh4eGhYSEg4ODgoWBA4CBgYSAI39/fnx6eXh2dObj39zZ1M7JxcTBv728rI6KhIB88+7p4OaWibN+nYenpKGclI2HgPPk2M/DtZR/gYGils2JsPDNlaSXjo2Wm5ycm5iP7K+YkIuEgoD+8e/4/P+A7urm6u32gICCjJ+5yc7S0dHCn5mmvNTU0tnWyLmqnqKhnJ+isrO3tLrBsaS0gaCuj83Kxtjr+v+BmomSmKCqsabG3umum9LvhX+YgMKBlICEfwGBi4MBgoh/iH4JfHt8fHt7enl5jHqIeYZ4AXmGeKd5hHqHeYt6BXt9fn5+AgIBAEfz9/r4mPiJk5uhp6yvt7m7vL/Hz+LQ2uDl6e71+oGIjpSZnJ+hoaOkpKSjoqGhoJ+enZ2cmpmYlpWUk5KRkZCPjo2NjIyLi4SKg4mJiiKJiIeFhIKB//z49vPv7Ozo4t7b19PPu5SBhYL/+vPt5vGeibx+poyPi4uIhP/68+vh2dDGuKSagMnIy7q+vKmS/IC+wIa/m5SWmJSFypl/eWxobWxoympxeXXSx8nIxsNrZ8lvfJnB2NXV29LHmZCewNrijc7DurKaiYSGhH6Ej4yHmKHOy5ahkZaYcK+tscfNcnRtcHZ6gIOHyaK0jrfG0+HqTu3y772B4H2Hj5Wbn6Goqqurr7a91tDa3+To7fP4gIaLkZaZnJ2en6ChoJ+enp6dnJuampiXlpSTkpGPjo2NjIqJiYiHh4aGhoWFhISEg4iEI4OCgYF/fXx68u/t6ujk4eHc1tPRzsrGtI99gn/38uzm3+uaibh+oYiOiomHg/z28Ojf1s7Et6KYfsfFybe7uKWP9nm0s327oJqanJeI2q+UjIF8f3557HqAh4Pv4+bq6eV8eOt/iJ+/09DR2NHIpJ+tyuHtl9jPycGrnZiYlpKZo6Cbq7TX5K25maaof8vHzOPrgoV/goiNk5eb1putiLHAztzkTPD38J9z03aAiI6Tl5meoKGhpKyz0Njj6O3x9vv/g4mOk5ibnp+foaKjoqCgn5+enZybmpmXlpSSkZCOjY2MiomJiIeGhYWFhIOCgoKGgYWAIn59fHp4d3Xn5uTg3dvY19LNysjEwb6ujXuAffXw6+Xd5paJs36dhY2KiYeD/Pbw6d/Xz8W3opd+xsXJtrq2oYvxcqeeb7OinZydmYnhuZ+Wi4aHhYH6gYeOiv3z9fr59ISB/IWOn7vKxsjQysSmpLPO5fWf4NfQxrKnpqSgnqmyraq3vdzzucadsLOI2tba8fmJjYeKkJacoKTXkaiFr7/O3uWEfoJ/l4DBgZSAhX8BgYuDAYKFf4x+iH0FfH18e3uHeol5AXiEeYZ4A3l5eJB5AXqUeYR6hXmKegJ8fYZ+AgIBAEWA+5GRj7XJ5oWUoauwtba2p/HFzeTV3uLn6/F+g4mPlJeanJ6foKCio6OioqGhoJ+enZ2cm5qYl5aVlJOSkpGQj46OjYyEi4OKjIkhh4aEg4GB//369vPy8e/t6ePc2NbTuZSS/fz49e/o4PCeibx+poyWk5CMhoH++PLp4NnOwbGlopWJiP7x8/Ht6uTZvdCSlJeYmZOG356FgHdrcnVtbHB2fHNubmhobMJlZmp2fpa70tfW1tLGqZajxd7d4dfJvLSliY6IipWYjY2TmK63da7CkpSLa8bLym1sd3t+j4uGu6yDtNHc5O72/oGDJ3fGWWmCoq/Jd4WTnaGlp6WY6ra82dXe4ubq8HyCh42RlJeZm5ycnYSfJp6enZ2cm5qZmJeWlJOSkZCPjo2NjIuKiYmIh4aGhoWFhISDhISEhIMkgoKCgYB/fXt68vDu6ujn5uTj39nSz83JsI+N9PPv7ejh2eqaibh+oYmUkY6LhID79u/n3tbMv6+joJSHh/vu8PDr6OLWt8aMnJ2dnpiK67acloyAhod/foKHjIR/fnl6ful3eHuGjKC+0tbU1tPIsqa00ufo7ePWzMW2nqSdn6qwpKOprsXMh8fenKKae+Lo53x8iIyQoJyIs6V+rMnS2uXt8np8THOrO1V7m6a/cX6KlZmdnZuO4ayy09zn6+7y94CFiY+TlpmbnJ2enqChoKCfn56dnJuampiXlZSTkpCPjo6MjIuJiYiHhoWFhISDgoKEgYOAhH8ifXx7enh2dejm5eDd3d3b2tbRysfEwKqNh/Dw7evm39fklomzfp2FlJCOi4WA+/fw597Xzb+vo6CUhof67vDv6+fh1bO6g6ChoKCajfLDqaOYi5CRiYaKj5SMiIaCg4f7gYGDjpOjvM7Rz9HQxrWuvNjs7vPq3dTMvamyq6y4wbOxtrrQ15LV7aKspYXz+PiFhZCUmaijgqmeeqjGz9jj6u54eAJ/foZ/iYABf4mAw4GRgIh/AYGLgwGChn+Ofol9Anx7hnqTeQF4pXkDenl5hHqDeYd6A3t8fYh+gn8CAgEATKOYotPy+Pr47u30gpGcpamH2rfN3N7i5Or0f4SLkZSXmJqcnJ6foaGho6KhoKCfn5+enZybmpmYlpWVlJSTkZGQj4+OjY2MjIyLioqGiSeIiYiIh4eHhYSDgYD//fr59vPy8O3p5uHZ09G3lO7ggoWGh4WD+J+JvH6mjJiWk4+KhYL/+/Tu59zTycC5raWkm4+OjYiFgv/689SC4KGXkYbYp5F9dHZvd3Vwd4SBeHR2cnlvaW1weHiIkrLQ09TOzsiqn6PE3ePk3dLFuq6fpqqoqKKgp6WppL2suc2FiIx2asRzmJSY/r6CrNDo8fuBhoqPlJieo6dOloeNu9jd29THxcptfoqSlXrMqLrQ3OLj6fJ+gomOkpOVl5mZm5ydnZ6fnp6dnJycm5uamZeWlZSTkZGQj46NjYyLioqJiIeHh4aFhISEhoMlgoKBgYB/fn18evPx7u7s6ejm4+Dc2M/JxayM0tN7fHx7d3Ttm4m4fqGJlpSRjoiEgfz48uvk2tDFvraroqGajY2Lh4SB/fjvz3zbp56YjezBqpOKjISMioWKmJOLiIiFjIJ8gYOKiZmft9PU1c/RzbawtdPq7/Hr4tfMwbS8wL7Bu7jAvsK91sfX6pKXnId54IOkkJP2t36myN/n73t/g4eMkJSZnU6PfICuyM7LwbSzuWR2gYmLcr+esMvj6evx+oGFi5CUlZeZm5ucnp6en6Cfn56dnZ2cm5qYl5aUk5KRkI+OjYyMi4qJiIiGhoWEhIOCgoGGgCV/fn19fHp5eHd16ujl5ePg397b2NTQyMG7pIe7y3Z2dXJuaeSWibN+nYaWlJGOiYSB/fjy7OXa0Ma/t6uiopqNjouHhYH99+7Ld9Spo5yR99C4oZeZkJiVj5SinJWSkY6WjIeLjpSSoaS30tHTztHNu7i/2vH1+fPq4NTJvsnOzNDNx87Mz8ni1ef6m6CokYLxjKaDje6ze6PG3eTseX2AhIiNkJSXi3+GgAF/iIDEgZGAAn5/hoABgYuDAYKHf5R+hX0Be4R6vHmFegd5enp7fHx9hn6JfwICAQBN2Of6g4mPlZmamZiYlIqC7N37l7rP5er2gIWKjZCRlJeZmpucnp+goKGioqGhoJ+enZ2dnJuamZiXlpWUlJOSkZGQkI6Ojo2NjIyLioqEiSiIiIeHh4aGhoWEg4KBgP/+/Pn28+/r5+Lf29jNvJfO5+v49O3l2e+eibx+po2dm5mVkYyIhYOA/fjw6ePb1cvDvbmup6SfmZSNiYaDgfnE15KCz6iah4N+gY+KfYCHhHt4goGCdHFxdYCNjJCftcTUxbWwpq+rtdPg3tzW086+uairsGqntMzMgd/b1NjDzeuSvNjtiaO2xd3t+YGHjZOZnqOprrW8wsfPKMfS4Hd9goeKioeFg31zbMq2nIivyOLp9H+Dh4qNj5GUlpeZmpucnJ2Enk2dnZybm5qamZeXlZSTkpKRkI+OjYyMi4qKiYiHh4eGhYWEhIODgoKCgYGBgIB/fn59fHrz8vHv7enm4t7Z1dLOwa+Kk9DR3NfRy8Tnmom4fqGJnJmXk4+KhoSCf/n07Obe2NHHv7q2rKWinZeSjIiEgX/2wdKQiunFtaGclZepoZKWnJmRjpeXlomHh4uVoqKircLO3M2/u7fCv8nj7u7t6Obi1NHBwsh4w8/JvXzY1c/SucPhjLbS44Ocr7/W5e97gIWKj5San6SqsLa6v3m9xtJvdXt/gYF9enhxZ2G5n2OAqsfn7vmBhYmMjpCTlZiZm5ucnZ6en5+fnp6dnJybm5qZl5aUlJKRkZCPjo2Mi4qKiYiHhoWFhIODg4KBgYB/f359fXx8fHt6eXl3durp6Ofk4d7a1tHPzMa4pX9tvr3JxcC8t+CWibN+nYacmZeTkIuHhYJ/+vTt59/Y0sjAu7espqOdmJOMiISBf/a/zYyR+dfGsaylpbqvnqOoo5yZoqGhk5KTlqCtrau0x9Lez8PCwM3K1Oz39/fz8e3g3s/Q14HV4LireNLSysyrttWItM3cfZitvtbk7Xl9gYaKj5WanqSpr7K3g3+MgIN/hoDHgZCAiH8BgYuDAYKKf5Z+BX19fHt6sXkGenl5enx9h3yEfYd+jn8CAgEAefmBho6Um6KorbCytbOwqZqSko3A44iIiYmKjI6PkpWXmZqbnZ6fn6CioaGgoKCfnp6dnJybmpmYl5aWlZSUk5KRkZCPj4+Ojo2MjIuLiYmIiIiHiIeHh4aFhYSEg4GAgP/6+Pb08Ozm4dvUzsW1iufEyuDh4eDe8J6JvH6mjqWhnpuZlJGOjYuIhYKA+fPs3tzV0M3Evbawq6WfmpSRkI2LhMHJ5rCUlZOnl5KNhIOMh4GFg4aLhoWKg4uNoambqri2tqmhrrfH1tzW2NHRzcCvqrTCzbazhZ+oq62yuLq9w87Z4eXw/YKHjJSboKatsbe+xczT2dzi6vIn5HZ7gYaNlJmeoKKkop2WhmRmf6/WhIWFhoeJi4yPkpSWl5iam5ychp0knJybmpqZmJeWlpSTkpKRkZCPjo2NjIuKiomJiIeGhoWEg4ODhIIkgYGBgIB/fn58e3v08O7t6ufj3dfSzMW8qn6qp7rT1NXW1uqaibh+ooqjn5yZl5KPjIuJhoOAffTu6NrY0MzJwbu0rqmknZiSj46LiYK+yO7Nr7CrwrKsp5ybpJ+Ym5qdop6copqipLjAr73Kycm9uMPO3Oju6uzm6ebay8fR3s6tq4Kdpqmqr7W3ub/K1Nzf6PN8gIWLkpaboaWqsLe+w8jL0Nfeeddvc3l+hYuQlJeZmpiSinlJSnal0oSFhoeIio2OkZOVmJmam5ycnJ6fn56enp2dnJuamZiXlpaUk5GRkI+Ojo2Mi4qKiYiHhoWFhIODgYGAgH9/f35+fXx8e3t6eXh3d+zp5+bj4NzW0czGv7WidYSWscvN0NLS5JaJs36dh6OfnJmWko+Mi4mGg4B99O7o2tnRzcrDvLWvqaSemJKPjoqIgbzH79/Bw7zTwr23q6qxrKSnpamuqqivp6+xxs67yNTT1MjG0Nvp8vj2+PP39enb1+LyyKSlf5+oq6yyt7i6wMvV3N7o8nt+goeNkZWanqKor7W5vsHGzNMBf5SAy4GPgIh/AYGLgwGCjn+WfgN9fHqveQN6fH2QfpN/AgIBAE6Jj5acoamvtbe8vsDCwLuwhZKt1oCLjI2NjpCSkpSXmJmam52en6ChoaGgoaCfn56dnZybm5uamJeXlpWVlJOTkpCQkI+Pj46OjYyLi4qEiSeIiIeHh4aGhYWEg4KBgP379/Tx7urm39fQyMC3pemS4PHz8O7s85+JvH6mjq+rqaWjn5yamJeUkYyJh4SC9/bu5+Tg2tLLx8K6tK+qpqKgn5uWjNCBzsGloJ+ek5SQop2fmZebm5GXmJegoa+9va7AurPEubO91NjSzsjNzMhwwfbTkqyxtLi+v77F0+Pv+YGFio+TmZ+mq7K4vsTN1Nvk7fT7gYGAg4YnfoKIjZOaoKSnrK6vsa6om2Z8n8R7h4iJiouMjo6QlJWWl5iam5ychp0inJubmpqYmJeXlpSTkpKRkZCPj46MjIyLioqJiYiHhoWFhISDJoKCgoGBgICAf359fHvz8e3r6ebi3dfPycG5rpvgjtjq6+no5e2bibh+oousqaejoZ2al5aUkY6Kh4WCf/Py6uTh3dfQyMW/uLGsp6OfnZyYlInOg9bcwLu6u66uqr23t7KwtLSqsLKxu7vJ1tTD1dDI3NDM1urv6+fj6enmf73ty42qr7K1u7y7ws7d6PB8gISJjJKXnKGnrLG2vsTK0trg5nZ2dHd7eXd7gISJkZebnqKkpaainI5Sb5e6eYaIiouMjY+QkpWWl5iZm5ucnZ6enp2dnZycm5qamJeXl5aUkpGRkJCOjo2Mi4qKiYmIh4eFhISDgoGBgYCAf39/fn19e3x7e3l4d+3q5+Xi39vX0srDvLOoldeM1ejp5+bj6JeJs36dh6ypp6OhnZqYlpSRjoqHhYKA9fTs5ePf2tLJxsG5s62oo5+dnJmUic+E3PHUzs3OwL+6zMfFwL7Cwbi/wsHMzNnn5NHj3tfs39zm9/36+PX7+/iHsuXGjayytbi+v73E0N3n73t/goaJjpOYnKGmqq61u8HHz9Xab29ucXSUgMyBj4CIfwGBi4MBgpF/ln4DfX17qHkEent8fY1+lH+FgAICAQB5mp+kq7G1ub7CxcjJy8zKxsPE0eGHjo6Oj5GSk5SWmJqamp2dnZ6foKChoaCgn5+fnp6dnJubmpqZmJeWlZWUlJORkZCQkI+Ojo2NjIyLioqJiYmIh4eHhoaFhYWEgoD/+/j18u/q5eHc1tDJwbiuoYyA//78+ff1n4m8fqaPu7e0sa6qqaako6KfmZSRjImFgoD9+vby7+fi3djSzMW/vLiyr6qlpKijjMqB7Xi3trKvrqKaobmsoqSrsKvEaMK7sbmyyW7FzWtvhW1vjbvMr4OquLu+wMXIysvR2ef3gomOk5icoaettbvDztjd5O3z/IOHio6QkZCRliuNkZecoaWorrK1t7e5ubeyrrLA0YGJioqMjY6QkZOVlpeXmZqam5ycnZ2dhZwlm5qZmZiXlpWVlJOSkpGQj46NjYyLi4uKiYmIh4aFhYSEhIOCgoSBIICAgH99fPTy7+zq5+Ld2dXQycK7sqeah3349/Xz8e+bibh+ooy4tLGuq6imo6Ggn5yWko+Kh4OAfvj28+/r5N/a1c/Jwry4tbCrp6KhpqKMy4T3htTTzsvLvrW91Me9wMnNyOF33dXK1MzifN/oeX2Xe32Zs8Onfqe1t7u9wsXGx8zU4fB+hIiMkJSYn6SqsLfAyc3T2uDmd3t+gYOEgoSJJ4WJjpSZnJ+kqKyura+vrKaip7bJgIqKi4yOkJGRlJWXl5iam5ubnIedS5ycm5qZmZiWlpWUk5KRkJCOjo2Mi4qKiomIh4aGhYSDgoKBgYF/f35+fn18fX18ennu7Onn5eLc2NTQy8W+t66jloV79vXz8u/pl4mzfp6Jt7Sxrquop6ShoJ+clpKPioiEgX75+PXx7ebh3NfRy8S9ubWwrKejoaajjc6G/pDq5+Le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goGA/fn28/Hu6ufk3trV0M3Jwry3s6+qpJqOhuLmjZadoqepqqqplJPj3t/d19TU1NLOysfBvLq3trCppaOjoZ2Zl5SSjouJh4WDgP/8+Pfy7uvm5eXi4N3dS93c29zc3NjY19bX0tHW09TX2d3e5OTg4uHk5ufm6Ors7vH1+Pn8gYWMlZ2lrLC0uL/J0t7m8Pf9goWGiY6Tlpmfpamsrq+vsbKztRmprbG1ub7CxcfLzc7P0c/PzMzjf4qOj5CShJMIlJWXl5iZm5uEmoWbgJybmpqZmZiXlpaWlZOTk5KSkpGQkI+Ojo2Mi4uKiomJiIeGhoWEhIOCgYGAf358e/Tx7uzq5uPg3NjU0MvHxL23sq6rpqCWi4Pd4YqSmZ6ipaampZGQ39rb2tXR0dDOy8fFv7m3tLStp6OhoZ6bl5WSkIyJh4WDgH/79vLy7enmUuLg4N7c2NnZ19jZ2djV1dTS083M0s/P0tXZ2+Hh3N7d3+Lj4uPl5+ns7/P09n6CiZGYoKWprLC3v8fS2eHn63l7e32BhYeKkJeanZ6fn6Gio6YjoKOnq6+1uLu9wcPExcfFxMLC232JjY6QkpOTlJSVlpiYmJqHm4Ccm5ubnJuampmZmJeWlZWUk5OTkZGQkJCOjY2Mi4qJiYiIh4aFhYODg4GBgYB+fn58e3p47+3r6OXi39zZ1dHNyMTBurWvq6mknpSKg9nch4+Vm5+hoqKhjY3f29za1dLS0tDMyMbAu7m1ta+opKOioJyYlpORjYqIhoSBf/z381bz7+ro5OLh4N7b3Nva2t3d29jY1tTVz83U0dDV2Nze5OTf4eHk5ufl5+rr7O7y9Pb4foKJkJefpKeprLO7wszT29/ic3V1dnl9f4GGjZGUlZaXmJmanZOAy4GagAGBioIBgaN/tH6Sf5OAAgIBABrDxszP0dTY3d/i5OTl5ubj5OyBjZWampqZmoWZBpqbm5ydnomfGZ6fnZ2dnJybm5qamZmYmJeXlpaVlZOTk5GEkICPjo2NjIuLioqKiYiHhYOCgf/++/f08vDt7Orm4t7Z09DOyMG9ubSuq6eglZKtxdbn9P+Cg4OA6KDt6+vp5+Tj4eDc2tXRy8fJxsC4sbCwraqno6CdmpeUkpGPjoyJh4eFhIOB/vv39PHx8fDv7u7u7/Dw7+7v8e/r6+7u7+7u7jXx8fX29vX29vj7/4GDhYiMkZihqa21u8HJ0Nvk7fT5/oKHi42Pk5icoKSorrCytLW1tbi7viWytbq9v8LGy87P0dHS09PR0tp5hY+UlJWUlZWWlZWVlpaYmZmahpsKnJycm5ybmpmZmYSXgJWVlZSTk5KSkZCPjo6NjIuLi4qJiIiHhoaFhYSDgoKBf3589vXy7+zq6Obl49/c2NPOy8jCu7i1sKqnpJ2Sj6nB0uLv+X+AgH7jnOnn6Ofl4d/e3dnX0c7IxMXDvbavrq6rqKWinpuYlZKQjo2LiYaFhYKBgH759vLv7e3t7OvqDurq6+vs6unq7Ovn5+nphOo17e7x8vLx8vHz9vp/gIKFiY6UnaSosLS6wMbQ2ODl6u15foGBg4WJjpKWmp6goaOlpaaorK8lqauxs7W3u8DDxcfIyMnJyMfQdYOOlJOUk5WVlpWVlZaXmJmamoScAZuEnICbnJuamZmZl5eXlpWUlJOSkpGRkI+OjYyLiomJiIiHhoWEhIODg4KBgH9+fXt68fDu6+nm5eLh39vZ1dDKyMa/ubazrqilopuRjqe/0N/s9X1+fnzgm+jm6Ojm4+Hf39vY09DJxcfFv7ewsLCtqqejn52al5KRkI6MioeFhYOBgAV/+vj08oTvEO7t7ezt7u7t7e3v7enp7OuE7TXw8fT19fT19Pb5/H+BgoaJjpOco6eusre8wsvS2d7i5HR4ent8foGFiY2QlZeYm5ycnZ6ipZKAyoGigISBgoCrf6d+lX+VgAICAQAoycvR09Ta3uDi4+Xo6Ojn6Ov5h5Kbn5+fnpybm5qZmZmampubm5ycnYeeAZ2EnAabmpqamZiElwSWlZWUhJOAkpGRkI+Pj42MjIuKiYiIh4aFhIKCgP/8+PTy8O7t7evp5+Ld2dXRzcfDv7u0raupoZqSjIiFhISDgYD9+/n29PPy8fDv7uzo5+Lc19HR087Jwr+9urW2s6+rqKWin52cm5mXk5CPjo2NjYqHhIODgYCAgYGAgIGA//6AgP/8/P86/v78/oCAgIKCgoODhIaHi46PkpifpqyxuMDHzNPb5O31/IGEhomOkJSYm5+lqq+ztLS2t7q5u77Awyq3ub/BwsjMz8/Q0tXV1dTV2eh/i5WampqZl5eWlZSUlJaWl5iYmJmZmpqFmwaampmZmZeEloCUk5OUk5KRkZCQj4+Pjo2Mi4uKiYmIh4aFhIOEg4KAgH9+fPXz8Ozr6efn5uTi39vW09DMyMK+u7ewqaelnpePiYWDgoGBf3759/Xz8PDw7u3s6+nl5N/Z1M3O0MzGv7y7t7Ozsa2opaKfnZqamZeVkI2NjIuLi4iFgoGBgH9+f0d/fn5/f/v5fX77+Pj7+fn4+n5+f4CBgIGBgoOFiYyMj5Wcoqiss7rAxcrR2eHo7Xl8fn+DhIeLjJGXnKCjo6SmqKuqrK6wsgyusLW3uL7CxMXGyMyEyxrO33yJlJmZmZiXlpaVlJSUlZWWmJiYmZmamoWbAZqEmYCXlpaWlZSSk5OSkZCQj4+Ojo2Mi4uJiIiHh4WEhIOBgYGAgH59fHt58O/s6ejl5OPj4d7c2NPPzsnFwLy5ta6opaOclY2JhYOCgYF/fvn49vPx8fHw7+3s6ufm4dvWz9DSzcjBvr25tbWzr6qnpKGenJuamJaRjo6MjIyLiIWCghqCgYB/gYCAf4CA/vx+f/36+v38+/r8f3+AgYWCLYSGio2Mj5Wcoqersri9wsfN1Nzh5XV3eHp9foCDhImPlJeampucnqGgoqSmqJKAyoGlgL1/BH5+f3+Ifp5/mIACAgEAHs7Q1tra3uLl5ebo6+zq6uz0g4yXn6Onp6imoJuamoeZBJqanJyGnYCcnJybnJqampmYmJeXlpaWlJSTk5OSkpKRkZCPjo2NjIuKiYmIh4aFhIOCgYD8+PXz8O/t7Orq6enm4t3a1tPOyca/ubSwrKqloJuUjoqHhoaFg4KA//37+/r5+fn49fPv7Ofm4eDd2dTMxsbBv7y5t7Ovraqop6aloqKgnpybmVGWlZaTkZCOjIyNjY2LjIqKh4qKiYeIjIiHh4eKiouMjo6QkZGTlpicoKassrm/xs3S1t7m7vb7gISIjJCTmJucn6KorLC0t7m7u72/wcTGyMsdvcDGycrN0NLT1NbZ2djY2eJ7hY+ZnZ+goZ+alpWElIWVApaYh5mAmJmYmJiXlpaVlJSTk5OSkpGQj4+Pjo6NjYyLioqJiYiGhYWEg4OCgYB/fn178/Dt6+ro5uXk5OPi39zX09DOycTBu7Wwq6emoZ2YkYyHhYSEg4KAfvv5+Pj39vb19PLw7Ojk497d2tbRycPDv726trSwrauopqSkoqCfnZyamZdRlJOUko+OjIqKi4uLioqJiIaIiIeFhoqGhYWFiIiJioyMjo+PkJSWmZ2iqK60usDGy8/W3OTq7nl9gYSGiY2QkZKVmp2hpKeqq6uusLK0tri6HLO2u7+/w8bIycrN0NDPzs/Yd4OOl5uen5+emZWFlAeVlJWVlZaYh5mAmJiYl5eWlpWVlJOSkpKRkZCPj46OjY2MjIuKiYiHh4WEg4KCgYGAf358fHt57+zq6Obl4+Lh4N/f29jT0M7LxcG+ubSuqaWkoJyXkYuHhISEg4KAfvz6+fn49/f39vTy7urm5uHg3NjUzMXFwb+8uLayr62qp6alpKGgnp2bmphRlZSVkpCPjYyLi4yMi4yKioaJiYiGh4uHhoaHiYmKi42Nj5CPkJSWmZ2iqK2zuL7EyczT2d/m6XZ5foCChIeKiouNkpWYm56goqGkpqiqrK6xkYDLgaiA4n+agAICAQAd1dXb3+Hk5+bo6+rt7/Hw8/+HkZ2mra6sq6ignZqFmQuXl5eYmZubm5ybnIWbE5qampmZmZiYlpaVlZSTk5KSkZCEjxmOjo6NjYyKiYiHhoaGhYOCgP77+vbz8O7thOyA7evp5uTh3dbT08zEvrq0sq+rqqeinJiUkI2LiYaEg4KBgoGAgYKBgf/7+PXw7ern4+Hc2dPNycjDwb+7uLa0s7Gurq2rqqmnpaKgn5+fnZyamZiZm5mXlJSTlJWUk5SUkpSUlZWWl5ibnJ6goKGkqq+1u8DFzNDV2eDo8Pj9gIQah4uPk5ecoKOmqq2xs7a6vb/AwcTGyMvNz9ItxMXLzs/R09TV19fa3d7d4e5/iZWepKSjo6Gal5SUlJOTlJKSkpOVl5eXmJeYhpcvlpaVlZWUlJOSkZGQkI+Ojo2LioqLi4qKiYmIh4aFg4KCgYKBf3189fLx7uvq6OeF5oDk4d/d2tfRzc3Gv7m2sK2qp6akn5qWkY2LiIeDgoGAgIB/f4CAgH/8+PXy7ern5N/e2NbRysbFwL69ubWzsbGuq6yrqaenpaOgnp2enpybmZeWmJmYlpOSkZKUkpCSkpCRkZKTlJSVmZqcnZ6eoaessre7wMbKztLX3+ft8Xp+gBmDh4qNkZWYmp2fo6Snq66vsLG0tri7vb7CHLq7wMTFyMrKzM3N0NPV09fkfIeSnKKioaGgmZaGkw6SkZKTlJeXlpiXmJeXl4SWEZWUlZSUk5KRkJCPj46NjYyKhYkYiIeHhoWEg4KBgH9/f317evDu7ezo5+XkheOA4d7b2dbTzsrJw7y3tK6sqaalo56ZlZCNi4iHhIKBgICBgH+AgYGA/vr39O/s6ebh39rY083Ix8LAv7u3tbOysK2trKqop6akoZ+enp6cm5mYl5mamZeUk5KTlZOSlJSRkpOTlJWVlpmanJ6enqGmq7K2ur/EyM3P1dzj6et3en0ZgIOGiIyPkZOWmJucnqKkpaanqqyusrS1uJGAyYG0gNZ/nIACAgEAL9rd4OPm6Onq7O/x9ff39v2Eipagq7O0sq6oop2amJeXl5aWl5iZmZmYmJiZmpqZhJpVmZmZmJeWlpaVlJSTkpKSkZGQkJCPjY2MjIuKiomIh4aFhIOCgYD//fr39PPw7uzq6+zt7O3u7uvo493V0szGwb67uLSzsK6sp6WgnZqWko6Li4qKiYSIdIeGhIKB//z69fPv7Ojm4dzW0tDPzMnHwry7u7q6uLe2tLKwr62rq6qpqamnpqWnqKaioKOjoJ6doKCfnp+goaOkpKWpq62vs7e7vsPIzNHX29/o8fj/gYSHi46SlpmeoqWprq+ytrm7vsLFxsjMzM3Q0dPVK8nMz9HU1dbX2tzf4uTl5et8goyXoaipqKWgm5eUkpKRkpGQkZKTlJSTk5SFlViXl5aVlJWUk5KSkpGQkI+Ojo6NjIyLi4qJiIiHh4aFhISCgYGAf358e/b08e7s6+ro5uTk5ebl5ubm4+Hc18/Nx8G9ube0sK+sqqijoZ2bl5OQi4mIiIiHhYZzhYOBf/z59/Lw7Onl497Z08/NzMnHxL+5ubi4t7a1s7Gwrq2rqaqop6enpqSjpqajoJ6hoZ6cm56enJycnZ6hoaGipqiqrK+zt7q/w8fM0NTX4Ojv9Xx+gYOGio2QlZibnqGhpKeqra+ztLW3vLu8vsDBxIC/wsbIysvMzdDR1Nja29vieH+JlJ+mpqWjn5qWk5GQkZGQj5CRk5OUk5KTlJSUlZWWlpWUlJOTkpGRkZCPj46OjY2Mi4qKiomIiIaGhYSEg4KAgH59fHx6efLw7uvp6Ojm5OHi4+Pi4+Li393Z1M3KxL+7t7ayr62rqaejoJ2al4CTkIyJiYmIh4aGh4eGhoSCgf/8+fTz7uvn5eDb1dHPzsvJxsG6urm5ube2tLKwrq2rqaqop6eopqWkp6ikoJ+iop+cnJ+fnZydnZ6hoqKip6mqrK+zt7m+wsbLz9LV3eXr8Hp8foCChomMkJOVmJubnaCipKapq6ytsrKztbe4upCAyYG4gNF/noACAgEAH9/i5ejp7Ozt8PP09vb3+oGGjZejrLGysa2po52amJeFlQmWlpeXl5iYmJeFmICZmZiYmJeVlZSUk5OSkpKRkJCPj46NjIuKiomJiIeGhYODgoGA//79+/j18/Hv7uvq6uvr7fD08/Pw6+Pb1MvFwcC9vLq4tbKvraypp6ShnZmXlpWUkpCPj46NjImHhYOBgYD9+Pbz8O3o5uPg3NfU0czHxsXCw8TGxsPCwr+8uk67ure2tra0s7W1tbGusLCvrqytsLCvrq6wsbKzsbS2ubzAxcjKz9TY3ePr8/b7gIOHi42RlJmdoKSnq6+ws7a6vb/CxMjM0NPT1dbX2dwpztHT1tfZ2dre4eLk5OXpeH+Fj5qhpqemo6CclpSSkZCQkI+QkJGSkpKFk4SUgJWVlJSUk5KRkJCPj46NjYyMjIqKiYmIh4aFhISEgoGAf39+fHv29fXz8O7s6uno5uTk5eTm6Ovq6ebj3NTPxsC8u7m4trWyr6ypqKakoZ6al5SUkpGPjY2NjIuKiIaEgoB/fvn18u/t6uXj4N3Z1NHOyMTDw8DAwcPDwL+/vbq4Tri4tbS0tLKxs7Oyrqytrq2rqqutrayrqq2usLCvsbO2uLzAw8XKz9LX3eTr7fF7f4GEh4mNkZSYm52go6Smqa2vsLO0t7q/wsPExsbIy4DEyMvNzs/P0NPW2Nra3OB0fIKMl56jpKShnpuVk5CPjo+Pjo+PkJKSkZKTkpKTk5OUk5SUk5OTkpGQkI+Ojo2NjIuLi4mJiIeGhoSEg4OCgYB+fXx7ennx8vLv7evp5+fn5OHh4uHi5Obl4+Hf2dLMxL65ube2tbOxrquop6WjoYCem5eVlJORj46Njo2Li4mHhYOBgH/8+PXy7+zn5uLf29XT0MrFxMTBwcLEw8G/v726uLi4tbS0tLKxtLOzr62urq2sqqytrqyrqq2vsLCvsbO1uLu/w8XJzdHW2+Po6u15fX+ChIaJjZCUlpibnp6foaWmp6qrrbG1t7i6u7u+wY+AyIG+gMt/oIACAgEAJOPm6evr7vDy8/b29/j7/oKHjZafpq2urauloZ2ZlpSTk5SUlIaVhJYEl5eWloSXgJaVlZWUk5OTkpKRkI6Oj46NjIyLiYiHh4aFhYOCgoGA/v38+vj18/Lx7+3s7Ovr7O/x9Pb49/Pl2tnMx8bEwsC+vLq2s7Owr66sqaajoaCenJqYmJiWlJKQjYuIh4aFg4GA/vv38u/t6ubh4NzZ19bX1dTT0NPX09DOzs7MycbESsLBwcLBwsG+vr+/wL+9v77Aw8HAwL69vL/Bw8jN0NTW2Nre5/H5/YCAgYSIjZCTlpqdoKSorLCxsrW7wMTJysrLz9XY2dzb297hHtHU19na3N3g4eTk5efq7Xp/hY2WnaKjo6GdmpaRj4SOgI2Oj5CRkZCQkZGRkpKTkpKSk5KSkpGRkZCPj4+Ojo2MiouKiYmIh4aFhIOCgoGAf359fHv19PPy8O3s6+rp5+bn5eTl6Onr7Ozr6NzU08jDwsC+u7q4trOwr6ysq6mmpKGfnZyamJaVlZSSkI6LiYaFhYSCgH779/Pv7Oro493bFNjU09PT0tHQztDT0M3MzMvJxsTChr83vbq7vL29vLq8u72/vr28u7q5u72/w8jLztDS1dnh6vH1fHx8gIOGiY2Pk5aYm56hpaWmqa6ytoS5Cb3Ex8jKysrMzx7Iy87Q0NLU1tjb2tzd4OR2fIKJlJufoaGgnJmUkI6FjA+NjY+QkI+QkJCRkZKSkpGEkoCRkZCQkI+Ojo2MjIuJioqIiIeGhYSDgoGBgH99fHt6efHw7+7t6+rp6Obl5OTi4uLk5ebn5eTi2NDRxsHAvry6ube1sq+urKurqaajoJ6enJqYlpWVlJORj4yKh4aGhIKBf/369vDt6+nl393Z1tTU1dTS0s/R1NDOzMzMycfEwkq/v7/AwMC9u7u9vb68u7u7vb6+vLy7urm7vL7CyMrOz9HU2N/o8PN6e3t+gYSHioyPkpSXmpyfn6ChpquusbCvsLS5vL3Av7/CxY+Ax4HCgMV/o4ACAgEAIObq7Ozt7/Dy9fj4+vv9gIGFipCYoaioqaShnZyXk5GRhZIGk5OTlJSThZSDlYaUCZOSkpKTkpGQj4SOgI2Mi4mIh4aGhYWDgoGB//39/Pr49/X08vDv7uzr6+vu8vL2/Pr88OXj19DLyMXFxMC+vLq3trOzsbCvrqupp6Wko6OioJ+enJmWkY6NjIqIhYWDgoD9+vXy8Ozq5+np6Ofl4uHh4uXl493c2tjW08/Oz9DPy8rLy8rKy87Ozs/QOs/Pzs7NysvMzdHV2+Dj5efq8fj8gICChIWIi4yQlJabn6Kkp6uvsrW4u7/Cx83S09LT2N3f4ODh4uQn1Nja293e3+Hk5ufq6+x3en6CiI+Ynp+gnJqWlZCNi4uLjIyMjY2NhI4Kj4+Qj4+QkJGQj4SQgI+Oj46OjYyMi4qJiomJiIeFg4OCgYKBf359e/Tz8/Py7+7t7Ovq6Ojm5eTk5unp6/Dt7+bd29LMx8TBwcC8ubi3tLKvsK6srKqopqSioaCgoJ6dm5mWlI+Mi4qJh4ODgoF/+vfx7+3o5uPm5uXk4t/e3t7h4N/Z2NbV09DNy8vOR8zIx8jIx8bIy8rLzczLy8rJyMXHx8nM0Nbb3eDh5Ovy9nx9foCBg4WHio2PlJeanJ6ho6aprK6xs7e8wMLAwsbMzs7Oz9DSNMzP0dLT1dbZ293f4eLkc3Z7gIWNlpycnZqYlJOOi4mIiYqKiouLjIyNjY2Oj4+Pjo+QkZCFj4COjY6OjYyLi4qJiYmIiIeFg4KBgICAf318e3nv7/Dw7uvr6urp5+Xl5OLi4uPl5ebp5+fh2dfQysXCwL+/uri3trOxr6+urKuqqKakoqGgoKCenZyal5WQjYyLioiEhIOCgPz48/Hv6ufk6Ofm5eTg39/f4uHe2djX1dTQzcvMzkfMyMjHyMfGyMvKy8zMy8vKyMjExsfIy9DU2tzf4OLq8fR7fH6AgIKEhYiKjJGUlpeanJ6go6WnqauvtLe3tre7wcPDxMXHyI6AxoHHgL9/poACAgEAIers7O7t7fLz9ff5+/39/oGDiIuQl5udnpuYlpWSkI+Oj4SQg5GEkoORhJKGk4CSkZCQkI+Ojo2NjY6NjIuJh4eGhYWEg4OBgYD+/fz6+vn39vX08/Hv7u/u7/Dw8vb7+PL07uLW1c/LycfFxMG/vLq5uLi3trSxr62qqKisrayqqKShoZ+cm5mXlJKPjIuJhoSBgf/9/fv6+fn49/b09PDv7vHx7erl4+Pf3N7d2wze3drb2dzc3NjW2dyE3jff3N7i5ujo7O7v8fX3+v3/gIGEhomKjZCSlJidoaSoq66xtbm9v8PHys7R1dnY1tXb4OLj5OboKtnc3N7d3eHj5efp6+zt7nl8gIOIj5OVlpORj46LiomIiYqKiYqLi4yMjISNBoyNjY6NjoWPgI6NjIyMi4qKiYmJiomIhoSCgoGBgIB/fn18evTz8/Ly8O7t7Ozr6uno6Ofn6Ojp7O/s5+nl29HRy8fFw8HAvbu5t7a1tbSzsa+sqqelpaiqqaeloZ6fnZqZl5WSkIyKiYeEgn9//Pr5+Pf19vX08vDw7ezq7e3q5uDf4NvZ2trXR9va1tfW2djY1NLV2Nra2dna19nd4ePi5ujq6+7w8vb4fX6Ag4SGiIqMjZGWmpyfoaSmqaywsrW4ur7AxcjHxcXKz9HS1NXXK9DT09XV1Nja3d/h4+Xm53Z5foGGjJCSk5GPjYyJiIeGh4iIh4iJiYqKiouGjIONhY4qjYyLi4yLiomIh4iJiIaFgoCBgH9/fn18e3p48e/v7u/s6+rp6unn5uXlheSA5unn4+Th2M/PycbFw8G/vLq4trW0tbOzsa+sqqekpKiqqaakoZ+fnZuZmJaTkI2KioiFg4CA/vz7+vn3+Pb19PHx7u3r7e3p5uDe4NzZ29rX2tnW19bY19jU0tXY2dnZ2NjW2Nzg4uHm6Onq7e7x9Pd8fn+Cg4SGiImKjpOXmZwYnZ+go6aqqq6xs7a4u769u7vAxcfJzMzOj4DFgcqAu3+ngAICAQAC6OuE7Bfx8/T1+Pj6+/v9gIOGiIyPkZKRkI+OjoWNBI6Pjo6Ej4KQhI8RkJCQkZKSk5KSkZCQkI+OjYyEi2CKiYeGhoWFhISDg4KBgP/+/fz6+Pf39fT08/Ly8fDu7u/v7vLz7O/u5dva19LPzMjHxsPBv8C+vbu7ube1sq+trbGysrCvrq2pp6Sin6CdnJuZlpOQj4yLiYiHhYSEhIOEgVeA//z59vj49O/t7Ovs6+ro5+fp6eno5+bl4+To6enq6+vs6uzt7+/x9Pj6/YCBgoOEhoqMjpCTlZmcn6Kmqq6wtLe8wMTHys3P0tba3Nzb2tvc3+Lk5OYb2Nze3t7d4uTl5ujp6+zt7nl8gIKFiImLiomIh4eEiASJioqJhYoFi4uLjI2FjiqNjIyMi4qJh4eGh4eGhYOBgYCBgH9/f358e/X19fTx8O7u7ezr6+rq6umF54Dp6eTm5d7U1NLOy8jEw8K/vry8urq4uLa0sq+sqqqtr66trKuppqShn52dm5qYlpOQjo2KiYeGhYOCgoKBf3+Af377+PTy9PPw6urp6Ono5uPi4uXl5uTj4uHf4OPk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9fTz8/Ly8fDv8O/u7Ovp6Ofk4uHh3tvY2dfV0tLQz8/NzcrKx8XGxsXGx8fJyMfIy8rIx8PBwL++vbu5uLi2tLKwrqyrqqmoq6yrqqmno6KhnZmUk5KQj42Mi4qIh4aGhUeGhoWDhIKCg4OEhYWFhoeIiYmJiouLioqMjY+RlJaZm52go6aprbCysrO3ub2+v8HCwsLBxMbJys7PztDR0dLT1NfZ3N3h4jTY3Nzf39/g4eTk5ebn6evt7e3r6uzu8fJ6enp7fH5+fn1+fn5/gIGBgYKDgoKDg4KCgYGBhYIngYCAgIGBgYB/f35+fn19fXx8e/Tx8vP19PLz8vHw7+3s6+vq6urphOiA5uXj4eDd29ra2NXS09LQzs3LysvJyMbFw8HCwsHCw8LFw8PEx8bEw8C+vby7uri2tbWzsa+tq6mop6alp6mop6akoJ+empaRkI+NjIqIiIeFg4ODgoODgoGBgICBgIGBgoKCg4OEhYWFh4eGhoiJioyPkZOVl5qcnaCjpainqKwcr7K0tbe4ubm4u7zAwcXGxcbIxsfIyczO0dLV1i/T19ba29vc3eDf4OHj5efo6enn5ujp7O13eHh5e3x8fHt7fHx9fn9/gICBgICBgYWADYGBgIGBgH9/f4CAgH+FfW98e3t7ennw7e3w8fHv8O/u7ezr6unp5+fn5uXm5eXj4uHf3tvZ2dnX09HS0c/NzcrJysjHxcTCwMHCwcHDwsTDw8THxsXDwL69vLu6uLe1tbOxr62rqainpqaoqainpaOgn56alpGPjo2LiYeIhoSFggmDgYCAf3+Af4CFgTiCg4ODhIWGhYWHiImLjo+Rk5WXmZqcnqCjoqOnqq2vsbS1tra1t7m9vsLDwcLDwsPDxMfJzM3R0ZiAtIH/gLWAAgIBACfj5OLj5ubo6uvs7e3v8fH19vb4+fj7/v///4CAgP+AgYKCgoODg4KEhBKFhYSEhIWGhYWGhoSEhYSDg4OFggSBgYD/hP4K//7+/fz7+vn49oT0AfKE8Vnv7u3s6+zr6unp6Obk4uHf3drY2NbS0dDOzs3JyMnLyMfHx8bFx8fHycrLzMzMysnGxcTDwsC/vbu6ube0s7Kwrq6usLGxsK+tq6imo6CcmJSTkpKSkZCPjoSMRouLiYqKiomIiYqLi4uMjY6Pjo2MjY6OkJKVlpibnaCipairra+xs7W1uLq8vb7AwcLDxcbJy8zNzc7Oz9HS09TU1drb3d8g19jW2Nvb3d/h4uLi5Obn6uzs7e7t7/Hz8/J6enr0e3yEfQN+fn2Ef4WACoGCgYGCgYGBgICEf4R+BX18fPf1hPYJ9fX08/Ly8fDvhO1W6+rq6uno5uXk5OXk5OPi4d/d3NrZ19XT09HOzczKysnFxMXGxMPDwsLBwsLCxcbHyMnIxsXDwsHAv728urm3trSwsK+tq6urra6urayqqKWjoJ2alZGEjwqOjYuLiYiJiYiHhIYxhYSFhoaHh4eIiYqJiIiJiYqMjpCRk5WYm5yeoaOlpqiqrK2wsrS2tri5uru9vsDDxITFC8bIycnLy8vP0NLUJ9LT0tPX19rb3d7e3uDi4+bp6Orr6uvt7u7ueHh473l6fHt7fHx8e4R9hX4Kf4B/gICAf39/foR9hHwEe3p69IXzCfLx8O/v7+7t7ITqAeiE51nl4+Ph4eLi4eHg397c2tnX1dPR0dDNzMvJycjEw8TFw8PDwsHAwcLCxMXHyMnIxsXDwsHAv728urm4trSxsbCtq6urra6urayqqKWjoJ2ZlZCPj46OjYyKioSIAoeGhIUDhIOEhIUphoeHiIeHhoiIiYuMj4+Rk5aYmZudn6GipKeoqayusbO0tba3uLq7vcCGwgrExcXGxsbLy87QmoAEgYGBgKeB/4C8gAICAQAi3d3d4OHk5Obm5ujq6+3w8vP09vX1+Pr7/f//gIGA/v+AgIeBg4KEgwqEhIODg4KDgoKChIFKgoKBgICA/vz9/vz8/Pv7+/r4+fj29vTy8/Lx8PDw7+3t7Ovq6urp6OXk4+Li4eDf3NnY1dPR0M7My8jIyMbExMXGx8fJyszNzs6EzTfMysfIxsTEw8HAwL68u7m3t7a1tre3trW0srCtqqimo6CdmpiXl5aWlpWVlZOTkpKRkZGQkZGRhJI5kZGRj46PkJGUl5iZmpydn6OmqKqrrrCxsrS2uLm6vLy9vsHExsjJysvMz9DQz9HS0tLT1NbY2tzbI9LS0tXW2dnb29vd3+Dj5+nq6+zr6+3v8PH09Hp7evP0enp7hHwTe3x9fX1+fn9/f4B/gH9+f35/foR9Cn5+fXt7e/Tz9PWE8z3y8vLw8PDu7u3s7Ovq6enp6Obl5OPi4+Pj4t/d3Nvb2trZ1tPT0M7My8nH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u7m3uLe3trWzsrGwsLCurKyrqqimpKKhnpybnJybnJybm4SaIZmYlpaWmJmbm5yfn6Cgn5+ho6Slp6ipqqusrrCys7S1tYW2F7e5u7q7vL2+wMHCxMXDxcTExsfJysvNqoABgYuAAYH/gMqAAgIBABPZ2dvb3Nza2dvb3d/k5ujs7/DxhPMa8vHx8vP19vf4+fn49vf5/P39/f79/f38/PqE+zf8/f39/Pz7+vj39/f29/f28vX29fTz8/Lx7/Dw8PHy8vDu7e3s7Onq6efl5ODh4uPj5OXi3dvZhNgk1tXV09HQzc7OzcrIycnJyMXFyMnKzMvNzc7OzM3MyMjLzMnIhMcIxsTEw8LAv72FuyO6ubm5uLe3tra1tbOysK+urKmpqKemo6WmpqWlpqelpqalpoSoAaqFri6vr7CytLO0tbW3uLi5u72+v76+wcHCxMTDw8XGx8fHyMnKzM3Oz87P0dTX1tXXE9DQ0dLS0tHR09PV19ve4OTn6OqE6xTq6enp6+zt7vDw8O/u7vDz9PT09YX0GvLz8/Ly9PT08/P08/Lw7+/v7u7u7ens7ezshOuE6Rrq6+vq5+fn5ubi4+Lg3t3a29zc3d3e29fV04TSJNDPz87My8jJycjFxMXExMTAwMTExcjHycnKysnKycXFx8fFxITDCsLBwL++vbu5t7iEtye2tra1tLSzsrGxsK6tq6qopaWko6KgoqOjoaKio6GioaCho6OjpKaFqQ+qqqusr66vsLCys7O0tbeEuBu5uru8vLy7vL6+v7/AwcHDxcbHxsfJzM/Nzc5JzM3Oz9DQz8/R0dPU2dvd4eTl5+np6Ojn5ubn6Onr7O3t7ezr6+3w8fHx8vLx8vLx8PHx8O/x8fDw8PHx8O7t7ezr6+vq5unr6oTpe+jm5+fm6Onq6ebm5eTk4eHh393b2Nna2tvb29jV09HQ0NHQzs3OzMrKx8fIx8TExcTExMDAw8TFyMfJycrKycnIxcXIx8bFxMTDw8LBwL++vbu4t7e3tre2tba2tbS0s7Kxsa+urauqp6Wko6Khn6GioqGhoaKgoKCfoISiAaSEqC+nqKmpq62trq6vsLGys7S2tre2tri4ubq6ubi5uru7vL29vsDCw8PDxMbJzMrJyv+A/4CCgAICAQAT19bY2Nra2Nra2dna297h5Oru8YbzDPLz9PT19fb3+Pb3+IX6Hv38+vv6+vz8+/v6+Pn49/f19ff39vb19/Xz8vLy84TyYPPz8vHw8O/v7u3q6erq6ero5OPl5eTl5OPk4uLh393a2trW1tXU0c/Qzs7OzczLzMzLysfExcfHyMnKzM3LzM3NzcvLysnJyMbFxcXEw8PCwcDAv7++vLq7vLu8u7u6uoS4ULe1tbSzs7GwsK+urayurq+urq2tra6vrq2tra+xsrOzs7S1tLS1t7e4ubm4ubm3ubu9vr/BwsLDxMTDwcLDw8TExcjKy8zNzc3R09PT1NXVFM/Pz9DS0tDS0tHS0tLV2dzi5ujqh+sR7Ozt7e7u8O3u7/Hy8fLy9PSE8i/08/Lz8fDw8O/v7e3u7+7u7e7t6+rq6uzr6+vs7Ozr6+rq6enn5uPi5OPi4+Hd3IXead3d29za2dbV1NTR0NDPzMrKyMjJyMjGx8fGxcK/wMPDw8XGycnIyMnJycfHxsXFxMLCwcLAv7++vby8u7u6uLe4uLi5uLe3t7a1tbW0srGwr6+trKurqqmpqqurq6qpqaiqqqqpqamrrISuL7Cwr6+wsrOztLSzs7Sxs7a3uLi6u7u8vb27urq6u7u7vb/BwsPExMXJzMzLzc3OFczMzc7Pz87P0M/Q0NHT19nf4+Xn54boCunq6uvr6+zq6+yF74Dy8e/w8PDy8vDw7u3t7ezs6+vs7Ovr6uvq6ejo6Orp6enq6urp6Ofn5ubl5eHh4uLg4d/c29zd3Nzc29vZ2djX1NPT0s/Pz83LyMnHx8jHx8XGx8bFwr/AwsLDxcXIyMfHycnIxsbGxcXEwsLBwsC/v768vLy7urq4t7i4uLm4t0O3t7W1tLS0srGwr66trKuqqaioqqqrqqmoqKipqamoqKipq62ura2vr66ur7CysrOzsrKzsLG0tba3uLm5urq6ube3hLgPubu9v8DBwcLGycnJysvL/4D/gIKAAgIBAEHT0tLU19nZ2tza2t3c3uDg4uPn6uzt7u/x8fL09vb29fT2+Pr7/f37+vj2+Pf29vf3+Pn39/j39vb19vf39/X19IXzhPJM8fHw7+7s7Ozr6+rp6unn6efn6OXl5eTl5OPi4OHi397c2tnZ2dbU09PRz87MzM3NzczLysjHxsfHxsbIysnIysvLysrJyMjEyMrIx4TGB8XEw8LAwMCEvha/vr++vb29u7q5ubm4uLe3tbW0tLOzhLQbtbSzs7Sztba0s7O0tbe2t7e4uLm4ubm6urq7hbohu72+vsHCxMXFxcTExsbFxsXExcfGx8jIys/Q0tLS1NPSN83Ly83P0dHS09LS1dTW2NjZ2t7h5OXn6Onq6+zt7u7t7O7w8vP09fLx8O7w7+7u7/Dx8e/v7+6E7Qbu7u7t7eyH6xfs6+vr6unp5+bm5eXk4+Ph4OLg4eHe34TeP93b2dvb2djW1dTT09HPz87MysnHx8jIyMfHxcTCwcLCwcLExcXExcfHxsbEw8PAw8XDw8LBwsLBv7++vLy8uoe7Mrq6ure3tra1tbS0s7KxsLCvr7Cvr7CxsK+vsK+xsbCurq+xs7Kys7OztLS1tba1tbe2hLUhtre4t7q7vb69vr28vr6+vb28vb6+v7/AwsfJy8vMzczLOsrIyMrNz87Q0dDQ0tLU1dbW2Nve4eLj5Ofn6Orr7Ozq6uvt8PDx8vDv7ezu7ezs7e7v7uzr6+vq6uqE64LqiOlP6urp6Ofn5uTj4+Li4eDg397g39/g3d7e3d3c29rX2drX1tTT0tHR0M7OzcvIx8bGx8fHxsbEw8LBwcHAwcPFxMPFxsbFxcPDwr/DxcPCwoTBCL++vry8vLq6hrs9ubm5t7a2trW1tLOysbCvr66ur66vsLCwrq6vrrCwrq2trrCysbGysrO0s7OztLS0tbSztLOztba2tri5uoS7Frq8vLu7urm6u7q7vL2/xMbJycnKycj/gP+AgoACAgEAYtPT09TW2NjZ2tzd3+Dj4+To6ejn5unp6uzt7O7w8fHx8vP09PX39/f4+Pf29fX2+fn39vT08/Py8vLx8fHy8PLz8vHx7/Dv7+/u7u3t7O3s6+zs6+rp6eno6Ofn5+jm5OXhht8O3t3c3dvZ1tTT1NPS0dGE0D3PzcvJycjHx8jFw8fIycjIycrKy8rIyMfExsjHxsXFxMPEw8PDwsHBwcDAv7+/vr2+vry8vLu6ubm4t7e3hLYUt7e4ubi4ubm4uLm4uLi5urq7u7qGvCe5urq8vr+/vr/CwcLDwsLExsbGx8jHxsjJysnIyMfFxcfKzc/PztCE03bMzMzNz9HR0dPU1dbZ29vb3+Dg397g4eLl5uXn6erq6uvs7e3u7+/v8PDv7u3t7/Hw7+7s6+rq6erq6Onq6unq6+rq6ujp6Onp6efn5+bn5uXm5uXk4+Li4eHg4ODh4N7e29nY2NnY2djX1tfV1NHPzs/Ozc3MhcshycbExcPDwsPAvsLExcTDxcXFxsXDxMLAwsTDwsHBwL/AhL8Xvr29vLy7vLu7urq6ubi4t7e2tbW0tLSFsyK0tLW0tbW1tLS1tbS0tbW2t7a1tre3uLi3tba2t7m6ubi5hrscvb6+vr/AwL/AwsLCwcG/vr6/wsbIx8fJzM3NzDXKysnKzc/Pz9DS0tTW19jY293d29rd3t/i4+Pk5ufn5+jp6uvs7e3t7u7t6+vr7O/u7Ovp6IXnKebm5+fm6Ono5+fm5+bn5+fl5eTj5OLi4+Pj4uHg4N/f3t/f4N7d3drYhNcP2NfW1dbU0tDOzc7NzMvLhMohycfFxMTDwsLCv77Cw8TDw8TExcXEwsPCv8HDwsLBwL++hL8Yvr29vby8u7y7u7q6uri4t7e2tbS0s7OzhbJEs7O0s7S1tLO0tLSzs7S0tba1tLa2tre3trS1tba3uLi3uLq5ubq5ubq8vLy9vr28vr/AwL6+vbu7vL/ExsXFx8rLysr/gP+AgoACAgEAE9LS09PU1NTW19jZ3N7g4OPl5+iG6gLs7YTuMu/v8PDx8fDw8fHy8O/t7e7v7/Dv8PDv7+7v8O/u7O7u7Ozt7u7t7u/t7ezq6+vs6+rphOog6ejn5+bl5eXk49/e3eDf39/e3t3d3Nzc2dfW1dTT09KE0SDPzsvKysjIx8fIxsTFx8bGxsfIycfGxsfHxcPExsbFxITDCcTEw8LBwcLBwYTAUr++vr28vLq7vLu6ubq5urq6u7u8vL28vL28vL29vby8vb6/v72+vr67vL29vsDCxMPBwcPEwsTDxMbHx8jJyMnIyMnKysnKysrLy8zNzs3MzdGE0iHMzM3Nzs7Oz9DR0tXW2Njb3d/g4uPi4uPi5Obo6Ofn6OiH6Q3q6unn5eXn5+jp6OfohOcY6Ojn5efm5eXm6Ofm5+jn5ubk5OTm5eTihONG4uHg4N/f397d3drZ19rZ2dnX19bY1tfW09LR0M/Pzs3NzczMy8nGxsbExMPDxMLAwMLBwsLCxMTDwsLDw8HAwMLCwsC/v4TAAb+EvhC9vby8vL27u7q5uLi3t7i4h7YBt4e4C7e3ubi4t7e4ubm5hLgutre4uLm7vb29u7y9vbu9vL2/v7/AwcHCwcHBw8LCw8PCw8TFxsfGxcbKzMzMyxPJysvKy8zLzc7Pz9LU1dbY2tzehOAb4eDi5OXl5OTl5ufm5+fm5ubn5+Xj4uLk5OXmiuUt4+Tk4uLj5eXk5ebl5OTh4uLj4uHf4ODh4eDf3t7d3d3c3NvY19bZ2NfX1tbVhNYa09HRz8/Ozc3MzMvLysjFxcXExMPDw8K/wMKEwQ7Dw8LBwcLCwb/AwsLBwIS/CcC/v769vb69vYS8Bru6urm4uIS3Bba1trW1hLaGtwu2tri3t7a2t7i4uIS3FbW3t7e4ubu8u7m6u7u6u7q7vb29voW/hMAQwcHAwcLCxMXEwsPIysrJyf+A/4CCgAICAQBC0tPU1NXU1tbX2Nrc29re4eHk5efn6Ojo6uro6uvr6+zu7uzs6+vq6uvr7O3t7/Dw8fHw7+3t7u7u7e7t7u/t6uvrhO0D7u3shOuF6kHp6Obm5efm5ePh4uHg39/g397d3Nzb2tjX19fY2NjX1tXV1NLT0tLRz83MysvJy8rJxsbFx8jHyMXGx8fHxsbFw4fChcAKwcHBwMDAv8C/voS/B76+vby8vL2FvIK9hL8Fvr+/wMCJwTPAv7/AwMHBwsLDxMXFxMTGxMXFxcTFx8fJyMnKzMzLzc3MzMvLy8zOz9DPz9HR0dLR0dJJzM3Oz8/Oz9DR0dPV1dPX2drd3t/g4eHi5OPi4+Tl5eXm5uTk4+Pi4uPj5Obm5+np6unp5+bl5+fn5ufm5+jm5OXl5+fo5+jm5YTkEePj4uLj4eDf397f397c29zbhdo+2NfW1tbV09LS0tPT09LR0dHQzs/Pzs3LycjGx8XHxsXDwsHCw8LDwMHDw8TDwsHAvr+/vr++vr28vby9vb2HvIS7BLq6ubmKuAq5uru7urq6u7u7iLw0u7q6ubq6u7y8vL6+v7++vr++v7+/vr/AwcLBwsPExcXGxcXFxMTExcfIycnIysrLzMvMzCbLzMzNzczOzs/Q0dPT0tXY2Nvc3t7f3+Di4eDh4uPj4+Tk4uHg4ITfDODi4+Tm5ufn5uXk5ITlCObk5ebk4uPjhOUD5uXjhOJO4eDg3+De3dzc293d3NrZ2tnZ2NjZ2NbW1dXU09LR0dLS09PS0dHQz87Pzs7NysnIxsfFx8bEwsHAwsPCw8DBwsPDwsLBwL6/vr6/vr69hLyCvYS8D7u8vLq7u7u6urm5t7i3uIS3g7iEuge5ubq6uru7hLoxu7q6ubi4ubm6uru7vLy+vby8vby9vb28vb+/wcDAwsPDw8TEw8PCwsLExsbIx8fJyYTKAcv/gP+AgoACAgEAhNRI19fV1NTV1dfa2tvd3uDh5OPk5OTj5OPl5ufo6ers6ujn6Ofo6urr6+3t6+3t6uvr6+zs7e7u7vDv7+/w7+/u7u/u7ezs7OvrhOk+6Obl5ubk5OPi4uLf3+De3t/e3d3c29nZ2tjU09TV1NTS0tPU0tDS0tLR0NDPz87NzczKysnHyMnJyMfGxcaExA7CwsLBwsPCwsLBwMC/wYTAhL8Kvr/AwL++vr6/v4i+hMAnwcHBw8PCwsPEw8PEw8HBwcLDw8TDw8TExcXGxcXIx8nIx8fIyMnKhswVy8zMzc3Pz87Oz8/PztDR0dLS0tHSO87Ozs/Q0M/Nzs7O0NPT1NbX2Nrd293d3dzd3N7f3+Hi4+Xj4N/g3+Hi4+Tk5+bl5ubj4+Tk5eXm5+johOlP6unp6Ojp6Obm5eXk4+Li4uHg397e3t3c3Nvb29jY2dfX2djX19bV09PU0s/Pz9DQ0M7OztDOzM7Ozs3NzMzMysnJyMbGxcPDxcTDwsLBwoTAEb6+vr2+v76+vr28vLy9vLy8hLsJurq6u7u7urm5irqEu4O8hL2Fvh29vLy7vb29vr29vr6/v8C/v8LBwsLBwcLCw8TGxoTFFcTFxcbGyMnHx8jJyMjKy8zNzczMzTvNzczNz8/OzMzNzc/R0dPV1dfY29rb29va29rc3d3f4ODi4N3c3dze3+Dh4uTj4uTk4eLi4uTj5Obm5oTnEujn5+bm5+fl5OTj4uHg4N/f3oTcIdra2djY2NbW19XW19bW1dXU0tLT0c7Ozs/Ozs3Nzc/NzIXNE8zMzMrJysjGxsXDw8XEw8LBwcGEwBe+vr69vr++vb29vLu7vLy7u7u6u7q6uYS6Arm4i7kku7u6u7y7u729vLu9vb28vby7u7q7vLy9vLy8vb6+vr2+wMDBhMAFwcHDxMSEwxXCw8PExMbHxcXHx8bGyMrKy8zLysz/gP+AgoACAgEAC9PU1NXV2NnY1tbYhNmA293e3+Df4N/g4N/g4uTl4+Lh4eLl5ufm5+fn6Onp6ejp6Ojp6urq6+vs6uzr7Ovs6+vq7Ovq6Onp6Obo5+fm5eTl4+Lj5ePi4eHg4N/d3+Df3t7c29nZ2NfY2NfV1NXU0tHS0tHRz87NzM3My8vLzMvLzMrIyMfIx8bGxsTFxMMNxMPCwsPDwsPCw8LDwoXBC8DAvr6+vb6/vr69hLwPvb29vr/AwcHBwMHBwcLDhcQFw8XFxcSExQXGxcbGxoTHAsbHhcgNx8jJycnKysvLysrHx4TIEsnLzMzLzM3Oz8/N0NLS09LT0xTOzs7Pz9LS0tDQ0dLT0tLU1tfY2YTYRdnY2dvd3tzb2trb3t/f3+Dh4OLi4+Pi4uHi4+Tk5OXl5eTl5OXl5uXk5OXk4+Li4uHf4eDg397d3tzb293c29ra2dnX1oTYDtfV1NPT0tHS0tHQ0NDPhs0gysnIx8jIxsfHyMjHx8XExMLDw8LBwb/Av76/vr2+vr+GvoK9hLwDu7u6hLkRurm5uLi3uLi4ubm6ury8vL2EvBu9vr6/vr+/vr/AwL/Av7+/wL/AwcDAwcHBwMGFwh3BwsPDw8TExMXEw8DAwcHBwMHDxMXExMbHyMnHy4XNAc4LzM3Nzs7Q0dDPztCE0U7S1NXW19bX1tfX1tfZ29zZ2djX2dvc3dze3t7f4ODg3+Df4OHi4uLj4+Pi4+Li4uPi4uLj4uHg4eDf3d/f3t3c29za2dnb2djY2NfX1dWE1gbV09LR0tGE0ITPDczMzM3NzMnIx8bHx8aGxxTFxMTCw8PBwcG/v7++v769vb6+vYW+Ar28hLuCuoW4Brm4t7e3toS3B7i5ubu7u7yEuwO8vr2EvgG9hL4Bv4W+Bb+/vr/AhL+HwCHBwcHCwsPDwsG+vb6+vr2+wcLCwcLDxMXGxcjLy8zLzM3/gP+AgoACAgEAN9XW1tfZ2NnZ2NfW2NjZ2NjZ29vd3Nzb29vc3d7f3uDh4ePh4eHi5OPl5ubm5OPl5ubl5+jo6euF6jzo6Onp5+jn5ubn5+Xm5+fl5uPj4+Hj5OLh4uHi4N/e3N3c3dzc3Nva29rZ2NfV1dTU0tLR0tLRz87My8uGygzLysrJycfHxcTExMWFxA/DwsHCw8LDxMTFxMTDw8KEwQPAv76Fvwq+vby9vry8uru/hcBHwcHCwsPDwsPCwsTExMXEw8LDxcXGxsjJycjHyMbHycnIycnJyMfIyMfHx8nKycbEw8bHx8jJyMfIyMbIycrMzs/Q0dPT1NQ4z9DQ0dLR0tLR0dDR0tLS0dLU1NbV1dTT1NXV19fW2Nna29na2tvd3d7f39/d3d7g4N7g4eHi5eSE4wbh4eLh4OGF4C/e3+Dg3t/d3N3b3d3b2tvb29nY19bW1dfV1tbV1NXU09LR0NDP0M7NzM3NzMrJx4XGIsXFxsbFxcXEw8LAv7/AwL+/wL+/v769vb69v7+/wMC/vr6FvBK7urm6urm5urm4t7i4uLe2t7qFux68vLy9vr29vr29v7+/wL++vb2/v7/AwsPDwsLCwcKGwyPCwcLBwcDBwsLBv728v7+/wMHAv8C/vsDBwsXHyMnKzM3OzjfNzs7P0dDR0dDPz9DR0dDQ0dLS1NPT0tHS0tPV1dTW19fZ19jY2dvb3N3d3dvb3N7e3N7f3+DjhOE74N/f4N/e39/e3t/e3d7e3tzd29vb2dvb2djZ2dnX1dXU1NPV09TU09LU09HR0M/Pzs7NzMvMzMvJyMeGxQrExcbExcTDwsLAhL8Zvr+/v76+vby8vby9vr6/vr69vLu6uru6uYe4Cre3tre3t7a1trmGuh+7u7y9vLy9vLy+vr6/vr28vL6+vr/BwsLBwMC/wMHChMEBwIS/Hr6+wMC/vbq5vLy8vb29vL28ur2+v8LExcbHysvMzP+A/4CCgAICAQBszc7R0tLT09PS0tPU1dbW19fX2NjX2Nja2tvb2tzb297f39/d3t/g39zc4OHi4eLj5eXm5eXi4uLg4eLi4uHi4uHh4+Hh4uHh4N/e39/d39/f4eHg4N7d3dzc29zb3Nra2dnZ19bW1tTU0tHQhdEIz87Pzs3MzMyEyxXKy8rJx8fHxsfGxcPDw8TDwcC/wcGEwIPBhMAMwcLBwsHAwcHBwL+/h8AVv8DBwcDBwsLDwsPCw8PDxMTDxMXGhMcBxoXHh8gZx8jHx8bGxcPEw8PExsfIycvMysnIyMfHxoTFDcTFxsfJyszNzc7NzM05xcfKy8zMzc3Ly83Nz8/P0NHQ0dHQ0dHT09TU09TU1NbX2NjW19fZ2NbW2drb2tzc397f3t7c29vahNsv2tvb29rc2trb29ra2djZ2dfZ2dnb29rZ2NfW1tbV1tXW1NXU09PS0dHR0M/OzMuFzAjKycnJyMfHx4TGC8XGxcTCw8LBwsLBhb8+vbu7vby7vLu8vby9vLu6u7y9u7y8u7y7u7u6uru7uru6u7u6u7y8u7y9vb69vr2+vr6/v76/wMHCwsHBwcKEwYfChMEmwMC/vb69vb6/wMHCxMXDwsDBwL++vb29vLy9v7/BwsTExcbFxMVewsTHyMnKysrJyMrKzM3Oz87Oz8/Oz8/R0dLS0dLS0tTW1tbV1dXX19TU19jZ2drb3dzd3Nza2dnY2dnZ2tja2trZ29nZ2tnZ2NfW2NfV19jY2dnY19bV1NTU09TU1YTTJtLR0NDQz87My8rLy8vKysjIyMfHxsbFxcXExcTFxMPBwsHBwsHAhb4IvLq6u7u6u7qEuwi6urm6uru6u4a6Hbm5urq5urm6ubm6u7q6u7y7vLy8u729vb6+vb6+hsABwYTAIcHBwMDBwcHAwL+/vr69u7y7u7y9vr/AwcLAv76+vby7uYW6C7y8vr/BwsLDwsHC/4D/gIKAAgIBAATNzc7Qh9Eq0tLU09PU1NTV1tfX2NfW19jY2drb29zc3N3d3t3d3dzc3N7f393d3NvbhN0S29vc3NzZ2tvb297d3N3b3dzchNsg2dnb2tnZ2trb2tva29vZ2tnY2NXU09HS0dDPz87Pzs6EzzDNzczNzczLy8vMzM3My8vJx8fGxsXExMXFw8PExMPDwsHAwcHCwsLDwsPCw8LCwsGIwITBCMLCw8PDxMTFhMaCx4XIA8nIyIXJAcqHyRzGw8PEw8XFxMXFxsbHxsfKysvMzc3Nz8/Ny8zLisoCy8yEywLMzQTFxsbJh8oCy8yFzQPOz8+E0AvP0NHR0tPU1NTV1YbWINXU1dfX19bV1NTU1dbW1dTU1dXV0tPU1NTX1tbW1dbWhdVE1NTV1dPT1NTV1NbV1dXT1NTT0tDOzs3NzMvKysnKycnKycrJyMjHx8jHxsbGx8fIyMfGxcPCwsLBwMDBwb+/wMC/v72EvAe9vr2+vb6+hL0BvIa7Ary7hLwOvb2+vr6/v7/AwMHAwcGEwoTDBMTDw8OGxB/Dw8PAvr2+vb+/vr++v7/Av8HDw8TFxcbGyMjGxMTDh8IFwcHCw8SFwwHFDcLDw8bIx8jHyMjIycqGyw3Nzc7Oz87Nzs/Q0NHShNOG1CvT09PV1dbU1NPS09TV1NTS09TU1NHS09PT1tXV1NTV1NTT09TU09PU09LShNMc1NPU09LT0tHRz87Ny8zLysnIyMnIyMnIycjGx4TGIcTFxcbGx8bFxcTDwsHBwL+/wMC/v7/Avr69vLu7u7y9vIW9BLy8vLuJugW7u7u8u4S9gr6Ev4LAhMEtwsLCwcPCw8LDw8LDwsLCwcG/vLu8u729vL28vr2/vr/BwcLDw8TExsXDwcLBhcCEvwnAwMHBwMDAwcL/gP+AgoACAgEAEc3Nzs7Pz8/Qz8/Ozs7P0NHQhNET0tTW1dbX2NjZ2tra3Nvc29za2ojZL9ra2tnY2NnY2NfY19fX2NfX2dnZ2tnX2NnZ2djY2dfY2NjX19bX1tbW1dTV1NPUhNEM0NDQz8/Oz9DO0NDQhs8Zzs3NzMzKzMzMy8rKycnIycjHyMfGxsbExYTGBMXExMSFxRfExMXEw8LCw8TDwsLDw8LAwcPDwsTExIXFF8bGx8fHyMjIycnIyMjHxsfIx8nJysnIh8kRyMjJyMjIycjKy8zMzc3Nzs6Ez4PQhtEJ0M/Pzs7NzMzMhM0IxcXGxsjHyMiFxwXIycrJyoTLC83Pzs/Q0dHS0tLThdQD09LRidIF09LR0dKE0TTQ0dDR0dDS0tLU0tHR09PT0tPT0tPT09LS0dHQ0dHQz8/Pzs/NzM3My8vLysnJysvKy8vLhsoGycjIyMfFhMcPxsbFxMTEw8PDwsLCwb/AhMEDwL+/icAUv769vb6/vr69vr29u7y+vr2/v7+FwAXBwcHCwoXDEMLCwsHBwsLCw8PExMPDw8SEwxPCwcLBwcHCwsPExcXGxsbHyMjIhckLysrKycrKycjIx8aIxQjDw8PExsXFxoXFFMbHx8fIycnJyszNzc7Oz8/Q0dHRhdIN0dHQ0dDQ0NHQ0NHR0YXQhs8k0NDP0NHR0tHQ0NHS0tHS0tHS0tHR0M/Qz8/Pzs3Ozs3Oy8vLhMoJycnIycrJysrKhskiyMfGxsbExsfGxsXFxMPDxMPDwsLBwcG/wMDBwcHAv76/wIe/FL69vLy9vby9vL28vLq7vL29vr6+hL8YvsDAwMHBwcLBwsLBwcHAwMHBwMLCw8LBhcISwcHAv8C/v7/AwMHCw8PExMTFhMYXx8jHx8jIyMfIx8fGxsTEw8PCwsPDw8L/gP+AgoACAgEACNLR0tLS09TThNQe09LT0tHS0tLR0dHT0tLS09TU1dbV1tbV1dTU09PTh9IT0dHS09TU09LR0tPT09LS09PS0ofTBNLQ0NCEzwXQ0dDPz4bQBdHR0dLRhNIB04TRB9LR0NDR0NCFzx7Ozs7NzMzMy8rKy8rKysnJysnJysrJyMnJyMfIyciFx4TII8fGxsfGx8fGxsfHxsfGx8fGxcbFxcfGx8jHyMnKy8rKycnJhMqCy4TMCsrMzc3MzMvLy82FzAnNzc/OzMzOzcyEzoPPhM4Rz9DQ0NHR0dDR0tHS09LT0tIMy8vMzMvNzs3Nzs7NhMwey8vMzMvLy83My8zNzs3Oz87Pz8/Ozs3Mzc3My8zMhssQzM3NzcvMzMzNzczMzc3LzIXNDM7NzcrKysnJycrKy4TKhsuCzIbNBs7NzM3NzYbMhcqEyRHIx8fGxcTGxcbFxMTFxMTFxYTEBMPCw8OGwhvDw8LCwsHBwsHCwcHBwsHBwsHCwcG/wMDAwcGEwgjDxMXExMPDw4TEgsWExgrExsfHxsbFxcXHhcYfx8fJyMbGyMfGx8jIx8jIyMfIx8fJysrJysvKysrLy4XMAcsGysnKysrLhswLy8rLy8nKysrJycmEygPLzMuEzQrOzc3My8rLy8rJhcoKycnJysvMy8rKyoTLBcrLy8rKhcsDzMzLhMgFx8jIyMmEyITJEMrKy8vMy8vMzMzNzMvLzMyEy4LKhckIyMjIx8fGxsWExBHFxMPDxMPDxMTDwsPCwsHBwoTBAcCFwYTAAb+IwDi/wMC/vr+/v8DAwMHAwMHDw8LCwsHBwsPCwsTExcTFxMLExcbExMPDw8XExcXFxMXFxsbExMbFxIvGEcfIyMfIycnIycnJysvLy8rK/4D/gIKAAgIBAITQB9HR0dLS0tGF0gjR0dHS0tHR0Y3SDNHR0tLS0dHQz9DQ0ITOg8+E0AvPz9DQ0NHR0dDPz4XQg8+E0AbR0dHQ0NCE0QvQ0dHR0NDQ0dHR0IjRhNCGz4fOg82HzgHNhMyCzYvMgsuGyoTJAcqEy4TMF8vMy8zMzMvKy8zMy8rKyszJx8nMzM3NhMwKzc7Ozs/Pzs7OzYTOC8/Ozc3Ozs7Nzs3Nhc4Izc3Nzs7NzcyEzQnMzc3Oz8/P0M8IycnKysrLy8yEy4PMicuJzAHLhMwHy8zMzMvLyoTJBcjHx8fIhMkGysnIycnJhMoCyciEyQnKysnIyMnJycqEywnKysvMzMzLy8yJy4TMA8vMzITLg8qKyYjICMnIx8bGxsfIhscWxsbGx8bGxsXExMXFxcTExMPExMXFxYnGIcfGxcXFxsbFxcTFxcPCw8bHyMfGx8bHx8jIyMnJyMjIx4XIhMeCyITHhciHxwPGx8eExgfHyMjIycnJEMfHyMjJycnKysnKysrLysqEyQbKycnJysuKyoLJhMoDycnIhMcKxsXGxsbHyMfHyIXHBMjJyMiGxwnIyMfGx8fHyMiEyQzIyMnKysrJycrKycmEygXJysrKy4XKhMmHyATHyMjIi8cHxsXExcXGxorFg8SGw4XCRcPEw8TExcTFxMTExcXFxMPDxMTEw8LDxMLAwcTFxsXFxcTFxcbGxsfHxsbGxcbGxsfHxsXFxcbGxcbFxcbGx8bGxcXFxofFBsTFxcXGxoTH/4D/gIKAAgIBAAPOz8+G0IbPitABz4TQhNEL0NHQ0NDR0NDQz8+K0IbPBM7Oz8+F0IXRitAG0dHQ0NDRjtAF0dHS0dGL0IPRhtCFz4LQhM+FzoTNhc6GzYLOiM2IzI7NhM6Cz4fOj82FzojNAszNicwHzc3Nzs7OzYTOgsiRyYbKgsmOyovJgsqGyRLIyMjJysrJycnKysvLy8rKycmUygHJhMqFywPMy8uKyoPLhMqGyYLKhcmFyIXHhciFx4LIiceIxoTHg8aGx4TIgsmIyIjHgsiEx4TIiMeHxgHFhMaIx4PIAcaMx4LIhMeFyIPHisgFycnIyMiLxwHIh8cDxsfHhsiFyQLIx4nIAcmEyAbJyMjJycmEyIXJBcrKysnJisiDyYTIAceIyIXHi8YBx5DGisWDxoXFBMbFxcWExoPHicaExZHGhsWLxIXFhcb/gP+AgoA=");var ds=oi(qh());var Yh=oi(Si(),1),ri={thetaMin:-1.02,thetaMax:1.02,yMin:-.68,yMax:.68};function no(i={}){let e=(t,n)=>Number.isFinite(Number(t))?Number(t):n;return{yaw:((e(i.yaw,.28)+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,pitch:Ya.clamp(e(i.pitch,.28),-.65,1.15),distance:Ya.clamp(e(i.distance,4.8),3.7,8)}}function S0(){let i=[],e=[],t=[],n=[];for(let o=0;o<=12;o++){let l=o/12,c=ri.yMin+l*(ri.yMax-ri.yMin),d=.97+(c+.9)/1.83*.03+.003;for(let m=0;m<=64;m++){let f=m/64,h=ri.thetaMin+f*(ri.thetaMax-ri.thetaMin);if(i.push(Math.sin(h)*d,c,Math.cos(h)*d),t.push(Math.sin(h),-.03/1.83,Math.cos(h)),e.push(f,l),o<12&&m<64){let p=o*65+m;n.push(p,p+1,p+64+1,p+1,p+64+2,p+64+1)}}}let a=new dt;return a.setAttribute("position",new Be(i,3)),a.setAttribute("normal",new Be(t,3)),a.setAttribute("uv",new Be(e,2)),a.setIndex(n),a}function Zh(){let i=new Ot;i.name="procedural-enamel-cup-v1";let e=new Bt({color:"#f5f1e6",roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,vertexColors:!0}),t=new Bt({color:"#163d51",roughness:.26,metalness:0,ior:1.5,clearcoat:.54,clearcoatRoughness:.17}),n=Yh.default.data.cup.profile.map(([p,v])=>new me(p,v)),s=new Fe(new pi(n,96),e);s.name="hollow-body";let r=[];for(let p=0;p<s.geometry.attributes.position.count;p++){let v=p%n.length,x=s.geometry.attributes.position.getY(p),u=v>=9?.83+.14*(x+.84)/1.82:1;r.push(u,u,u)}s.geometry.setAttribute("color",new Be(r,3)),i.add(s);let a=new Fe(new an(.963,.041,16,128),t);a.rotation.x=Math.PI/2,a.position.y=.98,a.name="rolled-blue-rim",i.add(a);let o=new Fe(new an(.905,.02,12,96),e);o.rotation.x=Math.PI/2,o.position.y=-.995,o.name="base-rim",i.add(o);let l=new fn([[.974,.62,0],[1.14,.68,0],[1.39,.64,0],[1.54,.45,0],[1.57,.2,0],[1.47,-.08,0],[1.26,-.3,0],[.972,-.46,0]].map(p=>new N(...p))),c=new Bn(l,64,1,16,!1),d=c.attributes.position;for(let p=0;p<=64;p++){let v=p/64,x=l.getPointAt(v),u=l.getTangentAt(v),T=new N(-u.y,u.x,0),R=Math.exp(-Math.min(v,1-v)*14),_=.13+.042*R,w=.047-.014*R,A=z=>Math.sign(z)*Math.pow(Math.abs(z),.68);for(let z=0;z<=16;z++){let g=z*Math.PI/8,b=x.clone().addScaledVector(T,-A(Math.cos(g))*w);b.z+=A(Math.sin(g))*_,d.setXYZ(p*17+z,b.x,b.y,b.z)}}c.computeVertexNormals();let m=new Fe(c,e);m.name="handle-unprinted",i.add(m);for(let p of[.62,-.46]){let v=new Fe(new Ds(1,16,12),e);v.position.set(.976,p,0),v.scale.set(.036,.105,.185),v.name="enamel-handle-joint",i.add(v)}let f=new Bt({color:"#ffffff",transparent:!0,roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Dt}),h=new Fe(S0(),f);return h.name="front-print-region",h.renderOrder=1,i.add(h),i.traverse(p=>{p.isMesh&&p.material===e&&!p.geometry.attributes.color&&p.geometry.setAttribute("color",new Be(new Float32Array(p.geometry.attributes.position.count*3).fill(1),3))}),{group:i,body:s,handle:m,print:h,glaze:e,rim:t}}var us=oi(Si(),1);var jh=oi(Si(),1),Qh=(i,e,t)=>new N(i,e,t),Jh=i=>i*i;function $h(i,e=1,t=48,n=t){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let d=i(c/t*2-1,l/n*2-1);if(s.push(d.x,d.y,d.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let m=l*(t+1)+c,f=m+1,h=m+t+1,p=h+1;a.push(...e===1?[m,f,h,f,p,h]:[m,h,f,f,h,p])}}let o=new dt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function io(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<40;s++){let r=(s/40*2-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function so(i,e,t,n=!1){let s=new fn(i,!1,"centripetal");return s.closed=n,new Fe(new Bn(s,Math.max(24,i.length*2),e,6,n),t)}function Kh(i,e,t,n,s){let r=Math.pow(Math.max(0,(1-i*i)*(1-e*e)),.43),a=i*t/2*(1-.12*(1-e*e)*Math.pow(Math.abs(i),6)),o=e*n/2*(1-.1*(1-i*i)*Math.pow(Math.abs(e),6)),l=(Math.cos(i*21+e*3)*Math.exp(-Jh((Math.abs(e)-.83)*12))+Math.cos(e*19-i*2)*Math.exp(-Jh((Math.abs(i)-.83)*12)))*.01*r;return Qh(a,o,.012+s/2*r+l)}function kl(i,e,t){let n,s;if(e<=.62)n=e*1.6,s=.04*Math.sin(i*4+e*2)+.022*Math.cos(e*8-i*3);else if(e<.8){let a=(e-.62)/.18*Math.PI;n=.992+.15*Math.sin(a),s=.15*(1-Math.cos(a))}else n=.992-(e-.8)*2.45,s=.3+.035*Math.sin(i*5);let r=Math.pow(Math.max(0,(Math.abs(i)-.72)/.28),2);return s-=r*.2+Math.pow(Math.max(0,(-e-.45)/.55),2)*.38,n+=.025*Math.sin(i*5)*Math.pow(Math.abs(e),3),s+=t*.045,Qh(i*1.37*(1-.025*Math.cos(e*4)),n,s)}function eu(i){let e=jh.default.get(i),[t,n,s]=e.size,r=new Ot,a=[],o=[];r.name="sewn-"+i+"-v2";let l=new Bt({color:"#f5f1e6",roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:"#fff",side:Xt,shadowSide:Dt}),c=l.clone();c.color.multiplyScalar(.88);let m=(x=>{let u=l.clone();return u.color.multiplyScalar(x),o.push({material:u,factor:x}),u})(.78),f=(x,u)=>(u&&(x.name=u),r.add(x),x);function h(x,u,T,R,_=1){let w=f(new Fe($h(u,_,64),l.clone()),i+"-"+x);return w.userData.fabricFace=x,w.userData.fabricSize=[T,R],a.push(w),w}function p(x,u,T=!1,R=l){for(let _ of T?[0,1,3]:[0,1,2,3]){let w=(A,z)=>{let g=_===0?x(A,-1):_===1?x(1,A):_===2?x(-A,1):x(-1,-A),b=_===0?u(A,-1):_===1?u(1,A):_===2?u(-A,1):u(-1,-A);return g.lerp(b,(z+1)/2)};f(new Fe($h(w,1,48,8),R),T?"tote-gusset-"+_:"sewn-gusset-"+_)}}if(i==="cushion"||i==="pillow"){let x=(T,R)=>Kh(T,R,t,n,s),u=(T,R)=>{let _=x(T,R);return _.z=-_.z,_};h("front",x,t,n),h("back",u,t,n,-1),p(x,u),f(so(io((T,R)=>{let _=x(T,R);return _.z=0,_}),i==="cushion"?.011:.008,c,!0),"stitched-perimeter");for(let T of[-1,1])f(so(io((R,_)=>{let w=Kh(R,_,t,n,s);return w.z*=T,w},.985),.0035,m,!0),"fine-seam");i==="pillow"?(r.rotation.x=-.82,r.rotation.z=-.06):r.rotation.z=-.065}if(i==="duvet"){let x=(T,R)=>kl(T,R,1),u=(T,R)=>kl(T,R,-1);h("front",x,t,n),h("back",u,t,n,-1),p(x,u),f(so(io((T,R)=>kl(T,R,0)),.008,c,!0),"bound-duvet-edge"),f(so(io(x,.985),.003,m,!0),"duvet-hem-stitch"),r.rotation.x=-1.04,r.rotation.z=-.045}let v=f(new Fe(new dt,l));return v.visible=!1,{type:i,group:r,body:a[0],print:v,glaze:l,surfaces:a,trim:c,tints:o,floor:new Wt().setFromObject(r).min.y}}var it=(i,e,t)=>new N(i,e,t),tu=i=>i*i;function ro(i,e=1,t=56,n=64){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let d=i(c/t*2-1,l/n*2-1);if(s.push(d.x,d.y,d.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let m=l*(t+1)+c,f=m+1,h=m+t+1,p=h+1;a.push(...e===1?[m,f,h,f,p,h]:[m,h,f,f,h,p])}}let o=new dt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function bi(i,e,t,n=!1){let s=new fn(i,n,"centripetal");return new Fe(new Bn(s,Math.max(48,i.length*2),e,6,n),t)}function nu(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<32;s++){let r=(s/16-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function ao(i,e,t,n){let s=new fn(i,!1,"centripetal"),r=[],a=[],o=[],l=112;for(let d=0;d<=l;d++){let m=d/l,f=s.getPoint(m),h=s.getTangent(m),p=it(-h.y,h.x,0).normalize(),v=new N().crossVectors(h,p).normalize();for(let[x,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let T=f.clone().addScaledVector(p,x*e/2).addScaledVector(v,u*t/2);r.push(T.x,T.y,T.z),a.push((x+1)/2,m)}if(d<l)for(let x=0;x<4;x++){let u=d*4+x,T=d*4+(x+1)%4;o.push(u,T,u+4,T,T+4,u+4)}}o.push(0,2,1,0,3,2,l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3);let c=new dt;return c.setAttribute("position",new Be(r,3)),c.setAttribute("uv",new Be(a,2)),c.setIndex(o),c.computeVertexNormals(),new Fe(c,n)}function iu(i){let e=new Ot,t=[],n=[];e.name="studio-sewn-"+i+"-v4";let s=new Uint8Array(16384*4);for(let _=0;_<128;_++)for(let w=0;w<128;w++){let A=(_*128+w)*4,z=128+Math.round(24*Math.sin(w*Math.PI/2)+24*Math.sin(_*Math.PI/2)*(Math.floor(w/4)%2?1:-1));s[A]=s[A+1]=s[A+2]=z,s[A+3]=255}let r=new sn(s,128,128);r.wrapS=r.wrapT=Mn,r.repeat.set(6,6),r.generateMipmaps=!0,r.minFilter=Qt,r.magFilter=nt,r.needsUpdate=!0;let a=new Bt({color:"#f5f1e6",roughness:.94,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:"#ffffff",clearcoat:0,bumpMap:r,bumpScale:.0035,side:Xt,shadowSide:Dt}),o=_=>{let w=a.clone();return w.color.multiplyScalar(_),n.push({material:w,factor:_}),w},l=o(.88),c=o(.72),d=o(.72),m=o(.84),f=new mi({color:"#65655c",roughness:1}),h=new mi({color:"#9c978b",metalness:.72,roughness:.4}),p=(_,w)=>(_.name=w,e.add(_),_),v=(_,w,A,z,g=1,b=[.5,.5,1,1])=>{let E=p(new Fe(ro(w,g),a.clone()),i+"-"+_);return E.userData={fabricFace:_,fabricSize:[A,z],localPrintBox:b},t.push(E),E};function x(_,w,A,z=a){for(let g of A?[0,1,3]:[0,1,2,3]){let b=(E,S)=>{let L=g===0?_(E,-1):g===1?_(1,E):g===2?_(-E,1):_(-1,-E),P=g===0?w(E,-1):g===1?w(1,E):g===2?w(-E,1):w(-1,-E),C=L.lerp(P,(S+1)/2);return A&&g!==0&&(C.x*=1-.07*Math.pow(((g===1?E:-E)+1)/2,5)*(1-S*S)),C};p(new Fe(ro(b,1,56,12),z),i+"-joined-edge-"+g)}}function u(_,w){p(bi(_,.014,f),w+"-tape"),p(bi(_.map(g=>g.clone().add(it(0,0,.01))),.005,h),w+"-teeth");let A=_[Math.round(_.length*.78)],z=p(new Fe(new an(.026,.006,6,14),h),w+"-pull");z.scale.y=2.4,z.position.copy(A).add(it(0,-.043,.028))}if(i==="tote"){let _=function(g,b,E){let S=1.035+.08*b,L=g*S*(1-.024*Math.pow(Math.abs(b),8)),P=(b+1)/2,C=b*1.1-.065*(1-g*g)*Math.pow(P,8)+.075*Math.pow(Math.abs(g),8)*Math.pow(1-P,8),D=(Math.exp(-tu((g-.56)*9))+Math.exp(-tu((g+.56)*9)))*P*P,O=.33-.09*Math.pow(Math.abs(g),6)+.03*(1-b*b)+.023*Math.sin(g*12+b*2)*(1-g*g)*(1-b*b)-.024*D;return it(L,C,E*O)},w=(g,b)=>_(g,b,1),A=(g,b)=>_(g,b,-1);v("front",w,2.15,2.2),v("back",A,2.15,2.2,-1),x(w,A,!0);let z=g=>(b,E)=>{let S=_(b*.994,E*.994,g);return S.z-=g*.018,S};for(let g of[1,-1]){p(new Fe(ro(z(g),g),d),"tote-inner-wall");let b=(G,Z)=>{let V=_(G,.935+(Z+1)*.0325,g);return V.z+=g*.006,V};p(new Fe(ro(b,g,56,4),l),"tote-folded-mouth-hem"),p(bi(Array.from({length:57},(G,Z)=>_(Z/28-1,.938,g).add(it(0,0,g*.009))),.0022,c),"tote-hem-stitch");let E=_(-.56,.7,g),S=_(.56,.7,g),L=_(-.56,1,g),P=_(.56,1,g),C=g*.34,D=[E.clone().add(it(0,0,g*.009)),L.clone().add(it(0,0,g*.018)),it(-.55,1.48,C+g*.055),it(-.36,1.91,C+g*.045),it(.02,2.02,C),it(.37,1.88,C+g*.02),it(.55,1.47,C+g*.04),P.clone().add(it(0,0,g*.018)),S.clone().add(it(0,0,g*.009))],O=p(ao(D,.125,.022,m),"tote-sewn-handle");O.userData.attachmentPoints=[E.toArray(),S.toArray()];for(let G of[-.56,.56]){let Z=[[-.042,.72],[.042,.91],[-.042,.91],[.042,.72],[-.042,.72],[-.042,.91],[.042,.91],[.042,.72]].map(([V,Y])=>_(G+V,Y,g).add(it(0,0,g*.025)));p(bi(Z,.0022,c),"tote-handle-box-stitch")}}x(z(1),z(-1),!0,d);for(let g of[1,-1])for(let b of[-1,1])p(bi(Array.from({length:49},(E,S)=>_(b,S/24-1,g)),.004,l),"tote-side-seam")}if(i==="backpack"){let _=function(E,S,L){let P=1.3-.48*Math.pow(Math.abs(E),2.7),C=-1.3+.11*Math.pow(Math.abs(E),8),D=C+(S+1)/2*(P-C),O=E*.96*(1-.035*Math.pow(Math.abs(S),8)),G=Math.pow(Math.abs(E),10)*(1-.9*Math.pow(Math.max(S,0),4))+.8*Math.pow(Math.abs(S),10),Z=(1-E*E)*(1-S*S),V=L===1?.44-.085*G+.045*Z:-.36+.055*G-.018*Z;return it(O,D,V)},w=(E,S)=>_(E,S,1),A=(E,S)=>_(E,S,-1);v("front",w,1.92,2.6,1,[.5,.69,.87,.52]),v("back",A,1.92,2.6,-1,[.5,.5,.5,.78]),x(w,A,!1);for(let E of[w,A])p(bi(nu(E),.006,l,!0),"backpack-panel-seam");let z=(E,S)=>{let L=-.51-.035*Math.pow(Math.abs(E),6),P=-1.19+.055*Math.pow(Math.abs(E),8);return it(E*.81*(1-.03*Math.pow(Math.abs(S),8)),P+(S+1)/2*(L-P),.62-.05*(Math.pow(Math.abs(E),10)+Math.pow(Math.abs(S),10))+.023*(1-E*E)*(1-S*S))},g=(E,S)=>{let L=z(E,S);return L.z=.39,L};v("pocket",z,1.62,.68,1,[.5,.43,.86,.7]),x(z,g,!1),p(bi(nu(z),.005,l,!0),"backpack-pocket-seam"),u(Array.from({length:57},(E,S)=>z(S/28-1,.79).add(it(0,0,.006))),"pocket-zip");let b=[];for(let E=0;E<=20;E++){let S=w(-1,-.05+E/20*1.05);S.z=.08,b.push(S)}for(let E=1;E<=56;E++){let S=w(E/28-1,1);S.z=.08,b.push(S)}for(let E=1;E<=20;E++){let S=w(1,1-E/20*1.05);S.z=.08,b.push(S)}u(b,"main-zip");for(let E of[-1,1]){let S=A(E*.44,.84),L=A(E*.62,-.85);p(ao([S,it(E*.53,.69,-.59),it(E*.63,.1,-.78),it(E*.65,-.56,-.7),L],.23,.055,m),"backpack-padded-shoulder-strap");let P=p(new Fe(new an(.06,.009,5,16),h),"backpack-strap-adjuster");P.scale.x=1.55,P.position.set(E*.64,-.75,-.57),p(ao([it(E*.62,-.85,-.41),it(E*.66,-1.05,-.46),it(E*.64,-1.2,-.42)],.1,.018,m),"backpack-webbing-tail")}p(ao([it(-.24,1.17,-.1),it(-.2,1.43,-.12),it(0,1.52,-.13),it(.2,1.43,-.12),it(.24,1.17,-.1)],.095,.026,m),"backpack-sewn-carry-loop")}e.updateMatrixWorld(!0);let T=new Wt().setFromObject(e);e.position.y=-(T.max.y+T.min.y)/2;let R=p(new Fe(new dt,a),"hidden-print-contract");return R.visible=!1,{type:i,group:e,body:t[0],print:R,glaze:a,surfaces:t,trim:l,tints:n}}function b0(i){let e=us.default.get(i),t=96,n=24,s=[],r=[],a=[];for(let l=0;l<=n;l++){let c=l/n*e.printRadius,d=us.default.height(i,c)+.004;for(let m=0;m<=t;m++){let f=m/t*Math.PI*2,h=c*Math.cos(f),p=c*Math.sin(f);if(s.push(h,d,p),r.push(.5+h/(2*e.printRadius),.5-p/(2*e.printRadius)),l<n&&m<t){let v=l*(t+1)+m;a.push(v,v+1,v+t+1,v+1,v+t+2,v+t+1)}}}let o=new dt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function w0(i,e){let t=e.profile,n={plate:[[4,8],[10,14]],bowl:[[4,9],[11,17]],basin:[[3,7],[8,14]]}[i],s=[],r=[],a=c=>(t[c+1][1]-t[c][1])/(t[c+1][0]-t[c][0]),o=(c,d,m)=>{if(c===d)return a(c);if(c===m)return a(c-1);let f=a(c-1),h=a(c);return f*h<=0?0:2*f*h/(f+h)};for(let c=0;c<t.length-1;c++){let[d,m]=t[c],[f,h]=t[c+1],p=n.find(([x,u])=>c>=x&&c<u),v=p?Math.min(7,Math.ceil(Math.hypot(f-d,h-m)/.072)):1;for(let x=0;x<v;x++){let u=x/v,T=u*u*(3-2*u),R=p?m+(h-m)*T+(f-d)*(u*(1-u)**2*o(c,...p)-u*u*(1-u)*o(c+1,...p)):m;s.push(new me(d+(f-d)*u,R)),r.push(c+u)}}s.push(new me(...t.at(-1))),r.push(t.length-1);let l=new pi(s,128);return l.userData.designRows=r,l}function su(i="cup"){if(["backpack","tote"].includes(i))return iu(i);if(us.default.textile(i))return eu(i);if(i==="cup")return{...Zh(),type:i,floor:-1.035};if(!us.default.data[i])throw Error("\u6A21\u578B\u5C1A\u672A\u63A5\u5165");let e=us.default.get(i),t=new Ot;t.name="procedural-enamel-"+i+"-v1";let n=new Bt({color:"#f5f1e6",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12}),s=new Bt({color:e.rim,roughness:.265,metalness:0,ior:1.48,clearcoat:.55,clearcoatRoughness:.17}),r=new Fe(w0(i,e),n);r.name=i+"-hollow-body",t.add(r);let a=new Fe(new an(e.rimRadius,e.rimTube,16,128),s);a.rotation.x=Math.PI/2,a.position.y=e.rimY,a.name=i+"-rolled-rim",t.add(a);let o=new Fe(new an(e.foot,.02,12,96),n);o.rotation.x=Math.PI/2,o.position.y=e.floor+.02,t.add(o);let l=new Fe(b0(i),new Bt({color:"#fff",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Dt}));return l.name=i+"-interior-print",l.renderOrder=1,t.add(l),{type:i,group:t,body:r,print:l,glaze:n,rim:s,floor:e.floor}}var mt=oi(Si());var gn=oi(Si(),1),T0=["disk","back","wall","belt","ring","wrap","faceFill"],ru=2*Math.PI,au=i=>Math.atan2(Math.sin(i),Math.cos(i));function A0(){let i=8713;function e(l){let c=Float32Array.from({length:l*l},()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296));return(d,m)=>{let f=d*l,h=m*l,p=Math.floor(f),v=Math.floor(h),x=_=>_*_*(3-2*_),u=x(f-p),T=x(h-v),R=(_,w)=>c[(v+w)%l*l+(p+_)%l];return(1-T)*((1-u)*R(0,0)+u*R(1,0))+T*((1-u)*R(0,1)+u*R(1,1))}}let t=e(6),n=e(19),s=e(43),r=128,a=new Uint8Array(r*r*4);for(let l=0;l<r;l++)for(let c=0;c<r;c++){let d=c/r,m=l/r,f=(l*r+c)*4,h=n(d,m),p=t(d,m);a[f]=255*(.5*p+.34*h+.16*s(d,m)),a[f+1]=255*(.6*p+.4*h),a[f+3]=255}let o=new sn(a,r,r);return o.wrapS=o.wrapT=Mn,o.magFilter=nt,o.minFilter=Qt,o.generateMipmaps=!0,o.needsUpdate=!0,o}function ou(i){let{body:e,print:t,glaze:n,type:s}=i,r=n.clone();e.material=r,t.visible=!1;let a=e.geometry,o=a.parameters.points,l=o.length,c=a.userData.designRows||o.map((g,b)=>b),d=[0];for(let g=1;g<l;g++)d.push(d[g-1]+o[g].distanceTo(o[g-1]));let m=a.attributes.position.count;a.setAttribute("profileRow",new Pt(Float32Array.from({length:m},(g,b)=>c[b%l]),1)),a.setAttribute("profileArc",new Pt(Float32Array.from({length:m},(g,b)=>d[b%l]),1));let f=gn.default.get(s),h=f.rimRadius-f.rimTube,p=o.map((g,b)=>{if(s==="cup"||c[b]<f.profile.length-f.inner.length)return 1;let E=a.attributes.normal,S=E.getY(b),L=E.getZ(b),P=0;for(let C=0;C<96;C++){let D=(C+.5)/96,O=C*2.39996323,G=Math.sqrt(D),Z=Math.sqrt(1-D),V=S*Z+L*G*Math.sin(O);if(V<=1e-4)continue;let Y=Math.max(0,f.rimY-g.y)/V,j=Y*G*Math.cos(O),de=g.x+Y*(L*Z-S*G*Math.sin(O));Math.hypot(j,de)<h&&P++}return P/96});a.setAttribute("apertureLight",new Pt(Float32Array.from({length:m},(g,b)=>p[b%l]),1));let v=A0(),x={enamelGrain:{value:v},lining:{value:new Ne("#f4f0e4")},enamelInk:{value:null},inkReady:{value:0},zoneMode:{value:0},printRows:{value:new me},fillMetrics:{value:new N},fillWinding:{value:new me},fillWindow:{value:new $e},limits:{value:new $e},inkTransform:{value:new $e},wallAspect:{value:1}},u,T,R,_;function w(g){if(u=gn.default.region(s,g.zone),gn.default.isFill(u)){R=d[c.indexOf(u.rows[0])],_=d[c.indexOf(u.rows[1])]-R;let b=gn.default.fillBasis(u,g),E=gn.default.fillAspect(u,b,_);x.fillMetrics.value.set(R,1/_,E),x.fillWinding.value.set(...b),x.fillWindow.value.set(...gn.default.fillWindow(u,g))}T=(u.yaw||0)+(u.around?g.x*Math.PI/60:0),x.zoneMode.value=T0.indexOf(u.mode),x.printRows.value.set(...u.rows),x.limits.value.set(u.low||0,u.high||1,T,u.span||u.count||1),x.wallAspect.value=u.mode==="wall"?(u.high-u.low)/(u.radius*u.span):1,gn.default.isFill(u)?x.inkTransform.value.set(g.x/120,-g.y/120,0,1):x.inkTransform.value.set(u.around?0:g.x*3/512,-g.y*3/512,g.rotation*Math.PI/180,g.scale/100)}function A(g){if(!g||g.object!==e)return null;let b=g.face,E=Math.min(c[b.a%l],c[b.b%l],c[b.c%l]);if(E<u.rows[0]||E>=u.rows[1])return null;let{x:S,y:L,z:P}=e.worldToLocal(g.point.clone()),C=Math.hypot(S,P),D=Math.atan2(S,P);if(gn.default.isFill(u)){let V=g.barycoord,j=(V.x*d[b.a%l]+V.y*d[b.b%l]+V.z*d[b.c%l]-R)/_;if(u.mode==="wrap")return{angle:D,y:j};let de=(1-j)*.5/Math.max(C,1e-4);return{x:S*de,y:-P*de}}if(u.mode==="disk"||u.mode==="back")return C<=u.high?{x:.5+S/(2*u.high),y:.5+(u.mode==="back"?P:-P)/(2*u.high)}:null;let G=((u.mode==="ring"?C:L)-u.low)/(u.high-u.low);if(G<0||G>1)return null;let Z=au(D-T);return u.mode==="wall"&&!u.around&&Math.abs(Z)>u.span/2?null:{angle:D,y:G}}r.customProgramCacheKey=()=>"spun-enamel-v4-"+s,r.onBeforeCompile=g=>{Object.assign(g.uniforms,x),g.vertexShader=`attribute float profileRow,profileArc,apertureLight; varying float skyLight; varying vec2 sheetCoord; varying float inkRow; varying vec3 inkPosition;
`+g.vertexShader,g.vertexShader=g.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
inkPosition=position; inkRow=profileRow; sheetCoord=vec2(uv.x,profileArc); skyLight=apertureLight;`),g.fragmentShader=`uniform sampler2D enamelInk,enamelGrain; uniform vec3 lining,fillMetrics; uniform vec2 fillWinding; varying float skyLight; varying vec2 sheetCoord; uniform float inkReady; uniform int zoneMode; uniform vec2 printRows; uniform vec4 limits,inkTransform,fillWindow; uniform float wallAspect; varying float inkRow; varying vec3 inkPosition;
`+g.fragmentShader,g.fragmentShader=g.fragmentShader.replace("#include <color_fragment>",`
   #include <color_fragment>
   float radius=length(inkPosition.xz);
   float angle=atan(inkPosition.x,inkPosition.z)-limits.z;
   float zoneMask=step(printRows.x,inkRow)*step(inkRow,printRows.y);
   vec2 uv;
   float inside=1.0;
   if(zoneMode>=5){
    float arc=(sheetCoord.y-fillMetrics.x)*fillMetrics.y;
    vec2 surface=zoneMode==5?vec2(sheetCoord.x,arc):vec2(inkPosition.x,-inkPosition.z)/max(radius,.0001)*((1.0-arc)*.5);
    vec2 offset=surface-fillWindow.xy;
    if(zoneMode==5)offset.x=fract(offset.x+0.5)-0.5;
    vec2 inset=fillWindow.zw-abs(offset);
    vec2 aa=max(fwidth(surface),vec2(0.00001));
    if(fillWindow.z<0.5)zoneMask*=smoothstep(-0.5*aa.x,0.5*aa.x,inset.x);
    if(fillWindow.w<0.5)zoneMask*=smoothstep(-0.5*aa.y,0.5*aa.y,inset.y);
    surface-=inkTransform.xy;
    surface.y*=fillMetrics.z;
    uv=mat2(fillWinding.x,fillWinding.y,-fillWinding.y,fillWinding.x)*surface+(zoneMode==5?vec2(.5,0.0):vec2(.5));
   }else{
   if(zoneMode<=1){
    uv=vec2(inkPosition.x,(zoneMode==1?1.0:-1.0)*inkPosition.z)/(2.0*limits.y)+0.5;
    zoneMask*=step(radius,limits.y);
   }else{
    float v=((zoneMode==4?radius:inkPosition.y)-limits.x)/(limits.y-limits.x);
    uv=vec2(zoneMode==2?0.5+atan(sin(angle),cos(angle))/limits.w:fract(0.5+angle*limits.w/6.2831853),v);
    zoneMask*=step(0.0,v)*step(v,1.0);
    if(zoneMode==2)zoneMask*=step(0.0,uv.x)*step(uv.x,1.0);
   }
   uv-=0.5+inkTransform.xy;
   if(zoneMode>=3)uv.x=fract(uv.x+0.5)-0.5;
   uv.x/=wallAspect;
   float co=cos(inkTransform.z),si=sin(inkTransform.z);
   uv=mat2(co,si,-si,co)*uv/inkTransform.w+0.5;
   inside=step(0.0,uv.x)*step(uv.x,1.0)*step(0.0,uv.y)*step(uv.y,1.0);
   uv=clamp(uv,vec2(.5/512.0),vec2(1.0-.5/512.0));
   }
   // Leave repeat coordinates unwrapped so mip derivatives remain continuous at a tile boundary.
   vec4 pigment=texture2D(enamelInk,uv);
   vec2 enamelRG=texture2D(enamelGrain,vec2(inkPosition.x*.67+inkPosition.z*.43,inkPosition.y*.73-inkPosition.z*.52)).rg;
   ${s==="cup"?"diffuseColor.rgb=mix(diffuseColor.rgb,lining*vColor.rgb*(1.0-.36*smoothstep(.03,1.1,.98-inkPosition.y)),smoothstep(7.0,8.0,inkRow));":""}
   vec3 pigmentBase=pigment.rgb*mix(vec3(1.0),diffuseColor.rgb,0.055);
   diffuseColor.rgb=mix(diffuseColor.rgb,pigmentBase,pigment.a*zoneMask*inside*inkReady*0.98);
   diffuseColor.rgb*=1.0+0.011*(enamelRG.g-0.5);

  `),g.fragmentShader=g.fragmentShader.replace("#include <aomap_fragment>",`
   #include <aomap_fragment>
   reflectedLight.indirectDiffuse*=mix(.55,1.0,skyLight);
   reflectedLight.indirectSpecular*=mix(.83,1.0,skyLight);
  `),g.fragmentShader=g.fragmentShader.replace("#include <clearcoat_normal_fragment_maps>",`
   #include <clearcoat_normal_fragment_maps>
   vec3 qx=dFdx(-vViewPosition),qy=dFdy(-vViewPosition);
   vec3 s=cross(qy,normal),t=cross(normal,qx);
   float determinant=dot(qx,s),height=enamelRG.r*.0018;
   vec3 gradient=sign(determinant)*(dFdx(height)*s+dFdy(height)*t)/max(abs(determinant),0.0000001);
   normal=normalize(normal-gradient);
   #ifdef USE_CLEARCOAT
    clearcoatNormal=normalize(clearcoatNormal-gradient*.84);
   #endif
  `),g.fragmentShader=g.fragmentShader.replace("#include <lights_physical_fragment>",`
   #include <lights_physical_fragment>
   material.clearcoatRoughness=clamp(material.clearcoatRoughness+(enamelRG.g-.5)*.05,.12,1.0);
  `)};function z(g,b){if(g.angle===void 0)return(b.x-g.x)*(gn.default.isFill(u)?120:512/3);let E=au(b.angle-g.angle);return u.around||u.mode==="wrap"?E*120/ru:(u.mode==="wall"?E/u.span:E*u.count/ru)*512/3}return{setPlacement:w,hitUV:A,dragX:z,dragY:(g,b)=>(g.y-b.y)*(gn.default.isFill(u)?120:512/3),setTexture(g){x.enamelInk.value=g,x.inkReady.value=g?1:0},dispose(){v.dispose()},syncFinish(){r.color.copy(n.color),r.roughness=n.roughness,r.clearcoat=n.clearcoat,r.ior=n.ior,r.specularIntensity=n.specularIntensity,r.clearcoatRoughness=n.clearcoatRoughness}}}var xn=oi(Si(),1);function lu(i){let{type:e,glaze:t,surfaces:n}=i,s={fabricInk:{value:null},fabricReady:{value:0}},r,a=n.map(l=>{l.geometry.attributes.printUv||l.geometry.setAttribute("printUv",l.geometry.attributes.uv);let[c,d]=l.userData.fabricSize,m=Math.min(c,d),f={fabricActive:{value:0},fabricLocalBox:{value:new $e(.5,.5,1,1)},fabricHighlight:{value:0},fabricAspect:{value:new me(c/m,d/m)},fabricMode:{value:0},fabricTransform:{value:new $e(0,0,0,1)},fabricCoverage:{value:new me(.5,.5)},fabricCount:{value:3}};return l.material.customProgramCacheKey=()=>"fabric-print-v1",l.material.onBeforeCompile=h=>{Object.assign(h.uniforms,s,f),h.vertexShader=`attribute vec2 printUv; varying vec2 fabricUV;
`+h.vertexShader,h.vertexShader=h.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
fabricUV=printUv;`),h.fragmentShader=`varying vec2 fabricUV; uniform sampler2D fabricInk; uniform float fabricReady,fabricActive,fabricMode,fabricCount,fabricHighlight; uniform vec4 fabricTransform,fabricLocalBox; uniform vec2 fabricCoverage,fabricAspect;
`+h.fragmentShader,h.fragmentShader=h.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 paintUV=(fabricUV-fabricLocalBox.xy)/fabricLocalBox.zw+.5;vec2 surface=paintUV-.5-fabricTransform.xy;
    float mask=step(abs(surface.x),fabricCoverage.x)*step(abs(surface.y),fabricCoverage.y);
    float co=cos(fabricTransform.z),si=sin(fabricTransform.z);
    vec2 at=mat2(co,si,-si,co)*(surface*fabricAspect);
    if(fabricMode>.5){at=at*fabricCount+.5;}else{at=at/(.68*fabricTransform.w)+.5;mask*=step(0.,at.x)*step(at.x,1.)*step(0.,at.y)*step(at.y,1.);at=clamp(at,vec2(.001),vec2(.999));}
    if(fabricMode>1.5)mask*=step(.37,max(abs(fabricUV.x-.5),abs(fabricUV.y-.5)));
    vec4 pigment=texture2D(fabricInk,at);
    diffuseColor.rgb=mix(diffuseColor.rgb,pigment.rgb*.96,pigment.a*mask*fabricReady*fabricActive);
    // Subtle woven threads; fade above pixel frequency to avoid mobile moire.
    vec2 threadUV=fabricUV*fabricAspect*170.;vec2 fade=1.-smoothstep(vec2(.15),vec2(.7),fwidth(threadUV));
    float weave=dot(sin(threadUV*6.28318),fade)*.006;diffuseColor.rgb*=.99+weave;
    float edgeAt=max(abs(fabricUV.x-.5),abs(fabricUV.y-.5));float edge=smoothstep(.477,.485,edgeAt)*step(edgeAt,.5);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.28,.31),edge*fabricHighlight*.7);
   `)},{mesh:l,own:f}});function o(l){r=xn.default.region(e,l.zone);let c=xn.default.facePlacements(e,l);for(let{mesh:d,own:m}of a){let f=c[d.userData.fabricFace];if(m.fabricActive.value=f?1:0,!f)continue;let h=xn.default.region(e,f.zone),p=xn.default.isFill(h)?[.5,.5,1,1]:d.userData.localPrintBox||[.5,.5,1,1];m.fabricLocalBox.value.fromArray(p);let[v,x]=d.userData.fabricSize,u=Math.min(v*p[2],x*p[3]);m.fabricAspect.value.set(v*p[2]/u,x*p[3]/u),m.fabricMode.value=h.mode==="fabricBorder"?2:xn.default.isFill(h)?1:0,m.fabricTransform.value.set(f.x/120,-f.y/120,f.rotation*Math.PI/180,f.scale/100),m.fabricCoverage.value.set(xn.default.isFill(h)?xn.default.coveragePercent(f.coverWidth)/200:.5,xn.default.isFill(h)?xn.default.coveragePercent(f.coverHeight)/200:.5),m.fabricCount.value=xn.default.fillCount(h,f.scale)}}return{setPlacement:o,setHighlight(l){for(let{mesh:c,own:d}of a)d.fabricHighlight.value=c.userData.fabricFace===r?.face?l:0},setTexture(l){s.fabricInk.value=l,s.fabricReady.value=l?1:0},syncFinish(){for(let{mesh:l}of a)l.material.color.copy(t.color),l.material.specularIntensity=t.specularIntensity;i.trim!==t&&i.trim.color.copy(t.color).multiplyScalar(.88);for(let{material:l,factor:c}of i.tints||[])l.color.copy(t.color).multiplyScalar(c)},hitUV(l){if(l?.object.userData.fabricFace!==r?.face||!(l.uv1||l.uv))return null;let c=l.uv1||l.uv,d=a.find(m=>m.mesh===l.object)?.own.fabricLocalBox.value;return d?{x:(c.x-d.x)/d.z+.5,y:(c.y-d.y)/d.w+.5}:null},dragX:(l,c)=>(c.x-l.x)*120,dragY:(l,c)=>(l.y-c.y)*120,dispose(){}}}function cu(){let i=null;function e(){if(!i)return;let h=i;i=null,h.token++,clearTimeout(h.timer),clearTimeout(h.highlightTimer),cancelAnimationFrame(h.frame),h.observer?.disconnect(),h.events.abort(),h.texture?.dispose(),h.ink?.dispose(),h.environment?.dispose();let p=new Set,v=new Set,x=new Set;h.scene?.traverse(u=>{u.shadow?.map?.dispose(),u.geometry&&p.add(u.geometry),u.material&&v.add(u.material)});for(let u of p)u.dispose();for(let u of v){for(let T of Object.values(u))T?.isTexture&&T!==h.texture&&x.add(T);u.dispose()}for(let u of x)u.dispose();h.renderer?.dispose(),h.renderer?.forceContextLoss(),h.renderer?.domElement.remove()}function t(h){let p=h.camera.aspect,v=h.cameraState.pitch,x=Math.tan(19*Math.PI/180)/Math.min(1,p/1.1);if(p>1&&(h.host.id==="cup-host"||h.host.closest(".wb-cover-open"))){let T=h.bounds.height*Math.cos(v)+h.bounds.depth*Math.abs(Math.sin(v)),R=1.3*Math.max(h.bounds.width/p,T)/(2*mt.default.get(h.vesselType).camera.distance);x=Math.min(x,R)}let u=2*Math.atan(x)*180/Math.PI;h.camera.fov!==u&&(h.camera.fov=u,h.camera.updateProjectionMatrix())}function n(h){h!==i||h.failed||h.frame||(h.frame=requestAnimationFrame(()=>{if(h.frame=0,h!==i||document.hidden||!h.host.isConnected)return;let p=h.cameraState,v=p.distance*Math.cos(p.pitch);t(h);let x=0;h.camera.position.set(v*Math.sin(p.yaw),x+p.distance*Math.sin(p.pitch),v*Math.cos(p.yaw)),h.camera.lookAt(h.vesselType==="cup"?.27:0,x,0),h.renderer.render(h.scene,h.camera),h.draws++}))}function s(h,p,v=!0){h.cameraState=no({...h.cameraState,...p}),n(h),v&&h.onCamera({...h.cameraState})}function r(h,p){h===i&&(h.failed=!0,h.token++,clearTimeout(h.timer),h.host.dataset.mode="static",h.onStatus("fallback",p),h.renderer?.domElement.remove(),cancelAnimationFrame(h.frame),h.frame=0)}function a(h){let p=i;if(!p)return;if(p.vesselType!==h.canvas){c(p.host,h,p.onCamera,p.onStatus,p.options);return}if(p.failed||(p.draft=h,!p.cup||!p.ink))return;let v=h.vesselPlacement||mt.default.placement(h.canvas),x=h.cupCamera||mt.default.regionCamera(h.canvas,v),u=p.zone&&p.zone!==v.zone;p.zone!==v.zone&&(p.zone=v.zone,p.cameraState=no(x)),p.draft=h,p.ink.setPlacement(v),u&&p.ink.setHighlight&&(clearTimeout(p.highlightTimer),p.ink.setHighlight(1),p.highlightTimer=setTimeout(()=>{p.ink.setHighlight(0),n(p)},700)),p.cup.glaze.color.set(mt.default.glazeHex(h.cupMaterial?.color));let T=h.cupMaterial?.finish==="matte";p.cup.glaze.roughness=T?.57:.3+(mt.default.get(h.canvas).roughness||.23)*.15,p.cup.glaze.ior=1.48,p.cup.glaze.specularIntensity=.78,p.cup.glaze.clearcoat=T?.16:.5,p.cup.glaze.clearcoatRoughness=T?.36:.17,mt.default.textile(h.canvas)&&(p.cup.glaze.roughness=.94,p.cup.glaze.clearcoat=0,p.cup.glaze.specularIntensity=.25),p.ink.syncFinish(),n(p);let R=JSON.stringify([h.imageId,h.pattern,...Object.keys(window.PatternEditor.defaults).map(_=>h[_])]);if(!p.error&&R===p.textureKey){p.readyToken===p.token&&p.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E");return}p.error=null,p.textureKey=R,p.token++,p.pending={draft:{...h},token:p.token},p.texture||p.onStatus("loading","\u6B63\u5728\u66F4\u65B0\u5668\u7269\u7EB9\u6837\u2026"),p.drawingTexture||o(p)}async function o(h){h.drawingTexture=!0;try{for(;h===i&&!h.failed&&h.pending;){let{draft:p,token:v}=h.pending;h.pending=null;try{let x=await window.PatternTexture.export(p,{size:512,transparent:!0}),u=URL.createObjectURL(x.blob),T=new Image;try{T.src=u,await T.decode()}finally{URL.revokeObjectURL(u)}if(h!==i||h.failed)return;if(p.imageId!==h.draft.imageId||p.pattern!==h.draft.pattern)continue;let R=new Tt(T);R.colorSpace=zt,R.wrapS=R.wrapT=Mn,R.flipY=!0,R.anisotropy=Math.min(4,h.renderer.capabilities.getMaxAnisotropy()),R.needsUpdate=!0;let _=h.texture;h.texture=R,h.ink.setTexture(R),_?.dispose(),h.host.dataset.textureRevision=String(++h.textureRevision),h.readyToken=v,n(h),v===h.token&&h.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E")}catch(x){h===i&&v===h.token&&(h.error=x,h.ink.setTexture(null),n(h),h.onStatus("error","\u8D34\u56FE\u8BFB\u53D6\u5931\u8D25\uFF1A"+x.message))}}}finally{h.drawingTexture=!1}}function l(h){let{data:p,width:v,height:x,type:u}=new eo().parse(Wh),T=new sn(p,v,x,Zt,u);T.mapping=ns,T.flipY=!0,T.colorSpace=Un,T.minFilter=T.magFilter=nt,T.needsUpdate=!0;let R=new cs(h);try{return R.fromEquirectangular(T)}finally{R.dispose(),T.dispose()}}async function c(h,p,v,x,{force:u=!1,interaction:T=()=>"rotate",onPlacement:R=()=>{}}={}){e();let _={host:h,draft:p,vesselType:p.canvas,options:{force:u,interaction:T,onPlacement:R},onCamera:v,onStatus:x,cameraState:no(p.cupCamera||mt.default.get(p.canvas).camera),token:0,frame:0,draws:0,textureRevision:0,events:new AbortController};if(i=_,h.dataset.mode="loading",x("loading","\u6B63\u5728\u5EFA\u7ACB"+mt.default.get(_.vesselType).name+"\u4E09\u7EF4\u9884\u89C8\u2026"),!u&&(p.cupPreviewMode==="static"||navigator.deviceMemory&&navigator.deviceMemory<=2)){r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u8282\u80FD\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u65CB\u8F6C");return}try{_.renderer=new Ka({alpha:!0,antialias:!0,powerPreference:"low-power"}),_.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),_.renderer.outputColorSpace=zt,_.renderer.toneMapping=Gs,_.renderer.toneMappingExposure=mt.default.textile(p.canvas)?.95:1.16,_.renderer.domElement.setAttribute("aria-label",mt.default.get(p.canvas).name+"\u771F\u5B9E\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C"),h.prepend(_.renderer.domElement),_.scene=new Ts,_.camera=new It(38,1,.1,30),_.cup=su(p.canvas),_.ink=mt.default.textile(p.canvas)?lu(_.cup):ou(_.cup),_.scene.add(_.cup.group);let w=new Wt().setFromObject(_.cup.group),A=w.getSize(new N);_.bounds={width:A.x,height:A.y,depth:A.z},h.dataset.vesselType=_.vesselType,_.environment=l(_.renderer),_.scene.environment=_.environment.texture,_.scene.environmentRotation.y=0,_.scene.environmentIntensity=mt.default.textile(p.canvas)?.48:.86,_.scene.add(new Bs(16776180,11709088,.64));let z=new Qi(16775924,mt.default.textile(p.canvas)?1.8:2.35);z.position.set(-3.8,5.6,3.1),z.castShadow=!0,z.shadow.mapSize.set(1024,1024),z.shadow.camera.left=-3,z.shadow.camera.right=3,z.shadow.camera.top=3,z.shadow.camera.bottom=-3,z.shadow.camera.near=.5,z.shadow.camera.far=12,z.shadow.bias=mt.default.textile(p.canvas)?1e-4:-2e-4,z.shadow.normalBias=mt.default.textile(p.canvas)?.012:.025,z.shadow.radius=10,_.scene.add(z),_.renderer.shadowMap.enabled=!0,_.renderer.shadowMap.type=gi,_.renderer.shadowMap.autoUpdate=!1,_.renderer.shadowMap.needsUpdate=!0,_.cup.group.traverse(ne=>{ne.isMesh&&(ne.castShadow=ne!==_.cup.print,ne.receiveShadow=ne!==_.cup.handle&&ne.name!=="enamel-handle-joint"&&!ne.userData.fabricFace)});let g=new Qi(16776437,.46);g.position.set(3.6,2.3,1.9),_.scene.add(g);let b=document.createElement("canvas");b.width=b.height=128;let E=b.getContext("2d"),S=E.createRadialGradient(64,64,0,64,64,64);S.addColorStop(0,"rgba(43,38,34,.36)"),S.addColorStop(.47,"rgba(43,38,34,.27)"),S.addColorStop(.64,"rgba(43,38,34,.065)"),S.addColorStop(1,"rgba(43,38,34,0)"),E.fillStyle=S,E.fillRect(0,0,128,128);let L=(mt.default.get(_.vesselType).foot||.905)*3.55,P=new Fe(new jn(L,L),new fi({map:new zs(b),transparent:!0,depthWrite:!1,toneMapped:!1}));P.rotation.x=-Math.PI/2,P.position.y=w.min.y-.004,_.scene.add(P);let C=new Fe(new jn(8,8),new Ns({opacity:mt.default.textile(_.vesselType)?.018:.047,depthWrite:!1}));C.rotation.x=-Math.PI/2,C.position.y=w.min.y-.002,C.receiveShadow=!0,_.scene.add(C),_.floor=[P,C];let D=()=>{let ne=h.clientWidth,Ce=h.clientHeight;!ne||!Ce||(_.renderer.setSize(ne,Ce,!1),_.camera.aspect=ne/Ce,_.camera.fov=2*Math.atan(Math.tan(19*Math.PI/180)/Math.min(1,_.camera.aspect/1.1))*180/Math.PI,_.camera.updateProjectionMatrix(),n(_))};_.observer=new ResizeObserver(D),_.observer.observe(h),D();let O=new Map,G=0,Z=()=>{let ne=[...O.values()];return ne.length===2?Math.hypot(ne[0].x-ne[1].x,ne[0].y-ne[1].y):0},V=_.renderer.domElement,Y={signal:_.events.signal},j=null,de=null,xe=null,qe=null,Ge=null,Ye=new Vs,J=ne=>{let Ce=V.getBoundingClientRect();Ye.setFromCamera(new me((ne.clientX-Ce.left)/Ce.width*2-1,-(ne.clientY-Ce.top)/Ce.height*2+1),_.camera);let et=_.cup.group.children.filter(De=>De.visible&&De.isMesh);return _.ink.hitUV(Ye.intersectObjects(et,!1)[0])},te=()=>{if(!j)return;de={...j.current},xe=O.size===2?ds.default.pair([...O.values()]):null;let ne=[...O.values()][0];qe=ne?J({clientX:ne.x,clientY:ne.y}):null};V.addEventListener("pointerdown",ne=>{if(!(O.size>=2)){if(!O.size&&(Ge={..._.cameraState},T()==="place")){let Ce={..._.draft.vesselPlacement};j={original:Ce,current:{...Ce},changed:!1}}O.set(ne.pointerId,{x:ne.clientX,y:ne.clientY}),V.setPointerCapture(ne.pointerId),G=Z(),te(),ne.preventDefault()}},Y),V.addEventListener("pointermove",ne=>{let Ce=O.get(ne.pointerId);if(Ce){if(O.set(ne.pointerId,{x:ne.clientX,y:ne.clientY}),j){if(O.size===2&&xe)j.current=ds.default.pinch(de,xe,ds.default.pair([...O.values()]));else{let et=J(ne);if(!et||!qe)return;let De=de.x+_.ink.dragX(qe,et);j.current={...de,x:Math.round(mt.default.region(_.vesselType,_.zone).around||mt.default.region(_.vesselType,_.zone).mode==="wrap"?((De+60)%120+120)%120-60:ds.default.clamp(De,-60,60)),y:Math.round(ds.default.clamp(de.y+_.ink.dragY(qe,et),-60,60))}}j.changed=!0,R({vesselPlacement:j.current},!1);return}if(O.size===1)s(_,{yaw:_.cameraState.yaw-(ne.clientX-Ce.x)*.009,pitch:_.cameraState.pitch+(ne.clientY-Ce.y)*.008},!1);else{let et=Z();G&&et&&s(_,{distance:_.cameraState.distance*G/et},!1),G=et}}},Y);let ye=ne=>{if(O.has(ne.pointerId)){if(O.delete(ne.pointerId),G=Z(),O.size){te();return}j?.changed&&R({vesselPlacement:j.current},!0),j=null,_.onCamera({..._.cameraState})}},Pe=()=>{O.size&&(O.clear(),j&&R({vesselPlacement:j.original},!1),j=null,Ge&&s(_,Ge))};V.addEventListener("pointerup",ye,Y),V.addEventListener("pointercancel",Pe,Y),V.addEventListener("lostpointercapture",ne=>{O.has(ne.pointerId)&&Pe()},Y),V.addEventListener("webglcontextlost",ne=>{ne.preventDefault(),r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u53EF\u91CD\u8BD5\u4E09\u7EF4")},Y),h.dataset.mode="three",a(_.draft)}catch(w){_.error=w,r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u4E09\u7EF4\u8D44\u6E90\u6682\u4E0D\u53EF\u7528\uFF0C\u53EF\u91CD\u8BD5")}}function d(h){let p=i;!p?.renderer||p.failed||(h==="reset"&&s(p,mt.default.regionCamera(p.vesselType,p.draft.vesselPlacement)),h==="in"&&s(p,{distance:p.cameraState.distance*.88}),h==="out"&&s(p,{distance:p.cameraState.distance/.88}),h==="left"&&s(p,{yaw:p.cameraState.yaw-.35}),h==="right"&&s(p,{yaw:p.cameraState.yaw+.35}))}function m(){let h=i;return h?{mode:h.failed?"static":h.cup?"three":"loading",camera:{...h.cameraState},modelId:h.cup?.group.uuid,vesselType:h.vesselType,error:h.error?.message,zone:h.zone,glaze:"#"+h.cup?.glaze.color.getHexString(),meshName:h.cup?.group.name,bodyName:h.cup?.body.name,geometryId:h.cup?.body.geometry.uuid,hasHandle:!!h.cup?.handle,bounds:h.bounds,printRegion:h.vesselType==="cup"?ri:{radius:mt.default.get(h.vesselType).printRadius,zone:mt.default.get(h.vesselType).zone},handleHasMap:!!h.cup?.handle?.material.map,inkOnBody:!!(h.ink&&h.texture&&!h.cup.print.visible),bodyHasMap:!!h.cup?.body.material.map,textureRevision:h.textureRevision,draws:h.draws,triangles:h.renderer?.info.render.triangles,textures:h.renderer?.info.memory.textures,geometries:h.renderer?.info.memory.geometries}:null}document.addEventListener("visibilitychange",()=>{document.hidden&&i?(cancelAnimationFrame(i.frame),i.frame=0):i?.renderer&&!i.failed&&n(i)}),window.addEventListener("pagehide",e);async function f(h,{transparent:p=!1}={}){let v=i;if(!v?.ink||v.failed||v.vesselType!==h.canvas)throw Error("\u4E09\u7EF4\u9884\u89C8\u5C1A\u672A\u5C31\u7EEA");a(h),v.ink.setHighlight?.(0);let x=v.token;await new Promise((w,A)=>{let z=performance.now(),g=()=>{if(v!==i||v.failed)return A(Error("\u4E09\u7EF4\u9884\u89C8\u5DF2\u5173\u95ED"));if(v.error)return A(v.error);if(v.readyToken===x)return w();if(performance.now()-z>1e4)return A(Error("\u9884\u89C8\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5"));setTimeout(g,25)};g()});let u=v.renderer.getSize(new me),T=v.camera.aspect,R=v.camera.fov,_=document.createElement("canvas");_.width=_.height=640;try{v.renderer.setSize(640,640,!1),v.camera.aspect=1,v.camera.fov=38,v.camera.updateProjectionMatrix();let w=v.cameraState,A=w.distance*Math.cos(w.pitch),z=0;if(v.camera.position.set(A*Math.sin(w.yaw),z+w.distance*Math.sin(w.pitch),A*Math.cos(w.yaw)),v.camera.lookAt(v.vesselType==="cup"?.27:0,z,0),p){v.floor.forEach(P=>P.visible=!1),v.camera.updateMatrixWorld(),v.cup.group.updateWorldMatrix(!0,!0);let b=new N,E=new at,S=Math.tan(19*Math.PI/180)*.97,L=0;v.cup.group.traverse(P=>{if(!P.isMesh||!P.visible)return;let C=P.geometry.attributes.position;E.multiplyMatrices(v.camera.matrixWorldInverse,P.matrixWorld);for(let D=0;D<C.count;D++)b.fromBufferAttribute(C,D).applyMatrix4(E),L=Math.max(L,b.z+Math.max(Math.abs(b.x),Math.abs(b.y))/S)}),v.camera.translateZ(L)}v.renderer.render(v.scene,v.camera);let g=_.getContext("2d");p||(g.fillStyle="#f4f3ef",g.fillRect(0,0,640,640)),g.drawImage(v.renderer.domElement,0,0,640,640)}finally{v.floor.forEach(w=>w.visible=!0),v.renderer.setSize(u.x,u.y,!1),v.camera.aspect=T,v.camera.fov=R,v.camera.updateProjectionMatrix(),n(v)}return new Promise((w,A)=>_.toBlob(z=>z?w(z):A(Error("\u65E0\u6CD5\u4FDD\u5B58\u9884\u89C8\u56FE")),"image/png"))}return{mount:c,update:a,control:d,dispose:e,diagnostics:m,capture:f}}window.Cup3D={...cu(),createViewer:cu};})();
