(()=>{var Ju=Object.create;var vc=Object.defineProperty;var $u=Object.getOwnPropertyDescriptor;var Ku=Object.getOwnPropertyNames;var ju=Object.getPrototypeOf,Qu=Object.prototype.hasOwnProperty;var Mc=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ed=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of Ku(e))!Qu.call(i,s)&&s!==t&&vc(i,s,{get:()=>e[s],enumerable:!(n=$u(e,s))||n.enumerable});return i};var xi=(i,e,t)=>(t=i!=null?Ju(ju(i)):{},ed(e||!i||!i.__esModule?vc(t,"default",{value:i,enumerable:!0}):t,i));var Sc=Uint8Array.fromBase64||(()=>{for(var i=new Uint8Array(128),e=0;e<64;e++)i[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var n=t.length,s=new Uint8Array((n-(t[n-1]=="=")-(t[n-2]=="="))*3/4|0),r=0,a=0;r<n;){var o=i[t.charCodeAt(r++)],l=i[t.charCodeAt(r++)],c=i[t.charCodeAt(r++)],d=i[t.charCodeAt(r++)];s[a++]=o<<2|l>>4,s[a++]=l<<4|c>>2,s[a++]=c<<6|d}return s}})();var Su=Mc((Mu,lc)=>{(function(i,e){let t=e();typeof lc=="object"?lc.exports=t:i.TouchTransform=t})(typeof window<"u"?window:Mu,function(){let i=(s,r,a)=>Math.max(r,Math.min(a,s)),e=s=>{let[r,a]=s;return{x:(r.x+a.x)/2,y:(r.y+a.y)/2,distance:Math.hypot(a.x-r.x,a.y-r.y),angle:Math.atan2(a.y-r.y,a.x-r.x)}},t=(s,r,a)=>({...s,scale:Math.round(i(s.scale*a.distance/Math.max(1,r.distance),40,160)),rotation:Math.round((s.rotation+Math.atan2(Math.sin(a.angle-r.angle),Math.cos(a.angle-r.angle))*180/Math.PI+540)%360-180)});function n(s,{read:r,preview:a,commit:o,drag:l,transform:c=t}){let d=new Map,m,p,h,f,y=()=>{h={...p},f=d.size===1?[...d.values()][0]:e([...d.values()])};s.addEventListener("pointerdown",u=>{d.size>=2||(u.stopPropagation(),u.preventDefault(),d.size||(m={...r()},p={...m}),d.set(u.pointerId,{x:u.clientX,y:u.clientY}),s.setPointerCapture(u.pointerId),y())}),s.addEventListener("pointermove",u=>{d.has(u.pointerId)&&(u.stopPropagation(),d.set(u.pointerId,{x:u.clientX,y:u.clientY}),p=d.size===2?c(h,f,e([...d.values()])):l(h,f,{x:u.clientX,y:u.clientY}),a(p))}),s.addEventListener("pointerup",u=>{d.has(u.pointerId)&&(u.stopPropagation(),d.delete(u.pointerId),d.size?y():JSON.stringify(p)!==JSON.stringify(m)&&o(p))});let g=u=>{d.size&&(u.stopPropagation(),d.clear(),a(m))};s.addEventListener("pointercancel",g),s.addEventListener("lostpointercapture",u=>{d.has(u.pointerId)&&g(u)})}return{pair:e,pinch:t,bind:n,clamp:i}})});var Pi=Mc((Ov,Mo)=>{(function(i,e){let t=e();typeof Mo=="object"&&Mo.exports?Mo.exports=t:i.Vessels=t})(globalThis,()=>{let i={cup:{profile:[[.001,-1],[.83,-1],[.9,-.995],[.94,-.98],[.96,-.95],[.97,-.9],[1,.93],[1,.98],[.93,.98],[.91,.93],[.88,-.78],[.865,-.815],[.82,-.84],[.001,-.84]],name:"\u642A\u74F7\u676F",short:"\u676F",zone:"\u676F\u8EAB\u6B63\u9762",camera:{yaw:.22,pitch:.46,distance:4.8},rim:"#163d51"},plate:{name:"\u642A\u74F7\u76D8",short:"\u76D8",zone:"\u76D8\u9762\u5185\u4FA7",camera:{yaw:0,pitch:1.02,distance:5.5},rim:"#244f65",rimRadius:1.48,rimY:.2,rimTube:.028,foot:.54,floor:-.25,roughness:.22,printRadius:1.08,inner:[[0,-.1],[.82,-.1],[1.1,-.05],[1.33,.14],[1.48,.2]],profile:[[.001,-.18],[.48,-.18],[.52,-.23],[.6,-.23],[.65,-.18],[.9,-.16],[1.14,-.07],[1.36,.11],[1.48,.16],[1.5,.18],[1.48,.2],[1.33,.14],[1.1,-.05],[.82,-.1],[.001,-.1]]},bowl:{name:"\u642A\u74F7\u7897",short:"\u7897",zone:"\u7897\u5185\u5E95\u4E0E\u5185\u58C1",camera:{yaw:0,pitch:1.1,distance:4.9},rim:"#234c5d",rimRadius:1.16,rimY:.65,rimTube:.036,foot:.4,floor:-.66,roughness:.27,printRadius:.84,inner:[[0,-.525],[.33,-.525],[.49,-.485],[.68,-.333],[.9,-.045],[1.095,.37],[1.145,.625]],profile:[[.001,-.58],[.34,-.58],[.37,-.64],[.43,-.64],[.46,-.55],[.61,-.45],[.78,-.27],[.955,.02],[1.135,.43],[1.19,.63],[1.16,.65],[1.145,.625],[1.095,.37],[.9,-.045],[.68,-.333],[.49,-.485],[.33,-.525],[.001,-.525]]},basin:{name:"\u642A\u74F7\u76C6",short:"\u76C6",zone:"\u76C6\u5185\u5E95",camera:{yaw:0,pitch:.88,distance:6},rim:"#183d52",rimRadius:1.66,rimY:.44,rimTube:.055,foot:1.02,floor:-.53,roughness:.29,printRadius:1.05,inner:[[0,-.39],[.94,-.39],[1.02,-.36],[1.14,-.27],[1.43,.23],[1.48,.35],[1.66,.44]],profile:[[.001,-.48],[.94,-.48],[1.02,-.51],[1.1,-.47],[1.2,-.32],[1.5,.2],[1.55,.32],[1.68,.39],[1.66,.44],[1.48,.35],[1.43,.23],[1.14,-.27],[1.02,-.36],[.94,-.39],[.001,-.39]]}},e={enamel:"\u642A\u74F7\u5668\u76BF",textile:"\u5BB6\u5C45\u5E03\u827A",bags:"\u5305\u888B",daily:"\u968F\u8EAB\u7528\u54C1",apparel:"\u8863\u670D"};for(let C of Object.values(i))C.family="enamel";Object.assign(i,{cushion:{name:"\u62B1\u6795",short:"\u62B1\u6795",family:"textile",size:[2.25,2.25,.96],camera:{yaw:.5,pitch:.16,distance:5.4}},pillow:{name:"\u6795\u5934",short:"\u6795\u5934",family:"textile",size:[3,1.9,.84],camera:{yaw:.4,pitch:.2,distance:5.7}},duvet:{name:"\u88AB\u5957",short:"\u88AB\u5957",family:"textile",size:[2.7,3.25,.18],camera:{yaw:.26,pitch:.3,distance:6.3}},backpack:{name:"\u4E66\u5305",short:"\u4E66\u5305",family:"bags",size:[1.85,2.5,.88],camera:{yaw:.48,pitch:.18,distance:5.8}},tote:{name:"\u5E06\u5E03\u888B",short:"\u5E06\u5E03\u888B",family:"bags",size:[2.15,2.25,.6],camera:{yaw:.32,pitch:.22,distance:6.2}},notebook:{name:"\u7B14\u8BB0\u672C",short:"\u7B14\u8BB0\u672C",family:"daily",size:[2.04,2.86,.35],camera:{yaw:.42,pitch:.2,distance:5.7}},phonecase:{name:"\u624B\u673A\u58F3",short:"\u624B\u673A\u58F3",family:"daily",size:[1.52,3.06,.25],camera:{yaw:.38,pitch:.16,distance:5.7}},tshirt:{name:"T \u6064",short:"T \u6064",family:"apparel",size:[3.34,2.94,.25],camera:{yaw:.12,pitch:.08,distance:6.4}}});let t=C=>!!i[C]&&i[C].family!=="enamel",n=C=>["textile","bags","apparel"].includes(i[C]?.family),s=C=>C==="notebook"?"\u5C01\u9762\u8272":C==="phonecase"?"\u58F3\u8272":n(C)?"\u5E03\u8272":"\u91C9\u8272",r=C=>C==="notebook"?"\u5C01\u9762\u989C\u8272":C==="phonecase"?"\u58F3\u4F53\u989C\u8272":n(C)?"\u5E03\u6599\u989C\u8272":"\u91C9\u8272",a=C=>({color:"white",finish:t(C)?"matte":"gloss"}),o=C=>JSON.parse(JSON.stringify(C)),l=C=>i[C]||i.cup,c={cup:{body:{label:"\u676F\u8EAB\u6B63\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986},outerFill:{label:"\u676F\u8EAB\u6EE1\u94FA",mode:"wrap",rows:[4,7],radius:.986,repeat:7,pitch:.34},back:{label:"\u676F\u8EAB\u80CC\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986,yaw:Math.PI},band:{label:"\u676F\u53E3\u73AF\u5E26",mode:"belt",rows:[0,7],low:.44,high:.88,count:14,pitch:.23}},plate:{center:{label:"\u76D8\u5FC3",mode:"disk",rows:[10,14],high:1.08},innerFill:{label:"\u76D8\u9762\u6EE1\u94FA",mode:"faceFill",rows:[10,14],repeat:3},rim:{label:"\u76D8\u6CBF\u82B1\u8FB9",mode:"ring",rows:[10,14],low:1.05,high:1.46,count:18},back:{label:"\u76D8\u80CC",mode:"back",rows:[0,8],high:1.3,pitch:-.65}},bowl:{center:{label:"\u7897\u5185",mode:"disk",rows:[11,17],high:.84},outer:{label:"\u7897\u8EAB\u5916\u58C1",mode:"wall",rows:[3,10],low:-.45,high:.56,span:1.2,radius:.85,pitch:.18,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[4,9],radius:.86,repeat:8,pitch:.24},innerFill:{label:"\u7897\u5185\u6EE1\u94FA",mode:"faceFill",rows:[11,17],repeat:3},rim:{label:"\u7897\u53E3\u82B1\u8FB9",mode:"ring",rows:[11,17],low:.86,high:1.12,count:14}},basin:{center:{label:"\u76C6\u5185\u5E95",mode:"disk",rows:[8,14],high:1.05},outer:{label:"\u76C6\u8EAB\u5916\u58C1",mode:"wall",rows:[3,8],low:-.35,high:.31,span:.6,radius:1.32,pitch:.13,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[3,7],radius:1.37,repeat:14,pitch:.21},innerFill:{label:"\u76C6\u5185\u6EE1\u94FA",mode:"faceFill",rows:[8,14],repeat:4},rim:{label:"\u76C6\u53E3\u82B1\u8FB9",mode:"ring",rows:[8,14],low:1.38,high:1.64,count:24}}};for(let C of Object.keys(i).filter(t)){c[C]={};let R=C==="backpack"?["front","pocket","back"]:C==="phonecase"?["front"]:["front","back"];for(let L of R){let N=C==="notebook"?L==="front"?"\u5C01\u9762":"\u5C01\u5E95":C==="phonecase"?"\u58F3\u80CC":L==="front"?C==="backpack"?"\u4E3B\u5305\u6B63\u9762":"\u6B63\u9762":L==="pocket"?"\u524D\u888B":"\u80CC\u9762";c[C][L]={label:N,mode:"fabric",face:L,repeat:3,pitch:L==="back"&&["pillow","duvet"].includes(C)?-.32:i[C].camera.pitch,yaw:L==="back"?Math.PI+.15:i[C].camera.yaw},c[C][L+"Fill"]={...c[C][L],label:N+"\u6EE1\u94FA",mode:"fabricFill"}}C==="duvet"&&(c[C].border={label:"\u6B63\u9762\u8FB9\u7F18",mode:"fabricBorder",face:"front",repeat:6})}let d=(C,R)=>c[C]?.[R]||Object.values(c[C]||c.cup)[0],m=C=>["wrap","faceFill","fabricFill","fabricBorder"].includes(C.mode),p=(C,R)=>t(C)?(d(C,R?.zone).face||"front")+"Fill":C==="plate"?"innerFill":"outerFill",h=C=>Number.isFinite(C)?Math.max(5,Math.min(100,C)):100;function f(C,R){let L=h(R.coverWidth)/200,N=h(R.coverHeight)/200,k=C.mode==="wrap",J=(R.x||0)/120,V=-(R.y||0)/120,q=(Y,ce)=>Math.max(ce-.5,Math.min(.5-ce,Y));return[k?J:q(J,L),(k?.5:0)+q(V,N),L,N]}function y(C,R){let L=C.vesselPlacement,N=d(C.canvas,L.zone),k=m(N),J=t(C.canvas)?N.face:["wall","disk","back"].includes(N.mode)?L.zone:["faceFill","ring"].includes(N.mode)?"center":C.canvas==="cup"?"body":"outer",V=R==="local"?J:R==="custom"&&k?L.zone:p(C.canvas,L),q=V===L.zone?{vesselPlacement:{...L}}:E(C,V),Y=q.vesselPlacement;return R==="full"&&(Y.coverWidth=100,Y.coverHeight=100),R==="custom"&&!k&&Y.coverWidth==null&&(Y.coverWidth=55,Y.coverHeight=70),q}function g(C,R=100){let L=C.mode==="wrap"?24:10,N=Math.max(40,Math.min(160,R));return Math.round(N<100?C.repeat+(100-N)*(L-C.repeat)/60:1+(160-N)*(C.repeat-1)/60)}function u(C,R){let L=C.mode==="wrap"?24:10,N=Math.max(1,Math.min(L,R));return N<C.repeat?160-(N-1)*60/(C.repeat-1):100-(N-C.repeat)*60/(L-C.repeat)}function S(C,R){let L=g(C,R.scale),N=(R.rotation||0)*Math.PI/180,k=L*Math.cos(N),J=L*Math.sin(N);return C.mode==="wrap"?[Math.round(k),Math.round(J)]:[k,J]}function T(C,R,L){if(C.mode!=="wrap")return 1;let N=Math.hypot(...R);return Math.max(1,Math.round(N*L/(2*Math.PI*C.radius)))/N}let _={white:"#f5f1e6",cream:"#e9ddc6",blue:"#c9dcdf"},w=C=>/^#[0-9a-f]{6}$/i.test(C)?C.toLowerCase():Object.hasOwn(_,C)?_[C]:_.white;function b(C,R){let L=d(C,R?.zone),N=l(C).camera;return{...N,pitch:L.pitch??N.pitch,yaw:(L.yaw??N.yaw)+(L.around?(R?.x||0)*Math.PI/60:0)}}function E(C,R){if(!c[C.canvas]?.[R])throw Error("\u8BE5\u5668\u578B\u6CA1\u6709\u8FD9\u4E2A\u5370\u82B1\u4F4D\u7F6E");let{zones:L={},faces:N={},...k}=C.vesselPlacement,J={...M(C.canvas),...L[R],zone:R},V=d(C.canvas,k.zone).face,q=d(C.canvas,R).face,Y={...N,[V]:k.zone};if(C.canvas==="backpack"){let ce=["front","pocket"].includes(q)?q:V;["front","pocket"].includes(ce)&&delete Y[ce==="front"?"pocket":"front"]}return{vesselPlacement:{...J,zones:{...L,[k.zone]:k},...t(C.canvas)?{faces:Y}:{}},cupCamera:b(C.canvas,J)}}function x(C,R){let L={};for(let[N,k]of Object.entries(R.faces||{}))R.zones?.[k]&&d(C,k).face===N&&(L[N]=R.zones[k]);return L[d(C,R.zone).face]=R,C==="backpack"&&L.front&&L.pocket&&delete L[d(C,R.zone).face==="pocket"?"front":"pocket"],L}let M=C=>({zone:t(C)?"front":C==="cup"?"body":C==="basin"?"outer":"center",x:0,y:0,scale:100,rotation:0});function I(C){C.vesselStates={...C.vesselStates||{},[C.canvas]:{placement:o(C.vesselPlacement||M(C.canvas)),camera:o(C.cupCamera||l(C.canvas).camera),material:o(C.cupMaterial||a(C.canvas))}}}function z(C,R){if(!i[R])throw Error("\u5668\u578B\u5C1A\u672A\u63A5\u5165");let L=o(C.vesselStates||{});L[C.canvas]={placement:o(C.vesselPlacement||M(C.canvas)),camera:o(C.cupCamera||l(C.canvas).camera),material:o(C.cupMaterial||a(C.canvas))};let N=L[R]||{placement:M(R),camera:b(R,M(R)),material:a(R)};return{canvas:R,vesselStates:L,vesselPlacement:o(N.placement),cupCamera:o(N.camera),cupMaterial:o(N.material)}}function D(C,R){let L=l(C).inner;for(let N=1;N<L.length;N++)if(R<=L[N][0]){let[k,J]=L[N-1],[V,q]=L[N];return J+(q-J)*(R-k)/(V-k)}return L.at(-1)[1]}return{data:i,get:l,families:e,surface:t,textile:n,materialShort:s,materialLabel:r,material:a,facePlacements:x,regions:c,region:d,isFill:m,primaryFill:p,coveragePercent:h,fillWindow:f,coverPatch:y,fillCount:g,fillScale:u,fillBasis:S,fillAspect:T,regionCamera:b,zonePatch:E,glazeHex:w,placement:M,remember:I,switchPatch:z,height:D}})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var eh=0,fl=1,th=2;var Ai=1,nh=2,us=3,zt=0,Ht=1,Ot=2,Pn=0,ds=1,pl=2,ml=3,gl=4,ih=5;var Ei=100,sh=101,rh=102,ah=103,oh=104,lh=200,ch=201,hh=202,uh=203,xl=204,_l=205,dh=206,fh=207,ph=208,mh=209,gh=210,xh=211,_h=212,yh=213,vh=214,Wr=0,Xr=1,qr=2,Ki=3,Yr=4,Zr=5,Jr=6,$r=7,yl=0,Mh=1,Sh=2,Mn=0,vl=1,Ml=2,Sl=3,bl=4,wl=5,Tl=6,or=7;var Al=300,ui=301,Ci=302,fs=303,Ta=304,lr=306,Cn=1e3,hn=1001,Kr=1002,Ct=1003,bh=1004;var cr=1005;var ut=1006,Aa=1007;var on=1008;var Zt=1009,El=1010,Cl=1011,ps=1012,Ea=1013,Sn=1014,Jt=1015,Wt=1016,Ca=1017,za=1018,ms=1020,zl=35902,Rl=35899,Il=1021,Pl=1022,$t=1023,zn=1026,di=1027,Ll=1028,Ra=1029,fi=1030,Ia=1031;var Pa=1033,hr=33776,ur=33777,dr=33778,fr=33779,La=35840,Da=35841,Na=35842,Ua=35843,Fa=36196,Ba=37492,Oa=37496,ka=37488,Va=37489,pr=37490,Ga=37491,Ha=37808,Wa=37809,Xa=37810,qa=37811,Ya=37812,Za=37813,Ja=37814,$a=37815,Ka=37816,ja=37817,Qa=37818,eo=37819,to=37820,no=37821,io=36492,so=36494,ro=36495,ao=36283,oo=36284,mr=36285,lo=36286;var Ls=2300,jr=2301,Gr=2302,el=2303,tl=2400,nl=2401,il=2402;var wh=3200;var co=0,Th=1,Zn="",Nt="srgb",Hn="srgb-linear",Ds="linear",ht="srgb";var Hr=7680;var Ah=519,Eh=512,Ch=513,zh=514,ho=515,Rh=516,Ih=517,uo=518,Ph=519,Lh=35044;var Dl="300 es",xn=2e3,ji=2001;function td(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function nd(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Dh(){let i=Ns("canvas");return i.style.display="block",i}var bc={},Qi=null;function Nl(...i){let e="THREE."+i.shift();Qi?Qi("log",e,...i):console.log(e,...i)}function Nh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ne(...i){i=Nh(i);let e="THREE."+i.shift();if(Qi)Qi("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Oe(...i){i=Nh(i);let e="THREE."+i.shift();if(Qi)Qi("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Si(...i){let e=i.join(" ");e in bc||(bc[e]=!0,Ne(...i))}function Uh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Fh={[Wr]:Xr,[qr]:Jr,[Yr]:$r,[Ki]:Zr,[Xr]:Wr,[Jr]:qr,[$r]:Yr,[Zr]:Ki},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wc=1234567,zs=Math.PI/180,es=180/Math.PI;function zi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function Ze(i,e,t){return Math.max(e,Math.min(t,i))}function Ul(i,e){return(i%e+e)%e}function id(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function sd(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function rd(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function ad(i,e=1){return e-Math.abs(Ul(i,e*2)-e)}function od(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function ld(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function cd(i,e){return i+Math.floor(Math.random()*(e-i+1))}function hd(i,e){return i+Math.random()*(e-i)}function ud(i){return i*(.5-Math.random())}function dd(i){i!==void 0&&(wc=i);let e=wc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function fd(i){return i*zs}function pd(i){return i*es}function md(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function gd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function xd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function _d(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),d=a((e+n)/2),m=r((e-n)/2),p=a((e-n)/2),h=r((n-e)/2),f=a((n-e)/2);switch(s){case"XYX":i.set(o*d,l*m,l*p,o*c);break;case"YZY":i.set(l*p,o*d,l*m,o*c);break;case"ZXZ":i.set(l*m,l*p,o*d,o*c);break;case"XZX":i.set(o*d,l*f,l*h,o*c);break;case"YXY":i.set(l*h,o*d,l*f,o*c);break;case"ZYZ":i.set(l*f,l*h,o*d,o*c);break;default:Ne("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ji(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var fo={DEG2RAD:zs,RAD2DEG:es,generateUUID:zi,clamp:Ze,euclideanModulo:Ul,mapLinear:id,inverseLerp:sd,lerp:Rs,damp:rd,pingpong:ad,smoothstep:od,smootherstep:ld,randInt:cd,randFloat:hd,randFloatSpread:ud,seededRandom:dd,degToRad:fd,radToDeg:pd,isPowerOfTwo:md,ceilPowerOfTwo:gd,floorPowerOfTwo:xd,setQuaternionFromProperEuler:_d,normalize:Gt,denormalize:Ji},Gl=class Gl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Gl.prototype.isVector2=!0;var re=Gl,In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],d=n[s+2],m=n[s+3],p=r[a+0],h=r[a+1],f=r[a+2],y=r[a+3];if(m!==y||l!==p||c!==h||d!==f){let g=l*p+c*h+d*f+m*y;g<0&&(p=-p,h=-h,f=-f,y=-y,g=-g);let u=1-o;if(g<.9995){let S=Math.acos(g),T=Math.sin(S);u=Math.sin(u*S)/T,o=Math.sin(o*S)/T,l=l*u+p*o,c=c*u+h*o,d=d*u+f*o,m=m*u+y*o}else{l=l*u+p*o,c=c*u+h*o,d=d*u+f*o,m=m*u+y*o;let S=1/Math.sqrt(l*l+c*c+d*d+m*m);l*=S,c*=S,d*=S,m*=S}}e[t]=l,e[t+1]=c,e[t+2]=d,e[t+3]=m}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],d=n[s+3],m=r[a],p=r[a+1],h=r[a+2],f=r[a+3];return e[t]=o*f+d*m+l*h-c*p,e[t+1]=l*f+d*p+c*m-o*h,e[t+2]=c*f+d*h+o*p-l*m,e[t+3]=d*f-o*m-l*p-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),d=o(s/2),m=o(r/2),p=l(n/2),h=l(s/2),f=l(r/2);switch(a){case"XYZ":this._x=p*d*m+c*h*f,this._y=c*h*m-p*d*f,this._z=c*d*f+p*h*m,this._w=c*d*m-p*h*f;break;case"YXZ":this._x=p*d*m+c*h*f,this._y=c*h*m-p*d*f,this._z=c*d*f-p*h*m,this._w=c*d*m+p*h*f;break;case"ZXY":this._x=p*d*m-c*h*f,this._y=c*h*m+p*d*f,this._z=c*d*f+p*h*m,this._w=c*d*m-p*h*f;break;case"ZYX":this._x=p*d*m-c*h*f,this._y=c*h*m+p*d*f,this._z=c*d*f-p*h*m,this._w=c*d*m+p*h*f;break;case"YZX":this._x=p*d*m+c*h*f,this._y=c*h*m+p*d*f,this._z=c*d*f-p*h*m,this._w=c*d*m-p*h*f;break;case"XZY":this._x=p*d*m-c*h*f,this._y=c*h*m-p*d*f,this._z=c*d*f+p*h*m,this._w=c*d*m+p*h*f;break;default:Ne("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],d=t[6],m=t[10],p=n+o+m;if(p>0){let h=.5/Math.sqrt(p+1);this._w=.25/h,this._x=(d-l)*h,this._y=(r-c)*h,this._z=(a-s)*h}else if(n>o&&n>m){let h=2*Math.sqrt(1+n-o-m);this._w=(d-l)/h,this._x=.25*h,this._y=(s+a)/h,this._z=(r+c)/h}else if(o>m){let h=2*Math.sqrt(1+o-n-m);this._w=(r-c)/h,this._x=(s+a)/h,this._y=.25*h,this._z=(l+d)/h}else{let h=2*Math.sqrt(1+m-n-o);this._w=(a-s)/h,this._x=(r+c)/h,this._y=(l+d)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ze(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,d=t._w;return this._x=n*d+a*o+s*c-r*l,this._y=s*d+a*l+r*o-n*c,this._z=r*d+a*c+n*l-s*o,this._w=a*d-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),d=Math.sin(c);l=Math.sin(l*c)/d,t=Math.sin(t*c)/d,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Hl=class Hl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Tc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Tc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),d=2*(o*t-r*s),m=2*(r*n-a*t);return this.x=t+l*c+a*m-o*d,this.y=n+l*d+o*c-r*m,this.z=s+l*m+r*d-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ro.copy(this).projectOnVector(e),this.sub(Ro)}reflect(e){return this.sub(Ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Ze(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hl.prototype.isVector3=!0;var F=Hl,Ro=new F,Tc=new In,Wl=class Wl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let d=this.elements;return d[0]=e,d[1]=s,d[2]=o,d[3]=t,d[4]=r,d[5]=l,d[6]=n,d[7]=a,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],d=n[4],m=n[7],p=n[2],h=n[5],f=n[8],y=s[0],g=s[3],u=s[6],S=s[1],T=s[4],_=s[7],w=s[2],b=s[5],E=s[8];return r[0]=a*y+o*S+l*w,r[3]=a*g+o*T+l*b,r[6]=a*u+o*_+l*E,r[1]=c*y+d*S+m*w,r[4]=c*g+d*T+m*b,r[7]=c*u+d*_+m*E,r[2]=p*y+h*S+f*w,r[5]=p*g+h*T+f*b,r[8]=p*u+h*_+f*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8];return t*a*d-t*o*c-n*r*d+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=d*a-o*c,p=o*l-d*r,h=c*r-a*l,f=t*m+n*p+s*h;if(f===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/f;return e[0]=m*y,e[1]=(s*c-d*n)*y,e[2]=(o*n-s*a)*y,e[3]=p*y,e[4]=(d*t-s*l)*y,e[5]=(s*r-o*t)*y,e[6]=h*y,e[7]=(n*l-c*t)*y,e[8]=(a*t-n*r)*y,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Io.makeScale(e,t)),this}rotate(e){return Si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Io.makeRotation(-e)),this}translate(e,t){return Si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Io.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Wl.prototype.isMatrix3=!0;var He=Wl,Io=new He,Ac=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ec=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yd(){let i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ht&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ht&&(s.r=$i(s.r),s.g=$i(s.g),s.b=$i(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Ac,fromXYZ:Ec,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:ht,toXYZ:Ac,fromXYZ:Ec,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var nt=yd();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function $i(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ui,Qr=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Ui===void 0&&(Ui=Ns("canvas")),Ui.width=e.width,Ui.height=e.height;let s=Ui.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Ui}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ne("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},vd=0,ts=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:vd++}),this.uuid=zi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Po(s[a].image)):r.push(Po(s[a]))}else r=Po(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Po(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ne("Texture: Unable to serialize Texture."),{})}var Md=0,Lo=new F,Rt=class i extends Rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,s=hn,r=ut,a=on,o=$t,l=Zt,c=i.DEFAULT_ANISOTROPY,d=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Md++}),this.uuid=zi(),this.name="",this.source=new ts(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new re(0,0),this.repeat=new re(1,1),this.center=new re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Lo).x}get height(){return this.source.getSize(Lo).y}get depth(){return this.source.getSize(Lo).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ne(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Al)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cn:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case Kr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cn:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case Kr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=Al;Rt.DEFAULT_ANISOTROPY=1;var Xl=class Xl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],d=l[4],m=l[8],p=l[1],h=l[5],f=l[9],y=l[2],g=l[6],u=l[10];if(Math.abs(d-p)<.01&&Math.abs(m-y)<.01&&Math.abs(f-g)<.01){if(Math.abs(d+p)<.1&&Math.abs(m+y)<.1&&Math.abs(f+g)<.1&&Math.abs(c+h+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,_=(h+1)/2,w=(u+1)/2,b=(d+p)/4,E=(m+y)/4,x=(f+g)/4;return T>_&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=b/n,r=E/n):_>w?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=x/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=x/r),this.set(n,s,r,t),this}let S=Math.sqrt((g-f)*(g-f)+(m-y)*(m-y)+(p-d)*(p-d));return Math.abs(S)<.001&&(S=1),this.x=(g-f)/S,this.y=(m-y)/S,this.z=(p-d)/S,this.w=Math.acos((c+h+u-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ze(this.x,e.x,t.x),this.y=Ze(this.y,e.y,t.y),this.z=Ze(this.z,e.z,t.z),this.w=Ze(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ze(this.x,e,t),this.y=Ze(this.y,e,t),this.z=Ze(this.z,e,t),this.w=Ze(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ze(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Xl.prototype.isVector4=!0;var rt=Xl,ea=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ut,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new rt(0,0,e,t),this.scissorTest=!1,this.viewport=new rt(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Rt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:ut,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ts(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends ea{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Us=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var ta=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Ct,this.minFilter=Ct,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var wa=class wa{constructor(e,t,n,s,r,a,o,l,c,d,m,p,h,f,y,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,d,m,p,h,f,y,g)}set(e,t,n,s,r,a,o,l,c,d,m,p,h,f,y,g){let u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=s,u[1]=r,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=d,u[10]=m,u[14]=p,u[3]=h,u[7]=f,u[11]=y,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wa().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Fi.setFromMatrixColumn(e,0).length(),r=1/Fi.setFromMatrixColumn(e,1).length(),a=1/Fi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),d=Math.cos(r),m=Math.sin(r);if(e.order==="XYZ"){let p=a*d,h=a*m,f=o*d,y=o*m;t[0]=l*d,t[4]=-l*m,t[8]=c,t[1]=h+f*c,t[5]=p-y*c,t[9]=-o*l,t[2]=y-p*c,t[6]=f+h*c,t[10]=a*l}else if(e.order==="YXZ"){let p=l*d,h=l*m,f=c*d,y=c*m;t[0]=p+y*o,t[4]=f*o-h,t[8]=a*c,t[1]=a*m,t[5]=a*d,t[9]=-o,t[2]=h*o-f,t[6]=y+p*o,t[10]=a*l}else if(e.order==="ZXY"){let p=l*d,h=l*m,f=c*d,y=c*m;t[0]=p-y*o,t[4]=-a*m,t[8]=f+h*o,t[1]=h+f*o,t[5]=a*d,t[9]=y-p*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let p=a*d,h=a*m,f=o*d,y=o*m;t[0]=l*d,t[4]=f*c-h,t[8]=p*c+y,t[1]=l*m,t[5]=y*c+p,t[9]=h*c-f,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let p=a*l,h=a*c,f=o*l,y=o*c;t[0]=l*d,t[4]=y-p*m,t[8]=f*m+h,t[1]=m,t[5]=a*d,t[9]=-o*d,t[2]=-c*d,t[6]=h*m+f,t[10]=p-y*m}else if(e.order==="XZY"){let p=a*l,h=a*c,f=o*l,y=o*c;t[0]=l*d,t[4]=-m,t[8]=c*d,t[1]=p*m+y,t[5]=a*d,t[9]=h*m-f,t[2]=f*m-h,t[6]=o*d,t[10]=y*m+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Sd,e,bd)}lookAt(e,t,n){let s=this.elements;return Qt.subVectors(e,t),Qt.lengthSq()===0&&(Qt.z=1),Qt.normalize(),jn.crossVectors(n,Qt),jn.lengthSq()===0&&(Math.abs(n.z)===1?Qt.x+=1e-4:Qt.z+=1e-4,Qt.normalize(),jn.crossVectors(n,Qt)),jn.normalize(),Mr.crossVectors(Qt,jn),s[0]=jn.x,s[4]=Mr.x,s[8]=Qt.x,s[1]=jn.y,s[5]=Mr.y,s[9]=Qt.y,s[2]=jn.z,s[6]=Mr.z,s[10]=Qt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],d=n[1],m=n[5],p=n[9],h=n[13],f=n[2],y=n[6],g=n[10],u=n[14],S=n[3],T=n[7],_=n[11],w=n[15],b=s[0],E=s[4],x=s[8],M=s[12],I=s[1],z=s[5],D=s[9],C=s[13],R=s[2],L=s[6],N=s[10],k=s[14],J=s[3],V=s[7],q=s[11],Y=s[15];return r[0]=a*b+o*I+l*R+c*J,r[4]=a*E+o*z+l*L+c*V,r[8]=a*x+o*D+l*N+c*q,r[12]=a*M+o*C+l*k+c*Y,r[1]=d*b+m*I+p*R+h*J,r[5]=d*E+m*z+p*L+h*V,r[9]=d*x+m*D+p*N+h*q,r[13]=d*M+m*C+p*k+h*Y,r[2]=f*b+y*I+g*R+u*J,r[6]=f*E+y*z+g*L+u*V,r[10]=f*x+y*D+g*N+u*q,r[14]=f*M+y*C+g*k+u*Y,r[3]=S*b+T*I+_*R+w*J,r[7]=S*E+T*z+_*L+w*V,r[11]=S*x+T*D+_*N+w*q,r[15]=S*M+T*C+_*k+w*Y,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],d=e[2],m=e[6],p=e[10],h=e[14],f=e[3],y=e[7],g=e[11],u=e[15],S=l*h-c*p,T=o*h-c*m,_=o*p-l*m,w=a*h-c*d,b=a*p-l*d,E=a*m-o*d;return t*(y*S-g*T+u*_)-n*(f*S-g*w+u*b)+s*(f*T-y*w+u*E)-r*(f*_-y*b+g*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],d=e[10];return t*(a*d-o*c)-n*(r*d-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],d=e[8],m=e[9],p=e[10],h=e[11],f=e[12],y=e[13],g=e[14],u=e[15],S=t*o-n*a,T=t*l-s*a,_=t*c-r*a,w=n*l-s*o,b=n*c-r*o,E=s*c-r*l,x=d*y-m*f,M=d*g-p*f,I=d*u-h*f,z=m*g-p*y,D=m*u-h*y,C=p*u-h*g,R=S*C-T*D+_*z+w*I-b*M+E*x;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let L=1/R;return e[0]=(o*C-l*D+c*z)*L,e[1]=(s*D-n*C-r*z)*L,e[2]=(y*E-g*b+u*w)*L,e[3]=(p*b-m*E-h*w)*L,e[4]=(l*I-a*C-c*M)*L,e[5]=(t*C-s*I+r*M)*L,e[6]=(g*_-f*E-u*T)*L,e[7]=(d*E-p*_+h*T)*L,e[8]=(a*D-o*I+c*x)*L,e[9]=(n*I-t*D-r*x)*L,e[10]=(f*b-y*_+u*S)*L,e[11]=(m*_-d*b-h*S)*L,e[12]=(o*M-a*z-l*x)*L,e[13]=(t*z-n*M+s*x)*L,e[14]=(y*T-f*w-g*S)*L,e[15]=(d*w-m*T+p*S)*L,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,d=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,d*o+n,d*l-s*a,0,c*l-s*o,d*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,d=a+a,m=o+o,p=r*c,h=r*d,f=r*m,y=a*d,g=a*m,u=o*m,S=l*c,T=l*d,_=l*m,w=n.x,b=n.y,E=n.z;return s[0]=(1-(y+u))*w,s[1]=(h+_)*w,s[2]=(f-T)*w,s[3]=0,s[4]=(h-_)*b,s[5]=(1-(p+u))*b,s[6]=(g+S)*b,s[7]=0,s[8]=(f+T)*E,s[9]=(g-S)*E,s[10]=(1-(p+y))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Fi.set(s[0],s[1],s[2]).length(),o=Fi.set(s[4],s[5],s[6]).length(),l=Fi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,d=1/o,m=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=d,fn.elements[5]*=d,fn.elements[6]*=d,fn.elements[8]*=m,fn.elements[9]*=m,fn.elements[10]*=m,t.setFromRotationMatrix(fn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=xn,l=!1){let c=this.elements,d=2*r/(t-e),m=2*r/(n-s),p=(t+e)/(t-e),h=(n+s)/(n-s),f,y;if(l)f=r/(a-r),y=a*r/(a-r);else if(o===xn)f=-(a+r)/(a-r),y=-2*a*r/(a-r);else if(o===ji)f=-a/(a-r),y=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=m,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=xn,l=!1){let c=this.elements,d=2/(t-e),m=2/(n-s),p=-(t+e)/(t-e),h=-(n+s)/(n-s),f,y;if(l)f=1/(a-r),y=a/(a-r);else if(o===xn)f=-2/(a-r),y=-(a+r)/(a-r);else if(o===ji)f=-1/(a-r),y=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=d,c[4]=0,c[8]=0,c[12]=p,c[1]=0,c[5]=m,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=f,c[14]=y,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};wa.prototype.isMatrix4=!0;var pt=wa,Fi=new F,fn=new pt,Sd=new F(0,0,0),bd=new F(1,1,1),jn=new F,Mr=new F,Qt=new F,Cc=new pt,zc=new In,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],d=s[9],m=s[2],p=s[6],h=s[10];switch(t){case"XYZ":this._y=Math.asin(Ze(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-d,h),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(p,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ze(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-m,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ze(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-m,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ze(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(p,h),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ze(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-m,r)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-Ze(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(p,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-d,h),this._y=0);break;default:Ne("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Cc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Cc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return zc.setFromEuler(this),this.setFromQuaternion(zc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var ns=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},wd=0,Rc=new F,Bi=new In,Nn=new pt,Sr=new F,ws=new F,Td=new F,Ad=new In,Ic=new F(1,0,0),Pc=new F(0,1,0),Lc=new F(0,0,1),Dc={type:"added"},Ed={type:"removed"},Oi={type:"childadded",child:null},Do={type:"childremoved",child:null},Bt=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Wn,n=new In,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new pt},normalMatrix:{value:new He}}),this.matrix=new pt,this.matrixWorld=new pt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ns,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Ic,e)}rotateY(e){return this.rotateOnAxis(Pc,e)}rotateZ(e){return this.rotateOnAxis(Lc,e)}translateOnAxis(e,t){return Rc.copy(e).applyQuaternion(this.quaternion),this.position.add(Rc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ic,e)}translateY(e){return this.translateOnAxis(Pc,e)}translateZ(e){return this.translateOnAxis(Lc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Sr.copy(e):Sr.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ws,Sr,this.up):Nn.lookAt(Sr,ws,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Oe("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Dc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null):Oe("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ed),Do.child=e,this.dispatchEvent(Do),Do.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Dc),Oi.child=e,this.dispatchEvent(Oi),Oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Td),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Ad,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){let m=l[c];r(e.shapes,m)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),d=a(e.images),m=a(e.shapes),p=a(e.skeletons),h=a(e.animations),f=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),d.length>0&&(n.images=d),m.length>0&&(n.shapes=m),p.length>0&&(n.skeletons=p),h.length>0&&(n.animations=h),f.length>0&&(n.nodes=f)}return n.object=s,n;function a(o){let l=[];for(let c in o){let d=o[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Bt.DEFAULT_UP=new F(0,1,0);Bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Cd={type:"move"},is=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let y of e.hand.values()){let g=t.getJointPose(y,n),u=this._getHandJoint(c,y);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}let d=c.joints["index-finger-tip"],m=c.joints["thumb-tip"],p=d.position.distanceTo(m.position),h=.02,f=.005;c.inputState.pinching&&p>h+f?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&p<=h-f&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Cd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Bh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Qn={h:0,s:0,l:0},br={h:0,s:0,l:0};function No(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Xe=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,nt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=nt.workingColorSpace){return this.r=e,this.g=t,this.b=n,nt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=nt.workingColorSpace){if(e=Ul(e,1),t=Ze(t,0,1),n=Ze(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=No(a,r,e+1/3),this.g=No(a,r,e),this.b=No(a,r,e-1/3)}return nt.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Ne("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ne("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ne("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Bh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ne("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=$i(e.r),this.g=$i(e.g),this.b=$i(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return nt.workingToColorSpace(Dt.copy(this),e),Math.round(Ze(Dt.r*255,0,255))*65536+Math.round(Ze(Dt.g*255,0,255))*256+Math.round(Ze(Dt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=nt.workingColorSpace){nt.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,d=(o+a)/2;if(o===a)l=0,c=0;else{let m=a-o;switch(c=d<=.5?m/(a+o):m/(2-a-o),a){case n:l=(s-r)/m+(s<r?6:0);break;case s:l=(r-n)/m+2;break;case r:l=(n-s)/m+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,t=nt.workingColorSpace){return nt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Nt){nt.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Qn),this.setHSL(Qn.h+e,Qn.s+t,Qn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Qn),e.getHSL(br);let n=Rs(Qn.h,br.h,t),s=Rs(Qn.s,br.s,t),r=Rs(Qn.l,br.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Xe;Xe.NAMES=Bh;var Fs=class extends Bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},pn=new F,Un=new F,Uo=new F,Fn=new F,ki=new F,Vi=new F,Nc=new F,Fo=new F,Bo=new F,Oo=new F,ko=new rt,Vo=new rt,Go=new rt,ii=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),pn.subVectors(e,t),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){pn.subVectors(s,t),Un.subVectors(n,t),Uo.subVectors(e,t);let a=pn.dot(pn),o=pn.dot(Un),l=pn.dot(Uo),c=Un.dot(Un),d=Un.dot(Uo),m=a*c-o*o;if(m===0)return r.set(0,0,0),null;let p=1/m,h=(c*l-o*d)*p,f=(a*d-o*l)*p;return r.set(1-h-f,f,h)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ko.setScalar(0),Vo.setScalar(0),Go.setScalar(0),ko.fromBufferAttribute(e,t),Vo.fromBufferAttribute(e,n),Go.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ko,r.x),a.addScaledVector(Vo,r.y),a.addScaledVector(Go,r.z),a}static isFrontFacing(e,t,n,s){return pn.subVectors(n,t),Un.subVectors(e,t),pn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),pn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;ki.subVectors(s,n),Vi.subVectors(r,n),Fo.subVectors(e,n);let l=ki.dot(Fo),c=Vi.dot(Fo);if(l<=0&&c<=0)return t.copy(n);Bo.subVectors(e,s);let d=ki.dot(Bo),m=Vi.dot(Bo);if(d>=0&&m<=d)return t.copy(s);let p=l*m-d*c;if(p<=0&&l>=0&&d<=0)return a=l/(l-d),t.copy(n).addScaledVector(ki,a);Oo.subVectors(e,r);let h=ki.dot(Oo),f=Vi.dot(Oo);if(f>=0&&h<=f)return t.copy(r);let y=h*c-l*f;if(y<=0&&c>=0&&f<=0)return o=c/(c-f),t.copy(n).addScaledVector(Vi,o);let g=d*f-h*m;if(g<=0&&m-d>=0&&h-f>=0)return Nc.subVectors(r,s),o=(m-d)/(m-d+(h-f)),t.copy(s).addScaledVector(Nc,o);let u=1/(g+y+p);return a=y*u,o=p*u,t.copy(n).addScaledVector(ki,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Yt=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(mn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(mn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(e.matrixWorld),this.expandByPoint(mn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),wr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),wr.copy(n.boundingBox)),wr.applyMatrix4(e.matrixWorld),this.union(wr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,mn),mn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Tr.subVectors(this.max,Ts),Gi.subVectors(e.a,Ts),Hi.subVectors(e.b,Ts),Wi.subVectors(e.c,Ts),ei.subVectors(Hi,Gi),ti.subVectors(Wi,Hi),_i.subVectors(Gi,Wi);let t=[0,-ei.z,ei.y,0,-ti.z,ti.y,0,-_i.z,_i.y,ei.z,0,-ei.x,ti.z,0,-ti.x,_i.z,0,-_i.x,-ei.y,ei.x,0,-ti.y,ti.x,0,-_i.y,_i.x,0];return!Ho(t,Gi,Hi,Wi,Tr)||(t=[1,0,0,0,1,0,0,0,1],!Ho(t,Gi,Hi,Wi,Tr))?!1:(Ar.crossVectors(ei,ti),t=[Ar.x,Ar.y,Ar.z],Ho(t,Gi,Hi,Wi,Tr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(mn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Bn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Bn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Bn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Bn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Bn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Bn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Bn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Bn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Bn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Bn=[new F,new F,new F,new F,new F,new F,new F,new F],mn=new F,wr=new Yt,Gi=new F,Hi=new F,Wi=new F,ei=new F,ti=new F,_i=new F,Ts=new F,Tr=new F,Ar=new F,yi=new F;function Ho(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),d=n.dot(yi);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>o)return!1}return!0}var Vn=zd();function zd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,d=0;for(;(c&8388608)===0;)c<<=1,d-=8388608;c&=-8388609,d+=947912704,r[l]=c|d}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Rd(i){Math.abs(i)>65504&&Ne("DataUtils.toHalfFloat(): Value out of range."),i=Ze(i,-65504,65504),Vn.floatView[0]=i;let e=Vn.uint32View[0],t=e>>23&511;return Vn.baseTable[t]+((e&8388607)>>Vn.shiftTable[t])}function Id(i){let e=i>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[e]+(i&1023)]+Vn.exponentTable[e],Vn.floatView[0]}var si=class{static toHalfFloat(e){return Rd(e)}static fromHalfFloat(e){return Id(e)}},bt=new F,Er=new re,Pd=0,Ft=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Pd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lh,this.updateRanges=[],this.gpuType=Jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Er.fromBufferAttribute(this,t),Er.applyMatrix3(e),this.setXY(t,Er.x,Er.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ji(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ji(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ji(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ji(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Bs=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Os=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ke=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Ld=new Yt,As=new F,Wo=new F,ss=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ld.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(Wo)),this.expandByPoint(As.copy(e.center).sub(Wo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Dd=0,cn=new pt,Xo=new Bt,Xi=new F,en=new Yt,Es=new Yt,At=new F,at=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Dd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(td(e)?Os:Bs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new He().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Xo.lookAt(e),Xo.updateMatrix(),this.applyMatrix4(Xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xi).negate(),this.translate(Xi.x,Xi.y,Xi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ne("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yt);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];en.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,en.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,en.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(en.min),this.boundingBox.expandByPoint(en.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Oe('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ss);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Oe("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(en.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(en.min,Es.min),en.expandByPoint(At),At.addVectors(en.max,Es.max),en.expandByPoint(At)):(en.expandByPoint(Es.min),en.expandByPoint(Es.max))}en.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,d=o.count;c<d;c++)At.fromBufferAttribute(o,c),l&&(Xi.fromBufferAttribute(e,c),At.add(Xi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Oe('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Oe("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<n.count;x++)o[x]=new F,l[x]=new F;let c=new F,d=new F,m=new F,p=new re,h=new re,f=new re,y=new F,g=new F;function u(x,M,I){c.fromBufferAttribute(n,x),d.fromBufferAttribute(n,M),m.fromBufferAttribute(n,I),p.fromBufferAttribute(r,x),h.fromBufferAttribute(r,M),f.fromBufferAttribute(r,I),d.sub(c),m.sub(c),h.sub(p),f.sub(p);let z=1/(h.x*f.y-f.x*h.y);isFinite(z)&&(y.copy(d).multiplyScalar(f.y).addScaledVector(m,-h.y).multiplyScalar(z),g.copy(m).multiplyScalar(h.x).addScaledVector(d,-f.x).multiplyScalar(z),o[x].add(y),o[M].add(y),o[I].add(y),l[x].add(g),l[M].add(g),l[I].add(g))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let x=0,M=S.length;x<M;++x){let I=S[x],z=I.start,D=I.count;for(let C=z,R=z+D;C<R;C+=3)u(e.getX(C+0),e.getX(C+1),e.getX(C+2))}let T=new F,_=new F,w=new F,b=new F;function E(x){w.fromBufferAttribute(s,x),b.copy(w);let M=o[x];T.copy(M),T.sub(w.multiplyScalar(w.dot(M))).normalize(),_.crossVectors(b,M);let z=_.dot(l[x])<0?-1:1;a.setXYZW(x,T.x,T.y,T.z,z)}for(let x=0,M=S.length;x<M;++x){let I=S[x],z=I.start,D=I.count;for(let C=z,R=z+D;C<R;C+=3)E(e.getX(C+0)),E(e.getX(C+1)),E(e.getX(C+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let p=0,h=n.count;p<h;p++)n.setXYZ(p,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,d=new F,m=new F;if(e)for(let p=0,h=e.count;p<h;p+=3){let f=e.getX(p+0),y=e.getX(p+1),g=e.getX(p+2);s.fromBufferAttribute(t,f),r.fromBufferAttribute(t,y),a.fromBufferAttribute(t,g),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),o.fromBufferAttribute(n,f),l.fromBufferAttribute(n,y),c.fromBufferAttribute(n,g),o.add(d),l.add(d),c.add(d),n.setXYZ(f,o.x,o.y,o.z),n.setXYZ(y,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let p=0,h=t.count;p<h;p+=3)s.fromBufferAttribute(t,p+0),r.fromBufferAttribute(t,p+1),a.fromBufferAttribute(t,p+2),d.subVectors(a,r),m.subVectors(s,r),d.cross(m),n.setXYZ(p+0,d.x,d.y,d.z),n.setXYZ(p+1,d.x,d.y,d.z),n.setXYZ(p+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,d=o.itemSize,m=o.normalized,p=new c.constructor(l.length*d),h=0,f=0;for(let y=0,g=l.length;y<g;y++){o.isInterleavedBufferAttribute?h=l[y]*o.data.stride+o.offset:h=l[y]*d;for(let u=0;u<d;u++)p[f++]=c[h++]}return new Ft(p,d,m)}if(this.index===null)return Ne("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let d=0,m=c.length;d<m;d++){let p=c[d],h=e(p,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],d=[];for(let m=0,p=c.length;m<p;m++){let h=c[m];d.push(h.toJSON(e.data))}d.length>0&&(s[l]=d,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let d=s[c];this.setAttribute(c,d.clone(t))}let r=e.morphAttributes;for(let c in r){let d=[],m=r[c];for(let p=0,h=m.length;p<h;p++)d.push(m[p].clone(t));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,d=a.length;c<d;c++){let m=a[c];this.addGroup(m.start,m.count,m.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var qo=new F,Nd=new F,Ud=new He,gn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=qo.subVectors(n,t).cross(Nd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(qo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Ud.getNormalMatrix(e),s=this.coplanarPoint(qo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Fd=0,Xn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Fd++}),this.uuid=zi(),this.name="",this.type="Material",this.blending=ds,this.side=zt,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xl,this.blendDst=_l,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Ki,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ne(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ne(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new gn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new re().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new re().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var On=new F,Yo=new F,Cr=new F,zr=new F,ks=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=On.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,t),On.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Yo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),zr.copy(this.origin).sub(Yo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=zr.dot(this.direction),l=-zr.dot(Cr),c=zr.lengthSq(),d=Math.abs(1-a*a),m,p,h,f;if(d>0)if(m=a*l-o,p=a*o-l,f=r*d,m>=0)if(p>=-f)if(p<=f){let y=1/d;m*=y,p*=y,h=m*(m+a*p+2*o)+p*(a*m+p+2*l)+c}else p=r,m=Math.max(0,-(a*p+o)),h=-m*m+p*(p+2*l)+c;else p=-r,m=Math.max(0,-(a*p+o)),h=-m*m+p*(p+2*l)+c;else p<=-f?(m=Math.max(0,-(-a*r+o)),p=m>0?-r:Math.min(Math.max(-r,-l),r),h=-m*m+p*(p+2*l)+c):p<=f?(m=0,p=Math.min(Math.max(-r,-l),r),h=p*(p+2*l)+c):(m=Math.max(0,-(a*r+o)),p=m>0?r:Math.min(Math.max(-r,-l),r),h=-m*m+p*(p+2*l)+c);else p=a>0?-r:r,m=Math.max(0,-(a*p+o)),h=-m*m+p*(p+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,m),s&&s.copy(Yo).addScaledVector(Cr,p),h}intersectSphere(e,t){if(e.radius<0)return null;On.subVectors(e.center,this.origin);let n=On.dot(this.direction),s=On.dot(On)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,d=1/this.direction.y,m=1/this.direction.z,p=this.origin;return c>=0?(n=(e.min.x-p.x)*c,s=(e.max.x-p.x)*c):(n=(e.max.x-p.x)*c,s=(e.min.x-p.x)*c),d>=0?(r=(e.min.y-p.y)*d,a=(e.max.y-p.y)*d):(r=(e.max.y-p.y)*d,a=(e.min.y-p.y)*d),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),m>=0?(o=(e.min.z-p.z)*m,l=(e.max.z-p.z)*m):(o=(e.max.z-p.z)*m,l=(e.min.z-p.z)*m),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,d=o.z,m=e.x-a.x,p=e.y-a.y,h=e.z-a.z,f=t.x-a.x,y=t.y-a.y,g=t.z-a.z,u=n.x-a.x,S=n.y-a.y,T=n.z-a.z,_=Math.abs(l),w=Math.abs(c),b=Math.abs(d),E,x,M,I,z,D,C,R,L,N,k,J;if(_>=w&&_>=b?(M=l,D=m,L=f,J=u,l>=0?(E=c,x=d,I=p,z=h,C=y,R=g,N=S,k=T):(E=d,x=c,I=h,z=p,C=g,R=y,N=T,k=S)):w>=b?(M=c,D=p,L=y,J=S,c>=0?(E=d,x=l,I=h,z=m,C=g,R=f,N=T,k=u):(E=l,x=d,I=m,z=h,C=f,R=g,N=u,k=T)):(M=d,D=h,L=g,J=T,d>=0?(E=l,x=c,I=m,z=p,C=f,R=y,N=u,k=S):(E=c,x=l,I=p,z=m,C=y,R=f,N=S,k=u)),M===0)return null;let V=E/M,q=x/M,Y=1/M,ce=I-V*D,de=z-q*D,Ke=C-V*L,Ye=R-q*L,tt=N-V*J,$=k-q*J,te=tt*Ye-$*Ke,_e=ce*$-de*tt,Ue=Ke*de-Ye*ce;if(s){if(te<0||_e<0||Ue<0)return null}else if((te<0||_e<0||Ue<0)&&(te>0||_e>0||Ue>0))return null;let ie=te+_e+Ue;if(ie===0)return null;let Ae=Y*(te*D+_e*L+Ue*J);return(ie>0?Ae<0:Ae>0)?null:this.at(Ae/ie,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=yl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Uc=new pt,vi=new ks,Rr=new ss,Fc=new F,Ir=new F,Pr=new F,Lr=new F,Zo=new F,Dr=new F,Bc=new F,Nr=new F,Ge=class extends Bt{constructor(e=new at,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Dr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let d=o[l],m=r[l];d!==0&&(Zo.fromBufferAttribute(m,e),a?Dr.addScaledVector(Zo,d):Dr.addScaledVector(Zo.sub(t),d))}t.add(Dr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Rr.copy(n.boundingSphere),Rr.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Rr.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Rr,Fc)===null||vi.origin.distanceToSquared(Fc)>(e.far-e.near)**2))&&(Uc.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Uc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,d=r.attributes.uv1,m=r.attributes.normal,p=r.groups,h=r.drawRange;if(o!==null)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let g=p[f],u=a[g.materialIndex],S=Math.max(g.start,h.start),T=Math.min(o.count,Math.min(g.start+g.count,h.start+h.count));for(let _=S,w=T;_<w;_+=3){let b=o.getX(_),E=o.getX(_+1),x=o.getX(_+2);s=Ur(this,u,e,n,c,d,m,b,E,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,h.start),y=Math.min(o.count,h.start+h.count);for(let g=f,u=y;g<u;g+=3){let S=o.getX(g),T=o.getX(g+1),_=o.getX(g+2);s=Ur(this,a,e,n,c,d,m,S,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let f=0,y=p.length;f<y;f++){let g=p[f],u=a[g.materialIndex],S=Math.max(g.start,h.start),T=Math.min(l.count,Math.min(g.start+g.count,h.start+h.count));for(let _=S,w=T;_<w;_+=3){let b=_,E=_+1,x=_+2;s=Ur(this,u,e,n,c,d,m,b,E,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{let f=Math.max(0,h.start),y=Math.min(l.count,h.start+h.count);for(let g=f,u=y;g<u;g+=3){let S=g,T=g+1,_=g+2;s=Ur(this,a,e,n,c,d,m,S,T,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}};function Bd(i,e,t,n,s,r,a,o){let l;if(e.side===Ht?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===zt,o),l===null)return null;Nr.copy(o),Nr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Nr);return c<t.near||c>t.far?null:{distance:c,point:Nr.clone(),object:i}}function Ur(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Ir),i.getVertexPosition(l,Pr),i.getVertexPosition(c,Lr);let d=Bd(i,e,t,n,Ir,Pr,Lr,Bc);if(d){let m=new F;ii.getBarycoord(Bc,Ir,Pr,Lr,m),s&&(d.uv=ii.getInterpolatedAttribute(s,o,l,c,m,new re)),r&&(d.uv1=ii.getInterpolatedAttribute(r,o,l,c,m,new re)),a&&(d.normal=ii.getInterpolatedAttribute(a,o,l,c,m,new F),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));let p={a:o,b:l,c,normal:new F,materialIndex:0};ii.getNormal(Ir,Pr,Lr,p.normal),d.face=p,d.barycoord=m}return d}var un=class extends Rt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=Ct,d=Ct,m,p){super(null,a,o,l,c,d,s,r,m,p),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=new ss,Od=new re(.5,.5),Fr=new F,rs=class{constructor(e=new gn,t=new gn,n=new gn,s=new gn,r=new gn,a=new gn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=xn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],d=r[4],m=r[5],p=r[6],h=r[7],f=r[8],y=r[9],g=r[10],u=r[11],S=r[12],T=r[13],_=r[14],w=r[15];if(s[0].setComponents(c-a,h-d,u-f,w-S).normalize(),s[1].setComponents(c+a,h+d,u+f,w+S).normalize(),s[2].setComponents(c+o,h+m,u+y,w+T).normalize(),s[3].setComponents(c-o,h-m,u-y,w-T).normalize(),n)s[4].setComponents(l,p,g,_).normalize(),s[5].setComponents(c-l,h-p,u-g,w-_).normalize();else if(s[4].setComponents(c-l,h-p,u-g,w-_).normalize(),t===xn)s[5].setComponents(c+l,h+p,u+g,w+_).normalize();else if(t===ji)s[5].setComponents(l,p,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);let t=Od.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Fr.x=s.normal.x>0?e.max.x:e.min.x,Fr.y=s.normal.y>0?e.max.y:e.min.y,Fr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Fr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends Rt{constructor(e=[],t=ui,n,s,r,a,o,l,c,d){super(e,t,n,s,r,a,o,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gs=class extends Rt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ri=class extends Rt{constructor(e,t,n=Sn,s,r,a,o=Ct,l=Ct,c,d=zn,m=1){if(d!==zn&&d!==di)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let p={width:e,height:t,depth:m};super(p,s,r,a,o,l,d,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ts(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},na=class extends ri{constructor(e,t=Sn,n=ui,s,r,a=Ct,o=Ct,l,c=zn){let d={width:e,height:e,depth:1},m=[d,d,d,d,d,d];super(e,e,t,n,s,r,a,o,l,c),this.image=m,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hs=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},_n=class i extends at{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],d=[],m=[],p=0,h=0;f("z","y","x",-1,-1,n,t,e,a,r,0),f("z","y","x",1,-1,n,t,-e,a,r,1),f("x","z","y",1,1,e,n,t,s,a,2),f("x","z","y",1,-1,e,n,-t,s,a,3),f("x","y","z",1,-1,e,t,n,s,r,4),f("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(m,2));function f(y,g,u,S,T,_,w,b,E,x,M){let I=_/E,z=w/x,D=_/2,C=w/2,R=b/2,L=E+1,N=x+1,k=0,J=0,V=new F;for(let q=0;q<N;q++){let Y=q*z-C;for(let ce=0;ce<L;ce++){let de=ce*I-D;V[y]=de*S,V[g]=Y*T,V[u]=R,c.push(V.x,V.y,V.z),V[y]=0,V[g]=0,V[u]=b>0?1:-1,d.push(V.x,V.y,V.z),m.push(ce/E),m.push(1-q/x),k+=1}}for(let q=0;q<x;q++)for(let Y=0;Y<E;Y++){let ce=p+Y+L*q,de=p+Y+L*(q+1),Ke=p+(Y+1)+L*(q+1),Ye=p+(Y+1)+L*q;l.push(ce,de,Ye),l.push(de,Ke,Ye),J+=6}o.addGroup(h,J,M),h+=J,p+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var tn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ne("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let d=n[s],p=n[s+1]-d,h=(a-d)/p;return(s+h)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new re:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new pt;for(let h=0;h<=e;h++){let f=h/e;s[h]=this.getTangentAt(f,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,d=Math.abs(s[0].x),m=Math.abs(s[0].y),p=Math.abs(s[0].z);d<=c&&(c=d,n.set(1,0,0)),m<=c&&(c=m,n.set(0,1,0)),p<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let h=1;h<=e;h++){if(r[h]=r[h-1].clone(),a[h]=a[h-1].clone(),o.crossVectors(s[h-1],s[h]),o.length()>Number.EPSILON){o.normalize();let f=Math.acos(Ze(s[h-1].dot(s[h]),-1,1));r[h].applyMatrix4(l.makeRotationAxis(o,f))}a[h].crossVectors(s[h],r[h])}if(t===!0){let h=Math.acos(Ze(r[0].dot(r[e]),-1,1));h/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(h=-h);for(let f=1;f<=e;f++)r[f].applyMatrix4(l.makeRotationAxis(s[f],h*f)),a[f].crossVectors(s[f],r[f])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},as=class extends tn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new re){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let d=Math.cos(this.aRotation),m=Math.sin(this.aRotation),p=l-this.aX,h=c-this.aY;l=p*d-h*m+this.aX,c=p*m+h*d+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ia=class extends as{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Fl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,d,m){let p=(a-r)/c-(o-r)/(c+d)+(o-a)/d,h=(o-a)/d-(l-a)/(d+m)+(l-o)/m;p*=d,h*=d,s(a,o,p,h)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Oc=new F,kc=new F,Jo=new Fl,$o=new Fl,Ko=new Fl,nn=class extends tn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,d;this.closed||o>0?c=s[(o-1)%r]:(kc.subVectors(s[0],s[1]).add(s[0]),c=kc);let m=s[o%r],p=s[(o+1)%r];if(this.closed||o+2<r?d=s[(o+2)%r]:(Oc.subVectors(s[r-1],s[r-2]).add(s[r-1]),d=Oc),this.curveType==="centripetal"||this.curveType==="chordal"){let h=this.curveType==="chordal"?.5:.25,f=Math.pow(c.distanceToSquared(m),h),y=Math.pow(m.distanceToSquared(p),h),g=Math.pow(p.distanceToSquared(d),h);y<1e-4&&(y=1),f<1e-4&&(f=y),g<1e-4&&(g=y),Jo.initNonuniformCatmullRom(c.x,m.x,p.x,d.x,f,y,g),$o.initNonuniformCatmullRom(c.y,m.y,p.y,d.y,f,y,g),Ko.initNonuniformCatmullRom(c.z,m.z,p.z,d.z,f,y,g)}else this.curveType==="catmullrom"&&(Jo.initCatmullRom(c.x,m.x,p.x,d.x,this.tension),$o.initCatmullRom(c.y,m.y,p.y,d.y,this.tension),Ko.initCatmullRom(c.z,m.z,p.z,d.z,this.tension));return n.set(Jo.calc(l),$o.calc(l),Ko.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Vc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function kd(i,e){let t=1-i;return t*t*e}function Vd(i,e){return 2*(1-i)*i*e}function Gd(i,e){return i*i*e}function Is(i,e,t,n){return kd(i,e)+Vd(i,t)+Gd(i,n)}function Hd(i,e){let t=1-i;return t*t*t*e}function Wd(i,e){let t=1-i;return 3*t*t*i*e}function Xd(i,e){return 3*(1-i)*i*i*e}function qd(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return Hd(i,e)+Wd(i,t)+Xd(i,n)+qd(i,s)}var Ws=class extends tn{constructor(e=new re,t=new re,n=new re,s=new re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},sa=class extends tn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y),Ps(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xs=class extends tn{constructor(e=new re,t=new re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ra=class extends tn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qs=class extends tn{constructor(e=new re,t=new re,n=new re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new re){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ys=class extends tn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y),Is(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zs=class extends tn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new re){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],d=s[a>s.length-2?s.length-1:a+1],m=s[a>s.length-3?s.length-1:a+2];return n.set(Vc(o,l.x,c.x,d.x,m.x),Vc(o,l.y,c.y,d.y,m.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new re().fromArray(s))}return this}},aa=Object.freeze({__proto__:null,ArcCurve:ia,CatmullRomCurve3:nn,CubicBezierCurve:Ws,CubicBezierCurve3:sa,EllipseCurve:as,LineCurve:Xs,LineCurve3:ra,QuadraticBezierCurve:qs,QuadraticBezierCurve3:Ys,SplineCurve:Zs}),oa=class extends tn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new aa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let d=l[c];n&&n.equals(d)||(t.push(d),n=d)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new aa[s.type]().fromJSON(s))}return this}},sn=class extends oa{constructor(e){super(),this.type="Path",this.currentPoint=new re,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xs(this.currentPoint.clone(),new re(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qs(this.currentPoint.clone(),new re(e,t),new re(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ws(this.currentPoint.clone(),new re(e,t),new re(n,s),new re(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,d=this.currentPoint.y;return this.absellipse(e+c,t+d,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new as(e,t,n,s,r,a,o,l);if(this.curves.length>0){let m=c.getPoint(0);m.equals(this.currentPoint)||this.lineTo(m.x,m.y)}this.curves.push(c);let d=c.getPoint(1);return this.currentPoint.copy(d),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qn=class extends sn{constructor(e){super(e),this.uuid=zi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new sn().fromJSON(s))}return this}};function Yd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Oh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=jd(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let d=o,m=l;for(let p=t;p<s;p+=t){let h=i[p],f=i[p+1];h<o&&(o=h),f<l&&(l=f),h>d&&(d=h),f>m&&(m=f)}c=Math.max(d-o,m-l),c=c!==0?32767/c:0}return Js(r,a,t,o,l,c,0),a}function Oh(i,e,t,n,s){let r;if(s===hf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Gc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Gc(a/n|0,i[a],i[a+1],r);return r&&os(r,r.next)&&(Ks(r),r=r.next),r}function wi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(os(t,t.next)||vt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(i,e,t,n,s,r,a){if(!i)return;!a&&r&&sf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?Jd(i,n,s,r):Zd(i)){e.push(l.i,i.i,c.i),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=$d(wi(i),e),Js(i,e,t,n,s,r,2)):a===2&&Kd(i,e,t,n,s,r):Js(wi(i),e,t,n,s,r,1);break}}}function Zd(i){let e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,d=Math.min(s,r,a),m=Math.min(o,l,c),p=Math.max(s,r,a),h=Math.max(o,l,c),f=n.next;for(;f!==e;){if(f.x>=d&&f.x<=p&&f.y>=m&&f.y<=h&&Cs(s,o,r,l,a,c,f.x,f.y)&&vt(f.prev,f,f.next)>=0)return!1;f=f.next}return!0}function Jd(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,d=s.y,m=r.y,p=a.y,h=Math.min(o,l,c),f=Math.min(d,m,p),y=Math.max(o,l,c),g=Math.max(d,m,p),u=sl(h,f,e,t,n),S=sl(y,g,e,t,n),T=i.prevZ,_=i.nextZ;for(;T&&T.z>=u&&_&&_.z<=S;){if(T.x>=h&&T.x<=y&&T.y>=f&&T.y<=g&&T!==s&&T!==a&&Cs(o,d,l,m,c,p,T.x,T.y)&&vt(T.prev,T,T.next)>=0||(T=T.prevZ,_.x>=h&&_.x<=y&&_.y>=f&&_.y<=g&&_!==s&&_!==a&&Cs(o,d,l,m,c,p,_.x,_.y)&&vt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;T&&T.z>=u;){if(T.x>=h&&T.x<=y&&T.y>=f&&T.y<=g&&T!==s&&T!==a&&Cs(o,d,l,m,c,p,T.x,T.y)&&vt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;_&&_.z<=S;){if(_.x>=h&&_.x<=y&&_.y>=f&&_.y<=g&&_!==s&&_!==a&&Cs(o,d,l,m,c,p,_.x,_.y)&&vt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function $d(i,e){let t=i;do{let n=t.prev,s=t.next.next;!os(n,s)&&Vh(n,t,t.next,s)&&$s(n,s)&&$s(s,n)&&(e.push(n.i,t.i,s.i),Ks(t),Ks(t.next),t=i=s),t=t.next}while(t!==i);return wi(t)}function Kd(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&of(a,o)){let l=Gh(a,o);a=wi(a,a.next),l=wi(l,l.next),Js(a,e,t,n,s,r,0),Js(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function jd(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Oh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(af(c))}s.sort(Qd);for(let r=0;r<s.length;r++)t=ef(s[r],t);return t}function Qd(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function ef(i,e){let t=tf(i,e);if(!t)return e;let n=Gh(t,i);return wi(n,n.next),wi(t,t.next)}function tf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(os(i,t))return t;do{if(os(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let m=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(m<=n&&m>r&&(r=m,a=t.x<t.next.x?t:t.next,m===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,d=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&kh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let m=Math.abs(s-t.y)/(n-t.x);$s(t,i)&&(m<d||m===d&&(t.x>a.x||t.x===a.x&&nf(a,t)))&&(a=t,d=m)}t=t.next}while(t!==o);return a}function nf(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function sf(i,e,t,n){let s=i;do s.z===0&&(s.z=sl(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,rf(s)}function rf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function sl(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function af(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function kh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function Cs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&kh(i,e,t,n,s,r,a,o)}function of(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!lf(i,e)&&($s(i,e)&&$s(e,i)&&cf(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||os(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function os(i,e){return i.x===e.x&&i.y===e.y}function Vh(i,e,t,n){let s=Or(vt(i,e,t)),r=Or(vt(i,e,n)),a=Or(vt(t,n,i)),o=Or(vt(t,n,e));return!!(s!==r&&a!==o||s===0&&Br(i,t,e)||r===0&&Br(i,n,e)||a===0&&Br(t,i,n)||o===0&&Br(t,e,n))}function Br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Or(i){return i>0?1:i<0?-1:0}function lf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Vh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $s(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function cf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Gh(i,e){let t=rl(i.i,i.x,i.y),n=rl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Gc(i,e,t,n){let s=rl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function rl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function hf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var al=class{static triangulate(e,t,n=2){return Yd(e,t,n)}},En=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Hc(e),Wc(n,e);let a=e.length;t.forEach(Hc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,Wc(n,t[l]);let o=al.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Hc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Wc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var ai=class i extends at{constructor(e=new qn([new re(.5,.5),new re(-.5,.5),new re(-.5,-.5),new re(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new ke(s,3)),this.setAttribute("uv",new ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,d=t.steps!==void 0?t.steps:1,m=t.depth!==void 0?t.depth:1,p=t.bevelEnabled!==void 0?t.bevelEnabled:!0,h=t.bevelThickness!==void 0?t.bevelThickness:.2,f=t.bevelSize!==void 0?t.bevelSize:h-.1,y=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3,u=t.extrudePath,S=t.UVGenerator!==void 0?t.UVGenerator:uf,T,_=!1,w,b,E,x;if(u){T=u.getSpacedPoints(d),_=!0,p=!1;let Q=u.isCatmullRomCurve3?u.closed:!1;w=u.computeFrenetFrames(d,Q),b=new F,E=new F,x=new F}p||(g=0,h=0,f=0,y=0);let M=o.extractPoints(c),I=M.shape,z=M.holes;if(!En.isClockWise(I)){I=I.reverse();for(let Q=0,ae=z.length;Q<ae;Q++){let oe=z[Q];En.isClockWise(oe)&&(z[Q]=oe.reverse())}}function C(Q){let oe=10000000000000001e-36,le=Q[0];for(let fe=1;fe<=Q.length;fe++){let Fe=fe%Q.length,De=Q[Fe],Ve=De.x-le.x,We=De.y-le.y,U=Ve*Ve+We*We,ot=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(le.x),Math.abs(le.y)),Qe=oe*ot*ot;if(U<=Qe){Q.splice(Fe,1),fe--;continue}le=De}}C(I),z.forEach(C);let R=z.length,L=I;for(let Q=0;Q<R;Q++){let ae=z[Q];I=I.concat(ae)}function N(Q,ae,oe){return ae||Oe("ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ae,oe)}let k=I.length;function J(Q,ae,oe){let le,fe,Fe,De=Q.x-ae.x,Ve=Q.y-ae.y,We=oe.x-Q.x,U=oe.y-Q.y,ot=De*De+Ve*Ve,Qe=De*U-Ve*We;if(Math.abs(Qe)>Number.EPSILON){let P=Math.sqrt(ot),v=Math.sqrt(We*We+U*U),G=ae.x-Ve/P,X=ae.y+De/P,K=oe.x-U/v,he=oe.y+We/v,ue=((K-G)*U-(he-X)*We)/(De*U-Ve*We);le=G+De*ue-Q.x,fe=X+Ve*ue-Q.y;let j=le*le+fe*fe;if(j<=2)return new re(le,fe);Fe=Math.sqrt(j/2)}else{let P=!1;De>Number.EPSILON?We>Number.EPSILON&&(P=!0):De<-Number.EPSILON?We<-Number.EPSILON&&(P=!0):Math.sign(Ve)===Math.sign(U)&&(P=!0),P?(le=-Ve,fe=De,Fe=Math.sqrt(ot)):(le=De,fe=Ve,Fe=Math.sqrt(ot/2))}return new re(le/Fe,fe/Fe)}let V=[];for(let Q=0,ae=L.length,oe=ae-1,le=Q+1;Q<ae;Q++,oe++,le++)oe===ae&&(oe=0),le===ae&&(le=0),V[Q]=J(L[Q],L[oe],L[le]);let q=[],Y,ce=V.concat();for(let Q=0,ae=R;Q<ae;Q++){let oe=z[Q];Y=[];for(let le=0,fe=oe.length,Fe=fe-1,De=le+1;le<fe;le++,Fe++,De++)Fe===fe&&(Fe=0),De===fe&&(De=0),Y[le]=J(oe[le],oe[Fe],oe[De]);q.push(Y),ce=ce.concat(Y)}let de;if(g===0)de=En.triangulateShape(L,z);else{let Q=[],ae=[];for(let oe=0;oe<g;oe++){let le=oe/g,fe=h*Math.cos(le*Math.PI/2),Fe=f*Math.sin(le*Math.PI/2)+y;for(let De=0,Ve=L.length;De<Ve;De++){let We=N(L[De],V[De],Fe);_e(We.x,We.y,-fe),le===0&&Q.push(We)}for(let De=0,Ve=R;De<Ve;De++){let We=z[De];Y=q[De];let U=[];for(let ot=0,Qe=We.length;ot<Qe;ot++){let P=N(We[ot],Y[ot],Fe);_e(P.x,P.y,-fe),le===0&&U.push(P)}le===0&&ae.push(U)}}de=En.triangulateShape(Q,ae)}let Ke=de.length,Ye=f+y;for(let Q=0;Q<k;Q++){let ae=p?N(I[Q],ce[Q],Ye):I[Q];_?(E.copy(w.normals[0]).multiplyScalar(ae.x),b.copy(w.binormals[0]).multiplyScalar(ae.y),x.copy(T[0]).add(E).add(b),_e(x.x,x.y,x.z)):_e(ae.x,ae.y,0)}for(let Q=1;Q<=d;Q++)for(let ae=0;ae<k;ae++){let oe=p?N(I[ae],ce[ae],Ye):I[ae];_?(E.copy(w.normals[Q]).multiplyScalar(oe.x),b.copy(w.binormals[Q]).multiplyScalar(oe.y),x.copy(T[Q]).add(E).add(b),_e(x.x,x.y,x.z)):_e(oe.x,oe.y,m/d*Q)}for(let Q=g-1;Q>=0;Q--){let ae=Q/g,oe=h*Math.cos(ae*Math.PI/2),le=f*Math.sin(ae*Math.PI/2)+y;for(let fe=0,Fe=L.length;fe<Fe;fe++){let De=N(L[fe],V[fe],le);_e(De.x,De.y,m+oe)}for(let fe=0,Fe=z.length;fe<Fe;fe++){let De=z[fe];Y=q[fe];for(let Ve=0,We=De.length;Ve<We;Ve++){let U=N(De[Ve],Y[Ve],le);_?_e(U.x,U.y+T[d-1].y,T[d-1].x+oe):_e(U.x,U.y,m+oe)}}}tt(),$();function tt(){let Q=s.length/3;if(p){let ae=0,oe=k*ae;for(let le=0;le<Ke;le++){let fe=de[le];Ue(fe[2]+oe,fe[1]+oe,fe[0]+oe)}ae=d+g*2,oe=k*ae;for(let le=0;le<Ke;le++){let fe=de[le];Ue(fe[0]+oe,fe[1]+oe,fe[2]+oe)}}else{for(let ae=0;ae<Ke;ae++){let oe=de[ae];Ue(oe[2],oe[1],oe[0])}for(let ae=0;ae<Ke;ae++){let oe=de[ae];Ue(oe[0]+k*d,oe[1]+k*d,oe[2]+k*d)}}n.addGroup(Q,s.length/3-Q,0)}function $(){let Q=s.length/3,ae=0;te(L,ae),ae+=L.length;for(let oe=0,le=z.length;oe<le;oe++){let fe=z[oe];te(fe,ae),ae+=fe.length}n.addGroup(Q,s.length/3-Q,1)}function te(Q,ae){let oe=Q.length;for(;--oe>=0;){let le=oe,fe=oe-1;fe<0&&(fe=Q.length-1);for(let Fe=0,De=d+g*2;Fe<De;Fe++){let Ve=k*Fe,We=k*(Fe+1),U=ae+le+Ve,ot=ae+fe+Ve,Qe=ae+fe+We,P=ae+le+We;ie(U,ot,Qe,P)}}}function _e(Q,ae,oe){l.push(Q),l.push(ae),l.push(oe)}function Ue(Q,ae,oe){Ae(Q),Ae(ae),Ae(oe);let le=s.length/3,fe=S.generateTopUV(n,s,le-3,le-2,le-1);je(fe[0]),je(fe[1]),je(fe[2])}function ie(Q,ae,oe,le){Ae(Q),Ae(ae),Ae(le),Ae(ae),Ae(oe),Ae(le);let fe=s.length/3,Fe=S.generateSideWallUV(n,s,fe-6,fe-3,fe-2,fe-1);je(Fe[0]),je(Fe[1]),je(Fe[3]),je(Fe[1]),je(Fe[2]),je(Fe[3])}function Ae(Q){s.push(l[Q*3+0]),s.push(l[Q*3+1]),s.push(l[Q*3+2])}function je(Q){r.push(Q.x),r.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return df(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new aa[s.type]().fromJSON(s)),new i(n,e.options)}},uf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],d=e[s*3+1];return[new re(r,a),new re(o,l),new re(c,d)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],d=e[n*3+1],m=e[n*3+2],p=e[s*3],h=e[s*3+1],f=e[s*3+2],y=e[r*3],g=e[r*3+1],u=e[r*3+2];return Math.abs(o-d)<Math.abs(a-c)?[new re(a,1-l),new re(c,1-m),new re(p,1-f),new re(y,1-u)]:[new re(o,1-l),new re(d,1-m),new re(h,1-f),new re(g,1-u)]}};function df(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ti=class i extends at{constructor(e=[new re(0,-.5),new re(.5,0),new re(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Ze(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],d=1/t,m=new F,p=new re,h=new F,f=new F,y=new F,g=0,u=0;for(let S=0;S<=e.length-1;S++)switch(S){case 0:g=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,h.x=u*1,h.y=-g,h.z=u*0,y.copy(h),h.normalize(),l.push(h.x,h.y,h.z);break;case e.length-1:l.push(y.x,y.y,y.z);break;default:g=e[S+1].x-e[S].x,u=e[S+1].y-e[S].y,h.x=u*1,h.y=-g,h.z=u*0,f.copy(h),h.x+=y.x,h.y+=y.y,h.z+=y.z,h.normalize(),l.push(h.x,h.y,h.z),y.copy(f)}for(let S=0;S<=t;S++){let T=n+S*d*s,_=Math.sin(T),w=Math.cos(T);for(let b=0;b<=e.length-1;b++){m.x=e[b].x*_,m.y=e[b].y,m.z=e[b].x*w,a.push(m.x,m.y,m.z),p.x=S/t,p.y=b/(e.length-1),o.push(p.x,p.y);let E=l[3*b+0]*_,x=l[3*b+1],M=l[3*b+0]*w;c.push(E,x,M)}}for(let S=0;S<t;S++)for(let T=0;T<e.length-1;T++){let _=T+S*e.length,w=_,b=_+e.length,E=_+e.length+1,x=_+1;r.push(w,b,x),r.push(E,x,b)}this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("uv",new ke(o,2)),this.setAttribute("normal",new ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var oi=class i extends at{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,d=l+1,m=e/o,p=t/l,h=[],f=[],y=[],g=[];for(let u=0;u<d;u++){let S=u*p-a;for(let T=0;T<c;T++){let _=T*m-r;f.push(_,-S,0),y.push(0,0,1),g.push(T/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let S=0;S<o;S++){let T=S+c*u,_=S+c*(u+1),w=S+1+c*(u+1),b=S+1+c*u;h.push(T,_,b),h.push(_,w,b)}this.setIndex(h),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var js=class i extends at{constructor(e=new qn([new re(0,.5),new re(-.5,-.5),new re(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let d=0;d<e.length;d++)c(e[d]),this.addGroup(o,l,d),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new ke(s,3)),this.setAttribute("normal",new ke(r,3)),this.setAttribute("uv",new ke(a,2));function c(d){let m=s.length/3,p=d.extractPoints(t),h=p.shape,f=p.holes;En.isClockWise(h)===!1&&(h=h.reverse());for(let g=0,u=f.length;g<u;g++){let S=f[g];En.isClockWise(S)===!0&&(f[g]=S.reverse())}let y=En.triangulateShape(h,f);for(let g=0,u=f.length;g<u;g++){let S=f[g];h=h.concat(S)}for(let g=0,u=h.length;g<u;g++){let S=h[g];s.push(S.x,S.y,0),r.push(0,0,1),a.push(S.x,S.y)}for(let g=0,u=y.length;g<u;g++){let S=y[g],T=S[0]+m,_=S[1]+m,w=S[2]+m;n.push(T,_,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return ff(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function ff(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qs=class i extends at{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,d=[],m=new F,p=new F,h=[],f=[],y=[],g=[];for(let u=0;u<=n;u++){let S=[],T=u/n,_=a+T*o,w=e*Math.cos(_),b=Math.sqrt(e*e-w*w),E=0;u===0&&a===0?E=.5/t:u===n&&l===Math.PI&&(E=-.5/t);for(let x=0;x<=t;x++){let M=x/t,I=s+M*r;m.x=-b*Math.cos(I),m.y=w,m.z=b*Math.sin(I),f.push(m.x,m.y,m.z),p.copy(m).normalize(),y.push(p.x,p.y,p.z),g.push(M+E,1-T),S.push(c++)}d.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){let T=d[u][S+1],_=d[u][S],w=d[u+1][S],b=d[u+1][S+1];(u!==0||a>0)&&h.push(T,_,b),(u!==n-1||l<Math.PI)&&h.push(_,w,b)}this.setIndex(h),this.setAttribute("position",new ke(f,3)),this.setAttribute("normal",new ke(y,3)),this.setAttribute("uv",new ke(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yn=class i extends at{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],d=[],m=[],p=new F,h=new F,f=new F;for(let y=0;y<=n;y++){let g=a+y/n*o;for(let u=0;u<=s;u++){let S=u/s*r;h.x=(e+t*Math.cos(g))*Math.cos(S),h.y=(e+t*Math.cos(g))*Math.sin(S),h.z=t*Math.sin(g),c.push(h.x,h.y,h.z),p.x=e*Math.cos(S),p.y=e*Math.sin(S),f.subVectors(h,p).normalize(),d.push(f.x,f.y,f.z),m.push(u/s),m.push(y/n)}}for(let y=1;y<=n;y++)for(let g=1;g<=s;g++){let u=(s+1)*y+g-1,S=(s+1)*(y-1)+g-1,T=(s+1)*(y-1)+g,_=(s+1)*y+g;l.push(u,S,_),l.push(S,T,_)}this.setIndex(l),this.setAttribute("position",new ke(c,3)),this.setAttribute("normal",new ke(d,3)),this.setAttribute("uv",new ke(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var yn=class i extends at{constructor(e=new Ys(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new re,d=new F,m=[],p=[],h=[],f=[];y(),this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(p,3)),this.setAttribute("uv",new ke(h,2));function y(){for(let T=0;T<t;T++)g(T);g(r===!1?t:0),S(),u()}function g(T){d=e.getPointAt(T/t,d);let _=a.normals[T],w=a.binormals[T];for(let b=0;b<=s;b++){let E=b/s*Math.PI*2,x=Math.sin(E),M=-Math.cos(E);l.x=M*_.x+x*w.x,l.y=M*_.y+x*w.y,l.z=M*_.z+x*w.z,l.normalize(),p.push(l.x,l.y,l.z),o.x=d.x+n*l.x,o.y=d.y+n*l.y,o.z=d.z+n*l.z,m.push(o.x,o.y,o.z)}}function u(){for(let T=1;T<=t;T++)for(let _=1;_<=s;_++){let w=(s+1)*(T-1)+(_-1),b=(s+1)*T+(_-1),E=(s+1)*T+_,x=(s+1)*(T-1)+_;f.push(w,b,x),f.push(b,E,x)}}function S(){for(let T=0;T<=t;T++)for(let _=0;_<=s;_++)c.x=T/t,c.y=_/s,h.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new aa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var er=class extends Xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Xe(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Xc(s))s.isRenderTargetTexture?(Ne("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Xc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let s in n)e[s]=n[s]}return e}function Xc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function pf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:nt.workingColorSpace}var Hh={clone:Ri,merge:kt},mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mf,this.fragmentShader=gf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=pf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(s.value);break;case"v2":this.uniforms[n].value=new re().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new rt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new He().fromArray(s.value);break;case"m4":this.uniforms[n].value=new pt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},la=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vn=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=co,this.normalScale=new re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},It=class extends vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ze(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ca=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ha=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function jo(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ua=class extends li{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:tl,endingEnd:tl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case nl:r=e,o=2*t-n;break;case il:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case nl:a=e,l=2*n-t;break;case il:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,d=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*d,this._offsetNext=a*d}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this._offsetPrev,m=this._offsetNext,p=this._weightPrev,h=this._weightNext,f=(n-t)/(s-t),y=f*f,g=y*f,u=-p*g+2*p*y-p*f,S=(1+p)*g+(-1.5-2*p)*y+(-.5+p)*f+1,T=(-1-h)*g+(1.5+h)*y+.5*f,_=h*g-h*y;for(let w=0;w!==o;++w)r[w]=u*a[d+w]+S*a[c+w]+T*a[l+w]+_*a[m+w];return r}},da=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=(n-t)/(s-t),m=1-d;for(let p=0;p!==o;++p)r[p]=a[c+p]*m+a[l+p]*d;return r}},fa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},pa=class extends li{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,d=this.inTangents,m=this.outTangents;if(!d||!m){let f=(n-t)/(s-t),y=1-f;for(let g=0;g!==o;++g)r[g]=a[c+g]*y+a[l+g]*f;return r}let p=o*2,h=e-1;for(let f=0;f!==o;++f){let y=a[c+f],g=a[l+f],u=h*p+f*2,S=m[u],T=m[u+1],_=e*p+f*2,w=d[_],b=d[_+1],E=_f(n,t,S,w,s);r[f]=Wh(E,y,T,b,g)}return r}};function Wh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function xf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function _f(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Wh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=xf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qi(t,this.TimeBufferType),this.values=qi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qi(e.times,Array),values:qi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),jo(e.settings)&&(n.settings={inTangents:qi(e.settings.inTangents,Array),outTangents:qi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ua(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new pa(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case jr:t=this.InterpolantFactoryMethodLinear;break;case Gr:t=this.InterpolantFactoryMethodSmooth;break;case el:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ne("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return jr;case this.InterpolantFactoryMethodSmooth:return Gr;case this.InterpolantFactoryMethodBezier:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;jo(this.settings)&&(qc(this.settings.inTangents,e),qc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Oe("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Oe("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Oe("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Oe("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&nd(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Oe("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Gr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],d=e[o+1];if(c!==d&&(o!==1||c!==e[0]))if(s)l=!0;else{let m=o*n,p=m-n,h=m+n;for(let f=0;f!==n;++f){let y=t[m+f];if(y!==t[p+f]||y!==t[h+f]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let m=o*n,p=a*n;for(let h=0;h!==n;++h)t[p+h]=t[m+h]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,jo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function qc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=jr;var ci=class extends an{constructor(e,t,n){super(e,t,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=Ls;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var ma=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ma.prototype.ValueTypeName="color";var ga=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="number";var xa=class extends li{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let d=c+o;c!==d;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},tr=class extends an{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new xa(this.times,this.values,this.getValueSize(),e)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends an{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ls;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var _a=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};_a.prototype.ValueTypeName="vector";var ol={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Yc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Yc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Yc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var ya=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(d){o++,r===!1&&s.onStart!==void 0&&s.onStart(d,a,o),r=!0},this.itemEnd=function(d){a++,s.onProgress!==void 0&&s.onProgress(d,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(d){s.onError!==void 0&&s.onError(d)},this.resolveURL=function(d){return d=d.normalize("NFC"),l?l(d):d},this.setURLModifier=function(d){return l=d,this},this.addHandler=function(d,m){return c.push(d,m),this},this.removeHandler=function(d){let m=c.indexOf(d);return m!==-1&&c.splice(m,2),this},this.getHandler=function(d){for(let m=0,p=c.length;m<p;m+=2){let h=c[m],f=c[m+1];if(h.global&&(h.lastIndex=0),h.test(d))return f}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Xh=new ya,ls=class{constructor(e){this.manager=e!==void 0?e:Xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};ls.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},ll=class extends Error{constructor(e,t){super(e),this.response=t}},va=class extends ls{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=ol.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Ne("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let d=kn[e],m=c.body.getReader(),p=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),h=p?parseInt(p):0,f=h!==0,y=0,g=new ReadableStream({start(u){S();function S(){m.read().then(({done:T,value:_})=>{if(T)u.close();else{y+=_.byteLength;let w=new ProgressEvent("progress",{lengthComputable:f,loaded:y,total:h});for(let b=0,E=d.length;b<E;b++){let x=d[b];x.onProgress&&x.onProgress(w)}u.enqueue(_),S()}},T=>{u.error(T)})}}});return new Response(g)}else throw new ll(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(d=>new DOMParser().parseFromString(d,o));case"json":return c.json();default:if(o==="")return c.text();{let m=/charset="?([^;"\s]*)"?/i.exec(o),p=m&&m[1]?m[1].toLowerCase():void 0,h=new TextDecoder(p);return c.arrayBuffer().then(f=>h.decode(f))}}}).then(c=>{ol.add(`file:${e}`,c);let d=kn[e];delete kn[e];for(let m=0,p=d.length;m<p;m++){let h=d[m];h.onLoad&&h.onLoad(c)}}).catch(c=>{let d=kn[e];if(d===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let m=0,p=d.length;m<p;m++){let h=d[m];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nr=class extends ls{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new un,o=new va(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(d){s!==void 0?s(d):Oe(d);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new un;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:hn,e.wrapT=t.wrapT!==void 0?t.wrapT:hn,e.magFilter=t.magFilter!==void 0?t.magFilter:ut,e.minFilter=t.minFilter!==void 0?t.minFilter:ut,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=on),t.mipmapCount===1&&(e.minFilter=ut),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}};var ir=class extends Bt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sr=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qo=new pt,Zc=new F,Jc=new F,Ma=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new re(512,512),this.mapType=Zt,this.map=null,this.mapPass=null,this.matrix=new pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new rs,this._frameExtents=new re(1,1),this._viewportCount=1,this._viewports=[new rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Zc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Zc),Jc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Jc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===ji||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},kr=new F,Vr=new In,An=new F,rr=class extends Bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new pt,this.projectionMatrix=new pt,this.projectionMatrixInverse=new pt,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(kr,Vr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Vr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(kr,Vr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(kr,Vr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new F,$c=new re,Kc=new re,Ut=class extends rr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=es*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(zs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return es*2*Math.atan(Math.tan(zs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ni.x,ni.y).multiplyScalar(-e/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-e/ni.z)}getViewSize(e,t){return this.getViewBounds(e,$c,Kc),t.subVectors(Kc,$c)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(zs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var cs=class extends rr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=d*this.view.offsetY,l=o-d*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cl=class extends Ma{constructor(){super(new cs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hs=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Bt.DEFAULT_UP),this.updateMatrix(),this.target=new Bt,this.shadow=new cl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Yi=-90,Zi=1,Sa=class extends Bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Yi,Zi,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Yi,Zi,e,t);r.layers=this.layers,this.add(r);let a=new Ut(Yi,Zi,e,t);a.layers=this.layers,this.add(a);let o=new Ut(Yi,Zi,e,t);o.layers=this.layers,this.add(o);let l=new Ut(Yi,Zi,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Yi,Zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===xn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ji)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,d]=this.children,m=e.getRenderTarget(),p=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),f=e.xr.enabled;e.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=y,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(m,p,h),e.xr.enabled=f,n.texture.needsPMREMUpdate=!0}},ba=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Ol="\\[\\]\\.:\\/",yf=new RegExp("["+Ol+"]","g"),kl="[^"+Ol+"]",vf="[^"+Ol.replace("\\.","")+"]",Mf=/((?:WC+[\/:])*)/.source.replace("WC",kl),Sf=/(WCOD+)?/.source.replace("WCOD",vf),bf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",kl),wf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",kl),Tf=new RegExp("^"+Mf+Sf+bf+wf+"$"),Af=["material","materials","bones","map"],hl=class{constructor(e,t,n){let s=n||_t.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},_t=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(yf,"")}static parseTrackName(e){let t=Tf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Af.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ne("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Oe("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Oe("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===c){c=d;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Oe("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Oe("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Oe("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Oe("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Oe("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Oe("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_t.Composite=hl;_t.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_t.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_t.prototype.GetterByBindingType=[_t.prototype._getValue_direct,_t.prototype._getValue_array,_t.prototype._getValue_arrayElement,_t.prototype._getValue_toArray];_t.prototype.SetterByBindingTypeAndVersioning=[[_t.prototype._setValue_direct,_t.prototype._setValue_direct_setNeedsUpdate,_t.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_array,_t.prototype._setValue_array_setNeedsUpdate,_t.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_arrayElement,_t.prototype._setValue_arrayElement_setNeedsUpdate,_t.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_t.prototype._setValue_fromArray,_t.prototype._setValue_fromArray_setNeedsUpdate,_t.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Tx=new Float32Array(1);var jc=new pt,ar=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new ns,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Oe("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return jc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(jc),this}intersectObject(e,t=!0,n=[]){return ul(e,this,n,t),n.sort(Qc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)ul(e[s],this,n,t);return n.sort(Qc),n}};function Qc(i,e){return i.distance-e.distance}function ul(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)ul(r[a],e,t,!0)}}var ql=class ql{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ql.prototype.isMatrix2=!0;var dl=ql;function Vl(i,e,t,n){let s=Ef(n);switch(t){case Il:return i*e;case Ll:return i*e/s.components*s.byteLength;case Ra:return i*e/s.components*s.byteLength;case fi:return i*e*2/s.components*s.byteLength;case Ia:return i*e*2/s.components*s.byteLength;case Pl:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case Pa:return i*e*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Da:case Ua:return Math.max(i,16)*Math.max(e,8)/4;case La:case Na:return Math.max(i,8)*Math.max(e,8)/2;case Fa:case Ba:case ka:case Va:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Oa:case pr:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case qa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Za:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ka:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case to:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case io:case so:case ro:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ao:case oo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mr:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Ef(i){switch(i){case Zt:case El:return{byteLength:1,components:1};case ps:case Cl:case Wt:return{byteLength:2,components:1};case Ca:case za:return{byteLength:2,components:4};case Sn:case Ea:case Jt:return{byteLength:4,components:1};case zl:case Rl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ne("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function fu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function zf(i){let e=new WeakMap;function t(o,l){let c=o.array,d=o.usage,m=c.byteLength,p=i.createBuffer();i.bindBuffer(l,p),i.bufferData(l,c,d),o.onUploadCallback();let h;if(c instanceof Float32Array)h=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=i.HALF_FLOAT:h=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=i.SHORT;else if(c instanceof Uint32Array)h=i.UNSIGNED_INT;else if(c instanceof Int32Array)h=i.INT;else if(c instanceof Int8Array)h=i.BYTE;else if(c instanceof Uint8Array)h=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:p,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:m}}function n(o,l,c){let d=l.array,m=l.updateRanges;if(i.bindBuffer(c,o),m.length===0)i.bufferSubData(c,0,d);else{m.sort((h,f)=>h.start-f.start);let p=0;for(let h=1;h<m.length;h++){let f=m[p],y=m[h];y.start<=f.start+f.count+1?f.count=Math.max(f.count,y.start+y.count-f.start):(++p,m[p]=y)}m.length=p+1;for(let h=0,f=m.length;h<f;h++){let y=m[h];i.bufferSubData(c,y.start*d.BYTES_PER_ELEMENT,d,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let d=e.get(o);(!d||d.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Rf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,If=`#ifdef USE_ALPHAHASH
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
#endif`,Pf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Df=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Nf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Uf=`#ifdef USE_AOMAP
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
#endif`,Ff=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Bf=`#ifdef USE_BATCHING
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
#endif`,Of=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Hf=`#ifdef USE_IRIDESCENCE
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
#endif`,Wf=`#ifdef USE_BUMPMAP
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
#endif`,Xf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,$f=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,jf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Qf=`#define PI 3.141592653589793
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
} // validated`,ep=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tp=`vec3 transformedNormal = objectNormal;
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
#endif`,np=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,sp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ap="gl_FragColor = linearToOutputTexel( gl_FragColor );",op=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lp=`#ifdef USE_ENVMAP
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
#endif`,cp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
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
#endif`,up=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,dp=`#ifdef USE_ENVMAP
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
#endif`,fp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,Sp=`#ifdef USE_ENVMAP
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
#endif`,bp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ep=`PhysicalMaterial material;
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
#endif`,Cp=`uniform sampler2D dfgLUT;
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
}`,zp=`
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
#endif`,Rp=`#if defined( RE_IndirectDiffuse )
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
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Pp=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Lp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Np=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Bp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Op=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,kp=`#if defined( USE_POINTS_UV )
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
#endif`,Vp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jp=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$p=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mm=`float getShadowMask() {
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,_m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ym=`#ifdef USE_SKINNING
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
#endif`,vm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#ifdef USE_TRANSMISSION
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Nm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Um=`#include <common>
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
}`,Fm=`#if DEPTH_PACKING == 3200
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
}`,Bm=`#define DISTANCE
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
}`,Om=`#define DISTANCE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Vm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`uniform float scale;
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
}`,Hm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
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
}`,Zm=`#define MATCAP
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
}`,Jm=`#define MATCAP
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
}`,$m=`#define NORMAL
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
}`,Km=`#define NORMAL
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
}`,jm=`#define PHONG
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
}`,Qm=`#define PHONG
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,$e={alphahash_fragment:Rf,alphahash_pars_fragment:If,alphamap_fragment:Pf,alphamap_pars_fragment:Lf,alphatest_fragment:Df,alphatest_pars_fragment:Nf,aomap_fragment:Uf,aomap_pars_fragment:Ff,batching_pars_vertex:Bf,batching_vertex:Of,begin_vertex:kf,beginnormal_vertex:Vf,bsdfs:Gf,iridescence_fragment:Hf,bumpmap_pars_fragment:Wf,clipping_planes_fragment:Xf,clipping_planes_pars_fragment:qf,clipping_planes_pars_vertex:Yf,clipping_planes_vertex:Zf,color_fragment:Jf,color_pars_fragment:$f,color_pars_vertex:Kf,color_vertex:jf,common:Qf,cube_uv_reflection_fragment:ep,defaultnormal_vertex:tp,displacementmap_pars_vertex:np,displacementmap_vertex:ip,emissivemap_fragment:sp,emissivemap_pars_fragment:rp,colorspace_fragment:ap,colorspace_pars_fragment:op,envmap_fragment:lp,envmap_common_pars_fragment:cp,envmap_pars_fragment:hp,envmap_pars_vertex:up,envmap_physical_pars_fragment:Sp,envmap_vertex:dp,fog_vertex:fp,fog_pars_vertex:pp,fog_fragment:mp,fog_pars_fragment:gp,gradientmap_pars_fragment:xp,lightmap_pars_fragment:_p,lights_lambert_fragment:yp,lights_lambert_pars_fragment:vp,lights_pars_begin:Mp,lights_toon_fragment:bp,lights_toon_pars_fragment:wp,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Ep,lights_physical_pars_fragment:Cp,lights_fragment_begin:zp,lights_fragment_maps:Rp,lights_fragment_end:Ip,lightprobes_pars_fragment:Pp,logdepthbuf_fragment:Lp,logdepthbuf_pars_fragment:Dp,logdepthbuf_pars_vertex:Np,logdepthbuf_vertex:Up,map_fragment:Fp,map_pars_fragment:Bp,map_particle_fragment:Op,map_particle_pars_fragment:kp,metalnessmap_fragment:Vp,metalnessmap_pars_fragment:Gp,morphinstance_vertex:Hp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:Jp,normal_pars_fragment:$p,normal_pars_vertex:Kp,normal_vertex:jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:xm,skinning_vertex:_m,skinnormal_vertex:ym,specularmap_fragment:vm,specularmap_pars_fragment:Mm,tonemapping_fragment:Sm,tonemapping_pars_fragment:bm,transmission_fragment:wm,transmission_pars_fragment:Tm,uv_pars_fragment:Am,uv_pars_vertex:Em,uv_vertex:Cm,worldpos_vertex:zm,background_vert:Rm,background_frag:Im,backgroundCube_vert:Pm,backgroundCube_frag:Lm,cube_vert:Dm,cube_frag:Nm,depth_vert:Um,depth_frag:Fm,distance_vert:Bm,distance_frag:Om,equirect_vert:km,equirect_frag:Vm,linedashed_vert:Gm,linedashed_frag:Hm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:Jm,meshnormal_vert:$m,meshnormal_frag:Km,meshphong_vert:jm,meshphong_frag:Qm,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},ve={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},Dn={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:$e.meshbasic_vert,fragmentShader:$e.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:$e.meshlambert_vert,fragmentShader:$e.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:$e.meshphong_vert,fragmentShader:$e.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Xe(0)}}]),vertexShader:$e.meshtoon_vert,fragmentShader:$e.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:$e.meshmatcap_vert,fragmentShader:$e.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:$e.points_vert,fragmentShader:$e.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$e.linedashed_vert,fragmentShader:$e.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:$e.depth_vert,fragmentShader:$e.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:$e.meshnormal_vert,fragmentShader:$e.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:$e.sprite_vert,fragmentShader:$e.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$e.background_vert,fragmentShader:$e.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:$e.backgroundCube_vert,fragmentShader:$e.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$e.cube_vert,fragmentShader:$e.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$e.equirect_vert,fragmentShader:$e.equirect_frag},distance:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$e.distance_vert,fragmentShader:$e.distance_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:$e.shadow_vert,fragmentShader:$e.shadow_frag}};Dn.physical={uniforms:kt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:$e.meshphysical_vert,fragmentShader:$e.meshphysical_frag};var po={r:0,b:0,g:0},hg=new pt,pu=new He;pu.set(-1,0,0,0,1,0,0,0,1);function ug(i,e,t,n,s,r){let a=new Xe(0),o=s===!0?0:1,l,c,d=null,m=0,p=null;function h(S){let T=S.isScene===!0?S.background:null;if(T&&T.isTexture){let _=S.backgroundBlurriness>0;T=e.get(T,_)}return T}function f(S){let T=!1,_=h(S);_===null?g(a,o):_&&_.isColor&&(g(_,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function y(S,T){let _=h(T);_&&(_.isCubeTexture||_.mapping===lr)?(c===void 0&&(c=new Ge(new _n(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ri(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Ht,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,b,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(T.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(pu),c.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,(d!==_||m!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,d=_,m=_.version,p=i.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new Ge(new oi(2,2),new rn({name:"BackgroundMaterial",uniforms:Ri(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=nt.getTransfer(_.colorSpace)!==ht,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(d!==_||m!==_.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=_,m=_.version,p=i.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function g(S,T){S.getRGB(po,Bl(i)),t.buffers.color.setClear(po.r,po.g,po.b,T,r)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,T=1){a.set(S),o=T,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,g(a,o)},render:f,addToRenderList:y,dispose:u}}function dg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=p(null),r=s,a=!1;function o(z,D,C,R,L){let N=!1,k=m(z,R,C,D);r!==k&&(r=k,c(r.object)),N=h(z,R,C,L),N&&f(z,R,C,L),L!==null&&e.update(L,i.ELEMENT_ARRAY_BUFFER),(N||a)&&(a=!1,_(z,D,C,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(L).buffer))}function l(){return i.createVertexArray()}function c(z){return i.bindVertexArray(z)}function d(z){return i.deleteVertexArray(z)}function m(z,D,C,R){let L=R.wireframe===!0,N=n[D.id];N===void 0&&(N={},n[D.id]=N);let k=z.isInstancedMesh===!0?z.id:0,J=N[k];J===void 0&&(J={},N[k]=J);let V=J[C.id];V===void 0&&(V={},J[C.id]=V);let q=V[L];return q===void 0&&(q=p(l()),V[L]=q),q}function p(z){let D=[],C=[],R=[];for(let L=0;L<t;L++)D[L]=0,C[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:C,attributeDivisors:R,object:z,attributes:{},index:null}}function h(z,D,C,R){let L=r.attributes,N=D.attributes,k=0,J=C.getAttributes();for(let V in J)if(J[V].location>=0){let Y=L[V],ce=N[V];if(ce===void 0&&(V==="instanceMatrix"&&z.instanceMatrix&&(ce=z.instanceMatrix),V==="instanceColor"&&z.instanceColor&&(ce=z.instanceColor)),Y===void 0||Y.attribute!==ce||ce&&Y.data!==ce.data)return!0;k++}return r.attributesNum!==k||r.index!==R}function f(z,D,C,R){let L={},N=D.attributes,k=0,J=C.getAttributes();for(let V in J)if(J[V].location>=0){let Y=N[V];Y===void 0&&(V==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),V==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor));let ce={};ce.attribute=Y,Y&&Y.data&&(ce.data=Y.data),L[V]=ce,k++}r.attributes=L,r.attributesNum=k,r.index=R}function y(){let z=r.newAttributes;for(let D=0,C=z.length;D<C;D++)z[D]=0}function g(z){u(z,0)}function u(z,D){let C=r.newAttributes,R=r.enabledAttributes,L=r.attributeDivisors;C[z]=1,R[z]===0&&(i.enableVertexAttribArray(z),R[z]=1),L[z]!==D&&(i.vertexAttribDivisor(z,D),L[z]=D)}function S(){let z=r.newAttributes,D=r.enabledAttributes;for(let C=0,R=D.length;C<R;C++)D[C]!==z[C]&&(i.disableVertexAttribArray(C),D[C]=0)}function T(z,D,C,R,L,N,k){k===!0?i.vertexAttribIPointer(z,D,C,L,N):i.vertexAttribPointer(z,D,C,R,L,N)}function _(z,D,C,R){y();let L=R.attributes,N=C.getAttributes(),k=D.defaultAttributeValues;for(let J in N){let V=N[J];if(V.location>=0){let q=L[J];if(q===void 0&&(J==="instanceMatrix"&&z.instanceMatrix&&(q=z.instanceMatrix),J==="instanceColor"&&z.instanceColor&&(q=z.instanceColor)),q!==void 0){let Y=q.normalized,ce=q.itemSize,de=e.get(q);if(de===void 0)continue;let Ke=de.buffer,Ye=de.type,tt=de.bytesPerElement,$=Ye===i.INT||Ye===i.UNSIGNED_INT||q.gpuType===Ea;if(q.isInterleavedBufferAttribute){let te=q.data,_e=te.stride,Ue=q.offset;if(te.isInstancedInterleavedBuffer){for(let ie=0;ie<V.locationSize;ie++)u(V.location+ie,te.meshPerAttribute);z.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let ie=0;ie<V.locationSize;ie++)g(V.location+ie);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let ie=0;ie<V.locationSize;ie++)T(V.location+ie,ce/V.locationSize,Ye,Y,_e*tt,(Ue+ce/V.locationSize*ie)*tt,$)}else{if(q.isInstancedBufferAttribute){for(let te=0;te<V.locationSize;te++)u(V.location+te,q.meshPerAttribute);z.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let te=0;te<V.locationSize;te++)g(V.location+te);i.bindBuffer(i.ARRAY_BUFFER,Ke);for(let te=0;te<V.locationSize;te++)T(V.location+te,ce/V.locationSize,Ye,Y,ce*tt,ce/V.locationSize*te*tt,$)}}else if(k!==void 0){let Y=k[J];if(Y!==void 0)switch(Y.length){case 2:i.vertexAttrib2fv(V.location,Y);break;case 3:i.vertexAttrib3fv(V.location,Y);break;case 4:i.vertexAttrib4fv(V.location,Y);break;default:i.vertexAttrib1fv(V.location,Y)}}}}S()}function w(){M();for(let z in n){let D=n[z];for(let C in D){let R=D[C];for(let L in R){let N=R[L];for(let k in N)d(N[k].object),delete N[k];delete R[L]}}delete n[z]}}function b(z){if(n[z.id]===void 0)return;let D=n[z.id];for(let C in D){let R=D[C];for(let L in R){let N=R[L];for(let k in N)d(N[k].object),delete N[k];delete R[L]}}delete n[z.id]}function E(z){for(let D in n){let C=n[D];for(let R in C){let L=C[R];if(L[z.id]===void 0)continue;let N=L[z.id];for(let k in N)d(N[k].object),delete N[k];delete L[z.id]}}}function x(z){for(let D in n){let C=n[D],R=z.isInstancedMesh===!0?z.id:0,L=C[R];if(L!==void 0){for(let N in L){let k=L[N];for(let J in k)d(k[J].object),delete k[J];delete L[N]}delete C[R],Object.keys(C).length===0&&delete n[D]}}}function M(){I(),a=!0,r!==s&&(r=s,c(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:b,releaseStatesOfObject:x,releaseStatesOfProgram:E,initAttributes:y,enableAttribute:g,disableUnusedAttributes:S}}function fg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,d){d!==0&&(i.drawArraysInstanced(n,l,c,d),t.update(c,n,d))}function o(l,c,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,d);let p=0;for(let h=0;h<d;h++)p+=c[h];t.update(p,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function pg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==$t&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let x=E===Wt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Zt&&E!==Jt&&!x&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",d=l(c);d!==c&&(Ne("WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);let m=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&Ne("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),S=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:m,reversedDepthBuffer:p,maxTextures:h,maxVertexTextures:f,maxTextureSize:y,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:S,maxVaryings:T,maxFragmentUniforms:_,maxSamples:w,samples:b}}function mg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new gn,o=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(m,p){let h=m.length!==0||p||n!==0||s;return s=p,n=m.length,h},this.beginShadows=function(){r=!0,d(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(m,p){t=d(m,p,0)},this.setState=function(m,p,h){let f=m.clippingPlanes,y=m.clipIntersection,g=m.clipShadows,u=i.get(m);if(!s||f===null||f.length===0||r&&!g)r?d(null):c();else{let S=r?0:n,T=S*4,_=u.clippingState||null;l.value=_,_=d(f,p,T,h);for(let w=0;w!==T;++w)_[w]=t[w];u.clippingState=_,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function d(m,p,h,f){let y=m!==null?m.length:0,g=null;if(y!==0){if(g=l.value,f!==!0||g===null){let u=h+y*4,S=p.matrixWorldInverse;o.getNormalMatrix(S),(g===null||g.length<u)&&(g=new Float32Array(u));for(let T=0,_=h;T!==y;++T,_+=4)a.copy(m[T]).applyMatrix4(S,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,g}}var xs=4,gg=6,xg=20,_g=256,gr=new cs,qh=new Xe,Yl=null,Zl=0,Jl=0,$l=!1,yg=new F,Ii=new F,ys=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=yg}=r;Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Jh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Zh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Yl,Zl,Jl),this._renderer.xr.enabled=$l,e.scissorTest=!1,gs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ui||e.mapping===Ci?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yl=this._renderer.getRenderTarget(),Zl=this._renderer.getActiveCubeFace(),Jl=this._renderer.getActiveMipmapLevel(),$l=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:ut,minFilter:ut,generateMipmaps:!1,type:Wt,format:$t,colorSpace:Hn,depthBuffer:!1},s=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=vg(r)),this._blurMaterial=Sg(r,e,t),this._ggxMaterial=Mg(r,e,t)}return s}_compileMaterial(e){let t=new Ge(new at,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],m=this._renderer,p=m.autoClear,h=m.toneMapping;m.getClearColor(qh),m.toneMapping=Mn,m.autoClear=!1,m.state.buffers.depth.getReversed()&&(m.setRenderTarget(s),m.clearDepth(),m.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ge(new _n,new bi({name:"PMREM.Background",side:Ht,depthWrite:!1,depthTest:!1})));let y=this._backgroundBox,g=y.material,u=!1,S=e.background;S?S.isColor&&(g.color.copy(S),e.background=null,u=!0):(g.color.copy(qh),u=!0);for(let T=0;T<6;T++){let _=T%3;_===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+d[T],r.y,r.z)):_===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+d[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+d[T]));let w=this._cubeSize;gs(s,_*w,T>2?w:0,w,w),m.setRenderTarget(s),u&&m.render(y,l),m.render(e,l)}m.toneMapping=h,m.autoClear=p,e.background=S}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===ui||e.mapping===Ci;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Jh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Zh());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;gs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),d=t/(this._lodMeshes.length-1),m=Math.sqrt(c*c-d*d),p=c*1.25,h=m*p,{_lodMax:f}=this,y=this._sizeLods[n],g=3*y*(n>f-xs?n-f+xs:0),u=4*(this._cubeSize-y);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=f-t,gs(r,g,u,3*y,2*y),s.setRenderTarget(r),s.render(o,gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=f-n,gs(e,g,u,3*y,2*y),s.setRenderTarget(e),s.render(o,gr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let d=this._sizeLods[s],m=3*d*(s>this._lodMax-xs?s-this._lodMax+xs:0),p=4*(this._cubeSize-d);gs(t,m,p,3*d,2*d),a.setRenderTarget(t),a.render(l,gr)}};function vg(i){let e=[],t=[],n=i,s=i-xs+1+gg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,d=[l,l,c,l,c,c,l,l,c,c,l,c],m=6,p=6,h=3,f=new Float32Array(h*p*m),y=new Float32Array(h*p*m);for(let u=0;u<m;u++){let S=u%3*2/3-1,T=u>2?0:-1,_=[S,T,0,S+2/3,T,0,S+2/3,T+1,0,S,T,0,S+2/3,T+1,0,S,T+1,0];f.set(_,h*p*u);for(let w=0;w<p;w++){let b=d[w*2]*2-1,E=d[w*2+1]*2-1;u===0?Ii.set(1,E,b):u===1?Ii.set(-b,1,-E):u===2?Ii.set(-b,E,1):u===3?Ii.set(-1,E,-b):u===4?Ii.set(-b,-1,E):Ii.set(b,E,-1),Ii.toArray(y,(u*p+w)*h)}}let g=new at;g.setAttribute("position",new Ft(f,h)),g.setAttribute("outputDirection",new Ft(y,h)),t.push(new Ge(g,null)),n>xs&&n--}return{lodMeshes:t,sizeLods:e}}function Yh(i,e,t){let n=new qt(i,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function gs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Mg(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:_g,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Sg(i,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:xg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Zh(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:_o(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Jh(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:_o(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function _o(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var go=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new _n(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ht,blending:Pn});r.uniforms.tEquirect.value=t;let a=new Ge(s,r),o=t.minFilter;return t.minFilter===on&&(t.minFilter=ut),new Sa(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function bg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(p,h=!1){return p==null?null:h?a(p):r(p)}function r(p){if(p&&p.isTexture){let h=p.mapping;if(h===fs||h===Ta)if(e.has(p)){let f=e.get(p).texture;return o(f,p.mapping)}else{let f=p.image;if(f&&f.height>0){let y=new go(f.height);return y.fromEquirectangularTexture(i,p),e.set(p,y),p.addEventListener("dispose",c),o(y.texture,p.mapping)}else return null}}return p}function a(p){if(p&&p.isTexture){let h=p.mapping,f=h===fs||h===Ta,y=h===ui||h===Ci;if(f||y){let g=t.get(p),u=g!==void 0?g.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==u)return n===null&&(n=new ys(i)),g=f?n.fromEquirectangular(p,g):n.fromCubemap(p,g),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),g.texture;if(g!==void 0)return g.texture;{let S=p.image;return f&&S&&S.height>0||y&&S&&l(S)?(n===null&&(n=new ys(i)),g=f?n.fromEquirectangular(p):n.fromCubemap(p),g.texture.pmremVersion=p.pmremVersion,t.set(p,g),p.addEventListener("dispose",d),g.texture):null}}}return p}function o(p,h){return h===fs?p.mapping=ui:h===Ta&&(p.mapping=Ci),p}function l(p){let h=0,f=6;for(let y=0;y<f;y++)p[y]!==void 0&&h++;return h===f}function c(p){let h=p.target;h.removeEventListener("dispose",c);let f=e.get(h);f!==void 0&&(e.delete(h),f.dispose())}function d(p){let h=p.target;h.removeEventListener("dispose",d);let f=t.get(h);f!==void 0&&(t.delete(h),f.dispose())}function m(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:m}}function wg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Si("WebGLRenderer: "+n+" extension not supported."),s}}}function Tg(i,e,t,n){let s={},r=new WeakMap;function a(m){let p=m.target;p.index!==null&&e.remove(p.index);for(let f in p.attributes)e.remove(p.attributes[f]);p.removeEventListener("dispose",a),delete s[p.id];let h=r.get(p);h&&(e.remove(h),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function o(m,p){return s[p.id]===!0||(p.addEventListener("dispose",a),s[p.id]=!0,t.memory.geometries++),p}function l(m){let p=m.attributes;for(let h in p)e.update(p[h],i.ARRAY_BUFFER)}function c(m){let p=[],h=m.index,f=m.attributes.position,y=0;if(f===void 0)return;if(h!==null){let S=h.array;y=h.version;for(let T=0,_=S.length;T<_;T+=3){let w=S[T+0],b=S[T+1],E=S[T+2];p.push(w,b,b,E,E,w)}}else{let S=f.array;y=f.version;for(let T=0,_=S.length/3-1;T<_;T+=3){let w=T+0,b=T+1,E=T+2;p.push(w,b,b,E,E,w)}}let g=new(f.count>=65535?Os:Bs)(p,1);g.version=y;let u=r.get(m);u&&e.remove(u),r.set(m,g)}function d(m){let p=r.get(m);if(p){let h=m.index;h!==null&&p.version<h.version&&c(m)}else c(m);return r.get(m)}return{get:o,update:l,getWireframeAttribute:d}}function Ag(i,e,t){let n;function s(m){n=m}let r,a;function o(m){r=m.type,a=m.bytesPerElement}function l(m,p){i.drawElements(n,p,r,m*a),t.update(p,n,1)}function c(m,p,h){h!==0&&(i.drawElementsInstanced(n,p,r,m*a,h),t.update(p,n,h))}function d(m,p,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,m,0,h);let y=0;for(let g=0;g<h;g++)y+=p[g];t.update(y,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=d}function Eg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Oe("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Cg(i,e,t){let n=new WeakMap,s=new rt;function r(a,o,l){let c=a.morphTargetInfluences,d=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,m=d!==void 0?d.length:0,p=n.get(o);if(p===void 0||p.count!==m){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};p!==void 0&&p.texture.dispose();let h=o.morphAttributes.position!==void 0,f=o.morphAttributes.normal!==void 0,y=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],T=0;h===!0&&(T=1),f===!0&&(T=2),y===!0&&(T=3);let _=o.attributes.position.count*T,w=1;_>e.maxTextureSize&&(w=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);let b=new Float32Array(_*w*4*m),E=new Us(b,_,w,m);E.type=Jt,E.needsUpdate=!0;let x=T*4;for(let I=0;I<m;I++){let z=g[I],D=u[I],C=S[I],R=_*w*4*I;for(let L=0;L<z.count;L++){let N=L*x;h===!0&&(s.fromBufferAttribute(z,L),b[R+N+0]=s.x,b[R+N+1]=s.y,b[R+N+2]=s.z,b[R+N+3]=0),f===!0&&(s.fromBufferAttribute(D,L),b[R+N+4]=s.x,b[R+N+5]=s.y,b[R+N+6]=s.z,b[R+N+7]=0),y===!0&&(s.fromBufferAttribute(C,L),b[R+N+8]=s.x,b[R+N+9]=s.y,b[R+N+10]=s.z,b[R+N+11]=C.itemSize===4?s.w:1)}}p={count:m,texture:E,size:new re(_,w)},n.set(o,p),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let h=0;for(let y=0;y<c.length;y++)h+=c[y];let f=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(i,"morphTargetBaseInfluence",f),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}return{update:r}}function zg(i,e,t,n,s){let r=new WeakMap;function a(c){let d=s.render.frame,m=c.geometry,p=e.get(c,m);if(r.get(p)!==d&&(e.update(p),r.set(p,d)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==d&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,d))),c.isSkinnedMesh){let h=c.skeleton;r.get(h)!==d&&(h.update(),r.set(h,d))}return p}function o(){r=new WeakMap}function l(c){let d=c.target;d.removeEventListener("dispose",l),n.releaseStatesOfObject(d),t.remove(d.instanceMatrix),d.instanceColor!==null&&t.remove(d.instanceColor)}return{update:a,dispose:o}}var Rg={[vl]:"LINEAR_TONE_MAPPING",[Ml]:"REINHARD_TONE_MAPPING",[Sl]:"CINEON_TONE_MAPPING",[bl]:"ACES_FILMIC_TONE_MAPPING",[Tl]:"AGX_TONE_MAPPING",[or]:"NEUTRAL_TONE_MAPPING",[wl]:"CUSTOM_TONE_MAPPING"};function Ig(i,e,t,n,s,r){let a=new qt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new at;c.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ke([0,2,0,0,2,0],2));let d=new la({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),m=new Ge(c,d),p=new cs(-1,1,1,-1,0,1),h=null,f=null,y=!1,g,u=null,S=[],T=!1;this.setSize=function(_,w){a.setSize(_,w),o!==null&&o.setSize(_,w),l!==null&&l.setSize(_,w);for(let b=0;b<S.length;b++){let E=S[b];E.setSize&&E.setSize(_,w)}},this.setEffects=function(_){S=_,T=S.length>0&&S[0].isRenderPass===!0;let w=a.width,b=a.height;S.length>0&&o===null&&(o=new qt(w,b,{type:Wt,depthBuffer:!1,stencilBuffer:!1}),l=new qt(w,b,{type:Wt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<S.length;E++){let x=S[E];x.setSize&&x.setSize(w,b)}},this.begin=function(_,w){if(y||_.toneMapping===Mn&&S.length===0)return!1;if(u=w,w!==null){let b=w.width,E=w.height;(a.width!==b||a.height!==E)&&this.setSize(b,E)}return T===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=Mn,!0},this.hasRenderPass=function(){return T},this.end=function(_,w){_.toneMapping=g,y=!0;let b=a,E=o;for(let x=0;x<S.length;x++){let M=S[x];M.enabled!==!1&&(M.render(_,E,b,w),M.needsSwap!==!1&&(b=E,E=E===o?l:o))}if(h!==_.outputColorSpace||f!==_.toneMapping){h=_.outputColorSpace,f=_.toneMapping,d.defines={},nt.getTransfer(h)===ht&&(d.defines.SRGB_TRANSFER="");let x=Rg[f];x&&(d.defines[x]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(u),_.render(m,p),u=null,y=!1},this.isCompositing=function(){return y},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),d.dispose()}}var mu=new Rt,Ql=new ri(1,1),gu=new Us,xu=new ta,_u=new Vs,$h=[],Kh=[],jh=new Float32Array(16),Qh=new Float32Array(9),eu=new Float32Array(4);function vs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=$h[s];if(r===void 0&&(r=new Float32Array(s),$h[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function yo(i,e){let t=Kh[e];t===void 0&&(t=new Int32Array(e),Kh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Pg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Dg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;eu.set(n),i.uniformMatrix2fv(this.addr,!1,eu),Tt(t,n)}}function Fg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Qh.set(n),i.uniformMatrix3fv(this.addr,!1,Qh),Tt(t,n)}}function Bg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;jh.set(n),i.uniformMatrix4fv(this.addr,!1,jh),Tt(t,n)}}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Gg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Hg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Wg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Yg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ql.compareFunction=t.isReversedDepthBuffer()?uo:ho,r=Ql):r=mu,t.setTexture2D(e||r,s)}function Zg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xu,s)}function Jg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||_u,s)}function $g(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||gu,s)}function Kg(i){switch(i){case 5126:return Pg;case 35664:return Lg;case 35665:return Dg;case 35666:return Ng;case 35674:return Ug;case 35675:return Fg;case 35676:return Bg;case 5124:case 35670:return Og;case 35667:case 35671:return kg;case 35668:case 35672:return Vg;case 35669:case 35673:return Gg;case 5125:return Hg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Zg;case 35680:case 36300:case 36308:case 36293:return Jg;case 36289:case 36303:case 36311:case 36292:return $g}}function jg(i,e){i.uniform1fv(this.addr,e)}function Qg(i,e){let t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function e0(i,e){let t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function t0(i,e){let t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function n0(i,e){let t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function i0(i,e){let t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function s0(i,e){let t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function r0(i,e){i.uniform1iv(this.addr,e)}function a0(i,e){i.uniform2iv(this.addr,e)}function o0(i,e){i.uniform3iv(this.addr,e)}function l0(i,e){i.uniform4iv(this.addr,e)}function c0(i,e){i.uniform1uiv(this.addr,e)}function h0(i,e){i.uniform2uiv(this.addr,e)}function u0(i,e){i.uniform3uiv(this.addr,e)}function d0(i,e){i.uniform4uiv(this.addr,e)}function f0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ql:a=mu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function p0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||xu,r[a])}function m0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||_u,r[a])}function g0(i,e,t){let n=this.cache,s=e.length,r=yo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||gu,r[a])}function x0(i){switch(i){case 5126:return jg;case 35664:return Qg;case 35665:return e0;case 35666:return t0;case 35674:return n0;case 35675:return i0;case 35676:return s0;case 5124:case 35670:return r0;case 35667:case 35671:return a0;case 35668:case 35672:return o0;case 35669:case 35673:return l0;case 5125:return c0;case 36294:return h0;case 36295:return u0;case 36296:return d0;case 35678:case 36198:case 36298:case 36306:case 35682:return f0;case 35679:case 36299:case 36307:return p0;case 35680:case 36300:case 36308:case 36293:return m0;case 36289:case 36303:case 36311:case 36292:return g0}}var ec=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Kg(t.type)}},tc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=x0(t.type)}},nc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Kl=/(\w+)(\])?(\[|\.)?/g;function tu(i,e){i.seq.push(e),i.map[e.id]=e}function _0(i,e,t){let n=i.name,s=n.length;for(Kl.lastIndex=0;;){let r=Kl.exec(n),a=Kl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){tu(t,c===void 0?new ec(o,i,e):new tc(o,i,e));break}else{let m=t.map[o];m===void 0&&(m=new nc(o),tu(t,m)),t=m}}}var _s=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);_0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function nu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var y0=37297,v0=0;function M0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var iu=new He;function S0(i){nt._getMatrix(iu,nt.workingColorSpace,i);let e=`mat3( ${iu.elements.map(t=>t.toFixed(4))} )`;switch(nt.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return Ne("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function su(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+M0(i.getShaderSource(e),o)}else return r}function b0(i,e){let t=S0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var w0={[vl]:"Linear",[Ml]:"Reinhard",[Sl]:"Cineon",[bl]:"ACESFilmic",[Tl]:"AgX",[or]:"Neutral",[wl]:"Custom"};function T0(i,e){let t=w0[e];return t===void 0?(Ne("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var mo=new F;function A0(){nt.getLuminanceCoefficients(mo);let i=mo.x.toFixed(4),e=mo.y.toFixed(4),t=mo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function E0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function C0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function z0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function ru(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function au(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var R0=/^[ \t]*#include +<([\w\d./]+)>/gm;function ic(i){return i.replace(R0,P0)}var I0=new Map;function P0(i,e){let t=$e[e];if(t===void 0){let n=I0.get(e);if(n!==void 0)t=$e[n],Ne('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ic(t)}var L0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ou(i){return i.replace(L0,D0)}function D0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function lu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var N0={[Ai]:"SHADOWMAP_TYPE_PCF",[us]:"SHADOWMAP_TYPE_VSM"};function U0(i){return N0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var F0={[ui]:"ENVMAP_TYPE_CUBE",[Ci]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function B0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":F0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var O0={[Ci]:"ENVMAP_MODE_REFRACTION"};function k0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":O0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var V0={[yl]:"ENVMAP_BLENDING_MULTIPLY",[Mh]:"ENVMAP_BLENDING_MIX",[Sh]:"ENVMAP_BLENDING_ADD"};function G0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":V0[i.combine]||"ENVMAP_BLENDING_NONE"}function H0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function W0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=U0(t),c=B0(t),d=k0(t),m=G0(t),p=H0(t),h=E0(t),f=C0(r),y=s.createProgram(),g,u,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_r).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(_r).join(`
`),u.length>0&&(u+=`
`)):(g=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+d:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),u=[lu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",t.envMap?"#define "+m:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?$e.tonemapping_pars_fragment:"",t.toneMapping!==Mn?T0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",$e.colorspace_pars_fragment,b0("linearToOutputTexel",t.outputColorSpace),A0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=ic(a),a=ru(a,t),a=au(a,t),o=ic(o),o=ru(o,t),o=au(o,t),a=ou(a),o=ou(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,g=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",t.glslVersion===Dl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Dl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let T=S+g+a,_=S+u+o,w=nu(s,s.VERTEX_SHADER,T),b=nu(s,s.FRAGMENT_SHADER,_);s.attachShader(y,w),s.attachShader(y,b),t.index0AttributeName!==void 0?s.bindAttribLocation(y,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function E(z){if(i.debug.checkShaderErrors){let D=s.getProgramInfoLog(y)||"",C=s.getShaderInfoLog(w)||"",R=s.getShaderInfoLog(b)||"",L=D.trim(),N=C.trim(),k=R.trim(),J=!0,V=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,w,b);else{let q=su(s,w,"vertex"),Y=su(s,b,"fragment");Oe("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+L+`
`+q+`
`+Y)}else L!==""?Ne("WebGLProgram: Program Info Log:",L):(N===""||k==="")&&(V=!1);V&&(z.diagnostics={runnable:J,programLog:L,vertexShader:{log:N,prefix:g},fragmentShader:{log:k,prefix:u}})}s.deleteShader(w),s.deleteShader(b),x=new _s(s,y),M=z0(s,y)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(y,y0)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=v0++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=w,this.fragmentShader=b,this}var X0=0,sc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new rc(e),t.set(e,n)),n}},rc=class{constructor(e){this.id=X0++,this.code=e,this.usedTimes=0}};function q0(i){return i===fi||i===pr||i===mr}function Y0(i,e,t,n,s,r){let a=new ns,o=new sc,l=new Set,c=[],d=new Map,m=n.logarithmicDepthBuffer,p=n.precision,h={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function y(x,M,I,z,D,C){let R=z.fog,L=D.geometry,N=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?z.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,J=e.get(x.envMap||N,k),V=J&&J.mapping===lr?J.image.height:null,q=h[x.type];x.precision!==null&&(p=n.getMaxPrecision(x.precision),p!==x.precision&&Ne("WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));let Y=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ce=Y!==void 0?Y.length:0,de=0;L.morphAttributes.position!==void 0&&(de=1),L.morphAttributes.normal!==void 0&&(de=2),L.morphAttributes.color!==void 0&&(de=3);let Ke,Ye,tt,$;if(q){let mt=Dn[q];Ke=mt.vertexShader,Ye=mt.fragmentShader}else{Ke=x.vertexShader,Ye=x.fragmentShader;let mt=o.getVertexShaderStage(x),lt=o.getFragmentShaderStage(x);o.update(x,mt,lt),tt=mt.id,$=lt.id}let te=i.getRenderTarget(),_e=i.state.buffers.depth.getReversed(),Ue=D.isInstancedMesh===!0,ie=D.isBatchedMesh===!0,Ae=!!x.map,je=!!x.matcap,Q=!!J,ae=!!x.aoMap,oe=!!x.lightMap,le=!!x.bumpMap&&x.wireframe===!1,fe=!!x.normalMap,Fe=!!x.displacementMap,De=!!x.emissiveMap,Ve=!!x.metalnessMap,We=!!x.roughnessMap,U=x.anisotropy>0,ot=x.clearcoat>0,Qe=x.dispersion>0,P=x.retroreflectivity>0,v=x.iridescence>0,G=x.sheen>0,X=x.transmission>0,K=U&&!!x.anisotropyMap,he=ot&&!!x.clearcoatMap,ue=ot&&!!x.clearcoatNormalMap,j=ot&&!!x.clearcoatRoughnessMap,ne=v&&!!x.iridescenceMap,pe=v&&!!x.iridescenceThicknessMap,Ie=G&&!!x.sheenColorMap,ye=G&&!!x.sheenRoughnessMap,me=!!x.specularMap,Pe=!!x.specularColorMap,Be=!!x.specularIntensityMap,qe=X&&!!x.transmissionMap,O=X&&!!x.thicknessMap,ge=!!x.gradientMap,ee=!!x.alphaMap,xe=x.alphaTest>0,be=!!x.alphaHash,se=!!x.extensions,Le=Mn;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Le=i.toneMapping);let ze={shaderID:q,shaderType:x.type,shaderName:x.name,vertexShader:Ke,fragmentShader:Ye,defines:x.defines,customVertexShaderID:tt,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,batching:ie,batchingColor:ie&&D._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&D.instanceColor!==null,instancingMorph:Ue&&D.morphTexture!==null,outputColorSpace:te===null?i.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:nt.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ae,matcap:je,envMap:Q,envMapMode:Q&&J.mapping,envMapCubeUVHeight:V,aoMap:ae,lightMap:oe,bumpMap:le,normalMap:fe,displacementMap:Fe,emissiveMap:De,normalMapObjectSpace:fe&&x.normalMapType===Th,normalMapTangentSpace:fe&&x.normalMapType===co,packedNormalMap:fe&&x.normalMapType===co&&q0(x.normalMap.format),metalnessMap:Ve,roughnessMap:We,anisotropy:U,anisotropyMap:K,clearcoat:ot,clearcoatMap:he,clearcoatNormalMap:ue,clearcoatRoughnessMap:j,dispersion:Qe,retroreflection:P,iridescence:v,iridescenceMap:ne,iridescenceThicknessMap:pe,sheen:G,sheenColorMap:Ie,sheenRoughnessMap:ye,specularMap:me,specularColorMap:Pe,specularIntensityMap:Be,transmission:X,transmissionMap:qe,thicknessMap:O,gradientMap:ge,opaque:x.transparent===!1&&x.blending===ds&&x.alphaToCoverage===!1,alphaMap:ee,alphaTest:xe,alphaHash:be,combine:x.combine,mapUv:Ae&&f(x.map.channel),aoMapUv:ae&&f(x.aoMap.channel),lightMapUv:oe&&f(x.lightMap.channel),bumpMapUv:le&&f(x.bumpMap.channel),normalMapUv:fe&&f(x.normalMap.channel),displacementMapUv:Fe&&f(x.displacementMap.channel),emissiveMapUv:De&&f(x.emissiveMap.channel),metalnessMapUv:Ve&&f(x.metalnessMap.channel),roughnessMapUv:We&&f(x.roughnessMap.channel),anisotropyMapUv:K&&f(x.anisotropyMap.channel),clearcoatMapUv:he&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:ue&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:j&&f(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pe&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ie&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:ye&&f(x.sheenRoughnessMap.channel),specularMapUv:me&&f(x.specularMap.channel),specularColorMapUv:Pe&&f(x.specularColorMap.channel),specularIntensityMapUv:Be&&f(x.specularIntensityMap.channel),transmissionMapUv:qe&&f(x.transmissionMap.channel),thicknessMapUv:O&&f(x.thicknessMap.channel),alphaMapUv:ee&&f(x.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(fe||U),vertexNormals:!!L.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!L.attributes.uv&&(Ae||ee),fog:!!R,useFog:x.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||L.attributes.normal===void 0&&fe===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:m,reversedDepthBuffer:_e,skinning:D.isSkinnedMesh===!0,hasPositionAttribute:L.attributes.position!==void 0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:de,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:C.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:Ae&&x.map.isVideoTexture===!0&&nt.getTransfer(x.map.colorSpace)===ht,decodeVideoTextureEmissive:De&&x.emissiveMap.isVideoTexture===!0&&nt.getTransfer(x.emissiveMap.colorSpace)===ht,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ot,flipSided:x.side===Ht,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:se&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&x.extensions.multiDraw===!0||ie)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ze.vertexUv1s=l.has(1),ze.vertexUv2s=l.has(2),ze.vertexUv3s=l.has(3),l.clear(),ze}function g(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let I in x.defines)M.push(I),M.push(x.defines[I]);return x.isRawShaderMaterial===!1&&(u(M,x),S(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function u(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numSunLights),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numSunLightShadows),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function S(x,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function T(x){let M=h[x.type],I;if(M){let z=Dn[M];I=Hh.clone(z.uniforms)}else I=x.uniforms;return I}function _(x,M){let I=d.get(M);return I!==void 0?++I.usedTimes:(I=new W0(i,M,x,s),c.push(I),d.set(M,I)),I}function w(x){if(--x.usedTimes===0){let M=c.indexOf(x);c[M]=c[c.length-1],c.pop(),d.delete(x.cacheKey),x.destroy()}}function b(x){o.remove(x)}function E(){o.dispose()}return{getParameters:y,getProgramCacheKey:g,getUniforms:T,acquireProgram:_,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:E}}function Z0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function J0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function cu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function hu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p){let h=0;return p.isInstancedMesh&&(h+=2),p.isSkinnedMesh&&(h+=1),h}function o(p,h,f,y,g,u){let S=i[e];return S===void 0?(S={id:p.id,object:p,geometry:h,material:f,materialVariant:a(p),groupOrder:y,renderOrder:p.renderOrder,z:g,group:u},i[e]=S):(S.id=p.id,S.object=p,S.geometry=h,S.material=f,S.materialVariant=a(p),S.groupOrder=y,S.renderOrder=p.renderOrder,S.z=g,S.group=u),e++,S}function l(p,h,f,y,g,u,S){S.reversedDepth===!0&&(g=-g);let T=o(p,h,f,y,g,u);f.transmission>0?n.push(T):f.transparent===!0?s.push(T):t.push(T)}function c(p,h,f,y,g,u){let S=o(p,h,f,y,g,u);f.transmission>0?n.unshift(S):f.transparent===!0?s.unshift(S):t.unshift(S)}function d(p,h){t.length>1&&t.sort(p||J0),n.length>1&&n.sort(h||cu),s.length>1&&s.sort(h||cu)}function m(){for(let p=e,h=i.length;p<h;p++){let f=i[p];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:m,sort:d}}function $0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new hu,i.set(n,[a])):s>=r.length?(a=new hu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function K0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Xe};break;case"SpotLight":t={position:new F,direction:new F,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function j0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new re,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var Q0=0;function ex(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function tx(i){let e=new K0,t=j0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new pt,a=new pt;function o(c){let d=0,m=0,p=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let h=0,f=0,y=0,g=0,u=0,S=0,T=0,_=0,w=0,b=0,E=0,x=0,M=0,I=0;c.sort(ex);for(let D=0,C=c.length;D<C;D++){let R=c[D],L=R.color,N=R.intensity,k=R.distance,J=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===fi?J=R.shadow.map.texture:J=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)d+=L.r*N,m+=L.g*N,p+=L.b*N;else if(R.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(R.sh.coefficients[V],N);I++}else if(R.isSunLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize.copy(q.mapSize).multiply(q.getFrameExtents()),n.sunShadow[f]=Y,n.sunShadowMap[f]=J;let ce=q.getViewportCount();for(let de=0;de<ce;de++)n.sunShadowMatrix[y+de]=q.getMatrix(de),n.sunShadowCascade[y+de]=q._cascadeData[de];y+=ce,f++}n.sun[h]=V,h++}else if(R.isDirectionalLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let q=R.shadow,Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.directionalShadow[g]=Y,n.directionalShadowMap[g]=J,n.directionalShadowMatrix[g]=R.shadow.matrix,w++}n.directional[g]=V,g++}else if(R.isSpotLight){let V=e.get(R);V.position.setFromMatrixPosition(R.matrixWorld),V.color.copy(L).multiplyScalar(N),V.distance=k,V.coneCos=Math.cos(R.angle),V.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),V.decay=R.decay,n.spot[S]=V;let q=R.shadow;if(R.map&&(n.spotLightMap[x]=R.map,x++,q.updateMatrices(R),R.castShadow&&M++),n.spotLightMatrix[S]=q.matrix,R.castShadow){let Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,n.spotShadow[S]=Y,n.spotShadowMap[S]=J,E++}S++}else if(R.isRectAreaLight){let V=e.get(R);V.color.copy(L).multiplyScalar(N),V.halfWidth.set(R.width*.5,0,0),V.halfHeight.set(0,R.height*.5,0),n.rectArea[T]=V,T++}else if(R.isPointLight){let V=e.get(R);if(V.color.copy(R.color).multiplyScalar(R.intensity),V.distance=R.distance,V.decay=R.decay,R.castShadow){let q=R.shadow,Y=t.get(R);Y.shadowIntensity=q.intensity,Y.shadowBias=q.bias,Y.shadowNormalBias=q.normalBias,Y.shadowRadius=q.radius,Y.shadowMapSize=q.mapSize,Y.shadowCameraNear=q.camera.near,Y.shadowCameraFar=q.camera.far,n.pointShadow[u]=Y,n.pointShadowMap[u]=J,n.pointShadowMatrix[u]=R.shadow.matrix,b++}n.point[u]=V,u++}else if(R.isHemisphereLight){let V=e.get(R);V.skyColor.copy(R.color).multiplyScalar(N),V.groundColor.copy(R.groundColor).multiplyScalar(N),n.hemi[_]=V,_++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=m,n.ambient[2]=p;let z=n.hash;(z.sunLength!==h||z.directionalLength!==g||z.pointLength!==u||z.spotLength!==S||z.rectAreaLength!==T||z.hemiLength!==_||z.numSunShadows!==f||z.numDirectionalShadows!==w||z.numPointShadows!==b||z.numSpotShadows!==E||z.numSpotMaps!==x||z.numLightProbes!==I)&&(n.sun.length=h,n.directional.length=g,n.spot.length=S,n.rectArea.length=T,n.point.length=u,n.hemi.length=_,n.sunShadow.length=f,n.sunShadowMap.length=f,n.sunShadowMatrix.length=y,n.sunShadowCascade.length=y,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+x-M,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=I,z.sunLength=h,z.directionalLength=g,z.pointLength=u,z.spotLength=S,z.rectAreaLength=T,z.hemiLength=_,z.numSunShadows=f,z.numDirectionalShadows=w,z.numPointShadows=b,z.numSpotShadows=E,z.numSpotMaps=x,z.numLightProbes=I,n.version=Q0++)}function l(c,d){let m=0,p=0,h=0,f=0,y=0,g=0,u=d.matrixWorldInverse;for(let S=0,T=c.length;S<T;S++){let _=c[S];if(_.isSunLight){let w=n.sun[m];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(u),m++}else if(_.isDirectionalLight){let w=n.directional[p];w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),p++}else if(_.isSpotLight){let w=n.spot[f];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),w.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(u),f++}else if(_.isRectAreaLight){let w=n.rectArea[y];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),a.identity(),r.copy(_.matrixWorld),r.premultiply(u),a.extractRotation(r),w.halfWidth.set(_.width*.5,0,0),w.halfHeight.set(0,_.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),y++}else if(_.isPointLight){let w=n.point[h];w.position.setFromMatrixPosition(_.matrixWorld),w.position.applyMatrix4(u),h++}else if(_.isHemisphereLight){let w=n.hemi[g];w.direction.setFromMatrixPosition(_.matrixWorld),w.direction.transformDirection(u),g++}}}return{setup:o,setupView:l,state:n}}function uu(i){let e=new tx(i),t=[],n=[],s=[];function r(p){m.camera=p,t.length=0,n.length=0,s.length=0}function a(p){t.push(p)}function o(p){n.push(p)}function l(p){s.push(p)}function c(){e.setup(t)}function d(p){e.setupView(t,p)}let m={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:m,setupLights:c,setupLightsView:d,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function nx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new uu(i),e.set(s,[o])):r>=a.length?(o=new uu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var ix=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sx=`uniform sampler2D shadow_pass;
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
}`,rx=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],ax=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],du=new pt,xr=new F,jl=new F;function ox(i,e,t){let n=new rs,s=new re,r=new re,a=new rt,o=new ca,l=new ha,c={},d=t.maxTextureSize,m={[zt]:Ht,[Ht]:zt,[Ot]:Ot},p=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new re},radius:{value:4}},vertexShader:ix,fragmentShader:sx}),h=p.clone();h.defines.HORIZONTAL_PASS=1;let f=new at;f.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ge(f,p),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let u=this.type;this.render=function(b,E,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===nh&&(Ne("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);let M=i.getRenderTarget(),I=i.getActiveCubeFace(),z=i.getActiveMipmapLevel(),D=i.state;D.setBlending(Pn),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let C=u!==this.type;C&&E.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(L=>L.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,L=b.length;R<L;R++){let N=b[R],k=N.shadow;if(k===void 0){Ne("WebGLShadowMap:",N,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);let J=k.getFrameExtents();s.multiply(J),r.copy(k.mapSize),(s.x>d||s.y>d)&&(s.x>d&&(r.x=Math.floor(d/J.x),s.x=r.x*J.x,k.mapSize.x=r.x),s.y>d&&(r.y=Math.floor(d/J.y),s.y=r.y*J.y,k.mapSize.y=r.y));let V=i.state.buffers.depth.getReversed();if(k.camera._reversedDepth=V,k.map===null||C===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===us){if(N.isPointLight){Ne("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new qt(s.x,s.y,{format:fi,type:Wt,minFilter:ut,magFilter:ut,generateMipmaps:!1}),k.map.texture.name=N.name+".shadowMap",k.map.depthTexture=new ri(s.x,s.y,Jt),k.map.depthTexture.name=N.name+".shadowMapDepth",k.map.depthTexture.format=zn,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct}else N.isPointLight?(k.map=new go(s.x),k.map.depthTexture=new na(s.x,Sn)):(k.map=new qt(s.x,s.y),k.map.depthTexture=new ri(s.x,s.y,Sn)),k.map.depthTexture.name=N.name+".shadowMap",k.map.depthTexture.format=zn,this.type===Ai?(k.map.depthTexture.compareFunction=V?uo:ho,k.map.depthTexture.minFilter=ut,k.map.depthTexture.magFilter=ut):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Ct,k.map.depthTexture.magFilter=Ct);k.camera.updateProjectionMatrix()}k.map.isWebGLCubeRenderTarget!==!0&&(k.map.width!==s.x||k.map.height!==s.y)&&k.map.setSize(s.x,s.y);let q=k.map.isWebGLCubeRenderTarget?6:k.getViewportCount();N.isPointLight!==!0&&k.updateMatrices(N,x);for(let Y=0;Y<q;Y++){let ce=k.getCamera(Y);if(N.isPointLight){let de=k.camera,Ke=k.matrix,Ye=N.distance||de.far;Ye!==de.far&&(de.far=Ye,de.updateProjectionMatrix()),xr.setFromMatrixPosition(N.matrixWorld),de.position.copy(xr),jl.copy(de.position),jl.add(rx[Y]),de.up.copy(ax[Y]),de.lookAt(jl),de.updateMatrixWorld(),Ke.makeTranslation(-xr.x,-xr.y,-xr.z),du.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(du,de.coordinateSystem,de.reversedDepth)}if(k.map.isWebGLCubeRenderTarget)i.setRenderTarget(k.map,Y),i.clear();else{Y===0&&(i.setRenderTarget(k.map),i.clear());let de=k.getViewport(Y);a.set(r.x*de.x,r.y*de.y,r.x*de.z,r.y*de.w),D.viewport(a)}n=k.getFrustum(Y),_(E,x,ce,N,this.type)}k.isPointLightShadow!==!0&&this.type===us&&S(k,x),k.needsUpdate=!1}u=this.type,g.needsUpdate=!1,i.setRenderTarget(M,I,z)};function S(b,E){let x=e.update(y);p.defines.VSM_SAMPLES!==b.blurSamples&&(p.defines.VSM_SAMPLES=b.blurSamples,h.defines.VSM_SAMPLES=b.blurSamples,p.needsUpdate=!0,h.needsUpdate=!0),b.mapPass===null?b.mapPass=new qt(s.x,s.y,{format:fi,type:Wt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),p.uniforms.shadow_pass.value=b.map.depthTexture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(E,null,x,p,y,null),h.uniforms.shadow_pass.value=b.mapPass.texture,h.uniforms.resolution.value.set(b.map.width,b.map.height),h.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(E,null,x,h,y,null)}function T(b,E,x,M){let I=null,z=x.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(z!==void 0)I=z;else if(I=x.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=I.uuid,C=E.uuid,R=c[D];R===void 0&&(R={},c[D]=R);let L=R[C];L===void 0&&(L=I.clone(),R[C]=L,E.addEventListener("dispose",w)),I=L}if(I.visible=E.visible,I.wireframe=E.wireframe,M===us?I.side=E.shadowSide!==null?E.shadowSide:E.side:I.side=E.shadowSide!==null?E.shadowSide:m[E.side],I.alphaMap=E.alphaMap,I.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,I.map=E.map,I.clipShadows=E.clipShadows,I.clippingPlanes=E.clippingPlanes,I.clipIntersection=E.clipIntersection,I.displacementMap=E.displacementMap,I.displacementScale=E.displacementScale,I.displacementBias=E.displacementBias,I.wireframeLinewidth=E.wireframeLinewidth,I.linewidth=E.linewidth,x.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let D=i.properties.get(I);D.light=x}return I}function _(b,E,x,M,I){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&I===us)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,b.matrixWorld);let C=e.update(b),R=b.material;if(Array.isArray(R)){let L=C.groups;for(let N=0,k=L.length;N<k;N++){let J=L[N],V=R[J.materialIndex];if(V&&V.visible){let q=T(b,V,M,I);b.onBeforeShadow(i,b,E,x,C,q,J),i.renderBufferDirect(x,null,C,q,b,J),b.onAfterShadow(i,b,E,x,C,q,J)}}}else if(R.visible){let L=T(b,R,M,I);b.onBeforeShadow(i,b,E,x,C,L,null),i.renderBufferDirect(x,null,C,L,b,null),b.onAfterShadow(i,b,E,x,C,L,null)}}let D=b.children;for(let C=0,R=D.length;C<R;C++)_(D[C],E,x,M,I)}function w(b){b.target.removeEventListener("dispose",w);for(let x in c){let M=c[x],I=b.target.uuid;I in M&&(M[I].dispose(),delete M[I])}}}function lx(i,e){function t(){let O=!1,ge=new rt,ee=null,xe=new rt(0,0,0,0);return{setMask:function(be){ee!==be&&!O&&(i.colorMask(be,be,be,be),ee=be)},setLocked:function(be){O=be},setClear:function(be,se,Le,ze,mt){mt===!0&&(be*=ze,se*=ze,Le*=ze),ge.set(be,se,Le,ze),xe.equals(ge)===!1&&(i.clearColor(be,se,Le,ze),xe.copy(ge))},reset:function(){O=!1,ee=null,xe.set(-1,0,0,0)}}}function n(){let O=!1,ge=!1,ee=null,xe=null,be=null;return{setReversed:function(se){if(ge!==se){let Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT),ge=se;let ze=be;be=null,this.setClear(ze)}},getReversed:function(){return ge},setTest:function(se){se?te(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(se){ee!==se&&!O&&(i.depthMask(se),ee=se)},setFunc:function(se){if(ge&&(se=Fh[se]),xe!==se){switch(se){case Wr:i.depthFunc(i.NEVER);break;case Xr:i.depthFunc(i.ALWAYS);break;case qr:i.depthFunc(i.LESS);break;case Ki:i.depthFunc(i.LEQUAL);break;case Yr:i.depthFunc(i.EQUAL);break;case Zr:i.depthFunc(i.GEQUAL);break;case Jr:i.depthFunc(i.GREATER);break;case $r:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=se}},setLocked:function(se){O=se},setClear:function(se){be!==se&&(be=se,ge&&(se=1-se),i.clearDepth(se))},reset:function(){O=!1,ee=null,xe=null,be=null,ge=!1}}}function s(){let O=!1,ge=null,ee=null,xe=null,be=null,se=null,Le=null,ze=null,mt=null;return{setTest:function(lt){O||(lt?te(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(lt){ge!==lt&&!O&&(i.stencilMask(lt),ge=lt)},setFunc:function(lt,dn,wn){(ee!==lt||xe!==dn||be!==wn)&&(i.stencilFunc(lt,dn,wn),ee=lt,xe=dn,be=wn)},setOp:function(lt,dn,wn){(se!==lt||Le!==dn||ze!==wn)&&(i.stencilOp(lt,dn,wn),se=lt,Le=dn,ze=wn)},setLocked:function(lt){O=lt},setClear:function(lt){mt!==lt&&(i.clearStencil(lt),mt=lt)},reset:function(){O=!1,ge=null,ee=null,xe=null,be=null,se=null,Le=null,ze=null,mt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,d={},m={},p={},h=new WeakMap,f=[],y=null,g=!1,u=null,S=null,T=null,_=null,w=null,b=null,E=null,x=new Xe(0,0,0),M=0,I=!1,z=null,D=null,C=null,R=null,L=null,N=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),k=!1,J=0,V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(V)[1]),k=J>=1):V.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),k=J>=2);let q=null,Y={},ce=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ke=new rt().fromArray(ce),Ye=new rt().fromArray(de);function tt(O,ge,ee,xe){let be=new Uint8Array(4),se=i.createTexture();i.bindTexture(O,se),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Le=0;Le<ee;Le++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,be):i.texImage2D(ge+Le,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,be);return se}let $={};$[i.TEXTURE_2D]=tt(i.TEXTURE_2D,i.TEXTURE_2D,1),$[i.TEXTURE_CUBE_MAP]=tt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[i.TEXTURE_2D_ARRAY]=tt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),$[i.TEXTURE_3D]=tt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(i.DEPTH_TEST),a.setFunc(Ki),le(!1),fe(fl),te(i.CULL_FACE),ae(Pn);function te(O){d[O]!==!0&&(i.enable(O),d[O]=!0)}function _e(O){d[O]!==!1&&(i.disable(O),d[O]=!1)}function Ue(O,ge){return p[O]!==ge?(i.bindFramebuffer(O,ge),p[O]=ge,O===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=ge),O===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function ie(O,ge){let ee=f,xe=!1;if(O){ee=h.get(ge),ee===void 0&&(ee=[],h.set(ge,ee));let be=O.textures;if(ee.length!==be.length||ee[0]!==i.COLOR_ATTACHMENT0){for(let se=0,Le=be.length;se<Le;se++)ee[se]=i.COLOR_ATTACHMENT0+se;ee.length=be.length,xe=!0}}else ee[0]!==i.BACK&&(ee[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ee)}function Ae(O){return y!==O?(i.useProgram(O),y=O,!0):!1}let je={[Ei]:i.FUNC_ADD,[sh]:i.FUNC_SUBTRACT,[rh]:i.FUNC_REVERSE_SUBTRACT};je[ah]=i.MIN,je[oh]=i.MAX;let Q={[lh]:i.ZERO,[ch]:i.ONE,[hh]:i.SRC_COLOR,[xl]:i.SRC_ALPHA,[gh]:i.SRC_ALPHA_SATURATE,[ph]:i.DST_COLOR,[dh]:i.DST_ALPHA,[uh]:i.ONE_MINUS_SRC_COLOR,[_l]:i.ONE_MINUS_SRC_ALPHA,[mh]:i.ONE_MINUS_DST_COLOR,[fh]:i.ONE_MINUS_DST_ALPHA,[xh]:i.CONSTANT_COLOR,[_h]:i.ONE_MINUS_CONSTANT_COLOR,[yh]:i.CONSTANT_ALPHA,[vh]:i.ONE_MINUS_CONSTANT_ALPHA};function ae(O,ge,ee,xe,be,se,Le,ze,mt,lt){if(O===Pn){g===!0&&(_e(i.BLEND),g=!1);return}if(g===!1&&(te(i.BLEND),g=!0),O!==ih){if(O!==u||lt!==I){if((S!==Ei||w!==Ei)&&(i.blendEquation(i.FUNC_ADD),S=Ei,w=Ei),lt)switch(O){case ds:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFunc(i.ONE,i.ONE);break;case ml:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case gl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Oe("WebGLState: Invalid blending: ",O);break}else switch(O){case ds:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case ml:Oe("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case gl:Oe("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Oe("WebGLState: Invalid blending: ",O);break}T=null,_=null,b=null,E=null,x.set(0,0,0),M=0,u=O,I=lt}return}be=be||ge,se=se||ee,Le=Le||xe,(ge!==S||be!==w)&&(i.blendEquationSeparate(je[ge],je[be]),S=ge,w=be),(ee!==T||xe!==_||se!==b||Le!==E)&&(i.blendFuncSeparate(Q[ee],Q[xe],Q[se],Q[Le]),T=ee,_=xe,b=se,E=Le),(ze.equals(x)===!1||mt!==M)&&(i.blendColor(ze.r,ze.g,ze.b,mt),x.copy(ze),M=mt),u=O,I=!1}function oe(O,ge){O.side===Ot?_e(i.CULL_FACE):te(i.CULL_FACE);let ee=O.side===Ht;ge&&(ee=!ee),le(ee),O.blending===ds&&O.transparent===!1?ae(Pn):ae(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);let xe=O.stencilWrite;o.setTest(xe),xe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),De(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?te(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function le(O){z!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),z=O)}function fe(O){O!==eh?(te(i.CULL_FACE),O!==D&&(O===fl?i.cullFace(i.BACK):O===th?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),D=O}function Fe(O){O!==C&&(k&&i.lineWidth(O),C=O)}function De(O,ge,ee){O?(te(i.POLYGON_OFFSET_FILL),(R!==ge||L!==ee)&&(R=ge,L=ee,a.getReversed()&&(ge=-ge),i.polygonOffset(ge,ee))):_e(i.POLYGON_OFFSET_FILL)}function Ve(O){O?te(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function We(O){O===void 0&&(O=i.TEXTURE0+N-1),q!==O&&(i.activeTexture(O),q=O)}function U(O,ge,ee){ee===void 0&&(q===null?ee=i.TEXTURE0+N-1:ee=q);let xe=Y[ee];xe===void 0&&(xe={type:void 0,texture:void 0},Y[ee]=xe),(xe.type!==O||xe.texture!==ge)&&(q!==ee&&(i.activeTexture(ee),q=ee),i.bindTexture(O,ge||$[O]),xe.type=O,xe.texture=ge)}function ot(){let O=Y[q];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function P(){try{i.compressedTexImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function v(){try{i.texSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function G(){try{i.texSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function K(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function he(){try{i.texStorage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ue(){try{i.texStorage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function j(){try{i.texImage2D(...arguments)}catch(O){Oe("WebGLState:",O)}}function ne(){try{i.texImage3D(...arguments)}catch(O){Oe("WebGLState:",O)}}function pe(O){return m[O]!==void 0?m[O]:i.getParameter(O)}function Ie(O,ge){m[O]!==ge&&(i.pixelStorei(O,ge),m[O]=ge)}function ye(O){Ke.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),Ke.copy(O))}function me(O){Ye.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function Pe(O,ge){let ee=c.get(ge);ee===void 0&&(ee=new WeakMap,c.set(ge,ee));let xe=ee.get(O);xe===void 0&&(xe=i.getUniformBlockIndex(ge,O.name),ee.set(O,xe))}function Be(O,ge){let xe=c.get(ge).get(O);l.get(ge)!==xe&&(i.uniformBlockBinding(ge,xe,O.__bindingPointIndex),l.set(ge,xe))}function qe(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),d={},m={},q=null,Y={},p={},h=new WeakMap,f=[],y=null,g=!1,u=null,S=null,T=null,_=null,w=null,b=null,E=null,x=new Xe(0,0,0),M=0,I=!1,z=null,D=null,C=null,R=null,L=null,Ke.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:te,disable:_e,bindFramebuffer:Ue,drawBuffers:ie,useProgram:Ae,setBlending:ae,setMaterial:oe,setFlipSided:le,setCullFace:fe,setLineWidth:Fe,setPolygonOffset:De,setScissorTest:Ve,activeTexture:We,bindTexture:U,unbindTexture:ot,compressedTexImage2D:Qe,compressedTexImage3D:P,texImage2D:j,texImage3D:ne,pixelStorei:Ie,getParameter:pe,updateUBOMapping:Pe,uniformBlockBinding:Be,texStorage2D:he,texStorage3D:ue,texSubImage2D:v,texSubImage3D:G,compressedTexSubImage2D:X,compressedTexSubImage3D:K,scissor:ye,viewport:me,reset:qe}}function cx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new re,d=new WeakMap,m=new Set,p,h=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,v){return f?new OffscreenCanvas(P,v):Ns("canvas")}function g(P,v,G){let X=1,K=Qe(P);if((K.width>G||K.height>G)&&(X=G/Math.max(K.width,K.height)),X<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let he=Math.floor(X*K.width),ue=Math.floor(X*K.height);p===void 0&&(p=y(he,ue));let j=v?y(he,ue):p;return j.width=he,j.height=ue,j.getContext("2d").drawImage(P,0,0,he,ue),Ne("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+he+"x"+ue+")."),j}else return"data"in P&&Ne("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),P;return P}function u(P){return P.generateMipmaps}function S(P){i.generateMipmap(P)}function T(P){return P.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?i.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(P,v,G,X,K,he=!1){if(P!==null){if(i[P]!==void 0)return i[P];Ne("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let ue;X&&(ue=e.get("EXT_texture_norm16"),ue||Ne("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let j=v;if(v===i.RED&&(G===i.FLOAT&&(j=i.R32F),G===i.HALF_FLOAT&&(j=i.R16F),G===i.UNSIGNED_BYTE&&(j=i.R8),G===i.UNSIGNED_SHORT&&ue&&(j=ue.R16_EXT),G===i.SHORT&&ue&&(j=ue.R16_SNORM_EXT)),v===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.R8UI),G===i.UNSIGNED_SHORT&&(j=i.R16UI),G===i.UNSIGNED_INT&&(j=i.R32UI),G===i.BYTE&&(j=i.R8I),G===i.SHORT&&(j=i.R16I),G===i.INT&&(j=i.R32I)),v===i.RG&&(G===i.FLOAT&&(j=i.RG32F),G===i.HALF_FLOAT&&(j=i.RG16F),G===i.UNSIGNED_BYTE&&(j=i.RG8),G===i.UNSIGNED_SHORT&&ue&&(j=ue.RG16_EXT),G===i.SHORT&&ue&&(j=ue.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RG8UI),G===i.UNSIGNED_SHORT&&(j=i.RG16UI),G===i.UNSIGNED_INT&&(j=i.RG32UI),G===i.BYTE&&(j=i.RG8I),G===i.SHORT&&(j=i.RG16I),G===i.INT&&(j=i.RG32I)),v===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGB8UI),G===i.UNSIGNED_SHORT&&(j=i.RGB16UI),G===i.UNSIGNED_INT&&(j=i.RGB32UI),G===i.BYTE&&(j=i.RGB8I),G===i.SHORT&&(j=i.RGB16I),G===i.INT&&(j=i.RGB32I)),v===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(j=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(j=i.RGBA16UI),G===i.UNSIGNED_INT&&(j=i.RGBA32UI),G===i.BYTE&&(j=i.RGBA8I),G===i.SHORT&&(j=i.RGBA16I),G===i.INT&&(j=i.RGBA32I)),v===i.RGB&&(G===i.UNSIGNED_SHORT&&ue&&(j=ue.RGB16_EXT),G===i.SHORT&&ue&&(j=ue.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(j=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(j=i.R11F_G11F_B10F)),v===i.RGBA){let ne=he?Ds:nt.getTransfer(K);G===i.FLOAT&&(j=i.RGBA32F),G===i.HALF_FLOAT&&(j=i.RGBA16F),G===i.UNSIGNED_BYTE&&(j=ne===ht?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&ue&&(j=ue.RGBA16_EXT),G===i.SHORT&&ue&&(j=ue.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(j=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(j=i.RGB5_A1)}return(j===i.R16F||j===i.R32F||j===i.RG16F||j===i.RG32F||j===i.RGBA16F||j===i.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function w(P,v){let G;return P?v===null||v===Sn||v===ms?G=i.DEPTH24_STENCIL8:v===Jt?G=i.DEPTH32F_STENCIL8:v===ps&&(G=i.DEPTH24_STENCIL8,Ne("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Sn||v===ms?G=i.DEPTH_COMPONENT24:v===Jt?G=i.DEPTH_COMPONENT32F:v===ps&&(G=i.DEPTH_COMPONENT16),G}function b(P,v){return u(P)===!0||P.isFramebufferTexture&&P.minFilter!==Ct&&P.minFilter!==ut?Math.log2(Math.max(v.width,v.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?v.mipmaps.length:1}function E(P){let v=P.target;v.removeEventListener("dispose",E),M(v),v.isVideoTexture&&d.delete(v),v.isHTMLTexture&&m.delete(v)}function x(P){let v=P.target;v.removeEventListener("dispose",x),z(v)}function M(P){let v=n.get(P);if(v.__webglInit===void 0)return;let G=P.source,X=h.get(G);if(X){let K=X[v.__cacheKey];K.usedTimes--,K.usedTimes===0&&I(P),Object.keys(X).length===0&&h.delete(G)}n.remove(P)}function I(P){let v=n.get(P);i.deleteTexture(v.__webglTexture);let G=P.source,X=h.get(G);delete X[v.__cacheKey],a.memory.textures--}function z(P){let v=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(v.__webglFramebuffer[X]))for(let K=0;K<v.__webglFramebuffer[X].length;K++)i.deleteFramebuffer(v.__webglFramebuffer[X][K]);else i.deleteFramebuffer(v.__webglFramebuffer[X]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[X])}else{if(Array.isArray(v.__webglFramebuffer))for(let X=0;X<v.__webglFramebuffer.length;X++)i.deleteFramebuffer(v.__webglFramebuffer[X]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let X=0;X<v.__webglColorRenderbuffer.length;X++)v.__webglColorRenderbuffer[X]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[X]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let G=P.textures;for(let X=0,K=G.length;X<K;X++){let he=n.get(G[X]);he.__webglTexture&&(i.deleteTexture(he.__webglTexture),a.memory.textures--),n.remove(G[X])}n.remove(P)}let D=0;function C(){D=0}function R(){return D}function L(P){D=P}function N(){let P=D;return P>=s.maxTextures&&Ne("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+s.maxTextures),D+=1,P}function k(P){let v=[];return v.push(P.wrapS),v.push(P.wrapT),v.push(P.wrapR||0),v.push(P.magFilter),v.push(P.minFilter),v.push(P.anisotropy),v.push(P.internalFormat),v.push(P.format),v.push(P.type),v.push(P.generateMipmaps),v.push(P.premultiplyAlpha),v.push(P.flipY),v.push(P.unpackAlignment),v.push(P.colorSpace),v.join()}function J(P,v){let G=n.get(P);if(P.isVideoTexture&&U(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&G.__version!==P.version){let X=P.image;if(X===null)Ne("WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)Ne("WebGLRenderer: Texture marked for update but image is incomplete");else{_e(G,P,v);return}}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+v)}function V(P,v){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,v);return}else P.isExternalTexture&&(G.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+v)}function q(P,v){let G=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&G.__version!==P.version){_e(G,P,v);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+v)}function Y(P,v){let G=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&G.__version!==P.version){Ue(G,P,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+v)}let ce={[Cn]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},de={[Ct]:i.NEAREST,[bh]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[ut]:i.LINEAR,[Aa]:i.LINEAR_MIPMAP_NEAREST,[on]:i.LINEAR_MIPMAP_LINEAR},Ke={[Eh]:i.NEVER,[Ph]:i.ALWAYS,[Ch]:i.LESS,[ho]:i.LEQUAL,[zh]:i.EQUAL,[uo]:i.GEQUAL,[Rh]:i.GREATER,[Ih]:i.NOTEQUAL};function Ye(P,v){if(v.type===Jt&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===ut||v.magFilter===Aa||v.magFilter===cr||v.magFilter===on||v.minFilter===ut||v.minFilter===Aa||v.minFilter===cr||v.minFilter===on)&&Ne("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(P,i.TEXTURE_WRAP_S,ce[v.wrapS]),i.texParameteri(P,i.TEXTURE_WRAP_T,ce[v.wrapT]),(P===i.TEXTURE_3D||P===i.TEXTURE_2D_ARRAY)&&i.texParameteri(P,i.TEXTURE_WRAP_R,ce[v.wrapR]),i.texParameteri(P,i.TEXTURE_MAG_FILTER,de[v.magFilter]),i.texParameteri(P,i.TEXTURE_MIN_FILTER,de[v.minFilter]),v.compareFunction&&(i.texParameteri(P,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(P,i.TEXTURE_COMPARE_FUNC,Ke[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Ct||v.minFilter!==cr&&v.minFilter!==on||v.type===Jt&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(P,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function tt(P,v){let G=!1;P.__webglInit===void 0&&(P.__webglInit=!0,v.addEventListener("dispose",E));let X=v.source,K=h.get(X);K===void 0&&(K={},h.set(X,K));let he=k(v);if(he!==P.__cacheKey){K[he]===void 0&&(K[he]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),K[he].usedTimes++;let ue=K[P.__cacheKey];ue!==void 0&&(K[P.__cacheKey].usedTimes--,ue.usedTimes===0&&I(v)),P.__cacheKey=he,P.__webglTexture=K[he].texture}return G}function $(P,v,G){return Math.floor(Math.floor(P/G)/v)}function te(P,v,G,X){let he=P.updateRanges;if(he.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,G,X,v.data);else{he.sort((Ie,ye)=>Ie.start-ye.start);let ue=0;for(let Ie=1;Ie<he.length;Ie++){let ye=he[ue],me=he[Ie],Pe=ye.start+ye.count,Be=$(me.start,v.width,4),qe=$(ye.start,v.width,4);me.start<=Pe+1&&Be===qe&&$(me.start+me.count-1,v.width,4)===Be?ye.count=Math.max(ye.count,me.start+me.count-ye.start):(++ue,he[ue]=me)}he.length=ue+1;let j=t.getParameter(i.UNPACK_ROW_LENGTH),ne=t.getParameter(i.UNPACK_SKIP_PIXELS),pe=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let Ie=0,ye=he.length;Ie<ye;Ie++){let me=he[Ie],Pe=Math.floor(me.start/4),Be=Math.ceil(me.count/4),qe=Pe%v.width,O=Math.floor(Pe/v.width),ge=Be,ee=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,qe),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,qe,O,ge,ee,G,X,v.data)}P.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,j),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ne),t.pixelStorei(i.UNPACK_SKIP_ROWS,pe)}}function _e(P,v,G){let X=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(X=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(X=i.TEXTURE_3D);let K=tt(P,v),he=v.source;t.bindTexture(X,P.__webglTexture,i.TEXTURE0+G);let ue=n.get(he);if(he.version!==ue.__version||K===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ee=nt.getPrimaries(nt.workingColorSpace),xe=v.colorSpace===Zn?null:nt.getPrimaries(v.colorSpace),be=v.colorSpace===Zn||ee===xe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,be)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ne=g(v.image,!1,s.maxTextureSize);ne=ot(v,ne);let pe=r.convert(v.format,v.colorSpace),Ie=r.convert(v.type),ye=_(v.internalFormat,pe,Ie,v.normalized,v.colorSpace,v.isVideoTexture);Ye(X,v);let me,Pe=v.mipmaps,Be=v.isVideoTexture!==!0,qe=ue.__version===void 0||K===!0,O=he.dataReady,ge=b(v,ne);if(v.isDepthTexture)ye=w(v.format===di,v.type),qe&&(Be?t.texStorage2D(i.TEXTURE_2D,1,ye,ne.width,ne.height):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,pe,Ie,null));else if(v.isDataTexture)if(Pe.length>0){Be&&qe&&t.texStorage2D(i.TEXTURE_2D,ge,ye,Pe[0].width,Pe[0].height);for(let ee=0,xe=Pe.length;ee<xe;ee++)me=Pe[ee],Be?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ie,me.data):t.texImage2D(i.TEXTURE_2D,ee,ye,me.width,me.height,0,pe,Ie,me.data);v.generateMipmaps=!1}else Be?(qe&&t.texStorage2D(i.TEXTURE_2D,ge,ye,ne.width,ne.height),O&&te(v,ne,pe,Ie)):t.texImage2D(i.TEXTURE_2D,0,ye,ne.width,ne.height,0,pe,Ie,ne.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Be&&qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ye,Pe[0].width,Pe[0].height,ne.depth);for(let ee=0,xe=Pe.length;ee<xe;ee++)if(me=Pe[ee],v.format!==$t)if(pe!==null)if(Be){if(O)if(v.layerUpdates.size>0){let be=Vl(me.width,me.height,v.format,v.type);for(let se of v.layerUpdates){let Le=me.data.subarray(se*be/me.data.BYTES_PER_ELEMENT,(se+1)*be/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,se,me.width,me.height,1,pe,Le)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,pe,me.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ee,ye,me.width,me.height,ne.depth,0,me.data,0,0);else Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Be?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ee,0,0,0,me.width,me.height,ne.depth,pe,Ie,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ee,ye,me.width,me.height,ne.depth,0,pe,Ie,me.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Be&&qe&&t.texStorage2D(i.TEXTURE_2D,ge,ye,Pe[0].width,Pe[0].height);for(let ee=0,xe=Pe.length;ee<xe;ee++)me=Pe[ee],v.format!==$t?pe!==null?Be?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,ee,ye,me.width,me.height,0,me.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Be?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,me.width,me.height,pe,Ie,me.data):t.texImage2D(i.TEXTURE_2D,ee,ye,me.width,me.height,0,pe,Ie,me.data)}else if(v.isDataArrayTexture)if(Be){if(qe&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,ye,ne.width,ne.height,ne.depth),O)if(v.layerUpdates.size>0){let ee=Vl(ne.width,ne.height,v.format,v.type);for(let xe of v.layerUpdates){let be=ne.data.subarray(xe*ee/ne.data.BYTES_PER_ELEMENT,(xe+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,ne.width,ne.height,1,pe,Ie,be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ie,ne.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,ne.width,ne.height,ne.depth,0,pe,Ie,ne.data);else if(v.isData3DTexture)Be?(qe&&t.texStorage3D(i.TEXTURE_3D,ge,ye,ne.width,ne.height,ne.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,pe,Ie,ne.data)):t.texImage3D(i.TEXTURE_3D,0,ye,ne.width,ne.height,ne.depth,0,pe,Ie,ne.data);else if(v.isFramebufferTexture){if(qe)if(Be)t.texStorage2D(i.TEXTURE_2D,ge,ye,ne.width,ne.height);else{let ee=ne.width,xe=ne.height;for(let be=0;be<ge;be++)t.texImage2D(i.TEXTURE_2D,be,ye,ee,xe,0,pe,Ie,null),ee>>=1,xe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ee=i.canvas;if(ee.hasAttribute("layoutsubtree")||ee.setAttribute("layoutsubtree","true"),ne.parentNode!==ee){ee.appendChild(ne),m.add(v),ee.onpaint=xe=>{let be=xe.changedElements;for(let se of m)be.includes(se.image)&&(se.needsUpdate=!0)},ee.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ne);else{let be=i.RGBA,se=i.RGBA,Le=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,be,se,Le,ne)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Pe.length>0){if(Be&&qe){let ee=Qe(Pe[0]);t.texStorage2D(i.TEXTURE_2D,ge,ye,ee.width,ee.height)}for(let ee=0,xe=Pe.length;ee<xe;ee++)me=Pe[ee],Be?O&&t.texSubImage2D(i.TEXTURE_2D,ee,0,0,pe,Ie,me):t.texImage2D(i.TEXTURE_2D,ee,ye,pe,Ie,me);v.generateMipmaps=!1}else if(Be){if(qe){let ee=Qe(ne);t.texStorage2D(i.TEXTURE_2D,ge,ye,ee.width,ee.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,Ie,ne)}else t.texImage2D(i.TEXTURE_2D,0,ye,pe,Ie,ne);u(v)&&S(X),ue.__version=he.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function Ue(P,v,G){if(v.image.length!==6)return;let X=tt(P,v),K=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,P.__webglTexture,i.TEXTURE0+G);let he=n.get(K);if(K.version!==he.__version||X===!0){t.activeTexture(i.TEXTURE0+G);let ue=nt.getPrimaries(nt.workingColorSpace),j=v.colorSpace===Zn?null:nt.getPrimaries(v.colorSpace),ne=v.colorSpace===Zn||ue===j?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne);let pe=v.isCompressedTexture||v.image[0].isCompressedTexture,Ie=v.image[0]&&v.image[0].isDataTexture,ye=[];for(let se=0;se<6;se++)!pe&&!Ie?ye[se]=g(v.image[se],!0,s.maxCubemapSize):ye[se]=Ie?v.image[se].image:v.image[se],ye[se]=ot(v,ye[se]);let me=ye[0],Pe=r.convert(v.format,v.colorSpace),Be=r.convert(v.type),qe=_(v.internalFormat,Pe,Be,v.normalized,v.colorSpace),O=v.isVideoTexture!==!0,ge=he.__version===void 0||X===!0,ee=K.dataReady,xe=b(v,me);Ye(i.TEXTURE_CUBE_MAP,v);let be;if(pe){O&&ge&&t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,me.width,me.height);for(let se=0;se<6;se++){be=ye[se].mipmaps;for(let Le=0;Le<be.length;Le++){let ze=be[Le];v.format!==$t?Pe!==null?O?ee&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,ze.width,ze.height,Pe,ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,qe,ze.width,ze.height,0,ze.data):Ne("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,0,0,ze.width,ze.height,Pe,Be,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le,qe,ze.width,ze.height,0,Pe,Be,ze.data)}}}else{if(be=v.mipmaps,O&&ge){be.length>0&&xe++;let se=Qe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,xe,qe,se.width,se.height)}for(let se=0;se<6;se++)if(Ie){O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,ye[se].width,ye[se].height,Pe,Be,ye[se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,ye[se].width,ye[se].height,0,Pe,Be,ye[se].data);for(let Le=0;Le<be.length;Le++){let mt=be[Le].image[se].image;O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,mt.width,mt.height,Pe,Be,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,qe,mt.width,mt.height,0,Pe,Be,mt.data)}}else{O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Pe,Be,ye[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,qe,Pe,Be,ye[se]);for(let Le=0;Le<be.length;Le++){let ze=be[Le];O?ee&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,0,0,Pe,Be,ze.image[se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+se,Le+1,qe,Pe,Be,ze.image[se])}}}u(v)&&S(i.TEXTURE_CUBE_MAP),he.__version=K.version,v.onUpdate&&v.onUpdate(v)}P.__version=v.version}function ie(P,v,G,X,K,he){let ue=r.convert(G.format,G.colorSpace),j=r.convert(G.type),ne=_(G.internalFormat,ue,j,G.normalized,G.colorSpace),pe=n.get(v),Ie=n.get(G);if(Ie.__renderTarget=v,!pe.__hasExternalTextures){let ye=Math.max(1,v.width>>he),me=Math.max(1,v.height>>he);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?t.texImage3D(K,he,ne,ye,me,v.depth,0,ue,j,null):t.texImage2D(K,he,ne,ye,me,0,ue,j,null)}t.bindFramebuffer(i.FRAMEBUFFER,P),We(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,X,K,Ie.__webglTexture,0,Ve(v)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,X,K,Ie.__webglTexture,he),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(P,v,G){if(i.bindRenderbuffer(i.RENDERBUFFER,P),v.depthBuffer){let X=v.depthTexture,K=X&&X.isDepthTexture?X.type:null,he=w(v.stencilBuffer,K),ue=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;We(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(v),he,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(v),he,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,he,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ue,i.RENDERBUFFER,P)}else{let X=v.textures;for(let K=0;K<X.length;K++){let he=X[K],ue=r.convert(he.format,he.colorSpace),j=r.convert(he.type),ne=_(he.internalFormat,ue,j,he.normalized,he.colorSpace);We(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ve(v),ne,v.width,v.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ve(v),ne,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ne,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function je(P,v,G){let X=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,P),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(v.depthTexture);if(K.__renderTarget=v,(!K.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),X){if(K.__webglInit===void 0&&(K.__webglInit=!0,v.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,K.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v.depthTexture);let pe=r.convert(v.depthTexture.format),Ie=r.convert(v.depthTexture.type),ye;v.depthTexture.format===zn?ye=i.DEPTH_COMPONENT24:v.depthTexture.format===di&&(ye=i.DEPTH24_STENCIL8);for(let me=0;me<6;me++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0,ye,v.width,v.height,0,pe,Ie,null)}}else J(v.depthTexture,0);let he=K.__webglTexture,ue=Ve(v),j=X?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,ne=v.depthTexture.format===di?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===zn)We(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,he,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,he,0);else if(v.depthTexture.format===di)We(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,j,he,0,ue):i.framebufferTexture2D(i.FRAMEBUFFER,ne,j,he,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Q(P){let v=n.get(P),G=P.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==P.depthTexture){let X=P.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),X){let K=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,X.removeEventListener("dispose",K)};X.addEventListener("dispose",K),v.__depthDisposeCallback=K}v.__boundDepthTexture=X}if(P.depthTexture&&!v.__autoAllocateDepthBuffer)if(G)for(let X=0;X<6;X++)je(v.__webglFramebuffer[X],P,X);else{let X=P.texture.mipmaps;X&&X.length>0?je(v.__webglFramebuffer[0],P,0):je(v.__webglFramebuffer,P,0)}else if(G){v.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[X]),v.__webglDepthbuffer[X]===void 0)v.__webglDepthbuffer[X]=i.createRenderbuffer(),Ae(v.__webglDepthbuffer[X],P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer[X];i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}else{let X=P.texture.mipmaps;if(X&&X.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),Ae(v.__webglDepthbuffer,P,!1);else{let K=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,he)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(P,v,G){let X=n.get(P);v!==void 0&&ie(X.__webglFramebuffer,P,P.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Q(P)}function oe(P){let v=P.texture,G=n.get(P),X=n.get(v);P.addEventListener("dispose",x);let K=P.textures,he=P.isWebGLCubeRenderTarget===!0,ue=K.length>1;if(ue||(X.__webglTexture===void 0&&(X.__webglTexture=i.createTexture()),X.__version=v.version,a.memory.textures++),he){G.__webglFramebuffer=[];for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer[j]=[];for(let ne=0;ne<v.mipmaps.length;ne++)G.__webglFramebuffer[j][ne]=i.createFramebuffer()}else G.__webglFramebuffer[j]=i.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){G.__webglFramebuffer=[];for(let j=0;j<v.mipmaps.length;j++)G.__webglFramebuffer[j]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(ue)for(let j=0,ne=K.length;j<ne;j++){let pe=n.get(K[j]);pe.__webglTexture===void 0&&(pe.__webglTexture=i.createTexture(),a.memory.textures++)}if(P.samples>0&&We(P)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let j=0;j<K.length;j++){let ne=K[j];G.__webglColorRenderbuffer[j]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[j]);let pe=r.convert(ne.format,ne.colorSpace),Ie=r.convert(ne.type),ye=_(ne.internalFormat,pe,Ie,ne.normalized,ne.colorSpace,P.isXRRenderTarget===!0),me=Ve(P);i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ye,P.width,P.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+j,i.RENDERBUFFER,G.__webglColorRenderbuffer[j])}i.bindRenderbuffer(i.RENDERBUFFER,null),P.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(he){t.bindTexture(i.TEXTURE_CUBE_MAP,X.__webglTexture),Ye(i.TEXTURE_CUBE_MAP,v);for(let j=0;j<6;j++)if(v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ie(G.__webglFramebuffer[j][ne],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne);else ie(G.__webglFramebuffer[j],P,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0);u(v)&&S(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ue){for(let j=0,ne=K.length;j<ne;j++){let pe=K[j],Ie=n.get(pe),ye=i.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(ye=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ie.__webglTexture),Ye(ye,pe),ie(G.__webglFramebuffer,P,pe,i.COLOR_ATTACHMENT0+j,ye,0),u(pe)&&S(ye)}t.unbindTexture()}else{let j=i.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(j=P.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(j,X.__webglTexture),Ye(j,v),v.mipmaps&&v.mipmaps.length>0)for(let ne=0;ne<v.mipmaps.length;ne++)ie(G.__webglFramebuffer[ne],P,v,i.COLOR_ATTACHMENT0,j,ne);else ie(G.__webglFramebuffer,P,v,i.COLOR_ATTACHMENT0,j,0);u(v)&&S(j),t.unbindTexture()}P.depthBuffer&&Q(P)}function le(P){let v=P.textures;for(let G=0,X=v.length;G<X;G++){let K=v[G];if(u(K)){let he=T(P),ue=n.get(K).__webglTexture;t.bindTexture(he,ue),S(he),t.unbindTexture()}}}let fe=[],Fe=[];function De(P){if(P.samples>0){if(We(P)===!1){let v=P.textures,G=P.width,X=P.height,K=i.COLOR_BUFFER_BIT,he=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ue=n.get(P),j=v.length>1;if(j)for(let pe=0;pe<v.length;pe++)t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);let ne=P.texture.mipmaps;ne&&ne.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let pe=0;pe<v.length;pe++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),j){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Ie=n.get(v[pe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ie,0)}i.blitFramebuffer(0,0,G,X,0,0,G,X,K,i.NEAREST),l===!0&&(fe.length=0,Fe.length=0,fe.push(i.COLOR_ATTACHMENT0+pe),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&(fe.push(he),Fe.push(he),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Fe)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),j)for(let pe=0;pe<v.length;pe++){t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ue.__webglColorRenderbuffer[pe]);let Ie=n.get(v[pe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ue.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.TEXTURE_2D,Ie,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&l){let v=P.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function Ve(P){return Math.min(s.maxSamples,P.samples)}function We(P){let v=n.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function U(P){let v=a.render.frame;d.get(P)!==v&&(d.set(P,v),P.update())}function ot(P,v){let G=P.colorSpace,X=P.format,K=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||G!==Hn&&G!==Zn&&(nt.getTransfer(G)===ht?(X!==$t||K!==Zt)&&Ne("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Oe("WebGLTextures: Unsupported texture color space:",G)),v}function Qe(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=C,this.getTextureUnits=R,this.setTextureUnits=L,this.setTexture2D=J,this.setTexture2DArray=V,this.setTexture3D=q,this.setTextureCube=Y,this.rebindTextures=ae,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=le,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=Q,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function hx(i,e){function t(n,s=Zn){let r,a=nt.getTransfer(s);if(n===Zt)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===za)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Rl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===El)return i.BYTE;if(n===Cl)return i.SHORT;if(n===ps)return i.UNSIGNED_SHORT;if(n===Ea)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===Jt)return i.FLOAT;if(n===Wt)return i.HALF_FLOAT;if(n===Il)return i.ALPHA;if(n===Pl)return i.RGB;if(n===$t)return i.RGBA;if(n===zn)return i.DEPTH_COMPONENT;if(n===di)return i.DEPTH_STENCIL;if(n===Ll)return i.RED;if(n===Ra)return i.RED_INTEGER;if(n===fi)return i.RG;if(n===Ia)return i.RG_INTEGER;if(n===Pa)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===ht)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===La||n===Da||n===Na||n===Ua)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===La)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fa||n===Ba||n===Oa||n===ka||n===Va||n===pr||n===Ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Fa||n===Ba)return a===ht?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ka)return r.COMPRESSED_R11_EAC;if(n===Va)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return r.COMPRESSED_RG11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Ha||n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ha)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Wa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Xa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ya)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Za)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ja)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===$a)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ka)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ja)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Qa)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===eo)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===to)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===no)return a===ht?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===io||n===so||n===ro)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===io)return a===ht?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===so)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===ao||n===oo||n===mr||n===lo)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ao)return r.COMPRESSED_RED_RGTC1_EXT;if(n===oo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ms?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var ux=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dx=`
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

}`,ac=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:ux,fragmentShader:dx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ge(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},oc=class extends Rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,d=null,m=null,p=null,h=null,f=null,y=typeof XRWebGLBinding<"u",g=new ac,u={},S=t.getContextAttributes(),T=null,_=null,w=[],b=[],E=new re,x=null,M=null,I=new Ut;I.viewport=new rt;let z=new Ut;z.viewport=new rt;let D=[I,z],C=new ba,R=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let te=w[$];return te===void 0&&(te=new is,w[$]=te),te.getTargetRaySpace()},this.getControllerGrip=function($){let te=w[$];return te===void 0&&(te=new is,w[$]=te),te.getGripSpace()},this.getHand=function($){let te=w[$];return te===void 0&&(te=new is,w[$]=te),te.getHandSpace()};function N($){let te=b.indexOf($.inputSource);if(te===-1)return;let _e=w[te];_e!==void 0&&(_e.update($.inputSource,$.frame,c||a),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function k(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",k),s.removeEventListener("inputsourceschange",J);for(let $=0;$<w.length;$++){let te=b[$];te!==null&&(b[$]=null,w[$].disconnect(te))}R=null,L=null,g.reset();for(let $ in u)delete u[$];if(e.setRenderTarget(T),h=null,p=null,m=null,s=null,_=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(E.width,E.height,!1),M!==null){let $=M.camera;$.fov=M.fov,$.zoom=M.zoom,$.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&Ne("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return p!==null?p:h},this.getBinding=function(){return m===null&&y&&(m=new XRWebGLBinding(s,t)),m},this.getFrame=function(){return f},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",k),s.addEventListener("inputsourceschange",J),S.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(E),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let _e=null,Ue=null,ie=null;S.depth&&(ie=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=S.stencil?di:zn,Ue=S.stencil?ms:Sn);let Ae={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};m=this.getBinding(),p=m.createProjectionLayer(Ae),s.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),_=new qt(p.textureWidth,p.textureHeight,{format:$t,type:Zt,depthTexture:new ri(p.textureWidth,p.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{let _e={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:r};h=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),_=new qt(h.framebufferWidth,h.framebufferHeight,{format:$t,type:Zt,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),tt.setContext(s),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function J($){for(let te=0;te<$.removed.length;te++){let _e=$.removed[te],Ue=b.indexOf(_e);Ue>=0&&(b[Ue]=null,w[Ue].disconnect(_e))}for(let te=0;te<$.added.length;te++){let _e=$.added[te],Ue=b.indexOf(_e);if(Ue===-1){for(let Ae=0;Ae<w.length;Ae++)if(Ae>=b.length){b.push(_e),Ue=Ae;break}else if(b[Ae]===null){b[Ae]=_e,Ue=Ae;break}if(Ue===-1)break}let ie=w[Ue];ie&&ie.connect(_e)}}let V=new F,q=new F;function Y($,te,_e){V.setFromMatrixPosition(te.matrixWorld),q.setFromMatrixPosition(_e.matrixWorld);let Ue=V.distanceTo(q),ie=te.projectionMatrix.elements,Ae=_e.projectionMatrix.elements,je=ie[14]/(ie[10]-1),Q=ie[14]/(ie[10]+1),ae=(ie[9]+1)/ie[5],oe=(ie[9]-1)/ie[5],le=(ie[8]-1)/ie[0],fe=(Ae[8]+1)/Ae[0],Fe=je*le,De=je*fe,Ve=Ue/(-le+fe),We=Ve*-le;if(te.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(We),$.translateZ(Ve),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ie[10]===-1)$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{let U=je+Ve,ot=Q+Ve,Qe=Fe-We,P=De+(Ue-We),v=ae*Q/ot*U,G=oe*Q/ot*U;$.projectionMatrix.makePerspective(Qe,P,v,G,U,ot),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ce($,te){te===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(te.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let te=$.near,_e=$.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(_e=g.depthFar)),C.near=z.near=I.near=te,C.far=z.far=I.far=_e,(R!==C.near||L!==C.far)&&(s.updateRenderState({depthNear:C.near,depthFar:C.far}),R=C.near,L=C.far),C.layers.mask=$.layers.mask|6,I.layers.mask=C.layers.mask&-5,z.layers.mask=C.layers.mask&-3;let Ue=$.parent,ie=C.cameras;ce(C,Ue);for(let Ae=0;Ae<ie.length;Ae++)ce(ie[Ae],Ue);ie.length===2?Y(C,I,z):C.projectionMatrix.copy(I.projectionMatrix),M===null&&$.isPerspectiveCamera&&(M={camera:$,fov:$.fov,zoom:$.zoom}),de($,C,Ue)};function de($,te,_e){_e===null?$.matrix.copy(te.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(te.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(te.projectionMatrix),$.projectionMatrixInverse.copy(te.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=es*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(p===null&&h===null))return l},this.setFoveation=function($){l=$,p!==null&&(p.fixedFoveation=$),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(C)},this.getCameraTexture=function($){return u[$]};let Ke=null;function Ye($,te){if(d=te.getViewerPose(c||a),f=te,d!==null){let _e=d.views;h!==null&&(e.setRenderTargetFramebuffer(_,h.framebuffer),e.setRenderTarget(_));let Ue=!1;_e.length!==C.cameras.length&&(C.cameras.length=0,Ue=!0);for(let Q=0;Q<_e.length;Q++){let ae=_e[Q],oe=null;if(h!==null)oe=h.getViewport(ae);else{let fe=m.getViewSubImage(p,ae);oe=fe.viewport,Q===0&&(e.setRenderTargetTextures(_,fe.colorTexture,fe.depthStencilTexture),e.setRenderTarget(_))}let le=D[Q];le===void 0&&(le=new Ut,le.layers.enable(Q),le.viewport=new rt,D[Q]=le),le.matrix.fromArray(ae.transform.matrix),le.matrix.decompose(le.position,le.quaternion,le.scale),le.projectionMatrix.fromArray(ae.projectionMatrix),le.projectionMatrixInverse.copy(le.projectionMatrix).invert(),le.viewport.set(oe.x,oe.y,oe.width,oe.height),Q===0&&(C.matrix.copy(le.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ue===!0&&C.cameras.push(le)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){m=n.getBinding();let Q=m.getDepthInformation(_e[0]);Q&&Q.isValid&&Q.texture&&g.init(Q,s.renderState)}if(ie&&ie.includes("camera-access")&&y){e.state.unbindTexture(),m=n.getBinding();for(let Q=0;Q<_e.length;Q++){let ae=_e[Q].camera;if(ae){let oe=u[ae];oe||(oe=new Hs,u[ae]=oe);let le=m.getCameraImage(ae);oe.sourceTexture=le}}}}for(let _e=0;_e<w.length;_e++){let Ue=b[_e],ie=w[_e];Ue!==null&&ie!==void 0&&ie.update(Ue,te,c||a)}Ke&&Ke($,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),f=null}let tt=new fu;tt.setAnimationLoop(Ye),this.setAnimationLoop=function($){Ke=$},this.dispose=function(){}}},fx=new pt,yu=new He;yu.set(-1,0,0,0,1,0,0,0,1);function px(i,e){function t(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function n(g,u){u.color.getRGB(g.fogColor.value,Bl(i)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function s(g,u,S,T,_){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?r(g,u):u.isMeshLambertMaterial?(r(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(r(g,u),m(g,u)):u.isMeshPhongMaterial?(r(g,u),d(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(r(g,u),p(g,u),u.isMeshPhysicalMaterial&&h(g,u,_)):u.isMeshMatcapMaterial?(r(g,u),f(g,u)):u.isMeshDepthMaterial?r(g,u):u.isMeshDistanceMaterial?(r(g,u),y(g,u)):u.isMeshNormalMaterial?r(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,S,T):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,t(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===Ht&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,t(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===Ht&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,t(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,t(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);let S=e.get(u),T=S.envMap,_=S.envMapRotation;T&&(g.envMap.value=T,g.envMapRotation.value.setFromMatrix4(fx.makeRotationFromEuler(_)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(yu),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,S,T){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*S,g.scale.value=T*.5,u.map&&(g.map.value=u.map,t(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,t(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,t(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function d(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function m(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function p(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function h(g,u,S){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ht&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.retroreflectivity>0&&(g.retroreflectivity.value=u.retroreflectivity),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=S.texture,g.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,g.specularIntensityMapTransform))}function f(g,u){u.matcap&&(g.matcap.value=u.matcap)}function y(g,u){let S=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(S.matrixWorld),g.nearDistance.value=S.shadow.camera.near,g.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function mx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,w){let b=w.program;n.uniformBlockBinding(_,b)}function c(_,w){let b=s[_.id];b===void 0&&(g(_),b=d(_),s[_.id]=b,_.addEventListener("dispose",S));let E=w.program;n.updateUBOMapping(_,E);let x=e.render.frame;r[_.id]!==x&&(p(_),r[_.id]=x)}function d(_){let w=m();_.__bindingPointIndex=w;let b=i.createBuffer(),E=_.__size,x=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,E,x),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,b),b}function m(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Oe("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(_){let w=s[_.id],b=_.uniforms,E=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let x=0,M=b.length;x<M;x++){let I=b[x];if(Array.isArray(I))for(let z=0,D=I.length;z<D;z++)h(I[z],x,z,E);else h(I,x,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(_,w,b,E){if(y(_,w,b,E)===!0){let x=_.__offset,M=_.value;if(Array.isArray(M)){let I=0;for(let z=0;z<M.length;z++){let D=M[z],C=u(D);f(D,_.__data,I),typeof D!="number"&&typeof D!="boolean"&&!D.isMatrix3&&!ArrayBuffer.isView(D)&&(I+=C.storage/Float32Array.BYTES_PER_ELEMENT)}}else f(M,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,x,_.__data)}}function f(_,w,b){typeof _=="number"||typeof _=="boolean"?w[0]=_:_.isMatrix3?(w[0]=_.elements[0],w[1]=_.elements[1],w[2]=_.elements[2],w[3]=0,w[4]=_.elements[3],w[5]=_.elements[4],w[6]=_.elements[5],w[7]=0,w[8]=_.elements[6],w[9]=_.elements[7],w[10]=_.elements[8],w[11]=0):ArrayBuffer.isView(_)?w.set(new _.constructor(_.buffer,_.byteOffset,w.length)):_.toArray(w,b)}function y(_,w,b,E){let x=_.value,M=w+"_"+b;if(E[M]===void 0)return typeof x=="number"||typeof x=="boolean"?E[M]=x:ArrayBuffer.isView(x)?E[M]=x.slice():E[M]=x.clone(),!0;{let I=E[M];if(typeof x=="number"||typeof x=="boolean"){if(I!==x)return E[M]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(I.equals(x)===!1)return I.copy(x),!0}}return!1}function g(_){let w=_.uniforms,b=0,E=16;for(let M=0,I=w.length;M<I;M++){let z=Array.isArray(w[M])?w[M]:[w[M]];for(let D=0,C=z.length;D<C;D++){let R=z[D],L=Array.isArray(R.value)?R.value:[R.value];for(let N=0,k=L.length;N<k;N++){let J=L[N],V=u(J),q=b%E,Y=q%V.boundary,ce=q+Y;b+=Y,ce!==0&&E-ce<V.storage&&(b+=E-ce),R.__data=new Float32Array(V.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=V.storage}}}let x=b%E;return x>0&&(b+=E-x),_.__size=b,_.__cache={},this}function u(_){let w={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?Ne("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(w.boundary=16,w.storage=_.byteLength):Ne("WebGLRenderer: Unsupported uniform value type.",_),w}function S(_){let w=_.target;w.removeEventListener("dispose",S);let b=a.indexOf(w.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var gx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function xx(){return Ln===null&&(Ln=new un(gx,16,16,fi,Wt),Ln.name="DFG_LUT",Ln.minFilter=ut,Ln.magFilter=ut,Ln.wrapS=hn,Ln.wrapT=hn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var xo=class{constructor(e={}){let{canvas:t=Dh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:m=!1,reversedDepthBuffer:p=!1,outputBufferType:h=Zt}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let y=h,g=new Set([Pa,Ia,Ra]),u=new Set([Zt,Sn,ps,ms,Ca,za]),S=new Uint32Array(4),T=new Int32Array(4),_=new F,w=null,b=null,E=[],x=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,z=!1,D=null,C=null,R=null,L=null;this._outputColorSpace=Nt;let N=0,k=0,J=null,V=-1,q=null,Y=new rt,ce=new rt,de=null,Ke=new Xe(0),Ye=0,tt=t.width,$=t.height,te=1,_e=null,Ue=null,ie=new rt(0,0,tt,$),Ae=new rt(0,0,tt,$),je=!1,Q=new rs,ae=!1,oe=!1,le=new pt,fe=new F,Fe=new rt,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ve=!1;function We(){return J===null?te:1}let U=n;function ot(A,B){return t.getContext(A,B)}let Qe,P,v,G,X,K,he,ue,j,ne,pe,Ie,ye,me,Pe,Be,qe,O,ge,ee,xe,be,se;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:m};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",mt,!1),t.addEventListener("webglcontextrestored",lt,!1),t.addEventListener("webglcontextcreationerror",dn,!1),U===null){let B="webgl2";if(U=ot(B,A),U===null)throw ot(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Le()}catch(A){throw t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),Oe("WebGLRenderer: "+A.message),A}function Le(){Qe=new wg(U),Qe.init(),xe=new hx(U,Qe),P=new pg(U,Qe,e,xe),v=new lx(U,Qe),P.reversedDepthBuffer&&p&&v.buffers.depth.setReversed(!0),C=U.createFramebuffer(),R=U.createFramebuffer(),L=U.createFramebuffer(),G=new Eg(U),X=new Z0,K=new cx(U,Qe,v,X,P,xe,G),he=new bg(I),ue=new zf(U),be=new dg(U,ue),j=new Tg(U,ue,G,be),ne=new zg(U,j,ue,be,G),O=new Cg(U,P,K),Pe=new mg(X),pe=new Y0(I,he,Qe,P,be,Pe),Ie=new px(I,X),ye=new $0,me=new nx(Qe),qe=new ug(I,he,v,ne,f,l),Be=new ox(I,ne,P),se=new mx(U,G,P,v),ge=new fg(U,Qe,G),ee=new Ag(U,Qe,G),G.programs=pe.programs,I.capabilities=P,I.extensions=Qe,I.properties=X,I.renderLists=ye,I.shadowMap=Be,I.state=v,I.info=G}y!==Zt&&(M=new Ig(y,t.width,t.height,o,s,r));let ze=new oc(I,U);this.xr=ze,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(A){A!==void 0&&(te=A,this.setSize(tt,$,!1))},this.getSize=function(A){return A.set(tt,$)},this.setSize=function(A,B,Z=!0){if(ze.isPresenting){Ne("WebGLRenderer: Can't change size while VR device is presenting.");return}tt=A,$=B,t.width=Math.floor(A*te),t.height=Math.floor(B*te),Z===!0&&(t.style.width=A+"px",t.style.height=B+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(tt*te,$*te).floor()},this.setDrawingBufferSize=function(A,B,Z){tt=A,$=B,te=Z,t.width=Math.floor(A*Z),t.height=Math.floor(B*Z),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(y===Zt){Oe("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Ne("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(Y)},this.getViewport=function(A){return A.copy(ie)},this.setViewport=function(A,B,Z,H){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,B,Z,H),v.viewport(Y.copy(ie).multiplyScalar(te).round())},this.getScissor=function(A){return A.copy(Ae)},this.setScissor=function(A,B,Z,H){A.isVector4?Ae.set(A.x,A.y,A.z,A.w):Ae.set(A,B,Z,H),v.scissor(ce.copy(Ae).multiplyScalar(te).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){v.setScissorTest(je=A)},this.setOpaqueSort=function(A){_e=A},this.setTransparentSort=function(A){Ue=A},this.getClearColor=function(A){return A.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor(...arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Z=!0){let H=0;if(A){let W=!1;if(J!==null){let Se=J.texture.format;W=g.has(Se)}if(W){let Se=J.texture.type,Te=u.has(Se),Me=qe.getClearColor(),Ee=qe.getClearAlpha(),Re=Me.r,Je=Me.g,et=Me.b;Te?(S[0]=Re,S[1]=Je,S[2]=et,S[3]=Ee,U.clearBufferuiv(U.COLOR,0,S)):(T[0]=Re,T[1]=Je,T[2]=et,T[3]=Ee,U.clearBufferiv(U.COLOR,0,T))}else H|=U.COLOR_BUFFER_BIT}B&&(H|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(H|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&U.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),D=A},this.dispose=function(){t.removeEventListener("webglcontextlost",mt,!1),t.removeEventListener("webglcontextrestored",lt,!1),t.removeEventListener("webglcontextcreationerror",dn,!1),qe.dispose(),ye.dispose(),me.dispose(),X.dispose(),he.dispose(),ne.dispose(),be.dispose(),se.dispose(),pe.dispose(),ze.dispose(),ze.removeEventListener("sessionstart",uc),ze.removeEventListener("sessionend",dc),gi.stop()};function mt(A){A.preventDefault(),Nl("WebGLRenderer: Context Lost."),z=!0}function lt(){Nl("WebGLRenderer: Context Restored."),z=!1;let A=G.autoReset,B=Be.enabled,Z=Be.autoUpdate,H=Be.needsUpdate,W=Be.type;Le(),G.autoReset=A,Be.enabled=B,Be.autoUpdate=Z,Be.needsUpdate=H,Be.type=W}function dn(A){Oe("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wn(A){let B=A.target;B.removeEventListener("dispose",wn),Gu(B)}function Gu(A){Hu(A),X.remove(A)}function Hu(A){let B=X.get(A).programs;B!==void 0&&(B.forEach(function(Z){pe.releaseProgram(Z)}),A.isShaderMaterial&&pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Z,H,W,Se){B===null&&(B=De);let Te=W.isMesh&&W.matrixWorld.determinantAffine()<0,Me=qu(A,B,Z,H,W);v.setMaterial(H,Te);let Ee=Z.index,Re=1;if(H.wireframe===!0){if(Ee=j.getWireframeAttribute(Z),Ee===void 0)return;Re=2}let Je=Z.drawRange,et=Z.attributes.position,Ce=Je.start*Re,ct=(Je.start+Je.count)*Re;Se!==null&&(Ce=Math.max(Ce,Se.start*Re),ct=Math.min(ct,(Se.start+Se.count)*Re)),Ee!==null?(Ce=Math.max(Ce,0),ct=Math.min(ct,Ee.count)):et!=null&&(Ce=Math.max(Ce,0),ct=Math.min(ct,et.count));let St=ct-Ce;if(St<0||St===1/0)return;be.setup(W,H,Me,Z,Ee);let xt,ft=ge;if(Ee!==null&&(xt=ue.get(Ee),ft=ee,ft.setIndex(xt)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*We()),ft.setMode(U.LINES)):ft.setMode(U.TRIANGLES);else if(W.isLine){let Pt=H.linewidth;Pt===void 0&&(Pt=1),v.setLineWidth(Pt*We()),W.isLineSegments?ft.setMode(U.LINES):W.isLineLoop?ft.setMode(U.LINE_LOOP):ft.setMode(U.LINE_STRIP)}else W.isPoints?ft.setMode(U.POINTS):W.isSprite&&ft.setMode(U.TRIANGLES);if(W.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let Pt=W._multiDrawStarts,we=W._multiDrawCounts,Vt=W._multiDrawCount,it=Ee?ue.get(Ee).bytesPerElement:1,ln=X.get(H).currentProgram.getUniforms();for(let Tn=0;Tn<Vt;Tn++)ln.setValue(U,"_gl_DrawID",Tn),ft.render(Pt[Tn]/it,we[Tn])}else if(W.isInstancedMesh)ft.renderInstances(Ce,St,W.count);else if(Z.isInstancedBufferGeometry){let Pt=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,we=Math.min(Z.instanceCount,Pt);ft.renderInstances(Ce,St,we)}else ft.render(Ce,St)};function hc(A,B,Z,H){D!==null&&A.isNodeMaterial&&D.setObject(H,A),ae===!0&&Pe.setState(A,Z,!1),A.transparent===!0&&A.side===Ot&&A.forceSinglePass===!1?(A.side=Ht,A.needsUpdate=!0,vr(A,B,H),A.side=zt,A.needsUpdate=!0,vr(A,B,H),A.side=Ot):vr(A,B,H)}this.compile=function(A,B,Z=null){Z===null&&(Z=A),D!==null&&D.renderStart(A,B,Z),b=me.get(Z),b.init(B),x.push(b),Z.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),A!==Z&&A.traverseVisible(function(W){W.isLight&&W.layers.test(B.layers)&&(b.pushLight(W),W.castShadow&&b.pushShadow(W))}),b.setupLights(),D!==null&&D.updateLights(b.state.lightsArray),oe=this.localClippingEnabled,ae=Pe.init(this.clippingPlanes,oe),ae===!0&&Pe.setGlobalState(this.clippingPlanes,B),D!==null&&Be.render(b.state.shadowsArray,Z,B);let H=new Set;return A.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let Se=W.material;if(Se)if(Array.isArray(Se))for(let Te=0;Te<Se.length;Te++){let Me=Se[Te];hc(Me,Z,B,W),H.add(Me)}else hc(Se,Z,B,W),H.add(Se)}),b=x.pop(),D!==null&&D.renderEnd(),H},this.compileAsync=function(A,B,Z=null){let H=this.compile(A,B,Z);return new Promise(W=>{function Se(){if(H.forEach(function(Te){let Ee=X.get(Te).currentProgram;(Ee===void 0||Ee.isReady())&&H.delete(Te)}),H.size===0){W(A);return}setTimeout(Se,10)}Qe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Co=null;function Wu(A){Co&&Co(A)}function uc(){gi.stop()}function dc(){gi.start()}let gi=new fu;gi.setAnimationLoop(Wu),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){Co=A,ze.setAnimationLoop(A),A===null?gi.stop():gi.start()},ze.addEventListener("sessionstart",uc),ze.addEventListener("sessionend",dc),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Oe("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;D!==null&&D.renderStart(A,B);let Z=ze.enabled===!0&&ze.isPresenting===!0,H=M!==null&&(J===null||Z)&&M.begin(I,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ze.enabled===!0&&ze.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(ze.cameraAutoUpdate===!0&&ze.updateCamera(B),B=ze.getCamera()),A.isScene===!0&&A.onBeforeRender(I,A,B,J),b=me.get(A,x.length),b.init(B),b.state.textureUnits=K.getTextureUnits(),x.push(b),le.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),Q.setFromProjectionMatrix(le,xn,B.reversedDepth),oe=this.localClippingEnabled,ae=Pe.init(this.clippingPlanes,oe),w=ye.get(A,E.length),w.init(),E.push(w),ze.enabled===!0&&ze.isPresenting===!0){let Te=I.xr.getDepthSensingMesh();Te!==null&&zo(Te,B,-1/0,I.sortObjects)}zo(A,B,0,I.sortObjects),w.finish(),D!==null&&D.updateLights(b.state.lightsArray),I.sortObjects===!0&&w.sort(_e,Ue),Ve=ze.enabled===!1||ze.isPresenting===!1||ze.hasDepthSensing()===!1,Ve&&qe.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ae===!0&&Pe.beginShadows();let W=b.state.shadowsArray;if(Be.render(W,A,B),ae===!0&&Pe.endShadows(),(H&&M.hasRenderPass())===!1){let Te=w.opaque,Me=w.transmissive;if(b.setupLights(),B.isArrayCamera){let Ee=B.cameras;if(Me.length>0)for(let Re=0,Je=Ee.length;Re<Je;Re++){let et=Ee[Re];pc(Te,Me,A,et)}Ve&&qe.render(A);for(let Re=0,Je=Ee.length;Re<Je;Re++){let et=Ee[Re];fc(w,A,et,et.viewport)}}else Me.length>0&&pc(Te,Me,A,B),Ve&&qe.render(A),fc(w,A,B)}J!==null&&k===0&&(K.updateMultisampleRenderTarget(J),K.updateRenderTargetMipmap(J)),H&&M.end(I),A.isScene===!0&&A.onAfterRender(I,A,B),be.resetDefaultState(),V=-1,q=null,x.pop(),x.length>0?(b=x[x.length-1],K.setTextureUnits(b.state.textureUnits),ae===!0&&Pe.setGlobalState(I.clippingPlanes,b.state.camera)):b=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,D!==null&&D.renderEnd()};function zo(A,B,Z,H){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Z=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)b.pushLightProbeGrid(A);else if(A.isLight)b.pushLight(A),A.castShadow&&b.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(Q)){H&&Fe.setFromMatrixPosition(A.matrixWorld).applyMatrix4(le);let Te=ne.update(A),Me=A.material;Me.visible&&w.push(A,Te,Me,Z,Fe.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(Q))){let Te=ne.update(A),Me=A.material;if(H&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Fe.copy(A.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Fe.copy(Te.boundingSphere.center)),Fe.applyMatrix4(A.matrixWorld).applyMatrix4(le)),Array.isArray(Me)){let Ee=Te.groups;for(let Re=0,Je=Ee.length;Re<Je;Re++){let et=Ee[Re],Ce=Me[et.materialIndex];Ce&&Ce.visible&&w.push(A,Te,Ce,Z,Fe.z,et,B)}}else Me.visible&&w.push(A,Te,Me,Z,Fe.z,null,B)}}let Se=A.children;for(let Te=0,Me=Se.length;Te<Me;Te++)zo(Se[Te],B,Z,H)}function fc(A,B,Z,H){let{opaque:W,transmissive:Se,transparent:Te}=A;b.setupLightsView(Z),ae===!0&&Pe.setGlobalState(I.clippingPlanes,Z),H&&v.viewport(Y.copy(H)),W.length>0&&yr(W,B,Z),Se.length>0&&yr(Se,B,Z),Te.length>0&&yr(Te,B,Z),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function pc(A,B,Z,H){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[H.id]===void 0){let Ce=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[H.id]=new qt(1,1,{generateMipmaps:!0,type:Ce?Wt:Zt,minFilter:on,samples:Math.max(4,P.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:nt.workingColorSpace})}let Se=b.state.transmissionRenderTarget[H.id],Te=H.viewport||Y;Se.setSize(Te.z*I.transmissionResolutionScale,Te.w*I.transmissionResolutionScale);let Me=I.getRenderTarget(),Ee=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(Se),I.getClearColor(Ke),Ye=I.getClearAlpha(),Ye<1&&I.setClearColor(16777215,.5),I.clear(),Ve&&qe.render(Z);let Je=I.toneMapping;I.toneMapping=Mn;let et=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),b.setupLightsView(H),ae===!0&&Pe.setGlobalState(I.clippingPlanes,H),yr(A,Z,H),K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ct=0,St=B.length;ct<St;ct++){let xt=B[ct],{object:ft,geometry:Pt,material:we,group:Vt}=xt;if(we.side===Ot&&ft.layers.test(H.layers)){let it=we.side;we.side=Ht,we.needsUpdate=!0,mc(ft,Z,H,Pt,we,Vt),we.side=it,we.needsUpdate=!0,Ce=!0}}Ce===!0&&(K.updateMultisampleRenderTarget(Se),K.updateRenderTargetMipmap(Se))}I.setRenderTarget(Me,Ee,Re),I.setClearColor(Ke,Ye),et!==void 0&&(H.viewport=et),I.toneMapping=Je}function yr(A,B,Z){let H=B.isScene===!0?B.overrideMaterial:null;for(let W=0,Se=A.length;W<Se;W++){let Te=A[W],{object:Me,geometry:Ee,group:Re}=Te,Je=Te.material;Je.allowOverride===!0&&H!==null&&(Je=H),Me.layers.test(Z.layers)&&mc(Me,B,Z,Ee,Je,Re)}}function mc(A,B,Z,H,W,Se){D!==null&&W.isNodeMaterial&&D.setObject(A,W),A.onBeforeRender(I,B,Z,H,W,Se),A.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),W.onBeforeRender(I,B,Z,H,A,Se),W.transparent===!0&&W.side===Ot&&W.forceSinglePass===!1?(W.side=Ht,W.needsUpdate=!0,I.renderBufferDirect(Z,B,H,W,A,Se),W.side=zt,W.needsUpdate=!0,I.renderBufferDirect(Z,B,H,W,A,Se),W.side=Ot):I.renderBufferDirect(Z,B,H,W,A,Se),A.onAfterRender(I,B,Z,H,W,Se)}function vr(A,B,Z){B.isScene!==!0&&(B=De);let H=X.get(A),W=b.state.lights,Se=b.state.shadowsArray,Te=W.state.version,Me=pe.getParameters(A,W.state,Se,B,Z,b.state.lightProbeGridArray),Ee=pe.getProgramCacheKey(Me),Re=H.programs;H.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,H.fog=B.fog;let Je=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;H.envMap=he.get(A.envMap||H.environment,Je),H.envMapRotation=H.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Re===void 0&&(A.addEventListener("dispose",wn),Re=new Map,H.programs=Re);let et=Re.get(Ee);if(et!==void 0){if(H.currentProgram===et&&H.lightsStateVersion===Te)return xc(A,Me),et}else Me.uniforms=pe.getUniforms(A),D!==null&&A.isNodeMaterial&&D.build(A,Z,Me),A.onBeforeCompile(Me,I),et=pe.acquireProgram(Me,Ee),Re.set(Ee,et),H.uniforms=Me.uniforms;let Ce=H.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Pe.uniform),xc(A,Me),H.needsLights=Zu(A),H.lightsStateVersion=Te,H.needsLights&&(Ce.ambientLightColor.value=W.state.ambient,Ce.lightProbe.value=W.state.probe,Ce.sunLights.value=W.state.sun,Ce.sunLightShadows.value=W.state.sunShadow,Ce.directionalLights.value=W.state.directional,Ce.directionalLightShadows.value=W.state.directionalShadow,Ce.spotLights.value=W.state.spot,Ce.spotLightShadows.value=W.state.spotShadow,Ce.rectAreaLights.value=W.state.rectArea,Ce.ltc_1.value=W.state.rectAreaLTC1,Ce.ltc_2.value=W.state.rectAreaLTC2,Ce.pointLights.value=W.state.point,Ce.pointLightShadows.value=W.state.pointShadow,Ce.hemisphereLights.value=W.state.hemi,Ce.sunShadowMatrix.value=W.state.sunShadowMatrix,Ce.sunShadowCascade.value=W.state.sunShadowCascade,Ce.directionalShadowMatrix.value=W.state.directionalShadowMatrix,Ce.spotLightMatrix.value=W.state.spotLightMatrix,Ce.spotLightMap.value=W.state.spotLightMap,Ce.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=b.state.lightProbeGridArray.length>0,H.currentProgram=et,H.uniformsList=null,et}function gc(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=_s.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function xc(A,B){let Z=X.get(A);Z.outputColorSpace=B.outputColorSpace,Z.batching=B.batching,Z.batchingColor=B.batchingColor,Z.instancing=B.instancing,Z.instancingColor=B.instancingColor,Z.instancingMorph=B.instancingMorph,Z.skinning=B.skinning,Z.morphTargets=B.morphTargets,Z.morphNormals=B.morphNormals,Z.morphColors=B.morphColors,Z.morphTargetsCount=B.morphTargetsCount,Z.numClippingPlanes=B.numClippingPlanes,Z.numIntersection=B.numClipIntersection,Z.vertexAlphas=B.vertexAlphas,Z.vertexTangents=B.vertexTangents,Z.toneMapping=B.toneMapping}function Xu(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;_.setFromMatrixPosition(B.matrixWorld);for(let Z=0,H=A.length;Z<H;Z++){let W=A[Z];if(W.texture!==null&&W.boundingBox.containsPoint(_))return W}return null}function qu(A,B,Z,H,W){B.isScene!==!0&&(B=De),K.resetTextureUnits();let Se=B.fog,Te=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?B.environment:null,Me=J===null?I.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:nt.workingColorSpace,Ee=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,Re=he.get(H.envMap||Te,Ee),Je=H.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,et=!!Z.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ce=!!Z.morphAttributes.position,ct=!!Z.morphAttributes.normal,St=!!Z.morphAttributes.color,xt=Mn;H.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(xt=I.toneMapping);let ft=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,Pt=ft!==void 0?ft.length:0,we=X.get(H),Vt=b.state.lights;if(ae===!0&&(oe===!0||A!==q)){let gt=A===q&&H.id===V;Pe.setState(H,A,gt)}let it=!1;H.version===we.__version?(we.needsLights&&we.lightsStateVersion!==Vt.state.version||we.outputColorSpace!==Me||W.isBatchedMesh&&we.batching===!1||!W.isBatchedMesh&&we.batching===!0||W.isBatchedMesh&&we.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&we.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&we.instancing===!1||!W.isInstancedMesh&&we.instancing===!0||W.isSkinnedMesh&&we.skinning===!1||!W.isSkinnedMesh&&we.skinning===!0||W.isInstancedMesh&&we.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&we.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&we.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&we.instancingMorph===!1&&W.morphTexture!==null||we.envMap!==Re||H.fog===!0&&we.fog!==Se||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Pe.numPlanes||we.numIntersection!==Pe.numIntersection)||we.vertexAlphas!==Je||we.vertexTangents!==et||we.morphTargets!==Ce||we.morphNormals!==ct||we.morphColors!==St||we.toneMapping!==xt||we.morphTargetsCount!==Pt||!!we.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(it=!0):(it=!0,we.__version=H.version);let ln=we.currentProgram;it===!0&&(ln=vr(H,B,W),D&&H.isNodeMaterial&&D.onUpdateProgram(H,ln,we));let Tn=!1,Jn=!1,Di=!1,dt=ln.getUniforms(),Mt=we.uniforms;if(v.useProgram(ln.program)&&(Tn=!0,Jn=!0,Di=!0),H.id!==V&&(V=H.id,Jn=!0),we.needsLights){let gt=Xu(b.state.lightProbeGridArray,W);we.lightProbeGrid!==gt&&(we.lightProbeGrid=gt,Jn=!0)}if(Tn||q!==A){v.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),dt.setValue(U,"projectionMatrix",A.projectionMatrix),dt.setValue(U,"viewMatrix",A.matrixWorldInverse);let Kn=dt.map.cameraPosition;Kn!==void 0&&Kn.setValue(U,fe.setFromMatrixPosition(A.matrixWorld)),P.logarithmicDepthBuffer&&dt.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&dt.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),q!==A&&(q=A,Jn=!0,Di=!0)}if(we.needsLights&&(Vt.state.sunShadowMap.length>0&&dt.setValue(U,"sunShadowMap",Vt.state.sunShadowMap,K),Vt.state.directionalShadowMap.length>0&&dt.setValue(U,"directionalShadowMap",Vt.state.directionalShadowMap,K),Vt.state.spotShadowMap.length>0&&dt.setValue(U,"spotShadowMap",Vt.state.spotShadowMap,K),Vt.state.pointShadowMap.length>0&&dt.setValue(U,"pointShadowMap",Vt.state.pointShadowMap,K)),W.isSkinnedMesh){dt.setOptional(U,W,"bindMatrix"),dt.setOptional(U,W,"bindMatrixInverse");let gt=W.skeleton;gt&&(gt.boneTexture===null&&gt.computeBoneTexture(),dt.setValue(U,"boneTexture",gt.boneTexture,K))}W.isBatchedMesh&&(dt.setOptional(U,W,"batchingTexture"),dt.setValue(U,"batchingTexture",W._matricesTexture,K),dt.setOptional(U,W,"batchingIdTexture"),dt.setValue(U,"batchingIdTexture",W._indirectTexture,K),dt.setOptional(U,W,"batchingColorTexture"),W._colorsTexture!==null&&dt.setValue(U,"batchingColorTexture",W._colorsTexture,K));let $n=Z.morphAttributes;if(($n.position!==void 0||$n.normal!==void 0||$n.color!==void 0)&&O.update(W,Z,ln),(Jn||we.receiveShadow!==W.receiveShadow)&&(we.receiveShadow=W.receiveShadow,dt.setValue(U,"receiveShadow",W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&B.environment!==null&&(Mt.envMapIntensity.value=B.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=xx()),Jn){if(dt.setValue(U,"toneMappingExposure",I.toneMappingExposure),we.needsLights&&Yu(Mt,Di),Se&&H.fog===!0&&Ie.refreshFogUniforms(Mt,Se),Ie.refreshMaterialUniforms(Mt,H,te,$,b.state.transmissionRenderTarget[A.id]),we.needsLights&&we.lightProbeGrid){let gt=we.lightProbeGrid;Mt.probesSH.value=gt.texture,Mt.probesMin.value.copy(gt.boundingBox.min),Mt.probesMax.value.copy(gt.boundingBox.max),Mt.probesResolution.value.copy(gt.resolution)}_s.upload(U,gc(we),Mt,K)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(_s.upload(U,gc(we),Mt,K),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&dt.setValue(U,"center",W.center),dt.setValue(U,"modelViewMatrix",W.modelViewMatrix),dt.setValue(U,"normalMatrix",W.normalMatrix),dt.setValue(U,"modelMatrix",W.matrixWorld),H.uniformsGroups!==void 0){let gt=H.uniformsGroups;for(let Kn=0,Ni=gt.length;Kn<Ni;Kn++){let yc=gt[Kn];se.update(yc,ln),se.bind(yc,ln)}}return ln}function Yu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function Zu(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return k},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,B,Z){let H=X.get(A);H.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),X.get(A.texture).__webglTexture=B,X.get(A.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:Z,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Z=X.get(A);Z.__webglFramebuffer=B,Z.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Z=0){J=A,N=B,k=Z;let H=null,W=!1,Se=!1;if(A){let Me=X.get(A);if(Me.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),Y.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest,v.viewport(Y),v.scissor(ce),v.setScissorTest(de),V=-1;return}else if(Me.__webglFramebuffer===void 0)K.setupRenderTarget(A);else if(Me.__hasExternalTextures)K.rebindTextures(A,X.get(A.texture).__webglTexture,X.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Je=A.depthTexture;if(Me.__boundDepthTexture!==Je){if(Je!==null&&X.has(Je)&&(A.width!==Je.image.width||A.height!==Je.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");K.setupDepthRenderbuffer(A)}}let Ee=A.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(Se=!0);let Re=X.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Re[B])?H=Re[B][Z]:H=Re[B],W=!0):A.samples>0&&K.useMultisampledRTT(A)===!1?H=X.get(A).__webglMultisampledFramebuffer:Array.isArray(Re)?H=Re[Z]:H=Re,Y.copy(A.viewport),ce.copy(A.scissor),de=A.scissorTest}else Y.copy(ie).multiplyScalar(te).floor(),ce.copy(Ae).multiplyScalar(te).floor(),de=je;if(Z!==0&&(H=C),v.bindFramebuffer(U.FRAMEBUFFER,H)&&v.drawBuffers(A,H),v.viewport(Y),v.scissor(ce),v.setScissorTest(de),W){let Me=X.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,Z)}else if(Se){let Me=B;for(let Ee=0;Ee<A.textures.length;Ee++){let Re=X.get(A.textures[Ee]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ee,Re.__webglTexture,Z,Me)}}else if(A!==null&&Z!==0){let Me=X.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,Z)}V=-1};function _c(A){let B=X.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=P.textureFormatReadable(A.format),B.__typeReadable=P.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Z,H,W,Se,Te,Me=0){if(!(A&&A.isWebGLRenderTarget)){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee){v.bindFramebuffer(U.FRAMEBUFFER,Ee);try{let Re=A.textures[Me],Je=Re.format,et=Re.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=_c(Re);if(Ce.__formatReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Oe("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-H&&Z>=0&&Z<=A.height-W&&U.readPixels(B,Z,H,W,xe.convert(Je),xe.convert(et),Se)}finally{let Re=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(A,B,Z,H,W,Se,Te,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=X.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Te!==void 0&&(Ee=Ee[Te]),Ee)if(B>=0&&B<=A.width-H&&Z>=0&&Z<=A.height-W){v.bindFramebuffer(U.FRAMEBUFFER,Ee);let Re=A.textures[Me],Je=Re.format,et=Re.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=_c(Re);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ct=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(B,Z,H,W,xe.convert(Je),xe.convert(et),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let St=J!==null?X.get(J).__webglFramebuffer:null;v.bindFramebuffer(U.FRAMEBUFFER,St);let xt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Uh(U,xt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ct),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ct),U.deleteSync(xt),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Z=0){let H=Math.pow(2,-Z),W=Math.floor(A.image.width*H),Se=Math.floor(A.image.height*H),Te=B!==null?B.x:0,Me=B!==null?B.y:0;K.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Z,0,0,Te,Me,W,Se),v.unbindTexture()},this.copyTextureToTexture=function(A,B,Z=null,H=null,W=0,Se=0){let Te,Me,Ee,Re,Je,et,Ce,ct,St,xt=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Z!==null)Te=Z.max.x-Z.min.x,Me=Z.max.y-Z.min.y,Ee=Z.isBox3?Z.max.z-Z.min.z:1,Re=Z.min.x,Je=Z.min.y,et=Z.isBox3?Z.min.z:0;else{let Mt=Math.pow(2,-W);Te=Math.floor(xt.width*Mt),Me=Math.floor(xt.height*Mt),A.isDataArrayTexture?Ee=xt.depth:A.isData3DTexture?Ee=Math.floor(xt.depth*Mt):Ee=1,Re=0,Je=0,et=0}H!==null?(Ce=H.x,ct=H.y,St=H.z):(Ce=0,ct=0,St=0);let ft=xe.convert(B.format),Pt=xe.convert(B.type),we;B.isData3DTexture?(K.setTexture3D(B,0),we=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(K.setTexture2DArray(B,0),we=U.TEXTURE_2D_ARRAY):(K.setTexture2D(B,0),we=U.TEXTURE_2D),v.activeTexture(U.TEXTURE0),v.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),v.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),v.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Vt=v.getParameter(U.UNPACK_ROW_LENGTH),it=v.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=v.getParameter(U.UNPACK_SKIP_PIXELS),Tn=v.getParameter(U.UNPACK_SKIP_ROWS),Jn=v.getParameter(U.UNPACK_SKIP_IMAGES);v.pixelStorei(U.UNPACK_ROW_LENGTH,xt.width),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,xt.height),v.pixelStorei(U.UNPACK_SKIP_PIXELS,Re),v.pixelStorei(U.UNPACK_SKIP_ROWS,Je),v.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let Di=A.isDataArrayTexture||A.isData3DTexture,dt=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Mt=X.get(A),$n=X.get(B),gt=X.get(Mt.__renderTarget),Kn=X.get($n.__renderTarget);v.bindFramebuffer(U.READ_FRAMEBUFFER,gt.__webglFramebuffer),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,Kn.__webglFramebuffer);for(let Ni=0;Ni<Ee;Ni++)Di&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(A).__webglTexture,W,et+Ni),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,X.get(B).__webglTexture,Se,St+Ni)),U.blitFramebuffer(Re,Je,Te,Me,Ce,ct,Te,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(W!==0||A.isRenderTargetTexture||X.has(A)){let Mt=X.get(A),$n=X.get(B);v.bindFramebuffer(U.READ_FRAMEBUFFER,R),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,L);for(let gt=0;gt<Ee;gt++)Di?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,W,et+gt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,W),dt?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$n.__webglTexture,Se,St+gt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,$n.__webglTexture,Se),W!==0?U.blitFramebuffer(Re,Je,Te,Me,Ce,ct,Te,Me,U.COLOR_BUFFER_BIT,U.NEAREST):dt?U.copyTexSubImage3D(we,Se,Ce,ct,St+gt,Re,Je,Te,Me):U.copyTexSubImage2D(we,Se,Ce,ct,Re,Je,Te,Me);v.bindFramebuffer(U.READ_FRAMEBUFFER,null),v.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else dt?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(we,Se,Ce,ct,St,Te,Me,Ee,ft,Pt,xt.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(we,Se,Ce,ct,St,Te,Me,Ee,ft,xt.data):U.texSubImage3D(we,Se,Ce,ct,St,Te,Me,Ee,ft,Pt,xt):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ce,ct,Te,Me,ft,Pt,xt.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ce,ct,xt.width,xt.height,ft,xt.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ce,ct,Te,Me,ft,Pt,xt);v.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),v.pixelStorei(U.UNPACK_IMAGE_HEIGHT,it),v.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),v.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),v.pixelStorei(U.UNPACK_SKIP_IMAGES,Jn),Se===0&&B.generateMipmaps&&U.generateMipmap(we),v.unbindTexture()},this.initRenderTarget=function(A){X.get(A).__webglFramebuffer===void 0&&K.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?K.setTextureCube(A,0):A.isData3DTexture?K.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?K.setTexture2DArray(A,0):K.setTexture2D(A,0),v.unbindTexture()},this.resetState=function(){N=0,k=0,J=null,v.reset(),be.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=nt._getDrawingBufferColorSpace(e),t.unpackColorSpace=nt._getUnpackColorSpace()}};var vo=class extends nr{constructor(e){super(e),this.type=Wt}parse(e){let a=function(x,M){switch(x){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},m=function(x,M,I){M=M||1024;let D=x.pos,C=-1,R=0,L="",N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(D,D+128)));for(;0>(C=N.indexOf(`
`))&&R<M&&D<x.byteLength;)L+=N,R+=N.length,D+=128,N=String.fromCharCode.apply(null,new Uint16Array(x.subarray(D,D+128)));return-1<C?(I!==!1&&(x.pos+=R+C+1),L+N.slice(0,C)):!1},p=function(x){let M=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,z=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,D=/^\s*FORMAT=(\S+)\s*$/,C=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},L,N;for((x.pos>=x.byteLength||!(L=m(x)))&&a(1,"no header found"),(N=L.match(M))||a(3,"bad initial token"),R.valid|=1,R.programtype=N[1],R.string+=L+`
`;L=m(x),L!==!1;){if(R.string+=L+`
`,L.charAt(0)==="#"){R.comments+=L+`
`;continue}if((N=L.match(I))&&(R.gamma=parseFloat(N[1])),(N=L.match(z))&&(R.exposure=parseFloat(N[1])),(N=L.match(D))&&(R.valid|=2,R.format=N[1]),(N=L.match(C))&&(R.valid|=4,R.height=parseInt(N[1],10),R.width=parseInt(N[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},h=function(x,M,I){let z=M;if(z<8||z>32767||x[0]!==2||x[1]!==2||x[2]&128)return new Uint8Array(x);z!==(x[2]<<8|x[3])&&a(3,"wrong scanline width");let D=new Uint8Array(4*M*I);D.length||a(4,"unable to allocate buffer space");let C=0,R=0,L=4*z,N=new Uint8Array(4),k=new Uint8Array(L),J=I;for(;J>0&&R<x.byteLength;){R+4>x.byteLength&&a(1),N[0]=x[R++],N[1]=x[R++],N[2]=x[R++],N[3]=x[R++],(N[0]!=2||N[1]!=2||(N[2]<<8|N[3])!=z)&&a(3,"bad rgbe scanline format");let V=0,q;for(;V<L&&R<x.byteLength;){q=x[R++];let ce=q>128;if(ce&&(q-=128),(q===0||V+q>L)&&a(3,"bad scanline data"),ce){let de=x[R++];for(let Ke=0;Ke<q;Ke++)k[V++]=de}else k.set(x.subarray(R,R+q),V),V+=q,R+=q}let Y=z;for(let ce=0;ce<Y;ce++){let de=0;D[C]=k[ce+de],de+=z,D[C+1]=k[ce+de],de+=z,D[C+2]=k[ce+de],de+=z,D[C+3]=k[ce+de],C+=4}J--}return D},f=function(x,M,I,z){let D=x[M+3],C=Math.pow(2,D-128)/255;I[z+0]=x[M+0]*C,I[z+1]=x[M+1]*C,I[z+2]=x[M+2]*C,I[z+3]=1},y=function(x,M,I,z){let D=x[M+3],C=Math.pow(2,D-128)/255;I[z+0]=si.toHalfFloat(Math.min(x[M+0]*C,65504)),I[z+1]=si.toHalfFloat(Math.min(x[M+1]*C,65504)),I[z+2]=si.toHalfFloat(Math.min(x[M+2]*C,65504)),I[z+3]=si.toHalfFloat(1)},g=new Uint8Array(e);g.pos=0;let u=p(g),S=u.width,T=u.height,_=h(g.subarray(g.pos),S,T),w,b,E;switch(this.type){case Jt:E=_.length/4;let x=new Float32Array(E*4);for(let I=0;I<E;I++)f(_,I*4,x,I*4);w=x,b=Jt;break;case Wt:E=_.length/4;let M=new Uint16Array(E*4);for(let I=0;I<E;I++)y(_,I*4,M,I*4);w=M,b=Wt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:S,height:T,data:w,header:u.string,gamma:u.gamma,exposure:u.exposure,type:b,colorSpace:Hn,minFilter:ut,magFilter:ut,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var vu=Sc("Iz9SQURJQU5DRQpGT1JNQVQ9MzItYml0X3JsZV9yZ2JlCgotWSAxMjggK1ggMjU2CgICAQCAmZmampudpbfYgJKhrba8wsXHycjFwr24sq2oo6CempeVlJKRkJGRk5WYm56ho6Wmp6ioqqqsr7O2trW0s7KztLSzsa6sqqqrrK2trauqqainpqWioJ2bmZeVlJWXmZ2go6SmqKqrrK2vsrW5ury6t7OvqqKVhuvIr6Ogn5+enZ0fnp+iqbTD2PGFk6CsuMHJzs7KxsTExMK/urKrpaCcmoaYIpqdoKOlp6mrra+wsLCvsLGysbCvr66ura2ur7CytLW3uLqEuwK5t4S2L7W0sq+rqaakoqCenJqZmp2gpKqxt7q6vMHFys/U1tPNw7esoZWJ+uPOva6jnJmZgIqLi4yNj5enxXSFk52lqq6xs7Szsa6ppJ+bl5OQjoqIhoWDgoKDhIWHiYuOkJGTlJWWl5iYmpyfoaKioaCgoaKioqCem5mZmpubnJyamZiXlpaVk5COjIqIh4aGiIqNkJOUlZeZmpucn6Ckpqipp6SinpqSh3nWuKGWkpGQkI+PH5CRlZumtcfceoaRnaavtrq6t7Oys7KxrqiinJaSjoyFiimLjI+Rk5WYmZudn6Cfnp6foKCgn56dnZ2cnJ2dnp+hoqOkpqenpqako4WiLqGfnJqXlZSTkI6Mi4qKjI6Slpyho6Smqq6yt7u9vLiwpp2TiH3m0L6tn5WOi4o6gYKCg4SHjp65bXyIkpmeoaSnqKelop6ZlZCMiIWCf318e3l5eHl6e31/goSFh4mJi4uMjY6PkZSWloWVPpeXlpWSkI6Oj5CQkZGPjo6NjIyLiYeFg4KAfn5+gIKFiIqLjY6QkZKTlZeanJ2fnJqXlI+IfnHIrJeMiYeHhIZ/iIyTnaq6znJ9iJKcpKqurauop6enpaOemJKNiYaDgoGBgYCBg4WHiYuNj5GTlJWUlJOUlZWVk5OTkpGRkJGSkpOUlpaXmJmamZmYl5aWlZWVlJOQjoyKiYiGhIKBgICChYeLkZaYmJqdoaWpra+uqqKZkYh/ddfEsqOWjIWCgYl67XuSeu97iXoCAgEAgJWYm6yCzICMjIPoyq+XhezX2fWNnKSqq6qlnpqamZidp7G7v76/wb+4sa2qpZ+cm5aTk5SUk5GQlJmcmpiWlZWWlZSVl5eVl5eXlJCUlJifoaCkqayzu8LHxsTHxL64saqkn52dn6WoqKipppyQgezvgpOpwuKAjI+F35rEpKGggKCs0Yi24oOMhevPtZuD5NXl/pGls7Kurq6po6Gip6utsrm+xMPBvbq3squknpqYlpKPjo6PkpOTlZaVk5SWlZORkJWWk5KRkJCOjIqLjY6QkZGUmJ2hpquys7jBvrWxrKain56dnJ6ho6esq6CPge7h5P2RprvU8IH53LuW46+YMYeJjZ93t3J9fXbStp2IedjFxt+AjZOYmZeSjouKiomOl5+nrKurraymoZ6blZCNjIiEhYCEg4KFioyLiYeGh4eHhoeIiYiJiYqHhIeHipCRkZWZnKGprrSysbSxrKahmpWQjo6RlpmYmJmWjoN22dt3hpqxzXR+gHnLjraWkpKSoMR/p812fnfUuaOLd9DE0uiElqKgnJ2dmZORkpaZnKCmq7CwraqopaCalI+LioeEgoCBgkuEhYWHh4aFhoeGhYODh4iFhIOCgoB/fX6AgYODg4WJjJCUmaChpq2qop6ZlpGPjo6Mj5GTlpuZj4F128/Q5oOVp73Wc97FqYnRoouAgIGFlnCranR1bsSrlH9xybi5z3eCiI2OjYmFgYCCgYWMk5mdnZ2gnpmUkY6Jg4GBfXt7fHt6enl8gIKCf319fn5+fX+Af3+BgYJ+e319gIWGh4qNkJWcoqelo6akn5qVj4qGhYWHi46Ojo+MhXtvy81vfpClwG12eHG+hayNiYiAiZi8d5q+bnVvxayWgW/Ct8PYeouWlZGRkY6Jh4eKjZCUmp6joqCenJmUj4mFgoB+enh3eHl6e3t9fX17fH19fHp6fX57enp5eXd1dHV3d3l5eXt+gYWJjZOUmZ+blJGOioaEhISDhYeJjJCPhXhuzcLC1XmLnK/Gas62nIDGmYOEeoJ7hHyFe4R63HuCeoV7hHyCe4d6Bnt7e3x8fIV7hHrde4R6hXsBfIR7g3oCAgEAP5ybr7mRlIHAhcetuYi82tbHspiEiJaenZubmpWgt8bKysO4sKOblI+OkJejs7e7ure2t7i9u7OtraqlpqOgoYSfa6KjpKWnr7S8v8C3ubu6trO5qZyWk5KUl6CmsLe+wLiup6uwr6+ysKiYiJGs1/D47s6MtrPUkc2HmYiIp6Ci2Kf1lZbG8K6w3pTB6+XPu6aUiI2hu7u1sKyqrLO5wMG5raGZlZOTlJefqa+2hbpNuLixrKinp6KjoJ2dnJqbnZycnZyfpKSnqaqrrrW0s7OuqaWbk4yKiIyPlqGqs7axqZ+cmpyfoJ2RhoeUqb7X7OS9luC0tvezgojSkMCAj46ip4GFdK96tp6pe6nCv7KgiXh7h46OjIuKh5GlsrW2sKaek4uGg4KEipSho6eopaSkpqqoop2cmZWVk5CRj4+Qj5KTlZWXnaGorbCnp6mopKGkmI2HhYSGiJGXn6WsrqaemJqenp+hoJiKfIObwdbf17p/pqTDhLt6inp9mJIvlciZ24SEstyfocqGrtHOuqiWhnyAkaippJ+bmpyiqK6vqZ6TjIiGhYeJkJiepKiEpxClpZ6bl5aWkpORj4+NjI2PhI45kJWUmJmbm56ko6KinpmVjYZ/fHt/gYeRmaGjnpePjIqMj5GOg3p6hZmswdXOq4nOpKbfoXN5vYSygIWDl5x4e2uicqmTnXGbtLKlk35vcn2CgoGAfnyHmaWpqaKZkomAfHh5fIGKlpeam5iWlZidnJaRkI2Ji4iFhYSFhYaJiouMjZGUmaCjm5ydnJiVloyDfXt6fH6GjJOZoKKbk46Qk5OUlpSNgHR6kLPH0Miud5yZtnyvcn9xdY+HL4u8kcx6eqbNlZa8faHAvKuainxzd4abnZiTkI+Rlpyio52TioN+fX1+gIaOk5mchJtNmZiSj4yLi4eJhoSFhIKDhYSEhYSGi4qNj5CRk5mYlpaSjYqCfHZ0cnV4foaOlZeTjIWDgIGEhYJ5cXF7j5+yxb+efsCams6UanCwe6cMenp6e3x8fHt7enp66XsJenp6e3t8fHx7hHoFe3t8fHuEeut7hHoGe3x8e3t6AgIBAICanoCNiMrssrSM2vXAhMbyqrewpZWZoquwr7GxuLiuoZKMiIeNn66+ysW4raWimpSWl5ymr7Cxs7m7vMS+trS6urm3uLe2ure1s66tpqSblZOXoKm2x8vMxLGgmJeYmqG0vsjK68S63fWEhvr/gdnG0829oOKE7N2vxquHqL6tp4DHroWd8+qo2qrl6dam6oKrtdDdzLanrMXGxLywt76/rJ2Uk5SdrrrCxcO6q6CYmZiYm5+hp6+xt7m0srKyr6yrsLCsrbOztbSzsrGrqKWclpKMi4+Xo6+3u7Spn5eZoqqvuLqtoJWTkZWYmpOSoLXCvpXb3pvT8taRwqXJzIbM54CNkHZ+ebXYo6R+wtqsd7TbmKWflYeLkpugn6CgpqWdkoN8enp/j5yrtLGmnZaSjYeIio6WnqCho6ipqrKspqSoqKempaakqKWjopyblpSMhoWJkZqltLe5saCRiomJjJKjrLO13riqyuB4eeLndcSyvrqqkMx00cmftZx5lKmemIC3nXaL0tKZxZnN0LyS1HWapLrEtaOYnbS2tKyhp66unI+HhoePnqixs7Gpm5KKi4qKjJCRl56gpaejoqKhn5ybn5+cnaGhpKKhoKCamJWNiYV/foKJlJ6kqKOYj4mKk5qfpaabkIeEg4aJjIaFkqSuqobJy4u82L6DsJa5tna41YCDhW5zb6fKlpd0ssmgbqfKjJeRin2BiZGXlJaVm5qRhnpzcXB1g4+dp6WbkoyJhX6AgYeOlZeXmZ2fn6aknJufn56cnJuan5qZl5ORjIyEf36BiI+apqqrpJWGgH5/gYeXn6ap17qoyd94eeLmdMOxvLinkMluwrqTqZFvh5yTjICqkm2Avr+Ot4y+wa6GxG2NmKu0ppeNk6iqqqKXnKKjkoV9fX6Fk5ykpqSdkIeAgYCAgoWGjJKUmZuXlpaWk5GPlJOQkZWVl5aVlJOPjYuDf3x2dXh/iZKYm5aMg31/iI+SmJiOhHx6eHt/gXt6hZegnHq5vICtxa54pIusqWyoxwl6ent8fHt6enqFe4J61XsJfX5+fn9/fn5/hn4UfX17enp6e3x8e3p6ent8fHt6enqFewF65HuCeoV7B3p6ent8e3oCAgEALaiqp4jH06766OiXyuCty7qJ3JS40bqD8JS6ubG9sIads6amusW6ppaLi5SgrYSzgK+imZWOjI2Tnp+jpKOkpqeppqahn6WclZCPlKGir7a9vbmzqZaRlp2swMSzmpOVna29yNuAwdnw9/T8783aw6Kxr6f87I6P5dmtiPaI5ajEzZDfpKWR++nzr4XT1abs9KrEt6OSj6urpqGpx8Clmpmerbu8sJ2RgoCAgoSbjJGSEZCPi4T++/+ChomMjY6Oj4+NhI46i4iGg4OFiIyPjYyJhYKC//r4/Y6hsbexpZugpJyss62vrqeZhZKmtbiU34i52LPitpLt44CvtNuCmICam5d4ssKe487OiLfLm7anfMmGpbuoeduGpqefqaB8jaGXlqexqJWIfn2FkZuhoqKhnpOLiIJ/gIWPkJSUk5OWlpeWlJGPko2IgoGEj5KepKqppqGYh4OIj5uusaKMhoeOnKq02HexxNfZ1eDUt8OukJ6el+TWg37LxZ1723nQl0Gzt4DIlpeC39Dbnne7vZTV3Jivo5KDgZqalZOata+XjYyRnaqqn46DdXNydXiOgIWGhISBeu7s73p+gIKEhYaGhoWFOoJ/fXp6e36Bg4F/fHh2dOPe3uSBkqCmn5aOk5aOm6KdnpyViHiDlaKmhsx7psOhz6aD0sl1n6XCcYmAjo+LbaS1k9K8unyqu4+pmHG6fJirmnDKe5mblp6Vc4SWjIycpJyMf3Z0fIeRl5qYmJSKhIF7d3h+h4iMjYmKjo6OjYuIhomEf3l5e4SJlZqenpuWjX56f4WRo6aYg31+hJKfqdx2rsHT1dLc0bXBrI6bm5Xh1X1zt7ORcshuv4uAp6h0t4uMecy/yZNurK2IxsyMopiIeniOjoqIj6mjjYOBhpKdnZKDemxqamxxh3l+f39/fHbo5up3e32AgoODhIOCg4KCgn58enh3eHp8fXt5dXFua9DNztJ3h5Sak4uDh4mDjpWRkpGKfW93hpOVerxvlrKUv5p5wbhtlJmxZ34Nenp7fHt6enp7e3t6eoR7AXqFewF6zHsBfI9/F359fHx7enp7e3x6enp7fHt6ent7e3p6hHuCeqR7g3qde4R6l3sBeoR7gnqEewV6ent8ewICAQCAqbnw3dGuofKbuYHSxYLOqtC/jYujobismbGqpKWtuLixqbW2o6WblrjAuKaXi42bqLC2trq2tKupoqGem5eWlZWbmJ6jpqu0uL29wse/u7CdkpOgssHHva2Uj5Kanr3ApKOrtr/Fv7W6je+svraT/Mb69I/pjr24mfK0pdjuy6CAtdGI06CSgbCk7eHT4cqv27P8jLy9rZihrKSgpaaVkIiF+uvm+Y+Gl6Stt7evpZ2UjILs9Pb58+TVysTBx8nGxsG8ubnG0NbZ3eLr6/D5g42TnKWzur24rqOQiYDt+Y6fo9mHiIf3zrellpqus6Hugq+/kL+M1bXNtcTp+KmGgqeAm6nWxL+ektmMqXW7sXa8l7qrgH2RkaacjaGblpadpqagmqSkk5SKiKWspZaJfn+Ml5+kpKmlo5qXkpGPjIiHhoaMio+TlpmipaqprrKsqZ6OhIWRoK2yqZuGgYSLjqmsk5KZoqiuqKCog96drqaH5LTj34DQfqqpidahl8fTtJGAprp5wJGDcpyU18e7y7ecw6Dlf6mpnImRm5SRlZWHgXp239XT6Id+jpumsLGon5aOhn3i6Ort59rMwr26wMG/vrq1s7O/yM7Q1Njg4ebvfoeMlJyosLOto5eFfXTZ44CRlch9f3zkvKaWiIucoJDZdpyrga9+vaK7pa/O4Zl5dJaAkJ7Ds7KThsaCnWupomyvi6qddnOFhZqRg5WRjI2SmpuVj5mZiImCgJmfm46AdXeCjJSZmp+bmJCOioeFg4B+f36DgYaLj5CYnJ+eoqShn5SFfH2IlqOnn5J+eXyChZ2fh4eNlZufmpOdgNybqqCD3a3WzHW7cZuefsKSi7vAo4aAnKptsYd5Zo6KybervaqPtJTVdZuckH+GkIuHi4t+eHFt0MrL4YN7ipeirK6mnZWNhHvf5ebo49bJv7q3vb67u7ezsbG9xcvN0dXc3uPtfIWKkpqmrq+qn5KBeXDR2HiGi7t1dXPUsZuKfoCPk4XJa46cdqJ0rpWsl6G9zo1waooKenp7e3p6e3t7eoR7AXrae4J8hH0jfHx7ent7fHt6e3t7enp7e3p6e3x6ent8e3p6e3t6ent7e3qPe4R6jXuceo57gnqEe4N8iXsBeoR7DXp7e3t6ent7enp7fHsCAgEAPKXz/Iqnpu7yx8XL5PDHx4aPqrKtqLasoqSxwcK4qq22wbixtLi9vMW2o5iau8S6qZeOjJelsLO2tLOzs4SwgLKxsrGzuLe0tbKvo5eOkZ6uv8LCrJWPk5vDxbGzv7yvq7K9wLSoqrK/wbSrrrDYxo3RrrTZ9euC0dHb+qT2/8at1u6f54CtpJv0h76224zmvcOShr3EqJqalIz2w96BlKy5vKiUh4Lrz7Gcm629ysvX4NCytdnp8fLm2tTt/YH6QPLk0+P1+frp3tLU4uXdz8W6r6KZk5iruszvhZCku8TDsMipievIu8TCwrOon/iOrJ7OicCVs5ja8aW/zLy076uAltzgfZmV1d61r7bQ2rKyeYGYoJyYo5uUlKCtsKebnaavp5+jpqqpsaOTiIqnrqaXh4B/iJSeoaSjoaKinp2enZ+foJ6gpKSioqGck4qBhI+era+vnIiChIyvsJ+gqaebmJ6nqZ+Ulp2oqp6Ym57BsH69m6DE3tJzvr/B3Zfh4bKAnr/RkNJwmZWL13quo8N+06qwg3qrsZeLi4V92rTQe42ksbShjoJ84sirl5WmtcHEztfIq67P3+bn29HL4fB77+jby9rr7/Hg1cnL2NzUxr2yqJuUjpOkssLifombr7i5qb+Ee+C9rbWzsqOYkeJ/m468e6qFo4jC2ZWptauj05mAi8zMc46Jw8ynoajByqSjcHiLk5CPmJGKipSgopuQkpqjm5aZm56dpJiKf4Gbo5uOfnd2gIuTl5iZl5eXlJKVlJOUlZOVmJiXlpaRiYF4e4aToKKikX96e4Kio5OTm5mPjJGZm5KHiZCZm5GLjpCwoHOvjJCyzcBorrCwyI3SzKSAlK28hcRmi4uAwm6hl7F0xJ2heXKfpY2BgHtzy63MeYuirrGfjYB63sWolJKisLu9yNDDp6nI19/g1cvF2uh46eHUxtTl6evb0MXG09fPwbito5eQi5Girr3be4aXq7W2pr1+ddazo6mmpJeNhtF1j4Oucpx7l36xyoqcpp6XwYwNenp7e3p7e3p6e3t6euR7H3p7e3p6e3x6ent7enp7enp7e3p6fHt6e3t7ent7e3qLe4N6iXuXegF7m3qIe4J8iXsTent7e3p7e3t6e3t6ent7enp7ewICAQCAp6Tauf3t5ubekNXKwOimtqiuuKyorrnDvbKrssPFt7C5wbmytr69u7izv9LLl5m4uLm0o5WNj5aepq2wsrOws7Czs7Sws6uimZGPmqmyuL65pZGRmLXKx7+4u7q6vrWts8O6p6u1w7yroqe0uLexnqnIi9nNzMifhPzK9bWh55eAqeWxo8PXpaPy1f3imtW/su+tt5uYq5jZs/KRrruqjfTGrqious/p6uqGlZb+8PWNkoiFj4rk+oKGi4WAgIqOkoeBgI6RkIWBgIiOhv/+/vjw7v+G+N7g79/Ov8GsmpvC64qfvL6rneuakbjRqJq4ouSeqcaPxNbg2Pas3paexbmAl5PEqeTR0tLHg8G0rNSVpJieppyZnqiwrKKborCwpJ6mraagpKqpqKeirb63iImkpaaik4Z/goiQl5yeoaGeoaCioaOfoJqSioOBjJmhpqumlYODiKKzsKijpaSlqaCan6yklJafq6WWj5Sfo6GdjZazfMS3trWQdeO42KGTy4aAmsyclK6+lpPWwebJi8KroNucpo2JmonCp+aNqbSkh+rAqaKissbf4OCAjo/z5euGi4J/iYTc73yAhX96e4OIi4F8eoiLi4B7e4KIgfb09O3l4/WA69TW49XFt7illJS43oOXs7Smmvabg6i+mYynktCOmLWArsLKv9+cxYePsaaAjYezndO/wsO3ebSnnsSIl42Um5KPlJujoJiRmKSkmpOboZqVmJ6dnJqWobGqf3+YmpuWin12eX+FjJKTl5eUlZWWl5mUlZCJg3p4gpCWmqCbi3t7gJakn5iWmJaXmpONkp6Wh4mSnJeKg4eRlJSSgoqjcbaopaeEatCsxJKLt3qAkLmNip+ri4fBsta3f7SeksyQmYJ/j361oeKLp7Kihue+pp6ersHZ2tp9iozt4OWCh398hoHX6Hl9gXx4eH+FiX96d4SIh315eH6Ffu/v7ufg3u995s7P3NDBs7OikZK23IKWsLOkmveYepyyjYKaiMCBi6h3oLO8rs2StX2FopgOent7enp7enp7e3p7e3rlex56e3t6e3x6ent7ent7ent7ent7ent7enp7e3p7e3qGe4N6hXuKegZ7e3t6enqGe4J6lXuHegF7jXqHewF8h3sQent7ent7enp7enp7e3p7ewICAQCAqsWmsOyC7+vnlej0oMCit7CnqbW/vLKqtcjIr6q8zbawwci4usS8vb66xMOvx82Tj6y1ubatpJmNi42SmJ2an5ubm5eUkZSYqa61ubi2qZWM96TLzbezvr67t7vCvrO8x7iqsMO7paq2vLqrpq25ubSpq7ztnIaIhIjgkIOgv72AsP2E3oPMi/jNnd/brcLotbOEs6jJs4KjuKaIyZiZwMXigof9i5mP84WPiYGXp5eFhZSdj4eI9oCDg4eD/oyOjYeFh5OSh4eDj42GiIWDgYiSloqEj5CB8IHx6veOgNnEzamVkr33mbe4l/Gu8rOb5qWY2LWO0Mfz39vLiNq0pMqAm7CVotJ22tPShs7ekKyUpZ+XmqOsq6GbpLW3npmpuKSfrbSnp7Krq6yosrGfs7mFgZqip6SclYuBfn+Gio6NkI2NjImGg4aLmp6jqaelmYeA4pS1t6Ogp6emo6asqJ6mr6KWm6ukkZahpqWWk5mjo5+WmafUjHd8eXnLgnSSrKiAoOF2ynO4fty6jsfHna3TpKF4ope0qH2esaCExJWVub7ZfYHzhZKI6ICJg3uPn5GAgI2ViYGD7Xp9foJ+8oWIh4F/gYyMgoF9iYeAgn99e4GMkIR+iYl85nvm3+qGec+7w6KPjbTpkK2tjt6d16GL0ZOIxKJ/vK/dy8O5esOklLWAkKOLl8JuysHDfL/OhZ6KmZSNkZmhn5aRmamtlI+dqpmVoqebm6WenaGdp6SUqKt9eY+XmZeRjIF4dnd+gIWDhoSEg4B9e36DkpSan56bjn940Ienp5WSmpmZl5qempCYoJWKj5yVhYmTl5WJhoyVlJCIjJfCgm5xcG+8eWmJnZqAlsxsvWiodMesgra5kp/FmJVvlouopHydrp6CwpORs7nTen7tgY6E5H2Gf3iLm419fYmRhn+A53d6e3577IGEg317fYmJgH56hoR9f3x6eH6IjYF7hYV44Xnh2eODdsu4vp6MirHlj6qqjNiWx5OAwoh9tpV2r6LMvbOrcbKYiKYMent7ent7ent6e3t6xnsBfKF7G3p7fHt7fHp7fHp7e3p7e3p8ent7ent7ent7eoV7gnqFe4Z6B3t7ent7e3qOewF6hXsBepp7B3p7enp6e3uIeoR7Fnp6ent7ent7ent7ent6ent6e3t6e3sCAgEAgL3Z9ZjVw+v1nuLpzbq+tbK4xszGtLC/y72utsjDrrzMurHEwbi+wcC+wcvBw9GxydyglqSytsHBzrvMs7i7or+itLOqxLLCtK6pq6afj5arqszLqr24ub2/wL+9w7e2xr2vvsu0q7e/r6Gruratpau2vbmrvZGDjqCR7baB36begLqGwrbM0f7lqM3j3pyYzYCzpajXmLKj+6WIrsbdhpf2/YqChJmmiI+clIaQlYaQpJ+Hh5mWhYeDgoiHi4aQjYaFgo2Uio6Ei4eHiYWCiJaXh4uek/+ChfmBmpL+g4Xq5ZKC5uHMp5qbz5a2spS9rqOW7rfkk6vEwO2Utq3s+4jkgKzC4Iq/s9Pgj8zVuamspKGms7ezop+tuKuepLSvnqm3qJ6xrqasrq2rrreur72ftMaRiZOgpa6vuqm3oaeqk6ySoqGasaKvo56anJaQgoicmLWzlqiko6ipq6moraKhr6eap7GelqGom4+XpaGZkpmip6SYqIB3f5GE1qdzypbHgKp3saS2v+TRmLbQyI6KunWhlJnOlKqc8aGFqL/UgJDt84R9fpGdgomVjoGKjoCKnZiBgpOPgIJ+fYGAhH+HhoB/fIaNhId+hYGChIB8go+RgYSWjPR9f+57kovzfX/f2op829fDoZSVxY2rqYuqmZOG16PPhJqxrNeEpJ7R43vKgKCz0YCxp8PQhr3Hq52gmpicpqunmJWiqp+SmKijlJ2qnZOlo5qgoKCeoquho7CWp7eHf4mUmaOirp2rl5ueiaCIl5ePpZeil5OQk4yGeX+RjaWjipmXlpudnZ2bnpWTn5iNmaGQiZOZjoSLl5SNh42VmZaLm3VudIV6xJxou4u3gJ5tpJinsNPBjajAuYWAq2yXi5HJkqea76CCpLrOfI3n7IB5eo2ZgIaRin6Hi32GmJR+f46LfX96eX19gXqCgnx8eYKHf4J6gX1/gX16f4yNfoGRh+56fOd3j4jsenzZ1IZ51dK/nZGSwIuopomkj4h8x5a/e4+lnsd6lpPB03K7C3p7ent7ent6e3t67HsUfHt7e3p8ent7enx6e3t6e3p7e3qHewV6ent7e4Z6BHt7enqzew56e3t6e3t7ent7enp7e4d6hHsTenp7e3p7ent7ent6e3t6e3p7ewICAQCAuuzT2Y2ntvDq0u+Gr5m5x8TDtbbK0L2wvcq9r8bKtbzNubrLur/Gv8PAxbzDsqPEodOVtvixh6WCu+LguYijjJ3/uODhtYegiaf5yMjctKDcrbSxrsC3zc7GvL29sb++rr3Hq7LEuKa0wLenrbq7tqSip7CguJKNmL3qxt/7s8iA8e/B6dnbk6e1idGMxK2ktKvcoKqSu4epx9GGnOfvjv+WsIL0j4mQqpuDjpuJlJSHlqaZhJGbjoeBioeAgoWLh4aBkIqJg4aIh4mBg5SWh4eZkIGHh/+Qno6Ml4r4lZKLnIjsioj/+9Wto6Dyqa+PrOCy4rWQi8vgx/K3mJTE0u6AqtXDxYGXpdzSwdZ6n4uotbOwpKW3vKygrLarnbO2pKq4p6e3qKyyrK+tsaiwoZSykr2Fo96eeJN0qMnIpHmRe4zipMfKoXePeZXes7PFo5LFm6Gem6qjt7ivpqeonaqpmqewmJ2topSgq6KUmaSmo5KRlZ2QpoOAia/StcfjoLOA29ew0cXEhZakfLx/sJ2VopvSm6WNt4Okv8iAld7lh/SQp3zqiIOKopR9h5ODjo6Cj56Sf4qUiIF8hIB6fH6EgYB8iYSDfoCBgYN8fo2QgoGSiXuBgfSKl4eFkIPujouFlILhg4Lz7sumnJrln6aJnMehzqOCfrjLst+kioaywNiAoMi4uHmPm87GtMZyloKeqaimmpuqrqGWoKmflKepmZ+rnJ2pnKCmoaSipJyklomliK98mM2Sbohrm7m3l2+EcoLPlri6lW2EcIrMpKS1mIi1kJSQjpuVqKihmZqaj5uajpmgi5GflYiSnJSIjZaXlYeFiI+EmXh2faLAp7XQlKWAysajwLa0e4uWca52pZKLmJPRm6KKtYGfusN8kdnfg+2LoXnlhH+GnZB7hI6Aiop+i5mOfIaRhX95gHx4eXuBfn15hYB/e31+fYB5e4mMf36Phnh9feuFk4SBjIDoi4eBkH7cgX/s6MeimZjjnaWHl7mTv5d4day+pdCZgX2mtcoDent6hHsDent6rHsDfHt8hHsDfHt8hnsDfHt8r3sNfHp7ent6e3t6e3p7eot7BXp6e3t7hXoKe3t6ent6e3t7erF7AXqGewF6hXsDent7h3oHe3t7enp7eoR7A3p7eoR7Anp7AgIBAIC8+cHuyeTS5PLLhseXsqSin52nq6ynvMvDtcfLtb7Our/NuMfDvMm4pMucqaG5uaWXqLmrpvWwgaiFpY2gjKCKnYigh6aBr/i189DLz9jk3cCsyM++n7iwvqCwv7O5ybS9vqa2w6mywa+itra6mc6Y25XUjfb3u+bY1YiynJumzoCF2uvA/cvykZDM6s/vxO66k6iQqI20z+KRhOSNjZek9YaciJyk9IuWhqKh/4mXipWPhpudhouYj4X3iYL9gImF//+Hh4SAhYqJgoqSkYKOloKCioGOmoyVm4mLh4aelPSF/4ShieiGhYX4vKyK2aaqgaeRm5rFieXS6cH0vvK3+oCt4rLYudDBzt25erOJoJOSkI6YnJ6Yq7ixpLW5pKu6qK65prSwqballLiOl5Gnp5WIl6Wak9mecpZ3lH+OfI96jHiOd5VynNuh2Lq0vcXRyrCdtbuskaafqY+dqp+lsqCpqZOirpeeq5uQoaKlibiJx4jBguDiqM/DwHugjIuVuYB3wtWt5bjbfHe21bjYsditkKGLpImtx9mKfdmGh5Cc64CVg5Wc64WPgJqa9YOQhI6JgJSWgYaRiYDtgnzzeoN/9vaBgX56foODfISLin2Ij3x8g3uIk4WOlIOGgoCWjul/836Ygt5/f3/stKWFzpyieZKDj420f9HC07LdsN2p4oCk1qfKrsW3w9Cuc6iAlomKhoWOkZSOoKylmKqsmZ+tnaGtmqijnqmai6uFjYibnIx/jZqOiciSaYxtiXSFcoRwgW6Ebotoj8mVxqumq7bCu6OSqK2ehpmTm4SPm5GXoZScmoeVoIuSnY2Dk5SXfql+t36yeM/Sm760snGUgoCJqoButMag1anKZlWmxKrIo8mnkJ6Jo4apwdOGetSDhI2X5n2Rf5GY5YKLfZeW8H+LgYqGfZCSfoOOh37of3nueH988fB+fnt3en+AeoGIh3uEi3l5gHeEkIKKkICCf32SiuN87nuUf9h7fHzmsKGDy5mfdol7h4aqecW3x6jRps+g1gl6e3p7ent6e3quew98e3x7fHt8e3x7fHt8e3yvewN6e3qKexF6e3p7enx8e3p7ent6ent7e4V6A3t7eoR7AXqFewF6hXsBeo17CXp7e3p7e3t6ep17Cnp7ent7e3p7e3uFegR7e3t6hnsIent6e3p7ensCAgEAgL3vwuPzxZStqpi3h76Iv4zBlbmeqqOnl62hwbPQvL/QucnApcCjnrqvmLS6pZy2vrmkpranqfXF7NHe6cD9q4WghaKDr/rG3uDj187Q0sq60fLku7fTzKatyqmptLOpt8invb6pw7y1vs6uxKzBptOm0aTXmeON1+H93uPS1OnagPvCmpW69sqUiuDK7Lyv85uct4aqzOON+PWbjpOKgqGSiJX/mZWMnIaMlYelmfuNjouRhJGXhYubifOAhv33iIWA+4aFgP+IiIOHkYyCko37hYOHlY6TmoGHgYOkioiH9aCTgYTrl5bq+oGK+sKxiICklL7trYy6lrygo7+K1OHlgK/Zs8/fs4eemoqmeqt8rH+uh6iPm5OXip6TrqS+q6y8p7Wula6Uj6ediaKolY2kqqaUlqSWmNqw0rrG0KvhmXaPdpF0nN2wxMfLv7m8wLiqwNzQqqa/uZadt5mZo6CXo7KVqqmXr6ikrLyftJ+ymMGYvpXFjM+AwMzjy83Av9TEgOOvi4an37aDeM2216qc55eWs4KkxNmG7uuUiIyEfZqMg47zko6GlYCGj4Kdk/KHiIWLfouQgISThOl7gPLsgYB78oB/evSCgn2BioZ8i4fxgH2Bj4iMk3uBe32chIKB6pmNe37gkI/f73uE7rmqgnqcjafUnoCqiaySlq5/wc7PgKbOqMLRqX6TkIGbcqB0oXekf5+HkYuOgpSLpJmxn6Gwm6mjjKKLhZuRgZmdjISanpyLjJqLjceiv6u2wJ3NjWuDa4Vqj8qis7a6r6qssaqcscrAnZqxq4ySqo+OmJOLlqKJnJyMoZuXnqyTppOkjbOMsIq3g8F3sL3Svb+0scO1gNKigHyazqhxZr2nxp2T45WVsoCgv9KC6OWQhoqBepaIf4vtjoqCkHyDjH+Zj+2DhIKIfIeNfYGOgON3fezmfn147Hx8d+1/f3p+h4R5iITsfHp9jISIjnd+eHqYgYB+5JWKeHvbjIvb6nmB6LWmgHiZi6HHlXmggqKKjaR4tcTDBXp7ent6unsFfHt8e3y0ewl6e3p7ent6e3qEewx6e3t8ent6e3p6e3uFegN7enqJewF6insBeot7DXp7e3p6e3t7ent7e3qJewF6j3sBeoR7B3p7e3p6e3uEegV7e3t6eop7Anp7AgIBAIDH5IGxvu3Y4dKWmbWCyYe5m7GmrKKjoaOppqaesLa+qbugocKes7qZtbmfs72xn7S2saStsaXY2fO5g7Lu5cCJqYO84u24gLL/z+jV39nC0tvXuLnQxqTJz6bLza/Xr6+rrLjBzLrCtsG2vsG1wanFr8i0t8yR7pTn+86at8rI2ID+r7vj2ee7nI68772b+JaCi5rC5YeE8J6JhYOMrfGEh5en8I2Bl5r5kYSRjYukgoCNiJCBjZOEi5CC7oeA74WEgPuFgfeEiYOBiof6jYX5hYGNi4eYg4OF/5yKkouBmJGbiYSaj5PukJb68fON5cWVqpqTytC4lqfB9tzl0aeYzoC4z3eirNnEzb+HiqR2s3qnjaCWnJKUkpSZlpiOn6eumquSkq6PoqiLpKePoKmgkKKkoJWdoZbDwdmldKDUza15l3WoydKlcqDlutDCzMiywcfCp6i8s5W2vJe4uqDFoJ+bnKauuaqyprGorq+lsZqynrSkprmE14bP47qMpbe4woDon6nQw9KpjYCq2qqL8JJ+iJW624F+55iEgH2Gpeh+gZCf54Z8kZTvin6Mh4WdfXqGgYl7ho1/hYp95oF75X9+e/B/fO1+g317hIHvhoDvf3uGhYCRfXx/85aFi4V7kYqVg36TiI3kiY/u5uiG2ruQpJOPt7upiJqv4snTvpiKuoCuw2+Xoc24wbR/gppvqnKdhJaNk4qMiouPjY+GlZ2ij6GJiKGGmJ2CmpyHlp6Wh5ialouUmIy1ssaYapPBvJ9ujGqat7+XZ5TRq7+zvLils7mzm5yupoqpro6trpa5lpSQkJegqZ2lmqScoqKYo4+lk6eYmqx6x32/06yCmqqrtYDZk5zBtsOcg3idyZ2C75B9h5K11X174ZOBfHmDoOR7fYya4oN4jZDphnuIhIKXeXeDfoZ4g4p8god64X544Ht7eOt8eed6f3p4gX/qg33rfHiDgn2Nenp87ZKCiIJ4joeRgHuPhYrfh4zo4eKD1beNopKOsa+egJGl1bzHs4+BrQF6hHsDent6snsBfIR7A3x7fIR7AXyyewF6hHsIent6e3t6e3qEewZ6e3p6e3uEegN7e3qGewF6hHsBeoR7AXqSewt6e3t6e3t7ent7eoZ7BHp7e3qJewF6jXsHent7enp6e4R6BHt7enqEewN6e3qEewICAQCA09So/NWFpdH1uKWIw4qrpZW3nK2hp6OooauqurC7sra8o72au6qqwKC1vKGyvbSmt7WypLW7qfK6gOLGgsrbh7WC68WGzN6EuojV1djM1tbTwLrSy6vPzanOu7LSrdzgx9bev8K9xrbAtrq6s7u3sMqh06Sz04j6pKTM2vKQ/N2A+qXH3rW99cmTjb6u9JLfhanb+Ivsk5XyiIyj6o2NnImFlY6f842Emo70ioSUhJeM+ouKj4OOjYOSjPWBgPOBhPf6hP75hYP9hon9iYb6hYWMgIqM+IqAko2Uk4CKhaGCiICbkPuLkpzzlJKB44eHybCNjZTC9Z69+tGojN+AtMaAxMKa6MF5lb7gppR7sX6bloiljZ2Sl5SZkZuaqZ+qoKSpk6yMqpqarpGkqpKhqqOXpqShlqaqmdincsyzdLbFeqNz0q93tsd1qHzEwcW8wsO/rqm+t5u7u5q8qqK+ncfPt8TMsLKutqeupqmppKqmoLWRv5ShvnrglJS4xtuE5MeA45W0y6Ws37WHga2b7Y7YgaPR7oXijY/ogoab4YeHlYN/joiY6od+k4jqhH+Ofo+F8ISDiX2Hh36Mhut8e+p7f+7vfvTuf37zgIPyg4Hvf3+Fe4OG7oR6jIeNjHqDfpp8g3uUivGEi5XojYt82oCBv6iIhY6x35Gu5r6ZgMp0pLWAuraQ27ZyjLHTnItzpneSjICchZSJjouQiZKRn5aglpmeiZ+EoJCPoombn4mWoJqPm5qWjJuej8abaLulaqm2cJdowaJtp7Zrm3C0sreutLWwoJ2vqpGvrpCvn5eykbrAqre8o6OfqZuhmp2cmJ2alKiHsouWsHLRiYmpt8t507mA1Yqnvpqh0al9eKKS64zYf6DN6YHdiYvjfoOW3IOEkn98iYST5YR7j4TkgHyKe4uB6X+AhXqDhHuIguZ5eeV4fOnqe+/pfHvtfH/tgH7qfHyDeH+C6IF3iYOJiXeAe5Z5gHmRh+2CiJHiiYh51X19u6SHhIyr1Iik2rSReb5um6sEent7eoR7AXqwexF8e3t8e3t8e3x7e3x7e3x7fLF7DHp7e3p7ent7ent7eoR7A3p6e4V6CXt6e3t6e3t7eoh7AXqEewF6hnsBeol7FHp7e3p7e3p6e3p6e3t6e3t6e3t6hnsBeo97FXp7e3t6e3t7ent7enp6e3t6ent7eod7AgIBAIDjz73ptcf3tLyHob+NqbCSrqShsJ6moqeju7rDt8O2w7HItsWgt7KtxKi5vaa6u660ubq1r7i68IH3wYCDx4COzoSNzfmG1eqC0N7q38nY1c60yMqvw8iny8C5076K2+ff9dHw0Nmwu72yt7O0qsavw7WhzKut0JzD1/mc7/qc24CIoMmdis+diMCX3NyPz4et6YGA+qPzhZCa94+UioGNk4CHh5aAj4SUhpr9iICTg4uOgIiJjoGQhoSUhe6A9P6E9veA9/eD/vmC+YOE84SDhvmMh4KNhIP+k/SI956Kkf2XkI/0mZWG+paN85CM6/eQ1sOIgoeun4TDt4LQuvLJwYDSvazYprXio6l6kqx/mJ+EnZSSn4+Wk5eUp6mxpa+jsKC1pLKRp6Odspmoq5ioqZ6jqaqmn6eo3XXhsXR3tnSBvXiAuuB5wtR2v8zVzbjEwrykt7efsraYua6ov61/yNTM4cDdwMiiq62ipqKim7KfsKOSuZuevo2xw+ON2eWOxoB8kbWPfbyPfK+KxtSKy4So4Ht78JzqgIqT7IiOhHuHjXuBgY97iH6NgZPzg3uMfoSHe4KDiHyKgH+Nf+R66vN+7O177ex+9O98731+6X59ge2FgXyHfn7zjOmC7JeDi/GQionqk4+B8JCH6YqG4euJzbqDfYObj3izp3e+qd+3sYDGsqHLm6vVmZ9yiaF3j5Z8k4uJlIaNio6LnJ6lmqSZpJWqmqaInpmTpo6doI6fn5SYn56clZ2ezWzPpWptqGt2r252rM5ws8Jtsb7GvKq2s66YqqqVpqqOraKcsaJ2u8a+0LHMs7mVnqGWmZWXkKaUpZiHrJCUs4WlttSDyteEuYBzh6qFdbCFdKKButGJyoKj2nl46pjmfIaO5oSKgXiDinh9fYt3hXqJfo/tgHiIe4CEeH6AhXqGfXuJfN945O176OZ46OZ77+l56np75Ht6fumCfnqEe3vsiON+5ZOBh+uNh4bmkIx+642E5IeC2+aGyLaBfIOXiHKpnnGzoNOtpwd6e3t6e3t6sXsRfHt7fHx7fHx7fHx7e3x7e3yUewF8nHsEent7eox7A3p6e4R6CXt7ent6e3t7epB7AXqQexZ6e3p6e3p6e3p6e3p6e3p7e3p7e3t6hnsfent6e3p7e3t6e3t7ent7e3p7e3p7e3p6e3p6ent7eod7A3p7ewICAQCA+Ly5mf3AuI6luKiNrK+SpbSgq6Wgoqawsby3tcG2xbfEu8C9xsO1sLe9q8C5r8G9sri4wbu4zdi8vcbKubjBwLnAxcPE0s6syYmG6eD5783Dw8vDs8Oxvb+w19Hu3vDZ8Nrv1/LZ4s+3vbe6tLS6tq3Dsqi81JS56perrsKPpruAmYu1uIegtaCJo7GK2oix8fzvhZfmlY6Egp7viIuV7YaOi/qHkof/gZGFiYeE/I6Bg4v+goaC/Yf0h4Png/j2g/b6gvKBgviCgvmH9oCEgfmFg4OG/fqIi4mIi4qTiIqFnIONjp7+mJSP+aL8gZOA7pHewIWD9qK5m4m9wIufwK2A5a2ojOivqYKXppmAnJ+ElaKQmpaRk5egoaqlpLCmtKazq6+rs7GloaasnK6on7Csoaior6mmusKsrLS3qaevrqivsrCzwL2cuH161s7k2ruysrqyo7Kira+gxb/cy9nG28jaxd7H0L6nrKWooqOopZ6wopiqv4ao1oqcn7CDmKqAi3+lqHuTpZJ+lKiG04Sr5/PmgJHdj4h/fZfngYWO44CIhfCBi4H0fIuAg4F/8od7fYX1fYB98oHrgX7dfe7rfezufel7fe58fO2B7Hp+fO+AfX1/8e+DhoKChYSMgoN/lX2GiJfzkY6J7prxe4x644vUuIF+74+pjn6sr4CRr56A2KOeg9ylnnqOnY94kpV7i5iHkIyIiY2WmKCamaWcqJunoaSgqKaal5yikqOdlqWgmJ6epJ6brbWgoKernpyjo52jpaWns6+RrHJwx7/Syq2lp66lmKaXoqOVubLMvsu5zLvKt8+5wa+boZqdl5idm5SlmI+etH6dyoKTlKR7jqCAgXaanXOJmYh1jKaF0oKo4u7hfY3Yi4V7eZPifoGK3XyFgep9h37ueYh9gH587IN4eoHwen167H3mfnvZeujleufoeuR4euh5eed953h8eel9enp86+iAg39/goGIfoB9kXqDhJTuj4uG6ZbseIl33ofPtIB974eghnajpXiHpZQFent7e3rEe4J8v3sCenuGegN7e3qFew16e3t7ent7e3p7e3t6hnsBeoR7Hnp7e3t6e3p7e3p7enp7enp7ent7ent7ent6e3t7eoR7gnqPexJ6e3t7ent6e3t7ent6enp7enqJewICAQCA66Shl4CEvr27vb7DrqS0v6WmpqClq7a9ur+zxbPCtL66wtHA0MPJyam9sLjAxMDDytrl0s7n79LJt7m0sLKztbu9vsHCxcTCkf+Lk46KkZqNhuvm7c20zsHm9Orq7eDz2+/Z7Nfq1uzc+s6ttrXBvLCuvrqhnbCyqqejnLSDk62ApP+En6qVgJmqlf/0gK7w9O+Kiu6a/YCXg4aNke+VgoaHjIn+joKS+YaDi+6Dg/aH+f6Gg/6G+4eB/Ibt8/XugvX7gPaCgfmF94H/+4iAgoiGhYb+gIn/iviB/ZGBgI6LifGfgoKOk4GLoP+bjfiKiOyP3bWMgdiykKGY+4uho4aA1pWSiXR4rayrrK2yn5akrZWWlpGWm6Wrqa2is6Kxo62or72uvrG4uJqsoaivsq+wtsXOvbnP1722pqmjn6OkpKusra6vs7GwhOh/hoF+hI2Be9nT27ulu7HS4NfV2czeyNrG2MXXxtnK5LydpqWxq5+grqmRjp6impqUjqR5hp6Al+t5kZuJdYyaifvwfqjn6+WEheWT8nqRfYGHiuaPfYCBhoPziH2L7oB9heV9feuB7/OAfvKA8IF98oHj6evkfevve+x9e+1/7Xz074J7fIKAf4DzeoT0hOx88Yt7eoeFg+eXfX2IjXyFmfSUiO6Eg+OK1K6HfM2dgpKI432Rk3mAyYuJf21woqOhoqOmlY2ao4yOjYiNkp2hnqOYqZqlmaKepLGjsqasrJGil56kpqWkqLe/sa3BybGpnJ6XlZeamp+goaOjqKaletd0fHh0eoN4csrEy6+ar6fF0svIy7/PvMy5yLjIucm81K6Tm5qln5WXo56Hg5OWkJGIhZhxfZOAjNtxh5CBboOQg/vufaXh59+BguGP7XiNen6Eht+Kenx9gn/thHqH6H15geB5euV86e19e+x96356637e4+beeubpeOZ5eOh86Hnw6n94eYB9fH7td4Huged57Id4d4SCgOKTenqEinmCle+RhemBgN+H0KqGfMyTeYd/03SHinEBesd7Anx7iHyvewF6h3uIegV7e3p7eoZ7AXqGexh6e3t7ent7e3p7e3p7enp7e3p7ent7enuEeg17enp7ent7ent6e3p6h3sIent7ent6e3qGewF6iHsSent7ent7ent6enp7enp7e3t6hHsCAgEAgPydk52ajLK/wLy3ur26vcG/xc22uKqtrLStvrHEtMu/yce/0MvG0MfIo93L1tnd2dbT2Obe0tTh4r+3trW3uLm7u7u6vMHRy4WRkIeJj52SioyOiIiBlvnp7vH03/Lt5fne693m2+PY6Nnbvrq+q7y6sq2tq6qrpqSlrpmOnZitgKCLgZGfpqaH9s6D+6be8eyOhP6X+5Ca+Zn48oj/hYKQ9ICS6oD9hf/9iPiI8veD9Ib2/oL9+4H1hPOFgOj47P/z9f7vgfj+gvGC84X2gISDgYiAiIf5jfqFhIKJ+4qNiIiIkoKQlvufi4GYiIqV/IuL8ozboaX6rZiI+4iYnZaDgOaOho2LgKKusKynqq2qrLCutrymqpyenKSdraGypLmttbauvre1v7e3l8m3wcPIxcO/ws/KvsDMzq2mpaWoqKmpqqqqq6+/u3mDgnp8gY+HfoCCfn52iufY3N7gzd3Z0uTM2MrSydDG1sjKrqyvnKyqopydmpqalZSVnoyCkIuegJOAdoSSmJl838l/9qHW6OSIf/WR84uV8ZPv6YP2f32K63uN4Xrzf/Tygu6C5+t96oHs833y8Hzrful/e97t4vTp7PPlfO7zfed86X7sen58e4F7goHuhu9/fnyD8YWGgYKCjHyKj/GYhnuSgoSQ84WG6YbSm6D1m4h85XyKj4h4PtiFfYSBd5ikpaKdoaOgoaWkqa+coJOUk5uUo5momq2iqqujsq2rs62skLurs7e7uLaztsK9s7S/wqCZmZqdhZ6An6Cksa9weXlxc3eFfnV3eXV0bn/ay9HR08HQzMXXwcq9xLzBuce6u6Kgo5KgnZaRkpCPj4uKi5KEeYaClIp3bn2Hjo9108l99p7R496FfPGO8IiS7JDr5IDwfHqH5XiJ3Xfte+7rf+d+4OR65H7n7Hrt6nnme+V8eNnn3e7k5u0933jq7nrheuV753d7enh/eH9+6YPqfHt5f+yCg39/fol6h4zrlYN5j4CCje6Dg+WDzpif9Jd/c9Z0gYV/cAF6x3uPfLF7BHp6e3mEeix7e3p7ent7ent6ent6e3t7ent7ent6e3p6e3p7enp7ent6ent6ent6e3p7e4h6CXt6ent6e3p7eoh7A3p7eoR7AXqJewF6h3sFent7enuFegN7e3qFewICAQCAipeWl52RtsXFxL+8wMC7wsbGw8OntaS2r7bBu7XFwNXJxtPIzM+6t7i0vtbb3dra3djV2eTx9fDrwLOysrG0t7azsrG1t7iSg4iNk5eamJGNjY6LhYGB08KA2e735/D14vXl6Ofb5tTR0r3Dx8zEvru+t6ypp6qmpaiclpSwmZuAnZeGh4+Vm5+YgKCh0ILmkYCDkPuYjoaW6YGL8o6M+Y6A+I36goT2iezxguqD+fCC6Yb08//vgeuC+PuB3fPp+u3u9ez+7P/19/jy+/SC+vmF+IX9/Y2BiIP0jfzyjPv4j4SGjYWDi4mHlYuMj4CVgYqD/4bIhcvOs5GUlpWZk4iAfYqIiY6EqLS2tq+tsLCtsra0srSapZanoaavq6WzrsK3tcG3usCtqaunsMPHyMXGyMPBxs/c4drXrqGgoaKlp6ajoaGkpaiGeHyAhomMioSAgYJ+eXZ3xLR3ytzl1t7j0OPT1dTK08PAwa2yub20r6utpZuZl5mVlZiOiYehjI2AkIp7e4SJjpGQf5+cyX3ejHx/i/OTiYKQ4X2G6omH8Il77ofxfX/sg+PnfeB97uZ84IDq6fPme+J87vB71ejf7+Tl6+Hz4vTr7e/n8Ol87+1/7X/y84d7g37oh/Hoh/HuiX+Ah4B+hYOBj4aHiXqQfIR/9oDAgcTInYSGiYeLhXuAdYF/gIR8n6usrKajp6WiqKypp6mSnY6emZ2mopyopbatrbetsLalo6OfqLe6vLm7vLe2usLP1c3Lo5eWl5ianJyYlpiam51+cXV4fYCDgXt3eHl1cW5vtalwvtDYytLXxNTIyMa8xbeys6GlrLCoo5+gmZCPjY+Lio2Ff36Wg4SAh4FzdHuAhomNfp+ZxnvaiXp8iPCRh4CN3nqC5YWE64Z46IPsen3mgN3hetp66OB523zj4u3heN156et40OHa6d7f5dvs3e3m6Ori6uN56ud8533t7YV4f3vjg+vihOzqh3x+hX58g4B/jYSFh3iNeYJ98X67f8TJk3t+gH6CfHPHe5B8A3t7fK57B3p7enp6e3qEewF6hHsaent7ent7ent7ent6e3t6e3p6e3p7enp7enuEegZ7ent6enuRegh7enp7ent6eoR7B3p7enp7enqSewJ6e4V6h3sCAgEAgJGWkpScrK+1vr23tbvAvsDHwreur62sprG5rrPBwcnBzMjAw8a6wbnCvb632OXp5+Po6ezs7e32+viusrrGzNXY08vAu7nJpJCRk5WXlpeUkZCMh+XU0czOwsu9zd7y6/jn5vLj2cPd0cfGxcLJwsC9urerrK6joaSqoZCstJaXgKCcl5COkJOFyemHxIPfkvKBi+uN+4iC+oH6iPaCifL+hPP/g/P6/fH88e2C4/j/6oHm+fXw8u/68IDwgeXu4/Hq6e/o9un86v3x+PT98vqE7oHygof7hYD+iIaCiYv+gIn2hZGBj476lIGDkIOT+5DvhePn5qHy26iYlJGRkI+NgIWKhoiPnqKnsLCqp6uxrrC3sqihoZ+emaSqoKWxsbeyu7mxtbittKy0r7Cqx9HT0s7T09jY2Nnh5eSfoqu2u8XGwruxq6m7l4SFh4iLi4qIhoOBfNXEwry/s7quvM3h2ufX1uDSyrTLwLa3tLG6tLGuqaacnJ6UkZSbk4SdpYmKgJKQi4SDhId6xuOFv3/YjOp9huSI8oN88n3xg+19her0f+r1furx8ujx5+R83O3043vc7uvl6OXx53vnfNzj2ebg3+Xe7N7x4fPn7ury5+5+5HvmfIDwf3ryg4B8g4Xye4PrgIt7iYjwjn1+in+N8ovngdvf3pzv1JiKh4WEg4KBgH2Cfn6FlJqfqKehn6KopKetqZ+ZmZeXkZyimZ2pqK2osK6orbCmrKWtqKiivcTIxsHHx8vLy83V2daWmaGtsbu7uLCmoJ+zkH1+f4GCgoJ/fXx5c8W3ta+wp66hr8DUztvMydPFvKe8sqmqp6StqKainJqRkZOKhoqRi3uTmoCCgImHgn17fH9zyOKDu3zViud7hOCF7YB67HvrgOl7gubvfOXwe+Xs7OPq4t941+fu3XjX6OXf4t/s4Xjhedfd1d/b2uDY5tjs3O3i6OTs4uh633jgeH3qfHfsgH15gILteIHnfoh4hoXri3p8iHyL7onkf9nc2pnt1JSCf3x7e3l5x3uNfLR7hHoYe3p7ent7ent6e3t6e3p7ent7enp7enp7h3oBe4R6AXuIegN7enuTegp7ent6e3t6e3t6hXsEent7eoV7AXqGewR6e3p7hHoDeXp6h3sCAgEAgJuYm5aktLizsbm9trLAwcLKuLGvsLK1sq2zvL61srTFvb+7zL/AwsXKy8XJvdXw8Ofl5/D/goaE//G9tsfEvb68vMfFy8qHkY2PkpCSk5WSkpSY7OPa1c/Pw8fCv8/G1/eB3tzBzcrGxb3CwsXGwsXAu7OvrKusqKOgn56rtJaegKGfoJ+foJOigJOv7OSF8IWC64nvhu3/5YCE6oT/8f/3+uz1ge38gO/36+ji9u3m9uT27fXs+uqA7/rx8+PW5+3p6Ozu8O/z7v3zgPD6+IH4g/SC+4CGgYH7hvn/j4iDkYn3hIOEh4KP94eP+obrheaH54Lr79CMn6/skJOTlJSVgI6Mj4qYqKunpa2uqKazsra6qqShoqWopqGnrrCnpaa2sLGuvrGztbi+vri9ssfc3dTT1Nrqd3p47OCwq7y4sLKwsLu5vb1/h4ODhoWHiIqFhoiK29PJxr+/tbiysL62yOV30Myzvrm3tK6xsrS1srexq6OfnJydmpSQkZGepYqSgJSTk5KSkoiZf5Ks5t+B6oF/5IToguX23nyA4oD36Pbv8OXsfeXye+bu4+Da7eXe7Nvs5Ovj7+F65u/n6drN3eHe3uLk5eTo4/Ppeubu7Xvtfup88HqAe3vwge71iYJ9i4Ptf31/gn2J7oKJ8YLjgN6C4H7k6MqInKrThYeHh4iIgIaFiIKPn6KfnaOln52qqa2woJ2am52hnpmgpqifnp+tp6mntqqsrrC2trG3q77P0cjIyM7bcXNx39Sno7OvqKinqLGvtLN6f317gH6AgIN/fn+BzMW7uLKyqa2npbGqvNhxwbylr6ypp6Klpaiqp6uln5iUkpKTkIuIiYiUmoKIgIqKiomJioCVf5Op49t/5n994YLkf+Dw2Xp93n3y5PLr7ODneuHteODp3tvW5+DZ5tbm3+Td6Nt34eri4tXI2NrZ2N3f4N7i3ezid+Dp53foe+V46nZ8eHfqfenwhoB7iIDpfXt8gHuH6oGH7YDgftuA3X3g5ciHnqvFfX9+f4CAtXuDfI57jXyOewF8pXsCenuEeg97ent7ent6e3p6ent7enuHegR7enp7kHoBe5J6Cnt6enp7ent6e3qEewR6e3p6hXsBeoZ7C3p7e3p7ent6e3p7h3qGewICAQCArrCtq52psKakoqe5vLzLvrK5sbSytbi5uri0s7PF6obxzce9xNHKzsXExMbEw9nx8Ojt7Ono6NnMysrHvrq6u7m6u8C7wePp8fH9iZGKj4yWlvvr2NnT09rNyc/Jxc/e/ILowMvIxL3IysnLx8S5s7zBs7ParaekpqWnw7i6r6WAsqioq7Otl73gkMrr5v32/vKD5YDpgOeI9Pr5/oPn/f7u9PL07ejn+d7r7unk6/Lq8/D56PPu+vL47fPj38vS2dvc4+7r8uPy4vbs8+j874OCgfqBgPf4gIP2+f2C+fyOg/2A9ob3i42C/OiB64XshuWG5Ynl8q7mt5qfpqirr62AoqWioJOdpJqZmJysr6+9sqWspKamqausrayop6e4233hv7myuMS8wLm4ubu3t8ve3dXc3NnZ2M3BwMC8tbGxsrGxsreyt9XZ4uDrgIeBhIKLiurdysvGxcvAvMC6uMDO6njWsru3tK23ubi6tbOqpbCypKPJnpiWmZeZsamroZeApJubnqagjbvdjsbn4vjw9uyA4H3jfOCD7PTx93/g9fXn7Ors5eHg8Nbj5+Hd4+rh6ubv3+jk7+ju4+na1cPJz9LS2ePg59nn2Ozi6N7x5X58e+98euvteX7r7vJ97vKJfvN67YHuhoh98+B944Djgd6B34Xg7KrktoqVm52fpKGAm56bmIuWm5SSkZSjpqezqZ2knZ+foaSlpqShoaCx0XjWuLOrsr20ubKxsrSxscTT0svQ0c/OzsS4uLi2rqqrq6qqq7CqsMrM1NPcen96fXuEgdvQvr+5ub+0sbSurLXC23HHpq2rp6CqrKyvqqiem6WnmZi8lI6Mjo2PpZ6hmI+AmpKSlZyXhb7fjcPl4PXs8+h+3XvfetyA6vDu8nzd8fDj5+Xo4d3c6tLe493Y3uXc5OHo2eLe6uLq3uPV0L3Eys3M093b4dTg0+Xc4tnr33t5eOl5d+bodnvl6e176+6GfO946X7rhIZ88Nx84H/hf9t/24Pe6ajkuIWOlJaWnZqfewF8q3uHfI97AXyle4p6B3t6e3p7enuEegF7snore3t7ent7enp7e3p6ent6ent7ent6e3p7e3t6ent6e3p7ent6e3p6enl6eoZ7AgIBAIC3sqimoKGjrK2qr6ihnK230Lq6s7S1uLu7vLzI6vj+goqI+NXHycnHyc3P0NPd09zEx8nI0NHJy9nczcK/wcfLz8/Oy8TQ4e/v8ejl+PLv++bt7O/u397W0NjX3t3qhIKC/vf/9cXAxcfFytDGvsbz3OK9wLyuq8Gru62zt77LqoCtqqetrKuJ75qv8+CD4YPvguqB5fvuhPGD9Ijt8O/x/+Lq7uXw2OTn7+nj6+3x5Ono6dzh3+Ts4+Ta4dnl0t3g5ebk5ubj2+Th7eby5dzp6PX19er6/Pv28vn7+e7t/IT/gvmB+vD03/bmgeOB7ofngeOF5v/q35GWmJumoqesuYCspp2blZaXoKGfopyWkaGswa6uqKmqrLCvsLC62ufseoF/6sm8vb68vsHDxcjQx9C7vr++x8jCw8/Sxbu4usDEx8fHw73H1eHi4trY5+Pg7Nrh4ODg0tDIwsrIz87bfHl57ebt47eytbi1ub62r7XhzdGvsK2gnbKfrKCmqK67nUCfnZqfnp6A8Jqt7tyB3YHqf+Z+4PXogOuA7oTn6+nr99vk6N/o0t3g6OLb4+Xo2uDg4NPY1tri2trR2NHcydTWhNs83NnS2tfj3Ofa0t7e6erp4fDx8Ovn7vHu5eXyf/Z+8Hzx6OzY7t993H3ngt9+3IHg+eTajpiQkZyYnKGsgKSgl5SPj5CZmZiclY+LmaO4pqaho6OnqaiqqrTR3eJ0e3rgwbW3uLa4ur2+wci/ybS3uLi/wLu9yMq/trK0ub3AwMC9t8DM1tXXz8zb2NTfz9bU09PFxLy3vr3Dw891cXHe193TqqWpq6mtsaqkqdPAwaOkopWTppWhlpueo6+TQJaVkZaVlXr0nKzs24DbgOh95H3d8uR+6H7qguTo5ufy2ODj2+TP2Nvi3tfe3+LV2draztPQ1dvV1MzSzdbDztCE1TzW1MzV0d3W4dXO2djj5OPb6+zq5+Lp6+rg4e598nzse+3l6NXq23vZe+SA3XzagN744teNmo+KlpKVmqSfe4N8vHuDfKZ7hXoPe3p7ent6e3p6ent6e3p7xHoFe3p7enuGegl7ent6e3p7enuHeoZ7AgIBAIC7rp6ip7O8qp2dqaimp6bO0d7e487Tv73Bw9H8gYKDh4eIjpOE0MrSy93b3+Dc8N/W1Mze2NXi5+Hi4e7b39vV0NDR1dzv/4H17YCG8PPu+Pfp7ODh6ePj29XQ54qPiomHg4GBgY3TwL/Qw9LVzMnKvePCxK25vcW+vqyvlbrItoCno6iyvLbQ6Iza8o34je+J+IHp9fnw7u/6/PDt5fPo8dzk5+fs5d/X497n4unh4+Hk29bc2ebd493h5efq1uHS3trZ6uDo2eDd4PLt/Ojg2+Xp3efj8+r39fXw8+3v9u/x9en54e7j7+Ht4/nigfKN84Hf8vnn97PilfuwpZ+fsoCwo5SXnaeun5KSnZybm5vCxdDQ1cHGs7G2uMXteHp7f39/hol8xcHHwdDP0dDO4NTMzcXW0M7Z3tra1+DU19XQysrKztXk8nrp4nl/4+bj7O3e4NXU29XVz8nE2IGGgoB9eXh5eILEtLG/tMHFvru9sNO0tKCqrrawr56iiqy3p4CalpujranL6Y3Y7ov1jO2H9H/l8fTr6ur09uro4O3i69fe4eHk39fQ29ff2uHZ2tjb0s3Sz9zU2dTY3N3gzdjJ1NDQ39Xez9bT1ubi8d3U0dre09va6eDs6+vm6uPn7Ofp7eLx2ufc59vn3fLdfeqH6n7b7fTi8rDjl+amm5aVp4CpnY2Rl6Cnl4yLlZSUk5S6vcfHy7i8rauwsb7kdHV2eXp7gIR3v7vBvMnHx8fF1szGxcDPysjT19PU0dXO0M/KxcXEyc7c53Xg2XR42NvY4eTV1srKz8fIw7+6zHp/enh2cnBxcXm3qaazqLW7tLC0psSnqJWfpKqkpJSXg6CtnYCSjpOaoqDL7I3W7Yr0i+yG8n7k7/Lo6Ofx8+fm3urf59Tb3N3g29PM1tLa1NvU1NLVzMjMytXO1M7T1tjbyNLDzsnK2M/YydDN0eDd6tfOy9TYztXV49vn5+fi5uDj6ePl6eDu1+PY5Njk2u/ae+aF53zY6/Df8a/lm9yflZCPoJx7iXyiewV8e3t8fJB7inyge4V6B3t6e3p7envbegV7ent6e4Z6A3l6eoV7AgIBAIC/qJmnwqmgoK6zoJ2np8LW4NPi2uPn7OfL3f6ChISGhYiLiomHkOfi4+Pl2+Ld4er14OTa4ezk6PP3+eng5Ovw7uzt8e78+/X7/PD3gPn++vjz/fPo19/d4/WAk5KPj5GRiYOD///8683f6NfP0MrCxuDCv77CurOoucjBjrDBxICmorXDsaPSvLb894OJ+o3uhf/9gPGC6fXh8eP27PXs7uHj5eTm5eHb0NTQ3tfX0d/b2d/a4dba19zq3+vn4NPQ19XP4dTi4N3o29zn5vLc3urs7t/n5erk6ubn5uvo6+zm29jb1+Pj7+jx5ebs6fzvhuDt9+SH49iBhZGruKaXpYCznpCctZ6WlqOolpScnLfK0sfUz9TZ3dfA0/F7fH1+foCEgoKAid3W19bWzdPR1t/p2N3U2+Pd4+zu8uLb3+Tp5+bl6un08uzx8ubqee3z8e3n7+fcztXS1+h5i4mGh4iHgXx78O/u28DR2cnBwb20t8+0sLCzrKacq7eyhqOytYCbl6i0pJjSvbb59IKI94zthP37fu+B5vDd7eDx6PDo6N3f4N7g39vVys7K1s/PydbT0NbS2M3SztPg1eHc1srGzcvG1svY1tTe0tLd3OfR09/h5Nbd2+Db4N7f3uLg4+Xe1dLV0d3d6eLr4OHn4/fpg9zo89+F39WBiISjrp2PnICrl4qWrZeQkJyikI2VlK/Cyb7KxsnO0sy4zOh2eHh6eXx/fX18hNfQ0M3Lw8jHzdff0tjP1t7Y3eTn69vW2t7j4eDe4uLu7eTp6t7idePo6OPd4tzSxMjHy9tzhYN/gIGAeXV04+DezbXFzb23uLOrrMGopKSooZyToqyngJqoqoCTkKCqnJHVv7b484KH9Yzsg/v6fu+A5O/b6t7v5u7l5dvd3drc29fRxsrG0crJxdHNzNHN0sjNyM7Zz9rW0MTAx8XB0MXS0M7YzczW1uHKzdjc3tHY1tvW3Nrb2t7b3+Ha0c/Sztra5uDo3d7k4PPmgdrm8d2E3tOBjIGdp5aKlpt7i3ymewF8jXuKfKJ7hXoLe3t6e3p7enp7envaegF7hHoBe4V6hXsCAgEAgL2jlLOxqKK2nqK1rJ+93OHP3tvm4ub17MK3v+GAg4aKiYmOivTg4Oj07/H17/by/PiC7P+Em9e/g6S+0+Tv/YaLi4qIg/ziyqj8o4+Eh4WHh4j79oj88/r8gouRjY+QkI2MiIOF8eDI0Ovi5tfS1cnIx8O+ucSluL2xqcSnzK7FgKKmw6mhmfah3veN9YeD9Yrt/YX5gfD97/jx8u7r6enl4+Hd3tnd1tXW1NDU1M3g0tLQ1dvJzdPT4tbY1dDSxcrMzc7S09Hg3eHo4ebe4O3i3eLk7eLo5tzl3d7g4d/cy9HN09TW0dvU5d3p4O3j3vXb8vLnguf08Kl7ipGiu5mWgLGZi6ilnZiqlJiqoZay0NbF0s/Y1Njm3bivt9d5fH+Dg4KGg+jW1t7q4uTn4unn8e595viAldG4fp23y9vl84CFhYSCfvHYwaHxnIp+gYCCgoLw64Hv5u7weoKHhYiIiIWEgHt949O9xN3T18rEx7u5uLWvq7Waq7ClnrecvqK3gJictZ6YkPak3PSM9IaD9Yrt/IX5gfD87fTt7uvo5ubi4N7Z2tTY0dDQzsrNzcbXy8vJztLCxcrL2s3PzcfJvcLExcbJysjX1Nfd19zU1+LY09ja49ne3dTc1tfY2tjVxsvIzs/SzNbQ4dnk2+ne2vLX7u3igOPw7ah/hImar5GOgKmThqGelZGijpGim5CsyM69yMXOy8/c07KrstB1eXt/fn6Cf+LR0djj2tnd19/d5+V44fF8ks61fJqzxtbg7X2BgoF/e+rRu5zql4d5fHt+fXvl4Hrj2uHic3l/foKCgn5+enR21sWwuNLJzMC7vbKwrqyloaqSoaadl62Us5uugJGWrJiRi/im2/KL9IaD9Irt/IT6gfD77fHr6+rn5eXg39zX2NLVz83Ny8fJyMHSxsbEycy9wMXG1MjIx8LEt7y/v8DExcTS0NLX0dfP0dvRztPV3NTa2dDY0dPU19XRwsnFy8zPytTO39fi2efd2O/W7Orhf+Hu66iDhIOVqIuInHuIfI17B3x7e3x8fX6Hf4aAhH8Dfn59hnwDe3t8hHuMfKF7hHoLe3p7e3p7enp7envfegF7hnqFewICAQA4rZKTqcLRz8W8zb+81tjd1eHf8vLz9OC1srG2urbRgIiIgObe3+Hj7fCB//r++YG5qZLSjKnCyMmFygrLysvMzc3Ozc3OhM+AzLiW5KGxuI+DhISHhoeEhYX77P6NkYmNhdLU08XBwOPhz9fOzcvQxsi/scq1udC9tsW+wta5286g2MLRo/H6hI33goTyhH3vhu75gfb88fTn5+Dh3d/b2NbQ1dHQ19Hb1M3TzsnD0tbJ0tnV283L09XW3MrP2dbS3NnT1tPR3OI14Onb1+Dh093e2Nnd3+Pe1drVw8TJzMvOzM3KzsnU1tTn0ufi4PPo7vjk9YLlze56+o6ml4o4oYqKnrfFxLqxwLSyy87SytXT5eXm5tOsqqqusq/JeoKCe9zT1dfZ4+Z79O/y73u1pI3Lh6O6wMCEwQXCwsLDw4XEgMXFxcbFwrCP2pmpsIl+fn2CgIF9fX3s4PKFiYKFfsjIx7m3ttXUw8nCv77Bt7qzpryrrcGyq7mzuMqv0MKYy73TpPD4g4z3gYTzhX/yh/D6gff77vHk5d/g297Z1dPN0c3M0szVzsjNyMK9ys7Cy9HN0sXDy83O08LG0M3J09DLOs3LyNPZ197Sz9bXy9TW0NHV2NrXz9TPvr/ExsfJyMrHy8bS1NLkz+Tf3e7k6vPg8YDhyvZ+54acjYISmYSElrC+u7Kpt62pwcjLw83KhNwgyqampquuq8V3fn941s7Q0dPd4Xjt5unnd7Gii8eFn7aEvIW9hL6Fv4C+v768qorSlKOqgnl4d3t5enV2dd3S5YCDfX52vby5r62sy8q6wLq1tbatsKmdsqOluKqksauwwqjIupLDvNel7/eDjPeChPWFgPSI8/yC+fvt7+Pk39/a3tnU0svOysnPydHLxcjEvrnGyb7Hy8fMwL7Gx8nNvMHKx8PNysXIxjjCzdPR2c3J0NLGz9HMzNHT1tPK0cu7vMHDxMbGyMXJxdDT0OLO4t7b7OLo8d7uf9/I+oHdgJSHfZ57hHyHewF8hHsFfHx+f3+bgAN/f36LfIN7hXyhe4V6DXt7ent7ent7ent6envfegZ7enp5enqEewICAQA1pIOTkLS3t7W2ubvAnZKXurHUkOzx0LGurbi3uLa4wvHz6ejp6vH09Pj+hufk05a/x8jIycqEzAjLzMzNzs/Q0IfRBNDR0dCEz4DQxJS2mZqTkZCNiISDgfj1k4Lm3tfQzsS5xMHq7N3Uw72tqJ7R0dPc0cjFw7u1q9Kb16mxt4d0s+z98PiI+n2BfX1/7/h+63/z8vPo7OTo1tfV0NPL0M3R0czPyMnTx8vY0MjZ19TOzMzZ2c/V0sPCzs3K0NjV1d/Y0NDc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x9DPyMStlo3Mm47DhouIL5+ekp+djJWhnaXAsqemo6OirsXDxMbFx83ZzMTM2HyBeoB9uPa4vsDDxsnKy8vMhc0KzMzNzc3MzM3MzIXNAs7PhM6Az83Mzs/Pz9DQz9DR0tPS0tHQo5y2eHHb0cjJxb/feHjj2s7JxI5/d+/86/GJk4+Vopecm8Wy2Ku6wbWB+9P0h4yRkY6F/N3Gv7rR8oaLioSGg4P08eXn7u7v5uDM0MbLwci/wsK1vLq0uLm4vL+7tbe5uru8ubq/vbq4tba7u7s3wMTBvb7EubW6sbC3rK+lnZ+inZqXm56qqKyxtLS7wcjH0tLTzdXWzsjR0cnFsJqR1aKVxoSIhZ57hXwCfn+3gAR/fHx8h3uCfIh7hHqQe4N6hnuHeod74XqDewICAQAwp6WkmZ+po5+ss+Lp6/n++efGzNra2dzk4cbP8dTk5/amjZa8wMTHyczP0dLT1NXVhdYF19fY2NiF2Rba2tvd3Nzd3t7e4OHi4+Tl5ujp6evshO2A7Ovp58rOi4j48OTZzszsg//o2MWvkuOEnKzJzMe40qSttrGk0uPgusHRv37g8YOHjI6PkZOPk5eShnW0i4CRvHF9eXly4d3k5+ft5+XKzcTHwL+7ucC3vL+5ur+/u77Gy8jCwsi/vsfEwsLBwcXKx8fFxc7NxsTHuLq4rLOeoZwnnJielpybmZuYrrKwtrm/v8bH0MvJwcXCvquXhYywwsrbvW7wqqCXL5+fnpSZo52ap6zc4OLu9PDfwMXR0NDS2dnByuvR3+HuoouUuLzAw8XIy83O0NDQh9GI0gfT09PU1dXVhNaA19fZ2trb29zd3t/h4ePj4uHg3tzAxYOA7OTZz8XD4n3z3tC+qZDnh56sxMS9r8ScpKunnMna2LS6ybmE7PaFiZCSlZebmJ6joJaG06iZptB7iIODevDr8PHw9O3pzs/GycC/u7i+tbm8tre7ure4wcXCvLvBubjAvby7uru+xME3wb6/x8bAvsKztbOosJyfm5qYnZacm5mbma6zsbi7w8PLzdbS0MfLyse2pJSbvMrS4MB76aKZkTKbm5qQlp+ZlqOp19zd5+zq2ru/y8rKzdTSvcbnz9zd6qGKlLm8wMPGyMvNz9DQ0NHQ0ITPgtCJz4LQiNGA0tPT1NPU1dTW19jZ2djX1tXTuLx9eN3WzcS6uth36NbIt6SP7IuhrMK/t6e5lZyin5bA0dKvtcKzh/T5h4uSlZicoZ+lq6mhkuvArrXfgpCKiYD69Pj49fnw69DQyMrAv7q3vLO2ubOzt7aztLzBvri3vbWzu7i3t7a3ur+8vLs1usPDvbu9r7Kvpq2anZmZl5yUm5qYm5mus7G4u8PFzM7X1NLKzs3Ku6qbosLP1uPCg+SclIygewJ8f7yAA399fId7AXyGewF6lXuCeo17hXqFe996g3sCAgEAgKapsqiho6iusMr+9oGGhonYsrW5w87g38vEyNDO5I6LmLa6v8PHy83P0tPU1tbX2NnZ2NnY2dnZ2Nna2dnZ2tra3N3e3t7f3+Hj5ebo6urr7O3u7+/w8vLy8fHv7OnlztGE++rczbamx9y5mI+nrr3TzdXR08rEp7O+t6esweHLgMK20rzhxYGMjoyMj5KTl56ho6unraqUend2xMl8gHx2dnbkd3ni39DMusC8u7i1ure4vLe5v8C+wcLFycTDvr7Bw8TCw8XHxMPDyMvJxsbGvLu5s7SanZWYkZWRlo6Ql5OZoaSrubm7yMnP1dTJxrWciJK40+jo5OPbv2rNo5ufL5+jrKKcnqOorMT3736CgYPRrrK2v8jZ2MfBxczL4IyKlrO4vL/Ex8nMztDR09PThNSJ0wjS09PT1NXV1oTXgNna3N3e3+Dg4uLj5OXm5ufn5+bk4t7axMh+8ODUxbCiwta1mZOqr7rMwsnFxr23nqiyrJ6judfDvLHLt+/QhY+SkZKWm52jq7G4xMDDv6mNiHzl5YuPiICAf/N+f+zn1dG+xL68ubW5tra5tLa6u7i7vL/Dv724uLy9vry9v8G+OL69wcXDv8DBuLe1sbGYm5WYkpWSl4+RmJWbo6auvb/C0NLa39/U0cOsm6bJ4vTx7evixnnNnZaZLJygqJ+Zm5+lqMHy63yAfoDNrLC0vMXV1MS+wsrK3ouJlbO4vMDEyMrNz9DShtOF0oPRhNAQz9DQ0dHS0tPT09TU1dfW14TYA9na24bdgNvZ1dC7v3jh08i7qZ680LOZlq6vt8a6v7u8sq2Vn6ijl5yxz722rcSy+9mIkpWUl5ugpKu1vMPQzNHQuZyVifz4lZiRiIeF/oOC8uvZ1MHFwLy5tbe0tLexs7e3tbe4u7+7ubS0t7m6uLi7vLq6ub3Bv7u9vbW0sq+ulpqUl5GVJZKXkJGYlZujpq69wcXT1t7j5dnXybSlsdPr+/bx7uXJgcyZkpWMe4R8jnsCfH/AgAJ/faJ7gnqUe4J6hnsDent72HqDewICAQAxrqjD6Obm3dvR2u2AiIyM7rm4ure6wMLDz8TI3uq0gKivtrvBxcnMztHU1dfY2tvb24TZA9jX1obXgNjZ2tvc3N7f4OLj5efo6uzt7/Dx8/T09fX19PTz8vHu6uTdv/726eDAq5SZ1eLapKCmv+fZ0MrHw7Szt7m7ssTQwrivtKpxwYGMj5KTlZaVm6Clsbi8wMDAvsKioXm2v2+DhHt3dePh4NvIw7y/trm0tre2ubmztry7u728v8HCQr67vL/BwcLBw8DBw8XEwsHFwsPEvLOfm5aYjpGLjYqKjZKTmaGgsL/K0tPd4uHdw6uszHmFhYF9enfs5M+Gp6KjqFappL7i4ODY1szU6H2EiIjotra4tbi9v8DMw8fb57F+payzub7CxsnLz9HS1NXX19fW1dTU1NPS0dLS0dLS0dHS09TV1tbX2Nrb3N7f4OLj5OXm6Ojp6YTqgOnn5ePf2dK19O3i2bypmKDa49egmp+22cvEvrq3qqmtr7Kqu8i7sqqwp3rOhpKWmpyfoqKqsrrM19vg4ePg4KvAkdzigJSTh4J+8+7r48/JwcO6u7W2t7S3trCyuLe1t7e6u7y4tba5u7u8u726u73Avry8v76/wLmxnpqXmY+SJo2PjIuPk5Wcpqa3yNTd4Ovy8u7XwcTlhJCOioWBfvjv2ZW2oKGlN6ahvN7c3NTRyNHlfIKHhuOztLa0try+vsnCxtrmsX6lrLS5v8TIy83Q0tPU1tfX1tbV1NPT0tGG0IDPzs/Q0dHS0tPU1NTV19fY2tvb293d3d/f3+Dg4N/d29jVz8ms6+HXz7WkmKPc4tKakpeszcC6s6+roKClp6mitMG2raespILWipacoKSnq6y1v8ne6vH4+vz69rHYo/f7jKCekIqF/vfy6dTNxcW8vba2trO1tK2vtbOys7S2t0O5tLKztra3uLe5tre6vLq4ub27vb63r52alpmPko6PjYyPk5adpqe4ytjj5/P8/fnj0NT1jJaUj4qFgv703Zy8nZ2ii3uEfI57AX7EgAF+onsBepN7BXx7e3p6hnvNeod7hXqDewICAQAxra3H7fD59fDvtLS0ucnu9uDIv7zBydnWxdTkqc2an6WutbvAxsvO0NPW2Nra2tva2YTYA9fW1oXVgNbW2NnZ2tvc3uDg4+Xn6evt7/Dx8/X29/n5+Pf29fTy8e3n39WS7t/tg+aNh863qKqmq6jFwruvn6GoxsXFwMPHt6ippqSA1t6HkZKVmJmanaSrtL9kaW1xdHh0lmpwZKaAZnCFh31zc+HZ18zBu7q3uLO1s7SzsrOztbS1uri4D7i3try+vLq4tbu8v8HAwITBML+7tKehnJWSj4mKiImMiI+PlJ6tvcfhd3+Fg3Vqd42hpaqlm5WLhIB+euach6KorCyqq8Po6/Xw6+mxsbK3x+rz38i+u8DH1dLD0uOpypido6yzub7DyMzN0NPV1oTXCNbV1NTT0tHRh9CA0dLT1NXV1tjZ29ze4OHj5Obn6Orr7Ozu7u3r6+ro5uLc1MuL+ODohu6Ohsqyo6SgpKG5t7CnmJmhvLy8uLq/sKOloqGB7OyPmZyhpairsLrE0uJ5gIWJjpOOrIOIesmbeoOYl4p+fO/k4dTKwr+6urS1s7Kxr7CusbCwtbOzs7JBsLa3trSyr7a3uby7u7y7vL28uLKloJuWk5GLjYqKi4iRkpqmt8rV8oGJkI6DeIWcsLW6s6mil4+Kh4LzrZWhpqk5qKnB5eny7ejmr7Cxtsbo8d3Gvbq/x9TRw9HhqcqYnaOstLq/xsvOz9LV19fX2NjX1tXU09LS0NDPhc6Azc7Pz9HR0tLT09TV19jZ29vb3d/f4OHi5OTj4uHf3NvX0crAhPrb4ITxjoTDqpucmJyZrqynnpCRmrOztLGzuqyfoZ+fgvv0lKCkqq+zuL/L2er+iZGYnaOpo76Wm4rksImRpKOUhYL57OjazsbCvLu0tbKxsK2trK6srLGvsK9CrqyztLKxrqyztLa5uLi4ubq6ubavpJ+blZSRjI2Li4yJkpObp7jM2/iFj5eYjYOQqL3Cxb6yqp6Vj4uF+rWfoKSnm3sCfH/GgAd7e3t8e3x8mnuCeox7i3yJe8F6k3sGenp6e3t7AgIBADits8z79vTz89WztLW2vpGWmp2XgMbY5+bi4Ja1lJqcoqu0u8HHy9DT1tfY2dnZ2tnY1dTU1dXV1ITTgNTU1NbX2NjZ2dvc3uHk5unr7e/w8vT29vb4+fr5+fj28/Dt5+DWy46ItN75v7iusLiys7q5uamUkIeKjZD4sOiNorC3tq6N2YzWgZCYnqWlq7C0XmVpc3yFkJmgo6uQl46BeWqldGp6g3lx3NrUzsa6uLe0sbKwsrCura+vsa+2RLzBvLa5vb7Bwry4ubu7urm9vbm3t7CfnpiVlJOQi4iIhoeEh4yZo7fJd4yksKyVm7DD0NPR0Mu1opaPiYeDfMCDo66qgKuxyPby7+/v0bGytLW9j5OYmZV+xtfl5eLfnbqSmJugqbK5v8TJztHT1dbX1tfX1tTS0dDR0dDPz87Ozs/Pz9DQ0dLT09TV19nb3d/h4+Xm5+nq6+zu7u/v7uzr6ebh3NTMwYiFud34vLWrrLKrq7GurqKQjIOGiYzwq+GKnquygLKpitee6YucqK+4u8PM1HB7g4+cprO8xMjNs7qvn5WByIt+jZSFe+3n4NrRwb27t7Kyr7Cuq6qrq6yrsba3s6ytsbK2ubWytLW2tbS4uLWztK6dnJeUlJaTjouLhoeGipGhr8jeg5mxvLqkqsDV5eno6N/Is6ael5OOhdKYo62oKqqvx/Pv7O3szq+xs7W+j5OYmJN9xdbk5OHgosCTmJugqrS7wcfM0NPV14XYBNbV0tGE0IDOzs3MzM3MzMzNzs/Pz9DQ0tPV19jZ2tvc3t7g4eLk5ebm5OPg3tvX0srBtoGBudjytq6lpamjoaakpJmJhn6AhIjqp9uGmaeuraWH1Kn1k6Wxu8fL1uLugI2Yp7XC0dzk6OzR1sq3q5PknYyaoI6C+PLp4tfGwL24s7Gvr6ypqEmpqKmorrKwraWmqquws7GvsbKzsrK1tbOxsqycm5eUlJWTj42MiImIi5OjssvliKC6x8ayuM/m9/v6+e7Vva+mn5qTityloqynjnuGfId7AX3IgAF+k3sEfHx9fYd+A3x6eol7kXyHe756lnsFenp7e3sCAgEAgJmfqJ2psrTM8+fn1MuAlpmcm5bbzcra5NaMf5Kcm5ufqLG6wsjN0dPW2NjZ2djY2NbV09LT1NPT0tHQ0NHS0tPV1tbW1dfZ2t3g4+bq7O7u8vP09fX3+fn6+fj29PDq5NvSx7mkoH6ov8K9vcnUwb+/s7CPg5jezLLyhY+Yn6OlgKWji9PEmXOEj5iosLZhZm12gIyZqWB3cG1tYGRfV6KYh3CtcWV7e3Ld3NbRx7q3tbKwrKShoKOmuo7KiOvs1NPZ3NvW1drvg5CUlp2gqbGwqZ6blpOSkY6MjIuHhoGFiZKlt9B6m8WLjqaUi4mIi4aAdm/Ptqidl4+GfdGHhaKVKpecpp6psbPL8eXk08p/lZeampXazsvb5tmcf5GbmpqeprC4wMXLz9HU1YTWC9XU09LQz9DQz87OhMyAzc3Oz8/Q0M/Q0tLV2Nrd4OLj5efp6uvs7e7v7+7t6+jl39jQyL2wnZuDq76/u7nEy7i2taqpjIGh38et7IKMlJufoaGfh87LooSYprHEzth0fYaToLHD1XeIh4WEeHx2bsy9qIvUiXeNin7x7eXe0MG8uLOxrKSdmZiYpXOrfN9D4s/N0dTSzsvO33qFio2VmqKsrKacmZWTkpKRkI+Oi4iDiY+asMfoiarShn6lko2Qk5iTjoR75sy8sKiflIroo4ihlYCVmqWeqLG0y/Dj4tPLgJaYmpmV2s7M3OfbqYKSnJqanqexusLIztHU1tfX2NjX1tXU09DPz8/OzczKycnKy8rKysvMzMvMzs7Q0tTW19nb3N7f4OLj5eXm5ePj4N3a1M/HvbSnlpaFp7i5tLG5v62rq6KgiH2j28Kp5X6IkJebnVedm4TIyqSPpbTC2ObzhJCdrb7R6P2LmZ2amY6RioHv3MKg85yEm5WG/vjv59jHwLq1sqyjm5OQjpVek3TW28vIys7NycbF1HV+hIeQlZ+oqqWbmZWTk5KEkCWNjIiOkp2zzPCQtNyFd6iWk5qfpaCaj4X328m8sqidkfS0iZ+TjXuGfId7AX/KgAJ/fI97BHp+gICJgQJ/eoh7iHyJfYR8hnuRegN7enqLeZ16BXt7e3x9inyIewV6ent7ewICAQCA3efd3nfle5/Gz+Dz1qO31O2CxcHG3s6aoOWgoqKhoKGlr7jAxszQ09TW19fW1tXU0tLR0M7Pz8/Ozs3MzMzLzM3P0NLS1NfY2t3g5Ojo6+3v8PHz9fX29/f39vPx7ebf1cq/sqah+9uf1Mu9trvhrqSgn5mTxqKa/KCorrS3uruAu7qg952ZkI+xqq9dYmhyfIqZVmN1vovyrOh8oIt8bGJYmINtoGeybXHb2dHIwrSzrK+i4Onw8oGFjZOYnaaA09PZ3d3b19bRy8zHw8nJxdzx9/2IiomMiIiGg4aHhouTorrTe53Jrf2tzI+CseiAzI62j3zcu6eShH1zyKN4heM07fXs7X7z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qqikpqWpq62usLW6wsXFx8zU3+b2janVhLKSrKG4uK6zmJyggIiGdnpnpqiLqXBw2LO/xdnIxsPAvcGGewV8fX5+fop/DX57fH59fH19fHx/f3+7gAJ/fYV8Cn19fXx7e3t8fH2GfwR+fn6Bi4MBgol/AX6Wgwh+fX18fHt7e4R6qnkGenp6e3t+j4MKgoKCgYKCgYGAfYd7AgIBAHmxq57Bm9Dg7PiAhYqQlpugpqyyudynnq2xrLCRxH+VweZ7hJCerbjAxsvO0NDQz83Kx8XDwL67ube2tbW0tLS1tra3ubu8v8PFyc3Q09fb3+Pm6Onp5uLb0sa3pZHxgum7oY612cicpLG+wuu4v6eTjomFgX318N6dibx+pYp2cXd4dnZ0c3PKldLP3NvZ29ze3t7f3d7b3NvW1srWz+SES3NXi3pmv6aKeMuqk6qjoJ2cnZyeoKGjp6eoqqqqpqSfmJiYmpuco6ars7q4ur3Gx8fRcn6PrYOX2sPk8uv42LzWvqS/r5qnitrIlojRy4fcttzHo6CbmpuiPMG7sdWZzNvo832DiZCWm6Clq7G42qeotbq0upzTh5jE6X2GkaCvusLIzdDR0dHPzcrHxcK/vbu5t7W0tISzObS1tba4ury/wsXIy8/S1trd4OLj4+Dc1szAs6GN7IDuwKmawufVqbbBysvxvMClko6JhYF99O7ZmYm4fqGHgHuAgYCAf39/3Zbb1d7d293d397e397f3t/e29zT39Xiq2mfc6yRdty9moPcu52wqaWhoKGfoaGjpaioqKuqqqWkoJqamp2cnaSnrbjBwMDEz9LU3nmHmLmJg7+uys7H0LWdsZ2JnZB/inS8r4R6vr6AzarIvrm1sK2uszzQy8Plmczb5/J9gomQlpugpauwt9motcHGv8Wn4o+ezPGBi5emt8PM0tbY2tnY1tLPy8nGw8C9u7i2tbSGsze0tba4ubu+wMTGys3Q09bZ2tzb2NTOxbqsm4nmfO7BrJ/I7tyvv8nSz/S+vqaWkoyIhID69NSVibMRnYWKhouMjI2Njo/7oOrk6eeE5Gnl5OTl5efo5+br4vDk8NWIyo3JpIT1z6aL5sSitKyopKOjoqOkpaipqqqtrKqmpKCZmJibm5yipq22vsDCyNTZ3uqAkKLHjneuoLm3sLSijJ2KeoqAcntprKF7cbO1e8SjvrzI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x8fIycrM0rKoorCWhYeHi7nb5YGQqLXQ7oiUkZfwr7i0rI6Rhfqel7GS7pqF/4aB//ioiKGsrbW1uMrDw8WpoYbCr9p8d36IcW6ChouAmIBv2JRssYjl4orWiYyOefDa186WnqixusPL09zk63l9gYSMrr6AgffXwLOjzO2QrLzCytjl7Orl2tDGvLOqoZqTjYeC/vjz7enk4d7c3Nva29vc3+Lk5+rt8nt/g4mOlJqgp66ytbe1s66kmYx/5MnM2+Hn6+z2gIWHh4OA39HIwLiyq6Sf2paJs36diK+tqaainZybmJSTjPXugpaUut26g7aDnePihoDg29fQzszLysvRwLWvu56MjI2Ru93ngo+ns83qhJCOlO+vt7OrjpGF+peVspLol4T+hID99qiOqbW1u7q+z5uus5qTe7WlzXRuc3plY3R4fnOHcmXZn4O7kPX1lOKQlJYEe3t7fYt/hoCDfoV9An+AloGWgJSBiYCGgYl/AYGLgwGCjH+Gfgp/f3+Cg4KCfn5+iX0BfIx5hnqEe4h6Dnl6enl5fH19fH19fHx7iHkLe36BgoKCgYGAgICKfw1+e3t8e3t6ent7fHx8AgIBAD1yzMPenqq3xM3X4Onw+oCFio+Tl7KUvsjIuqWckcDchJqmr7rI09nZ1MzEurSrpJ2XkYuGgn/79vDs6ebkhOI45OXm6ezv8vb6/oKGi5KYnqautb3DyMjGw7y0qJqL+9/Z5uzw8/b3+v+AgP6B4tPLw7q0raah5Z6JvH6mjqyppaKdmJKRjoyLiH7enMRrjcFuk57Cm9elrqyvsrOztrq+wsjWj4mGmIGCeHuNueKClrHK4P+LoL/Fx6aevra10tHHwuCEtZKCm5iRhoSCiON/nquusrKwuYfL+KPGwauQxsiHm/n6mrWahq7+1pyEfTGffsZyu4eWmZh5eNrT2Zuns77G0Njg5/B7gISJjZCslsrT0sSvp5zI5oqfqrK8ytXb2tbMxLu0q6Sdl5CLhYF++fPu6ebj4d/f3t7f4OHk5+ns8PP3f4KHjpOZn6eutbq+v726ta2hlIbz2NXk6e3y9PX5/n9//H/g0srCurSspqDgmom4fqKLrqunpJ+alpSRkI+LguSp33qdz3aZoMCe47O6uLq8u7m6vL/CxtWel5OmjYyBg5S+5YKWr8fb+Iaatr2/oZ2qqJ+4uK+q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3eXwtIeFiY7Vy3uMnK24vlS9tax75nuBh4yRlZmdoqarr7S3uMOOhIF+erCxyMLS5POBiZGXm56hpampp6ekoqCenJqXlJGOjIqIh4WEg4KBgIB/fn9+fn5/f4CAgYOEhYaHiYmEiyGKiIaDgHzw6NzQxcjP0NLS1dXU1tjFh4OA+vPt5t3U6ZqJuH6ijLq3sqynoZyYk4+MiYeDfLHGhoaUlaytrNut2dGpjKlxekRKZLx/9Zq9l3HHssJ7g4eQhomUSMKWtIOEqMCPj2p2eXtvadnyg+OJ0e62yaOnsYSB8JHLW3/Aoqaku76gyqbTj4rvjZqmscDn2uTr9bKKiI+U5NuCk6KyvcJDwbqydNx1e4CFio+Slpufo6essK+5lo2KhoPBvNPL3fD/h5CXnKGkp6qurqurqKajoZ6bmZaTkI2LiYeFhIOBgH9/foR9Mnx8fX1+fn+BgYKCg4SFhYWEg4KAfXp149vRxLu+xsjKys7Qz9HSwIaDgPrz7ebd1OSWibN+nom6t7KtqKKdmJSQjYqKhoG/2Y+Nopymqa3jsNnRqY2pZnpESle0feuMkXVsxKqsV2KDi1hXgiu9kq6CgaK9hm1NV1laUEu77YThhs7ptMikp7CDge2N3LWcxOCopr3Bo82n4JWQ9I6cqLPD69zm7fiwi4qRmOvjhpamtcHGBXt7e39/kICGfYaAvYGTgIZ/AYGLgwGCjn8FfHl5enqGeYh6DXt7enl6eHl7e3p5eXmEeg17enp8eXp6ent8enx7hnwQe3l5en18e3t6enp5eXl4fIp6Bnl5ent7eYp6hXuCeoZ7AgIBAGaro5WK+YWMk5meoqarr7W6vcLGydKEeXRyedTOucfa6XqCiZKZnqKlqKurqamop6Shnpyal5SSkI6Mi4mIh4aFhIODg4KCgoODhISFhoeJiouMjY+RkpKSkY+MioaC//fr4NTO1dmF2w7f4MyMiISB/PXs5dzvnom8fqaPvrm0sKmjnZiUkIuJg3/UgKeB03zFsLqNeZbBxrGAj8/b9YHbhqDX4oKo9rrajKnGvdnak57Qw5iq8cG+/fKez9rd1bmZt6d/nOXioJjBgn99fNbXUIh1fPVRk9Lz0qOZoJW7xYyIl6GpscPQ2ePthdh+h4vSu+GAjp2prkOwqJt/5nyBh42Slpueo6itsLW4ucOJf3t4gNnOucbZ6HqBiZGXnaCipqiopqalpKGenJmXlJGPjYuJiIaFg4OCgYCAh38vgICBgoOEhIaHiImKiomJh4WCf3vv6N7Tx8LJzc/Q0tTU1tfEiIWCfvfw6OHY6pqJuH6ijLu3sq6moZuXko6KiIR/3pbKedaEzZ2bmYKexMiyhZGuoq5Yk4um4+9wit3F03yKnaW7hWN8esCTpvK3tvzgfpumq6WQeKCng5ne35+bx4iEgoDg7WOYi4f5XZDL6sufoKmh0NmajZ2osbjK1uHq83nHg42S4czziJajrrNDta6geNx2fIGGio+Tl5uhpaitsLC6koeDgYnn2cHQ5PSAh5CYnqOmqKutrauqqaekoZ6bmZaTkI6MioiHhYOCgYCAf4R+Mn19fX5+fn+AgICBgoODhISDgoF/fXl149vSx725wMPGyc3Pz9DRv4iEgX727+fg2OWWibN+nom7t7OvqKGcl5OQjIqHgumn33XXiNSalZ6GocXIs4eRpZSfUISNp+brXm7FyNN2fIujtlpLaUy8jqDyrq/60Wd2gYWAb16MooCV19qclsWJhYOC4e3Bntqc+KeUzu3NoaCqqOLqpY+fqrO6zNnj6/VxuISQlunU/Iyap7K4BXt7e39/kICFfQF/hYC+gZSAhX8BgYuDAYKOfwZ7enl8enqEeYd6Dnl5eXp5eXl4eHp6eXh4hXkEe3p6e4R5A3t7eYh7CXp5enp7e3t6eYR6Bnl4enp6e4d6Bnl5fHx7e4p6CH59e3t7enp6hXsCAgEARJeHvo/6hY2Tmp6ip62vt7q+xcXJ0XjZ3nS227O8zd/ufYOKkpieoqarra2sq6qopaKfnZuXlZKQjo2MiomIhoaFhISEhYMwhIWFh4eIioqMjY+QkpGRkI6MiYaC/vfu49bNz9XY2NfY2t3ey46KhoP/+PDo3/Ceibx+po+9ubSwqaKemZOIh4Z/8bJlnbu3nbrIfZd9obS4tYqSt6+2uZx7eMjX+YGB49H9ge7azqaU5tGAfIyKrfnEhe3h/IeI58CMo6a0mayKyJLM3JefgFdAwoRrjmaCmK7Eq5GmjIyFvoaZpKuxws7W4Ovs0YCChsmoyOB8iZWaQ56Q1oTofIOHjpKWm6Giqq2xt7e6wn/q7Hu427O8zd7tfIOJkZecoaSoqqqpqKelop+dm5iVko+Ni4qIh4aFg4KCgYGEgDJ/f4CAgYGCg4ODhYaHiImJiYiGhIJ/e/Dp4NXKwcPIzM3O0NLU1sOKhoOA+fPr5Nvqmom4fqKMu7eyraegnJeRh4eGf/K+esHJ152wwJKthqe3urePk6yXmZmFgYPi7NltgOfQ3m3V3NFwfLiSgoGOj6H3w3zUv9RxccOogaWtuZiris2Z0+GVpoptTsSMdYdpgZSrv6iasJKak9OMn6uyuMnV3ujx1sCFh43bu9zyhZGcoXmkluV+3XZ9gYeLj5OZmqOkqK+vsbmI/f+Ewua6xNfq+YKJj5edoqaora+urayqqKWinpyZlpOQjoyLiYeGhYOCgYGAf39+fn59fX5+fn9/gH+AgYKCg4OCgoB+fHl1493Uyr+3ub3CxcfLzM7QvoqGgn/48uvj2uWWibN+nom7uLOuqKGdmJKIiImC+MeK1tPqlafAl7SKqbi6t5GTrpyenoeGhunuuFqA69DJYsjd0VJvn3GBgI2QlvLBcr+jtGBfpJF0oa64lKaGyZjS4ZCliLyGwb7BiZell63AqZqylKef5I6hrbS6zNfg6vPFsYaKkeLD5v2KlqGnBXt7en9/kIAFfXx8fX+GgL6BlICFfwGBi4MBgo1/C357enl6eXt7eXl5h3qHeRB4eHl6eXh4eHl4eHh6eXl6hHkSe3l5e3p6ent7enp6eXp5enp6hHkEenl5eYt6Bnl5fX19e4p6BX19e3t7hHqEewICAQBDfHSblfqFjJOZnqKpq7G3usDEyMvSb87duOG3uMfV5fJ/hYySmp6kp6yurqyrqaeloqCem5iVk5GPjoyLiYiHhoaFhYaEMIWFhYeIiYqKjY6QkJGRkI+Ni4iFgv737+bb0crP09XV19jc3MiQi4eEgPv07OLwnom8fqaPvLmzraiinZiTifKD+eeyYmhtfsWDfb2AiaaysrKXi6qgo6qcgXfV3PiE/eHK0PeCiI/RjaHej4DkkoPtj/eWxd/t7N27jIm8scWfft/y1MzleMApkW19bZqVYJyRrr+arouOkm2EmKWrrb7L0t3p9YCAgpvDkaq7zm95fkWFfquJ6HuCh42Slp2epKqts7a5u8N23uy/4be4xtXk8X6EipGYnaGlqaqqqaimpaKfnZuYlZKQjoyKiYiGhYSDgoKBgYGFgC+BgYGCg4SEhoeIiImJiIeFg4F+e/Dp4tjOxb7Cx8rLzc/S08GMiISBfvXu593qmom4fqKMubexq6Wfm5aQivOD+ue9dH2CodWVjpmIj6u2tbSajaWanZ6Th4Pw9Ndv/OTPyNVzhIqhdoelkIP0l3/tlO6Iqr/Kyb2kgYzDt8GhgOP72NDmgdg7loOIgJGNaZONqsSit4+eonmKn6yytcXS2uXx/IOEiKPVpb/Q5HqDh0eMhr+C3XZ8gYWKjpWXnKKlqq6xsbqA8f/L7b7Az9/u/IOKkZedoqWpra+uraypp6Whn52ZlpOQjoyLiYiGhYOCgoGAgIB/f4Z+LH+AgICBgoKDgoKBgX99enh1493WzcO6tLe9wMPGyczNvIuHhIF99e7n3eWWibN+nom6t7KspqGblpGM+Yb/7MeAiY2356ClmoWRrLe2tJqNrKCjpJeNiPj3t1376NLFxWyDiIVnd4ONg/eWe+eU43qTpK6rn491ib+1vJ9/4P3UzOKA15Obxrvak5K1lpCtxqK6kqyxhYyhrrW4x9Xd6PP/hIaKpt2tydrugImOBXt7e39/kIAEfXx8f4eAvoGVgIR/AYGLgwGCiX8Kfn5/fn57enp6eYx6h3kEeHh5eoV4iXkGeHl6eXl5iHoGeXl5enp6hnkFeHp6eXmHegd5eXl9fX18i3qEe4V6g3sCAgEAQruqnrL6hY2Tmp+iqKyyuLzBxcnL0tWkgs2ytsTT3+x7gIaMkpieo6errayrq6mnpKKfnZuZlpSSkY+NjIqJiIeGhoSFDYSEhYWFhoeIiYqLjo6EjyKOjYyKh4SC//ny6uDVy8jN0NLU1tnZx5GNiYWB/fbu5fGeibx+po+7t7Ksp6Gcl5K1+oP65JTGu51/n8+XvX76nqOmp5eDvrC4ua6ciG/YxuL54NLg9vyEi8mqtcPwg4SG6YSH/JO91OXn2raIheGir5CEgZ/CnY15eDGcs31CgoVQiIPml5yrf4mPdICRn6qrvMfQ1+PseX94d76Dk52nsr2/QtLCoKTofIOHjpOWm5+lq6+0t7q6xOOxhc6yt8TS3+t6gIWLkZacoKWoqaiop6WkoZ+dm5iVk5GPjYuKiIeGhIODgoSBDYCAgIGBgYKDg4SFh4aEhyKGhYSCgH178Ovl3dPJv7zBxcjKzM/Qv42JhYJ/9/Hp4Ouaibh+ooy4tbCqpJ6ZlZC1+4L65ZTKyrqLmrZzqobqpKiqqZqFv66zsaielH30tsb649fZ3OaCiJyBjJL1hoiM5oGM8oajtcPEuqB+ifasrpGFg6PJpJSDiUKht4FVfYBbgn7ooae2g5ifgoaYprGzxNDZ4ev1foN+f9GYqbS+ydTXUeDQp5zddn2AhouOk5ieoqessLOxvPS/jde5vszb6faAhYuRlpugpKmsrayrq6imo6GenJmWk5KQjouKiIeFhIOCgYGAgIB/fn9+f39/gH+AgYSCJIGBgIB+fHp3dOTf2dLHvbS0uLzAwsTIybqMiYWCfvbw6N/mlomzfp6JubWwqqWfmpWRuf+E/+qZ0NTJq8bTfpWL5KSqq6qch8e3urmupJmC+qOq++ja1M/bgYaCaXV28YWHjOB8jeZ5jZunp56Mc4f5rKqQhIakyaOUhK6HndOFr3+BqYWB7aKpuYWmr46Jmqm0tsbS3OTv+ICFgYPYoLO+ytXh5AV6en1/f5CAAnx9iIC/gZWAhH8BgYuDAYKJfwh+fn9+fnt6eoR5BHp6enmGeoh5A3h5eYZ4hnkBeIR5A3p5eYh6CHl4eXp6ent6hXkEenp6eYZ6hHkEfX19fIt6hHuIegICAQBClp2esfuGjZKaoKSqq7Kzu8LFy83Uu7m7qrLAztvo8X2CiI6UmJ2jqKusrKypqKajoZ+cmpmWlZOSkI6Ni4qJiIiHhIYBhYWGLYeJiouLjY6Njo2NjIuLiYeFgoD79e7k2tLLyMrOz9PW1cOTjoqGgv/47+jxnom8fqaPu7awq6WempaSi4WB+OeZ8IOmrqDjvtb1iZmdn6CWj/DW3trV2rV6bafEf97V3O/y94G3jIuw2eLk6NGFrIeNrcLHzL+i9IHVjoiA+be2y4rjyCzD46p5dbKHa2iWu9aGleGCd4vgg5KkrrvEydLb4+t5f3TUl5yXsJ6rpEawt6Om6HyAg46UmJ6fpqittLe8vMbAu7uqsr/N2ufwfYKHjJKWm6ClqKmpqKalo6CenJmXlZORkI6Mi4mIhoaFhIODgoKChYEGgoKDhIWEhIYkhYWEg4OCgH58eO3n4NfOxr+9v8TGyszNvI+KhoN/+fLq4+uaibh+ooy4tK6oopyYlJCJhID46aDkepKLfbWlychgnqKjo5mR8tjc19HXvIh7oLCC5dva3eX3gJN3eYnj8fT7z4CtgIKWqKyvpZHlh+yYiYP9v7/TlfvlPcruu4GMuoFzbqPb9Zik8pGFnu6Kmqy2w8zS3OXt93+EfeapsKzKtcO+R77GrZ/ddnl5hoyPl5ieoKWsr7Szv8nEwrG6x9bj7/uCh42Sl5qfpKmsrKyrqaeloqCdm5iXlJKRjoyKiYeGhYSDgoKBgICAhn8sgIGBgYKBgYGAgH9+fXx7eHVy4dzVzMO7tbW3vL/CxMW3joqGgn/48eri5paJs36diLi0rqmjnZiUkYqFgf3wqOZ5iXxxrqLGulOfo6WlmpL23+Le1tq/joCVnoPs39jU3fh/f2pscuLz9/7Keqp5doKRlZeOgNOG8JuHg/3BwtSX/uiF1erigtHqg6eKo+L7nqr7npKs842dr7nHz9Xg6fH8gYeB7bG5tdfB0csFenp9f3+QgAF/iYDAgZSAhH8BgYuDAYKMfwh+fnt7e3p6eoR5h3qMeYZ4hXmEeAN5enmIeiF5eXh5enp5eXl6eXh4enp7eXl6eXp6enl4eHl5e319e3mLeoN7iHoCAgEARKaaxbn6hIyTm6Gmqa20s7vDxsrO3sGoqbC9y9fj7PaAhYuRl5ufpKirrKuqqKekoqCfnJuZl5WTkpCPjYyLioqJiIeHh4Yuh4iJiouMjY6NjYyKiouKiYeFg4D89vDp39bPyMbKztHU0sKUj4uHg4D48enynom8fqaPubWuqaOdmJSPiYSA8t+CdpD/g5We34CUko+UmZqSlZOOjoyKi9iEcouX6N/fx7vW8POfio2U0LW215LwgYr/mKmxrqWR6Ybei93Z0a6mktDKuDzU4XnaZUppZTDH0dRt2vaweburiZSms7i9xc3U3OHoeXZ71b21vrCnoUO+scqu53p/ho+Vmpyfp6attbi8vdHBqKmwvMrW4uv0f4OKj5WZnaGlp6iop6SjoZ+dnJmYlZSSkI+Ni4qJiIeGhYSDhYIxgYKCgoODhIWFhoeFhoWDg4OCgoF+fHnu6ePb0svDvbu/xMjKybqQi4eEgHzy6+Tsmom4fqKMtrKrpqGblpGNh4N/8+KMiIbih6K284l1YpSanZ6WlpONjIqHh9uUgZKV8+vs1sfe8/OFeH1/3cvP7pnneoHuh5SZmJGE3Iz2luPg2LmxnOvn107z7oj3dV1we0Ls8/V+8yqRkM66lp2vvcHH0Njf6O72f36D5dHK08a+uUPMv9Kp3HN3fYeOkpSXnp6krK+zs8nIr6+3xdPf7PX/hImPlJmdoKSoq6urqqelo6GfnZqZlpSSkI+Ni4mIh4aFhIOChIEygICAf3+AgIGBgYKCgIGAf35/fXx7eHVz4t7Y0MfAubSztrzAw8K1j4uHg4B88erj5paJs36diLazrKeinJeSjoeDgPjplJaH3YyqwPuNbFOWnJ+fl5eTjYyKh4bcmoeRj/n0893M4vf0d2xycd7S1vWa3nN523aBhYN/dcmM/Jni4dm8tJ7y7fqW+OmQ/5GnjamM9f3/gv0hmpzeyaCitMHFy9Tc5O30/IKChezb1N3SysUFenp9f3+agMCBlYAEf39/gYuDAYKMfwp+fnt6fHp6eXl5j3qFeYh4hHmEeAV5eXp6eYZ6A3l5eId5E3h4eHp4eXl4enp6eXp4eHh5eHyFe4t6g3uHegICAQBEb3HBl/mDjJSco6errbS4vcPIzM/eoay1vsnU3+nxfYGHjpSZn6KmqKqrqqmnpaKioJ6cm5mXlZOTkZCOjo2Mi4qJiIiHhy6IiImKi4uMjY2NjIqKiomIh4WCgf348uzi2tPOyMbIzM/Ov5WQjIiDgPjx6vKeibx+po+1sKunoZyXkYyHhID02m92++N4ls11fJKNho2Qko6RmZiampiR5Id0c3LZ5NS4ur/W6oWSl4W6rqzIhJ2bodCFkpuZk4Xai3aEvcS+q5R8ysBlcHCMem9zcYaHmGtwdXiRnYuKbNOax4qmuMTJ2dnc4+F1hnvj3M/T0c7FR3p8z47meYGIkJeanZ+lqq+0uL2/0KGstL3I09/o8HyAhoySl5yfo6Wnp6elo6Kfnp2bmpiWk5KQj46MioqJiIeGhYSEg4ODhIIug4OEhIWFhoaGhYSDg4OCgYB+fHnv6uXf1s7Iw727vsPGxbiRjIiEgH3y7OTsmom4fqKLsq6ppKCblY+KhoJ+8956ldSvk7PlgIV0YYuUlpaSlJmYmZmWj+eZhoJ+7PTmztDS4fB7eXx4y8bG4YyjoqbId4GJh4N60JKCkcTOyLaiiujfdYGAnop/hIqVl6p9goaJlaGYl3bmqd6WtMXQ1uXm6vDwfI2B8/Hm6efl3UWCg9yI2nN6gYiPkZaWnKGmq6+0tcmps7vF0Nvn8fqBhYuRl5ugo6aoqqupqKWkoaCenJqZlpSSkI+OjIqJiIeGhYSDg4KFgS+AgICBgYKBgYKBgYB+fn59fHt4dnPj3trVzMS+ubWzt7y/v7OPi4eDgHzx6uPnlomzfp2Is6+qpaCclpCLhoN/9+WCp8meoL7vhIlrU42WmJeUlZqYmZiVjeigjYaB9fzu2Nrb6PN1bW5w0M/R6o+ko6a9anF4dnNuw5OGlcXQy7qnj/HogJuEopGFivCcn9yEiI2Plaijo4D1teqcu8zX3Ors7/f3gJGE+/vy9PTz7AV7e3t/f5mAwYGVgAR/f3+Bi4MBgox/CX5+e3l7enl5eZB6hXmIeIR5hHiFeYZ6inmCeId5AXqHeQF6hHwDe3x5inqDe4d6AgIBACe7436894OMk5yhp6uxtLq/w8jMz+GuusLJ093m7fN9g4mQlpyhpKeEqBmnpaSjop+dnZuZl5aVk5GQj46OjIyLiomJhIghh4eHiIiIiYqMjI2NjoyKiIqJh4aEgoD++PPu6N7X0s7KhMcMu5aQjIiD//jy6vKeibx+po+xrKmloZuWkYyHg4D23bqO9+GNvdd1e5SNgo2Rj4qNlpeZm5qQ3ot5bGrU5OHCxMnb4O36gO7Nvb+91XaDh7j4h5CTj4LekHiAuL64tZeGf3Z5d4iEe36DWYmAhoiBf42ugaLMctBvprDC1HeJk6jF1XWCwpeTjY6Sf4SAJ7vggLDleYGHj5WbnKKlqrC0uL2/1a+6wsjS3OXs8n2CiI6Ump6hpISlH6SioZ+enZqZmJaUk5GPjo2LioqIiIeGhYWEhIODg4KEgwOEhIWEhiSFg4KCgYGAfnx57+vn4tzSzMfDv72+v8C1kYyIhID58uzk7JqJuH6ii66qpqOfmpSPioWCfvXe0K7PsKfW74CFemWHk5aUj5KYmJqamo/lnYt+evL49Nrf3+3t8Ox26N3X2trxg46QtON6gYOBedSXhI7Bx8PBp5aOhYiJmZWNj5Nol5GXmZKTn72KseB74X2+yt3whpmiuNfnfovBnJmTlZiJjotHstqDqtlzeoCHjZOUmZyhpquwtbbPtsPL0Nrk7fX9goeNk5idoaSmqKinp6ako6GfnpyamZaVk5GPjo2LiYmIh4aFhIODgoKEgYOAh4EkgH59fXx7e3l2dOTf3NjRycK+ura1trm6sJCLh4N/9/Hr4+eWibN+nYivqqekn5qVkIuGgn/55eHBw6Cy3/mFi3NZipeZl5KUmZmZmpmO56aThYD+//vm6uj28u/jcOXj4ebl/IiSk63ObHN0cm7ImIiTw8rHxqyck4mOmJ6alpmavp+dpqCamqfEkrzugu2EydXn/Iugqb/g8IKPwZ6bl5ibj5WSBXx9fn9/mYDBgZSAhH8BgYuDAYKMfwl+fnp5e3p5eXmQeoV5ingBeYZ4hXmFepN5AXqIeQZ6e3t9e3qEeYZ6i3sCAgEASNuCjajlg4yTnKGorbG0ub7Dx8zQ4rnFz9bb5Orve4CGjJKZnqKlpqenpqalpKOhoJ6dnJuZmJeVk5KRkI+OjYyMi4qJiYmIiYSILYmJiYqLjIyNjY2KiImIh4WDgoD++fXw6+Td2NTRzsvKxbmWkIyHgv748enynom8fqaOrqunpJ6alZCKhoL76s2bvPvjkrHUd4Dp0YiIhoOAjJaYmpyZkeeTdm1syNnWvsLF097Y097SxrjEytFteoGn3PmFhYP82JKBkLXEureypp+Rin+Df4WMh46QkJienpGOmoRtvodsqKmotcPNa3J3fnuLl6Scx9h4ja2r6Ujago2k1HiBho+VnJ+jpaqvs7i8wNa5xc/W2+Lq7np/hIqQlpufoqOko6OjoqCfnp2cmpmYlpWUkpCPjYyLiomIiIeGhYWEhISGgyuEhIWFhYaGhYOCgoGAf318efDs6eTf2NHNysfFwsG9s5KMiIN/+PHr4+yaibh+oousqKWhnJiSjoiEgPnpzJm40LOwzuyCi+/Hj5COi4eQmZqbnZqQ7aaKgH3o8vDc4N/r8Obe5d3Z0+Lo7nuHi6nP5np7eezQm4+evs3Gw7+1rZ6YkJWQmJ6ZoaGjqK6vpaKrbHnXk3rCwcPR4Ot7goiPjJ6tu7Hb7oSUsqnmSN+HlaPKcnp/hoyUl5qcoKWqr7O30MHO2eDj6vL4gIOJjpSZnqKlpqempaWkoqGfnp2bmpiXlZSSkI+Ni4uKiIeHhoWEg4ODgoSBg4CGgSSAfn1+fHt6eHZ05eLe2tXPx8S/vbu5ubatkIuHgn728Ori5paJs36diK2ppaKcmJOOiIWB+uzQlq7CpL3Z+ImS9siTlJKQjJObm5ydmpDwrpKIhfb7+unt6/X46uLn4+Pf7vb8goyPpb/Rbm9t2cWclKPB0cvJxLqyo52boJegqaK4rbO0triurLZwgeiagc/Nz9zr+IGKj5aUp7bJu+X6i5e1peYBfoR/mIDCgZSAhH8BgYuDAYKLfw5+fn59fHt6eXl5enp5eYx6hXmReIZ5g3qdeQV6enl6eoZ5i3oFe3t7fH0CAgEAJn2Hjn7Ig4yRmqGnq7C1uLvCx8nO5MfS2N/l6e31f4KJj5abn6GkhKUepKOjoqGgn52cnJqZmJaUk5KRkI+Ojo2MjIuLiomKhokEioqLi4SMI4uJiIeGhYOBgP359fLu6+Tf2tjV0tDNupWQioWB/fbw6PKeibx+po6ppaKdlo+Igvbn2tHFtpWAnKSkmtmQrc2ohpyIf3+MlJeYl5aO3ZF7dG9rbmrOwsTR3OVyz8e+vr/JaGlufZ7N5e3y7ebJk4SQrcjEv8fFtaeUgYGGgYGEjJSVl6ColoaTdImUdaSjoK/B0tNpg292fISNkoSht/e1ntLqSXyHj4C8eIGFjpWbnqKmqayytri92MfS2N/l6OzzfYGHjZOYnJ6hoaGioqGgoJ+enZybmZiXlZSSkI+OjYyLiomIiIeGhoaFhYWEhCyDhISFhYSFhYWEg4KBgH59e3nw7Onm497Y08/Ny8nGxLOQi4aBfvbv6uLsmom4fqKKp6Ogm5SNhoDz5NjPw7WVf4eKo5nUj7Liv5CjkYiHkpmbm5qYj+emj4eCfH157+Lj7fP4fOPf2dve6Hh4fIigxdnf5OHdx52ToLjQzsrS0MK0pJSUmJOUlqCnqKmxuKiaqHyXpIW+vbrK3e/yepOBiY+Xoaebuc/0sJrN50qBjpeBs3F6foaOk5eanZ+gqK2us9LP2uHp7vH1/IGFi5CWm5+ho6OkpKOioaGfnp2dm5qYl5WTkpCPjYyLi4mIh4eGhYSEg4ODgoWBA4CBgYSAI39/fnx6eXh2dObj39zZ1M7JxcTBv728rI6KhIB88+7p4OaWibN+nYenpKGclI2HgPPk2M/DtZR/gYGils2JsPDNlaSXjo2Wm5ycm5iP7K+YkIuEgoD+8e/4/P+A7urm6u32gICCjJ+5yc7S0dHCn5mmvNTU0tnWyLmqnqKhnJ+isrO3tLrBsaS0gaCuj83Kxtjr+v+BmomSmKCqsabG3umum9LvhX+YgMKBlICEfwGBi4MBgoh/iH4JfHt8fHt7enl5jHqIeYZ4AXmGeKd5hHqHeYt6BXt9fn5+AgIBAEfz9/r4mPiJk5uhp6yvt7m7vL/Hz+LQ2uDl6e71+oGIjpSZnJ+hoaOkpKSjoqGhoJ+enZ2cmpmYlpWUk5KRkZCPjo2NjIyLi4SKg4mJiiKJiIeFhIKB//z49vPv7Ozo4t7b19PPu5SBhYL/+vPt5vGeibx+poyPi4uIhP/68+vh2dDGuKSagMnIy7q+vKmS/IC+wIa/m5SWmJSFypl/eWxobWxoympxeXXSx8nIxsNrZ8lvfJnB2NXV29LHmZCewNrijc7DurKaiYSGhH6Ej4yHmKHOy5ahkZaYcK+tscfNcnRtcHZ6gIOHyaK0jrfG0+HqTu3y772B4H2Hj5Wbn6Goqqurr7a91tDa3+To7fP4gIaLkZaZnJ2en6ChoJ+enp6dnJuampiXlpSTkpGPjo2NjIqJiYiHh4aGhoWFhISEg4iEI4OCgYF/fXx68u/t6ujk4eHc1tPRzsrGtI99gn/38uzm3+uaibh+oYiOiomHg/z28Ojf1s7Et6KYfsfFybe7uKWP9nm0s327oJqanJeI2q+UjIF8f3557HqAh4Pv4+bq6eV8eOt/iJ+/09DR2NHIpJ+tyuHtl9jPycGrnZiYlpKZo6Cbq7TX5K25maaof8vHzOPrgoV/goiNk5eb1putiLHAztzkTPD38J9z03aAiI6Tl5meoKGhpKyz0Njj6O3x9vv/g4mOk5ibnp+foaKjoqCgn5+enZybmpmXlpSSkZCOjY2MiomJiIeGhYWFhIOCgoKGgYWAIn59fHp4d3Xn5uTg3dvY19LNysjEwb6ujXuAffXw6+Xd5paJs36dhY2KiYeD/Pbw6d/Xz8W3opd+xsXJtrq2oYvxcqeeb7OinZydmYnhuZ+Wi4aHhYH6gYeOiv3z9fr59ISB/IWOn7vKxsjQysSmpLPO5fWf4NfQxrKnpqSgnqmyraq3vdzzucadsLOI2tba8fmJjYeKkJacoKTXkaiFr7/O3uWEfoJ/l4DBgZSAhX8BgYuDAYKFf4x+iH0FfH18e3uHeol5AXiEeYZ4A3l5eJB5AXqUeYR6hXmKegJ8fYZ+AgIBAEWA+5GRj7XJ5oWUoauwtba2p/HFzeTV3uLn6/F+g4mPlJeanJ6foKCio6OioqGhoJ+enZ2cm5qYl5aVlJOSkpGQj46OjYyEi4OKjIkhh4aEg4GB//369vPy8e/t6ePc2NbTuZSS/fz49e/o4PCeibx+poyWk5CMhoH++PLp4NnOwbGlopWJiP7x8/Ht6uTZvdCSlJeYmZOG356FgHdrcnVtbHB2fHNubmhobMJlZmp2fpa70tfW1tLGqZajxd7d4dfJvLSliY6IipWYjY2TmK63da7CkpSLa8bLym1sd3t+j4uGu6yDtNHc5O72/oGDJ3fGWWmCoq/Jd4WTnaGlp6WY6ra82dXe4ubq8HyCh42RlJeZm5ycnYSfJp6enZ2cm5qZmJeWlJOSkZCPjo2NjIuKiYmIh4aGhoWFhISDhISEhIMkgoKCgYB/fXt68vDu6ujn5uTj39nSz83JsI+N9PPv7ejh2eqaibh+oYmUkY6LhID79u/n3tbMv6+joJSHh/vu8PDr6OLWt8aMnJ2dnpiK67acloyAhod/foKHjIR/fnl6ful3eHuGjKC+0tbU1tPIsqa00ufo7ePWzMW2nqSdn6qwpKOprsXMh8fenKKae+Lo53x8iIyQoJyIs6V+rMnS2uXt8np8THOrO1V7m6a/cX6KlZmdnZuO4ayy09zn6+7y94CFiY+TlpmbnJ2enqChoKCfn56dnJuampiXlZSTkpCPjo6MjIuJiYiHhoWFhISDgoKEgYOAhH8ifXx7enh2dejm5eDd3d3b2tbRysfEwKqNh/Dw7evm39fklomzfp2FlJCOi4WA+/fw597Xzb+vo6CUhof67vDv6+fh1bO6g6ChoKCajfLDqaOYi5CRiYaKj5SMiIaCg4f7gYGDjpOjvM7Rz9HQxrWuvNjs7vPq3dTMvamyq6y4wbOxtrrQ15LV7aKspYXz+PiFhZCUmaijgqmeeqjGz9jj6u54eAJ/foZ/iYABf4mAw4GRgIh/AYGLgwGChn+Ofol9Anx7hnqTeQF4pXkDenl5hHqDeYd6A3t8fYh+gn8CAgEATKOYotPy+Pr47u30gpGcpamH2rfN3N7i5Or0f4SLkZSXmJqcnJ6foaGho6KhoKCfn5+enZybmpmYlpWVlJSTkZGQj4+OjY2MjIyLioqGiSeIiYiIh4eHhYSDgYD//fr59vPy8O3p5uHZ09G3lO7ggoWGh4WD+J+JvH6mjJiWk4+KhYL/+/Tu59zTycC5raWkm4+OjYiFgv/689SC4KGXkYbYp5F9dHZvd3Vwd4SBeHR2cnlvaW1weHiIkrLQ09TOzsiqn6PE3ePk3dLFuq6fpqqoqKKgp6WppL2suc2FiIx2asRzmJSY/r6CrNDo8fuBhoqPlJieo6dOloeNu9jd29THxcptfoqSlXrMqLrQ3OLj6fJ+gomOkpOVl5mZm5ydnZ6fnp6dnJycm5uamZeWlZSTkZGQj46NjYyLioqJiIeHh4aFhISEhoMlgoKBgYB/fn18evPx7u7s6ejm4+Dc2M/JxayM0tN7fHx7d3Ttm4m4fqGJlpSRjoiEgfz48uvk2tDFvraroqGajY2Lh4SB/fjvz3zbp56YjezBqpOKjISMioWKmJOLiIiFjIJ8gYOKiZmft9PU1c/RzbawtdPq7/Hr4tfMwbS8wL7Bu7jAvsK91sfX6pKXnId54IOkkJP2t36myN/n73t/g4eMkJSZnU6PfICuyM7LwbSzuWR2gYmLcr+esMvj6evx+oGFi5CUlZeZm5ucnp6en6Cfn56dnZ2cm5qYl5aUk5KRkI+OjYyMi4qJiIiGhoWEhIOCgoGGgCV/fn19fHp5eHd16ujl5ePg397b2NTQyMG7pIe7y3Z2dXJuaeSWibN+nYaWlJGOiYSB/fjy7OXa0Ma/t6uiopqNjouHhYH99+7Ld9Spo5yR99C4oZeZkJiVj5SinJWSkY6WjIeLjpSSoaS30tHTztHNu7i/2vH1+fPq4NTJvsnOzNDNx87Mz8ni1ef6m6CokYLxjKaDje6ze6PG3eTseX2AhIiNkJSXi3+GgAF/iIDEgZGAAn5/hoABgYuDAYKHf5R+hX0Be4R6vHmFegd5enp7fHx9hn6JfwICAQBN2Of6g4mPlZmamZiYlIqC7N37l7rP5er2gIWKjZCRlJeZmpucnp+goKGioqGhoJ+enZ2dnJuamZiXlpWUlJOSkZGQkI6Ojo2NjIyLioqEiSiIiIeHh4aGhoWEg4KBgP/+/Pn28+/r5+Lf29jNvJfO5+v49O3l2e+eibx+po2dm5mVkYyIhYOA/fjw6ePb1cvDvbmup6SfmZSNiYaDgfnE15KCz6iah4N+gY+KfYCHhHt4goGCdHFxdYCNjJCftcTUxbWwpq+rtdPg3tzW086+uairsGqntMzMgd/b1NjDzeuSvNjtiaO2xd3t+YGHjZOZnqOprrW8wsfPKMfS4Hd9goeKioeFg31zbMq2nIivyOLp9H+Dh4qNj5GUlpeZmpucnJ2Enk2dnZybm5qamZeXlZSTkpKRkI+OjYyMi4qKiYiHh4eGhYWEhIODgoKCgYGBgIB/fn59fHrz8vHv7enm4t7Z1dLOwa+Kk9DR3NfRy8Tnmom4fqGJnJmXk4+KhoSCf/n07Obe2NHHv7q2rKWinZeSjIiEgX/2wdKQiunFtaGclZepoZKWnJmRjpeXlomHh4uVoqKircLO3M2/u7fCv8nj7u7t6Obi1NHBwsh4w8/JvXzY1c/SucPhjLbS44Ocr7/W5e97gIWKj5San6SqsLa6v3m9xtJvdXt/gYF9enhxZ2G5n2OAqsfn7vmBhYmMjpCTlZiZm5ucnZ6en5+fnp6dnJybm5qZl5aUlJKRkZCPjo2Mi4qKiYiHhoWFhIODg4KBgYB/f359fXx8fHt6eXl3durp6Ofk4d7a1tHPzMa4pX9tvr3JxcC8t+CWibN+nYacmZeTkIuHhYJ/+vTt59/Y0sjAu7espqOdmJOMiISBf/a/zYyR+dfGsaylpbqvnqOoo5yZoqGhk5KTlqCtrau0x9Lez8PCwM3K1Oz39/fz8e3g3s/Q14HV4LireNLSysyrttWItM3cfZitvtbk7Xl9gYaKj5WanqSpr7K3g3+MgIN/hoDHgZCAiH8BgYuDAYKKf5Z+BX19fHt6sXkGenl5enx9h3yEfYd+jn8CAgEAefmBho6Um6KorbCytbOwqZqSko3A44iIiYmKjI6PkpWXmZqbnZ6fn6CioaGgoKCfnp6dnJybmpmYl5aWlZSUk5KRkZCPj4+Ojo2MjIuLiYmIiIiHiIeHh4aFhYSEg4GAgP/6+Pb08Ozm4dvUzsW1iufEyuDh4eDe8J6JvH6mjqWhnpuZlJGOjYuIhYKA+fPs3tzV0M3Evbawq6WfmpSRkI2LhMHJ5rCUlZOnl5KNhIOMh4GFg4aLhoWKg4uNoambqri2tqmhrrfH1tzW2NHRzcCvqrTCzbazhZ+oq62yuLq9w87Z4eXw/YKHjJSboKatsbe+xczT2dzi6vIn5HZ7gYaNlJmeoKKkop2WhmRmf6/WhIWFhoeJi4yPkpSWl5iam5ychp0knJybmpqZmJeWlpSTkpKRkZCPjo2NjIuKiomJiIeGhoWEg4ODhIIkgYGBgIB/fn58e3v08O7t6ufj3dfSzMW8qn6qp7rT1NXW1uqaibh+ooqjn5yZl5KPjIuJhoOAffTu6NrY0MzJwbu0rqmknZiSj46LiYK+yO7Nr7CrwrKsp5ybpJ+Ym5qdop6copqipLjAr73Kycm9uMPO3Oju6uzm6ebay8fR3s6tq4Kdpqmqr7W3ub/K1Nzf6PN8gIWLkpaboaWqsLe+w8jL0Nfeeddvc3l+hYuQlJeZmpiSinlJSnal0oSFhoeIio2OkZOVmJmam5ycnJ6fn56enp2dnJuamZiXlpaUk5GRkI+Ojo2Mi4qKiYiHhoWFhIODgYGAgH9/f35+fXx8e3t6eXh3d+zp5+bj4NzW0czGv7WidYSWscvN0NLS5JaJs36dh6OfnJmWko+Mi4mGg4B99O7o2tnRzcrDvLWvqaSemJKPjoqIgbzH79/Bw7zTwr23q6qxrKSnpamuqqivp6+xxs67yNTT1MjG0Nvp8vj2+PP39enb1+LyyKSlf5+oq6yyt7i6wMvV3N7o8nt+goeNkZWanqKor7W5vsHGzNMBf5SAy4GPgIh/AYGLgwGCjn+WfgN9fHqveQN6fH2QfpN/AgIBAE6Jj5acoamvtbe8vsDCwLuwhZKt1oCLjI2NjpCSkpSXmJmam52en6ChoaGgoaCfn56dnZybm5uamJeXlpWVlJOTkpCQkI+Pj46OjYyLi4qEiSeIiIeHh4aGhYWEg4KBgP379/Tx7urm39fQyMC3pemS4PHz8O7s85+JvH6mjq+rqaWjn5yamJeUkYyJh4SC9/bu5+Tg2tLLx8K6tK+qpqKgn5uWjNCBzsGloJ+ek5SQop2fmZebm5GXmJegoa+9va7AurPEubO91NjSzsjNzMhwwfbTkqyxtLi+v77F0+Pv+YGFio+TmZ+mq7K4vsTN1Nvk7fT7gYGAg4YnfoKIjZOaoKSnrK6vsa6om2Z8n8R7h4iJiouMjo6QlJWWl5iam5ychp0inJubmpqYmJeXlpSTkpKRkZCPj46MjIyLioqJiYiHhoWFhISDJoKCgoGBgICAf359fHvz8e3r6ebi3dfPycG5rpvgjtjq6+no5e2bibh+oousqaejoZ2al5aUkY6Kh4WCf/Py6uTh3dfQyMW/uLGsp6OfnZyYlInOg9bcwLu6u66uqr23t7KwtLSqsLKxu7vJ1tTD1dDI3NDM1urv6+fj6enmf73ty42qr7K1u7y7ws7d6PB8gISJjJKXnKGnrLG2vsTK0trg5nZ2dHd7eXd7gISJkZebnqKkpaainI5Sb5e6eYaIiouMjY+QkpWWl5iZm5ucnZ6enp2dnZycm5qamJeXl5aUkpGRkJCOjo2Mi4qKiYmIh4eFhISDgoGBgYCAf39/fn19e3x7e3l4d+3q5+Xi39vX0srDvLOoldeM1ejp5+bj6JeJs36dh6ypp6OhnZqYlpSRjoqHhYKA9fTs5ePf2tLJxsG5s62oo5+dnJmUic+E3PHUzs3OwL+6zMfFwL7Cwbi/wsHMzNnn5NHj3tfs39zm9/36+PX7+/iHsuXGjayytbi+v73E0N3n73t/goaJjpOYnKGmqq61u8HHz9Xab29ucXSUgMyBj4CIfwGBi4MBgpF/ln4DfX17qHkEent8fY1+lH+FgAICAQB5mp+kq7G1ub7CxcjJy8zKxsPE0eGHjo6Oj5GSk5SWmJqamp2dnZ6foKChoaCgn5+fnp6dnJubmpqZmJeWlZWUlJORkZCQkI+Ojo2NjIyLioqJiYmIh4eHhoaFhYWEgoD/+/j18u/q5eHc1tDJwbiuoYyA//78+ff1n4m8fqaPu7e0sa6qqaako6KfmZSRjImFgoD9+vby7+fi3djSzMW/vLiyr6qlpKijjMqB7Xi3trKvrqKaobmsoqSrsKvEaMK7sbmyyW7FzWtvhW1vjbvMr4OquLu+wMXIysvR2ef3gomOk5icoaettbvDztjd5O3z/IOHio6QkZCRliuNkZecoaWorrK1t7e5ubeyrrLA0YGJioqMjY6QkZOVlpeXmZqam5ycnZ2dhZwlm5qZmZiXlpWVlJOSkpGQj46NjYyLi4uKiYmIh4aFhYSEhIOCgoSBIICAgH99fPTy7+zq5+Ld2dXQycK7sqeah3349/Xz8e+bibh+ooy4tLGuq6imo6Ggn5yWko+Kh4OAfvj28+/r5N/a1c/Jwry4tbCrp6KhpqKMy4T3htTTzsvLvrW91Me9wMnNyOF33dXK1MzifN/oeX2Xe32Zs8Onfqe1t7u9wsXGx8zU4fB+hIiMkJSYn6SqsLfAyc3T2uDmd3t+gYOEgoSJJ4WJjpSZnJ+kqKyura+vrKaip7bJgIqKi4yOkJGRlJWXl5iam5ubnIedS5ycm5qZmZiWlpWUk5KRkJCOjo2Mi4qKiomIh4aGhYSDgoKBgYF/f35+fn18fX18ennu7Onn5eLc2NTQy8W+t66jloV79vXz8u/pl4mzfp6Jt7Sxrquop6ShoJ+clpKPioiEgX75+PXx7ebh3NfRy8S9ubWwrKejoaajjc6G/pDq5+Le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goGA/fn28/Hu6ufk3trV0M3Jwry3s6+qpJqOhuLmjZadoqepqqqplJPj3t/d19TU1NLOysfBvLq3trCppaOjoZ2Zl5SSjouJh4WDgP/8+Pfy7uvm5eXi4N3dS93c29zc3NjY19bX0tHW09TX2d3e5OTg4uHk5ufm6Ors7vH1+Pn8gYWMlZ2lrLC0uL/J0t7m8Pf9goWGiY6Tlpmfpamsrq+vsbKztRmprbG1ub7CxcfLzc7P0c/PzMzjf4qOj5CShJMIlJWXl5iZm5uEmoWbgJybmpqZmZiXlpaWlZOTk5KSkpGQkI+Ojo2Mi4uKiomJiIeGhoWEhIOCgYGAf358e/Tx7uzq5uPg3NjU0MvHxL23sq6rpqCWi4Pd4YqSmZ6ipaampZGQ39rb2tXR0dDOy8fFv7m3tLStp6OhoZ6bl5WSkIyJh4WDgH/79vLy7enmUuLg4N7c2NnZ19jZ2djV1dTS083M0s/P0tXZ2+Hh3N7d3+Lj4uPl5+ns7/P09n6CiZGYoKWprLC3v8fS2eHn63l7e32BhYeKkJeanZ6fn6Gio6YjoKOnq6+1uLu9wcPExcfFxMLC232JjY6QkpOTlJSVlpiYmJqHm4Ccm5ubnJuampmZmJeWlZWUk5OTkZGQkJCOjY2Mi4qJiYiIh4aFhYODg4GBgYB+fn58e3p47+3r6OXi39zZ1dHNyMTBurWvq6mknpSKg9nch4+Vm5+hoqKhjY3f29za1dLS0tDMyMbAu7m1ta+opKOioJyYlpORjYqIhoSBf/z381bz7+ro5OLh4N7b3Nva2t3d29jY1tTVz83U0dDV2Nze5OTf4eHk5ufl5+rr7O7y9Pb4foKJkJefpKeprLO7wszT29/ic3V1dnl9f4GGjZGUlZaXmJmanZOAy4GagAGBioIBgaN/tH6Sf5OAAgIBABrDxszP0dTY3d/i5OTl5ubj5OyBjZWampqZmoWZBpqbm5ydnomfGZ6fnZ2dnJybm5qamZmYmJeXlpaVlZOTk5GEkICPjo2NjIuLioqKiYiHhYOCgf/++/f08vDt7Orm4t7Z09DOyMG9ubSuq6eglZKtxdbn9P+Cg4OA6KDt6+vp5+Tj4eDc2tXRy8fJxsC4sbCwraqno6CdmpeUkpGPjoyJh4eFhIOB/vv39PHx8fDv7u7u7/Dw7+7v8e/r6+7u7+7u7jXx8fX29vX29vj7/4GDhYiMkZihqa21u8HJ0Nvk7fT5/oKHi42Pk5icoKSorrCytLW1tbi7viWytbq9v8LGy87P0dHS09PR0tp5hY+UlJWUlZWWlZWVlpaYmZmahpsKnJycm5ybmpmZmYSXgJWVlZSTk5KSkZCPjo6NjIuLi4qJiIiHhoaFhYSDgoKBf3589vXy7+zq6Obl49/c2NPOy8jCu7i1sKqnpJ2Sj6nB0uLv+X+AgH7jnOnn6Ofl4d/e3dnX0c7IxMXDvbavrq6rqKWinpuYlZKQjo2LiYaFhYKBgH759vLv7e3t7OvqDurq6+vs6unq7Ovn5+nphOo17e7x8vLx8vHz9vp/gIKFiY6UnaSosLS6wMbQ2ODl6u15foGBg4WJjpKWmp6goaOlpaaorK8lqauxs7W3u8DDxcfIyMnJyMfQdYOOlJOUk5WVlpWVlZaXmJmamoScAZuEnICbnJuamZmZl5eXlpWUlJOSkpGRkI+OjYyLiomJiIiHhoWEhIODg4KBgH9+fXt68fDu6+nm5eLh39vZ1dDKyMa/ubazrqilopuRjqe/0N/s9X1+fnzgm+jm6Ojm4+Hf39vY09DJxcfFv7ewsLCtqqejn52al5KRkI6MioeFhYOBgAV/+vj08oTvEO7t7ezt7u7t7e3v7enp7OuE7TXw8fT19fT19Pb5/H+BgoaJjpOco6eusre8wsvS2d7i5HR4ent8foGFiY2QlZeYm5ycnZ6ipZKAyoGigISBgoCrf6d+lX+VgAICAQAoycvR09Ta3uDi4+Xo6Ojn6Ov5h5Kbn5+fnpybm5qZmZmampubm5ycnYeeAZ2EnAabmpqamZiElwSWlZWUhJOAkpGRkI+Pj42MjIuKiYiIh4aFhIKCgP/8+PTy8O7t7evp5+Ld2dXRzcfDv7u0raupoZqSjIiFhISDgYD9+/n29PPy8fDv7uzo5+Lc19HR087Jwr+9urW2s6+rqKWin52cm5mXk5CPjo2NjYqHhIODgYCAgYGAgIGA//6AgP/8/P86/v78/oCAgIKCgoODhIaHi46PkpifpqyxuMDHzNPb5O31/IGEhomOkJSYm5+lqq+ztLS2t7q5u77Awyq3ub/BwsjMz8/Q0tXV1dTV2eh/i5WampqZl5eWlZSUlJaWl5iYmJmZmpqFmwaampmZmZeEloCUk5OUk5KRkZCQj4+Pjo2Mi4uKiYmIh4aFhIOEg4KAgH9+fPXz8Ozr6efn5uTi39vW09DMyMK+u7ewqaelnpePiYWDgoGBf3759/Xz8PDw7u3s6+nl5N/Z1M3O0MzGv7y7t7Ozsa2opaKfnZqamZeVkI2NjIuLi4iFgoGBgH9+f0d/fn5/f/v5fX77+Pj7+fn4+n5+f4CBgIGBgoOFiYyMj5Wcoqiss7rAxcrR2eHo7Xl8fn+DhIeLjJGXnKCjo6SmqKuqrK6wsgyusLW3uL7CxMXGyMyEyxrO33yJlJmZmZiXlpaVlJSUlZWWmJiYmZmamoWbAZqEmYCXlpaWlZSSk5OSkZCQj4+Ojo2Mi4uJiIiHh4WEhIOBgYGAgH59fHt58O/s6ejl5OPj4d7c2NPPzsnFwLy5ta6opaOclY2JhYOCgYF/fvn49vPx8fHw7+3s6ufm4dvWz9DSzcjBvr25tbWzr6qnpKGenJuamJaRjo6MjIyLiIWCghqCgYB/gYCAf4CA/vx+f/36+v38+/r8f3+AgYWCLYSGio2Mj5Wcoqersri9wsfN1Nzh5XV3eHp9foCDhImPlJeampucnqGgoqSmqJKAyoGlgL1/BH5+f3+Ifp5/mIACAgEAHs7Q1tra3uLl5ebo6+zq6uz0g4yXn6Onp6imoJuamoeZBJqanJyGnYCcnJybnJqampmYmJeXlpaWlJSTk5OSkpKRkZCPjo2NjIuKiYmIh4aFhIOCgYD8+PXz8O/t7Orq6enm4t3a1tPOyca/ubSwrKqloJuUjoqHhoaFg4KA//37+/r5+fn49fPv7Ofm4eDd2dTMxsbBv7y5t7Ovraqop6aloqKgnpybmVGWlZaTkZCOjIyNjY2LjIqKh4qKiYeIjIiHh4eKiouMjo6QkZGTlpicoKassrm/xs3S1t7m7vb7gISIjJCTmJucn6KorLC0t7m7u72/wcTGyMsdvcDGycrN0NLT1NbZ2djY2eJ7hY+ZnZ+goZ+alpWElIWVApaYh5mAmJmYmJiXlpaVlJSTk5OSkpGQj4+Pjo6NjYyLioqJiYiGhYWEg4OCgYB/fn178/Dt6+ro5uXk5OPi39zX09DOycTBu7Wwq6emoZ2YkYyHhYSEg4KAfvv5+Pj39vb19PLw7Ojk497d2tbRycPDv726trSwrauopqSkoqCfnZyamZdRlJOUko+OjIqKi4uLioqJiIaIiIeFhoqGhYWFiIiJioyMjo+PkJSWmZ2iqK60usDGy8/W3OTq7nl9gYSGiY2QkZKVmp2hpKeqq6uusLK0tri6HLO2u7+/w8bIycrN0NDPzs/Yd4OOl5uen5+emZWFlAeVlJWVlZaYh5mAmJiYl5eWlpWVlJOSkpKRkZCPj46OjY2MjIuKiYiHh4WEg4KCgYGAf358fHt57+zq6Obl4+Lh4N/f29jT0M7LxcG+ubSuqaWkoJyXkYuHhISEg4KAfvz6+fn49/f39vTy7urm5uHg3NjUzMXFwb+8uLayr62qp6alpKGgnp2bmphRlZSVkpCPjYyLi4yMi4yKioaJiYiGh4uHhoaHiYmKi42Nj5CPkJSWmZ2iqK2zuL7EyczT2d/m6XZ5foCChIeKiouNkpWYm56goqGkpqiqrK6xkYDLgaiA4n+agAICAQAd1dXb3+Hk5+bo6+rt7/Hw8/+HkZ2mra6sq6ignZqFmQuXl5eYmZubm5ybnIWbE5qampmZmZiYlpaVlZSTk5KSkZCEjxmOjo6NjYyKiYiHhoaGhYOCgP77+vbz8O7thOyA7evp5uTh3dbT08zEvrq0sq+rqqeinJiUkI2LiYaEg4KBgoGAgYKBgf/7+PXw7ern4+Hc2dPNycjDwb+7uLa0s7Gurq2rqqmnpaKgn5+fnZyamZiZm5mXlJSTlJWUk5SUkpSUlZWWl5ibnJ6goKGkqq+1u8DFzNDV2eDo8Pj9gIQah4uPk5ecoKOmqq2xs7a6vb/AwcTGyMvNz9ItxMXLzs/R09TV19fa3d7d4e5/iZWepKSjo6Gal5SUlJOTlJKSkpOVl5eXmJeYhpcvlpaVlZWUlJOSkZGQkI+Ojo2LioqLi4qKiYmIh4aFg4KCgYKBf3189fLx7uvq6OeF5oDk4d/d2tfRzc3Gv7m2sK2qp6akn5qWkY2LiIeDgoGAgIB/f4CAgH/8+PXy7ern5N/e2NbRysbFwL69ubWzsbGuq6yrqaenpaOgnp2enpybmZeWmJmYlpOSkZKUkpCSkpCRkZKTlJSVmZqcnZ6eoaessre7wMbKztLX3+ft8Xp+gBmDh4qNkZWYmp2fo6Snq66vsLG0tri7vb7CHLq7wMTFyMrKzM3N0NPV09fkfIeSnKKioaGgmZaGkw6SkZKTlJeXlpiXmJeXl4SWEZWUlZSUk5KRkJCPj46NjYyKhYkYiIeHhoWEg4KBgH9/f317evDu7ezo5+XkheOA4d7b2dbTzsrJw7y3tK6sqaalo56ZlZCNi4iHhIKBgICBgH+AgYGA/vr39O/s6ebh39rY083Ix8LAv7u3tbOysK2trKqop6akoZ+enp6cm5mYl5mamZeUk5KTlZOSlJSRkpOTlJWVlpmanJ6enqGmq7K2ur/EyM3P1dzj6et3en0ZgIOGiIyPkZOWmJucnqKkpaanqqyusrS1uJGAyYG0gNZ/nIACAgEAL9rd4OPm6Onq7O/x9ff39v2Eipagq7O0sq6oop2amJeXl5aWl5iZmZmYmJiZmpqZhJpVmZmZmJeWlpaVlJSTkpKSkZGQkJCPjY2MjIuKiomIh4aFhIOCgYD//fr39PPw7uzq6+zt7O3u7uvo493V0szGwb67uLSzsK6sp6WgnZqWko6Li4qKiYSIdIeGhIKB//z69fPv7Ojm4dzW0tDPzMnHwry7u7q6uLe2tLKwr62rq6qpqamnpqWnqKaioKOjoJ6doKCfnp+goaOkpKWpq62vs7e7vsPIzNHX29/o8fj/gYSHi46SlpmeoqWprq+ytrm7vsLFxsjMzM3Q0dPVK8nMz9HU1dbX2tzf4uTl5et8goyXoaipqKWgm5eUkpKRkpGQkZKTlJSTk5SFlViXl5aVlJWUk5KSkpGQkI+Ojo6NjIyLi4qJiIiHh4aFhISCgYGAf358e/b08e7s6+ro5uTk5ebl5ubm4+Hc18/Nx8G9ube0sK+sqqijoZ2bl5OQi4mIiIiHhYZzhYOBf/z59/Lw7Onl497Z08/NzMnHxL+5ubi4t7a1s7Gwrq2rqaqop6enpqSjpqajoJ6hoZ6cm56enJycnZ6hoaGipqiqrK+zt7q/w8fM0NTX4Ojv9Xx+gYOGio2QlZibnqGhpKeqra+ztLW3vLu8vsDBxIC/wsbIysvMzdDR1Nja29vieH+JlJ+mpqWjn5qWk5GQkZGQj5CRk5OUk5KTlJSUlZWWlpWUlJOTkpGRkZCPj46OjY2Mi4qKiomIiIaGhYSEg4KAgH59fHx6efLw7uvp6Ojm5OHi4+Pi4+Li393Z1M3KxL+7t7ayr62rqaejoJ2al4CTkIyJiYmIh4aGh4eGhoSCgf/8+fTz7uvn5eDb1dHPzsvJxsG6urm5ube2tLKwrq2rqaqop6eopqWkp6ikoJ+iop+cnJ+fnZydnZ6hoqKip6mqrK+zt7m+wsbLz9LV3eXr8Hp8foCChomMkJOVmJubnaCipKapq6ytsrKztbe4upCAyYG4gNF/noACAgEAH9/i5ejp7Ozt8PP09vb3+oGGjZejrLGysa2po52amJeFlQmWlpeXl5iYmJeFmICZmZiYmJeVlZSUk5OSkpKRkJCPj46NjIuKiomJiIeGhYODgoGA//79+/j18/Hv7uvq6uvr7fD08/Pw6+Pb1MvFwcC9vLq4tbKvraypp6ShnZmXlpWUkpCPj46NjImHhYOBgYD9+Pbz8O3o5uPg3NfU0czHxsXCw8TGxsPCwr+8uk67ure2tra0s7W1tbGusLCvrqytsLCvrq6wsbKzsbS2ubzAxcjKz9TY3ePr8/b7gIOHi42RlJmdoKSnq6+ws7a6vb/CxMjM0NPT1dbX2dwpztHT1tfZ2dre4eLk5OXpeH+Fj5qhpqemo6CclpSSkZCQkI+QkJGSkpKFk4SUgJWVlJSUk5KRkJCPj46NjYyMjIqKiYmIh4aFhISEgoGAf39+fHv29fXz8O7s6uno5uTk5eTm6Ovq6ebj3NTPxsC8u7m4trWyr6ypqKakoZ6al5SUkpGPjY2NjIuKiIaEgoB/fvn18u/t6uXj4N3Z1NHOyMTDw8DAwcPDwL+/vbq4Tri4tbS0tLKxs7Oyrqytrq2rqqutrayrqq2usLCvsbO2uLzAw8XKz9LX3eTr7fF7f4GEh4mNkZSYm52go6Smqa2vsLO0t7q/wsPExsbIy4DEyMvNzs/P0NPW2Nra3OB0fIKMl56jpKShnpuVk5CPjo+Pjo+PkJKSkZKTkpKTk5OUk5SUk5OTkpGQkI+Ojo2NjIuLi4mJiIeGhoSEg4OCgYB+fXx7ennx8vLv7evp5+fn5OHh4uHi5Obl4+Hf2dLMxL65ube2tbOxrquop6WjoYCem5eVlJORj46Njo2Li4mHhYOBgH/8+PXy7+zn5uLf29XT0MrFxMTBwcLEw8G/v726uLi4tbS0tLKxtLOzr62urq2sqqytrqyrqq2vsLCvsbO1uLu/w8XJzdHW2+Po6u15fX+ChIaJjZCUlpibnp6foaWmp6qrrbG1t7i6u7u+wY+AyIG+gMt/oIACAgEAJOPm6evr7vDy8/b29/j7/oKHjZafpq2urauloZ2ZlpSTk5SUlIaVhJYEl5eWloSXgJaVlZWUk5OTkpKRkI6Oj46NjIyLiYiHh4aFhYOCgoGA/v38+vj18/Lx7+3s7Ovr7O/x9Pb49/Pl2tnMx8bEwsC+vLq2s7Owr66sqaajoaCenJqYmJiWlJKQjYuIh4aFg4GA/vv38u/t6ubh4NzZ19bX1dTT0NPX09DOzs7MycbESsLBwcLBwsG+vr+/wL+9v77Aw8HAwL69vL/Bw8jN0NTW2Nre5/H5/YCAgYSIjZCTlpqdoKSorLCxsrW7wMTJysrLz9XY2dzb297hHtHU19na3N3g4eTk5efq7Xp/hY2WnaKjo6GdmpaRj4SOgI2Oj5CRkZCQkZGRkpKTkpKSk5KSkpGRkZCPj4+Ojo2MiouKiYmIh4aFhIOCgoGAf359fHv19PPy8O3s6+rp5+bn5eTl6Onr7Ozr6NzU08jDwsC+u7q4trOwr6ysq6mmpKGfnZyamJaVlZSSkI6LiYaFhYSCgH779/Pv7Oro493bFNjU09PT0tHQztDT0M3MzMvJxsTChr83vbq7vL29vLq8u72/vr28u7q5u72/w8jLztDS1dnh6vH1fHx8gIOGiY2Pk5aYm56hpaWmqa6ytoS5Cb3Ex8jKysrMzx7Iy87Q0NLU1tjb2tzd4OR2fIKJlJufoaGgnJmUkI6FjA+NjY+QkI+QkJCRkZKSkpGEkoCRkZCQkI+Ojo2MjIuJioqIiIeGhYSDgoGBgH99fHt6efHw7+7t6+rp6Obl5OTi4uLk5ebn5eTi2NDRxsHAvry6ube1sq+urKurqaajoJ6enJqYlpWVlJORj4yKh4aGhIKBf/369vDt6+nl393Z1tTU1dTS0s/R1NDOzMzMycfEwkq/v7/AwMC9u7u9vb68u7u7vb6+vLy7urm7vL7CyMrOz9HU2N/o8PN6e3t+gYSHioyPkpSXmpyfn6ChpquusbCvsLS5vL3Av7/CxY+Ax4HCgMV/o4ACAgEAIObq7Ozt7/Dy9fj4+vv9gIGFipCYoaioqaShnZyXk5GRhZIGk5OTlJSThZSDlYaUCZOSkpKTkpGQj4SOgI2Mi4mIh4aGhYWDgoGB//39/Pr49/X08vDv7uzr6+vu8vL2/Pr88OXj19DLyMXFxMC+vLq3trOzsbCvrqupp6Wko6OioJ+enJmWkY6NjIqIhYWDgoD9+vXy8Ozq5+np6Ofl4uHh4uXl493c2tjW08/Oz9DPy8rLy8rKy87Ozs/QOs/Pzs7NysvMzdHV2+Dj5efq8fj8gICChIWIi4yQlJabn6Kkp6uvsrW4u7/Cx83S09LT2N3f4ODh4uQn1Nja293e3+Hk5ufq6+x3en6CiI+Ynp+gnJqWlZCNi4uLjIyMjY2NhI4Kj4+Qj4+QkJGQj4SQgI+Oj46OjYyMi4qJiomJiIeFg4OCgYKBf359e/Tz8/Py7+7t7Ovq6Ojm5eTk5unp6/Dt7+bd29LMx8TBwcC8ubi3tLKvsK6srKqopqSioaCgoJ6dm5mWlI+Mi4qJh4ODgoF/+vfx7+3o5uPm5uXk4t/e3t7h4N/Z2NbV09DNy8vOR8zIx8jIx8bIy8rLzczLy8rJyMXHx8nM0Nbb3eDh5Ovy9nx9foCBg4WHio2PlJeanJ6ho6aprK6xs7e8wMLAwsbMzs7Oz9DSNMzP0dLT1dbZ293f4eLkc3Z7gIWNlpycnZqYlJOOi4mIiYqKiouLjIyNjY2Oj4+Pjo+QkZCFj4COjY6OjYyLi4qJiYmIiIeFg4KBgICAf318e3nv7/Dw7uvr6urp5+Xl5OLi4uPl5ebp5+fh2dfQysXCwL+/uri3trOxr6+urKuqqKakoqGgoKCenZyal5WQjYyLioiEhIOCgPz48/Hv6ufk6Ofm5eTg39/f4uHe2djX1dTQzcvMzkfMyMjHyMfGyMvKy8zMy8vKyMjExsfIy9DU2tzf4OLq8fR7fH6AgIKEhYiKjJGUlpeanJ6go6WnqauvtLe3tre7wcPDxMXHyI6AxoHHgL9/poACAgEAIers7O7t7fLz9ff5+/39/oGDiIuQl5udnpuYlpWSkI+Oj4SQg5GEkoORhJKGk4CSkZCQkI+Ojo2NjY6NjIuJh4eGhYWEg4OBgYD+/fz6+vn39vX08/Hv7u/u7/Dw8vb7+PL07uLW1c/LycfFxMG/vLq5uLi3trSxr62qqKisrayqqKShoZ+cm5mXlJKPjIuJhoSBgf/9/fv6+fn49/b09PDv7vHx7erl4+Pf3N7d2wze3drb2dzc3NjW2dyE3jff3N7i5ujo7O7v8fX3+v3/gIGEhomKjZCSlJidoaSoq66xtbm9v8PHys7R1dnY1tXb4OLj5OboKtnc3N7d3eHj5efp6+zt7nl8gIOIj5OVlpORj46LiomIiYqKiYqLi4yMjISNBoyNjY6NjoWPgI6NjIyMi4qKiYmJiomIhoSCgoGBgIB/fn18evTz8/Ly8O7t7Ozr6uno6Ofn6Ojp7O/s5+nl29HRy8fFw8HAvbu5t7a1tbSzsa+sqqelpaiqqaeloZ6fnZqZl5WSkIyKiYeEgn9//Pr5+Pf19vX08vDw7ezq7e3q5uDf4NvZ2trXR9va1tfW2djY1NLV2Nra2dna19nd4ePi5ujq6+7w8vb4fX6Ag4SGiIqMjZGWmpyfoaSmqaywsrW4ur7AxcjHxcXKz9HS1NXXK9DT09XV1Nja3d/h4+Xm53Z5foGGjJCSk5GPjYyJiIeGh4iIh4iJiYqKiouGjIONhY4qjYyLi4yLiomIh4iJiIaFgoCBgH9/fn18e3p48e/v7u/s6+rp6unn5uXlheSA5unn4+Th2M/PycbFw8G/vLq4trW0tbOzsa+sqqekpKiqqaakoZ+fnZuZmJaTkI2KioiFg4CA/vz7+vn3+Pb19PHx7u3r7e3p5uDe4NzZ29rX2tnW19bY19jU0tXY2dnZ2NjW2Nzg4uHm6Onq7e7x9Pd8fn+Cg4SGiImKjpOXmZwYnZ+go6aqqq6xs7a4u769u7vAxcfJzMzOj4DFgcqAu3+ngAICAQAC6OuE7Bfx8/T1+Pj6+/v9gIOGiIyPkZKRkI+OjoWNBI6Pjo6Ej4KQhI8RkJCQkZKSk5KSkZCQkI+OjYyEi2CKiYeGhoWFhISDg4KBgP/+/fz6+Pf39fT08/Ly8fDu7u/v7vLz7O/u5dva19LPzMjHxsPBv8C+vbu7ube1sq+trbGysrCvrq2pp6Sin6CdnJuZlpOQj4yLiYiHhYSEhIOEgVeA//z59vj49O/t7Ovs6+ro5+fp6eno5+bl4+To6enq6+vs6uzt7+/x9Pj6/YCBgoOEhoqMjpCTlZmcn6Kmqq6wtLe8wMTHys3P0tba3Nzb2tvc3+Lk5OYb2Nze3t7d4uTl5ujp6+zt7nl8gIKFiImLiomIh4eEiASJioqJhYoFi4uLjI2FjiqNjIyMi4qJh4eGh4eGhYOBgYCBgH9/f358e/X19fTx8O7u7ezr6+rq6umF54Dp6eTm5d7U1NLOy8jEw8K/vry8urq4uLa0sq+sqqqtr66trKuppqShn52dm5qYlpOQjo2KiYeGhYOCgoKBf3+Af377+PTy9PPw6urp6Ono5uPi4uXl5uTj4uHf4OPk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9fTz8/Ly8fDv8O/u7Ovp6Ofk4uHh3tvY2dfV0tLQz8/NzcrKx8XGxsXGx8fJyMfIy8rIx8PBwL++vbu5uLi2tLKwrqyrqqmoq6yrqqmno6KhnZmUk5KQj42Mi4qIh4aGhUeGhoWDhIKCg4OEhYWFhoeIiYmJiouLioqMjY+RlJaZm52go6aprbCysrO3ub2+v8HCwsLBxMbJys7PztDR0dLT1NfZ3N3h4jTY3Nzf39/g4eTk5ebn6evt7e3r6uzu8fJ6enp7fH5+fn1+fn5/gIGBgYKDgoKDg4KCgYGBhYIngYCAgIGBgYB/f35+fn19fXx8e/Tx8vP19PLz8vHw7+3s6+vq6urphOiA5uXj4eDd29ra2NXS09LQzs3LysvJyMbFw8HCwsHCw8LFw8PEx8bEw8C+vby7uri2tbWzsa+tq6mop6alp6mop6akoJ+empaRkI+NjIqIiIeFg4ODgoODgoGBgICBgIGBgoKCg4OEhYWFh4eGhoiJioyPkZOVl5qcnaCjpainqKwcr7K0tbe4ubm4u7zAwcXGxcbIxsfIyczO0dLV1i/T19ba29vc3eDf4OHj5efo6enn5ujp7O13eHh5e3x8fHt7fHx9fn9/gICBgICBgYWADYGBgIGBgH9/f4CAgH+FfW98e3t7ennw7e3w8fHv8O/u7ezr6unp5+fn5uXm5eXj4uHf3tvZ2dnX09HS0c/NzcrJysjHxcTCwMHCwcHDwsTDw8THxsXDwL69vLu6uLe1tbOxr62rqainpqaoqainpaOgn56alpGPjo2LiYeIhoSFggmDgYCAf3+Af4CFgTiCg4ODhIWGhYWHiImLjo+Rk5WXmZqcnqCjoqOnqq2vsbS1tra1t7m9vsLDwcLDwsPDxMfJzM3R0ZiAtIH/gLWAAgIBACfj5OLj5ubo6uvs7e3v8fH19vb4+fj7/v///4CAgP+AgYKCgoODg4KEhBKFhYSEhIWGhYWGhoSEhYSDg4OFggSBgYD/hP4K//7+/fz7+vn49oT0AfKE8Vnv7u3s6+zr6unp6Obk4uHf3drY2NbS0dDOzs3JyMnLyMfHx8bFx8fHycrLzMzMysnGxcTDwsC/vbu6ube0s7Kwrq6usLGxsK+tq6imo6CcmJSTkpKSkZCPjoSMRouLiYqKiomIiYqLi4uMjY6Pjo2MjY6OkJKVlpibnaCipairra+xs7W1uLq8vb7AwcLDxcbJy8zNzc7Oz9HS09TU1drb3d8g19jW2Nvb3d/h4uLi5Obn6uzs7e7t7/Hz8/J6enr0e3yEfQN+fn2Ef4WACoGCgYGCgYGBgICEf4R+BX18fPf1hPYJ9fX08/Ly8fDvhO1W6+rq6uno5uXk5OXk5OPi4d/d3NrZ19XT09HOzczKysnFxMXGxMPDwsLBwsLCxcbHyMnIxsXDwsHAv728urm3trSwsK+tq6urra6urayqqKWjoJ2alZGEjwqOjYuLiYiJiYiHhIYxhYSFhoaHh4eIiYqJiIiJiYqMjpCRk5WYm5yeoaOlpqiqrK2wsrS2tri5uru9vsDDxITFC8bIycnLy8vP0NLUJ9LT0tPX19rb3d7e3uDi4+bp6Orr6uvt7u7ueHh473l6fHt7fHx8e4R9hX4Kf4B/gICAf39/foR9hHwEe3p69IXzCfLx8O/v7+7t7ITqAeiE51nl4+Ph4eLi4eHg397c2tnX1dPR0dDNzMvJycjEw8TFw8PDwsHAwcLCxMXHyMnIxsXDwsHAv728urm4trSxsbCtq6urra6urayqqKWjoJ2ZlZCPj46OjYyKioSIAoeGhIUDhIOEhIUphoeHiIeHhoiIiYuMj4+Rk5aYmZudn6GipKeoqayusbO0tba3uLq7vcCGwgrExcXGxsbLy87QmoAEgYGBgKeB/4C8gAICAQAi3d3d4OHk5Obm5ujq6+3w8vP09vX1+Pr7/f//gIGA/v+AgIeBg4KEgwqEhIODg4KDgoKChIFKgoKBgICA/vz9/vz8/Pv7+/r4+fj29vTy8/Lx8PDw7+3t7Ovq6urp6OXk4+Li4eDf3NnY1dPR0M7My8jIyMbExMXGx8fJyszNzs6EzTfMysfIxsTEw8HAwL68u7m3t7a1tre3trW0srCtqqimo6CdmpiXl5aWlpWVlZOTkpKRkZGQkZGRhJI5kZGRj46PkJGUl5iZmpydn6OmqKqrrrCxsrS2uLm6vLy9vsHExsjJysvMz9DQz9HS0tLT1NbY2tzbI9LS0tXW2dnb29vd3+Dj5+nq6+zr6+3v8PH09Hp7evP0enp7hHwTe3x9fX1+fn9/f4B/gH9+f35/foR9Cn5+fXt7e/Tz9PWE8z3y8vLw8PDu7u3s7Ovq6enp6Obl5OPi4+Pj4t/d3Nvb2trZ1tPT0M7My8nH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u7m3uLe3trWzsrGwsLCurKyrqqimpKKhnpybnJybnJybm4SaIZmYlpaWmJmbm5yfn6Cgn5+ho6Slp6ipqqusrrCys7S1tYW2F7e5u7q7vL2+wMHCxMXDxcTExsfJysvNqoABgYuAAYH/gMqAAgIBABPZ2dvb3Nza2dvb3d/k5ujs7/DxhPMa8vHx8vP19vf4+fn49vf5/P39/f79/f38/PqE+zf8/f39/Pz7+vj39/f29/f28vX29fTz8/Lx7/Dw8PHy8vDu7e3s7Onq6efl5ODh4uPj5OXi3dvZhNgk1tXV09HQzc7OzcrIycnJyMXFyMnKzMvNzc7OzM3MyMjLzMnIhMcIxsTEw8LAv72FuyO6ubm5uLe3tra1tbOysK+urKmpqKemo6WmpqWlpqelpqalpoSoAaqFri6vr7CytLO0tbW3uLi5u72+v76+wcHCxMTDw8XGx8fHyMnKzM3Oz87P0dTX1tXXE9DQ0dLS0tHR09PV19ve4OTn6OqE6xTq6enp6+zt7vDw8O/u7vDz9PT09YX0GvLz8/Ly9PT08/P08/Lw7+/v7u7u7ens7ezshOuE6Rrq6+vq5+fn5ubi4+Lg3t3a29zc3d3e29fV04TSJNDPz87My8jJycjFxMXExMTAwMTExcjHycnKysnKycXFx8fFxITDCsLBwL++vbu5t7iEtye2tra1tLSzsrGxsK6tq6qopaWko6KgoqOjoaKio6GioaCho6OjpKaFqQ+qqqusr66vsLCys7O0tbeEuBu5uru8vLy7vL6+v7/AwcHDxcbHxsfJzM/Nzc5JzM3Oz9DQz8/R0dPU2dvd4eTl5+np6Ojn5ubn6Onr7O3t7ezr6+3w8fHx8vLx8vLx8PHx8O/x8fDw8PHx8O7t7ezr6+vq5unr6oTpe+jm5+fm6Onq6ebm5eTk4eHh393b2Nna2tvb29jV09HQ0NHQzs3OzMrKx8fIx8TExcTExMDAw8TFyMfJycrKycnIxcXIx8bFxMTDw8LBwL++vbu4t7e3tre2tba2tbS0s7Kxsa+urauqp6Wko6Khn6GioqGhoaKgoKCfoISiAaSEqC+nqKmpq62trq6vsLGys7S2tre2tri4ubq6ubi5uru7vL29vsDCw8PDxMbJzMrJyv+A/4CCgAICAQAT19bY2Nra2Nra2dna297h5Oru8YbzDPLz9PT19fb3+Pb3+IX6Hv38+vv6+vz8+/v6+Pn49/f19ff39vb19/Xz8vLy84TyYPPz8vHw8O/v7u3q6erq6ero5OPl5eTl5OPk4uLh393a2trW1tXU0c/Qzs7OzczLzMzLysfExcfHyMnKzM3LzM3NzcvLysnJyMbFxcXEw8PCwcDAv7++vLq7vLu8u7u6uoS4ULe1tbSzs7GwsK+urayurq+urq2tra6vrq2tra+xsrOzs7S1tLS1t7e4ubm4ubm3ubu9vr/BwsLDxMTDwcLDw8TExcjKy8zNzc3R09PT1NXVFM/Pz9DS0tDS0tHS0tLV2dzi5ujqh+sR7Ozt7e7u8O3u7/Hy8fLy9PSE8i/08/Lz8fDw8O/v7e3u7+7u7e7t6+rq6uzr6+vs7Ozr6+rq6enn5uPi5OPi4+Hd3IXead3d29za2dbV1NTR0NDPzMrKyMjJyMjGx8fGxcK/wMPDw8XGycnIyMnJycfHxsXFxMLCwcLAv7++vby8u7u6uLe4uLi5uLe3t7a1tbW0srGwr6+trKurqqmpqqurq6qpqaiqqqqpqamrrISuL7Cwr6+wsrOztLSzs7Sxs7a3uLi6u7u8vb27urq6u7u7vb/BwsPExMXJzMzLzc3OFczMzc7Pz87P0M/Q0NHT19nf4+Xn54boCunq6uvr6+zq6+yF74Dy8e/w8PDy8vDw7u3t7ezs6+vs7Ovr6uvq6ejo6Orp6enq6urp6Ofn5ubl5eHh4uLg4d/c29zd3Nzc29vZ2djX1NPT0s/Pz83LyMnHx8jHx8XGx8bFwr/AwsLDxcXIyMfHycnIxsbGxcXEwsLBwsC/v768vLy7urq4t7i4uLm4t0O3t7W1tLS0srGwr66trKuqqaioqqqrqqmoqKipqamoqKipq62ura2vr66ur7CysrOzsrKzsLG0tba3uLm5urq6ube3hLgPubu9v8DBwcLGycnJysvL/4D/gIKAAgIBAEHT0tLU19nZ2tza2t3c3uDg4uPn6uzt7u/x8fL09vb29fT2+Pr7/f37+vj2+Pf29vf3+Pn39/j39vb19vf39/X19IXzhPJM8fHw7+7s7Ozr6+rp6unn6efn6OXl5eTl5OPi4OHi397c2tnZ2dbU09PRz87MzM3NzczLysjHxsfHxsbIysnIysvLysrJyMjEyMrIx4TGB8XEw8LAwMCEvha/vr++vb29u7q5ubm4uLe3tbW0tLOzhLQbtbSzs7Sztba0s7O0tbe2t7e4uLm4ubm6urq7hbohu72+vsHCxMXFxcTExsbFxsXExcfGx8jIys/Q0tLS1NPSN83Ly83P0dHS09LS1dTW2NjZ2t7h5OXn6Onq6+zt7u7t7O7w8vP09fLx8O7w7+7u7/Dx8e/v7+6E7Qbu7u7t7eyH6xfs6+vr6unp5+bm5eXk4+Ph4OLg4eHe34TeP93b2dvb2djW1dTT09HPz87MysnHx8jIyMfHxcTCwcLCwcLExcXExcfHxsbEw8PAw8XDw8LBwsLBv7++vLy8uoe7Mrq6ure3tra1tbS0s7KxsLCvr7Cvr7CxsK+vsK+xsbCurq+xs7Kys7OztLS1tba1tbe2hLUhtre4t7q7vb69vr28vr6+vb28vb6+v7/AwsfJy8vMzczLOsrIyMrNz87Q0dDQ0tLU1dbW2Nve4eLj5Ofn6Orr7Ozq6uvt8PDx8vDv7ezu7ezs7e7v7uzr6+vq6uqE64LqiOlP6urp6Ofn5uTj4+Li4eDg397g39/g3d7e3d3c29rX2drX1tTT0tHR0M7OzcvIx8bGx8fHxsbEw8LBwcHAwcPFxMPFxsbFxcPDwr/DxcPCwoTBCL++vry8vLq6hrs9ubm5t7a2trW1tLOysbCvr66ur66vsLCwrq6vrrCwrq2trrCysbGysrO0s7OztLS0tbSztLOztba2tri5uoS7Frq8vLu7urm6u7q7vL2/xMbJycnKycj/gP+AgoACAgEAYtPT09TW2NjZ2tzd3+Dj4+To6ejn5unp6uzt7O7w8fHx8vP09PX39/f4+Pf29fX2+fn39vT08/Py8vLx8fHy8PLz8vHx7/Dv7+/u7u3t7O3s6+zs6+rp6eno6Ofn5+jm5OXhht8O3t3c3dvZ1tTT1NPS0dGE0D3PzcvJycjHx8jFw8fIycjIycrKy8rIyMfExsjHxsXFxMPEw8PDwsHBwcDAv7+/vr2+vry8vLu6ubm4t7e3hLYUt7e4ubi4ubm4uLm4uLi5urq7u7qGvCe5urq8vr+/vr/CwcLDwsLExsbGx8jHxsjJysnIyMfFxcfKzc/PztCE03bMzMzNz9HR0dPU1dbZ29vb3+Dg397g4eLl5uXn6erq6uvs7e3u7+/v8PDv7u3t7/Hw7+7s6+rq6erq6Onq6unq6+rq6ujp6Onp6efn5+bn5uXm5uXk4+Li4eHg4ODh4N7e29nY2NnY2djX1tfV1NHPzs/Ozc3MhcshycbExcPDwsPAvsLExcTDxcXFxsXDxMLAwsTDwsHBwL/AhL8Xvr29vLy7vLu7urq6ubi4t7e2tbW0tLSFsyK0tLW0tbW1tLS1tbS0tbW2t7a1tre3uLi3tba2t7m6ubi5hrscvb6+vr/AwL/AwsLCwcG/vr6/wsbIx8fJzM3NzDXKysnKzc/Pz9DS0tTW19jY293d29rd3t/i4+Pk5ufn5+jp6uvs7e3t7u7t6+vr7O/u7Ovp6IXnKebm5+fm6Ono5+fm5+bn5+fl5eTj5OLi4+Pj4uHg4N/f3t/f4N7d3drYhNcP2NfW1dbU0tDOzc7NzMvLhMohycfFxMTDwsLCv77Cw8TDw8TExcXEwsPCv8HDwsLBwL++hL8Yvr29vby8u7y7u7q6uri4t7e2tbS0s7OzhbJEs7O0s7S1tLO0tLSzs7S0tba1tLa2tre3trS1tba3uLi3uLq5ubq5ubq8vLy9vr28vr/AwL6+vbu7vL/ExsXFx8rLysr/gP+AgoACAgEAE9LS09PU1NTW19jZ3N7g4OPl5+iG6gLs7YTuMu/v8PDx8fDw8fHy8O/t7e7v7/Dv8PDv7+7v8O/u7O7u7Ozt7u7t7u/t7ezq6+vs6+rphOog6ejn5+bl5eXk49/e3eDf39/e3t3d3Nzc2dfW1dTT09KE0SDPzsvKysjIx8fIxsTFx8bGxsfIycfGxsfHxcPExsbFxITDCcTEw8LBwcLBwYTAUr++vr28vLq7vLu6ubq5urq6u7u8vL28vL28vL29vby8vb6/v72+vr67vL29vsDCxMPBwcPEwsTDxMbHx8jJyMnIyMnKysnKysrLy8zNzs3MzdGE0iHMzM3Nzs7Oz9DR0tXW2Njb3d/g4uPi4uPi5Obo6Ofn6OiH6Q3q6unn5eXn5+jp6OfohOcY6Ojn5efm5eXm6Ofm5+jn5ubk5OTm5eTihONG4uHg4N/f397d3drZ19rZ2dnX19bY1tfW09LR0M/Pzs3NzczMy8nGxsbExMPDxMLAwMLBwsLCxMTDwsLDw8HAwMLCwsC/v4TAAb+EvhC9vby8vL27u7q5uLi3t7i4h7YBt4e4C7e3ubi4t7e4ubm5hLgutre4uLm7vb29u7y9vbu9vL2/v7/AwcHCwcHBw8LCw8PCw8TFxsfGxcbKzMzMyxPJysvKy8zLzc7Pz9LU1dbY2tzehOAb4eDi5OXl5OTl5ufm5+fm5ubn5+Xj4uLk5OXmiuUt4+Tk4uLj5eXk5ebl5OTh4uLj4uHf4ODh4eDf3t7d3d3c3NvY19bZ2NfX1tbVhNYa09HRz8/Ozc3MzMvLysjFxcXExMPDw8K/wMKEwQ7Dw8LBwcLCwb/AwsLBwIS/CcC/v769vb69vYS8Bru6urm4uIS3Bba1trW1hLaGtwu2tri3t7a2t7i4uIS3FbW3t7e4ubu8u7m6u7u6u7q7vb29voW/hMAQwcHAwcLCxMXEwsPIysrJyf+A/4CCgAICAQBC0tPU1NXU1tbX2Nrc29re4eHk5efn6Ojo6uro6uvr6+zu7uzs6+vq6uvr7O3t7/Dw8fHw7+3t7u7u7e7t7u/t6uvrhO0D7u3shOuF6kHp6Obm5efm5ePh4uHg39/g397d3Nzb2tjX19fY2NjX1tXV1NLT0tLRz83MysvJy8rJxsbFx8jHyMXGx8fHxsbFw4fChcAKwcHBwMDAv8C/voS/B76+vby8vL2FvIK9hL8Fvr+/wMCJwTPAv7/AwMHBwsLDxMXFxMTGxMXFxcTFx8fJyMnKzMzLzc3MzMvLy8zOz9DPz9HR0dLR0dJJzM3Oz8/Oz9DR0dPV1dPX2drd3t/g4eHi5OPi4+Tl5eXm5uTk4+Pi4uPj5Obm5+np6unp5+bl5+fn5ufm5+jm5OXl5+fo5+jm5YTkEePj4uLj4eDf397f397c29zbhdo+2NfW1tbV09LS0tPT09LR0dHQzs/Pzs3LycjGx8XHxsXDwsHCw8LDwMHDw8TDwsHAvr+/vr++vr28vby9vb2HvIS7BLq6ubmKuAq5uru7urq6u7u7iLw0u7q6ubq6u7y8vL6+v7++vr++v7+/vr/AwcLBwsPExcXGxcXFxMTExcfIycnIysrLzMvMzCbLzMzNzczOzs/Q0dPT0tXY2Nvc3t7f3+Di4eDh4uPj4+Tk4uHg4ITfDODi4+Tm5ufn5uXk5ITlCObk5ebk4uPjhOUD5uXjhOJO4eDg3+De3dzc293d3NrZ2tnZ2NjZ2NbW1dXU09LR0dLS09PS0dHQz87Pzs7NysnIxsfFx8bEwsHAwsPCw8DBwsPDwsLBwL6/vr6/vr69hLyCvYS8D7u8vLq7u7u6urm5t7i3uIS3g7iEuge5ubq6uru7hLoxu7q6ubi4ubm6uru7vLy+vby8vby9vb28vb+/wcDAwsPDw8TEw8PCwsLExsbIx8fJyYTKAcv/gP+AgoACAgEAhNRI19fV1NTV1dfa2tvd3uDh5OPk5OTj5OPl5ufo6ers6ujn6Ofo6urr6+3t6+3t6uvr6+zs7e7u7vDv7+/w7+/u7u/u7ezs7OvrhOk+6Obl5ubk5OPi4uLf3+De3t/e3d3c29nZ2tjU09TV1NTS0tPU0tDS0tLR0NDPz87NzczKysnHyMnJyMfGxcaExA7CwsLBwsPCwsLBwMC/wYTAhL8Kvr/AwL++vr6/v4i+hMAnwcHBw8PCwsPEw8PEw8HBwcLDw8TDw8TExcXGxcXIx8nIx8fIyMnKhswVy8zMzc3Pz87Oz8/PztDR0dLS0tHSO87Ozs/Q0M/Nzs7O0NPT1NbX2Nrd293d3dzd3N7f3+Hi4+Xj4N/g3+Hi4+Tk5+bl5ubj4+Tk5eXm5+johOlP6unp6Ojp6Obm5eXk4+Li4uHg397e3t3c3Nvb29jY2dfX2djX19bV09PU0s/Pz9DQ0M7OztDOzM7Ozs3NzMzMysnJyMbGxcPDxcTDwsLBwoTAEb6+vr2+v76+vr28vLy9vLy8hLsJurq6u7u7urm5irqEu4O8hL2Fvh29vLy7vb29vr29vr6/v8C/v8LBwsLBwcLCw8TGxoTFFcTFxcbGyMnHx8jJyMjKy8zNzczMzTvNzczNz8/OzMzNzc/R0dPV1dfY29rb29va29rc3d3f4ODi4N3c3dze3+Dh4uTj4uTk4eLi4uTj5Obm5oTnEujn5+bm5+fl5OTj4uHg4N/f3oTcIdra2djY2NbW19XW19bW1dXU0tLT0c7Ozs/Ozs3Nzc/NzIXNE8zMzMrJysjGxsXDw8XEw8LBwcGEwBe+vr69vr++vb29vLu7vLy7u7u6u7q6uYS6Arm4i7kku7u6u7y7u729vLu9vb28vby7u7q7vLy9vLy8vb6+vr2+wMDBhMAFwcHDxMSEwxXCw8PExMbHxcXHx8bGyMrKy8zLysz/gP+AgoACAgEAC9PU1NXV2NnY1tbYhNmA293e3+Df4N/g4N/g4uTl4+Lh4eLl5ufm5+fn6Onp6ejp6Ojp6urq6+vs6uzr7Ovs6+vq7Ovq6Onp6Obo5+fm5eTl4+Lj5ePi4eHg4N/d3+Df3t7c29nZ2NfY2NfV1NXU0tHS0tHRz87NzM3My8vLzMvLzMrIyMfIx8bGxsTFxMMNxMPCwsPDwsPCw8LDwoXBC8DAvr6+vb6/vr69hLwPvb29vr/AwcHBwMHBwcLDhcQFw8XFxcSExQXGxcbGxoTHAsbHhcgNx8jJycnKysvLysrHx4TIEsnLzMzLzM3Oz8/N0NLS09LT0xTOzs7Pz9LS0tDQ0dLT0tLU1tfY2YTYRdnY2dvd3tzb2trb3t/f3+Dh4OLi4+Pi4uHi4+Tk5OXl5eTl5OXl5uXk5OXk4+Li4uHf4eDg397d3tzb293c29ra2dnX1oTYDtfV1NPT0tHS0tHQ0NDPhs0gysnIx8jIxsfHyMjHx8XExMLDw8LBwb/Av76/vr2+vr+GvoK9hLwDu7u6hLkRurm5uLi3uLi4ubm6ury8vL2EvBu9vr6/vr+/vr/AwL/Av7+/wL/AwcDAwcHBwMGFwh3BwsPDw8TExMXEw8DAwcHBwMHDxMXExMbHyMnHy4XNAc4LzM3Nzs7Q0dDPztCE0U7S1NXW19bX1tfX1tfZ29zZ2djX2dvc3dze3t7f4ODg3+Df4OHi4uLj4+Pi4+Li4uPi4uLj4uHg4eDf3d/f3t3c29za2dnb2djY2NfX1dWE1gbV09LR0tGE0ITPDczMzM3NzMnIx8bHx8aGxxTFxMTCw8PBwcG/v7++v769vb6+vYW+Ar28hLuCuoW4Brm4t7e3toS3B7i5ubu7u7yEuwO8vr2EvgG9hL4Bv4W+Bb+/vr/AhL+HwCHBwcHCwsPDwsG+vb6+vr2+wcLCwcLDxMXGxcjLy8zLzM3/gP+AgoACAgEAN9XW1tfZ2NnZ2NfW2NjZ2NjZ29vd3Nzb29vc3d7f3uDh4ePh4eHi5OPl5ubm5OPl5ubl5+jo6euF6jzo6Onp5+jn5ubn5+Xm5+fl5uPj4+Hj5OLh4uHi4N/e3N3c3dzc3Nva29rZ2NfV1dTU0tLR0tLRz87My8uGygzLysrJycfHxcTExMWFxA/DwsHCw8LDxMTFxMTDw8KEwQPAv76Fvwq+vby9vry8uru/hcBHwcHCwsPDwsPCwsTExMXEw8LDxcXGxsjJycjHyMbHycnIycnJyMfIyMfHx8nKycbEw8bHx8jJyMfIyMbIycrMzs/Q0dPT1NQ4z9DQ0dLR0tLR0dDR0tLS0dLU1NbV1dTT1NXV19fW2Nna29na2tvd3d7f39/d3d7g4N7g4eHi5eSE4wbh4eLh4OGF4C/e3+Dg3t/d3N3b3d3b2tvb29nY19bW1dfV1tbV1NXU09LR0NDP0M7NzM3NzMrJx4XGIsXFxsbFxcXEw8LAv7/AwL+/wL+/v769vb69v7+/wMC/vr6FvBK7urm6urm5urm4t7i4uLe2t7qFux68vLy9vr29vr29v7+/wL++vb2/v7/AwsPDwsLCwcKGwyPCwcLBwcDBwsLBv728v7+/wMHAv8C/vsDBwsXHyMnKzM3OzjfNzs7P0dDR0dDPz9DR0dDQ0dLS1NPT0tHS0tPV1dTW19fZ19jY2dvb3N3d3dvb3N7e3N7f3+DjhOE74N/f4N/e39/e3t/e3d7e3tzd29vb2dvb2djZ2dnX1dXU1NPV09TU09LU09HR0M/Pzs7NzMvMzMvJyMeGxQrExcbExcTDwsLAhL8Zvr+/v76+vby8vby9vr6/vr69vLu6uru6uYe4Cre3tre3t7a1trmGuh+7u7y9vLy9vLy+vr6/vr28vL6+vr/BwsLBwMC/wMHChMEBwIS/Hr6+wMC/vbq5vLy8vb29vL28ur2+v8LExcbHysvMzP+A/4CCgAICAQBszc7R0tLT09PS0tPU1dbW19fX2NjX2Nja2tvb2tzb297f39/d3t/g39zc4OHi4eLj5eXm5eXi4uLg4eLi4uHi4uHh4+Hh4uHh4N/e39/d39/f4eHg4N7d3dzc29zb3Nra2dnZ19bW1tTU0tHQhdEIz87Pzs3MzMyEyxXKy8rJx8fHxsfGxcPDw8TDwcC/wcGEwIPBhMAMwcLBwsHAwcHBwL+/h8AVv8DBwcDBwsLDwsPCw8PDxMTDxMXGhMcBxoXHh8gZx8jHx8bGxcPEw8PExsfIycvMysnIyMfHxoTFDcTFxsfJyszNzc7NzM05xcfKy8zMzc3Ly83Nz8/P0NHQ0dHQ0dHT09TU09TU1NbX2NjW19fZ2NbW2drb2tzc397f3t7c29vahNsv2tvb29rc2trb29ra2djZ2dfZ2dnb29rZ2NfW1tbV1tXW1NXU09PS0dHR0M/OzMuFzAjKycnJyMfHx4TGC8XGxcTCw8LBwsLBhb8+vbu7vby7vLu8vby9vLu6u7y9u7y8u7y7u7u6uru7uru6u7u6u7y8u7y9vb69vr2+vr6/v76/wMHCwsHBwcKEwYfChMEmwMC/vb69vb6/wMHCxMXDwsDBwL++vb29vLy9v7/BwsTExcbFxMVewsTHyMnKysrJyMrKzM3Oz87Oz8/Oz8/R0dLS0dLS0tTW1tbV1dXX19TU19jZ2drb3dzd3Nza2dnY2dnZ2tja2trZ29nZ2tnZ2NfW2NfV19jY2dnY19bV1NTU09TU1YTTJtLR0NDQz87My8rLy8vKysjIyMfHxsbFxcXExcTFxMPBwsHBwsHAhb4IvLq6u7u6u7qEuwi6urm6uru6u4a6Hbm5urq5urm6ubm6u7q6u7y7vLy8u729vb6+vb6+hsABwYTAIcHBwMDBwcHAwL+/vr69u7y7u7y9vr/AwcLAv76+vby7uYW6C7y8vr/BwsLDwsHC/4D/gIKAAgIBAATNzc7Qh9Eq0tLU09PU1NTV1tfX2NfW19jY2drb29zc3N3d3t3d3dzc3N7f393d3NvbhN0S29vc3NzZ2tvb297d3N3b3dzchNsg2dnb2tnZ2trb2tva29vZ2tnY2NXU09HS0dDPz87Pzs6EzzDNzczNzczLy8vMzM3My8vJx8fGxsXExMXFw8PExMPDwsHAwcHCwsLDwsPCw8LCwsGIwITBCMLCw8PDxMTFhMaCx4XIA8nIyIXJAcqHyRzGw8PEw8XFxMXFxsbHxsfKysvMzc3Nz8/Ny8zLisoCy8yEywLMzQTFxsbJh8oCy8yFzQPOz8+E0AvP0NHR0tPU1NTV1YbWINXU1dfX19bV1NTU1dbW1dTU1dXV0tPU1NTX1tbW1dbWhdVE1NTV1dPT1NTV1NbV1dXT1NTT0tDOzs3NzMvKysnKycnKycrJyMjHx8jHxsbGx8fIyMfGxcPCwsLBwMDBwb+/wMC/v72EvAe9vr2+vb6+hL0BvIa7Ary7hLwOvb2+vr6/v7/AwMHAwcGEwoTDBMTDw8OGxB/Dw8PAvr2+vb+/vr++v7/Av8HDw8TFxcbGyMjGxMTDh8IFwcHCw8SFwwHFDcLDw8bIx8jHyMjIycqGyw3Nzc7Oz87Nzs/Q0NHShNOG1CvT09PV1dbU1NPS09TV1NTS09TU1NHS09PT1tXV1NTV1NTT09TU09PU09LShNMc1NPU09LT0tHRz87Ny8zLysnIyMnIyMnIycjGx4TGIcTFxcbGx8bFxcTDwsHBwL+/wMC/v7/Avr69vLu7u7y9vIW9BLy8vLuJugW7u7u8u4S9gr6Ev4LAhMEtwsLCwcPCw8LDw8LDwsLCwcG/vLu8u729vL28vr2/vr/BwcLDw8TExsXDwcLBhcCEvwnAwMHBwMDAwcL/gP+AgoACAgEAEc3Nzs7Pz8/Qz8/Ozs7P0NHQhNET0tTW1dbX2NjZ2tra3Nvc29za2ojZL9ra2tnY2NnY2NfY19fX2NfX2dnZ2tnX2NnZ2djY2dfY2NjX19bX1tbW1dTV1NPUhNEM0NDQz8/Oz9DO0NDQhs8Zzs3NzMzKzMzMy8rKycnIycjHyMfGxsbExYTGBMXExMSFxRfExMXEw8LCw8TDwsLDw8LAwcPDwsTExIXFF8bGx8fHyMjIycnIyMjHxsfIx8nJysnIh8kRyMjJyMjIycjKy8zMzc3Nzs6Ez4PQhtEJ0M/Pzs7NzMzMhM0IxcXGxsjHyMiFxwXIycrJyoTLC83Pzs/Q0dHS0tLThdQD09LRidIF09LR0dKE0TTQ0dDR0dDS0tLU0tHR09PT0tPT0tPT09LS0dHQ0dHQz8/Pzs/NzM3My8vLysnJysvKy8vLhsoGycjIyMfFhMcPxsbFxMTEw8PDwsLCwb/AhMEDwL+/icAUv769vb6/vr69vr29u7y+vr2/v7+FwAXBwcHCwoXDEMLCwsHBwsLCw8PExMPDw8SEwxPCwcLBwcHCwsPExcXGxsbHyMjIhckLysrKycrKycjIx8aIxQjDw8PExsXFxoXFFMbHx8fIycnJyszNzc7Oz8/Q0dHRhdIN0dHQ0dDQ0NHQ0NHR0YXQhs8k0NDP0NHR0tHQ0NHS0tHS0tHS0tHR0M/Qz8/Pzs3Ozs3Oy8vLhMoJycnIycrJysrKhskiyMfGxsbExsfGxsXFxMPDxMPDwsLBwcG/wMDBwcHAv76/wIe/FL69vLy9vby9vL28vLq7vL29vr6+hL8YvsDAwMHBwcLBwsLBwcHAwMHBwMLCw8LBhcISwcHAv8C/v7/AwMHCw8PExMTFhMYXx8jHx8jIyMfIx8fGxsTEw8PCwsPDw8L/gP+AgoACAgEACNLR0tLS09TThNQe09LT0tHS0tLR0dHT0tLS09TU1dbV1tbV1dTU09PTh9IT0dHS09TU09LR0tPT09LS09PS0ofTBNLQ0NCEzwXQ0dDPz4bQBdHR0dLRhNIB04TRB9LR0NDR0NCFzx7Ozs7NzMzMy8rKy8rKysnJysnJysrJyMnJyMfIyciFx4TII8fGxsfGx8fGxsfHxsfGx8fGxcbFxcfGx8jHyMnKy8rKycnJhMqCy4TMCsrMzc3MzMvLy82FzAnNzc/OzMzOzcyEzoPPhM4Rz9DQ0NHR0dDR0tHS09LT0tIMy8vMzMvNzs3Nzs7NhMwey8vMzMvLy83My8zNzs3Oz87Pz8/Ozs3Mzc3My8zMhssQzM3NzcvMzMzNzczMzc3LzIXNDM7NzcrKysnJycrKy4TKhsuCzIbNBs7NzM3NzYbMhcqEyRHIx8fGxcTGxcbFxMTFxMTFxYTEBMPCw8OGwhvDw8LCwsHBwsHCwcHBwsHBwsHCwcG/wMDAwcGEwgjDxMXExMPDw4TEgsWExgrExsfHxsbFxcXHhcYfx8fJyMbGyMfGx8jIx8jIyMfIx8fJysrJysvKysrLy4XMAcsGysnKysrLhswLy8rLy8nKysrJycmEygPLzMuEzQrOzc3My8rLy8rJhcoKycnJysvMy8rKyoTLBcrLy8rKhcsDzMzLhMgFx8jIyMmEyITJEMrKy8vMy8vMzMzNzMvLzMyEy4LKhckIyMjIx8fGxsWExBHFxMPDxMPDxMTDwsPCwsHBwoTBAcCFwYTAAb+IwDi/wMC/vr+/v8DAwMHAwMHDw8LCwsHBwsPCwsTExcTFxMLExcbExMPDw8XExcXFxMXFxsbExMbFxIvGEcfIyMfIycnIycnJysvLy8rK/4D/gIKAAgIBAITQB9HR0dLS0tGF0gjR0dHS0tHR0Y3SDNHR0tLS0dHQz9DQ0ITOg8+E0AvPz9DQ0NHR0dDPz4XQg8+E0AbR0dHQ0NCE0QvQ0dHR0NDQ0dHR0IjRhNCGz4fOg82HzgHNhMyCzYvMgsuGyoTJAcqEy4TMF8vMy8zMzMvKy8zMy8rKyszJx8nMzM3NhMwKzc7Ozs/Pzs7OzYTOC8/Ozc3Ozs7Nzs3Nhc4Izc3Nzs7NzcyEzQnMzc3Oz8/P0M8IycnKysrLy8yEy4PMicuJzAHLhMwHy8zMzMvLyoTJBcjHx8fIhMkGysnIycnJhMoCyciEyQnKysnIyMnJycqEywnKysvMzMzLy8yJy4TMA8vMzITLg8qKyYjICMnIx8bGxsfIhscWxsbGx8bGxsXExMXFxcTExMPExMXFxYnGIcfGxcXFxsbFxcTFxcPCw8bHyMfGx8bHx8jIyMnJyMjIx4XIhMeCyITHhciHxwPGx8eExgfHyMjIycnJEMfHyMjJycnKysnKysrLysqEyQbKycnJysuKyoLJhMoDycnIhMcKxsXGxsbHyMfHyIXHBMjJyMiGxwnIyMfGx8fHyMiEyQzIyMnKysrJycrKycmEygXJysrKy4XKhMmHyATHyMjIi8cHxsXExcXGxorFg8SGw4XCRcPEw8TExcTFxMTExcXFxMPDxMTEw8LDxMLAwcTFxsXFxcTFxcbGxsfHxsbGxcbGxsfHxsXFxcbGxcbFxcbGx8bGxcXFxofFBsTFxcXGxoTH/4D/gIKAAgIBAAPOz8+G0IbPitABz4TQhNEL0NHQ0NDR0NDQz8+K0IbPBM7Oz8+F0IXRitAG0dHQ0NDRjtAF0dHS0dGL0IPRhtCFz4LQhM+FzoTNhc6GzYLOiM2IzI7NhM6Cz4fOj82FzojNAszNicwHzc3Nzs7OzYTOgsiRyYbKgsmOyovJgsqGyRLIyMjJysrJycnKysvLy8rKycmUygHJhMqFywPMy8uKyoPLhMqGyYLKhcmFyIXHhciFx4LIiceIxoTHg8aGx4TIgsmIyIjHgsiEx4TIiMeHxgHFhMaIx4PIAcaMx4LIhMeFyIPHisgFycnIyMiLxwHIh8cDxsfHhsiFyQLIx4nIAcmEyAbJyMjJycmEyIXJBcrKysnJisiDyYTIAceIyIXHi8YBx5DGisWDxoXFBMbFxcWExoPHicaExZHGhsWLxIXFhcb/gP+AgoA=");var bs=xi(Su());var bu=xi(Pi(),1),mi={thetaMin:-1.02,thetaMax:1.02,yMin:-.68,yMax:.68};function So(i={}){let e=(t,n)=>Number.isFinite(Number(t))?Number(t):n;return{yaw:((e(i.yaw,.28)+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,pitch:fo.clamp(e(i.pitch,.28),-.65,1.15),distance:fo.clamp(e(i.distance,4.8),3.7,8)}}function yx(){let i=[],e=[],t=[],n=[];for(let o=0;o<=12;o++){let l=o/12,c=mi.yMin+l*(mi.yMax-mi.yMin),d=.97+(c+.9)/1.83*.03+.003;for(let m=0;m<=64;m++){let p=m/64,h=mi.thetaMin+p*(mi.thetaMax-mi.thetaMin);if(i.push(Math.sin(h)*d,c,Math.cos(h)*d),t.push(Math.sin(h),-.03/1.83,Math.cos(h)),e.push(p,l),o<12&&m<64){let f=o*65+m;n.push(f,f+1,f+64+1,f+1,f+64+2,f+64+1)}}}let a=new at;return a.setAttribute("position",new ke(i,3)),a.setAttribute("normal",new ke(t,3)),a.setAttribute("uv",new ke(e,2)),a.setIndex(n),a}function wu(){let i=new Et;i.name="procedural-enamel-cup-v1";let e=new It({color:"#f5f1e6",roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,vertexColors:!0}),t=new It({color:"#163d51",roughness:.26,metalness:0,ior:1.5,clearcoat:.54,clearcoatRoughness:.17}),n=bu.default.data.cup.profile.map(([f,y])=>new re(f,y)),s=new Ge(new Ti(n,96),e);s.name="hollow-body";let r=[];for(let f=0;f<s.geometry.attributes.position.count;f++){let y=f%n.length,g=s.geometry.attributes.position.getY(f),u=y>=9?.83+.14*(g+.84)/1.82:1;r.push(u,u,u)}s.geometry.setAttribute("color",new ke(r,3)),i.add(s);let a=new Ge(new Yn(.963,.041,16,128),t);a.rotation.x=Math.PI/2,a.position.y=.98,a.name="rolled-blue-rim",i.add(a);let o=new Ge(new Yn(.905,.02,12,96),e);o.rotation.x=Math.PI/2,o.position.y=-.995,o.name="base-rim",i.add(o);let l=new nn([[.974,.62,0],[1.14,.68,0],[1.39,.64,0],[1.54,.45,0],[1.57,.2,0],[1.47,-.08,0],[1.26,-.3,0],[.972,-.46,0]].map(f=>new F(...f))),c=new yn(l,64,1,16,!1),d=c.attributes.position;for(let f=0;f<=64;f++){let y=f/64,g=l.getPointAt(y),u=l.getTangentAt(y),S=new F(-u.y,u.x,0),T=Math.exp(-Math.min(y,1-y)*14),_=.13+.042*T,w=.047-.014*T,b=E=>Math.sign(E)*Math.pow(Math.abs(E),.68);for(let E=0;E<=16;E++){let x=E*Math.PI/8,M=g.clone().addScaledVector(S,-b(Math.cos(x))*w);M.z+=b(Math.sin(x))*_,d.setXYZ(f*17+E,M.x,M.y,M.z)}}c.computeVertexNormals();let m=new Ge(c,e);m.name="handle-unprinted",i.add(m);for(let f of[.62,-.46]){let y=new Ge(new Qs(1,16,12),e);y.position.set(.976,f,0),y.scale.set(.036,.105,.185),y.name="enamel-handle-joint",i.add(y)}let p=new It({color:"#ffffff",transparent:!0,roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:zt}),h=new Ge(yx(),p);return h.name="front-print-region",h.renderOrder=1,i.add(h),i.traverse(f=>{f.isMesh&&f.material===e&&!f.geometry.attributes.color&&f.geometry.setAttribute("color",new ke(new Float32Array(f.geometry.attributes.position.count*3).fill(1),3))}),{group:i,body:s,handle:m,print:h,glaze:e,rim:t}}var Ss=xi(Pi(),1);var Cu=xi(Pi(),1),zu=(i,e,t)=>new F(i,e,t),Tu=i=>i*i;function Au(i,e=1,t=48,n=t){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let d=i(c/t*2-1,l/n*2-1);if(s.push(d.x,d.y,d.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let m=l*(t+1)+c,p=m+1,h=m+t+1,f=h+1;a.push(...e===1?[m,p,h,p,f,h]:[m,h,p,p,h,f])}}let o=new at;return o.setAttribute("position",new ke(s,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function bo(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<40;s++){let r=(s/40*2-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function wo(i,e,t,n=!1){let s=new nn(i,!1,"centripetal");return s.closed=n,new Ge(new yn(s,Math.max(24,i.length*2),e,6,n),t)}function Eu(i,e,t,n,s){let r=Math.pow(Math.max(0,(1-i*i)*(1-e*e)),.43),a=i*t/2*(1-.12*(1-e*e)*Math.pow(Math.abs(i),6)),o=e*n/2*(1-.1*(1-i*i)*Math.pow(Math.abs(e),6)),l=(Math.cos(i*21+e*3)*Math.exp(-Tu((Math.abs(e)-.83)*12))+Math.cos(e*19-i*2)*Math.exp(-Tu((Math.abs(i)-.83)*12)))*.01*r;return zu(a,o,.012+s/2*r+l)}function cc(i,e,t){let n,s;if(e<=.62)n=e*1.6,s=.04*Math.sin(i*4+e*2)+.022*Math.cos(e*8-i*3);else if(e<.8){let a=(e-.62)/.18*Math.PI;n=.992+.15*Math.sin(a),s=.15*(1-Math.cos(a))}else n=.992-(e-.8)*2.45,s=.3+.035*Math.sin(i*5);let r=Math.pow(Math.max(0,(Math.abs(i)-.72)/.28),2);return s-=r*.2+Math.pow(Math.max(0,(-e-.45)/.55),2)*.38,n+=.025*Math.sin(i*5)*Math.pow(Math.abs(e),3),s+=t*.045,zu(i*1.37*(1-.025*Math.cos(e*4)),n,s)}function Ru(i){let e=Cu.default.get(i),[t,n,s]=e.size,r=new Et,a=[],o=[];r.name="sewn-"+i+"-v2";let l=new It({color:"#f5f1e6",roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:"#fff",side:Ot,shadowSide:zt}),c=l.clone();c.color.multiplyScalar(.88);let m=(g=>{let u=l.clone();return u.color.multiplyScalar(g),o.push({material:u,factor:g}),u})(.78),p=(g,u)=>(u&&(g.name=u),r.add(g),g);function h(g,u,S,T,_=1){let w=p(new Ge(Au(u,_,64),l.clone()),i+"-"+g);return w.userData.fabricFace=g,w.userData.fabricSize=[S,T],a.push(w),w}function f(g,u,S=!1,T=l){for(let _ of S?[0,1,3]:[0,1,2,3]){let w=(b,E)=>{let x=_===0?g(b,-1):_===1?g(1,b):_===2?g(-b,1):g(-1,-b),M=_===0?u(b,-1):_===1?u(1,b):_===2?u(-b,1):u(-1,-b);return x.lerp(M,(E+1)/2)};p(new Ge(Au(w,1,48,8),T),S?"tote-gusset-"+_:"sewn-gusset-"+_)}}if(i==="cushion"||i==="pillow"){let g=(S,T)=>Eu(S,T,t,n,s),u=(S,T)=>{let _=g(S,T);return _.z=-_.z,_};h("front",g,t,n),h("back",u,t,n,-1),f(g,u),p(wo(bo((S,T)=>{let _=g(S,T);return _.z=0,_}),i==="cushion"?.011:.008,c,!0),"stitched-perimeter");for(let S of[-1,1])p(wo(bo((T,_)=>{let w=Eu(T,_,t,n,s);return w.z*=S,w},.985),.0035,m,!0),"fine-seam");i==="pillow"?(r.rotation.x=-.82,r.rotation.z=-.06):r.rotation.z=-.065}if(i==="duvet"){let g=(S,T)=>cc(S,T,1),u=(S,T)=>cc(S,T,-1);h("front",g,t,n),h("back",u,t,n,-1),f(g,u),p(wo(bo((S,T)=>cc(S,T,0)),.008,c,!0),"bound-duvet-edge"),p(wo(bo(g,.985),.003,m,!0),"duvet-hem-stitch"),r.rotation.x=-1.04,r.rotation.z=-.045}let y=p(new Ge(new at,l));return y.visible=!1,{type:i,group:r,body:a[0],print:y,glaze:l,surfaces:a,trim:c,tints:o,floor:new Yt().setFromObject(r).min.y}}function Iu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},d=[],m=["getX","getY","getZ","getW"],p=["setX","setY","setZ","setW"];for(let S=0,T=o.length;S<T;S++){let _=o[S],w=i.attributes[_];l[_]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let b=i.morphAttributes[_];b&&(c[_]||(c[_]=[]),b.forEach((E,x)=>{let M=new E.array.constructor(E.count*E.itemSize);c[_][x]=new E.constructor(M,E.itemSize,E.normalized)}))}let h=e*.5,f=Math.log10(1/e),y=Math.pow(10,f),g=h*y;for(let S=0;S<r;S++){let T=n?n.getX(S):S,_="";for(let w=0,b=o.length;w<b;w++){let E=o[w],x=i.getAttribute(E),M=x.itemSize;for(let I=0;I<M;I++)_+=`${Math.trunc(x[m[I]](T)*y+g)},`}if(_ in t)d.push(t[_]);else{for(let w=0,b=o.length;w<b;w++){let E=o[w],x=i.getAttribute(E),M=i.morphAttributes[E],I=x.itemSize,z=l[E],D=c[E];for(let C=0;C<I;C++){let R=m[C],L=p[C];if(z[L](a,x[R](T)),M)for(let N=0,k=M.length;N<k;N++)D[N][L](a,M[N][R](T))}}t[_]=a,d.push(a),a++}}let u=i.clone();for(let S in i.attributes){let T=l[S];if(u.setAttribute(S,new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)),S in c)for(let _=0;_<c[S].length;_++){let w=c[S][_];u.morphAttributes[S][_]=new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)}}return u.setIndex(d),u}var Kt=(i,e,t)=>new F(i,e,t);function Xt(i,e,t,n,s){let r=new qn;return r.moveTo(i+s,e),r.lineTo(i+t-s,e),r.quadraticCurveTo(i+t,e,i+t,e+s),r.lineTo(i+t,e+n-s),r.quadraticCurveTo(i+t,e+n,i+t-s,e+n),r.lineTo(i+s,e+n),r.quadraticCurveTo(i,e+n,i,e+n-s),r.lineTo(i,e+s),r.quadraticCurveTo(i,e,i+s,e),r}function Ms(i,e,t,n=!1){return new Ge(new yn(new nn(i,n,"centripetal"),Math.max(40,i.length*2),e,6,n),t)}function Pu(i,e,t,n,s=1,r=0){let a=new js(i,10).toNonIndexed();for(let h=0;h<r;h++){let f=a.attributes.position,y=[];for(let g=0;g<f.count;g+=3){let u=[0,1,2].map(T=>Kt(f.getX(g+T),f.getY(g+T),0)),S=u.map((T,_)=>T.clone().add(u[(_+1)%3]).multiplyScalar(.5));for(let T of[u[0],S[0],S[2],S[0],u[1],S[1],S[2],S[1],u[2],S[0],S[1],S[2]])y.push(T.x,T.y,0)}a.dispose(),a=new at,a.setAttribute("position",new ke(y,3))}let o=a.attributes.position,l=[];for(let h=0;h<o.count;h++){let f=o.getX(h),y=o.getY(h);o.setZ(h,n(f,y)),l.push(.5+s*f/e,.5+y/t)}a.setAttribute("uv",new ke(l,2));let c=Iu(a);if(a.dispose(),c.computeVertexNormals(),s<0){let h=c.index;for(let f=0;f<h.count;f+=3){let y=h.getX(f+1);h.setX(f+1,h.getX(f+2)),h.setX(f+2,y)}}let d=c.attributes.normal,m=c.attributes.position,p=5e-4;for(let h=0;h<m.count;h++){let f=m.getX(h),y=m.getY(h),g=Kt(-(n(f+p,y)-n(f-p,y))/(2*p),-(n(f,y+p)-n(f,y-p))/(2*p),1).normalize().multiplyScalar(s);d.setXYZ(h,g.x,g.y,g.z)}return c}function Lu(i){let e=new Et,t=[],n=[];e.name="studio-daily-"+i+"-v1";let s=i==="tshirt",r=new It({color:"#f5f1e6",roughness:s?.94:i==="notebook"?.83:.64,metalness:0,clearcoat:0,sheen:s?.2:0,sheenRoughness:.9,side:Ot,shadowSide:zt}),a=h=>{let f=r.clone();return f.color.multiplyScalar(h),n.push({material:f,factor:h}),f},o=a(.9),l=a(.74),c=(h,f,y)=>{let g=new Ge(h,f);return g.name=y,e.add(g),g},d=(h,f,y,g,u,S=.006)=>{let T=new ai(h,{depth:f,bevelEnabled:S>0,bevelSegments:3,steps:1,bevelSize:S,bevelThickness:S,curveSegments:12});return T.translate(0,0,y),c(T,g,u)},m=(h,f,y,g,u,S=1,T=[.5,.5,1,1],_=0)=>{let w=c(Pu(f,y,g,u,S,_),r.clone(),i+"-"+h);return w.userData={fabricFace:h,fabricSize:[y,g],localPrintBox:T},t.push(w),w};if(i==="notebook"){let h=Xt(-1.02,-1.43,2.04,2.86,.09),f=Xt(-.98,-1.385,1.955,2.77,.055),y=new vn({color:"#f2eee0",roughness:1}),g=new vn({color:"#c7c1af",roughness:1});d(f,.25,-.125,y,"notebook-paper-block",.006),d(h,.027,.136,r,"notebook-front-cover"),d(h,.027,-.163,r,"notebook-back-cover"),m("front",h,2.04,2.86,()=>.17,1,[.52,.5,.88,.94]),m("back",h,2.04,2.86,()=>-.17,-1,[.48,.5,.88,.94]);let u=Xt(-1.045,-1.422,.16,2.844,.055);d(u,.294,-.147,o,"notebook-bound-spine",.018);for(let T=0;T<20;T++){let _=-.119+T*.0125,w=Ms([Kt(.985,-1.33,_),Kt(.985,0,_),Kt(.985,1.33,_)],.0012,g);w.userData.noShadow=!0,e.add(w)}for(let T of[-1.394,1.394])for(let _=0;_<13;_++){let w=Ms([Kt(-.89,T,-.118+_*.019),Kt(.45,T,-.118+_*.019),Kt(.94,T,-.118+_*.019)],.001,g);w.userData.noShadow=!0,e.add(w)}for(let T of[-1,1])e.add(Ms([Kt(-.88,-1.36,T*.171),Kt(-.88,0,T*.171),Kt(-.88,1.36,T*.171)],.0025,o));let S=Xt(.54,-1.55,.065,.2,.005);d(S,.006,-.035,l,"notebook-ribbon",.001)}if(i==="phonecase"){let h=Xt(-.76,-1.53,1.52,3.06,.23),f=Xt(-.635,.66,.72,.72,.16);h.holes.push(new sn(f.getPoints(12))),d(h,.042,.018,r,"phonecase-back-shell",.004),m("front",h,1.52,3.06,()=>.065,1,[.5,.405,.92,.67]);let y=Xt(-.76,-1.53,1.52,3.06,.23);y.holes.push(new sn(Xt(-.695,-1.465,1.39,2.93,.19).getPoints(12))),d(y,.2,-.15,o,"phonecase-protective-rim",.009);let g=Xt(-.663,.632,.776,.776,.18);g.holes.push(new sn(f.getPoints(12))),d(g,.034,.06,o,"phonecase-camera-lip",.004);for(let[S,T,_]of[[1,.38,.34],[-1,.48,.23],[-1,.12,.23]]){let w=Xt(-.022,-_/2,.044,_,.015),b=d(w,.046,-.023,r,"phonecase-button",.003);b.rotation.y=Math.PI/2,b.position.set(S*.767,T,-.055)}c(new _n(.22,.005,.067),new vn({color:"#807d75",roughness:.9}),"phonecase-port").position.set(0,-1.54,-.065)}if(i==="tshirt"){let y=function(b,E,x){let M=Math.exp(-Math.pow(b/.9,6)),I=Math.max(0,1-Math.pow(E/1.7,2)),z=.024*Math.sin(b*13+E*2.2)*I+.012*Math.cos(b*22-E*3)*Math.exp(-Math.pow((E+1.15)*4,2)),D=.026*Math.sin(E*18-Math.abs(b)*9)*Math.exp(-Math.pow((Math.abs(b)-.78)*6,2))*Math.exp(-Math.pow((E-.2)*2,2));return x*(.025+.095*M*I)+z+D+.025*Math.sin(b*2+E)},h=new qn;h.moveTo(-.36,1.39),h.quadraticCurveTo(0,1.46,.36,1.39),h.lineTo(.76,1.28),h.quadraticCurveTo(.92,1.23,1.06,1.1),h.lineTo(1.67,.57),h.lineTo(1.31,.07),h.quadraticCurveTo(1.08,.2,.87,.37),h.quadraticCurveTo(.8,.4,.8,.19),h.quadraticCurveTo(.8,-.65,.89,-1.38),h.quadraticCurveTo(.1,-1.49,-.87,-1.39),h.quadraticCurveTo(-.79,-.58,-.8,.19),h.quadraticCurveTo(-.8,.4,-.87,.37),h.lineTo(-1.31,.07),h.lineTo(-1.67,.57),h.lineTo(-1.06,1.1),h.quadraticCurveTo(-.92,1.23,-.76,1.28),h.closePath();let f=new sn;f.absellipse(0,1.17,.305,.174,0,Math.PI*2,!0),h.holes.push(f),m("front",h,3.34,2.98,(b,E)=>y(b,E,1),1,[.5,.47,.46,.73],4),m("back",h,3.34,2.98,(b,E)=>y(b,E,-1),-1,[.5,.47,.46,.73],4);let g=h.getPoints(10),u=[];for(let b=0;b<g.length-1;b++){let E=g[b],x=g[b+1],M=Math.ceil(E.distanceTo(x)/.025);for(let I=0;I<M;I++)u.push(E.clone().lerp(x,I/M))}for(let b of[-1,1])e.add(Ms(u.map(E=>Kt(E.x,E.y,y(E.x,E.y,b))),.0035,o,!0));let S=[],T=[];for(let b=0;b<u.length;b++){let E=u[b],x=u[(b+1)%u.length],M=E.clone().add(x).multiplyScalar(.5),I=Math.abs(M.x)>1.26&&M.y<.6&&Math.abs(x.y-E.y)>Math.abs(x.x-E.x)*1.15;if(M.y<-1.32||I)continue;let z=S.length/3;for(let[D,C]of[[E,1],[x,1],[E,-1],[x,-1]])S.push(D.x,D.y,y(D.x,D.y,C));T.push(z,z+1,z+2,z+1,z+3,z+2)}let _=new at;_.setAttribute("position",new ke(S,3)),_.setIndex(T),_.computeVertexNormals(),c(_,r,"tshirt-sewn-side-and-shoulder");let w=new qn;w.absellipse(0,1.17,.366,.222,0,Math.PI*2,!1),w.holes.push(f);for(let b of[-1,1])c(Pu(w,3.34,2.98,(E,x)=>y(E,x,b)+b*.006,b,2),o,"tshirt-rib-collar");for(let b of[-1,1]){let E=Array.from({length:49},(x,M)=>{let I=-.84+M/48*1.69,z=-1.345-.035*(1-I*I);return Kt(I,z,y(I,z,b)+b*.003)});e.add(Ms(E,.0023,l));for(let x of[-1,1]){let M=Array.from({length:25},(I,z)=>{let D=z/24,C=x*(1.62-.35*D),R=.59-.47*D;return Kt(C,R,y(C,R,b)+b*.004)});e.add(Ms(M,.0023,l))}}e.rotation.z=-.025}let p=c(new at,r,"hidden-print-contract");return p.visible=!1,{type:i,group:e,body:t[0],print:p,glaze:r,surfaces:t,trim:o,tints:n}}var st=(i,e,t)=>new F(i,e,t),To=i=>i*i;function Ao(i,e=1,t=56,n=64){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let d=i(c/t*2-1,l/n*2-1);if(s.push(d.x,d.y,d.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let m=l*(t+1)+c,p=m+1,h=m+t+1,f=h+1;a.push(...e===1?[m,p,h,p,f,h]:[m,h,p,p,h,f])}}let o=new at;return o.setAttribute("position",new ke(s,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function Li(i,e,t,n=!1){let s=new nn(i,n,"centripetal");return new Ge(new yn(s,Math.max(48,i.length*2),e,6,n),t)}function Du(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<32;s++){let r=(s/16-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function Eo(i,e,t,n){let s=new nn(i,!1,"centripetal"),r=[],a=[],o=[],l=112;for(let d=0;d<=l;d++){let m=d/l,p=s.getPoint(m),h=s.getTangent(m),f=st(-h.y,h.x,0).normalize(),y=new F().crossVectors(h,f).normalize();for(let[g,u]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let S=p.clone().addScaledVector(f,g*e/2).addScaledVector(y,u*t/2);r.push(S.x,S.y,S.z),a.push((g+1)/2,m)}if(d<l)for(let g=0;g<4;g++){let u=d*4+g,S=d*4+(g+1)%4;o.push(u,S,u+4,S,S+4,u+4)}}o.push(0,2,1,0,3,2,l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3);let c=new at;return c.setAttribute("position",new ke(r,3)),c.setAttribute("uv",new ke(a,2)),c.setIndex(o),c.computeVertexNormals(),new Ge(c,n)}function Nu(i){let e=new Et,t=[],n=[];e.name="studio-sewn-"+i+"-v5";let s=new Uint8Array(16384*4);for(let w=0;w<128;w++)for(let b=0;b<128;b++){let E=(w*128+b)*4,x=128+Math.round(24*Math.sin(b*Math.PI/2)+24*Math.sin(w*Math.PI/2)*(Math.floor(b/4)%2?1:-1));s[E]=s[E+1]=s[E+2]=x,s[E+3]=255}let r=new un(s,128,128);r.wrapS=r.wrapT=Cn,r.repeat.set(6,6),r.generateMipmaps=!0,r.minFilter=on,r.magFilter=ut,r.needsUpdate=!0;let a=new It({color:"#f5f1e6",roughness:.94,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:"#ffffff",clearcoat:0,bumpMap:r,bumpScale:.0035,side:Ot,shadowSide:zt}),o=w=>{let b=a.clone();return b.color.multiplyScalar(w),n.push({material:b,factor:w}),b},l=o(.88),c=o(.72),d=o(.72),m=o(.84),p=new vn({color:"#65655c",roughness:1}),h=new vn({color:"#9c978b",metalness:.72,roughness:.4}),f=(w,b)=>(w.name=b,e.add(w),w),y=(w,b,E,x,M=1,I=[.5,.5,1,1])=>{let z=f(new Ge(Ao(b,M),a.clone()),i+"-"+w);return z.userData={fabricFace:w,fabricSize:[E,x],localPrintBox:I},t.push(z),z};function g(w,b,E,x,M,I=0,z=!1){let D=E===0?w(x,-1):E===1?w(1,x):E===2?w(-x,1):w(-1,-x),C=E===0?b(x,-1):E===1?b(1,x):E===2?b(-x,1):b(-1,-x),R=D.lerp(C,(M+1)/2);if(z&&E!==0&&(R.x*=1-.07*Math.pow(((E===1?x:-x)+1)/2,5)*(1-M*M)),I){let L=Math.sin((M+1)*Math.PI/2)*I*Math.sqrt(Math.max(0,1-x*x));E===1||E===3?R.x+=(E===1?1:-1)*L:R.y+=(E===2?1:-1)*L*.55}return R}function u(w,b,E,x=a,M=0){for(let I of E?[0,1,3]:[0,1,2,3]){let z=(D,C)=>g(w,b,I,D,C,M,E);f(new Ge(Ao(z,1,56,16),x),i+"-joined-edge-"+I)}}function S(w,b){f(Li(w,.011,p),b+"-tape"),f(Li(w.map(D=>D.clone().add(st(0,0,.009))),.0035,h),b+"-teeth");let E=w[Math.round(w.length*.74)],x=new Et;x.name=b+"-hardware",x.position.copy(E).add(st(0,0,.021)),e.add(x);let M=new Ge(new _n(.045,.036,.021),h);M.name=b+"-slider",x.add(M);let I=Xt(-.023,-.116,.046,.106,.013);I.holes.push(new sn(Xt(-.01,-.096,.02,.034,.006).getPoints(8)));let z=new Ge(new ai(I,{depth:.005,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:8}),h);z.name=b+"-flat-pull",z.rotation.x=.11,z.position.z=.016,x.add(z),x.rotation.z=b==="main-zip"?-.18:.16}if(i==="tote"){let w=function(M,I,z){let D=1.035+.08*I,C=M*D*(1-.024*Math.pow(Math.abs(I),8)),R=(I+1)/2,L=I*1.1-.065*(1-M*M)*Math.pow(R,8)+.075*Math.pow(Math.abs(M),8)*Math.pow(1-R,8),N=(Math.exp(-To((M-.56)*9))+Math.exp(-To((M+.56)*9)))*R*R,k=.33-.09*Math.pow(Math.abs(M),6)+.03*(1-I*I)+.023*Math.sin(M*12+I*2)*(1-M*M)*(1-I*I)-.024*N;return st(C,L,z*k)},b=(M,I)=>w(M,I,1),E=(M,I)=>w(M,I,-1);y("front",b,2.15,2.2),y("back",E,2.15,2.2,-1),u(b,E,!0);let x=M=>(I,z)=>{let D=w(I*.994,z*.994,M);return D.z-=M*.018,D};for(let M of[1,-1]){f(new Ge(Ao(x(M),M),d),"tote-inner-wall");let I=(J,V)=>{let q=w(J,.935+(V+1)*.0325,M);return q.z+=M*.006,q};f(new Ge(Ao(I,M,56,4),l),"tote-folded-mouth-hem"),f(Li(Array.from({length:57},(J,V)=>w(V/28-1,.938,M).add(st(0,0,M*.009))),.0022,c),"tote-hem-stitch");let z=w(-.56,.7,M),D=w(.56,.7,M),C=w(-.56,1,M),R=w(.56,1,M),L=M*.34,N=[z.clone().add(st(0,0,M*.009)),C.clone().add(st(0,0,M*.018)),st(-.55,1.48,L+M*.055),st(-.36,1.91,L+M*.045),st(.02,2.02,L),st(.37,1.88,L+M*.02),st(.55,1.47,L+M*.04),R.clone().add(st(0,0,M*.018)),D.clone().add(st(0,0,M*.009))],k=f(Eo(N,.125,.022,m),"tote-sewn-handle");k.userData.attachmentPoints=[z.toArray(),D.toArray()];for(let J of[-.56,.56]){let V=[[-.042,.72],[.042,.91],[-.042,.91],[.042,.72],[-.042,.72],[-.042,.91],[.042,.91],[.042,.72]].map(([q,Y])=>w(J+q,Y,M).add(st(0,0,M*.025)));f(Li(V,.0022,c),"tote-handle-box-stitch")}}u(x(1),x(-1),!0,d);for(let M of[1,-1])for(let I of[-1,1])f(Li(Array.from({length:49},(z,D)=>w(I,D/24-1,M)),.004,l),"tote-side-seam")}if(i==="backpack"){let w=function(z,D,C){let R=1.29-.48*Math.pow(Math.abs(z),2.5)+.014*Math.sin(z*4),L=-1.29+.13*Math.pow(Math.abs(z),6),N=L+(D+1)/2*(R-L),k=z*(.925+.032*Math.sin(D*2.7)+.012*Math.sin(D*6+z))*(1-.055*Math.pow(Math.abs(D),8)),J=Math.pow(Math.abs(z),5)*(1-.75*Math.pow(Math.max(D,0),4))+.72*Math.pow(Math.abs(D),8),V=Math.pow(Math.max(0,(1-z*z)*(1-D*D)),.65),q=Math.exp(-To((D+.78)*5)),Y=Math.exp(-To((D-.65)*6)),ce=.022*Math.sin(z*16+D*4)*(q+Y*.4)*(1-z*z)+.012*Math.sin(D*17-z*4)*Math.pow(Math.abs(z),3)*(1-D*D),de=C===1?.4-.115*J+.105*V+ce:-.31+.08*J-.034*V+ce*.35;return st(k,N,de)},b=(z,D)=>w(z,D,1),E=(z,D)=>w(z,D,-1);y("front",b,1.92,2.6,1,[.5,.69,.87,.52]),y("back",E,1.92,2.6,-1,[.5,.5,.5,.78]),u(b,E,!1,a,.068);for(let z of[b,E])f(Li(Du(z),.0035,l,!0),"backpack-panel-seam");let x=(z,D)=>{let C=-.52-.034*(1-z*z)+.009*Math.sin(z*4),R=-1.18+.065*Math.pow(Math.abs(z),6);return st(z*.78*(1-.055*Math.pow(Math.abs(D),6)),R+(D+1)/2*(C-R),.53-.085*(Math.pow(Math.abs(z),6)+Math.pow(Math.abs(D),6))+.07*Math.pow(Math.max(0,(1-z*z)*(1-D*D)),.6)+.012*Math.sin(z*13+D*3)*(1-z*z)*(1-D*D))},M=(z,D)=>{let C=x(z,D);return C.z=.33,C};y("pocket",x,1.56,.66,1,[.5,.43,.86,.7]),u(x,M,!1,a,.02),f(Li(Du(x),.003,l,!0),"backpack-pocket-seam"),S(Array.from({length:57},(z,D)=>x(D/28-1,.79).add(st(0,0,.006))),"pocket-zip");let I=[];for(let z=0;z<=20;z++)I.push(g(b,E,3,.05-z/20*1.05,-.2,.068).add(st(-.004,0,0)));for(let z=1;z<=56;z++)I.push(g(b,E,2,1-z/28,-.2,.068).add(st(0,.004,0)));for(let z=1;z<=20;z++)I.push(g(b,E,1,1-z/20*1.05,-.2,.068).add(st(.004,0,0)));S(I,"main-zip");for(let z of[-1,1]){let D=E(z*.44,.84),C=E(z*.62,-.85);f(Eo([D,st(z*.53,.69,-.59),st(z*.63,.1,-.78),st(z*.65,-.56,-.7),C],.23,.055,m),"backpack-padded-shoulder-strap");let R=Xt(-.09,-.045,.18,.09,.012);R.holes.push(new sn(Xt(-.069,-.026,.138,.052,.006).getPoints(6)));let L=f(new Ge(new ai(R,{depth:.012,bevelEnabled:!1,curveSegments:6}),h),"backpack-strap-adjuster");L.position.set(z*.64,-.75,-.57),f(new Ge(new _n(.018,.06,.016),h),"backpack-adjuster-bar").position.copy(L.position),f(Eo([st(z*.62,-.85,-.41),st(z*.66,-1.05,-.46),st(z*.64,-1.2,-.42)],.1,.018,m),"backpack-webbing-tail")}f(Eo([st(-.24,1.17,-.1),st(-.2,1.43,-.12),st(0,1.52,-.13),st(.2,1.43,-.12),st(.24,1.17,-.1)],.095,.026,m),"backpack-sewn-carry-loop")}e.updateMatrixWorld(!0);let T=new Yt().setFromObject(e);e.position.y=-(T.max.y+T.min.y)/2;let _=f(new Ge(new at,a),"hidden-print-contract");return _.visible=!1,{type:i,group:e,body:t[0],print:_,glaze:a,surfaces:t,trim:l,tints:n}}function vx(i){let e=Ss.default.get(i),t=96,n=24,s=[],r=[],a=[];for(let l=0;l<=n;l++){let c=l/n*e.printRadius,d=Ss.default.height(i,c)+.004;for(let m=0;m<=t;m++){let p=m/t*Math.PI*2,h=c*Math.cos(p),f=c*Math.sin(p);if(s.push(h,d,f),r.push(.5+h/(2*e.printRadius),.5-f/(2*e.printRadius)),l<n&&m<t){let y=l*(t+1)+m;a.push(y,y+1,y+t+1,y+1,y+t+2,y+t+1)}}}let o=new at;return o.setAttribute("position",new ke(s,3)),o.setAttribute("uv",new ke(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function Mx(i,e){let t=e.profile,n={plate:[[4,8],[10,14]],bowl:[[4,9],[11,17]],basin:[[3,7],[8,14]]}[i],s=[],r=[],a=c=>(t[c+1][1]-t[c][1])/(t[c+1][0]-t[c][0]),o=(c,d,m)=>{if(c===d)return a(c);if(c===m)return a(c-1);let p=a(c-1),h=a(c);return p*h<=0?0:2*p*h/(p+h)};for(let c=0;c<t.length-1;c++){let[d,m]=t[c],[p,h]=t[c+1],f=n.find(([g,u])=>c>=g&&c<u),y=f?Math.min(7,Math.ceil(Math.hypot(p-d,h-m)/.072)):1;for(let g=0;g<y;g++){let u=g/y,S=u*u*(3-2*u),T=f?m+(h-m)*S+(p-d)*(u*(1-u)**2*o(c,...f)-u*u*(1-u)*o(c+1,...f)):m;s.push(new re(d+(p-d)*u,T)),r.push(c+u)}}s.push(new re(...t.at(-1))),r.push(t.length-1);let l=new Ti(s,128);return l.userData.designRows=r,l}function Uu(i="cup"){if(["backpack","tote"].includes(i))return Nu(i);if(["notebook","phonecase","tshirt"].includes(i))return Lu(i);if(Ss.default.textile(i))return Ru(i);if(i==="cup")return{...wu(),type:i,floor:-1.035};if(!Ss.default.data[i])throw Error("\u6A21\u578B\u5C1A\u672A\u63A5\u5165");let e=Ss.default.get(i),t=new Et;t.name="procedural-enamel-"+i+"-v1";let n=new It({color:"#f5f1e6",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12}),s=new It({color:e.rim,roughness:.265,metalness:0,ior:1.48,clearcoat:.55,clearcoatRoughness:.17}),r=new Ge(Mx(i,e),n);r.name=i+"-hollow-body",t.add(r);let a=new Ge(new Yn(e.rimRadius,e.rimTube,16,128),s);a.rotation.x=Math.PI/2,a.position.y=e.rimY,a.name=i+"-rolled-rim",t.add(a);let o=new Ge(new Yn(e.foot,.02,12,96),n);o.rotation.x=Math.PI/2,o.position.y=e.floor+.02,t.add(o);let l=new Ge(vx(i),new It({color:"#fff",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:zt}));return l.name=i+"-interior-print",l.renderOrder=1,t.add(l),{type:i,group:t,body:r,print:l,glaze:n,rim:s,floor:e.floor}}var yt=xi(Pi());var bn=xi(Pi(),1),Sx=["disk","back","wall","belt","ring","wrap","faceFill"],Fu=2*Math.PI,Bu=i=>Math.atan2(Math.sin(i),Math.cos(i));function bx(){let i=8713;function e(l){let c=Float32Array.from({length:l*l},()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296));return(d,m)=>{let p=d*l,h=m*l,f=Math.floor(p),y=Math.floor(h),g=_=>_*_*(3-2*_),u=g(p-f),S=g(h-y),T=(_,w)=>c[(y+w)%l*l+(f+_)%l];return(1-S)*((1-u)*T(0,0)+u*T(1,0))+S*((1-u)*T(0,1)+u*T(1,1))}}let t=e(6),n=e(19),s=e(43),r=128,a=new Uint8Array(r*r*4);for(let l=0;l<r;l++)for(let c=0;c<r;c++){let d=c/r,m=l/r,p=(l*r+c)*4,h=n(d,m),f=t(d,m);a[p]=255*(.5*f+.34*h+.16*s(d,m)),a[p+1]=255*(.6*f+.4*h),a[p+3]=255}let o=new un(a,r,r);return o.wrapS=o.wrapT=Cn,o.magFilter=ut,o.minFilter=on,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Ou(i){let{body:e,print:t,glaze:n,type:s}=i,r=n.clone();e.material=r,t.visible=!1;let a=e.geometry,o=a.parameters.points,l=o.length,c=a.userData.designRows||o.map((x,M)=>M),d=[0];for(let x=1;x<l;x++)d.push(d[x-1]+o[x].distanceTo(o[x-1]));let m=a.attributes.position.count;a.setAttribute("profileRow",new Ft(Float32Array.from({length:m},(x,M)=>c[M%l]),1)),a.setAttribute("profileArc",new Ft(Float32Array.from({length:m},(x,M)=>d[M%l]),1));let p=bn.default.get(s),h=p.rimRadius-p.rimTube,f=o.map((x,M)=>{if(s==="cup"||c[M]<p.profile.length-p.inner.length)return 1;let I=a.attributes.normal,z=I.getY(M),D=I.getZ(M),C=0;for(let R=0;R<96;R++){let L=(R+.5)/96,N=R*2.39996323,k=Math.sqrt(L),J=Math.sqrt(1-L),V=z*J+D*k*Math.sin(N);if(V<=1e-4)continue;let q=Math.max(0,p.rimY-x.y)/V,Y=q*k*Math.cos(N),ce=x.x+q*(D*J-z*k*Math.sin(N));Math.hypot(Y,ce)<h&&C++}return C/96});a.setAttribute("apertureLight",new Ft(Float32Array.from({length:m},(x,M)=>f[M%l]),1));let y=bx(),g={enamelGrain:{value:y},lining:{value:new Xe("#f4f0e4")},enamelInk:{value:null},inkReady:{value:0},zoneMode:{value:0},printRows:{value:new re},fillMetrics:{value:new F},fillWinding:{value:new re},fillWindow:{value:new rt},limits:{value:new rt},inkTransform:{value:new rt},wallAspect:{value:1}},u,S,T,_;function w(x){if(u=bn.default.region(s,x.zone),bn.default.isFill(u)){T=d[c.indexOf(u.rows[0])],_=d[c.indexOf(u.rows[1])]-T;let M=bn.default.fillBasis(u,x),I=bn.default.fillAspect(u,M,_);g.fillMetrics.value.set(T,1/_,I),g.fillWinding.value.set(...M),g.fillWindow.value.set(...bn.default.fillWindow(u,x))}S=(u.yaw||0)+(u.around?x.x*Math.PI/60:0),g.zoneMode.value=Sx.indexOf(u.mode),g.printRows.value.set(...u.rows),g.limits.value.set(u.low||0,u.high||1,S,u.span||u.count||1),g.wallAspect.value=u.mode==="wall"?(u.high-u.low)/(u.radius*u.span):1,bn.default.isFill(u)?g.inkTransform.value.set(x.x/120,-x.y/120,0,1):g.inkTransform.value.set(u.around?0:x.x*3/512,-x.y*3/512,x.rotation*Math.PI/180,x.scale/100)}function b(x){if(!x||x.object!==e)return null;let M=x.face,I=Math.min(c[M.a%l],c[M.b%l],c[M.c%l]);if(I<u.rows[0]||I>=u.rows[1])return null;let{x:z,y:D,z:C}=e.worldToLocal(x.point.clone()),R=Math.hypot(z,C),L=Math.atan2(z,C);if(bn.default.isFill(u)){let V=x.barycoord,Y=(V.x*d[M.a%l]+V.y*d[M.b%l]+V.z*d[M.c%l]-T)/_;if(u.mode==="wrap")return{angle:L,y:Y};let ce=(1-Y)*.5/Math.max(R,1e-4);return{x:z*ce,y:-C*ce}}if(u.mode==="disk"||u.mode==="back")return R<=u.high?{x:.5+z/(2*u.high),y:.5+(u.mode==="back"?C:-C)/(2*u.high)}:null;let k=((u.mode==="ring"?R:D)-u.low)/(u.high-u.low);if(k<0||k>1)return null;let J=Bu(L-S);return u.mode==="wall"&&!u.around&&Math.abs(J)>u.span/2?null:{angle:L,y:k}}r.customProgramCacheKey=()=>"spun-enamel-v4-"+s,r.onBeforeCompile=x=>{Object.assign(x.uniforms,g),x.vertexShader=`attribute float profileRow,profileArc,apertureLight; varying float skyLight; varying vec2 sheetCoord; varying float inkRow; varying vec3 inkPosition;
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
  `)};function E(x,M){if(x.angle===void 0)return(M.x-x.x)*(bn.default.isFill(u)?120:512/3);let I=Bu(M.angle-x.angle);return u.around||u.mode==="wrap"?I*120/Fu:(u.mode==="wall"?I/u.span:I*u.count/Fu)*512/3}return{setPlacement:w,hitUV:b,dragX:E,dragY:(x,M)=>(x.y-M.y)*(bn.default.isFill(u)?120:512/3),setTexture(x){g.enamelInk.value=x,g.inkReady.value=x?1:0},dispose(){y.dispose()},syncFinish(){r.color.copy(n.color),r.roughness=n.roughness,r.clearcoat=n.clearcoat,r.ior=n.ior,r.specularIntensity=n.specularIntensity,r.clearcoatRoughness=n.clearcoatRoughness}}}var jt=xi(Pi(),1);function ku(i){let{type:e,glaze:t,surfaces:n}=i,s={fabricInk:{value:null},fabricReady:{value:0}},r,a=n.map(l=>{l.geometry.attributes.printUv||l.geometry.setAttribute("printUv",l.geometry.attributes.uv);let[c,d]=l.userData.fabricSize,m=Math.min(c,d),p={fabricActive:{value:0},fabricLocalBox:{value:new rt(.5,.5,1,1)},fabricHighlight:{value:0},fabricAspect:{value:new re(c/m,d/m)},fabricMode:{value:0},fabricTransform:{value:new rt(0,0,0,1)},fabricCoverage:{value:new re(.5,.5)},fabricCount:{value:3}};return l.material.customProgramCacheKey=()=>"surface-print-v2-"+jt.default.textile(e),l.material.onBeforeCompile=h=>{Object.assign(h.uniforms,s,p),h.vertexShader=`attribute vec2 printUv; varying vec2 fabricUV;
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
    float weave=dot(sin(threadUV*6.28318),fade)*${jt.default.textile(e)?".006":"0."};diffuseColor.rgb*=${jt.default.textile(e)?".99":"1."}+weave;
    float edgeAt=max(abs(fabricUV.x-.5),abs(fabricUV.y-.5));float edge=smoothstep(.477,.485,edgeAt)*step(edgeAt,.5);diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.12,.28,.31),edge*fabricHighlight*.7);
   `)},{mesh:l,own:p}});function o(l){r=jt.default.region(e,l.zone);let c=jt.default.facePlacements(e,l);for(let{mesh:d,own:m}of a){let p=c[d.userData.fabricFace];if(m.fabricActive.value=p?1:0,!p)continue;let h=jt.default.region(e,p.zone),f=jt.default.isFill(h)?[.5,.5,1,1]:d.userData.localPrintBox||[.5,.5,1,1];m.fabricLocalBox.value.fromArray(f);let[y,g]=d.userData.fabricSize,u=Math.min(y*f[2],g*f[3]);m.fabricAspect.value.set(y*f[2]/u,g*f[3]/u),m.fabricMode.value=h.mode==="fabricBorder"?2:jt.default.isFill(h)?1:0,m.fabricTransform.value.set(p.x/120,-p.y/120,p.rotation*Math.PI/180,p.scale/100),m.fabricCoverage.value.set(jt.default.isFill(h)?jt.default.coveragePercent(p.coverWidth)/200:.5,jt.default.isFill(h)?jt.default.coveragePercent(p.coverHeight)/200:.5),m.fabricCount.value=jt.default.fillCount(h,p.scale)}}return{setPlacement:o,setHighlight(l){for(let{mesh:c,own:d}of a)d.fabricHighlight.value=c.userData.fabricFace===r?.face?l:0},setTexture(l){s.fabricInk.value=l,s.fabricReady.value=l?1:0},syncFinish(){for(let{mesh:l}of a)l.material.color.copy(t.color),l.material.specularIntensity=t.specularIntensity,l.material.roughness=t.roughness,l.material.clearcoat=t.clearcoat;i.trim!==t&&i.trim.color.copy(t.color).multiplyScalar(.88);for(let{material:l,factor:c}of i.tints||[])l.color.copy(t.color).multiplyScalar(c)},hitUV(l){if(l?.object.userData.fabricFace!==r?.face||!(l.uv1||l.uv))return null;let c=l.uv1||l.uv,d=a.find(m=>m.mesh===l.object)?.own.fabricLocalBox.value;return d?{x:(c.x-d.x)/d.z+.5,y:(c.y-d.y)/d.w+.5}:null},dragX:(l,c)=>(c.x-l.x)*120,dragY:(l,c)=>(l.y-c.y)*120,dispose(){}}}function Vu(){let i=null;function e(){if(!i)return;let h=i;i=null,h.token++,clearTimeout(h.timer),clearTimeout(h.highlightTimer),cancelAnimationFrame(h.frame),h.observer?.disconnect(),h.events.abort(),h.texture?.dispose(),h.ink?.dispose(),h.environment?.dispose();let f=new Set,y=new Set,g=new Set;h.scene?.traverse(u=>{u.shadow?.map?.dispose(),u.geometry&&f.add(u.geometry),u.material&&y.add(u.material)});for(let u of f)u.dispose();for(let u of y){for(let S of Object.values(u))S?.isTexture&&S!==h.texture&&g.add(S);u.dispose()}for(let u of g)u.dispose();h.renderer?.dispose(),h.renderer?.forceContextLoss(),h.renderer?.domElement.remove()}function t(h){let f=h.camera.aspect,y=h.cameraState.pitch,g=Math.tan(19*Math.PI/180)/Math.min(1,f/1.1);if(f>1&&(h.host.id==="cup-host"||h.host.closest(".wb-cover-open"))){let S=h.bounds.height*Math.cos(y)+h.bounds.depth*Math.abs(Math.sin(y)),T=1.3*Math.max(h.bounds.width/f,S)/(2*yt.default.get(h.vesselType).camera.distance);g=Math.min(g,T)}let u=2*Math.atan(g)*180/Math.PI;h.camera.fov!==u&&(h.camera.fov=u,h.camera.updateProjectionMatrix())}function n(h){h!==i||h.failed||h.frame||(h.frame=requestAnimationFrame(()=>{if(h.frame=0,h!==i||document.hidden||!h.host.isConnected)return;let f=h.cameraState,y=f.distance*Math.cos(f.pitch);t(h);let g=0;h.camera.position.set(y*Math.sin(f.yaw),g+f.distance*Math.sin(f.pitch),y*Math.cos(f.yaw)),h.camera.lookAt(h.vesselType==="cup"?.27:0,g,0),h.renderer.render(h.scene,h.camera),h.draws++}))}function s(h,f,y=!0){h.cameraState=So({...h.cameraState,...f}),n(h),y&&h.onCamera({...h.cameraState})}function r(h,f){h===i&&(h.failed=!0,h.token++,clearTimeout(h.timer),h.host.dataset.mode="static",h.onStatus("fallback",f),h.renderer?.domElement.remove(),cancelAnimationFrame(h.frame),h.frame=0)}function a(h){let f=i;if(!f)return;if(f.vesselType!==h.canvas){c(f.host,h,f.onCamera,f.onStatus,f.options);return}if(f.failed||(f.draft=h,!f.cup||!f.ink))return;let y=h.vesselPlacement||yt.default.placement(h.canvas),g=h.cupCamera||yt.default.regionCamera(h.canvas,y),u=f.zone&&f.zone!==y.zone;f.zone!==y.zone&&(f.zone=y.zone,f.cameraState=So(g)),f.draft=h,f.ink.setPlacement(y),u&&f.ink.setHighlight&&(clearTimeout(f.highlightTimer),f.ink.setHighlight(1),f.highlightTimer=setTimeout(()=>{f.ink.setHighlight(0),n(f)},700)),f.cup.glaze.color.set(yt.default.glazeHex(h.cupMaterial?.color));let S=h.cupMaterial?.finish==="matte";f.cup.glaze.roughness=S?.57:.3+(yt.default.get(h.canvas).roughness||.23)*.15,f.cup.glaze.ior=1.48,f.cup.glaze.specularIntensity=.78,f.cup.glaze.clearcoat=S?.16:.5,f.cup.glaze.clearcoatRoughness=S?.36:.17,yt.default.textile(h.canvas)&&(f.cup.glaze.roughness=.94,f.cup.glaze.clearcoat=0,f.cup.glaze.specularIntensity=.25),yt.default.get(h.canvas).family==="daily"&&(f.cup.glaze.roughness=h.canvas==="notebook"?.83:.64,f.cup.glaze.clearcoat=0,f.cup.glaze.specularIntensity=.38),f.ink.syncFinish(),n(f);let T=JSON.stringify([h.imageId,h.pattern,...Object.keys(window.PatternEditor.defaults).map(_=>h[_])]);if(!f.error&&T===f.textureKey){f.readyToken===f.token&&f.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E");return}f.error=null,f.textureKey=T,f.token++,f.pending={draft:{...h},token:f.token},f.texture||f.onStatus("loading","\u6B63\u5728\u66F4\u65B0\u5668\u7269\u7EB9\u6837\u2026"),f.drawingTexture||o(f)}async function o(h){h.drawingTexture=!0;try{for(;h===i&&!h.failed&&h.pending;){let{draft:f,token:y}=h.pending;h.pending=null;try{let g=await window.PatternTexture.export(f,{size:512,transparent:!0}),u=URL.createObjectURL(g.blob),S=new Image;try{S.src=u,await S.decode()}finally{URL.revokeObjectURL(u)}if(h!==i||h.failed)return;if(f.imageId!==h.draft.imageId||f.pattern!==h.draft.pattern)continue;let T=new Rt(S);T.colorSpace=Nt,T.wrapS=T.wrapT=Cn,T.flipY=!0,T.anisotropy=Math.min(4,h.renderer.capabilities.getMaxAnisotropy()),T.needsUpdate=!0;let _=h.texture;h.texture=T,h.ink.setTexture(T),_?.dispose(),h.host.dataset.textureRevision=String(++h.textureRevision),h.readyToken=y,n(h),y===h.token&&h.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E")}catch(g){h===i&&y===h.token&&(h.error=g,h.ink.setTexture(null),n(h),h.onStatus("error","\u8D34\u56FE\u8BFB\u53D6\u5931\u8D25\uFF1A"+g.message))}}}finally{h.drawingTexture=!1}}function l(h){let{data:f,width:y,height:g,type:u}=new vo().parse(vu),S=new un(f,y,g,$t,u);S.mapping=fs,S.flipY=!0,S.colorSpace=Hn,S.minFilter=S.magFilter=ut,S.needsUpdate=!0;let T=new ys(h);try{return T.fromEquirectangular(S)}finally{T.dispose(),S.dispose()}}async function c(h,f,y,g,{force:u=!1,interaction:S=()=>"rotate",onPlacement:T=()=>{}}={}){e();let _={host:h,draft:f,vesselType:f.canvas,options:{force:u,interaction:S,onPlacement:T},onCamera:y,onStatus:g,cameraState:So(f.cupCamera||yt.default.get(f.canvas).camera),token:0,frame:0,draws:0,textureRevision:0,events:new AbortController};if(i=_,h.dataset.mode="loading",g("loading","\u6B63\u5728\u5EFA\u7ACB"+yt.default.get(_.vesselType).name+"\u4E09\u7EF4\u9884\u89C8\u2026"),!u&&(f.cupPreviewMode==="static"||navigator.deviceMemory&&navigator.deviceMemory<=2)){r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u8282\u80FD\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u65CB\u8F6C");return}try{_.renderer=new xo({alpha:!0,antialias:!0,powerPreference:"low-power"}),_.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),_.renderer.outputColorSpace=Nt,_.renderer.toneMapping=or,_.renderer.toneMappingExposure=yt.default.textile(f.canvas)?.95:1.16,_.renderer.domElement.setAttribute("aria-label",yt.default.get(f.canvas).name+"\u771F\u5B9E\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C"),h.prepend(_.renderer.domElement),_.scene=new Fs,_.camera=new Ut(38,1,.1,30),_.cup=Uu(f.canvas),_.ink=yt.default.surface(f.canvas)?ku(_.cup):Ou(_.cup),_.scene.add(_.cup.group);let w=new Yt().setFromObject(_.cup.group),b=w.getSize(new F);_.bounds={width:b.x,height:b.y,depth:b.z},h.dataset.vesselType=_.vesselType,_.environment=l(_.renderer),_.scene.environment=_.environment.texture,_.scene.environmentRotation.y=0,_.scene.environmentIntensity=yt.default.textile(f.canvas)?.48:.86,_.scene.add(new sr(16776180,11709088,.64));let E=new hs(16775924,yt.default.textile(f.canvas)?1.8:2.35);E.position.set(-3.8,5.6,3.1),E.castShadow=!0,E.shadow.mapSize.set(1024,1024),E.shadow.camera.left=-3,E.shadow.camera.right=3,E.shadow.camera.top=3,E.shadow.camera.bottom=-3,E.shadow.camera.near=.5,E.shadow.camera.far=12,E.shadow.bias=yt.default.textile(f.canvas)?1e-4:-2e-4,E.shadow.normalBias=yt.default.textile(f.canvas)?.012:.025,E.shadow.radius=10,_.scene.add(E),_.renderer.shadowMap.enabled=!0,_.renderer.shadowMap.type=Ai,_.renderer.shadowMap.autoUpdate=!1,_.renderer.shadowMap.needsUpdate=!0,_.cup.group.traverse(ie=>{ie.isMesh&&(ie.castShadow=ie!==_.cup.print&&!ie.userData.noShadow,ie.receiveShadow=ie!==_.cup.handle&&ie.name!=="enamel-handle-joint"&&!ie.userData.fabricFace)});let x=new hs(16776437,.46);x.position.set(3.6,2.3,1.9),_.scene.add(x);let M=document.createElement("canvas");M.width=M.height=128;let I=M.getContext("2d"),z=I.createRadialGradient(64,64,0,64,64,64);z.addColorStop(0,"rgba(43,38,34,.36)"),z.addColorStop(.47,"rgba(43,38,34,.27)"),z.addColorStop(.64,"rgba(43,38,34,.065)"),z.addColorStop(1,"rgba(43,38,34,0)"),I.fillStyle=z,I.fillRect(0,0,128,128);let D=(yt.default.get(_.vesselType).foot||.905)*3.55,C=new Ge(new oi(D,D),new bi({map:new Gs(M),transparent:!0,depthWrite:!1,toneMapped:!1}));C.rotation.x=-Math.PI/2,C.position.y=w.min.y-.004,_.scene.add(C);let R=new Ge(new oi(8,8),new er({opacity:yt.default.textile(_.vesselType)?.018:.047,depthWrite:!1}));R.rotation.x=-Math.PI/2,R.position.y=w.min.y-.002,R.receiveShadow=!0,_.scene.add(R),_.floor=[C,R];let L=()=>{let ie=h.clientWidth,Ae=h.clientHeight;!ie||!Ae||(_.renderer.setSize(ie,Ae,!1),_.camera.aspect=ie/Ae,_.camera.fov=2*Math.atan(Math.tan(19*Math.PI/180)/Math.min(1,_.camera.aspect/1.1))*180/Math.PI,_.camera.updateProjectionMatrix(),n(_))};_.observer=new ResizeObserver(L),_.observer.observe(h),L();let N=new Map,k=0,J=()=>{let ie=[...N.values()];return ie.length===2?Math.hypot(ie[0].x-ie[1].x,ie[0].y-ie[1].y):0},V=_.renderer.domElement,q={signal:_.events.signal},Y=null,ce=null,de=null,Ke=null,Ye=null,tt=new ar,$=ie=>{let Ae=V.getBoundingClientRect();tt.setFromCamera(new re((ie.clientX-Ae.left)/Ae.width*2-1,-(ie.clientY-Ae.top)/Ae.height*2+1),_.camera);let je=_.cup.group.children.filter(Q=>Q.visible&&Q.isMesh);return _.ink.hitUV(tt.intersectObjects(je,!1)[0])},te=()=>{if(!Y)return;ce={...Y.current},de=N.size===2?bs.default.pair([...N.values()]):null;let ie=[...N.values()][0];Ke=ie?$({clientX:ie.x,clientY:ie.y}):null};V.addEventListener("pointerdown",ie=>{if(!(N.size>=2)){if(!N.size&&(Ye={..._.cameraState},S()==="place")){let Ae={..._.draft.vesselPlacement};Y={original:Ae,current:{...Ae},changed:!1}}N.set(ie.pointerId,{x:ie.clientX,y:ie.clientY}),V.setPointerCapture(ie.pointerId),k=J(),te(),ie.preventDefault()}},q),V.addEventListener("pointermove",ie=>{let Ae=N.get(ie.pointerId);if(Ae){if(N.set(ie.pointerId,{x:ie.clientX,y:ie.clientY}),Y){if(N.size===2&&de)Y.current=bs.default.pinch(ce,de,bs.default.pair([...N.values()]));else{let je=$(ie);if(!je||!Ke)return;let Q=ce.x+_.ink.dragX(Ke,je);Y.current={...ce,x:Math.round(yt.default.region(_.vesselType,_.zone).around||yt.default.region(_.vesselType,_.zone).mode==="wrap"?((Q+60)%120+120)%120-60:bs.default.clamp(Q,-60,60)),y:Math.round(bs.default.clamp(ce.y+_.ink.dragY(Ke,je),-60,60))}}Y.changed=!0,T({vesselPlacement:Y.current},!1);return}if(N.size===1)s(_,{yaw:_.cameraState.yaw-(ie.clientX-Ae.x)*.009,pitch:_.cameraState.pitch+(ie.clientY-Ae.y)*.008},!1);else{let je=J();k&&je&&s(_,{distance:_.cameraState.distance*k/je},!1),k=je}}},q);let _e=ie=>{if(N.has(ie.pointerId)){if(N.delete(ie.pointerId),k=J(),N.size){te();return}Y?.changed&&T({vesselPlacement:Y.current},!0),Y=null,_.onCamera({..._.cameraState})}},Ue=()=>{N.size&&(N.clear(),Y&&T({vesselPlacement:Y.original},!1),Y=null,Ye&&s(_,Ye))};V.addEventListener("pointerup",_e,q),V.addEventListener("pointercancel",Ue,q),V.addEventListener("lostpointercapture",ie=>{N.has(ie.pointerId)&&Ue()},q),V.addEventListener("webglcontextlost",ie=>{ie.preventDefault(),r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u53EF\u91CD\u8BD5\u4E09\u7EF4")},q),h.dataset.mode="three",a(_.draft)}catch(w){_.error=w,r(_,"\u9759\u6001\u9884\u89C8 \xB7 \u4E09\u7EF4\u8D44\u6E90\u6682\u4E0D\u53EF\u7528\uFF0C\u53EF\u91CD\u8BD5")}}function d(h){let f=i;!f?.renderer||f.failed||(h==="reset"&&s(f,yt.default.regionCamera(f.vesselType,f.draft.vesselPlacement)),h==="in"&&s(f,{distance:f.cameraState.distance*.88}),h==="out"&&s(f,{distance:f.cameraState.distance/.88}),h==="left"&&s(f,{yaw:f.cameraState.yaw-.35}),h==="right"&&s(f,{yaw:f.cameraState.yaw+.35}))}function m(){let h=i;return h?{mode:h.failed?"static":h.cup?"three":"loading",camera:{...h.cameraState},modelId:h.cup?.group.uuid,vesselType:h.vesselType,error:h.error?.message,zone:h.zone,glaze:"#"+h.cup?.glaze.color.getHexString(),meshName:h.cup?.group.name,bodyName:h.cup?.body.name,geometryId:h.cup?.body.geometry.uuid,hasHandle:!!h.cup?.handle,bounds:h.bounds,printRegion:h.vesselType==="cup"?mi:{radius:yt.default.get(h.vesselType).printRadius,zone:yt.default.get(h.vesselType).zone},handleHasMap:!!h.cup?.handle?.material.map,inkOnBody:!!(h.ink&&h.texture&&!h.cup.print.visible),bodyHasMap:!!h.cup?.body.material.map,textureRevision:h.textureRevision,draws:h.draws,triangles:h.renderer?.info.render.triangles,textures:h.renderer?.info.memory.textures,geometries:h.renderer?.info.memory.geometries}:null}document.addEventListener("visibilitychange",()=>{document.hidden&&i?(cancelAnimationFrame(i.frame),i.frame=0):i?.renderer&&!i.failed&&n(i)}),window.addEventListener("pagehide",e);async function p(h,{transparent:f=!1}={}){let y=i;if(!y?.ink||y.failed||y.vesselType!==h.canvas)throw Error("\u4E09\u7EF4\u9884\u89C8\u5C1A\u672A\u5C31\u7EEA");a(h),y.ink.setHighlight?.(0);let g=y.token;await new Promise((w,b)=>{let E=performance.now(),x=()=>{if(y!==i||y.failed)return b(Error("\u4E09\u7EF4\u9884\u89C8\u5DF2\u5173\u95ED"));if(y.error)return b(y.error);if(y.readyToken===g)return w();if(performance.now()-E>1e4)return b(Error("\u9884\u89C8\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5"));setTimeout(x,25)};x()});let u=y.renderer.getSize(new re),S=y.camera.aspect,T=y.camera.fov,_=document.createElement("canvas");_.width=_.height=640;try{y.renderer.setSize(640,640,!1),y.camera.aspect=1,y.camera.fov=38,y.camera.updateProjectionMatrix();let w=y.cameraState,b=w.distance*Math.cos(w.pitch),E=0;if(y.camera.position.set(b*Math.sin(w.yaw),E+w.distance*Math.sin(w.pitch),b*Math.cos(w.yaw)),y.camera.lookAt(y.vesselType==="cup"?.27:0,E,0),f){y.floor.forEach(C=>C.visible=!1),y.camera.updateMatrixWorld(),y.cup.group.updateWorldMatrix(!0,!0);let M=new F,I=new pt,z=Math.tan(19*Math.PI/180)*.97,D=0;y.cup.group.traverse(C=>{if(!C.isMesh||!C.visible)return;let R=C.geometry.attributes.position;I.multiplyMatrices(y.camera.matrixWorldInverse,C.matrixWorld);for(let L=0;L<R.count;L++)M.fromBufferAttribute(R,L).applyMatrix4(I),D=Math.max(D,M.z+Math.max(Math.abs(M.x),Math.abs(M.y))/z)}),y.camera.translateZ(D)}y.renderer.render(y.scene,y.camera);let x=_.getContext("2d");f||(x.fillStyle="#f4f3ef",x.fillRect(0,0,640,640)),x.drawImage(y.renderer.domElement,0,0,640,640)}finally{y.floor.forEach(w=>w.visible=!0),y.renderer.setSize(u.x,u.y,!1),y.camera.aspect=S,y.camera.fov=T,y.camera.updateProjectionMatrix(),n(y)}return new Promise((w,b)=>_.toBlob(E=>E?w(E):b(Error("\u65E0\u6CD5\u4FDD\u5B58\u9884\u89C8\u56FE")),"image/png"))}return{mount:c,update:a,control:d,dispose:e,diagnostics:m,capture:p}}window.Cup3D={...Vu(),createViewer:Vu};})();
