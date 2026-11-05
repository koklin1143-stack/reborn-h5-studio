(()=>{var _f=Object.create;var Du=Object.defineProperty;var yf=Object.getOwnPropertyDescriptor;var vf=Object.getOwnPropertyNames;var Mf=Object.getPrototypeOf,Sf=Object.prototype.hasOwnProperty;var Uu=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var bf=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of vf(e))!Sf.call(i,s)&&s!==t&&Du(i,s,{get:()=>e[s],enumerable:!(n=yf(e,s))||n.enumerable});return i};var zi=(i,e,t)=>(t=i!=null?_f(Mf(i)):{},bf(e||!i||!i.__esModule?Du(t,"default",{value:i,enumerable:!0}):t,i));var Fu=Uint8Array.fromBase64||(()=>{for(var i=new Uint8Array(128),e=0;e<64;e++)i[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var n=t.length,s=new Uint8Array((n-(t[n-1]=="=")-(t[n-2]=="="))*3/4|0),r=0,a=0;r<n;){var o=i[t.charCodeAt(r++)],c=i[t.charCodeAt(r++)],l=i[t.charCodeAt(r++)],h=i[t.charCodeAt(r++)];s[a++]=o<<2|c>>4,s[a++]=c<<4|l>>2,s[a++]=l<<6|h}return s}})();var Wd=Uu((Hd,ql)=>{(function(i,e){let t=e();typeof ql=="object"?ql.exports=t:i.TouchTransform=t})(typeof window<"u"?window:Hd,function(){let i=(s,r,a)=>Math.max(r,Math.min(a,s)),e=s=>{let[r,a]=s;return{x:(r.x+a.x)/2,y:(r.y+a.y)/2,distance:Math.hypot(a.x-r.x,a.y-r.y),angle:Math.atan2(a.y-r.y,a.x-r.x)}},t=(s,r,a)=>({...s,scale:Math.round(i(s.scale*a.distance/Math.max(1,r.distance),40,160)),rotation:Math.round((s.rotation+Math.atan2(Math.sin(a.angle-r.angle),Math.cos(a.angle-r.angle))*180/Math.PI+540)%360-180)});function n(s,{read:r,preview:a,commit:o,drag:c,transform:l=t}){let h=new Map,f,d,u,m,_=()=>{u={...d},m=h.size===1?[...h.values()][0]:e([...h.values()])};s.addEventListener("pointerdown",p=>{h.size>=2||(p.stopPropagation(),p.preventDefault(),h.size||(f={...r()},d={...f}),h.set(p.pointerId,{x:p.clientX,y:p.clientY}),s.setPointerCapture(p.pointerId),_())}),s.addEventListener("pointermove",p=>{h.has(p.pointerId)&&(p.stopPropagation(),h.set(p.pointerId,{x:p.clientX,y:p.clientY}),d=h.size===2?l(u,m,e([...h.values()])):c(u,m,{x:p.clientX,y:p.clientY}),a(d))}),s.addEventListener("pointerup",p=>{h.has(p.pointerId)&&(p.stopPropagation(),h.delete(p.pointerId),h.size?_():JSON.stringify(d)!==JSON.stringify(f)&&o(d))});let g=p=>{h.size&&(p.stopPropagation(),h.clear(),a(f))};s.addEventListener("pointercancel",g),s.addEventListener("lostpointercapture",p=>{h.has(p.pointerId)&&g(p)})}return{pair:e,pinch:t,bind:n,clamp:i}})});var $i=Uu((BM,ec)=>{(function(i,e){let t=e();typeof ec=="object"&&ec.exports?ec.exports=t:i.Vessels=t})(globalThis,()=>{let i={cup:{profile:[[.001,-1],[.83,-1],[.9,-.995],[.94,-.98],[.96,-.95],[.97,-.9],[1,.93],[1,.98],[.93,.98],[.91,.93],[.88,-.78],[.865,-.815],[.82,-.84],[.001,-.84]],name:"\u642A\u74F7\u676F",short:"\u676F",zone:"\u676F\u8EAB\u6B63\u9762",camera:{yaw:.22,pitch:.46,distance:4.8},rim:"#163d51"},plate:{name:"\u642A\u74F7\u76D8",short:"\u76D8",zone:"\u76D8\u9762\u5185\u4FA7",camera:{yaw:0,pitch:1.02,distance:5.5},rim:"#244f65",rimRadius:1.48,rimY:.2,rimTube:.028,foot:.54,floor:-.25,roughness:.22,printRadius:1.08,inner:[[0,-.1],[.82,-.1],[1.1,-.05],[1.33,.14],[1.48,.2]],profile:[[.001,-.18],[.48,-.18],[.52,-.23],[.6,-.23],[.65,-.18],[.9,-.16],[1.14,-.07],[1.36,.11],[1.48,.16],[1.5,.18],[1.48,.2],[1.33,.14],[1.1,-.05],[.82,-.1],[.001,-.1]]},bowl:{name:"\u642A\u74F7\u7897",short:"\u7897",zone:"\u7897\u5185\u5E95\u4E0E\u5185\u58C1",camera:{yaw:0,pitch:1.1,distance:4.9},rim:"#234c5d",rimRadius:1.16,rimY:.65,rimTube:.036,foot:.4,floor:-.66,roughness:.27,printRadius:.84,inner:[[0,-.525],[.33,-.525],[.49,-.485],[.68,-.333],[.9,-.045],[1.095,.37],[1.145,.625]],profile:[[.001,-.58],[.34,-.58],[.37,-.64],[.43,-.64],[.46,-.55],[.61,-.45],[.78,-.27],[.955,.02],[1.135,.43],[1.19,.63],[1.16,.65],[1.145,.625],[1.095,.37],[.9,-.045],[.68,-.333],[.49,-.485],[.33,-.525],[.001,-.525]]},basin:{name:"\u642A\u74F7\u76C6",short:"\u76C6",zone:"\u76C6\u5185\u5E95",camera:{yaw:0,pitch:.88,distance:6},rim:"#183d52",rimRadius:1.66,rimY:.44,rimTube:.055,foot:1.02,floor:-.53,roughness:.29,printRadius:1.05,inner:[[0,-.39],[.94,-.39],[1.02,-.36],[1.14,-.27],[1.43,.23],[1.48,.35],[1.66,.44]],profile:[[.001,-.48],[.94,-.48],[1.02,-.51],[1.1,-.47],[1.2,-.32],[1.5,.2],[1.55,.32],[1.68,.39],[1.66,.44],[1.48,.35],[1.43,.23],[1.14,-.27],[1.02,-.36],[.94,-.39],[.001,-.39]]}},e={enamel:"\u642A\u74F7\u5668\u76BF",textile:"\u5BB6\u5C45\u5E03\u827A",bags:"\u5305\u888B"};for(let A of Object.values(i))A.family="enamel";Object.assign(i,{cushion:{name:"\u62B1\u6795",short:"\u62B1\u6795",family:"textile",size:[2.25,2.25,.96],camera:{yaw:.5,pitch:.16,distance:5.4}},pillow:{name:"\u6795\u5934",short:"\u6795\u5934",family:"textile",size:[3,1.9,.84],camera:{yaw:.4,pitch:.2,distance:5.7}},duvet:{name:"\u88AB\u5957",short:"\u88AB\u5957",family:"textile",size:[2.7,3.25,.18],camera:{yaw:.26,pitch:.3,distance:6.3}},backpack:{name:"\u4E66\u5305",short:"\u4E66\u5305",family:"bags",size:[1.85,2.5,.88],camera:{yaw:.48,pitch:.18,distance:5.8}},tote:{name:"\u5E06\u5E03\u888B",short:"\u5E06\u5E03\u888B",family:"bags",size:[2.15,2.25,.6],camera:{yaw:.32,pitch:.22,distance:6.2}}});let t=A=>!!i[A]&&i[A].family!=="enamel",n=A=>t(A)?"\u5E03\u6599\u989C\u8272":"\u91C9\u8272",s=A=>({color:"white",finish:t(A)?"matte":"gloss"}),r=A=>JSON.parse(JSON.stringify(A)),a=A=>i[A]||i.cup,o={cup:{body:{label:"\u676F\u8EAB\u6B63\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986},outerFill:{label:"\u676F\u8EAB\u6EE1\u94FA",mode:"wrap",rows:[4,7],radius:.986,repeat:7,pitch:.34},back:{label:"\u676F\u8EAB\u80CC\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986,yaw:Math.PI},band:{label:"\u676F\u53E3\u73AF\u5E26",mode:"belt",rows:[0,7],low:.44,high:.88,count:14,pitch:.23}},plate:{center:{label:"\u76D8\u5FC3",mode:"disk",rows:[10,14],high:1.08},innerFill:{label:"\u76D8\u9762\u6EE1\u94FA",mode:"faceFill",rows:[10,14],repeat:3},rim:{label:"\u76D8\u6CBF\u82B1\u8FB9",mode:"ring",rows:[10,14],low:1.05,high:1.46,count:18},back:{label:"\u76D8\u80CC",mode:"back",rows:[0,8],high:1.3,pitch:-.65}},bowl:{center:{label:"\u7897\u5185",mode:"disk",rows:[11,17],high:.84},outer:{label:"\u7897\u8EAB\u5916\u58C1",mode:"wall",rows:[3,10],low:-.45,high:.56,span:1.2,radius:.85,pitch:.18,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[4,9],radius:.86,repeat:8,pitch:.24},innerFill:{label:"\u7897\u5185\u6EE1\u94FA",mode:"faceFill",rows:[11,17],repeat:3},rim:{label:"\u7897\u53E3\u82B1\u8FB9",mode:"ring",rows:[11,17],low:.86,high:1.12,count:14}},basin:{center:{label:"\u76C6\u5185\u5E95",mode:"disk",rows:[8,14],high:1.05},outer:{label:"\u76C6\u8EAB\u5916\u58C1",mode:"wall",rows:[3,8],low:-.35,high:.31,span:.6,radius:1.32,pitch:.13,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[3,7],radius:1.37,repeat:14,pitch:.21},innerFill:{label:"\u76C6\u5185\u6EE1\u94FA",mode:"faceFill",rows:[8,14],repeat:4},rim:{label:"\u76C6\u53E3\u82B1\u8FB9",mode:"ring",rows:[8,14],low:1.38,high:1.64,count:24}}};for(let A of Object.keys(i).filter(t)){o[A]={};let P=A==="backpack"?["front","pocket","back"]:["front","back"];for(let L of P){let z=L==="front"?A==="backpack"?"\u4E3B\u5305\u6B63\u9762":"\u6B63\u9762":L==="pocket"?"\u524D\u888B":"\u80CC\u9762";o[A][L]={label:z,mode:"fabric",face:L,repeat:3,pitch:L==="back"&&["pillow","duvet"].includes(A)?-.32:i[A].camera.pitch,yaw:L==="back"?Math.PI+.15:i[A].camera.yaw},o[A][L+"Fill"]={...o[A][L],label:z+"\u6EE1\u94FA",mode:"fabricFill"}}A==="duvet"&&(o[A].border={label:"\u6B63\u9762\u8FB9\u7F18",mode:"fabricBorder",face:"front",repeat:6})}let c=(A,P)=>o[A]?.[P]||Object.values(o[A]||o.cup)[0],l=A=>["wrap","faceFill","fabricFill","fabricBorder"].includes(A.mode),h=(A,P)=>t(A)?(c(A,P?.zone).face||"front")+"Fill":A==="plate"?"innerFill":"outerFill",f=A=>Number.isFinite(A)?Math.max(5,Math.min(100,A)):100;function d(A,P){let L=f(P.coverWidth)/200,z=f(P.coverHeight)/200,D=A.mode==="wrap",k=(P.x||0)/120,V=-(P.y||0)/120,$=(W,Y)=>Math.max(Y-.5,Math.min(.5-Y,W));return[D?k:$(k,L),(D?.5:0)+$(V,z),L,z]}function u(A,P){let L=A.vesselPlacement,z=c(A.canvas,L.zone),D=l(z),k=t(A.canvas)?z.face:["wall","disk","back"].includes(z.mode)?L.zone:["faceFill","ring"].includes(z.mode)?"center":A.canvas==="cup"?"body":"outer",V=P==="local"?k:P==="custom"&&D?L.zone:h(A.canvas,L),$=V===L.zone?{vesselPlacement:{...L}}:M(A,V),W=$.vesselPlacement;return P==="full"&&(W.coverWidth=100,W.coverHeight=100),P==="custom"&&!D&&W.coverWidth==null&&(W.coverWidth=55,W.coverHeight=70),$}function m(A,P=100){let L=A.mode==="wrap"?24:10,z=Math.max(40,Math.min(160,P));return Math.round(z<100?A.repeat+(100-z)*(L-A.repeat)/60:1+(160-z)*(A.repeat-1)/60)}function _(A,P){let L=A.mode==="wrap"?24:10,z=Math.max(1,Math.min(L,P));return z<A.repeat?160-(z-1)*60/(A.repeat-1):100-(z-A.repeat)*60/(L-A.repeat)}function g(A,P){let L=m(A,P.scale),z=(P.rotation||0)*Math.PI/180,D=L*Math.cos(z),k=L*Math.sin(z);return A.mode==="wrap"?[Math.round(D),Math.round(k)]:[D,k]}function p(A,P,L){if(A.mode!=="wrap")return 1;let z=Math.hypot(...P);return Math.max(1,Math.round(z*L/(2*Math.PI*A.radius)))/z}let T={white:"#f5f1e6",cream:"#e9ddc6",blue:"#c9dcdf"},R=A=>/^#[0-9a-f]{6}$/i.test(A)?A.toLowerCase():Object.hasOwn(T,A)?T[A]:T.white;function y(A,P){let L=c(A,P?.zone),z=a(A).camera;return{...z,pitch:L.pitch??z.pitch,yaw:(L.yaw??z.yaw)+(L.around?(P?.x||0)*Math.PI/60:0)}}function M(A,P){if(!o[A.canvas]?.[P])throw Error("\u8BE5\u5668\u578B\u6CA1\u6709\u8FD9\u4E2A\u5370\u82B1\u4F4D\u7F6E");let{zones:L={},faces:z={},...D}=A.vesselPlacement,k={...E(A.canvas),...L[P],zone:P};return{vesselPlacement:{...k,zones:{...L,[D.zone]:D},...t(A.canvas)?{faces:{...z,[c(A.canvas,D.zone).face]:D.zone}}:{}},cupCamera:y(A.canvas,k)}}function w(A,P){let L={};for(let[z,D]of Object.entries(P.faces||{}))P.zones?.[D]&&c(A,D).face===z&&(L[z]=P.zones[D]);return L[c(A,P.zone).face]=P,L}let E=A=>({zone:t(A)?"front":A==="cup"?"body":A==="basin"?"outer":"center",x:0,y:0,scale:100,rotation:0});function x(A){A.vesselStates={...A.vesselStates||{},[A.canvas]:{placement:r(A.vesselPlacement||E(A.canvas)),camera:r(A.cupCamera||a(A.canvas).camera),material:r(A.cupMaterial||s(A.canvas))}}}function S(A,P){if(!i[P])throw Error("\u5668\u578B\u5C1A\u672A\u63A5\u5165");let L=r(A.vesselStates||{});L[A.canvas]={placement:r(A.vesselPlacement||E(A.canvas)),camera:r(A.cupCamera||a(A.canvas).camera),material:r(A.cupMaterial||s(A.canvas))};let z=L[P]||{placement:E(P),camera:y(P,E(P)),material:s(P)};return{canvas:P,vesselStates:L,vesselPlacement:r(z.placement),cupCamera:r(z.camera),cupMaterial:r(z.material)}}function C(A,P){let L=a(A).inner;for(let z=1;z<L.length;z++)if(P<=L[z][0]){let[D,k]=L[z-1],[V,$]=L[z];return k+($-k)*(P-D)/(V-D)}return L.at(-1)[1]}return{data:i,get:a,families:e,textile:t,materialLabel:n,material:s,facePlacements:w,regions:o,region:c,isFill:l,primaryFill:h,coveragePercent:f,fillWindow:d,coverPatch:u,fillCount:m,fillScale:_,fillBasis:g,fillAspect:p,regionCamera:y,zonePatch:M,glazeHex:R,placement:E,remember:x,switchPatch:S,height:C}})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Ah=0,$c=1,Eh=2;var Wi=1,Rh=2,Is=3,Dt=0,Zt=1,Gt=2,Fn=0,Ps=1,jc=2,Qc=3,el=4,Ch=5;var Xi=100,zh=101,Ih=102,Ph=103,Lh=104,Nh=200,Dh=201,Uh=202,Fh=203,tl=204,nl=205,Oh=206,Bh=207,kh=208,Vh=209,Gh=210,Hh=211,Wh=212,Xh=213,qh=214,Ta=0,Aa=1,Ea=2,gs=3,Ra=4,Ca=5,za=6,Ia=7,il=0,Yh=1,Zh=2,En=0,sl=1,rl=2,al=3,ol=4,cl=5,ll=6,Ur=7,Oc="attached",Kh="detached",ul=300,wi=301,qi=302,Ls=303,so=304,Fr=306,fn=1e3,jt=1001,xs=1002,St=1003,ro=1004;var Yi=1005;var et=1006,Ns=1007;var nn=1008;var sn=1009,hl=1010,dl=1011,Ds=1012,ao=1013,Rn=1014,Ht=1015,Kt=1016,oo=1017,co=1018,Us=1020,fl=35902,pl=35899,ml=1021,gl=1022,Jt=1023,Nn=1026,Ti=1027,lo=1028,uo=1029,Ai=1030,ho=1031;var fo=1033,Or=33776,Br=33777,kr=33778,Vr=33779,po=35840,mo=35841,go=35842,xo=35843,_o=36196,yo=37492,vo=37496,Mo=37488,So=37489,Gr=37490,bo=37491,wo=37808,To=37809,Ao=37810,Eo=37811,Ro=37812,Co=37813,zo=37814,Io=37815,Po=37816,Lo=37817,No=37818,Do=37819,Uo=37820,Fo=37821,Oo=36492,Bo=36494,ko=36495,Vo=36283,Go=36284,Hr=36285,Ho=36286;var Ui=2300,Fi=2301,Sa=2302,Bc=2303,kc=2400,Vc=2401,Gc=2402,Jh=2500;var xl=0,Wr=1,Fs=2,$h=3200;var Wo=0,jh=1,ri="",vt="srgb",zt="srgb-linear",or="linear",it="srgb";var ba=7680;var Qh=519,ed=512,td=513,nd=514,Xo=515,id=516,sd=517,qo=518,rd=519,_l=35044;var yl="300 es",bn=2e3,_s=2001;function wf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ys(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function ad(){let i=ys("canvas");return i.style.display="block",i}var Ou={},vs=null;function cr(...i){let e="THREE."+i.shift();vs?vs("log",e,...i):console.log(e,...i)}function od(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Te(...i){i=od(i);let e="THREE."+i.shift();if(vs)vs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Pe(...i){i=od(i);let e="THREE."+i.shift();if(vs)vs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Di(...i){let e=i.join(" ");e in Ou||(Ou[e]=!0,Te(...i))}function cd(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var ld={[Ta]:Aa,[Ea]:za,[Ra]:Ia,[gs]:Ca,[Aa]:Ta,[za]:Ea,[Ia]:Ra,[Ca]:gs},Dn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bu=1234567,ir=Math.PI/180,Oi=180/Math.PI;function wn(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(kt[i&255]+kt[i>>8&255]+kt[i>>16&255]+kt[i>>24&255]+"-"+kt[e&255]+kt[e>>8&255]+"-"+kt[e>>16&15|64]+kt[e>>24&255]+"-"+kt[t&63|128]+kt[t>>8&255]+"-"+kt[t>>16&255]+kt[t>>24&255]+kt[n&255]+kt[n>>8&255]+kt[n>>16&255]+kt[n>>24&255]).toLowerCase()}function Be(i,e,t){return Math.max(e,Math.min(t,i))}function vl(i,e){return(i%e+e)%e}function Af(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Ef(i,e,t){return i!==e?(t-i)/(e-i):0}function sr(i,e,t){return(1-t)*i+t*e}function Rf(i,e,t,n){return sr(i,e,1-Math.exp(-t*n))}function Cf(i,e=1){return e-Math.abs(vl(i,e*2)-e)}function zf(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function If(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Pf(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lf(i,e){return i+Math.random()*(e-i)}function Nf(i){return i*(.5-Math.random())}function Df(i){i!==void 0&&(Bu=i);let e=Bu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uf(i){return i*ir}function Ff(i){return i*Oi}function Of(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Bf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function kf(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vf(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),d=a((e-n)/2),u=r((n-e)/2),m=a((n-e)/2);switch(s){case"XYX":i.set(o*h,c*f,c*d,o*l);break;case"YZY":i.set(c*d,o*h,c*f,o*l);break;case"ZXZ":i.set(c*f,c*d,o*h,o*l);break;case"XZX":i.set(o*h,c*m,c*u,o*l);break;case"YXY":i.set(c*u,o*h,c*m,o*l);break;case"ZYZ":i.set(c*m,c*u,o*h,o*l);break;default:Te("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Sn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function at(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var Os={DEG2RAD:ir,RAD2DEG:Oi,generateUUID:wn,clamp:Be,euclideanModulo:vl,mapLinear:Af,inverseLerp:Ef,lerp:sr,damp:Rf,pingpong:Cf,smoothstep:zf,smootherstep:If,randInt:Pf,randFloat:Lf,randFloatSpread:Nf,seededRandom:Df,degToRad:Uf,radToDeg:Ff,isPowerOfTwo:Of,ceilPowerOfTwo:Bf,floorPowerOfTwo:kf,setQuaternionFromProperEuler:Vf,normalize:at,denormalize:Sn},Al=class Al{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Al.prototype.isVector2=!0;var de=Al,on=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],d=r[a+0],u=r[a+1],m=r[a+2],_=r[a+3];if(f!==_||c!==d||l!==u||h!==m){let g=c*d+l*u+h*m+f*_;g<0&&(d=-d,u=-u,m=-m,_=-_,g=-g);let p=1-o;if(g<.9995){let T=Math.acos(g),R=Math.sin(T);p=Math.sin(p*T)/R,o=Math.sin(o*T)/R,c=c*p+d*o,l=l*p+u*o,h=h*p+m*o,f=f*p+_*o}else{c=c*p+d*o,l=l*p+u*o,h=h*p+m*o,f=f*p+_*o;let T=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=T,l*=T,h*=T,f*=T}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[a],d=r[a+1],u=r[a+2],m=r[a+3];return e[t]=o*m+h*f+c*u-l*d,e[t+1]=c*m+h*d+l*f-o*u,e[t+2]=l*m+h*u+o*d-c*f,e[t+3]=h*m-o*f-c*d-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),f=o(r/2),d=c(n/2),u=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*h*f+l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f-d*u*m;break;case"YXZ":this._x=d*h*f+l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f+d*u*m;break;case"ZXY":this._x=d*h*f-l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f-d*u*m;break;case"ZYX":this._x=d*h*f-l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f+d*u*m;break;case"YZX":this._x=d*h*f+l*u*m,this._y=l*u*f+d*h*m,this._z=l*h*m-d*u*f,this._w=l*h*f-d*u*m;break;case"XZY":this._x=d*h*f-l*u*m,this._y=l*u*f-d*h*m,this._z=l*h*m+d*u*f,this._w=l*h*f+d*u*m;break;default:Te("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+o+f;if(d>0){let u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(h-c)*u,this._y=(r-l)*u,this._z=(a-s)*u}else if(n>o&&n>f){let u=2*Math.sqrt(1+n-o-f);this._w=(h-c)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+l)/u}else if(o>f){let u=2*Math.sqrt(1+o-n-f);this._w=(r-l)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(c+h)/u}else{let u=2*Math.sqrt(1+f-n-o);this._w=(a-s)/u,this._x=(r+l)/u,this._y=(c+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Be(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},El=class El{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+c*l+a*f-o*h,this.y=n+c*h+o*l-r*f,this.z=s+c*f+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return hc.copy(this).projectOnVector(e),this.sub(hc)}reflect(e){return this.sub(hc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Be(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};El.prototype.isVector3=!0;var N=El,hc=new N,ku=new on,Rl=class Rl{constructor(e,t,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],u=n[5],m=n[8],_=s[0],g=s[3],p=s[6],T=s[1],R=s[4],y=s[7],M=s[2],w=s[5],E=s[8];return r[0]=a*_+o*T+c*M,r[3]=a*g+o*R+c*w,r[6]=a*p+o*y+c*E,r[1]=l*_+h*T+f*M,r[4]=l*g+h*R+f*w,r[7]=l*p+h*y+f*E,r[2]=d*_+u*T+m*M,r[5]=d*g+u*R+m*w,r[8]=d*p+u*y+m*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=h*a-o*l,d=o*c-h*r,u=l*r-a*c,m=t*f+n*d+s*u;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return e[0]=f*_,e[1]=(s*l-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=d*_,e[4]=(h*t-s*c)*_,e[5]=(s*r-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Di("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(dc.makeScale(e,t)),this}rotate(e){return Di("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(dc.makeRotation(-e)),this}translate(e,t){return Di("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(dc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Rl.prototype.isMatrix3=!0;var Ue=Rl,dc=new Ue,Vu=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gu=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Gf(){let i={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===it&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===it&&(s.r=ms(s.r),s.g=ms(s.g),s.b=ms(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ri?or:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Di("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Di("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[zt]:{primaries:e,whitePoint:n,transfer:or,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:e,whitePoint:n,transfer:it,toXYZ:Vu,fromXYZ:Gu,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}}),i}var We=Gf();function Kn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ms(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ts,Pa=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ts===void 0&&(ts=ys("canvas")),ts.width=e.width,ts.height=e.height;let s=ts.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=ts}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ys("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Kn(t[n]/255)*255):t[n]=Kn(t[n]);return{data:t,width:e.width,height:e.height}}else return Te("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Hf=0,Ms=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Hf++}),this.uuid=wn(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fc(s[a].image)):r.push(fc(s[a]))}else r=fc(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function fc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pa.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Te("Texture: Unable to serialize Texture."),{})}var Wf=0,pc=new N,bt=class i extends Dn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=jt,s=jt,r=et,a=nn,o=Jt,c=sn,l=i.DEFAULT_ANISOTROPY,h=ri){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=wn(),this.name="",this.source=new Ms(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new de(0,0),this.repeat=new de(1,1),this.center=new de(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(pc).x}get height(){return this.source.getSize(pc).y}get depth(){return this.source.getSize(pc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Te(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fn:e.x=e.x-Math.floor(e.x);break;case jt:e.x=e.x<0?0:1;break;case xs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fn:e.y=e.y-Math.floor(e.y);break;case jt:e.y=e.y<0?0:1;break;case xs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=ul;bt.DEFAULT_ANISOTROPY=1;var Cl=class Cl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],u=c[5],m=c[9],_=c[2],g=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-_)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+_)<.1&&Math.abs(m+g)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let R=(l+1)/2,y=(u+1)/2,M=(p+1)/2,w=(h+d)/4,E=(f+_)/4,x=(m+g)/4;return R>y&&R>M?R<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(R),s=w/n,r=E/n):y>M?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=x/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=E/r,s=x/r),this.set(n,s,r,t),this}let T=Math.sqrt((g-m)*(g-m)+(f-_)*(f-_)+(d-h)*(d-h));return Math.abs(T)<.001&&(T=1),this.x=(g-m)/T,this.y=(f-_)/T,this.z=(d-h)/T,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Be(this.x,e.x,t.x),this.y=Be(this.y,e.y,t.y),this.z=Be(this.z,e.z,t.z),this.w=Be(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Be(this.x,e,t),this.y=Be(this.y,e,t),this.z=Be(this.z,e,t),this.w=Be(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Be(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Cl.prototype.isVector4=!0;var $e=Cl,La=class extends Dn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:et,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new bt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:et,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Ms(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Qt=class extends La{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},lr=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Na=class extends bt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var io=class io{constructor(e,t,n,s,r,a,o,c,l,h,f,d,u,m,_,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,f,d,u,m,_,g)}set(e,t,n,s,r,a,o,c,l,h,f,d,u,m,_,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=f,p[14]=d,p[3]=u,p[7]=m,p[11]=_,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/ns.setFromMatrixColumn(e,0).length(),r=1/ns.setFromMatrixColumn(e,1).length(),a=1/ns.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let d=a*h,u=a*f,m=o*h,_=o*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=u+m*l,t[5]=d-_*l,t[9]=-o*c,t[2]=_-d*l,t[6]=m+u*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,u=c*f,m=l*h,_=l*f;t[0]=d+_*o,t[4]=m*o-u,t[8]=a*l,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=u*o-m,t[6]=_+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,u=c*f,m=l*h,_=l*f;t[0]=d-_*o,t[4]=-a*f,t[8]=m+u*o,t[1]=u+m*o,t[5]=a*h,t[9]=_-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,u=a*f,m=o*h,_=o*f;t[0]=c*h,t[4]=m*l-u,t[8]=d*l+_,t[1]=c*f,t[5]=_*l+d,t[9]=u*l-m,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,u=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=_-d*f,t[8]=m*f+u,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=u*f+m,t[10]=d-_*f}else if(e.order==="XZY"){let d=a*c,u=a*l,m=o*c,_=o*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+_,t[5]=a*h,t[9]=u*f-m,t[2]=m*f-u,t[6]=o*h,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Xf,e,qf)}lookAt(e,t,n){let s=this.elements;return rn.subVectors(e,t),rn.lengthSq()===0&&(rn.z=1),rn.normalize(),li.crossVectors(n,rn),li.lengthSq()===0&&(Math.abs(n.z)===1?rn.x+=1e-4:rn.z+=1e-4,rn.normalize(),li.crossVectors(n,rn)),li.normalize(),$r.crossVectors(rn,li),s[0]=li.x,s[4]=$r.x,s[8]=rn.x,s[1]=li.y,s[5]=$r.y,s[9]=rn.y,s[2]=li.z,s[6]=$r.z,s[10]=rn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],u=n[13],m=n[2],_=n[6],g=n[10],p=n[14],T=n[3],R=n[7],y=n[11],M=n[15],w=s[0],E=s[4],x=s[8],S=s[12],C=s[1],A=s[5],P=s[9],L=s[13],z=s[2],D=s[6],k=s[10],V=s[14],$=s[3],W=s[7],Y=s[11],Q=s[15];return r[0]=a*w+o*C+c*z+l*$,r[4]=a*E+o*A+c*D+l*W,r[8]=a*x+o*P+c*k+l*Y,r[12]=a*S+o*L+c*V+l*Q,r[1]=h*w+f*C+d*z+u*$,r[5]=h*E+f*A+d*D+u*W,r[9]=h*x+f*P+d*k+u*Y,r[13]=h*S+f*L+d*V+u*Q,r[2]=m*w+_*C+g*z+p*$,r[6]=m*E+_*A+g*D+p*W,r[10]=m*x+_*P+g*k+p*Y,r[14]=m*S+_*L+g*V+p*Q,r[3]=T*w+R*C+y*z+M*$,r[7]=T*E+R*A+y*D+M*W,r[11]=T*x+R*P+y*k+M*Y,r[15]=T*S+R*L+y*V+M*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],u=e[14],m=e[3],_=e[7],g=e[11],p=e[15],T=c*u-l*d,R=o*u-l*f,y=o*d-c*f,M=a*u-l*h,w=a*d-c*h,E=a*f-o*h;return t*(_*T-g*R+p*y)-n*(m*T-g*M+p*w)+s*(m*R-_*M+p*E)-r*(m*y-_*w+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-n*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],u=e[11],m=e[12],_=e[13],g=e[14],p=e[15],T=t*o-n*a,R=t*c-s*a,y=t*l-r*a,M=n*c-s*o,w=n*l-r*o,E=s*l-r*c,x=h*_-f*m,S=h*g-d*m,C=h*p-u*m,A=f*g-d*_,P=f*p-u*_,L=d*p-u*g,z=T*L-R*P+y*A+M*C-w*S+E*x;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/z;return e[0]=(o*L-c*P+l*A)*D,e[1]=(s*P-n*L-r*A)*D,e[2]=(_*E-g*w+p*M)*D,e[3]=(d*w-f*E-u*M)*D,e[4]=(c*C-a*L-l*S)*D,e[5]=(t*L-s*C+r*S)*D,e[6]=(g*y-m*E-p*R)*D,e[7]=(h*E-d*y+u*R)*D,e[8]=(a*P-o*C+l*x)*D,e[9]=(n*C-t*P-r*x)*D,e[10]=(m*w-_*y+p*T)*D,e[11]=(f*y-h*w-u*T)*D,e[12]=(o*S-a*A-c*x)*D,e[13]=(t*A-n*S+s*x)*D,e[14]=(_*R-m*M-g*T)*D,e[15]=(h*M-f*R+d*T)*D,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,f=o+o,d=r*l,u=r*h,m=r*f,_=a*h,g=a*f,p=o*f,T=c*l,R=c*h,y=c*f,M=n.x,w=n.y,E=n.z;return s[0]=(1-(_+p))*M,s[1]=(u+y)*M,s[2]=(m-R)*M,s[3]=0,s[4]=(u-y)*w,s[5]=(1-(d+p))*w,s[6]=(g+T)*w,s[7]=0,s[8]=(m+R)*E,s[9]=(g-T)*E,s[10]=(1-(d+_))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ns.set(s[0],s[1],s[2]).length(),o=ns.set(s[4],s[5],s[6]).length(),c=ns.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let l=1/a,h=1/o,f=1/c;return _n.elements[0]*=l,_n.elements[1]*=l,_n.elements[2]*=l,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=f,_n.elements[9]*=f,_n.elements[10]*=f,t.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,s,r,a,o=bn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),d=(t+e)/(t-e),u=(n+s)/(n-s),m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===bn)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===_s)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=f,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=bn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),d=-(t+e)/(t-e),u=-(n+s)/(n-s),m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===bn)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===_s)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=f,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};io.prototype.isMatrix4=!0;var De=io,ns=new N,_n=new De,Xf=new N(0,0,0),qf=new N(1,1,1),li=new N,$r=new N,rn=new N,Hu=new De,Wu=new on,Jn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],f=s[2],d=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Be(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(Be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:Te("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Hu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Wu.setFromEuler(this),this.setFromQuaternion(Wu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Jn.DEFAULT_ORDER="XYZ";var Ss=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Yf=0,Xu=new N,is=new on,Gn=new De,jr=new N,Ks=new N,Zf=new N,Kf=new on,qu=new N(1,0,0),Yu=new N(0,1,0),Zu=new N(0,0,1),Ku={type:"added"},Jf={type:"removed"},ss={type:"childadded",child:null},mc={type:"childremoved",child:null},gt=class i extends Dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yf++}),this.uuid=wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new N,t=new Jn,n=new on,s=new N(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new De},normalMatrix:{value:new Ue}}),this.matrix=new De,this.matrixWorld=new De,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ss,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.multiply(is),this}rotateOnWorldAxis(e,t){return is.setFromAxisAngle(e,t),this.quaternion.premultiply(is),this}rotateX(e){return this.rotateOnAxis(qu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(Zu,e)}translateOnAxis(e,t){return Xu.copy(e).applyQuaternion(this.quaternion),this.position.add(Xu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(qu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(Zu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?jr.copy(e):jr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ks.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Ks,jr,this.up):Gn.lookAt(jr,Ks,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),is.setFromRotationMatrix(Gn),this.quaternion.premultiply(is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Pe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ku),ss.child=e,this.dispatchEvent(ss),ss.child=null):Pe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Jf),mc.child=e,this.dispatchEvent(mc),mc.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ku),ss.child=e,this.dispatchEvent(ss),ss.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,e,Zf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ks,Kf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),u=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};gt.DEFAULT_UP=new N(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ct=class extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}},$f={type:"move"},bs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ct,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ct,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ct,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let _ of e.hand.values()){let g=t.getJointPose(_,n),p=this._getHandJoint(l,_);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),u=.02,m=.005;l.inputState.pinching&&d>u+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=u-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($f)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Ct;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ud={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ui={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function gc(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=vl(e,1),t=Be(t,0,1),n=Be(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=gc(a,r,e+1/3),this.g=gc(a,r,e),this.b=gc(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&Te("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Te("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Te("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){let n=ud[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Te("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Kn(e.r),this.g=Kn(e.g),this.b=Kn(e.b),this}copyLinearToSRGB(e){return this.r=ms(e.r),this.g=ms(e.g),this.b=ms(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return We.workingToColorSpace(Vt.copy(this),e),Math.round(Be(Vt.r*255,0,255))*65536+Math.round(Be(Vt.g*255,0,255))*256+Math.round(Be(Vt.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(Vt.copy(this),t);let n=Vt.r,s=Vt.g,r=Vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let f=a-o;switch(l=h<=.5?f/(a+o):f/(2-a-o),a){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(Vt.copy(this),t),e.r=Vt.r,e.g=Vt.g,e.b=Vt.b,e}getStyle(e=vt){We.workingToColorSpace(Vt.copy(this),e);let t=Vt.r,n=Vt.g,s=Vt.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ui),this.setHSL(ui.h+e,ui.s+t,ui.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ui),e.getHSL(Qr);let n=sr(ui.h,Qr.h,t),s=sr(ui.s,Qr.s,t),r=sr(ui.l,Qr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Vt=new ze;ze.NAMES=ud;var ur=class extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Jn,this.environmentIntensity=1,this.environmentRotation=new Jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},yn=new N,Hn=new N,xc=new N,Wn=new N,rs=new N,as=new N,Ju=new N,_c=new N,yc=new N,vc=new N,Mc=new $e,Sc=new $e,bc=new $e,mi=class i{constructor(e=new N,t=new N,n=new N){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),yn.subVectors(e,t),s.cross(yn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){yn.subVectors(s,t),Hn.subVectors(n,t),xc.subVectors(e,t);let a=yn.dot(yn),o=yn.dot(Hn),c=yn.dot(xc),l=Hn.dot(Hn),h=Hn.dot(xc),f=a*l-o*o;if(f===0)return r.set(0,0,0),null;let d=1/f,u=(l*c-o*h)*d,m=(a*h-o*c)*d;return r.set(1-u-m,m,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,Wn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Wn.x),c.addScaledVector(a,Wn.y),c.addScaledVector(o,Wn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return Mc.setScalar(0),Sc.setScalar(0),bc.setScalar(0),Mc.fromBufferAttribute(e,t),Sc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Mc,r.x),a.addScaledVector(Sc,r.y),a.addScaledVector(bc,r.z),a}static isFrontFacing(e,t,n,s){return yn.subVectors(n,t),Hn.subVectors(e,t),yn.cross(Hn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return yn.subVectors(this.c,this.b),Hn.subVectors(this.a,this.b),yn.cross(Hn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;rs.subVectors(s,n),as.subVectors(r,n),_c.subVectors(e,n);let c=rs.dot(_c),l=as.dot(_c);if(c<=0&&l<=0)return t.copy(n);yc.subVectors(e,s);let h=rs.dot(yc),f=as.dot(yc);if(h>=0&&f<=h)return t.copy(s);let d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(rs,a);vc.subVectors(e,r);let u=rs.dot(vc),m=as.dot(vc);if(m>=0&&u<=m)return t.copy(r);let _=u*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),t.copy(n).addScaledVector(as,o);let g=h*m-u*f;if(g<=0&&f-h>=0&&u-m>=0)return Ju.subVectors(r,s),o=(f-h)/(f-h+(u-m)),t.copy(s).addScaledVector(Ju,o);let p=1/(g+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(rs,a).addScaledVector(as,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Ft=class{constructor(e=new N(1/0,1/0,1/0),t=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(vn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(vn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=vn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,vn):vn.fromBufferAttribute(r,a),vn.applyMatrix4(e.matrixWorld),this.expandByPoint(vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ea.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ea.copy(n.boundingBox)),ea.applyMatrix4(e.matrixWorld),this.union(ea)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,vn),vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Js),ta.subVectors(this.max,Js),os.subVectors(e.a,Js),cs.subVectors(e.b,Js),ls.subVectors(e.c,Js),hi.subVectors(cs,os),di.subVectors(ls,cs),Ii.subVectors(os,ls);let t=[0,-hi.z,hi.y,0,-di.z,di.y,0,-Ii.z,Ii.y,hi.z,0,-hi.x,di.z,0,-di.x,Ii.z,0,-Ii.x,-hi.y,hi.x,0,-di.y,di.x,0,-Ii.y,Ii.x,0];return!wc(t,os,cs,ls,ta)||(t=[1,0,0,0,1,0,0,0,1],!wc(t,os,cs,ls,ta))?!1:(na.crossVectors(hi,di),t=[na.x,na.y,na.z],wc(t,os,cs,ls,ta))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Xn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Xn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Xn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Xn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Xn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Xn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Xn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Xn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Xn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Xn=[new N,new N,new N,new N,new N,new N,new N,new N],vn=new N,ea=new Ft,os=new N,cs=new N,ls=new N,hi=new N,di=new N,Ii=new N,Js=new N,ta=new N,na=new N,Pi=new N;function wc(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Pi.fromArray(i,r);let o=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Zn=jf();function jf(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(n[c]=0,n[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,s[c]=24,s[c|256]=24):(n[c]=31744,n[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Qf(i){Math.abs(i)>65504&&Te("DataUtils.toHalfFloat(): Value out of range."),i=Be(i,-65504,65504),Zn.floatView[0]=i;let e=Zn.uint32View[0],t=e>>23&511;return Zn.baseTable[t]+((e&8388607)>>Zn.shiftTable[t])}function ep(i){let e=i>>10;return Zn.uint32View[0]=Zn.mantissaTable[Zn.offsetTable[e]+(i&1023)]+Zn.exponentTable[e],Zn.floatView[0]}var gi=class{static toHalfFloat(e){return Qf(e)}static fromHalfFloat(e){return ep(e)}},Et=new N,ia=new de,tp=0,_t=class extends Dn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:tp++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_l,this.updateRanges=[],this.gpuType=Ht,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ia.fromBufferAttribute(this,t),ia.applyMatrix3(e),this.setXY(t,ia.x,ia.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix3(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyMatrix4(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.applyNormalMatrix(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Et.fromBufferAttribute(this,t),Et.transformDirection(e),this.setXYZ(t,Et.x,Et.y,Et.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sn(t,this.array)),t}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sn(t,this.array)),t}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sn(t,this.array)),t}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var hr=class extends _t{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var dr=class extends _t{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends _t{constructor(e,t,n){super(new Float32Array(e),t,n)}},np=new Ft,$s=new N,Tc=new N,en=class{constructor(e=new N,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):np.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$s.subVectors(e,this.center);let t=$s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector($s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Tc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($s.copy(e.center).add(Tc)),this.expandByPoint($s.copy(e.center).sub(Tc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ip=0,dn=new De,Ac=new gt,us=new N,an=new Ft,js=new Ft,Nt=new N,st=class i extends Dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ip++}),this.uuid=wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(wf(e)?dr:hr)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return dn.makeRotationFromQuaternion(e),this.applyMatrix4(dn),this}rotateX(e){return dn.makeRotationX(e),this.applyMatrix4(dn),this}rotateY(e){return dn.makeRotationY(e),this.applyMatrix4(dn),this}rotateZ(e){return dn.makeRotationZ(e),this.applyMatrix4(dn),this}translate(e,t,n){return dn.makeTranslation(e,t,n),this.applyMatrix4(dn),this}scale(e,t,n){return dn.makeScale(e,t,n),this.applyMatrix4(dn),this}lookAt(e){return Ac.lookAt(e),Ac.updateMatrix(),this.applyMatrix4(Ac.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(us).negate(),this.translate(us.x,us.y,us.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Te("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ft);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];an.setFromBufferAttribute(r),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,an.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,an.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(an.min),this.boundingBox.expandByPoint(an.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Pe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new en);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Pe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){let n=this.boundingSphere.center;if(an.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];js.setFromBufferAttribute(o),this.morphTargetsRelative?(Nt.addVectors(an.min,js.min),an.expandByPoint(Nt),Nt.addVectors(an.max,js.max),an.expandByPoint(Nt)):(an.expandByPoint(js.min),an.expandByPoint(js.max))}an.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Nt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Nt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Nt.fromBufferAttribute(o,l),c&&(us.fromBufferAttribute(e,l),Nt.add(us)),s=Math.max(s,n.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Pe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Pe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new _t(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new N,c[x]=new N;let l=new N,h=new N,f=new N,d=new de,u=new de,m=new de,_=new N,g=new N;function p(x,S,C){l.fromBufferAttribute(n,x),h.fromBufferAttribute(n,S),f.fromBufferAttribute(n,C),d.fromBufferAttribute(r,x),u.fromBufferAttribute(r,S),m.fromBufferAttribute(r,C),h.sub(l),f.sub(l),u.sub(d),m.sub(d);let A=1/(u.x*m.y-m.x*u.y);isFinite(A)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(f,-u.y).multiplyScalar(A),g.copy(f).multiplyScalar(u.x).addScaledVector(h,-m.x).multiplyScalar(A),o[x].add(_),o[S].add(_),o[C].add(_),c[x].add(g),c[S].add(g),c[C].add(g))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let x=0,S=T.length;x<S;++x){let C=T[x],A=C.start,P=C.count;for(let L=A,z=A+P;L<z;L+=3)p(e.getX(L+0),e.getX(L+1),e.getX(L+2))}let R=new N,y=new N,M=new N,w=new N;function E(x){M.fromBufferAttribute(s,x),w.copy(M);let S=o[x];R.copy(S),R.sub(M.multiplyScalar(M.dot(S))).normalize(),y.crossVectors(w,S);let A=y.dot(c[x])<0?-1:1;a.setXYZW(x,R.x,R.y,R.z,A)}for(let x=0,S=T.length;x<S;++x){let C=T[x],A=C.start,P=C.count;for(let L=A,z=A+P;L<z;L+=3)E(e.getX(L+0)),E(e.getX(L+1)),E(e.getX(L+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new _t(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);let s=new N,r=new N,a=new N,o=new N,c=new N,l=new N,h=new N,f=new N;if(e)for(let d=0,u=e.count;d<u;d+=3){let m=e.getX(d+0),_=e.getX(d+1),g=e.getX(d+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,g),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),o.add(h),c.add(h),l.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(g,l.x,l.y,l.z)}else for(let d=0,u=t.count;d<u;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,f=o.normalized,d=new l.constructor(c.length*h),u=0,m=0;for(let _=0,g=c.length;_<g;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*h;for(let p=0;p<h;p++)d[m++]=l[u++]}return new _t(d,h,f)}if(this.index===null)return Te("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,n);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,f=l.length;h<f;h++){let d=l[h],u=e(d,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){let u=l[f];h.push(u.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let d=0,u=f.length;d<u;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let f=a[l];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ws=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_l,this.updateRanges=[],this.version=0,this.uuid=wn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=wn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},qt=new N,Ts=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=at(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=at(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=at(t,this.array),n=at(n,this.array),s=at(s,this.array),r=at(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){cr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new _t(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){cr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ec=new N,sp=new N,rp=new Ue,Mn=class{constructor(e=new N(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Ec.subVectors(n,t).cross(sp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Ec),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||rp.getNormalMatrix(e),s=this.coplanarPoint(Ec).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},ap=0,Yt=class extends Dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=wn(),this.name="",this.type="Material",this.blending=Ps,this.side=Dt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=nl,this.blendEquation=Xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Qh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ba,this.stencilZFail=ba,this.stencilZPass=ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Te(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Te(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Mn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new de().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new de().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var qn=new N,Rc=new N,sa=new N,ra=new N,xi=class{constructor(e=new N,t=new N(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=qn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qn.copy(this.origin).addScaledVector(this.direction,t),qn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Rc.copy(e).add(t).multiplyScalar(.5),sa.copy(t).sub(e).normalize(),ra.copy(this.origin).sub(Rc);let r=e.distanceTo(t)*.5,a=-this.direction.dot(sa),o=ra.dot(this.direction),c=-ra.dot(sa),l=ra.lengthSq(),h=Math.abs(1-a*a),f,d,u,m;if(h>0)if(f=a*c-o,d=a*o-c,m=r*h,f>=0)if(d>=-m)if(d<=m){let _=1/h;f*=_,d*=_,u=f*(f+a*d+2*o)+d*(a*f+d+2*c)+l}else d=r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;else d<=-m?(f=Math.max(0,-(-a*r+o)),d=f>0?-r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l):d<=m?(f=0,d=Math.min(Math.max(-r,-c),r),u=d*(d+2*c)+l):(f=Math.max(0,-(a*r+o)),d=f>0?r:Math.min(Math.max(-r,-c),r),u=-f*f+d*(d+2*c)+l);else d=a>0?-r:r,f=Math.max(0,-(a*d+o)),u=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Rc).addScaledVector(sa,d),u}intersectSphere(e,t){if(e.radius<0)return null;qn.subVectors(e.center,this.origin);let n=qn.dot(this.direction),s=qn.dot(qn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,qn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,f=e.x-a.x,d=e.y-a.y,u=e.z-a.z,m=t.x-a.x,_=t.y-a.y,g=t.z-a.z,p=n.x-a.x,T=n.y-a.y,R=n.z-a.z,y=Math.abs(c),M=Math.abs(l),w=Math.abs(h),E,x,S,C,A,P,L,z,D,k,V,$;if(y>=M&&y>=w?(S=c,P=f,D=m,$=p,c>=0?(E=l,x=h,C=d,A=u,L=_,z=g,k=T,V=R):(E=h,x=l,C=u,A=d,L=g,z=_,k=R,V=T)):M>=w?(S=l,P=d,D=_,$=T,l>=0?(E=h,x=c,C=u,A=f,L=g,z=m,k=R,V=p):(E=c,x=h,C=f,A=u,L=m,z=g,k=p,V=R)):(S=h,P=u,D=g,$=R,h>=0?(E=c,x=l,C=f,A=d,L=m,z=_,k=p,V=T):(E=l,x=c,C=d,A=f,L=_,z=m,k=T,V=p)),S===0)return null;let W=E/S,Y=x/S,Q=1/S,re=C-W*P,ge=A-Y*P,je=L-W*D,He=z-Y*D,Ke=k-W*$,Z=V-Y*$,te=Ke*He-Z*je,ye=re*Z-ge*Ke,Ne=je*ge-He*re;if(s){if(te<0||ye<0||Ne<0)return null}else if((te<0||ye<0||Ne<0)&&(te>0||ye>0||Ne>0))return null;let _e=te+ye+Ne;if(_e===0)return null;let se=Q*(te*P+ye*D+Ne*$);return(_e>0?se<0:se>0)?null:this.at(se/_e,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},cn=class extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.combine=il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},$u=new De,Li=new xi,aa=new en,ju=new N,oa=new N,ca=new N,la=new N,Cc=new N,ua=new N,Qu=new N,ha=new N,Fe=class extends gt{constructor(e=new st,t=new cn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ua.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],f=r[c];h!==0&&(Cc.fromBufferAttribute(f,e),a?ua.addScaledVector(Cc,h):ua.addScaledVector(Cc.sub(t),h))}t.add(ua)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),aa.copy(n.boundingSphere),aa.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(aa.containsPoint(Li.origin)===!1&&(Li.intersectSphere(aa,ju)===null||Li.origin.distanceToSquared(ju)>(e.far-e.near)**2))&&($u.copy(r).invert(),Li.copy(e.ray).applyMatrix4($u),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],T=Math.max(g.start,u.start),R=Math.min(o.count,Math.min(g.start+g.count,u.start+u.count));for(let y=T,M=R;y<M;y+=3){let w=o.getX(y),E=o.getX(y+1),x=o.getX(y+2);s=da(this,p,e,n,l,h,f,w,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let T=o.getX(g),R=o.getX(g+1),y=o.getX(g+2);s=da(this,a,e,n,l,h,f,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let g=d[m],p=a[g.materialIndex],T=Math.max(g.start,u.start),R=Math.min(c.count,Math.min(g.start+g.count,u.start+u.count));for(let y=T,M=R;y<M;y+=3){let w=y,E=y+1,x=y+2;s=da(this,p,e,n,l,h,f,w,E,x),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let m=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let g=m,p=_;g<p;g+=3){let T=g,R=g+1,y=g+2;s=da(this,a,e,n,l,h,f,T,R,y),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function op(i,e,t,n,s,r,a,o){let c;if(e.side===Zt?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===Dt,o),c===null)return null;ha.copy(o),ha.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ha);return l<t.near||l>t.far?null:{distance:l,point:ha.clone(),object:i}}function da(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,oa),i.getVertexPosition(c,ca),i.getVertexPosition(l,la);let h=op(i,e,t,n,oa,ca,la,Qu);if(h){let f=new N;mi.getBarycoord(Qu,oa,ca,la,f),s&&(h.uv=mi.getInterpolatedAttribute(s,o,c,l,f,new de)),r&&(h.uv1=mi.getInterpolatedAttribute(r,o,c,l,f,new de)),a&&(h.normal=mi.getInterpolatedAttribute(a,o,c,l,f,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new N,materialIndex:0};mi.getNormal(oa,ca,la,d.normal),h.face=d,h.barycoord=f}return h}var Qs=new $e,eh=new $e,th=new $e,cp=new $e,nh=new De,fa=new N,zc=new en,ih=new De,Ic=new xi,fr=class extends Fe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Oc,this.bindMatrix=new De,this.bindMatrixInverse=new De,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ft),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingBox.expandByPoint(fa)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new en),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,fa),this.boundingSphere.expandByPoint(fa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),zc.copy(this.boundingSphere),zc.applyMatrix4(s),e.ray.intersectsSphere(zc)!==!1&&(ih.copy(s).invert(),Ic.copy(e.ray).applyMatrix4(ih),!(this.boundingBox!==null&&Ic.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ic)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Oc?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Kh?this.bindMatrixInverse.copy(this.bindMatrix).invert():Te("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let n=this.skeleton,s=this.geometry;eh.fromBufferAttribute(s.attributes.skinIndex,e),th.fromBufferAttribute(s.attributes.skinWeight,e),t.isVector4?(Qs.copy(t),t.set(0,0,0,0)):(Qs.set(...t,1),t.set(0,0,0)),Qs.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=th.getComponent(r);if(a!==0){let o=eh.getComponent(r);nh.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(cp.copy(Qs).applyMatrix4(nh),a)}}return t.isVector4&&(t.w=Qs.w),t.applyMatrix4(this.bindMatrixInverse)}},As=class extends gt{constructor(){super(),this.isBone=!0,this.type="Bone"}},pn=class extends bt{constructor(e=null,t=1,n=1,s,r,a,o,c,l=St,h=St,f,d){super(null,a,o,c,l,h,s,r,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},sh=new De,lp=new De,pr=class i{constructor(e=[],t=[]){this.uuid=wn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Te("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new De)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let n=new De;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:lp;sh.multiplyMatrices(o,t[r]),sh.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let n=new pn(t,e,e,Jt,Ht);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){let s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){let r=e.bones[n],a=t[r];a===void 0&&(Te("Skeleton: No bone found with UUID:",r),a=new As),this.bones.push(a),this.boneInverses.push(new De().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){let a=t[s];e.bones.push(a.uuid);let o=n[s];e.boneInverses.push(o.toArray())}return e}},$n=class extends _t{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hs=new De,rh=new De,pa=[],ah=new Ft,up=new De,er=new Fe,tr=new en,mr=class extends Fe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new $n(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,up)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ft),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),ah.copy(e.boundingBox).applyMatrix4(hs),this.boundingBox.union(ah)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new en),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,hs),tr.copy(e.boundingSphere).applyMatrix4(hs),this.boundingSphere.union(tr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(er.geometry=this.geometry,er.material=this.material,er.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),tr.copy(this.boundingSphere),tr.applyMatrix4(n),e.ray.intersectsSphere(tr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,hs),rh.multiplyMatrices(n,hs),er.matrixWorld=rh,er.raycast(e,pa);for(let a=0,o=pa.length;a<o;a++){let c=pa[a];c.instanceId=r,c.object=this,t.push(c)}pa.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new $n(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new pn(new Float32Array(s*this.count),s,this.count,lo,Ht));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ni=new en,hp=new de(.5,.5),ma=new N,Es=class{constructor(e=new Mn,t=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=bn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],f=r[5],d=r[6],u=r[7],m=r[8],_=r[9],g=r[10],p=r[11],T=r[12],R=r[13],y=r[14],M=r[15];if(s[0].setComponents(l-a,u-h,p-m,M-T).normalize(),s[1].setComponents(l+a,u+h,p+m,M+T).normalize(),s[2].setComponents(l+o,u+f,p+_,M+R).normalize(),s[3].setComponents(l-o,u-f,p-_,M-R).normalize(),n)s[4].setComponents(c,d,g,y).normalize(),s[5].setComponents(l-c,u-d,p-g,M-y).normalize();else if(s[4].setComponents(l-c,u-d,p-g,M-y).normalize(),t===bn)s[5].setComponents(l+c,u+d,p+g,M+y).normalize();else if(t===_s)s[5].setComponents(c,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ni.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){Ni.center.set(0,0,0);let t=hp.distanceTo(e.center);return Ni.radius=.7071067811865476+t,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ma.x=s.normal.x>0?e.max.x:e.min.x,ma.y=s.normal.y>0?e.max.y:e.min.y,ma.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ma)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Rs=class extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Da=new N,Ua=new N,oh=new De,nr=new xi,ga=new en,Pc=new N,ch=new N,Bi=class extends gt{constructor(e=new st,t=new Rs){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Da.fromBufferAttribute(t,s-1),Ua.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Da.distanceTo(Ua);e.setAttribute("lineDistance",new ke(n,1))}else Te("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;oh.copy(s).invert(),nr.copy(e.ray).applyMatrix4(oh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){let u=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=u,g=m-1;_<g;_+=l){let p=h.getX(_),T=h.getX(_+1),R=xa(this,e,nr,c,p,T,_);R&&t.push(R)}if(this.isLineLoop){let _=h.getX(m-1),g=h.getX(u),p=xa(this,e,nr,c,_,g,m-1);p&&t.push(p)}}else{let u=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=u,g=m-1;_<g;_+=l){let p=xa(this,e,nr,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){let _=xa(this,e,nr,c,m-1,u,m-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function xa(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(Da.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,r),t.distanceSqToSegment(Da,Ua,Pc,ch)>n)return;Pc.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Pc);if(!(l<e.near||l>e.far))return{distance:l,point:ch.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var lh=new N,uh=new N,gr=class extends Bi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)lh.fromBufferAttribute(t,s),uh.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+lh.distanceTo(uh);e.setAttribute("lineDistance",new ke(n,1))}else Te("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},xr=class extends Bi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},Cs=class extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},hh=new De,Hc=new xi,_a=new en,ya=new N,_r=class extends gt{constructor(e=new st,t=new Cs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),_a.copy(n.boundingSphere),_a.applyMatrix4(s),_a.radius+=r,e.ray.intersectsSphere(_a)===!1)return;hh.copy(s).invert(),Hc.copy(e.ray).applyMatrix4(hh);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,f=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let m=d,_=u;m<_;m++){let g=l.getX(m);ya.fromBufferAttribute(f,g),dh(ya,g,c,s,e,t,this)}}else{let d=Math.max(0,a.start),u=Math.min(f.count,a.start+a.count);for(let m=d,_=u;m<_;m++)ya.fromBufferAttribute(f,m),dh(ya,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function dh(i,e,t,n,s,r,a){let o=Hc.distanceSqToPoint(i);if(o<t){let c=new N;Hc.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var yr=class extends bt{constructor(e=[],t=wi,n,s,r,a,o,c,l,h){super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends bt{constructor(e,t,n,s,r,a,o,c,l){super(e,t,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var _i=class extends bt{constructor(e,t,n=Rn,s,r,a,o=St,c=St,l,h=Nn,f=1){if(h!==Nn&&h!==Ti)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:f};super(d,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ms(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Fa=class extends _i{constructor(e,t=Rn,n=wi,s,r,a=St,o=St,c,l=Nn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Mr=class extends bt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yi=class i extends st{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],f=[],d=0,u=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2));function m(_,g,p,T,R,y,M,w,E,x,S){let C=y/E,A=M/x,P=y/2,L=M/2,z=w/2,D=E+1,k=x+1,V=0,$=0,W=new N;for(let Y=0;Y<k;Y++){let Q=Y*A-L;for(let re=0;re<D;re++){let ge=re*C-P;W[_]=ge*T,W[g]=Q*R,W[p]=z,l.push(W.x,W.y,W.z),W[_]=0,W[g]=0,W[p]=w>0?1:-1,h.push(W.x,W.y,W.z),f.push(re/E),f.push(1-Y/x),V+=1}}for(let Y=0;Y<x;Y++)for(let Q=0;Q<E;Q++){let re=d+Q+D*Y,ge=d+Q+D*(Y+1),je=d+(Q+1)+D*(Y+1),He=d+(Q+1)+D*Y;c.push(re,ge,He),c.push(ge,je,He),$+=6}o.addGroup(u,$,S),u+=$,d+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var mn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Te("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,c=r-1,l;for(;o<=c;)if(s=Math.floor(o+(c-o)/2),l=n[s]-a,l<0)o=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===a)return s/(r-1);let h=n[s],d=n[s+1]-h,u=(a-h)/d;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),c=t||(a.isVector2?new de:new N);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new N,s=[],r=[],a=[],o=new N,c=new De;for(let u=0;u<=e;u++){let m=u/e;s[u]=this.getTangentAt(m,new N)}r[0]=new N,a[0]=new N;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),d=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),d<=l&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let m=Math.acos(Be(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(c.makeRotationAxis(o,m))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Be(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],u*m)),a[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Sr=class extends mn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new de){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),d=c-this.aX,u=l-this.aY;c=d*h-u*f+this.aX,l=d*f+u*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Oa=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Ml(){let i=0,e=0,t=0,n=0;function s(r,a,o,c){i=r,e=o,t=-3*r+3*a-2*o-c,n=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){s(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,f){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,u=(o-a)/h-(c-a)/(h+f)+(c-o)/f;d*=h,u*=h,s(a,o,d,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var fh=new N,ph=new N,Lc=new Ml,Nc=new Ml,Dc=new Ml,jn=class extends mn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new N){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=s[(o-1)%r]:(ph.subVectors(s[0],s[1]).add(s[0]),l=ph);let f=s[o%r],d=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fh),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),u),_=Math.pow(f.distanceToSquared(d),u),g=Math.pow(d.distanceToSquared(h),u);_<1e-4&&(_=1),m<1e-4&&(m=_),g<1e-4&&(g=_),Lc.initNonuniformCatmullRom(l.x,f.x,d.x,h.x,m,_,g),Nc.initNonuniformCatmullRom(l.y,f.y,d.y,h.y,m,_,g),Dc.initNonuniformCatmullRom(l.z,f.z,d.z,h.z,m,_,g)}else this.curveType==="catmullrom"&&(Lc.initCatmullRom(l.x,f.x,d.x,h.x,this.tension),Nc.initCatmullRom(l.y,f.y,d.y,h.y,this.tension),Dc.initCatmullRom(l.z,f.z,d.z,h.z,this.tension));return n.set(Lc.calc(c),Nc.calc(c),Dc.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new N().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function mh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,c=i*o;return(2*t-2*n+r+a)*c+(-3*t+3*n-2*r-a)*o+r*i+t}function dp(i,e){let t=1-i;return t*t*e}function fp(i,e){return 2*(1-i)*i*e}function pp(i,e){return i*i*e}function rr(i,e,t,n){return dp(i,e)+fp(i,t)+pp(i,n)}function mp(i,e){let t=1-i;return t*t*t*e}function gp(i,e){let t=1-i;return 3*t*t*i*e}function xp(i,e){return 3*(1-i)*i*i*e}function _p(i,e){return i*i*i*e}function ar(i,e,t,n,s){return mp(i,e)+gp(i,t)+xp(i,n)+_p(i,s)}var Ba=class extends mn{constructor(e=new de,t=new de,n=new de,s=new de){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(e,s.x,r.x,a.x,o.x),ar(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ka=class extends mn{constructor(e=new N,t=new N,n=new N,s=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(ar(e,s.x,r.x,a.x,o.x),ar(e,s.y,r.y,a.y,o.y),ar(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Va=class extends mn{constructor(e=new de,t=new de){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new de){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new de){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ga=class extends mn{constructor(e=new N,t=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new N){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new N){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ha=class extends mn{constructor(e=new de,t=new de,n=new de){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new de){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(e,s.x,r.x,a.x),rr(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},br=class extends mn{constructor(e=new N,t=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new N){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(rr(e,s.x,r.x,a.x),rr(e,s.y,r.y,a.y),rr(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wa=class extends mn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new de){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,c=s[a===0?a:a-1],l=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(mh(o,c.x,l.x,h.x,f.x),mh(o,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new de().fromArray(s))}return this}},yp=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:jn,CubicBezierCurve:Ba,CubicBezierCurve3:ka,EllipseCurve:Sr,LineCurve:Va,LineCurve3:Ga,QuadraticBezierCurve:Ha,QuadraticBezierCurve3:br,SplineCurve:Wa});var ki=class i extends st{constructor(e=[new de(0,-.5),new de(.5,0),new de(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Be(s,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,f=new N,d=new de,u=new N,m=new N,_=new N,g=0,p=0;for(let T=0;T<=e.length-1;T++)switch(T){case 0:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,u.x=p*1,u.y=-g,u.z=p*0,_.copy(u),u.normalize(),c.push(u.x,u.y,u.z);break;case e.length-1:c.push(_.x,_.y,_.z);break;default:g=e[T+1].x-e[T].x,p=e[T+1].y-e[T].y,u.x=p*1,u.y=-g,u.z=p*0,m.copy(u),u.x+=_.x,u.y+=_.y,u.z+=_.z,u.normalize(),c.push(u.x,u.y,u.z),_.copy(m)}for(let T=0;T<=t;T++){let R=n+T*h*s,y=Math.sin(R),M=Math.cos(R);for(let w=0;w<=e.length-1;w++){f.x=e[w].x*y,f.y=e[w].y,f.z=e[w].x*M,a.push(f.x,f.y,f.z),d.x=T/t,d.y=w/(e.length-1),o.push(d.x,d.y);let E=c[3*w+0]*y,x=c[3*w+1],S=c[3*w+0]*M;l.push(E,x,S)}}for(let T=0;T<t;T++)for(let R=0;R<e.length-1;R++){let y=R+T*e.length,M=y,w=y+e.length,E=y+e.length+1,x=y+1;r.push(M,w,x),r.push(E,x,w)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var vi=class i extends st{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,f=e/o,d=t/c,u=[],m=[],_=[],g=[];for(let p=0;p<h;p++){let T=p*d-a;for(let R=0;R<l;R++){let y=R*f-r;m.push(y,-T,0),_.push(0,0,1),g.push(R/o),g.push(1-p/c)}}for(let p=0;p<c;p++)for(let T=0;T<o;T++){let R=T+l*p,y=T+l*(p+1),M=T+1+l*(p+1),w=T+1+l*p;u.push(R,y,w),u.push(y,M,w)}this.setIndex(u),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var wr=class i extends st{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,h=[],f=new N,d=new N,u=[],m=[],_=[],g=[];for(let p=0;p<=n;p++){let T=[],R=p/n,y=a+R*o,M=e*Math.cos(y),w=Math.sqrt(e*e-M*M),E=0;p===0&&a===0?E=.5/t:p===n&&c===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let S=x/t,C=s+S*r;f.x=-w*Math.cos(C),f.y=M,f.z=w*Math.sin(C),m.push(f.x,f.y,f.z),d.copy(f).normalize(),_.push(d.x,d.y,d.z),g.push(S+E,1-R),T.push(l++)}h.push(T)}for(let p=0;p<n;p++)for(let T=0;T<t;T++){let R=h[p][T+1],y=h[p][T],M=h[p+1][T],w=h[p+1][T+1];(p!==0||a>0)&&u.push(R,y,w),(p!==n-1||c<Math.PI)&&u.push(y,M,w)}this.setIndex(u),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class i extends st{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],d=new N,u=new N,m=new N;for(let _=0;_<=n;_++){let g=a+_/n*o;for(let p=0;p<=s;p++){let T=p/s*r;u.x=(e+t*Math.cos(g))*Math.cos(T),u.y=(e+t*Math.cos(g))*Math.sin(T),u.z=t*Math.sin(g),l.push(u.x,u.y,u.z),d.x=e*Math.cos(T),d.y=e*Math.sin(T),m.subVectors(u,d).normalize(),h.push(m.x,m.y,m.z),f.push(p/s),f.push(_/n)}}for(let _=1;_<=n;_++)for(let g=1;g<=s;g++){let p=(s+1)*_+g-1,T=(s+1)*(_-1)+g-1,R=(s+1)*(_-1)+g,y=(s+1)*_+g;c.push(p,T,y),c.push(T,R,y)}this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(h,3)),this.setAttribute("uv",new ke(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Vi=class i extends st{constructor(e=new br(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new N,c=new N,l=new de,h=new N,f=[],d=[],u=[],m=[];_(),this.setIndex(m),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(u,2));function _(){for(let R=0;R<t;R++)g(R);g(r===!1?t:0),T(),p()}function g(R){h=e.getPointAt(R/t,h);let y=a.normals[R],M=a.binormals[R];for(let w=0;w<=s;w++){let E=w/s*Math.PI*2,x=Math.sin(E),S=-Math.cos(E);c.x=S*y.x+x*M.x,c.y=S*y.y+x*M.y,c.z=S*y.z+x*M.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+n*c.x,o.y=h.y+n*c.y,o.z=h.z+n*c.z,f.push(o.x,o.y,o.z)}}function p(){for(let R=1;R<=t;R++)for(let y=1;y<=s;y++){let M=(s+1)*(R-1)+(y-1),w=(s+1)*R+(y-1),E=(s+1)*R+y,x=(s+1)*(R-1)+y;m.push(M,w,x),m.push(w,E,x)}}function T(){for(let R=0;R<=t;R++)for(let y=0;y<=s;y++)l.x=R/t,l.y=y/s,u.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new yp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var Tr=class extends Yt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Zi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(gh(s))s.isRenderTargetTexture?(Te("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(gh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Wt(i){let e={};for(let t=0;t<i.length;t++){let n=Zi(i[t]);for(let s in n)e[s]=n[s]}return e}function gh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vp(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Sl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}var hd={clone:Zi,merge:Wt},Mp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ln=class extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zi(e.uniforms),this.uniformsGroups=vp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new de().fromArray(s.value);break;case"v3":this.uniforms[n].value=new N().fromArray(s.value);break;case"v4":this.uniforms[n].value=new $e().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Ue().fromArray(s.value);break;case"m4":this.uniforms[n].value=new De().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Xa=class extends ln{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Qn=class extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wo,this.normalScale=new de(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ft=class extends Qn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new de(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Be(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var qa=class extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ya=class extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function pi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function wa(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function bp(i){function e(s,r){return i[s]-i[r]}let t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function xh(i,e,t){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=t[r]*e;for(let c=0;c!==e;++c)s[a++]=i[o+c]}return s}function wp(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(e.push(r.time),t.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(e.push(r.time),t.push(a)),r=i[s++];while(r!==void 0)}var Un=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Za=class extends Un{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:kc,endingEnd:kc}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Vc:r=e,o=2*t-n;break;case Gc:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Vc:a=e,c=2*n-t;break;case Gc:a=1,c=n+s[1]-s[0];break;default:a=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,f=this._offsetNext,d=this._weightPrev,u=this._weightNext,m=(n-t)/(s-t),_=m*m,g=_*m,p=-d*g+2*d*_-d*m,T=(1+d)*g+(-1.5-2*d)*_+(-.5+d)*m+1,R=(-1-u)*g+(1.5+u)*_+.5*m,y=u*g-u*_;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+T*a[l+M]+R*a[c+M]+y*a[f+M];return r}},Ka=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(n-t)/(s-t),f=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*f+a[c+d]*h;return r}},Ja=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},$a=class extends Un{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),_=1-m;for(let g=0;g!==o;++g)r[g]=a[l+g]*_+a[c+g]*m;return r}let d=o*2,u=e-1;for(let m=0;m!==o;++m){let _=a[l+m],g=a[c+m],p=u*d+m*2,T=f[p],R=f[p+1],y=e*d+m*2,M=h[y],w=h[y+1],E=Ap(n,t,T,M,s);r[m]=dd(E,_,R,w,g)}return r}};function dd(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Tp(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Ap(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=dd(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Tp(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var tn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pi(t,this.TimeBufferType),this.values=pi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pi(e.times,Array),values:pi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),wa(e.settings)&&(n.settings={inTangents:pi(e.settings.inTangents,Array),outTangents:pi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ja(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ka(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new $a(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ui:t=this.InterpolantFactoryMethodDiscrete;break;case Fi:t=this.InterpolantFactoryMethodLinear;break;case Sa:t=this.InterpolantFactoryMethodSmooth;break;case Bc:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Te("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ui;case this.InterpolantFactoryMethodLinear:return Fi;case this.InterpolantFactoryMethodSmooth:return Sa;case this.InterpolantFactoryMethodBezier:return Bc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;wa(this.settings)&&(_h(this.settings.inTangents,e),_h(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Pe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Pe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Pe("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Pe("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&Tf(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Pe("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Sa,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let f=o*n,d=f-n,u=f+n;for(let m=0;m!==n;++m){let _=t[f+m];if(_!==t[d+m]||_!==t[u+m]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let f=o*n,d=a*n;for(let u=0;u!==n;++u)t[d+u]=t[f+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,wa(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function _h(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}tn.prototype.ValueTypeName="";tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=Fi;var ei=class extends tn{constructor(e,t,n){super(e,t,n)}};ei.prototype.ValueTypeName="bool";ei.prototype.ValueBufferType=Array;ei.prototype.DefaultInterpolation=Ui;ei.prototype.InterpolantFactoryMethodLinear=void 0;ei.prototype.InterpolantFactoryMethodSmooth=void 0;var Ar=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Ar.prototype.ValueTypeName="color";var ti=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};ti.prototype.ValueTypeName="number";var ja=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-t)/(s-t),l=e*o;for(let h=l+o;l!==h;l+=4)on.slerpFlat(r,0,a,l-o,a,l,c);return r}},ni=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new ja(this.times,this.values,this.getValueSize(),e)}};ni.prototype.ValueTypeName="quaternion";ni.prototype.InterpolantFactoryMethodSmooth=void 0;var ii=class extends tn{constructor(e,t,n){super(e,t,n)}};ii.prototype.ValueTypeName="string";ii.prototype.ValueBufferType=Array;ii.prototype.DefaultInterpolation=Ui;ii.prototype.InterpolantFactoryMethodLinear=void 0;ii.prototype.InterpolantFactoryMethodSmooth=void 0;var Mi=class extends tn{constructor(e,t,n,s){super(e,t,n,s)}};Mi.prototype.ValueTypeName="vector";var Er=class{constructor(e="",t=-1,n=[],s=Jh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=wn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],n=e.tracks,s=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(Rp(n[a]).scale(s));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=n.length;r!==a;++r)t.push(tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=bp(c);c=xh(c,1,h),l=xh(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new ti(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){let s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let f=h[1],d=s[f];d||(s[f]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],t,n));return a}resetDuration(){let e=this.tracks,t=0;for(let n=0,s=e.length;n!==s;++n){let r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let n=0;n<this.tracks.length;n++)e.push(this.tracks[n].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function Ep(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return ti;case"vector":case"vector2":case"vector3":case"vector4":return Mi;case"color":return Ar;case"quaternion":return ni;case"bool":case"boolean":return ei;case"string":return ii}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Rp(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=Ep(i.type);if(i.times===void 0){let n=[],s=[];wp(i.keys,n,s,"value"),i.times=n,i.values=s}let t;return e.parse!==void 0?t=e.parse(i):t=new e(i.name,i.times,i.values,i.interpolation),wa(i.settings)&&(t.settings={inTangents:pi(i.settings.inTangents,Float32Array),outTangents:pi(i.settings.outTangents,Float32Array)}),t}var Ln={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(yh(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!yh(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function yh(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var Qa=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,d=l.length;f<d;f+=2){let u=l[f],m=l[f+1];if(u.global&&(u.lastIndex=0),u.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},fd=new Qa,An=class{constructor(e){this.manager=e!==void 0?e:fd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};An.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yn={},Wc=class extends Error{constructor(e,t){super(e),this.response=t}},Gi=class extends An{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ln.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Yn[e]!==void 0){Yn[e].push({onLoad:t,onProgress:n,onError:s});return}Yn[e]=[],Yn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Te("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Yn[e],f=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),u=d?parseInt(d):0,m=u!==0,_=0,g=new ReadableStream({start(p){T();function T(){f.read().then(({done:R,value:y})=>{if(R)p.close();else{_+=y.byteLength;let M=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:u});for(let w=0,E=h.length;w<E;w++){let x=h[w];x.onProgress&&x.onProgress(M)}p.enqueue(y),T()}},R=>{p.error(R)})}}});return new Response(g)}else throw new Wc(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let f=/charset="?([^;"\s]*)"?/i.exec(o),d=f&&f[1]?f[1].toLowerCase():void 0,u=new TextDecoder(d);return l.arrayBuffer().then(m=>u.decode(m))}}}).then(l=>{Ln.add(`file:${e}`,l);let h=Yn[e];delete Yn[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onLoad&&u.onLoad(l)}}).catch(l=>{let h=Yn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Yn[e];for(let f=0,d=h.length;f<d;f++){let u=h[f];u.onError&&u.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ds=new WeakMap,eo=class extends An{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ln.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let f=ds.get(a);f===void 0&&(f=[],ds.set(a,f)),f.push({onLoad:t,onError:s})}return a}let o=ys("img");function c(){h(),t&&t(this);let f=ds.get(this)||[];for(let d=0;d<f.length;d++){let u=f[d];u.onLoad&&u.onLoad(this)}ds.delete(this),r.manager.itemEnd(e)}function l(f){h(),s&&s(f),Ln.remove(`image:${e}`);let d=ds.get(this)||[];for(let u=0;u<d.length;u++){let m=d[u];m.onError&&m.onError(f)}ds.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ln.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var Rr=class extends An{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new pn,o=new Gi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Pe(h);return}r._applyTexData(a,l),t&&t(a,l)},n,s),a}createDataTexture(e){let t=new pn;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:jt,e.wrapT=t.wrapT!==void 0?t.wrapT:jt,e.magFilter=t.magFilter!==void 0?t.magFilter:et,e.minFilter=t.minFilter!==void 0?t.minFilter:et,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=nn),t.mipmapCount===1&&(e.minFilter=et),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}},Cr=class extends An{constructor(e){super(e)}load(e,t,n,s){let r=new bt,a=new eo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}},Hi=class extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},zr=class extends Hi{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Uc=new De,vh=new N,Mh=new N,zs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new de(512,512),this.mapType=sn,this.map=null,this.mapPass=null,this.matrix=new De,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Es,this._frameExtents=new de(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;vh.setFromMatrixPosition(e.matrixWorld),t.position.copy(vh),Mh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Mh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Uc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Uc,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===_s||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Uc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},va=new N,Ma=new on,Pn=new N,Ir=class extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new De,this.projectionMatrix=new De,this.projectionMatrixInverse=new De,this.coordinateSystem=bn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(va,Ma,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,Pn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(va,Ma,Pn),Pn.x===1&&Pn.y===1&&Pn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(va,Ma,Pn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},fi=new N,Sh=new de,bh=new de,Rt=class extends Ir{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Oi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ir*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Oi*2*Math.atan(Math.tan(ir*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fi.x,fi.y).multiplyScalar(-e/fi.z),fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fi.x,fi.y).multiplyScalar(-e/fi.z)}getViewSize(e,t){return this.getViewBounds(e,Sh,bh),t.subVectors(bh,Sh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(ir*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Xc=class extends zs{constructor(){super(new Rt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=Oi*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Pr=class extends Hi{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Xc}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},qc=class extends zs{constructor(){super(new Rt(90,1,.5,500)),this.isPointLightShadow=!0}},Lr=class extends Hi{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new qc}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Si=class extends Ir{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yc=class extends zs{constructor(){super(new Si(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},bi=class extends Hi{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Yc}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var si=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Fc=new WeakMap,Nr=class extends An{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Te("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Te("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ln.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Fc.has(a)===!0?(s&&s(Fc.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ln.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Fc.set(c,l),Ln.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ln.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var fs=-90,ps=1,to=class extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(fs,ps,e,t);s.layers=this.layers,this.add(s);let r=new Rt(fs,ps,e,t);r.layers=this.layers,this.add(r);let a=new Rt(fs,ps,e,t);a.layers=this.layers,this.add(a);let o=new Rt(fs,ps,e,t);o.layers=this.layers,this.add(o);let c=new Rt(fs,ps,e,t);c.layers=this.layers,this.add(c);let l=new Rt(fs,ps,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===bn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===_s)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,d,u),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},no=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var bl="\\[\\]\\.:\\/",Cp=new RegExp("["+bl+"]","g"),wl="[^"+bl+"]",zp="[^"+bl.replace("\\.","")+"]",Ip=/((?:WC+[\/:])*)/.source.replace("WC",wl),Pp=/(WCOD+)?/.source.replace("WCOD",zp),Lp=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",wl),Np=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",wl),Dp=new RegExp("^"+Ip+Pp+Lp+Np+"$"),Up=["material","materials","bones","map"],Zc=class{constructor(e,t,n){let s=n||lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Cp,"")}static parseTrackName(e){let t=Dp.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Up.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=n(o.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Te("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Pe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Pe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Pe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Pe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Pe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){Pe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=t.nodeName;Pe("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Pe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};lt.Composite=Zc;lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};lt.prototype.GetterByBindingType=[lt.prototype._getValue_direct,lt.prototype._getValue_array,lt.prototype._getValue_arrayElement,lt.prototype._getValue_toArray];lt.prototype.SetterByBindingTypeAndVersioning=[[lt.prototype._setValue_direct,lt.prototype._setValue_direct_setNeedsUpdate,lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_array,lt.prototype._setValue_array_setNeedsUpdate,lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_arrayElement,lt.prototype._setValue_arrayElement_setNeedsUpdate,lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[lt.prototype._setValue_fromArray,lt.prototype._setValue_fromArray_setNeedsUpdate,lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var X_=new Float32Array(1);var wh=new De,Dr=class{constructor(e,t,n=0,s=1/0){this.ray=new xi(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new Ss,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Pe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return wh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(wh),this}intersectObject(e,t=!0,n=[]){return Kc(e,this,n,t),n.sort(Th),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Kc(e[s],this,n,t);return n.sort(Th),n}};function Th(i,e){return i.distance-e.distance}function Kc(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Kc(r[a],e,t,!0)}}var zl=class zl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};zl.prototype.isMatrix2=!0;var Jc=zl;function Tl(i,e,t,n){let s=Fp(n);switch(t){case ml:return i*e;case lo:return i*e/s.components*s.byteLength;case uo:return i*e/s.components*s.byteLength;case Ai:return i*e*2/s.components*s.byteLength;case ho:return i*e*2/s.components*s.byteLength;case gl:return i*e*3/s.components*s.byteLength;case Jt:return i*e*4/s.components*s.byteLength;case fo:return i*e*4/s.components*s.byteLength;case Or:case Br:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case mo:case xo:return Math.max(i,16)*Math.max(e,8)/4;case po:case go:return Math.max(i,8)*Math.max(e,8)/2;case _o:case yo:case Mo:case So:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case vo:case Gr:case bo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case To:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Eo:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zo:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Po:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case No:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Do:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Uo:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Fo:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Oo:case Bo:case ko:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Vo:case Go:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Hr:case Ho:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fp(i){switch(i){case sn:case hl:return{byteLength:1,components:1};case Ds:case dl:case Kt:return{byteLength:2,components:1};case oo:case co:return{byteLength:2,components:4};case Rn:case ao:case Ht:return{byteLength:4,components:1};case fl:case pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Te("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Dd(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Bp(i){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,f=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,h),o.onUploadCallback();let u;if(l instanceof Float32Array)u=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=i.SHORT;else if(l instanceof Uint32Array)u=i.UNSIGNED_INT;else if(l instanceof Int32Array)u=i.INT;else if(l instanceof Int8Array)u=i.BYTE;else if(l instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,o),f.length===0)i.bufferSubData(l,0,h);else{f.sort((u,m)=>u.start-m.start);let d=0;for(let u=1;u<f.length;u++){let m=f[d],_=f[u];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,f[d]=_)}f.length=d+1;for(let u=0,m=f.length;u<m;u++){let _=f[u];i.bufferSubData(l,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var kp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vp=`#ifdef USE_ALPHAHASH
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
#endif`,Gp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Wp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Xp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qp=`#ifdef USE_AOMAP
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
#endif`,Yp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Zp=`#ifdef USE_BATCHING
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
#endif`,Kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$p=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Qp=`#ifdef USE_IRIDESCENCE
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
#endif`,em=`#ifdef USE_BUMPMAP
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
#endif`,tm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,im=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,sm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,am=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,om=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,lm=`#define PI 3.141592653589793
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
} // validated`,um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hm=`vec3 transformedNormal = objectNormal;
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
#endif`,dm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gm="gl_FragColor = linearToOutputTexel( gl_FragColor );",xm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_m=`#ifdef USE_ENVMAP
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
#endif`,ym=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,vm=`#ifdef USE_ENVMAP
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
#endif`,Mm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Sm=`#ifdef USE_ENVMAP
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
#endif`,bm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,wm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Tm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Am=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Em=`#ifdef USE_GRADIENTMAP
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
}`,Rm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Im=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Pm=`#ifdef USE_ENVMAP
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
#endif`,Lm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Dm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Um=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Fm=`PhysicalMaterial material;
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
#endif`,Om=`uniform sampler2D dfgLUT;
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
}`,Bm=`
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
#endif`,km=`#if defined( RE_IndirectDiffuse )
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
#endif`,Vm=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Gm=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Hm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Wm=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ym=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Zm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Km=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Jm=`#if defined( USE_POINTS_UV )
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
#endif`,$m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,jm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Qm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,tg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ng=`#ifdef USE_MORPHTARGETS
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
#endif`,ig=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,og=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,pg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,mg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,gg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_g=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,vg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Mg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Sg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Eg=`#ifdef USE_SKINNING
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
#endif`,Rg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Cg=`#ifdef USE_SKINNING
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
#endif`,zg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Pg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Lg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ng=`#ifdef USE_TRANSMISSION
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
#endif`,Dg=`#ifdef USE_TRANSMISSION
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
#endif`,Ug=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Fg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,kg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Wg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Xg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qg=`#include <common>
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
}`,Yg=`#if DEPTH_PACKING == 3200
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
}`,Zg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Jg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`uniform float scale;
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
}`,Qg=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#define LAMBERT
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
}`,i0=`#define LAMBERT
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
}`,s0=`#define MATCAP
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
}`,r0=`#define MATCAP
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
}`,a0=`#define NORMAL
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
}`,o0=`#define NORMAL
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
}`,c0=`#define PHONG
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
}`,l0=`#define PHONG
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
}`,u0=`#define STANDARD
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
}`,h0=`#define STANDARD
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
}`,d0=`#define TOON
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
}`,f0=`#define TOON
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
}`,p0=`uniform float size;
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
}`,m0=`uniform vec3 diffuse;
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
}`,g0=`#include <common>
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
}`,x0=`uniform vec3 color;
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
}`,_0=`uniform float rotation;
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
}`,y0=`uniform vec3 diffuse;
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
}`,Ge={alphahash_fragment:kp,alphahash_pars_fragment:Vp,alphamap_fragment:Gp,alphamap_pars_fragment:Hp,alphatest_fragment:Wp,alphatest_pars_fragment:Xp,aomap_fragment:qp,aomap_pars_fragment:Yp,batching_pars_vertex:Zp,batching_vertex:Kp,begin_vertex:Jp,beginnormal_vertex:$p,bsdfs:jp,iridescence_fragment:Qp,bumpmap_pars_fragment:em,clipping_planes_fragment:tm,clipping_planes_pars_fragment:nm,clipping_planes_pars_vertex:im,clipping_planes_vertex:sm,color_fragment:rm,color_pars_fragment:am,color_pars_vertex:om,color_vertex:cm,common:lm,cube_uv_reflection_fragment:um,defaultnormal_vertex:hm,displacementmap_pars_vertex:dm,displacementmap_vertex:fm,emissivemap_fragment:pm,emissivemap_pars_fragment:mm,colorspace_fragment:gm,colorspace_pars_fragment:xm,envmap_fragment:_m,envmap_common_pars_fragment:ym,envmap_pars_fragment:vm,envmap_pars_vertex:Mm,envmap_physical_pars_fragment:Pm,envmap_vertex:Sm,fog_vertex:bm,fog_pars_vertex:wm,fog_fragment:Tm,fog_pars_fragment:Am,gradientmap_pars_fragment:Em,lightmap_pars_fragment:Rm,lights_lambert_fragment:Cm,lights_lambert_pars_fragment:zm,lights_pars_begin:Im,lights_toon_fragment:Lm,lights_toon_pars_fragment:Nm,lights_phong_fragment:Dm,lights_phong_pars_fragment:Um,lights_physical_fragment:Fm,lights_physical_pars_fragment:Om,lights_fragment_begin:Bm,lights_fragment_maps:km,lights_fragment_end:Vm,lightprobes_pars_fragment:Gm,logdepthbuf_fragment:Hm,logdepthbuf_pars_fragment:Wm,logdepthbuf_pars_vertex:Xm,logdepthbuf_vertex:qm,map_fragment:Ym,map_pars_fragment:Zm,map_particle_fragment:Km,map_particle_pars_fragment:Jm,metalnessmap_fragment:$m,metalnessmap_pars_fragment:jm,morphinstance_vertex:Qm,morphcolor_vertex:eg,morphnormal_vertex:tg,morphtarget_pars_vertex:ng,morphtarget_vertex:ig,normal_fragment_begin:sg,normal_fragment_maps:rg,normal_pars_fragment:ag,normal_pars_vertex:og,normal_vertex:cg,normalmap_pars_fragment:lg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:hg,clearcoat_pars_fragment:dg,iridescence_pars_fragment:fg,opaque_fragment:pg,packing:mg,premultiplied_alpha_fragment:gg,project_vertex:xg,dithering_fragment:_g,dithering_pars_fragment:yg,roughnessmap_fragment:vg,roughnessmap_pars_fragment:Mg,shadowmap_pars_fragment:Sg,shadowmap_pars_vertex:bg,shadowmap_vertex:wg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:Eg,skinning_vertex:Rg,skinnormal_vertex:Cg,specularmap_fragment:zg,specularmap_pars_fragment:Ig,tonemapping_fragment:Pg,tonemapping_pars_fragment:Lg,transmission_fragment:Ng,transmission_pars_fragment:Dg,uv_pars_fragment:Ug,uv_pars_vertex:Fg,uv_vertex:Og,worldpos_vertex:Bg,background_vert:kg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Hg,cube_vert:Wg,cube_frag:Xg,depth_vert:qg,depth_frag:Yg,distance_vert:Zg,distance_frag:Kg,equirect_vert:Jg,equirect_frag:$g,linedashed_vert:jg,linedashed_frag:Qg,meshbasic_vert:e0,meshbasic_frag:t0,meshlambert_vert:n0,meshlambert_frag:i0,meshmatcap_vert:s0,meshmatcap_frag:r0,meshnormal_vert:a0,meshnormal_frag:o0,meshphong_vert:c0,meshphong_frag:l0,meshphysical_vert:u0,meshphysical_frag:h0,meshtoon_vert:d0,meshtoon_frag:f0,points_vert:p0,points_frag:m0,shadow_vert:g0,shadow_frag:x0,sprite_vert:_0,sprite_frag:y0},fe={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new de(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new N},probesMax:{value:new N},probesResolution:{value:new N}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new de(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Bn={basic:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:Wt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:Wt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:Wt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ze(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:Wt([fe.points,fe.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:Wt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:Wt([fe.common,fe.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:Wt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:Wt([fe.sprite,fe.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distance:{uniforms:Wt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distance_vert,fragmentShader:Ge.distance_frag},shadow:{uniforms:Wt([fe.lights,fe.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Bn.physical={uniforms:Wt([Bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new de(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new de},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new de},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};var Yo={r:0,b:0,g:0},v0=new De,Ud=new Ue;Ud.set(-1,0,0,0,1,0,0,0,1);function M0(i,e,t,n,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,f=0,d=null;function u(T){let R=T.isScene===!0?T.background:null;if(R&&R.isTexture){let y=T.backgroundBlurriness>0;R=e.get(R,y)}return R}function m(T){let R=!1,y=u(T);y===null?g(a,o):y&&y.isColor&&(g(y,1),R=!0);let M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||R)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(T,R){let y=u(R);y&&(y.isCubeTexture||y.mapping===Fr)?(l===void 0&&(l=new Fe(new yi(1,1,1),new ln({name:"BackgroundCubeMaterial",uniforms:Zi(Bn.backgroundCube.uniforms),vertexShader:Bn.backgroundCube.vertexShader,fragmentShader:Bn.backgroundCube.fragmentShader,side:Zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(v0.makeRotationFromEuler(R.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Ud),l.material.toneMapped=We.getTransfer(y.colorSpace)!==it,(h!==y||f!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Fe(new vi(2,2),new ln({name:"BackgroundMaterial",uniforms:Zi(Bn.background.uniforms),vertexShader:Bn.background.vertexShader,fragmentShader:Bn.background.fragmentShader,side:Dt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,c.material.toneMapped=We.getTransfer(y.colorSpace)!==it,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||f!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,f=y.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function g(T,R){T.getRGB(Yo,Sl(i)),t.buffers.color.setClear(Yo.r,Yo.g,Yo.b,R,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,R=1){a.set(T),o=R,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,g(a,o)},render:m,addToRenderList:_,dispose:p}}function S0(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(A,P,L,z,D){let k=!1,V=f(A,z,L,P);r!==V&&(r=V,l(r.object)),k=u(A,z,L,D),k&&m(A,z,L,D),D!==null&&e.update(D,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(A,P,L,z),D!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return i.createVertexArray()}function l(A){return i.bindVertexArray(A)}function h(A){return i.deleteVertexArray(A)}function f(A,P,L,z){let D=z.wireframe===!0,k=n[P.id];k===void 0&&(k={},n[P.id]=k);let V=A.isInstancedMesh===!0?A.id:0,$=k[V];$===void 0&&($={},k[V]=$);let W=$[L.id];W===void 0&&(W={},$[L.id]=W);let Y=W[D];return Y===void 0&&(Y=d(c()),W[D]=Y),Y}function d(A){let P=[],L=[],z=[];for(let D=0;D<t;D++)P[D]=0,L[D]=0,z[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:L,attributeDivisors:z,object:A,attributes:{},index:null}}function u(A,P,L,z){let D=r.attributes,k=P.attributes,V=0,$=L.getAttributes();for(let W in $)if($[W].location>=0){let Q=D[W],re=k[W];if(re===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(re=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(re=A.instanceColor)),Q===void 0||Q.attribute!==re||re&&Q.data!==re.data)return!0;V++}return r.attributesNum!==V||r.index!==z}function m(A,P,L,z){let D={},k=P.attributes,V=0,$=L.getAttributes();for(let W in $)if($[W].location>=0){let Q=k[W];Q===void 0&&(W==="instanceMatrix"&&A.instanceMatrix&&(Q=A.instanceMatrix),W==="instanceColor"&&A.instanceColor&&(Q=A.instanceColor));let re={};re.attribute=Q,Q&&Q.data&&(re.data=Q.data),D[W]=re,V++}r.attributes=D,r.attributesNum=V,r.index=z}function _(){let A=r.newAttributes;for(let P=0,L=A.length;P<L;P++)A[P]=0}function g(A){p(A,0)}function p(A,P){let L=r.newAttributes,z=r.enabledAttributes,D=r.attributeDivisors;L[A]=1,z[A]===0&&(i.enableVertexAttribArray(A),z[A]=1),D[A]!==P&&(i.vertexAttribDivisor(A,P),D[A]=P)}function T(){let A=r.newAttributes,P=r.enabledAttributes;for(let L=0,z=P.length;L<z;L++)P[L]!==A[L]&&(i.disableVertexAttribArray(L),P[L]=0)}function R(A,P,L,z,D,k,V){V===!0?i.vertexAttribIPointer(A,P,L,D,k):i.vertexAttribPointer(A,P,L,z,D,k)}function y(A,P,L,z){_();let D=z.attributes,k=L.getAttributes(),V=P.defaultAttributeValues;for(let $ in k){let W=k[$];if(W.location>=0){let Y=D[$];if(Y===void 0&&($==="instanceMatrix"&&A.instanceMatrix&&(Y=A.instanceMatrix),$==="instanceColor"&&A.instanceColor&&(Y=A.instanceColor)),Y!==void 0){let Q=Y.normalized,re=Y.itemSize,ge=e.get(Y);if(ge===void 0)continue;let je=ge.buffer,He=ge.type,Ke=ge.bytesPerElement,Z=He===i.INT||He===i.UNSIGNED_INT||Y.gpuType===ao;if(Y.isInterleavedBufferAttribute){let te=Y.data,ye=te.stride,Ne=Y.offset;if(te.isInstancedInterleavedBuffer){for(let _e=0;_e<W.locationSize;_e++)p(W.location+_e,te.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let _e=0;_e<W.locationSize;_e++)g(W.location+_e);i.bindBuffer(i.ARRAY_BUFFER,je);for(let _e=0;_e<W.locationSize;_e++)R(W.location+_e,re/W.locationSize,He,Q,ye*Ke,(Ne+re/W.locationSize*_e)*Ke,Z)}else{if(Y.isInstancedBufferAttribute){for(let te=0;te<W.locationSize;te++)p(W.location+te,Y.meshPerAttribute);A.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let te=0;te<W.locationSize;te++)g(W.location+te);i.bindBuffer(i.ARRAY_BUFFER,je);for(let te=0;te<W.locationSize;te++)R(W.location+te,re/W.locationSize,He,Q,re*Ke,re/W.locationSize*te*Ke,Z)}}else if(V!==void 0){let Q=V[$];if(Q!==void 0)switch(Q.length){case 2:i.vertexAttrib2fv(W.location,Q);break;case 3:i.vertexAttrib3fv(W.location,Q);break;case 4:i.vertexAttrib4fv(W.location,Q);break;default:i.vertexAttrib1fv(W.location,Q)}}}}T()}function M(){S();for(let A in n){let P=n[A];for(let L in P){let z=P[L];for(let D in z){let k=z[D];for(let V in k)h(k[V].object),delete k[V];delete z[D]}}delete n[A]}}function w(A){if(n[A.id]===void 0)return;let P=n[A.id];for(let L in P){let z=P[L];for(let D in z){let k=z[D];for(let V in k)h(k[V].object),delete k[V];delete z[D]}}delete n[A.id]}function E(A){for(let P in n){let L=n[P];for(let z in L){let D=L[z];if(D[A.id]===void 0)continue;let k=D[A.id];for(let V in k)h(k[V].object),delete k[V];delete D[A.id]}}}function x(A){for(let P in n){let L=n[P],z=A.isInstancedMesh===!0?A.id:0,D=L[z];if(D!==void 0){for(let k in D){let V=D[k];for(let $ in V)h(V[$].object),delete V[$];delete D[k]}delete L[z],Object.keys(L).length===0&&delete n[P]}}}function S(){C(),a=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:C,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:_,enableAttribute:g,disableUnusedAttributes:T}}function b0(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let d=0;for(let u=0;u<h;u++)d+=l[u];t.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function w0(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Jt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Kt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==sn&&E!==Ht&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Te("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Te("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),R=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:u,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:T,maxVaryings:R,maxFragmentUniforms:y,maxSamples:M,samples:w}}function T0(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Mn,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){let u=f.length!==0||d||n!==0||s;return s=d,n=f.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,u){let m=f.clippingPlanes,_=f.clipIntersection,g=f.clipShadows,p=i.get(f);if(!s||m===null||m.length===0||r&&!g)r?h(null):l();else{let T=r?0:n,R=T*4,y=p.clippingState||null;c.value=y,y=h(m,d,R,u);for(let M=0;M!==R;++M)y[M]=t[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,u,m){let _=f!==null?f.length:0,g=null;if(_!==0){if(g=c.value,m!==!0||g===null){let p=u+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(g===null||g.length<p)&&(g=new Float32Array(p));for(let R=0,y=u;R!==_;++R,y+=4)a.copy(f[R]).applyMatrix4(T,o),a.normal.toArray(g,y),g[y+3]=a.constant}c.value=g,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,g}}var ks=4,A0=6,E0=20,R0=256,Xr=new Si,pd=new ze,Il=null,Pl=0,Ll=0,Nl=!1,C0=new N,Ki=new N,Gs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=C0}=r;Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,s,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=gd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Il,Pl,Ll),this._renderer.xr.enabled=Nl,e.scissorTest=!1,Bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===wi||e.mapping===qi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Il=this._renderer.getRenderTarget(),Pl=this._renderer.getActiveCubeFace(),Ll=this._renderer.getActiveMipmapLevel(),Nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:et,minFilter:et,generateMipmaps:!1,type:Kt,format:Jt,colorSpace:zt,depthBuffer:!1},s=md(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=md(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=z0(r)),this._blurMaterial=P0(r,e,t),this._ggxMaterial=I0(r,e,t)}return s}_compileMaterial(e){let t=new Fe(new st,e);this._renderer.compile(t,Xr)}_sceneToCubeUV(e,t,n,s,r){let c=new Rt(90,1,t,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,u=f.toneMapping;f.getClearColor(pd),f.toneMapping=En,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(s),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Fe(new yi,new cn({name:"PMREM.Background",side:Zt,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,g=_.material,p=!1,T=e.background;T?T.isColor&&(g.color.copy(T),e.background=null,p=!0):(g.color.copy(pd),p=!0);for(let R=0;R<6;R++){let y=R%3;y===0?(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[R],r.y,r.z)):y===1?(c.up.set(0,0,l[R]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[R],r.z)):(c.up.set(0,l[R],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[R]));let M=this._cubeSize;Bs(s,y*M,R>2?M:0,M,M),f.setRenderTarget(s),p&&f.render(_,c),f.render(e,c)}f.toneMapping=u,f.autoClear=d,e.background=T}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===wi||e.mapping===qi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=xd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=gd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Bs(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,Xr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),f=Math.sqrt(l*l-h*h),d=l*1.25,u=f*d,{_lodMax:m}=this,_=this._sizeLods[n],g=3*_*(n>m-ks?n-m+ks:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=m-t,Bs(r,g,p,3*_,2*_),s.setRenderTarget(r),s.render(o,Xr),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,Bs(e,g,p,3*_,2*_),s.setRenderTarget(e),s.render(o,Xr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let h=this._sizeLods[s],f=3*h*(s>this._lodMax-ks?s-this._lodMax+ks:0),d=4*(this._cubeSize-h);Bs(t,f,d,3*h,2*h),a.setRenderTarget(t),a.render(c,Xr)}};function z0(i){let e=[],t=[],n=i,s=i-ks+1+A0;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],f=6,d=6,u=3,m=new Float32Array(u*d*f),_=new Float32Array(u*d*f);for(let p=0;p<f;p++){let T=p%3*2/3-1,R=p>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];m.set(y,u*d*p);for(let M=0;M<d;M++){let w=h[M*2]*2-1,E=h[M*2+1]*2-1;p===0?Ki.set(1,E,w):p===1?Ki.set(-w,1,-E):p===2?Ki.set(-w,E,1):p===3?Ki.set(-1,E,-w):p===4?Ki.set(-w,-1,E):Ki.set(w,E,-1),Ki.toArray(_,(p*d+M)*u)}}let g=new st;g.setAttribute("position",new _t(m,u)),g.setAttribute("outputDirection",new _t(_,u)),t.push(new Fe(g,null)),n>ks&&n--}return{lodMeshes:t,sizeLods:e}}function md(i,e,t){let n=new Qt(i,e,t);return n.texture.mapping=Fr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Bs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function I0(i,e,t){return new ln({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:R0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function P0(i,e,t){return new ln({name:"SphericalGaussianBlur",defines:{SAMPLES:E0,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function gd(){return new ln({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$o(),fragmentShader:`

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
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function xd(){return new ln({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Fn,depthTest:!1,depthWrite:!1})}function $o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Ko=class extends Qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new yr(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yi(5,5,5),r=new ln({name:"CubemapFromEquirect",uniforms:Zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Zt,blending:Fn});r.uniforms.tEquirect.value=t;let a=new Fe(s,r),o=t.minFilter;return t.minFilter===nn&&(t.minFilter=et),new to(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function L0(i){let e=new WeakMap,t=new WeakMap,n=null;function s(d,u=!1){return d==null?null:u?a(d):r(d)}function r(d){if(d&&d.isTexture){let u=d.mapping;if(u===Ls||u===so)if(e.has(d)){let m=e.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new Ko(m.height);return _.fromEquirectangularTexture(i,d),e.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let u=d.mapping,m=u===Ls||u===so,_=u===wi||u===qi;if(m||_){let g=t.get(d),p=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return n===null&&(n=new Gs(i)),g=m?n.fromEquirectangular(d,g):n.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),g.texture;if(g!==void 0)return g.texture;{let T=d.image;return m&&T&&T.height>0||_&&T&&c(T)?(n===null&&(n=new Gs(i)),g=m?n.fromEquirectangular(d):n.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,t.set(d,g),d.addEventListener("dispose",h),g.texture):null}}}return d}function o(d,u){return u===Ls?d.mapping=wi:u===so&&(d.mapping=qi),d}function c(d){let u=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&u++;return u===m}function l(d){let u=d.target;u.removeEventListener("dispose",l);let m=e.get(u);m!==void 0&&(e.delete(u),m.dispose())}function h(d){let u=d.target;u.removeEventListener("dispose",h);let m=t.get(u);m!==void 0&&(t.delete(u),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function N0(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Di("WebGLRenderer: "+n+" extension not supported."),s}}}function D0(i,e,t,n){let s={},r=new WeakMap;function a(f){let d=f.target;d.index!==null&&e.remove(d.index);for(let m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let u=r.get(d);u&&(e.remove(u),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,t.memory.geometries++),d}function c(f){let d=f.attributes;for(let u in d)e.update(d[u],i.ARRAY_BUFFER)}function l(f){let d=[],u=f.index,m=f.attributes.position,_=0;if(m===void 0)return;if(u!==null){let T=u.array;_=u.version;for(let R=0,y=T.length;R<y;R+=3){let M=T[R+0],w=T[R+1],E=T[R+2];d.push(M,w,w,E,E,M)}}else{let T=m.array;_=m.version;for(let R=0,y=T.length/3-1;R<y;R+=3){let M=R+0,w=R+1,E=R+2;d.push(M,w,w,E,E,M)}}let g=new(m.count>=65535?dr:hr)(d,1);g.version=_;let p=r.get(f);p&&e.remove(p),r.set(f,g)}function h(f){let d=r.get(f);if(d){let u=f.index;u!==null&&d.version<u.version&&l(f)}else l(f);return r.get(f)}return{get:o,update:c,getWireframeAttribute:h}}function U0(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function c(f,d){i.drawElements(n,d,r,f*a),t.update(d,n,1)}function l(f,d,u){u!==0&&(i.drawElementsInstanced(n,d,r,f*a,u),t.update(d,n,u))}function h(f,d,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,u);let _=0;for(let g=0;g<u;g++)_+=d[g];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function F0(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Pe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function O0(i,e,t){let n=new WeakMap,s=new $e;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,d=n.get(o);if(d===void 0||d.count!==f){let S=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let u=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],R=0;u===!0&&(R=1),m===!0&&(R=2),_===!0&&(R=3);let y=o.attributes.position.count*R,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let w=new Float32Array(y*M*4*f),E=new lr(w,y,M,f);E.type=Ht,E.needsUpdate=!0;let x=R*4;for(let C=0;C<f;C++){let A=g[C],P=p[C],L=T[C],z=y*M*4*C;for(let D=0;D<A.count;D++){let k=D*x;u===!0&&(s.fromBufferAttribute(A,D),w[z+k+0]=s.x,w[z+k+1]=s.y,w[z+k+2]=s.z,w[z+k+3]=0),m===!0&&(s.fromBufferAttribute(P,D),w[z+k+4]=s.x,w[z+k+5]=s.y,w[z+k+6]=s.z,w[z+k+7]=0),_===!0&&(s.fromBufferAttribute(L,D),w[z+k+8]=s.x,w[z+k+9]=s.y,w[z+k+10]=s.z,w[z+k+11]=L.itemSize===4?s.w:1)}}d={count:f,texture:E,size:new de(y,M)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];let m=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function B0(i,e,t,n,s){let r=new WeakMap;function a(l){let h=s.render.frame,f=l.geometry,d=e.get(l,f);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let u=l.skeleton;r.get(u)!==h&&(u.update(),r.set(u,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var k0={[sl]:"LINEAR_TONE_MAPPING",[rl]:"REINHARD_TONE_MAPPING",[al]:"CINEON_TONE_MAPPING",[ol]:"ACES_FILMIC_TONE_MAPPING",[ll]:"AGX_TONE_MAPPING",[Ur]:"NEUTRAL_TONE_MAPPING",[cl]:"CUSTOM_TONE_MAPPING"};function V0(i,e,t,n,s,r){let a=new Qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new st;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let h=new Xa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),f=new Fe(l,h),d=new Si(-1,1,1,-1,0,1),u=null,m=null,_=!1,g,p=null,T=[],R=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let w=0;w<T.length;w++){let E=T[w];E.setSize&&E.setSize(y,M)}},this.setEffects=function(y){T=y,R=T.length>0&&T[0].isRenderPass===!0;let M=a.width,w=a.height;T.length>0&&o===null&&(o=new Qt(M,w,{type:Kt,depthBuffer:!1,stencilBuffer:!1}),c=new Qt(M,w,{type:Kt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<T.length;E++){let x=T[E];x.setSize&&x.setSize(M,w)}},this.begin=function(y,M){if(_||y.toneMapping===En&&T.length===0)return!1;if(p=M,M!==null){let w=M.width,E=M.height;(a.width!==w||a.height!==E)&&this.setSize(w,E)}return R===!1&&y.setRenderTarget(a),g=y.toneMapping,y.toneMapping=En,!0},this.hasRenderPass=function(){return R},this.end=function(y,M){y.toneMapping=g,_=!0;let w=a,E=o;for(let x=0;x<T.length;x++){let S=T[x];S.enabled!==!1&&(S.render(y,E,w,M),S.needsSwap!==!1&&(w=E,E=E===o?c:o))}if(u!==y.outputColorSpace||m!==y.toneMapping){u=y.outputColorSpace,m=y.toneMapping,h.defines={},We.getTransfer(u)===it&&(h.defines.SRGB_TRANSFER="");let x=k0[m];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(p),y.render(f,d),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Fd=new bt,Fl=new _i(1,1),Od=new lr,Bd=new Na,kd=new yr,_d=[],yd=[],vd=new Float32Array(16),Md=new Float32Array(9),Sd=new Float32Array(4);function Hs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_d[s];if(r===void 0&&(r=new Float32Array(s),_d[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function It(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Pt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function jo(i,e){let t=yd[e];t===void 0&&(t=new Int32Array(e),yd[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function G0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function H0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2fv(this.addr,e),Pt(t,e)}}function W0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;i.uniform3fv(this.addr,e),Pt(t,e)}}function X0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4fv(this.addr,e),Pt(t,e)}}function q0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Sd.set(n),i.uniformMatrix2fv(this.addr,!1,Sd),Pt(t,n)}}function Y0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;Md.set(n),i.uniformMatrix3fv(this.addr,!1,Md),Pt(t,n)}}function Z0(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pt(t,e)}else{if(It(t,n))return;vd.set(n),i.uniformMatrix4fv(this.addr,!1,vd),Pt(t,n)}}function K0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2iv(this.addr,e),Pt(t,e)}}function $0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3iv(this.addr,e),Pt(t,e)}}function j0(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4iv(this.addr,e),Pt(t,e)}}function Q0(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function ex(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;i.uniform2uiv(this.addr,e),Pt(t,e)}}function tx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;i.uniform3uiv(this.addr,e),Pt(t,e)}}function nx(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;i.uniform4uiv(this.addr,e),Pt(t,e)}}function ix(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Fl.compareFunction=t.isReversedDepthBuffer()?qo:Xo,r=Fl):r=Fd,t.setTexture2D(e||r,s)}function sx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Bd,s)}function rx(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||kd,s)}function ax(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Od,s)}function ox(i){switch(i){case 5126:return G0;case 35664:return H0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return Z0;case 5124:case 35670:return K0;case 35667:case 35671:return J0;case 35668:case 35672:return $0;case 35669:case 35673:return j0;case 5125:return Q0;case 36294:return ex;case 36295:return tx;case 36296:return nx;case 35678:case 36198:case 36298:case 36306:case 35682:return ix;case 35679:case 36299:case 36307:return sx;case 35680:case 36300:case 36308:case 36293:return rx;case 36289:case 36303:case 36311:case 36292:return ax}}function cx(i,e){i.uniform1fv(this.addr,e)}function lx(i,e){let t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function ux(i,e){let t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function hx(i,e){let t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function dx(i,e){let t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function fx(i,e){let t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function px(i,e){let t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function mx(i,e){i.uniform1iv(this.addr,e)}function gx(i,e){i.uniform2iv(this.addr,e)}function xx(i,e){i.uniform3iv(this.addr,e)}function _x(i,e){i.uniform4iv(this.addr,e)}function yx(i,e){i.uniform1uiv(this.addr,e)}function vx(i,e){i.uniform2uiv(this.addr,e)}function Mx(i,e){i.uniform3uiv(this.addr,e)}function Sx(i,e){i.uniform4uiv(this.addr,e)}function bx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Fl:a=Fd;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function wx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Bd,r[a])}function Tx(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||kd,r[a])}function Ax(i,e,t){let n=this.cache,s=e.length,r=jo(t,s);It(n,r)||(i.uniform1iv(this.addr,r),Pt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Od,r[a])}function Ex(i){switch(i){case 5126:return cx;case 35664:return lx;case 35665:return ux;case 35666:return hx;case 35674:return dx;case 35675:return fx;case 35676:return px;case 5124:case 35670:return mx;case 35667:case 35671:return gx;case 35668:case 35672:return xx;case 35669:case 35673:return _x;case 5125:return yx;case 36294:return vx;case 36295:return Mx;case 36296:return Sx;case 35678:case 36198:case 36298:case 36306:case 35682:return bx;case 35679:case 36299:case 36307:return wx;case 35680:case 36300:case 36308:case 36293:return Tx;case 36289:case 36303:case 36311:case 36292:return Ax}}var Ol=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=ox(t.type)}},Bl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ex(t.type)}},kl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Dl=/(\w+)(\])?(\[|\.)?/g;function bd(i,e){i.seq.push(e),i.map[e.id]=e}function Rx(i,e,t){let n=i.name,s=n.length;for(Dl.lastIndex=0;;){let r=Dl.exec(n),a=Dl.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){bd(t,l===void 0?new Ol(o,i,e):new Bl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new kl(o),bd(t,f)),t=f}}}var Vs=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);Rx(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function wd(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var Cx=37297,zx=0;function Ix(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Td=new Ue;function Px(i){We._getMatrix(Td,We.workingColorSpace,i);let e=`mat3( ${Td.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case or:return[e,"LinearTransferOETF"];case it:return[e,"sRGBTransferOETF"];default:return Te("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ad(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+Ix(i.getShaderSource(e),o)}else return r}function Lx(i,e){let t=Px(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var Nx={[sl]:"Linear",[rl]:"Reinhard",[al]:"Cineon",[ol]:"ACESFilmic",[ll]:"AgX",[Ur]:"Neutral",[cl]:"Custom"};function Dx(i,e){let t=Nx[e];return t===void 0?(Te("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Zo=new N;function Ux(){We.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),e=Zo.y.toFixed(4),t=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Yr).join(`
`)}function Ox(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Bx(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Yr(i){return i!==""}function Ed(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Rd(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vl(i){return i.replace(kx,Gx)}var Vx=new Map;function Gx(i,e){let t=Ge[e];if(t===void 0){let n=Vx.get(e);if(n!==void 0)t=Ge[n],Te('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Vl(t)}var Hx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cd(i){return i.replace(Hx,Wx)}function Wx(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function zd(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var Xx={[Wi]:"SHADOWMAP_TYPE_PCF",[Is]:"SHADOWMAP_TYPE_VSM"};function qx(i){return Xx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yx={[wi]:"ENVMAP_TYPE_CUBE",[qi]:"ENVMAP_TYPE_CUBE",[Fr]:"ENVMAP_TYPE_CUBE_UV"};function Zx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var Kx={[qi]:"ENVMAP_MODE_REFRACTION"};function Jx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Kx[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var $x={[il]:"ENVMAP_BLENDING_MULTIPLY",[Yh]:"ENVMAP_BLENDING_MIX",[Zh]:"ENVMAP_BLENDING_ADD"};function jx(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":$x[i.combine]||"ENVMAP_BLENDING_NONE"}function Qx(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function e_(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=qx(t),l=Zx(t),h=Jx(t),f=jx(t),d=Qx(t),u=Fx(t),m=Ox(r),_=s.createProgram(),g,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yr).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Yr).join(`
`),p.length>0&&(p+=`
`)):(g=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Yr).join(`
`),p=[zd(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ge.tonemapping_pars_fragment:"",t.toneMapping!==En?Dx("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ge.colorspace_pars_fragment,Lx("linearToOutputTexel",t.outputColorSpace),Ux(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Yr).join(`
`)),a=Vl(a),a=Ed(a,t),a=Rd(a,t),o=Vl(o),o=Ed(o,t),o=Rd(o,t),a=Cd(a),o=Cd(o),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===yl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===yl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let R=T+g+a,y=T+p+o,M=wd(s,s.VERTEX_SHADER,R),w=wd(s,s.FRAGMENT_SHADER,y);s.attachShader(_,M),s.attachShader(_,w),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function E(A){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",L=s.getShaderInfoLog(M)||"",z=s.getShaderInfoLog(w)||"",D=P.trim(),k=L.trim(),V=z.trim(),$=!0,W=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,M,w);else{let Y=Ad(s,M,"vertex"),Q=Ad(s,w,"fragment");Pe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+A.name+`
Material Type: `+A.type+`

Program Info Log: `+D+`
`+Y+`
`+Q)}else D!==""?Te("WebGLProgram: Program Info Log:",D):(k===""||V==="")&&(W=!1);W&&(A.diagnostics={runnable:$,programLog:D,vertexShader:{log:k,prefix:g},fragmentShader:{log:V,prefix:p}})}s.deleteShader(M),s.deleteShader(w),x=new Vs(s,_),S=Bx(s,_)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(_,Cx)),C},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=zx++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=w,this}var t_=0,Gl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Hl(e),t.set(e,n)),n}},Hl=class{constructor(e){this.id=t_++,this.code=e,this.usedTimes=0}};function n_(i){return i===Ai||i===Gr||i===Hr}function i_(i,e,t,n,s,r){let a=new Ss,o=new Gl,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,d=n.precision,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,S,C,A,P,L){let z=A.fog,D=P.geometry,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?A.environment:null,V=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,$=e.get(x.envMap||k,V),W=$&&$.mapping===Fr?$.image.height:null,Y=u[x.type];x.precision!==null&&(d=n.getMaxPrecision(x.precision),d!==x.precision&&Te("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let Q=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,re=Q!==void 0?Q.length:0,ge=0;D.morphAttributes.position!==void 0&&(ge=1),D.morphAttributes.normal!==void 0&&(ge=2),D.morphAttributes.color!==void 0&&(ge=3);let je,He,Ke,Z;if(Y){let ht=Bn[Y];je=ht.vertexShader,He=ht.fragmentShader}else{je=x.vertexShader,He=x.fragmentShader;let ht=o.getVertexShaderStage(x),tt=o.getFragmentShaderStage(x);o.update(x,ht,tt),Ke=ht.id,Z=tt.id}let te=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Ne=P.isInstancedMesh===!0,_e=P.isBatchedMesh===!0,se=!!x.map,Je=!!x.matcap,Le=!!$,Xe=!!x.aoMap,ut=!!x.lightMap,Ze=!!x.bumpMap&&x.wireframe===!1,mt=!!x.normalMap,Lt=!!x.displacementMap,$t=!!x.emissiveMap,xt=!!x.metalnessMap,Tt=!!x.roughnessMap,O=x.anisotropy>0,Ot=x.clearcoat>0,rt=x.dispersion>0,I=x.retroreflectivity>0,v=x.iridescence>0,B=x.sheen>0,X=x.transmission>0,K=O&&!!x.anisotropyMap,ie=Ot&&!!x.clearcoatMap,ae=Ot&&!!x.clearcoatNormalMap,J=Ot&&!!x.clearcoatRoughnessMap,ee=v&&!!x.iridescenceMap,oe=v&&!!x.iridescenceThicknessMap,Ee=B&&!!x.sheenColorMap,he=B&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Re=!!x.specularColorMap,Ie=!!x.specularIntensityMap,Oe=X&&!!x.transmissionMap,F=X&&!!x.thicknessMap,le=!!x.gradientMap,j=!!x.alphaMap,ue=x.alphaTest>0,xe=!!x.alphaHash,ne=!!x.extensions,Ce=En;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ce=i.toneMapping);let we={shaderID:Y,shaderType:x.type,shaderName:x.name,vertexShader:je,fragmentShader:He,defines:x.defines,customVertexShaderID:Ke,customFragmentShaderID:Z,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:_e,batchingColor:_e&&P._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&P.instanceColor!==null,instancingMorph:Ne&&P.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:se,matcap:Je,envMap:Le,envMapMode:Le&&$.mapping,envMapCubeUVHeight:W,aoMap:Xe,lightMap:ut,bumpMap:Ze,normalMap:mt,displacementMap:Lt,emissiveMap:$t,normalMapObjectSpace:mt&&x.normalMapType===jh,normalMapTangentSpace:mt&&x.normalMapType===Wo,packedNormalMap:mt&&x.normalMapType===Wo&&n_(x.normalMap.format),metalnessMap:xt,roughnessMap:Tt,anisotropy:O,anisotropyMap:K,clearcoat:Ot,clearcoatMap:ie,clearcoatNormalMap:ae,clearcoatRoughnessMap:J,dispersion:rt,retroreflection:I,iridescence:v,iridescenceMap:ee,iridescenceThicknessMap:oe,sheen:B,sheenColorMap:Ee,sheenRoughnessMap:he,specularMap:ce,specularColorMap:Re,specularIntensityMap:Ie,transmission:X,transmissionMap:Oe,thicknessMap:F,gradientMap:le,opaque:x.transparent===!1&&x.blending===Ps&&x.alphaToCoverage===!1,alphaMap:j,alphaTest:ue,alphaHash:xe,combine:x.combine,mapUv:se&&m(x.map.channel),aoMapUv:Xe&&m(x.aoMap.channel),lightMapUv:ut&&m(x.lightMap.channel),bumpMapUv:Ze&&m(x.bumpMap.channel),normalMapUv:mt&&m(x.normalMap.channel),displacementMapUv:Lt&&m(x.displacementMap.channel),emissiveMapUv:$t&&m(x.emissiveMap.channel),metalnessMapUv:xt&&m(x.metalnessMap.channel),roughnessMapUv:Tt&&m(x.roughnessMap.channel),anisotropyMapUv:K&&m(x.anisotropyMap.channel),clearcoatMapUv:ie&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:oe&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:he&&m(x.sheenRoughnessMap.channel),specularMapUv:ce&&m(x.specularMap.channel),specularColorMapUv:Re&&m(x.specularColorMap.channel),specularIntensityMapUv:Ie&&m(x.specularIntensityMap.channel),transmissionMapUv:Oe&&m(x.transmissionMap.channel),thicknessMapUv:F&&m(x.thicknessMap.channel),alphaMapUv:j&&m(x.alphaMap.channel),vertexTangents:!!D.attributes.tangent&&(mt||O),vertexNormals:!!D.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!D.attributes.uv&&(se||j),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||D.attributes.normal===void 0&&mt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:D.attributes.position!==void 0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:ge,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:L.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ce,decodeVideoTexture:se&&x.map.isVideoTexture===!0&&We.getTransfer(x.map.colorSpace)===it,decodeVideoTextureEmissive:$t&&x.emissiveMap.isVideoTexture===!0&&We.getTransfer(x.emissiveMap.colorSpace)===it,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Gt,flipSided:x.side===Zt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ne&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&x.extensions.multiDraw===!0||_e)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return we.vertexUv1s=c.has(1),we.vertexUv2s=c.has(2),we.vertexUv3s=c.has(3),c.clear(),we}function g(x){let S=[];if(x.shaderID?S.push(x.shaderID):(S.push(x.customVertexShaderID),S.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)S.push(C),S.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(S,x),T(S,x),S.push(i.outputColorSpace)),S.push(x.customProgramCacheKey),S.join()}function p(x,S){x.push(S.precision),x.push(S.outputColorSpace),x.push(S.envMapMode),x.push(S.envMapCubeUVHeight),x.push(S.mapUv),x.push(S.alphaMapUv),x.push(S.lightMapUv),x.push(S.aoMapUv),x.push(S.bumpMapUv),x.push(S.normalMapUv),x.push(S.displacementMapUv),x.push(S.emissiveMapUv),x.push(S.metalnessMapUv),x.push(S.roughnessMapUv),x.push(S.anisotropyMapUv),x.push(S.clearcoatMapUv),x.push(S.clearcoatNormalMapUv),x.push(S.clearcoatRoughnessMapUv),x.push(S.iridescenceMapUv),x.push(S.iridescenceThicknessMapUv),x.push(S.sheenColorMapUv),x.push(S.sheenRoughnessMapUv),x.push(S.specularMapUv),x.push(S.specularColorMapUv),x.push(S.specularIntensityMapUv),x.push(S.transmissionMapUv),x.push(S.thicknessMapUv),x.push(S.combine),x.push(S.fogExp2),x.push(S.sizeAttenuation),x.push(S.morphTargetsCount),x.push(S.morphAttributeCount),x.push(S.numSunLights),x.push(S.numDirLights),x.push(S.numPointLights),x.push(S.numSpotLights),x.push(S.numSpotLightMaps),x.push(S.numHemiLights),x.push(S.numRectAreaLights),x.push(S.numSunLightShadows),x.push(S.numDirLightShadows),x.push(S.numPointLightShadows),x.push(S.numSpotLightShadows),x.push(S.numSpotLightShadowsWithMaps),x.push(S.numLightProbes),x.push(S.shadowMapType),x.push(S.toneMapping),x.push(S.numClippingPlanes),x.push(S.numClipIntersection),x.push(S.depthPacking)}function T(x,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function R(x){let S=u[x.type],C;if(S){let A=Bn[S];C=hd.clone(A.uniforms)}else C=x.uniforms;return C}function y(x,S){let C=h.get(S);return C!==void 0?++C.usedTimes:(C=new e_(i,S,x,s),l.push(C),h.set(S,C)),C}function M(x){if(--x.usedTimes===0){let S=l.indexOf(x);l[S]=l[l.length-1],l.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function E(){o.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:R,acquireProgram:y,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:E}}function s_(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function r_(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Id(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Pd(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d){let u=0;return d.isInstancedMesh&&(u+=2),d.isSkinnedMesh&&(u+=1),u}function o(d,u,m,_,g,p){let T=i[e];return T===void 0?(T={id:d.id,object:d,geometry:u,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:g,group:p},i[e]=T):(T.id=d.id,T.object=d,T.geometry=u,T.material=m,T.materialVariant=a(d),T.groupOrder=_,T.renderOrder=d.renderOrder,T.z=g,T.group=p),e++,T}function c(d,u,m,_,g,p,T){T.reversedDepth===!0&&(g=-g);let R=o(d,u,m,_,g,p);m.transmission>0?n.push(R):m.transparent===!0?s.push(R):t.push(R)}function l(d,u,m,_,g,p){let T=o(d,u,m,_,g,p);m.transmission>0?n.unshift(T):m.transparent===!0?s.unshift(T):t.unshift(T)}function h(d,u){t.length>1&&t.sort(d||r_),n.length>1&&n.sort(u||Id),s.length>1&&s.sort(u||Id)}function f(){for(let d=e,u=i.length;d<u;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function a_(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Pd,i.set(n,[a])):s>=r.length?(a=new Pd,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function o_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new N,color:new ze};break;case"SpotLight":t={position:new N,direction:new N,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new N,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new N,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new N,halfWidth:new N,halfHeight:new N};break}return i[e.id]=t,t}}}function c_(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new de,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var l_=0;function u_(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function h_(i){let e=new o_,t=c_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new N);let s=new N,r=new De,a=new De;function o(l){let h=0,f=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let u=0,m=0,_=0,g=0,p=0,T=0,R=0,y=0,M=0,w=0,E=0,x=0,S=0,C=0;l.sort(u_);for(let P=0,L=l.length;P<L;P++){let z=l[P],D=z.color,k=z.intensity,V=z.distance,$=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===Ai?$=z.shadow.map.texture:$=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)h+=D.r*k,f+=D.g*k,d+=D.b*k;else if(z.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(z.sh.coefficients[W],k);C++}else if(z.isSunLight){let W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let Y=z.shadow,Q=t.get(z);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),n.sunShadow[m]=Q,n.sunShadowMap[m]=$;let re=Y.getViewportCount();for(let ge=0;ge<re;ge++)n.sunShadowMatrix[_+ge]=Y.getMatrix(ge),n.sunShadowCascade[_+ge]=Y._cascadeData[ge];_+=re,m++}n.sun[u]=W,u++}else if(z.isDirectionalLight){let W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){let Y=z.shadow,Q=t.get(z);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.directionalShadow[g]=Q,n.directionalShadowMap[g]=$,n.directionalShadowMatrix[g]=z.shadow.matrix,M++}n.directional[g]=W,g++}else if(z.isSpotLight){let W=e.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(D).multiplyScalar(k),W.distance=V,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,n.spot[T]=W;let Y=z.shadow;if(z.map&&(n.spotLightMap[x]=z.map,x++,Y.updateMatrices(z),z.castShadow&&S++),n.spotLightMatrix[T]=Y.matrix,z.castShadow){let Q=t.get(z);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,n.spotShadow[T]=Q,n.spotShadowMap[T]=$,E++}T++}else if(z.isRectAreaLight){let W=e.get(z);W.color.copy(D).multiplyScalar(k),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),n.rectArea[R]=W,R++}else if(z.isPointLight){let W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){let Y=z.shadow,Q=t.get(z);Q.shadowIntensity=Y.intensity,Q.shadowBias=Y.bias,Q.shadowNormalBias=Y.normalBias,Q.shadowRadius=Y.radius,Q.shadowMapSize=Y.mapSize,Q.shadowCameraNear=Y.camera.near,Q.shadowCameraFar=Y.camera.far,n.pointShadow[p]=Q,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=z.shadow.matrix,w++}n.point[p]=W,p++}else if(z.isHemisphereLight){let W=e.get(z);W.skyColor.copy(z.color).multiplyScalar(k),W.groundColor.copy(z.groundColor).multiplyScalar(k),n.hemi[y]=W,y++}}R>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=d;let A=n.hash;(A.sunLength!==u||A.directionalLength!==g||A.pointLength!==p||A.spotLength!==T||A.rectAreaLength!==R||A.hemiLength!==y||A.numSunShadows!==m||A.numDirectionalShadows!==M||A.numPointShadows!==w||A.numSpotShadows!==E||A.numSpotMaps!==x||A.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=g,n.spot.length=T,n.rectArea.length=R,n.point.length=p,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-S,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=C,A.sunLength=u,A.directionalLength=g,A.pointLength=p,A.spotLength=T,A.rectAreaLength=R,A.hemiLength=y,A.numSunShadows=m,A.numDirectionalShadows=M,A.numPointShadows=w,A.numSpotShadows=E,A.numSpotMaps=x,A.numLightProbes=C,n.version=l_++)}function c(l,h){let f=0,d=0,u=0,m=0,_=0,g=0,p=h.matrixWorldInverse;for(let T=0,R=l.length;T<R;T++){let y=l[T];if(y.isSunLight){let M=n.sun[f];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),f++}else if(y.isDirectionalLight){let M=n.directional[d];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),d++}else if(y.isSpotLight){let M=n.spot[m];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(p),m++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let M=n.point[u];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),g++}}}return{setup:o,setupView:c,state:n}}function Ld(i){let e=new h_(i),t=[],n=[],s=[];function r(d){f.camera=d,t.length=0,n.length=0,s.length=0}function a(d){t.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let f={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:f,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function d_(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Ld(i),e.set(s,[o])):r>=a.length?(o=new Ld(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var f_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,p_=`uniform sampler2D shadow_pass;
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
}`,m_=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],g_=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],Nd=new De,qr=new N,Ul=new N;function x_(i,e,t){let n=new Es,s=new de,r=new de,a=new $e,o=new qa,c=new Ya,l={},h=t.maxTextureSize,f={[Dt]:Zt,[Zt]:Dt,[Gt]:Gt},d=new ln({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new de},radius:{value:4}},vertexShader:f_,fragmentShader:p_}),u=d.clone();u.defines.HORIZONTAL_PASS=1;let m=new st;m.setAttribute("position",new _t(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Fe(m,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wi;let p=this.type;this.render=function(w,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===Rh&&(Te("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Wi);let S=i.getRenderTarget(),C=i.getActiveCubeFace(),A=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Fn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let L=p!==this.type;L&&E.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(D=>D.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,D=w.length;z<D;z++){let k=w[z],V=k.shadow;if(V===void 0){Te("WebGLShadowMap:",k,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let $=V.getFrameExtents();s.multiply($),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/$.x),s.x=r.x*$.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/$.y),s.y=r.y*$.y,V.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(V.camera._reversedDepth=W,V.map===null||L===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===Is){if(k.isPointLight){Te("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new Qt(s.x,s.y,{format:Ai,type:Kt,minFilter:et,magFilter:et,generateMipmaps:!1}),V.map.texture.name=k.name+".shadowMap",V.map.depthTexture=new _i(s.x,s.y,Ht),V.map.depthTexture.name=k.name+".shadowMapDepth",V.map.depthTexture.format=Nn,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St}else k.isPointLight?(V.map=new Ko(s.x),V.map.depthTexture=new Fa(s.x,Rn)):(V.map=new Qt(s.x,s.y),V.map.depthTexture=new _i(s.x,s.y,Rn)),V.map.depthTexture.name=k.name+".shadowMap",V.map.depthTexture.format=Nn,this.type===Wi?(V.map.depthTexture.compareFunction=W?qo:Xo,V.map.depthTexture.minFilter=et,V.map.depthTexture.magFilter=et):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=St,V.map.depthTexture.magFilter=St);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Y=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();k.isPointLight!==!0&&V.updateMatrices(k,x);for(let Q=0;Q<Y;Q++){let re=V.getCamera(Q);if(k.isPointLight){let ge=V.camera,je=V.matrix,He=k.distance||ge.far;He!==ge.far&&(ge.far=He,ge.updateProjectionMatrix()),qr.setFromMatrixPosition(k.matrixWorld),ge.position.copy(qr),Ul.copy(ge.position),Ul.add(m_[Q]),ge.up.copy(g_[Q]),ge.lookAt(Ul),ge.updateMatrixWorld(),je.makeTranslation(-qr.x,-qr.y,-qr.z),Nd.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),V._frustum.setFromProjectionMatrix(Nd,ge.coordinateSystem,ge.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)i.setRenderTarget(V.map,Q),i.clear();else{Q===0&&(i.setRenderTarget(V.map),i.clear());let ge=V.getViewport(Q);a.set(r.x*ge.x,r.y*ge.y,r.x*ge.z,r.y*ge.w),P.viewport(a)}n=V.getFrustum(Q),y(E,x,re,k,this.type)}V.isPointLightShadow!==!0&&this.type===Is&&T(V,x),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,i.setRenderTarget(S,C,A)};function T(w,E){let x=e.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new Qt(s.x,s.y,{format:Ai,type:Kt}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(E,null,x,d,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(E,null,x,u,_,null)}function R(w,E,x,S){let C=null,A=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(A!==void 0)C=A;else if(C=x.isPointLight===!0?c:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=C.uuid,L=E.uuid,z=l[P];z===void 0&&(z={},l[P]=z);let D=z[L];D===void 0&&(D=C.clone(),z[L]=D,E.addEventListener("dispose",M)),C=D}if(C.visible=E.visible,C.wireframe=E.wireframe,S===Is?C.side=E.shadowSide!==null?E.shadowSide:E.side:C.side=E.shadowSide!==null?E.shadowSide:f[E.side],C.alphaMap=E.alphaMap,C.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,C.map=E.map,C.clipShadows=E.clipShadows,C.clippingPlanes=E.clippingPlanes,C.clipIntersection=E.clipIntersection,C.displacementMap=E.displacementMap,C.displacementScale=E.displacementScale,C.displacementBias=E.displacementBias,C.wireframeLinewidth=E.wireframeLinewidth,C.linewidth=E.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let P=i.properties.get(C);P.light=x}return C}function y(w,E,x,S,C){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===Is)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);let L=e.update(w),z=w.material;if(Array.isArray(z)){let D=L.groups;for(let k=0,V=D.length;k<V;k++){let $=D[k],W=z[$.materialIndex];if(W&&W.visible){let Y=R(w,W,S,C);w.onBeforeShadow(i,w,E,x,L,Y,$),i.renderBufferDirect(x,null,L,Y,w,$),w.onAfterShadow(i,w,E,x,L,Y,$)}}}else if(z.visible){let D=R(w,z,S,C);w.onBeforeShadow(i,w,E,x,L,D,null),i.renderBufferDirect(x,null,L,D,w,null),w.onAfterShadow(i,w,E,x,L,D,null)}}let P=w.children;for(let L=0,z=P.length;L<z;L++)y(P[L],E,x,S,C)}function M(w){w.target.removeEventListener("dispose",M);for(let x in l){let S=l[x],C=w.target.uuid;C in S&&(S[C].dispose(),delete S[C])}}}function __(i,e){function t(){let F=!1,le=new $e,j=null,ue=new $e(0,0,0,0);return{setMask:function(xe){j!==xe&&!F&&(i.colorMask(xe,xe,xe,xe),j=xe)},setLocked:function(xe){F=xe},setClear:function(xe,ne,Ce,we,ht){ht===!0&&(xe*=we,ne*=we,Ce*=we),le.set(xe,ne,Ce,we),ue.equals(le)===!1&&(i.clearColor(xe,ne,Ce,we),ue.copy(le))},reset:function(){F=!1,j=null,ue.set(-1,0,0,0)}}}function n(){let F=!1,le=!1,j=null,ue=null,xe=null;return{setReversed:function(ne){if(le!==ne){let Ce=e.get("EXT_clip_control");ne?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),le=ne;let we=xe;xe=null,this.setClear(we)}},getReversed:function(){return le},setTest:function(ne){ne?te(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(ne){j!==ne&&!F&&(i.depthMask(ne),j=ne)},setFunc:function(ne){if(le&&(ne=ld[ne]),ue!==ne){switch(ne){case Ta:i.depthFunc(i.NEVER);break;case Aa:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case gs:i.depthFunc(i.LEQUAL);break;case Ra:i.depthFunc(i.EQUAL);break;case Ca:i.depthFunc(i.GEQUAL);break;case za:i.depthFunc(i.GREATER);break;case Ia:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ue=ne}},setLocked:function(ne){F=ne},setClear:function(ne){xe!==ne&&(xe=ne,le&&(ne=1-ne),i.clearDepth(ne))},reset:function(){F=!1,j=null,ue=null,xe=null,le=!1}}}function s(){let F=!1,le=null,j=null,ue=null,xe=null,ne=null,Ce=null,we=null,ht=null;return{setTest:function(tt){F||(tt?te(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(tt){le!==tt&&!F&&(i.stencilMask(tt),le=tt)},setFunc:function(tt,xn,zn){(j!==tt||ue!==xn||xe!==zn)&&(i.stencilFunc(tt,xn,zn),j=tt,ue=xn,xe=zn)},setOp:function(tt,xn,zn){(ne!==tt||Ce!==xn||we!==zn)&&(i.stencilOp(tt,xn,zn),ne=tt,Ce=xn,we=zn)},setLocked:function(tt){F=tt},setClear:function(tt){ht!==tt&&(i.clearStencil(tt),ht=tt)},reset:function(){F=!1,le=null,j=null,ue=null,xe=null,ne=null,Ce=null,we=null,ht=null}}}let r=new t,a=new n,o=new s,c=new WeakMap,l=new WeakMap,h={},f={},d={},u=new WeakMap,m=[],_=null,g=!1,p=null,T=null,R=null,y=null,M=null,w=null,E=null,x=new ze(0,0,0),S=0,C=!1,A=null,P=null,L=null,z=null,D=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,$=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),V=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),V=$>=2);let Y=null,Q={},re=i.getParameter(i.SCISSOR_BOX),ge=i.getParameter(i.VIEWPORT),je=new $e().fromArray(re),He=new $e().fromArray(ge);function Ke(F,le,j,ue){let xe=new Uint8Array(4),ne=i.createTexture();i.bindTexture(F,ne),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ce=0;Ce<j;Ce++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,ue,0,i.RGBA,i.UNSIGNED_BYTE,xe):i.texImage2D(le+Ce,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,xe);return ne}let Z={};Z[i.TEXTURE_2D]=Ke(i.TEXTURE_2D,i.TEXTURE_2D,1),Z[i.TEXTURE_CUBE_MAP]=Ke(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Z[i.TEXTURE_2D_ARRAY]=Ke(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Z[i.TEXTURE_3D]=Ke(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(gs),Ze(!1),mt($c),te(i.CULL_FACE),Xe(Fn);function te(F){h[F]!==!0&&(i.enable(F),h[F]=!0)}function ye(F){h[F]!==!1&&(i.disable(F),h[F]=!1)}function Ne(F,le){return d[F]!==le?(i.bindFramebuffer(F,le),d[F]=le,F===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=le),F===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=le),!0):!1}function _e(F,le){let j=m,ue=!1;if(F){j=u.get(le),j===void 0&&(j=[],u.set(le,j));let xe=F.textures;if(j.length!==xe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ne=0,Ce=xe.length;ne<Ce;ne++)j[ne]=i.COLOR_ATTACHMENT0+ne;j.length=xe.length,ue=!0}}else j[0]!==i.BACK&&(j[0]=i.BACK,ue=!0);ue&&i.drawBuffers(j)}function se(F){return _!==F?(i.useProgram(F),_=F,!0):!1}let Je={[Xi]:i.FUNC_ADD,[zh]:i.FUNC_SUBTRACT,[Ih]:i.FUNC_REVERSE_SUBTRACT};Je[Ph]=i.MIN,Je[Lh]=i.MAX;let Le={[Nh]:i.ZERO,[Dh]:i.ONE,[Uh]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[Gh]:i.SRC_ALPHA_SATURATE,[kh]:i.DST_COLOR,[Oh]:i.DST_ALPHA,[Fh]:i.ONE_MINUS_SRC_COLOR,[nl]:i.ONE_MINUS_SRC_ALPHA,[Vh]:i.ONE_MINUS_DST_COLOR,[Bh]:i.ONE_MINUS_DST_ALPHA,[Hh]:i.CONSTANT_COLOR,[Wh]:i.ONE_MINUS_CONSTANT_COLOR,[Xh]:i.CONSTANT_ALPHA,[qh]:i.ONE_MINUS_CONSTANT_ALPHA};function Xe(F,le,j,ue,xe,ne,Ce,we,ht,tt){if(F===Fn){g===!0&&(ye(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),F!==Ch){if(F!==p||tt!==C){if((T!==Xi||M!==Xi)&&(i.blendEquation(i.FUNC_ADD),T=Xi,M=Xi),tt)switch(F){case Ps:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFunc(i.ONE,i.ONE);break;case Qc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case el:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Pe("WebGLState: Invalid blending: ",F);break}else switch(F){case Ps:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Qc:Pe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case el:Pe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Pe("WebGLState: Invalid blending: ",F);break}R=null,y=null,w=null,E=null,x.set(0,0,0),S=0,p=F,C=tt}return}xe=xe||le,ne=ne||j,Ce=Ce||ue,(le!==T||xe!==M)&&(i.blendEquationSeparate(Je[le],Je[xe]),T=le,M=xe),(j!==R||ue!==y||ne!==w||Ce!==E)&&(i.blendFuncSeparate(Le[j],Le[ue],Le[ne],Le[Ce]),R=j,y=ue,w=ne,E=Ce),(we.equals(x)===!1||ht!==S)&&(i.blendColor(we.r,we.g,we.b,ht),x.copy(we),S=ht),p=F,C=!1}function ut(F,le){F.side===Gt?ye(i.CULL_FACE):te(i.CULL_FACE);let j=F.side===Zt;le&&(j=!j),Ze(j),F.blending===Ps&&F.transparent===!1?Xe(Fn):Xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),r.setMask(F.colorWrite);let ue=F.stencilWrite;o.setTest(ue),ue&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),$t(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ze(F){A!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),A=F)}function mt(F){F!==Ah?(te(i.CULL_FACE),F!==P&&(F===$c?i.cullFace(i.BACK):F===Eh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),P=F}function Lt(F){F!==L&&(V&&i.lineWidth(F),L=F)}function $t(F,le,j){F?(te(i.POLYGON_OFFSET_FILL),(z!==le||D!==j)&&(z=le,D=j,a.getReversed()&&(le=-le),i.polygonOffset(le,j))):ye(i.POLYGON_OFFSET_FILL)}function xt(F){F?te(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Tt(F){F===void 0&&(F=i.TEXTURE0+k-1),Y!==F&&(i.activeTexture(F),Y=F)}function O(F,le,j){j===void 0&&(Y===null?j=i.TEXTURE0+k-1:j=Y);let ue=Q[j];ue===void 0&&(ue={type:void 0,texture:void 0},Q[j]=ue),(ue.type!==F||ue.texture!==le)&&(Y!==j&&(i.activeTexture(j),Y=j),i.bindTexture(F,le||Z[F]),ue.type=F,ue.texture=le)}function Ot(){let F=Q[Y];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function rt(){try{i.compressedTexImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function I(){try{i.compressedTexImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function v(){try{i.texSubImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function B(){try{i.texSubImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function ie(){try{i.texStorage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function ae(){try{i.texStorage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function J(){try{i.texImage2D(...arguments)}catch(F){Pe("WebGLState:",F)}}function ee(){try{i.texImage3D(...arguments)}catch(F){Pe("WebGLState:",F)}}function oe(F){return f[F]!==void 0?f[F]:i.getParameter(F)}function Ee(F,le){f[F]!==le&&(i.pixelStorei(F,le),f[F]=le)}function he(F){je.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),je.copy(F))}function ce(F){He.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),He.copy(F))}function Re(F,le){let j=l.get(le);j===void 0&&(j=new WeakMap,l.set(le,j));let ue=j.get(F);ue===void 0&&(ue=i.getUniformBlockIndex(le,F.name),j.set(F,ue))}function Ie(F,le){let ue=l.get(le).get(F);c.get(le)!==ue&&(i.uniformBlockBinding(le,ue,F.__bindingPointIndex),c.set(le,ue))}function Oe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Y=null,Q={},d={},u=new WeakMap,m=[],_=null,g=!1,p=null,T=null,R=null,y=null,M=null,w=null,E=null,x=new ze(0,0,0),S=0,C=!1,A=null,P=null,L=null,z=null,D=null,je.set(0,0,i.canvas.width,i.canvas.height),He.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:ye,bindFramebuffer:Ne,drawBuffers:_e,useProgram:se,setBlending:Xe,setMaterial:ut,setFlipSided:Ze,setCullFace:mt,setLineWidth:Lt,setPolygonOffset:$t,setScissorTest:xt,activeTexture:Tt,bindTexture:O,unbindTexture:Ot,compressedTexImage2D:rt,compressedTexImage3D:I,texImage2D:J,texImage3D:ee,pixelStorei:Ee,getParameter:oe,updateUBOMapping:Re,uniformBlockBinding:Ie,texStorage2D:ie,texStorage3D:ae,texSubImage2D:v,texSubImage3D:B,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:he,viewport:ce,reset:Oe}}function y_(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new de,h=new WeakMap,f=new Set,d,u=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(I,v){return m?new OffscreenCanvas(I,v):ys("canvas")}function g(I,v,B){let X=1,K=rt(I);if((K.width>B||K.height>B)&&(X=B/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){let ie=Math.floor(X*K.width),ae=Math.floor(X*K.height);d===void 0&&(d=_(ie,ae));let J=v?_(ie,ae):d;return J.width=ie,J.height=ae,J.getContext("2d").drawImage(I,0,0,ie,ae),Te("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ie+"x"+ae+")."),J}else return"data"in I&&Te("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function p(I){return I.generateMipmaps}function T(I){i.generateMipmap(I)}function R(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(I,v,B,X,K,ie=!1){if(I!==null){if(i[I]!==void 0)return i[I];Te("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let ae;X&&(ae=e.get("EXT_texture_norm16"),ae||Te("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&ae&&(J=ae.R16_EXT),B===i.SHORT&&ae&&(J=ae.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&ae&&(J=ae.RG16_EXT),B===i.SHORT&&ae&&(J=ae.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ae&&(J=ae.RGB16_EXT),B===i.SHORT&&ae&&(J=ae.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let ee=ie?or:We.getTransfer(K);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=ee===it?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ae&&(J=ae.RGBA16_EXT),B===i.SHORT&&ae&&(J=ae.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(I,v){let B;return I?v===null||v===Rn||v===Us?B=i.DEPTH24_STENCIL8:v===Ht?B=i.DEPTH32F_STENCIL8:v===Ds&&(B=i.DEPTH24_STENCIL8,Te("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Rn||v===Us?B=i.DEPTH_COMPONENT24:v===Ht?B=i.DEPTH_COMPONENT32F:v===Ds&&(B=i.DEPTH_COMPONENT16),B}function w(I,v){return p(I)===!0||I.isFramebufferTexture&&I.minFilter!==St&&I.minFilter!==et?Math.log2(Math.max(v.width,v.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?v.mipmaps.length:1}function E(I){let v=I.target;v.removeEventListener("dispose",E),S(v),v.isVideoTexture&&h.delete(v),v.isHTMLTexture&&f.delete(v)}function x(I){let v=I.target;v.removeEventListener("dispose",x),A(v)}function S(I){let v=n.get(I);if(v.__webglInit===void 0)return;let B=I.source,X=u.get(B);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(I),Object.keys(X).length===0&&u.delete(B)}n.remove(I)}function C(I){let v=n.get(I);i.deleteTexture(v.__webglTexture);let B=I.source,X=u.get(B);delete X[v.__cacheKey],a.memory.textures--}function A(I){let v=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let B=I.textures;for(let X=0,K=B.length;X<K;X++){let ie=n.get(B[X]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(B[X])}n.remove(I)}let P=0;function L(){P=0}function z(){return P}function D(I){P=I}function k(){let I=P;return I>=s.maxTextures&&Te("WebGLTextures: Trying to use "+(I+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,I}function V(I){let v=[];return v.push(I.wrapS),v.push(I.wrapT),v.push(I.wrapR||0),v.push(I.magFilter),v.push(I.minFilter),v.push(I.anisotropy),v.push(I.internalFormat),v.push(I.format),v.push(I.type),v.push(I.generateMipmaps),v.push(I.premultiplyAlpha),v.push(I.flipY),v.push(I.unpackAlignment),v.push(I.colorSpace),v.join()}function $(I,v){let B=n.get(I);if(I.isVideoTexture&&O(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&B.__version!==I.version){let X=I.image;if(X===null)Te("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Te("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(B,I,v);return}}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function W(I,v){let B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){ye(B,I,v);return}else I.isExternalTexture&&(B.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Y(I,v){let B=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&B.__version!==I.version){ye(B,I,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function Q(I,v){let B=n.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&B.__version!==I.version){Ne(B,I,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let re={[fn]:i.REPEAT,[jt]:i.CLAMP_TO_EDGE,[xs]:i.MIRRORED_REPEAT},ge={[St]:i.NEAREST,[ro]:i.NEAREST_MIPMAP_NEAREST,[Yi]:i.NEAREST_MIPMAP_LINEAR,[et]:i.LINEAR,[Ns]:i.LINEAR_MIPMAP_NEAREST,[nn]:i.LINEAR_MIPMAP_LINEAR},je={[ed]:i.NEVER,[rd]:i.ALWAYS,[td]:i.LESS,[Xo]:i.LEQUAL,[nd]:i.EQUAL,[qo]:i.GEQUAL,[id]:i.GREATER,[sd]:i.NOTEQUAL};function He(I,v){if(v.type===Ht&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===et||v.magFilter===Ns||v.magFilter===Yi||v.magFilter===nn||v.minFilter===et||v.minFilter===Ns||v.minFilter===Yi||v.minFilter===nn)&&Te("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,re[v.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,re[v.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,re[v.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,ge[v.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,je[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===St||v.minFilter!==Yi&&v.minFilter!==nn||v.type===Ht&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(I,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(I,v){let B=!1;I.__webglInit===void 0&&(I.__webglInit=!0,v.addEventListener("dispose",E));let X=v.source,K=u.get(X);K===void 0&&(K={},u.set(X,K));let ie=V(v);if(ie!==I.__cacheKey){K[ie]===void 0&&(K[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ie].usedTimes++;let ae=K[I.__cacheKey];ae!==void 0&&(K[I.__cacheKey].usedTimes--,ae.usedTimes===0&&C(v)),I.__cacheKey=ie,I.__webglTexture=K[ie].texture}return B}function Z(I,v,B){return Math.floor(Math.floor(I/B)/v)}function te(I,v,B,X){let ie=I.updateRanges;if(ie.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,X,v.data);else{ie.sort((Ee,he)=>Ee.start-he.start);let ae=0;for(let Ee=1;Ee<ie.length;Ee++){let he=ie[ae],ce=ie[Ee],Re=he.start+he.count,Ie=Z(ce.start,v.width,4),Oe=Z(he.start,v.width,4);ce.start<=Re+1&&Ie===Oe&&Z(ce.start+ce.count-1,v.width,4)===Ie?he.count=Math.max(he.count,ce.start+ce.count-he.start):(++ae,ie[ae]=ce)}ie.length=ae+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),ee=t.getParameter(i.UNPACK_SKIP_PIXELS),oe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,he=ie.length;Ee<he;Ee++){let ce=ie[Ee],Re=Math.floor(ce.start/4),Ie=Math.ceil(ce.count/4),Oe=Re%v.width,F=Math.floor(Re/v.width),le=Ie,j=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(i.UNPACK_SKIP_ROWS,F),t.texSubImage2D(i.TEXTURE_2D,0,Oe,F,le,j,B,X,v.data)}I.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ee),t.pixelStorei(i.UNPACK_SKIP_ROWS,oe)}}function ye(I,v,B){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let K=Ke(I,v),ie=v.source;t.bindTexture(X,I.__webglTexture,i.TEXTURE0+B);let ae=n.get(ie);if(ie.version!==ae.__version||K===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let j=We.getPrimaries(We.workingColorSpace),ue=v.colorSpace===ri?null:We.getPrimaries(v.colorSpace),xe=v.colorSpace===ri||j===ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ee=g(v.image,!1,s.maxTextureSize);ee=Ot(v,ee);let oe=r.convert(v.format,v.colorSpace),Ee=r.convert(v.type),he=y(v.internalFormat,oe,Ee,v.normalized,v.colorSpace,v.isVideoTexture);He(X,v);let ce,Re=v.mipmaps,Ie=v.isVideoTexture!==!0,Oe=ae.__version===void 0||K===!0,F=ie.dataReady,le=w(v,ee);if(v.isDepthTexture)he=M(v.format===Ti,v.type),Oe&&(Ie?t.texStorage2D(i.TEXTURE_2D,1,he,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,oe,Ee,null));else if(v.isDataTexture)if(Re.length>0){Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],Ie?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,j,he,ce.width,ce.height,0,oe,Ee,ce.data);v.generateMipmaps=!1}else Ie?(Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,ee.width,ee.height),F&&te(v,ee,oe,Ee)):t.texImage2D(i.TEXTURE_2D,0,he,ee.width,ee.height,0,oe,Ee,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ie&&Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,Re[0].width,Re[0].height,ee.depth);for(let j=0,ue=Re.length;j<ue;j++)if(ce=Re[j],v.format!==Jt)if(oe!==null)if(Ie){if(F)if(v.layerUpdates.size>0){let xe=Tl(ce.width,ce.height,v.format,v.type);for(let ne of v.layerUpdates){let Ce=ce.data.subarray(ne*xe/ce.data.BYTES_PER_ELEMENT,(ne+1)*xe/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,ne,ce.width,ce.height,1,oe,Ce)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ee.depth,oe,ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,he,ce.width,ce.height,ee.depth,0,ce.data,0,0);else Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?F&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,ce.width,ce.height,ee.depth,oe,Ee,ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,he,ce.width,ce.height,ee.depth,0,oe,Ee,ce.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ie&&Oe&&t.texStorage2D(i.TEXTURE_2D,le,he,Re[0].width,Re[0].height);for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],v.format!==Jt?oe!==null?Ie?F&&t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(i.TEXTURE_2D,j,he,ce.width,ce.height,0,ce.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,ce.width,ce.height,oe,Ee,ce.data):t.texImage2D(i.TEXTURE_2D,j,he,ce.width,ce.height,0,oe,Ee,ce.data)}else if(v.isDataArrayTexture)if(Ie){if(Oe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,le,he,ee.width,ee.height,ee.depth),F)if(v.layerUpdates.size>0){let j=Tl(ee.width,ee.height,v.format,v.type);for(let ue of v.layerUpdates){let xe=ee.data.subarray(ue*j/ee.data.BYTES_PER_ELEMENT,(ue+1)*j/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ue,ee.width,ee.height,1,oe,Ee,xe)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,he,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(v.isData3DTexture)Ie?(Oe&&t.texStorage3D(i.TEXTURE_3D,le,he,ee.width,ee.height,ee.depth),F&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,oe,Ee,ee.data)):t.texImage3D(i.TEXTURE_3D,0,he,ee.width,ee.height,ee.depth,0,oe,Ee,ee.data);else if(v.isFramebufferTexture){if(Oe)if(Ie)t.texStorage2D(i.TEXTURE_2D,le,he,ee.width,ee.height);else{let j=ee.width,ue=ee.height;for(let xe=0;xe<le;xe++)t.texImage2D(i.TEXTURE_2D,xe,he,j,ue,0,oe,Ee,null),j>>=1,ue>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let j=i.canvas;if(j.hasAttribute("layoutsubtree")||j.setAttribute("layoutsubtree","true"),ee.parentNode!==j){j.appendChild(ee),f.add(v),j.onpaint=ue=>{let xe=ue.changedElements;for(let ne of f)xe.includes(ne.image)&&(ne.needsUpdate=!0)},j.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ee);else{let xe=i.RGBA,ne=i.RGBA,Ce=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,xe,ne,Ce,ee)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Re.length>0){if(Ie&&Oe){let j=rt(Re[0]);t.texStorage2D(i.TEXTURE_2D,le,he,j.width,j.height)}for(let j=0,ue=Re.length;j<ue;j++)ce=Re[j],Ie?F&&t.texSubImage2D(i.TEXTURE_2D,j,0,0,oe,Ee,ce):t.texImage2D(i.TEXTURE_2D,j,he,oe,Ee,ce);v.generateMipmaps=!1}else if(Ie){if(Oe){let j=rt(ee);t.texStorage2D(i.TEXTURE_2D,le,he,j.width,j.height)}F&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,oe,Ee,ee)}else t.texImage2D(i.TEXTURE_2D,0,he,oe,Ee,ee);p(v)&&T(X),ae.__version=ie.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function Ne(I,v,B){if(v.image.length!==6)return;let X=Ke(I,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+B);let ie=n.get(K);if(K.version!==ie.__version||X===!0){t.activeTexture(i.TEXTURE0+B);let ae=We.getPrimaries(We.workingColorSpace),J=v.colorSpace===ri?null:We.getPrimaries(v.colorSpace),ee=v.colorSpace===ri||ae===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ee);let oe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,he=[];for(let ne=0;ne<6;ne++)!oe&&!Ee?he[ne]=g(v.image[ne],!0,s.maxCubemapSize):he[ne]=Ee?v.image[ne].image:v.image[ne],he[ne]=Ot(v,he[ne]);let ce=he[0],Re=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),Oe=y(v.internalFormat,Re,Ie,v.normalized,v.colorSpace),F=v.isVideoTexture!==!0,le=ie.__version===void 0||X===!0,j=K.dataReady,ue=w(v,ce);He(i.TEXTURE_CUBE_MAP,v);let xe;if(oe){F&&le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Oe,ce.width,ce.height);for(let ne=0;ne<6;ne++){xe=he[ne].mipmaps;for(let Ce=0;Ce<xe.length;Ce++){let we=xe[Ce];v.format!==Jt?Re!==null?F?j&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,we.width,we.height,Re,we.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Oe,we.width,we.height,0,we.data):Te("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,0,0,we.width,we.height,Re,Ie,we.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce,Oe,we.width,we.height,0,Re,Ie,we.data)}}}else{if(xe=v.mipmaps,F&&le){xe.length>0&&ue++;let ne=rt(he[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ue,Oe,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(Ee){F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,he[ne].width,he[ne].height,Re,Ie,he[ne].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,he[ne].width,he[ne].height,0,Re,Ie,he[ne].data);for(let Ce=0;Ce<xe.length;Ce++){let ht=xe[Ce].image[ne].image;F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,ht.width,ht.height,Re,Ie,ht.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Oe,ht.width,ht.height,0,Re,Ie,ht.data)}}else{F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Re,Ie,he[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,Oe,Re,Ie,he[ne]);for(let Ce=0;Ce<xe.length;Ce++){let we=xe[Ce];F?j&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,0,0,Re,Ie,we.image[ne]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,Ce+1,Oe,Re,Ie,we.image[ne])}}}p(v)&&T(i.TEXTURE_CUBE_MAP),ie.__version=K.version,v.onUpdate&&v.onUpdate(v)}I.__version=v.version}function _e(I,v,B,X,K,ie){let ae=r.convert(B.format,B.colorSpace),J=r.convert(B.type),ee=y(B.internalFormat,ae,J,B.normalized,B.colorSpace),oe=n.get(v),Ee=n.get(B);if(Ee.__renderTarget=v,!oe.__hasExternalTextures){let he=Math.max(1,v.width>>ie),ce=Math.max(1,v.height>>ie);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,ie,ee,he,ce,v.depth,0,ae,J,null):t.texImage2D(K,ie,ee,he,ce,0,ae,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,I),Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Ee.__webglTexture,0,xt(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Ee.__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function se(I,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,I),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,ie=M(v.stencilBuffer,K),ae=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(v),ie,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(v),ie,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ie,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ae,i.RENDERBUFFER,I)}else{let X=v.textures;for(let K=0;K<X.length;K++){let ie=X[K],ae=r.convert(ie.format,ie.colorSpace),J=r.convert(ie.type),ee=y(ie.internalFormat,ae,J,ie.normalized,ie.colorSpace);Tt(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,xt(v),ee,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,xt(v),ee,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ee,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Je(I,v,B){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,I),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),He(i.TEXTURE_CUBE_MAP,v.depthTexture);let oe=r.convert(v.depthTexture.format),Ee=r.convert(v.depthTexture.type),he;v.depthTexture.format===Nn?he=i.DEPTH_COMPONENT24:v.depthTexture.format===Ti&&(he=i.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,he,v.width,v.height,0,oe,Ee,null)}}else $(v.depthTexture,0);let ie=K.__webglTexture,ae=xt(v),J=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ee=v.depthTexture.format===Ti?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Nn)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ie,0);else if(v.depthTexture.format===Ti)Tt(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,J,ie,0,ae):i.framebufferTexture2D(i.FRAMEBUFFER,ee,J,ie,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Le(I){let v=n.get(I),B=I.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==I.depthTexture){let X=I.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(I.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let X=0;X<6;X++)Je(v.__webglFramebuffer[X],I,X);else{let X=I.texture.mipmaps;X&&X.length>0?Je(v.__webglFramebuffer[0],I,0):Je(v.__webglFramebuffer,I,0)}else if(B){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),se(v.__webglDepthbuffer[X],I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}else{let X=I.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),se(v.__webglDepthbuffer,I,!1);else{let K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ie)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Xe(I,v,B){let X=n.get(I);v!==void 0&&_e(X.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Le(I)}function ut(I){let v=I.texture,B=n.get(I),X=n.get(v);I.addEventListener("dispose",x);let K=I.textures,ie=I.isWebGLCubeRenderTarget===!0,ae=K.length>1;if(ae||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),ie){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let ee=0;ee<v.mipmaps.length;ee++)B.__webglFramebuffer[J][ee]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ae)for(let J=0,ee=K.length;J<ee;J++){let oe=n.get(K[J]);oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture(),a.memory.textures++)}if(I.samples>0&&Tt(I)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<K.length;J++){let ee=K[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let oe=r.convert(ee.format,ee.colorSpace),Ee=r.convert(ee.type),he=y(ee.internalFormat,oe,Ee,ee.normalized,ee.colorSpace,I.isXRRenderTarget===!0),ce=xt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,he,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),se(B.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),He(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)_e(B.__webglFramebuffer[J][ee],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ee);else _e(B.__webglFramebuffer[J],I,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);p(v)&&T(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ae){for(let J=0,ee=K.length;J<ee;J++){let oe=K[J],Ee=n.get(oe),he=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(he=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(he,Ee.__webglTexture),He(he,oe),_e(B.__webglFramebuffer,I,oe,i.COLOR_ATTACHMENT0+J,he,0),p(oe)&&T(he)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(J=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,X.__webglTexture),He(J,v),v.mipmaps&&v.mipmaps.length>0)for(let ee=0;ee<v.mipmaps.length;ee++)_e(B.__webglFramebuffer[ee],I,v,i.COLOR_ATTACHMENT0,J,ee);else _e(B.__webglFramebuffer,I,v,i.COLOR_ATTACHMENT0,J,0);p(v)&&T(J),t.unbindTexture()}I.depthBuffer&&Le(I)}function Ze(I){let v=I.textures;for(let B=0,X=v.length;B<X;B++){let K=v[B];if(p(K)){let ie=R(I),ae=n.get(K).__webglTexture;t.bindTexture(ie,ae),T(ie),t.unbindTexture()}}}let mt=[],Lt=[];function $t(I){if(I.samples>0){if(Tt(I)===!1){let v=I.textures,B=I.width,X=I.height,K=i.COLOR_BUFFER_BIT,ie=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(I),J=v.length>1;if(J)for(let oe=0;oe<v.length;oe++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer);let ee=I.texture.mipmaps;ee&&ee.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let oe=0;oe<v.length;oe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Ee=n.get(v[oe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ee,0)}i.blitFramebuffer(0,0,B,X,0,0,B,X,K,i.NEAREST),c===!0&&(mt.length=0,Lt.length=0,mt.push(i.COLOR_ATTACHMENT0+oe),I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&(mt.push(ie),Lt.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Lt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let oe=0;oe<v.length;oe++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,ae.__webglColorRenderbuffer[oe]);let Ee=n.get(v[oe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.TEXTURE_2D,Ee,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.storeMultisampledDepthBuffer===!1&&c){let v=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function xt(I){return Math.min(s.maxSamples,I.samples)}function Tt(I){let v=n.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function O(I){let v=a.render.frame;h.get(I)!==v&&(h.set(I,v),I.update())}function Ot(I,v){let B=I.colorSpace,X=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||B!==zt&&B!==ri&&(We.getTransfer(B)===it?(X!==Jt||K!==sn)&&Te("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Pe("WebGLTextures: Unsupported texture color space:",B)),v}function rt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(l.width=I.naturalWidth||I.width,l.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(l.width=I.displayWidth,l.height=I.displayHeight):(l.width=I.width,l.height=I.height),l}this.allocateTextureUnit=k,this.resetTextureUnits=L,this.getTextureUnits=z,this.setTextureUnits=D,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=Y,this.setTextureCube=Q,this.rebindTextures=Xe,this.setupRenderTarget=ut,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=$t,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Tt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function v_(i,e){function t(n,s=ri){let r,a=We.getTransfer(s);if(n===sn)return i.UNSIGNED_BYTE;if(n===oo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===co)return i.UNSIGNED_SHORT_5_5_5_1;if(n===fl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===hl)return i.BYTE;if(n===dl)return i.SHORT;if(n===Ds)return i.UNSIGNED_SHORT;if(n===ao)return i.INT;if(n===Rn)return i.UNSIGNED_INT;if(n===Ht)return i.FLOAT;if(n===Kt)return i.HALF_FLOAT;if(n===ml)return i.ALPHA;if(n===gl)return i.RGB;if(n===Jt)return i.RGBA;if(n===Nn)return i.DEPTH_COMPONENT;if(n===Ti)return i.DEPTH_STENCIL;if(n===lo)return i.RED;if(n===uo)return i.RED_INTEGER;if(n===Ai)return i.RG;if(n===ho)return i.RG_INTEGER;if(n===fo)return i.RGBA_INTEGER;if(n===Or||n===Br||n===kr||n===Vr)if(a===it)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Or)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Br)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===po||n===mo||n===go||n===xo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===mo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===go)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===_o||n===yo||n===vo||n===Mo||n===So||n===Gr||n===bo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===_o||n===yo)return a===it?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Mo)return r.COMPRESSED_R11_EAC;if(n===So)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Gr)return r.COMPRESSED_RG11_EAC;if(n===bo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wo||n===To||n===Ao||n===Eo||n===Ro||n===Co||n===zo||n===Io||n===Po||n===Lo||n===No||n===Do||n===Uo||n===Fo)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===To)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Eo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===zo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Po)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===No)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Do)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Uo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Fo)return a===it?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Oo||n===Bo||n===ko)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Oo)return a===it?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Go||n===Hr||n===Ho)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Hr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Us?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var M_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,S_=`
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

}`,Wl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Mr(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new ln({vertexShader:M_,fragmentShader:S_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Fe(new vi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Xl=class extends Dn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,f=null,d=null,u=null,m=null,_=typeof XRWebGLBinding<"u",g=new Wl,p={},T=t.getContextAttributes(),R=null,y=null,M=[],w=[],E=new de,x=null,S=null,C=new Rt;C.viewport=new $e;let A=new Rt;A.viewport=new $e;let P=[C,A],L=new no,z=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let te=M[Z];return te===void 0&&(te=new bs,M[Z]=te),te.getTargetRaySpace()},this.getControllerGrip=function(Z){let te=M[Z];return te===void 0&&(te=new bs,M[Z]=te),te.getGripSpace()},this.getHand=function(Z){let te=M[Z];return te===void 0&&(te=new bs,M[Z]=te),te.getHandSpace()};function k(Z){let te=w.indexOf(Z.inputSource);if(te===-1)return;let ye=M[te];ye!==void 0&&(ye.update(Z.inputSource,Z.frame,l||a),ye.dispatchEvent({type:Z.type,data:Z.inputSource}))}function V(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",$);for(let Z=0;Z<M.length;Z++){let te=w[Z];te!==null&&(w[Z]=null,M[Z].disconnect(te))}z=null,D=null,g.reset();for(let Z in p)delete p[Z];if(e.setRenderTarget(R),u=null,d=null,f=null,s=null,y=null,Ke.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),S!==null){let Z=S.camera;Z.fov=S.fov,Z.zoom=S.zoom,Z.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Te("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Z){l=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(R=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",V),s.addEventListener("inputsourceschange",$),T.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ne=null,_e=null;T.depth&&(_e=T.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=T.stencil?Ti:Nn,Ne=T.stencil?Us:Rn);let se={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=this.getBinding(),d=f.createProjectionLayer(se),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Qt(d.textureWidth,d.textureHeight,{format:Jt,type:sn,depthTexture:new _i(d.textureWidth,d.textureHeight,Ne,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:T.stencil,colorSpace:e.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ye={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),y=new Qt(u.framebufferWidth,u.framebufferHeight,{format:Jt,type:sn,colorSpace:e.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Ke.setContext(s),Ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function $(Z){for(let te=0;te<Z.removed.length;te++){let ye=Z.removed[te],Ne=w.indexOf(ye);Ne>=0&&(w[Ne]=null,M[Ne].disconnect(ye))}for(let te=0;te<Z.added.length;te++){let ye=Z.added[te],Ne=w.indexOf(ye);if(Ne===-1){for(let se=0;se<M.length;se++)if(se>=w.length){w.push(ye),Ne=se;break}else if(w[se]===null){w[se]=ye,Ne=se;break}if(Ne===-1)break}let _e=M[Ne];_e&&_e.connect(ye)}}let W=new N,Y=new N;function Q(Z,te,ye){W.setFromMatrixPosition(te.matrixWorld),Y.setFromMatrixPosition(ye.matrixWorld);let Ne=W.distanceTo(Y),_e=te.projectionMatrix.elements,se=ye.projectionMatrix.elements,Je=_e[14]/(_e[10]-1),Le=_e[14]/(_e[10]+1),Xe=(_e[9]+1)/_e[5],ut=(_e[9]-1)/_e[5],Ze=(_e[8]-1)/_e[0],mt=(se[8]+1)/se[0],Lt=Je*Ze,$t=Je*mt,xt=Ne/(-Ze+mt),Tt=xt*-Ze;if(te.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Tt),Z.translateZ(xt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),_e[10]===-1)Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let O=Je+xt,Ot=Le+xt,rt=Lt-Tt,I=$t+(Ne-Tt),v=Xe*Le/Ot*O,B=ut*Le/Ot*O;Z.projectionMatrix.makePerspective(rt,I,v,B,O,Ot),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function re(Z,te){te===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(te.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let te=Z.near,ye=Z.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ye=g.depthFar)),L.near=A.near=C.near=te,L.far=A.far=C.far=ye,(z!==L.near||D!==L.far)&&(s.updateRenderState({depthNear:L.near,depthFar:L.far}),z=L.near,D=L.far),L.layers.mask=Z.layers.mask|6,C.layers.mask=L.layers.mask&-5,A.layers.mask=L.layers.mask&-3;let Ne=Z.parent,_e=L.cameras;re(L,Ne);for(let se=0;se<_e.length;se++)re(_e[se],Ne);_e.length===2?Q(L,C,A):L.projectionMatrix.copy(C.projectionMatrix),S===null&&Z.isPerspectiveCamera&&(S={camera:Z,fov:Z.fov,zoom:Z.zoom}),ge(Z,L,Ne)};function ge(Z,te,ye){ye===null?Z.matrix.copy(te.matrixWorld):(Z.matrix.copy(ye.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(te.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(te.projectionMatrix),Z.projectionMatrixInverse.copy(te.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Oi*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return L},this.getFoveation=function(){if(!(d===null&&u===null))return c},this.setFoveation=function(Z){c=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(L)},this.getCameraTexture=function(Z){return p[Z]};let je=null;function He(Z,te){if(h=te.getViewerPose(l||a),m=te,h!==null){let ye=h.views;u!==null&&(e.setRenderTargetFramebuffer(y,u.framebuffer),e.setRenderTarget(y));let Ne=!1;ye.length!==L.cameras.length&&(L.cameras.length=0,Ne=!0);for(let Le=0;Le<ye.length;Le++){let Xe=ye[Le],ut=null;if(u!==null)ut=u.getViewport(Xe);else{let mt=f.getViewSubImage(d,Xe);ut=mt.viewport,Le===0&&(e.setRenderTargetTextures(y,mt.colorTexture,mt.depthStencilTexture),e.setRenderTarget(y))}let Ze=P[Le];Ze===void 0&&(Ze=new Rt,Ze.layers.enable(Le),Ze.viewport=new $e,P[Le]=Ze),Ze.matrix.fromArray(Xe.transform.matrix),Ze.matrix.decompose(Ze.position,Ze.quaternion,Ze.scale),Ze.projectionMatrix.fromArray(Xe.projectionMatrix),Ze.projectionMatrixInverse.copy(Ze.projectionMatrix).invert(),Ze.viewport.set(ut.x,ut.y,ut.width,ut.height),Le===0&&(L.matrix.copy(Ze.matrix),L.matrix.decompose(L.position,L.quaternion,L.scale)),Ne===!0&&L.cameras.push(Ze)}let _e=s.enabledFeatures;if(_e&&_e.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){f=n.getBinding();let Le=f.getDepthInformation(ye[0]);Le&&Le.isValid&&Le.texture&&g.init(Le,s.renderState)}if(_e&&_e.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Le=0;Le<ye.length;Le++){let Xe=ye[Le].camera;if(Xe){let ut=p[Xe];ut||(ut=new Mr,p[Xe]=ut);let Ze=f.getCameraImage(Xe);ut.sourceTexture=Ze}}}}for(let ye=0;ye<M.length;ye++){let Ne=w[ye],_e=M[ye];Ne!==null&&_e!==void 0&&_e.update(Ne,te,l||a)}je&&je(Z,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}let Ke=new Dd;Ke.setAnimationLoop(He),this.setAnimationLoop=function(Z){je=Z},this.dispose=function(){}}},b_=new De,Vd=new Ue;Vd.set(-1,0,0,0,1,0,0,0,1);function w_(i,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,Sl(i)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,T,R,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(g,p):p.isMeshLambertMaterial?(r(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(g,p),f(g,p)):p.isMeshPhongMaterial?(r(g,p),h(g,p),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(g,p),d(g,p),p.isMeshPhysicalMaterial&&u(g,p,y)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),_(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?c(g,p,T,R):p.isSpriteMaterial?l(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===Zt&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===Zt&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let T=e.get(p),R=T.envMap,y=T.envMapRotation;R&&(g.envMap.value=R,g.envMapRotation.value.setFromMatrix4(b_.makeRotationFromEuler(y)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Vd),g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function c(g,p,T,R){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*T,g.scale.value=R*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function l(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function f(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function u(g,p,T){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Zt&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.retroreflectivity>0&&(g.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=T.texture,g.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function _(g,p){let T=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(T.matrixWorld),g.nearDistance.value=T.shadow.camera.near,g.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function T_(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let w=M.program;n.uniformBlockBinding(y,w)}function l(y,M){let w=s[y.id];w===void 0&&(g(y),w=h(y),s[y.id]=w,y.addEventListener("dispose",T));let E=M.program;n.updateUBOMapping(y,E);let x=e.render.frame;r[y.id]!==x&&(d(y),r[y.id]=x)}function h(y){let M=f();y.__bindingPointIndex=M;let w=i.createBuffer(),E=y.__size,x=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,w),w}function f(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Pe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let M=s[y.id],w=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let x=0,S=w.length;x<S;x++){let C=w[x];if(Array.isArray(C))for(let A=0,P=C.length;A<P;A++)u(C[A],x,A,E);else u(C,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(y,M,w,E){if(_(y,M,w,E)===!0){let x=y.__offset,S=y.value;if(Array.isArray(S)){let C=0;for(let A=0;A<S.length;A++){let P=S[A],L=p(P);m(P,y.__data,C),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(C+=L.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,y.__data)}}function m(y,M,w){typeof y=="number"||typeof y=="boolean"?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,w)}function _(y,M,w,E){let x=y.value,S=M+"_"+w;if(E[S]===void 0)return typeof x=="number"||typeof x=="boolean"?E[S]=x:ArrayBuffer.isView(x)?E[S]=x.slice():E[S]=x.clone(),!0;{let C=E[S];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return E[S]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function g(y){let M=y.uniforms,w=0,E=16;for(let S=0,C=M.length;S<C;S++){let A=Array.isArray(M[S])?M[S]:[M[S]];for(let P=0,L=A.length;P<L;P++){let z=A[P],D=Array.isArray(z.value)?z.value:[z.value];for(let k=0,V=D.length;k<V;k++){let $=D[k],W=p($),Y=w%E,Q=Y%W.boundary,re=Y+Q;w+=Q,re!==0&&E-re<W.storage&&(w+=E-re),z.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=w,w+=W.storage}}}let x=w%E;return x>0&&(w+=E-x),y.__size=w,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?Te("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):Te("WebGLRenderer: Unsupported uniform value type.",y),M}function T(y){let M=y.target;M.removeEventListener("dispose",T);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function R(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:R}}var A_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),On=null;function E_(){return On===null&&(On=new pn(A_,16,16,Ai,Kt),On.name="DFG_LUT",On.minFilter=et,On.magFilter=et,On.wrapS=jt,On.wrapT=jt,On.generateMipmaps=!1,On.needsUpdate=!0),On}var Jo=class{constructor(e={}){let{canvas:t=ad(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:u=sn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=u,g=new Set([fo,ho,uo]),p=new Set([sn,Rn,Ds,Us,oo,co]),T=new Uint32Array(4),R=new Int32Array(4),y=new N,M=null,w=null,E=[],x=[],S=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=En,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,A=!1,P=null,L=null,z=null,D=null;this._outputColorSpace=vt;let k=0,V=0,$=null,W=-1,Y=null,Q=new $e,re=new $e,ge=null,je=new ze(0),He=0,Ke=t.width,Z=t.height,te=1,ye=null,Ne=null,_e=new $e(0,0,Ke,Z),se=new $e(0,0,Ke,Z),Je=!1,Le=new Es,Xe=!1,ut=!1,Ze=new De,mt=new N,Lt=new $e,$t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},xt=!1;function Tt(){return $===null?te:1}let O=n;function Ot(b,U){return t.getContext(b,U)}let rt,I,v,B,X,K,ie,ae,J,ee,oe,Ee,he,ce,Re,Ie,Oe,F,le,j,ue,xe,ne;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",ht,!1),t.addEventListener("webglcontextrestored",tt,!1),t.addEventListener("webglcontextcreationerror",xn,!1),O===null){let U="webgl2";if(O=Ot(U,b),O===null)throw Ot(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ce()}catch(b){throw t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Pe("WebGLRenderer: "+b.message),b}function Ce(){rt=new N0(O),rt.init(),ue=new v_(O,rt),I=new w0(O,rt,e,ue),v=new __(O,rt),I.reversedDepthBuffer&&d&&v.buffers.depth.setReversed(!0),L=O.createFramebuffer(),z=O.createFramebuffer(),D=O.createFramebuffer(),B=new F0(O),X=new s_,K=new y_(O,rt,v,X,I,ue,B),ie=new L0(C),ae=new Bp(O),xe=new S0(O,ae),J=new D0(O,ae,B,xe),ee=new B0(O,J,ae,xe,B),F=new O0(O,I,K),Re=new T0(X),oe=new i_(C,ie,rt,I,xe,Re),Ee=new w_(C,X),he=new a_,ce=new d_(rt),Oe=new M0(C,ie,v,ee,m,c),Ie=new x_(C,ee,I),ne=new T_(O,B,I,v),le=new b0(O,rt,B),j=new U0(O,rt,B),B.programs=oe.programs,C.capabilities=I,C.extensions=rt,C.properties=X,C.renderLists=he,C.shadowMap=Ie,C.state=v,C.info=B}_!==sn&&(S=new V0(_,t.width,t.height,o,s,r));let we=new Xl(C,O);this.xr=we,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let b=rt.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=rt.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(b){b!==void 0&&(te=b,this.setSize(Ke,Z,!1))},this.getSize=function(b){return b.set(Ke,Z)},this.setSize=function(b,U,q=!0){if(we.isPresenting){Te("WebGLRenderer: Can't change size while VR device is presenting.");return}Ke=b,Z=U,t.width=Math.floor(b*te),t.height=Math.floor(U*te),q===!0&&(t.style.width=b+"px",t.style.height=U+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,U)},this.getDrawingBufferSize=function(b){return b.set(Ke*te,Z*te).floor()},this.setDrawingBufferSize=function(b,U,q){Ke=b,Z=U,te=q,t.width=Math.floor(b*q),t.height=Math.floor(U*q),this.setViewport(0,0,b,U)},this.setEffects=function(b){if(_===sn){Pe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let U=0;U<b.length;U++)if(b[U].isOutputPass===!0){Te("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(Q)},this.getViewport=function(b){return b.copy(_e)},this.setViewport=function(b,U,q,G){b.isVector4?_e.set(b.x,b.y,b.z,b.w):_e.set(b,U,q,G),v.viewport(Q.copy(_e).multiplyScalar(te).round())},this.getScissor=function(b){return b.copy(se)},this.setScissor=function(b,U,q,G){b.isVector4?se.set(b.x,b.y,b.z,b.w):se.set(b,U,q,G),v.scissor(re.copy(se).multiplyScalar(te).round())},this.getScissorTest=function(){return Je},this.setScissorTest=function(b){v.setScissorTest(Je=b)},this.setOpaqueSort=function(b){ye=b},this.setTransparentSort=function(b){Ne=b},this.getClearColor=function(b){return b.copy(Oe.getClearColor())},this.setClearColor=function(){Oe.setClearColor(...arguments)},this.getClearAlpha=function(){return Oe.getClearAlpha()},this.setClearAlpha=function(){Oe.setClearAlpha(...arguments)},this.clear=function(b=!0,U=!0,q=!0){let G=0;if(b){let H=!1;if($!==null){let me=$.texture.format;H=g.has(me)}if(H){let me=$.texture.type,Me=p.has(me),pe=Oe.getClearColor(),Se=Oe.getClearAlpha(),Ae=pe.r,Ve=pe.g,Ye=pe.b;Me?(T[0]=Ae,T[1]=Ve,T[2]=Ye,T[3]=Se,O.clearBufferuiv(O.COLOR,0,T)):(R[0]=Ae,R[1]=Ve,R[2]=Ye,R[3]=Se,O.clearBufferiv(O.COLOR,0,R))}else G|=O.COLOR_BUFFER_BIT}U&&(G|=O.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),q&&(G|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),G!==0&&O.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),P=b},this.dispose=function(){t.removeEventListener("webglcontextlost",ht,!1),t.removeEventListener("webglcontextrestored",tt,!1),t.removeEventListener("webglcontextcreationerror",xn,!1),Oe.dispose(),he.dispose(),ce.dispose(),X.dispose(),ie.dispose(),ee.dispose(),xe.dispose(),ne.dispose(),oe.dispose(),we.dispose(),we.removeEventListener("sessionstart",Au),we.removeEventListener("sessionend",Eu),Ci.stop()};function ht(b){b.preventDefault(),cr("WebGLRenderer: Context Lost."),A=!0}function tt(){cr("WebGLRenderer: Context Restored."),A=!1;let b=B.autoReset,U=Ie.enabled,q=Ie.autoUpdate,G=Ie.needsUpdate,H=Ie.type;Ce(),B.autoReset=b,Ie.enabled=U,Ie.autoUpdate=q,Ie.needsUpdate=G,Ie.type=H}function xn(b){Pe("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function zn(b){let U=b.target;U.removeEventListener("dispose",zn),hf(U)}function hf(b){df(b),X.remove(b)}function df(b){let U=X.get(b).programs;U!==void 0&&(U.forEach(function(q){oe.releaseProgram(q)}),b.isShaderMaterial&&oe.releaseShaderCache(b))}this.renderBufferDirect=function(b,U,q,G,H,me){U===null&&(U=$t);let Me=H.isMesh&&H.matrixWorld.determinantAffine()<0,pe=mf(b,U,q,G,H);v.setMaterial(G,Me);let Se=q.index,Ae=1;if(G.wireframe===!0){if(Se=J.getWireframeAttribute(q),Se===void 0)return;Ae=2}let Ve=q.drawRange,Ye=q.attributes.position,be=Ve.start*Ae,nt=(Ve.start+Ve.count)*Ae;me!==null&&(be=Math.max(be,me.start*Ae),nt=Math.min(nt,(me.start+me.count)*Ae)),Se!==null?(be=Math.max(be,0),nt=Math.min(nt,Se.count)):Ye!=null&&(be=Math.max(be,0),nt=Math.min(nt,Ye.count));let At=nt-be;if(At<0||At===1/0)return;xe.setup(H,G,pe,q,Se);let pt,ct=le;if(Se!==null&&(pt=ae.get(Se),ct=j,ct.setIndex(pt)),H.isMesh)G.wireframe===!0?(v.setLineWidth(G.wireframeLinewidth*Tt()),ct.setMode(O.LINES)):ct.setMode(O.TRIANGLES);else if(H.isLine){let Bt=G.linewidth;Bt===void 0&&(Bt=1),v.setLineWidth(Bt*Tt()),H.isLineSegments?ct.setMode(O.LINES):H.isLineLoop?ct.setMode(O.LINE_LOOP):ct.setMode(O.LINE_STRIP)}else H.isPoints?ct.setMode(O.POINTS):H.isSprite&&ct.setMode(O.TRIANGLES);if(H.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))ct.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Bt=H._multiDrawStarts,ve=H._multiDrawCounts,Xt=H._multiDrawCount,Qe=Se?ae.get(Se).bytesPerElement:1,hn=X.get(G).currentProgram.getUniforms();for(let In=0;In<Xt;In++)hn.setValue(O,"_gl_DrawID",In),ct.render(Bt[In]/Qe,ve[In])}else if(H.isInstancedMesh)ct.renderInstances(be,At,H.count);else if(q.isInstancedBufferGeometry){let Bt=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ve=Math.min(q.instanceCount,Bt);ct.renderInstances(be,At,ve)}else ct.render(be,At)};function Tu(b,U,q,G){P!==null&&b.isNodeMaterial&&P.setObject(G,b),Xe===!0&&Re.setState(b,q,!1),b.transparent===!0&&b.side===Gt&&b.forceSinglePass===!1?(b.side=Zt,b.needsUpdate=!0,Jr(b,U,G),b.side=Dt,b.needsUpdate=!0,Jr(b,U,G),b.side=Gt):Jr(b,U,G)}this.compile=function(b,U,q=null){q===null&&(q=b),P!==null&&P.renderStart(b,U,q),w=ce.get(q),w.init(U),x.push(w),q.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),b!==q&&b.traverseVisible(function(H){H.isLight&&H.layers.test(U.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),ut=this.localClippingEnabled,Xe=Re.init(this.clippingPlanes,ut),Xe===!0&&Re.setGlobalState(this.clippingPlanes,U),P!==null&&Ie.render(w.state.shadowsArray,q,U);let G=new Set;return b.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let me=H.material;if(me)if(Array.isArray(me))for(let Me=0;Me<me.length;Me++){let pe=me[Me];Tu(pe,q,U,H),G.add(pe)}else Tu(me,q,U,H),G.add(me)}),w=x.pop(),P!==null&&P.renderEnd(),G},this.compileAsync=function(b,U,q=null){let G=this.compile(b,U,q);return new Promise(H=>{function me(){if(G.forEach(function(Me){let Se=X.get(Me).currentProgram;(Se===void 0||Se.isReady())&&G.delete(Me)}),G.size===0){H(b);return}setTimeout(me,10)}rt.get("KHR_parallel_shader_compile")!==null?me():setTimeout(me,10)})};let lc=null;function ff(b){lc&&lc(b)}function Au(){Ci.stop()}function Eu(){Ci.start()}let Ci=new Dd;Ci.setAnimationLoop(ff),typeof self<"u"&&Ci.setContext(self),this.setAnimationLoop=function(b){lc=b,we.setAnimationLoop(b),b===null?Ci.stop():Ci.start()},we.addEventListener("sessionstart",Au),we.addEventListener("sessionend",Eu),this.render=function(b,U){if(U!==void 0&&U.isCamera!==!0){Pe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;P!==null&&P.renderStart(b,U);let q=we.enabled===!0&&we.isPresenting===!0,G=S!==null&&($===null||q)&&S.begin(C,$);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),we.enabled===!0&&we.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(we.cameraAutoUpdate===!0&&we.updateCamera(U),U=we.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,U,$),w=ce.get(b,x.length),w.init(U),w.state.textureUnits=K.getTextureUnits(),x.push(w),Ze.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Le.setFromProjectionMatrix(Ze,bn,U.reversedDepth),ut=this.localClippingEnabled,Xe=Re.init(this.clippingPlanes,ut),M=he.get(b,E.length),M.init(),E.push(M),we.enabled===!0&&we.isPresenting===!0){let Me=C.xr.getDepthSensingMesh();Me!==null&&uc(Me,U,-1/0,C.sortObjects)}uc(b,U,0,C.sortObjects),M.finish(),P!==null&&P.updateLights(w.state.lightsArray),C.sortObjects===!0&&M.sort(ye,Ne),xt=we.enabled===!1||we.isPresenting===!1||we.hasDepthSensing()===!1,xt&&Oe.addToRenderList(M,b),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Xe===!0&&Re.beginShadows();let H=w.state.shadowsArray;if(Ie.render(H,b,U),Xe===!0&&Re.endShadows(),(G&&S.hasRenderPass())===!1){let Me=M.opaque,pe=M.transmissive;if(w.setupLights(),U.isArrayCamera){let Se=U.cameras;if(pe.length>0)for(let Ae=0,Ve=Se.length;Ae<Ve;Ae++){let Ye=Se[Ae];Cu(Me,pe,b,Ye)}xt&&Oe.render(b);for(let Ae=0,Ve=Se.length;Ae<Ve;Ae++){let Ye=Se[Ae];Ru(M,b,Ye,Ye.viewport)}}else pe.length>0&&Cu(Me,pe,b,U),xt&&Oe.render(b),Ru(M,b,U)}$!==null&&V===0&&(K.updateMultisampleRenderTarget($),K.updateRenderTargetMipmap($)),G&&S.end(C),b.isScene===!0&&b.onAfterRender(C,b,U),xe.resetDefaultState(),W=-1,Y=null,x.pop(),x.length>0?(w=x[x.length-1],K.setTextureUnits(w.state.textureUnits),Xe===!0&&Re.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,E.pop(),E.length>0?M=E[E.length-1]:M=null,P!==null&&P.renderEnd()};function uc(b,U,q,G){if(b.visible===!1)return;if(b.layers.test(U.layers)){if(b.isGroup)q=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(U);else if(b.isLightProbeGrid)w.pushLightProbeGrid(b);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||b.intersectsFrustum(Le)){G&&Lt.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ze);let Me=ee.update(b),pe=b.material;pe.visible&&M.push(b,Me,pe,q,Lt.z,null,U)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||b.intersectsFrustum(Le))){let Me=ee.update(b),pe=b.material;if(G&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Lt.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Lt.copy(Me.boundingSphere.center)),Lt.applyMatrix4(b.matrixWorld).applyMatrix4(Ze)),Array.isArray(pe)){let Se=Me.groups;for(let Ae=0,Ve=Se.length;Ae<Ve;Ae++){let Ye=Se[Ae],be=pe[Ye.materialIndex];be&&be.visible&&M.push(b,Me,be,q,Lt.z,Ye,U)}}else pe.visible&&M.push(b,Me,pe,q,Lt.z,null,U)}}let me=b.children;for(let Me=0,pe=me.length;Me<pe;Me++)uc(me[Me],U,q,G)}function Ru(b,U,q,G){let{opaque:H,transmissive:me,transparent:Me}=b;w.setupLightsView(q),Xe===!0&&Re.setGlobalState(C.clippingPlanes,q),G&&v.viewport(Q.copy(G)),H.length>0&&Kr(H,U,q),me.length>0&&Kr(me,U,q),Me.length>0&&Kr(Me,U,q),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Cu(b,U,q,G){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[G.id]===void 0){let be=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[G.id]=new Qt(1,1,{generateMipmaps:!0,type:be?Kt:sn,minFilter:nn,samples:Math.max(4,I.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let me=w.state.transmissionRenderTarget[G.id],Me=G.viewport||Q;me.setSize(Me.z*C.transmissionResolutionScale,Me.w*C.transmissionResolutionScale);let pe=C.getRenderTarget(),Se=C.getActiveCubeFace(),Ae=C.getActiveMipmapLevel();C.setRenderTarget(me),C.getClearColor(je),He=C.getClearAlpha(),He<1&&C.setClearColor(16777215,.5),C.clear(),xt&&Oe.render(q);let Ve=C.toneMapping;C.toneMapping=En;let Ye=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),w.setupLightsView(G),Xe===!0&&Re.setGlobalState(C.clippingPlanes,G),Kr(b,q,G),K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me),rt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let nt=0,At=U.length;nt<At;nt++){let pt=U[nt],{object:ct,geometry:Bt,material:ve,group:Xt}=pt;if(ve.side===Gt&&ct.layers.test(G.layers)){let Qe=ve.side;ve.side=Zt,ve.needsUpdate=!0,zu(ct,q,G,Bt,ve,Xt),ve.side=Qe,ve.needsUpdate=!0,be=!0}}be===!0&&(K.updateMultisampleRenderTarget(me),K.updateRenderTargetMipmap(me))}C.setRenderTarget(pe,Se,Ae),C.setClearColor(je,He),Ye!==void 0&&(G.viewport=Ye),C.toneMapping=Ve}function Kr(b,U,q){let G=U.isScene===!0?U.overrideMaterial:null;for(let H=0,me=b.length;H<me;H++){let Me=b[H],{object:pe,geometry:Se,group:Ae}=Me,Ve=Me.material;Ve.allowOverride===!0&&G!==null&&(Ve=G),pe.layers.test(q.layers)&&zu(pe,U,q,Se,Ve,Ae)}}function zu(b,U,q,G,H,me){P!==null&&H.isNodeMaterial&&P.setObject(b,H),b.onBeforeRender(C,U,q,G,H,me),b.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),H.onBeforeRender(C,U,q,G,b,me),H.transparent===!0&&H.side===Gt&&H.forceSinglePass===!1?(H.side=Zt,H.needsUpdate=!0,C.renderBufferDirect(q,U,G,H,b,me),H.side=Dt,H.needsUpdate=!0,C.renderBufferDirect(q,U,G,H,b,me),H.side=Gt):C.renderBufferDirect(q,U,G,H,b,me),b.onAfterRender(C,U,q,G,H,me)}function Jr(b,U,q){U.isScene!==!0&&(U=$t);let G=X.get(b),H=w.state.lights,me=w.state.shadowsArray,Me=H.state.version,pe=oe.getParameters(b,H.state,me,U,q,w.state.lightProbeGridArray),Se=oe.getProgramCacheKey(pe),Ae=G.programs;G.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?U.environment:null,G.fog=U.fog;let Ve=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;G.envMap=ie.get(b.envMap||G.environment,Ve),G.envMapRotation=G.environment!==null&&b.envMap===null?U.environmentRotation:b.envMapRotation,Ae===void 0&&(b.addEventListener("dispose",zn),Ae=new Map,G.programs=Ae);let Ye=Ae.get(Se);if(Ye!==void 0){if(G.currentProgram===Ye&&G.lightsStateVersion===Me)return Pu(b,pe),Ye}else pe.uniforms=oe.getUniforms(b),P!==null&&b.isNodeMaterial&&P.build(b,q,pe),b.onBeforeCompile(pe,C),Ye=oe.acquireProgram(pe,Se),Ae.set(Se,Ye),G.uniforms=pe.uniforms;let be=G.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(be.clippingPlanes=Re.uniform),Pu(b,pe),G.needsLights=xf(b),G.lightsStateVersion=Me,G.needsLights&&(be.ambientLightColor.value=H.state.ambient,be.lightProbe.value=H.state.probe,be.sunLights.value=H.state.sun,be.sunLightShadows.value=H.state.sunShadow,be.directionalLights.value=H.state.directional,be.directionalLightShadows.value=H.state.directionalShadow,be.spotLights.value=H.state.spot,be.spotLightShadows.value=H.state.spotShadow,be.rectAreaLights.value=H.state.rectArea,be.ltc_1.value=H.state.rectAreaLTC1,be.ltc_2.value=H.state.rectAreaLTC2,be.pointLights.value=H.state.point,be.pointLightShadows.value=H.state.pointShadow,be.hemisphereLights.value=H.state.hemi,be.sunShadowMatrix.value=H.state.sunShadowMatrix,be.sunShadowCascade.value=H.state.sunShadowCascade,be.directionalShadowMatrix.value=H.state.directionalShadowMatrix,be.spotLightMatrix.value=H.state.spotLightMatrix,be.spotLightMap.value=H.state.spotLightMap,be.pointShadowMatrix.value=H.state.pointShadowMatrix),G.lightProbeGrid=w.state.lightProbeGridArray.length>0,G.currentProgram=Ye,G.uniformsList=null,Ye}function Iu(b){if(b.uniformsList===null){let U=b.currentProgram.getUniforms();b.uniformsList=Vs.seqWithValue(U.seq,b.uniforms)}return b.uniformsList}function Pu(b,U){let q=X.get(b);q.outputColorSpace=U.outputColorSpace,q.batching=U.batching,q.batchingColor=U.batchingColor,q.instancing=U.instancing,q.instancingColor=U.instancingColor,q.instancingMorph=U.instancingMorph,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function pf(b,U){if(b.length===0)return null;if(b.length===1)return b[0].texture!==null?b[0]:null;y.setFromMatrixPosition(U.matrixWorld);for(let q=0,G=b.length;q<G;q++){let H=b[q];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function mf(b,U,q,G,H){U.isScene!==!0&&(U=$t),K.resetTextureUnits();let me=U.fog,Me=G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial?U.environment:null,pe=$===null?C.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:We.workingColorSpace,Se=G.isMeshStandardMaterial||G.isMeshLambertMaterial&&!G.envMap||G.isMeshPhongMaterial&&!G.envMap,Ae=ie.get(G.envMap||Me,Se),Ve=G.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Ye=!!q.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!q.morphAttributes.position,nt=!!q.morphAttributes.normal,At=!!q.morphAttributes.color,pt=En;G.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(pt=C.toneMapping);let ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Bt=ct!==void 0?ct.length:0,ve=X.get(G),Xt=w.state.lights;if(Xe===!0&&(ut===!0||b!==Y)){let dt=b===Y&&G.id===W;Re.setState(G,b,dt)}let Qe=!1;G.version===ve.__version?(ve.needsLights&&ve.lightsStateVersion!==Xt.state.version||ve.outputColorSpace!==pe||H.isBatchedMesh&&ve.batching===!1||!H.isBatchedMesh&&ve.batching===!0||H.isBatchedMesh&&ve.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&ve.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&ve.instancing===!1||!H.isInstancedMesh&&ve.instancing===!0||H.isSkinnedMesh&&ve.skinning===!1||!H.isSkinnedMesh&&ve.skinning===!0||H.isInstancedMesh&&ve.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ve.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ve.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ve.instancingMorph===!1&&H.morphTexture!==null||ve.envMap!==Ae||G.fog===!0&&ve.fog!==me||ve.numClippingPlanes!==void 0&&(ve.numClippingPlanes!==Re.numPlanes||ve.numIntersection!==Re.numIntersection)||ve.vertexAlphas!==Ve||ve.vertexTangents!==Ye||ve.morphTargets!==be||ve.morphNormals!==nt||ve.morphColors!==At||ve.toneMapping!==pt||ve.morphTargetsCount!==Bt||!!ve.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(Qe=!0):(Qe=!0,ve.__version=G.version);let hn=ve.currentProgram;Qe===!0&&(hn=Jr(G,U,H),P&&G.isNodeMaterial&&P.onUpdateProgram(G,hn,ve));let In=!1,ai=!1,Qi=!1,ot=hn.getUniforms(),Mt=ve.uniforms;if(v.useProgram(hn.program)&&(In=!0,ai=!0,Qi=!0),G.id!==W&&(W=G.id,ai=!0),ve.needsLights){let dt=pf(w.state.lightProbeGridArray,H);ve.lightProbeGrid!==dt&&(ve.lightProbeGrid=dt,ai=!0)}if(In||Y!==b){v.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),ot.setValue(O,"projectionMatrix",b.projectionMatrix),ot.setValue(O,"viewMatrix",b.matrixWorldInverse);let ci=ot.map.cameraPosition;ci!==void 0&&ci.setValue(O,mt.setFromMatrixPosition(b.matrixWorld)),I.logarithmicDepthBuffer&&ot.setValue(O,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&ot.setValue(O,"isOrthographic",b.isOrthographicCamera===!0),Y!==b&&(Y=b,ai=!0,Qi=!0)}if(ve.needsLights&&(Xt.state.sunShadowMap.length>0&&ot.setValue(O,"sunShadowMap",Xt.state.sunShadowMap,K),Xt.state.directionalShadowMap.length>0&&ot.setValue(O,"directionalShadowMap",Xt.state.directionalShadowMap,K),Xt.state.spotShadowMap.length>0&&ot.setValue(O,"spotShadowMap",Xt.state.spotShadowMap,K),Xt.state.pointShadowMap.length>0&&ot.setValue(O,"pointShadowMap",Xt.state.pointShadowMap,K)),H.isSkinnedMesh){ot.setOptional(O,H,"bindMatrix"),ot.setOptional(O,H,"bindMatrixInverse");let dt=H.skeleton;dt&&(dt.boneTexture===null&&dt.computeBoneTexture(),ot.setValue(O,"boneTexture",dt.boneTexture,K))}H.isBatchedMesh&&(ot.setOptional(O,H,"batchingTexture"),ot.setValue(O,"batchingTexture",H._matricesTexture,K),ot.setOptional(O,H,"batchingIdTexture"),ot.setValue(O,"batchingIdTexture",H._indirectTexture,K),ot.setOptional(O,H,"batchingColorTexture"),H._colorsTexture!==null&&ot.setValue(O,"batchingColorTexture",H._colorsTexture,K));let oi=q.morphAttributes;if((oi.position!==void 0||oi.normal!==void 0||oi.color!==void 0)&&F.update(H,q,hn),(ai||ve.receiveShadow!==H.receiveShadow)&&(ve.receiveShadow=H.receiveShadow,ot.setValue(O,"receiveShadow",H.receiveShadow)),(G.isMeshStandardMaterial||G.isMeshLambertMaterial||G.isMeshPhongMaterial)&&G.envMap===null&&U.environment!==null&&(Mt.envMapIntensity.value=U.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=E_()),ai){if(ot.setValue(O,"toneMappingExposure",C.toneMappingExposure),ve.needsLights&&gf(Mt,Qi),me&&G.fog===!0&&Ee.refreshFogUniforms(Mt,me),Ee.refreshMaterialUniforms(Mt,G,te,Z,w.state.transmissionRenderTarget[b.id]),ve.needsLights&&ve.lightProbeGrid){let dt=ve.lightProbeGrid;Mt.probesSH.value=dt.texture,Mt.probesMin.value.copy(dt.boundingBox.min),Mt.probesMax.value.copy(dt.boundingBox.max),Mt.probesResolution.value.copy(dt.resolution)}Vs.upload(O,Iu(ve),Mt,K)}if(G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Vs.upload(O,Iu(ve),Mt,K),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&ot.setValue(O,"center",H.center),ot.setValue(O,"modelViewMatrix",H.modelViewMatrix),ot.setValue(O,"normalMatrix",H.normalMatrix),ot.setValue(O,"modelMatrix",H.matrixWorld),G.uniformsGroups!==void 0){let dt=G.uniformsGroups;for(let ci=0,es=dt.length;ci<es;ci++){let Nu=dt[ci];ne.update(Nu,hn),ne.bind(Nu,hn)}}return hn}function gf(b,U){b.ambientLightColor.needsUpdate=U,b.lightProbe.needsUpdate=U,b.sunLights.needsUpdate=U,b.sunLightShadows.needsUpdate=U,b.directionalLights.needsUpdate=U,b.directionalLightShadows.needsUpdate=U,b.pointLights.needsUpdate=U,b.pointLightShadows.needsUpdate=U,b.spotLights.needsUpdate=U,b.spotLightShadows.needsUpdate=U,b.rectAreaLights.needsUpdate=U,b.hemisphereLights.needsUpdate=U}function xf(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(b,U,q){let G=X.get(b);G.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,G.__autoAllocateDepthBuffer===!1&&(G.__useRenderToTexture=!1),X.get(b.texture).__webglTexture=U,X.get(b.depthTexture).__webglTexture=G.__autoAllocateDepthBuffer?void 0:q,G.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,U){let q=X.get(b);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(b,U=0,q=0){$=b,k=U,V=q;let G=null,H=!1,me=!1;if(b){let pe=X.get(b);if(pe.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(O.FRAMEBUFFER,pe.__webglFramebuffer),Q.copy(b.viewport),re.copy(b.scissor),ge=b.scissorTest,v.viewport(Q),v.scissor(re),v.setScissorTest(ge),W=-1;return}else if(pe.__webglFramebuffer===void 0)K.setupRenderTarget(b);else if(pe.__hasExternalTextures)K.rebindTextures(b,X.get(b.texture).__webglTexture,X.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let Ve=b.depthTexture;if(pe.__boundDepthTexture!==Ve){if(Ve!==null&&X.has(Ve)&&(b.width!==Ve.image.width||b.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(b)}}let Se=b.texture;(Se.isData3DTexture||Se.isDataArrayTexture||Se.isCompressedArrayTexture)&&(me=!0);let Ae=X.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Ae[U])?G=Ae[U][q]:G=Ae[U],H=!0):b.samples>0&&K.useMultisampledRTT(b)===!1?G=X.get(b).__webglMultisampledFramebuffer:Array.isArray(Ae)?G=Ae[q]:G=Ae,Q.copy(b.viewport),re.copy(b.scissor),ge=b.scissorTest}else Q.copy(_e).multiplyScalar(te).floor(),re.copy(se).multiplyScalar(te).floor(),ge=Je;if(q!==0&&(G=L),v.bindFramebuffer(O.FRAMEBUFFER,G)&&v.drawBuffers(b,G),v.viewport(Q),v.scissor(re),v.setScissorTest(ge),H){let pe=X.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+U,pe.__webglTexture,q)}else if(me){let pe=U;for(let Se=0;Se<b.textures.length;Se++){let Ae=X.get(b.textures[Se]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+Se,Ae.__webglTexture,q,pe)}}else if(b!==null&&q!==0){let pe=X.get(b.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,pe.__webglTexture,q)}W=-1};function Lu(b){let U=X.get(b);return(U.__readFormat!==b.format||U.__readType!==b.type)&&(U.__readFormat=b.format,U.__readType=b.type,U.__formatReadable=I.textureFormatReadable(b.format),U.__typeReadable=I.textureTypeReadable(b.type)),U}this.readRenderTargetPixels=function(b,U,q,G,H,me,Me,pe=0){if(!(b&&b.isWebGLRenderTarget)){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Se=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se){v.bindFramebuffer(O.FRAMEBUFFER,Se);try{let Ae=b.textures[pe],Ve=Ae.format,Ye=Ae.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let be=Lu(Ae);if(be.__formatReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Pe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=b.width-G&&q>=0&&q<=b.height-H&&O.readPixels(U,q,G,H,ue.convert(Ve),ue.convert(Ye),me)}finally{let Ae=$!==null?X.get($).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,Ae)}}},this.readRenderTargetPixelsAsync=async function(b,U,q,G,H,me,Me,pe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Se=X.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Me!==void 0&&(Se=Se[Me]),Se)if(U>=0&&U<=b.width-G&&q>=0&&q<=b.height-H){v.bindFramebuffer(O.FRAMEBUFFER,Se);let Ae=b.textures[pe],Ve=Ae.format,Ye=Ae.type;b.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+pe);let be=Lu(Ae);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let nt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.bufferData(O.PIXEL_PACK_BUFFER,me.byteLength,O.STREAM_READ),O.readPixels(U,q,G,H,ue.convert(Ve),ue.convert(Ye),0),O.bindBuffer(O.PIXEL_PACK_BUFFER,null);let At=$!==null?X.get($).__webglFramebuffer:null;v.bindFramebuffer(O.FRAMEBUFFER,At);let pt=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await cd(O,pt,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,nt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,me),O.bindBuffer(O.PIXEL_PACK_BUFFER,null),O.deleteBuffer(nt),O.deleteSync(pt),me}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,U=null,q=0){let G=Math.pow(2,-q),H=Math.floor(b.image.width*G),me=Math.floor(b.image.height*G),Me=U!==null?U.x:0,pe=U!==null?U.y:0;K.setTexture2D(b,0),O.copyTexSubImage2D(O.TEXTURE_2D,q,0,0,Me,pe,H,me),v.unbindTexture()},this.copyTextureToTexture=function(b,U,q=null,G=null,H=0,me=0){let Me,pe,Se,Ae,Ve,Ye,be,nt,At,pt=b.isCompressedTexture?b.mipmaps[me]:b.image;if(q!==null)Me=q.max.x-q.min.x,pe=q.max.y-q.min.y,Se=q.isBox3?q.max.z-q.min.z:1,Ae=q.min.x,Ve=q.min.y,Ye=q.isBox3?q.min.z:0;else{let Mt=Math.pow(2,-H);Me=Math.floor(pt.width*Mt),pe=Math.floor(pt.height*Mt),b.isDataArrayTexture?Se=pt.depth:b.isData3DTexture?Se=Math.floor(pt.depth*Mt):Se=1,Ae=0,Ve=0,Ye=0}G!==null?(be=G.x,nt=G.y,At=G.z):(be=0,nt=0,At=0);let ct=ue.convert(U.format),Bt=ue.convert(U.type),ve;U.isData3DTexture?(K.setTexture3D(U,0),ve=O.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(K.setTexture2DArray(U,0),ve=O.TEXTURE_2D_ARRAY):(K.setTexture2D(U,0),ve=O.TEXTURE_2D),v.activeTexture(O.TEXTURE0),v.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,U.flipY),v.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),v.pixelStorei(O.UNPACK_ALIGNMENT,U.unpackAlignment);let Xt=v.getParameter(O.UNPACK_ROW_LENGTH),Qe=v.getParameter(O.UNPACK_IMAGE_HEIGHT),hn=v.getParameter(O.UNPACK_SKIP_PIXELS),In=v.getParameter(O.UNPACK_SKIP_ROWS),ai=v.getParameter(O.UNPACK_SKIP_IMAGES);v.pixelStorei(O.UNPACK_ROW_LENGTH,pt.width),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,pt.height),v.pixelStorei(O.UNPACK_SKIP_PIXELS,Ae),v.pixelStorei(O.UNPACK_SKIP_ROWS,Ve),v.pixelStorei(O.UNPACK_SKIP_IMAGES,Ye);let Qi=b.isDataArrayTexture||b.isData3DTexture,ot=U.isDataArrayTexture||U.isData3DTexture;if(b.isDepthTexture){let Mt=X.get(b),oi=X.get(U),dt=X.get(Mt.__renderTarget),ci=X.get(oi.__renderTarget);v.bindFramebuffer(O.READ_FRAMEBUFFER,dt.__webglFramebuffer),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let es=0;es<Se;es++)Qi&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(b).__webglTexture,H,Ye+es),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,X.get(U).__webglTexture,me,At+es)),O.blitFramebuffer(Ae,Ve,Me,pe,be,nt,Me,pe,O.DEPTH_BUFFER_BIT,O.NEAREST);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(H!==0||b.isRenderTargetTexture||X.has(b)){let Mt=X.get(b),oi=X.get(U);v.bindFramebuffer(O.READ_FRAMEBUFFER,z),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,D);for(let dt=0;dt<Se;dt++)Qi?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Mt.__webglTexture,H,Ye+dt):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Mt.__webglTexture,H),ot?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,oi.__webglTexture,me,At+dt):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,oi.__webglTexture,me),H!==0?O.blitFramebuffer(Ae,Ve,Me,pe,be,nt,Me,pe,O.COLOR_BUFFER_BIT,O.NEAREST):ot?O.copyTexSubImage3D(ve,me,be,nt,At+dt,Ae,Ve,Me,pe):O.copyTexSubImage2D(ve,me,be,nt,Ae,Ve,Me,pe);v.bindFramebuffer(O.READ_FRAMEBUFFER,null),v.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ot?b.isDataTexture||b.isData3DTexture?O.texSubImage3D(ve,me,be,nt,At,Me,pe,Se,ct,Bt,pt.data):U.isCompressedArrayTexture?O.compressedTexSubImage3D(ve,me,be,nt,At,Me,pe,Se,ct,pt.data):O.texSubImage3D(ve,me,be,nt,At,Me,pe,Se,ct,Bt,pt):b.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,me,be,nt,Me,pe,ct,Bt,pt.data):b.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,me,be,nt,pt.width,pt.height,ct,pt.data):O.texSubImage2D(O.TEXTURE_2D,me,be,nt,Me,pe,ct,Bt,pt);v.pixelStorei(O.UNPACK_ROW_LENGTH,Xt),v.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Qe),v.pixelStorei(O.UNPACK_SKIP_PIXELS,hn),v.pixelStorei(O.UNPACK_SKIP_ROWS,In),v.pixelStorei(O.UNPACK_SKIP_IMAGES,ai),me===0&&U.generateMipmaps&&O.generateMipmap(ve),v.unbindTexture()},this.initRenderTarget=function(b){X.get(b).__webglFramebuffer===void 0&&K.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?K.setTextureCube(b,0):b.isData3DTexture?K.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?K.setTexture2DArray(b,0):K.setTexture2D(b,0),v.unbindTexture()},this.resetState=function(){k=0,V=0,$=null,v.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}};var Qo=class extends Rr{constructor(e){super(e),this.type=Kt}parse(e){let a=function(x,S){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(S||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(S||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(S||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(S||""))}},f=function(x,S,C){S=S||1024;let P=x.pos,L=-1,z=0,D="",k=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));for(;0>(L=k.indexOf(`
`))&&z<S&&P<x.byteLength;)D+=k,z+=k.length,P+=128,k=String.fromCharCode.apply(null,new Uint16Array(x.subarray(P,P+128)));return-1<L?(C!==!1&&(x.pos+=z+L+1),D+k.slice(0,L)):!1},d=function(x){let S=/^#\?(\S+)/,C=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,A=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,L=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},D,k;for((x.pos>=x.byteLength||!(D=f(x)))&&a(1,"no header found"),(k=D.match(S))||a(3,"bad initial token"),z.valid|=1,z.programtype=k[1],z.string+=D+`
`;D=f(x),D!==!1;){if(z.string+=D+`
`,D.charAt(0)==="#"){z.comments+=D+`
`;continue}if((k=D.match(C))&&(z.gamma=parseFloat(k[1])),(k=D.match(A))&&(z.exposure=parseFloat(k[1])),(k=D.match(P))&&(z.valid|=2,z.format=k[1]),(k=D.match(L))&&(z.valid|=4,z.height=parseInt(k[1],10),z.width=parseInt(k[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||a(3,"missing format specifier"),z.valid&4||a(3,"missing image size specifier"),z},u=function(x,S,C){let A=S;if(A<8||A>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);A!==(x[2]<<8|x[3])&&a(3,"wrong scanline width");let P=new Uint8Array(4*S*C);P.length||a(4,"unable to allocate buffer space");let L=0,z=0,D=4*A,k=new Uint8Array(4),V=new Uint8Array(D),$=C;for(;$>0&&z<x.byteLength;){z+4>x.byteLength&&a(1),k[0]=x[z++],k[1]=x[z++],k[2]=x[z++],k[3]=x[z++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=A)&&a(3,"bad rgbe scanline format");let W=0,Y;for(;W<D&&z<x.byteLength;){Y=x[z++];let re=Y>128;if(re&&(Y-=128),(Y===0||W+Y>D)&&a(3,"bad scanline data"),re){let ge=x[z++];for(let je=0;je<Y;je++)V[W++]=ge}else V.set(x.subarray(z,z+Y),W),W+=Y,z+=Y}let Q=A;for(let re=0;re<Q;re++){let ge=0;P[L]=V[re+ge],ge+=A,P[L+1]=V[re+ge],ge+=A,P[L+2]=V[re+ge],ge+=A,P[L+3]=V[re+ge],L+=4}$--}return P},m=function(x,S,C,A){let P=x[S+3],L=Math.pow(2,P-128)/255;C[A+0]=x[S+0]*L,C[A+1]=x[S+1]*L,C[A+2]=x[S+2]*L,C[A+3]=1},_=function(x,S,C,A){let P=x[S+3],L=Math.pow(2,P-128)/255;C[A+0]=gi.toHalfFloat(Math.min(x[S+0]*L,65504)),C[A+1]=gi.toHalfFloat(Math.min(x[S+1]*L,65504)),C[A+2]=gi.toHalfFloat(Math.min(x[S+2]*L,65504)),C[A+3]=gi.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let p=d(g),T=p.width,R=p.height,y=u(g.subarray(g.pos),T,R),M,w,E;switch(this.type){case Ht:E=y.length/4;let x=new Float32Array(E*4);for(let C=0;C<E;C++)m(y,C*4,x,C*4);M=x,w=Ht;break;case Kt:E=y.length/4;let S=new Uint16Array(E*4);for(let C=0;C<E;C++)_(y,C*4,S,C*4);M=S,w=Kt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:T,height:R,data:M,header:p.string,gamma:p.gamma,exposure:p.exposure,type:w,colorSpace:zt,minFilter:et,magFilter:et,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Gd=Fu("Iz9SQURJQU5DRQpGT1JNQVQ9MzItYml0X3JsZV9yZ2JlCgotWSAxMjggK1ggMjU2CgICAQCAmZmampudpbfYgJKhrba8wsXHycjFwr24sq2oo6CempeVlJKRkJGRk5WYm56ho6Wmp6ioqqqsr7O2trW0s7KztLSzsa6sqqqrrK2trauqqainpqWioJ2bmZeVlJWXmZ2go6SmqKqrrK2vsrW5ury6t7OvqqKVhuvIr6Ogn5+enZ0fnp+iqbTD2PGFk6CsuMHJzs7KxsTExMK/urKrpaCcmoaYIpqdoKOlp6mrra+wsLCvsLGysbCvr66ura2ur7CytLW3uLqEuwK5t4S2L7W0sq+rqaakoqCenJqZmp2gpKqxt7q6vMHFys/U1tPNw7esoZWJ+uPOva6jnJmZgIqLi4yNj5enxXSFk52lqq6xs7Szsa6ppJ+bl5OQjoqIhoWDgoKDhIWHiYuOkJGTlJWWl5iYmpyfoaKioaCgoaKioqCem5mZmpubnJyamZiXlpaVk5COjIqIh4aGiIqNkJOUlZeZmpucn6Ckpqipp6SinpqSh3nWuKGWkpGQkI+PH5CRlZumtcfceoaRnaavtrq6t7Oys7KxrqiinJaSjoyFiimLjI+Rk5WYmZudn6Cfnp6foKCgn56dnZ2cnJ2dnp+hoqOkpqenpqako4WiLqGfnJqXlZSTkI6Mi4qKjI6Slpyho6Smqq6yt7u9vLiwpp2TiH3m0L6tn5WOi4o6gYKCg4SHjp65bXyIkpmeoaSnqKelop6ZlZCMiIWCf318e3l5eHl6e31/goSFh4mJi4uMjY6PkZSWloWVPpeXlpWSkI6Oj5CQkZGPjo6NjIyLiYeFg4KAfn5+gIKFiIqLjY6QkZKTlZeanJ2fnJqXlI+IfnHIrJeMiYeHhIZ/iIyTnaq6znJ9iJKcpKqurauop6enpaOemJKNiYaDgoGBgYCBg4WHiYuNj5GTlJWUlJOUlZWVk5OTkpGRkJGSkpOUlpaXmJmamZmYl5aWlZWVlJOQjoyKiYiGhIKBgICChYeLkZaYmJqdoaWpra+uqqKZkYh/ddfEsqOWjIWCgYl67XuSeu97iXoCAgEAgJWYm6yCzICMjIPoyq+XhezX2fWNnKSqq6qlnpqamZidp7G7v76/wb+4sa2qpZ+cm5aTk5SUk5GQlJmcmpiWlZWWlZSVl5eVl5eXlJCUlJifoaCkqayzu8LHxsTHxL64saqkn52dn6WoqKipppyQgezvgpOpwuKAjI+F35rEpKGggKCs0Yi24oOMhevPtZuD5NXl/pGls7Kurq6po6Gip6utsrm+xMPBvbq3squknpqYlpKPjo6PkpOTlZaVk5SWlZORkJWWk5KRkJCOjIqLjY6QkZGUmJ2hpquys7jBvrWxrKain56dnJ6ho6esq6CPge7h5P2RprvU8IH53LuW46+YMYeJjZ93t3J9fXbStp2IedjFxt+AjZOYmZeSjouKiomOl5+nrKurraymoZ6blZCNjIiEhYCEg4KFioyLiYeGh4eHhoeIiYiJiYqHhIeHipCRkZWZnKGprrSysbSxrKahmpWQjo6RlpmYmJmWjoN22dt3hpqxzXR+gHnLjraWkpKSoMR/p812fnfUuaOLd9DE0uiElqKgnJ2dmZORkpaZnKCmq7CwraqopaCalI+LioeEgoCBgkuEhYWHh4aFhoeGhYODh4iFhIOCgoB/fX6AgYODg4WJjJCUmaChpq2qop6ZlpGPjo6Mj5GTlpuZj4F128/Q5oOVp73Wc97FqYnRoouAgIGFlnCranR1bsSrlH9xybi5z3eCiI2OjYmFgYCCgYWMk5mdnZ2gnpmUkY6Jg4GBfXt7fHt6enl8gIKCf319fn5+fX+Af3+BgYJ+e319gIWGh4qNkJWcoqelo6akn5qVj4qGhYWHi46Ojo+MhXtvy81vfpClwG12eHG+hayNiYiAiZi8d5q+bnVvxayWgW/Ct8PYeouWlZGRkY6Jh4eKjZCUmp6joqCenJmUj4mFgoB+enh3eHl6e3t9fX17fH19fHp6fX57enp5eXd1dHV3d3l5eXt+gYWJjZOUmZ+blJGOioaEhISDhYeJjJCPhXhuzcLC1XmLnK/Gas62nIDGmYOEeoJ7hHyFe4R63HuCeoV7hHyCe4d6Bnt7e3x8fIV7hHrde4R6hXsBfIR7g3oCAgEAP5ybr7mRlIHAhcetuYi82tbHspiEiJaenZubmpWgt8bKysO4sKOblI+OkJejs7e7ure2t7i9u7OtraqlpqOgoYSfa6KjpKWnr7S8v8C3ubu6trO5qZyWk5KUl6CmsLe+wLiup6uwr6+ysKiYiJGs1/D47s6MtrPUkc2HmYiIp6Ci2Kf1lZbG8K6w3pTB6+XPu6aUiI2hu7u1sKyqrLO5wMG5raGZlZOTlJefqa+2hbpNuLixrKinp6KjoJ2dnJqbnZycnZyfpKSnqaqrrrW0s7OuqaWbk4yKiIyPlqGqs7axqZ+cmpyfoJ2RhoeUqb7X7OS9luC0tvezgojSkMCAj46ip4GFdK96tp6pe6nCv7KgiXh7h46OjIuKh5GlsrW2sKaek4uGg4KEipSho6eopaSkpqqoop2cmZWVk5CRj4+Qj5KTlZWXnaGorbCnp6mopKGkmI2HhYSGiJGXn6WsrqaemJqenp+hoJiKfIObwdbf17p/pqTDhLt6inp9mJIvlciZ24SEstyfocqGrtHOuqiWhnyAkaippJ+bmpyiqK6vqZ6TjIiGhYeJkJiepKiEpxClpZ6bl5aWkpORj4+NjI2PhI45kJWUmJmbm56ko6KinpmVjYZ/fHt/gYeRmaGjnpePjIqMj5GOg3p6hZmswdXOq4nOpKbfoXN5vYSygIWDl5x4e2uicqmTnXGbtLKlk35vcn2CgoGAfnyHmaWpqaKZkomAfHh5fIGKlpeam5iWlZidnJaRkI2Ji4iFhYSFhYaJiouMjZGUmaCjm5ydnJiVloyDfXt6fH6GjJOZoKKbk46Qk5OUlpSNgHR6kLPH0Miud5yZtnyvcn9xdY+HL4u8kcx6eqbNlZa8faHAvKuainxzd4abnZiTkI+Rlpyio52TioN+fX1+gIaOk5mchJtNmZiSj4yLi4eJhoSFhIKDhYSEhYSGi4qNj5CRk5mYlpaSjYqCfHZ0cnV4foaOlZeTjIWDgIGEhYJ5cXF7j5+yxb+efsCams6UanCwe6cMenp6e3x8fHt7enp66XsJenp6e3t8fHx7hHoFe3t8fHuEeut7hHoGe3x8e3t6AgIBAICanoCNiMrssrSM2vXAhMbyqrewpZWZoquwr7GxuLiuoZKMiIeNn66+ysW4raWimpSWl5ymr7Cxs7m7vMS+trS6urm3uLe2ure1s66tpqSblZOXoKm2x8vMxLGgmJeYmqG0vsjK68S63fWEhvr/gdnG0829oOKE7N2vxquHqL6tp4DHroWd8+qo2qrl6dam6oKrtdDdzLanrMXGxLywt76/rJ2Uk5SdrrrCxcO6q6CYmZiYm5+hp6+xt7m0srKyr6yrsLCsrbOztbSzsrGrqKWclpKMi4+Xo6+3u7Spn5eZoqqvuLqtoJWTkZWYmpOSoLXCvpXb3pvT8taRwqXJzIbM54CNkHZ+ebXYo6R+wtqsd7TbmKWflYeLkpugn6CgpqWdkoN8enp/j5yrtLGmnZaSjYeIio6WnqCho6ipqrKspqSoqKempaakqKWjopyblpSMhoWJkZqltLe5saCRiomJjJKjrLO13riqyuB4eeLndcSyvrqqkMx00cmftZx5lKmemIC3nXaL0tKZxZnN0LyS1HWapLrEtaOYnbS2tKyhp66unI+HhoePnqixs7Gpm5KKi4qKjJCRl56gpaejoqKhn5ybn5+cnaGhpKKhoKCamJWNiYV/foKJlJ6kqKOYj4mKk5qfpaabkIeEg4aJjIaFkqSuqobJy4u82L6DsJa5tna41YCDhW5zb6fKlpd0ssmgbqfKjJeRin2BiZGXlJaVm5qRhnpzcXB1g4+dp6WbkoyJhX6AgYeOlZeXmZ2fn6aknJufn56cnJuan5qZl5ORjIyEf36BiI+apqqrpJWGgH5/gYeXn6ap17qoyd94eeLmdMOxvLinkMluwrqTqZFvh5yTjICqkm2Avr+Ot4y+wa6GxG2NmKu0ppeNk6iqqqKXnKKjkoV9fX6Fk5ykpqSdkIeAgYCAgoWGjJKUmZuXlpaWk5GPlJOQkZWVl5aVlJOPjYuDf3x2dXh/iZKYm5aMg31/iI+SmJiOhHx6eHt/gXt6hZegnHq5vICtxa54pIusqWyoxwl6ent8fHt6enqFe4J61XsJfX5+fn9/fn5/hn4UfX17enp6e3x8e3p6ent8fHt6enqFewF65HuCeoV7B3p6ent8e3oCAgEALaiqp4jH06766OiXyuCty7qJ3JS40bqD8JS6ubG9sIads6amusW6ppaLi5SgrYSzgK+imZWOjI2Tnp+jpKOkpqeppqahn6WclZCPlKGir7a9vbmzqZaRlp2swMSzmpOVna29yNuAwdnw9/T8783aw6Kxr6f87I6P5dmtiPaI5ajEzZDfpKWR++nzr4XT1abs9KrEt6OSj6urpqGpx8Clmpmerbu8sJ2RgoCAgoSbjJGSEZCPi4T++/+ChomMjY6Oj4+NhI46i4iGg4OFiIyPjYyJhYKC//r4/Y6hsbexpZugpJyss62vrqeZhZKmtbiU34i52LPitpLt44CvtNuCmICam5d4ssKe487OiLfLm7anfMmGpbuoeduGpqefqaB8jaGXlqexqJWIfn2FkZuhoqKhnpOLiIJ/gIWPkJSUk5OWlpeWlJGPko2IgoGEj5KepKqppqGYh4OIj5uusaKMhoeOnKq02HexxNfZ1eDUt8OukJ6el+TWg37LxZ1723nQl0Gzt4DIlpeC39Dbnne7vZTV3Jivo5KDgZqalZOata+XjYyRnaqqn46DdXNydXiOgIWGhISBeu7s73p+gIKEhYaGhoWFOoJ/fXp6e36Bg4F/fHh2dOPe3uSBkqCmn5aOk5aOm6KdnpyViHiDlaKmhsx7psOhz6aD0sl1n6XCcYmAjo+LbaS1k9K8unyqu4+pmHG6fJirmnDKe5mblp6Vc4SWjIycpJyMf3Z0fIeRl5qYmJSKhIF7d3h+h4iMjYmKjo6OjYuIhomEf3l5e4SJlZqenpuWjX56f4WRo6aYg31+hJKfqdx2rsHT1dLc0bXBrI6bm5Xh1X1zt7ORcshuv4uAp6h0t4uMecy/yZNurK2IxsyMopiIeniOjoqIj6mjjYOBhpKdnZKDemxqamxxh3l+f39/fHbo5up3e32AgoODhIOCg4KCgn58enh3eHp8fXt5dXFua9DNztJ3h5Sak4uDh4mDjpWRkpGKfW93hpOVerxvlrKUv5p5wbhtlJmxZ34Nenp7fHt6enp7e3t6eoR7AXqFewF6zHsBfI9/F359fHx7enp7e3x6enp7fHt6ent7e3p6hHuCeqR7g3qde4R6l3sBeoR7gnqEewV6ent8ewICAQCAqbnw3dGuofKbuYHSxYLOqtC/jYujobismbGqpKWtuLixqbW2o6WblrjAuKaXi42bqLC2trq2tKupoqGem5eWlZWbmJ6jpqu0uL29wse/u7CdkpOgssHHva2Uj5Kanr3ApKOrtr/Fv7W6je+svraT/Mb69I/pjr24mfK0pdjuy6CAtdGI06CSgbCk7eHT4cqv27P8jLy9rZihrKSgpaaVkIiF+uvm+Y+Gl6Stt7evpZ2UjILs9Pb58+TVysTBx8nGxsG8ubnG0NbZ3eLr6/D5g42TnKWzur24rqOQiYDt+Y6fo9mHiIf3zrellpqus6Hugq+/kL+M1bXNtcTp+KmGgqeAm6nWxL+ektmMqXW7sXa8l7qrgH2RkaacjaGblpadpqagmqSkk5SKiKWspZaJfn+Ml5+kpKmlo5qXkpGPjIiHhoaMio+TlpmipaqprrKsqZ6OhIWRoK2yqZuGgYSLjqmsk5KZoqiuqKCog96drqaH5LTj34DQfqqpidahl8fTtJGAprp5wJGDcpyU18e7y7ecw6Dlf6mpnImRm5SRlZWHgXp239XT6Id+jpumsLGon5aOhn3i6Ort59rMwr26wMG/vrq1s7O/yM7Q1Njg4ebvfoeMlJyosLOto5eFfXTZ44CRlch9f3zkvKaWiIucoJDZdpyrga9+vaK7pa/O4Zl5dJaAkJ7Ds7KThsaCnWupomyvi6qddnOFhZqRg5WRjI2SmpuVj5mZiImCgJmfm46AdXeCjJSZmp+bmJCOioeFg4B+f36DgYaLj5CYnJ+eoqShn5SFfH2IlqOnn5J+eXyChZ2fh4eNlZufmpOdgNybqqCD3a3WzHW7cZuefsKSi7vAo4aAnKptsYd5Zo6KybervaqPtJTVdZuckH+GkIuHi4t+eHFt0MrL4YN7ipeirK6mnZWNhHvf5ebo49bJv7q3vb67u7ezsbG9xcvN0dXc3uPtfIWKkpqmrq+qn5KBeXDR2HiGi7t1dXPUsZuKfoCPk4XJa46cdqJ0rpWsl6G9zo1waooKenp7e3p6e3t7eoR7AXrae4J8hH0jfHx7ent7fHt6e3t7enp7e3p6e3x6ent8e3p6e3t6ent7e3qPe4R6jXuceo57gnqEe4N8iXsBeoR7DXp7e3t6ent7enp7fHsCAgEAPKXz/Iqnpu7yx8XL5PDHx4aPqrKtqLasoqSxwcK4qq22wbixtLi9vMW2o5iau8S6qZeOjJelsLO2tLOzs4SwgLKxsrGzuLe0tbKvo5eOkZ6uv8LCrJWPk5vDxbGzv7yvq7K9wLSoqrK/wbSrrrDYxo3RrrTZ9euC0dHb+qT2/8at1u6f54CtpJv0h76224zmvcOShr3EqJqalIz2w96BlKy5vKiUh4Lrz7Gcm629ysvX4NCytdnp8fLm2tTt/YH6QPLk0+P1+frp3tLU4uXdz8W6r6KZk5iruszvhZCku8TDsMipievIu8TCwrOon/iOrJ7OicCVs5ja8aW/zLy076uAltzgfZmV1d61r7bQ2rKyeYGYoJyYo5uUlKCtsKebnaavp5+jpqqpsaOTiIqnrqaXh4B/iJSeoaSjoaKinp2enZ+foJ6gpKSioqGck4qBhI+era+vnIiChIyvsJ+gqaebmJ6nqZ+Ulp2oqp6Ym57BsH69m6DE3tJzvr/B3Zfh4bKAnr/RkNJwmZWL13quo8N+06qwg3qrsZeLi4V92rTQe42ksbShjoJ84sirl5WmtcHEztfIq67P3+bn29HL4fB77+jby9rr7/Hg1cnL2NzUxr2yqJuUjpOkssLifombr7i5qb+Ee+C9rbWzsqOYkeJ/m468e6qFo4jC2ZWptauj05mAi8zMc46Jw8ynoajByqSjcHiLk5CPmJGKipSgopuQkpqjm5aZm56dpJiKf4Gbo5uOfnd2gIuTl5iZl5eXlJKVlJOUlZOVmJiXlpaRiYF4e4aToKKikX96e4Kio5OTm5mPjJGZm5KHiZCZm5GLjpCwoHOvjJCyzcBorrCwyI3SzKSAlK28hcRmi4uAwm6hl7F0xJ2heXKfpY2BgHtzy63MeYuirrGfjYB63sWolJKisLu9yNDDp6nI19/g1cvF2uh46eHUxtTl6evb0MXG09fPwbito5eQi5Girr3be4aXq7W2pr1+ddazo6mmpJeNhtF1j4Oucpx7l36xyoqcpp6XwYwNenp7e3p7e3p6e3t6euR7H3p7e3p6e3x6ent7enp7enp7e3p6fHt6e3t7ent7e3qLe4N6iXuXegF7m3qIe4J8iXsTent7e3p7e3t6e3t6ent7enp7ewICAQCAp6Tauf3t5ubekNXKwOimtqiuuKyorrnDvbKrssPFt7C5wbmytr69u7izv9LLl5m4uLm0o5WNj5aepq2wsrOws7Czs7Sws6uimZGPmqmyuL65pZGRmLXKx7+4u7q6vrWts8O6p6u1w7yroqe0uLexnqnIi9nNzMifhPzK9bWh55eAqeWxo8PXpaPy1f3imtW/su+tt5uYq5jZs/KRrruqjfTGrqious/p6uqGlZb+8PWNkoiFj4rk+oKGi4WAgIqOkoeBgI6RkIWBgIiOhv/+/vjw7v+G+N7g79/Ov8GsmpvC64qfvL6rneuakbjRqJq4ouSeqcaPxNbg2Pas3paexbmAl5PEqeTR0tLHg8G0rNSVpJieppyZnqiwrKKborCwpJ6mraagpKqpqKeirb63iImkpaaik4Z/goiQl5yeoaGeoaCioaOfoJqSioOBjJmhpqumlYODiKKzsKijpaSlqaCan6yklJafq6WWj5Sfo6GdjZazfMS3trWQdeO42KGTy4aAmsyclK6+lpPWwebJi8KroNucpo2JmonCp+aNqbSkh+rAqaKissbf4OCAjo/z5euGi4J/iYTc73yAhX96e4OIi4F8eoiLi4B7e4KIgfb09O3l4/WA69TW49XFt7illJS43oOXs7Smmvabg6i+mYynktCOmLWArsLKv9+cxYePsaaAjYezndO/wsO3ebSnnsSIl42Um5KPlJujoJiRmKSkmpOboZqVmJ6dnJqWobGqf3+YmpuWin12eX+FjJKTl5eUlZWWl5mUlZCJg3p4gpCWmqCbi3t7gJakn5iWmJaXmpONkp6Wh4mSnJeKg4eRlJSSgoqjcbaopaeEatCsxJKLt3qAkLmNip+ri4fBsta3f7SeksyQmYJ/j361oeKLp7Kihue+pp6ersHZ2tp9iozt4OWCh398hoHX6Hl9gXx4eH+FiX96d4SIh315eH6Ffu/v7ufg3u995s7P3NDBs7OikZK23IKWsLOkmveYepyyjYKaiMCBi6h3oLO8rs2StX2FopgOent7enp7enp7e3p7e3rlex56e3t6e3x6ent7ent7ent7ent7ent7enp7e3p7e3qGe4N6hXuKegZ7e3t6enqGe4J6lXuHegF7jXqHewF8h3sQent7ent7enp7enp7e3p7ewICAQCAqsWmsOyC7+vnlej0oMCit7CnqbW/vLKqtcjIr6q8zbawwci4usS8vb66xMOvx82Tj6y1ubatpJmNi42SmJ2an5ubm5eUkZSYqa61ubi2qZWM96TLzbezvr67t7vCvrO8x7iqsMO7paq2vLqrpq25ubSpq7ztnIaIhIjgkIOgv72AsP2E3oPMi/jNnd/brcLotbOEs6jJs4KjuKaIyZiZwMXigof9i5mP84WPiYGXp5eFhZSdj4eI9oCDg4eD/oyOjYeFh5OSh4eDj42GiIWDgYiSloqEj5CB8IHx6veOgNnEzamVkr33mbe4l/Gu8rOb5qWY2LWO0Mfz39vLiNq0pMqAm7CVotJ22tPShs7ekKyUpZ+XmqOsq6GbpLW3npmpuKSfrbSnp7Krq6yosrGfs7mFgZqip6SclYuBfn+Gio6NkI2NjImGg4aLmp6jqaelmYeA4pS1t6Ogp6emo6asqJ6mr6KWm6ukkZahpqWWk5mjo5+WmafUjHd8eXnLgnSSrKiAoOF2ynO4fty6jsfHna3TpKF4ope0qH2esaCExJWVub7ZfYHzhZKI6ICJg3uPn5GAgI2ViYGD7Xp9foJ+8oWIh4F/gYyMgoF9iYeAgn99e4GMkIR+iYl85nvm3+qGec+7w6KPjbTpkK2tjt6d16GL0ZOIxKJ/vK/dy8O5esOklLWAkKOLl8JuysHDfL/OhZ6KmZSNkZmhn5aRmamtlI+dqpmVoqebm6WenaGdp6SUqKt9eY+XmZeRjIF4dnd+gIWDhoSEg4B9e36DkpSan56bjn940Ienp5WSmpmZl5qempCYoJWKj5yVhYmTl5WJhoyVlJCIjJfCgm5xcG+8eWmJnZqAlsxsvWiodMesgra5kp/FmJVvlouopHydrp6CwpORs7nTen7tgY6E5H2Gf3iLm419fYmRhn+A53d6e3577IGEg317fYmJgH56hoR9f3x6eH6IjYF7hYV44Xnh2eODdsu4vp6MirHlj6qqjNiWx5OAwoh9tpV2r6LMvbOrcbKYiKYMent7ent7ent6e3t6xnsBfKF7G3p7fHt7fHp7fHp7e3p7e3p8ent7ent7ent7eoV7gnqFe4Z6B3t7ent7e3qOewF6hXsBepp7B3p7enp6e3uIeoR7Fnp6ent7ent7ent7ent6ent6e3t6e3sCAgEAgL3Z9ZjVw+v1nuLpzbq+tbK4xszGtLC/y72utsjDrrzMurHEwbi+wcC+wcvBw9GxydyglqSytsHBzrvMs7i7or+itLOqxLLCtK6pq6afj5arqszLqr24ub2/wL+9w7e2xr2vvsu0q7e/r6Gruratpau2vbmrvZGDjqCR7baB36begLqGwrbM0f7lqM3j3pyYzYCzpajXmLKj+6WIrsbdhpf2/YqChJmmiI+clIaQlYaQpJ+Hh5mWhYeDgoiHi4aQjYaFgo2Uio6Ei4eHiYWCiJaXh4uek/+ChfmBmpL+g4Xq5ZKC5uHMp5qbz5a2spS9rqOW7rfkk6vEwO2Utq3s+4jkgKzC4Iq/s9Pgj8zVuamspKGms7ezop+tuKuepLSvnqm3qJ6xrqasrq2rrreur72ftMaRiZOgpa6vuqm3oaeqk6ySoqGasaKvo56anJaQgoicmLWzlqiko6ipq6moraKhr6eap7GelqGom4+XpaGZkpmip6SYqIB3f5GE1qdzypbHgKp3saS2v+TRmLbQyI6KunWhlJnOlKqc8aGFqL/UgJDt84R9fpGdgomVjoGKjoCKnZiBgpOPgIJ+fYGAhH+HhoB/fIaNhId+hYGChIB8go+RgYSWjPR9f+57kovzfX/f2op829fDoZSVxY2rqYuqmZOG16PPhJqxrNeEpJ7R43vKgKCz0YCxp8PQhr3Hq52gmpicpqunmJWiqp+SmKijlJ2qnZOlo5qgoKCeoquho7CWp7eHf4mUmaOirp2rl5ueiaCIl5ePpZeil5OQk4yGeX+RjaWjipmXlpudnZ2bnpWTn5iNmaGQiZOZjoSLl5SNh42VmZaLm3VudIV6xJxou4u3gJ5tpJinsNPBjajAuYWAq2yXi5HJkqea76CCpLrOfI3n7IB5eo2ZgIaRin6Hi32GmJR+f46LfX96eX19gXqCgnx8eYKHf4J6gX1/gX16f4yNfoGRh+56fOd3j4jsenzZ1IZ51dK/nZGSwIuopomkj4h8x5a/e4+lnsd6lpPB03K7C3p7ent7ent6e3t67HsUfHt7e3p8ent7enx6e3t6e3p7e3qHewV6ent7e4Z6BHt7enqzew56e3t6e3t7ent7enp7e4d6hHsTenp7e3p7ent7ent6e3t6e3p7ewICAQCAuuzT2Y2ntvDq0u+Gr5m5x8TDtbbK0L2wvcq9r8bKtbzNubrLur/Gv8PAxbzDsqPEodOVtvixh6WCu+LguYijjJ3/uODhtYegiaf5yMjctKDcrbSxrsC3zc7GvL29sb++rr3Hq7LEuKa0wLenrbq7tqSip7CguJKNmL3qxt/7s8iA8e/B6dnbk6e1idGMxK2ktKvcoKqSu4epx9GGnOfvjv+WsIL0j4mQqpuDjpuJlJSHlqaZhJGbjoeBioeAgoWLh4aBkIqJg4aIh4mBg5SWh4eZkIGHh/+Qno6Ml4r4lZKLnIjsioj/+9Wto6Dyqa+PrOCy4rWQi8vgx/K3mJTE0u6AqtXDxYGXpdzSwdZ6n4uotbOwpKW3vKygrLarnbO2pKq4p6e3qKyyrK+tsaiwoZSykr2Fo96eeJN0qMnIpHmRe4zipMfKoXePeZXes7PFo5LFm6Gem6qjt7ivpqeonaqpmqewmJ2topSgq6KUmaSmo5KRlZ2QpoOAia/StcfjoLOA29ew0cXEhZakfLx/sJ2VopvSm6WNt4Okv8iAld7lh/SQp3zqiIOKopR9h5ODjo6Cj56Sf4qUiIF8hIB6fH6EgYB8iYSDfoCBgYN8fo2QgoGSiXuBgfSKl4eFkIPujouFlILhg4Lz7sumnJrln6aJnMehzqOCfrjLst+kioaywNiAoMi4uHmPm87GtMZyloKeqaimmpuqrqGWoKmflKepmZ+rnJ2pnKCmoaSipJyklomliK98mM2Sbohrm7m3l2+EcoLPlri6lW2EcIrMpKS1mIi1kJSQjpuVqKihmZqaj5uajpmgi5GflYiSnJSIjZaXlYeFiI+EmXh2faLAp7XQlKWAysajwLa0e4uWca52pZKLmJPRm6KKtYGfusN8kdnfg+2LoXnlhH+GnZB7hI6Aiop+i5mOfIaRhX95gHx4eXuBfn15hYB/e31+fYB5e4mMf36Phnh9feuFk4SBjIDoi4eBkH7cgX/s6MeimZjjnaWHl7mTv5d4day+pdCZgX2mtcoDent6hHsDent6rHsDfHt8hHsDfHt8hnsDfHt8r3sNfHp7ent6e3t6e3p7eot7BXp6e3t7hXoKe3t6ent6e3t7erF7AXqGewF6hXsDent7h3oHe3t7enp7eoR7A3p7eoR7Anp7AgIBAIC8+cHuyeTS5PLLhseXsqSin52nq6ynvMvDtcfLtb7Our/NuMfDvMm4pMucqaG5uaWXqLmrpvWwgaiFpY2gjKCKnYigh6aBr/i189DLz9jk3cCsyM++n7iwvqCwv7O5ybS9vqa2w6mywa+itra6mc6Y25XUjfb3u+bY1YiynJumzoCF2uvA/cvykZDM6s/vxO66k6iQqI20z+KRhOSNjZek9YaciJyk9IuWhqKh/4mXipWPhpudhouYj4X3iYL9gImF//+Hh4SAhYqJgoqSkYKOloKCioGOmoyVm4mLh4aelPSF/4ShieiGhYX4vKyK2aaqgaeRm5rFieXS6cH0vvK3+oCt4rLYudDBzt25erOJoJOSkI6YnJ6Yq7ixpLW5pKu6qK65prSwqballLiOl5Gnp5WIl6Wak9mecpZ3lH+OfI96jHiOd5VynNuh2Lq0vcXRyrCdtbuskaafqY+dqp+lsqCpqZOirpeeq5uQoaKlibiJx4jBguDiqM/DwHugjIuVuYB3wtWt5bjbfHe21bjYsditkKGLpImtx9mKfdmGh5Cc64CVg5Wc64WPgJqa9YOQhI6JgJSWgYaRiYDtgnzzeoN/9vaBgX56foODfISLin2Ij3x8g3uIk4WOlIOGgoCWjul/836Ygt5/f3/stKWFzpyieZKDj420f9HC07LdsN2p4oCk1qfKrsW3w9Cuc6iAlomKhoWOkZSOoKylmKqsmZ+tnaGtmqijnqmai6uFjYibnIx/jZqOiciSaYxtiXSFcoRwgW6Ebotoj8mVxqumq7bCu6OSqK2ehpmTm4SPm5GXoZScmoeVoIuSnY2Dk5SXfql+t36yeM/Sm760snGUgoCJqoButMag1anKZlWmxKrIo8mnkJ6Jo4apwdOGetSDhI2X5n2Rf5GY5YKLfZeW8H+LgYqGfZCSfoOOh37of3nueH988fB+fnt3en+AeoGIh3uEi3l5gHeEkIKKkICCf32SiuN87nuUf9h7fHzmsKGDy5mfdol7h4aqecW3x6jRps+g1gl6e3p7ent6e3quew98e3x7fHt8e3x7fHt8e3yvewN6e3qKexF6e3p7enx8e3p7ent6ent7e4V6A3t7eoR7AXqFewF6hXsBeo17CXp7e3p7e3t6ep17Cnp7ent7e3p7e3uFegR7e3t6hnsIent6e3p7ensCAgEAgL3vwuPzxZStqpi3h76Iv4zBlbmeqqOnl62hwbPQvL/QucnApcCjnrqvmLS6pZy2vrmkpranqfXF7NHe6cD9q4WghaKDr/rG3uDj187Q0sq60fLku7fTzKatyqmptLOpt8invb6pw7y1vs6uxKzBptOm0aTXmeON1+H93uPS1OnagPvCmpW69sqUiuDK7Lyv85uct4aqzOON+PWbjpOKgqGSiJX/mZWMnIaMlYelmfuNjouRhJGXhYubifOAhv33iIWA+4aFgP+IiIOHkYyCko37hYOHlY6TmoGHgYOkioiH9aCTgYTrl5bq+oGK+sKxiICklL7trYy6lrygo7+K1OHlgK/Zs8/fs4eemoqmeqt8rH+uh6iPm5OXip6TrqS+q6y8p7Wula6Uj6ediaKolY2kqqaUlqSWmNqw0rrG0KvhmXaPdpF0nN2wxMfLv7m8wLiqwNzQqqa/uZadt5mZo6CXo7KVqqmXr6ikrLyftJ+ymMGYvpXFjM+AwMzjy83Av9TEgOOvi4an37aDeM2216qc55eWs4KkxNmG7uuUiIyEfZqMg47zko6GlYCGj4Kdk/KHiIWLfouQgISThOl7gPLsgYB78oB/evSCgn2BioZ8i4fxgH2Bj4iMk3uBe32chIKB6pmNe37gkI/f73uE7rmq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m6vVmZ9yiaF3j5Z8k4uJlIaNio6LnJ6lmqSZpJWqmqaInpmTpo6doI6fn5SYn56clZ2ezWzPpWptqGt2r252rM5ws8Jtsb7GvKq2s66YqqqVpqqOraKcsaJ2u8a+0LHMs7mVnqGWmZWXkKaUpZiHrJCUs4WlttSDyteEuYBzh6qFdbCFdKKButGJyoKj2nl46pjmfIaO5oSKgXiDinh9fYt3hXqJfo/tgHiIe4CEeH6AhXqGfXuJfN945O176OZ46OZ77+l56np75Ht6fumCfnqEe3vsiON+5ZOBh+uNh4bmkIx+642E5IeC2+aGyLaBfIOXiHKpnnGzoNOtpwd6e3t6e3t6sXsRfHt7fHx7fHx7fHx7e3x7e3yUewF8nHsEent7eox7A3p6e4R6CXt7ent6e3t7epB7AXqQexZ6e3p6e3p6e3p6e3p6e3p7e3p7e3t6hnsfent6e3p7e3t6e3t7ent7e3p7e3p7e3p6e3p6ent7eod7A3p7ewICAQCA+Ly5mf3AuI6luKiNrK+SpbSgq6Wgoqawsby3tcG2xbfEu8C9xsO1sLe9q8C5r8G9sri4wbu4zdi8vcbKubjBwLnAxcPE0s6syYmG6eD5783Dw8vDs8Oxvb+w19Hu3vDZ8Nrv1/LZ4s+3vbe6tLS6tq3Dsqi81JS56perrsKPpruAmYu1uIegtaCJo7GK2oix8fzvhZfmlY6Egp7viIuV7YaOi/qHkof/gZGFiYeE/I6Bg4v+goaC/Yf0h4Png/j2g/b6gvKBgviCgvmH9oCEgfmFg4OG/fqIi4mIi4qTiIqFnIONjp7+mJSP+aL8gZOA7pHewIWD9qK5m4m9wIufwK2A5a2ojOivqYKXppmAnJ+ElaKQmpaRk5egoaqlpLCmtKazq6+rs7GloaasnK6on7Csoaior6mmusKsrLS3qaevrqivsrCzwL2cuH161s7k2ruysrqyo7Kira+gxb/cy9nG28jaxd7H0L6nrKWooqOopZ6wopiqv4ao1oqcn7CDmKqAi3+lqHuTpZJ+lKiG04Sr5/PmgJHdj4h/fZfngYWO44CIhfCBi4H0fIuAg4F/8od7fYX1fYB98oHrgX7dfe7rfezufel7fe58fO2B7Hp+fO+AfX1/8e+DhoKChYSMgoN/lX2GiJfzkY6J7prxe4x644vUuIF+74+pjn6sr4CRr56A2KOeg9ylnnqOnY94kpV7i5iHkIyIiY2WmKCamaWcqJunoaSgqKaal5yikqOdlqWgmJ6epJ6brbWgoKernpyjo52jpaWns6+RrHJwx7/Syq2lp66lmKaXoqOVubLMvsu5zLvKt8+5wa+boZqdl5idm5SlmI+etH6dyoKTlKR7jqCAgXaanXOJmYh1jKaF0oKo4u7hfY3Yi4V7eZPifoGK3XyFgep9h37ueYh9gH587IN4eoHwen167H3mfnvZeujleufoeuR4euh5eed953h8eel9enp86+iAg39/goGIfoB9kXqDhJTuj4uG6ZbseIl33ofPtIB974eghnajpXiHpZQFent7e3rEe4J8v3sCenuGegN7e3qFew16e3t7ent7e3p7e3t6hnsBeoR7Hnp7e3t6e3p7e3p7enp7enp7ent7ent7ent6e3t7eoR7gnqPexJ6e3t7ent6e3t7ent6enp7enqJewICAQCA66Shl4CEvr27vb7DrqS0v6WmpqClq7a9ur+zxbPCtL66wtHA0MPJyam9sLjAxMDDytrl0s7n79LJt7m0sLKztbu9vsHCxcTCkf+Lk46KkZqNhuvm7c20zsHm9Orq7eDz2+/Z7Nfq1uzc+s6ttrXBvLCuvrqhnbCyqqejnLSDk62ApP+En6qVgJmqlf/0gK7w9O+Kiu6a/YCXg4aNke+VgoaHjIn+joKS+YaDi+6Dg/aH+f6Gg/6G+4eB/Ibt8/XugvX7gPaCgfmF94H/+4iAgoiGhYb+gIn/iviB/ZGBgI6LifGfgoKOk4GLoP+bjfiKiOyP3bWMgdiykKGY+4uho4aA1pWSiXR4rayrrK2yn5akrZWWlpGWm6Wrqa2is6Kxo62or72uvrG4uJqsoaivsq+wtsXOvbnP1722pqmjn6OkpKusra6vs7GwhOh/hoF+hI2Be9nT27ulu7HS4NfV2czeyNrG2MXXxtnK5LydpqWxq5+grqmRjp6impqUjqR5hp6Al+t5kZuJdYyaifvwfqjn6+WEheWT8nqRfYGHiuaPfYCBhoPziH2L7oB9heV9feuB7/OAfvKA8IF98oHj6evkfevve+x9e+1/7Xz074J7fIKAf4DzeoT0hOx88Yt7eoeFg+eXfX2IjXyFmfSUiO6Eg+OK1K6HfM2dgpKI432Rk3mAyYuJf21woqOhoqOmlY2ao4yOjYiNkp2hnqOYqZqlmaKepLGjsqasrJGil56kpqWkqLe/sa3BybGpnJ6XlZeamp+goaOjqKaletd0fHh0eoN4csrEy6+ar6fF0svIy7/PvMy5yLjIucm81K6Tm5qln5WXo56Hg5OWkJGIhZhxfZOAjNtxh5CBboOQg/vufaXh59+BguGP7XiNen6Eht+Kenx9gn/thHqH6H15geB5euV86e19e+x96356637e4+beeubpeOZ5eOh86Hnw6n94eYB9fH7td4Huged57Id4d4SCgOKTenqEinmCle+RhemBgN+H0KqGfMyTeYd/03SHinEBesd7Anx7iHyvewF6h3uIegV7e3p7eoZ7AXqGexh6e3t7ent7e3p7e3p7enp7e3p7ent7enuEeg17enp7ent7ent6e3p6h3sIent7ent6e3qGewF6iHsSent7ent7ent6enp7enp7e3t6hHsCAgEAgPydk52ajLK/wLy3ur26vcG/xc22uKqtrLStvrHEtMu/yce/0MvG0MfIo93L1tnd2dbT2Obe0tTh4r+3trW3uLm7u7u6vMHRy4WRkIeJj52SioyOiIiBlvnp7vH03/Lt5fne693m2+PY6Nnbvrq+q7y6sq2tq6qrpqSlrpmOnZitgKCLgZGfpqaH9s6D+6be8eyOhP6X+5Ca+Zn48oj/hYKQ9ICS6oD9hf/9iPiI8veD9Ib2/oL9+4H1hPOFgOj47P/z9f7vgfj+gvGC84X2gISDgYiAiIf5jfqFhIKJ+4qNiIiIkoKQlvufi4GYiIqV/IuL8ozboaX6rZiI+4iYnZaDgOaOho2LgKKusKynqq2qrLCutrymqpyenKSdraGypLmttbauvre1v7e3l8m3wcPIxcO/ws/KvsDMzq2mpaWoqKmpqqqqq6+/u3mDgnp8gY+HfoCCfn52iufY3N7gzd3Z0uTM2MrSydDG1sjKrqyvnKyqopydmpqalZSVnoyCkIuegJOAdoSSmJl838l/9qHW6OSIf/WR84uV8ZPv6YP2f32K63uN4Xrzf/Tygu6C5+t96oHs833y8Hzrful/e97t4vTp7PPlfO7zfed86X7sen58e4F7goHuhu9/fnyD8YWGgYKCjHyKj/GYhnuSgoSQ84WG6YbSm6D1m4h85XyKj4h4PtiFfYSBd5ikpaKdoaOgoaWkqa+coJOUk5uUo5momq2iqqujsq2rs62skLurs7e7uLaztsK9s7S/wqCZmZqdhZ6An6Cksa9weXlxc3eFfnV3eXV0bn/ay9HR08HQzMXXwcq9xLzBuce6u6Kgo5KgnZaRkpCPj4uKi5KEeYaClIp3bn2Hjo9108l99p7R496FfPGO8IiS7JDr5IDwfHqH5XiJ3Xfte+7rf+d+4OR65H7n7Hrt6nnme+V8eNnn3e7k5u0933jq7nrheuV753d7enh/eH9+6YPqfHt5f+yCg39/fol6h4zrlYN5j4CCje6Dg+WDzpif9Jd/c9Z0gYV/cAF6x3uPfLF7BHp6e3mEeix7e3p7ent7ent6ent6e3t7ent7ent6e3p6e3p7enp7ent6ent6ent6e3p7e4h6CXt6ent6e3p7eoh7A3p7eoR7AXqJewF6h3sFent7enuFegN7e3qFewICAQCAipeWl52RtsXFxL+8wMC7wsbGw8OntaS2r7bBu7XFwNXJxtPIzM+6t7i0vtbb3dra3djV2eTx9fDrwLOysrG0t7azsrG1t7iSg4iNk5eamJGNjY6LhYGB08KA2e735/D14vXl6Ofb5tTR0r3Dx8zEvru+t6ypp6qmpaiclpSwmZuAnZeGh4+Vm5+YgKCh0ILmkYCDkPuYjoaW6YGL8o6M+Y6A+I36goT2iezxguqD+fCC6Yb08//vgeuC+PuB3fPp+u3u9ez+7P/19/jy+/SC+vmF+IX9/Y2BiIP0jfzyjPv4j4SGjYWDi4mHlYuMj4CVgYqD/4bIhcvOs5GUlpWZk4iAfYqIiY6EqLS2tq+tsLCtsra0srSapZanoaavq6WzrsK3tcG3usCtqaunsMPHyMXGyMPBxs/c4drXrqGgoaKlp6ajoaGkpaiGeHyAhomMioSAgYJ+eXZ3xLR3ytzl1t7j0OPT1dTK08PAwa2yub20r6utpZuZl5mVlZiOiYehjI2AkIp7e4SJjpGQf5+cyX3ejHx/i/OTiYKQ4X2G6omH8Il77ofxfX/sg+PnfeB97uZ84IDq6fPme+J87vB71ejf7+Tl6+Hz4vTr7e/n8Ol87+1/7X/y84d7g37oh/Hoh/HuiX+Ah4B+hYOBj4aHiXqQfIR/9oDAgcTInYSGiYeLhXuAdYF/gIR8n6usrKajp6WiqKypp6mSnY6emZ2mopyopbatrbetsLalo6OfqLe6vLm7vLe2usLP1c3Lo5eWl5ianJyYlpiam51+cXV4fYCDgXt3eHl1cW5vtalwvtDYytLXxNTIyMa8xbeys6GlrLCoo5+gmZCPjY+Lio2Ff36Wg4SAh4FzdHuAhomNfp+ZxnvaiXp8iPCRh4CN3nqC5YWE64Z46IPsen3mgN3hetp66OB523zj4u3heN156et40OHa6d7f5dvs3e3m6Ori6uN56ud8533t7YV4f3vjg+vihOzqh3x+hX58g4B/jYSFh3iNeYJ98X67f8TJk3t+gH6CfHPHe5B8A3t7fK57B3p7enp6e3qEewF6hHsaent7ent7ent7ent6e3t6e3p6e3p7enp7enuEegZ7ent6enuRegh7enp7ent6eoR7B3p7enp7enqSewJ6e4V6h3sCAgEAgJGWkpScrK+1vr23tbvAvsDHwreur62sprG5rrPBwcnBzMjAw8a6wbnCvb632OXp5+Po6ezs7e32+viusrrGzNXY08vAu7nJpJCRk5WXlpeUkZCMh+XU0czOwsu9zd7y6/jn5vLj2cPd0cfGxcLJwsC9urerrK6joaSqoZCstJaXgKCcl5COkJOFyemHxIPfkvKBi+uN+4iC+oH6iPaCifL+hPP/g/P6/fH88e2C4/j/6oHm+fXw8u/68IDwgeXu4/Hq6e/o9un86v3x+PT98vqE7oHygof7hYD+iIaCiYv+gIn2hZGBj476lIGDkIOT+5DvhePn5qHy26iYlJGRkI+NgIWKhoiPnqKnsLCqp6uxrrC3sqihoZ+emaSqoKWxsbeyu7mxtbittKy0r7Cqx9HT0s7T09jY2Nnh5eSfoqu2u8XGwruxq6m7l4SFh4iLi4qIhoOBfNXEwry/s7quvM3h2ufX1uDSyrTLwLa3tLG6tLGuqaacnJ6UkZSbk4SdpYmKgJKQi4SDhId6xuOFv3/YjOp9huSI8oN88n3xg+19her0f+r1furx8ujx5+R83O3043vc7uvl6OXx53vnfNzj2ebg3+Xe7N7x4fPn7ury5+5+5HvmfIDwf3ryg4B8g4Xye4PrgIt7iYjwjn1+in+N8ovngdvf3pzv1JiKh4WEg4KBgH2Cfn6FlJqfqKehn6KopKetqZ+ZmZeXkZyimZ2pqK2osK6orbCmrKWtqKiivcTIxsHHx8vLy83V2daWmaGtsbu7uLCmoJ+zkH1+f4GCgoJ/fXx5c8W3ta+wp66hr8DUztvMydPFvKe8sqmqp6StqKainJqRkZOKhoqRi3uTmoCCgImHgn17fH9zyOKDu3zViud7hOCF7YB67HvrgOl7gubvfOXwe+Xs7OPq4t941+fu3XjX6OXf4t/s4Xjhedfd1d/b2uDY5tjs3O3i6OTs4uh633jgeH3qfHfsgH15gILteIHnfoh4hoXri3p8iHyL7onkf9nc2pnt1JSCf3x7e3l5x3uNfLR7hHoYe3p7ent7ent6e3t6e3p7ent7enp7enp7h3oBe4R6AXuIegN7enuTegp7ent6e3t6e3t6hXsEent7eoV7AXqGewR6e3p7hHoDeXp6h3sCAgEAgJuYm5aktLizsbm9trLAwcLKuLGvsLK1sq2zvL61srTFvb+7zL/AwsXKy8XJvdXw8Ofl5/D/goaE//G9tsfEvb68vMfFy8qHkY2PkpCSk5WSkpSY7OPa1c/Pw8fCv8/G1/eB3tzBzcrGxb3CwsXGwsXAu7OvrKusqKOgn56rtJaegKGfoJ+foJOigJOv7OSF8IWC64nvhu3/5YCE6oT/8f/3+uz1ge38gO/36+ji9u3m9uT27fXs+uqA7/rx8+PW5+3p6Ozu8O/z7v3zgPD6+IH4g/SC+4CGgYH7hvn/j4iDkYn3hIOEh4KP94eP+obrheaH54Lr79CMn6/skJOTlJSVgI6Mj4qYqKunpa2uqKazsra6qqShoqWopqGnrrCnpaa2sLGuvrGztbi+vri9ssfc3dTT1Nrqd3p47OCwq7y4sLKwsLu5vb1/h4ODhoWHiIqFhoiK29PJxr+/tbiysL62yOV30Myzvrm3tK6xsrS1srexq6OfnJydmpSQkZGepYqSgJSTk5KSkoiZf5Ks5t+B6oF/5IToguX23nyA4oD36Pbv8OXsfeXye+bu4+Da7eXe7Nvs5Ovj7+F65u/n6drN3eHe3uLk5eTo4/Ppeubu7Xvtfup88HqAe3vwge71iYJ9i4Ptf31/gn2J7oKJ8YLjgN6C4H7k6MqInKrThYeHh4iIgIaFiIKPn6KfnaOln52qqa2woJ2am52hnpmgpqifnp+tp6mntqqsrrC2trG3q77P0cjIyM7bcXNx39Sno7OvqKinqLGvtLN6f317gH6AgIN/fn+BzMW7uLKyqa2npbGqvNhxwbylr6ypp6Klpaiqp6uln5iUkpKTkIuIiYiUmoKIgIqKiomJioCVf5Op49t/5n994YLkf+Dw2Xp93n3y5PLr7ODneuHteODp3tvW5+DZ5tbm3+Td6Nt34eri4tXI2NrZ2N3f4N7i3ezid+Dp53foe+V46nZ8eHfqfenwhoB7iIDpfXt8gHuH6oGH7YDgftuA3X3g5ciHnqvFfX9+f4CAtXuDfI57jXyOewF8pXsCenuEeg97ent7ent6e3p6ent7enuHegR7enp7kHoBe5J6Cnt6enp7ent6e3qEewR6e3p6hXsBeoZ7C3p7e3p7ent6e3p7h3qGewICAQCArrCtq52psKakoqe5vLzLvrK5sbSytbi5uri0s7PF6obxzce9xNHKzsXExMbEw9nx8Ojt7Ono6NnMysrHvrq6u7m6u8C7wePp8fH9iZGKj4yWlvvr2NnT09rNyc/Jxc/e/ILowMvIxL3IysnLx8S5s7zBs7ParaekpqWnw7i6r6WAsqioq7Otl73gkMrr5v32/vKD5YDpgOeI9Pr5/oPn/f7u9PL07ejn+d7r7unk6/Lq8/D56PPu+vL47fPj38vS2dvc4+7r8uPy4vbs8+j874OCgfqBgPf4gIP2+f2C+fyOg/2A9ob3i42C/OiB64XshuWG5Ynl8q7mt5qfpqirr62AoqWioJOdpJqZmJysr6+9sqWspKamqausrayop6e4233hv7myuMS8wLm4ubu3t8ve3dXc3NnZ2M3BwMC8tbGxsrGxsreyt9XZ4uDrgIeBhIKLiurdysvGxcvAvMC6uMDO6njWsru3tK23ubi6tbOqpbCypKPJnpiWmZeZsamroZeApJubnqagjbvdjsbn4vjw9uyA4H3jfOCD7PTx93/g9fXn7Ors5eHg8Nbj5+Hd4+rh6ubv3+jk7+ju4+na1cPJz9LS2ePg59nn2Ozi6N7x5X58e+98euvteX7r7vJ97vKJfvN67YHuhoh98+B944Djgd6B34Xg7KrktoqVm52fpKGAm56bmIuWm5SSkZSjpqezqZ2knZ+foaSlpqShoaCx0XjWuLOrsr20ubKxsrSxscTT0svQ0c/OzsS4uLi2rqqrq6qqq7CqsMrM1NPcen96fXuEgdvQvr+5ub+0sbSurLXC23HHpq2rp6CqrKyvqqiem6WnmZi8lI6Mjo2PpZ6hmI+AmpKSlZyXhb7fjcPl4PXs8+h+3XvfetyA6vDu8nzd8fDj5+Xo4d3c6tLe493Y3uXc5OHo2eLe6uLq3uPV0L3Eys3M093b4dTg0+Xc4tnr33t5eOl5d+bodnvl6e176+6GfO946X7rhIZ88Nx84H/hf9t/24Pe6ajkuIWOlJaWnZqfewF8q3uHfI97AXyle4p6B3t6e3p7enuEegF7snore3t7ent7enp7e3p6ent6ent7ent6e3p7e3t6ent6e3p7ent6e3p6enl6eoZ7AgIBAIC3sqimoKGjrK2qr6ihnK230Lq6s7S1uLu7vLzI6vj+goqI+NXHycnHyc3P0NPd09zEx8nI0NHJy9nczcK/wcfLz8/Oy8TQ4e/v8ejl+PLv++bt7O/u397W0NjX3t3qhIKC/vf/9cXAxcfFytDGvsbz3OK9wLyuq8Gru62zt77LqoCtqqetrKuJ75qv8+CD4YPvguqB5fvuhPGD9Ijt8O/x/+Lq7uXw2OTn7+nj6+3x5Ono6dzh3+Ts4+Ta4dnl0t3g5ebk5ubj2+Th7eby5dzp6PX19er6/Pv28vn7+e7t/IT/gvmB+vD03/bmgeOB7ofngeOF5v/q35GWmJumoqesuYCspp2blZaXoKGfopyWkaGswa6uqKmqrLCvsLC62ufseoF/6sm8vb68vsHDxcjQx9C7vr++x8jCw8/Sxbu4usDEx8fHw73H1eHi4trY5+Pg7Nrh4ODg0tDIwsrIz87bfHl57ebt47eytbi1ub62r7XhzdGvsK2gnbKfrKCmqK67nUCfnZqfnp6A8Jqt7tyB3YHqf+Z+4PXogOuA7oTn6+nr99vk6N/o0t3g6OLb4+Xo2uDg4NPY1tri2trR2NHcydTWhNs83NnS2tfj3Ofa0t7e6erp4fDx8Ovn7vHu5eXyf/Z+8Hzx6OzY7t993H3ngt9+3IHg+eTajpiQkZyYnKGsgKSgl5SPj5CZmZiclY+LmaO4pqaho6OnqaiqqrTR3eJ0e3rgwbW3uLa4ur2+wci/ybS3uLi/wLu9yMq/trK0ub3AwMC9t8DM1tXXz8zb2NTfz9bU09PFxLy3vr3Dw891cXHe193TqqWpq6mtsaqkqdPAwaOkopWTppWhlpueo6+TQJaVkZaVlXr0nKzs24DbgOh95H3d8uR+6H7qguTo5ufy2ODj2+TP2Nvi3tfe3+LV2draztPQ1dvV1MzSzdbDztCE1TzW1MzV0d3W4dXO2djj5OPb6+zq5+Lp6+rg4e598nzse+3l6NXq23vZe+SA3XzagN744teNmo+KlpKVmqSfe4N8vHuDfKZ7hXoPe3p7ent6e3p6ent6e3p7xHoFe3p7enuGegl7ent6e3p7enuHeoZ7AgIBAIC7rp6ip7O8qp2dqaimp6bO0d7e487Tv73Bw9H8gYKDh4eIjpOE0MrSy93b3+Dc8N/W1Mze2NXi5+Hi4e7b39vV0NDR1dzv/4H17YCG8PPu+Pfp7ODh6ePj29XQ54qPiomHg4GBgY3TwL/Qw9LVzMnKvePCxK25vcW+vqyvlbrItoCno6iyvLbQ6Iza8o34je+J+IHp9fnw7u/6/PDt5fPo8dzk5+fs5d/X497n4unh4+Hk29bc2ebd493h5efq1uHS3trZ6uDo2eDd4PLt/Ojg2+Xp3efj8+r39fXw8+3v9u/x9en54e7j7+Ht4/nigfKN84Hf8vnn97PilfuwpZ+fsoCwo5SXnaeun5KSnZybm5vCxdDQ1cHGs7G2uMXteHp7f39/hol8xcHHwdDP0dDO4NTMzcXW0M7Z3tra1+DU19XQysrKztXk8nrp4nl/4+bj7O3e4NXU29XVz8nE2IGGgoB9eXh5eILEtLG/tMHFvru9sNO0tKCqrrawr56iiqy3p4CalpujranL6Y3Y7ov1jO2H9H/l8fTr6ur09uro4O3i69fe4eHk39fQ29ff2uHZ2tjb0s3Sz9zU2dTY3N3gzdjJ1NDQ39Xez9bT1ubi8d3U0dre09va6eDs6+vm6uPn7Ofp7eLx2ufc59vn3fLdfeqH6n7b7fTi8rDjl+amm5aVp4CpnY2Rl6Cnl4yLlZSUk5S6vcfHy7i8rauwsb7kdHV2eXp7gIR3v7vBvMnHx8fF1szGxcDPysjT19PU0dXO0M/KxcXEyc7c53Xg2XR42NvY4eTV1srKz8fIw7+6zHp/enh2cnBxcXm3qaazqLW7tLC0psSnqJWfpKqkpJSXg6CtnYCSjpOaoqDL7I3W7Yr0i+yG8n7k7/Lo6Ofx8+fm3urf59Tb3N3g29PM1tLa1NvU1NLVzMjMytXO1M7T1tjbyNLDzsnK2M/YydDN0eDd6tfOy9TYztXV49vn5+fi5uDj6ePl6eDu1+PY5Njk2u/ae+aF53zY6/Df8a/lm9yflZCPoJx7iXyiewV8e3t8fJB7inyge4V6B3t6e3p7envbegV7ent6e4Z6A3l6eoV7AgIBAIC/qJmnwqmgoK6zoJ2np8LW4NPi2uPn7OfL3f6ChISGhYiLiomHkOfi4+Pl2+Ld4er14OTa4ezk6PP3+eng5Ovw7uzt8e78+/X7/PD3gPn++vjz/fPo19/d4/WAk5KPj5GRiYOD///8683f6NfP0MrCxuDCv77CurOoucjBjrDBxICmorXDsaPSvLb894OJ+o3uhf/9gPGC6fXh8eP27PXs7uHj5eTm5eHb0NTQ3tfX0d/b2d/a4dba19zq3+vn4NPQ19XP4dTi4N3o29zn5vLc3urs7t/n5erk6ubn5uvo6+zm29jb1+Pj7+jx5ebs6fzvhuDt9+SH49iBhZGruKaXpYCznpCctZ6WlqOolpScnLfK0sfUz9TZ3dfA0/F7fH1+foCEgoKAid3W19bWzdPR1t/p2N3U2+Pd4+zu8uLb3+Tp5+bl6un08uzx8ubqee3z8e3n7+fcztXS1+h5i4mGh4iHgXx78O/u28DR2cnBwb20t8+0sLCzrKacq7eyhqOytYCbl6i0pJjSvbb59IKI94zthP37fu+B5vDd7eDx6PDo6N3f4N7g39vVys7K1s/PydbT0NbS2M3SztPg1eHc1srGzcvG1svY1tTe0tLd3OfR09/h5Nbd2+Db4N7f3uLg4+Xe1dLV0d3d6eLr4OHn4/fpg9zo89+F39WBiISjrp2PnICrl4qWrZeQkJyikI2VlK/Cyb7KxsnO0sy4zOh2eHh6eXx/fX18hNfQ0M3Lw8jHzdff0tjP1t7Y3eTn69vW2t7j4eDe4uLu7eTp6t7idePo6OPd4tzSxMjHy9tzhYN/gIGAeXV04+DezbXFzb23uLOrrMGopKSooZyToqyngJqoqoCTkKCqnJHVv7b484KH9Yzsg/v6fu+A5O/b6t7v5u7l5dvd3drc29fRxsrG0crJxdHNzNHN0sjNyM7Zz9rW0MTAx8XB0MXS0M7YzczW1uHKzdjc3tHY1tvW3Nrb2t7b3+Ha0c/Sztra5uDo3d7k4PPmgdrm8d2E3tOBjIGdp5aKlpt7i3ymewF8jXuKfKJ7hXoLe3t6e3p7enp7envaegF7hHoBe4V6hXsCAgEAgL2jlLOxqKK2nqK1rJ+93OHP3tvm4ub17MK3v+GAg4aKiYmOivTg4Oj07/H17/by/PiC7P+Em9e/g6S+0+Tv/YaLi4qIg/ziyqj8o4+Eh4WHh4j79oj88/r8gouRjY+QkI2MiIOF8eDI0Ovi5tfS1cnIx8O+ucSluL2xqcSnzK7FgKKmw6mhmfah3veN9YeD9Yrt/YX5gfD97/jx8u7r6enl4+Hd3tnd1tXW1NDU1M3g0tLQ1dvJzdPT4tbY1dDSxcrMzc7S09Hg3eHo4ebe4O3i3eLk7eLo5tzl3d7g4d/cy9HN09TW0dvU5d3p4O3j3vXb8vLnguf08Kl7ipGiu5mWgLGZi6ilnZiqlJiqoZay0NbF0s/Y1Njm3bivt9d5fH+Dg4KGg+jW1t7q4uTn4unn8e595viAldG4fp23y9vl84CFhYSCfvHYwaHxnIp+gYCCgoLw64Hv5u7weoKHhYiIiIWEgHt949O9xN3T18rEx7u5uLWvq7Waq7ClnrecvqK3gJictZ6YkPak3PSM9IaD9Yrt/IX5gfD87fTt7uvo5ubi4N7Z2tTY0dDQzsrNzcbXy8vJztLCxcrL2s3PzcfJvcLExcbJysjX1Nfd19zU1+LY09ja49ne3dTc1tfY2tjVxsvIzs/SzNbQ4dnk2+ne2vLX7u3igOPw7ah/hImar5GOgKmThqGelZGijpGim5CsyM69yMXOy8/c07KrstB1eXt/fn6Cf+LR0djj2tnd19/d5+V44fF8ks61fJqzxtbg7X2BgoF/e+rRu5zql4d5fHt+fXvl4Hrj2uHic3l/foKCgn5+enR21sWwuNLJzMC7vbKwrqyloaqSoaadl62Us5uugJGWrJiRi/im2/KL9IaD9Irt/IT6gfD77fHr6+rn5eXg39zX2NLVz83Ny8fJyMHSxsbEycy9wMXG1MjIx8LEt7y/v8DExcTS0NLX0dfP0dvRztPV3NTa2dDY0dPU19XRwsnFy8zPytTO39fi2efd2O/W7Orhf+Hu66iDhIOVqIuInHuIfI17B3x7e3x8fX6Hf4aAhH8Dfn59hnwDe3t8hHuMfKF7hHoLe3p7e3p7enp7envfegF7hnqFewICAQA4rZKTqcLRz8W8zb+81tjd1eHf8vLz9OC1srG2urbRgIiIgObe3+Hj7fCB//r++YG5qZLSjKnCyMmFygrLysvMzc3Ozc3OhM+AzLiW5KGxuI+DhISHhoeEhYX77P6NkYmNhdLU08XBwOPhz9fOzcvQxsi/scq1udC9tsW+wta5286g2MLRo/H6hI33goTyhH3vhu75gfb88fTn5+Dh3d/b2NbQ1dHQ19Hb1M3TzsnD0tbJ0tnV283L09XW3MrP2dbS3NnT1tPR3OI14Onb1+Dh093e2Nnd3+Pe1drVw8TJzMvOzM3KzsnU1tTn0ufi4PPo7vjk9YLlze56+o6ml4o4oYqKnrfFxLqxwLSyy87SytXT5eXm5tOsqqqusq/JeoKCe9zT1dfZ4+Z79O/y73u1pI3Lh6O6wMCEwQXCwsLDw4XEgMXFxcbFwrCP2pmpsIl+fn2CgIF9fX3s4PKFiYKFfsjIx7m3ttXUw8nCv77Bt7qzpryrrcGyq7mzuMqv0MKYy73TpPD4g4z3gYTzhX/yh/D6gff77vHk5d/g297Z1dPN0c3M0szVzsjNyMK9ys7Cy9HN0sXDy83O08LG0M3J09DLOs3LyNPZ197Sz9bXy9TW0NHV2NrXz9TPvr/ExsfJyMrHy8bS1NLkz+Tf3e7k6vPg8YDhyvZ+54acjYISmYSElrC+u7Kpt62pwcjLw83KhNwgyqampquuq8V3fn941s7Q0dPd4Xjt5unnd7Gii8eFn7aEvIW9hL6Fv4C+v768qorSlKOqgnl4d3t5enV2dd3S5YCDfX52vby5r62sy8q6wLq1tbatsKmdsqOluKqksauwwqjIupLDvNel7/eDjPeChPWFgPSI8/yC+fvt7+Pk39/a3tnU0svOysnPydHLxcjEvrnGyb7Hy8fMwL7Gx8nNvMHKx8PNysXIxjjCzdPR2c3J0NLGz9HMzNHT1tPK0cu7vMHDxMbGyMXJxdDT0OLO4t7b7OLo8d7uf9/I+oHdgJSHfZ57hHyHewF8hHsFfHx+f3+bgAN/f36LfIN7hXyhe4V6DXt7ent7ent7ent6envfegZ7enp5enqEewICAQA1pIOTkLS3t7W2ubvAnZKXurHUkOzx0LGurbi3uLa4wvHz6ejp6vH09Pj+hufk05a/x8jIycqEzAjLzMzNzs/Q0IfRBNDR0dCEz4DQxJS2mZqTkZCNiISDgfj1k4Lm3tfQzsS5xMHq7N3Uw72tqJ7R0dPc0cjFw7u1q9Kb16mxt4d0s+z98PiI+n2BfX1/7/h+63/z8vPo7OTo1tfV0NPL0M3R0czPyMnTx8vY0MjZ19TOzMzZ2c/V0sPCzs3K0NjV1d/Y0NDc3N/VzTDX3c/U28rT0MjTzMe+v8HGxMXCwsPExcTDy8/Y39rm5OH17OL1/Ojv4o7VupuHn/w1mX2Miauvr62tsbO3mI6Ss6rKh9/kxqqnprCxsbCyu+fp4N7e4OXp6e7zgeDezJG4wMDBwsOGxATFxcbHhsiAycjJyMnJx8bGxsXFuo2skpSNi4iFgHx7euroi3zc1M3GxLuwubbd3tDIuLGinJTFxsbOxbu5uLCso8eVzKKoro99tez98PiI/H+Cf3+C8/yA7oD08vPn7OTn1dfUz9HJzMnNzMjLxMXNwsXRysPSz83HxMXR0MfMybu7xcTCyM87y83W0MjI09PWzMTP1cjN08PMycLMxsG5ur3CwcG/v8HCxMPCys7X3tnk4d/x6d7x+OXs35HmrpKBlvE6kXiFg6Wpqaanq62yk4qOrKXDf9bZvqWioqytrayvuODi29nX2N3h4+fuft3dyo+1vb29v8DAwcDAwITBhcMBwoTDgMLCwsG/v769vbKHpI2MhoOAfXh0cnLb2YN10cjCu7ixpq2s09XGv6+omZSNvr6+xryysK+opZ6/kcWcpKiTgrbr/PD5iP2AhIGBg/f/gfKC9fPy6O3k59bX1M/QyMrHy8rEyMHCyb/CzcW+zMrIwr/Ay8nCxsO2tsC/vcLKxsfQOMrDw83O0MbAydDDyc+/x8W/ycO+t7e6v7+/vr6/wcPCwsrN1t3Y4t/d7+bc7vbj6t6R8KqLe4/oknsBfJd7BHx8fn+lgAJ/fol8BHt7fHyje4d6Ant6hXsFenp7enviegZ5ent7e3oCAgEANoTK7dP34d/q5d/18Nnx64eKn6673cu6uLm1s7O6w9fx9f3/+v2CgYOEtJLAx8jKy8zNzc3OzoTPCtDQ0NHS09PU1NSE1QXU1dXV1IjVgLTtyqOYmpOKh4H25OeI6dnT2Me9tLe+07egoZ6blpiq2dLMwLWrn5SpjJ/0nPeZ4o94obvU59/h9nzufIF9fH96envz8vPn6+Xm5NrW1M/KzsrMw8rFxs3Cyc7EyNfSzszN0dfNx8nLz8PCzcrGyMnKy8rU2tfU09TV1MvO1MvQK9DDyL7Ftre7v7y6tbi5vLzBv8S+ytDL3tnO3+Lb5fLm4vD00520iZDrjNpCf8fp0vbk4ezp4ffz3vPsh4mcqLPSwbKxs6+srLO8zubq9Pbw8nx8foGvj7rBw8TExcbHx8jHyMjHyMnJysrLzMzMhs2FzIfLgMqr4cGbj5GKgoB66djbgt/Qys69tKuutMmtl5eUko6Qoc7Iwraso5iOoYia75fyleichqnB2Ovj5Pl+836EgYCCfn5+9/X16ezn6Obb19TPyMzHycDHwsLJv8XJv8PRzMfFxsrPxcDCw8e8u8XBv8HCwsPCzNHOzMvMzczEx83ELMnKvsO5wLG0t7u5t7O2t7u7wb/EvsvQzN3Yzd3g2eLv5ODu8tKfx4uK4obURnvE49H14+Hr6eP28t7x64WHmqOuyrmtra6rqamxuMrg4+7w6ut5eHqAro65wMHCwsLExMTFxcXExMXGxcbGxsfIx8fHyMiEx4DGxsXExMPDw8LCwqTZupKFhoF6d3HazM550sS/wrKqoqSrvaOOj4yLiYqaxsC8sKack4mchZbtlO6S7aaOsMXb7ebp/IH5gYeEg4WBgYD79/fr7unp59zX1M/IzMXHv8XBwMa8wcW7wM3IwsDBxcnAu7y+wba1v7y5u7y9vr3GyzbJyMfHyMe/w8nAxce7v7a9r7G0uba1sbS2urvAv8O+ytDL3NfM3N7Y4e3j3+3x0p/SjYXbgc4Be456lnsFfHx8fn+sgAJ/fod8BHt7e3ydewR6e3p7inoCe3qIe+J6Bnl6e3p7egICAQA6nK280OqCjpeboKuWl5OUkpCMwOPU1tvXzci1vtLK1vaD+vKGjs60nMLFx8rNzc7P0NDQ0dHQ0NLS04XUCNXW1tfY2NnZhdgB2YXbgNzd3t/e3b/xrqSWhvru5t/h4eDfz87Y2unz6q+Ym5KSioeJo52OgdvIycnX2N3i4d/YeL/IyamelZSQmKnD1ON2fXt8g318eu3p5eTh4+Lb3czVzszHxMnAy8PEx8HEx8jHy8vFw8PIy9LRzLy4xcfGx83Uz8zJzNHS0dHIycnBLsfMv8bAtbWosKisrLGwq62utbm5vL3Bxc3Uz93XzNff29PZ2c67tJbM33mTj48vp7jF2PCEj5ecoauYm5eZl5iYudjIys/NxcGxuczE0O5/8emBicmwmL7AwsXHyMmIywzMzMzNzs3Ozs7Pz8+I0ALP0IXRgNLS0tPT0rbnp5qNfu3i2tPV1NbVx8bOz9vk26aQk4uLhIGDnZmMgN3L0NDb3OLn5uPdfMfS1LOqo6Oep7jP4fB8g4GCiIKAffPv6+jl5uXe383WzszGw8i/yMDCxL3Aw8PCxcW/vb3BxMvKxbWxvsC/wMXMx8TCxMrKysnBwsO6LsHGusC7sbGmraWpqq+vqqyutbm5vL3Cxs7V0N3XzNfe2tTa2c+9tprj9ICbmJoyr7/L3fSFkJicoayanZmcmp2ctM/AwsfHwb2tt8jAzeh87OV+hsivmL2/wsTGx8fJyMiFyQPKycmJyoTLA8rLy4TKAcmEyoDJysrLyrDfoZCDdt7UzsbIx8nJvb3ExdHYz5yJi4SEfnx+mZeMguHT2drl5uvv7uzlgtDd4b61r7CpssTa6/qBiYeIjYaDgPjz7+vo6ebg4M/Wz8vGwsa+yL/Awbu8v7+9wMC6uLi9wMXEwLCtubu6u8DGwr69v8TGxMS9vb+3vS3Ct764rq+jq6OnqK6uqauttLi5u73Bxs7Vz9zWy9Xe2tTZ2c+9tpzu/4KdnqGFeox7AXyOewd8e3t8fH1/soAFf358fHybe4t6AXuNeoh74HoGeXl7enp6AgIBADqrqpqrqJSfrKauzMCysa6tq7jW1dXX1dbe7dnM1uOCiICGgrr8vcLEyMrNz9DR0dLT1NTU09PU1NXVhNYI19jY2dra29uE3IDb293f4ODh4+Tl5ubn5+bl5LGqyoiA9ung4dvS9YSH+/Dl4dqcioD6/uTigYyKlqecpabUv+m2ydDDherN7oSHioeCd9y3npGPpMd0enx4e3l54uLY2+Pl6ODdyc7Ey8HIwMTFusPBvMDBwcXJxr/BxMXGyMTFy8nGw8HCx8fGzTbQzcnJzsK+xLq5v7K2q6KkpaCdmJ2grKmssbS0u8DHxM/O0MnT08rDy8vEv6aNg7qMgb+Jjos2o6OVpKKPmaahqMW4rKyoqKazzMvLzszM0+HSyNDcfoN7gX6397m+wMTGycvMzc3Oz8/Pzs7Ohc8G0M/P0NDRhNKE04DU09LV1tbV19jY2dvb3Nvb2tmposCAeend1dbRyup+f+7k2dPOlYV89Pzm6ISOjJWjmZ+gzLjgscHHvIL00fKFio6MiH/ty7Srp73ffoOEf4J/f+3s4OLq6+zj38vPxcvCyMDDw7e/vbi8vLzAw8C6u76/wMG9v8TCv726u8DAvzfFycbCwsi9ub61tLqvsqefoqSfnJicn6uprbK0tbzBycfS0tPN1NXNx9DPyMStlo3Mm47DhouIL5+ekp+djJWhnaXAsqemo6OirsXDxMbFx83ZzMTM2HyBeoB9uPa4vsDDxsnKy8vMhc0KzMzNzc3MzM3MzIXNAs7PhM6Az83Mzs/Pz9DQz9DR0tPS0tHQo5y2eHHb0cjJxb/feHjj2s7JxI5/d+/86/GJk4+Vopecm8Wy2Ku6wbWB+9P0h4yRkY6F/N3Gv7rR8oaLioSGg4P08eXn7u7v5uDM0MbLwci/wsK1vLq0uLm4vL+7tbe5uru8ubq/vbq4tba7u7s3wMTBvb7EubW6sbC3rK+lnZ+inZqXm56qqKyxtLS7wcjH0tLTzdXWzsjR0cnFsJqR1aKVxoSIhZ57hXwCfn+3gAR/fHx8h3uCfIh7hHqQe4N6hnuHeod74XqDewICAQAwp6WkmZ+po5+ss+Lp6/n++efGzNra2dzk4cbP8dTk5/amjZa8wMTHyczP0dLT1NXVhdYF19fY2NiF2Rba2tvd3Nzd3t7e4OHi4+Tl5ujp6evshO2A7Ovp58rOi4j48OTZzszsg//o2MWvkuOEnKzJzMe40qSttrGk0uPgusHRv37g8YOHjI6PkZOPk5eShnW0i4CRvHF9eXly4d3k5+ft5+XKzcTHwL+7ucC3vL+5ur+/u77Gy8jCwsi/vsfEwsLBwcXKx8fFxc7NxsTHuLq4rLOeoZwnnJielpybmZuYrrKwtrm/v8bH0MvJwcXCvquXhYywwsrbvW7wqqCXL5+fnpSZo52ap6zc4OLu9PDfwMXR0NDS2dnByuvR3+HuoouUuLzAw8XIy83O0NDQh9GI0gfT09PU1dXVhNaA19fZ2trb29zd3t/h4ePj4uHg3tzAxYOA7OTZz8XD4n3z3tC+qZDnh56sxMS9r8ScpKunnMna2LS6ybmE7PaFiZCSlZebmJ6joJaG06iZptB7iIODevDr8PHw9O3pzs/GycC/u7i+tbm8tre7ure4wcXCvLvBubjAvby7uru+xME3wb6/x8bAvsKztbOosJyfm5qYnZacm5mbma6zsbi7w8PLzdbS0MfLyse2pJSbvMrS4MB76aKZkTKbm5qQlp+ZlqOp19zd5+zq2ru/y8rKzdTSvcbnz9zd6qGKlLm8wMPGyMvNz9DQ0NHQ0ITPgtCJz4LQiNGA0tPT1NPU1dTW19jZ2djX1tXTuLx9eN3WzcS6uth36NbIt6SP7IuhrMK/t6e5lZyin5bA0dKvtcKzh/T5h4uSlZicoZ+lq6mhkuvArrXfgpCKiYD69Pj49fnw69DQyMrAv7q3vLO2ubOzt7aztLzBvri3vbWzu7i3t7a3ur+8vLs1usPDvbu9r7Kvpq2anZmZl5yUm5qYm5mus7G4u8PFzM7X1NLKzs3Ku6qbosLP1uPCg+SclIygewJ8f7yAA399fId7AXyGewF6lXuCeo17hXqFe996g3sCAgEAgKapsqiho6iusMr+9oGGhonYsrW5w87g38vEyNDO5I6LmLa6v8PHy83P0tPU1tbX2NnZ2NnY2dnZ2Nna2dnZ2tra3N3e3t7f3+Hj5ebo6urr7O3u7+/w8vLy8fHv7OnlztGE++rczbamx9y5mI+nrr3TzdXR08rEp7O+t6esweHLgMK20rzhxYGMjoyMj5KTl56ho6unraqUend2xMl8gHx2dnbkd3ni39DMusC8u7i1ure4vLe5v8C+wcLFycTDvr7Bw8TCw8XHxMPDyMvJxsbGvLu5s7SanZWYkZWRlo6Ql5OZoaSrubm7yMnP1dTJxrWciJK40+jo5OPbv2rNo5ufL5+jrKKcnqOorMT3736CgYPRrrK2v8jZ2MfBxczL4IyKlrO4vL/Ex8nMztDR09PThNSJ0wjS09PT1NXV1oTXgNna3N3e3+Dg4uLj5OXm5ufn5+bk4t7axMh+8ODUxbCiwta1mZOqr7rMwsnFxr23nqiyrJ6judfDvLHLt+/QhY+SkZKWm52jq7G4xMDDv6mNiHzl5YuPiICAf/N+f+zn1dG+xL68ubW5tra5tLa6u7i7vL/Dv724uLy9vry9v8G+OL69wcXDv8DBuLe1sbGYm5WYkpWSl4+RmJWbo6auvb/C0NLa39/U0cOsm6bJ4vTx7evixnnNnZaZLJygqJ+Zm5+lqMHy63yAfoDNrLC0vMXV1MS+wsrK3ouJlbO4vMDEyMrNz9DShtOF0oPRhNAQz9DQ0dHS0tPT09TU1dfW14TYA9na24bdgNvZ1dC7v3jh08i7qZ680LOZlq6vt8a6v7u8sq2Vn6ijl5yxz722rcSy+9mIkpWUl5ugpKu1vMPQzNHQuZyVifz4lZiRiIeF/oOC8uvZ1MHFwLy5tbe0tLexs7e3tbe4u7+7ubS0t7m6uLi7vLq6ub3Bv7u9vbW0sq+ulpqUl5GVJZKXkJGYlZujpq69wcXT1t7j5dnXybSlsdPr+/bx7uXJgcyZkpWMe4R8jnsCfH/AgAJ/faJ7gnqUe4J6hnsDent72HqDewICAQAxrqjD6Obm3dvR2u2AiIyM7rm4ure6wMLDz8TI3uq0gKivtrvBxcnMztHU1dfY2tvb24TZA9jX1obXgNjZ2tvc3N7f4OLj5efo6uzt7/Dx8/T09fX19PTz8vHu6uTdv/726eDAq5SZ1eLapKCmv+fZ0MrHw7Szt7m7ssTQwrivtKpxwYGMj5KTlZaVm6Clsbi8wMDAvsKioXm2v2+DhHt3dePh4NvIw7y/trm0tre2ubmztry7u728v8HCQr67vL/BwcLBw8DBw8XEwsHFwsPEvLOfm5aYjpGLjYqKjZKTmaGgsL/K0tPd4uHdw6uszHmFhYF9enfs5M+Gp6KjqFappL7i4ODY1szU6H2EiIjotra4tbi9v8DMw8fb57F+payzub7CxsnLz9HS1NXX19fW1dTU1NPS0dLS0dLS0dHS09TV1tbX2Nrb3N7f4OLj5OXm6Ojp6YTqgOnn5ePf2dK19O3i2bypmKDa49egmp+22cvEvrq3qqmtr7Kqu8i7sqqwp3rOhpKWmpyfoqKqsrrM19vg4ePg4KvAkdzigJSTh4J+8+7r48/JwcO6u7W2t7S3trCyuLe1t7e6u7y4tba5u7u8u726u73Avry8v76/wLmxnpqXmY+SJo2PjIuPk5Wcpqa3yNTd4Ovy8u7XwcTlhJCOioWBfvjv2ZW2oKGlN6ahvN7c3NTRyNHlfIKHhuOztLa0try+vsnCxtrmsX6lrLS5v8TIy83Q0tPU1tfX1tbV1NPT0tGG0IDPzs/Q0dHS0tPU1NTV19fY2tvb293d3d/f3+Dg4N/d29jVz8ms6+HXz7WkmKPc4tKakpeszcC6s6+roKClp6mitMG2raespILWipacoKSnq6y1v8ne6vH4+vz69rHYo/f7jKCekIqF/vfy6dTNxcW8vba2trO1tK2vtbOys7S2t0O5tLKztra3uLe5tre6vLq4ub27vb63r52alpmPko6PjYyPk5adpqe4ytjj5/P8/fnj0NT1jJaUj4qFgv703Zy8nZ2ii3uEfI57AX7EgAF+onsBepN7BXx7e3p6hnvNeod7hXqDewICAQAxra3H7fD59fDvtLS0ucnu9uDIv7zBydnWxdTkqc2an6WutbvAxsvO0NPW2Nra2tva2YTYA9fW1oXVgNbW2NnZ2tvc3uDg4+Xn6evt7/Dx8/X29/n5+Pf29fTy8e3n39WS7t/tg+aNh863qKqmq6jFwruvn6GoxsXFwMPHt6ippqSA1t6HkZKVmJmanaSrtL9kaW1xdHh0lmpwZKaAZnCFh31zc+HZ18zBu7q3uLO1s7SzsrOztbS1uri4D7i3try+vLq4tbu8v8HAwITBML+7tKehnJWSj4mKiImMiI+PlJ6tvcfhd3+Fg3Vqd42hpaqlm5WLhIB+euach6KorCyqq8Po6/Xw6+mxsbK3x+rz38i+u8DH1dLD0uOpypido6yzub7DyMzN0NPV1oTXCNbV1NTT0tHRh9CA0dLT1NXV1tjZ29ze4OHj5Obn6Orr7Ozu7u3r6+ro5uLc1MuL+ODohu6Ohsqyo6SgpKG5t7CnmJmhvLy8uLq/sKOloqGB7OyPmZyhpairsLrE0uJ5gIWJjpOOrIOIesmbeoOYl4p+fO/k4dTKwr+6urS1s7Kxr7CusbCwtbOzs7JBsLa3trSyr7a3uby7u7y7vL28uLKloJuWk5GLjYqKi4iRkpqmt8rV8oGJkI6DeIWcsLW6s6mil4+Kh4LzrZWhpqk5qKnB5eny7ejmr7Cxtsbo8d3Gvbq/x9TRw9HhqcqYnaOstLq/xsvOz9LV19fX2NjX1tXU09LS0NDPhc6Azc7Pz9HR0tLT09TV19jZ29vb3d/f4OHi5OTj4uHf3NvX0crAhPrb4ITxjoTDqpucmJyZrqynnpCRmrOztLGzuqyfoZ+fgvv0lKCkqq+zuL/L2er+iZGYnaOpo76Wm4rksImRpKOUhYL57OjazsbCvLu0tbKxsK2trK6srLGvsK9CrqyztLKxrqyztLa5uLi4ubq6ubavpJ+blZSRjI2Li4yJkpObp7jM2/iFj5eYjYOQqL3Cxb6yqp6Vj4uF+rWfoKSnm3sCfH/GgAd7e3t8e3x8mnuCeox7i3yJe8F6k3sGenp6e3t7AgIBADits8z79vTz89WztLW2vpGWmp2XgMbY5+bi4Ja1lJqcoqu0u8HHy9DT1tfY2dnZ2tnY1dTU1dXV1ITTgNTU1NbX2NjZ2dvc3uHk5unr7e/w8vT29vb4+fr5+fj28/Dt5+DWy46ItN75v7iusLiys7q5uamUkIeKjZD4sOiNorC3tq6N2YzWgZCYnqWlq7C0XmVpc3yFkJmgo6uQl46BeWqldGp6g3lx3NrUzsa6uLe0sbKwsrCura+vsa+2RLzBvLa5vb7Bwry4ubu7urm9vbm3t7CfnpiVlJOQi4iIhoeEh4yZo7fJd4yksKyVm7DD0NPR0Mu1opaPiYeDfMCDo66qgKuxyPby7+/v0bGytLW9j5OYmZV+xtfl5eLfnbqSmJugqbK5v8TJztHT1dbX1tfX1tTS0dDR0dDPz87Ozs/Pz9DQ0dLT09TV19nb3d/h4+Xm5+nq6+zu7u/v7uzr6ebh3NTMwYiFud34vLWrrLKrq7GurqKQjIOGiYzwq+GKnquygLKpitee6YucqK+4u8PM1HB7g4+cprO8xMjNs7qvn5WByIt+jZSFe+3n4NrRwb27t7Kyr7Cuq6qrq6yrsba3s6ytsbK2ubWytLW2tbS4uLWztK6dnJeUlJaTjouLhoeGipGhr8jeg5mxvLqkqsDV5eno6N/Is6ael5OOhdKYo62oKqqvx/Pv7O3szq+xs7W+j5OYmJN9xdbk5OHgosCTmJugqrS7wcfM0NPV14XYBNbV0tGE0IDOzs3MzM3MzMzNzs/Pz9DQ0tPV19jZ2tvc3t7g4eLk5ebm5OPg3tvX0srBtoGBudjytq6lpamjoaakpJmJhn6AhIjqp9uGmaeuraWH1Kn1k6Wxu8fL1uLugI2Yp7XC0dzk6OzR1sq3q5PknYyaoI6C+PLp4tfGwL24s7Gvr6ypqEmpqKmorrKwraWmqquws7GvsbKzsrK1tbOxsqycm5eUlJWTj42MiImIi5OjssvliKC6x8ayuM/m9/v6+e7Vva+mn5qTityloqynjnuGfId7AX3IgAF+k3sEfHx9fYd+A3x6eol7kXyHe756lnsFenp7e3sCAgEAgJmfqJ2psrTM8+fn1MuAlpmcm5bbzcra5NaMf5Kcm5ufqLG6wsjN0dPW2NjZ2djY2NbV09LT1NPT0tHQ0NHS0tPV1tbW1dfZ2t3g4+bq7O7u8vP09fX3+fn6+fj29PDq5NvSx7mkoH6ov8K9vcnUwb+/s7CPg5jezLLyhY+Yn6OlgKWji9PEmXOEj5iosLZhZm12gIyZqWB3cG1tYGRfV6KYh3CtcWV7e3Ld3NbRx7q3tbKwrKShoKOmuo7KiOvs1NPZ3NvW1drvg5CUlp2gqbGwqZ6blpOSkY6MjIuHhoGFiZKlt9B6m8WLjqaUi4mIi4aAdm/Ptqidl4+GfdGHhaKVKpecpp6psbPL8eXk08p/lZeampXazsvb5tmcf5GbmpqeprC4wMXLz9HU1YTWC9XU09LQz9DQz87OhMyAzc3Oz8/Q0M/Q0tLV2Nrd4OLj5efp6uvs7e7v7+7t6+jl39jQyL2wnZuDq76/u7nEy7i2taqpjIGh38et7IKMlJufoaGfh87LooSYprHEzth0fYaToLHD1XeIh4WEeHx2bsy9qIvUiXeNin7x7eXe0MG8uLOxrKSdmZiYpXOrfN9D4s/N0dTSzsvO33qFio2VmqKsrKacmZWTkpKRkI+Oi4iDiY+asMfoiarShn6lko2Qk5iTjoR75sy8sKiflIroo4ihlYCVmqWeqLG0y/Dj4tPLgJaYmpmV2s7M3OfbqYKSnJqanqexusLIztHU1tfX2NjX1tXU09DPz8/OzczKycnKy8rKysvMzMvMzs7Q0tTW19nb3N7f4OLj5eXm5ePj4N3a1M/HvbSnlpaFp7i5tLG5v62rq6KgiH2j28Kp5X6IkJebnVedm4TIyqSPpbTC2ObzhJCdrb7R6P2LmZ2amY6RioHv3MKg85yEm5WG/vjv59jHwLq1sqyjm5OQjpVek3TW28vIys7NycbF1HV+hIeQlZ+oqqWbmZWTk5KEkCWNjIiOkp2zzPCQtNyFd6iWk5qfpaCaj4X328m8sqidkfS0iZ+TjXuGfId7AX/KgAJ/fI97BHp+gICJgQJ/eoh7iHyJfYR8hnuRegN7enqLeZ16BXt7e3x9inyIewV6ent7ewICAQCA3efd3nfle5/Gz+Dz1qO31O2CxcHG3s6aoOWgoqKhoKGlr7jAxszQ09TW19fW1tXU0tLR0M7Pz8/Ozs3MzMzLzM3P0NLS1NfY2t3g5Ojo6+3v8PHz9fX29/f39vPx7ebf1cq/sqah+9uf1Mu9trvhrqSgn5mTxqKa/KCorrS3uruAu7qg952ZkI+xqq9dYmhyfIqZVmN1vovyrOh8oIt8bGJYmINtoGeybXHb2dHIwrSzrK+i4Onw8oGFjZOYnaaA09PZ3d3b19bRy8zHw8nJxdzx9/2IiomMiIiGg4aHhouTorrTe53Jrf2tzI+CseiAzI62j3zcu6eShH1zyKN4heM07fXs7X7z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qqikpqWpq62usLW6wsXFx8zU3+b2janVhLKSrKG4uK6zmJyggIiGdnpnpqiLqXBw2LO/xdnIxsPAvcGGewV8fX5+fop/DX57fH59fH19fHx/f3+7gAJ/fYV8Cn19fXx7e3t8fH2GfwR+fn6Bi4MBgol/AX6Wgwh+fX18fHt7e4R6qnkGenp6e3t+j4MKgoKCgYKCgYGAfYd7AgIBAHmxq57Bm9Dg7PiAhYqQlpugpqyyudynnq2xrLCRxH+VweZ7hJCerbjAxsvO0NDQz83Kx8XDwL67ube2tbW0tLS1tra3ubu8v8PFyc3Q09fb3+Pm6Onp5uLb0sa3pZHxgum7oY612cicpLG+wuu4v6eTjomFgX318N6dibx+pYp2cXd4dnZ0c3PKldLP3NvZ29ze3t7f3d7b3NvW1srWz+SES3NXi3pmv6aKeMuqk6qjoJ2cnZyeoKGjp6eoqqqqpqSfmJiYmpuco6ars7q4ur3Gx8fRcn6PrYOX2sPk8uv42LzWvqS/r5qnitrIlojRy4fcttzHo6CbmpuiPMG7sdWZzNvo832DiZCWm6Clq7G42qeotbq0upzTh5jE6X2GkaCvusLIzdDR0dHPzcrHxcK/vbu5t7W0tISzObS1tba4ury/wsXIy8/S1trd4OLj4+Dc1szAs6GN7IDuwKmawufVqbbBysvxvMClko6JhYF99O7ZmYm4fqGHgHuAgYCAf39/3Zbb1d7d293d397e397f3t/e29zT39Xiq2mfc6yRdty9moPcu52wqaWhoKGfoaGjpaioqKuqqqWkoJqamp2cnaSnrbjBwMDEz9LU3nmHmLmJg7+uys7H0LWdsZ2JnZB/inS8r4R6vr6AzarIvrm1sK2uszzQy8Plmczb5/J9gomQlpugpauwt9motcHGv8Wn4o+ezPGBi5emt8PM0tbY2tnY1tLPy8nGw8C9u7i2tbSGsze0tba4ubu+wMTGys3Q09bZ2tzb2NTOxbqsm4nmfO7BrJ/I7tyvv8nSz/S+vqaWkoyIhID69NSVibMRnYWKhouMjI2Njo/7oOrk6eeE5Gnl5OTl5efo5+br4vDk8NWIyo3JpIT1z6aL5sSitKyopKOjoqOkpaipqqqtrKqmpKCZmJibm5yipq22vsDCyNTZ3uqAkKLHjneuoLm3sLSijJ2KeoqAcntprKF7cbO1e8SjvrzI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x8fIycrM0rKoorCWhYeHi7nb5YGQqLXQ7oiUkZfwr7i0rI6Rhfqel7GS7pqF/4aB//ioiKGsrbW1uMrDw8WpoYbCr9p8d36IcW6ChouAmIBv2JRssYjl4orWiYyOefDa186WnqixusPL09zk63l9gYSMrr6AgffXwLOjzO2QrLzCytjl7Orl2tDGvLOqoZqTjYeC/vjz7enk4d7c3Nva29vc3+Lk5+rt8nt/g4mOlJqgp66ytbe1s66kmYx/5MnM2+Hn6+z2gIWHh4OA39HIwLiyq6Sf2paJs36diK+tqaainZybmJSTjPXugpaUut26g7aDnePihoDg29fQzszLysvRwLWvu56MjI2Ru93ngo+ns83qhJCOlO+vt7OrjpGF+peVspLol4T+hID99qiOqbW1u7q+z5uus5qTe7WlzXRuc3plY3R4fnOHcmXZn4O7kPX1lOKQlJYEe3t7fYt/hoCDfoV9An+AloGWgJSBiYCGgYl/AYGLgwGCjH+Gfgp/f3+Cg4KCfn5+iX0BfIx5hnqEe4h6Dnl6enl5fH19fH19fHx7iHkLe36BgoKCgYGAgICKfw1+e3t8e3t6ent7fHx8AgIBAD1yzMPenqq3xM3X4Onw+oCFio+Tl7KUvsjIuqWckcDchJqmr7rI09nZ1MzEurSrpJ2XkYuGgn/79vDs6ebkhOI45OXm6ezv8vb6/oKGi5KYnqautb3DyMjGw7y0qJqL+9/Z5uzw8/b3+v+AgP6B4tPLw7q0raah5Z6JvH6mjqyppaKdmJKRjoyLiH7enMRrjcFuk57Cm9elrqyvsrOztrq+wsjWj4mGmIGCeHuNueKClrHK4P+LoL/Fx6aevra10tHHwuCEtZKCm5iRhoSCiON/nquusrKwuYfL+KPGwauQxsiHm/n6mrWahq7+1pyEfTGffsZyu4eWmZh5eNrT2Zuns77G0Njg5/B7gISJjZCslsrT0sSvp5zI5oqfqrK8ytXb2tbMxLu0q6Sdl5CLhYF++fPu6ebj4d/f3t7f4OHk5+ns8PP3f4KHjpOZn6eutbq+v726ta2hlIbz2NXk6e3y9PX5/n9//H/g0srCurSspqDgmom4fqKLrqunpJ+alpSRkI+LguSp33qdz3aZoMCe47O6uLq8u7m6vL/CxtWel5OmjYyBg5S+5YKWr8fb+Iaatr2/oZ2qqJ+4uK+q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3eXwtIeFiY7Vy3uMnK24vlS9tax75nuBh4yRlZmdoqarr7S3uMOOhIF+erCxyMLS5POBiZGXm56hpampp6ekoqCenJqXlJGOjIqIh4WEg4KBgIB/fn9+fn5/f4CAgYOEhYaHiYmEiyGKiIaDgHzw6NzQxcjP0NLS1dXU1tjFh4OA+vPt5t3U6ZqJuH6ijLq3sqynoZyYk4+MiYeDfLHGhoaUlaytrNut2dGpjKlxekRKZLx/9Zq9l3HHssJ7g4eQhomUSMKWtIOEqMCPj2p2eXtvadnyg+OJ0e62yaOnsYSB8JHLW3/Aoqaku76gyqbTj4rvjZqmscDn2uTr9bKKiI+U5NuCk6KyvcJDwbqydNx1e4CFio+Slpufo6essK+5lo2KhoPBvNPL3fD/h5CXnKGkp6qurqurqKajoZ6bmZaTkI2LiYeFhIOBgH9/foR9Mnx8fX1+fn+BgYKCg4SFhYWEg4KAfXp149vRxLu+xsjKys7Qz9HSwIaDgPrz7ebd1OSWibN+nom6t7KtqKKdmJSQjYqKhoG/2Y+Nopymqa3jsNnRqY2pZnpESle0feuMkXVsxKqsV2KDi1hXgiu9kq6CgaK9hm1NV1laUEu77YThhs7ptMikp7CDge2N3LWcxOCopr3Bo82n4JWQ9I6cqLPD69zm7fiwi4qRmOvjhpamtcHGBXt7e39/kICGfYaAvYGTgIZ/AYGLgwGCjn8FfHl5enqGeYh6DXt7enl6eHl7e3p5eXmEeg17enp8eXp6ent8enx7hnwQe3l5en18e3t6enp5eXl4fIp6Bnl5ent7eYp6hXuCeoZ7AgIBAGaro5WK+YWMk5meoqarr7W6vcLGydKEeXRyedTOucfa6XqCiZKZnqKlqKurqamop6Shnpyal5SSkI6Mi4mIh4aFhIODg4KCgoODhISFhoeJiouMjY+RkpKSkY+MioaC//fr4NTO1dmF2w7f4MyMiISB/PXs5dzvnom8fqaPvrm0sKmjnZiUkIuJg3/UgKeB03zFsLqNeZbBxrGAj8/b9YHbhqDX4oKo9rrajKnGvdnak57Qw5iq8cG+/fKez9rd1bmZt6d/nOXioJjBgn99fNbXUIh1fPVRk9Lz0qOZoJW7xYyIl6GpscPQ2ePthdh+h4vSu+GAjp2prkOwqJt/5nyBh42Slpueo6itsLW4ucOJf3t4gNnO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zc/S08GMiISBfvXu593qmom4fqKMubexq6Wfm5aQivOD+ue9dH2CodWVjpmIj6u2tbSajaWanZ6Th4Pw9Ndv/OTPyNVzhIqhdoelkIP0l3/tlO6Iqr/Kyb2kgYzDt8GhgOP72NDmgdg7loOIgJGNaZONqsSit4+eonmKn6yytcXS2uXx/IOEiKPVpb/Q5HqDh0eMhr+C3XZ8gYWKjpWXnKKlqq6xsbqA8f/L7b7Az9/u/IOKkZedoqWpra+uraypp6Whn52ZlpOQjoyLiYiGhYOCgoGAgIB/f4Z+LH+AgICBgoKDgoKBgX99enh1493WzcO6tLe9wMPGyczNvIuHhIF99e7n3eWWibN+nom6t7KspqGblpGM+Yb/7MeAiY2356ClmoWRrLe2tJqNrKCjpJeNiPj3t1376NLFxWyDiIVnd4ONg/eWe+eU43qTpK6rn491ib+1vJ9/4P3UzOKA15Obxrvak5K1lpCtxqK6kqyxhYyhrrW4x9Xd6PP/hIaKpt2tydrugImOBXt7e39/kIAEfXx8f4eAvoGVgIR/AYGLgwGCiX8Kfn5/fn57enp6eYx6h3kEeHh5eoV4iXkGeHl6eXl5iHoGeXl5enp6hnkFeHp6eXmHegd5eXl9fX18i3qEe4V6g3sCAgEAQruqnrL6hY2Tmp+iqKyyuLzBxcnL0tWkgs2ytsTT3+x7gIaMkpieo6errayrq6mnpKKfnZuZlpSSkY+NjIqJiIeGhoSFDYSEhYWFhoeIiYqLjo6EjyKOjYyKh4SC//ny6uDVy8jN0NLU1tnZx5GNiYWB/fbu5fGeibx+po+7t7Ksp6Gcl5K1+oP65JTGu51/n8+XvX76nqOmp5eDvrC4ua6ciG/YxuL54NLg9vyEi8mqtcPwg4SG6YSH/JO91OXn2raIheGir5CEgZ/CnY15eDGcs31CgoVQiIPml5yrf4mPdICRn6qrvMfQ1+PseX94d76Dk52nsr2/QtLCoKTofIOHjpOWm5+lq6+0t7q6xOOxhc6yt8TS3+t6gIWLkZacoKWoqaiop6WkoZ+dm5iVk5GPjYuKiIeGhIODgoSBDYCAgIGBgYKDg4SFh4aEhyKGhYSCgH178Ovl3dPJv7zBxcjKzM/Qv42JhYJ/9/Hp4Ouaibh+ooy4tbCqpJ6ZlZC1+4L65ZTKyrqLmrZzqobqpKiqqZqFv66zsaielH30tsb649fZ3OaCiJyBjJL1hoiM5oGM8oajtcPEuqB+ifasrpGFg6PJpJSDiUKht4FVfYBbgn7ooae2g5ifgoaYprGzxNDZ4ev1foN+f9GYqbS+ydTXUeDQp5zddn2AhouOk5ieoqessLOxvPS/jde5vszb6faAhYuRlpugpKmsrayrq6imo6GenJmWk5KQjouKiIeFhIOCgYGAgIB/fn9+f39/gH+AgYSCJIGBgIB+fHp3dOTf2dLHvbS0uLzAwsTIybqMiYWCfvbw6N/mlomzfp6JubWwqqWfmpWRuf+E/+qZ0NTJq8bTfpWL5KSqq6qch8e3urmupJmC+qOq++ja1M/bgYaCaXV28YWHjOB8jeZ5jZunp56Mc4f5rKqQhIakyaOUhK6HndOFr3+BqYWB7aKpuYWmr46Jmqm0tsbS3OTv+ICFgYPYoLO+ytXh5AV6en1/f5CAAnx9iIC/gZWAhH8BgYuDAYKJfwh+fn9+fnt6eoR5BHp6enmGeoh5A3h5eYZ4hnkBeIR5A3p5eYh6CHl4eXp6ent6hXkEenp6eYZ6hHkEfX19fIt6hHuIegICAQBClp2esfuGjZKaoKSqq7Kzu8LFy83Uu7m7qrLAztvo8X2CiI6UmJ2jqKusrKypqKajoZ+cmpmWlZOSkI6Ni4qJiIiHhIYBhYWGLYeJiouLjY6Njo2NjIuLiYeFgoD79e7k2tLLyMrOz9PW1cOTjoqGgv/47+jxnom8fqaPu7awq6WempaSi4WB+OeZ8IOmrqDjvtb1iZmdn6CWj/DW3trV2rV6bafEf97V3O/y94G3jIuw2eLk6NGFrIeNrcLHzL+i9IHVjoiA+be2y4rjyCzD46p5dbKHa2iWu9aGleGCd4vgg5KkrrvEydLb4+t5f3TUl5yXsJ6rpEawt6Om6HyAg46UmJ6fpqittLe8vMbAu7uqsr/N2ufwfYKHjJKWm6ClqKmpqKalo6CenJmXlZORkI6Mi4mIhoaFhIODgoKChYEGgoKDhIWEhIYkhYWEg4OCgH58eO3n4NfOxr+9v8TGyszNvI+KhoN/+fLq4+uaibh+ooy4tK6oopyYlJCJhID46aDkepKLfbWlychgnqKjo5mR8tjc19HXvIh7oLCC5dva3eX3gJN3eYnj8fT7z4CtgIKWqKyvpZHlh+yYiYP9v7/TlfvlPcruu4GMuoFzbqPb9Zik8pGFnu6Kmqy2w8zS3OXt93+EfeapsKzKtcO+R77GrZ/ddnl5hoyPl5ieoKWsr7Szv8nEwrG6x9bj7/uCh42Sl5qfpKmsrKyrqaeloqCdm5iXlJKRjoyKiYeGhYSDgoKBgICAhn8sgIGBgYKBgYGAgH9+fXx7eHVy4dzVzMO7tbW3vL/CxMW3joqGgn/48eri5paJs36diLi0rqmjnZiUkYqFgf3wqOZ5iXxxrqLGulOfo6WlmpL23+Le1tq/joCVnoPs39jU3fh/f2pscuLz9/7Keqp5doKRlZeOgNOG8JuHg/3BwtSX/uiF1erigtHqg6eKo+L7nqr7npKs842dr7nHz9Xg6fH8gYeB7bG5tdfB0csFenp9f3+QgAF/iYDAgZSAhH8BgYuDAYKMfwh+fnt7e3p6eoR5h3qMeYZ4hXmEeAN5enmIeiF5eXh5enp5eXl6eXh4enp7eXl6eXp6enl4eHl5e319e3mLeoN7iHoCAgEARKaaxbn6hIyTm6Gmqa20s7vDxsrO3sGoqbC9y9fj7PaAhYuRl5ufpKirrKuqqKekoqCfnJuZl5WTkpCPjYyLioqJiIeHh4Yuh4iJiouMjY6NjYyKiouKiYeFg4D89vDp39bPyMbKztHU0sKUj4uHg4D48enynom8fqaPubWuqaOdmJSPiYSA8t+CdpD/g5We34CUko+UmZqSlZOOjoyKi9iEcouX6N/fx7vW8POfio2U0LW215LwgYr/mKmxrqWR6Ybei93Z0a6mktDKuDzU4XnaZUppZTDH0dRt2vaweburiZSms7i9xc3U3OHoeXZ71b21vrCnoUO+scqu53p/ho+Vmpyfp6attbi8vdHBqKmwvMrW4uv0f4OKj5WZnaGlp6iop6SjoZ+dnJmYlZSSkI+Ni4qJiIeGhYSDhYIxgYKCgoODhIWFhoeFhoWDg4OCgoF+fHnu6ePb0svDvbu/xMjKybqQi4eEgHzy6+Tsmom4fqKMtrKrpqGblpGNh4N/8+KMiIbih6K284l1YpSanZ6WlpONjIqHh9uUgZKV8+vs1sfe8/OFeH1/3cvP7pnneoHuh5SZmJGE3Iz2luPg2LmxnOvn107z7oj3dV1we0Ls8/V+8yqRkM66lp2vvcHH0Njf6O72f36D5dHK08a+uUPMv9Kp3HN3fYeOkpSXnp6krK+zs8nIr6+3xdPf7PX/hImPlJmdoKSoq6urqqelo6GfnZqZlpSSkI+Ni4mIh4aFhIOChIEygICAf3+AgIGBgYKCgIGAf35/fXx7eHVz4t7Y0MfAubSztrzAw8K1j4uHg4B88erj5paJs36diLazrKeinJeSjoeDgPjplJaH3YyqwPuNbFOWnJ+fl5eTjYyKh4bcmoeRj/n0893M4vf0d2xycd7S1vWa3nN523aBhYN/dcmM/Jni4dm8tJ7y7fqW+OmQ/5GnjamM9f3/gv0hmpzeyaCitMHFy9Tc5O30/IKChezb1N3SysUFenp9f3+agMCBlYAEf39/gYuDAYKMfwp+fnt6fHp6eXl5j3qFeYh4hHmEeAV5eXp6eYZ6A3l5eId5E3h4eHp4eXl4enp6eXp4eHh5eHyFe4t6g3uHegICAQBEb3HBl/mDjJSco6errbS4vcPIzM/eoay1vsnU3+nxfYGHjpSZn6KmqKqrqqmnpaKioJ6cm5mXlZOTkZCOjo2Mi4qJiIiHhy6IiImKi4uMjY2NjIqKiomIh4WCgf348uzi2tPOyMbIzM/Ov5WQjIiDgPjx6vKeibx+po+1sKunoZyXkYyHhID02m92++N4ls11fJKNho2Qko6RmZiampiR5Id0c3LZ5NS4ur/W6oWSl4W6rqzIhJ2bodCFkpuZk4Xai3aEvcS+q5R8ysBlcHCMem9zcYaHmGtwdXiRnYuKbNOax4qmuMTJ2dnc4+F1hnvj3M/T0c7FR3p8z47meYGIkJeanZ+lqq+0uL2/0KGstL3I09/o8HyAhoySl5yfo6Wnp6elo6Kfnp2bmpiWk5KQj46MioqJiIeGhYSEg4ODhIIug4OEhIWFhoaGhYSDg4OCgYB+fHnv6uXf1s7Iw727vsPGxbiRjIiEgH3y7OTsmom4fqKLsq6ppKCblY+KhoJ+8956ldSvk7PlgIV0YYuUlpaSlJmYmZmWj+eZhoJ+7PTmztDS4fB7eXx4y8bG4YyjoqbId4GJh4N60JKCkcTOyLaiiujfdYGAnop/hIqVl6p9goaJlaGYl3bmqd6WtMXQ1uXm6vDwfI2B8/Hm6efl3UWCg9yI2nN6gYiPkZaWnKGmq6+0tcmps7vF0Nvn8fqBhYuRl5ugo6aoqqupqKWkoaCenJqZlpSSkI+OjIqJiIeGhYSDg4KFgS+AgICBgYKBgYKBgYB+fn59fHt4dnPj3trVzMS+ubWzt7y/v7OPi4eDgHzx6uPnlomzfp2Is6+qpaCclpCLhoN/9+WCp8meoL7vhIlrU42WmJeUlZqYmZiVjeigjYaB9fzu2Nrb6PN1bW5w0M/R6o+ko6a9anF4dnNuw5OGlcXQy7qnj/HogJuEopGFivCcn9yEiI2Plaijo4D1teqcu8zX3Ors7/f3gJGE+/vy9PTz7AV7e3t/f5mAwYGVgAR/f3+Bi4MBgox/CX5+e3l7enl5eZB6hXmIeIR5hHiFeYZ6inmCeId5AXqHeQF6hHwDe3x5inqDe4d6AgIBACe7436894OMk5yhp6uxtLq/w8jMz+GuusLJ093m7fN9g4mQlpyhpKeEqBmnpaSjop+dnZuZl5aVk5GQj46OjIyLiomJhIghh4eHiIiIiYqMjI2NjoyKiIqJh4aEgoD++PPu6N7X0s7KhMcMu5aQjIiD//jy6vKeibx+po+xrKmloZuWkYyHg4D23bqO9+GNvdd1e5SNgo2Rj4qNlpeZm5qQ3ot5bGrU5OHCxMnb4O36gO7Nvb+91XaDh7j4h5CTj4LekHiAuL64tZeGf3Z5d4iEe36DWYmAhoiBf42ugaLMctBvprDC1HeJk6jF1XWCwpeTjY6Sf4SAJ7vggLDleYGHj5WbnKKlqrC0uL2/1a+6wsjS3OXs8n2CiI6Ump6hpISlH6SioZ+enZqZmJaUk5GPjo2LioqIiIeGhYWEhIODg4KEgwOEhIWEhiSFg4KCgYGAfnx57+vn4tzSzMfDv72+v8C1kYyIhID58uzk7JqJuH6ii66qpqOfmpSPioWCfvXe0K7PsKfW74CFemWHk5aUj5KYmJqamo/lnYt+evL49Nrf3+3t8Ox26N3X2trxg46QtON6gYOBedSXhI7Bx8PBp5aOhYiJmZWNj5Nol5GXmZKTn72KseB74X2+yt3whpmiuNfnfovBnJmTlZiJjotHstqDqtlzeoCHjZOUmZyhpquwtbbPtsPL0Nrk7fX9goeNk5idoaSmqKinp6ako6GfnpyamZaVk5GPjo2LiYmIh4aFhIODgoKEgYOAh4EkgH59fXx7e3l2dOTf3NjRycK+ura1trm6sJCLh4N/9/Hr4+eWibN+nYivqqekn5qVkIuGgn/55eHBw6Cy3/mFi3NZipeZl5KUmZmZmpmO56aThYD+//vm6uj28u/jcOXj4ebl/IiSk63ObHN0cm7ImIiTw8rHxqyck4mOmJ6alpmavp+dpqCamqfEkrzugu2EydXn/Iugqb/g8IKPwZ6bl5ibj5WSBXx9fn9/mYDBgZSAhH8BgYuDAYKMfwl+fnp5e3p5eXmQeoV5ingBeYZ4hXmFepN5AXqIeQZ6e3t9e3qEeYZ6i3sCAgEASNuCjajlg4yTnKGorbG0ub7Dx8zQ4rnFz9bb5Orve4CGjJKZnqKlpqenpqalpKOhoJ6dnJuZmJeVk5KRkI+OjYyMi4qJiYmIiYSILYmJiYqLjIyNjY2KiImIh4WDgoD++fXw6+Td2NTRzsvKxbmWkIyHgv748enynom8fqaOrqunpJ6alZCKhoL76s2bvPvjkrHUd4Dp0YiIhoOAjJaYmpyZkeeTdm1syNnWvsLF097Y097SxrjEytFteoGn3PmFhYP82JKBkLXEureypp+Rin+Df4WMh46QkJienpGOmoRtvodsqKmotcPNa3J3fnuLl6Scx9h4ja2r6Ujago2k1HiBho+VnJ+jpaqvs7i8wNa5xc/W2+Lq7np/hIqQlpufoqOko6OjoqCfnp2cmpmYlpWUkpCPjYyLiomIiIeGhYWEhISGgyuEhIWFhYaGhYOCgoGAf318efDs6eTf2NHNysfFwsG9s5KMiIN/+PHr4+yaibh+oousqKWhnJiSjoiEgPnpzJm40LOwzuyCi+/Hj5COi4eQmZqbnZqQ7aaKgH3o8vDc4N/r8Obe5d3Z0+Lo7nuHi6nP5np7eezQm4+evs3Gw7+1rZ6YkJWQmJ6ZoaGjqK6vpaKrbHnXk3rCwcPR4Ot7goiPjJ6tu7Hb7oSUsqnmSN+HlaPKcnp/hoyUl5qcoKWqr7O30MHO2eDj6vL4gIOJjpSZnqKlpqempaWkoqGfnp2bmpiXlZSSkI+Ni4uKiIeHhoWEg4ODgoSBg4CGgSSAfn1+fHt6eHZ05eLe2tXPx8S/vbu5ubatkIuHgn728Ori5paJs36diK2ppaKcmJOOiIWB+uzQlq7CpL3Z+ImS9siTlJKQjJObm5ydmpDwrpKIhfb7+unt6/X46uLn4+Pf7vb8goyPpb/Rbm9t2cWclKPB0cvJxLqyo52boJegqaK4rbO0triurLZwgeiagc/Nz9zr+IGKj5aUp7bJu+X6i5e1peYBfoR/mIDCgZSAhH8BgYuDAYKLfw5+fn59fHt6eXl5enp5eYx6hXmReIZ5g3qdeQV6enl6eoZ5i3oFe3t7fH0CAgEAJn2Hjn7Ig4yRmqGnq7C1uLvCx8nO5MfS2N/l6e31f4KJj5abn6GkhKUepKOjoqGgn52cnJqZmJaUk5KRkI+Ojo2MjIuLiomKhokEioqLi4SMI4uJiIeGhYOBgP359fLu6+Tf2tjV0tDNupWQioWB/fbw6PKeibx+po6ppaKdlo+Igvbn2tHFtpWAnKSkmtmQrc2ohpyIf3+MlJeYl5aO3ZF7dG9rbmrOwsTR3OVyz8e+vr/JaGlufZ7N5e3y7ebJk4SQrcjEv8fFtaeUgYGGgYGEjJSVl6ColoaTdImUdaSjoK/B0tNpg292fISNkoSht/e1ntLqSXyHj4C8eIGFjpWbnqKmqayytri92MfS2N/l6OzzfYGHjZOYnJ6hoaGioqGgoJ+enZybmZiXlZSSkI+OjYyLiomIiIeGhoaFhYWEhCyDhISFhYSFhYWEg4KBgH59e3nw7Onm497Y08/Ny8nGxLOQi4aBfvbv6uLsmom4fqKKp6Ogm5SNhoDz5NjPw7WVf4eKo5nUj7Liv5CjkYiHkpmbm5qYj+emj4eCfH157+Lj7fP4fOPf2dve6Hh4fIigxdnf5OHdx52ToLjQzsrS0MK0pJSUmJOUlqCnqKmxuKiaqHyXpIW+vbrK3e/yepOBiY+Xoaebuc/0sJrN50qBjpeBs3F6foaOk5eanZ+gqK2us9LP2uHp7vH1/IGFi5CWm5+ho6OkpKOioaGfnp2dm5qYl5WTkpCPjYyLi4mIh4eGhYSEg4ODgoWBA4CBgYSAI39/fnx6eXh2dObj39zZ1M7JxcTBv728rI6KhIB88+7p4OaWibN+nYenpKGclI2HgPPk2M/DtZR/gYGils2JsPDNlaSXjo2Wm5ycm5iP7K+YkIuEgoD+8e/4/P+A7urm6u32gICCjJ+5yc7S0dHCn5mmvNTU0tnWyLmqnqKhnJ+isrO3tLrBsaS0gaCuj83Kxtjr+v+BmomSmKCqsabG3umum9LvhX+YgMKBlICEfwGBi4MBgoh/iH4JfHt8fHt7enl5jHqIeYZ4AXmGeKd5hHqHeYt6BXt9fn5+AgIBAEfz9/r4mPiJk5uhp6yvt7m7vL/Hz+LQ2uDl6e71+oGIjpSZnJ+hoaOkpKSjoqGhoJ+enZ2cmpmYlpWUk5KRkZCPjo2NjIyLi4SKg4mJiiKJiIeFhIKB//z49vPv7Ozo4t7b19PPu5SBhYL/+vPt5vGeibx+poyPi4uIhP/68+vh2dDGuKSagMnIy7q+vKmS/IC+wIa/m5SWmJSFypl/eWxobWxoympxeXXSx8nIxsNrZ8lvfJnB2NXV29LHmZCewNrijc7DurKaiYSGhH6Ej4yHmKHOy5ahkZaYcK+tscfNcnRtcHZ6gIOHyaK0jrfG0+HqTu3y772B4H2Hj5Wbn6Goqqurr7a91tDa3+To7fP4gIaLkZaZnJ2en6ChoJ+enp6dnJuampiXlpSTkpGPjo2NjIqJiYiHh4aGhoWFhISEg4iEI4OCgYF/fXx68u/t6ujk4eHc1tPRzsrGtI99gn/38uzm3+uaibh+oYiOiomHg/z28Ojf1s7Et6KYfsfFybe7uKWP9nm0s327oJqanJeI2q+UjIF8f3557HqAh4Pv4+bq6eV8eOt/iJ+/09DR2NHIpJ+tyuHtl9jPycGrnZiYlpKZo6Cbq7TX5K25maaof8vHzOPrgoV/goiNk5eb1putiLHAztzkTPD38J9z03aAiI6Tl5meoKGhpKyz0Njj6O3x9vv/g4mOk5ibnp+foaKjoqCgn5+enZybmpmXlpSSkZCOjY2MiomJiIeGhYWFhIOCgoKGgYWAIn59fHp4d3Xn5uTg3dvY19LNysjEwb6ujXuAffXw6+Xd5paJs36dhY2KiYeD/Pbw6d/Xz8W3opd+xsXJtrq2oYvxcqeeb7OinZydmYnhuZ+Wi4aHhYH6gYeOiv3z9fr59ISB/IWOn7vKxsjQysSmpLPO5fWf4NfQxrKnpqSgnqmyraq3vdzzucadsLOI2tba8fmJjYeKkJacoKTXkaiFr7/O3uWEfoJ/l4DBgZSAhX8BgYuDAYKFf4x+iH0FfH18e3uHeol5AXiEeYZ4A3l5eJB5AXqUeYR6hXmKegJ8fYZ+AgIBAEWA+5GRj7XJ5oWUoauwtba2p/HFzeTV3uLn6/F+g4mPlJeanJ6foKCio6OioqGhoJ+enZ2cm5qYl5aVlJOSkpGQj46OjYyEi4OKjIkhh4aEg4GB//369vPy8e/t6ePc2NbTuZSS/fz49e/o4PCeibx+poyWk5CMhoH++PLp4NnOwbGlopWJiP7x8/Ht6uTZvdCSlJeYmZOG356FgHdrcnVtbHB2fHNubmhobMJlZmp2fpa70tfW1tLGqZajxd7d4dfJvLSliY6IipWYjY2TmK63da7CkpSLa8bLym1sd3t+j4uGu6yDtNHc5O72/oGDJ3fGWWmCoq/Jd4WTnaGlp6WY6ra82dXe4ubq8HyCh42RlJeZm5ycnYSfJp6enZ2cm5qZmJeWlJOSkZCPjo2NjIuKiYmIh4aGhoWFhISDhISEhIMkgoKCgYB/fXt68vDu6ujn5uTj39nSz83JsI+N9PPv7ejh2eqaibh+oYmUkY6LhID79u/n3tbMv6+joJSHh/vu8PDr6OLWt8aMnJ2dnpiK67acloyAhod/foKHjIR/fnl6ful3eHuGjKC+0tbU1tPIsqa00ufo7ePWzMW2nqSdn6qwpKOprsXMh8fenKKae+Lo53x8iIyQoJyIs6V+rMnS2uXt8np8THOrO1V7m6a/cX6KlZmdnZuO4ayy09zn6+7y94CFiY+TlpmbnJ2enqChoKCfn56dnJuampiXlZSTkpCPjo6MjIuJiYiHhoWFhISDgoKEgYOAhH8ifXx7enh2dejm5eDd3d3b2tbRysfEwKqNh/Dw7evm39fklomzfp2FlJCOi4WA+/fw597Xzb+vo6CUhof67vDv6+fh1bO6g6ChoKCajfLDqaOYi5CRiYaKj5SMiIaCg4f7gYGDjpOjvM7Rz9HQxrWuvNjs7vPq3dTMvamyq6y4wbOxtrrQ15LV7aKspYXz+PiFhZCUmaijgqmeeqjGz9jj6u54eAJ/foZ/iYABf4mAw4GRgIh/AYGLgwGChn+Ofol9Anx7hnqTeQF4pXkDenl5hHqDeYd6A3t8fYh+gn8CAgEATKOYotPy+Pr47u30gpGcpamH2rfN3N7i5Or0f4SLkZSXmJqcnJ6foaGho6KhoKCfn5+enZybmpmYlpWVlJSTkZGQj4+OjY2MjIyLioqGiSeIiYiIh4eHhYSDgYD//fr59vPy8O3p5uHZ09G3lO7ggoWGh4WD+J+JvH6mjJiWk4+KhYL/+/Tu59zTycC5raWkm4+OjYiFgv/689SC4KGXkYbYp5F9dHZvd3Vwd4SBeHR2cnlvaW1weHiIkrLQ09TOzsiqn6PE3ePk3dLFuq6fpqqoqKKgp6WppL2suc2FiIx2asRzmJSY/r6CrNDo8fuBhoqPlJieo6dOloeNu9jd29THxcptfoqSlXrMqLrQ3OLj6fJ+gomOkpOVl5mZm5ydnZ6fnp6dnJycm5uamZeWlZSTkZGQj46NjYyLioqJiIeHh4aFhISEhoMlgoKBgYB/fn18evPx7u7s6ejm4+Dc2M/JxayM0tN7fHx7d3Ttm4m4fqGJlpSRjoiEgfz48uvk2tDFvraroqGajY2Lh4SB/fjvz3zbp56YjezBqpOKjISMioWKmJOLiIiFjIJ8gYOKiZmft9PU1c/RzbawtdPq7/Hr4tfMwbS8wL7Bu7jAvsK91sfX6pKXnId54IOkkJP2t36myN/n73t/g4eMkJSZnU6PfICuyM7LwbSzuWR2gYmLcr+esMvj6evx+oGFi5CUlZeZm5ucnp6en6Cfn56dnZ2cm5qYl5aUk5KRkI+OjYyMi4qJiIiGhoWEhIOCgoGGgCV/fn19fHp5eHd16ujl5ePg397b2NTQyMG7pIe7y3Z2dXJuaeSWibN+nYaWlJGOiYSB/fjy7OXa0Ma/t6uiopqNjouHhYH99+7Ld9Spo5yR99C4oZeZkJiVj5SinJWSkY6WjIeLjpSSoaS30tHTztHNu7i/2vH1+fPq4NTJvsnOzNDNx87Mz8ni1ef6m6CokYLxjKaDje6ze6PG3eTseX2AhIiNkJSXi3+GgAF/iIDEgZGAAn5/hoABgYuDAYKHf5R+hX0Be4R6vHmFegd5enp7fHx9hn6JfwICAQBN2Of6g4mPlZmamZiYlIqC7N37l7rP5er2gIWKjZCRlJeZmpucnp+goKGioqGhoJ+enZ2dnJuamZiXlpWUlJOSkZGQkI6Ojo2NjIyLioqEiSiIiIeHh4aGhoWEg4KBgP/+/Pn28+/r5+Lf29jNvJfO5+v49O3l2e+eibx+po2dm5mVkYyIhYOA/fjw6ePb1cvDvbmup6SfmZSNiYaDgfnE15KCz6iah4N+gY+KfYCHhHt4goGCdHFxdYCNjJCftcTUxbWwpq+rtdPg3tzW086+uairsGqntMzMgd/b1NjDzeuSvNjtiaO2xd3t+YGHjZOZnqOprrW8wsfPKMfS4Hd9goeKioeFg31zbMq2nIivyOLp9H+Dh4qNj5GUlpeZmpucnJ2Enk2dnZybm5qamZeXlZSTkpKRkI+OjYyMi4qKiYiHh4eGhYWEhIODgoKCgYGBgIB/fn59fHrz8vHv7enm4t7Z1dLOwa+Kk9DR3NfRy8Tnmom4fqGJnJmXk4+KhoSCf/n07Obe2NHHv7q2rKWinZeSjIiEgX/2wdKQiunFtaGclZepoZKWnJmRjpeXlomHh4uVoqKircLO3M2/u7fCv8nj7u7t6Obi1NHBwsh4w8/JvXzY1c/SucPhjLbS44Ocr7/W5e97gIWKj5San6SqsLa6v3m9xtJvdXt/gYF9enhxZ2G5n2OAqsfn7vmBhYmMjpCTlZiZm5ucnZ6en5+fnp6dnJybm5qZl5aUlJKRkZCPjo2Mi4qKiYiHhoWFhIODg4KBgYB/f359fXx8fHt6eXl3durp6Ofk4d7a1tHPzMa4pX9tvr3JxcC8t+CWibN+nYacmZeTkIuHhYJ/+vTt59/Y0sjAu7espqOdmJOMiISBf/a/zYyR+dfGsaylpbqvnqOoo5yZoqGhk5KTlqCtrau0x9Lez8PCwM3K1Oz39/fz8e3g3s/Q14HV4LireNLSysyrttWItM3cfZitvtbk7Xl9gYaKj5WanqSpr7K3g3+MgIN/hoDHgZCAiH8BgYuDAYKKf5Z+BX19fHt6sXkGenl5enx9h3yEfYd+jn8CAgEAefmBho6Um6KorbCytbOwqZqSko3A44iIiYmKjI6PkpWXmZqbnZ6fn6CioaGgoKCfnp6dnJybmpmYl5aWlZSUk5KRkZCPj4+Ojo2MjIuLiYmIiIiHiIeHh4aFhYSEg4GAgP/6+Pb08Ozm4dvUzsW1iufEyuDh4eDe8J6JvH6mjqWhnpuZlJGOjYuIhYKA+fPs3tzV0M3Evbawq6WfmpSRkI2LhMHJ5rCUlZOnl5KNhIOMh4GFg4aLhoWKg4uNoambqri2tqmhrrfH1tzW2NHRzcCvqrTCzbazhZ+oq62yuLq9w87Z4eXw/YKHjJSboKatsbe+xczT2dzi6vIn5HZ7gYaNlJmeoKKkop2WhmRmf6/WhIWFhoeJi4yPkpSWl5iam5ychp0knJybmpqZmJeWlpSTkpKRkZCPjo2NjIuKiomJiIeGhoWEg4ODhIIkgYGBgIB/fn58e3v08O7t6ufj3dfSzMW8qn6qp7rT1NXW1uqaibh+ooqjn5yZl5KPjIuJhoOAffTu6NrY0MzJwbu0rqmknZiSj46LiYK+yO7Nr7CrwrKsp5ybpJ+Ym5qdop6copqipLjAr73Kycm9uMPO3Oju6uzm6ebay8fR3s6tq4Kdpqmqr7W3ub/K1Nzf6PN8gIWLkpaboaWqsLe+w8jL0Nfeeddvc3l+hYuQlJeZmpiSinlJSnal0oSFhoeIio2OkZOVmJmam5ycnJ6fn56enp2dnJuamZiXlpaUk5GRkI+Ojo2Mi4qKiYiHhoWFhIODgYGAgH9/f35+fXx8e3t6eXh3d+zp5+bj4NzW0czGv7WidYSWscvN0NLS5JaJs36dh6OfnJmWko+Mi4mGg4B99O7o2tnRzcrDvLWvqaSemJKPjoqIgbzH79/Bw7zTwr23q6qxrKSnpamuqqivp6+xxs67yNTT1MjG0Nvp8vj2+PP39enb1+LyyKSlf5+oq6yyt7i6wMvV3N7o8nt+goeNkZWanqKor7W5vsHGzNMBf5SAy4GPgIh/AYGLgwGCjn+WfgN9fHqveQN6fH2QfpN/AgIBAE6Jj5acoamvtbe8vsDCwLuwhZKt1oCLjI2NjpCSkpSXmJmam52en6ChoaGgoaCfn56dnZybm5uamJeXlpWVlJOTkpCQkI+Pj46OjYyLi4qEiSeIiIeHh4aGhYWEg4KBgP379/Tx7urm39fQyMC3pemS4PHz8O7s85+JvH6mjq+rqaWjn5yamJeUkYyJh4SC9/bu5+Tg2tLLx8K6tK+qpqKgn5uWjNCBzsGloJ+ek5SQop2fmZebm5GXmJegoa+9va7AurPEubO91NjSzsjNzMhwwfbTkqyxtLi+v77F0+Pv+YGFio+TmZ+mq7K4vsTN1Nvk7fT7gYGAg4YnfoKIjZOaoKSnrK6vsa6om2Z8n8R7h4iJiouMjo6QlJWWl5iam5ychp0inJubmpqYmJeXlpSTkpKRkZCPj46MjIyLioqJiYiHhoWFhISDJoKCgoGBgICAf359fHvz8e3r6ebi3dfPycG5rpvgjtjq6+no5e2bibh+oousqaejoZ2al5aUkY6Kh4WCf/Py6uTh3dfQyMW/uLGsp6OfnZyYlInOg9bcwLu6u66uqr23t7KwtLSqsLKxu7vJ1tTD1dDI3NDM1urv6+fj6enmf73ty42qr7K1u7y7ws7d6PB8gISJjJKXnKGnrLG2vsTK0trg5nZ2dHd7eXd7gISJkZebnqKkpaainI5Sb5e6eYaIiouMjY+QkpWWl5iZm5ucnZ6enp2dnZycm5qamJeXl5aUkpGRkJCOjo2Mi4qKiYmIh4eFhISDgoGBgYCAf39/fn19e3x7e3l4d+3q5+Xi39vX0srDvLOoldeM1ejp5+bj6JeJs36dh6ypp6OhnZqYlpSRjoqHhYKA9fTs5ePf2tLJxsG5s62oo5+dnJmUic+E3PHUzs3OwL+6zMfFwL7Cwbi/wsHMzNnn5NHj3tfs39zm9/36+PX7+/iHsuXGjayytbi+v73E0N3n73t/goaJjpOYnKGmqq61u8HHz9Xab29ucXSUgMyBj4CIfwGBi4MBgpF/ln4DfX17qHkEent8fY1+lH+FgAICAQB5mp+kq7G1ub7CxcjJy8zKxsPE0eGHjo6Oj5GSk5SWmJqamp2dnZ6foKChoaCgn5+fnp6dnJubmpqZmJeWlZWUlJORkZCQkI+Ojo2NjIyLioqJiYmIh4eHhoaFhYWEgoD/+/j18u/q5eHc1tDJwbiuoYyA//78+ff1n4m8fqaPu7e0sa6qqaako6KfmZSRjImFgoD9+vby7+fi3djSzMW/vLiyr6qlpKijjMqB7Xi3trKvrqKaobmsoqSrsKvEaMK7sbmyyW7FzWtvhW1vjbvMr4OquLu+wMXIysvR2ef3gomOk5icoaettbvDztjd5O3z/IOHio6QkZCRliuNkZecoaWorrK1t7e5ubeyrrLA0YGJioqMjY6QkZOVlpeXmZqam5ycnZ2dhZwlm5qZmZiXlpWVlJOSkpGQj46NjYyLi4uKiYmIh4aFhYSEhIOCgoSBIICAgH99fPTy7+zq5+Ld2dXQycK7sqeah3349/Xz8e+bibh+ooy4tLGuq6imo6Ggn5yWko+Kh4OAfvj28+/r5N/a1c/Jwry4tbCrp6KhpqKMy4T3htTTzsvLvrW91Me9wMnNyOF33dXK1MzifN/oeX2Xe32Zs8Onfqe1t7u9wsXGx8zU4fB+hIiMkJSYn6SqsLfAyc3T2uDmd3t+gYOEgoSJJ4WJjpSZnJ+kqKyura+vrKaip7bJgIqKi4yOkJGRlJWXl5iam5ubnIedS5ycm5qZmZiWlpWUk5KRkJCOjo2Mi4qKiomIh4aGhYSDgoKBgYF/f35+fn18fX18ennu7Onn5eLc2NTQy8W+t66jloV79vXz8u/pl4mzfp6Jt7Sxrquop6ShoJ+clpKPioiEgX75+PXx7ebh3NfRy8S9ubWwrKejoaajjc6G/pDq5+Le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goGA/fn28/Hu6ufk3trV0M3Jwry3s6+qpJqOhuLmjZadoqepqqqplJPj3t/d19TU1NLOysfBvLq3trCppaOjoZ2Zl5SSjouJh4WDgP/8+Pfy7uvm5eXi4N3dS93c29zc3NjY19bX0tHW09TX2d3e5OTg4uHk5ufm6Ors7vH1+Pn8gYWMlZ2lrLC0uL/J0t7m8Pf9goWGiY6Tlpmfpamsrq+vsbKztRmprbG1ub7CxcfLzc7P0c/PzMzjf4qOj5CShJMIlJWXl5iZm5uEmoWbgJybmpqZmZiXlpaWlZOTk5KSkpGQkI+Ojo2Mi4uKiomJiIeGhoWEhIOCgYGAf358e/Tx7uzq5uPg3NjU0MvHxL23sq6rpqCWi4Pd4YqSmZ6ipaampZGQ39rb2tXR0dDOy8fFv7m3tLStp6OhoZ6bl5WSkIyJh4WDgH/79vLy7enmUuLg4N7c2NnZ19jZ2djV1dTS083M0s/P0tXZ2+Hh3N7d3+Lj4uPl5+ns7/P09n6CiZGYoKWprLC3v8fS2eHn63l7e32BhYeKkJeanZ6fn6Gio6YjoKOnq6+1uLu9wcPExcfFxMLC232JjY6QkpOTlJSVlpiYmJqHm4Ccm5ubnJuampmZmJeWlZWUk5OTkZGQkJCOjY2Mi4qJiYiIh4aFhYODg4GBgYB+fn58e3p47+3r6OXi39zZ1dHNyMTBurWvq6mknpSKg9nch4+Vm5+hoqKhjY3f29za1dLS0tDMyMbAu7m1ta+opKOioJyYlpORjYqIhoSBf/z381bz7+ro5OLh4N7b3Nva2t3d29jY1tTVz83U0dDV2Nze5OTf4eHk5ufl5+rr7O7y9Pb4foKJkJefpKeprLO7wszT29/ic3V1dnl9f4GGjZGUlZaXmJmanZOAy4GagAGBioIBgaN/tH6Sf5OAAgIBABrDxszP0dTY3d/i5OTl5ubj5OyBjZWampqZmoWZBpqbm5ydnomfGZ6fnZ2dnJybm5qamZmYmJeXlpaVlZOTk5GEkICPjo2NjIuLioqKiYiHhYOCgf/++/f08vDt7Orm4t7Z09DOyMG9ubSuq6eglZKtxdbn9P+Cg4OA6KDt6+vp5+Tj4eDc2tXRy8fJxsC4sbCwraqno6CdmpeUkpGPjoyJh4eFhIOB/vv39PHx8fDv7u7u7/Dw7+7v8e/r6+7u7+7u7jXx8fX29vX29vj7/4GDhYiMkZihqa21u8HJ0Nvk7fT5/oKHi42Pk5icoKSorrCytLW1tbi7viWytbq9v8LGy87P0dHS09PR0tp5hY+UlJWUlZWWlZWVlpaYmZmahpsKnJycm5ybmpmZmYSXgJWVlZSTk5KSkZCPjo6NjIuLi4qJiIiHhoaFhYSDgoKBf3589vXy7+zq6Obl49/c2NPOy8jCu7i1sKqnpJ2Sj6nB0uLv+X+AgH7jnOnn6Ofl4d/e3dnX0c7IxMXDvbavrq6rqKWinpuYlZKQjo2LiYaFhYKBgH759vLv7e3t7OvqDurq6+vs6unq7Ovn5+nphOo17e7x8vLx8vHz9vp/gIKFiY6UnaSosLS6wMbQ2ODl6u15foGBg4WJjpKWmp6goaOlpaaorK8lqauxs7W3u8DDxcfIyMnJyMfQdYOOlJOUk5WVlpWVlZaXmJmamoScAZuEnICbnJuamZmZl5eXlpWUlJOSkpGRkI+OjYyLiomJiIiHhoWEhIODg4KBgH9+fXt68fDu6+nm5eLh39vZ1dDKyMa/ubazrqilopuRjqe/0N/s9X1+fnzgm+jm6Ojm4+Hf39vY09DJxcfFv7ewsLCtqqejn52al5KRkI6MioeFhYOBgAV/+vj08oTvEO7t7ezt7u7t7e3v7enp7OuE7TXw8fT19fT19Pb5/H+BgoaJjpOco6eusre8wsvS2d7i5HR4ent8foGFiY2QlZeYm5ycnZ6ipZKAyoGigISBgoCrf6d+lX+VgAICAQAoycvR09Ta3uDi4+Xo6Ojn6Ov5h5Kbn5+fnpybm5qZmZmampubm5ycnYeeAZ2EnAabmpqamZiElwSWlZWUhJOAkpGRkI+Pj42MjIuKiYiIh4aFhIKCgP/8+PTy8O7t7evp5+Ld2dXRzcfDv7u0raupoZqSjIiFhISDgYD9+/n29PPy8fDv7uzo5+Lc19HR087Jwr+9urW2s6+rqKWin52cm5mXk5CPjo2NjYqHhIODgYCAgYGAgIGA//6AgP/8/P86/v78/oCAgIKCgoODhIaHi46PkpifpqyxuMDHzNPb5O31/IGEhomOkJSYm5+lqq+ztLS2t7q5u77Awyq3ub/BwsjMz8/Q0tXV1dTV2eh/i5WampqZl5eWlZSUlJaWl5iYmJmZmpqFmwaampmZmZeEloCUk5OUk5KRkZCQj4+Pjo2Mi4uKiYmIh4aFhIOEg4KAgH9+fPXz8Ozr6efn5uTi39vW09DMyMK+u7ewqaelnpePiYWDgoGBf3759/Xz8PDw7u3s6+nl5N/Z1M3O0MzGv7y7t7Ozsa2opaKfnZqamZeVkI2NjIuLi4iFgoGBgH9+f0d/fn5/f/v5fX77+Pj7+fn4+n5+f4CBgIGBgoOFiYyMj5Wcoqiss7rAxcrR2eHo7Xl8fn+DhIeLjJGXnKCjo6SmqKuqrK6wsgyusLW3uL7CxMXGyMyEyxrO33yJlJmZmZiXlpaVlJSUlZWWmJiYmZmamoWbAZqEmYCXlpaWlZSSk5OSkZCQj4+Ojo2Mi4uJiIiHh4WEhIOBgYGAgH59fHt58O/s6ejl5OPj4d7c2NPPzsnFwLy5ta6opaOclY2JhYOCgYF/fvn49vPx8fHw7+3s6ufm4dvWz9DSzcjBvr25tbWzr6qnpKGenJuamJaRjo6MjIyLiIWCghqCgYB/gYCAf4CA/vx+f/36+v38+/r8f3+AgYWCLYSGio2Mj5Wcoqersri9wsfN1Nzh5XV3eHp9foCDhImPlJeampucnqGgoqSmqJKAyoGlgL1/BH5+f3+Ifp5/mIACAgEAHs7Q1tra3uLl5ebo6+zq6uz0g4yXn6Onp6imoJuamoeZBJqanJyGnYCcnJybnJqampmYmJeXlpaWlJSTk5OSkpKRkZCPjo2NjIuKiYmIh4aFhIOCgYD8+PXz8O/t7Orq6enm4t3a1tPOyca/ubSwrKqloJuUjoqHhoaFg4KA//37+/r5+fn49fPv7Ofm4eDd2dTMxsbBv7y5t7Ovraqop6aloqKgnpybmVGWlZaTkZCOjIyNjY2LjIqKh4qKiYeIjIiHh4eKiouMjo6QkZGTlpicoKassrm/xs3S1t7m7vb7gISIjJCTmJucn6KorLC0t7m7u72/wcTGyMsdvcDGycrN0NLT1NbZ2djY2eJ7hY+ZnZ+goZ+alpWElIWVApaYh5mAmJmYmJiXlpaVlJSTk5OSkpGQj4+Pjo6NjYyLioqJiYiGhYWEg4OCgYB/fn178/Dt6+ro5uXk5OPi39zX09DOycTBu7Wwq6emoZ2YkYyHhYSEg4KAfvv5+Pj39vb19PLw7Ojk497d2tbRycPDv726trSwrauopqSkoqCfnZyamZdRlJOUko+OjIqKi4uLioqJiIaIiIeFhoqGhYWFiIiJioyMjo+PkJSWmZ2iqK60usDGy8/W3OTq7nl9gYSGiY2QkZKVmp2hpKeqq6uusLK0tri6HLO2u7+/w8bIycrN0NDPzs/Yd4OOl5uen5+emZWFlAeVlJWVlZaYh5mAmJiYl5eWlpWVlJOSkpKRkZCPj46OjY2MjIuKiYiHh4WEg4KCgYGAf358fHt57+zq6Obl4+Lh4N/f29jT0M7LxcG+ubSuqaWkoJyXkYuHhISEg4KAfvz6+fn49/f39vTy7urm5uHg3NjUzMXFwb+8uLayr62qp6alpKGgnp2bmphRlZSVkpCPjYyLi4yMi4yKioaJiYiGh4uHhoaHiYmKi42Nj5CPkJSWmZ2iqK2zuL7EyczT2d/m6XZ5foCChIeKiouNkpWYm56goqGkpqiqrK6xkYDLgaiA4n+agAICAQAd1dXb3+Hk5+bo6+rt7/Hw8/+HkZ2mra6sq6ignZqFmQuXl5eYmZubm5ybnIWbE5qampmZmZiYlpaVlZSTk5KSkZCEjxmOjo6NjYyKiYiHhoaGhYOCgP77+vbz8O7thOyA7evp5uTh3dbT08zEvrq0sq+rqqeinJiUkI2LiYaEg4KBgoGAgYKBgf/7+PXw7ern4+Hc2dPNycjDwb+7uLa0s7Gurq2rqqmnpaKgn5+fnZyamZiZm5mXlJSTlJWUk5SUkpSUlZWWl5ibnJ6goKGkqq+1u8DFzNDV2eDo8Pj9gIQah4uPk5ecoKOmqq2xs7a6vb/AwcTGyMvNz9ItxMXLzs/R09TV19fa3d7d4e5/iZWepKSjo6Gal5SUlJOTlJKSkpOVl5eXmJeYhpcvlpaVlZWUlJOSkZGQkI+Ojo2LioqLi4qKiYmIh4aFg4KCgYKBf3189fLx7uvq6OeF5oDk4d/d2tfRzc3Gv7m2sK2qp6akn5qWkY2LiIeDgoGAgIB/f4CAgH/8+PXy7ern5N/e2NbRysbFwL69ubWzsbGuq6yrqaenpaOgnp2enpybmZeWmJmYlpOSkZKUkpCSkpCRkZKTlJSVmZqcnZ6eoaessre7wMbKztLX3+ft8Xp+gBmDh4qNkZWYmp2fo6Snq66vsLG0tri7vb7CHLq7wMTFyMrKzM3N0NPV09fkfIeSnKKioaGgmZaGkw6SkZKTlJeXlpiXmJeXl4SWEZWUlZSUk5KRkJCPj46NjYyKhYkYiIeHhoWEg4KBgH9/f317evDu7ezo5+XkheOA4d7b2dbTzsrJw7y3tK6sqaalo56ZlZCNi4iHhIKBgICBgH+AgYGA/vr39O/s6ebh39rY083Ix8LAv7u3tbOysK2trKqop6akoZ+enp6cm5mYl5mamZeUk5KTlZOSlJSRkpOTlJWVlpmanJ6enqGmq7K2ur/EyM3P1dzj6et3en0ZgIOGiIyPkZOWmJucnqKkpaanqqyusrS1uJGAyYG0gNZ/nIACAgEAL9rd4OPm6Onq7O/x9ff39v2Eipagq7O0sq6oop2amJeXl5aWl5iZmZmYmJiZmpqZhJpVmZmZmJeWlpaVlJSTkpKSkZGQkJCPjY2MjIuKiomIh4aFhIOCgYD//fr39PPw7uzq6+zt7O3u7uvo493V0szGwb67uLSzsK6sp6WgnZqWko6Li4qKiYSIdIeGhIKB//z69fPv7Ojm4dzW0tDPzMnHwry7u7q6uLe2tLKwr62rq6qpqamnpqWnqKaioKOjoJ6doKCfnp+goaOkpKWpq62vs7e7vsPIzNHX29/o8fj/gYSHi46SlpmeoqWprq+ytrm7vsLFxsjMzM3Q0dPVK8nMz9HU1dbX2tzf4uTl5et8goyXoaipqKWgm5eUkpKRkpGQkZKTlJSTk5SFlViXl5aVlJWUk5KSkpGQkI+Ojo6NjIyLi4qJiIiHh4aFhISCgYGAf358e/b08e7s6+ro5uTk5ebl5ubm4+Hc18/Nx8G9ube0sK+sqqijoZ2bl5OQi4mIiIiHhYZzhYOBf/z59/Lw7Onl497Z08/NzMnHxL+5ubi4t7a1s7Gwrq2rqaqop6enpqSjpqajoJ6hoZ6cm56enJycnZ6hoaGipqiqrK+zt7q/w8fM0NTX4Ojv9Xx+gYOGio2QlZibnqGhpKeqra+ztLW3vLu8vsDBxIC/wsbIysvMzdDR1Nja29vieH+JlJ+mpqWjn5qWk5GQkZGQj5CRk5OUk5KTlJSUlZWWlpWUlJOTkpGRkZCPj46OjY2Mi4qKiomIiIaGhYSEg4KAgH59fHx6efLw7uvp6Ojm5OHi4+Pi4+Li393Z1M3KxL+7t7ayr62rqaejoJ2al4CTkIyJiYmIh4aGh4eGhoSCgf/8+fTz7uvn5eDb1dHPzsvJxsG6urm5ube2tLKwrq2rqaqop6eopqWkp6ikoJ+iop+cnJ+fnZydnZ6hoqKip6mqrK+zt7m+wsbLz9LV3eXr8Hp8foCChomMkJOVmJubnaCipKapq6ytsrKztbe4upCAyYG4gNF/noACAgEAH9/i5ejp7Ozt8PP09vb3+oGGjZejrLGysa2po52amJeFlQmWlpeXl5iYmJeFmICZmZiYmJeVlZSUk5OSkpKRkJCPj46NjIuKiomJiIeGhYODgoGA//79+/j18/Hv7uvq6uvr7fD08/Pw6+Pb1MvFwcC9vLq4tbKvraypp6ShnZmXlpWUkpCPj46NjImHhYOBgYD9+Pbz8O3o5uPg3NfU0czHxsXCw8TGxsPCwr+8uk67ure2tra0s7W1tbGusLCvrqytsLCvrq6wsbKzsbS2ubzAxcjKz9TY3ePr8/b7gIOHi42RlJmdoKSnq6+ws7a6vb/CxMjM0NPT1dbX2dwpztHT1tfZ2dre4eLk5OXpeH+Fj5qhpqemo6CclpSSkZCQkI+QkJGSkpKFk4SUgJWVlJSUk5KRkJCPj46NjYyMjIqKiYmIh4aFhISEgoGAf39+fHv29fXz8O7s6uno5uTk5eTm6Ovq6ebj3NTPxsC8u7m4trWyr6ypqKakoZ6al5SUkpGPjY2NjIuKiIaEgoB/fvn18u/t6uXj4N3Z1NHOyMTDw8DAwcPDwL+/vbq4Tri4tbS0tLKxs7Oyrqytrq2rqqutrayrqq2usLCvsbO2uLzAw8XKz9LX3eTr7fF7f4GEh4mNkZSYm52go6Smqa2vsLO0t7q/wsPExsbIy4DEyMvNzs/P0NPW2Nra3OB0fIKMl56jpKShnpuVk5CPjo+Pjo+PkJKSkZKTkpKTk5OUk5SUk5OTkpGQkI+Ojo2NjIuLi4mJiIeGhoSEg4OCgYB+fXx7ennx8vLv7evp5+fn5OHh4uHi5Obl4+Hf2dLMxL65ube2tbOxrquop6WjoYCem5eVlJORj46Njo2Li4mHhYOBgH/8+PXy7+zn5uLf29XT0MrFxMTBwcLEw8G/v726uLi4tbS0tLKxtLOzr62urq2sqqytrqyrqq2vsLCvsbO1uLu/w8XJzdHW2+Po6u15fX+ChIaJjZCUlpibnp6foaWmp6qrrbG1t7i6u7u+wY+AyIG+gMt/oIACAgEAJOPm6evr7vDy8/b29/j7/oKHjZafpq2urauloZ2ZlpSTk5SUlIaVhJYEl5eWloSXgJaVlZWUk5OTkpKRkI6Oj46NjIyLiYiHh4aFhYOCgoGA/v38+vj18/Lx7+3s7Ovr7O/x9Pb49/Pl2tnMx8bEwsC+vLq2s7Owr66sqaajoaCenJqYmJiWlJKQjYuIh4aFg4GA/vv38u/t6ubh4NzZ19bX1dTT0NPX09DOzs7MycbESsLBwcLBwsG+vr+/wL+9v77Aw8HAwL69vL/Bw8jN0NTW2Nre5/H5/YCAgYSIjZCTlpqdoKSorLCxsrW7wMTJysrLz9XY2dzb297hHtHU19na3N3g4eTk5efq7Xp/hY2WnaKjo6GdmpaRj4SOgI2Oj5CRkZCQkZGRkpKTkpKSk5KSkpGRkZCPj4+Ojo2MiouKiYmIh4aFhIOCgoGAf359fHv19PPy8O3s6+rp5+bn5eTl6Onr7Ozr6NzU08jDwsC+u7q4trOwr6ysq6mmpKGfnZyamJaVlZSSkI6LiYaFhYSCgH779/Pv7Oro493bFNjU09PT0tHQztDT0M3MzMvJxsTChr83vbq7vL29vLq8u72/vr28u7q5u72/w8jLztDS1dnh6vH1fHx8gIOGiY2Pk5aYm56hpaWmqa6ytoS5Cb3Ex8jKysrMzx7Iy87Q0NLU1tjb2tzd4OR2fIKJlJufoaGgnJmUkI6FjA+NjY+QkI+QkJCRkZKSkpGEkoCRkZCQkI+Ojo2MjIuJioqIiIeGhYSDgoGBgH99fHt6efHw7+7t6+rp6Obl5OTi4uLk5ebn5eTi2NDRxsHAvry6ube1sq+urKurqaajoJ6enJqYlpWVlJORj4yKh4aGhIKBf/369vDt6+nl393Z1tTU1dTS0s/R1NDOzMzMycfEwkq/v7/AwMC9u7u9vb68u7u7vb6+vLy7urm7vL7CyMrOz9HU2N/o8PN6e3t+gYSHioyPkpSXmpyfn6ChpquusbCvsLS5vL3Av7/CxY+Ax4HCgMV/o4ACAgEAIObq7Ozt7/Dy9fj4+vv9gIGFipCYoaioqaShnZyXk5GRhZIGk5OTlJSThZSDlYaUCZOSkpKTkpGQj4SOgI2Mi4mIh4aGhYWDgoGB//39/Pr49/X08vDv7uzr6+vu8vL2/Pr88OXj19DLyMXFxMC+vLq3trOzsbCvrqupp6Wko6OioJ+enJmWkY6NjIqIhYWDgoD9+vXy8Ozq5+np6Ofl4uHh4uXl493c2tjW08/Oz9DPy8rLy8rKy87Ozs/QOs/Pzs7NysvMzdHV2+Dj5efq8fj8gICChIWIi4yQlJabn6Kkp6uvsrW4u7/Cx83S09LT2N3f4ODh4uQn1Nja293e3+Hk5ufq6+x3en6CiI+Ynp+gnJqWlZCNi4uLjIyMjY2NhI4Kj4+Qj4+QkJGQj4SQgI+Oj46OjYyMi4qJiomJiIeFg4OCgYKBf359e/Tz8/Py7+7t7Ovq6Ojm5eTk5unp6/Dt7+bd29LMx8TBwcC8ubi3tLKvsK6srKqopqSioaCgoJ6dm5mWlI+Mi4qJh4ODgoF/+vfx7+3o5uPm5uXk4t/e3t7h4N/Z2NbV09DNy8vOR8zIx8jIx8bIy8rLzczLy8rJyMXHx8nM0Nbb3eDh5Ovy9nx9foCBg4WHio2PlJeanJ6ho6aprK6xs7e8wMLAwsbMzs7Oz9DSNMzP0dLT1dbZ293f4eLkc3Z7gIWNlpycnZqYlJOOi4mIiYqKiouLjIyNjY2Oj4+Pjo+QkZCFj4COjY6OjYyLi4qJiYmIiIeFg4KBgICAf318e3nv7/Dw7uvr6urp5+Xl5OLi4uPl5ebp5+fh2dfQysXCwL+/uri3trOxr6+urKuqqKakoqGgoKCenZyal5WQjYyLioiEhIOCgPz48/Hv6ufk6Ofm5eTg39/f4uHe2djX1dTQzcvMzkfMyMjHyMfGyMvKy8zMy8vKyMjExsfIy9DU2tzf4OLq8fR7fH6AgIKEhYiKjJGUlpeanJ6go6WnqauvtLe3tre7wcPDxMXHyI6AxoHHgL9/poACAgEAIers7O7t7fLz9ff5+/39/oGDiIuQl5udnpuYlpWSkI+Oj4SQg5GEkoORhJKGk4CSkZCQkI+Ojo2NjY6NjIuJh4eGhYWEg4OBgYD+/fz6+vn39vX08/Hv7u/u7/Dw8vb7+PL07uLW1c/LycfFxMG/vLq5uLi3trSxr62qqKisrayqqKShoZ+cm5mXlJKPjIuJhoSBgf/9/fv6+fn49/b09PDv7vHx7erl4+Pf3N7d2wze3drb2dzc3NjW2dyE3jff3N7i5ujo7O7v8fX3+v3/gIGEhomKjZCSlJidoaSoq66xtbm9v8PHys7R1dnY1tXb4OLj5OboKtnc3N7d3eHj5efp6+zt7nl8gIOIj5OVlpORj46LiomIiYqKiYqLi4yMjISNBoyNjY6NjoWPgI6NjIyMi4qKiYmJiomIhoSCgoGBgIB/fn18evTz8/Ly8O7t7Ozr6uno6Ofn6Ojp7O/s5+nl29HRy8fFw8HAvbu5t7a1tbSzsa+sqqelpaiqqaeloZ6fnZqZl5WSkIyKiYeEgn9//Pr5+Pf19vX08vDw7ezq7e3q5uDf4NvZ2trXR9va1tfW2djY1NLV2Nra2dna19nd4ePi5ujq6+7w8vb4fX6Ag4SGiIqMjZGWmpyfoaSmqaywsrW4ur7AxcjHxcXKz9HS1NXXK9DT09XV1Nja3d/h4+Xm53Z5foGGjJCSk5GPjYyJiIeGh4iIh4iJiYqKiouGjIONhY4qjYyLi4yLiomIh4iJiIaFgoCBgH9/fn18e3p48e/v7u/s6+rp6unn5uXlheSA5unn4+Th2M/PycbFw8G/vLq4trW0tbOzsa+sqqekpKiqqaakoZ+fnZuZmJaTkI2KioiFg4CA/vz7+vn3+Pb19PHx7u3r7e3p5uDe4NzZ29rX2tnW19bY19jU0tXY2dnZ2NjW2Nzg4uHm6Onq7e7x9Pd8fn+Cg4SGiImKjpOXmZwYnZ+go6aqqq6xs7a4u769u7vAxcfJzMzOj4DFgcqAu3+ngAICAQAC6OuE7Bfx8/T1+Pj6+/v9gIOGiIyPkZKRkI+OjoWNBI6Pjo6Ej4KQhI8RkJCQkZKSk5KSkZCQkI+OjYyEi2CKiYeGhoWFhISDg4KBgP/+/fz6+Pf39fT08/Ly8fDu7u/v7vLz7O/u5dva19LPzMjHxsPBv8C+vbu7ube1sq+trbGysrCvrq2pp6Sin6CdnJuZlpOQj4yLiYiHhYSEhIOEgVeA//z59vj49O/t7Ovs6+ro5+fp6eno5+bl4+To6enq6+vs6uzt7+/x9Pj6/YCBgoOEhoqMjpCTlZmcn6Kmqq6wtLe8wMTHys3P0tba3Nzb2tvc3+Lk5OYb2Nze3t7d4uTl5ujp6+zt7nl8gIKFiImLiomIh4eEiASJioqJhYoFi4uLjI2FjiqNjIyMi4qJh4eGh4eGhYOBgYCBgH9/f358e/X19fTx8O7u7ezr6+rq6umF54Dp6eTm5d7U1NLOy8jEw8K/vry8urq4uLa0sq+sqqqtr66trKuppqShn52dm5qYlpOQjo2KiYeGhYOCgoKBf3+Af377+PTy9PPw6urp6Ono5uPi4uXl5uTj4uHf4OPk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9fTz8/Ly8fDv8O/u7Ovp6Ofk4uHh3tvY2dfV0tLQz8/NzcrKx8XGxsXGx8fJyMfIy8rIx8PBwL++vbu5uLi2tLKwrqyrqqmoq6yrqqmno6KhnZmUk5KQj42Mi4qIh4aGhUeGhoWDhIKCg4OEhYWFhoeIiYmJiouLioqMjY+RlJaZm52go6aprbCysrO3ub2+v8HCwsLBxMbJys7PztDR0dLT1NfZ3N3h4jTY3Nzf39/g4eTk5ebn6evt7e3r6uzu8fJ6enp7fH5+fn1+fn5/gIGBgYKDgoKDg4KCgYGBhYIngYCAgIGBgYB/f35+fn19fXx8e/Tx8vP19PLz8vHw7+3s6+vq6urphOiA5uXj4eDd29ra2NXS09LQzs3LysvJyMbFw8HCwsHCw8LFw8PEx8bEw8C+vby7uri2tbWzsa+tq6mop6alp6mop6akoJ+empaRkI+NjIqIiIeFg4ODgoODgoGBgICBgIGBgoKCg4OEhYWFh4eGhoiJioyPkZOVl5qcnaCjpainqKwcr7K0tbe4ubm4u7zAwcXGxcbIxsfIyczO0dLV1i/T19ba29vc3eDf4OHj5efo6enn5ujp7O13eHh5e3x8fHt7fHx9fn9/gICBgICBgYWADYGBgIGBgH9/f4CAgH+FfW98e3t7ennw7e3w8fHv8O/u7ezr6unp5+fn5uXm5eXj4uHf3tvZ2dnX09HS0c/NzcrJysjHxcTCwMHCwcHDwsTDw8THxsXDwL69vLu6uLe1tbOxr62rqainpqaoqainpaOgn56alpGPjo2LiYeIhoSFggmDgYCAf3+Af4CFgTiCg4ODhIWGhYWHiImLjo+Rk5WXmZqcnqCjoqOnqq2vsbS1tra1t7m9vsLDwcLDwsPDxMfJzM3R0ZiAtIH/gLWAAgIBACfj5OLj5ubo6uvs7e3v8fH19vb4+fj7/v///4CAgP+AgYKCgoODg4KEhBKFhYSEhIWGhYWGhoSEhYSDg4OFggSBgYD/hP4K//7+/fz7+vn49oT0AfKE8Vnv7u3s6+zr6unp6Obk4uHf3drY2NbS0dDOzs3JyMnLyMfHx8bFx8fHycrLzMzMysnGxcTDwsC/vbu6ube0s7Kwrq6usLGxsK+tq6imo6CcmJSTkpKSkZCPjoSMRouLiYqKiomIiYqLi4uMjY6Pjo2MjY6OkJKVlpibnaCipairra+xs7W1uLq8vb7AwcLDxcbJy8zNzc7Oz9HS09TU1drb3d8g19jW2Nvb3d/h4uLi5Obn6uzs7e7t7/Hz8/J6enr0e3yEfQN+fn2Ef4WACoGCgYGCgYGBgICEf4R+BX18fPf1hPYJ9fX08/Ly8fDvhO1W6+rq6uno5uXk5OXk5OPi4d/d3NrZ19XT09HOzczKysnFxMXGxMPDwsLBwsLCxcbHyMnIxsXDwsHAv728urm3trSwsK+tq6urra6urayqqKWjoJ2alZGEjwqOjYuLiYiJiYiHhIYxhYSFhoaHh4eIiYqJiIiJiYqMjpCRk5WYm5yeoaOlpqiqrK2wsrS2tri5uru9vsDDxITFC8bIycnLy8vP0NLUJ9LT0tPX19rb3d7e3uDi4+bp6Orr6uvt7u7ueHh473l6fHt7fHx8e4R9hX4Kf4B/gICAf39/foR9hHwEe3p69IXzCfLx8O/v7+7t7ITqAeiE51nl4+Ph4eLi4eHg397c2tnX1dPR0dDNzMvJycjEw8TFw8PDwsHAwcLCxMXHyMnIxsXDwsHAv728urm4trSxsbCtq6urra6urayqqKWjoJ2ZlZCPj46OjYyKioSIAoeGhIUDhIOEhIUphoeHiIeHhoiIiYuMj4+Rk5aYmZudn6GipKeoqayusbO0tba3uLq7vcCGwgrExcXGxsbLy87QmoAEgYGBgKeB/4C8gAICAQAi3d3d4OHk5Obm5ujq6+3w8vP09vX1+Pr7/f//gIGA/v+AgIeBg4KEgwqEhIODg4KDgoKChIFKgoKBgICA/vz9/vz8/Pv7+/r4+fj29vTy8/Lx8PDw7+3t7Ovq6urp6OXk4+Li4eDf3NnY1dPR0M7My8jIyMbExMXGx8fJyszNzs6EzTfMysfIxsTEw8HAwL68u7m3t7a1tre3trW0srCtqqimo6CdmpiXl5aWlpWVlZOTkpKRkZGQkZGRhJI5kZGRj46PkJGUl5iZmpydn6OmqKqrrrCxsrS2uLm6vLy9vsHExsjJysvMz9DQz9HS0tLT1NbY2tzbI9LS0tXW2dnb29vd3+Dj5+nq6+zr6+3v8PH09Hp7evP0enp7hHwTe3x9fX1+fn9/f4B/gH9+f35/foR9Cn5+fXt7e/Tz9PWE8z3y8vLw8PDu7u3s7Ovq6enp6Obl5OPi4+Pj4t/d3Nvb2trZ1tPT0M7My8nH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u7m3uLe3trWzsrGwsLCurKyrqqimpKKhnpybnJybnJybm4SaIZmYlpaWmJmbm5yfn6Cgn5+ho6Slp6ipqqusrrCys7S1tYW2F7e5u7q7vL2+wMHCxMXDxcTExsfJysvNqoABgYuAAYH/gMqAAgIBABPZ2dvb3Nza2dvb3d/k5ujs7/DxhPMa8vHx8vP19vf4+fn49vf5/P39/f79/f38/PqE+zf8/f39/Pz7+vj39/f29/f28vX29fTz8/Lx7/Dw8PHy8vDu7e3s7Onq6efl5ODh4uPj5OXi3dvZhNgk1tXV09HQzc7OzcrIycnJyMXFyMnKzMvNzc7OzM3MyMjLzMnIhMcIxsTEw8LAv72FuyO6ubm5uLe3tra1tbOysK+urKmpqKemo6WmpqWlpqelpqalpoSoAaqFri6vr7CytLO0tbW3uLi5u72+v76+wcHCxMTDw8XGx8fHyMnKzM3Oz87P0dTX1tXXE9DQ0dLS0tHR09PV19ve4OTn6OqE6xTq6enp6+zt7vDw8O/u7vDz9PT09YX0GvLz8/Ly9PT08/P08/Lw7+/v7u7u7ens7ezshOuE6Rrq6+vq5+fn5ubi4+Lg3t3a29zc3d3e29fV04TSJNDPz87My8jJycjFxMXExMTAwMTExcjHycnKysnKycXFx8fFxITDCsLBwL++vbu5t7iEtye2tra1tLSzsrGxsK6tq6qopaWko6KgoqOjoaKio6GioaCho6OjpKaFqQ+qqqusr66vsLCys7O0tbeEuBu5uru8vLy7vL6+v7/AwcHDxcbHxsfJzM/Nzc5JzM3Oz9DQz8/R0dPU2dvd4eTl5+np6Ojn5ubn6Onr7O3t7ezr6+3w8fHx8vLx8vLx8PHx8O/x8fDw8PHx8O7t7ezr6+vq5unr6oTpe+jm5+fm6Onq6ebm5eTk4eHh393b2Nna2tvb29jV09HQ0NHQzs3OzMrKx8fIx8TExcTExMDAw8TFyMfJycrKycnIxcXIx8bFxMTDw8LBwL++vbu4t7e3tre2tba2tbS0s7Kxsa+urauqp6Wko6Khn6GioqGhoaKgoKCfoISiAaSEqC+nqKmpq62trq6vsLGys7S2tre2tri4ubq6ubi5uru7vL29vsDCw8PDxMbJzMrJyv+A/4CCgAICAQAT19bY2Nra2Nra2dna297h5Oru8YbzDPLz9PT19fb3+Pb3+IX6Hv38+vv6+vz8+/v6+Pn49/f19ff39vb19/Xz8vLy84TyYPPz8vHw8O/v7u3q6erq6ero5OPl5eTl5OPk4uLh393a2trW1tXU0c/Qzs7OzczLzMzLysfExcfHyMnKzM3LzM3NzcvLysnJyMbFxcXEw8PCwcDAv7++vLq7vLu8u7u6uoS4ULe1tbSzs7GwsK+urayurq+urq2tra6vrq2tra+xsrOzs7S1tLS1t7e4ubm4ubm3ubu9vr/BwsLDxMTDwcLDw8TExcjKy8zNzc3R09PT1NXVFM/Pz9DS0tDS0tHS0tLV2dzi5ujqh+sR7Ozt7e7u8O3u7/Hy8fLy9PSE8i/08/Lz8fDw8O/v7e3u7+7u7e7t6+rq6uzr6+vs7Ozr6+rq6enn5uPi5OPi4+Hd3IXead3d29za2dbV1NTR0NDPzMrKyMjJyMjGx8fGxcK/wMPDw8XGycnIyMnJycfHxsXFxMLCwcLAv7++vby8u7u6uLe4uLi5uLe3t7a1tbW0srGwr6+trKurqqmpqqurq6qpqaiqqqqpqamrrISuL7Cwr6+wsrOztLSzs7Sxs7a3uLi6u7u8vb27urq6u7u7vb/BwsPExMXJzMzLzc3OFczMzc7Pz87P0M/Q0NHT19nf4+Xn54boCunq6uvr6+zq6+yF74Dy8e/w8PDy8vDw7u3t7ezs6+vs7Ovr6uvq6ejo6Orp6enq6urp6Ofn5ubl5eHh4uLg4d/c29zd3Nzc29vZ2djX1NPT0s/Pz83LyMnHx8jHx8XGx8bFwr/AwsLDxcXIyMfHycnIxsbGxcXEwsLBwsC/v768vLy7urq4t7i4uLm4t0O3t7W1tLS0srGwr66trKuqqaioqqqrqqmoqKipqamoqKipq62ura2vr66ur7CysrOzsrKzsLG0tba3uLm5urq6ube3hLgPubu9v8DBwcLGycnJysvL/4D/gIKAAgIBAEHT0tLU19nZ2tza2t3c3uDg4uPn6uzt7u/x8fL09vb29fT2+Pr7/f37+vj2+Pf29vf3+Pn39/j39vb19vf39/X19IXzhPJM8fHw7+7s7Ozr6+rp6unn6efn6OXl5eTl5OPi4OHi397c2tnZ2dbU09PRz87MzM3NzczLysjHxsfHxsbIysnIysvLysrJyMjEyMrIx4TGB8XEw8LAwMCEvha/vr++vb29u7q5ubm4uLe3tbW0tLOzhLQbtbSzs7Sztba0s7O0tbe2t7e4uLm4ubm6urq7hbohu72+vsHCxMXFxcTExsbFxsXExcfGx8jIys/Q0tLS1NPSN83Ly83P0dHS09LS1dTW2NjZ2t7h5OXn6Onq6+zt7u7t7O7w8vP09fLx8O7w7+7u7/Dx8e/v7+6E7Qbu7u7t7eyH6xfs6+vr6unp5+bm5eXk4+Ph4OLg4eHe34TeP93b2dvb2djW1dTT09HPz87MysnHx8jIyMfHxcTCwcLCwcLExcXExcfHxsbEw8PAw8XDw8LBwsLBv7++vLy8uoe7Mrq6ure3tra1tbS0s7KxsLCvr7Cvr7CxsK+vsK+xsbCurq+xs7Kys7OztLS1tba1tbe2hLUhtre4t7q7vb69vr28vr6+vb28vb6+v7/AwsfJy8vMzczLOsrIyMrNz87Q0dDQ0tLU1dbW2Nve4eLj5Ofn6Orr7Ozq6uvt8PDx8vDv7ezu7ezs7e7v7uzr6+vq6uqE64LqiOlP6urp6Ofn5uTj4+Li4eDg397g39/g3d7e3d3c29rX2drX1tTT0tHR0M7OzcvIx8bGx8fHxsbEw8LBwcHAwcPFxMPFxsbFxcPDwr/DxcPCwoTBCL++vry8vLq6hrs9ubm5t7a2trW1tLOysbCvr66ur66vsLCwrq6vrrCwrq2trrCysbGysrO0s7OztLS0tbSztLOztba2tri5uoS7Frq8vLu7urm6u7q7vL2/xMbJycnKycj/gP+AgoACAgEAYtPT09TW2NjZ2tzd3+Dj4+To6ejn5unp6uzt7O7w8fHx8vP09PX39/f4+Pf29fX2+fn39vT08/Py8vLx8fHy8PLz8vHx7/Dv7+/u7u3t7O3s6+zs6+rp6eno6Ofn5+jm5OXhht8O3t3c3dvZ1tTT1NPS0dGE0D3PzcvJycjHx8jFw8fIycjIycrKy8rIyMfExsjHxsXFxMPEw8PDwsHBwcDAv7+/vr2+vry8vLu6ubm4t7e3hLYUt7e4ubi4ubm4uLm4uLi5urq7u7qGvCe5urq8vr+/vr/CwcLDwsLExsbGx8jHxsjJysnIyMfFxcfKzc/PztCE03bMzMzNz9HR0dPU1dbZ29vb3+Dg397g4eLl5uXn6erq6uvs7e3u7+/v8PDv7u3t7/Hw7+7s6+rq6erq6Onq6unq6+rq6ujp6Onp6efn5+bn5uXm5uXk4+Li4eHg4ODh4N7e29nY2NnY2djX1tfV1NHPzs/Ozc3MhcshycbExcPDwsPAvsLExcTDxcXFxsXDxMLAwsTDwsHBwL/AhL8Xvr29vLy7vLu7urq6ubi4t7e2tbW0tLSFsyK0tLW0tbW1tLS1tbS0tbW2t7a1tre3uLi3tba2t7m6ubi5hrscvb6+vr/AwL/AwsLCwcG/vr6/wsbIx8fJzM3NzDXKysnKzc/Pz9DS0tTW19jY293d29rd3t/i4+Pk5ufn5+jp6uvs7e3t7u7t6+vr7O/u7Ovp6IXnKebm5+fm6Ono5+fm5+bn5+fl5eTj5OLi4+Pj4uHg4N/f3t/f4N7d3drYhNcP2NfW1dbU0tDOzc7NzMvLhMohycfFxMTDwsLCv77Cw8TDw8TExcXEwsPCv8HDwsLBwL++hL8Yvr29vby8u7y7u7q6uri4t7e2tbS0s7OzhbJEs7O0s7S1tLO0tLSzs7S0tba1tLa2tre3trS1tba3uLi3uLq5ubq5ubq8vLy9vr28vr/AwL6+vbu7vL/ExsXFx8rLysr/gP+AgoACAgEAE9LS09PU1NTW19jZ3N7g4OPl5+iG6gLs7YTuMu/v8PDx8fDw8fHy8O/t7e7v7/Dv8PDv7+7v8O/u7O7u7Ozt7u7t7u/t7ezq6+vs6+rphOog6ejn5+bl5eXk49/e3eDf39/e3t3d3Nzc2dfW1dTT09KE0SDPzsvKysjIx8fIxsTFx8bGxsfIycfGxsfHxcPExsbFxITDCcTEw8LBwcLBwYTAUr++vr28vLq7vLu6ubq5urq6u7u8vL28vL28vL29vby8vb6/v72+vr67vL29vsDCxMPBwcPEwsTDxMbHx8jJyMnIyMnKysnKysrLy8zNzs3MzdGE0iHMzM3Nzs7Oz9DR0tXW2Njb3d/g4uPi4uPi5Obo6Ofn6OiH6Q3q6unn5eXn5+jp6OfohOcY6Ojn5efm5eXm6Ofm5+jn5ubk5OTm5eTihONG4uHg4N/f397d3drZ19rZ2dnX19bY1tfW09LR0M/Pzs3NzczMy8nGxsbExMPDxMLAwMLBwsLCxMTDwsLDw8HAwMLCwsC/v4TAAb+EvhC9vby8vL27u7q5uLi3t7i4h7YBt4e4C7e3ubi4t7e4ubm5hLgutre4uLm7vb29u7y9vbu9vL2/v7/AwcHCwcHBw8LCw8PCw8TFxsfGxcbKzMzMyxPJysvKy8zLzc7Pz9LU1dbY2tzehOAb4eDi5OXl5OTl5ufm5+fm5ubn5+Xj4uLk5OXmiuUt4+Tk4uLj5eXk5ebl5OTh4uLj4uHf4ODh4eDf3t7d3d3c3NvY19bZ2NfX1tbVhNYa09HRz8/Ozc3MzMvLysjFxcXExMPDw8K/wMKEwQ7Dw8LBwcLCwb/AwsLBwIS/CcC/v769vb69vYS8Bru6urm4uIS3Bba1trW1hLaGtwu2tri3t7a2t7i4uIS3FbW3t7e4ubu8u7m6u7u6u7q7vb29voW/hMAQwcHAwcLCxMXEwsPIysrJyf+A/4CCgAICAQBC0tPU1NXU1tbX2Nrc29re4eHk5efn6Ojo6uro6uvr6+zu7uzs6+vq6uvr7O3t7/Dw8fHw7+3t7u7u7e7t7u/t6uvrhO0D7u3shOuF6kHp6Obm5efm5ePh4uHg39/g397d3Nzb2tjX19fY2NjX1tXV1NLT0tLRz83MysvJy8rJxsbFx8jHyMXGx8fHxsbFw4fChcAKwcHBwMDAv8C/voS/B76+vby8vL2FvIK9hL8Fvr+/wMCJwTPAv7/AwMHBwsLDxMXFxMTGxMXFxcTFx8fJyMnKzMzLzc3MzMvLy8zOz9DPz9HR0dLR0dJJzM3Oz8/Oz9DR0dPV1dPX2drd3t/g4eHi5OPi4+Tl5eXm5uTk4+Pi4uPj5Obm5+np6unp5+bl5+fn5ufm5+jm5OXl5+fo5+jm5YTkEePj4uLj4eDf397f397c29zbhdo+2NfW1tbV09LS0tPT09LR0dHQzs/Pzs3LycjGx8XHxsXDwsHCw8LDwMHDw8TDwsHAvr+/vr++vr28vby9vb2HvIS7BLq6ubmKuAq5uru7urq6u7u7iLw0u7q6ubq6u7y8vL6+v7++vr++v7+/vr/AwcLBwsPExcXGxcXFxMTExcfIycnIysrLzMvMzCbLzMzNzczOzs/Q0dPT0tXY2Nvc3t7f3+Di4eDh4uPj4+Tk4uHg4ITfDODi4+Tm5ufn5uXk5ITlCObk5ebk4uPjhOUD5uXjhOJO4eDg3+De3dzc293d3NrZ2tnZ2NjZ2NbW1dXU09LR0dLS09PS0dHQz87Pzs7NysnIxsfFx8bEwsHAwsPCw8DBwsPDwsLBwL6/vr6/vr69hLyCvYS8D7u8vLq7u7u6urm5t7i3uIS3g7iEuge5ubq6uru7hLoxu7q6ubi4ubm6uru7vLy+vby8vby9vb28vb+/wcDAwsPDw8TEw8PCwsLExsbIx8fJyYTKAcv/gP+AgoACAgEAhNRI19fV1NTV1dfa2tvd3uDh5OPk5OTj5OPl5ufo6ers6ujn6Ofo6urr6+3t6+3t6uvr6+zs7e7u7vDv7+/w7+/u7u/u7ezs7OvrhOk+6Obl5ubk5OPi4uLf3+De3t/e3d3c29nZ2tjU09TV1NTS0tPU0tDS0tLR0NDPz87NzczKysnHyMnJyMfGxcaExA7CwsLBwsPCwsLBwMC/wYTAhL8Kvr/AwL++vr6/v4i+hMAnwcHBw8PCwsPEw8PEw8HBwcLDw8TDw8TExcXGxcXIx8nIx8fIyMnKhswVy8zMzc3Pz87Oz8/PztDR0dLS0tHSO87Ozs/Q0M/Nzs7O0NPT1NbX2Nrd293d3dzd3N7f3+Hi4+Xj4N/g3+Hi4+Tk5+bl5ubj4+Tk5eXm5+johOlP6unp6Ojp6Obm5eXk4+Li4uHg397e3t3c3Nvb29jY2dfX2djX19bV09PU0s/Pz9DQ0M7OztDOzM7Ozs3NzMzMysnJyMbGxcPDxcTDwsLBwoTAEb6+vr2+v76+vr28vLy9vLy8hLsJurq6u7u7urm5irqEu4O8hL2Fvh29vLy7vb29vr29vr6/v8C/v8LBwsLBwcLCw8TGxoTFFcTFxcbGyMnHx8jJyMjKy8zNzczMzTvNzczNz8/OzMzNzc/R0dPV1dfY29rb29va29rc3d3f4ODi4N3c3dze3+Dh4uTj4uTk4eLi4uTj5Obm5oTnEujn5+bm5+fl5OTj4uHg4N/f3oTcIdra2djY2NbW19XW19bW1dXU0tLT0c7Ozs/Ozs3Nzc/NzIXNE8zMzMrJysjGxsXDw8XEw8LBwcGEwBe+vr69vr++vb29vLu7vLy7u7u6u7q6uYS6Arm4i7kku7u6u7y7u729vLu9vb28vby7u7q7vLy9vLy8vb6+vr2+wMDBhMAFwcHDxMSEwxXCw8PExMbHxcXHx8bGyMrKy8zLysz/gP+AgoACAgEAC9PU1NXV2NnY1tbYhNmA293e3+Df4N/g4N/g4uTl4+Lh4eLl5ufm5+fn6Onp6ejp6Ojp6urq6+vs6uzr7Ovs6+vq7Ovq6Onp6Obo5+fm5eTl4+Lj5ePi4eHg4N/d3+Df3t7c29nZ2NfY2NfV1NXU0tHS0tHRz87NzM3My8vLzMvLzMrIyMfIx8bGxsTFxMMNxMPCwsPDwsPCw8LDwoXBC8DAvr6+vb6/vr69hLwPvb29vr/AwcHBwMHBwcLDhcQFw8XFxcSExQXGxcbGxoTHAsbHhcgNx8jJycnKysvLysrHx4TIEsnLzMzLzM3Oz8/N0NLS09LT0xTOzs7Pz9LS0tDQ0dLT0tLU1tfY2YTYRdnY2dvd3tzb2trb3t/f3+Dh4OLi4+Pi4uHi4+Tk5OXl5eTl5OXl5uXk5OXk4+Li4uHf4eDg397d3tzb293c29ra2dnX1oTYDtfV1NPT0tHS0tHQ0NDPhs0gysnIx8jIxsfHyMjHx8XExMLDw8LBwb/Av76/vr2+vr+GvoK9hLwDu7u6hLkRurm5uLi3uLi4ubm6ury8vL2EvBu9vr6/vr+/vr/AwL/Av7+/wL/AwcDAwcHBwMGFwh3BwsPDw8TExMXEw8DAwcHBwMHDxMXExMbHyMnHy4XNAc4LzM3Nzs7Q0dDPztCE0U7S1NXW19bX1tfX1tfZ29zZ2djX2dvc3dze3t7f4ODg3+Df4OHi4uLj4+Pi4+Li4uPi4uLj4uHg4eDf3d/f3t3c29za2dnb2djY2NfX1dWE1gbV09LR0tGE0ITPDczMzM3NzMnIx8bHx8aGxxTFxMTCw8PBwcG/v7++v769vb6+vYW+Ar28hLuCuoW4Brm4t7e3toS3B7i5ubu7u7yEuwO8vr2EvgG9hL4Bv4W+Bb+/vr/AhL+HwCHBwcHCwsPDwsG+vb6+vr2+wcLCwcLDxMXGxcjLy8zLzM3/gP+AgoACAgEAN9XW1tfZ2NnZ2NfW2NjZ2NjZ29vd3Nzb29vc3d7f3uDh4ePh4eHi5OPl5ubm5OPl5ubl5+jo6euF6jzo6Onp5+jn5ubn5+Xm5+fl5uPj4+Hj5OLh4uHi4N/e3N3c3dzc3Nva29rZ2NfV1dTU0tLR0tLRz87My8uGygzLysrJycfHxcTExMWFxA/DwsHCw8LDxMTFxMTDw8KEwQPAv76Fvwq+vby9vry8uru/hcBHwcHCwsPDwsPCwsTExMXEw8LDxcXGxsjJycjHyMbHycnIycnJyMfIyMfHx8nKycbEw8bHx8jJyMfIyMbIycrMzs/Q0dPT1NQ4z9DQ0dLR0tLR0dDR0tLS0dLU1NbV1dTT1NXV19fW2Nna29na2tvd3d7f39/d3d7g4N7g4eHi5eSE4wbh4eLh4OGF4C/e3+Dg3t/d3N3b3d3b2tvb29nY19bW1dfV1tbV1NXU09LR0NDP0M7NzM3NzMrJx4XGIsXFxsbFxcXEw8LAv7/AwL+/wL+/v769vb69v7+/wMC/vr6FvBK7urm6urm5urm4t7i4uLe2t7qFux68vLy9vr29vr29v7+/wL++vb2/v7/AwsPDwsLCwcKGwyPCwcLBwcDBwsLBv728v7+/wMHAv8C/vsDBwsXHyMnKzM3OzjfNzs7P0dDR0dDPz9DR0dDQ0dLS1NPT0tHS0tPV1dTW19fZ19jY2dvb3N3d3dvb3N7e3N7f3+DjhOE74N/f4N/e39/e3t/e3d7e3tzd29vb2dvb2djZ2dnX1dXU1NPV09TU09LU09HR0M/Pzs7NzMvMzMvJyMeGxQrExcbExcTDwsLAhL8Zvr+/v76+vby8vby9vr6/vr69vLu6uru6uYe4Cre3tre3t7a1trmGuh+7u7y9vLy9vLy+vr6/vr28vL6+vr/BwsLBwMC/wMHChMEBwIS/Hr6+wMC/vbq5vLy8vb29vL28ur2+v8LExcbHysvMzP+A/4CCgAICAQBszc7R0tLT09PS0tPU1dbW19fX2NjX2Nja2tvb2tzb297f39/d3t/g39zc4OHi4eLj5eXm5eXi4uLg4eLi4uHi4uHh4+Hh4uHh4N/e39/d39/f4eHg4N7d3dzc29zb3Nra2dnZ19bW1tTU0tHQhdEIz87Pzs3MzMyEyxXKy8rJx8fHxsfGxcPDw8TDwcC/wcGEwIPBhMAMwcLBwsHAwcHBwL+/h8AVv8DBwcDBwsLDwsPCw8PDxMTDxMXGhMcBxoXHh8gZx8jHx8bGxcPEw8PExsfIycvMysnIyMfHxoTFDcTFxsfJyszNzc7NzM05xcfKy8zMzc3Ly83Nz8/P0NHQ0dHQ0dHT09TU09TU1NbX2NjW19fZ2NbW2drb2tzc397f3t7c29vahNsv2tvb29rc2trb29ra2djZ2dfZ2dnb29rZ2NfW1tbV1tXW1NXU09PS0dHR0M/OzMuFzAjKycnJyMfHx4TGC8XGxcTCw8LBwsLBhb8+vbu7vby7vLu8vby9vLu6u7y9u7y8u7y7u7u6uru7uru6u7u6u7y8u7y9vb69vr2+vr6/v76/wMHCwsHBwcKEwYfChMEmwMC/vb69vb6/wMHCxMXDwsDBwL++vb29vLy9v7/BwsTExcbFxMVewsTHyMnKysrJyMrKzM3Oz87Oz8/Oz8/R0dLS0dLS0tTW1tbV1dXX19TU19jZ2drb3dzd3Nza2dnY2dnZ2tja2trZ29nZ2tnZ2NfW2NfV19jY2dnY19bV1NTU09TU1YTTJtLR0NDQz87My8rLy8vKysjIyMfHxsbFxcXExcTFxMPBwsHBwsHAhb4IvLq6u7u6u7qEuwi6urm6uru6u4a6Hbm5urq5urm6ubm6u7q6u7y7vLy8u729vb6+vb6+hsABwYTAIcHBwMDBwcHAwL+/vr69u7y7u7y9vr/AwcLAv76+vby7uYW6C7y8vr/BwsLDwsHC/4D/gIKAAgIBAATNzc7Qh9Eq0tLU09PU1NTV1tfX2NfW19jY2drb29zc3N3d3t3d3dzc3N7f393d3NvbhN0S29vc3NzZ2tvb297d3N3b3dzchNsg2dnb2tnZ2trb2tva29vZ2tnY2NXU09HS0dDPz87Pzs6EzzDNzczNzczLy8vMzM3My8vJx8fGxsXExMXFw8PExMPDwsHAwcHCwsLDwsPCw8LCwsGIwITBCMLCw8PDxMTFhMaCx4XIA8nIyIXJAcqHyRzGw8PEw8XFxMXFxsbHxsfKysvMzc3Nz8/Ny8zLisoCy8yEywLMzQTFxsbJh8oCy8yFzQPOz8+E0AvP0NHR0tPU1NTV1YbWINXU1dfX19bV1NTU1dbW1dTU1dXV0tPU1NTX1tbW1dbWhdVE1NTV1dPT1NTV1NbV1dXT1NTT0tDOzs3NzMvKysnKycnKycrJyMjHx8jHxsbGx8fIyMfGxcPCwsLBwMDBwb+/wMC/v72EvAe9vr2+vb6+hL0BvIa7Ary7hLwOvb2+vr6/v7/AwMHAwcGEwoTDBMTDw8OGxB/Dw8PAvr2+vb+/vr++v7/Av8HDw8TFxcbGyMjGxMTDh8IFwcHCw8SFwwHFDcLDw8bIx8jHyMjIycqGyw3Nzc7Oz87Nzs/Q0NHShNOG1CvT09PV1dbU1NPS09TV1NTS09TU1NHS09PT1tXV1NTV1NTT09TU09PU09LShNMc1NPU09LT0tHRz87Ny8zLysnIyMnIyMnIycjGx4TGIcTFxcbGx8bFxcTDwsHBwL+/wMC/v7/Avr69vLu7u7y9vIW9BLy8vLuJugW7u7u8u4S9gr6Ev4LAhMEtwsLCwcPCw8LDw8LDwsLCwcG/vLu8u729vL28vr2/vr/BwcLDw8TExsXDwcLBhcCEvwnAwMHBwMDAwcL/gP+AgoACAgEAEc3Nzs7Pz8/Qz8/Ozs7P0NHQhNET0tTW1dbX2NjZ2tra3Nvc29za2ojZL9ra2tnY2NnY2NfY19fX2NfX2dnZ2tnX2NnZ2djY2dfY2NjX19bX1tbW1dTV1NPUhNEM0NDQz8/Oz9DO0NDQhs8Zzs3NzMzKzMzMy8rKycnIycjHyMfGxsbExYTGBMXExMSFxRfExMXEw8LCw8TDwsLDw8LAwcPDwsTExIXFF8bGx8fHyMjIycnIyMjHxsfIx8nJysnIh8kRyMjJyMjIycjKy8zMzc3Nzs6Ez4PQhtEJ0M/Pzs7NzMzMhM0IxcXGxsjHyMiFxwXIycrJyoTLC83Pzs/Q0dHS0tLThdQD09LRidIF09LR0dKE0TTQ0dDR0dDS0tLU0tHR09PT0tPT0tPT09LS0dHQ0dHQz8/Pzs/NzM3My8vLysnJysvKy8vLhsoGycjIyMfFhMcPxsbFxMTEw8PDwsLCwb/AhMEDwL+/icAUv769vb6/vr69vr29u7y+vr2/v7+FwAXBwcHCwoXDEMLCwsHBwsLCw8PExMPDw8SEwxPCwcLBwcHCwsPExcXGxsbHyMjIhckLysrKycrKycjIx8aIxQjDw8PExsXFxoXFFMbHx8fIycnJyszNzc7Oz8/Q0dHRhdIN0dHQ0dDQ0NHQ0NHR0YXQhs8k0NDP0NHR0tHQ0NHS0tHS0tHS0tHR0M/Qz8/Pzs3Ozs3Oy8vLhMoJycnIycrJysrKhskiyMfGxsbExsfGxsXFxMPDxMPDwsLBwcG/wMDBwcHAv76/wIe/FL69vLy9vby9vL28vLq7vL29vr6+hL8YvsDAwMHBwcLBwsLBwcHAwMHBwMLCw8LBhcISwcHAv8C/v7/AwMHCw8PExMTFhMYXx8jHx8jIyMfIx8fGxsTEw8PCwsPDw8L/gP+AgoACAgEACNLR0tLS09TThNQe09LT0tHS0tLR0dHT0tLS09TU1dbV1tbV1dTU09PTh9IT0dHS09TU09LR0tPT09LS09PS0ofTBNLQ0NCEzwXQ0dDPz4bQBdHR0dLRhNIB04TRB9LR0NDR0NCFzx7Ozs7NzMzMy8rKy8rKysnJysnJysrJyMnJyMfIyciFx4TII8fGxsfGx8fGxsfHxsfGx8fGxcbFxcfGx8jHyMnKy8rKycnJhMqCy4TMCsrMzc3MzMvLy82FzAnNzc/OzMzOzcyEzoPPhM4Rz9DQ0NHR0dDR0tHS09LT0tIMy8vMzMvNzs3Nzs7NhMwey8vMzMvLy83My8zNzs3Oz87Pz8/Ozs3Mzc3My8zMhssQzM3NzcvMzMzNzczMzc3LzIXNDM7NzcrKysnJycrKy4TKhsuCzIbNBs7NzM3NzYbMhcqEyRHIx8fGxcTGxcbFxMTFxMTFxYTEBMPCw8OGwhvDw8LCwsHBwsHCwcHBwsHBwsHCwcG/wMDAwcGEwgjDxMXExMPDw4TEgsWExgrExsfHxsbFxcXHhcYfx8fJyMbGyMfGx8jIx8jIyMfIx8fJysrJysvKysrLy4XMAcsGysnKysrLhswLy8rLy8nKysrJycmEygPLzMuEzQrOzc3My8rLy8rJhcoKycnJysvMy8rKyoTLBcrLy8rKhcsDzMzLhMgFx8jIyMmEyITJEMrKy8vMy8vMzMzNzMvLzMyEy4LKhckIyMjIx8fGxsWExBHFxMPDxMPDxMTDwsPCwsHBwoTBAcCFwYTAAb+IwDi/wMC/vr+/v8DAwMHAwMHDw8LCwsHBwsPCwsTExcTFxMLExcbExMPDw8XExcXFxMXFxsbExMbFxIvGEcfIyMfIycnIycnJysvLy8rK/4D/gIKAAgIBAITQB9HR0dLS0tGF0gjR0dHS0tHR0Y3SDNHR0tLS0dHQz9DQ0ITOg8+E0AvPz9DQ0NHR0dDPz4XQg8+E0AbR0dHQ0NCE0QvQ0dHR0NDQ0dHR0IjRhNCGz4fOg82HzgHNhMyCzYvMgsuGyoTJAcqEy4TMF8vMy8zMzMvKy8zMy8rKyszJx8nMzM3NhMwKzc7Ozs/Pzs7OzYTOC8/Ozc3Ozs7Nzs3Nhc4Izc3Nzs7NzcyEzQnMzc3Oz8/P0M8IycnKysrLy8yEy4PMicuJzAHLhMwHy8zMzMvLyoTJBcjHx8fIhMkGysnIycnJhMoCyciEyQnKysnIyMnJycqEywnKysvMzMzLy8yJy4TMA8vMzITLg8qKyYjICMnIx8bGxsfIhscWxsbGx8bGxsXExMXFxcTExMPExMXFxYnGIcfGxcXFxsbFxcTFxcPCw8bHyMfGx8bHx8jIyMnJyMjIx4XIhMeCyITHhciHxwPGx8eExgfHyMjIycnJEMfHyMjJycnKysnKysrLysqEyQbKycnJysuKyoLJhMoDycnIhMcKxsXGxsbHyMfHyIXHBMjJyMiGxwnIyMfGx8fHyMiEyQzIyMnKysrJycrKycmEygXJysrKy4XKhMmHyATHyMjIi8cHxsXExcXGxorFg8SGw4XCRcPEw8TExcTFxMTExcXFxMPDxMTEw8LDxMLAwcTFxsXFxcTFxcbGxsfHxsbGxcbGxsfHxsXFxcbGxcbFxcbGx8bGxcXFxofFBsTFxcXGxoTH/4D/gIKAAgIBAAPOz8+G0IbPitABz4TQhNEL0NHQ0NDR0NDQz8+K0IbPBM7Oz8+F0IXRitAG0dHQ0NDRjtAF0dHS0dGL0IPRhtCFz4LQhM+FzoTNhc6GzYLOiM2IzI7NhM6Cz4fOj82FzojNAszNicwHzc3Nzs7OzYTOgsiRyYbKgsmOyovJgsqGyRLIyMjJysrJycnKysvLy8rKycmUygHJhMqFywPMy8uKyoPLhMqGyYLKhcmFyIXHhciFx4LIiceIxoTHg8aGx4TIgsmIyIjHgsiEx4TIiMeHxgHFhMaIx4PIAcaMx4LIhMeFyIPHisgFycnIyMiLxwHIh8cDxsfHhsiFyQLIx4nIAcmEyAbJyMjJycmEyIXJBcrKysnJisiDyYTIAceIyIXHi8YBx5DGisWDxoXFBMbFxcWExoPHicaExZHGhsWLxIXFhcb/gP+AgoA=");var Zs=zi(Wd());var Xd=zi($i(),1),Ei={thetaMin:-1.02,thetaMax:1.02,yMin:-.68,yMax:.68};function tc(i={}){let e=(t,n)=>Number.isFinite(Number(t))?Number(t):n;return{yaw:((e(i.yaw,.28)+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,pitch:Os.clamp(e(i.pitch,.28),-.65,1.15),distance:Os.clamp(e(i.distance,4.8),3.7,8)}}function C_(){let i=[],e=[],t=[],n=[];for(let o=0;o<=12;o++){let c=o/12,l=Ei.yMin+c*(Ei.yMax-Ei.yMin),h=.97+(l+.9)/1.83*.03+.003;for(let f=0;f<=64;f++){let d=f/64,u=Ei.thetaMin+d*(Ei.thetaMax-Ei.thetaMin);if(i.push(Math.sin(u)*h,l,Math.cos(u)*h),t.push(Math.sin(u),-.03/1.83,Math.cos(u)),e.push(d,c),o<12&&f<64){let m=o*65+f;n.push(m,m+1,m+64+1,m+1,m+64+2,m+64+1)}}}let a=new st;return a.setAttribute("position",new ke(i,3)),a.setAttribute("normal",new ke(t,3)),a.setAttribute("uv",new ke(e,2)),a.setIndex(n),a}function qd(){let i=new Ct;i.name="procedural-enamel-cup-v1";let e=new ft({color:"#f5f1e6",roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,vertexColors:!0}),t=new ft({color:"#163d51",roughness:.26,metalness:0,ior:1.5,clearcoat:.54,clearcoatRoughness:.17}),n=Xd.default.data.cup.profile.map(([m,_])=>new de(m,_)),s=new Fe(new ki(n,96),e);s.name="hollow-body";let r=[];for(let m=0;m<s.geometry.attributes.position.count;m++){let _=m%n.length,g=s.geometry.attributes.position.getY(m),p=_>=9?.83+.14*(g+.84)/1.82:1;r.push(p,p,p)}s.geometry.setAttribute("color",new ke(r,3)),i.add(s);let a=new Fe(new Tn(.963,.041,16,128),t);a.rotation.x=Math.PI/2,a.position.y=.98,a.name="rolled-blue-rim",i.add(a);let o=new Fe(new Tn(.905,.02,12,96),e);o.rotation.x=Math.PI/2,o.position.y=-.995,o.name="base-rim",i.add(o);let c=new jn([[.974,.62,0],[1.14,.68,0],[1.39,.64,0],[1.54,.45,0],[1.57,.2,0],[1.47,-.08,0],[1.26,-.3,0],[.972,-.46,0]].map(m=>new N(...m))),l=new Vi(c,64,1,16,!1),h=l.attributes.position;for(let m=0;m<=64;m++){let _=m/64,g=c.getPointAt(_),p=c.getTangentAt(_),T=new N(-p.y,p.x,0),R=Math.exp(-Math.min(_,1-_)*14),y=.13+.042*R,M=.047-.014*R,w=E=>Math.sign(E)*Math.pow(Math.abs(E),.68);for(let E=0;E<=16;E++){let x=E*Math.PI/8,S=g.clone().addScaledVector(T,-w(Math.cos(x))*M);S.z+=w(Math.sin(x))*y,h.setXYZ(m*17+E,S.x,S.y,S.z)}}l.computeVertexNormals();let f=new Fe(l,e);f.name="handle-unprinted",i.add(f);for(let m of[.62,-.46]){let _=new Fe(new wr(1,16,12),e);_.position.set(.976,m,0),_.scale.set(.036,.105,.185),_.name="enamel-handle-joint",i.add(_)}let d=new ft({color:"#ffffff",transparent:!0,roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Dt}),u=new Fe(C_(),d);return u.name="front-print-region",u.renderOrder=1,i.add(u),i.traverse(m=>{m.isMesh&&m.material===e&&!m.geometry.attributes.color&&m.geometry.setAttribute("color",new ke(new Float32Array(m.geometry.attributes.position.count*3).fill(1),3))}),{group:i,body:s,handle:f,print:u,glaze:e,rim:t}}var qs=zi($i(),1);var Zd=zi($i(),1),Ut=(i,e,t)=>new N(i,e,t),sc=i=>i*i;function nc(i,e=1,t=48,n=t){let s=[],r=[],a=[];for(let c=0;c<=n;c++)for(let l=0;l<=t;l++){let h=i(l/t*2-1,c/n*2-1);if(s.push(h.x,h.y,h.z),r.push(e===1?l/t:1-l/t,c/n),l<t&&c<n){let f=c*(t+1)+l,d=f+1,u=f+t+1,m=u+1;a.push(...e===1?[f,d,u,d,m,u]:[f,u,d,d,u,m])}}let o=new st;return o.setAttribute("position",new ke(s,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function Ws(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<40;s++){let r=(s/40*2-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function un(i,e,t,n=!1){let s=new jn(i,!1,"centripetal");return s.closed=n,new Fe(new Vi(s,Math.max(24,i.length*2),e,6,n),t)}function Yl(i,e,t,n){let s=new jn(i.map(h=>Ut(...h))),r=64,a=[],o=[],c=[];for(let h=0;h<=r;h++){let f=h/r,d=s.getPoint(f),u=s.getTangent(f),m=Ut(-u.y,u.x,0).normalize();for(let[_,g]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let p=d.clone().addScaledVector(m,_*e/2);p.z+=g*t/2,a.push(p.x,p.y,p.z),o.push((_+1)/2,f)}if(h<r)for(let _=0;_<4;_++){let g=h*4+_,p=h*4+(_+1)%4;c.push(g,p,g+4,p,p+4,g+4)}}c.push(0,2,1,0,3,2,r*4,r*4+1,r*4+2,r*4,r*4+2,r*4+3);let l=new st;return l.setAttribute("position",new ke(a,3)),l.setAttribute("uv",new ke(o,2)),l.setIndex(c),l.computeVertexNormals(),new Fe(l,n)}function Yd(i,e,t,n,s){let r=Math.pow(Math.max(0,(1-i*i)*(1-e*e)),.43),a=i*t/2*(1-.12*(1-e*e)*Math.pow(Math.abs(i),6)),o=e*n/2*(1-.1*(1-i*i)*Math.pow(Math.abs(e),6)),c=(Math.cos(i*21+e*3)*Math.exp(-sc((Math.abs(e)-.83)*12))+Math.cos(e*19-i*2)*Math.exp(-sc((Math.abs(i)-.83)*12)))*.01*r;return Ut(a,o,.012+s/2*r+c)}function Zl(i,e,t){let n,s;if(e<=.62)n=e*1.6,s=.04*Math.sin(i*4+e*2)+.022*Math.cos(e*8-i*3);else if(e<.8){let a=(e-.62)/.18*Math.PI;n=.992+.15*Math.sin(a),s=.15*(1-Math.cos(a))}else n=.992-(e-.8)*2.45,s=.3+.035*Math.sin(i*5);let r=Math.pow(Math.max(0,(Math.abs(i)-.72)/.28),2);return s-=r*.2+Math.pow(Math.max(0,(-e-.45)/.55),2)*.38,n+=.025*Math.sin(i*5)*Math.pow(Math.abs(e),3),s+=t*.045,Ut(i*1.37*(1-.025*Math.cos(e*4)),n,s)}function ic(i,e,t,n,s,r,a=!1){let o=n/2-(a?.055:.6)*Math.pow(Math.abs(i),3),c=-n/2+.08*Math.pow(Math.abs(i),8),l=c+(e+1)/2*(o-c),h=i*t/2*(1-.045*Math.pow(Math.abs(e),8)),f=Math.min(.07,s*.22)*(Math.pow(Math.abs(i),10)+Math.pow(Math.abs(e),10));return Ut(h,l,r*(s/2-f+.055*(1-i*i)*(1-e*e)))}function Xs(i,e,t){let n=1.02+.075*e,s=i*n*(1-.035*Math.pow(Math.abs(e),8)),r=e*1.09-.085*(1-i*i)*Math.pow((e+1)/2,8)+.09*Math.pow(Math.abs(i),8)*Math.pow((1-e)/2,8),a=(.026*Math.sin(i*13+e*2)+.012*Math.sin(i*25-e*4))*(1-i*i)*(1-e*e),o=-.035*(Math.exp(-sc((i-.56)*9))+Math.exp(-sc((i+.56)*9)))*Math.pow((e+1)/2,2);return Ut(s,r,t*(.29-.105*Math.pow(Math.abs(i),6)+.045*(1-e*e)+a+o))}function Kd(i){let e=Zd.default.get(i),[t,n,s]=e.size,r=new Ct,a=[],o=[];r.name="sewn-"+i+"-v2";let c=new ft({color:"#f5f1e6",roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:"#fff",side:Gt,shadowSide:Dt}),l=c.clone();l.color.multiplyScalar(.88);let h=M=>{let w=c.clone();return w.color.multiplyScalar(M),o.push({material:w,factor:M}),w},f=e.family==="bags",d=f?h(.62):l,u=f?h(.86):l,m=i==="backpack"?l:h(.78),_=f?new Qn({color:"#827e73",metalness:.65,roughness:.48}):l,g=(M,w)=>(w&&(M.name=w),r.add(M),M);function p(M,w,E,x,S=1){let C=g(new Fe(nc(w,S,64),c.clone()),i+"-"+M);return C.userData.fabricFace=M,C.userData.fabricSize=[E,x],a.push(C),C}function T(M,w,E=!1,x=c){for(let S of E?[0,1,3]:[0,1,2,3]){let C=(A,P)=>{let L=S===0?M(A,-1):S===1?M(1,A):S===2?M(-A,1):M(-1,-A),z=S===0?w(A,-1):S===1?w(1,A):S===2?w(-A,1):w(-1,-A);return L.lerp(z,(P+1)/2)};g(new Fe(nc(C,1,48,8),x),E?"tote-gusset-"+S:"sewn-gusset-"+S)}}function R(M,w){g(un(M,.014,d),w+"-tape"),g(un(M.map(S=>S.clone().add(Ut(0,0,.012))),.0055,_),w+"-teeth");let E=M[Math.floor(M.length*.83)],x=g(new Fe(new Tn(.028,.007,5,12),_),w+"-pull");x.scale.y=2.2,x.position.copy(E).add(Ut(0,-.045,.028))}if(i==="cushion"||i==="pillow"){let M=(E,x)=>Yd(E,x,t,n,s),w=(E,x)=>{let S=M(E,x);return S.z=-S.z,S};p("front",M,t,n),p("back",w,t,n,-1),T(M,w),g(un(Ws((E,x)=>{let S=M(E,x);return S.z=0,S}),i==="cushion"?.011:.008,l,!0),"stitched-perimeter");for(let E of[-1,1])g(un(Ws((x,S)=>{let C=Yd(x,S,t,n,s);return C.z*=E,C},.985),.0035,m,!0),"fine-seam");i==="pillow"?(r.rotation.x=-.82,r.rotation.z=-.06):r.rotation.z=-.065}if(i==="duvet"){let M=(E,x)=>Zl(E,x,1),w=(E,x)=>Zl(E,x,-1);p("front",M,t,n),p("back",w,t,n,-1),T(M,w),g(un(Ws((E,x)=>Zl(E,x,0)),.008,l,!0),"bound-duvet-edge"),g(un(Ws(M,.985),.003,m,!0),"duvet-hem-stitch"),r.rotation.x=-1.04,r.rotation.z=-.045}if(i==="backpack"){let M=(C,A)=>ic(C,A,t,n,s,1),w=(C,A)=>ic(C,A,t,n,s,-1);p("front",M,t,n),p("back",w,t,n,-1),T(M,w);for(let C of[M,w])g(un(Ws(C),.009,l,!0),"backpack-panel-binding");let E=(C,A)=>ic(C,A,1.44,.88,.22,1,!0).add(Ut(0,-.57,.49)),x=(C,A)=>ic(C,A,1.44,.88,.22,-1,!0).add(Ut(0,-.57,.49));p("pocket",E,1.44,.88),T(E,x),g(un(Ws(E),.008,l,!0),"pocket-binding"),R(Array.from({length:41},(C,A)=>E(A/20-1,.86).add(Ut(0,0,.008))),"pocket-zip");let S=[];for(let C=0;C<=20;C++){let A=M(-1,C/20*1.25-.25);A.z=.08,S.push(A)}for(let C=1;C<=40;C++){let A=M(C/20-1,1);A.z=.08,S.push(A)}for(let C=1;C<=20;C++){let A=M(1,1-C/20*1.25);A.z=.08,S.push(A)}R(S,"main-zip");for(let C of[-1,1])g(Yl([[C*.42,.94,-.37],[C*.63,.58,-.78],[C*.66,-.27,-.85],[C*.57,-.84,-.54],[C*.58,-1.13,-.3]],.25,.07,u),"padded-shoulder-strap"),g(new Fe(new yi(.27,.12,.055),_),"strap-adjuster").position.set(C*.59,-.81,-.62),g(new Fe(nc((P,L)=>Ut(C*(.87+.085*(1-P*P)*(1-L*L)),-.72+L*.32,P*.27),C,24),h(.93)),"side-slip-pocket"),g(un(Array.from({length:17},(P,L)=>Ut(C*.88,-.4,L/16*.54-.27)),.012,l),"side-pocket-opening");g(Yl([[-.25,1.15,-.1],[-.2,1.47,-.11],[.2,1.47,-.11],[.25,1.15,-.1]],.095,.035,u),"carry-loop")}if(i==="tote"){let M=(E,x)=>Xs(E,x,1),w=(E,x)=>Xs(E,x,-1);p("front",M,t,n),p("back",w,t,n,-1),T(M,w,!0);for(let E of[1,-1]){g(new Fe(nc((S,C)=>{let A=Xs(S*.995,C*.995,E);return A.z-=E*.012,A},E),d),"tote-interior"),g(un(Array.from({length:49},(S,C)=>Xs(C/24-1,1,E)),.017,l),"open-mouth-hem"),g(un(Array.from({length:49},(S,C)=>Xs(C/24-1,.94,E).add(Ut(0,0,E*.006))),.0035,m),"mouth-stitch");let x=E*.3;g(Yl([[-.57,.75,x],[-.59,1.2,x+E*.08],[-.45,1.87,x+E*.09],[.03,2.03,x],[.48,1.83,x],[.59,1.22,x],[.57,.75,x]],.115,.027,u),"canvas-handle");for(let S of[-1,1]){let C=S*.57;g(un([Ut(C-.045,.78,x+E*.02),Ut(C+.045,.96,x+E*.02),Ut(C-.045,.96,x+E*.02),Ut(C+.045,.78,x+E*.02)],.003,m),"handle-cross-stitch")}}for(let E of[-1,1])g(un(Array.from({length:41},(x,S)=>Xs(E,S/20-1,1)),.006,l),"boxed-corner-seam")}let y=g(new Fe(new st,c));return y.visible=!1,{type:i,group:r,body:a[0],print:y,glaze:c,surfaces:a,trim:l,tints:o,floor:new Ft().setFromObject(r).min.y}}function z_(i){let e=qs.default.get(i),t=96,n=24,s=[],r=[],a=[];for(let c=0;c<=n;c++){let l=c/n*e.printRadius,h=qs.default.height(i,l)+.004;for(let f=0;f<=t;f++){let d=f/t*Math.PI*2,u=l*Math.cos(d),m=l*Math.sin(d);if(s.push(u,h,m),r.push(.5+u/(2*e.printRadius),.5-m/(2*e.printRadius)),c<n&&f<t){let _=c*(t+1)+f;a.push(_,_+1,_+t+1,_+1,_+t+2,_+t+1)}}}let o=new st;return o.setAttribute("position",new ke(s,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function I_(i,e){let t=e.profile,n={plate:[[4,8],[10,14]],bowl:[[4,9],[11,17]],basin:[[3,7],[8,14]]}[i],s=[],r=[],a=l=>(t[l+1][1]-t[l][1])/(t[l+1][0]-t[l][0]),o=(l,h,f)=>{if(l===h)return a(l);if(l===f)return a(l-1);let d=a(l-1),u=a(l);return d*u<=0?0:2*d*u/(d+u)};for(let l=0;l<t.length-1;l++){let[h,f]=t[l],[d,u]=t[l+1],m=n.find(([g,p])=>l>=g&&l<p),_=m?Math.min(7,Math.ceil(Math.hypot(d-h,u-f)/.072)):1;for(let g=0;g<_;g++){let p=g/_,T=p*p*(3-2*p),R=m?f+(u-f)*T+(d-h)*(p*(1-p)**2*o(l,...m)-p*p*(1-p)*o(l+1,...m)):f;s.push(new de(h+(d-h)*p,R)),r.push(l+p)}}s.push(new de(...t.at(-1))),r.push(t.length-1);let c=new ki(s,128);return c.userData.designRows=r,c}function Jd(i="cup"){if(qs.default.textile(i))return Kd(i);if(i==="cup")return{...qd(),type:i,floor:-1.035};if(!qs.default.data[i])throw Error("\u6A21\u578B\u5C1A\u672A\u63A5\u5165");let e=qs.default.get(i),t=new Ct;t.name="procedural-enamel-"+i+"-v1";let n=new ft({color:"#f5f1e6",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12}),s=new ft({color:e.rim,roughness:.265,metalness:0,ior:1.48,clearcoat:.55,clearcoatRoughness:.17}),r=new Fe(I_(i,e),n);r.name=i+"-hollow-body",t.add(r);let a=new Fe(new Tn(e.rimRadius,e.rimTube,16,128),s);a.rotation.x=Math.PI/2,a.position.y=e.rimY,a.name=i+"-rolled-rim",t.add(a);let o=new Fe(new Tn(e.foot,.02,12,96),n);o.rotation.x=Math.PI/2,o.position.y=e.floor+.02,t.add(o);let c=new Fe(z_(i),new ft({color:"#fff",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Dt}));return c.name=i+"-interior-print",c.renderOrder=1,t.add(c),{type:i,group:t,body:r,print:c,glaze:n,rim:s,floor:e.floor}}var yt=zi($i());var Cn=zi($i(),1),P_=["disk","back","wall","belt","ring","wrap","faceFill"],$d=2*Math.PI,jd=i=>Math.atan2(Math.sin(i),Math.cos(i));function L_(){let i=8713;function e(c){let l=Float32Array.from({length:c*c},()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296));return(h,f)=>{let d=h*c,u=f*c,m=Math.floor(d),_=Math.floor(u),g=y=>y*y*(3-2*y),p=g(d-m),T=g(u-_),R=(y,M)=>l[(_+M)%c*c+(m+y)%c];return(1-T)*((1-p)*R(0,0)+p*R(1,0))+T*((1-p)*R(0,1)+p*R(1,1))}}let t=e(6),n=e(19),s=e(43),r=128,a=new Uint8Array(r*r*4);for(let c=0;c<r;c++)for(let l=0;l<r;l++){let h=l/r,f=c/r,d=(c*r+l)*4,u=n(h,f),m=t(h,f);a[d]=255*(.5*m+.34*u+.16*s(h,f)),a[d+1]=255*(.6*m+.4*u),a[d+3]=255}let o=new pn(a,r,r);return o.wrapS=o.wrapT=fn,o.magFilter=et,o.minFilter=nn,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Qd(i){let{body:e,print:t,glaze:n,type:s}=i,r=n.clone();e.material=r,t.visible=!1;let a=e.geometry,o=a.parameters.points,c=o.length,l=a.userData.designRows||o.map((x,S)=>S),h=[0];for(let x=1;x<c;x++)h.push(h[x-1]+o[x].distanceTo(o[x-1]));let f=a.attributes.position.count;a.setAttribute("profileRow",new _t(Float32Array.from({length:f},(x,S)=>l[S%c]),1)),a.setAttribute("profileArc",new _t(Float32Array.from({length:f},(x,S)=>h[S%c]),1));let d=Cn.default.get(s),u=d.rimRadius-d.rimTube,m=o.map((x,S)=>{if(s==="cup"||l[S]<d.profile.length-d.inner.length)return 1;let C=a.attributes.normal,A=C.getY(S),P=C.getZ(S),L=0;for(let z=0;z<96;z++){let D=(z+.5)/96,k=z*2.39996323,V=Math.sqrt(D),$=Math.sqrt(1-D),W=A*$+P*V*Math.sin(k);if(W<=1e-4)continue;let Y=Math.max(0,d.rimY-x.y)/W,Q=Y*V*Math.cos(k),re=x.x+Y*(P*$-A*V*Math.sin(k));Math.hypot(Q,re)<u&&L++}return L/96});a.setAttribute("apertureLight",new _t(Float32Array.from({length:f},(x,S)=>m[S%c]),1));let _=L_(),g={enamelGrain:{value:_},lining:{value:new ze("#f4f0e4")},enamelInk:{value:null},inkReady:{value:0},zoneMode:{value:0},printRows:{value:new de},fillMetrics:{value:new N},fillWinding:{value:new de},fillWindow:{value:new $e},limits:{value:new $e},inkTransform:{value:new $e},wallAspect:{value:1}},p,T,R,y;function M(x){if(p=Cn.default.region(s,x.zone),Cn.default.isFill(p)){R=h[l.indexOf(p.rows[0])],y=h[l.indexOf(p.rows[1])]-R;let S=Cn.default.fillBasis(p,x),C=Cn.default.fillAspect(p,S,y);g.fillMetrics.value.set(R,1/y,C),g.fillWinding.value.set(...S),g.fillWindow.value.set(...Cn.default.fillWindow(p,x))}T=(p.yaw||0)+(p.around?x.x*Math.PI/60:0),g.zoneMode.value=P_.indexOf(p.mode),g.printRows.value.set(...p.rows),g.limits.value.set(p.low||0,p.high||1,T,p.span||p.count||1),g.wallAspect.value=p.mode==="wall"?(p.high-p.low)/(p.radius*p.span):1,Cn.default.isFill(p)?g.inkTransform.value.set(x.x/120,-x.y/120,0,1):g.inkTransform.value.set(p.around?0:x.x*3/512,-x.y*3/512,x.rotation*Math.PI/180,x.scale/100)}function w(x){if(!x||x.object!==e)return null;let S=x.face,C=Math.min(l[S.a%c],l[S.b%c],l[S.c%c]);if(C<p.rows[0]||C>=p.rows[1])return null;let{x:A,y:P,z:L}=e.worldToLocal(x.point.clone()),z=Math.hypot(A,L),D=Math.atan2(A,L);if(Cn.default.isFill(p)){let W=x.barycoord,Q=(W.x*h[S.a%c]+W.y*h[S.b%c]+W.z*h[S.c%c]-R)/y;if(p.mode==="wrap")return{angle:D,y:Q};let re=(1-Q)*.5/Math.max(z,1e-4);return{x:A*re,y:-L*re}}if(p.mode==="disk"||p.mode==="back")return z<=p.high?{x:.5+A/(2*p.high),y:.5+(p.mode==="back"?L:-L)/(2*p.high)}:null;let V=((p.mode==="ring"?z:P)-p.low)/(p.high-p.low);if(V<0||V>1)return null;let $=jd(D-T);return p.mode==="wall"&&!p.around&&Math.abs($)>p.span/2?null:{angle:D,y:V}}r.customProgramCacheKey=()=>"spun-enamel-v4-"+s,r.onBeforeCompile=x=>{Object.assign(x.uniforms,g),x.vertexShader=`attribute float profileRow,profileArc,apertureLight; varying float skyLight; varying vec2 sheetCoord; varying float inkRow; varying vec3 inkPosition;
`+x.vertexShader,x.vertexShader=x.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
inkPosition=position; inkRow=profileRow; sheetCoord=vec2(uv.x,profileArc); skyLight=apertureLight;`),x.fragmentShader=`uniform sampler2D enamelInk,enamelGrain; uniform vec3 lining,fillMetrics; uniform vec2 fillWinding; varying float skyLight; varying vec2 sheetCoord; uniform float inkReady; uniform int zoneMode; uniform vec2 printRows; uniform vec4 limits,inkTransform,fillWindow; uniform float wallAspect; varying float inkRow; varying vec3 inkPosition;
`+x.fragmentShader,x.fragmentShader=x.fragmentShader.replace("#include <color_fragment>",`
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

  `),x.fragmentShader=x.fragmentShader.replace("#include <aomap_fragment>",`
   #include <aomap_fragment>
   reflectedLight.indirectDiffuse*=mix(.55,1.0,skyLight);
   reflectedLight.indirectSpecular*=mix(.83,1.0,skyLight);
  `),x.fragmentShader=x.fragmentShader.replace("#include <clearcoat_normal_fragment_maps>",`
   #include <clearcoat_normal_fragment_maps>
   vec3 qx=dFdx(-vViewPosition),qy=dFdy(-vViewPosition);
   vec3 s=cross(qy,normal),t=cross(normal,qx);
   float determinant=dot(qx,s),height=enamelRG.r*.0018;
   vec3 gradient=sign(determinant)*(dFdx(height)*s+dFdy(height)*t)/max(abs(determinant),0.0000001);
   normal=normalize(normal-gradient);
   #ifdef USE_CLEARCOAT
    clearcoatNormal=normalize(clearcoatNormal-gradient*.84);
   #endif
  `),x.fragmentShader=x.fragmentShader.replace("#include <lights_physical_fragment>",`
   #include <lights_physical_fragment>
   material.clearcoatRoughness=clamp(material.clearcoatRoughness+(enamelRG.g-.5)*.05,.12,1.0);
  `)};function E(x,S){if(x.angle===void 0)return(S.x-x.x)*(Cn.default.isFill(p)?120:512/3);let C=jd(S.angle-x.angle);return p.around||p.mode==="wrap"?C*120/$d:(p.mode==="wall"?C/p.span:C*p.count/$d)*512/3}return{setPlacement:M,hitUV:w,dragX:E,dragY:(x,S)=>(x.y-S.y)*(Cn.default.isFill(p)?120:512/3),setTexture(x){g.enamelInk.value=x,g.inkReady.value=x?1:0},dispose(){_.dispose()},syncFinish(){r.color.copy(n.color),r.roughness=n.roughness,r.clearcoat=n.clearcoat,r.ior=n.ior,r.specularIntensity=n.specularIntensity,r.clearcoatRoughness=n.clearcoatRoughness}}}var kn=zi($i(),1);function ef(i){let{type:e,glaze:t,surfaces:n}=i,s={fabricInk:{value:null},fabricReady:{value:0}},r,a=n.map(c=>{c.geometry.attributes.printUv||c.geometry.setAttribute("printUv",c.geometry.attributes.uv);let[l,h]=c.userData.fabricSize,f=Math.min(l,h),d={fabricActive:{value:0},fabricHighlight:{value:0},fabricAspect:{value:new de(l/f,h/f)},fabricMode:{value:0},fabricTransform:{value:new $e(0,0,0,1)},fabricCoverage:{value:new de(.5,.5)},fabricCount:{value:3}};return c.material.customProgramCacheKey=()=>"fabric-print-v1",c.material.onBeforeCompile=u=>{Object.assign(u.uniforms,s,d),u.vertexShader=`attribute vec2 printUv; varying vec2 fabricUV;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
fabricUV=printUv;`),u.fragmentShader=`varying vec2 fabricUV; uniform sampler2D fabricInk; uniform float fabricReady,fabricActive,fabricMode,fabricCount,fabricHighlight; uniform vec4 fabricTransform; uniform vec2 fabricCoverage,fabricAspect;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
    vec2 surface=fabricUV-.5-fabricTransform.xy;
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
   `)},{mesh:c,own:d}});function o(c){r=kn.default.region(e,c.zone);let l=kn.default.facePlacements(e,c);for(let{mesh:h,own:f}of a){let d=l[h.userData.fabricFace];if(f.fabricActive.value=d?1:0,!d)continue;let u=kn.default.region(e,d.zone);f.fabricMode.value=u.mode==="fabricBorder"?2:kn.default.isFill(u)?1:0,f.fabricTransform.value.set(d.x/120,-d.y/120,d.rotation*Math.PI/180,d.scale/100),f.fabricCoverage.value.set(kn.default.isFill(u)?kn.default.coveragePercent(d.coverWidth)/200:.5,kn.default.isFill(u)?kn.default.coveragePercent(d.coverHeight)/200:.5),f.fabricCount.value=kn.default.fillCount(u,d.scale)}}return{setPlacement:o,setHighlight(c){for(let{mesh:l,own:h}of a)h.fabricHighlight.value=l.userData.fabricFace===r?.face?c:0},setTexture(c){s.fabricInk.value=c,s.fabricReady.value=c?1:0},syncFinish(){for(let{mesh:c}of a)c.material.color.copy(t.color),c.material.specularIntensity=t.specularIntensity;i.trim!==t&&i.trim.color.copy(t.color).multiplyScalar(.88);for(let{material:c,factor:l}of i.tints||[])c.color.copy(t.color).multiplyScalar(l)},hitUV(c){return c?.object.userData.fabricFace===r?.face&&(c.uv1||c.uv)?{x:(c.uv1||c.uv).x,y:(c.uv1||c.uv).y}:null},dragX:(c,l)=>(l.x-c.x)*120,dragY:(c,l)=>(c.y-l.y)*120,dispose(){}}}function Kl(i,e){if(e===xl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Fs||e===Wr){let t=i.getIndex();if(t===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=t.count-2,s=[];if(e===Fs)for(let r=1;r<=n;r++)s.push(t.getX(0)),s.push(t.getX(r)),s.push(t.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(t.getX(r)),s.push(t.getX(r+1)),s.push(t.getX(r+2))):(s.push(t.getX(r+2)),s.push(t.getX(r+1)),s.push(t.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}function tf(i){let e=new Map,t=new Map,n=i.clone();return nf(i,n,function(s,r){e.set(r,s),t.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function nf(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)nf(i.children[n],e.children[n],t)}var rc=class extends An{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new nu(t)}),this.register(function(t){return new iu(t)}),this.register(function(t){return new du(t)}),this.register(function(t){return new fu(t)}),this.register(function(t){return new pu(t)}),this.register(function(t){return new ru(t)}),this.register(function(t){return new au(t)}),this.register(function(t){return new ou(t)}),this.register(function(t){return new cu(t)}),this.register(function(t){return new tu(t)}),this.register(function(t){return new lu(t)}),this.register(function(t){return new su(t)}),this.register(function(t){return new hu(t)}),this.register(function(t){return new uu(t)}),this.register(function(t){return new Ql(t)}),this.register(function(t){return new ac(t,qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new ac(t,qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new mu(t)})}load(e,t,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=si.extractUrlBase(e);a=si.resolveURL(l,this.path)}else a=si.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Gi(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===cf){try{a[qe.KHR_BINARY_GLTF]=new gu(e)}catch(f){s&&s(f);return}r=JSON.parse(a[qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new bu(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let f=this.pluginCallbacks[h](l);f.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[f.name]=f,a[f.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let f=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(f){case qe.KHR_MATERIALS_UNLIT:a[f]=new eu;break;case qe.KHR_DRACO_MESH_COMPRESSION:a[f]=new xu(r,this.dracoLoader);break;case qe.KHR_TEXTURE_TRANSFORM:a[f]=new _u;break;case qe.KHR_MESH_QUANTIZATION:a[f]=new yu;break;default:d.indexOf(f)>=0&&o[f]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+f+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(e,t){let n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}};function N_(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}function wt(i,e,t){let n=i.json.materials[e];return n.extensions&&n.extensions[t]?n.extensions[t]:null}var qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},Ql=class{constructor(e){this.parser=e,this.name=qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){let r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,n="light:"+e,s=t.cache.get(n);if(s)return s;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],zt);let f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new bi(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Lr(h),l.distance=f;break;case"spot":l=new Pr(h),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Vn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,n=this.parser,r=n.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(t.cache,o,c)})}},eu=class{constructor(){this.name=qe.KHR_MATERIALS_UNLIT}getMaterialType(){return cn}extendParams(e,t,n){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],zt),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(s)}},tu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||n.emissiveStrength!==void 0&&(t.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},nu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(t.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(t,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new de(r,r)}return Promise.all(s)}},iu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},su=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(t.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(t.iridescenceIOR=n.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},ru=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];if(t.sheenColor=new ze(0,0,0),t.sheenRoughness=0,t.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],zt)}return n.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenColorMap",n.sheenColorTexture,vt)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(t,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},au=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(t.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(t,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},ou=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(t,"thicknessMap",n.thicknessTexture)),t.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return t.attenuationColor=new ze().setRGB(r[0],r[1],r[2],zt),Promise.all(s)}},cu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_IOR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);return n===null||(t.ior=n.ior!==void 0?n.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},lu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];t.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return t.specularColor=new ze().setRGB(r[0],r[1],r[2],zt),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(t,"specularColorMap",n.specularColorTexture,vt)),Promise.all(s)}},uu=class{constructor(e){this.parser=e,this.name=qe.EXT_MATERIALS_BUMP}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return t.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(t,"bumpMap",n.bumpTexture)),Promise.all(s)}},hu=class{constructor(e){this.parser=e,this.name=qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return wt(this.parser,e,this.name)!==null?ft:null}extendMaterialParams(e,t){let n=wt(this.parser,e,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(t.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(t.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(t,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},du=class{constructor(e){this.parser=e,this.name=qe.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},fu=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},pu=class{constructor(e){this.parser=e,this.name=qe.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(e,a.source,c)}},ac=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,f=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,f,d,s.mode,s.filter).then(function(u){return u.buffer}):a.ready.then(function(){let u=new ArrayBuffer(h*f);return a.decodeGltfBuffer(new Uint8Array(u),h,f,d,s.mode,s.filter),u})})}else return null}},mu=class{constructor(e){this.name=qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=t.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==gn.TRIANGLES&&l.mode!==gn.TRIANGLE_STRIP&&l.mode!==gn.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),f=h.isGroup?h.children:[h],d=l[0].count,u=[];for(let m of f){let _=new De,g=new N,p=new on,T=new N(1,1,1),R=new mr(m.geometry,m.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&g.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&T.fromBufferAttribute(c.SCALE,M),R.setMatrixAt(M,_.compose(g,p,T));let y=null;for(let M in c)if(M==="_COLOR_0"){let w=c[M];R.instanceColor=new $n(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(y===null){let E=R.geometry;y=new st,y.name=E.name;for(let x in E.attributes)y.setAttribute(x,E.attributes[x]);for(let x in E.morphAttributes)y.morphAttributes[x]=E.morphAttributes[x];E.index!==null&&y.setIndex(E.index),y.morphTargetsRelative=E.morphTargetsRelative;for(let x of E.groups)y.addGroup(x.start,x.count,x.materialIndex);E.boundingBox!==null&&(y.boundingBox=E.boundingBox.clone()),E.boundingSphere!==null&&(y.boundingSphere=E.boundingSphere.clone()),y.drawRange.start=E.drawRange.start,y.drawRange.count=E.drawRange.count,y.userData=Object.assign({},E.userData),R.geometry=y}let w=c[M];y.setAttribute(M,new $n(w.array,w.itemSize,w.normalized))}gt.prototype.copy.call(R,m),this.parser.assignFinalMaterial(R),u.push(R)}return h.isGroup?(h.clear(),h.add(...u),h):u[0]}))}},cf="glTF",Zr=12,sf={JSON:1313821514,BIN:5130562},gu=class{constructor(e){this.name=qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,Zr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==cf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Zr,r=new DataView(e,Zr),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===sf.JSON){let l=new Uint8Array(e,Zr+a,o);this.content=n.decode(l)}else if(c===sf.BIN){let l=Zr+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},xu=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let f=Mu[h]||h.toLowerCase();o[f]=a[h]}for(let h in e.attributes){let f=Mu[h]||h.toLowerCase();if(a[h]!==void 0){let d=n.accessors[e.attributes[h]],u=Ys[d.componentType];l[f]=u.name,c[f]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(f,d){s.decodeDracoFile(h,function(u){for(let m in u.attributes){let _=u.attributes[m],g=c[m];g!==void 0&&(_.normalized=g)}f(u)},o,l,zt,d)})})}},_u=class{constructor(){this.name=qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let n=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*n,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*n,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},yu=class{constructor(){this.name=qe.KHR_MESH_QUANTIZATION}},oc=class extends Un{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)t[a]=n[r+a];return t}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-t,f=(n-t)/h,d=f*f,u=d*f,m=e*l,_=m-l,g=-2*u+3*d,p=u-d,T=1-g,R=p-d+f;for(let y=0;y!==o;y++){let M=a[_+y+o],w=a[_+y+c]*h,E=a[m+y+o],x=a[m+y]*h;r[y]=T*M+R*w+g*E+p*x}return r}},D_=new on,vu=class extends oc{interpolate_(e,t,n,s){let r=super.interpolate_(e,t,n,s);return D_.fromArray(r).normalize().toArray(r),r}},gn={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ys={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},rf={9728:St,9729:et,9984:ro,9985:Ns,9986:Yi,9987:nn},af={33071:jt,33648:xs,10497:fn},Jl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Mu={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Ri={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},U_={CUBICSPLINE:void 0,LINEAR:Fi,STEP:Ui},$l={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function F_(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Qn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Dt})),i.DefaultMaterial}function ji(i,e,t){for(let n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Vn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function O_(i,e,t){let n=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(s=!0),f.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let f=e[l];if(n){let d=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;a.push(d)}if(s){let d=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],f=l[1],d=l[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=f),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function B_(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function k_(i){let e,t=i.extensions&&i.extensions[qe.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+jl(t.attributes):e=i.indices+":"+jl(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+jl(i.targets[n]);return e}function jl(i){let e="",t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Su(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function V_(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var G_=new De,bu=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new N_,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new Cr(this.options.manager):this.textureLoader=new Nr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Gi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return ji(r,o,s),Vn(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){let a=t[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){let s=e(t[n]);if(s)return s}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let n=[];for(let s=0;s<t.length;s++){let r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){let n=e+":"+t,s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){let n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(si.resolveURL(t.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){let s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){let t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Jl[s.type],o=Ys[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new _t(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Jl[s.type],l=Ys[s.componentType],h=l.BYTES_PER_ELEMENT,f=h*c,d=s.byteOffset||0,u=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,g;if(u&&u!==f){let p=Math.floor(d/u),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,R=t.cache.get(T);R||(_=new l(o,p*u,s.count*u/h),R=new ws(_,u/h),t.cache.add(T,R)),g=new Ts(R,c,d%u/h,m)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),g=new _t(_,c,m);if(s.sparse!==void 0){let p=Jl.SCALAR,T=Ys[s.sparse.indices.componentType],R=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,M=new T(a[1],R,s.sparse.count*p),w=new l(a[2],y,s.sparse.count*c);o!==null&&(g=new _t(g.array.slice(),g.itemSize,g.normalized)),g.normalized=!1;for(let E=0,x=M.length;E<x;E++){let S=M[E];if(g.setX(S,w[E*c]),c>=2&&g.setY(S,w[E*c+1]),c>=3&&g.setZ(S,w[E*c+2]),c>=4&&g.setW(S,w[E*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}g.normalized=m}return g})}loadTexture(e){let t=this.json,n=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,n){let s=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=rf[d.magFilter]||et,h.minFilter=rf[d.minFilter]||nn,h.wrapS=af[d.wrapS]||fn,h.wrapT=af[d.wrapT]||fn,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==St&&h.minFilter!==et,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(f){l=!0;let d=new Blob([f],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(f){return new Promise(function(d,u){let m=d;t.isImageBitmapLoader===!0&&(m=function(_){let g=new bt(_);g.needsUpdate=!0,d(g)}),t.load(si.resolveURL(f,r.path),m,void 0,u)})}).then(function(f){return l===!0&&o.revokeObjectURL(c),Vn(f,a),f.userData.mimeType=a.mimeType||V_(a.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[qe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,n=e.material,s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Cs,Yt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(e.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Rs,Yt.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return Qn}loadMaterial(e){let t=this,n=this.json,s=this.extensions,r=n.materials[e],a,o={},c=r.extensions||{},l=[];if(c[qe.KHR_MATERIALS_UNLIT]){let f=s[qe.KHR_MATERIALS_UNLIT];a=f.getMaterialType(),l.push(f.extendParams(o,r,t))}else{let f=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(f.baseColorFactor)){let d=f.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],zt),o.opacity=d[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",f.baseColorTexture,vt)),o.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,o.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",f.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Gt);let h=r.alphaMode||$l.OPAQUE;if(h===$l.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===$l.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new de(1,1),r.normalTexture.scale!==void 0)){let f=r.normalTexture.scale;o.normalScale.set(f,f)}if(r.occlusionTexture!==void 0&&a!==cn&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==cn){let f=r.emissiveFactor;o.emissive=new ze().setRGB(f[0],f[1],f[2],zt)}return r.emissiveTexture!==void 0&&a!==cn&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,vt)),Promise.all(l).then(function(){let f=new a(o);return r.name&&(f.name=r.name),Vn(f,r),t.associations.set(f,{materials:e}),r.extensions&&ji(s,f,r),f})}createUniqueName(e){let t=lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return of(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=k_(l),f=s[h];if(f)a.push(f.promise);else{let d;l.extensions&&l.extensions[qe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=of(new st,l,t),l.mode===gn.TRIANGLE_STRIP?d=d.then(u=>Kl(u,Wr)):l.mode===gn.TRIANGLE_FAN&&(d=d.then(u=>Kl(u,Fs))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,n=this.json,s=this.extensions,r=n.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?F_(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],f=[];for(let u=0,m=h.length;u<m;u++){let _=h[u],g=a[u],p,T=l[u];if(g.mode===gn.TRIANGLES||g.mode===gn.TRIANGLE_STRIP||g.mode===gn.TRIANGLE_FAN||g.mode===void 0){let R=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");R&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=R&&y?new fr(_,T):new Fe(_,T),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(g.mode===gn.LINES)p=new gr(_,T);else if(g.mode===gn.LINE_STRIP)p=new Bi(_,T);else if(g.mode===gn.LINE_LOOP)p=new xr(_,T);else if(g.mode===gn.POINTS)p=new _r(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+g.mode);Object.keys(p.geometry.morphAttributes).length>0&&B_(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Vn(p,r),g.extensions&&ji(s,p,g),t.assignFinalMaterial(p),f.push(p)}for(let u=0,m=f.length;u<m;u++)t.associations.set(f[u],{meshes:e,primitives:u});if(f.length===1)return r.extensions&&ji(s,f[0],r),f[0];let d=new Ct;r.extensions&&ji(s,d,r),t.associations.set(d,{meshes:e});for(let u=0,m=f.length;u<m;u++)d.add(f[u]);return d})}loadCamera(e){let t,n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Rt(Os.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Si(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Vn(t,n),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let f=a[l];if(f){o.push(f);let d=new De;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new pr(o,c)})}loadAnimation(e){let t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let f=0,d=s.channels.length;f<d;f++){let u=s.channels[f],m=s.samplers[u.sampler],_=u.target,g=_.node,p=s.parameters!==void 0?s.parameters[m.input]:m.input,T=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",g)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",T)),l.push(m),h.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(f){let d=f[0],u=f[1],m=f[2],_=f[3],g=f[4],p=[];for(let R=0,y=d.length;R<y;R++){let M=d[R],w=u[R],E=m[R],x=_[R],S=g[R];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let C=n._createAnimationTracks(M,w,E,x,S);if(C)for(let A=0;A<C.length;A++)p.push(C[A])}let T=new Er(r,void 0,p);return Vn(T,s),T})}createNodeMesh(e){let t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],f=l[1],d=l[2];d!==null&&h.traverse(function(u){u.isSkinnedMesh&&u.bind(d,G_)});for(let u=0,m=f.length;u<m;u++)h.add(f[u]);if(h.userData.pivot!==void 0&&f.length>0){let u=h.userData.pivot,m=f[0];h.pivot=new N().fromArray(u),h.position.x-=u[0],h.position.y-=u[1],h.position.z-=u[2],m.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new As:l.length>1?h=new Ct:l.length===1?h=l[0]:h=new gt,h!==l[0])for(let f=0,d=l.length;f<d;f++)h.add(l[f]);if(r.name&&(h.userData.name=r.name,h.name=a),Vn(h,r),r.extensions&&ji(n,h,r),r.matrix!==void 0){let f=new De;f.fromArray(r.matrix),h.applyMatrix4(f)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let f=s.associations.get(h);s.associations.set(h,{...f})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,n=this.json.scenes[e],s=this,r=new Ct;n.name&&(r.name=s.createUniqueName(n.name)),Vn(r,n),n.extensions&&ji(t,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,f=c.length;h<f;h++){let d=c[h];d.parent!==null?r.add(tf(d)):r.add(d)}let l=h=>{let f=new Map;for(let[d,u]of s.associations)(d instanceof Yt||d instanceof bt)&&f.set(d,u);return h.traverse(d=>{let u=s.associations.get(d);u!=null&&f.set(d,u)}),f};return s.associations=l(r),r})}_createAnimationTracks(e,t,n,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(u){u.morphTargetInfluences&&c.push(u.name?u.name:u.uuid)}Ri[r.path]===Ri.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Ri[r.path]){case Ri.weights:h=ti;break;case Ri.rotation:h=ni;break;case Ri.translation:case Ri.scale:h=Mi;break;default:n.itemSize===1?h=ti:h=Mi;break}let f=s.interpolation!==void 0?U_[s.interpolation]:Fi,d=this._getArrayFromAccessor(n);for(let u=0,m=c.length;u<m;u++){let _=new h(c[u]+"."+Ri[r.path],t.array,d,f);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let n=Su(t.constructor),s=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){let s=this instanceof ni?vu:oc;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function H_(i,e,t){let n=e.attributes,s=new Ft;if(n.POSITION!==void 0){let o=t.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new N(c[0],c[1],c[2]),new N(l[0],l[1],l[2])),o.normalized){let h=Su(Ys[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new N,c=new N;for(let l=0,h=r.length;l<h;l++){let f=r[l];if(f.POSITION!==void 0){let d=t.json.accessors[f.POSITION],u=d.min,m=d.max;if(u!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(u[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(u[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(u[2]),Math.abs(m[2]))),d.normalized){let _=Su(Ys[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new en;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function of(i,e,t){let n=e.attributes,s=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Mu[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(e.indices!==void 0&&!i.index){let a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});s.push(a)}return We.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),Vn(i,e),H_(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?O_(i,e.targets,t):i})}var cc=new Map;function wu(i){let e=new Set,t=new Set,n=new Set;i.traverse(s=>{if(s.geometry&&e.add(s.geometry),s.material)for(let r of Array.isArray(s.material)?s.material:[s.material])t.add(r)});for(let s of t){for(let r of Object.values(s))r?.isTexture&&n.add(r);s.dispose()}for(let s of n)s.dispose();for(let s of e)s.dispose()}async function lf(i){if(!["backpack","tote"].includes(i))return null;if(!cc.has(i)){let o=window.CarrierModelData?.[i],c=o?Promise.resolve(Uint8Array.from(atob(o),l=>l.charCodeAt(0)).buffer):fetch(new URL((window.CarrierModelFolder||"prototype/media/models/")+i+".glb",location.href)).then(l=>{if(!l.ok)throw Error("\u6A21\u578B\u6587\u4EF6\u8BFB\u53D6\u5931\u8D25");return l.arrayBuffer()});cc.set(i,c.catch(l=>{throw cc.delete(i),l}))}let e=await new rc().parseAsync((await cc.get(i)).slice(0),""),t=new Ct,n=[],s=[];if(t.name="authored-"+i+"-v1",e.scene.updateMatrixWorld(!0),e.scene.traverse(o=>{if(!o.isMesh)return;let c=new Fe(o.geometry,o.material);c.geometry.applyMatrix4(o.matrixWorld),c.name=o.name,c.userData={...o.userData},c.material.side=Gt,c.material.shadowSide=Dt,c.userData.fabricFace?(c.geometry.setAttribute("printUv",c.geometry.attributes.uv1),n.push(c)):c.material.userData?.dyeable&&s.push({material:c.material,factor:1}),t.add(c)}),n.sort((o,c)=>["front","back","pocket"].indexOf(o.userData.fabricFace)-["front","back","pocket"].indexOf(c.userData.fabricFace)),!n.length)throw wu(t),Error("\u6A21\u578B\u7F3A\u5C11\u5370\u82B1\u533A\u57DF");let r=new ft({color:"#f5f1e6",roughness:.94,metalness:0}),a=new Fe(new st,r);return a.visible=!1,t.add(a),{type:i,group:t,body:n[0],surfaces:n,glaze:r,print:a,trim:r,tints:s,imported:!0}}function uf(){let i=null;function e(){if(!i)return;let u=i;i=null,u.token++,clearTimeout(u.timer),clearTimeout(u.highlightTimer),cancelAnimationFrame(u.frame),u.observer?.disconnect(),u.events.abort(),u.texture?.dispose(),u.ink?.dispose(),u.environment?.dispose();let m=new Set,_=new Set,g=new Set;u.scene?.traverse(p=>{p.shadow?.map?.dispose(),p.geometry&&m.add(p.geometry),p.material&&_.add(p.material)});for(let p of m)p.dispose();for(let p of _){for(let T of Object.values(p))T?.isTexture&&T!==u.texture&&g.add(T);p.dispose()}for(let p of g)p.dispose();u.renderer?.dispose(),u.renderer?.forceContextLoss(),u.renderer?.domElement.remove()}function t(u){let m=u.camera.aspect,_=u.cameraState.pitch,g=Math.tan(19*Math.PI/180)/Math.min(1,m/1.1);if(m>1&&(u.host.id==="cup-host"||u.host.closest(".wb-cover-open"))){let T=u.bounds.height*Math.cos(_)+u.bounds.depth*Math.abs(Math.sin(_)),R=1.3*Math.max(u.bounds.width/m,T)/(2*yt.default.get(u.vesselType).camera.distance);g=Math.min(g,R)}let p=2*Math.atan(g)*180/Math.PI;u.camera.fov!==p&&(u.camera.fov=p,u.camera.updateProjectionMatrix())}function n(u){u!==i||u.failed||u.frame||(u.frame=requestAnimationFrame(()=>{if(u.frame=0,u!==i||document.hidden||!u.host.isConnected)return;let m=u.cameraState,_=m.distance*Math.cos(m.pitch);t(u);let g=0;u.camera.position.set(_*Math.sin(m.yaw),g+m.distance*Math.sin(m.pitch),_*Math.cos(m.yaw)),u.camera.lookAt(u.vesselType==="cup"?.27:0,g,0),u.renderer.render(u.scene,u.camera),u.draws++}))}function s(u,m,_=!0){u.cameraState=tc({...u.cameraState,...m}),n(u),_&&u.onCamera({...u.cameraState})}function r(u,m){u===i&&(u.failed=!0,u.token++,clearTimeout(u.timer),u.host.dataset.mode="static",u.onStatus("fallback",m),u.renderer?.domElement.remove(),cancelAnimationFrame(u.frame),u.frame=0)}function a(u){let m=i;if(!m)return;if(m.vesselType!==u.canvas){l(m.host,u,m.onCamera,m.onStatus,m.options);return}if(m.failed||(m.draft=u,!m.cup||!m.ink))return;let _=u.vesselPlacement||yt.default.placement(u.canvas),g=u.cupCamera||yt.default.regionCamera(u.canvas,_),p=m.zone&&m.zone!==_.zone;m.zone!==_.zone&&(m.zone=_.zone,m.cameraState=tc(g)),m.draft=u,m.ink.setPlacement(_),p&&m.ink.setHighlight&&(clearTimeout(m.highlightTimer),m.ink.setHighlight(1),m.highlightTimer=setTimeout(()=>{m.ink.setHighlight(0),n(m)},700)),m.cup.glaze.color.set(yt.default.glazeHex(u.cupMaterial?.color));let T=u.cupMaterial?.finish==="matte";m.cup.glaze.roughness=T?.57:.3+(yt.default.get(u.canvas).roughness||.23)*.15,m.cup.glaze.ior=1.48,m.cup.glaze.specularIntensity=.78,m.cup.glaze.clearcoat=T?.16:.5,m.cup.glaze.clearcoatRoughness=T?.36:.17,yt.default.textile(u.canvas)&&(m.cup.glaze.roughness=.94,m.cup.glaze.clearcoat=0,m.cup.glaze.specularIntensity=.25),m.ink.syncFinish(),n(m);let R=JSON.stringify([u.imageId,u.pattern,...Object.keys(window.PatternEditor.defaults).map(y=>u[y])]);if(!m.error&&R===m.textureKey){m.readyToken===m.token&&m.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E");return}m.error=null,m.textureKey=R,m.token++,m.pending={draft:{...u},token:m.token},m.texture||m.onStatus("loading","\u6B63\u5728\u66F4\u65B0\u5668\u7269\u7EB9\u6837\u2026"),m.drawingTexture||o(m)}async function o(u){u.drawingTexture=!0;try{for(;u===i&&!u.failed&&u.pending;){let{draft:m,token:_}=u.pending;u.pending=null;try{let g=await window.PatternTexture.export(m,{size:512,transparent:!0}),p=URL.createObjectURL(g.blob),T=new Image;try{T.src=p,await T.decode()}finally{URL.revokeObjectURL(p)}if(u!==i||u.failed)return;if(m.imageId!==u.draft.imageId||m.pattern!==u.draft.pattern)continue;let R=new bt(T);R.colorSpace=vt,R.wrapS=R.wrapT=fn,R.flipY=!0,R.anisotropy=Math.min(4,u.renderer.capabilities.getMaxAnisotropy()),R.needsUpdate=!0;let y=u.texture;u.texture=R,u.ink.setTexture(R),y?.dispose(),u.host.dataset.textureRevision=String(++u.textureRevision),u.readyToken=_,n(u),_===u.token&&u.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E")}catch(g){u===i&&_===u.token&&(u.error=g,u.ink.setTexture(null),n(u),u.onStatus("error","\u8D34\u56FE\u8BFB\u53D6\u5931\u8D25\uFF1A"+g.message))}}}finally{u.drawingTexture=!1}}function c(u){let{data:m,width:_,height:g,type:p}=new Qo().parse(Gd),T=new pn(m,_,g,Jt,p);T.mapping=Ls,T.flipY=!0,T.colorSpace=zt,T.minFilter=T.magFilter=et,T.needsUpdate=!0;let R=new Gs(u);try{return R.fromEquirectangular(T)}finally{R.dispose(),T.dispose()}}async function l(u,m,_,g,{force:p=!1,interaction:T=()=>"rotate",onPlacement:R=()=>{}}={}){e();let y={host:u,draft:m,vesselType:m.canvas,options:{force:p,interaction:T,onPlacement:R},onCamera:_,onStatus:g,cameraState:tc(m.cupCamera||yt.default.get(m.canvas).camera),token:0,frame:0,draws:0,textureRevision:0,events:new AbortController};if(i=y,u.dataset.mode="loading",g("loading","\u6B63\u5728\u5EFA\u7ACB"+yt.default.get(y.vesselType).name+"\u4E09\u7EF4\u9884\u89C8\u2026"),!p&&(m.cupPreviewMode==="static"||navigator.deviceMemory&&navigator.deviceMemory<=2)){r(y,"\u9759\u6001\u9884\u89C8 \xB7 \u8282\u80FD\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u65CB\u8F6C");return}try{let M=await lf(m.canvas);if(y!==i){M&&wu(M.group);return}y.renderer=new Jo({alpha:!0,antialias:!0,powerPreference:"low-power"}),y.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),y.renderer.outputColorSpace=vt,y.renderer.toneMapping=Ur,y.renderer.toneMappingExposure=yt.default.textile(m.canvas)?.95:1.16,y.renderer.domElement.setAttribute("aria-label",yt.default.get(m.canvas).name+"\u771F\u5B9E\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C"),u.prepend(y.renderer.domElement),y.scene=new ur,y.camera=new Rt(38,1,.1,30),y.cup=M||Jd(m.canvas),y.ink=yt.default.textile(m.canvas)?ef(y.cup):Qd(y.cup),y.scene.add(y.cup.group);let w=new Ft().setFromObject(y.cup.group),E=w.getSize(new N);y.bounds={width:E.x,height:E.y,depth:E.z},u.dataset.vesselType=y.vesselType,y.environment=c(y.renderer),y.scene.environment=y.environment.texture,y.scene.environmentRotation.y=0,y.scene.environmentIntensity=yt.default.textile(m.canvas)?.48:.86,y.scene.add(new zr(16776180,11709088,.64));let x=new bi(16775924,yt.default.textile(m.canvas)?1.8:2.35);x.position.set(-3.8,5.6,3.1),x.castShadow=!0,x.shadow.mapSize.set(1024,1024),x.shadow.camera.left=-3,x.shadow.camera.right=3,x.shadow.camera.top=3,x.shadow.camera.bottom=-3,x.shadow.camera.near=.5,x.shadow.camera.far=12,x.shadow.bias=yt.default.textile(m.canvas)?1e-4:-2e-4,x.shadow.normalBias=yt.default.textile(m.canvas)?.012:.025,x.shadow.radius=10,y.scene.add(x),y.renderer.shadowMap.enabled=!0,y.renderer.shadowMap.type=Wi,y.renderer.shadowMap.autoUpdate=!1,y.renderer.shadowMap.needsUpdate=!0,y.cup.group.traverse(se=>{se.isMesh&&(se.castShadow=se!==y.cup.print,se.receiveShadow=se!==y.cup.handle&&se.name!=="enamel-handle-joint"&&!se.userData.fabricFace)});let S=new bi(16776437,.46);S.position.set(3.6,2.3,1.9),y.scene.add(S);let C=document.createElement("canvas");C.width=C.height=128;let A=C.getContext("2d"),P=A.createRadialGradient(64,64,0,64,64,64);P.addColorStop(0,"rgba(43,38,34,.36)"),P.addColorStop(.47,"rgba(43,38,34,.27)"),P.addColorStop(.64,"rgba(43,38,34,.065)"),P.addColorStop(1,"rgba(43,38,34,0)"),A.fillStyle=P,A.fillRect(0,0,128,128);let L=(yt.default.get(y.vesselType).foot||.905)*3.55,z=new Fe(new vi(L,L),new cn({map:new vr(C),transparent:!0,depthWrite:!1,toneMapped:!1}));z.rotation.x=-Math.PI/2,z.position.y=w.min.y-.004,y.scene.add(z);let D=new Fe(new vi(8,8),new Tr({opacity:yt.default.textile(y.vesselType)?.018:.047,depthWrite:!1}));D.rotation.x=-Math.PI/2,D.position.y=w.min.y-.002,D.receiveShadow=!0,y.scene.add(D),y.floor=[z,D];let k=()=>{let se=u.clientWidth,Je=u.clientHeight;!se||!Je||(y.renderer.setSize(se,Je,!1),y.camera.aspect=se/Je,y.camera.fov=2*Math.atan(Math.tan(19*Math.PI/180)/Math.min(1,y.camera.aspect/1.1))*180/Math.PI,y.camera.updateProjectionMatrix(),n(y))};y.observer=new ResizeObserver(k),y.observer.observe(u),k();let V=new Map,$=0,W=()=>{let se=[...V.values()];return se.length===2?Math.hypot(se[0].x-se[1].x,se[0].y-se[1].y):0},Y=y.renderer.domElement,Q={signal:y.events.signal},re=null,ge=null,je=null,He=null,Ke=null,Z=new Dr,te=se=>{let Je=Y.getBoundingClientRect();Z.setFromCamera(new de((se.clientX-Je.left)/Je.width*2-1,-(se.clientY-Je.top)/Je.height*2+1),y.camera);let Le=y.cup.group.children.filter(Xe=>Xe.visible&&Xe.isMesh);return y.ink.hitUV(Z.intersectObjects(Le,!1)[0])},ye=()=>{if(!re)return;ge={...re.current},je=V.size===2?Zs.default.pair([...V.values()]):null;let se=[...V.values()][0];He=se?te({clientX:se.x,clientY:se.y}):null};Y.addEventListener("pointerdown",se=>{if(!(V.size>=2)){if(!V.size&&(Ke={...y.cameraState},T()==="place")){let Je={...y.draft.vesselPlacement};re={original:Je,current:{...Je},changed:!1}}V.set(se.pointerId,{x:se.clientX,y:se.clientY}),Y.setPointerCapture(se.pointerId),$=W(),ye(),se.preventDefault()}},Q),Y.addEventListener("pointermove",se=>{let Je=V.get(se.pointerId);if(Je){if(V.set(se.pointerId,{x:se.clientX,y:se.clientY}),re){if(V.size===2&&je)re.current=Zs.default.pinch(ge,je,Zs.default.pair([...V.values()]));else{let Le=te(se);if(!Le||!He)return;let Xe=ge.x+y.ink.dragX(He,Le);re.current={...ge,x:Math.round(yt.default.region(y.vesselType,y.zone).around||yt.default.region(y.vesselType,y.zone).mode==="wrap"?((Xe+60)%120+120)%120-60:Zs.default.clamp(Xe,-60,60)),y:Math.round(Zs.default.clamp(ge.y+y.ink.dragY(He,Le),-60,60))}}re.changed=!0,R({vesselPlacement:re.current},!1);return}if(V.size===1)s(y,{yaw:y.cameraState.yaw-(se.clientX-Je.x)*.009,pitch:y.cameraState.pitch+(se.clientY-Je.y)*.008},!1);else{let Le=W();$&&Le&&s(y,{distance:y.cameraState.distance*$/Le},!1),$=Le}}},Q);let Ne=se=>{if(V.has(se.pointerId)){if(V.delete(se.pointerId),$=W(),V.size){ye();return}re?.changed&&R({vesselPlacement:re.current},!0),re=null,y.onCamera({...y.cameraState})}},_e=()=>{V.size&&(V.clear(),re&&R({vesselPlacement:re.original},!1),re=null,Ke&&s(y,Ke))};Y.addEventListener("pointerup",Ne,Q),Y.addEventListener("pointercancel",_e,Q),Y.addEventListener("lostpointercapture",se=>{V.has(se.pointerId)&&_e()},Q),Y.addEventListener("webglcontextlost",se=>{se.preventDefault(),r(y,"\u9759\u6001\u9884\u89C8 \xB7 \u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u53EF\u91CD\u8BD5\u4E09\u7EF4")},Q),u.dataset.mode="three",a(y.draft)}catch(M){y.error=M,r(y,"\u9759\u6001\u9884\u89C8 \xB7 \u4E09\u7EF4\u8D44\u6E90\u6682\u4E0D\u53EF\u7528\uFF0C\u53EF\u91CD\u8BD5")}}function h(u){let m=i;!m?.renderer||m.failed||(u==="reset"&&s(m,yt.default.regionCamera(m.vesselType,m.draft.vesselPlacement)),u==="in"&&s(m,{distance:m.cameraState.distance*.88}),u==="out"&&s(m,{distance:m.cameraState.distance/.88}),u==="left"&&s(m,{yaw:m.cameraState.yaw-.35}),u==="right"&&s(m,{yaw:m.cameraState.yaw+.35}))}function f(){let u=i;return u?{mode:u.failed?"static":u.cup?"three":"loading",camera:{...u.cameraState},modelId:u.cup?.group.uuid,vesselType:u.vesselType,error:u.error?.message,zone:u.zone,glaze:"#"+u.cup?.glaze.color.getHexString(),meshName:u.cup?.group.name,bodyName:u.cup?.body.name,geometryId:u.cup?.body.geometry.uuid,hasHandle:!!u.cup?.handle,bounds:u.bounds,printRegion:u.vesselType==="cup"?Ei:{radius:yt.default.get(u.vesselType).printRadius,zone:yt.default.get(u.vesselType).zone},handleHasMap:!!u.cup?.handle?.material.map,inkOnBody:!!(u.ink&&u.texture&&!u.cup.print.visible),bodyHasMap:!!u.cup?.body.material.map,textureRevision:u.textureRevision,draws:u.draws,triangles:u.renderer?.info.render.triangles,textures:u.renderer?.info.memory.textures,geometries:u.renderer?.info.memory.geometries}:null}document.addEventListener("visibilitychange",()=>{document.hidden&&i?(cancelAnimationFrame(i.frame),i.frame=0):i?.renderer&&!i.failed&&n(i)}),window.addEventListener("pagehide",e);async function d(u,{transparent:m=!1}={}){let _=i;if(!_?.ink||_.failed||_.vesselType!==u.canvas)throw Error("\u4E09\u7EF4\u9884\u89C8\u5C1A\u672A\u5C31\u7EEA");a(u),_.ink.setHighlight?.(0);let g=_.token;await new Promise((M,w)=>{let E=performance.now(),x=()=>{if(_!==i||_.failed)return w(Error("\u4E09\u7EF4\u9884\u89C8\u5DF2\u5173\u95ED"));if(_.error)return w(_.error);if(_.readyToken===g)return M();if(performance.now()-E>1e4)return w(Error("\u9884\u89C8\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5"));setTimeout(x,25)};x()});let p=_.renderer.getSize(new de),T=_.camera.aspect,R=_.camera.fov,y=document.createElement("canvas");y.width=y.height=640;try{_.renderer.setSize(640,640,!1),_.camera.aspect=1,_.camera.fov=38,_.camera.updateProjectionMatrix();let M=_.cameraState,w=M.distance*Math.cos(M.pitch),E=0;if(_.camera.position.set(w*Math.sin(M.yaw),E+M.distance*Math.sin(M.pitch),w*Math.cos(M.yaw)),_.camera.lookAt(_.vesselType==="cup"?.27:0,E,0),m){_.floor.forEach(L=>L.visible=!1),_.camera.updateMatrixWorld(),_.cup.group.updateWorldMatrix(!0,!0);let S=new N,C=new De,A=Math.tan(19*Math.PI/180)*.97,P=0;_.cup.group.traverse(L=>{if(!L.isMesh||!L.visible)return;let z=L.geometry.attributes.position;C.multiplyMatrices(_.camera.matrixWorldInverse,L.matrixWorld);for(let D=0;D<z.count;D++)S.fromBufferAttribute(z,D).applyMatrix4(C),P=Math.max(P,S.z+Math.max(Math.abs(S.x),Math.abs(S.y))/A)}),_.camera.translateZ(P)}_.renderer.render(_.scene,_.camera);let x=y.getContext("2d");m||(x.fillStyle="#f4f3ef",x.fillRect(0,0,640,640)),x.drawImage(_.renderer.domElement,0,0,640,640)}finally{_.floor.forEach(M=>M.visible=!0),_.renderer.setSize(p.x,p.y,!1),_.camera.aspect=T,_.camera.fov=R,_.camera.updateProjectionMatrix(),n(_)}return new Promise((M,w)=>y.toBlob(E=>E?M(E):w(Error("\u65E0\u6CD5\u4FDD\u5B58\u9884\u89C8\u56FE")),"image/png"))}return{mount:l,update:a,control:h,dispose:e,diagnostics:f,capture:d}}window.Cup3D={...uf(),createViewer:uf};})();
