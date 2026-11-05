(()=>{var td=Object.create;var Ac=Object.defineProperty;var nd=Object.getOwnPropertyDescriptor;var id=Object.getOwnPropertyNames;var sd=Object.getPrototypeOf,rd=Object.prototype.hasOwnProperty;var Ec=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var ad=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let s of id(e))!rd.call(i,s)&&s!==t&&Ac(i,s,{get:()=>e[s],enumerable:!(n=nd(e,s))||n.enumerable});return i};var xi=(i,e,t)=>(t=i!=null?td(sd(i)):{},ad(e||!i||!i.__esModule?Ac(t,"default",{value:i,enumerable:!0}):t,i));var zc=Uint8Array.fromBase64||(()=>{for(var i=new Uint8Array(128),e=0;e<64;e++)i[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var n=t.length,s=new Uint8Array((n-(t[n-1]=="=")-(t[n-2]=="="))*3/4|0),r=0,a=0;r<n;){var o=i[t.charCodeAt(r++)],l=i[t.charCodeAt(r++)],c=i[t.charCodeAt(r++)],u=i[t.charCodeAt(r++)];s[a++]=o<<2|l>>4,s[a++]=l<<4|c>>2,s[a++]=c<<6|u}return s}})();var zu=Ec((Eu,hc)=>{(function(i,e){let t=e();typeof hc=="object"?hc.exports=t:i.TouchTransform=t})(typeof window<"u"?window:Eu,function(){let i=(s,r,a)=>Math.max(r,Math.min(a,s)),e=s=>{let[r,a]=s;return{x:(r.x+a.x)/2,y:(r.y+a.y)/2,distance:Math.hypot(a.x-r.x,a.y-r.y),angle:Math.atan2(a.y-r.y,a.x-r.x)}},t=(s,r,a)=>({...s,scale:Math.round(i(s.scale*a.distance/Math.max(1,r.distance),40,160)),rotation:Math.round((s.rotation+Math.atan2(Math.sin(a.angle-r.angle),Math.cos(a.angle-r.angle))*180/Math.PI+540)%360-180)});function n(s,{read:r,preview:a,commit:o,drag:l,transform:c=t}){let u=new Map,g,f,m,h,x=()=>{m={...f},h=u.size===1?[...u.values()][0]:e([...u.values()])};s.addEventListener("pointerdown",d=>{u.size>=2||(d.stopPropagation(),d.preventDefault(),u.size||(g={...r()},f={...g}),u.set(d.pointerId,{x:d.clientX,y:d.clientY}),s.setPointerCapture(d.pointerId),x())}),s.addEventListener("pointermove",d=>{u.has(d.pointerId)&&(d.stopPropagation(),u.set(d.pointerId,{x:d.clientX,y:d.clientY}),f=u.size===2?c(m,h,e([...u.values()])):l(m,h,{x:d.clientX,y:d.clientY}),a(f))}),s.addEventListener("pointerup",d=>{u.has(d.pointerId)&&(d.stopPropagation(),u.delete(d.pointerId),u.size?x():JSON.stringify(f)!==JSON.stringify(g)&&o(f))});let p=d=>{u.size&&(d.stopPropagation(),u.clear(),a(g))};s.addEventListener("pointercancel",p),s.addEventListener("lostpointercapture",d=>{u.has(d.pointerId)&&p(d)})}return{pair:e,pinch:t,bind:n,clamp:i}})});var Pi=Ec((Yv,So)=>{(function(i,e){let t=e();typeof So=="object"&&So.exports?So.exports=t:i.Vessels=t})(globalThis,()=>{let i={cup:{profile:[[.001,-1],[.83,-1],[.9,-.995],[.94,-.98],[.96,-.95],[.97,-.9],[1,.93],[1,.98],[.93,.98],[.91,.93],[.88,-.78],[.865,-.815],[.82,-.84],[.001,-.84]],name:"\u642A\u74F7\u676F",short:"\u676F",zone:"\u676F\u8EAB\u6B63\u9762",camera:{yaw:.22,pitch:.46,distance:4.8},rim:"#163d51"},plate:{name:"\u642A\u74F7\u76D8",short:"\u76D8",zone:"\u76D8\u9762\u5185\u4FA7",camera:{yaw:0,pitch:1.02,distance:5.5},rim:"#244f65",rimRadius:1.48,rimY:.2,rimTube:.028,foot:.54,floor:-.25,roughness:.22,printRadius:1.08,inner:[[0,-.1],[.82,-.1],[1.1,-.05],[1.33,.14],[1.48,.2]],profile:[[.001,-.18],[.48,-.18],[.52,-.23],[.6,-.23],[.65,-.18],[.9,-.16],[1.14,-.07],[1.36,.11],[1.48,.16],[1.5,.18],[1.48,.2],[1.33,.14],[1.1,-.05],[.82,-.1],[.001,-.1]]},bowl:{name:"\u642A\u74F7\u7897",short:"\u7897",zone:"\u7897\u5185\u5E95\u4E0E\u5185\u58C1",camera:{yaw:0,pitch:1.1,distance:4.9},rim:"#234c5d",rimRadius:1.16,rimY:.65,rimTube:.036,foot:.4,floor:-.66,roughness:.27,printRadius:.84,inner:[[0,-.525],[.33,-.525],[.49,-.485],[.68,-.333],[.9,-.045],[1.095,.37],[1.145,.625]],profile:[[.001,-.58],[.34,-.58],[.37,-.64],[.43,-.64],[.46,-.55],[.61,-.45],[.78,-.27],[.955,.02],[1.135,.43],[1.19,.63],[1.16,.65],[1.145,.625],[1.095,.37],[.9,-.045],[.68,-.333],[.49,-.485],[.33,-.525],[.001,-.525]]},basin:{name:"\u642A\u74F7\u76C6",short:"\u76C6",zone:"\u76C6\u5185\u5E95",camera:{yaw:0,pitch:.88,distance:6},rim:"#183d52",rimRadius:1.66,rimY:.44,rimTube:.055,foot:1.02,floor:-.53,roughness:.29,printRadius:1.05,inner:[[0,-.39],[.94,-.39],[1.02,-.36],[1.14,-.27],[1.43,.23],[1.48,.35],[1.66,.44]],profile:[[.001,-.48],[.94,-.48],[1.02,-.51],[1.1,-.47],[1.2,-.32],[1.5,.2],[1.55,.32],[1.68,.39],[1.66,.44],[1.48,.35],[1.43,.23],[1.14,-.27],[1.02,-.36],[.94,-.39],[.001,-.39]]}},e={enamel:"\u642A\u74F7\u5668\u76BF",textile:"\u5BB6\u5C45\u5E03\u827A",bags:"\u5305\u888B",daily:"\u968F\u8EAB\u7528\u54C1"};for(let C of Object.values(i))C.family="enamel";Object.assign(i,{cushion:{name:"\u62B1\u6795",short:"\u62B1\u6795",family:"textile",size:[2.25,2.25,.96],camera:{yaw:.5,pitch:.16,distance:5.4}},pillow:{name:"\u6795\u5934",short:"\u6795\u5934",family:"textile",size:[3,1.9,.84],camera:{yaw:.4,pitch:.2,distance:5.7}},duvet:{name:"\u88AB\u5957",short:"\u88AB\u5957",family:"textile",size:[2.7,3.25,.18],camera:{yaw:.26,pitch:.3,distance:6.3}},backpack:{name:"\u4E66\u5305",short:"\u4E66\u5305",family:"bags",size:[2.02,2.61,.88],camera:{yaw:.32,pitch:.12,distance:5.8}},tote:{name:"\u5E06\u5E03\u888B",short:"\u5E06\u5E03\u888B",family:"bags",size:[2.15,2.25,.6],camera:{yaw:.32,pitch:.22,distance:6.2}},notebook:{name:"\u7B14\u8BB0\u672C",short:"\u7B14\u8BB0\u672C",family:"daily",size:[2.04,2.86,.35],camera:{yaw:.42,pitch:.2,distance:5.7}},phonecase:{name:"\u624B\u673A\u58F3",short:"\u624B\u673A\u58F3",family:"daily",size:[1.52,3.06,.25],camera:{yaw:.38,pitch:.16,distance:5.7}},tshirt:{name:"T \u6064",short:"T \u6064",family:"apparel",retired:!0,size:[2.94,3.1,.25],camera:{yaw:.08,pitch:.05,distance:6.3}}});let t=C=>!!i[C]&&!i[C].retired,n=C=>!!i[C]&&i[C].family!=="enamel",s=C=>["textile","bags","apparel"].includes(i[C]?.family),r=C=>C==="notebook"?"\u5C01\u9762\u8272":C==="phonecase"?"\u58F3\u8272":s(C)?"\u5E03\u8272":"\u91C9\u8272",a=C=>C==="notebook"?"\u5C01\u9762\u989C\u8272":C==="phonecase"?"\u58F3\u4F53\u989C\u8272":s(C)?"\u5E03\u6599\u989C\u8272":"\u91C9\u8272",o=C=>({color:"white",finish:n(C)?"matte":"gloss"}),l=C=>JSON.parse(JSON.stringify(C)),c=C=>i[C]||i.cup,u={cup:{body:{label:"\u676F\u8EAB\u6B63\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986},outerFill:{label:"\u676F\u8EAB\u6EE1\u94FA",mode:"wrap",rows:[4,7],radius:.986,repeat:7,pitch:.34},back:{label:"\u676F\u8EAB\u80CC\u9762",mode:"wall",rows:[0,7],low:-.68,high:.68,span:2.04,radius:.986,yaw:Math.PI},band:{label:"\u676F\u53E3\u73AF\u5E26",mode:"belt",rows:[0,7],low:.44,high:.88,count:14,pitch:.23}},plate:{center:{label:"\u76D8\u5FC3",mode:"disk",rows:[10,14],high:1.08},innerFill:{label:"\u76D8\u9762\u6EE1\u94FA",mode:"faceFill",rows:[10,14],repeat:3},rim:{label:"\u76D8\u6CBF\u82B1\u8FB9",mode:"ring",rows:[10,14],low:1.05,high:1.46,count:18},back:{label:"\u76D8\u80CC",mode:"back",rows:[0,8],high:1.3,pitch:-.65}},bowl:{center:{label:"\u7897\u5185",mode:"disk",rows:[11,17],high:.84},outer:{label:"\u7897\u8EAB\u5916\u58C1",mode:"wall",rows:[3,10],low:-.45,high:.56,span:1.2,radius:.85,pitch:.18,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[4,9],radius:.86,repeat:8,pitch:.24},innerFill:{label:"\u7897\u5185\u6EE1\u94FA",mode:"faceFill",rows:[11,17],repeat:3},rim:{label:"\u7897\u53E3\u82B1\u8FB9",mode:"ring",rows:[11,17],low:.86,high:1.12,count:14}},basin:{center:{label:"\u76C6\u5185\u5E95",mode:"disk",rows:[8,14],high:1.05},outer:{label:"\u76C6\u8EAB\u5916\u58C1",mode:"wall",rows:[3,8],low:-.35,high:.31,span:.6,radius:1.32,pitch:.13,around:!0},outerFill:{label:"\u5916\u58C1\u6EE1\u94FA",mode:"wrap",rows:[3,7],radius:1.37,repeat:14,pitch:.21},innerFill:{label:"\u76C6\u5185\u6EE1\u94FA",mode:"faceFill",rows:[8,14],repeat:4},rim:{label:"\u76C6\u53E3\u82B1\u8FB9",mode:"ring",rows:[8,14],low:1.38,high:1.64,count:24}}};for(let C of Object.keys(i).filter(n)){u[C]={};let O=C==="backpack"?["front","pocket","back"]:C==="phonecase"?["front"]:["front","back"];for(let W of O){let Z=C==="notebook"?W==="front"?"\u5C01\u9762":"\u5C01\u5E95":C==="phonecase"?"\u58F3\u80CC":W==="front"?C==="backpack"?"\u4E3B\u5305\u6B63\u9762":"\u6B63\u9762":W==="pocket"?"\u524D\u888B":"\u80CC\u9762";u[C][W]={label:Z,mode:"fabric",face:W,repeat:3,pitch:W==="back"&&["pillow","duvet"].includes(C)?-.32:i[C].camera.pitch,yaw:W==="back"?Math.PI+.15:i[C].camera.yaw},u[C][W+"Fill"]={...u[C][W],label:Z+"\u6EE1\u94FA",mode:"fabricFill"}}C==="duvet"&&(u[C].border={label:"\u6B63\u9762\u8FB9\u7F18",mode:"fabricBorder",face:"front",repeat:6})}let g=(C,O)=>u[C]?.[O]||Object.values(u[C]||u.cup)[0],f=C=>["wrap","faceFill","fabricFill","fabricBorder"].includes(C.mode),m={cup:{body:{label:"\u676F\u8EAB\u6B63\u9762",local:"body"},back:{label:"\u676F\u8EAB\u80CC\u9762",local:"back"},whole:{label:"\u676F\u8EAB\u6574\u5708",local:"outerFill",arrangement:"\u73AF\u7ED5\u94FA\u7EB9"},band:{label:"\u676F\u53E3\u73AF\u5E26",local:"band",arrangement:"\u73AF\u7ED5\u6392\u5E03"}},plate:{center:{label:"\u76D8\u9762",local:"center",full:"innerFill",fullLabel:"\u94FA\u6EE1\u76D8\u9762"},rim:{label:"\u76D8\u6CBF",local:"rim",arrangement:"\u6CBF\u8FB9\u6392\u5E03"},back:{label:"\u76D8\u80CC",local:"back"}},bowl:{center:{label:"\u7897\u5185",local:"center",full:"innerFill",fullLabel:"\u94FA\u6EE1\u5185\u4FA7"},outer:{label:"\u7897\u8EAB\u5916\u58C1",local:"outer",full:"outerFill",fullLabel:"\u94FA\u6EE1\u5916\u58C1"},rim:{label:"\u7897\u53E3\u8FB9\u7F18",local:"rim",arrangement:"\u6CBF\u8FB9\u6392\u5E03"}},basin:{center:{label:"\u76C6\u5185",local:"center",full:"innerFill",fullLabel:"\u94FA\u6EE1\u5185\u4FA7"},outer:{label:"\u76C6\u8EAB\u5916\u58C1",local:"outer",full:"outerFill",fullLabel:"\u94FA\u6EE1\u5916\u58C1"},rim:{label:"\u76C6\u53E3\u8FB9\u7F18",local:"rim",arrangement:"\u6CBF\u8FB9\u6392\u5E03"}}};for(let C of Object.keys(i).filter(n))m[C]=Object.fromEntries(Object.entries(u[C]).filter(([,O])=>O.mode==="fabric"||O.mode==="fabricBorder").map(([O,W])=>[O,{label:W.label,local:O,...W.mode==="fabric"?{full:O+"Fill",fullLabel:O==="pocket"?"\u94FA\u6EE1\u524D\u888B":"\u94FA\u6EE1\u6B64\u9762"}:{arrangement:"\u6CBF\u8FB9\u6392\u5E03"}}]));function h(C,O){let W=Object.entries(m[C]||m.cup),[Z,be]=W.find(([,Te])=>[Te.local,Te.full,...Te.aliases||[]].includes(O?.zone))||W[0];return{id:Z,...be}}let x=(C,O)=>{let W=h(C,O);return W.full||W.local},p=C=>C?.enabled!==!1;function d(C,O){let W=m[C.canvas]?.[O];if(!W)throw Error("\u8BE5\u5668\u578B\u6CA1\u6709\u8FD9\u4E2A\u5370\u82B1\u4F4D\u7F6E");let Z=C.vesselPlacement;if(n(C.canvas)){let j=N(C.canvas,Z),ee=g(C.canvas,W.local).face,ue=g(C.canvas,Z.zone).face,Le={...Z.faces};for(let ie of Object.keys(Le))!j[ie]&&Z.zones?.[Le[ie]]?.enabled!==!1&&delete Le[ie];let pe=ue===ee?Z:j[ee]||Z.zones?.[Le[ee]],ke=pe&&[W.local,W.full].includes(pe.zone)?pe.zone:W.local,nt=I({...C,vesselPlacement:{...Z,faces:Le,independentFaces:!0}},ke);return nt.vesselPlacement.enabled=!!pe&&p(pe),nt}let be=f(g(C.canvas,Z.zone)),Te=be&&W.full?W.full:W.local,He=I(C,Te);return He.vesselPlacement.enabled=p(Z),He}function b(C,O){if(!O)return{vesselPlacement:{...C.vesselPlacement,enabled:!1}};let W=h(C.canvas,C.vesselPlacement),Z=I(C,W.local);return Z.vesselPlacement={...Z.vesselPlacement,...k(C.canvas),zone:W.local,enabled:!0},delete Z.vesselPlacement.coverWidth,delete Z.vesselPlacement.coverHeight,Z.cupCamera=D(C.canvas,Z.vesselPlacement),Z}function T(C,O,W){let Z=h(C.canvas,C.vesselPlacement).id,be={...C,...d(C,O)};return be.vesselPlacement={...be.vesselPlacement,enabled:W},n(C.canvas)&&O!==Z&&Object.assign(be,d(be,Z)),{vesselPlacement:be.vesselPlacement,cupCamera:n(C.canvas)?l(C.cupCamera||D(C.canvas,C.vesselPlacement)):be.cupCamera}}let y=C=>Number.isFinite(C)?Math.max(5,Math.min(100,C)):100;function w(C,O){let W=y(O.coverWidth)/200,Z=y(O.coverHeight)/200,be=C.mode==="wrap",Te=(O.x||0)/120,He=-(O.y||0)/120,j=(ee,ue)=>Math.max(ue-.5,Math.min(.5-ue,ee));return[be?Te:j(Te,W),(be?.5:0)+j(He,Z),W,Z]}function v(C,O){let W=C.vesselPlacement,Z=g(C.canvas,W.zone),be=f(Z),Te=h(C.canvas,W),He=[Te.local,...Te.aliases||[]].includes(W.zone)?W.zone:Te.local,j=O==="local"||!Te.full?He:O==="custom"&&be?W.zone:Te.full,ee=j===W.zone?{vesselPlacement:{...W}}:I(C,j),ue=ee.vesselPlacement;return ue.enabled=p(W),O==="full"&&(ue.coverWidth=100,ue.coverHeight=100),O==="custom"&&!be&&ue.coverWidth==null&&(ue.coverWidth=55,ue.coverHeight=70),ee}function E(C,O=100){let W=C.mode==="wrap"?24:10,Z=Math.max(40,Math.min(160,O));return Math.round(Z<100?C.repeat+(100-Z)*(W-C.repeat)/60:1+(160-Z)*(C.repeat-1)/60)}function _(C,O){let W=C.mode==="wrap"?24:10,Z=Math.max(1,Math.min(W,O));return Z<C.repeat?160-(Z-1)*60/(C.repeat-1):100-(Z-C.repeat)*60/(W-C.repeat)}function M(C,O){let W=E(C,O.scale),Z=(O.rotation||0)*Math.PI/180,be=W*Math.cos(Z),Te=W*Math.sin(Z);return C.mode==="wrap"?[Math.round(be),Math.round(Te)]:[be,Te]}function z(C,O,W){if(C.mode!=="wrap")return 1;let Z=Math.hypot(...O);return Math.max(1,Math.round(Z*W/(2*Math.PI*C.radius)))/Z}let L={white:"#f5f1e6",cream:"#e9ddc6",blue:"#c9dcdf"},P=C=>/^#[0-9a-f]{6}$/i.test(C)?C.toLowerCase():Object.hasOwn(L,C)?L[C]:L.white;function D(C,O){let W=g(C,O?.zone),Z=c(C).camera;return{...Z,pitch:W.pitch??Z.pitch,yaw:(W.yaw??Z.yaw)+(W.around?(O?.x||0)*Math.PI/60:0)}}function I(C,O){if(!u[C.canvas]?.[O])throw Error("\u8BE5\u5668\u578B\u6CA1\u6709\u8FD9\u4E2A\u5370\u82B1\u4F4D\u7F6E");let{zones:W={},faces:Z={},...be}=C.vesselPlacement,Te={...k(C.canvas),...W[O],zone:O},He=g(C.canvas,be.zone).face,j=g(C.canvas,O).face,ee={...Z,[He]:be.zone};if(C.canvas==="backpack"&&!C.vesselPlacement.independentFaces){let ue=["front","pocket"].includes(j)?j:He;["front","pocket"].includes(ue)&&delete ee[ue==="front"?"pocket":"front"]}return{vesselPlacement:{...Te,zones:{...W,[be.zone]:be},...n(C.canvas)?{faces:ee,independentFaces:!!C.vesselPlacement.independentFaces}:{}},cupCamera:D(C.canvas,Te)}}function N(C,O){let W={};for(let[be,Te]of Object.entries(O.faces||{}))O.zones?.[Te]&&p(O.zones[Te])&&g(C,Te).face===be&&(W[be]=O.zones[Te]);let Z=g(C,O.zone).face;return p(O)?W[Z]=O:delete W[Z],C==="backpack"&&!O.independentFaces&&W.front&&W.pocket&&delete W[Z==="pocket"?"front":"pocket"],W}let k=C=>({zone:n(C)?"front":C==="cup"?"body":C==="basin"?"outer":"center",x:0,y:0,scale:100,rotation:0});function H(C){C.vesselStates={...C.vesselStates||{},[C.canvas]:{placement:l(C.vesselPlacement||k(C.canvas)),camera:l(C.cupCamera||c(C.canvas).camera),material:l(C.cupMaterial||o(C.canvas))}}}function J(C,O){if(!t(O))throw Error("\u8BE5\u7269\u54C1\u5DF2\u4E0D\u518D\u63D0\u4F9B");let W=l(C.vesselStates||{});W[C.canvas]={placement:l(C.vesselPlacement||k(C.canvas)),camera:l(C.cupCamera||c(C.canvas).camera),material:l(C.cupMaterial||o(C.canvas))};let Z=W[O]||{placement:k(O),camera:D(O,k(O)),material:o(O)};return{canvas:O,vesselStates:W,vesselPlacement:l(Z.placement),cupCamera:l(Z.camera),cupMaterial:l(Z.material)}}function X(C,O){let W=c(C).inner;for(let Z=1;Z<W.length;Z++)if(O<=W[Z][0]){let[be,Te]=W[Z-1],[He,j]=W[Z];return Te+(j-Te)*(O-be)/(He-be)}return W.at(-1)[1]}return{data:i,get:c,available:t,families:e,surface:n,textile:s,materialShort:r,materialLabel:a,material:o,facePlacements:N,regions:u,region:g,positions:m,position:h,positionPatch:d,positionPrintPatch:T,hasPrint:p,printPatch:b,isFill:f,primaryFill:x,coveragePercent:y,fillWindow:w,coverPatch:v,fillCount:E,fillScale:_,fillBasis:M,fillAspect:z,regionCamera:D,zonePatch:I,glazeHex:P,placement:k,remember:H,switchPatch:J,height:X}})});/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var ah=0,ml=1,oh=2;var Ai=1,lh=2,ds=3,Ct=0,Wt=1,Bt=2,Pn=0,fs=1,gl=2,xl=3,_l=4,ch=5;var Ei=100,hh=101,uh=102,dh=103,fh=104,ph=200,mh=201,gh=202,xh=203,yl=204,vl=205,_h=206,yh=207,vh=208,Mh=209,Sh=210,bh=211,wh=212,Th=213,Ah=214,Xr=0,qr=1,Yr=2,ji=3,Zr=4,Jr=5,$r=6,Kr=7,Ml=0,Eh=1,zh=2,Mn=0,Sl=1,bl=2,wl=3,Tl=4,Al=5,El=6,or=7;var zl=300,di=301,zi=302,ps=303,Aa=304,lr=306,zn=1e3,hn=1001,jr=1002,zt=1003,Ch=1004;var cr=1005;var dt=1006,Ea=1007;var on=1008;var Kt=1009,Cl=1010,Rl=1011,ms=1012,za=1013,Sn=1014,jt=1015,Xt=1016,Ca=1017,Ra=1018,gs=1020,Il=35902,Pl=35899,Ll=1021,Dl=1022,Qt=1023,Cn=1026,fi=1027,Nl=1028,Ia=1029,pi=1030,Pa=1031;var La=1033,hr=33776,ur=33777,dr=33778,fr=33779,Da=35840,Na=35841,Ua=35842,Fa=35843,Oa=36196,Ba=37492,ka=37496,Va=37488,Ga=37489,pr=37490,Ha=37491,Wa=37808,Xa=37809,qa=37810,Ya=37811,Za=37812,Ja=37813,$a=37814,Ka=37815,ja=37816,Qa=37817,eo=37818,to=37819,no=37820,io=37821,so=36492,ro=36494,ao=36495,oo=36283,lo=36284,mr=36285,co=36286;var Ls=2300,Qr=2301,Hr=2302,nl=2303,il=2400,sl=2401,rl=2402;var Rh=3200;var ho=0,Ih=1,Zn="",Nt="srgb",Hn="srgb-linear",Ds="linear",ut="srgb";var Wr=7680;var Ph=519,Lh=512,Dh=513,Nh=514,uo=515,Uh=516,Fh=517,fo=518,Oh=519,Bh=35044;var Ul="300 es",_n=2e3,Qi=2001;function od(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function ld(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Ns(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function kh(){let i=Ns("canvas");return i.style.display="block",i}var Cc={},es=null;function Fl(...i){let e="THREE."+i.shift();es?es("log",e,...i):console.log(e,...i)}function Vh(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Oe(...i){i=Vh(i);let e="THREE."+i.shift();if(es)es("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ge(...i){i=Vh(i);let e="THREE."+i.shift();if(es)es("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Si(...i){let e=i.join(" ");e in Cc||(Cc[e]=!0,Oe(...i))}function Gh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Hh={[Xr]:qr,[Yr]:$r,[Zr]:Kr,[ji]:Jr,[qr]:Xr,[$r]:Yr,[Kr]:Zr,[Jr]:ji},Rn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Lt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Rc=1234567,Cs=Math.PI/180,ts=180/Math.PI;function Ci(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Lt[i&255]+Lt[i>>8&255]+Lt[i>>16&255]+Lt[i>>24&255]+"-"+Lt[e&255]+Lt[e>>8&255]+"-"+Lt[e>>16&15|64]+Lt[e>>24&255]+"-"+Lt[t&63|128]+Lt[t>>8&255]+"-"+Lt[t>>16&255]+Lt[t>>24&255]+Lt[n&255]+Lt[n>>8&255]+Lt[n>>16&255]+Lt[n>>24&255]).toLowerCase()}function $e(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function cd(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function hd(i,e,t){return i!==e?(t-i)/(e-i):0}function Rs(i,e,t){return(1-t)*i+t*e}function ud(i,e,t,n){return Rs(i,e,1-Math.exp(-t*n))}function dd(i,e=1){return e-Math.abs(Ol(i,e*2)-e)}function fd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function pd(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function md(i,e){return i+Math.floor(Math.random()*(e-i+1))}function gd(i,e){return i+Math.random()*(e-i)}function xd(i){return i*(.5-Math.random())}function _d(i){i!==void 0&&(Rc=i);let e=Rc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function yd(i){return i*Cs}function vd(i){return i*ts}function Md(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Sd(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function bd(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wd(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),u=a((e+n)/2),g=r((e-n)/2),f=a((e-n)/2),m=r((n-e)/2),h=a((n-e)/2);switch(s){case"XYX":i.set(o*u,l*g,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*g,o*c);break;case"ZXZ":i.set(l*g,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*h,l*m,o*c);break;case"YXY":i.set(l*m,o*u,l*h,o*c);break;case"ZYZ":i.set(l*h,l*m,o*u,o*c);break;default:Oe("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function $i(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Gt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var po={DEG2RAD:Cs,RAD2DEG:ts,generateUUID:Ci,clamp:$e,euclideanModulo:Ol,mapLinear:cd,inverseLerp:hd,lerp:Rs,damp:ud,pingpong:dd,smoothstep:fd,smootherstep:pd,randInt:md,randFloat:gd,randFloatSpread:xd,seededRandom:_d,degToRad:yd,radToDeg:vd,isPowerOfTwo:Md,ceilPowerOfTwo:Sd,floorPowerOfTwo:bd,setQuaternionFromProperEuler:wd,normalize:Gt,denormalize:$i},Wl=class Wl{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Wl.prototype.isVector2=!0;var ce=Wl,In=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],u=n[s+2],g=n[s+3],f=r[a+0],m=r[a+1],h=r[a+2],x=r[a+3];if(g!==x||l!==f||c!==m||u!==h){let p=l*f+c*m+u*h+g*x;p<0&&(f=-f,m=-m,h=-h,x=-x,p=-p);let d=1-o;if(p<.9995){let b=Math.acos(p),T=Math.sin(b);d=Math.sin(d*b)/T,o=Math.sin(o*b)/T,l=l*d+f*o,c=c*d+m*o,u=u*d+h*o,g=g*d+x*o}else{l=l*d+f*o,c=c*d+m*o,u=u*d+h*o,g=g*d+x*o;let b=1/Math.sqrt(l*l+c*c+u*u+g*g);l*=b,c*=b,u*=b,g*=b}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=g}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],u=n[s+3],g=r[a],f=r[a+1],m=r[a+2],h=r[a+3];return e[t]=o*h+u*g+l*m-c*f,e[t+1]=l*h+u*f+c*g-o*m,e[t+2]=c*h+u*m+o*f-l*g,e[t+3]=u*h-o*g-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(s/2),g=o(r/2),f=l(n/2),m=l(s/2),h=l(r/2);switch(a){case"XYZ":this._x=f*u*g+c*m*h,this._y=c*m*g-f*u*h,this._z=c*u*h+f*m*g,this._w=c*u*g-f*m*h;break;case"YXZ":this._x=f*u*g+c*m*h,this._y=c*m*g-f*u*h,this._z=c*u*h-f*m*g,this._w=c*u*g+f*m*h;break;case"ZXY":this._x=f*u*g-c*m*h,this._y=c*m*g+f*u*h,this._z=c*u*h+f*m*g,this._w=c*u*g-f*m*h;break;case"ZYX":this._x=f*u*g-c*m*h,this._y=c*m*g+f*u*h,this._z=c*u*h-f*m*g,this._w=c*u*g+f*m*h;break;case"YZX":this._x=f*u*g+c*m*h,this._y=c*m*g+f*u*h,this._z=c*u*h-f*m*g,this._w=c*u*g-f*m*h;break;case"XZY":this._x=f*u*g-c*m*h,this._y=c*m*g-f*u*h,this._z=c*u*h+f*m*g,this._w=c*u*g+f*m*h;break;default:Oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],g=t[10],f=n+o+g;if(f>0){let m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(a-s)*m}else if(n>o&&n>g){let m=2*Math.sqrt(1+n-o-g);this._w=(u-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+c)/m}else if(o>g){let m=2*Math.sqrt(1+o-n-g);this._w=(r-c)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+u)/m}else{let m=2*Math.sqrt(1+g-n-o);this._w=(a-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($e(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+s*c-r*l,this._y=s*u+a*l+r*o-n*c,this._z=r*u+a*c+n*l-s*o,this._w=a*u-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Xl=class Xl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ic.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ic.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),u=2*(o*t-r*s),g=2*(r*n-a*t);return this.x=t+l*c+a*g-o*u,this.y=n+l*u+o*c-r*g,this.z=s+l*g+r*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Po.copy(this).projectOnVector(e),this.sub(Po)}reflect(e){return this.sub(Po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos($e(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Xl.prototype.isVector3=!0;var F=Xl,Po=new F,Ic=new In,ql=class ql{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let u=this.elements;return u[0]=e,u[1]=s,u[2]=o,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],g=n[7],f=n[2],m=n[5],h=n[8],x=s[0],p=s[3],d=s[6],b=s[1],T=s[4],y=s[7],w=s[2],v=s[5],E=s[8];return r[0]=a*x+o*b+l*w,r[3]=a*p+o*T+l*v,r[6]=a*d+o*y+l*E,r[1]=c*x+u*b+g*w,r[4]=c*p+u*T+g*v,r[7]=c*d+u*y+g*E,r[2]=f*x+m*b+h*w,r[5]=f*p+m*T+h*v,r[8]=f*d+m*y+h*E,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*r*u+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],g=u*a-o*c,f=o*l-u*r,m=c*r-a*l,h=t*g+n*f+s*m;if(h===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/h;return e[0]=g*x,e[1]=(s*c-u*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(u*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=m*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Si("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Lo.makeScale(e,t)),this}rotate(e){return Si("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Lo.makeRotation(-e)),this}translate(e,t){return Si("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Lo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ql.prototype.isMatrix3=!0;var qe=ql,Lo=new qe,Pc=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lc=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Td(){let i={enabled:!0,workingColorSpace:Hn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(s.r=Gn(s.r),s.g=Gn(s.g),s.b=Gn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(s.r=Ki(s.r),s.g=Ki(s.g),s.b=Ki(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Ds:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Si("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Si("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hn]:{primaries:e,whitePoint:n,transfer:Ds,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Nt},outputColorSpaceConfig:{drawingBufferColorSpace:Nt}},[Nt]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:Pc,fromXYZ:Lc,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Nt}}}),i}var tt=Td();function Gn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ki(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Fi,ea=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Fi===void 0&&(Fi=Ns("canvas")),Fi.width=e.width,Fi.height=e.height;let s=Fi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Fi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ns("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Gn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gn(t[n]/255)*255):t[n]=Gn(t[n]);return{data:t,width:e.width,height:e.height}}else return Oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Ad=0,ns=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=Ci(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Do(s[a].image)):r.push(Do(s[a]))}else r=Do(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Do(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?ea.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Oe("Texture: Unable to serialize Texture."),{})}var Ed=0,No=new F,Rt=class i extends Rn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=hn,s=hn,r=dt,a=on,o=Qt,l=Kt,c=i.DEFAULT_ANISOTROPY,u=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ed++}),this.uuid=Ci(),this.name="",this.source=new ns(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ce(0,0),this.repeat=new ce(1,1),this.center=new ce(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(No).x}get height(){return this.source.getSize(No).y}get depth(){return this.source.getSize(No).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Oe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==zl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case zn:e.x=e.x-Math.floor(e.x);break;case hn:e.x=e.x<0?0:1;break;case jr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case zn:e.y=e.y-Math.floor(e.y);break;case hn:e.y=e.y<0?0:1;break;case jr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Rt.DEFAULT_IMAGE=null;Rt.DEFAULT_MAPPING=zl;Rt.DEFAULT_ANISOTROPY=1;var Yl=class Yl{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],u=l[4],g=l[8],f=l[1],m=l[5],h=l[9],x=l[2],p=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(g-x)<.01&&Math.abs(h-p)<.01){if(Math.abs(u+f)<.1&&Math.abs(g+x)<.1&&Math.abs(h+p)<.1&&Math.abs(c+m+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let T=(c+1)/2,y=(m+1)/2,w=(d+1)/2,v=(u+f)/4,E=(g+x)/4,_=(h+p)/4;return T>y&&T>w?T<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(T),s=v/n,r=E/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=v/s,r=_/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=E/r,s=_/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-h)*(p-h)+(g-x)*(g-x)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(p-h)/b,this.y=(g-x)/b,this.z=(f-u)/b,this.w=Math.acos((c+m+d-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=$e(this.x,e.x,t.x),this.y=$e(this.y,e.y,t.y),this.z=$e(this.z,e.z,t.z),this.w=$e(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=$e(this.x,e,t),this.y=$e(this.y,e,t),this.z=$e(this.z,e,t),this.w=$e(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar($e(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Yl.prototype.isVector4=!0;var ot=Yl,ta=class extends Rn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t),this.textures=[];let s={width:e,height:t,depth:n.depth},r=new Rt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:dt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ns(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends ta{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Us=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var na=class extends Rt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=zt,this.minFilter=zt,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Ta=class Ta{constructor(e,t,n,s,r,a,o,l,c,u,g,f,m,h,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,u,g,f,m,h,x,p)}set(e,t,n,s,r,a,o,l,c,u,g,f,m,h,x,p){let d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=g,d[14]=f,d[3]=m,d[7]=h,d[11]=x,d[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ta().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Oi.setFromMatrixColumn(e,0).length(),r=1/Oi.setFromMatrixColumn(e,1).length(),a=1/Oi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),g=Math.sin(r);if(e.order==="XYZ"){let f=a*u,m=a*g,h=o*u,x=o*g;t[0]=l*u,t[4]=-l*g,t[8]=c,t[1]=m+h*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=h+m*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*u,m=l*g,h=c*u,x=c*g;t[0]=f+x*o,t[4]=h*o-m,t[8]=a*c,t[1]=a*g,t[5]=a*u,t[9]=-o,t[2]=m*o-h,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*u,m=l*g,h=c*u,x=c*g;t[0]=f-x*o,t[4]=-a*g,t[8]=h+m*o,t[1]=m+h*o,t[5]=a*u,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*u,m=a*g,h=o*u,x=o*g;t[0]=l*u,t[4]=h*c-m,t[8]=f*c+x,t[1]=l*g,t[5]=x*c+f,t[9]=m*c-h,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,m=a*c,h=o*l,x=o*c;t[0]=l*u,t[4]=x-f*g,t[8]=h*g+m,t[1]=g,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*g+h,t[10]=f-x*g}else if(e.order==="XZY"){let f=a*l,m=a*c,h=o*l,x=o*c;t[0]=l*u,t[4]=-g,t[8]=c*u,t[1]=f*g+x,t[5]=a*u,t[9]=m*g-h,t[2]=h*g-m,t[6]=o*u,t[10]=x*g+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Cd)}lookAt(e,t,n){let s=this.elements;return en.subVectors(e,t),en.lengthSq()===0&&(en.z=1),en.normalize(),Qn.crossVectors(n,en),Qn.lengthSq()===0&&(Math.abs(n.z)===1?en.x+=1e-4:en.z+=1e-4,en.normalize(),Qn.crossVectors(n,en)),Qn.normalize(),Sr.crossVectors(en,Qn),s[0]=Qn.x,s[4]=Sr.x,s[8]=en.x,s[1]=Qn.y,s[5]=Sr.y,s[9]=en.y,s[2]=Qn.z,s[6]=Sr.z,s[10]=en.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],g=n[5],f=n[9],m=n[13],h=n[2],x=n[6],p=n[10],d=n[14],b=n[3],T=n[7],y=n[11],w=n[15],v=s[0],E=s[4],_=s[8],M=s[12],z=s[1],L=s[5],P=s[9],D=s[13],I=s[2],N=s[6],k=s[10],H=s[14],J=s[3],X=s[7],C=s[11],O=s[15];return r[0]=a*v+o*z+l*I+c*J,r[4]=a*E+o*L+l*N+c*X,r[8]=a*_+o*P+l*k+c*C,r[12]=a*M+o*D+l*H+c*O,r[1]=u*v+g*z+f*I+m*J,r[5]=u*E+g*L+f*N+m*X,r[9]=u*_+g*P+f*k+m*C,r[13]=u*M+g*D+f*H+m*O,r[2]=h*v+x*z+p*I+d*J,r[6]=h*E+x*L+p*N+d*X,r[10]=h*_+x*P+p*k+d*C,r[14]=h*M+x*D+p*H+d*O,r[3]=b*v+T*z+y*I+w*J,r[7]=b*E+T*L+y*N+w*X,r[11]=b*_+T*P+y*k+w*C,r[15]=b*M+T*D+y*H+w*O,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],g=e[6],f=e[10],m=e[14],h=e[3],x=e[7],p=e[11],d=e[15],b=l*m-c*f,T=o*m-c*g,y=o*f-l*g,w=a*m-c*u,v=a*f-l*u,E=a*g-o*u;return t*(x*b-p*T+d*y)-n*(h*b-p*w+d*v)+s*(h*T-x*w+d*E)-r*(h*y-x*v+p*E)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10];return t*(a*u-o*c)-n*(r*u-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],g=e[9],f=e[10],m=e[11],h=e[12],x=e[13],p=e[14],d=e[15],b=t*o-n*a,T=t*l-s*a,y=t*c-r*a,w=n*l-s*o,v=n*c-r*o,E=s*c-r*l,_=u*x-g*h,M=u*p-f*h,z=u*d-m*h,L=g*p-f*x,P=g*d-m*x,D=f*d-m*p,I=b*D-T*P+y*L+w*z-v*M+E*_;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let N=1/I;return e[0]=(o*D-l*P+c*L)*N,e[1]=(s*P-n*D-r*L)*N,e[2]=(x*E-p*v+d*w)*N,e[3]=(f*v-g*E-m*w)*N,e[4]=(l*z-a*D-c*M)*N,e[5]=(t*D-s*z+r*M)*N,e[6]=(p*y-h*E-d*T)*N,e[7]=(u*E-f*y+m*T)*N,e[8]=(a*P-o*z+c*_)*N,e[9]=(n*z-t*P-r*_)*N,e[10]=(h*v-x*y+d*b)*N,e[11]=(g*y-u*v-m*b)*N,e[12]=(o*M-a*L-l*_)*N,e[13]=(t*L-n*M+s*_)*N,e[14]=(x*T-h*w-p*b)*N,e[15]=(u*w-g*T+f*b)*N,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,u=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,u*o+n,u*l-s*a,0,c*l-s*o,u*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,u=a+a,g=o+o,f=r*c,m=r*u,h=r*g,x=a*u,p=a*g,d=o*g,b=l*c,T=l*u,y=l*g,w=n.x,v=n.y,E=n.z;return s[0]=(1-(x+d))*w,s[1]=(m+y)*w,s[2]=(h-T)*w,s[3]=0,s[4]=(m-y)*v,s[5]=(1-(f+d))*v,s[6]=(p+b)*v,s[7]=0,s[8]=(h+T)*E,s[9]=(p-b)*E,s[10]=(1-(f+x))*E,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=Oi.set(s[0],s[1],s[2]).length(),o=Oi.set(s[4],s[5],s[6]).length(),l=Oi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),pn.copy(this);let c=1/a,u=1/o,g=1/l;return pn.elements[0]*=c,pn.elements[1]*=c,pn.elements[2]*=c,pn.elements[4]*=u,pn.elements[5]*=u,pn.elements[6]*=u,pn.elements[8]*=g,pn.elements[9]*=g,pn.elements[10]*=g,t.setFromRotationMatrix(pn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=_n,l=!1){let c=this.elements,u=2*r/(t-e),g=2*r/(n-s),f=(t+e)/(t-e),m=(n+s)/(n-s),h,x;if(l)h=r/(a-r),x=a*r/(a-r);else if(o===_n)h=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===Qi)h=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=g,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=h,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=_n,l=!1){let c=this.elements,u=2/(t-e),g=2/(n-s),f=-(t+e)/(t-e),m=-(n+s)/(n-s),h,x;if(l)h=1/(a-r),x=a/(a-r);else if(o===_n)h=-2/(a-r),x=-(a+r)/(a-r);else if(o===Qi)h=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=g,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=h,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Ta.prototype.isMatrix4=!0;var mt=Ta,Oi=new F,pn=new mt,zd=new F(0,0,0),Cd=new F(1,1,1),Qn=new F,Sr=new F,en=new F,Dc=new mt,Nc=new In,Wn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],u=s[9],g=s[2],f=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin($e(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$e(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-g,r),this._z=0);break;case"ZXY":this._x=Math.asin($e(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-g,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-$e(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($e(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-g,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-$e(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:Oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Dc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nc.setFromEuler(this),this.setFromQuaternion(Nc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var is=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Rd=0,Uc=new F,Bi=new In,Nn=new mt,br=new F,ws=new F,Id=new F,Pd=new In,Fc=new F(1,0,0),Oc=new F(0,1,0),Bc=new F(0,0,1),kc={type:"added"},Ld={type:"removed"},ki={type:"childadded",child:null},Uo={type:"childremoved",child:null},Ot=class i extends Rn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=Ci(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new Wn,n=new In,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new qe}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new is,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.multiply(Bi),this}rotateOnWorldAxis(e,t){return Bi.setFromAxisAngle(e,t),this.quaternion.premultiply(Bi),this}rotateX(e){return this.rotateOnAxis(Fc,e)}rotateY(e){return this.rotateOnAxis(Oc,e)}rotateZ(e){return this.rotateOnAxis(Bc,e)}translateOnAxis(e,t){return Uc.copy(e).applyQuaternion(this.quaternion),this.position.add(Uc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fc,e)}translateY(e){return this.translateOnAxis(Oc,e)}translateZ(e){return this.translateOnAxis(Bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Nn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?br.copy(e):br.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Nn.lookAt(ws,br,this.up):Nn.lookAt(br,ws,this.up),this.quaternion.setFromRotationMatrix(Nn),s&&(Nn.extractRotation(s.matrixWorld),Bi.setFromRotationMatrix(Nn),this.quaternion.premultiply(Bi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kc),ki.child=e,this.dispatchEvent(ki),ki.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Ld),Uo.child=e,this.dispatchEvent(Uo),Uo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Nn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Nn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Nn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kc),ki.child=e,this.dispatchEvent(ki),ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,e,Id),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Pd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let g=l[c];r(e.shapes,g)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),g=a(e.shapes),f=a(e.skeletons),m=a(e.animations),h=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),g.length>0&&(n.shapes=g),f.length>0&&(n.skeletons=f),m.length>0&&(n.animations=m),h.length>0&&(n.nodes=h)}return n.object=s,n;function a(o){let l=[];for(let c in o){let u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ot.DEFAULT_UP=new F(0,1,0);Ot.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ot.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Et=class extends Ot{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dd={type:"move"},ss=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Et,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Et,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Et,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,n),d=this._getHandJoint(c,x);p!==null&&(d.matrix.fromArray(p.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=p.radius),d.visible=p!==null}let u=c.joints["index-finger-tip"],g=c.joints["thumb-tip"],f=u.position.distanceTo(g.position),m=.02,h=.005;c.inputState.pinching&&f>m+h?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-h&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Dd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Et;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Wh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},wr={h:0,s:0,l:0};function Fo(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ze=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Nt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=tt.workingColorSpace){if(e=Ol(e,1),t=$e(t,0,1),n=$e(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Fo(a,r,e+1/3),this.g=Fo(a,r,e),this.b=Fo(a,r,e-1/3)}return tt.colorSpaceToWorking(this,s),this}setStyle(e,t=Nt){function n(r){r!==void 0&&parseFloat(r)<1&&Oe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Oe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Oe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Nt){let n=Wh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Oe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gn(e.r),this.g=Gn(e.g),this.b=Gn(e.b),this}copyLinearToSRGB(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Nt){return tt.workingToColorSpace(Dt.copy(this),e),Math.round($e(Dt.r*255,0,255))*65536+Math.round($e(Dt.g*255,0,255))*256+Math.round($e(Dt.b*255,0,255))}getHexString(e=Nt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.workingToColorSpace(Dt.copy(this),t);let n=Dt.r,s=Dt.g,r=Dt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,u=(o+a)/2;if(o===a)l=0,c=0;else{let g=a-o;switch(c=u<=.5?g/(a+o):g/(2-a-o),a){case n:l=(s-r)/g+(s<r?6:0);break;case s:l=(r-n)/g+2;break;case r:l=(n-s)/g+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=tt.workingColorSpace){return tt.workingToColorSpace(Dt.copy(this),t),e.r=Dt.r,e.g=Dt.g,e.b=Dt.b,e}getStyle(e=Nt){tt.workingToColorSpace(Dt.copy(this),e);let t=Dt.r,n=Dt.g,s=Dt.b;return e!==Nt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ei),this.setHSL(ei.h+e,ei.s+t,ei.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(wr);let n=Rs(ei.h,wr.h,t),s=Rs(ei.s,wr.s,t),r=Rs(ei.l,wr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Dt=new Ze;Ze.NAMES=Wh;var Fs=class extends Ot{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},mn=new F,Un=new F,Oo=new F,Fn=new F,Vi=new F,Gi=new F,Vc=new F,Bo=new F,ko=new F,Vo=new F,Go=new ot,Ho=new ot,Wo=new ot,si=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),mn.subVectors(e,t),s.cross(mn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){mn.subVectors(s,t),Un.subVectors(n,t),Oo.subVectors(e,t);let a=mn.dot(mn),o=mn.dot(Un),l=mn.dot(Oo),c=Un.dot(Un),u=Un.dot(Oo),g=a*c-o*o;if(g===0)return r.set(0,0,0),null;let f=1/g,m=(c*l-o*u)*f,h=(a*u-o*l)*f;return r.set(1-m-h,h,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(a,Fn.y),l.addScaledVector(o,Fn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Go.setScalar(0),Ho.setScalar(0),Wo.setScalar(0),Go.fromBufferAttribute(e,t),Ho.fromBufferAttribute(e,n),Wo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Go,r.x),a.addScaledVector(Ho,r.y),a.addScaledVector(Wo,r.z),a}static isFrontFacing(e,t,n,s){return mn.subVectors(n,t),Un.subVectors(e,t),mn.cross(Un).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return mn.subVectors(this.c,this.b),Un.subVectors(this.a,this.b),mn.cross(Un).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Vi.subVectors(s,n),Gi.subVectors(r,n),Bo.subVectors(e,n);let l=Vi.dot(Bo),c=Gi.dot(Bo);if(l<=0&&c<=0)return t.copy(n);ko.subVectors(e,s);let u=Vi.dot(ko),g=Gi.dot(ko);if(u>=0&&g<=u)return t.copy(s);let f=l*g-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Vi,a);Vo.subVectors(e,r);let m=Vi.dot(Vo),h=Gi.dot(Vo);if(h>=0&&m<=h)return t.copy(r);let x=m*c-l*h;if(x<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Gi,o);let p=u*h-m*g;if(p<=0&&g-u>=0&&m-h>=0)return Vc.subVectors(r,s),o=(g-u)/(g-u+(m-h)),t.copy(s).addScaledVector(Vc,o);let d=1/(p+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(Vi,a).addScaledVector(Gi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$t=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,gn):gn.fromBufferAttribute(r,a),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tr.copy(n.boundingBox)),Tr.applyMatrix4(e.matrixWorld),this.union(Tr)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ts),Ar.subVectors(this.max,Ts),Hi.subVectors(e.a,Ts),Wi.subVectors(e.b,Ts),Xi.subVectors(e.c,Ts),ti.subVectors(Wi,Hi),ni.subVectors(Xi,Wi),_i.subVectors(Hi,Xi);let t=[0,-ti.z,ti.y,0,-ni.z,ni.y,0,-_i.z,_i.y,ti.z,0,-ti.x,ni.z,0,-ni.x,_i.z,0,-_i.x,-ti.y,ti.x,0,-ni.y,ni.x,0,-_i.y,_i.x,0];return!Xo(t,Hi,Wi,Xi,Ar)||(t=[1,0,0,0,1,0,0,0,1],!Xo(t,Hi,Wi,Xi,Ar))?!1:(Er.crossVectors(ti,ni),t=[Er.x,Er.y,Er.z],Xo(t,Hi,Wi,Xi,Ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(On[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),On[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),On[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),On[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),On[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),On[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),On[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),On[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(On),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},On=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Tr=new $t,Hi=new F,Wi=new F,Xi=new F,ti=new F,ni=new F,_i=new F,Ts=new F,Ar=new F,Er=new F,yi=new F;function Xo(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){yi.fromArray(i,r);let o=s.x*Math.abs(yi.x)+s.y*Math.abs(yi.y)+s.z*Math.abs(yi.z),l=e.dot(yi),c=t.dot(yi),u=n.dot(yi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}var Vn=Nd();function Nd(){let i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){let c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function Ud(i){Math.abs(i)>65504&&Oe("DataUtils.toHalfFloat(): Value out of range."),i=$e(i,-65504,65504),Vn.floatView[0]=i;let e=Vn.uint32View[0],t=e>>23&511;return Vn.baseTable[t]+((e&8388607)>>Vn.shiftTable[t])}function Fd(i){let e=i>>10;return Vn.uint32View[0]=Vn.mantissaTable[Vn.offsetTable[e]+(i&1023)]+Vn.exponentTable[e],Vn.floatView[0]}var ri=class{static toHalfFloat(e){return Ud(e)}static fromHalfFloat(e){return Fd(e)}},bt=new F,zr=new ce,Od=0,Ft=class extends Rn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Od++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Bh,this.updateRanges=[],this.gpuType=jt,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)zr.fromBufferAttribute(this,t),zr.applyMatrix3(e),this.setXY(t,zr.x,zr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix3(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyMatrix4(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.applyNormalMatrix(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)bt.fromBufferAttribute(this,t),bt.transformDirection(e),this.setXYZ(t,bt.x,bt.y,bt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=$i(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Gt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=$i(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=$i(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=$i(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=$i(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Gt(t,this.array),n=Gt(n,this.array),s=Gt(s,this.array),r=Gt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Os=class extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Bs=class extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Be=class extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}},Bd=new $t,As=new F,qo=new F,rs=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Bd.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;As.subVectors(e,this.center);let t=As.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(As,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(qo.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(As.copy(e.center).add(qo)),this.expandByPoint(As.copy(e.center).sub(qo))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},kd=0,cn=new mt,Yo=new Ot,qi=new F,tn=new $t,Es=new $t,At=new F,rt=class i extends Rn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=Ci(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(od(e)?Bs:Os)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return cn.makeRotationFromQuaternion(e),this.applyMatrix4(cn),this}rotateX(e){return cn.makeRotationX(e),this.applyMatrix4(cn),this}rotateY(e){return cn.makeRotationY(e),this.applyMatrix4(cn),this}rotateZ(e){return cn.makeRotationZ(e),this.applyMatrix4(cn),this}translate(e,t,n){return cn.makeTranslation(e,t,n),this.applyMatrix4(cn),this}scale(e,t,n){return cn.makeScale(e,t,n),this.applyMatrix4(cn),this}lookAt(e){return Yo.lookAt(e),Yo.updateMatrix(),this.applyMatrix4(Yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Be(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $t);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];tn.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,tn.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,tn.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(tn.min),this.boundingBox.expandByPoint(tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new rs);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(tn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Es.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(tn.min,Es.min),tn.expandByPoint(At),At.addVectors(tn.max,Es.max),tn.expandByPoint(At)):(tn.expandByPoint(Es.min),tn.expandByPoint(Es.max))}tn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)At.fromBufferAttribute(o,c),l&&(qi.fromBufferAttribute(e,c),At.add(qi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Ft(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let _=0;_<n.count;_++)o[_]=new F,l[_]=new F;let c=new F,u=new F,g=new F,f=new ce,m=new ce,h=new ce,x=new F,p=new F;function d(_,M,z){c.fromBufferAttribute(n,_),u.fromBufferAttribute(n,M),g.fromBufferAttribute(n,z),f.fromBufferAttribute(r,_),m.fromBufferAttribute(r,M),h.fromBufferAttribute(r,z),u.sub(c),g.sub(c),m.sub(f),h.sub(f);let L=1/(m.x*h.y-h.x*m.y);isFinite(L)&&(x.copy(u).multiplyScalar(h.y).addScaledVector(g,-m.y).multiplyScalar(L),p.copy(g).multiplyScalar(m.x).addScaledVector(u,-h.x).multiplyScalar(L),o[_].add(x),o[M].add(x),o[z].add(x),l[_].add(p),l[M].add(p),l[z].add(p))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let _=0,M=b.length;_<M;++_){let z=b[_],L=z.start,P=z.count;for(let D=L,I=L+P;D<I;D+=3)d(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let T=new F,y=new F,w=new F,v=new F;function E(_){w.fromBufferAttribute(s,_),v.copy(w);let M=o[_];T.copy(M),T.sub(w.multiplyScalar(w.dot(M))).normalize(),y.crossVectors(v,M);let L=y.dot(l[_])<0?-1:1;a.setXYZW(_,T.x,T.y,T.z,L)}for(let _=0,M=b.length;_<M;++_){let z=b[_],L=z.start,P=z.count;for(let D=L,I=L+P;D<I;D+=3)E(e.getX(D+0)),E(e.getX(D+1)),E(e.getX(D+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,m=n.count;f<m;f++)n.setXYZ(f,0,0,0);let s=new F,r=new F,a=new F,o=new F,l=new F,c=new F,u=new F,g=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){let h=e.getX(f+0),x=e.getX(f+1),p=e.getX(f+2);s.fromBufferAttribute(t,h),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),o.fromBufferAttribute(n,h),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(h,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let f=0,m=t.count;f<m;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,r),g.subVectors(s,r),u.cross(g),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,u=o.itemSize,g=o.normalized,f=new c.constructor(l.length*u),m=0,h=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?m=l[x]*o.data.stride+o.offset:m=l[x]*u;for(let d=0;d<u;d++)f[h++]=c[m++]}return new Ft(f,u,g)}if(this.index===null)return Oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let u=0,g=c.length;u<g;u++){let f=c[u],m=e(f,n);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let g=0,f=c.length;g<f;g++){let m=c[g];u.push(m.toJSON(e.data))}u.length>0&&(s[l]=u,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let u=s[c];this.setAttribute(c,u.clone(t))}let r=e.morphAttributes;for(let c in r){let u=[],g=r[c];for(let f=0,m=g.length;f<m;f++)u.push(g[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,u=a.length;c<u;c++){let g=a[c];this.addGroup(g.start,g.count,g.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Zo=new F,Vd=new F,Gd=new qe,xn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Zo.subVectors(n,t).cross(Vd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Zo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Gd.getNormalMatrix(e),s=this.coplanarPoint(Zo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},Hd=0,Xn=class extends Rn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hd++}),this.uuid=Ci(),this.name="",this.type="Material",this.blending=fs,this.side=Ct,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yl,this.blendDst=vl,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ze(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ph,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wr,this.stencilZFail=Wr,this.stencilZPass=Wr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Oe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Oe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new xn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ce().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ce().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Bn=new F,Jo=new F,Cr=new F,Rr=new F,ks=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Bn.copy(this.origin).addScaledVector(this.direction,t),Bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Jo.copy(e).add(t).multiplyScalar(.5),Cr.copy(t).sub(e).normalize(),Rr.copy(this.origin).sub(Jo);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Cr),o=Rr.dot(this.direction),l=-Rr.dot(Cr),c=Rr.lengthSq(),u=Math.abs(1-a*a),g,f,m,h;if(u>0)if(g=a*l-o,f=a*o-l,h=r*u,g>=0)if(f>=-h)if(f<=h){let x=1/u;g*=x,f*=x,m=g*(g+a*f+2*o)+f*(a*g+f+2*l)+c}else f=r,g=Math.max(0,-(a*f+o)),m=-g*g+f*(f+2*l)+c;else f=-r,g=Math.max(0,-(a*f+o)),m=-g*g+f*(f+2*l)+c;else f<=-h?(g=Math.max(0,-(-a*r+o)),f=g>0?-r:Math.min(Math.max(-r,-l),r),m=-g*g+f*(f+2*l)+c):f<=h?(g=0,f=Math.min(Math.max(-r,-l),r),m=f*(f+2*l)+c):(g=Math.max(0,-(a*r+o)),f=g>0?r:Math.min(Math.max(-r,-l),r),m=-g*g+f*(f+2*l)+c);else f=a>0?-r:r,g=Math.max(0,-(a*f+o)),m=-g*g+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,g),s&&s.copy(Jo).addScaledVector(Cr,f),m}intersectSphere(e,t){if(e.radius<0)return null;Bn.subVectors(e.center,this.origin);let n=Bn.dot(this.direction),s=Bn.dot(Bn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,u=1/this.direction.y,g=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),u>=0?(r=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(r=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),g>=0?(o=(e.min.z-f.z)*g,l=(e.max.z-f.z)*g):(o=(e.max.z-f.z)*g,l=(e.min.z-f.z)*g),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Bn)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,u=o.z,g=e.x-a.x,f=e.y-a.y,m=e.z-a.z,h=t.x-a.x,x=t.y-a.y,p=t.z-a.z,d=n.x-a.x,b=n.y-a.y,T=n.z-a.z,y=Math.abs(l),w=Math.abs(c),v=Math.abs(u),E,_,M,z,L,P,D,I,N,k,H,J;if(y>=w&&y>=v?(M=l,P=g,N=h,J=d,l>=0?(E=c,_=u,z=f,L=m,D=x,I=p,k=b,H=T):(E=u,_=c,z=m,L=f,D=p,I=x,k=T,H=b)):w>=v?(M=c,P=f,N=x,J=b,c>=0?(E=u,_=l,z=m,L=g,D=p,I=h,k=T,H=d):(E=l,_=u,z=g,L=m,D=h,I=p,k=d,H=T)):(M=u,P=m,N=p,J=T,u>=0?(E=l,_=c,z=g,L=f,D=h,I=x,k=d,H=b):(E=c,_=l,z=f,L=g,D=x,I=h,k=b,H=d)),M===0)return null;let X=E/M,C=_/M,O=1/M,W=z-X*P,Z=L-C*P,be=D-X*N,Te=I-C*N,He=k-X*J,j=H-C*J,ee=He*Te-j*be,ue=W*j-Z*He,Le=be*Z-Te*W;if(s){if(ee<0||ue<0||Le<0)return null}else if((ee<0||ue<0||Le<0)&&(ee>0||ue>0||Le>0))return null;let pe=ee+ue+Le;if(pe===0)return null;let ke=O*(ee*P+ue*N+Le*J);return(pe>0?ke<0:ke>0)?null:this.at(ke/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},bi=class extends Xn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ml,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Gc=new mt,vi=new ks,Ir=new rs,Hc=new F,Pr=new F,Lr=new F,Dr=new F,$o=new F,Nr=new F,Wc=new F,Ur=new F,Xe=class extends Ot{constructor(e=new rt,t=new bi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Nr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let u=o[l],g=r[l];u!==0&&($o.fromBufferAttribute(g,e),a?Nr.addScaledVector($o,u):Nr.addScaledVector($o.sub(t),u))}t.add(Nr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(r),vi.copy(e.ray).recast(e.near),!(Ir.containsPoint(vi.origin)===!1&&(vi.intersectSphere(Ir,Hc)===null||vi.origin.distanceToSquared(Hc)>(e.far-e.near)**2))&&(Gc.copy(r).invert(),vi.copy(e.ray).applyMatrix4(Gc),!(n.boundingBox!==null&&vi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,vi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,g=r.attributes.normal,f=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let h=0,x=f.length;h<x;h++){let p=f[h],d=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(o.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,w=T;y<w;y+=3){let v=o.getX(y),E=o.getX(y+1),_=o.getX(y+2);s=Fr(this,d,e,n,c,u,g,v,E,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),x=Math.min(o.count,m.start+m.count);for(let p=h,d=x;p<d;p+=3){let b=o.getX(p),T=o.getX(p+1),y=o.getX(p+2);s=Fr(this,a,e,n,c,u,g,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let h=0,x=f.length;h<x;h++){let p=f[h],d=a[p.materialIndex],b=Math.max(p.start,m.start),T=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let y=b,w=T;y<w;y+=3){let v=y,E=y+1,_=y+2;s=Fr(this,d,e,n,c,u,g,v,E,_),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let h=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let p=h,d=x;p<d;p+=3){let b=p,T=p+1,y=p+2;s=Fr(this,a,e,n,c,u,g,b,T,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Wd(i,e,t,n,s,r,a,o){let l;if(e.side===Wt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Ct,o),l===null)return null;Ur.copy(o),Ur.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Ur);return c<t.near||c>t.far?null:{distance:c,point:Ur.clone(),object:i}}function Fr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Pr),i.getVertexPosition(l,Lr),i.getVertexPosition(c,Dr);let u=Wd(i,e,t,n,Pr,Lr,Dr,Wc);if(u){let g=new F;si.getBarycoord(Wc,Pr,Lr,Dr,g),s&&(u.uv=si.getInterpolatedAttribute(s,o,l,c,g,new ce)),r&&(u.uv1=si.getInterpolatedAttribute(r,o,l,c,g,new ce)),a&&(u.normal=si.getInterpolatedAttribute(a,o,l,c,g,new F),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new F,materialIndex:0};si.getNormal(Pr,Lr,Dr,f.normal),u.face=f,u.barycoord=g}return u}var un=class extends Rt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=zt,u=zt,g,f){super(null,a,o,l,c,u,s,r,g,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Mi=new rs,Xd=new ce(.5,.5),Or=new F,as=class{constructor(e=new xn,t=new xn,n=new xn,s=new xn,r=new xn,a=new xn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=_n,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],u=r[4],g=r[5],f=r[6],m=r[7],h=r[8],x=r[9],p=r[10],d=r[11],b=r[12],T=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,m-u,d-h,w-b).normalize(),s[1].setComponents(c+a,m+u,d+h,w+b).normalize(),s[2].setComponents(c+o,m+g,d+x,w+T).normalize(),s[3].setComponents(c-o,m-g,d-x,w-T).normalize(),n)s[4].setComponents(l,f,p,y).normalize(),s[5].setComponents(c-l,m-f,d-p,w-y).normalize();else if(s[4].setComponents(c-l,m-f,d-p,w-y).normalize(),t===_n)s[5].setComponents(c+l,m+f,d+p,w+y).normalize();else if(t===Qi)s[5].setComponents(l,f,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Mi)}intersectsSprite(e){Mi.center.set(0,0,0);let t=Xd.distanceTo(e.center);return Mi.radius=.7071067811865476+t,Mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Or.x=s.normal.x>0?e.max.x:e.min.x,Or.y=s.normal.y>0?e.max.y:e.min.y,Or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Vs=class extends Rt{constructor(e=[],t=di,n,s,r,a,o,l,c,u){super(e,t,n,s,r,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Gs=class extends Rt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ai=class extends Rt{constructor(e,t,n=Sn,s,r,a,o=zt,l=zt,c,u=Cn,g=1){if(u!==Cn&&u!==fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:g};super(f,s,r,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ns(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ia=class extends ai{constructor(e,t=Sn,n=di,s,r,a=zt,o=zt,l,c=Cn){let u={width:e,height:e,depth:1},g=[u,u,u,u,u,u];super(e,e,t,n,s,r,a,o,l,c),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Hs=class extends Rt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yn=class i extends rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],u=[],g=[],f=0,m=0;h("z","y","x",-1,-1,n,t,e,a,r,0),h("z","y","x",1,-1,n,t,-e,a,r,1),h("x","z","y",1,1,e,n,t,s,a,2),h("x","z","y",1,-1,e,n,-t,s,a,3),h("x","y","z",1,-1,e,t,n,s,r,4),h("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(g,2));function h(x,p,d,b,T,y,w,v,E,_,M){let z=y/E,L=w/_,P=y/2,D=w/2,I=v/2,N=E+1,k=_+1,H=0,J=0,X=new F;for(let C=0;C<k;C++){let O=C*L-D;for(let W=0;W<N;W++){let Z=W*z-P;X[x]=Z*b,X[p]=O*T,X[d]=I,c.push(X.x,X.y,X.z),X[x]=0,X[p]=0,X[d]=v>0?1:-1,u.push(X.x,X.y,X.z),g.push(W/E),g.push(1-C/_),H+=1}}for(let C=0;C<_;C++)for(let O=0;O<E;O++){let W=f+O+N*C,Z=f+O+N*(C+1),be=f+(O+1)+N*(C+1),Te=f+(O+1)+N*C;l.push(W,Z,Te),l.push(Z,be,Te),J+=6}o.addGroup(m,J,M),m+=J,f+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var nn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Oe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let u=n[s],f=n[s+1]-u,m=(a-u)/f;return(s+m)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ce:new F);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],a=[],o=new F,l=new mt;for(let m=0;m<=e;m++){let h=m/e;s[m]=this.getTangentAt(h,new F)}r[0]=new F,a[0]=new F;let c=Number.MAX_VALUE,u=Math.abs(s[0].x),g=Math.abs(s[0].y),f=Math.abs(s[0].z);u<=c&&(c=u,n.set(1,0,0)),g<=c&&(c=g,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=e;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();let h=Math.acos($e(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,h))}a[m].crossVectors(s[m],r[m])}if(t===!0){let m=Math.acos($e(r[0].dot(r[e]),-1,1));m/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(m=-m);for(let h=1;h<=e;h++)r[h].applyMatrix4(l.makeRotationAxis(s[h],m*h)),a[h].crossVectors(s[h],r[h])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},os=class extends nn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ce){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let u=Math.cos(this.aRotation),g=Math.sin(this.aRotation),f=l-this.aX,m=c-this.aY;l=f*u-m*g+this.aX,c=f*g+m*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},sa=class extends os{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Bl(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,u,g){let f=(a-r)/c-(o-r)/(c+u)+(o-a)/u,m=(o-a)/u-(l-a)/(u+g)+(l-o)/g;f*=u,m*=u,s(a,o,f,m)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Xc=new F,qc=new F,Ko=new Bl,jo=new Bl,Qo=new Bl,Ht=class extends nn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,u;this.closed||o>0?c=s[(o-1)%r]:(qc.subVectors(s[0],s[1]).add(s[0]),c=qc);let g=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?u=s[(o+2)%r]:(Xc.subVectors(s[r-1],s[r-2]).add(s[r-1]),u=Xc),this.curveType==="centripetal"||this.curveType==="chordal"){let m=this.curveType==="chordal"?.5:.25,h=Math.pow(c.distanceToSquared(g),m),x=Math.pow(g.distanceToSquared(f),m),p=Math.pow(f.distanceToSquared(u),m);x<1e-4&&(x=1),h<1e-4&&(h=x),p<1e-4&&(p=x),Ko.initNonuniformCatmullRom(c.x,g.x,f.x,u.x,h,x,p),jo.initNonuniformCatmullRom(c.y,g.y,f.y,u.y,h,x,p),Qo.initNonuniformCatmullRom(c.z,g.z,f.z,u.z,h,x,p)}else this.curveType==="catmullrom"&&(Ko.initCatmullRom(c.x,g.x,f.x,u.x,this.tension),jo.initCatmullRom(c.y,g.y,f.y,u.y,this.tension),Qo.initCatmullRom(c.z,g.z,f.z,u.z,this.tension));return n.set(Ko.calc(l),jo.calc(l),Qo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Yc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function qd(i,e){let t=1-i;return t*t*e}function Yd(i,e){return 2*(1-i)*i*e}function Zd(i,e){return i*i*e}function Is(i,e,t,n){return qd(i,e)+Yd(i,t)+Zd(i,n)}function Jd(i,e){let t=1-i;return t*t*t*e}function $d(i,e){let t=1-i;return 3*t*t*i*e}function Kd(i,e){return 3*(1-i)*i*i*e}function jd(i,e){return i*i*i*e}function Ps(i,e,t,n,s){return Jd(i,e)+$d(i,t)+Kd(i,n)+jd(i,s)}var Ws=class extends nn{constructor(e=new ce,t=new ce,n=new ce,s=new ce){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ra=class extends nn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ps(e,s.x,r.x,a.x,o.x),Ps(e,s.y,r.y,a.y,o.y),Ps(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Xs=class extends nn{constructor(e=new ce,t=new ce){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ce){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ce){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},aa=class extends nn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},qs=class extends nn{constructor(e=new ce,t=new ce,n=new ce){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ce){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ys=class extends nn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Is(e,s.x,r.x,a.x),Is(e,s.y,r.y,a.y),Is(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Zs=class extends nn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ce){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],u=s[a>s.length-2?s.length-1:a+1],g=s[a>s.length-3?s.length-1:a+2];return n.set(Yc(o,l.x,c.x,u.x,g.x),Yc(o,l.y,c.y,u.y,g.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ce().fromArray(s))}return this}},oa=Object.freeze({__proto__:null,ArcCurve:sa,CatmullRomCurve3:Ht,CubicBezierCurve:Ws,CubicBezierCurve3:ra,EllipseCurve:os,LineCurve:Xs,LineCurve3:aa,QuadraticBezierCurve:qs,QuadraticBezierCurve3:Ys,SplineCurve:Zs}),la=class extends nn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new oa[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new oa[s.type]().fromJSON(s))}return this}},dn=class extends la{constructor(e){super(),this.type="Path",this.currentPoint=new ce,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Xs(this.currentPoint.clone(),new ce(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new qs(this.currentPoint.clone(),new ce(e,t),new ce(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Ws(this.currentPoint.clone(),new ce(e,t),new ce(n,s),new ce(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Zs(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new os(e,t,n,s,r,a,o,l);if(this.curves.length>0){let g=c.getPoint(0);g.equals(this.currentPoint)||this.lineTo(g.x,g.y)}this.curves.push(c);let u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},qn=class extends dn{constructor(e){super(e),this.uuid=Ci(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new dn().fromJSON(s))}return this}};function Qd(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Xh(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=rf(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let u=o,g=l;for(let f=t;f<s;f+=t){let m=i[f],h=i[f+1];m<o&&(o=m),h<l&&(l=h),m>u&&(u=m),h>g&&(g=h)}c=Math.max(u-o,g-l),c=c!==0?32767/c:0}return Js(r,a,t,o,l,c,0),a}function Xh(i,e,t,n,s){let r;if(s===gf(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=Zc(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=Zc(a/n|0,i[a],i[a+1],r);return r&&ls(r,r.next)&&(Ks(r),r=r.next),r}function wi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ls(t,t.next)||vt(t.prev,t,t.next)===0)){if(Ks(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Js(i,e,t,n,s,r,a){if(!i)return;!a&&r&&hf(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?tf(i,n,s,r):ef(i)){e.push(l.i,i.i,c.i),Ks(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=nf(wi(i),e),Js(i,e,t,n,s,r,2)):a===2&&sf(i,e,t,n,s,r):Js(wi(i),e,t,n,s,r,1);break}}}function ef(i){let e=i.prev,t=i,n=i.next;if(vt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=Math.min(s,r,a),g=Math.min(o,l,c),f=Math.max(s,r,a),m=Math.max(o,l,c),h=n.next;for(;h!==e;){if(h.x>=u&&h.x<=f&&h.y>=g&&h.y<=m&&zs(s,o,r,l,a,c,h.x,h.y)&&vt(h.prev,h,h.next)>=0)return!1;h=h.next}return!0}function tf(i,e,t,n){let s=i.prev,r=i,a=i.next;if(vt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,u=s.y,g=r.y,f=a.y,m=Math.min(o,l,c),h=Math.min(u,g,f),x=Math.max(o,l,c),p=Math.max(u,g,f),d=al(m,h,e,t,n),b=al(x,p,e,t,n),T=i.prevZ,y=i.nextZ;for(;T&&T.z>=d&&y&&y.z<=b;){if(T.x>=m&&T.x<=x&&T.y>=h&&T.y<=p&&T!==s&&T!==a&&zs(o,u,l,g,c,f,T.x,T.y)&&vt(T.prev,T,T.next)>=0||(T=T.prevZ,y.x>=m&&y.x<=x&&y.y>=h&&y.y<=p&&y!==s&&y!==a&&zs(o,u,l,g,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;T&&T.z>=d;){if(T.x>=m&&T.x<=x&&T.y>=h&&T.y<=p&&T!==s&&T!==a&&zs(o,u,l,g,c,f,T.x,T.y)&&vt(T.prev,T,T.next)>=0)return!1;T=T.prevZ}for(;y&&y.z<=b;){if(y.x>=m&&y.x<=x&&y.y>=h&&y.y<=p&&y!==s&&y!==a&&zs(o,u,l,g,c,f,y.x,y.y)&&vt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function nf(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ls(n,s)&&Yh(n,t,t.next,s)&&$s(n,s)&&$s(s,n)&&(e.push(n.i,t.i,s.i),Ks(t),Ks(t.next),t=i=s),t=t.next}while(t!==i);return wi(t)}function sf(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&ff(a,o)){let l=Zh(a,o);a=wi(a,a.next),l=wi(l,l.next),Js(a,e,t,n,s,r,0),Js(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function rf(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Xh(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(df(c))}s.sort(af);for(let r=0;r<s.length;r++)t=of(s[r],t);return t}function af(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function of(i,e){let t=lf(i,e);if(!t)return e;let n=Zh(t,i);return wi(n,n.next),wi(t,t.next)}function lf(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(ls(i,t))return t;do{if(ls(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let g=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(g<=n&&g>r&&(r=g,a=t.x<t.next.x?t:t.next,g===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,u=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&qh(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let g=Math.abs(s-t.y)/(n-t.x);$s(t,i)&&(g<u||g===u&&(t.x>a.x||t.x===a.x&&cf(a,t)))&&(a=t,u=g)}t=t.next}while(t!==o);return a}function cf(i,e){return vt(i.prev,i,e.prev)<0&&vt(e.next,i,i.next)<0}function hf(i,e,t,n){let s=i;do s.z===0&&(s.z=al(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,uf(s)}function uf(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function al(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function df(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function qh(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function zs(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&qh(i,e,t,n,s,r,a,o)}function ff(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!pf(i,e)&&($s(i,e)&&$s(e,i)&&mf(i,e)&&(vt(i.prev,i,e.prev)||vt(i,e.prev,e))||ls(i,e)&&vt(i.prev,i,i.next)>0&&vt(e.prev,e,e.next)>0)}function vt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ls(i,e){return i.x===e.x&&i.y===e.y}function Yh(i,e,t,n){let s=kr(vt(i,e,t)),r=kr(vt(i,e,n)),a=kr(vt(t,n,i)),o=kr(vt(t,n,e));return!!(s!==r&&a!==o||s===0&&Br(i,t,e)||r===0&&Br(i,n,e)||a===0&&Br(t,i,n)||o===0&&Br(t,e,n))}function Br(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function kr(i){return i>0?1:i<0?-1:0}function pf(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Yh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function $s(i,e){return vt(i.prev,i,i.next)<0?vt(i,e,i.next)>=0&&vt(i,i.prev,e)>=0:vt(i,e,i.prev)<0||vt(i,i.next,e)<0}function mf(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Zh(i,e){let t=ol(i.i,i.x,i.y),n=ol(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Zc(i,e,t,n){let s=ol(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function Ks(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ol(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function gf(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var ll=class{static triangulate(e,t,n=2){return Qd(e,t,n)}},En=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Jc(e),$c(n,e);let a=e.length;t.forEach(Jc);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,$c(n,t[l]);let o=ll.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Jc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function $c(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oi=class i extends rt{constructor(e=new qn([new ce(.5,.5),new ce(-.5,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Be(s,3)),this.setAttribute("uv",new Be(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,g=t.depth!==void 0?t.depth:1,f=t.bevelEnabled!==void 0?t.bevelEnabled:!0,m=t.bevelThickness!==void 0?t.bevelThickness:.2,h=t.bevelSize!==void 0?t.bevelSize:m-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,d=t.extrudePath,b=t.UVGenerator!==void 0?t.UVGenerator:xf,T,y=!1,w,v,E,_;if(d){T=d.getSpacedPoints(u),y=!0,f=!1;let ie=d.isCatmullRomCurve3?d.closed:!1;w=d.computeFrenetFrames(u,ie),v=new F,E=new F,_=new F}f||(p=0,m=0,h=0,x=0);let M=o.extractPoints(c),z=M.shape,L=M.holes;if(!En.isClockWise(z)){z=z.reverse();for(let ie=0,le=L.length;ie<le;ie++){let K=L[ie];En.isClockWise(K)&&(L[ie]=K.reverse())}}function D(ie){let K=10000000000000001e-36,ae=ie[0];for(let he=1;he<=ie.length;he++){let Re=he%ie.length,De=ie[Re],We=De.x-ae.x,Ye=De.y-ae.y,U=We*We+Ye*Ye,lt=Math.max(Math.abs(De.x),Math.abs(De.y),Math.abs(ae.x),Math.abs(ae.y)),Qe=K*lt*lt;if(U<=Qe){ie.splice(Re,1),he--;continue}ae=De}}D(z),L.forEach(D);let I=L.length,N=z;for(let ie=0;ie<I;ie++){let le=L[ie];z=z.concat(le)}function k(ie,le,K){return le||Ge("ExtrudeGeometry: vec does not exist"),ie.clone().addScaledVector(le,K)}let H=z.length;function J(ie,le,K){let ae,he,Re,De=ie.x-le.x,We=ie.y-le.y,Ye=K.x-ie.x,U=K.y-ie.y,lt=De*De+We*We,Qe=De*U-We*Ye;if(Math.abs(Qe)>Number.EPSILON){let R=Math.sqrt(lt),S=Math.sqrt(Ye*Ye+U*U),G=le.x-We/R,$=le.y+De/R,te=K.x-U/S,de=K.y+Ye/S,fe=((te-G)*U-(de-$)*Ye)/(De*U-We*Ye);ae=G+De*fe-ie.x,he=$+We*fe-ie.y;let ne=ae*ae+he*he;if(ne<=2)return new ce(ae,he);Re=Math.sqrt(ne/2)}else{let R=!1;De>Number.EPSILON?Ye>Number.EPSILON&&(R=!0):De<-Number.EPSILON?Ye<-Number.EPSILON&&(R=!0):Math.sign(We)===Math.sign(U)&&(R=!0),R?(ae=-We,he=De,Re=Math.sqrt(lt)):(ae=De,he=We,Re=Math.sqrt(lt/2))}return new ce(ae/Re,he/Re)}let X=[];for(let ie=0,le=N.length,K=le-1,ae=ie+1;ie<le;ie++,K++,ae++)K===le&&(K=0),ae===le&&(ae=0),X[ie]=J(N[ie],N[K],N[ae]);let C=[],O,W=X.concat();for(let ie=0,le=I;ie<le;ie++){let K=L[ie];O=[];for(let ae=0,he=K.length,Re=he-1,De=ae+1;ae<he;ae++,Re++,De++)Re===he&&(Re=0),De===he&&(De=0),O[ae]=J(K[ae],K[Re],K[De]);C.push(O),W=W.concat(O)}let Z;if(p===0)Z=En.triangulateShape(N,L);else{let ie=[],le=[];for(let K=0;K<p;K++){let ae=K/p,he=m*Math.cos(ae*Math.PI/2),Re=h*Math.sin(ae*Math.PI/2)+x;for(let De=0,We=N.length;De<We;De++){let Ye=k(N[De],X[De],Re);ue(Ye.x,Ye.y,-he),ae===0&&ie.push(Ye)}for(let De=0,We=I;De<We;De++){let Ye=L[De];O=C[De];let U=[];for(let lt=0,Qe=Ye.length;lt<Qe;lt++){let R=k(Ye[lt],O[lt],Re);ue(R.x,R.y,-he),ae===0&&U.push(R)}ae===0&&le.push(U)}}Z=En.triangulateShape(ie,le)}let be=Z.length,Te=h+x;for(let ie=0;ie<H;ie++){let le=f?k(z[ie],W[ie],Te):z[ie];y?(E.copy(w.normals[0]).multiplyScalar(le.x),v.copy(w.binormals[0]).multiplyScalar(le.y),_.copy(T[0]).add(E).add(v),ue(_.x,_.y,_.z)):ue(le.x,le.y,0)}for(let ie=1;ie<=u;ie++)for(let le=0;le<H;le++){let K=f?k(z[le],W[le],Te):z[le];y?(E.copy(w.normals[ie]).multiplyScalar(K.x),v.copy(w.binormals[ie]).multiplyScalar(K.y),_.copy(T[ie]).add(E).add(v),ue(_.x,_.y,_.z)):ue(K.x,K.y,g/u*ie)}for(let ie=p-1;ie>=0;ie--){let le=ie/p,K=m*Math.cos(le*Math.PI/2),ae=h*Math.sin(le*Math.PI/2)+x;for(let he=0,Re=N.length;he<Re;he++){let De=k(N[he],X[he],ae);ue(De.x,De.y,g+K)}for(let he=0,Re=L.length;he<Re;he++){let De=L[he];O=C[he];for(let We=0,Ye=De.length;We<Ye;We++){let U=k(De[We],O[We],ae);y?ue(U.x,U.y+T[u-1].y,T[u-1].x+K):ue(U.x,U.y,g+K)}}}He(),j();function He(){let ie=s.length/3;if(f){let le=0,K=H*le;for(let ae=0;ae<be;ae++){let he=Z[ae];Le(he[2]+K,he[1]+K,he[0]+K)}le=u+p*2,K=H*le;for(let ae=0;ae<be;ae++){let he=Z[ae];Le(he[0]+K,he[1]+K,he[2]+K)}}else{for(let le=0;le<be;le++){let K=Z[le];Le(K[2],K[1],K[0])}for(let le=0;le<be;le++){let K=Z[le];Le(K[0]+H*u,K[1]+H*u,K[2]+H*u)}}n.addGroup(ie,s.length/3-ie,0)}function j(){let ie=s.length/3,le=0;ee(N,le),le+=N.length;for(let K=0,ae=L.length;K<ae;K++){let he=L[K];ee(he,le),le+=he.length}n.addGroup(ie,s.length/3-ie,1)}function ee(ie,le){let K=ie.length;for(;--K>=0;){let ae=K,he=K-1;he<0&&(he=ie.length-1);for(let Re=0,De=u+p*2;Re<De;Re++){let We=H*Re,Ye=H*(Re+1),U=le+ae+We,lt=le+he+We,Qe=le+he+Ye,R=le+ae+Ye;pe(U,lt,Qe,R)}}}function ue(ie,le,K){l.push(ie),l.push(le),l.push(K)}function Le(ie,le,K){ke(ie),ke(le),ke(K);let ae=s.length/3,he=b.generateTopUV(n,s,ae-3,ae-2,ae-1);nt(he[0]),nt(he[1]),nt(he[2])}function pe(ie,le,K,ae){ke(ie),ke(le),ke(ae),ke(le),ke(K),ke(ae);let he=s.length/3,Re=b.generateSideWallUV(n,s,he-6,he-3,he-2,he-1);nt(Re[0]),nt(Re[1]),nt(Re[3]),nt(Re[1]),nt(Re[2]),nt(Re[3])}function ke(ie){s.push(l[ie*3+0]),s.push(l[ie*3+1]),s.push(l[ie*3+2])}function nt(ie){r.push(ie.x),r.push(ie.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return _f(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new oa[s.type]().fromJSON(s)),new i(n,e.options)}},xf={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],u=e[s*3+1];return[new ce(r,a),new ce(o,l),new ce(c,u)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],g=e[n*3+2],f=e[s*3],m=e[s*3+1],h=e[s*3+2],x=e[r*3],p=e[r*3+1],d=e[r*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new ce(a,1-l),new ce(c,1-g),new ce(f,1-h),new ce(x,1-d)]:[new ce(o,1-l),new ce(u,1-g),new ce(m,1-h),new ce(p,1-d)]}};function _f(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Ti=class i extends rt{constructor(e=[new ce(0,-.5),new ce(.5,0),new ce(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=$e(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],u=1/t,g=new F,f=new ce,m=new F,h=new F,x=new F,p=0,d=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:p=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,m.x=d*1,m.y=-p,m.z=d*0,x.copy(m),m.normalize(),l.push(m.x,m.y,m.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:p=e[b+1].x-e[b].x,d=e[b+1].y-e[b].y,m.x=d*1,m.y=-p,m.z=d*0,h.copy(m),m.x+=x.x,m.y+=x.y,m.z+=x.z,m.normalize(),l.push(m.x,m.y,m.z),x.copy(h)}for(let b=0;b<=t;b++){let T=n+b*u*s,y=Math.sin(T),w=Math.cos(T);for(let v=0;v<=e.length-1;v++){g.x=e[v].x*y,g.y=e[v].y,g.z=e[v].x*w,a.push(g.x,g.y,g.z),f.x=b/t,f.y=v/(e.length-1),o.push(f.x,f.y);let E=l[3*v+0]*y,_=l[3*v+1],M=l[3*v+0]*w;c.push(E,_,M)}}for(let b=0;b<t;b++)for(let T=0;T<e.length-1;T++){let y=T+b*e.length,w=y,v=y+e.length,E=y+e.length+1,_=y+1;r.push(w,v,_),r.push(E,_,v)}this.setIndex(r),this.setAttribute("position",new Be(a,3)),this.setAttribute("uv",new Be(o,2)),this.setAttribute("normal",new Be(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}};var li=class i extends rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,u=l+1,g=e/o,f=t/l,m=[],h=[],x=[],p=[];for(let d=0;d<u;d++){let b=d*f-a;for(let T=0;T<c;T++){let y=T*g-r;h.push(y,-b,0),x.push(0,0,1),p.push(T/o),p.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){let T=b+c*d,y=b+c*(d+1),w=b+1+c*(d+1),v=b+1+c*d;m.push(T,y,v),m.push(y,w,v)}this.setIndex(m),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}};var js=class i extends rt{constructor(e=new qn([new ce(0,.5),new ce(-.5,-.5),new ce(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Be(s,3)),this.setAttribute("normal",new Be(r,3)),this.setAttribute("uv",new Be(a,2));function c(u){let g=s.length/3,f=u.extractPoints(t),m=f.shape,h=f.holes;En.isClockWise(m)===!1&&(m=m.reverse());for(let p=0,d=h.length;p<d;p++){let b=h[p];En.isClockWise(b)===!0&&(h[p]=b.reverse())}let x=En.triangulateShape(m,h);for(let p=0,d=h.length;p<d;p++){let b=h[p];m=m.concat(b)}for(let p=0,d=m.length;p<d;p++){let b=m[p];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let p=0,d=x.length;p<d;p++){let b=x[p],T=b[0]+g,y=b[1]+g,w=b[2]+g;n.push(T,y,w),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return yf(t,e)}static fromJSON(e,t){let n=[];for(let s=0,r=e.shapes.length;s<r;s++){let a=t[e.shapes[s]];n.push(a)}return new i(n,e.curveSegments)}};function yf(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){let s=i[t];e.shapes.push(s.uuid)}else e.shapes.push(i.uuid);return e}var Qs=class i extends rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,u=[],g=new F,f=new F,m=[],h=[],x=[],p=[];for(let d=0;d<=n;d++){let b=[],T=d/n,y=a+T*o,w=e*Math.cos(y),v=Math.sqrt(e*e-w*w),E=0;d===0&&a===0?E=.5/t:d===n&&l===Math.PI&&(E=-.5/t);for(let _=0;_<=t;_++){let M=_/t,z=s+M*r;g.x=-v*Math.cos(z),g.y=w,g.z=v*Math.sin(z),h.push(g.x,g.y,g.z),f.copy(g).normalize(),x.push(f.x,f.y,f.z),p.push(M+E,1-T),b.push(c++)}u.push(b)}for(let d=0;d<n;d++)for(let b=0;b<t;b++){let T=u[d][b+1],y=u[d][b],w=u[d+1][b],v=u[d+1][b+1];(d!==0||a>0)&&m.push(T,y,v),(d!==n-1||l<Math.PI)&&m.push(y,w,v)}this.setIndex(m),this.setAttribute("position",new Be(h,3)),this.setAttribute("normal",new Be(x,3)),this.setAttribute("uv",new Be(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Yn=class i extends rt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],u=[],g=[],f=new F,m=new F,h=new F;for(let x=0;x<=n;x++){let p=a+x/n*o;for(let d=0;d<=s;d++){let b=d/s*r;m.x=(e+t*Math.cos(p))*Math.cos(b),m.y=(e+t*Math.cos(p))*Math.sin(b),m.z=t*Math.sin(p),c.push(m.x,m.y,m.z),f.x=e*Math.cos(b),f.y=e*Math.sin(b),h.subVectors(m,f).normalize(),u.push(h.x,h.y,h.z),g.push(d/s),g.push(x/n)}}for(let x=1;x<=n;x++)for(let p=1;p<=s;p++){let d=(s+1)*x+p-1,b=(s+1)*(x-1)+p-1,T=(s+1)*(x-1)+p,y=(s+1)*x+p;l.push(d,b,y),l.push(b,T,y)}this.setIndex(l),this.setAttribute("position",new Be(c,3)),this.setAttribute("normal",new Be(u,3)),this.setAttribute("uv",new Be(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var sn=class i extends rt{constructor(e=new Ys(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new F,l=new F,c=new ce,u=new F,g=[],f=[],m=[],h=[];x(),this.setIndex(h),this.setAttribute("position",new Be(g,3)),this.setAttribute("normal",new Be(f,3)),this.setAttribute("uv",new Be(m,2));function x(){for(let T=0;T<t;T++)p(T);p(r===!1?t:0),b(),d()}function p(T){u=e.getPointAt(T/t,u);let y=a.normals[T],w=a.binormals[T];for(let v=0;v<=s;v++){let E=v/s*Math.PI*2,_=Math.sin(E),M=-Math.cos(E);l.x=M*y.x+_*w.x,l.y=M*y.y+_*w.y,l.z=M*y.z+_*w.z,l.normalize(),f.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,g.push(o.x,o.y,o.z)}}function d(){for(let T=1;T<=t;T++)for(let y=1;y<=s;y++){let w=(s+1)*(T-1)+(y-1),v=(s+1)*T+(y-1),E=(s+1)*T+y,_=(s+1)*(T-1)+y;h.push(w,v,_),h.push(v,E,_)}}function b(){for(let T=0;T<=t;T++)for(let y=0;y<=s;y++)c.x=T/t,c.y=y/s,m.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new oa[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var er=class extends Xn{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Ze(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}};function Ri(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Kc(s))s.isRenderTargetTexture?(Oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Kc(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function kt(i){let e={};for(let t=0;t<i.length;t++){let n=Ri(i[t]);for(let s in n)e[s]=n[s]}return e}function Kc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function vf(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function kl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}var Jh={clone:Ri,merge:kt},Mf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,rn=class extends Xn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Mf,this.fragmentShader=Sf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ri(e.uniforms),this.uniformsGroups=vf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Ze().setHex(s.value);break;case"v2":this.uniforms[n].value=new ce().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ot().fromArray(s.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new mt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},ca=class extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vn=class extends Xn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ho,this.normalScale=new ce(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},It=class extends vn{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ce(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return $e(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ha=class extends Xn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Rh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},ua=class extends Xn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Yi(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function el(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ci=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},da=class extends ci{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:il,endingEnd:il}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sl:r=e,o=2*t-n;break;case rl:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sl:a=e,l=2*n-t;break;case rl:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,g=this._offsetNext,f=this._weightPrev,m=this._weightNext,h=(n-t)/(s-t),x=h*h,p=x*h,d=-f*p+2*f*x-f*h,b=(1+f)*p+(-1.5-2*f)*x+(-.5+f)*h+1,T=(-1-m)*p+(1.5+m)*x+.5*h,y=m*p-m*x;for(let w=0;w!==o;++w)r[w]=d*a[u+w]+b*a[c+w]+T*a[l+w]+y*a[g+w];return r}},fa=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(s-t),g=1-u;for(let f=0;f!==o;++f)r[f]=a[c+f]*g+a[l+f]*u;return r}},pa=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},ma=class extends ci{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this.inTangents,g=this.outTangents;if(!u||!g){let h=(n-t)/(s-t),x=1-h;for(let p=0;p!==o;++p)r[p]=a[c+p]*x+a[l+p]*h;return r}let f=o*2,m=e-1;for(let h=0;h!==o;++h){let x=a[c+h],p=a[l+h],d=m*f+h*2,b=g[d],T=g[d+1],y=e*f+h*2,w=u[y],v=u[y+1],E=wf(n,t,b,w,s);r[h]=$h(E,x,T,v,p)}return r}};function $h(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function bf(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function wf(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=$h(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=bf(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var an=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Yi(t,this.TimeBufferType),this.values=Yi(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Yi(e.times,Array),values:Yi(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),el(e.settings)&&(n.settings={inTangents:Yi(e.settings.inTangents,Array),outTangents:Yi(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new pa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fa(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new da(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new ma(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Ls:t=this.InterpolantFactoryMethodDiscrete;break;case Qr:t=this.InterpolantFactoryMethodLinear;break;case Hr:t=this.InterpolantFactoryMethodSmooth;break;case nl:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Oe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ls;case this.InterpolantFactoryMethodLinear:return Qr;case this.InterpolantFactoryMethodSmooth:return Hr;case this.InterpolantFactoryMethodBezier:return nl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;el(this.settings)&&(jc(this.settings.inTangents,e),jc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ge("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ge("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&ld(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ge("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Hr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(s)l=!0;else{let g=o*n,f=g-n,m=g+n;for(let h=0;h!==n;++h){let x=t[g+h];if(x!==t[f+h]||x!==t[m+h]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let g=o*n,f=a*n;for(let m=0;m!==n;++m)t[f+m]=t[g+m]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,el(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function jc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}an.prototype.ValueTypeName="";an.prototype.TimeBufferType=Float32Array;an.prototype.ValueBufferType=Float32Array;an.prototype.DefaultInterpolation=Qr;var hi=class extends an{constructor(e,t,n){super(e,t,n)}};hi.prototype.ValueTypeName="bool";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=Ls;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ga=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ga.prototype.ValueTypeName="color";var xa=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};xa.prototype.ValueTypeName="number";var _a=class extends ci{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let u=c+o;c!==u;c+=4)In.slerpFlat(r,0,a,c-o,a,c,l);return r}},tr=class extends an{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new _a(this.times,this.values,this.getValueSize(),e)}};tr.prototype.ValueTypeName="quaternion";tr.prototype.InterpolantFactoryMethodSmooth=void 0;var ui=class extends an{constructor(e,t,n){super(e,t,n)}};ui.prototype.ValueTypeName="string";ui.prototype.ValueBufferType=Array;ui.prototype.DefaultInterpolation=Ls;ui.prototype.InterpolantFactoryMethodLinear=void 0;ui.prototype.InterpolantFactoryMethodSmooth=void 0;var ya=class extends an{constructor(e,t,n,s){super(e,t,n,s)}};ya.prototype.ValueTypeName="vector";var cl={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Qc(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Qc(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Qc(i){try{let e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var va=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,g){return c.push(u,g),this},this.removeHandler=function(u){let g=c.indexOf(u);return g!==-1&&c.splice(g,2),this},this.getHandler=function(u){for(let g=0,f=c.length;g<f;g+=2){let m=c[g],h=c[g+1];if(m.global&&(m.lastIndex=0),m.test(u))return h}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kh=new va,cs=class{constructor(e){this.manager=e!==void 0?e:Kh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};cs.DEFAULT_MATERIAL_NAME="__DEFAULT";var kn={},hl=class extends Error{constructor(e,t){super(e),this.response=t}},Ma=class extends cs{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=cl.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(kn[e]!==void 0){kn[e].push({onLoad:t,onProgress:n,onError:s});return}kn[e]=[],kn[e].push({onLoad:t,onProgress:n,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&Oe("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;let u=kn[e],g=c.body.getReader(),f=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),m=f?parseInt(f):0,h=m!==0,x=0,p=new ReadableStream({start(d){b();function b(){g.read().then(({done:T,value:y})=>{if(T)d.close();else{x+=y.byteLength;let w=new ProgressEvent("progress",{lengthComputable:h,loaded:x,total:m});for(let v=0,E=u.length;v<E;v++){let _=u[v];_.onProgress&&_.onProgress(w)}d.enqueue(y),b()}},T=>{d.error(T)})}}});return new Response(p)}else throw new hl(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o==="")return c.text();{let g=/charset="?([^;"\s]*)"?/i.exec(o),f=g&&g[1]?g[1].toLowerCase():void 0,m=new TextDecoder(f);return c.arrayBuffer().then(h=>m.decode(h))}}}).then(c=>{cl.add(`file:${e}`,c);let u=kn[e];delete kn[e];for(let g=0,f=u.length;g<f;g++){let m=u[g];m.onLoad&&m.onLoad(c)}}).catch(c=>{let u=kn[e];if(u===void 0)throw this.manager.itemError(e),c;delete kn[e];for(let g=0,f=u.length;g<f;g++){let m=u[g];m.onError&&m.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var nr=class extends cs{constructor(e){super(e)}load(e,t,n,s){let r=this,a=new un,o=new Ma(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(l){let c;try{c=r.parse(l)}catch(u){s!==void 0?s(u):Ge(u);return}r._applyTexData(a,c),t&&t(a,c)},n,s),a}createDataTexture(e){let t=new un;return this._applyTexData(t,this.parse(e)),t}_applyTexData(e,t){t.image!==void 0?e.image=t.image:t.data!==void 0&&(e.image.width=t.width,e.image.height=t.height,e.image.data=t.data),e.wrapS=t.wrapS!==void 0?t.wrapS:hn,e.wrapT=t.wrapT!==void 0?t.wrapT:hn,e.magFilter=t.magFilter!==void 0?t.magFilter:dt,e.minFilter=t.minFilter!==void 0?t.minFilter:dt,e.anisotropy=t.anisotropy!==void 0?t.anisotropy:1,t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.mipmaps!==void 0&&(e.mipmaps=t.mipmaps,e.minFilter=on),t.mipmapCount===1&&(e.minFilter=dt),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),e.needsUpdate=!0}};var ir=class extends Ot{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},sr=class extends ir{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},tl=new mt,eh=new F,th=new F,Sa=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ce(512,512),this.mapType=Kt,this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new as,this._frameExtents=new ce(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;eh.setFromMatrixPosition(e.matrixWorld),t.position.copy(eh),th.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(th),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){tl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(tl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Qi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(tl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Vr=new F,Gr=new In,An=new F,rr=class extends Ot{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=_n,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Vr,Gr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,An.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Vr,Gr,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vr,Gr,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ii=new F,nh=new ce,ih=new ce,Ut=class extends rr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ii.x,ii.y).multiplyScalar(-e/ii.z),ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ii.x,ii.y).multiplyScalar(-e/ii.z)}getViewSize(e,t){return this.getViewBounds(e,nh,ih),t.subVectors(ih,nh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Cs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var hs=class extends rr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ul=class extends Sa{constructor(){super(new hs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends ir{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ot.DEFAULT_UP),this.updateMatrix(),this.target=new Ot,this.shadow=new ul}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Zi=-90,Ji=1,ba=class extends Ot{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ut(Zi,Ji,e,t);s.layers=this.layers,this.add(s);let r=new Ut(Zi,Ji,e,t);r.layers=this.layers,this.add(r);let a=new Ut(Zi,Ji,e,t);a.layers=this.layers,this.add(a);let o=new Ut(Zi,Ji,e,t);o.layers=this.layers,this.add(o);let l=new Ut(Zi,Ji,e,t);l.layers=this.layers,this.add(l);let c=new Ut(Zi,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===_n)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Qi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,u]=this.children,g=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),h=e.xr.enabled;e.xr.enabled=!1;let x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(g,f,m),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}},wa=class extends Ut{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Vl="\\[\\]\\.:\\/",Tf=new RegExp("["+Vl+"]","g"),Gl="[^"+Vl+"]",Af="[^"+Vl.replace("\\.","")+"]",Ef=/((?:WC+[\/:])*)/.source.replace("WC",Gl),zf=/(WCOD+)?/.source.replace("WCOD",Af),Cf=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gl),Rf=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gl),If=new RegExp("^"+Ef+zf+Cf+Rf+"$"),Pf=["material","materials","bones","map"],dl=class{constructor(e,t,n){let s=n||yt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},yt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Tf,"")}static parseTrackName(e){let t=If.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Pf.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ge("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};yt.Composite=dl;yt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};yt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};yt.prototype.GetterByBindingType=[yt.prototype._getValue_direct,yt.prototype._getValue_array,yt.prototype._getValue_arrayElement,yt.prototype._getValue_toArray];yt.prototype.SetterByBindingTypeAndVersioning=[[yt.prototype._setValue_direct,yt.prototype._setValue_direct_setNeedsUpdate,yt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_array,yt.prototype._setValue_array_setNeedsUpdate,yt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_arrayElement,yt.prototype._setValue_arrayElement_setNeedsUpdate,yt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[yt.prototype._setValue_fromArray,yt.prototype._setValue_fromArray_setNeedsUpdate,yt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Lx=new Float32Array(1);var sh=new mt,ar=class{constructor(e,t,n=0,s=1/0){this.ray=new ks(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new is,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ge("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return sh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(sh),this}intersectObject(e,t=!0,n=[]){return fl(e,this,n,t),n.sort(rh),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)fl(e[s],this,n,t);return n.sort(rh),n}};function rh(i,e){return i.distance-e.distance}function fl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)fl(r[a],e,t,!0)}}var Zl=class Zl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Zl.prototype.isMatrix2=!0;var pl=Zl;function Hl(i,e,t,n){let s=Lf(n);switch(t){case Ll:return i*e;case Nl:return i*e/s.components*s.byteLength;case Ia:return i*e/s.components*s.byteLength;case pi:return i*e*2/s.components*s.byteLength;case Pa:return i*e*2/s.components*s.byteLength;case Dl:return i*e*3/s.components*s.byteLength;case Qt:return i*e*4/s.components*s.byteLength;case La:return i*e*4/s.components*s.byteLength;case hr:case ur:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case dr:case fr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Na:case Fa:return Math.max(i,16)*Math.max(e,8)/4;case Da:case Ua:return Math.max(i,8)*Math.max(e,8)/2;case Oa:case Ba:case Va:case Ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case ka:case pr:case Ha:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qa:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ya:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Za:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ja:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $a:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Ka:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ja:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case eo:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case to:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case no:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case io:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case so:case ro:case ao:return Math.ceil(i/4)*Math.ceil(e/4)*16;case oo:case lo:return Math.ceil(i/4)*Math.ceil(e/4)*8;case mr:case co:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Lf(i){switch(i){case Kt:case Cl:return{byteLength:1,components:1};case ms:case Rl:case Xt:return{byteLength:2,components:1};case Ca:case Ra:return{byteLength:2,components:4};case Sn:case za:case jt:return{byteLength:4,components:1};case Il:case Pl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function yu(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Nf(i){let e=new WeakMap;function t(o,l){let c=o.array,u=o.usage,g=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,u),o.onUploadCallback();let m;if(c instanceof Float32Array)m=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=i.SHORT;else if(c instanceof Uint32Array)m=i.UNSIGNED_INT;else if(c instanceof Int32Array)m=i.INT;else if(c instanceof Int8Array)m=i.BYTE;else if(c instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:g}}function n(o,l,c){let u=l.array,g=l.updateRanges;if(i.bindBuffer(c,o),g.length===0)i.bufferSubData(c,0,u);else{g.sort((m,h)=>m.start-h.start);let f=0;for(let m=1;m<g.length;m++){let h=g[f],x=g[m];x.start<=h.start+h.count+1?h.count=Math.max(h.count,x.start+x.count-h.start):(++f,g[f]=x)}g.length=f+1;for(let m=0,h=g.length;m<h;m++){let x=g[m];i.bufferSubData(c,x.start*u.BYTES_PER_ELEMENT,u,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var Uf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ff=`#ifdef USE_ALPHAHASH
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
#endif`,Of=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Bf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Vf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Gf=`#ifdef USE_AOMAP
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
#endif`,Hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Wf=`#ifdef USE_BATCHING
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
#endif`,Xf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,qf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Yf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Jf=`#ifdef USE_IRIDESCENCE
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
#endif`,$f=`#ifdef USE_BUMPMAP
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
#endif`,Kf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,jf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ep=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,np=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ip=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,sp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,rp=`#define PI 3.141592653589793
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
} // validated`,ap=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,op=`vec3 transformedNormal = objectNormal;
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
#endif`,lp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,up=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dp="gl_FragColor = linearToOutputTexel( gl_FragColor );",fp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pp=`#ifdef USE_ENVMAP
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
#endif`,mp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,gp=`#ifdef USE_ENVMAP
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
#endif`,xp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,_p=`#ifdef USE_ENVMAP
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
#endif`,yp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,vp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Mp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Sp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bp=`#ifdef USE_GRADIENTMAP
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
}`,wp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Tp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ep=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,zp=`#ifdef USE_ENVMAP
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
#endif`,Cp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Rp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ip=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Pp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Lp=`PhysicalMaterial material;
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
#endif`,Dp=`uniform sampler2D dfgLUT;
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
}`,Np=`
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
#endif`,Up=`#if defined( RE_IndirectDiffuse )
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
#endif`,Fp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Op=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,Bp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,kp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Vp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Gp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Hp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Wp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Xp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,qp=`#if defined( USE_POINTS_UV )
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
#endif`,Yp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Zp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Jp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,$p=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Kp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jp=`#ifdef USE_MORPHTARGETS
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
#endif`,Qp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,em=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,im=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,sm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,rm=`#ifdef USE_NORMALMAP
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
#endif`,am=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,om=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,um=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,dm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,fm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_m=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ym=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,vm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Mm=`float getShadowMask() {
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
}`,Sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bm=`#ifdef USE_SKINNING
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
#endif`,wm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Tm=`#ifdef USE_SKINNING
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
#endif`,Am=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Em=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Rm=`#ifdef USE_TRANSMISSION
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
#endif`,Im=`#ifdef USE_TRANSMISSION
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
#endif`,Pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Lm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Nm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Um=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Fm=`uniform sampler2D t2D;
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
}`,Om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Vm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Gm=`#include <common>
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
}`,Hm=`#if DEPTH_PACKING == 3200
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
}`,Wm=`#define DISTANCE
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
}`,Xm=`#define DISTANCE
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
}`,qm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ym=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Zm=`uniform float scale;
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
}`,Jm=`uniform vec3 diffuse;
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
}`,$m=`#include <common>
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
}`,Km=`uniform vec3 diffuse;
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
}`,jm=`#define LAMBERT
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
}`,Qm=`#define LAMBERT
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
}`,eg=`#define MATCAP
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
}`,tg=`#define MATCAP
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
}`,ng=`#define NORMAL
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
}`,ig=`#define NORMAL
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
}`,sg=`#define PHONG
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
}`,rg=`#define PHONG
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
}`,ag=`#define STANDARD
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
}`,og=`#define STANDARD
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
}`,lg=`#define TOON
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
}`,cg=`#define TOON
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
}`,hg=`uniform float size;
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
}`,ug=`uniform vec3 diffuse;
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
}`,dg=`#include <common>
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
}`,fg=`uniform vec3 color;
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
}`,pg=`uniform float rotation;
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
}`,mg=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:Uf,alphahash_pars_fragment:Ff,alphamap_fragment:Of,alphamap_pars_fragment:Bf,alphatest_fragment:kf,alphatest_pars_fragment:Vf,aomap_fragment:Gf,aomap_pars_fragment:Hf,batching_pars_vertex:Wf,batching_vertex:Xf,begin_vertex:qf,beginnormal_vertex:Yf,bsdfs:Zf,iridescence_fragment:Jf,bumpmap_pars_fragment:$f,clipping_planes_fragment:Kf,clipping_planes_pars_fragment:jf,clipping_planes_pars_vertex:Qf,clipping_planes_vertex:ep,color_fragment:tp,color_pars_fragment:np,color_pars_vertex:ip,color_vertex:sp,common:rp,cube_uv_reflection_fragment:ap,defaultnormal_vertex:op,displacementmap_pars_vertex:lp,displacementmap_vertex:cp,emissivemap_fragment:hp,emissivemap_pars_fragment:up,colorspace_fragment:dp,colorspace_pars_fragment:fp,envmap_fragment:pp,envmap_common_pars_fragment:mp,envmap_pars_fragment:gp,envmap_pars_vertex:xp,envmap_physical_pars_fragment:zp,envmap_vertex:_p,fog_vertex:yp,fog_pars_vertex:vp,fog_fragment:Mp,fog_pars_fragment:Sp,gradientmap_pars_fragment:bp,lightmap_pars_fragment:wp,lights_lambert_fragment:Tp,lights_lambert_pars_fragment:Ap,lights_pars_begin:Ep,lights_toon_fragment:Cp,lights_toon_pars_fragment:Rp,lights_phong_fragment:Ip,lights_phong_pars_fragment:Pp,lights_physical_fragment:Lp,lights_physical_pars_fragment:Dp,lights_fragment_begin:Np,lights_fragment_maps:Up,lights_fragment_end:Fp,lightprobes_pars_fragment:Op,logdepthbuf_fragment:Bp,logdepthbuf_pars_fragment:kp,logdepthbuf_pars_vertex:Vp,logdepthbuf_vertex:Gp,map_fragment:Hp,map_pars_fragment:Wp,map_particle_fragment:Xp,map_particle_pars_fragment:qp,metalnessmap_fragment:Yp,metalnessmap_pars_fragment:Zp,morphinstance_vertex:Jp,morphcolor_vertex:$p,morphnormal_vertex:Kp,morphtarget_pars_vertex:jp,morphtarget_vertex:Qp,normal_fragment_begin:em,normal_fragment_maps:tm,normal_pars_fragment:nm,normal_pars_vertex:im,normal_vertex:sm,normalmap_pars_fragment:rm,clearcoat_normal_fragment_begin:am,clearcoat_normal_fragment_maps:om,clearcoat_pars_fragment:lm,iridescence_pars_fragment:cm,opaque_fragment:hm,packing:um,premultiplied_alpha_fragment:dm,project_vertex:fm,dithering_fragment:pm,dithering_pars_fragment:mm,roughnessmap_fragment:gm,roughnessmap_pars_fragment:xm,shadowmap_pars_fragment:_m,shadowmap_pars_vertex:ym,shadowmap_vertex:vm,shadowmask_pars_fragment:Mm,skinbase_vertex:Sm,skinning_pars_vertex:bm,skinning_vertex:wm,skinnormal_vertex:Tm,specularmap_fragment:Am,specularmap_pars_fragment:Em,tonemapping_fragment:zm,tonemapping_pars_fragment:Cm,transmission_fragment:Rm,transmission_pars_fragment:Im,uv_pars_fragment:Pm,uv_pars_vertex:Lm,uv_vertex:Dm,worldpos_vertex:Nm,background_vert:Um,background_frag:Fm,backgroundCube_vert:Om,backgroundCube_frag:Bm,cube_vert:km,cube_frag:Vm,depth_vert:Gm,depth_frag:Hm,distance_vert:Wm,distance_frag:Xm,equirect_vert:qm,equirect_frag:Ym,linedashed_vert:Zm,linedashed_frag:Jm,meshbasic_vert:$m,meshbasic_frag:Km,meshlambert_vert:jm,meshlambert_frag:Qm,meshmatcap_vert:eg,meshmatcap_frag:tg,meshnormal_vert:ng,meshnormal_frag:ig,meshphong_vert:sg,meshphong_frag:rg,meshphysical_vert:ag,meshphysical_frag:og,meshtoon_vert:lg,meshtoon_frag:cg,points_vert:hg,points_frag:ug,shadow_vert:dg,shadow_frag:fg,sprite_vert:pg,sprite_frag:mg},ve={common:{diffuse:{value:new Ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ce(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Ze(16777215)},opacity:{value:1},center:{value:new ce(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Dn={basic:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},envMapIntensity:{value:1}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:kt([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},specular:{value:new Ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:kt([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:kt([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Ze(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:kt([ve.points,ve.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:kt([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:kt([ve.common,ve.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:kt([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:kt([ve.sprite,ve.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distance:{uniforms:kt([ve.common,ve.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distance_vert,fragmentShader:je.distance_frag},shadow:{uniforms:kt([ve.lights,ve.fog,{color:{value:new Ze(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Dn.physical={uniforms:kt([Dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ce(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ce},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Ze(0)},specularColor:{value:new Ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ce},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};var mo={r:0,b:0,g:0},gg=new mt,vu=new qe;vu.set(-1,0,0,0,1,0,0,0,1);function xg(i,e,t,n,s,r){let a=new Ze(0),o=s===!0?0:1,l,c,u=null,g=0,f=null;function m(b){let T=b.isScene===!0?b.background:null;if(T&&T.isTexture){let y=b.backgroundBlurriness>0;T=e.get(T,y)}return T}function h(b){let T=!1,y=m(b);y===null?p(a,o):y&&y.isColor&&(p(y,1),T=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||T)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(b,T){let y=m(T);y&&(y.isCubeTexture||y.mapping===lr)?(c===void 0&&(c=new Xe(new yn(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ri(Dn.backgroundCube.uniforms),vertexShader:Dn.backgroundCube.vertexShader,fragmentShader:Dn.backgroundCube.fragmentShader,side:Wt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,v,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=T.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(gg.makeRotationFromEuler(T.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(vu),c.material.toneMapped=tt.getTransfer(y.colorSpace)!==ut,(u!==y||g!==y.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,g=y.version,f=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Xe(new li(2,2),new rn({name:"BackgroundMaterial",uniforms:Ri(Dn.background.uniforms),vertexShader:Dn.background.vertexShader,fragmentShader:Dn.background.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=T.backgroundIntensity,l.material.toneMapped=tt.getTransfer(y.colorSpace)!==ut,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||g!==y.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,g=y.version,f=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,T){b.getRGB(mo,kl(i)),t.buffers.color.setClear(mo.r,mo.g,mo.b,T,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,T=1){a.set(b),o=T,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:h,addToRenderList:x,dispose:d}}function _g(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(L,P,D,I,N){let k=!1,H=g(L,I,D,P);r!==H&&(r=H,c(r.object)),k=m(L,I,D,N),k&&h(L,I,D,N),N!==null&&e.update(N,i.ELEMENT_ARRAY_BUFFER),(k||a)&&(a=!1,y(L,P,D,I),N!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(N).buffer))}function l(){return i.createVertexArray()}function c(L){return i.bindVertexArray(L)}function u(L){return i.deleteVertexArray(L)}function g(L,P,D,I){let N=I.wireframe===!0,k=n[P.id];k===void 0&&(k={},n[P.id]=k);let H=L.isInstancedMesh===!0?L.id:0,J=k[H];J===void 0&&(J={},k[H]=J);let X=J[D.id];X===void 0&&(X={},J[D.id]=X);let C=X[N];return C===void 0&&(C=f(l()),X[N]=C),C}function f(L){let P=[],D=[],I=[];for(let N=0;N<t;N++)P[N]=0,D[N]=0,I[N]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:I,object:L,attributes:{},index:null}}function m(L,P,D,I){let N=r.attributes,k=P.attributes,H=0,J=D.getAttributes();for(let X in J)if(J[X].location>=0){let O=N[X],W=k[X];if(W===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(W=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(W=L.instanceColor)),O===void 0||O.attribute!==W||W&&O.data!==W.data)return!0;H++}return r.attributesNum!==H||r.index!==I}function h(L,P,D,I){let N={},k=P.attributes,H=0,J=D.getAttributes();for(let X in J)if(J[X].location>=0){let O=k[X];O===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(O=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(O=L.instanceColor));let W={};W.attribute=O,O&&O.data&&(W.data=O.data),N[X]=W,H++}r.attributes=N,r.attributesNum=H,r.index=I}function x(){let L=r.newAttributes;for(let P=0,D=L.length;P<D;P++)L[P]=0}function p(L){d(L,0)}function d(L,P){let D=r.newAttributes,I=r.enabledAttributes,N=r.attributeDivisors;D[L]=1,I[L]===0&&(i.enableVertexAttribArray(L),I[L]=1),N[L]!==P&&(i.vertexAttribDivisor(L,P),N[L]=P)}function b(){let L=r.newAttributes,P=r.enabledAttributes;for(let D=0,I=P.length;D<I;D++)P[D]!==L[D]&&(i.disableVertexAttribArray(D),P[D]=0)}function T(L,P,D,I,N,k,H){H===!0?i.vertexAttribIPointer(L,P,D,N,k):i.vertexAttribPointer(L,P,D,I,N,k)}function y(L,P,D,I){x();let N=I.attributes,k=D.getAttributes(),H=P.defaultAttributeValues;for(let J in k){let X=k[J];if(X.location>=0){let C=N[J];if(C===void 0&&(J==="instanceMatrix"&&L.instanceMatrix&&(C=L.instanceMatrix),J==="instanceColor"&&L.instanceColor&&(C=L.instanceColor)),C!==void 0){let O=C.normalized,W=C.itemSize,Z=e.get(C);if(Z===void 0)continue;let be=Z.buffer,Te=Z.type,He=Z.bytesPerElement,j=Te===i.INT||Te===i.UNSIGNED_INT||C.gpuType===za;if(C.isInterleavedBufferAttribute){let ee=C.data,ue=ee.stride,Le=C.offset;if(ee.isInstancedInterleavedBuffer){for(let pe=0;pe<X.locationSize;pe++)d(X.location+pe,ee.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let pe=0;pe<X.locationSize;pe++)p(X.location+pe);i.bindBuffer(i.ARRAY_BUFFER,be);for(let pe=0;pe<X.locationSize;pe++)T(X.location+pe,W/X.locationSize,Te,O,ue*He,(Le+W/X.locationSize*pe)*He,j)}else{if(C.isInstancedBufferAttribute){for(let ee=0;ee<X.locationSize;ee++)d(X.location+ee,C.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=C.meshPerAttribute*C.count)}else for(let ee=0;ee<X.locationSize;ee++)p(X.location+ee);i.bindBuffer(i.ARRAY_BUFFER,be);for(let ee=0;ee<X.locationSize;ee++)T(X.location+ee,W/X.locationSize,Te,O,W*He,W/X.locationSize*ee*He,j)}}else if(H!==void 0){let O=H[J];if(O!==void 0)switch(O.length){case 2:i.vertexAttrib2fv(X.location,O);break;case 3:i.vertexAttrib3fv(X.location,O);break;case 4:i.vertexAttrib4fv(X.location,O);break;default:i.vertexAttrib1fv(X.location,O)}}}}b()}function w(){M();for(let L in n){let P=n[L];for(let D in P){let I=P[D];for(let N in I){let k=I[N];for(let H in k)u(k[H].object),delete k[H];delete I[N]}}delete n[L]}}function v(L){if(n[L.id]===void 0)return;let P=n[L.id];for(let D in P){let I=P[D];for(let N in I){let k=I[N];for(let H in k)u(k[H].object),delete k[H];delete I[N]}}delete n[L.id]}function E(L){for(let P in n){let D=n[P];for(let I in D){let N=D[I];if(N[L.id]===void 0)continue;let k=N[L.id];for(let H in k)u(k[H].object),delete k[H];delete N[L.id]}}}function _(L){for(let P in n){let D=n[P],I=L.isInstancedMesh===!0?L.id:0,N=D[I];if(N!==void 0){for(let k in N){let H=N[k];for(let J in H)u(H[J].object),delete H[J];delete N[k]}delete D[I],Object.keys(D).length===0&&delete n[P]}}}function M(){z(),a=!0,r!==s&&(r=s,c(r.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:M,resetDefaultState:z,dispose:w,releaseStatesOfGeometry:v,releaseStatesOfObject:_,releaseStatesOfProgram:E,initAttributes:x,enableAttribute:p,disableUnusedAttributes:b}}function yg(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,u){u!==0&&(i.drawArraysInstanced(n,l,c,u),t.update(c,n,u))}function o(l,c,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function vg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let E=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==Qt&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){let _=E===Xt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==Kt&&E!==jt&&!_&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",u=l(c);u!==c&&(Oe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let g=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),h=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),T=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),v=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:g,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:h,maxTextureSize:x,maxCubemapSize:p,maxAttributes:d,maxVertexUniforms:b,maxVaryings:T,maxFragmentUniforms:y,maxSamples:w,samples:v}}function Mg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new xn,o=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(g,f){let m=g.length!==0||f||n!==0||s;return s=f,n=g.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(g,f){t=u(g,f,0)},this.setState=function(g,f,m){let h=g.clippingPlanes,x=g.clipIntersection,p=g.clipShadows,d=i.get(g);if(!s||h===null||h.length===0||r&&!p)r?u(null):c();else{let b=r?0:n,T=b*4,y=d.clippingState||null;l.value=y,y=u(h,f,T,m);for(let w=0;w!==T;++w)y[w]=t[w];d.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(g,f,m,h){let x=g!==null?g.length:0,p=null;if(x!==0){if(p=l.value,h!==!0||p===null){let d=m+x*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<d)&&(p=new Float32Array(d));for(let T=0,y=m;T!==x;++T,y+=4)a.copy(g[T]).applyMatrix4(b,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var _s=4,Sg=6,bg=20,wg=256,gr=new hs,jh=new Ze,Jl=null,$l=0,Kl=0,jl=!1,Tg=new F,Ii=new F,vs=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Tg}=r;Jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Jl,$l,Kl),this._renderer.xr.enabled=jl,e.scissorTest=!1,xs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===di||e.mapping===zi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jl=this._renderer.getRenderTarget(),$l=this._renderer.getActiveCubeFace(),Kl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dt,minFilter:dt,generateMipmaps:!1,type:Xt,format:Qt,colorSpace:Hn,depthBuffer:!1},s=Qh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Qh(e,t,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Ag(r)),this._blurMaterial=zg(r,e,t),this._ggxMaterial=Eg(r,e,t)}return s}_compileMaterial(e){let t=new Xe(new rt,e);this._renderer.compile(t,gr)}_sceneToCubeUV(e,t,n,s,r){let l=new Ut(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],g=this._renderer,f=g.autoClear,m=g.toneMapping;g.getClearColor(jh),g.toneMapping=Mn,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(s),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new yn,new bi({name:"PMREM.Background",side:Wt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,d=!1,b=e.background;b?b.isColor&&(p.color.copy(b),e.background=null,d=!0):(p.color.copy(jh),d=!0);for(let T=0;T<6;T++){let y=T%3;y===0?(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+u[T],r.y,r.z)):y===1?(l.up.set(0,0,c[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+u[T],r.z)):(l.up.set(0,c[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+u[T]));let w=this._cubeSize;xs(s,y*w,T>2?w:0,w,w),g.setRenderTarget(s),d&&g.render(x,l),g.render(e,l)}g.toneMapping=m,g.autoClear=f,e.background=b}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===di||e.mapping===zi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=eu());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;xs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,gr)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),g=Math.sqrt(c*c-u*u),f=c*1.25,m=g*f,{_lodMax:h}=this,x=this._sizeLods[n],p=3*x*(n>h-_s?n-h+_s:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=h-t,xs(r,p,d,3*x,2*x),s.setRenderTarget(r),s.render(o,gr),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=h-n,xs(e,p,d,3*x,2*x),s.setRenderTarget(e),s.render(o,gr)}_blur(e,t,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],g=3*u*(s>this._lodMax-_s?s-this._lodMax+_s:0),f=4*(this._cubeSize-u);xs(t,g,f,3*u,2*u),a.setRenderTarget(t),a.render(l,gr)}};function Ag(i){let e=[],t=[],n=i,s=i-_s+1+Sg;for(let r=0;r<s;r++){let a=Math.pow(2,n);e.push(a);let o=1/(a-2),l=-o,c=1+o,u=[l,l,c,l,c,c,l,l,c,c,l,c],g=6,f=6,m=3,h=new Float32Array(m*f*g),x=new Float32Array(m*f*g);for(let d=0;d<g;d++){let b=d%3*2/3-1,T=d>2?0:-1,y=[b,T,0,b+2/3,T,0,b+2/3,T+1,0,b,T,0,b+2/3,T+1,0,b,T+1,0];h.set(y,m*f*d);for(let w=0;w<f;w++){let v=u[w*2]*2-1,E=u[w*2+1]*2-1;d===0?Ii.set(1,E,v):d===1?Ii.set(-v,1,-E):d===2?Ii.set(-v,E,1):d===3?Ii.set(-1,E,-v):d===4?Ii.set(-v,-1,E):Ii.set(v,E,-1),Ii.toArray(x,(d*f+w)*m)}}let p=new rt;p.setAttribute("position",new Ft(h,m)),p.setAttribute("outputDirection",new Ft(x,m)),t.push(new Xe(p,null)),n>_s&&n--}return{lodMeshes:t,sizeLods:e}}function Qh(i,e,t){let n=new Jt(i,e,t);return n.texture.mapping=lr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Eg(i,e,t){return new rn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function zg(i,e,t){return new rn({name:"SphericalGaussianBlur",defines:{SAMPLES:bg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function eu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yo(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function tu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function yo(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var xo=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Vs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yn(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ri(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Wt,blending:Pn});r.uniforms.tEquirect.value=t;let a=new Xe(s,r),o=t.minFilter;return t.minFilter===on&&(t.minFilter=dt),new ba(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}};function Cg(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,m=!1){return f==null?null:m?a(f):r(f)}function r(f){if(f&&f.isTexture){let m=f.mapping;if(m===ps||m===Aa)if(e.has(f)){let h=e.get(f).texture;return o(h,f.mapping)}else{let h=f.image;if(h&&h.height>0){let x=new xo(h.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){let m=f.mapping,h=m===ps||m===Aa,x=m===di||m===zi;if(h||x){let p=t.get(f),d=p!==void 0?p.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new vs(i)),p=h?n.fromEquirectangular(f,p):n.fromCubemap(f,p),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),p.texture;if(p!==void 0)return p.texture;{let b=f.image;return h&&b&&b.height>0||x&&b&&l(b)?(n===null&&(n=new vs(i)),p=h?n.fromEquirectangular(f):n.fromCubemap(f),p.texture.pmremVersion=f.pmremVersion,t.set(f,p),f.addEventListener("dispose",u),p.texture):null}}}return f}function o(f,m){return m===ps?f.mapping=di:m===Aa&&(f.mapping=zi),f}function l(f){let m=0,h=6;for(let x=0;x<h;x++)f[x]!==void 0&&m++;return m===h}function c(f){let m=f.target;m.removeEventListener("dispose",c);let h=e.get(m);h!==void 0&&(e.delete(m),h.dispose())}function u(f){let m=f.target;m.removeEventListener("dispose",u);let h=t.get(m);h!==void 0&&(t.delete(m),h.dispose())}function g(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:g}}function Rg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Si("WebGLRenderer: "+n+" extension not supported."),s}}}function Ig(i,e,t,n){let s={},r=new WeakMap;function a(g){let f=g.target;f.index!==null&&e.remove(f.index);for(let h in f.attributes)e.remove(f.attributes[h]);f.removeEventListener("dispose",a),delete s[f.id];let m=r.get(f);m&&(e.remove(m),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(g,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(g){let f=g.attributes;for(let m in f)e.update(f[m],i.ARRAY_BUFFER)}function c(g){let f=[],m=g.index,h=g.attributes.position,x=0;if(h===void 0)return;if(m!==null){let b=m.array;x=m.version;for(let T=0,y=b.length;T<y;T+=3){let w=b[T+0],v=b[T+1],E=b[T+2];f.push(w,v,v,E,E,w)}}else{let b=h.array;x=h.version;for(let T=0,y=b.length/3-1;T<y;T+=3){let w=T+0,v=T+1,E=T+2;f.push(w,v,v,E,E,w)}}let p=new(h.count>=65535?Bs:Os)(f,1);p.version=x;let d=r.get(g);d&&e.remove(d),r.set(g,p)}function u(g){let f=r.get(g);if(f){let m=g.index;m!==null&&f.version<m.version&&c(g)}else c(g);return r.get(g)}return{get:o,update:l,getWireframeAttribute:u}}function Pg(i,e,t){let n;function s(g){n=g}let r,a;function o(g){r=g.type,a=g.bytesPerElement}function l(g,f){i.drawElements(n,f,r,g*a),t.update(f,n,1)}function c(g,f,m){m!==0&&(i.drawElementsInstanced(n,f,r,g*a,m),t.update(f,n,m))}function u(g,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,g,0,m);let x=0;for(let p=0;p<m;p++)x+=f[p];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u}function Lg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Dg(i,e,t){let n=new WeakMap,s=new ot;function r(a,o,l){let c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,g=u!==void 0?u.length:0,f=n.get(o);if(f===void 0||f.count!==g){let M=function(){E.dispose(),n.delete(o),o.removeEventListener("dispose",M)};f!==void 0&&f.texture.dispose();let m=o.morphAttributes.position!==void 0,h=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],T=0;m===!0&&(T=1),h===!0&&(T=2),x===!0&&(T=3);let y=o.attributes.position.count*T,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let v=new Float32Array(y*w*4*g),E=new Us(v,y,w,g);E.type=jt,E.needsUpdate=!0;let _=T*4;for(let z=0;z<g;z++){let L=p[z],P=d[z],D=b[z],I=y*w*4*z;for(let N=0;N<L.count;N++){let k=N*_;m===!0&&(s.fromBufferAttribute(L,N),v[I+k+0]=s.x,v[I+k+1]=s.y,v[I+k+2]=s.z,v[I+k+3]=0),h===!0&&(s.fromBufferAttribute(P,N),v[I+k+4]=s.x,v[I+k+5]=s.y,v[I+k+6]=s.z,v[I+k+7]=0),x===!0&&(s.fromBufferAttribute(D,N),v[I+k+8]=s.x,v[I+k+9]=s.y,v[I+k+10]=s.z,v[I+k+11]=D.itemSize===4?s.w:1)}}f={count:g,texture:E,size:new ce(y,w)},n.set(o,f),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let m=0;for(let x=0;x<c.length;x++)m+=c[x];let h=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(i,"morphTargetBaseInfluence",h),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Ng(i,e,t,n,s){let r=new WeakMap;function a(c){let u=s.render.frame,g=c.geometry,f=e.get(c,g);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==u&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,u))),c.isSkinnedMesh){let m=c.skeleton;r.get(m)!==u&&(m.update(),r.set(m,u))}return f}function o(){r=new WeakMap}function l(c){let u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}var Ug={[Sl]:"LINEAR_TONE_MAPPING",[bl]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[Tl]:"ACES_FILMIC_TONE_MAPPING",[El]:"AGX_TONE_MAPPING",[or]:"NEUTRAL_TONE_MAPPING",[Al]:"CUSTOM_TONE_MAPPING"};function Fg(i,e,t,n,s,r){let a=new Jt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new rt;c.setAttribute("position",new Be([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Be([0,2,0,0,2,0],2));let u=new ca({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Xe(c,u),f=new hs(-1,1,1,-1,0,1),m=null,h=null,x=!1,p,d=null,b=[],T=!1;this.setSize=function(y,w){a.setSize(y,w),o!==null&&o.setSize(y,w),l!==null&&l.setSize(y,w);for(let v=0;v<b.length;v++){let E=b[v];E.setSize&&E.setSize(y,w)}},this.setEffects=function(y){b=y,T=b.length>0&&b[0].isRenderPass===!0;let w=a.width,v=a.height;b.length>0&&o===null&&(o=new Jt(w,v,{type:Xt,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(w,v,{type:Xt,depthBuffer:!1,stencilBuffer:!1}));for(let E=0;E<b.length;E++){let _=b[E];_.setSize&&_.setSize(w,v)}},this.begin=function(y,w){if(x||y.toneMapping===Mn&&b.length===0)return!1;if(d=w,w!==null){let v=w.width,E=w.height;(a.width!==v||a.height!==E)&&this.setSize(v,E)}return T===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Mn,!0},this.hasRenderPass=function(){return T},this.end=function(y,w){y.toneMapping=p,x=!0;let v=a,E=o;for(let _=0;_<b.length;_++){let M=b[_];M.enabled!==!1&&(M.render(y,E,v,w),M.needsSwap!==!1&&(v=E,E=E===o?l:o))}if(m!==y.outputColorSpace||h!==y.toneMapping){m=y.outputColorSpace,h=y.toneMapping,u.defines={},tt.getTransfer(m)===ut&&(u.defines.SRGB_TRANSFER="");let _=Ug[h];_&&(u.defines[_]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(d),y.render(g,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),u.dispose()}}var Mu=new Rt,tc=new ai(1,1),Su=new Us,bu=new na,wu=new Vs,nu=[],iu=[],su=new Float32Array(16),ru=new Float32Array(9),au=new Float32Array(4);function Ms(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=nu[s];if(r===void 0&&(r=new Float32Array(s),nu[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function vo(i,e){let t=iu[e];t===void 0&&(t=new Int32Array(e),iu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Vg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Gg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;au.set(n),i.uniformMatrix2fv(this.addr,!1,au),Tt(t,n)}}function Hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;ru.set(n),i.uniformMatrix3fv(this.addr,!1,ru),Tt(t,n)}}function Wg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;su.set(n),i.uniformMatrix4fv(this.addr,!1,su),Tt(t,n)}}function Xg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function qg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Jg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function $g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function Kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function jg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Qg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(tc.compareFunction=t.isReversedDepthBuffer()?fo:uo,r=tc):r=Mu,t.setTexture2D(e||r,s)}function e0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||bu,s)}function t0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||wu,s)}function n0(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Su,s)}function i0(i){switch(i){case 5126:return Og;case 35664:return Bg;case 35665:return kg;case 35666:return Vg;case 35674:return Gg;case 35675:return Hg;case 35676:return Wg;case 5124:case 35670:return Xg;case 35667:case 35671:return qg;case 35668:case 35672:return Yg;case 35669:case 35673:return Zg;case 5125:return Jg;case 36294:return $g;case 36295:return Kg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Qg;case 35679:case 36299:case 36307:return e0;case 35680:case 36300:case 36308:case 36293:return t0;case 36289:case 36303:case 36311:case 36292:return n0}}function s0(i,e){i.uniform1fv(this.addr,e)}function r0(i,e){let t=Ms(e,this.size,2);i.uniform2fv(this.addr,t)}function a0(i,e){let t=Ms(e,this.size,3);i.uniform3fv(this.addr,t)}function o0(i,e){let t=Ms(e,this.size,4);i.uniform4fv(this.addr,t)}function l0(i,e){let t=Ms(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function c0(i,e){let t=Ms(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function h0(i,e){let t=Ms(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function u0(i,e){i.uniform1iv(this.addr,e)}function d0(i,e){i.uniform2iv(this.addr,e)}function f0(i,e){i.uniform3iv(this.addr,e)}function p0(i,e){i.uniform4iv(this.addr,e)}function m0(i,e){i.uniform1uiv(this.addr,e)}function g0(i,e){i.uniform2uiv(this.addr,e)}function x0(i,e){i.uniform3uiv(this.addr,e)}function _0(i,e){i.uniform4uiv(this.addr,e)}function y0(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=tc:a=Mu;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function v0(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||bu,r[a])}function M0(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||wu,r[a])}function S0(i,e,t){let n=this.cache,s=e.length,r=vo(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Su,r[a])}function b0(i){switch(i){case 5126:return s0;case 35664:return r0;case 35665:return a0;case 35666:return o0;case 35674:return l0;case 35675:return c0;case 35676:return h0;case 5124:case 35670:return u0;case 35667:case 35671:return d0;case 35668:case 35672:return f0;case 35669:case 35673:return p0;case 5125:return m0;case 36294:return g0;case 36295:return x0;case 36296:return _0;case 35678:case 36198:case 36298:case 36306:case 35682:return y0;case 35679:case 36299:case 36307:return v0;case 35680:case 36300:case 36308:case 36293:return M0;case 36289:case 36303:case 36311:case 36292:return S0}}var nc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=i0(t.type)}},ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=b0(t.type)}},sc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Ql=/(\w+)(\])?(\[|\.)?/g;function ou(i,e){i.seq.push(e),i.map[e.id]=e}function w0(i,e,t){let n=i.name,s=n.length;for(Ql.lastIndex=0;;){let r=Ql.exec(n),a=Ql.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){ou(t,c===void 0?new nc(o,i,e):new ic(o,i,e));break}else{let g=t.map[o];g===void 0&&(g=new sc(o),ou(t,g)),t=g}}}var ys=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);w0(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function lu(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var T0=37297,A0=0;function E0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var cu=new qe;function z0(i){tt._getMatrix(cu,tt.workingColorSpace,i);let e=`mat3( ${cu.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(i)){case Ds:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Oe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function hu(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+E0(i.getShaderSource(e),o)}else return r}function C0(i,e){let t=z0(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var R0={[Sl]:"Linear",[bl]:"Reinhard",[wl]:"Cineon",[Tl]:"ACESFilmic",[El]:"AgX",[or]:"Neutral",[Al]:"Custom"};function I0(i,e){let t=R0[e];return t===void 0?(Oe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var go=new F;function P0(){tt.getLuminanceCoefficients(go);let i=go.x.toFixed(4),e=go.y.toFixed(4),t=go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function L0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function D0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function N0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function _r(i){return i!==""}function uu(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var U0=/^[ \t]*#include +<([\w\d./]+)>/gm;function rc(i){return i.replace(U0,O0)}var F0=new Map;function O0(i,e){let t=je[e];if(t===void 0){let n=F0.get(e);if(n!==void 0)t=je[n],Oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return rc(t)}var B0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function fu(i){return i.replace(B0,k0)}function k0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function pu(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}var V0={[Ai]:"SHADOWMAP_TYPE_PCF",[ds]:"SHADOWMAP_TYPE_VSM"};function G0(i){return V0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var H0={[di]:"ENVMAP_TYPE_CUBE",[zi]:"ENVMAP_TYPE_CUBE",[lr]:"ENVMAP_TYPE_CUBE_UV"};function W0(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":H0[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var X0={[zi]:"ENVMAP_MODE_REFRACTION"};function q0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":X0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Y0={[Ml]:"ENVMAP_BLENDING_MULTIPLY",[Eh]:"ENVMAP_BLENDING_MIX",[zh]:"ENVMAP_BLENDING_ADD"};function Z0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Y0[i.combine]||"ENVMAP_BLENDING_NONE"}function J0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function $0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=G0(t),c=W0(t),u=q0(t),g=Z0(t),f=J0(t),m=L0(t),h=D0(r),x=s.createProgram(),p,d,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(_r).join(`
`),p.length>0&&(p+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h].filter(_r).join(`
`),d.length>0&&(d+=`
`)):(p=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),d=[pu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,h,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+g:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Mn?"#define TONE_MAPPING":"",t.toneMapping!==Mn?je.tonemapping_pars_fragment:"",t.toneMapping!==Mn?I0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,C0("linearToOutputTexel",t.outputColorSpace),P0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(_r).join(`
`)),a=rc(a),a=uu(a,t),a=du(a,t),o=rc(o),o=uu(o,t),o=du(o,t),a=fu(a),o=fu(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,d=["#define varying in",t.glslVersion===Ul?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ul?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);let T=b+p+a,y=b+d+o,w=lu(s,s.VERTEX_SHADER,T),v=lu(s,s.FRAGMENT_SHADER,y);s.attachShader(x,w),s.attachShader(x,v),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(L){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(x)||"",D=s.getShaderInfoLog(w)||"",I=s.getShaderInfoLog(v)||"",N=P.trim(),k=D.trim(),H=I.trim(),J=!0,X=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(J=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,w,v);else{let C=hu(s,w,"vertex"),O=hu(s,v,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+N+`
`+C+`
`+O)}else N!==""?Oe("WebGLProgram: Program Info Log:",N):(k===""||H==="")&&(X=!1);X&&(L.diagnostics={runnable:J,programLog:N,vertexShader:{log:k,prefix:p},fragmentShader:{log:H,prefix:d}})}s.deleteShader(w),s.deleteShader(v),_=new ys(s,x),M=N0(s,x)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let M;this.getAttributes=function(){return M===void 0&&E(this),M};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(x,T0)),z},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=A0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=w,this.fragmentShader=v,this}var K0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new oc(e),t.set(e,n)),n}},oc=class{constructor(e){this.id=K0++,this.code=e,this.usedTimes=0}};function j0(i){return i===pi||i===pr||i===mr}function Q0(i,e,t,n,s,r){let a=new is,o=new ac,l=new Set,c=[],u=new Map,g=n.logarithmicDepthBuffer,f=n.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function h(_){return l.add(_),_===0?"uv":`uv${_}`}function x(_,M,z,L,P,D){let I=L.fog,N=P.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?L.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,J=e.get(_.envMap||k,H),X=J&&J.mapping===lr?J.image.height:null,C=m[_.type];_.precision!==null&&(f=n.getMaxPrecision(_.precision),f!==_.precision&&Oe("WebGLProgram.getParameters:",_.precision,"not supported, using",f,"instead."));let O=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,W=O!==void 0?O.length:0,Z=0;N.morphAttributes.position!==void 0&&(Z=1),N.morphAttributes.normal!==void 0&&(Z=2),N.morphAttributes.color!==void 0&&(Z=3);let be,Te,He,j;if(C){let gt=Dn[C];be=gt.vertexShader,Te=gt.fragmentShader}else{be=_.vertexShader,Te=_.fragmentShader;let gt=o.getVertexShaderStage(_),ct=o.getFragmentShaderStage(_);o.update(_,gt,ct),He=gt.id,j=ct.id}let ee=i.getRenderTarget(),ue=i.state.buffers.depth.getReversed(),Le=P.isInstancedMesh===!0,pe=P.isBatchedMesh===!0,ke=!!_.map,nt=!!_.matcap,ie=!!J,le=!!_.aoMap,K=!!_.lightMap,ae=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,Re=!!_.displacementMap,De=!!_.emissiveMap,We=!!_.metalnessMap,Ye=!!_.roughnessMap,U=_.anisotropy>0,lt=_.clearcoat>0,Qe=_.dispersion>0,R=_.retroreflectivity>0,S=_.iridescence>0,G=_.sheen>0,$=_.transmission>0,te=U&&!!_.anisotropyMap,de=lt&&!!_.clearcoatMap,fe=lt&&!!_.clearcoatNormalMap,ne=lt&&!!_.clearcoatRoughnessMap,re=S&&!!_.iridescenceMap,me=S&&!!_.iridescenceThicknessMap,Ne=G&&!!_.sheenColorMap,ye=G&&!!_.sheenRoughnessMap,ge=!!_.specularMap,Ue=!!_.specularColorMap,Ve=!!_.specularIntensityMap,Je=$&&!!_.transmissionMap,V=$&&!!_.thicknessMap,xe=!!_.gradientMap,se=!!_.alphaMap,_e=_.alphaTest>0,we=!!_.alphaHash,oe=!!_.extensions,Fe=Mn;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Fe=i.toneMapping);let Ie={shaderID:C,shaderType:_.type,shaderName:_.name,vertexShader:be,fragmentShader:Te,defines:_.defines,customVertexShaderID:He,customFragmentShaderID:j,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:f,batching:pe,batchingColor:pe&&P._colorsTexture!==null,instancing:Le,instancingColor:Le&&P.instanceColor!==null,instancingMorph:Le&&P.morphTexture!==null,outputColorSpace:ee===null?i.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:tt.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ke,matcap:nt,envMap:ie,envMapMode:ie&&J.mapping,envMapCubeUVHeight:X,aoMap:le,lightMap:K,bumpMap:ae,normalMap:he,displacementMap:Re,emissiveMap:De,normalMapObjectSpace:he&&_.normalMapType===Ih,normalMapTangentSpace:he&&_.normalMapType===ho,packedNormalMap:he&&_.normalMapType===ho&&j0(_.normalMap.format),metalnessMap:We,roughnessMap:Ye,anisotropy:U,anisotropyMap:te,clearcoat:lt,clearcoatMap:de,clearcoatNormalMap:fe,clearcoatRoughnessMap:ne,dispersion:Qe,retroreflection:R,iridescence:S,iridescenceMap:re,iridescenceThicknessMap:me,sheen:G,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:ge,specularColorMap:Ue,specularIntensityMap:Ve,transmission:$,transmissionMap:Je,thicknessMap:V,gradientMap:xe,opaque:_.transparent===!1&&_.blending===fs&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:_e,alphaHash:we,combine:_.combine,mapUv:ke&&h(_.map.channel),aoMapUv:le&&h(_.aoMap.channel),lightMapUv:K&&h(_.lightMap.channel),bumpMapUv:ae&&h(_.bumpMap.channel),normalMapUv:he&&h(_.normalMap.channel),displacementMapUv:Re&&h(_.displacementMap.channel),emissiveMapUv:De&&h(_.emissiveMap.channel),metalnessMapUv:We&&h(_.metalnessMap.channel),roughnessMapUv:Ye&&h(_.roughnessMap.channel),anisotropyMapUv:te&&h(_.anisotropyMap.channel),clearcoatMapUv:de&&h(_.clearcoatMap.channel),clearcoatNormalMapUv:fe&&h(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&h(_.clearcoatRoughnessMap.channel),iridescenceMapUv:re&&h(_.iridescenceMap.channel),iridescenceThicknessMapUv:me&&h(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&h(_.sheenColorMap.channel),sheenRoughnessMapUv:ye&&h(_.sheenRoughnessMap.channel),specularMapUv:ge&&h(_.specularMap.channel),specularColorMapUv:Ue&&h(_.specularColorMap.channel),specularIntensityMapUv:Ve&&h(_.specularIntensityMap.channel),transmissionMapUv:Je&&h(_.transmissionMap.channel),thicknessMapUv:V&&h(_.thicknessMap.channel),alphaMapUv:se&&h(_.alphaMap.channel),vertexTangents:!!N.attributes.tangent&&(he||U),vertexNormals:!!N.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!N.attributes.uv&&(ke||se),fog:!!I,useFog:_.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||N.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:ue,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:N.attributes.position!==void 0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:W,morphTextureStride:Z,numSunLights:M.sun.length,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numSunLightShadows:M.sunShadowMap.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numLightProbeGrids:D.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:Fe,decodeVideoTexture:ke&&_.map.isVideoTexture===!0&&tt.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:De&&_.emissiveMap.isVideoTexture===!0&&tt.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Bt,flipSided:_.side===Wt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:oe&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(oe&&_.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ie.vertexUv1s=l.has(1),Ie.vertexUv2s=l.has(2),Ie.vertexUv3s=l.has(3),l.clear(),Ie}function p(_){let M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(let z in _.defines)M.push(z),M.push(_.defines[z]);return _.isRawShaderMaterial===!1&&(d(M,_),b(M,_),M.push(i.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function d(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numSunLights),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numSunLightShadows),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.retroreflection&&a.enable(24),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),M.packedNormalMap&&a.enable(22),M.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),M.numLightProbeGrids>0&&a.enable(22),M.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function T(_){let M=m[_.type],z;if(M){let L=Dn[M];z=Jh.clone(L.uniforms)}else z=_.uniforms;return z}function y(_,M){let z=u.get(M);return z!==void 0?++z.usedTimes:(z=new $0(i,M,_,s),c.push(z),u.set(M,z)),z}function w(_){if(--_.usedTimes===0){let M=c.indexOf(_);c[M]=c[c.length-1],c.pop(),u.delete(_.cacheKey),_.destroy()}}function v(_){o.remove(_)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:T,acquireProgram:y,releaseProgram:w,releaseShaderCache:v,programs:c,dispose:E}}function ex(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function tx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function mu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function gu(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,h,x,p,d){let b=i[e];return b===void 0?(b={id:f.id,object:f,geometry:m,material:h,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:p,group:d},i[e]=b):(b.id=f.id,b.object=f,b.geometry=m,b.material=h,b.materialVariant=a(f),b.groupOrder=x,b.renderOrder=f.renderOrder,b.z=p,b.group=d),e++,b}function l(f,m,h,x,p,d,b){b.reversedDepth===!0&&(p=-p);let T=o(f,m,h,x,p,d);h.transmission>0?n.push(T):h.transparent===!0?s.push(T):t.push(T)}function c(f,m,h,x,p,d){let b=o(f,m,h,x,p,d);h.transmission>0?n.unshift(b):h.transparent===!0?s.unshift(b):t.unshift(b)}function u(f,m){t.length>1&&t.sort(f||tx),n.length>1&&n.sort(m||mu),s.length>1&&s.sort(m||mu)}function g(){for(let f=e,m=i.length;f<m;f++){let h=i[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:g,sort:u}}function nx(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new gu,i.set(n,[a])):s>=r.length?(a=new gu,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function ix(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new Ze};break;case"SpotLight":t={position:new F,direction:new F,color:new Ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new Ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new Ze,groundColor:new Ze};break;case"RectAreaLight":t={color:new Ze,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function sx(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ce,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var rx=0;function ax(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ox(i){let e=new ix,t=sx(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new F);let s=new F,r=new mt,a=new mt;function o(c){let u=0,g=0,f=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let m=0,h=0,x=0,p=0,d=0,b=0,T=0,y=0,w=0,v=0,E=0,_=0,M=0,z=0;c.sort(ax);for(let P=0,D=c.length;P<D;P++){let I=c[P],N=I.color,k=I.intensity,H=I.distance,J=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===pi?J=I.shadow.map.texture:J=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=N.r*k,g+=N.g*k,f+=N.b*k;else if(I.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(I.sh.coefficients[X],k);z++}else if(I.isSunLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,O=t.get(I);O.shadowIntensity=C.intensity,O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize.copy(C.mapSize).multiply(C.getFrameExtents()),n.sunShadow[h]=O,n.sunShadowMap[h]=J;let W=C.getViewportCount();for(let Z=0;Z<W;Z++)n.sunShadowMatrix[x+Z]=C.getMatrix(Z),n.sunShadowCascade[x+Z]=C._cascadeData[Z];x+=W,h++}n.sun[m]=X,m++}else if(I.isDirectionalLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let C=I.shadow,O=t.get(I);O.shadowIntensity=C.intensity,O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,n.directionalShadow[p]=O,n.directionalShadowMap[p]=J,n.directionalShadowMatrix[p]=I.shadow.matrix,w++}n.directional[p]=X,p++}else if(I.isSpotLight){let X=e.get(I);X.position.setFromMatrixPosition(I.matrixWorld),X.color.copy(N).multiplyScalar(k),X.distance=H,X.coneCos=Math.cos(I.angle),X.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),X.decay=I.decay,n.spot[b]=X;let C=I.shadow;if(I.map&&(n.spotLightMap[_]=I.map,_++,C.updateMatrices(I),I.castShadow&&M++),n.spotLightMatrix[b]=C.matrix,I.castShadow){let O=t.get(I);O.shadowIntensity=C.intensity,O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,n.spotShadow[b]=O,n.spotShadowMap[b]=J,E++}b++}else if(I.isRectAreaLight){let X=e.get(I);X.color.copy(N).multiplyScalar(k),X.halfWidth.set(I.width*.5,0,0),X.halfHeight.set(0,I.height*.5,0),n.rectArea[T]=X,T++}else if(I.isPointLight){let X=e.get(I);if(X.color.copy(I.color).multiplyScalar(I.intensity),X.distance=I.distance,X.decay=I.decay,I.castShadow){let C=I.shadow,O=t.get(I);O.shadowIntensity=C.intensity,O.shadowBias=C.bias,O.shadowNormalBias=C.normalBias,O.shadowRadius=C.radius,O.shadowMapSize=C.mapSize,O.shadowCameraNear=C.camera.near,O.shadowCameraFar=C.camera.far,n.pointShadow[d]=O,n.pointShadowMap[d]=J,n.pointShadowMatrix[d]=I.shadow.matrix,v++}n.point[d]=X,d++}else if(I.isHemisphereLight){let X=e.get(I);X.skyColor.copy(I.color).multiplyScalar(k),X.groundColor.copy(I.groundColor).multiplyScalar(k),n.hemi[y]=X,y++}}T>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ve.LTC_FLOAT_1,n.rectAreaLTC2=ve.LTC_FLOAT_2):(n.rectAreaLTC1=ve.LTC_HALF_1,n.rectAreaLTC2=ve.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=g,n.ambient[2]=f;let L=n.hash;(L.sunLength!==m||L.directionalLength!==p||L.pointLength!==d||L.spotLength!==b||L.rectAreaLength!==T||L.hemiLength!==y||L.numSunShadows!==h||L.numDirectionalShadows!==w||L.numPointShadows!==v||L.numSpotShadows!==E||L.numSpotMaps!==_||L.numLightProbes!==z)&&(n.sun.length=m,n.directional.length=p,n.spot.length=b,n.rectArea.length=T,n.point.length=d,n.hemi.length=y,n.sunShadow.length=h,n.sunShadowMap.length=h,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=v,n.pointShadowMap.length=v,n.pointShadowMatrix.length=v,n.spotShadow.length=E,n.spotShadowMap.length=E,n.spotLightMatrix.length=E+_-M,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=M,n.numLightProbes=z,L.sunLength=m,L.directionalLength=p,L.pointLength=d,L.spotLength=b,L.rectAreaLength=T,L.hemiLength=y,L.numSunShadows=h,L.numDirectionalShadows=w,L.numPointShadows=v,L.numSpotShadows=E,L.numSpotMaps=_,L.numLightProbes=z,n.version=rx++)}function l(c,u){let g=0,f=0,m=0,h=0,x=0,p=0,d=u.matrixWorldInverse;for(let b=0,T=c.length;b<T;b++){let y=c[b];if(y.isSunLight){let w=n.sun[g];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),g++}else if(y.isDirectionalLight){let w=n.directional[f];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),f++}else if(y.isSpotLight){let w=n.spot[h];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(d),h++}else if(y.isRectAreaLight){let w=n.rectArea[x];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let w=n.point[m];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(d),m++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(d),p++}}}return{setup:o,setupView:l,state:n}}function xu(i){let e=new ox(i),t=[],n=[],s=[];function r(f){g.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function u(f){e.setupView(t,f)}let g={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:g,setupLights:c,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function lx(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new xu(i),e.set(s,[o])):r>=a.length?(o=new xu(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`,ux=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],dx=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],_u=new mt,xr=new F,ec=new F;function fx(i,e,t){let n=new as,s=new ce,r=new ce,a=new ot,o=new ha,l=new ua,c={},u=t.maxTextureSize,g={[Ct]:Wt,[Wt]:Ct,[Bt]:Bt},f=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ce},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),m=f.clone();m.defines.HORIZONTAL_PASS=1;let h=new rt;h.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new Xe(h,f),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ai;let d=this.type;this.render=function(v,E,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;this.type===lh&&(Oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ai);let M=i.getRenderTarget(),z=i.getActiveCubeFace(),L=i.getActiveMipmapLevel(),P=i.state;P.setBlending(Pn),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let D=d!==this.type;D&&E.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(N=>N.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,N=v.length;I<N;I++){let k=v[I],H=k.shadow;if(H===void 0){Oe("WebGLShadowMap:",k,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let J=H.getFrameExtents();s.multiply(J),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/J.x),s.x=r.x*J.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/J.y),s.y=r.y*J.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||D===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ds){if(k.isPointLight){Oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new Jt(s.x,s.y,{format:pi,type:Xt,minFilter:dt,magFilter:dt,generateMipmaps:!1}),H.map.texture.name=k.name+".shadowMap",H.map.depthTexture=new ai(s.x,s.y,jt),H.map.depthTexture.name=k.name+".shadowMapDepth",H.map.depthTexture.format=Cn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt}else k.isPointLight?(H.map=new xo(s.x),H.map.depthTexture=new ia(s.x,Sn)):(H.map=new Jt(s.x,s.y),H.map.depthTexture=new ai(s.x,s.y,Sn)),H.map.depthTexture.name=k.name+".shadowMap",H.map.depthTexture.format=Cn,this.type===Ai?(H.map.depthTexture.compareFunction=X?fo:uo,H.map.depthTexture.minFilter=dt,H.map.depthTexture.magFilter=dt):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=zt,H.map.depthTexture.magFilter=zt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let C=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();k.isPointLight!==!0&&H.updateMatrices(k,_);for(let O=0;O<C;O++){let W=H.getCamera(O);if(k.isPointLight){let Z=H.camera,be=H.matrix,Te=k.distance||Z.far;Te!==Z.far&&(Z.far=Te,Z.updateProjectionMatrix()),xr.setFromMatrixPosition(k.matrixWorld),Z.position.copy(xr),ec.copy(Z.position),ec.add(ux[O]),Z.up.copy(dx[O]),Z.lookAt(ec),Z.updateMatrixWorld(),be.makeTranslation(-xr.x,-xr.y,-xr.z),_u.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(_u,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,O),i.clear();else{O===0&&(i.setRenderTarget(H.map),i.clear());let Z=H.getViewport(O);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),P.viewport(a)}n=H.getFrustum(O),y(E,_,W,k,this.type)}H.isPointLightShadow!==!0&&this.type===ds&&b(H,_),H.needsUpdate=!1}d=this.type,p.needsUpdate=!1,i.setRenderTarget(M,z,L)};function b(v,E){let _=e.update(x);f.defines.VSM_SAMPLES!==v.blurSamples&&(f.defines.VSM_SAMPLES=v.blurSamples,m.defines.VSM_SAMPLES=v.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),v.mapPass===null?v.mapPass=new Jt(s.x,s.y,{format:pi,type:Xt}):(v.mapPass.width!==v.map.width||v.mapPass.height!==v.map.height)&&v.mapPass.setSize(v.map.width,v.map.height),f.uniforms.shadow_pass.value=v.map.depthTexture,f.uniforms.resolution.value.set(v.map.width,v.map.height),f.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(E,null,_,f,x,null),m.uniforms.shadow_pass.value=v.mapPass.texture,m.uniforms.resolution.value.set(v.map.width,v.map.height),m.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(E,null,_,m,x,null)}function T(v,E,_,M){let z=null,L=_.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(L!==void 0)z=L;else if(z=_.isPointLight===!0?l:o,i.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let P=z.uuid,D=E.uuid,I=c[P];I===void 0&&(I={},c[P]=I);let N=I[D];N===void 0&&(N=z.clone(),I[D]=N,E.addEventListener("dispose",w)),z=N}if(z.visible=E.visible,z.wireframe=E.wireframe,M===ds?z.side=E.shadowSide!==null?E.shadowSide:E.side:z.side=E.shadowSide!==null?E.shadowSide:g[E.side],z.alphaMap=E.alphaMap,z.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,z.map=E.map,z.clipShadows=E.clipShadows,z.clippingPlanes=E.clippingPlanes,z.clipIntersection=E.clipIntersection,z.displacementMap=E.displacementMap,z.displacementScale=E.displacementScale,z.displacementBias=E.displacementBias,z.wireframeLinewidth=E.wireframeLinewidth,z.linewidth=E.linewidth,_.isPointLight===!0&&z.isMeshDistanceMaterial===!0){let P=i.properties.get(z);P.light=_}return z}function y(v,E,_,M,z){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&z===ds)&&(!v.frustumCulled||v.intersectsFrustum(n))){v.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,v.matrixWorld);let D=e.update(v),I=v.material;if(Array.isArray(I)){let N=D.groups;for(let k=0,H=N.length;k<H;k++){let J=N[k],X=I[J.materialIndex];if(X&&X.visible){let C=T(v,X,M,z);v.onBeforeShadow(i,v,E,_,D,C,J),i.renderBufferDirect(_,null,D,C,v,J),v.onAfterShadow(i,v,E,_,D,C,J)}}}else if(I.visible){let N=T(v,I,M,z);v.onBeforeShadow(i,v,E,_,D,N,null),i.renderBufferDirect(_,null,D,N,v,null),v.onAfterShadow(i,v,E,_,D,N,null)}}let P=v.children;for(let D=0,I=P.length;D<I;D++)y(P[D],E,_,M,z)}function w(v){v.target.removeEventListener("dispose",w);for(let _ in c){let M=c[_],z=v.target.uuid;z in M&&(M[z].dispose(),delete M[z])}}}function px(i,e){function t(){let V=!1,xe=new ot,se=null,_e=new ot(0,0,0,0);return{setMask:function(we){se!==we&&!V&&(i.colorMask(we,we,we,we),se=we)},setLocked:function(we){V=we},setClear:function(we,oe,Fe,Ie,gt){gt===!0&&(we*=Ie,oe*=Ie,Fe*=Ie),xe.set(we,oe,Fe,Ie),_e.equals(xe)===!1&&(i.clearColor(we,oe,Fe,Ie),_e.copy(xe))},reset:function(){V=!1,se=null,_e.set(-1,0,0,0)}}}function n(){let V=!1,xe=!1,se=null,_e=null,we=null;return{setReversed:function(oe){if(xe!==oe){let Fe=e.get("EXT_clip_control");oe?Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.ZERO_TO_ONE_EXT):Fe.clipControlEXT(Fe.LOWER_LEFT_EXT,Fe.NEGATIVE_ONE_TO_ONE_EXT),xe=oe;let Ie=we;we=null,this.setClear(Ie)}},getReversed:function(){return xe},setTest:function(oe){oe?ee(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(oe){se!==oe&&!V&&(i.depthMask(oe),se=oe)},setFunc:function(oe){if(xe&&(oe=Hh[oe]),_e!==oe){switch(oe){case Xr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Jr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case Kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}_e=oe}},setLocked:function(oe){V=oe},setClear:function(oe){we!==oe&&(we=oe,xe&&(oe=1-oe),i.clearDepth(oe))},reset:function(){V=!1,se=null,_e=null,we=null,xe=!1}}}function s(){let V=!1,xe=null,se=null,_e=null,we=null,oe=null,Fe=null,Ie=null,gt=null;return{setTest:function(ct){V||(ct?ee(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(ct){xe!==ct&&!V&&(i.stencilMask(ct),xe=ct)},setFunc:function(ct,fn,wn){(se!==ct||_e!==fn||we!==wn)&&(i.stencilFunc(ct,fn,wn),se=ct,_e=fn,we=wn)},setOp:function(ct,fn,wn){(oe!==ct||Fe!==fn||Ie!==wn)&&(i.stencilOp(ct,fn,wn),oe=ct,Fe=fn,Ie=wn)},setLocked:function(ct){V=ct},setClear:function(ct){gt!==ct&&(i.clearStencil(ct),gt=ct)},reset:function(){V=!1,xe=null,se=null,_e=null,we=null,oe=null,Fe=null,Ie=null,gt=null}}}let r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap,u={},g={},f={},m=new WeakMap,h=[],x=null,p=!1,d=null,b=null,T=null,y=null,w=null,v=null,E=null,_=new Ze(0,0,0),M=0,z=!1,L=null,P=null,D=null,I=null,N=null,k=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,J=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=J>=1):X.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=J>=2);let C=null,O={},W=i.getParameter(i.SCISSOR_BOX),Z=i.getParameter(i.VIEWPORT),be=new ot().fromArray(W),Te=new ot().fromArray(Z);function He(V,xe,se,_e){let we=new Uint8Array(4),oe=i.createTexture();i.bindTexture(V,oe),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Fe=0;Fe<se;Fe++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(xe,0,i.RGBA,1,1,_e,0,i.RGBA,i.UNSIGNED_BYTE,we):i.texImage2D(xe+Fe,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,we);return oe}let j={};j[i.TEXTURE_2D]=He(i.TEXTURE_2D,i.TEXTURE_2D,1),j[i.TEXTURE_CUBE_MAP]=He(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[i.TEXTURE_2D_ARRAY]=He(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),j[i.TEXTURE_3D]=He(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(i.DEPTH_TEST),a.setFunc(ji),ae(!1),he(ml),ee(i.CULL_FACE),le(Pn);function ee(V){u[V]!==!0&&(i.enable(V),u[V]=!0)}function ue(V){u[V]!==!1&&(i.disable(V),u[V]=!1)}function Le(V,xe){return f[V]!==xe?(i.bindFramebuffer(V,xe),f[V]=xe,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=xe),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=xe),!0):!1}function pe(V,xe){let se=h,_e=!1;if(V){se=m.get(xe),se===void 0&&(se=[],m.set(xe,se));let we=V.textures;if(se.length!==we.length||se[0]!==i.COLOR_ATTACHMENT0){for(let oe=0,Fe=we.length;oe<Fe;oe++)se[oe]=i.COLOR_ATTACHMENT0+oe;se.length=we.length,_e=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,_e=!0);_e&&i.drawBuffers(se)}function ke(V){return x!==V?(i.useProgram(V),x=V,!0):!1}let nt={[Ei]:i.FUNC_ADD,[hh]:i.FUNC_SUBTRACT,[uh]:i.FUNC_REVERSE_SUBTRACT};nt[dh]=i.MIN,nt[fh]=i.MAX;let ie={[ph]:i.ZERO,[mh]:i.ONE,[gh]:i.SRC_COLOR,[yl]:i.SRC_ALPHA,[Sh]:i.SRC_ALPHA_SATURATE,[vh]:i.DST_COLOR,[_h]:i.DST_ALPHA,[xh]:i.ONE_MINUS_SRC_COLOR,[vl]:i.ONE_MINUS_SRC_ALPHA,[Mh]:i.ONE_MINUS_DST_COLOR,[yh]:i.ONE_MINUS_DST_ALPHA,[bh]:i.CONSTANT_COLOR,[wh]:i.ONE_MINUS_CONSTANT_COLOR,[Th]:i.CONSTANT_ALPHA,[Ah]:i.ONE_MINUS_CONSTANT_ALPHA};function le(V,xe,se,_e,we,oe,Fe,Ie,gt,ct){if(V===Pn){p===!0&&(ue(i.BLEND),p=!1);return}if(p===!1&&(ee(i.BLEND),p=!0),V!==ch){if(V!==d||ct!==z){if((b!==Ei||w!==Ei)&&(i.blendEquation(i.FUNC_ADD),b=Ei,w=Ei),ct)switch(V){case fs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case _l:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ge("WebGLState: Invalid blending: ",V);break}else switch(V){case fs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case gl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _l:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",V);break}T=null,y=null,v=null,E=null,_.set(0,0,0),M=0,d=V,z=ct}return}we=we||xe,oe=oe||se,Fe=Fe||_e,(xe!==b||we!==w)&&(i.blendEquationSeparate(nt[xe],nt[we]),b=xe,w=we),(se!==T||_e!==y||oe!==v||Fe!==E)&&(i.blendFuncSeparate(ie[se],ie[_e],ie[oe],ie[Fe]),T=se,y=_e,v=oe,E=Fe),(Ie.equals(_)===!1||gt!==M)&&(i.blendColor(Ie.r,Ie.g,Ie.b,gt),_.copy(Ie),M=gt),d=V,z=!1}function K(V,xe){V.side===Bt?ue(i.CULL_FACE):ee(i.CULL_FACE);let se=V.side===Wt;xe&&(se=!se),ae(se),V.blending===fs&&V.transparent===!1?le(Pn):le(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),a.setFunc(V.depthFunc),a.setTest(V.depthTest),a.setMask(V.depthWrite),r.setMask(V.colorWrite);let _e=V.stencilWrite;o.setTest(_e),_e&&(o.setMask(V.stencilWriteMask),o.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),o.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),De(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?ee(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function ae(V){L!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),L=V)}function he(V){V!==ah?(ee(i.CULL_FACE),V!==P&&(V===ml?i.cullFace(i.BACK):V===oh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),P=V}function Re(V){V!==D&&(H&&i.lineWidth(V),D=V)}function De(V,xe,se){V?(ee(i.POLYGON_OFFSET_FILL),(I!==xe||N!==se)&&(I=xe,N=se,a.getReversed()&&(xe=-xe),i.polygonOffset(xe,se))):ue(i.POLYGON_OFFSET_FILL)}function We(V){V?ee(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function Ye(V){V===void 0&&(V=i.TEXTURE0+k-1),C!==V&&(i.activeTexture(V),C=V)}function U(V,xe,se){se===void 0&&(C===null?se=i.TEXTURE0+k-1:se=C);let _e=O[se];_e===void 0&&(_e={type:void 0,texture:void 0},O[se]=_e),(_e.type!==V||_e.texture!==xe)&&(C!==se&&(i.activeTexture(se),C=se),i.bindTexture(V,xe||j[V]),_e.type=V,_e.texture=xe)}function lt(){let V=O[C];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Qe(){try{i.compressedTexImage2D(...arguments)}catch(V){Ge("WebGLState:",V)}}function R(){try{i.compressedTexImage3D(...arguments)}catch(V){Ge("WebGLState:",V)}}function S(){try{i.texSubImage2D(...arguments)}catch(V){Ge("WebGLState:",V)}}function G(){try{i.texSubImage3D(...arguments)}catch(V){Ge("WebGLState:",V)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(V){Ge("WebGLState:",V)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(V){Ge("WebGLState:",V)}}function de(){try{i.texStorage2D(...arguments)}catch(V){Ge("WebGLState:",V)}}function fe(){try{i.texStorage3D(...arguments)}catch(V){Ge("WebGLState:",V)}}function ne(){try{i.texImage2D(...arguments)}catch(V){Ge("WebGLState:",V)}}function re(){try{i.texImage3D(...arguments)}catch(V){Ge("WebGLState:",V)}}function me(V){return g[V]!==void 0?g[V]:i.getParameter(V)}function Ne(V,xe){g[V]!==xe&&(i.pixelStorei(V,xe),g[V]=xe)}function ye(V){be.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),be.copy(V))}function ge(V){Te.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),Te.copy(V))}function Ue(V,xe){let se=c.get(xe);se===void 0&&(se=new WeakMap,c.set(xe,se));let _e=se.get(V);_e===void 0&&(_e=i.getUniformBlockIndex(xe,V.name),se.set(V,_e))}function Ve(V,xe){let _e=c.get(xe).get(V);l.get(xe)!==_e&&(i.uniformBlockBinding(xe,_e,V.__bindingPointIndex),l.set(xe,_e))}function Je(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},g={},C=null,O={},f={},m=new WeakMap,h=[],x=null,p=!1,d=null,b=null,T=null,y=null,w=null,v=null,E=null,_=new Ze(0,0,0),M=0,z=!1,L=null,P=null,D=null,I=null,N=null,be.set(0,0,i.canvas.width,i.canvas.height),Te.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:ue,bindFramebuffer:Le,drawBuffers:pe,useProgram:ke,setBlending:le,setMaterial:K,setFlipSided:ae,setCullFace:he,setLineWidth:Re,setPolygonOffset:De,setScissorTest:We,activeTexture:Ye,bindTexture:U,unbindTexture:lt,compressedTexImage2D:Qe,compressedTexImage3D:R,texImage2D:ne,texImage3D:re,pixelStorei:Ne,getParameter:me,updateUBOMapping:Ue,uniformBlockBinding:Ve,texStorage2D:de,texStorage3D:fe,texSubImage2D:S,texSubImage3D:G,compressedTexSubImage2D:$,compressedTexSubImage3D:te,scissor:ye,viewport:ge,reset:Je}}function mx(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ce,u=new WeakMap,g=new Set,f,m=new WeakMap,h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(R,S){return h?new OffscreenCanvas(R,S):Ns("canvas")}function p(R,S,G){let $=1,te=Qe(R);if((te.width>G||te.height>G)&&($=G/Math.max(te.width,te.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let de=Math.floor($*te.width),fe=Math.floor($*te.height);f===void 0&&(f=x(de,fe));let ne=S?x(de,fe):f;return ne.width=de,ne.height=fe,ne.getContext("2d").drawImage(R,0,0,de,fe),Oe("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+de+"x"+fe+")."),ne}else return"data"in R&&Oe("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function d(R){return R.generateMipmaps}function b(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,G,$,te,de=!1){if(R!==null){if(i[R]!==void 0)return i[R];Oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;$&&(fe=e.get("EXT_texture_norm16"),fe||Oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===i.RED&&(G===i.FLOAT&&(ne=i.R32F),G===i.HALF_FLOAT&&(ne=i.R16F),G===i.UNSIGNED_BYTE&&(ne=i.R8),G===i.UNSIGNED_SHORT&&fe&&(ne=fe.R16_EXT),G===i.SHORT&&fe&&(ne=fe.R16_SNORM_EXT)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.R8UI),G===i.UNSIGNED_SHORT&&(ne=i.R16UI),G===i.UNSIGNED_INT&&(ne=i.R32UI),G===i.BYTE&&(ne=i.R8I),G===i.SHORT&&(ne=i.R16I),G===i.INT&&(ne=i.R32I)),S===i.RG&&(G===i.FLOAT&&(ne=i.RG32F),G===i.HALF_FLOAT&&(ne=i.RG16F),G===i.UNSIGNED_BYTE&&(ne=i.RG8),G===i.UNSIGNED_SHORT&&fe&&(ne=fe.RG16_EXT),G===i.SHORT&&fe&&(ne=fe.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RG8UI),G===i.UNSIGNED_SHORT&&(ne=i.RG16UI),G===i.UNSIGNED_INT&&(ne=i.RG32UI),G===i.BYTE&&(ne=i.RG8I),G===i.SHORT&&(ne=i.RG16I),G===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),G===i.UNSIGNED_INT&&(ne=i.RGB32UI),G===i.BYTE&&(ne=i.RGB8I),G===i.SHORT&&(ne=i.RGB16I),G===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),G===i.UNSIGNED_INT&&(ne=i.RGBA32UI),G===i.BYTE&&(ne=i.RGBA8I),G===i.SHORT&&(ne=i.RGBA16I),G===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(G===i.UNSIGNED_SHORT&&fe&&(ne=fe.RGB16_EXT),G===i.SHORT&&fe&&(ne=fe.RGB16_SNORM_EXT),G===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),G===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){let re=de?Ds:tt.getTransfer(te);G===i.FLOAT&&(ne=i.RGBA32F),G===i.HALF_FLOAT&&(ne=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ne=re===ut?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT&&fe&&(ne=fe.RGBA16_EXT),G===i.SHORT&&fe&&(ne=fe.RGBA16_SNORM_EXT),G===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function w(R,S){let G;return R?S===null||S===Sn||S===gs?G=i.DEPTH24_STENCIL8:S===jt?G=i.DEPTH32F_STENCIL8:S===ms&&(G=i.DEPTH24_STENCIL8,Oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Sn||S===gs?G=i.DEPTH_COMPONENT24:S===jt?G=i.DEPTH_COMPONENT32F:S===ms&&(G=i.DEPTH_COMPONENT16),G}function v(R,S){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==zt&&R.minFilter!==dt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){let S=R.target;S.removeEventListener("dispose",E),M(S),S.isVideoTexture&&u.delete(S),S.isHTMLTexture&&g.delete(S)}function _(R){let S=R.target;S.removeEventListener("dispose",_),L(S)}function M(R){let S=n.get(R);if(S.__webglInit===void 0)return;let G=R.source,$=m.get(G);if($){let te=$[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&z(R),Object.keys($).length===0&&m.delete(G)}n.remove(R)}function z(R){let S=n.get(R);i.deleteTexture(S.__webglTexture);let G=R.source,$=m.get(G);delete $[S.__cacheKey],a.memory.textures--}function L(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let te=0;te<S.__webglFramebuffer[$].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[$][te]);else i.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)i.deleteFramebuffer(S.__webglFramebuffer[$]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let G=R.textures;for(let $=0,te=G.length;$<te;$++){let de=n.get(G[$]);de.__webglTexture&&(i.deleteTexture(de.__webglTexture),a.memory.textures--),n.remove(G[$])}n.remove(R)}let P=0;function D(){P=0}function I(){return P}function N(R){P=R}function k(){let R=P;return R>=s.maxTextures&&Oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,R}function H(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function J(R,S){let G=n.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let $=R.image;if($===null)Oe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Oe("WebGLRenderer: Texture marked for update but image is incomplete");else{ue(G,R,S);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function X(R,S){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ue(G,R,S);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function C(R,S){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){ue(G,R,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function O(R,S){let G=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&G.__version!==R.version){Le(G,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}let W={[zn]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[jr]:i.MIRRORED_REPEAT},Z={[zt]:i.NEAREST,[Ch]:i.NEAREST_MIPMAP_NEAREST,[cr]:i.NEAREST_MIPMAP_LINEAR,[dt]:i.LINEAR,[Ea]:i.LINEAR_MIPMAP_NEAREST,[on]:i.LINEAR_MIPMAP_LINEAR},be={[Lh]:i.NEVER,[Oh]:i.ALWAYS,[Dh]:i.LESS,[uo]:i.LEQUAL,[Nh]:i.EQUAL,[fo]:i.GEQUAL,[Uh]:i.GREATER,[Fh]:i.NOTEQUAL};function Te(R,S){if(S.type===jt&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===dt||S.magFilter===Ea||S.magFilter===cr||S.magFilter===on||S.minFilter===dt||S.minFilter===Ea||S.minFilter===cr||S.minFilter===on)&&Oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,W[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,W[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,W[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Z[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Z[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,be[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===zt||S.minFilter!==cr&&S.minFilter!==on||S.type===jt&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function He(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));let $=S.source,te=m.get($);te===void 0&&(te={},m.set($,te));let de=H(S);if(de!==R.__cacheKey){te[de]===void 0&&(te[de]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[de].usedTimes++;let fe=te[R.__cacheKey];fe!==void 0&&(te[R.__cacheKey].usedTimes--,fe.usedTimes===0&&z(S)),R.__cacheKey=de,R.__webglTexture=te[de].texture}return G}function j(R,S,G){return Math.floor(Math.floor(R/G)/S)}function ee(R,S,G,$){let de=R.updateRanges;if(de.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,G,$,S.data);else{de.sort((Ne,ye)=>Ne.start-ye.start);let fe=0;for(let Ne=1;Ne<de.length;Ne++){let ye=de[fe],ge=de[Ne],Ue=ye.start+ye.count,Ve=j(ge.start,S.width,4),Je=j(ye.start,S.width,4);ge.start<=Ue+1&&Ve===Je&&j(ge.start+ge.count-1,S.width,4)===Ve?ye.count=Math.max(ye.count,ge.start+ge.count-ye.start):(++fe,de[fe]=ge)}de.length=fe+1;let ne=t.getParameter(i.UNPACK_ROW_LENGTH),re=t.getParameter(i.UNPACK_SKIP_PIXELS),me=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ne=0,ye=de.length;Ne<ye;Ne++){let ge=de[Ne],Ue=Math.floor(ge.start/4),Ve=Math.ceil(ge.count/4),Je=Ue%S.width,V=Math.floor(Ue/S.width),xe=Ve,se=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,Je),t.pixelStorei(i.UNPACK_SKIP_ROWS,V),t.texSubImage2D(i.TEXTURE_2D,0,Je,V,xe,se,G,$,S.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,me)}}function ue(R,S,G){let $=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=i.TEXTURE_3D);let te=He(R,S),de=S.source;t.bindTexture($,R.__webglTexture,i.TEXTURE0+G);let fe=n.get(de);if(de.version!==fe.__version||te===!0){if(t.activeTexture(i.TEXTURE0+G),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){let se=tt.getPrimaries(tt.workingColorSpace),_e=S.colorSpace===Zn?null:tt.getPrimaries(S.colorSpace),we=S.colorSpace===Zn||se===_e?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let re=p(S.image,!1,s.maxTextureSize);re=lt(S,re);let me=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),ye=y(S.internalFormat,me,Ne,S.normalized,S.colorSpace,S.isVideoTexture);Te($,S);let ge,Ue=S.mipmaps,Ve=S.isVideoTexture!==!0,Je=fe.__version===void 0||te===!0,V=de.dataReady,xe=v(S,re);if(S.isDepthTexture)ye=w(S.format===fi,S.type),Je&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,ye,re.width,re.height):t.texImage2D(i.TEXTURE_2D,0,ye,re.width,re.height,0,me,Ne,null));else if(S.isDataTexture)if(Ue.length>0){Ve&&Je&&t.texStorage2D(i.TEXTURE_2D,xe,ye,Ue[0].width,Ue[0].height);for(let se=0,_e=Ue.length;se<_e;se++)ge=Ue[se],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,me,Ne,ge.data);S.generateMipmaps=!1}else Ve?(Je&&t.texStorage2D(i.TEXTURE_2D,xe,ye,re.width,re.height),V&&ee(S,re,me,Ne)):t.texImage2D(i.TEXTURE_2D,0,ye,re.width,re.height,0,me,Ne,re.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ve&&Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ye,Ue[0].width,Ue[0].height,re.depth);for(let se=0,_e=Ue.length;se<_e;se++)if(ge=Ue[se],S.format!==Qt)if(me!==null)if(Ve){if(V)if(S.layerUpdates.size>0){let we=Hl(ge.width,ge.height,S.format,S.type);for(let oe of S.layerUpdates){let Fe=ge.data.subarray(oe*we/ge.data.BYTES_PER_ELEMENT,(oe+1)*we/ge.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,oe,ge.width,ge.height,1,me,Fe)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,me,ge.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,re.depth,0,ge.data,0,0);else Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?V&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,se,0,0,0,ge.width,ge.height,re.depth,me,Ne,ge.data):t.texImage3D(i.TEXTURE_2D_ARRAY,se,ye,ge.width,ge.height,re.depth,0,me,Ne,ge.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ve&&Je&&t.texStorage2D(i.TEXTURE_2D,xe,ye,Ue[0].width,Ue[0].height);for(let se=0,_e=Ue.length;se<_e;se++)ge=Ue[se],S.format!==Qt?me!==null?Ve?V&&t.compressedTexSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,ge.data):t.compressedTexImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,ge.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,ge.width,ge.height,me,Ne,ge.data):t.texImage2D(i.TEXTURE_2D,se,ye,ge.width,ge.height,0,me,Ne,ge.data)}else if(S.isDataArrayTexture)if(Ve){if(Je&&t.texStorage3D(i.TEXTURE_2D_ARRAY,xe,ye,re.width,re.height,re.depth),V)if(S.layerUpdates.size>0){let se=Hl(re.width,re.height,S.format,S.type);for(let _e of S.layerUpdates){let we=re.data.subarray(_e*se/re.data.BYTES_PER_ELEMENT,(_e+1)*se/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,_e,re.width,re.height,1,me,Ne,we)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,me,Ne,re.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ye,re.width,re.height,re.depth,0,me,Ne,re.data);else if(S.isData3DTexture)Ve?(Je&&t.texStorage3D(i.TEXTURE_3D,xe,ye,re.width,re.height,re.depth),V&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,me,Ne,re.data)):t.texImage3D(i.TEXTURE_3D,0,ye,re.width,re.height,re.depth,0,me,Ne,re.data);else if(S.isFramebufferTexture){if(Je)if(Ve)t.texStorage2D(i.TEXTURE_2D,xe,ye,re.width,re.height);else{let se=re.width,_e=re.height;for(let we=0;we<xe;we++)t.texImage2D(i.TEXTURE_2D,we,ye,se,_e,0,me,Ne,null),se>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){let se=i.canvas;if(se.hasAttribute("layoutsubtree")||se.setAttribute("layoutsubtree","true"),re.parentNode!==se){se.appendChild(re),g.add(S),se.onpaint=_e=>{let we=_e.changedElements;for(let oe of g)we.includes(oe.image)&&(oe.needsUpdate=!0)},se.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,re);else{let we=i.RGBA,oe=i.RGBA,Fe=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,we,oe,Fe,re)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ue.length>0){if(Ve&&Je){let se=Qe(Ue[0]);t.texStorage2D(i.TEXTURE_2D,xe,ye,se.width,se.height)}for(let se=0,_e=Ue.length;se<_e;se++)ge=Ue[se],Ve?V&&t.texSubImage2D(i.TEXTURE_2D,se,0,0,me,Ne,ge):t.texImage2D(i.TEXTURE_2D,se,ye,me,Ne,ge);S.generateMipmaps=!1}else if(Ve){if(Je){let se=Qe(re);t.texStorage2D(i.TEXTURE_2D,xe,ye,se.width,se.height)}V&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,me,Ne,re)}else t.texImage2D(i.TEXTURE_2D,0,ye,me,Ne,re);d(S)&&b($),fe.__version=de.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Le(R,S,G){if(S.image.length!==6)return;let $=He(R,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);let de=n.get(te);if(te.version!==de.__version||$===!0){t.activeTexture(i.TEXTURE0+G);let fe=tt.getPrimaries(tt.workingColorSpace),ne=S.colorSpace===Zn?null:tt.getPrimaries(S.colorSpace),re=S.colorSpace===Zn||fe===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,re);let me=S.isCompressedTexture||S.image[0].isCompressedTexture,Ne=S.image[0]&&S.image[0].isDataTexture,ye=[];for(let oe=0;oe<6;oe++)!me&&!Ne?ye[oe]=p(S.image[oe],!0,s.maxCubemapSize):ye[oe]=Ne?S.image[oe].image:S.image[oe],ye[oe]=lt(S,ye[oe]);let ge=ye[0],Ue=r.convert(S.format,S.colorSpace),Ve=r.convert(S.type),Je=y(S.internalFormat,Ue,Ve,S.normalized,S.colorSpace),V=S.isVideoTexture!==!0,xe=de.__version===void 0||$===!0,se=te.dataReady,_e=v(S,ge);Te(i.TEXTURE_CUBE_MAP,S);let we;if(me){V&&xe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,ge.width,ge.height);for(let oe=0;oe<6;oe++){we=ye[oe].mipmaps;for(let Fe=0;Fe<we.length;Fe++){let Ie=we[Fe];S.format!==Qt?Ue!==null?V?se&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Ie.width,Ie.height,Ue,Ie.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Je,Ie.width,Ie.height,0,Ie.data):Oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,0,0,Ie.width,Ie.height,Ue,Ve,Ie.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe,Je,Ie.width,Ie.height,0,Ue,Ve,Ie.data)}}}else{if(we=S.mipmaps,V&&xe){we.length>0&&_e++;let oe=Qe(ye[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,_e,Je,oe.width,oe.height)}for(let oe=0;oe<6;oe++)if(Ne){V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,ye[oe].width,ye[oe].height,Ue,Ve,ye[oe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,ye[oe].width,ye[oe].height,0,Ue,Ve,ye[oe].data);for(let Fe=0;Fe<we.length;Fe++){let gt=we[Fe].image[oe].image;V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,gt.width,gt.height,Ue,Ve,gt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Je,gt.width,gt.height,0,Ue,Ve,gt.data)}}else{V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,0,0,Ue,Ve,ye[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0,Je,Ue,Ve,ye[oe]);for(let Fe=0;Fe<we.length;Fe++){let Ie=we[Fe];V?se&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,0,0,Ue,Ve,Ie.image[oe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Fe+1,Je,Ue,Ve,Ie.image[oe])}}}d(S)&&b(i.TEXTURE_CUBE_MAP),de.__version=te.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function pe(R,S,G,$,te,de){let fe=r.convert(G.format,G.colorSpace),ne=r.convert(G.type),re=y(G.internalFormat,fe,ne,G.normalized,G.colorSpace),me=n.get(S),Ne=n.get(G);if(Ne.__renderTarget=S,!me.__hasExternalTextures){let ye=Math.max(1,S.width>>de),ge=Math.max(1,S.height>>de);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,de,re,ye,ge,S.depth,0,fe,ne,null):t.texImage2D(te,de,re,ye,ge,0,fe,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,te,Ne.__webglTexture,0,We(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,te,Ne.__webglTexture,de),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ke(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){let $=S.depthTexture,te=$&&$.isDepthTexture?$.type:null,de=w(S.stencilBuffer,te),fe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(S),de,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(S),de,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,de,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,R)}else{let $=S.textures;for(let te=0;te<$.length;te++){let de=$[te],fe=r.convert(de.format,de.colorSpace),ne=r.convert(de.type),re=y(de.internalFormat,fe,ne,de.normalized,de.colorSpace);Ye(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,We(S),re,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,We(S),re,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,re,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function nt(R,S,G){let $=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let te=n.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Te(i.TEXTURE_CUBE_MAP,S.depthTexture);let me=r.convert(S.depthTexture.format),Ne=r.convert(S.depthTexture.type),ye;S.depthTexture.format===Cn?ye=i.DEPTH_COMPONENT24:S.depthTexture.format===fi&&(ye=i.DEPTH24_STENCIL8);for(let ge=0;ge<6;ge++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0,ye,S.width,S.height,0,me,Ne,null)}}else J(S.depthTexture,0);let de=te.__webglTexture,fe=We(S),ne=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+G:i.TEXTURE_2D,re=S.depthTexture.format===fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Cn)Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,de,0);else if(S.depthTexture.format===fi)Ye(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,ne,de,0,fe):i.framebufferTexture2D(i.FRAMEBUFFER,re,ne,de,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ie(R){let S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",te)};$.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(G)for(let $=0;$<6;$++)nt(S.__webglFramebuffer[$],R,$);else{let $=R.texture.mipmaps;$&&$.length>0?nt(S.__webglFramebuffer[0],R,0):nt(S.__webglFramebuffer,R,0)}else if(G){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=i.createRenderbuffer(),ke(S.__webglDepthbuffer[$],R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}else{let $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ke(S.__webglDepthbuffer,R,!1);else{let te=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,de=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,de),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,de)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function le(R,S,G){let $=n.get(R);S!==void 0&&pe($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&ie(R)}function K(R){let S=R.texture,G=n.get(R),$=n.get(S);R.addEventListener("dispose",_);let te=R.textures,de=R.isWebGLCubeRenderTarget===!0,fe=te.length>1;if(fe||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=S.version,a.memory.textures++),de){G.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[ne]=[];for(let re=0;re<S.mipmaps.length;re++)G.__webglFramebuffer[ne][re]=i.createFramebuffer()}else G.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)G.__webglFramebuffer[ne]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(fe)for(let ne=0,re=te.length;ne<re;ne++){let me=n.get(te[ne]);me.__webglTexture===void 0&&(me.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ye(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){let re=te[ne];G.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ne]);let me=r.convert(re.format,re.colorSpace),Ne=r.convert(re.type),ye=y(re.internalFormat,me,Ne,re.normalized,re.colorSpace,R.isXRRenderTarget===!0),ge=We(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,ge,ye,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,G.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ke(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(de){t.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Te(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)pe(G.__webglFramebuffer[ne][re],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,re);else pe(G.__webglFramebuffer[ne],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(S)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let ne=0,re=te.length;ne<re;ne++){let me=te[ne],Ne=n.get(me),ye=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ye=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ye,Ne.__webglTexture),Te(ye,me),pe(G.__webglFramebuffer,R,me,i.COLOR_ATTACHMENT0+ne,ye,0),d(me)&&b(ye)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ne=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,$.__webglTexture),Te(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let re=0;re<S.mipmaps.length;re++)pe(G.__webglFramebuffer[re],R,S,i.COLOR_ATTACHMENT0,ne,re);else pe(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,ne,0);d(S)&&b(ne),t.unbindTexture()}R.depthBuffer&&ie(R)}function ae(R){let S=R.textures;for(let G=0,$=S.length;G<$;G++){let te=S[G];if(d(te)){let de=T(R),fe=n.get(te).__webglTexture;t.bindTexture(de,fe),b(de),t.unbindTexture()}}}let he=[],Re=[];function De(R){if(R.samples>0){if(Ye(R)===!1){let S=R.textures,G=R.width,$=R.height,te=i.COLOR_BUFFER_BIT,de=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,fe=n.get(R),ne=S.length>1;if(ne)for(let me=0;me<S.length;me++)t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);let re=R.texture.mipmaps;re&&re.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let me=0;me<S.length;me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=n.get(S[me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ne,0)}i.blitFramebuffer(0,0,G,$,0,0,G,$,te,i.NEAREST),l===!0&&(he.length=0,Re.length=0,he.push(i.COLOR_ATTACHMENT0+me),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(he.push(de),Re.push(de),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Re)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let me=0;me<S.length;me++){t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,fe.__webglColorRenderbuffer[me]);let Ne=n.get(S[me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,fe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,Ne,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function We(R){return Math.min(s.maxSamples,R.samples)}function Ye(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function U(R){let S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function lt(R,S){let G=R.colorSpace,$=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==Hn&&G!==Zn&&(tt.getTransfer(G)===ut?($!==Qt||te!==Kt)&&Oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",G)),S}function Qe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=D,this.getTextureUnits=I,this.setTextureUnits=N,this.setTexture2D=J,this.setTexture2DArray=X,this.setTexture3D=C,this.setTextureCube=O,this.rebindTextures=le,this.setupRenderTarget=K,this.updateRenderTargetMipmap=ae,this.updateMultisampleRenderTarget=De,this.setupDepthRenderbuffer=ie,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ye,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function gx(i,e){function t(n,s=Zn){let r,a=tt.getTransfer(s);if(n===Kt)return i.UNSIGNED_BYTE;if(n===Ca)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ra)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Il)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Cl)return i.BYTE;if(n===Rl)return i.SHORT;if(n===ms)return i.UNSIGNED_SHORT;if(n===za)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===jt)return i.FLOAT;if(n===Xt)return i.HALF_FLOAT;if(n===Ll)return i.ALPHA;if(n===Dl)return i.RGB;if(n===Qt)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===fi)return i.DEPTH_STENCIL;if(n===Nl)return i.RED;if(n===Ia)return i.RED_INTEGER;if(n===pi)return i.RG;if(n===Pa)return i.RG_INTEGER;if(n===La)return i.RGBA_INTEGER;if(n===hr||n===ur||n===dr||n===fr)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===hr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===hr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ur)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===fr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Da||n===Na||n===Ua||n===Fa)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Da)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Na)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ua)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fa)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oa||n===Ba||n===ka||n===Va||n===Ga||n===pr||n===Ha)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oa||n===Ba)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ka)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Va)return r.COMPRESSED_R11_EAC;if(n===Ga)return r.COMPRESSED_SIGNED_R11_EAC;if(n===pr)return r.COMPRESSED_RG11_EAC;if(n===Ha)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Wa||n===Xa||n===qa||n===Ya||n===Za||n===Ja||n===$a||n===Ka||n===ja||n===Qa||n===eo||n===to||n===no||n===io)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ya)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Za)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ja)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===$a)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ka)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ja)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qa)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===eo)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===to)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===no)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===io)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===so||n===ro||n===ao)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===so)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ro)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ao)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===oo||n===lo||n===mr||n===co)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===lo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===mr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===co)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_x=`
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

}`,lc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Hs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new rn({vertexShader:xx,fragmentShader:_x,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new li(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},cc=class extends Rn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,u=null,g=null,f=null,m=null,h=null,x=typeof XRWebGLBinding<"u",p=new lc,d={},b=t.getContextAttributes(),T=null,y=null,w=[],v=[],E=new ce,_=null,M=null,z=new Ut;z.viewport=new ot;let L=new Ut;L.viewport=new ot;let P=[z,L],D=new wa,I=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ee=w[j];return ee===void 0&&(ee=new ss,w[j]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(j){let ee=w[j];return ee===void 0&&(ee=new ss,w[j]=ee),ee.getGripSpace()},this.getHand=function(j){let ee=w[j];return ee===void 0&&(ee=new ss,w[j]=ee),ee.getHandSpace()};function k(j){let ee=v.indexOf(j.inputSource);if(ee===-1)return;let ue=w[ee];ue!==void 0&&(ue.update(j.inputSource,j.frame,c||a),ue.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",J);for(let j=0;j<w.length;j++){let ee=v[j];ee!==null&&(v[j]=null,w[j].disconnect(ee))}I=null,N=null,p.reset();for(let j in d)delete d[j];if(e.setRenderTarget(T),m=null,f=null,g=null,s=null,y=null,He.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(E.width,E.height,!1),M!==null){let j=M.camera;j.fov=M.fov,j.zoom=M.zoom,j.updateProjectionMatrix(),M=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&Oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&Oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return g===null&&x&&(g=new XRWebGLBinding(s,t)),g},this.getFrame=function(){return h},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(T=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(E),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let ue=null,Le=null,pe=null;b.depth&&(pe=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ue=b.stencil?fi:Cn,Le=b.stencil?gs:Sn);let ke={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:r};g=this.getBinding(),f=g.createProjectionLayer(ke),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Jt(f.textureWidth,f.textureHeight,{format:Qt,type:Kt,depthTexture:new ai(f.textureWidth,f.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{let ue={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,ue),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new Jt(m.framebufferWidth,m.framebufferHeight,{format:Qt,type:Kt,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1,storeMultisampledDepthBuffer:m.ignoreDepthValues===!1,storeMultisampledStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),He.setContext(s),He.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(j){for(let ee=0;ee<j.removed.length;ee++){let ue=j.removed[ee],Le=v.indexOf(ue);Le>=0&&(v[Le]=null,w[Le].disconnect(ue))}for(let ee=0;ee<j.added.length;ee++){let ue=j.added[ee],Le=v.indexOf(ue);if(Le===-1){for(let ke=0;ke<w.length;ke++)if(ke>=v.length){v.push(ue),Le=ke;break}else if(v[ke]===null){v[ke]=ue,Le=ke;break}if(Le===-1)break}let pe=w[Le];pe&&pe.connect(ue)}}let X=new F,C=new F;function O(j,ee,ue){X.setFromMatrixPosition(ee.matrixWorld),C.setFromMatrixPosition(ue.matrixWorld);let Le=X.distanceTo(C),pe=ee.projectionMatrix.elements,ke=ue.projectionMatrix.elements,nt=pe[14]/(pe[10]-1),ie=pe[14]/(pe[10]+1),le=(pe[9]+1)/pe[5],K=(pe[9]-1)/pe[5],ae=(pe[8]-1)/pe[0],he=(ke[8]+1)/ke[0],Re=nt*ae,De=nt*he,We=Le/(-ae+he),Ye=We*-ae;if(ee.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ye),j.translateZ(We),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),pe[10]===-1)j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let U=nt+We,lt=ie+We,Qe=Re-Ye,R=De+(Le-Ye),S=le*ie/lt*U,G=K*ie/lt*U;j.projectionMatrix.makePerspective(Qe,R,S,G,U,lt),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function W(j,ee){ee===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ee.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ee=j.near,ue=j.far;p.texture!==null&&(p.depthNear>0&&(ee=p.depthNear),p.depthFar>0&&(ue=p.depthFar)),D.near=L.near=z.near=ee,D.far=L.far=z.far=ue,(I!==D.near||N!==D.far)&&(s.updateRenderState({depthNear:D.near,depthFar:D.far}),I=D.near,N=D.far),D.layers.mask=j.layers.mask|6,z.layers.mask=D.layers.mask&-5,L.layers.mask=D.layers.mask&-3;let Le=j.parent,pe=D.cameras;W(D,Le);for(let ke=0;ke<pe.length;ke++)W(pe[ke],Le);pe.length===2?O(D,z,L):D.projectionMatrix.copy(z.projectionMatrix),M===null&&j.isPerspectiveCamera&&(M={camera:j,fov:j.fov,zoom:j.zoom}),Z(j,D,Le)};function Z(j,ee,ue){ue===null?j.matrix.copy(ee.matrixWorld):(j.matrix.copy(ue.matrixWorld),j.matrix.invert(),j.matrix.multiply(ee.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ee.projectionMatrix),j.projectionMatrixInverse.copy(ee.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=ts*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(D)},this.getCameraTexture=function(j){return d[j]};let be=null;function Te(j,ee){if(u=ee.getViewerPose(c||a),h=ee,u!==null){let ue=u.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Le=!1;ue.length!==D.cameras.length&&(D.cameras.length=0,Le=!0);for(let ie=0;ie<ue.length;ie++){let le=ue[ie],K=null;if(m!==null)K=m.getViewport(le);else{let he=g.getViewSubImage(f,le);K=he.viewport,ie===0&&(e.setRenderTargetTextures(y,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(y))}let ae=P[ie];ae===void 0&&(ae=new Ut,ae.layers.enable(ie),ae.viewport=new ot,P[ie]=ae),ae.matrix.fromArray(le.transform.matrix),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.projectionMatrix.fromArray(le.projectionMatrix),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert(),ae.viewport.set(K.x,K.y,K.width,K.height),ie===0&&(D.matrix.copy(ae.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),Le===!0&&D.cameras.push(ae)}let pe=s.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){g=n.getBinding();let ie=g.getDepthInformation(ue[0]);ie&&ie.isValid&&ie.texture&&p.init(ie,s.renderState)}if(pe&&pe.includes("camera-access")&&x){e.state.unbindTexture(),g=n.getBinding();for(let ie=0;ie<ue.length;ie++){let le=ue[ie].camera;if(le){let K=d[le];K||(K=new Hs,d[le]=K);let ae=g.getCameraImage(le);K.sourceTexture=ae}}}}for(let ue=0;ue<w.length;ue++){let Le=v[ue],pe=w[ue];Le!==null&&pe!==void 0&&pe.update(Le,ee,c||a)}be&&be(j,ee),ee.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ee}),h=null}let He=new yu;He.setAnimationLoop(Te),this.setAnimationLoop=function(j){be=j},this.dispose=function(){}}},yx=new mt,Tu=new qe;Tu.set(-1,0,0,0,1,0,0,0,1);function vx(i,e){function t(p,d){p.matrixAutoUpdate===!0&&p.updateMatrix(),d.value.copy(p.matrix)}function n(p,d){d.color.getRGB(p.fogColor.value,kl(i)),d.isFog?(p.fogNear.value=d.near,p.fogFar.value=d.far):d.isFogExp2&&(p.fogDensity.value=d.density)}function s(p,d,b,T,y){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(p,d):d.isMeshLambertMaterial?(r(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(p,d),g(p,d)):d.isMeshPhongMaterial?(r(p,d),u(p,d),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(p,d),f(p,d),d.isMeshPhysicalMaterial&&m(p,d,y)):d.isMeshMatcapMaterial?(r(p,d),h(p,d)):d.isMeshDepthMaterial?r(p,d):d.isMeshDistanceMaterial?(r(p,d),x(p,d)):d.isMeshNormalMaterial?r(p,d):d.isLineBasicMaterial?(a(p,d),d.isLineDashedMaterial&&o(p,d)):d.isPointsMaterial?l(p,d,b,T):d.isSpriteMaterial?c(p,d):d.isShadowMaterial?(p.color.value.copy(d.color),p.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(p,d){p.opacity.value=d.opacity,d.color&&p.diffuse.value.copy(d.color),d.emissive&&p.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.bumpMap&&(p.bumpMap.value=d.bumpMap,t(d.bumpMap,p.bumpMapTransform),p.bumpScale.value=d.bumpScale,d.side===Wt&&(p.bumpScale.value*=-1)),d.normalMap&&(p.normalMap.value=d.normalMap,t(d.normalMap,p.normalMapTransform),p.normalScale.value.copy(d.normalScale),d.side===Wt&&p.normalScale.value.negate()),d.displacementMap&&(p.displacementMap.value=d.displacementMap,t(d.displacementMap,p.displacementMapTransform),p.displacementScale.value=d.displacementScale,p.displacementBias.value=d.displacementBias),d.emissiveMap&&(p.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,p.emissiveMapTransform)),d.specularMap&&(p.specularMap.value=d.specularMap,t(d.specularMap,p.specularMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest);let b=e.get(d),T=b.envMap,y=b.envMapRotation;T&&(p.envMap.value=T,p.envMapRotation.value.setFromMatrix4(yx.makeRotationFromEuler(y)).transpose(),T.isCubeTexture&&T.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Tu),p.reflectivity.value=d.reflectivity,p.ior.value=d.ior,p.refractionRatio.value=d.refractionRatio),d.lightMap&&(p.lightMap.value=d.lightMap,p.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,p.lightMapTransform)),d.aoMap&&(p.aoMap.value=d.aoMap,p.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,p.aoMapTransform))}function a(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform))}function o(p,d){p.dashSize.value=d.dashSize,p.totalSize.value=d.dashSize+d.gapSize,p.scale.value=d.scale}function l(p,d,b,T){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.size.value=d.size*b,p.scale.value=T*.5,d.map&&(p.map.value=d.map,t(d.map,p.uvTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function c(p,d){p.diffuse.value.copy(d.color),p.opacity.value=d.opacity,p.rotation.value=d.rotation,d.map&&(p.map.value=d.map,t(d.map,p.mapTransform)),d.alphaMap&&(p.alphaMap.value=d.alphaMap,t(d.alphaMap,p.alphaMapTransform)),d.alphaTest>0&&(p.alphaTest.value=d.alphaTest)}function u(p,d){p.specular.value.copy(d.specular),p.shininess.value=Math.max(d.shininess,1e-4)}function g(p,d){d.gradientMap&&(p.gradientMap.value=d.gradientMap)}function f(p,d){p.metalness.value=d.metalness,d.metalnessMap&&(p.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,p.metalnessMapTransform)),p.roughness.value=d.roughness,d.roughnessMap&&(p.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,p.roughnessMapTransform)),d.envMap&&(p.envMapIntensity.value=d.envMapIntensity)}function m(p,d,b){p.ior.value=d.ior,d.sheen>0&&(p.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),p.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(p.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,p.sheenColorMapTransform)),d.sheenRoughnessMap&&(p.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,p.sheenRoughnessMapTransform))),d.clearcoat>0&&(p.clearcoat.value=d.clearcoat,p.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(p.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,p.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(p.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Wt&&p.clearcoatNormalScale.value.negate())),d.dispersion>0&&(p.dispersion.value=d.dispersion),d.retroreflectivity>0&&(p.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(p.iridescence.value=d.iridescence,p.iridescenceIOR.value=d.iridescenceIOR,p.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(p.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,p.iridescenceMapTransform)),d.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),d.transmission>0&&(p.transmission.value=d.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(p.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,p.transmissionMapTransform)),p.thickness.value=d.thickness,d.thicknessMap&&(p.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=d.attenuationDistance,p.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(p.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(p.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=d.specularIntensity,p.specularColor.value.copy(d.specularColor),d.specularColorMap&&(p.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,p.specularColorMapTransform)),d.specularIntensityMap&&(p.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,p.specularIntensityMapTransform))}function h(p,d){d.matcap&&(p.matcap.value=d.matcap)}function x(p,d){let b=e.get(d).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Mx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,w){let v=w.program;n.uniformBlockBinding(y,v)}function c(y,w){let v=s[y.id];v===void 0&&(p(y),v=u(y),s[y.id]=v,y.addEventListener("dispose",b));let E=w.program;n.updateUBOMapping(y,E);let _=e.render.frame;r[y.id]!==_&&(f(y),r[y.id]=_)}function u(y){let w=g();y.__bindingPointIndex=w;let v=i.createBuffer(),E=y.__size,_=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,E,_),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,w,v),v}function g(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Ge("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let w=s[y.id],v=y.uniforms,E=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,w);for(let _=0,M=v.length;_<M;_++){let z=v[_];if(Array.isArray(z))for(let L=0,P=z.length;L<P;L++)m(z[L],_,L,E);else m(z,_,0,E)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(y,w,v,E){if(x(y,w,v,E)===!0){let _=y.__offset,M=y.value;if(Array.isArray(M)){let z=0;for(let L=0;L<M.length;L++){let P=M[L],D=d(P);h(P,y.__data,z),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(z+=D.storage/Float32Array.BYTES_PER_ELEMENT)}}else h(M,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,_,y.__data)}}function h(y,w,v){typeof y=="number"||typeof y=="boolean"?w[0]=y:y.isMatrix3?(w[0]=y.elements[0],w[1]=y.elements[1],w[2]=y.elements[2],w[3]=0,w[4]=y.elements[3],w[5]=y.elements[4],w[6]=y.elements[5],w[7]=0,w[8]=y.elements[6],w[9]=y.elements[7],w[10]=y.elements[8],w[11]=0):ArrayBuffer.isView(y)?w.set(new y.constructor(y.buffer,y.byteOffset,w.length)):y.toArray(w,v)}function x(y,w,v,E){let _=y.value,M=w+"_"+v;if(E[M]===void 0)return typeof _=="number"||typeof _=="boolean"?E[M]=_:ArrayBuffer.isView(_)?E[M]=_.slice():E[M]=_.clone(),!0;{let z=E[M];if(typeof _=="number"||typeof _=="boolean"){if(z!==_)return E[M]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(z.equals(_)===!1)return z.copy(_),!0}}return!1}function p(y){let w=y.uniforms,v=0,E=16;for(let M=0,z=w.length;M<z;M++){let L=Array.isArray(w[M])?w[M]:[w[M]];for(let P=0,D=L.length;P<D;P++){let I=L[P],N=Array.isArray(I.value)?I.value:[I.value];for(let k=0,H=N.length;k<H;k++){let J=N[k],X=d(J),C=v%E,O=C%X.boundary,W=C+O;v+=O,W!==0&&E-W<X.storage&&(v+=E-W),I.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=X.storage}}}let _=v%E;return _>0&&(v+=E-_),y.__size=v,y.__cache={},this}function d(y){let w={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(w.boundary=4,w.storage=4):y.isVector2?(w.boundary=8,w.storage=8):y.isVector3||y.isColor?(w.boundary=16,w.storage=12):y.isVector4?(w.boundary=16,w.storage=16):y.isMatrix3?(w.boundary=48,w.storage=48):y.isMatrix4?(w.boundary=64,w.storage=64):y.isTexture?Oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(w.boundary=16,w.storage=y.byteLength):Oe("WebGLRenderer: Unsupported uniform value type.",y),w}function b(y){let w=y.target;w.removeEventListener("dispose",b);let v=a.indexOf(w.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[w.id]),delete s[w.id],delete r[w.id]}function T(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:l,update:c,dispose:T}}var Sx=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Ln=null;function bx(){return Ln===null&&(Ln=new un(Sx,16,16,pi,Xt),Ln.name="DFG_LUT",Ln.minFilter=dt,Ln.magFilter=dt,Ln.wrapS=hn,Ln.wrapT=hn,Ln.generateMipmaps=!1,Ln.needsUpdate=!0),Ln}var _o=class{constructor(e={}){let{canvas:t=kh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Kt}=e;this.isWebGLRenderer=!0;let h;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=n.getContextAttributes().alpha}else h=a;let x=m,p=new Set([La,Pa,Ia]),d=new Set([Kt,Sn,ms,gs,Ca,Ra]),b=new Uint32Array(4),T=new Int32Array(4),y=new F,w=null,v=null,E=[],_=[],M=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Mn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let z=this,L=!1,P=null,D=null,I=null,N=null;this._outputColorSpace=Nt;let k=0,H=0,J=null,X=-1,C=null,O=new ot,W=new ot,Z=null,be=new Ze(0),Te=0,He=t.width,j=t.height,ee=1,ue=null,Le=null,pe=new ot(0,0,He,j),ke=new ot(0,0,He,j),nt=!1,ie=new as,le=!1,K=!1,ae=new mt,he=new F,Re=new ot,De={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},We=!1;function Ye(){return J===null?ee:1}let U=n;function lt(A,B){return t.getContext(A,B)}let Qe,R,S,G,$,te,de,fe,ne,re,me,Ne,ye,ge,Ue,Ve,Je,V,xe,se,_e,we,oe;try{let A={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",ct,!1),t.addEventListener("webglcontextcreationerror",fn,!1),U===null){let B="webgl2";if(U=lt(B,A),U===null)throw lt(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Fe()}catch(A){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Ge("WebGLRenderer: "+A.message),A}function Fe(){Qe=new Rg(U),Qe.init(),_e=new gx(U,Qe),R=new vg(U,Qe,e,_e),S=new px(U,Qe),R.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),D=U.createFramebuffer(),I=U.createFramebuffer(),N=U.createFramebuffer(),G=new Lg(U),$=new ex,te=new mx(U,Qe,S,$,R,_e,G),de=new Cg(z),fe=new Nf(U),we=new _g(U,fe),ne=new Ig(U,fe,G,we),re=new Ng(U,ne,fe,we,G),V=new Dg(U,R,te),Ue=new Mg($),me=new Q0(z,de,Qe,R,we,Ue),Ne=new vx(z,$),ye=new nx,ge=new lx(Qe),Je=new xg(z,de,S,re,h,l),Ve=new fx(z,re,R),oe=new Mx(U,G,R,S),xe=new yg(U,Qe,G),se=new Pg(U,Qe,G),G.programs=me.programs,z.capabilities=R,z.extensions=Qe,z.properties=$,z.renderLists=ye,z.shadowMap=Ve,z.state=S,z.info=G}x!==Kt&&(M=new Fg(x,t.width,t.height,o,s,r));let Ie=new cc(z,U);this.xr=Ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let A=Qe.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=Qe.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(A){A!==void 0&&(ee=A,this.setSize(He,j,!1))},this.getSize=function(A){return A.set(He,j)},this.setSize=function(A,B,Q=!0){if(Ie.isPresenting){Oe("WebGLRenderer: Can't change size while VR device is presenting.");return}He=A,j=B,t.width=Math.floor(A*ee),t.height=Math.floor(B*ee),Q===!0&&(t.style.width=A+"px",t.style.height=B+"px"),M!==null&&M.setSize(t.width,t.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(He*ee,j*ee).floor()},this.setDrawingBufferSize=function(A,B,Q){He=A,j=B,ee=Q,t.width=Math.floor(A*Q),t.height=Math.floor(B*Q),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(x===Kt){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){Oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}M.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(O)},this.getViewport=function(A){return A.copy(pe)},this.setViewport=function(A,B,Q,q){A.isVector4?pe.set(A.x,A.y,A.z,A.w):pe.set(A,B,Q,q),S.viewport(O.copy(pe).multiplyScalar(ee).round())},this.getScissor=function(A){return A.copy(ke)},this.setScissor=function(A,B,Q,q){A.isVector4?ke.set(A.x,A.y,A.z,A.w):ke.set(A,B,Q,q),S.scissor(W.copy(ke).multiplyScalar(ee).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){S.setScissorTest(nt=A)},this.setOpaqueSort=function(A){ue=A},this.setTransparentSort=function(A){Le=A},this.getClearColor=function(A){return A.copy(Je.getClearColor())},this.setClearColor=function(){Je.setClearColor(...arguments)},this.getClearAlpha=function(){return Je.getClearAlpha()},this.setClearAlpha=function(){Je.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,Q=!0){let q=0;if(A){let Y=!1;if(J!==null){let Se=J.texture.format;Y=p.has(Se)}if(Y){let Se=J.texture.type,Ee=d.has(Se),Me=Je.getClearColor(),ze=Je.getClearAlpha(),Pe=Me.r,Ke=Me.g,et=Me.b;Ee?(b[0]=Pe,b[1]=Ke,b[2]=et,b[3]=ze,U.clearBufferuiv(U.COLOR,0,b)):(T[0]=Pe,T[1]=Ke,T[2]=et,T[3]=ze,U.clearBufferiv(U.COLOR,0,T))}else q|=U.COLOR_BUFFER_BIT}B&&(q|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(q|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&U.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),P=A},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ct,!1),t.removeEventListener("webglcontextcreationerror",fn,!1),Je.dispose(),ye.dispose(),ge.dispose(),$.dispose(),de.dispose(),re.dispose(),we.dispose(),oe.dispose(),me.dispose(),Ie.dispose(),Ie.removeEventListener("sessionstart",xc),Ie.removeEventListener("sessionend",_c),gi.stop()};function gt(A){A.preventDefault(),Fl("WebGLRenderer: Context Lost."),L=!0}function ct(){Fl("WebGLRenderer: Context Restored."),L=!1;let A=G.autoReset,B=Ve.enabled,Q=Ve.autoUpdate,q=Ve.needsUpdate,Y=Ve.type;Fe(),G.autoReset=A,Ve.enabled=B,Ve.autoUpdate=Q,Ve.needsUpdate=q,Ve.type=Y}function fn(A){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function wn(A){let B=A.target;B.removeEventListener("dispose",wn),Zu(B)}function Zu(A){Ju(A),$.remove(A)}function Ju(A){let B=$.get(A).programs;B!==void 0&&(B.forEach(function(Q){me.releaseProgram(Q)}),A.isShaderMaterial&&me.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,Q,q,Y,Se){B===null&&(B=De);let Ee=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,Me=ju(A,B,Q,q,Y);S.setMaterial(q,Ee);let ze=Q.index,Pe=1;if(q.wireframe===!0){if(ze=ne.getWireframeAttribute(Q),ze===void 0)return;Pe=2}let Ke=Q.drawRange,et=Q.attributes.position,Ce=Ke.start*Pe,ht=(Ke.start+Ke.count)*Pe;Se!==null&&(Ce=Math.max(Ce,Se.start*Pe),ht=Math.min(ht,(Se.start+Se.count)*Pe)),ze!==null?(Ce=Math.max(Ce,0),ht=Math.min(ht,ze.count)):et!=null&&(Ce=Math.max(Ce,0),ht=Math.min(ht,et.count));let St=ht-Ce;if(St<0||St===1/0)return;we.setup(Y,q,Me,Q,ze);let _t,pt=xe;if(ze!==null&&(_t=fe.get(ze),pt=se,pt.setIndex(_t)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*Ye()),pt.setMode(U.LINES)):pt.setMode(U.TRIANGLES);else if(Y.isLine){let Pt=q.linewidth;Pt===void 0&&(Pt=1),S.setLineWidth(Pt*Ye()),Y.isLineSegments?pt.setMode(U.LINES):Y.isLineLoop?pt.setMode(U.LINE_LOOP):pt.setMode(U.LINE_STRIP)}else Y.isPoints?pt.setMode(U.POINTS):Y.isSprite&&pt.setMode(U.TRIANGLES);if(Y.isBatchedMesh)if(Qe.get("WEBGL_multi_draw"))pt.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Pt=Y._multiDrawStarts,Ae=Y._multiDrawCounts,Vt=Y._multiDrawCount,st=ze?fe.get(ze).bytesPerElement:1,ln=$.get(q).currentProgram.getUniforms();for(let Tn=0;Tn<Vt;Tn++)ln.setValue(U,"_gl_DrawID",Tn),pt.render(Pt[Tn]/st,Ae[Tn])}else if(Y.isInstancedMesh)pt.renderInstances(Ce,St,Y.count);else if(Q.isInstancedBufferGeometry){let Pt=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Ae=Math.min(Q.instanceCount,Pt);pt.renderInstances(Ce,St,Ae)}else pt.render(Ce,St)};function gc(A,B,Q,q){P!==null&&A.isNodeMaterial&&P.setObject(q,A),le===!0&&Ue.setState(A,Q,!1),A.transparent===!0&&A.side===Bt&&A.forceSinglePass===!1?(A.side=Wt,A.needsUpdate=!0,Mr(A,B,q),A.side=Ct,A.needsUpdate=!0,Mr(A,B,q),A.side=Bt):Mr(A,B,q)}this.compile=function(A,B,Q=null){Q===null&&(Q=A),P!==null&&P.renderStart(A,B,Q),v=ge.get(Q),v.init(B),_.push(v),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),A!==Q&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(B.layers)&&(v.pushLight(Y),Y.castShadow&&v.pushShadow(Y))}),v.setupLights(),P!==null&&P.updateLights(v.state.lightsArray),K=this.localClippingEnabled,le=Ue.init(this.clippingPlanes,K),le===!0&&Ue.setGlobalState(this.clippingPlanes,B),P!==null&&Ve.render(v.state.shadowsArray,Q,B);let q=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let Se=Y.material;if(Se)if(Array.isArray(Se))for(let Ee=0;Ee<Se.length;Ee++){let Me=Se[Ee];gc(Me,Q,B,Y),q.add(Me)}else gc(Se,Q,B,Y),q.add(Se)}),v=_.pop(),P!==null&&P.renderEnd(),q},this.compileAsync=function(A,B,Q=null){let q=this.compile(A,B,Q);return new Promise(Y=>{function Se(){if(q.forEach(function(Ee){let ze=$.get(Ee).currentProgram;(ze===void 0||ze.isReady())&&q.delete(Ee)}),q.size===0){Y(A);return}setTimeout(Se,10)}Qe.get("KHR_parallel_shader_compile")!==null?Se():setTimeout(Se,10)})};let Ro=null;function $u(A){Ro&&Ro(A)}function xc(){gi.stop()}function _c(){gi.start()}let gi=new yu;gi.setAnimationLoop($u),typeof self<"u"&&gi.setContext(self),this.setAnimationLoop=function(A){Ro=A,Ie.setAnimationLoop(A),A===null?gi.stop():gi.start()},Ie.addEventListener("sessionstart",xc),Ie.addEventListener("sessionend",_c),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;P!==null&&P.renderStart(A,B);let Q=Ie.enabled===!0&&Ie.isPresenting===!0,q=M!==null&&(J===null||Q)&&M.begin(z,J);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ie.enabled===!0&&Ie.isPresenting===!0&&(M===null||M.isCompositing()===!1)&&(Ie.cameraAutoUpdate===!0&&Ie.updateCamera(B),B=Ie.getCamera()),A.isScene===!0&&A.onBeforeRender(z,A,B,J),v=ge.get(A,_.length),v.init(B),v.state.textureUnits=te.getTextureUnits(),_.push(v),ae.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),ie.setFromProjectionMatrix(ae,_n,B.reversedDepth),K=this.localClippingEnabled,le=Ue.init(this.clippingPlanes,K),w=ye.get(A,E.length),w.init(),E.push(w),Ie.enabled===!0&&Ie.isPresenting===!0){let Ee=z.xr.getDepthSensingMesh();Ee!==null&&Io(Ee,B,-1/0,z.sortObjects)}Io(A,B,0,z.sortObjects),w.finish(),P!==null&&P.updateLights(v.state.lightsArray),z.sortObjects===!0&&w.sort(ue,Le),We=Ie.enabled===!1||Ie.isPresenting===!1||Ie.hasDepthSensing()===!1,We&&Je.addToRenderList(w,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),le===!0&&Ue.beginShadows();let Y=v.state.shadowsArray;if(Ve.render(Y,A,B),le===!0&&Ue.endShadows(),(q&&M.hasRenderPass())===!1){let Ee=w.opaque,Me=w.transmissive;if(v.setupLights(),B.isArrayCamera){let ze=B.cameras;if(Me.length>0)for(let Pe=0,Ke=ze.length;Pe<Ke;Pe++){let et=ze[Pe];vc(Ee,Me,A,et)}We&&Je.render(A);for(let Pe=0,Ke=ze.length;Pe<Ke;Pe++){let et=ze[Pe];yc(w,A,et,et.viewport)}}else Me.length>0&&vc(Ee,Me,A,B),We&&Je.render(A),yc(w,A,B)}J!==null&&H===0&&(te.updateMultisampleRenderTarget(J),te.updateRenderTargetMipmap(J)),q&&M.end(z),A.isScene===!0&&A.onAfterRender(z,A,B),we.resetDefaultState(),X=-1,C=null,_.pop(),_.length>0?(v=_[_.length-1],te.setTextureUnits(v.state.textureUnits),le===!0&&Ue.setGlobalState(z.clippingPlanes,v.state.camera)):v=null,E.pop(),E.length>0?w=E[E.length-1]:w=null,P!==null&&P.renderEnd()};function Io(A,B,Q,q){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)Q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLightProbeGrid)v.pushLightProbeGrid(A);else if(A.isLight)v.pushLight(A),A.castShadow&&v.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||A.intersectsFrustum(ie)){q&&Re.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ae);let Ee=re.update(A),Me=A.material;Me.visible&&w.push(A,Ee,Me,Q,Re.z,null,B)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||A.intersectsFrustum(ie))){let Ee=re.update(A),Me=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Re.copy(A.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),Re.copy(Ee.boundingSphere.center)),Re.applyMatrix4(A.matrixWorld).applyMatrix4(ae)),Array.isArray(Me)){let ze=Ee.groups;for(let Pe=0,Ke=ze.length;Pe<Ke;Pe++){let et=ze[Pe],Ce=Me[et.materialIndex];Ce&&Ce.visible&&w.push(A,Ee,Ce,Q,Re.z,et,B)}}else Me.visible&&w.push(A,Ee,Me,Q,Re.z,null,B)}}let Se=A.children;for(let Ee=0,Me=Se.length;Ee<Me;Ee++)Io(Se[Ee],B,Q,q)}function yc(A,B,Q,q){let{opaque:Y,transmissive:Se,transparent:Ee}=A;v.setupLightsView(Q),le===!0&&Ue.setGlobalState(z.clippingPlanes,Q),q&&S.viewport(O.copy(q)),Y.length>0&&vr(Y,B,Q),Se.length>0&&vr(Se,B,Q),Ee.length>0&&vr(Ee,B,Q),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function vc(A,B,Q,q){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(v.state.transmissionRenderTarget[q.id]===void 0){let Ce=Qe.has("EXT_color_buffer_half_float")||Qe.has("EXT_color_buffer_float");v.state.transmissionRenderTarget[q.id]=new Jt(1,1,{generateMipmaps:!0,type:Ce?Xt:Kt,minFilter:on,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:tt.workingColorSpace})}let Se=v.state.transmissionRenderTarget[q.id],Ee=q.viewport||O;Se.setSize(Ee.z*z.transmissionResolutionScale,Ee.w*z.transmissionResolutionScale);let Me=z.getRenderTarget(),ze=z.getActiveCubeFace(),Pe=z.getActiveMipmapLevel();z.setRenderTarget(Se),z.getClearColor(be),Te=z.getClearAlpha(),Te<1&&z.setClearColor(16777215,.5),z.clear(),We&&Je.render(Q);let Ke=z.toneMapping;z.toneMapping=Mn;let et=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),v.setupLightsView(q),le===!0&&Ue.setGlobalState(z.clippingPlanes,q),vr(A,Q,q),te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se),Qe.has("WEBGL_multisampled_render_to_texture")===!1){let Ce=!1;for(let ht=0,St=B.length;ht<St;ht++){let _t=B[ht],{object:pt,geometry:Pt,material:Ae,group:Vt}=_t;if(Ae.side===Bt&&pt.layers.test(q.layers)){let st=Ae.side;Ae.side=Wt,Ae.needsUpdate=!0,Mc(pt,Q,q,Pt,Ae,Vt),Ae.side=st,Ae.needsUpdate=!0,Ce=!0}}Ce===!0&&(te.updateMultisampleRenderTarget(Se),te.updateRenderTargetMipmap(Se))}z.setRenderTarget(Me,ze,Pe),z.setClearColor(be,Te),et!==void 0&&(q.viewport=et),z.toneMapping=Ke}function vr(A,B,Q){let q=B.isScene===!0?B.overrideMaterial:null;for(let Y=0,Se=A.length;Y<Se;Y++){let Ee=A[Y],{object:Me,geometry:ze,group:Pe}=Ee,Ke=Ee.material;Ke.allowOverride===!0&&q!==null&&(Ke=q),Me.layers.test(Q.layers)&&Mc(Me,B,Q,ze,Ke,Pe)}}function Mc(A,B,Q,q,Y,Se){P!==null&&Y.isNodeMaterial&&P.setObject(A,Y),A.onBeforeRender(z,B,Q,q,Y,Se),A.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(z,B,Q,q,A,Se),Y.transparent===!0&&Y.side===Bt&&Y.forceSinglePass===!1?(Y.side=Wt,Y.needsUpdate=!0,z.renderBufferDirect(Q,B,q,Y,A,Se),Y.side=Ct,Y.needsUpdate=!0,z.renderBufferDirect(Q,B,q,Y,A,Se),Y.side=Bt):z.renderBufferDirect(Q,B,q,Y,A,Se),A.onAfterRender(z,B,Q,q,Y,Se)}function Mr(A,B,Q){B.isScene!==!0&&(B=De);let q=$.get(A),Y=v.state.lights,Se=v.state.shadowsArray,Ee=Y.state.version,Me=me.getParameters(A,Y.state,Se,B,Q,v.state.lightProbeGridArray),ze=me.getProgramCacheKey(Me),Pe=q.programs;q.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?B.environment:null,q.fog=B.fog;let Ke=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;q.envMap=de.get(A.envMap||q.environment,Ke),q.envMapRotation=q.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Pe===void 0&&(A.addEventListener("dispose",wn),Pe=new Map,q.programs=Pe);let et=Pe.get(ze);if(et!==void 0){if(q.currentProgram===et&&q.lightsStateVersion===Ee)return bc(A,Me),et}else Me.uniforms=me.getUniforms(A),P!==null&&A.isNodeMaterial&&P.build(A,Q,Me),A.onBeforeCompile(Me,z),et=me.acquireProgram(Me,ze),Pe.set(ze,et),q.uniforms=Me.uniforms;let Ce=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ce.clippingPlanes=Ue.uniform),bc(A,Me),q.needsLights=ed(A),q.lightsStateVersion=Ee,q.needsLights&&(Ce.ambientLightColor.value=Y.state.ambient,Ce.lightProbe.value=Y.state.probe,Ce.sunLights.value=Y.state.sun,Ce.sunLightShadows.value=Y.state.sunShadow,Ce.directionalLights.value=Y.state.directional,Ce.directionalLightShadows.value=Y.state.directionalShadow,Ce.spotLights.value=Y.state.spot,Ce.spotLightShadows.value=Y.state.spotShadow,Ce.rectAreaLights.value=Y.state.rectArea,Ce.ltc_1.value=Y.state.rectAreaLTC1,Ce.ltc_2.value=Y.state.rectAreaLTC2,Ce.pointLights.value=Y.state.point,Ce.pointLightShadows.value=Y.state.pointShadow,Ce.hemisphereLights.value=Y.state.hemi,Ce.sunShadowMatrix.value=Y.state.sunShadowMatrix,Ce.sunShadowCascade.value=Y.state.sunShadowCascade,Ce.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Ce.spotLightMatrix.value=Y.state.spotLightMatrix,Ce.spotLightMap.value=Y.state.spotLightMap,Ce.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=v.state.lightProbeGridArray.length>0,q.currentProgram=et,q.uniformsList=null,et}function Sc(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=ys.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function bc(A,B){let Q=$.get(A);Q.outputColorSpace=B.outputColorSpace,Q.batching=B.batching,Q.batchingColor=B.batchingColor,Q.instancing=B.instancing,Q.instancingColor=B.instancingColor,Q.instancingMorph=B.instancingMorph,Q.skinning=B.skinning,Q.morphTargets=B.morphTargets,Q.morphNormals=B.morphNormals,Q.morphColors=B.morphColors,Q.morphTargetsCount=B.morphTargetsCount,Q.numClippingPlanes=B.numClippingPlanes,Q.numIntersection=B.numClipIntersection,Q.vertexAlphas=B.vertexAlphas,Q.vertexTangents=B.vertexTangents,Q.toneMapping=B.toneMapping}function Ku(A,B){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;y.setFromMatrixPosition(B.matrixWorld);for(let Q=0,q=A.length;Q<q;Q++){let Y=A[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function ju(A,B,Q,q,Y){B.isScene!==!0&&(B=De),te.resetTextureUnits();let Se=B.fog,Ee=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?B.environment:null,Me=J===null?z.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:tt.workingColorSpace,ze=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Pe=de.get(q.envMap||Ee,ze),Ke=q.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,et=!!Q.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Ce=!!Q.morphAttributes.position,ht=!!Q.morphAttributes.normal,St=!!Q.morphAttributes.color,_t=Mn;q.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(_t=z.toneMapping);let pt=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Pt=pt!==void 0?pt.length:0,Ae=$.get(q),Vt=v.state.lights;if(le===!0&&(K===!0||A!==C)){let xt=A===C&&q.id===X;Ue.setState(q,A,xt)}let st=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==Vt.state.version||Ae.outputColorSpace!==Me||Y.isBatchedMesh&&Ae.batching===!1||!Y.isBatchedMesh&&Ae.batching===!0||Y.isBatchedMesh&&Ae.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Ae.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Ae.instancing===!1||!Y.isInstancedMesh&&Ae.instancing===!0||Y.isSkinnedMesh&&Ae.skinning===!1||!Y.isSkinnedMesh&&Ae.skinning===!0||Y.isInstancedMesh&&Ae.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ae.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ae.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ae.instancingMorph===!1&&Y.morphTexture!==null||Ae.envMap!==Pe||q.fog===!0&&Ae.fog!==Se||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Ue.numPlanes||Ae.numIntersection!==Ue.numIntersection)||Ae.vertexAlphas!==Ke||Ae.vertexTangents!==et||Ae.morphTargets!==Ce||Ae.morphNormals!==ht||Ae.morphColors!==St||Ae.toneMapping!==_t||Ae.morphTargetsCount!==Pt||!!Ae.lightProbeGrid!=v.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ae.__version=q.version);let ln=Ae.currentProgram;st===!0&&(ln=Mr(q,B,Y),P&&q.isNodeMaterial&&P.onUpdateProgram(q,ln,Ae));let Tn=!1,$n=!1,Ni=!1,ft=ln.getUniforms(),Mt=Ae.uniforms;if(S.useProgram(ln.program)&&(Tn=!0,$n=!0,Ni=!0),q.id!==X&&(X=q.id,$n=!0),Ae.needsLights){let xt=Ku(v.state.lightProbeGridArray,Y);Ae.lightProbeGrid!==xt&&(Ae.lightProbeGrid=xt,$n=!0)}if(Tn||C!==A){S.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),ft.setValue(U,"projectionMatrix",A.projectionMatrix),ft.setValue(U,"viewMatrix",A.matrixWorldInverse);let jn=ft.map.cameraPosition;jn!==void 0&&jn.setValue(U,he.setFromMatrixPosition(A.matrixWorld)),R.logarithmicDepthBuffer&&ft.setValue(U,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ft.setValue(U,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,$n=!0,Ni=!0)}if(Ae.needsLights&&(Vt.state.sunShadowMap.length>0&&ft.setValue(U,"sunShadowMap",Vt.state.sunShadowMap,te),Vt.state.directionalShadowMap.length>0&&ft.setValue(U,"directionalShadowMap",Vt.state.directionalShadowMap,te),Vt.state.spotShadowMap.length>0&&ft.setValue(U,"spotShadowMap",Vt.state.spotShadowMap,te),Vt.state.pointShadowMap.length>0&&ft.setValue(U,"pointShadowMap",Vt.state.pointShadowMap,te)),Y.isSkinnedMesh){ft.setOptional(U,Y,"bindMatrix"),ft.setOptional(U,Y,"bindMatrixInverse");let xt=Y.skeleton;xt&&(xt.boneTexture===null&&xt.computeBoneTexture(),ft.setValue(U,"boneTexture",xt.boneTexture,te))}Y.isBatchedMesh&&(ft.setOptional(U,Y,"batchingTexture"),ft.setValue(U,"batchingTexture",Y._matricesTexture,te),ft.setOptional(U,Y,"batchingIdTexture"),ft.setValue(U,"batchingIdTexture",Y._indirectTexture,te),ft.setOptional(U,Y,"batchingColorTexture"),Y._colorsTexture!==null&&ft.setValue(U,"batchingColorTexture",Y._colorsTexture,te));let Kn=Q.morphAttributes;if((Kn.position!==void 0||Kn.normal!==void 0||Kn.color!==void 0)&&V.update(Y,Q,ln),($n||Ae.receiveShadow!==Y.receiveShadow)&&(Ae.receiveShadow=Y.receiveShadow,ft.setValue(U,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&B.environment!==null&&(Mt.envMapIntensity.value=B.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=bx()),$n){if(ft.setValue(U,"toneMappingExposure",z.toneMappingExposure),Ae.needsLights&&Qu(Mt,Ni),Se&&q.fog===!0&&Ne.refreshFogUniforms(Mt,Se),Ne.refreshMaterialUniforms(Mt,q,ee,j,v.state.transmissionRenderTarget[A.id]),Ae.needsLights&&Ae.lightProbeGrid){let xt=Ae.lightProbeGrid;Mt.probesSH.value=xt.texture,Mt.probesMin.value.copy(xt.boundingBox.min),Mt.probesMax.value.copy(xt.boundingBox.max),Mt.probesResolution.value.copy(xt.resolution)}ys.upload(U,Sc(Ae),Mt,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ys.upload(U,Sc(Ae),Mt,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ft.setValue(U,"center",Y.center),ft.setValue(U,"modelViewMatrix",Y.modelViewMatrix),ft.setValue(U,"normalMatrix",Y.normalMatrix),ft.setValue(U,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){let xt=q.uniformsGroups;for(let jn=0,Ui=xt.length;jn<Ui;jn++){let Tc=xt[jn];oe.update(Tc,ln),oe.bind(Tc,ln)}}return ln}function Qu(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.sunLights.needsUpdate=B,A.sunLightShadows.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function ed(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return k},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(A,B,Q){let q=$.get(A);q.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),$.get(A.texture).__webglTexture=B,$.get(A.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:Q,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let Q=$.get(A);Q.__webglFramebuffer=B,Q.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(A,B=0,Q=0){J=A,k=B,H=Q;let q=null,Y=!1,Se=!1;if(A){let Me=$.get(A);if(Me.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(U.FRAMEBUFFER,Me.__webglFramebuffer),O.copy(A.viewport),W.copy(A.scissor),Z=A.scissorTest,S.viewport(O),S.scissor(W),S.setScissorTest(Z),X=-1;return}else if(Me.__webglFramebuffer===void 0)te.setupRenderTarget(A);else if(Me.__hasExternalTextures)te.rebindTextures(A,$.get(A.texture).__webglTexture,$.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let Ke=A.depthTexture;if(Me.__boundDepthTexture!==Ke){if(Ke!==null&&$.has(Ke)&&(A.width!==Ke.image.width||A.height!==Ke.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(A)}}let ze=A.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(Se=!0);let Pe=$.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Pe[B])?q=Pe[B][Q]:q=Pe[B],Y=!0):A.samples>0&&te.useMultisampledRTT(A)===!1?q=$.get(A).__webglMultisampledFramebuffer:Array.isArray(Pe)?q=Pe[Q]:q=Pe,O.copy(A.viewport),W.copy(A.scissor),Z=A.scissorTest}else O.copy(pe).multiplyScalar(ee).floor(),W.copy(ke).multiplyScalar(ee).floor(),Z=nt;if(Q!==0&&(q=D),S.bindFramebuffer(U.FRAMEBUFFER,q)&&S.drawBuffers(A,q),S.viewport(O),S.scissor(W),S.setScissorTest(Z),Y){let Me=$.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+B,Me.__webglTexture,Q)}else if(Se){let Me=B;for(let ze=0;ze<A.textures.length;ze++){let Pe=$.get(A.textures[ze]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ze,Pe.__webglTexture,Q,Me)}}else if(A!==null&&Q!==0){let Me=$.get(A.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Me.__webglTexture,Q)}X=-1};function wc(A){let B=$.get(A);return(B.__readFormat!==A.format||B.__readType!==A.type)&&(B.__readFormat=A.format,B.__readType=A.type,B.__formatReadable=R.textureFormatReadable(A.format),B.__typeReadable=R.textureTypeReadable(A.type)),B}this.readRenderTargetPixels=function(A,B,Q,q,Y,Se,Ee,Me=0){if(!(A&&A.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(ze=ze[Ee]),ze){S.bindFramebuffer(U.FRAMEBUFFER,ze);try{let Pe=A.textures[Me],Ke=Pe.format,et=Pe.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=wc(Pe);if(Ce.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ce.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-q&&Q>=0&&Q<=A.height-Y&&U.readPixels(B,Q,q,Y,_e.convert(Ke),_e.convert(et),Se)}finally{let Pe=J!==null?$.get(J).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(A,B,Q,q,Y,Se,Ee,Me=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ze=$.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ee!==void 0&&(ze=ze[Ee]),ze)if(B>=0&&B<=A.width-q&&Q>=0&&Q<=A.height-Y){S.bindFramebuffer(U.FRAMEBUFFER,ze);let Pe=A.textures[Me],Ke=Pe.format,et=Pe.type;A.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Me);let Ce=wc(Pe);if(Ce.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ce.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ht=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.bufferData(U.PIXEL_PACK_BUFFER,Se.byteLength,U.STREAM_READ),U.readPixels(B,Q,q,Y,_e.convert(Ke),_e.convert(et),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let St=J!==null?$.get(J).__webglFramebuffer:null;S.bindFramebuffer(U.FRAMEBUFFER,St);let _t=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await Gh(U,_t,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ht),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Se),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(ht),U.deleteSync(_t),Se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,Q=0){let q=Math.pow(2,-Q),Y=Math.floor(A.image.width*q),Se=Math.floor(A.image.height*q),Ee=B!==null?B.x:0,Me=B!==null?B.y:0;te.setTexture2D(A,0),U.copyTexSubImage2D(U.TEXTURE_2D,Q,0,0,Ee,Me,Y,Se),S.unbindTexture()},this.copyTextureToTexture=function(A,B,Q=null,q=null,Y=0,Se=0){let Ee,Me,ze,Pe,Ke,et,Ce,ht,St,_t=A.isCompressedTexture?A.mipmaps[Se]:A.image;if(Q!==null)Ee=Q.max.x-Q.min.x,Me=Q.max.y-Q.min.y,ze=Q.isBox3?Q.max.z-Q.min.z:1,Pe=Q.min.x,Ke=Q.min.y,et=Q.isBox3?Q.min.z:0;else{let Mt=Math.pow(2,-Y);Ee=Math.floor(_t.width*Mt),Me=Math.floor(_t.height*Mt),A.isDataArrayTexture?ze=_t.depth:A.isData3DTexture?ze=Math.floor(_t.depth*Mt):ze=1,Pe=0,Ke=0,et=0}q!==null?(Ce=q.x,ht=q.y,St=q.z):(Ce=0,ht=0,St=0);let pt=_e.convert(B.format),Pt=_e.convert(B.type),Ae;B.isData3DTexture?(te.setTexture3D(B,0),Ae=U.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(te.setTexture2DArray(B,0),Ae=U.TEXTURE_2D_ARRAY):(te.setTexture2D(B,0),Ae=U.TEXTURE_2D),S.activeTexture(U.TEXTURE0),S.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,B.flipY),S.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),S.pixelStorei(U.UNPACK_ALIGNMENT,B.unpackAlignment);let Vt=S.getParameter(U.UNPACK_ROW_LENGTH),st=S.getParameter(U.UNPACK_IMAGE_HEIGHT),ln=S.getParameter(U.UNPACK_SKIP_PIXELS),Tn=S.getParameter(U.UNPACK_SKIP_ROWS),$n=S.getParameter(U.UNPACK_SKIP_IMAGES);S.pixelStorei(U.UNPACK_ROW_LENGTH,_t.width),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,_t.height),S.pixelStorei(U.UNPACK_SKIP_PIXELS,Pe),S.pixelStorei(U.UNPACK_SKIP_ROWS,Ke),S.pixelStorei(U.UNPACK_SKIP_IMAGES,et);let Ni=A.isDataArrayTexture||A.isData3DTexture,ft=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Mt=$.get(A),Kn=$.get(B),xt=$.get(Mt.__renderTarget),jn=$.get(Kn.__renderTarget);S.bindFramebuffer(U.READ_FRAMEBUFFER,xt.__webglFramebuffer),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,jn.__webglFramebuffer);for(let Ui=0;Ui<ze;Ui++)Ni&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(A).__webglTexture,Y,et+Ui),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,$.get(B).__webglTexture,Se,St+Ui)),U.blitFramebuffer(Pe,Ke,Ee,Me,Ce,ht,Ee,Me,U.DEPTH_BUFFER_BIT,U.NEAREST);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||$.has(A)){let Mt=$.get(A),Kn=$.get(B);S.bindFramebuffer(U.READ_FRAMEBUFFER,I),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,N);for(let xt=0;xt<ze;xt++)Ni?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mt.__webglTexture,Y,et+xt):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mt.__webglTexture,Y),ft?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Kn.__webglTexture,Se,St+xt):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Kn.__webglTexture,Se),Y!==0?U.blitFramebuffer(Pe,Ke,Ee,Me,Ce,ht,Ee,Me,U.COLOR_BUFFER_BIT,U.NEAREST):ft?U.copyTexSubImage3D(Ae,Se,Ce,ht,St+xt,Pe,Ke,Ee,Me):U.copyTexSubImage2D(Ae,Se,Ce,ht,Pe,Ke,Ee,Me);S.bindFramebuffer(U.READ_FRAMEBUFFER,null),S.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ft?A.isDataTexture||A.isData3DTexture?U.texSubImage3D(Ae,Se,Ce,ht,St,Ee,Me,ze,pt,Pt,_t.data):B.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,Se,Ce,ht,St,Ee,Me,ze,pt,_t.data):U.texSubImage3D(Ae,Se,Ce,ht,St,Ee,Me,ze,pt,Pt,_t):A.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Se,Ce,ht,Ee,Me,pt,Pt,_t.data):A.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Se,Ce,ht,_t.width,_t.height,pt,_t.data):U.texSubImage2D(U.TEXTURE_2D,Se,Ce,ht,Ee,Me,pt,Pt,_t);S.pixelStorei(U.UNPACK_ROW_LENGTH,Vt),S.pixelStorei(U.UNPACK_IMAGE_HEIGHT,st),S.pixelStorei(U.UNPACK_SKIP_PIXELS,ln),S.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),S.pixelStorei(U.UNPACK_SKIP_IMAGES,$n),Se===0&&B.generateMipmaps&&U.generateMipmap(Ae),S.unbindTexture()},this.initRenderTarget=function(A){$.get(A).__webglFramebuffer===void 0&&te.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?te.setTextureCube(A,0):A.isData3DTexture?te.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?te.setTexture2DArray(A,0):te.setTexture2D(A,0),S.unbindTexture()},this.resetState=function(){k=0,H=0,J=null,S.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _n}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}};var Mo=class extends nr{constructor(e){super(e),this.type=Xt}parse(e){let a=function(_,M){switch(_){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(M||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(M||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(M||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(M||""))}},g=function(_,M,z){M=M||1024;let P=_.pos,D=-1,I=0,N="",k=String.fromCharCode.apply(null,new Uint16Array(_.subarray(P,P+128)));for(;0>(D=k.indexOf(`
`))&&I<M&&P<_.byteLength;)N+=k,I+=k.length,P+=128,k=String.fromCharCode.apply(null,new Uint16Array(_.subarray(P,P+128)));return-1<D?(z!==!1&&(_.pos+=I+D+1),N+k.slice(0,D)):!1},f=function(_){let M=/^#\?(\S+)/,z=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,P=/^\s*FORMAT=(\S+)\s*$/,D=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,I={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},N,k;for((_.pos>=_.byteLength||!(N=g(_)))&&a(1,"no header found"),(k=N.match(M))||a(3,"bad initial token"),I.valid|=1,I.programtype=k[1],I.string+=N+`
`;N=g(_),N!==!1;){if(I.string+=N+`
`,N.charAt(0)==="#"){I.comments+=N+`
`;continue}if((k=N.match(z))&&(I.gamma=parseFloat(k[1])),(k=N.match(L))&&(I.exposure=parseFloat(k[1])),(k=N.match(P))&&(I.valid|=2,I.format=k[1]),(k=N.match(D))&&(I.valid|=4,I.height=parseInt(k[1],10),I.width=parseInt(k[2],10)),I.valid&2&&I.valid&4)break}return I.valid&2||a(3,"missing format specifier"),I.valid&4||a(3,"missing image size specifier"),I},m=function(_,M,z){let L=M;if(L<8||L>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);L!==(_[2]<<8|_[3])&&a(3,"wrong scanline width");let P=new Uint8Array(4*M*z);P.length||a(4,"unable to allocate buffer space");let D=0,I=0,N=4*L,k=new Uint8Array(4),H=new Uint8Array(N),J=z;for(;J>0&&I<_.byteLength;){I+4>_.byteLength&&a(1),k[0]=_[I++],k[1]=_[I++],k[2]=_[I++],k[3]=_[I++],(k[0]!=2||k[1]!=2||(k[2]<<8|k[3])!=L)&&a(3,"bad rgbe scanline format");let X=0,C;for(;X<N&&I<_.byteLength;){C=_[I++];let W=C>128;if(W&&(C-=128),(C===0||X+C>N)&&a(3,"bad scanline data"),W){let Z=_[I++];for(let be=0;be<C;be++)H[X++]=Z}else H.set(_.subarray(I,I+C),X),X+=C,I+=C}let O=L;for(let W=0;W<O;W++){let Z=0;P[D]=H[W+Z],Z+=L,P[D+1]=H[W+Z],Z+=L,P[D+2]=H[W+Z],Z+=L,P[D+3]=H[W+Z],D+=4}J--}return P},h=function(_,M,z,L){let P=_[M+3],D=Math.pow(2,P-128)/255;z[L+0]=_[M+0]*D,z[L+1]=_[M+1]*D,z[L+2]=_[M+2]*D,z[L+3]=1},x=function(_,M,z,L){let P=_[M+3],D=Math.pow(2,P-128)/255;z[L+0]=ri.toHalfFloat(Math.min(_[M+0]*D,65504)),z[L+1]=ri.toHalfFloat(Math.min(_[M+1]*D,65504)),z[L+2]=ri.toHalfFloat(Math.min(_[M+2]*D,65504)),z[L+3]=ri.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;let d=f(p),b=d.width,T=d.height,y=m(p.subarray(p.pos),b,T),w,v,E;switch(this.type){case jt:E=y.length/4;let _=new Float32Array(E*4);for(let z=0;z<E;z++)h(y,z*4,_,z*4);w=_,v=jt;break;case Xt:E=y.length/4;let M=new Uint16Array(E*4);for(let z=0;z<E;z++)x(y,z*4,M,z*4);w=M,v=Xt;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:b,height:T,data:w,header:d.string,gamma:d.gamma,exposure:d.exposure,type:v,colorSpace:Hn,minFilter:dt,magFilter:dt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}};var Au=zc("Iz9SQURJQU5DRQpGT1JNQVQ9MzItYml0X3JsZV9yZ2JlCgotWSAxMjggK1ggMjU2CgICAQCAmZmampudpbfYgJKhrba8wsXHycjFwr24sq2oo6CempeVlJKRkJGRk5WYm56ho6Wmp6ioqqqsr7O2trW0s7KztLSzsa6sqqqrrK2trauqqainpqWioJ2bmZeVlJWXmZ2go6SmqKqrrK2vsrW5ury6t7OvqqKVhuvIr6Ogn5+enZ0fnp+iqbTD2PGFk6CsuMHJzs7KxsTExMK/urKrpaCcmoaYIpqdoKOlp6mrra+wsLCvsLGysbCvr66ura2ur7CytLW3uLqEuwK5t4S2L7W0sq+rqaakoqCenJqZmp2gpKqxt7q6vMHFys/U1tPNw7esoZWJ+uPOva6jnJmZgIqLi4yNj5enxXSFk52lqq6xs7Szsa6ppJ+bl5OQjoqIhoWDgoKDhIWHiYuOkJGTlJWWl5iYmpyfoaKioaCgoaKioqCem5mZmpubnJyamZiXlpaVk5COjIqIh4aGiIqNkJOUlZeZmpucn6Ckpqipp6SinpqSh3nWuKGWkpGQkI+PH5CRlZumtcfceoaRnaavtrq6t7Oys7KxrqiinJaSjoyFiimLjI+Rk5WYmZudn6Cfnp6foKCgn56dnZ2cnJ2dnp+hoqOkpqenpqako4WiLqGfnJqXlZSTkI6Mi4qKjI6Slpyho6Smqq6yt7u9vLiwpp2TiH3m0L6tn5WOi4o6gYKCg4SHjp65bXyIkpmeoaSnqKelop6ZlZCMiIWCf318e3l5eHl6e31/goSFh4mJi4uMjY6PkZSWloWVPpeXlpWSkI6Oj5CQkZGPjo6NjIyLiYeFg4KAfn5+gIKFiIqLjY6QkZKTlZeanJ2fnJqXlI+IfnHIrJeMiYeHhIZ/iIyTnaq6znJ9iJKcpKqurauop6enpaOemJKNiYaDgoGBgYCBg4WHiYuNj5GTlJWUlJOUlZWVk5OTkpGRkJGSkpOUlpaXmJmamZmYl5aWlZWVlJOQjoyKiYiGhIKBgICChYeLkZaYmJqdoaWpra+uqqKZkYh/ddfEsqOWjIWCgYl67XuSeu97iXoCAgEAgJWYm6yCzICMjIPoyq+XhezX2fWNnKSqq6qlnpqamZidp7G7v76/wb+4sa2qpZ+cm5aTk5SUk5GQlJmcmpiWlZWWlZSVl5eVl5eXlJCUlJifoaCkqayzu8LHxsTHxL64saqkn52dn6WoqKipppyQgezvgpOpwuKAjI+F35rEpKGggKCs0Yi24oOMhevPtZuD5NXl/pGls7Kurq6po6Gip6utsrm+xMPBvbq3squknpqYlpKPjo6PkpOTlZaVk5SWlZORkJWWk5KRkJCOjIqLjY6QkZGUmJ2hpquys7jBvrWxrKain56dnJ6ho6esq6CPge7h5P2RprvU8IH53LuW46+YMYeJjZ93t3J9fXbStp2IedjFxt+AjZOYmZeSjouKiomOl5+nrKurraymoZ6blZCNjIiEhYCEg4KFioyLiYeGh4eHhoeIiYiJiYqHhIeHipCRkZWZnKGprrSysbSxrKahmpWQjo6RlpmYmJmWjoN22dt3hpqxzXR+gHnLjraWkpKSoMR/p812fnfUuaOLd9DE0uiElqKgnJ2dmZORkpaZnKCmq7CwraqopaCalI+LioeEgoCBgkuEhYWHh4aFhoeGhYODh4iFhIOCgoB/fX6AgYODg4WJjJCUmaChpq2qop6ZlpGPjo6Mj5GTlpuZj4F128/Q5oOVp73Wc97FqYnRoouAgIGFlnCranR1bsSrlH9xybi5z3eCiI2OjYmFgYCCgYWMk5mdnZ2gnpmUkY6Jg4GBfXt7fHt6enl8gIKCf319fn5+fX+Af3+BgYJ+e319gIWGh4qNkJWcoqelo6akn5qVj4qGhYWHi46Ojo+MhXtvy81vfpClwG12eHG+hayNiYiAiZi8d5q+bnVvxayWgW/Ct8PYeouWlZGRkY6Jh4eKjZCUmp6joqCenJmUj4mFgoB+enh3eHl6e3t9fX17fH19fHp6fX57enp5eXd1dHV3d3l5eXt+gYWJjZOUmZ+blJGOioaEhISDhYeJjJCPhXhuzcLC1XmLnK/Gas62nIDGmYOEeoJ7hHyFe4R63HuCeoV7hHyCe4d6Bnt7e3x8fIV7hHrde4R6hXsBfIR7g3oCAgEAP5ybr7mRlIHAhcetuYi82tbHspiEiJaenZubmpWgt8bKysO4sKOblI+OkJejs7e7ure2t7i9u7OtraqlpqOgoYSfa6KjpKWnr7S8v8C3ubu6trO5qZyWk5KUl6CmsLe+wLiup6uwr6+ysKiYiJGs1/D47s6MtrPUkc2HmYiIp6Ci2Kf1lZbG8K6w3pTB6+XPu6aUiI2hu7u1sKyqrLO5wMG5raGZlZOTlJefqa+2hbpNuLixrKinp6KjoJ2dnJqbnZycnZyfpKSnqaqrrrW0s7OuqaWbk4yKiIyPlqGqs7axqZ+cmpyfoJ2RhoeUqb7X7OS9luC0tvezgojSkMCAj46ip4GFdK96tp6pe6nCv7KgiXh7h46OjIuKh5GlsrW2sKaek4uGg4KEipSho6eopaSkpqqoop2cmZWVk5CRj4+Qj5KTlZWXnaGorbCnp6mopKGkmI2HhYSGiJGXn6WsrqaemJqenp+hoJiKfIObwdbf17p/pqTDhLt6inp9mJIvlciZ24SEstyfocqGrtHOuqiWhnyAkaippJ+bmpyiqK6vqZ6TjIiGhYeJkJiepKiEpxClpZ6bl5aWkpORj4+NjI2PhI45kJWUmJmbm56ko6KinpmVjYZ/fHt/gYeRmaGjnpePjIqMj5GOg3p6hZmswdXOq4nOpKbfoXN5vYSygIWDl5x4e2uicqmTnXGbtLKlk35vcn2CgoGAfnyHmaWpqaKZkomAfHh5fIGKlpeam5iWlZidnJaRkI2Ji4iFhYSFhYaJiouMjZGUmaCjm5ydnJiVloyDfXt6fH6GjJOZoKKbk46Qk5OUlpSNgHR6kLPH0Miud5yZtnyvcn9xdY+HL4u8kcx6eqbNlZa8faHAvKuainxzd4abnZiTkI+Rlpyio52TioN+fX1+gIaOk5mchJtNmZiSj4yLi4eJhoSFhIKDhYSEhYSGi4qNj5CRk5mYlpaSjYqCfHZ0cnV4foaOlZeTjIWDgIGEhYJ5cXF7j5+yxb+efsCams6UanCwe6cMenp6e3x8fHt7enp66XsJenp6e3t8fHx7hHoFe3t8fHuEeut7hHoGe3x8e3t6AgIBAICanoCNiMrssrSM2vXAhMbyqrewpZWZoquwr7GxuLiuoZKMiIeNn66+ysW4raWimpSWl5ymr7Cxs7m7vMS+trS6urm3uLe2ure1s66tpqSblZOXoKm2x8vMxLGgmJeYmqG0vsjK68S63fWEhvr/gdnG0829oOKE7N2vxquHqL6tp4DHroWd8+qo2qrl6dam6oKrtdDdzLanrMXGxLywt76/rJ2Uk5SdrrrCxcO6q6CYmZiYm5+hp6+xt7m0srKyr6yrsLCsrbOztbSzsrGrqKWclpKMi4+Xo6+3u7Spn5eZoqqvuLqtoJWTkZWYmpOSoLXCvpXb3pvT8taRwqXJzIbM54CNkHZ+ebXYo6R+wtqsd7TbmKWflYeLkpugn6CgpqWdkoN8enp/j5yrtLGmnZaSjYeIio6WnqCho6ipqrKspqSoqKempaakqKWjopyblpSMhoWJkZqltLe5saCRiomJjJKjrLO13riqyuB4eeLndcSyvrqqkMx00cmftZx5lKmemIC3nXaL0tKZxZnN0LyS1HWapLrEtaOYnbS2tKyhp66unI+HhoePnqixs7Gpm5KKi4qKjJCRl56gpaejoqKhn5ybn5+cnaGhpKKhoKCamJWNiYV/foKJlJ6kqKOYj4mKk5qfpaabkIeEg4aJjIaFkqSuqobJy4u82L6DsJa5tna41YCDhW5zb6fKlpd0ssmgbqfKjJeRin2BiZGXlJaVm5qRhnpzcXB1g4+dp6WbkoyJhX6AgYeOlZeXmZ2fn6aknJufn56cnJuan5qZl5ORjIyEf36BiI+apqqrpJWGgH5/gYeXn6ap17qoyd94eeLmdMOxvLinkMluwrqTqZFvh5yTjICqkm2Avr+Ot4y+wa6GxG2NmKu0ppeNk6iqqqKXnKKjkoV9fX6Fk5ykpqSdkIeAgYCAgoWGjJKUmZuXlpaWk5GPlJOQkZWVl5aVlJOPjYuDf3x2dXh/iZKYm5aMg31/iI+SmJiOhHx6eHt/gXt6hZegnHq5vICtxa54pIusqWyoxwl6ent8fHt6enqFe4J61XsJfX5+fn9/fn5/hn4UfX17enp6e3x8e3p6ent8fHt6enqFewF65HuCeoV7B3p6ent8e3oCAgEALaiqp4jH06766OiXyuCty7qJ3JS40bqD8JS6ubG9sIads6amusW6ppaLi5SgrYSzgK+imZWOjI2Tnp+jpKOkpqeppqahn6WclZCPlKGir7a9vbmzqZaRlp2swMSzmpOVna29yNuAwdnw9/T8783aw6Kxr6f87I6P5dmtiPaI5ajEzZDfpKWR++nzr4XT1abs9KrEt6OSj6urpqGpx8Clmpmerbu8sJ2RgoCAgoSbjJGSEZCPi4T++/+ChomMjY6Oj4+NhI46i4iGg4OFiIyPjYyJhYKC//r4/Y6hsbexpZugpJyss62vrqeZhZKmtbiU34i52LPitpLt44CvtNuCmICam5d4ssKe487OiLfLm7anfMmGpbuoeduGpqefqaB8jaGXlqexqJWIfn2FkZuhoqKhnpOLiIJ/gIWPkJSUk5OWlpeWlJGPko2IgoGEj5KepKqppqGYh4OIj5uusaKMhoeOnKq02HexxNfZ1eDUt8OukJ6el+TWg37LxZ1723nQl0Gzt4DIlpeC39Dbnne7vZTV3Jivo5KDgZqalZOata+XjYyRnaqqn46DdXNydXiOgIWGhISBeu7s73p+gIKEhYaGhoWFOoJ/fXp6e36Bg4F/fHh2dOPe3uSBkqCmn5aOk5aOm6KdnpyViHiDlaKmhsx7psOhz6aD0sl1n6XCcYmAjo+LbaS1k9K8unyqu4+pmHG6fJirmnDKe5mblp6Vc4SWjIycpJyMf3Z0fIeRl5qYmJSKhIF7d3h+h4iMjYmKjo6OjYuIhomEf3l5e4SJlZqenpuWjX56f4WRo6aYg31+hJKfqdx2rsHT1dLc0bXBrI6bm5Xh1X1zt7ORcshuv4uAp6h0t4uMecy/yZNurK2IxsyMopiIeniOjoqIj6mjjYOBhpKdnZKDemxqamxxh3l+f39/fHbo5up3e32AgoODhIOCg4KCgn58enh3eHp8fXt5dXFua9DNztJ3h5Sak4uDh4mDjpWRkpGKfW93hpOVerxvlrKUv5p5wbhtlJmxZ34Nenp7fHt6enp7e3t6eoR7AXqFewF6zHsBfI9/F359fHx7enp7e3x6enp7fHt6ent7e3p6hHuCeqR7g3qde4R6l3sBeoR7gnqEewV6ent8ewICAQCAqbnw3dGuofKbuYHSxYLOqtC/jYujobismbGqpKWtuLixqbW2o6WblrjAuKaXi42bqLC2trq2tKupoqGem5eWlZWbmJ6jpqu0uL29wse/u7CdkpOgssHHva2Uj5Kanr3ApKOrtr/Fv7W6je+svraT/Mb69I/pjr24mfK0pdjuy6CAtdGI06CSgbCk7eHT4cqv27P8jLy9rZihrKSgpaaVkIiF+uvm+Y+Gl6Stt7evpZ2UjILs9Pb58+TVysTBx8nGxsG8ubnG0NbZ3eLr6/D5g42TnKWzur24rqOQiYDt+Y6fo9mHiIf3zrellpqus6Hugq+/kL+M1bXNtcTp+KmGgqeAm6nWxL+ektmMqXW7sXa8l7qrgH2RkaacjaGblpadpqagmqSkk5SKiKWspZaJfn+Ml5+kpKmlo5qXkpGPjIiHhoaMio+TlpmipaqprrKsqZ6OhIWRoK2yqZuGgYSLjqmsk5KZoqiuqKCog96drqaH5LTj34DQfqqpidahl8fTtJGAprp5wJGDcpyU18e7y7ecw6Dlf6mpnImRm5SRlZWHgXp239XT6Id+jpumsLGon5aOhn3i6Ort59rMwr26wMG/vrq1s7O/yM7Q1Njg4ebvfoeMlJyosLOto5eFfXTZ44CRlch9f3zkvKaWiIucoJDZdpyrga9+vaK7pa/O4Zl5dJaAkJ7Ds7KThsaCnWupomyvi6qddnOFhZqRg5WRjI2SmpuVj5mZiImCgJmfm46AdXeCjJSZmp+bmJCOioeFg4B+f36DgYaLj5CYnJ+eoqShn5SFfH2IlqOnn5J+eXyChZ2fh4eNlZufmpOdgNybqqCD3a3WzHW7cZuefsKSi7vAo4aAnKptsYd5Zo6KybervaqPtJTVdZuckH+GkIuHi4t+eHFt0MrL4YN7ipeirK6mnZWNhHvf5ebo49bJv7q3vb67u7ezsbG9xcvN0dXc3uPtfIWKkpqmrq+qn5KBeXDR2HiGi7t1dXPUsZuKfoCPk4XJa46cdqJ0rpWsl6G9zo1waooKenp7e3p6e3t7eoR7AXrae4J8hH0jfHx7ent7fHt6e3t7enp7e3p6e3x6ent8e3p6e3t6ent7e3qPe4R6jXuceo57gnqEe4N8iXsBeoR7DXp7e3t6ent7enp7fHsCAgEAPKXz/Iqnpu7yx8XL5PDHx4aPqrKtqLasoqSxwcK4qq22wbixtLi9vMW2o5iau8S6qZeOjJelsLO2tLOzs4SwgLKxsrGzuLe0tbKvo5eOkZ6uv8LCrJWPk5vDxbGzv7yvq7K9wLSoqrK/wbSrrrDYxo3RrrTZ9euC0dHb+qT2/8at1u6f54CtpJv0h76224zmvcOShr3EqJqalIz2w96BlKy5vKiUh4Lrz7Gcm629ysvX4NCytdnp8fLm2tTt/YH6QPLk0+P1+frp3tLU4uXdz8W6r6KZk5iruszvhZCku8TDsMipievIu8TCwrOon/iOrJ7OicCVs5ja8aW/zLy076uAltzgfZmV1d61r7bQ2rKyeYGYoJyYo5uUlKCtsKebnaavp5+jpqqpsaOTiIqnrqaXh4B/iJSeoaSjoaKinp2enZ+foJ6gpKSioqGck4qBhI+era+vnIiChIyvsJ+gqaebmJ6nqZ+Ulp2oqp6Ym57BsH69m6DE3tJzvr/B3Zfh4bKAnr/RkNJwmZWL13quo8N+06qwg3qrsZeLi4V92rTQe42ksbShjoJ84sirl5WmtcHEztfIq67P3+bn29HL4fB77+jby9rr7/Hg1cnL2NzUxr2yqJuUjpOkssLifombr7i5qb+Ee+C9rbWzsqOYkeJ/m468e6qFo4jC2ZWptauj05mAi8zMc46Jw8ynoajByqSjcHiLk5CPmJGKipSgopuQkpqjm5aZm56dpJiKf4Gbo5uOfnd2gIuTl5iZl5eXlJKVlJOUlZOVmJiXlpaRiYF4e4aToKKikX96e4Kio5OTm5mPjJGZm5KHiZCZm5GLjpCwoHOvjJCyzcBorrCwyI3SzKSAlK28hcRmi4uAwm6hl7F0xJ2heXKfpY2BgHtzy63MeYuirrGfjYB63sWolJKisLu9yNDDp6nI19/g1cvF2uh46eHUxtTl6evb0MXG09fPwbito5eQi5Girr3be4aXq7W2pr1+ddazo6mmpJeNhtF1j4Oucpx7l36xyoqcpp6XwYwNenp7e3p7e3p6e3t6euR7H3p7e3p6e3x6ent7enp7enp7e3p6fHt6e3t7ent7e3qLe4N6iXuXegF7m3qIe4J8iXsTent7e3p7e3t6e3t6ent7enp7ewICAQCAp6Tauf3t5ubekNXKwOimtqiuuKyorrnDvbKrssPFt7C5wbmytr69u7izv9LLl5m4uLm0o5WNj5aepq2wsrOws7Czs7Sws6uimZGPmqmyuL65pZGRmLXKx7+4u7q6vrWts8O6p6u1w7yroqe0uLexnqnIi9nNzMifhPzK9bWh55eAqeWxo8PXpaPy1f3imtW/su+tt5uYq5jZs/KRrruqjfTGrqious/p6uqGlZb+8PWNkoiFj4rk+oKGi4WAgIqOkoeBgI6RkIWBgIiOhv/+/vjw7v+G+N7g79/Ov8GsmpvC64qfvL6rneuakbjRqJq4ouSeqcaPxNbg2Pas3paexbmAl5PEqeTR0tLHg8G0rNSVpJieppyZnqiwrKKborCwpJ6mraagpKqpqKeirb63iImkpaaik4Z/goiQl5yeoaGeoaCioaOfoJqSioOBjJmhpqumlYODiKKzsKijpaSlqaCan6yklJafq6WWj5Sfo6GdjZazfMS3trWQdeO42KGTy4aAmsyclK6+lpPWwebJi8KroNucpo2JmonCp+aNqbSkh+rAqaKissbf4OCAjo/z5euGi4J/iYTc73yAhX96e4OIi4F8eoiLi4B7e4KIgfb09O3l4/WA69TW49XFt7illJS43oOXs7Smmvabg6i+mYynktCOmLWArsLKv9+cxYePsaaAjYezndO/wsO3ebSnnsSIl42Um5KPlJujoJiRmKSkmpOboZqVmJ6dnJqWobGqf3+YmpuWin12eX+FjJKTl5eUlZWWl5mUlZCJg3p4gpCWmqCbi3t7gJakn5iWmJaXmpONkp6Wh4mSnJeKg4eRlJSSgoqjcbaopaeEatCsxJKLt3qAkLmNip+ri4fBsta3f7SeksyQmYJ/j361oeKLp7Kihue+pp6ersHZ2tp9iozt4OWCh398hoHX6Hl9gXx4eH+FiX96d4SIh315eH6Ffu/v7ufg3u995s7P3NDBs7OikZK23IKWsLOkmveYepyyjYKaiMCBi6h3oLO8rs2StX2FopgOent7enp7enp7e3p7e3rlex56e3t6e3x6ent7ent7ent7ent7ent7enp7e3p7e3qGe4N6hXuKegZ7e3t6enqGe4J6lXuHegF7jXqHewF8h3sQent7ent7enp7enp7e3p7ewICAQCAqsWmsOyC7+vnlej0oMCit7CnqbW/vLKqtcjIr6q8zbawwci4usS8vb66xMOvx82Tj6y1ubatpJmNi42SmJ2an5ubm5eUkZSYqa61ubi2qZWM96TLzbezvr67t7vCvrO8x7iqsMO7paq2vLqrpq25ubSpq7ztnIaIhIjgkIOgv72AsP2E3oPMi/jNnd/brcLotbOEs6jJs4KjuKaIyZiZwMXigof9i5mP84WPiYGXp5eFhZSdj4eI9oCDg4eD/oyOjYeFh5OSh4eDj42GiIWDgYiSloqEj5CB8IHx6veOgNnEzamVkr33mbe4l/Gu8rOb5qWY2LWO0Mfz39vLiNq0pMqAm7CVotJ22tPShs7ekKyUpZ+XmqOsq6GbpLW3npmpuKSfrbSnp7Krq6yosrGfs7mFgZqip6SclYuBfn+Gio6NkI2NjImGg4aLmp6jqaelmYeA4pS1t6Ogp6emo6asqJ6mr6KWm6ukkZahpqWWk5mjo5+WmafUjHd8eXnLgnSSrKiAoOF2ynO4fty6jsfHna3TpKF4ope0qH2esaCExJWVub7ZfYHzhZKI6ICJg3uPn5GAgI2ViYGD7Xp9foJ+8oWIh4F/gYyMgoF9iYeAgn99e4GMkIR+iYl85nvm3+qGec+7w6KPjbTpkK2tjt6d16GL0ZOIxKJ/vK/dy8O5esOklLWAkKOLl8JuysHDfL/OhZ6KmZSNkZmhn5aRmamtlI+dqpmVoqebm6WenaGdp6SUqKt9eY+XmZeRjIF4dnd+gIWDhoSEg4B9e36DkpSan56bjn940Ienp5WSmpmZl5qempCYoJWKj5yVhYmTl5WJhoyVlJCIjJfCgm5xcG+8eWmJnZqAlsxsvWiodMesgra5kp/FmJVvlouopHydrp6CwpORs7nTen7tgY6E5H2Gf3iLm419fYmRhn+A53d6e3577IGEg317fYmJgH56hoR9f3x6eH6IjYF7hYV44Xnh2eODdsu4vp6MirHlj6qqjNiWx5OAwoh9tpV2r6LMvbOrcbKYiKYMent7ent7ent6e3t6xnsBfKF7G3p7fHt7fHp7fHp7e3p7e3p8ent7ent7ent7eoV7gnqFe4Z6B3t7ent7e3qOewF6hXsBepp7B3p7enp6e3uIeoR7Fnp6ent7ent7ent7ent6ent6e3t6e3sCAgEAgL3Z9ZjVw+v1nuLpzbq+tbK4xszGtLC/y72utsjDrrzMurHEwbi+wcC+wcvBw9GxydyglqSytsHBzrvMs7i7or+itLOqxLLCtK6pq6afj5arqszLqr24ub2/wL+9w7e2xr2vvsu0q7e/r6Gruratpau2vbmrvZGDjqCR7baB36begLqGwrbM0f7lqM3j3pyYzYCzpajXmLKj+6WIrsbdhpf2/YqChJmmiI+clIaQlYaQpJ+Hh5mWhYeDgoiHi4aQjYaFgo2Uio6Ei4eHiYWCiJaXh4uek/+ChfmBmpL+g4Xq5ZKC5uHMp5qbz5a2spS9rqOW7rfkk6vEwO2Utq3s+4jkgKzC4Iq/s9Pgj8zVuamspKGms7ezop+tuKuepLSvnqm3qJ6xrqasrq2rrreur72ftMaRiZOgpa6vuqm3oaeqk6ySoqGasaKvo56anJaQgoicmLWzlqiko6ipq6moraKhr6eap7GelqGom4+XpaGZkpmip6SYqIB3f5GE1qdzypbHgKp3saS2v+TRmLbQyI6KunWhlJnOlKqc8aGFqL/UgJDt84R9fpGdgomVjoGKjoCKnZiBgpOPgIJ+fYGAhH+HhoB/fIaNhId+hYGChIB8go+RgYSWjPR9f+57kovzfX/f2op829fDoZSVxY2rqYuqmZOG16PPhJqxrNeEpJ7R43vKgKCz0YCxp8PQhr3Hq52gmpicpqunmJWiqp+SmKijlJ2qnZOlo5qgoKCeoquho7CWp7eHf4mUmaOirp2rl5ueiaCIl5ePpZeil5OQk4yGeX+RjaWjipmXlpudnZ2bnpWTn5iNmaGQiZOZjoSLl5SNh42VmZaLm3VudIV6xJxou4u3gJ5tpJinsNPBjajAuYWAq2yXi5HJkqea76CCpLrOfI3n7IB5eo2ZgIaRin6Hi32GmJR+f46LfX96eX19gXqCgnx8eYKHf4J6gX1/gX16f4yNfoGRh+56fOd3j4jsenzZ1IZ51dK/nZGSwIuopomkj4h8x5a/e4+lnsd6lpPB03K7C3p7ent7ent6e3t67HsUfHt7e3p8ent7enx6e3t6e3p7e3qHewV6ent7e4Z6BHt7enqzew56e3t6e3t7ent7enp7e4d6hHsTenp7e3p7ent7ent6e3t6e3p7ewICAQCAuuzT2Y2ntvDq0u+Gr5m5x8TDtbbK0L2wvcq9r8bKtbzNubrLur/Gv8PAxbzDsqPEodOVtvixh6WCu+LguYijjJ3/uODhtYegiaf5yMjctKDcrbSxrsC3zc7GvL29sb++rr3Hq7LEuKa0wLenrbq7tqSip7CguJKNmL3qxt/7s8iA8e/B6dnbk6e1idGMxK2ktKvcoKqSu4epx9GGnOfvjv+WsIL0j4mQqpuDjpuJlJSHlqaZhJGbjoeBioeAgoWLh4aBkIqJg4aIh4mBg5SWh4eZkIGHh/+Qno6Ml4r4lZKLnIjsioj/+9Wto6Dyqa+PrOCy4rWQi8vgx/K3mJTE0u6AqtXDxYGXpdzSwdZ6n4uotbOwpKW3vKygrLarnbO2pKq4p6e3qKyyrK+tsaiwoZSykr2Fo96eeJN0qMnIpHmRe4zipMfKoXePeZXes7PFo5LFm6Gem6qjt7ivpqeonaqpmqewmJ2topSgq6KUmaSmo5KRlZ2QpoOAia/StcfjoLOA29ew0cXEhZakfLx/sJ2VopvSm6WNt4Okv8iAld7lh/SQp3zqiIOKopR9h5ODjo6Cj56Sf4qUiIF8hIB6fH6EgYB8iYSDfoCBgYN8fo2QgoGSiXuBgfSKl4eFkIPujouFlILhg4Lz7sumnJrln6aJnMehzqOCfrjLst+kioaywNiAoMi4uHmPm87GtMZyloKeqaimmpuqrqGWoKmflKepmZ+rnJ2pnKCmoaSipJyklomliK98mM2Sbohrm7m3l2+EcoLPlri6lW2EcIrMpKS1mIi1kJSQjpuVqKihmZqaj5uajpmgi5GflYiSnJSIjZaXlYeFiI+EmXh2faLAp7XQlKWAysajwLa0e4uWca52pZKLmJPRm6KKtYGfusN8kdnfg+2LoXnlhH+GnZB7hI6Aiop+i5mOfIaRhX95gHx4eXuBfn15hYB/e31+fYB5e4mMf36Phnh9feuFk4SBjIDoi4eBkH7cgX/s6MeimZjjnaWHl7mTv5d4day+pdCZgX2mtcoDent6hHsDent6rHsDfHt8hHsDfHt8hnsDfHt8r3sNfHp7ent6e3t6e3p7eot7BXp6e3t7hXoKe3t6ent6e3t7erF7AXqGewF6hXsDent7h3oHe3t7enp7eoR7A3p7eoR7Anp7AgIBAIC8+cHuyeTS5PLLhseXsqSin52nq6ynvMvDtcfLtb7Our/NuMfDvMm4pMucqaG5uaWXqLmrpvWwgaiFpY2gjKCKnYigh6aBr/i189DLz9jk3cCsyM++n7iwvqCwv7O5ybS9vqa2w6mywa+itra6mc6Y25XUjfb3u+bY1YiynJumzoCF2uvA/cvykZDM6s/vxO66k6iQqI20z+KRhOSNjZek9YaciJyk9IuWhqKh/4mXipWPhpudhouYj4X3iYL9gImF//+Hh4SAhYqJgoqSkYKOloKCioGOmoyVm4mLh4aelPSF/4ShieiGhYX4vKyK2aaqgaeRm5rFieXS6cH0vvK3+oCt4rLYudDBzt25erOJoJOSkI6YnJ6Yq7ixpLW5pKu6qK65prSwqballLiOl5Gnp5WIl6Wak9mecpZ3lH+OfI96jHiOd5VynNuh2Lq0vcXRyrCdtbuskaafqY+dqp+lsqCpqZOirpeeq5uQoaKlibiJx4jBguDiqM/DwHugjIuVuYB3wtWt5bjbfHe21bjYsditkKGLpImtx9mKfdmGh5Cc64CVg5Wc64WPgJqa9YOQhI6JgJSWgYaRiYDtgnzzeoN/9vaBgX56foODfISLin2Ij3x8g3uIk4WOlIOGgoCWjul/836Ygt5/f3/stKWFzpyieZKDj420f9HC07LdsN2p4oCk1qfKrsW3w9Cuc6iAlomKhoWOkZSOoKylmKqsmZ+tnaGtmqijnqmai6uFjYibnIx/jZqOiciSaYxtiXSFcoRwgW6Ebotoj8mVxqumq7bCu6OSqK2ehpmTm4SPm5GXoZScmoeVoIuSnY2Dk5SXfql+t36yeM/Sm760snGUgoCJqoButMag1anKZlWmxKrIo8mnkJ6Jo4apwdOGetSDhI2X5n2Rf5GY5YKLfZeW8H+LgYqGfZCSfoOOh37of3nueH988fB+fnt3en+AeoGIh3uEi3l5gHeEkIKKkICCf32SiuN87nuUf9h7fHzmsKGDy5mfdol7h4aqecW3x6jRps+g1gl6e3p7ent6e3quew98e3x7fHt8e3x7fHt8e3yvewN6e3qKexF6e3p7enx8e3p7ent6ent7e4V6A3t7eoR7AXqFewF6hXsBeo17CXp7e3p7e3t6ep17Cnp7ent7e3p7e3uFegR7e3t6hnsIent6e3p7ensCAgEAgL3vwuPzxZStqpi3h76Iv4zBlbmeqqOnl62hwbPQvL/QucnApcCjnrqvmLS6pZy2vrmkpranqfXF7NHe6cD9q4WghaKDr/rG3uDj187Q0sq60fLku7fTzKatyqmptLOpt8invb6pw7y1vs6uxKzBptOm0aTXmeON1+H93uPS1OnagPvCmpW69sqUiuDK7Lyv85uct4aqzOON+PWbjpOKgqGSiJX/mZWMnIaMlYelmfuNjouRhJGXhYubifOAhv33iIWA+4aFgP+IiIOHkYyCko37hYOHlY6TmoGHgYOkioiH9aCTgYTrl5bq+oGK+sKxiICklL7trYy6lrygo7+K1OHlgK/Zs8/fs4eemoqmeqt8rH+uh6iPm5OXip6TrqS+q6y8p7Wula6Uj6ediaKolY2kqqaUlqSWmNqw0rrG0KvhmXaPdpF0nN2wxMfLv7m8wLiqwNzQqqa/uZadt5mZo6CXo7KVqqmXr6ikrLyftJ+ymMGYvpXFjM+AwMzjy83Av9TEgOOvi4an37aDeM2216qc55eWs4KkxNmG7uuUiIyEfZqMg47zko6GlYCGj4Kdk/KHiIWLfouQgISThOl7gPLsgYB78oB/evSCgn2BioZ8i4fxgH2Bj4iMk3uBe32chIKB6pmNe37gkI/f73uE7rmq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m6vVmZ9yiaF3j5Z8k4uJlIaNio6LnJ6lmqSZpJWqmqaInpmTpo6doI6fn5SYn56clZ2ezWzPpWptqGt2r252rM5ws8Jtsb7GvKq2s66YqqqVpqqOraKcsaJ2u8a+0LHMs7mVnqGWmZWXkKaUpZiHrJCUs4WlttSDyteEuYBzh6qFdbCFdKKButGJyoKj2nl46pjmfIaO5oSKgXiDinh9fYt3hXqJfo/tgHiIe4CEeH6AhXqGfXuJfN945O176OZ46OZ77+l56np75Ht6fumCfnqEe3vsiON+5ZOBh+uNh4bmkIx+642E5IeC2+aGyLaBfIOXiHKpnnGzoNOtpwd6e3t6e3t6sXsRfHt7fHx7fHx7fHx7e3x7e3yUewF8nHsEent7eox7A3p6e4R6CXt7ent6e3t7epB7AXqQexZ6e3p6e3p6e3p6e3p6e3p7e3p7e3t6hnsfent6e3p7e3t6e3t7ent7e3p7e3p7e3p6e3p6ent7eod7A3p7ewICAQCA+Ly5mf3AuI6luKiNrK+SpbSgq6Wgoqawsby3tcG2xbfEu8C9xsO1sLe9q8C5r8G9sri4wbu4zdi8vcbKubjBwLnAxcPE0s6syYmG6eD5783Dw8vDs8Oxvb+w19Hu3vDZ8Nrv1/LZ4s+3vbe6tLS6tq3Dsqi81JS56perrsKPpruAmYu1uIegtaCJo7GK2oix8fzvhZfmlY6Egp7viIuV7YaOi/qHkof/gZGFiYeE/I6Bg4v+goaC/Yf0h4Png/j2g/b6gvKBgviCgvmH9oCEgfmFg4OG/fqIi4mIi4qTiIqFnIONjp7+mJSP+aL8gZOA7pHewIWD9qK5m4m9wIufwK2A5a2ojOivqYKXppmAnJ+ElaKQmpaRk5egoaqlpLCmtKazq6+rs7GloaasnK6on7Csoaior6mmusKsrLS3qaevrqivsrCzwL2cuH161s7k2ruysrqyo7Kira+gxb/cy9nG28jaxd7H0L6nrKWooqOopZ6wopiqv4ao1oqcn7CDmKqAi3+lqHuTpZJ+lKiG04Sr5/PmgJHdj4h/fZfngYWO44CIhfCBi4H0fIuAg4F/8od7fYX1fYB98oHrgX7dfe7rfezufel7fe58fO2B7Hp+fO+AfX1/8e+DhoKChYSMgoN/lX2GiJfzkY6J7prxe4x644vUuIF+74+pjn6sr4CRr56A2KOeg9ylnnqOnY94kpV7i5iHkIyIiY2WmKCamaWcqJunoaSgqKaal5yikqOdlqWgmJ6epJ6brbWgoKernpyjo52jpaWns6+RrHJwx7/Syq2lp66lmKaXoqOVubLMvsu5zLvKt8+5wa+boZqdl5idm5SlmI+etH6dyoKTlKR7jqCAgXaanXOJmYh1jKaF0oKo4u7hfY3Yi4V7eZPifoGK3XyFgep9h37ueYh9gH587IN4eoHwen167H3mfnvZeujleufoeuR4euh5eed953h8eel9enp86+iAg39/goGIfoB9kXqDhJTuj4uG6ZbseIl33ofPtIB974eghnajpXiHpZQFent7e3rEe4J8v3sCenuGegN7e3qFew16e3t7ent7e3p7e3t6hnsBeoR7Hnp7e3t6e3p7e3p7enp7enp7ent7ent7ent6e3t7eoR7gnqPexJ6e3t7ent6e3t7ent6enp7enqJewICAQCA66Shl4CEvr27vb7DrqS0v6WmpqClq7a9ur+zxbPCtL66wtHA0MPJyam9sLjAxMDDytrl0s7n79LJt7m0sLKztbu9vsHCxcTCkf+Lk46KkZqNhuvm7c20zsHm9Orq7eDz2+/Z7Nfq1uzc+s6ttrXBvLCuvrqhnbCyqqejnLSDk62ApP+En6qVgJmqlf/0gK7w9O+Kiu6a/YCXg4aNke+VgoaHjIn+joKS+YaDi+6Dg/aH+f6Gg/6G+4eB/Ibt8/XugvX7gPaCgfmF94H/+4iAgoiGhYb+gIn/iviB/ZGBgI6LifGfgoKOk4GLoP+bjfiKiOyP3bWMgdiykKGY+4uho4aA1pWSiXR4rayrrK2yn5akrZWWlpGWm6Wrqa2is6Kxo62or72uvrG4uJqsoaivsq+wtsXOvbnP1722pqmjn6OkpKusra6vs7GwhOh/hoF+hI2Be9nT27ulu7HS4NfV2czeyNrG2MXXxtnK5LydpqWxq5+grqmRjp6impqUjqR5hp6Al+t5kZuJdYyaifvwfqjn6+WEheWT8nqRfYGHiuaPfYCBhoPziH2L7oB9heV9feuB7/OAfvKA8IF98oHj6evkfevve+x9e+1/7Xz074J7fIKAf4DzeoT0hOx88Yt7eoeFg+eXfX2IjXyFmfSUiO6Eg+OK1K6HfM2dgpKI432Rk3mAyYuJf21woqOhoqOmlY2ao4yOjYiNkp2hnqOYqZqlmaKepLGjsqasrJGil56kpqWkqLe/sa3BybGpnJ6XlZeamp+goaOjqKaletd0fHh0eoN4csrEy6+ar6fF0svIy7/PvMy5yLjIucm81K6Tm5qln5WXo56Hg5OWkJGIhZhxfZOAjNtxh5CBboOQg/vufaXh59+BguGP7XiNen6Eht+Kenx9gn/thHqH6H15geB5euV86e19e+x96356637e4+beeubpeOZ5eOh86Hnw6n94eYB9fH7td4Huged57Id4d4SCgOKTenqEinmCle+RhemBgN+H0KqGfMyTeYd/03SHinEBesd7Anx7iHyvewF6h3uIegV7e3p7eoZ7AXqGexh6e3t7ent7e3p7e3p7enp7e3p7ent7enuEeg17enp7ent7ent6e3p6h3sIent7ent6e3qGewF6iHsSent7ent7ent6enp7enp7e3t6hHsCAgEAgPydk52ajLK/wLy3ur26vcG/xc22uKqtrLStvrHEtMu/yce/0MvG0MfIo93L1tnd2dbT2Obe0tTh4r+3trW3uLm7u7u6vMHRy4WRkIeJj52SioyOiIiBlvnp7vH03/Lt5fne693m2+PY6Nnbvrq+q7y6sq2tq6qrpqSlrpmOnZitgKCLgZGfpqaH9s6D+6be8eyOhP6X+5Ca+Zn48oj/hYKQ9ICS6oD9hf/9iPiI8veD9Ib2/oL9+4H1hPOFgOj47P/z9f7vgfj+gvGC84X2gISDgYiAiIf5jfqFhIKJ+4qNiIiIkoKQlvufi4GYiIqV/IuL8ozboaX6rZiI+4iYnZaDgOaOho2LgKKusKynqq2qrLCutrymqpyenKSdraGypLmttbauvre1v7e3l8m3wcPIxcO/ws/KvsDMzq2mpaWoqKmpqqqqq6+/u3mDgnp8gY+HfoCCfn52iufY3N7gzd3Z0uTM2MrSydDG1sjKrqyvnKyqopydmpqalZSVnoyCkIuegJOAdoSSmJl838l/9qHW6OSIf/WR84uV8ZPv6YP2f32K63uN4Xrzf/Tygu6C5+t96oHs833y8Hzrful/e97t4vTp7PPlfO7zfed86X7sen58e4F7goHuhu9/fnyD8YWGgYKCjHyKj/GYhnuSgoSQ84WG6YbSm6D1m4h85XyKj4h4PtiFfYSBd5ikpaKdoaOgoaWkqa+coJOUk5uUo5momq2iqqujsq2rs62skLurs7e7uLaztsK9s7S/wqCZmZqdhZ6An6Cksa9weXlxc3eFfnV3eXV0bn/ay9HR08HQzMXXwcq9xLzBuce6u6Kgo5KgnZaRkpCPj4uKi5KEeYaClIp3bn2Hjo9108l99p7R496FfPGO8IiS7JDr5IDwfHqH5XiJ3Xfte+7rf+d+4OR65H7n7Hrt6nnme+V8eNnn3e7k5u0933jq7nrheuV753d7enh/eH9+6YPqfHt5f+yCg39/fol6h4zrlYN5j4CCje6Dg+WDzpif9Jd/c9Z0gYV/cAF6x3uPfLF7BHp6e3mEeix7e3p7ent7ent6ent6e3t7ent7ent6e3p6e3p7enp7ent6ent6ent6e3p7e4h6CXt6ent6e3p7eoh7A3p7eoR7AXqJewF6h3sFent7enuFegN7e3qFewICAQCAipeWl52RtsXFxL+8wMC7wsbGw8OntaS2r7bBu7XFwNXJxtPIzM+6t7i0vtbb3dra3djV2eTx9fDrwLOysrG0t7azsrG1t7iSg4iNk5eamJGNjY6LhYGB08KA2e735/D14vXl6Ofb5tTR0r3Dx8zEvru+t6ypp6qmpaiclpSwmZuAnZeGh4+Vm5+YgKCh0ILmkYCDkPuYjoaW6YGL8o6M+Y6A+I36goT2iezxguqD+fCC6Yb08//vgeuC+PuB3fPp+u3u9ez+7P/19/jy+/SC+vmF+IX9/Y2BiIP0jfzyjPv4j4SGjYWDi4mHlYuMj4CVgYqD/4bIhcvOs5GUlpWZk4iAfYqIiY6EqLS2tq+tsLCtsra0srSapZanoaavq6WzrsK3tcG3usCtqaunsMPHyMXGyMPBxs/c4drXrqGgoaKlp6ajoaGkpaiGeHyAhomMioSAgYJ+eXZ3xLR3ytzl1t7j0OPT1dTK08PAwa2yub20r6utpZuZl5mVlZiOiYehjI2AkIp7e4SJjpGQf5+cyX3ejHx/i/OTiYKQ4X2G6omH8Il77ofxfX/sg+PnfeB97uZ84IDq6fPme+J87vB71ejf7+Tl6+Hz4vTr7e/n8Ol87+1/7X/y84d7g37oh/Hoh/HuiX+Ah4B+hYOBj4aHiXqQfIR/9oDAgcTInYSGiYeLhXuAdYF/gIR8n6usrKajp6WiqKypp6mSnY6emZ2mopyopbatrbetsLalo6OfqLe6vLm7vLe2usLP1c3Lo5eWl5ianJyYlpiam51+cXV4fYCDgXt3eHl1cW5vtalwvtDYytLXxNTIyMa8xbeys6GlrLCoo5+gmZCPjY+Lio2Ff36Wg4SAh4FzdHuAhomNfp+ZxnvaiXp8iPCRh4CN3nqC5YWE64Z46IPsen3mgN3hetp66OB523zj4u3heN156et40OHa6d7f5dvs3e3m6Ori6uN56ud8533t7YV4f3vjg+vihOzqh3x+hX58g4B/jYSFh3iNeYJ98X67f8TJk3t+gH6CfHPHe5B8A3t7fK57B3p7enp6e3qEewF6hHsaent7ent7ent7ent6e3t6e3p6e3p7enp7enuEegZ7ent6enuRegh7enp7ent6eoR7B3p7enp7enqSewJ6e4V6h3sCAgEAgJGWkpScrK+1vr23tbvAvsDHwreur62sprG5rrPBwcnBzMjAw8a6wbnCvb632OXp5+Po6ezs7e32+viusrrGzNXY08vAu7nJpJCRk5WXlpeUkZCMh+XU0czOwsu9zd7y6/jn5vLj2cPd0cfGxcLJwsC9urerrK6joaSqoZCstJaXgKCcl5COkJOFyemHxIPfkvKBi+uN+4iC+oH6iPaCifL+hPP/g/P6/fH88e2C4/j/6oHm+fXw8u/68IDwgeXu4/Hq6e/o9un86v3x+PT98vqE7oHygof7hYD+iIaCiYv+gIn2hZGBj476lIGDkIOT+5DvhePn5qHy26iYlJGRkI+NgIWKhoiPnqKnsLCqp6uxrrC3sqihoZ+emaSqoKWxsbeyu7mxtbittKy0r7Cqx9HT0s7T09jY2Nnh5eSfoqu2u8XGwruxq6m7l4SFh4iLi4qIhoOBfNXEwry/s7quvM3h2ufX1uDSyrTLwLa3tLG6tLGuqaacnJ6UkZSbk4SdpYmKgJKQi4SDhId6xuOFv3/YjOp9huSI8oN88n3xg+19her0f+r1furx8ujx5+R83O3043vc7uvl6OXx53vnfNzj2ebg3+Xe7N7x4fPn7ury5+5+5HvmfIDwf3ryg4B8g4Xye4PrgIt7iYjwjn1+in+N8ovngdvf3pzv1JiKh4WEg4KBgH2Cfn6FlJqfqKehn6KopKetqZ+ZmZeXkZyimZ2pqK2osK6orbCmrKWtqKiivcTIxsHHx8vLy83V2daWmaGtsbu7uLCmoJ+zkH1+f4GCgoJ/fXx5c8W3ta+wp66hr8DUztvMydPFvKe8sqmqp6StqKainJqRkZOKhoqRi3uTmoCCgImHgn17fH9zyOKDu3zViud7hOCF7YB67HvrgOl7gubvfOXwe+Xs7OPq4t941+fu3XjX6OXf4t/s4Xjhedfd1d/b2uDY5tjs3O3i6OTs4uh633jgeH3qfHfsgH15gILteIHnfoh4hoXri3p8iHyL7onkf9nc2pnt1JSCf3x7e3l5x3uNfLR7hHoYe3p7ent7ent6e3t6e3p7ent7enp7enp7h3oBe4R6AXuIegN7enuTegp7ent6e3t6e3t6hXsEent7eoV7AXqGewR6e3p7hHoDeXp6h3sCAgEAgJuYm5aktLizsbm9trLAwcLKuLGvsLK1sq2zvL61srTFvb+7zL/AwsXKy8XJvdXw8Ofl5/D/goaE//G9tsfEvb68vMfFy8qHkY2PkpCSk5WSkpSY7OPa1c/Pw8fCv8/G1/eB3tzBzcrGxb3CwsXGwsXAu7OvrKusqKOgn56rtJaegKGfoJ+foJOigJOv7OSF8IWC64nvhu3/5YCE6oT/8f/3+uz1ge38gO/36+ji9u3m9uT27fXs+uqA7/rx8+PW5+3p6Ozu8O/z7v3zgPD6+IH4g/SC+4CGgYH7hvn/j4iDkYn3hIOEh4KP94eP+obrheaH54Lr79CMn6/skJOTlJSVgI6Mj4qYqKunpa2uqKazsra6qqShoqWopqGnrrCnpaa2sLGuvrGztbi+vri9ssfc3dTT1Nrqd3p47OCwq7y4sLKwsLu5vb1/h4ODhoWHiIqFhoiK29PJxr+/tbiysL62yOV30Myzvrm3tK6xsrS1srexq6OfnJydmpSQkZGepYqSgJSTk5KSkoiZf5Ks5t+B6oF/5IToguX23nyA4oD36Pbv8OXsfeXye+bu4+Da7eXe7Nvs5Ovj7+F65u/n6drN3eHe3uLk5eTo4/Ppeubu7Xvtfup88HqAe3vwge71iYJ9i4Ptf31/gn2J7oKJ8YLjgN6C4H7k6MqInKrThYeHh4iIgIaFiIKPn6KfnaOln52qqa2woJ2am52hnpmgpqifnp+tp6mntqqsrrC2trG3q77P0cjIyM7bcXNx39Sno7OvqKinqLGvtLN6f317gH6AgIN/fn+BzMW7uLKyqa2npbGqvNhxwbylr6ypp6Klpaiqp6uln5iUkpKTkIuIiYiUmoKIgIqKiomJioCVf5Op49t/5n994YLkf+Dw2Xp93n3y5PLr7ODneuHteODp3tvW5+DZ5tbm3+Td6Nt34eri4tXI2NrZ2N3f4N7i3ezid+Dp53foe+V46nZ8eHfqfenwhoB7iIDpfXt8gHuH6oGH7YDgftuA3X3g5ciHnqvFfX9+f4CAtXuDfI57jXyOewF8pXsCenuEeg97ent7ent6e3p6ent7enuHegR7enp7kHoBe5J6Cnt6enp7ent6e3qEewR6e3p6hXsBeoZ7C3p7e3p7ent6e3p7h3qGewICAQCArrCtq52psKakoqe5vLzLvrK5sbSytbi5uri0s7PF6obxzce9xNHKzsXExMbEw9nx8Ojt7Ono6NnMysrHvrq6u7m6u8C7wePp8fH9iZGKj4yWlvvr2NnT09rNyc/Jxc/e/ILowMvIxL3IysnLx8S5s7zBs7ParaekpqWnw7i6r6WAsqioq7Otl73gkMrr5v32/vKD5YDpgOeI9Pr5/oPn/f7u9PL07ejn+d7r7unk6/Lq8/D56PPu+vL47fPj38vS2dvc4+7r8uPy4vbs8+j874OCgfqBgPf4gIP2+f2C+fyOg/2A9ob3i42C/OiB64XshuWG5Ynl8q7mt5qfpqirr62AoqWioJOdpJqZmJysr6+9sqWspKamqausrayop6e4233hv7myuMS8wLm4ubu3t8ve3dXc3NnZ2M3BwMC8tbGxsrGxsreyt9XZ4uDrgIeBhIKLiurdysvGxcvAvMC6uMDO6njWsru3tK23ubi6tbOqpbCypKPJnpiWmZeZsamroZeApJubnqagjbvdjsbn4vjw9uyA4H3jfOCD7PTx93/g9fXn7Ors5eHg8Nbj5+Hd4+rh6ubv3+jk7+ju4+na1cPJz9LS2ePg59nn2Ozi6N7x5X58e+98euvteX7r7vJ97vKJfvN67YHuhoh98+B944Djgd6B34Xg7KrktoqVm52fpKGAm56bmIuWm5SSkZSjpqezqZ2knZ+foaSlpqShoaCx0XjWuLOrsr20ubKxsrSxscTT0svQ0c/OzsS4uLi2rqqrq6qqq7CqsMrM1NPcen96fXuEgdvQvr+5ub+0sbSurLXC23HHpq2rp6CqrKyvqqiem6WnmZi8lI6Mjo2PpZ6hmI+AmpKSlZyXhb7fjcPl4PXs8+h+3XvfetyA6vDu8nzd8fDj5+Xo4d3c6tLe493Y3uXc5OHo2eLe6uLq3uPV0L3Eys3M093b4dTg0+Xc4tnr33t5eOl5d+bodnvl6e176+6GfO946X7rhIZ88Nx84H/hf9t/24Pe6ajkuIWOlJaWnZqfewF8q3uHfI97AXyle4p6B3t6e3p7enuEegF7snore3t7ent7enp7e3p6ent6ent7ent6e3p7e3t6ent6e3p7ent6e3p6enl6eoZ7AgIBAIC3sqimoKGjrK2qr6ihnK230Lq6s7S1uLu7vLzI6vj+goqI+NXHycnHyc3P0NPd09zEx8nI0NHJy9nczcK/wcfLz8/Oy8TQ4e/v8ejl+PLv++bt7O/u397W0NjX3t3qhIKC/vf/9cXAxcfFytDGvsbz3OK9wLyuq8Gru62zt77LqoCtqqetrKuJ75qv8+CD4YPvguqB5fvuhPGD9Ijt8O/x/+Lq7uXw2OTn7+nj6+3x5Ono6dzh3+Ts4+Ta4dnl0t3g5ebk5ubj2+Th7eby5dzp6PX19er6/Pv28vn7+e7t/IT/gvmB+vD03/bmgeOB7ofngeOF5v/q35GWmJumoqesuYCspp2blZaXoKGfopyWkaGswa6uqKmqrLCvsLC62ufseoF/6sm8vb68vsHDxcjQx9C7vr++x8jCw8/Sxbu4usDEx8fHw73H1eHi4trY5+Pg7Nrh4ODg0tDIwsrIz87bfHl57ebt47eytbi1ub62r7XhzdGvsK2gnbKfrKCmqK67nUCfnZqfnp6A8Jqt7tyB3YHqf+Z+4PXogOuA7oTn6+nr99vk6N/o0t3g6OLb4+Xo2uDg4NPY1tri2trR2NHcydTWhNs83NnS2tfj3Ofa0t7e6erp4fDx8Ovn7vHu5eXyf/Z+8Hzx6OzY7t993H3ngt9+3IHg+eTajpiQkZyYnKGsgKSgl5SPj5CZmZiclY+LmaO4pqaho6OnqaiqqrTR3eJ0e3rgwbW3uLa4ur2+wci/ybS3uLi/wLu9yMq/trK0ub3AwMC9t8DM1tXXz8zb2NTfz9bU09PFxLy3vr3Dw891cXHe193TqqWpq6mtsaqkqdPAwaOkopWTppWhlpueo6+TQJaVkZaVlXr0nKzs24DbgOh95H3d8uR+6H7qguTo5ufy2ODj2+TP2Nvi3tfe3+LV2draztPQ1dvV1MzSzdbDztCE1TzW1MzV0d3W4dXO2djj5OPb6+zq5+Lp6+rg4e598nzse+3l6NXq23vZe+SA3XzagN744teNmo+KlpKVmqSfe4N8vHuDfKZ7hXoPe3p7ent6e3p6ent6e3p7xHoFe3p7enuGegl7ent6e3p7enuHeoZ7AgIBAIC7rp6ip7O8qp2dqaimp6bO0d7e487Tv73Bw9H8gYKDh4eIjpOE0MrSy93b3+Dc8N/W1Mze2NXi5+Hi4e7b39vV0NDR1dzv/4H17YCG8PPu+Pfp7ODh6ePj29XQ54qPiomHg4GBgY3TwL/Qw9LVzMnKvePCxK25vcW+vqyvlbrItoCno6iyvLbQ6Iza8o34je+J+IHp9fnw7u/6/PDt5fPo8dzk5+fs5d/X497n4unh4+Hk29bc2ebd493h5efq1uHS3trZ6uDo2eDd4PLt/Ojg2+Xp3efj8+r39fXw8+3v9u/x9en54e7j7+Ht4/nigfKN84Hf8vnn97PilfuwpZ+fsoCwo5SXnaeun5KSnZybm5vCxdDQ1cHGs7G2uMXteHp7f39/hol8xcHHwdDP0dDO4NTMzcXW0M7Z3tra1+DU19XQysrKztXk8nrp4nl/4+bj7O3e4NXU29XVz8nE2IGGgoB9eXh5eILEtLG/tMHFvru9sNO0tKCqrrawr56iiqy3p4CalpujranL6Y3Y7ov1jO2H9H/l8fTr6ur09uro4O3i69fe4eHk39fQ29ff2uHZ2tjb0s3Sz9zU2dTY3N3gzdjJ1NDQ39Xez9bT1ubi8d3U0dre09va6eDs6+vm6uPn7Ofp7eLx2ufc59vn3fLdfeqH6n7b7fTi8rDjl+amm5aVp4CpnY2Rl6Cnl4yLlZSUk5S6vcfHy7i8rauwsb7kdHV2eXp7gIR3v7vBvMnHx8fF1szGxcDPysjT19PU0dXO0M/KxcXEyc7c53Xg2XR42NvY4eTV1srKz8fIw7+6zHp/enh2cnBxcXm3qaazqLW7tLC0psSnqJWfpKqkpJSXg6CtnYCSjpOaoqDL7I3W7Yr0i+yG8n7k7/Lo6Ofx8+fm3urf59Tb3N3g29PM1tLa1NvU1NLVzMjMytXO1M7T1tjbyNLDzsnK2M/YydDN0eDd6tfOy9TYztXV49vn5+fi5uDj6ePl6eDu1+PY5Njk2u/ae+aF53zY6/Df8a/lm9yflZCPoJx7iXyiewV8e3t8fJB7inyge4V6B3t6e3p7envbegV7ent6e4Z6A3l6eoV7AgIBAIC/qJmnwqmgoK6zoJ2np8LW4NPi2uPn7OfL3f6ChISGhYiLiomHkOfi4+Pl2+Ld4er14OTa4ezk6PP3+eng5Ovw7uzt8e78+/X7/PD3gPn++vjz/fPo19/d4/WAk5KPj5GRiYOD///8683f6NfP0MrCxuDCv77CurOoucjBjrDBxICmorXDsaPSvLb894OJ+o3uhf/9gPGC6fXh8eP27PXs7uHj5eTm5eHb0NTQ3tfX0d/b2d/a4dba19zq3+vn4NPQ19XP4dTi4N3o29zn5vLc3urs7t/n5erk6ubn5uvo6+zm29jb1+Pj7+jx5ebs6fzvhuDt9+SH49iBhZGruKaXpYCznpCctZ6WlqOolpScnLfK0sfUz9TZ3dfA0/F7fH1+foCEgoKAid3W19bWzdPR1t/p2N3U2+Pd4+zu8uLb3+Tp5+bl6un08uzx8ubqee3z8e3n7+fcztXS1+h5i4mGh4iHgXx78O/u28DR2cnBwb20t8+0sLCzrKacq7eyhqOytYCbl6i0pJjSvbb59IKI94zthP37fu+B5vDd7eDx6PDo6N3f4N7g39vVys7K1s/PydbT0NbS2M3SztPg1eHc1srGzcvG1svY1tTe0tLd3OfR09/h5Nbd2+Db4N7f3uLg4+Xe1dLV0d3d6eLr4OHn4/fpg9zo89+F39WBiISjrp2PnICrl4qWrZeQkJyikI2VlK/Cyb7KxsnO0sy4zOh2eHh6eXx/fX18hNfQ0M3Lw8jHzdff0tjP1t7Y3eTn69vW2t7j4eDe4uLu7eTp6t7idePo6OPd4tzSxMjHy9tzhYN/gIGAeXV04+DezbXFzb23uLOrrMGopKSooZyToqyngJqoqoCTkKCqnJHVv7b484KH9Yzsg/v6fu+A5O/b6t7v5u7l5dvd3drc29fRxsrG0crJxdHNzNHN0sjNyM7Zz9rW0MTAx8XB0MXS0M7YzczW1uHKzdjc3tHY1tvW3Nrb2t7b3+Ha0c/Sztra5uDo3d7k4PPmgdrm8d2E3tOBjIGdp5aKlpt7i3ymewF8jXuKfKJ7hXoLe3t6e3p7enp7envaegF7hHoBe4V6hXsCAgEAgL2jlLOxqKK2nqK1rJ+93OHP3tvm4ub17MK3v+GAg4aKiYmOivTg4Oj07/H17/by/PiC7P+Em9e/g6S+0+Tv/YaLi4qIg/ziyqj8o4+Eh4WHh4j79oj88/r8gouRjY+QkI2MiIOF8eDI0Ovi5tfS1cnIx8O+ucSluL2xqcSnzK7FgKKmw6mhmfah3veN9YeD9Yrt/YX5gfD97/jx8u7r6enl4+Hd3tnd1tXW1NDU1M3g0tLQ1dvJzdPT4tbY1dDSxcrMzc7S09Hg3eHo4ebe4O3i3eLk7eLo5tzl3d7g4d/cy9HN09TW0dvU5d3p4O3j3vXb8vLnguf08Kl7ipGiu5mWgLGZi6ilnZiqlJiqoZay0NbF0s/Y1Njm3bivt9d5fH+Dg4KGg+jW1t7q4uTn4unn8e595viAldG4fp23y9vl84CFhYSCfvHYwaHxnIp+gYCCgoLw64Hv5u7weoKHhYiIiIWEgHt949O9xN3T18rEx7u5uLWvq7Waq7ClnrecvqK3gJictZ6YkPak3PSM9IaD9Yrt/IX5gfD87fTt7uvo5ubi4N7Z2tTY0dDQzsrNzcbXy8vJztLCxcrL2s3PzcfJvcLExcbJysjX1Nfd19zU1+LY09ja49ne3dTc1tfY2tjVxsvIzs/SzNbQ4dnk2+ne2vLX7u3igOPw7ah/hImar5GOgKmThqGelZGijpGim5CsyM69yMXOy8/c07KrstB1eXt/fn6Cf+LR0djj2tnd19/d5+V44fF8ks61fJqzxtbg7X2BgoF/e+rRu5zql4d5fHt+fXvl4Hrj2uHic3l/foKCgn5+enR21sWwuNLJzMC7vbKwrqyloaqSoaadl62Us5uugJGWrJiRi/im2/KL9IaD9Irt/IT6gfD77fHr6+rn5eXg39zX2NLVz83Ny8fJyMHSxsbEycy9wMXG1MjIx8LEt7y/v8DExcTS0NLX0dfP0dvRztPV3NTa2dDY0dPU19XRwsnFy8zPytTO39fi2efd2O/W7Orhf+Hu66iDhIOVqIuInHuIfI17B3x7e3x8fX6Hf4aAhH8Dfn59hnwDe3t8hHuMfKF7hHoLe3p7e3p7enp7envfegF7hnqFewICAQA4rZKTqcLRz8W8zb+81tjd1eHf8vLz9OC1srG2urbRgIiIgObe3+Hj7fCB//r++YG5qZLSjKnCyMmFygrLysvMzc3Ozc3OhM+AzLiW5KGxuI+DhISHhoeEhYX77P6NkYmNhdLU08XBwOPhz9fOzcvQxsi/scq1udC9tsW+wta5286g2MLRo/H6hI33goTyhH3vhu75gfb88fTn5+Dh3d/b2NbQ1dHQ19Hb1M3TzsnD0tbJ0tnV283L09XW3MrP2dbS3NnT1tPR3OI14Onb1+Dh093e2Nnd3+Pe1drVw8TJzMvOzM3KzsnU1tTn0ufi4PPo7vjk9YLlze56+o6ml4o4oYqKnrfFxLqxwLSyy87SytXT5eXm5tOsqqqusq/JeoKCe9zT1dfZ4+Z79O/y73u1pI3Lh6O6wMCEwQXCwsLDw4XEgMXFxcbFwrCP2pmpsIl+fn2CgIF9fX3s4PKFiYKFfsjIx7m3ttXUw8nCv77Bt7qzpryrrcGyq7mzuMqv0MKYy73TpPD4g4z3gYTzhX/yh/D6gff77vHk5d/g297Z1dPN0c3M0szVzsjNyMK9ys7Cy9HN0sXDy83O08LG0M3J09DLOs3LyNPZ197Sz9bXy9TW0NHV2NrXz9TPvr/ExsfJyMrHy8bS1NLkz+Tf3e7k6vPg8YDhyvZ+54acjYISmYSElrC+u7Kpt62pwcjLw83KhNwgyqampquuq8V3fn941s7Q0dPd4Xjt5unnd7Gii8eFn7aEvIW9hL6Fv4C+v768qorSlKOqgnl4d3t5enV2dd3S5YCDfX52vby5r62sy8q6wLq1tbatsKmdsqOluKqksauwwqjIupLDvNel7/eDjPeChPWFgPSI8/yC+fvt7+Pk39/a3tnU0svOysnPydHLxcjEvrnGyb7Hy8fMwL7Gx8nNvMHKx8PNysXIxjjCzdPR2c3J0NLGz9HMzNHT1tPK0cu7vMHDxMbGyMXJxdDT0OLO4t7b7OLo8d7uf9/I+oHdgJSHfZ57hHyHewF8hHsFfHx+f3+bgAN/f36LfIN7hXyhe4V6DXt7ent7ent7ent6envfegZ7enp5enqEewICAQA1pIOTkLS3t7W2ubvAnZKXurHUkOzx0LGurbi3uLa4wvHz6ejp6vH09Pj+hufk05a/x8jIycqEzAjLzMzNzs/Q0IfRBNDR0dCEz4DQxJS2mZqTkZCNiISDgfj1k4Lm3tfQzsS5xMHq7N3Uw72tqJ7R0dPc0cjFw7u1q9Kb16mxt4d0s+z98PiI+n2BfX1/7/h+63/z8vPo7OTo1tfV0NPL0M3R0czPyMnTx8vY0MjZ19TOzMzZ2c/V0sPCzs3K0NjV1d/Y0NDc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x9DPyMStlo3Mm47DhouIL5+ekp+djJWhnaXAsqemo6OirsXDxMbFx83ZzMTM2HyBeoB9uPa4vsDDxsnKy8vMhc0KzMzNzc3MzM3MzIXNAs7PhM6Az83Mzs/Pz9DQz9DR0tPS0tHQo5y2eHHb0cjJxb/feHjj2s7JxI5/d+/86/GJk4+Vopecm8Wy2Ku6wbWB+9P0h4yRkY6F/N3Gv7rR8oaLioSGg4P08eXn7u7v5uDM0MbLwci/wsK1vLq0uLm4vL+7tbe5uru8ubq/vbq4tba7u7s3wMTBvb7EubW6sbC3rK+lnZ+inZqXm56qqKyxtLS7wcjH0tLTzdXWzsjR0cnFsJqR1aKVxoSIhZ57hXwCfn+3gAR/fHx8h3uCfIh7hHqQe4N6hnuHeod74XqDewICAQAwp6WkmZ+po5+ss+Lp6/n++efGzNra2dzk4cbP8dTk5/amjZa8wMTHyczP0dLT1NXVhdYF19fY2NiF2Rba2tvd3Nzd3t7e4OHi4+Tl5ujp6evshO2A7Ovp58rOi4j48OTZzszsg//o2MWvkuOEnKzJzMe40qSttrGk0uPgusHRv37g8YOHjI6PkZOPk5eShnW0i4CRvHF9eXly4d3k5+ft5+XKzcTHwL+7ucC3vL+5ur+/u77Gy8jCwsi/vsfEwsLBwcXKx8fFxc7NxsTHuLq4rLOeoZwnnJielpybmZuYrrKwtrm/v8bH0MvJwcXCvquXhYywwsrbvW7wqqCXL5+fnpSZo52ap6zc4OLu9PDfwMXR0NDS2dnByuvR3+HuoouUuLzAw8XIy83O0NDQh9GI0gfT09PU1dXVhNaA19fZ2trb29zd3t/h4ePj4uHg3tzAxYOA7OTZz8XD4n3z3tC+qZDnh56sxMS9r8ScpKunnMna2LS6ybmE7PaFiZCSlZebmJ6joJaG06iZptB7iIODevDr8PHw9O3pzs/GycC/u7i+tbm8tre7ure4wcXCvLvBubjAvby7uru+xME3wb6/x8bAvsKztbOosJyfm5qYnZacm5mbma6zsbi7w8PLzdbS0MfLyse2pJSbvMrS4MB76aKZkTKbm5qQlp+ZlqOp19zd5+zq2ru/y8rKzdTSvcbnz9zd6qGKlLm8wMPGyMvNz9DQ0NHQ0ITPgtCJz4LQiNGA0tPT1NPU1dTW19jZ2djX1tXTuLx9eN3WzcS6uth36NbIt6SP7IuhrMK/t6e5lZyin5bA0dKvtcKzh/T5h4uSlZicoZ+lq6mhkuvArrXfgpCKiYD69Pj49fnw69DQyMrAv7q3vLO2ubOzt7aztLzBvri3vbWzu7i3t7a3ur+8vLs1usPDvbu9r7Kvpq2anZmZl5yUm5qYm5mus7G4u8PFzM7X1NLKzs3Ku6qbosLP1uPCg+SclIygewJ8f7yAA399fId7AXyGewF6lXuCeo17hXqFe996g3sCAgEAgKapsqiho6iusMr+9oGGhonYsrW5w87g38vEyNDO5I6LmLa6v8PHy83P0tPU1tbX2NnZ2NnY2dnZ2Nna2dnZ2tra3N3e3t7f3+Hj5ebo6urr7O3u7+/w8vLy8fHv7OnlztGE++rczbamx9y5mI+nrr3TzdXR08rEp7O+t6esweHLgMK20rzhxYGMjoyMj5KTl56ho6unraqUend2xMl8gHx2dnbkd3ni39DMusC8u7i1ure4vLe5v8C+wcLFycTDvr7Bw8TCw8XHxMPDyMvJxsbGvLu5s7SanZWYkZWRlo6Ql5OZoaSrubm7yMnP1dTJxrWciJK40+jo5OPbv2rNo5ufL5+jrKKcnqOorMT3736CgYPRrrK2v8jZ2MfBxczL4IyKlrO4vL/Ex8nMztDR09PThNSJ0wjS09PT1NXV1oTXgNna3N3e3+Dg4uLj5OXm5ufn5+bk4t7axMh+8ODUxbCiwta1mZOqr7rMwsnFxr23nqiyrJ6judfDvLHLt+/QhY+SkZKWm52jq7G4xMDDv6mNiHzl5YuPiICAf/N+f+zn1dG+xL68ubW5tra5tLa6u7i7vL/Dv724uLy9vry9v8G+OL69wcXDv8DBuLe1sbGYm5WYkpWSl4+RmJWbo6auvb/C0NLa39/U0cOsm6bJ4vTx7evixnnNnZaZLJygqJ+Zm5+lqMHy63yAfoDNrLC0vMXV1MS+wsrK3ouJlbO4vMDEyMrNz9DShtOF0oPRhNAQz9DQ0dHS0tPT09TU1dfW14TYA9na24bdgNvZ1dC7v3jh08i7qZ680LOZlq6vt8a6v7u8sq2Vn6ijl5yxz722rcSy+9mIkpWUl5ugpKu1vMPQzNHQuZyVifz4lZiRiIeF/oOC8uvZ1MHFwLy5tbe0tLexs7e3tbe4u7+7ubS0t7m6uLi7vLq6ub3Bv7u9vbW0sq+ulpqUl5GVJZKXkJGYlZujpq69wcXT1t7j5dnXybSlsdPr+/bx7uXJgcyZkpWMe4R8jnsCfH/AgAJ/faJ7gnqUe4J6hnsDent72HqDewICAQAxrqjD6Obm3dvR2u2AiIyM7rm4ure6wMLDz8TI3uq0gKivtrvBxcnMztHU1dfY2tvb24TZA9jX1obXgNjZ2tvc3N7f4OLj5efo6uzt7/Dx8/T09fX19PTz8vHu6uTdv/726eDAq5SZ1eLapKCmv+fZ0MrHw7Szt7m7ssTQwrivtKpxwYGMj5KTlZaVm6Clsbi8wMDAvsKioXm2v2+DhHt3dePh4NvIw7y/trm0tre2ubmztry7u728v8HCQr67vL/BwcLBw8DBw8XEwsHFwsPEvLOfm5aYjpGLjYqKjZKTmaGgsL/K0tPd4uHdw6uszHmFhYF9enfs5M+Gp6KjqFappL7i4ODY1szU6H2EiIjotra4tbi9v8DMw8fb57F+payzub7CxsnLz9HS1NXX19fW1dTU1NPS0dLS0dLS0dHS09TV1tbX2Nrb3N7f4OLj5OXm6Ojp6YTqgOnn5ePf2dK19O3i2bypmKDa49egmp+22cvEvrq3qqmtr7Kqu8i7sqqwp3rOhpKWmpyfoqKqsrrM19vg4ePg4KvAkdzigJSTh4J+8+7r48/JwcO6u7W2t7S3trCyuLe1t7e6u7y4tba5u7u8u726u73Avry8v76/wLmxnpqXmY+SJo2PjIuPk5Wcpqa3yNTd4Ovy8u7XwcTlhJCOioWBfvjv2ZW2oKGlN6ahvN7c3NTRyNHlfIKHhuOztLa0try+vsnCxtrmsX6lrLS5v8TIy83Q0tPU1tfX1tbV1NPT0tGG0IDPzs/Q0dHS0tPU1NTV19fY2tvb293d3d/f3+Dg4N/d29jVz8ms6+HXz7WkmKPc4tKakpeszcC6s6+roKClp6mitMG2raespILWipacoKSnq6y1v8ne6vH4+vz69rHYo/f7jKCekIqF/vfy6dTNxcW8vba2trO1tK2vtbOys7S2t0O5tLKztra3uLe5tre6vLq4ub27vb63r52alpmPko6PjYyPk5adpqe4ytjj5/P8/fnj0NT1jJaUj4qFgv703Zy8nZ2ii3uEfI57AX7EgAF+onsBepN7BXx7e3p6hnvNeod7hXqDewICAQAxra3H7fD59fDvtLS0ucnu9uDIv7zBydnWxdTkqc2an6WutbvAxsvO0NPW2Nra2tva2YTYA9fW1oXVgNbW2NnZ2tvc3uDg4+Xn6evt7/Dx8/X29/n5+Pf29fTy8e3n39WS7t/tg+aNh863qKqmq6jFwruvn6GoxsXFwMPHt6ippqSA1t6HkZKVmJmanaSrtL9kaW1xdHh0lmpwZKaAZnCFh31zc+HZ18zBu7q3uLO1s7SzsrOztbS1uri4D7i3try+vLq4tbu8v8HAwITBML+7tKehnJWSj4mKiImMiI+PlJ6tvcfhd3+Fg3Vqd42hpaqlm5WLhIB+euach6KorCyqq8Po6/Xw6+mxsbK3x+rz38i+u8DH1dLD0uOpypido6yzub7DyMzN0NPV1oTXCNbV1NTT0tHRh9CA0dLT1NXV1tjZ29ze4OHj5Obn6Orr7Ozu7u3r6+ro5uLc1MuL+ODohu6Ohsqyo6SgpKG5t7CnmJmhvLy8uLq/sKOloqGB7OyPmZyhpairsLrE0uJ5gIWJjpOOrIOIesmbeoOYl4p+fO/k4dTKwr+6urS1s7Kxr7CusbCwtbOzs7JBsLa3trSyr7a3uby7u7y7vL28uLKloJuWk5GLjYqKi4iRkpqmt8rV8oGJkI6DeIWcsLW6s6mil4+Kh4LzrZWhpqk5qKnB5eny7ejmr7Cxtsbo8d3Gvbq/x9TRw9HhqcqYnaOstLq/xsvOz9LV19fX2NjX1tXU09LS0NDPhc6Azc7Pz9HR0tLT09TV19jZ29vb3d/f4OHi5OTj4uHf3NvX0crAhPrb4ITxjoTDqpucmJyZrqynnpCRmrOztLGzuqyfoZ+fgvv0lKCkqq+zuL/L2er+iZGYnaOpo76Wm4rksImRpKOUhYL57OjazsbCvLu0tbKxsK2trK6srLGvsK9CrqyztLKxrqyztLa5uLi4ubq6ubavpJ+blZSRjI2Li4yJkpObp7jM2/iFj5eYjYOQqL3Cxb6yqp6Vj4uF+rWfoKSnm3sCfH/GgAd7e3t8e3x8mnuCeox7i3yJe8F6k3sGenp6e3t7AgIBADits8z79vTz89WztLW2vpGWmp2XgMbY5+bi4Ja1lJqcoqu0u8HHy9DT1tfY2dnZ2tnY1dTU1dXV1ITTgNTU1NbX2NjZ2dvc3uHk5unr7e/w8vT29vb4+fr5+fj28/Dt5+DWy46ItN75v7iusLiys7q5uamUkIeKjZD4sOiNorC3tq6N2YzWgZCYnqWlq7C0XmVpc3yFkJmgo6uQl46BeWqldGp6g3lx3NrUzsa6uLe0sbKwsrCura+vsa+2RLzBvLa5vb7Bwry4ubu7urm9vbm3t7CfnpiVlJOQi4iIhoeEh4yZo7fJd4yksKyVm7DD0NPR0Mu1opaPiYeDfMCDo66qgKuxyPby7+/v0bGytLW9j5OYmZV+xtfl5eLfnbqSmJugqbK5v8TJztHT1dbX1tfX1tTS0dDR0dDPz87Ozs/Pz9DQ0dLT09TV19nb3d/h4+Xm5+nq6+zu7u/v7uzr6ebh3NTMwYiFud34vLWrrLKrq7GurqKQjIOGiYzwq+GKnquygLKpitee6YucqK+4u8PM1HB7g4+cprO8xMjNs7qvn5WByIt+jZSFe+3n4NrRwb27t7Kyr7Cuq6qrq6yrsba3s6ytsbK2ubWytLW2tbS4uLWztK6dnJeUlJaTjouLhoeGipGhr8jeg5mxvLqkqsDV5eno6N/Is6ael5OOhdKYo62oKqqvx/Pv7O3szq+xs7W+j5OYmJN9xdbk5OHgosCTmJugqrS7wcfM0NPV14XYBNbV0tGE0IDOzs3MzM3MzMzNzs/Pz9DQ0tPV19jZ2tvc3t7g4eLk5ebm5OPg3tvX0srBtoGBudjytq6lpamjoaakpJmJhn6AhIjqp9uGmaeuraWH1Kn1k6Wxu8fL1uLugI2Yp7XC0dzk6OzR1sq3q5PknYyaoI6C+PLp4tfGwL24s7Gvr6ypqEmpqKmorrKwraWmqquws7GvsbKzsrK1tbOxsqycm5eUlJWTj42MiImIi5OjssvliKC6x8ayuM/m9/v6+e7Vva+mn5qTityloqynjnuGfId7AX3IgAF+k3sEfHx9fYd+A3x6eol7kXyHe756lnsFenp7e3sCAgEAgJmfqJ2psrTM8+fn1MuAlpmcm5bbzcra5NaMf5Kcm5ufqLG6wsjN0dPW2NjZ2djY2NbV09LT1NPT0tHQ0NHS0tPV1tbW1dfZ2t3g4+bq7O7u8vP09fX3+fn6+fj29PDq5NvSx7mkoH6ov8K9vcnUwb+/s7CPg5jezLLyhY+Yn6OlgKWji9PEmXOEj5iosLZhZm12gIyZqWB3cG1tYGRfV6KYh3CtcWV7e3Ld3NbRx7q3tbKwrKShoKOmuo7KiOvs1NPZ3NvW1drvg5CUlp2gqbGwqZ6blpOSkY6MjIuHhoGFiZKlt9B6m8WLjqaUi4mIi4aAdm/Ptqidl4+GfdGHhaKVKpecpp6psbPL8eXk08p/lZeampXazsvb5tmcf5GbmpqeprC4wMXLz9HU1YTWC9XU09LQz9DQz87OhMyAzc3Oz8/Q0M/Q0tLV2Nrd4OLj5efp6uvs7e7v7+7t6+jl39jQyL2wnZuDq76/u7nEy7i2taqpjIGh38et7IKMlJufoaGfh87LooSYprHEzth0fYaToLHD1XeIh4WEeHx2bsy9qIvUiXeNin7x7eXe0MG8uLOxrKSdmZiYpXOrfN9D4s/N0dTSzsvO33qFio2VmqKsrKacmZWTkpKRkI+Oi4iDiY+asMfoiarShn6lko2Qk5iTjoR75sy8sKiflIroo4ihlYCVmqWeqLG0y/Dj4tPLgJaYmpmV2s7M3OfbqYKSnJqanqexusLIztHU1tfX2NjX1tXU09DPz8/OzczKycnKy8rKysvMzMvMzs7Q0tTW19nb3N7f4OLj5eXm5ePj4N3a1M/HvbSnlpaFp7i5tLG5v62rq6KgiH2j28Kp5X6IkJebnVedm4TIyqSPpbTC2ObzhJCdrb7R6P2LmZ2amY6RioHv3MKg85yEm5WG/vjv59jHwLq1sqyjm5OQjpVek3TW28vIys7NycbF1HV+hIeQlZ+oqqWbmZWTk5KEkCWNjIiOkp2zzPCQtNyFd6iWk5qfpaCaj4X328m8sqidkfS0iZ+TjXuGfId7AX/KgAJ/fI97BHp+gICJgQJ/eoh7iHyJfYR8hnuRegN7enqLeZ16BXt7e3x9inyIewV6ent7ewICAQCA3efd3nfle5/Gz+Dz1qO31O2CxcHG3s6aoOWgoqKhoKGlr7jAxszQ09TW19fW1tXU0tLR0M7Pz8/Ozs3MzMzLzM3P0NLS1NfY2t3g5Ojo6+3v8PHz9fX29/f39vPx7ebf1cq/sqah+9uf1Mu9trvhrqSgn5mTxqKa/KCorrS3uruAu7qg952ZkI+xqq9dYmhyfIqZVmN1vovyrOh8oIt8bGJYmINtoGeybXHb2dHIwrSzrK+i4Onw8oGFjZOYnaaA09PZ3d3b19bRy8zHw8nJxdzx9/2IiomMiIiGg4aHhouTorrTe53Jrf2tzI+CseiAzI62j3zcu6eShH1zyKN4heM07fXs7X7z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qqikpqWpq62usLW6wsXFx8zU3+b2janVhLKSrKG4uK6zmJyggIiGdnpnpqiLqXBw2LO/xdnIxsPAvcGGewV8fX5+fop/DX57fH59fH19fHx/f3+7gAJ/fYV8Cn19fXx7e3t8fH2GfwR+fn6Bi4MBgol/AX6Wgwh+fX18fHt7e4R6qnkGenp6e3t+j4MKgoKCgYKCgYGAfYd7AgIBAHmxq57Bm9Dg7PiAhYqQlpugpqyyudynnq2xrLCRxH+VweZ7hJCerbjAxsvO0NDQz83Kx8XDwL67ube2tbW0tLS1tra3ubu8v8PFyc3Q09fb3+Pm6Onp5uLb0sa3pZHxgum7oY612cicpLG+wuu4v6eTjomFgX318N6dibx+pYp2cXd4dnZ0c3PKldLP3NvZ29ze3t7f3d7b3NvW1srWz+SES3NXi3pmv6aKeMuqk6qjoJ2cnZyeoKGjp6eoqqqqpqSfmJiYmpuco6ars7q4ur3Gx8fRcn6PrYOX2sPk8uv42LzWvqS/r5qnitrIlojRy4fcttzHo6CbmpuiPMG7sdWZzNvo832DiZCWm6Clq7G42qeotbq0upzTh5jE6X2GkaCvusLIzdDR0dHPzcrHxcK/vbu5t7W0tISzObS1tba4ury/wsXIy8/S1trd4OLj4+Dc1szAs6GN7IDuwKmawufVqbbBysvxvMClko6JhYF99O7ZmYm4fqGHgHuAgYCAf39/3Zbb1d7d293d397e397f3t/e29zT39Xiq2mfc6yRdty9moPcu52wqaWhoKGfoaGjpaioqKuqqqWkoJqamp2cnaSnrbjBwMDEz9LU3nmHmLmJg7+uys7H0LWdsZ2JnZB/inS8r4R6vr6AzarIvrm1sK2uszzQy8Plmczb5/J9gomQlpugpauwt9motcHGv8Wn4o+ezPGBi5emt8PM0tbY2tnY1tLPy8nGw8C9u7i2tbSGsze0tba4ubu+wMTGys3Q09bZ2tzb2NTOxbqsm4nmfO7BrJ/I7tyvv8nSz/S+vqaWkoyIhID69NSVibMRnYWKhouMjI2Njo/7oOrk6eeE5Gnl5OTl5efo5+br4vDk8NWIyo3JpIT1z6aL5sSitKyopKOjoqOkpaipqqqtrKqmpKCZmJibm5yipq22vsDCyNTZ3uqAkKLHjneuoLm3sLSijJ2KeoqAcntprKF7cbO1e8SjvrzI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x8fIycrM0rKoorCWhYeHi7nb5YGQqLXQ7oiUkZfwr7i0rI6Rhfqel7GS7pqF/4aB//ioiKGsrbW1uMrDw8WpoYbCr9p8d36IcW6ChouAmIBv2JRssYjl4orWiYyOefDa186WnqixusPL09zk63l9gYSMrr6AgffXwLOjzO2QrLzCytjl7Orl2tDGvLOqoZqTjYeC/vjz7enk4d7c3Nva29vc3+Lk5+rt8nt/g4mOlJqgp66ytbe1s66kmYx/5MnM2+Hn6+z2gIWHh4OA39HIwLiyq6Sf2paJs36diK+tqaainZybmJSTjPXugpaUut26g7aDnePihoDg29fQzszLysvRwLWvu56MjI2Ru93ngo+ns83qhJCOlO+vt7OrjpGF+peVspLol4T+hID99qiOqbW1u7q+z5uus5qTe7WlzXRuc3plY3R4fnOHcmXZn4O7kPX1lOKQlJYEe3t7fYt/hoCDfoV9An+AloGWgJSBiYCGgYl/AYGLgwGCjH+Gfgp/f3+Cg4KCfn5+iX0BfIx5hnqEe4h6Dnl6enl5fH19fH19fHx7iHkLe36BgoKCgYGAgICKfw1+e3t8e3t6ent7fHx8AgIBAD1yzMPenqq3xM3X4Onw+oCFio+Tl7KUvsjIuqWckcDchJqmr7rI09nZ1MzEurSrpJ2XkYuGgn/79vDs6ebkhOI45OXm6ezv8vb6/oKGi5KYnqautb3DyMjGw7y0qJqL+9/Z5uzw8/b3+v+AgP6B4tPLw7q0raah5Z6JvH6mjqyppaKdmJKRjoyLiH7enMRrjcFuk57Cm9elrqyvsrOztrq+wsjWj4mGmIGCeHuNueKClrHK4P+LoL/Fx6aevra10tHHwuCEtZKCm5iRhoSCiON/nquusrKwuYfL+KPGwauQxsiHm/n6mrWahq7+1pyEfTGffsZyu4eWmZh5eNrT2Zuns77G0Njg5/B7gISJjZCslsrT0sSvp5zI5oqfqrK8ytXb2tbMxLu0q6Sdl5CLhYF++fPu6ebj4d/f3t7f4OHk5+ns8PP3f4KHjpOZn6eutbq+v726ta2hlIbz2NXk6e3y9PX5/n9//H/g0srCurSspqDgmom4fqKLrqunpJ+alpSRkI+LguSp33qdz3aZoMCe47O6uLq8u7m6vL/CxtWel5OmjYyBg5S+5YKWr8fb+Iaatr2/oZ2qqJ+4uK+q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3eXwtIeFiY7Vy3uMnK24vlS9tax75nuBh4yRlZmdoqarr7S3uMOOhIF+erCxyMLS5POBiZGXm56hpampp6ekoqCenJqXlJGOjIqIh4WEg4KBgIB/fn9+fn5/f4CAgYOEhYaHiYmEiyGKiIaDgHzw6NzQxcjP0NLS1dXU1tjFh4OA+vPt5t3U6ZqJuH6ijLq3sqynoZyYk4+MiYeDfLHGhoaUlaytrNut2dGpjKlxekRKZLx/9Zq9l3HHssJ7g4eQhomUSMKWtIOEqMCPj2p2eXtvadnyg+OJ0e62yaOnsYSB8JHLW3/Aoqaku76gyqbTj4rvjZqmscDn2uTr9bKKiI+U5NuCk6KyvcJDwbqydNx1e4CFio+Slpufo6essK+5lo2KhoPBvNPL3fD/h5CXnKGkp6qurqurqKajoZ6bmZaTkI2LiYeFhIOBgH9/foR9Mnx8fX1+fn+BgYKCg4SFhYWEg4KAfXp149vRxLu+xsjKys7Qz9HSwIaDgPrz7ebd1OSWibN+nom6t7KtqKKdmJSQjYqKhoG/2Y+Nopymqa3jsNnRqY2pZnpESle0feuMkXVsxKqsV2KDi1hXgiu9kq6CgaK9hm1NV1laUEu77YThhs7ptMikp7CDge2N3LWcxOCopr3Bo82n4JWQ9I6cqLPD69zm7fiwi4qRmOvjhpamtcHGBXt7e39/kICGfYaAvYGTgIZ/AYGLgwGCjn8FfHl5enqGeYh6DXt7enl6eHl7e3p5eXmEeg17enp8eXp6ent8enx7hnwQe3l5en18e3t6enp5eXl4fIp6Bnl5ent7eYp6hXuCeoZ7AgIBAGaro5WK+YWMk5meoqarr7W6vcLGydKEeXRyedTOucfa6XqCiZKZnqKlqKurqamop6Shnpyal5SSkI6Mi4mIh4aFhIODg4KCgoODhISFhoeJiouMjY+RkpKSkY+MioaC//fr4NTO1dmF2w7f4MyMiISB/PXs5dzvnom8fqaPvrm0sKmjnZiUkIuJg3/UgKeB03zFsLqNeZbBxrGAj8/b9YHbhqDX4oKo9rrajKnGvdnak57Qw5iq8cG+/fKez9rd1bmZt6d/nOXioJjBgn99fNbXUIh1fPVRk9Lz0qOZoJW7xYyIl6GpscPQ2ePthdh+h4vSu+GAjp2prkOwqJt/5nyBh42Slpueo6itsLW4ucOJf3t4gNnO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zc/S08GMiISBfvXu593qmom4fqKMubexq6Wfm5aQivOD+ue9dH2CodWVjpmIj6u2tbSajaWanZ6Th4Pw9Ndv/OTPyNVzhIqhdoelkIP0l3/tlO6Iqr/Kyb2kgYzDt8GhgOP72NDmgdg7loOIgJGNaZONqsSit4+eonmKn6yytcXS2uXx/IOEiKPVpb/Q5HqDh0eMhr+C3XZ8gYWKjpWXnKKlqq6xsbqA8f/L7b7Az9/u/IOKkZedoqWpra+uraypp6Whn52ZlpOQjoyLiYiGhYOCgoGAgIB/f4Z+LH+AgICBgoKDgoKBgX99enh1493WzcO6tLe9wMPGyczNvIuHhIF99e7n3eWWibN+nom6t7KspqGblpGM+Yb/7MeAiY2356ClmoWRrLe2tJqNrKCjpJeNiPj3t1376NLFxWyDiIVnd4ONg/eWe+eU43qTpK6rn491ib+1vJ9/4P3UzOKA15Obxrvak5K1lpCtxqK6kqyxhYyhrrW4x9Xd6PP/hIaKpt2tydrugImOBXt7e39/kIAEfXx8f4eAvoGVgIR/AYGLgwGCiX8Kfn5/fn57enp6eYx6h3kEeHh5eoV4iXkGeHl6eXl5iHoGeXl5enp6hnkFeHp6eXmHegd5eXl9fX18i3qEe4V6g3sCAgEAQruqnrL6hY2Tmp+iqKyyuLzBxcnL0tWkgs2ytsTT3+x7gIaMkpieo6errayrq6mnpKKfnZuZlpSSkY+NjIqJiIeGhoSFDYSEhYWFhoeIiYqLjo6EjyKOjYyKh4SC//ny6uDVy8jN0NLU1tnZx5GNiYWB/fbu5fGeibx+po+7t7Ksp6Gcl5K1+oP65JTGu51/n8+XvX76nqOmp5eDvrC4ua6ciG/YxuL54NLg9vyEi8mqtcPwg4SG6YSH/JO91OXn2raIheGir5CEgZ/CnY15eDGcs31CgoVQiIPml5yrf4mPdICRn6qrvMfQ1+PseX94d76Dk52nsr2/QtLCoKTofIOHjpOWm5+lq6+0t7q6xOOxhc6yt8TS3+t6gIWLkZacoKWoqaiop6WkoZ+dm5iVk5GPjYuKiIeGhIODgoSBDYCAgIGBgYKDg4SFh4aEhyKGhYSCgH178Ovl3dPJv7zBxcjKzM/Qv42JhYJ/9/Hp4Ouaibh+ooy4tbCqpJ6ZlZC1+4L65ZTKyrqLmrZzqobqpKiqqZqFv66zsaielH30tsb649fZ3OaCiJyBjJL1hoiM5oGM8oajtcPEuqB+ifasrpGFg6PJpJSDiUKht4FVfYBbgn7ooae2g5ifgoaYprGzxNDZ4ev1foN+f9GYqbS+ydTXUeDQp5zddn2AhouOk5ieoqessLOxvPS/jde5vszb6faAhYuRlpugpKmsrayrq6imo6GenJmWk5KQjouKiIeFhIOCgYGAgIB/fn9+f39/gH+AgYSCJIGBgIB+fHp3dOTf2dLHvbS0uLzAwsTIybqMiYWCfvbw6N/mlomzfp6JubWwqqWfmpWRuf+E/+qZ0NTJq8bTfpWL5KSqq6qch8e3urmupJmC+qOq++ja1M/bgYaCaXV28YWHjOB8jeZ5jZunp56Mc4f5rKqQhIakyaOUhK6HndOFr3+BqYWB7aKpuYWmr46Jmqm0tsbS3OTv+ICFgYPYoLO+ytXh5AV6en1/f5CAAnx9iIC/gZWAhH8BgYuDAYKJfwh+fn9+fnt6eoR5BHp6enmGeoh5A3h5eYZ4hnkBeIR5A3p5eYh6CHl4eXp6ent6hXkEenp6eYZ6hHkEfX19fIt6hHuIegICAQBClp2esfuGjZKaoKSqq7Kzu8LFy83Uu7m7qrLAztvo8X2CiI6UmJ2jqKusrKypqKajoZ+cmpmWlZOSkI6Ni4qJiIiHhIYBhYWGLYeJiouLjY6Njo2NjIuLiYeFgoD79e7k2tLLyMrOz9PW1cOTjoqGgv/47+jxnom8fqaPu7awq6WempaSi4WB+OeZ8IOmrqDjvtb1iZmdn6CWj/DW3trV2rV6bafEf97V3O/y94G3jIuw2eLk6NGFrIeNrcLHzL+i9IHVjoiA+be2y4rjyCzD46p5dbKHa2iWu9aGleGCd4vgg5KkrrvEydLb4+t5f3TUl5yXsJ6rpEawt6Om6HyAg46UmJ6fpqittLe8vMbAu7uqsr/N2ufwfYKHjJKWm6ClqKmpqKalo6CenJmXlZORkI6Mi4mIhoaFhIODgoKChYEGgoKDhIWEhIYkhYWEg4OCgH58eO3n4NfOxr+9v8TGyszNvI+KhoN/+fLq4+uaibh+ooy4tK6oopyYlJCJhID46aDkepKLfbWlychgnqKjo5mR8tjc19HXvIh7oLCC5dva3eX3gJN3eYnj8fT7z4CtgIKWqKyvpZHlh+yYiYP9v7/TlfvlPcruu4GMuoFzbqPb9Zik8pGFnu6Kmqy2w8zS3OXt93+EfeapsKzKtcO+R77GrZ/ddnl5hoyPl5ieoKWsr7Szv8nEwrG6x9bj7/uCh42Sl5qfpKmsrKyrqaeloqCdm5iXlJKRjoyKiYeGhYSDgoKBgICAhn8sgIGBgYKBgYGAgH9+fXx7eHVy4dzVzMO7tbW3vL/CxMW3joqGgn/48eri5paJs36diLi0rqmjnZiUkYqFgf3wqOZ5iXxxrqLGulOfo6WlmpL23+Le1tq/joCVnoPs39jU3fh/f2pscuLz9/7Keqp5doKRlZeOgNOG8JuHg/3BwtSX/uiF1erigtHqg6eKo+L7nqr7npKs842dr7nHz9Xg6fH8gYeB7bG5tdfB0csFenp9f3+QgAF/iYDAgZSAhH8BgYuDAYKMfwh+fnt7e3p6eoR5h3qMeYZ4hXmEeAN5enmIeiF5eXh5enp5eXl6eXh4enp7eXl6eXp6enl4eHl5e319e3mLeoN7iHoCAgEARKaaxbn6hIyTm6Gmqa20s7vDxsrO3sGoqbC9y9fj7PaAhYuRl5ufpKirrKuqqKekoqCfnJuZl5WTkpCPjYyLioqJiIeHh4Yuh4iJiouMjY6NjYyKiouKiYeFg4D89vDp39bPyMbKztHU0sKUj4uHg4D48enynom8fqaPubWuqaOdmJSPiYSA8t+CdpD/g5We34CUko+UmZqSlZOOjoyKi9iEcouX6N/fx7vW8POfio2U0LW215LwgYr/mKmxrqWR6Ybei93Z0a6mktDKuDzU4XnaZUppZTDH0dRt2vaweburiZSms7i9xc3U3OHoeXZ71b21vrCnoUO+scqu53p/ho+Vmpyfp6attbi8vdHBqKmwvMrW4uv0f4OKj5WZnaGlp6iop6SjoZ+dnJmYlZSSkI+Ni4qJiIeGhYSDhYIxgYKCgoODhIWFhoeFhoWDg4OCgoF+fHnu6ePb0svDvbu/xMjKybqQi4eEgHzy6+Tsmom4fqKMtrKrpqGblpGNh4N/8+KMiIbih6K284l1YpSanZ6WlpONjIqHh9uUgZKV8+vs1sfe8/OFeH1/3cvP7pnneoHuh5SZmJGE3Iz2luPg2LmxnOvn107z7oj3dV1we0Ls8/V+8yqRkM66lp2vvcHH0Njf6O72f36D5dHK08a+uUPMv9Kp3HN3fYeOkpSXnp6krK+zs8nIr6+3xdPf7PX/hImPlJmdoKSoq6urqqelo6GfnZqZlpSSkI+Ni4mIh4aFhIOChIEygICAf3+AgIGBgYKCgIGAf35/fXx7eHVz4t7Y0MfAubSztrzAw8K1j4uHg4B88erj5paJs36diLazrKeinJeSjoeDgPjplJaH3YyqwPuNbFOWnJ+fl5eTjYyKh4bcmoeRj/n0893M4vf0d2xycd7S1vWa3nN523aBhYN/dcmM/Jni4dm8tJ7y7fqW+OmQ/5GnjamM9f3/gv0hmpzeyaCitMHFy9Tc5O30/IKChezb1N3SysUFenp9f3+agMCBlYAEf39/gYuDAYKMfwp+fnt6fHp6eXl5j3qFeYh4hHmEeAV5eXp6eYZ6A3l5eId5E3h4eHp4eXl4enp6eXp4eHh5eHyFe4t6g3uHegICAQBEb3HBl/mDjJSco6errbS4vcPIzM/eoay1vsnU3+nxfYGHjpSZn6KmqKqrqqmnpaKioJ6cm5mXlZOTkZCOjo2Mi4qJiIiHhy6IiImKi4uMjY2NjIqKiomIh4WCgf348uzi2tPOyMbIzM/Ov5WQjIiDgPjx6vKeibx+po+1sKunoZyXkYyHhID02m92++N4ls11fJKNho2Qko6RmZiampiR5Id0c3LZ5NS4ur/W6oWSl4W6rqzIhJ2bodCFkpuZk4Xai3aEvcS+q5R8ysBlcHCMem9zcYaHmGtwdXiRnYuKbNOax4qmuMTJ2dnc4+F1hnvj3M/T0c7FR3p8z47meYGIkJeanZ+lqq+0uL2/0KGstL3I09/o8HyAhoySl5yfo6Wnp6elo6Kfnp2bmpiWk5KQj46MioqJiIeGhYSEg4ODhIIug4OEhIWFhoaGhYSDg4OCgYB+fHnv6uXf1s7Iw727vsPGxbiRjIiEgH3y7OTsmom4fqKLsq6ppKCblY+KhoJ+8956ldSvk7PlgIV0YYuUlpaSlJmYmZmWj+eZhoJ+7PTmztDS4fB7eXx4y8bG4YyjoqbId4GJh4N60JKCkcTOyLaiiujfdYGAnop/hIqVl6p9goaJlaGYl3bmqd6WtMXQ1uXm6vDwfI2B8/Hm6efl3UWCg9yI2nN6gYiPkZaWnKGmq6+0tcmps7vF0Nvn8fqBhYuRl5ugo6aoqqupqKWkoaCenJqZlpSSkI+OjIqJiIeGhYSDg4KFgS+AgICBgYKBgYKBgYB+fn59fHt4dnPj3trVzMS+ubWzt7y/v7OPi4eDgHzx6uPnlomzfp2Is6+qpaCclpCLhoN/9+WCp8meoL7vhIlrU42WmJeUlZqYmZiVjeigjYaB9fzu2Nrb6PN1bW5w0M/R6o+ko6a9anF4dnNuw5OGlcXQy7qnj/HogJuEopGFivCcn9yEiI2Plaijo4D1teqcu8zX3Ors7/f3gJGE+/vy9PTz7AV7e3t/f5mAwYGVgAR/f3+Bi4MBgox/CX5+e3l7enl5eZB6hXmIeIR5hHiFeYZ6inmCeId5AXqHeQF6hHwDe3x5inqDe4d6AgIBACe7436894OMk5yhp6uxtLq/w8jMz+GuusLJ093m7fN9g4mQlpyhpKeEqBmnpaSjop+dnZuZl5aVk5GQj46OjIyLiomJhIghh4eHiIiIiYqMjI2NjoyKiIqJh4aEgoD++PPu6N7X0s7KhMcMu5aQjIiD//jy6vKeibx+po+xrKmloZuWkYyHg4D23bqO9+GNvdd1e5SNgo2Rj4qNlpeZm5qQ3ot5bGrU5OHCxMnb4O36gO7Nvb+91XaDh7j4h5CTj4LekHiAuL64tZeGf3Z5d4iEe36DWYmAhoiBf42ugaLMctBvprDC1HeJk6jF1XWCwpeTjY6Sf4SAJ7vggLDleYGHj5WbnKKlqrC0uL2/1a+6wsjS3OXs8n2CiI6Ump6hpISlH6SioZ+enZqZmJaUk5GPjo2LioqIiIeGhYWEhIODg4KEgwOEhIWEhiSFg4KCgYGAfnx57+vn4tzSzMfDv72+v8C1kYyIhID58uzk7JqJuH6ii66qpqOfmpSPioWCfvXe0K7PsKfW74CFemWHk5aUj5KYmJqamo/lnYt+evL49Nrf3+3t8Ox26N3X2trxg46QtON6gYOBedSXhI7Bx8PBp5aOhYiJmZWNj5Nol5GXmZKTn72KseB74X2+yt3whpmiuNfnfovBnJmTlZiJjotHstqDqtlzeoCHjZOUmZyhpquwtbbPtsPL0Nrk7fX9goeNk5idoaSmqKinp6ako6GfnpyamZaVk5GPjo2LiYmIh4aFhIODgoKEgYOAh4EkgH59fXx7e3l2dOTf3NjRycK+ura1trm6sJCLh4N/9/Hr4+eWibN+nYivqqekn5qVkIuGgn/55eHBw6Cy3/mFi3NZipeZl5KUmZmZmpmO56aThYD+//vm6uj28u/jcOXj4ebl/IiSk63ObHN0cm7ImIiTw8rHxqyck4mOmJ6alpmavp+dpqCamqfEkrzugu2EydXn/Iugqb/g8IKPwZ6bl5ibj5WSBXx9fn9/mYDBgZSAhH8BgYuDAYKMfwl+fnp5e3p5eXmQeoV5ingBeYZ4hXmFepN5AXqIeQZ6e3t9e3qEeYZ6i3sCAgEASNuCjajlg4yTnKGorbG0ub7Dx8zQ4rnFz9bb5Orve4CGjJKZnqKlpqenpqalpKOhoJ6dnJuZmJeVk5KRkI+OjYyMi4qJiYmIiYSILYmJiYqLjIyNjY2KiImIh4WDgoD++fXw6+Td2NTRzsvKxbmWkIyHgv748enynom8fqaOrqunpJ6alZCKhoL76s2bvPvjkrHUd4Dp0YiIhoOAjJaYmpyZkeeTdm1syNnWvsLF097Y097SxrjEytFteoGn3PmFhYP82JKBkLXEureypp+Rin+Df4WMh46QkJienpGOmoRtvodsqKmotcPNa3J3fnuLl6Scx9h4ja2r6Ujago2k1HiBho+VnJ+jpaqvs7i8wNa5xc/W2+Lq7np/hIqQlpufoqOko6OjoqCfnp2cmpmYlpWUkpCPjYyLiomIiIeGhYWEhISGgyuEhIWFhYaGhYOCgoGAf318efDs6eTf2NHNysfFwsG9s5KMiIN/+PHr4+yaibh+oousqKWhnJiSjoiEgPnpzJm40LOwzuyCi+/Hj5COi4eQmZqbnZqQ7aaKgH3o8vDc4N/r8Obe5d3Z0+Lo7nuHi6nP5np7eezQm4+evs3Gw7+1rZ6YkJWQmJ6ZoaGjqK6vpaKrbHnXk3rCwcPR4Ot7goiPjJ6tu7Hb7oSUsqnmSN+HlaPKcnp/hoyUl5qcoKWqr7O30MHO2eDj6vL4gIOJjpSZnqKlpqempaWkoqGfnp2bmpiXlZSSkI+Ni4uKiIeHhoWEg4ODgoSBg4CGgSSAfn1+fHt6eHZ05eLe2tXPx8S/vbu5ubatkIuHgn728Ori5paJs36diK2ppaKcmJOOiIWB+uzQlq7CpL3Z+ImS9siTlJKQjJObm5ydmpDwrpKIhfb7+unt6/X46uLn4+Pf7vb8goyPpb/Rbm9t2cWclKPB0cvJxLqyo52boJegqaK4rbO0triurLZwgeiagc/Nz9zr+IGKj5aUp7bJu+X6i5e1peYBfoR/mIDCgZSAhH8BgYuDAYKLfw5+fn59fHt6eXl5enp5eYx6hXmReIZ5g3qdeQV6enl6eoZ5i3oFe3t7fH0CAgEAJn2Hjn7Ig4yRmqGnq7C1uLvCx8nO5MfS2N/l6e31f4KJj5abn6GkhKUepKOjoqGgn52cnJqZmJaUk5KRkI+Ojo2MjIuLiomKhokEioqLi4SMI4uJiIeGhYOBgP359fLu6+Tf2tjV0tDNupWQioWB/fbw6PKeibx+po6ppaKdlo+Igvbn2tHFtpWAnKSkmtmQrc2ohpyIf3+MlJeYl5aO3ZF7dG9rbmrOwsTR3OVyz8e+vr/JaGlufZ7N5e3y7ebJk4SQrcjEv8fFtaeUgYGGgYGEjJSVl6ColoaTdImUdaSjoK/B0tNpg292fISNkoSht/e1ntLqSXyHj4C8eIGFjpWbnqKmqayytri92MfS2N/l6OzzfYGHjZOYnJ6hoaGioqGgoJ+enZybmZiXlZSSkI+OjYyLiomIiIeGhoaFhYWEhCyDhISFhYSFhYWEg4KBgH59e3nw7Onm497Y08/Ny8nGxLOQi4aBfvbv6uLsmom4fqKKp6Ogm5SNhoDz5NjPw7WVf4eKo5nUj7Liv5CjkYiHkpmbm5qYj+emj4eCfH157+Lj7fP4fOPf2dve6Hh4fIigxdnf5OHdx52ToLjQzsrS0MK0pJSUmJOUlqCnqKmxuKiaqHyXpIW+vbrK3e/yepOBiY+Xoaebuc/0sJrN50qBjpeBs3F6foaOk5eanZ+gqK2us9LP2uHp7vH1/IGFi5CWm5+ho6OkpKOioaGfnp2dm5qYl5WTkpCPjYyLi4mIh4eGhYSEg4ODgoWBA4CBgYSAI39/fnx6eXh2dObj39zZ1M7JxcTBv728rI6KhIB88+7p4OaWibN+nYenpKGclI2HgPPk2M/DtZR/gYGils2JsPDNlaSXjo2Wm5ycm5iP7K+YkIuEgoD+8e/4/P+A7urm6u32gICCjJ+5yc7S0dHCn5mmvNTU0tnWyLmqnqKhnJ+isrO3tLrBsaS0gaCuj83Kxtjr+v+BmomSmKCqsabG3umum9LvhX+YgMKBlICEfwGBi4MBgoh/iH4JfHt8fHt7enl5jHqIeYZ4AXmGeKd5hHqHeYt6BXt9fn5+AgIBAEfz9/r4mPiJk5uhp6yvt7m7vL/Hz+LQ2uDl6e71+oGIjpSZnJ+hoaOkpKSjoqGhoJ+enZ2cmpmYlpWUk5KRkZCPjo2NjIyLi4SKg4mJiiKJiIeFhIKB//z49vPv7Ozo4t7b19PPu5SBhYL/+vPt5vGeibx+poyPi4uIhP/68+vh2dDGuKSagMnIy7q+vKmS/IC+wIa/m5SWmJSFypl/eWxobWxoympxeXXSx8nIxsNrZ8lvfJnB2NXV29LHmZCewNrijc7DurKaiYSGhH6Ej4yHmKHOy5ahkZaYcK+tscfNcnRtcHZ6gIOHyaK0jrfG0+HqTu3y772B4H2Hj5Wbn6Goqqurr7a91tDa3+To7fP4gIaLkZaZnJ2en6ChoJ+enp6dnJuampiXlpSTkpGPjo2NjIqJiYiHh4aGhoWFhISEg4iEI4OCgYF/fXx68u/t6ujk4eHc1tPRzsrGtI99gn/38uzm3+uaibh+oYiOiomHg/z28Ojf1s7Et6KYfsfFybe7uKWP9nm0s327oJqanJeI2q+UjIF8f3557HqAh4Pv4+bq6eV8eOt/iJ+/09DR2NHIpJ+tyuHtl9jPycGrnZiYlpKZo6Cbq7TX5K25maaof8vHzOPrgoV/goiNk5eb1putiLHAztzkTPD38J9z03aAiI6Tl5meoKGhpKyz0Njj6O3x9vv/g4mOk5ibnp+foaKjoqCgn5+enZybmpmXlpSSkZCOjY2MiomJiIeGhYWFhIOCgoKGgYWAIn59fHp4d3Xn5uTg3dvY19LNysjEwb6ujXuAffXw6+Xd5paJs36dhY2KiYeD/Pbw6d/Xz8W3opd+xsXJtrq2oYvxcqeeb7OinZydmYnhuZ+Wi4aHhYH6gYeOiv3z9fr59ISB/IWOn7vKxsjQysSmpLPO5fWf4NfQxrKnpqSgnqmyraq3vdzzucadsLOI2tba8fmJjYeKkJacoKTXkaiFr7/O3uWEfoJ/l4DBgZSAhX8BgYuDAYKFf4x+iH0FfH18e3uHeol5AXiEeYZ4A3l5eJB5AXqUeYR6hXmKegJ8fYZ+AgIBAEWA+5GRj7XJ5oWUoauwtba2p/HFzeTV3uLn6/F+g4mPlJeanJ6foKCio6OioqGhoJ+enZ2cm5qYl5aVlJOSkpGQj46OjYyEi4OKjIkhh4aEg4GB//369vPy8e/t6ePc2NbTuZSS/fz49e/o4PCeibx+poyWk5CMhoH++PLp4NnOwbGlopWJiP7x8/Ht6uTZvdCSlJeYmZOG356FgHdrcnVtbHB2fHNubmhobMJlZmp2fpa70tfW1tLGqZajxd7d4dfJvLSliY6IipWYjY2TmK63da7CkpSLa8bLym1sd3t+j4uGu6yDtNHc5O72/oGDJ3fGWWmCoq/Jd4WTnaGlp6WY6ra82dXe4ubq8HyCh42RlJeZm5ycnYSfJp6enZ2cm5qZmJeWlJOSkZCPjo2NjIuKiYmIh4aGhoWFhISDhISEhIMkgoKCgYB/fXt68vDu6ujn5uTj39nSz83JsI+N9PPv7ejh2eqaibh+oYmUkY6LhID79u/n3tbMv6+joJSHh/vu8PDr6OLWt8aMnJ2dnpiK67acloyAhod/foKHjIR/fnl6ful3eHuGjKC+0tbU1tPIsqa00ufo7ePWzMW2nqSdn6qwpKOprsXMh8fenKKae+Lo53x8iIyQoJyIs6V+rMnS2uXt8np8THOrO1V7m6a/cX6KlZmdnZuO4ayy09zn6+7y94CFiY+TlpmbnJ2enqChoKCfn56dnJuampiXlZSTkpCPjo6MjIuJiYiHhoWFhISDgoKEgYOAhH8ifXx7enh2dejm5eDd3d3b2tbRysfEwKqNh/Dw7evm39fklomzfp2FlJCOi4WA+/fw597Xzb+vo6CUhof67vDv6+fh1bO6g6ChoKCajfLDqaOYi5CRiYaKj5SMiIaCg4f7gYGDjpOjvM7Rz9HQxrWuvNjs7vPq3dTMvamyq6y4wbOxtrrQ15LV7aKspYXz+PiFhZCUmaijgqmeeqjGz9jj6u54eAJ/foZ/iYABf4mAw4GRgIh/AYGLgwGChn+Ofol9Anx7hnqTeQF4pXkDenl5hHqDeYd6A3t8fYh+gn8CAgEATKOYotPy+Pr47u30gpGcpamH2rfN3N7i5Or0f4SLkZSXmJqcnJ6foaGho6KhoKCfn5+enZybmpmYlpWVlJSTkZGQj4+OjY2MjIyLioqGiSeIiYiIh4eHhYSDgYD//fr59vPy8O3p5uHZ09G3lO7ggoWGh4WD+J+JvH6mjJiWk4+KhYL/+/Tu59zTycC5raWkm4+OjYiFgv/689SC4KGXkYbYp5F9dHZvd3Vwd4SBeHR2cnlvaW1weHiIkrLQ09TOzsiqn6PE3ePk3dLFuq6fpqqoqKKgp6WppL2suc2FiIx2asRzmJSY/r6CrNDo8fuBhoqPlJieo6dOloeNu9jd29THxcptfoqSlXrMqLrQ3OLj6fJ+gomOkpOVl5mZm5ydnZ6fnp6dnJycm5uamZeWlZSTkZGQj46NjYyLioqJiIeHh4aFhISEhoMlgoKBgYB/fn18evPx7u7s6ejm4+Dc2M/JxayM0tN7fHx7d3Ttm4m4fqGJlpSRjoiEgfz48uvk2tDFvraroqGajY2Lh4SB/fjvz3zbp56YjezBqpOKjISMioWKmJOLiIiFjIJ8gYOKiZmft9PU1c/RzbawtdPq7/Hr4tfMwbS8wL7Bu7jAvsK91sfX6pKXnId54IOkkJP2t36myN/n73t/g4eMkJSZnU6PfICuyM7LwbSzuWR2gYmLcr+esMvj6evx+oGFi5CUlZeZm5ucnp6en6Cfn56dnZ2cm5qYl5aUk5KRkI+OjYyMi4qJiIiGhoWEhIOCgoGGgCV/fn19fHp5eHd16ujl5ePg397b2NTQyMG7pIe7y3Z2dXJuaeSWibN+nYaWlJGOiYSB/fjy7OXa0Ma/t6uiopqNjouHhYH99+7Ld9Spo5yR99C4oZeZkJiVj5SinJWSkY6WjIeLjpSSoaS30tHTztHNu7i/2vH1+fPq4NTJvsnOzNDNx87Mz8ni1ef6m6CokYLxjKaDje6ze6PG3eTseX2AhIiNkJSXi3+GgAF/iIDEgZGAAn5/hoABgYuDAYKHf5R+hX0Be4R6vHmFegd5enp7fHx9hn6JfwICAQBN2Of6g4mPlZmamZiYlIqC7N37l7rP5er2gIWKjZCRlJeZmpucnp+goKGioqGhoJ+enZ2dnJuamZiXlpWUlJOSkZGQkI6Ojo2NjIyLioqEiSiIiIeHh4aGhoWEg4KBgP/+/Pn28+/r5+Lf29jNvJfO5+v49O3l2e+eibx+po2dm5mVkYyIhYOA/fjw6ePb1cvDvbmup6SfmZSNiYaDgfnE15KCz6iah4N+gY+KfYCHhHt4goGCdHFxdYCNjJCftcTUxbWwpq+rtdPg3tzW086+uairsGqntMzMgd/b1NjDzeuSvNjtiaO2xd3t+YGHjZOZnqOprrW8wsfPKMfS4Hd9goeKioeFg31zbMq2nIivyOLp9H+Dh4qNj5GUlpeZmpucnJ2Enk2dnZybm5qamZeXlZSTkpKRkI+OjYyMi4qKiYiHh4eGhYWEhIODgoKCgYGBgIB/fn59fHrz8vHv7enm4t7Z1dLOwa+Kk9DR3NfRy8Tnmom4fqGJnJmXk4+KhoSCf/n07Obe2NHHv7q2rKWinZeSjIiEgX/2wdKQiunFtaGclZepoZKWnJmRjpeXlomHh4uVoqKircLO3M2/u7fCv8nj7u7t6Obi1NHBwsh4w8/JvXzY1c/SucPhjLbS44Ocr7/W5e97gIWKj5San6SqsLa6v3m9xtJvdXt/gYF9enhxZ2G5n2OAqsfn7vmBhYmMjpCTlZiZm5ucnZ6en5+fnp6dnJybm5qZl5aUlJKRkZCPjo2Mi4qKiYiHhoWFhIODg4KBgYB/f359fXx8fHt6eXl3durp6Ofk4d7a1tHPzMa4pX9tvr3JxcC8t+CWibN+nYacmZeTkIuHhYJ/+vTt59/Y0sjAu7espqOdmJOMiISBf/a/zYyR+dfGsaylpbqvnqOoo5yZoqGhk5KTlqCtrau0x9Lez8PCwM3K1Oz39/fz8e3g3s/Q14HV4LireNLSysyrttWItM3cfZitvtbk7Xl9gYaKj5WanqSpr7K3g3+MgIN/hoDHgZCAiH8BgYuDAYKKf5Z+BX19fHt6sXkGenl5enx9h3yEfYd+jn8CAgEAefmBho6Um6KorbCytbOwqZqSko3A44iIiYmKjI6PkpWXmZqbnZ6fn6CioaGgoKCfnp6dnJybmpmYl5aWlZSUk5KRkZCPj4+Ojo2MjIuLiYmIiIiHiIeHh4aFhYSEg4GAgP/6+Pb08Ozm4dvUzsW1iufEyuDh4eDe8J6JvH6mjqWhnpuZlJGOjYuIhYKA+fPs3tzV0M3Evbawq6WfmpSRkI2LhMHJ5rCUlZOnl5KNhIOMh4GFg4aLhoWKg4uNoambqri2tqmhrrfH1tzW2NHRzcCvqrTCzbazhZ+oq62yuLq9w87Z4eXw/YKHjJSboKatsbe+xczT2dzi6vIn5HZ7gYaNlJmeoKKkop2WhmRmf6/WhIWFhoeJi4yPkpSWl5iam5ychp0knJybmpqZmJeWlpSTkpKRkZCPjo2NjIuKiomJiIeGhoWEg4ODhIIkgYGBgIB/fn58e3v08O7t6ufj3dfSzMW8qn6qp7rT1NXW1uqaibh+ooqjn5yZl5KPjIuJhoOAffTu6NrY0MzJwbu0rqmknZiSj46LiYK+yO7Nr7CrwrKsp5ybpJ+Ym5qdop6copqipLjAr73Kycm9uMPO3Oju6uzm6ebay8fR3s6tq4Kdpqmqr7W3ub/K1Nzf6PN8gIWLkpaboaWqsLe+w8jL0Nfeeddvc3l+hYuQlJeZmpiSinlJSnal0oSFhoeIio2OkZOVmJmam5ycnJ6fn56enp2dnJuamZiXlpaUk5GRkI+Ojo2Mi4qKiYiHhoWFhIODgYGAgH9/f35+fXx8e3t6eXh3d+zp5+bj4NzW0czGv7WidYSWscvN0NLS5JaJs36dh6OfnJmWko+Mi4mGg4B99O7o2tnRzcrDvLWvqaSemJKPjoqIgbzH79/Bw7zTwr23q6qxrKSnpamuqqivp6+xxs67yNTT1MjG0Nvp8vj2+PP39enb1+LyyKSlf5+oq6yyt7i6wMvV3N7o8nt+goeNkZWanqKor7W5vsHGzNMBf5SAy4GPgIh/AYGLgwGCjn+WfgN9fHqveQN6fH2QfpN/AgIBAE6Jj5acoamvtbe8vsDCwLuwhZKt1oCLjI2NjpCSkpSXmJmam52en6ChoaGgoaCfn56dnZybm5uamJeXlpWVlJOTkpCQkI+Pj46OjYyLi4qEiSeIiIeHh4aGhYWEg4KBgP379/Tx7urm39fQyMC3pemS4PHz8O7s85+JvH6mjq+rqaWjn5yamJeUkYyJh4SC9/bu5+Tg2tLLx8K6tK+qpqKgn5uWjNCBzsGloJ+ek5SQop2fmZebm5GXmJegoa+9va7AurPEubO91NjSzsjNzMhwwfbTkqyxtLi+v77F0+Pv+YGFio+TmZ+mq7K4vsTN1Nvk7fT7gYGAg4YnfoKIjZOaoKSnrK6vsa6om2Z8n8R7h4iJiouMjo6QlJWWl5iam5ychp0inJubmpqYmJeXlpSTkpKRkZCPj46MjIyLioqJiYiHhoWFhISDJoKCgoGBgICAf359fHvz8e3r6ebi3dfPycG5rpvgjtjq6+no5e2bibh+oousqaejoZ2al5aUkY6Kh4WCf/Py6uTh3dfQyMW/uLGsp6OfnZyYlInOg9bcwLu6u66uqr23t7KwtLSqsLKxu7vJ1tTD1dDI3NDM1urv6+fj6enmf73ty42qr7K1u7y7ws7d6PB8gISJjJKXnKGnrLG2vsTK0trg5nZ2dHd7eXd7gISJkZebnqKkpaainI5Sb5e6eYaIiouMjY+QkpWWl5iZm5ucnZ6enp2dnZycm5qamJeXl5aUkpGRkJCOjo2Mi4qKiYmIh4eFhISDgoGBgYCAf39/fn19e3x7e3l4d+3q5+Xi39vX0srDvLOoldeM1ejp5+bj6JeJs36dh6ypp6OhnZqYlpSRjoqHhYKA9fTs5ePf2tLJxsG5s62oo5+dnJmUic+E3PHUzs3OwL+6zMfFwL7Cwbi/wsHMzNnn5NHj3tfs39zm9/36+PX7+/iHsuXGjayytbi+v73E0N3n73t/goaJjpOYnKGmqq61u8HHz9Xab29ucXSUgMyBj4CIfwGBi4MBgpF/ln4DfX17qHkEent8fY1+lH+FgAICAQB5mp+kq7G1ub7CxcjJy8zKxsPE0eGHjo6Oj5GSk5SWmJqamp2dnZ6foKChoaCgn5+fnp6dnJubmpqZmJeWlZWUlJORkZCQkI+Ojo2NjIyLioqJiYmIh4eHhoaFhYWEgoD/+/j18u/q5eHc1tDJwbiuoYyA//78+ff1n4m8fqaPu7e0sa6qqaako6KfmZSRjImFgoD9+vby7+fi3djSzMW/vLiyr6qlpKijjMqB7Xi3trKvrqKaobmsoqSrsKvEaMK7sbmyyW7FzWtvhW1vjbvMr4OquLu+wMXIysvR2ef3gomOk5icoaettbvDztjd5O3z/IOHio6QkZCRliuNkZecoaWorrK1t7e5ubeyrrLA0YGJioqMjY6QkZOVlpeXmZqam5ycnZ2dhZwlm5qZmZiXlpWVlJOSkpGQj46NjYyLi4uKiYmIh4aFhYSEhIOCgoSBIICAgH99fPTy7+zq5+Ld2dXQycK7sqeah3349/Xz8e+bibh+ooy4tLGuq6imo6Ggn5yWko+Kh4OAfvj28+/r5N/a1c/Jwry4tbCrp6KhpqKMy4T3htTTzsvLvrW91Me9wMnNyOF33dXK1MzifN/oeX2Xe32Zs8Onfqe1t7u9wsXGx8zU4fB+hIiMkJSYn6SqsLfAyc3T2uDmd3t+gYOEgoSJJ4WJjpSZnJ+kqKyura+vrKaip7bJgIqKi4yOkJGRlJWXl5iam5ubnIedS5ycm5qZmZiWlpWUk5KRkJCOjo2Mi4qKiomIh4aGhYSDgoKBgYF/f35+fn18fX18ennu7Onn5eLc2NTQy8W+t66jloV79vXz8u/pl4mzfp6Jt7Sxrquop6ShoJ+clpKPioiEgX75+PXx7ebh3NfRy8S9ubWwrKejoaajjc6G/pDq5+Le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goGA/fn28/Hu6ufk3trV0M3Jwry3s6+qpJqOhuLmjZadoqepqqqplJPj3t/d19TU1NLOysfBvLq3trCppaOjoZ2Zl5SSjouJh4WDgP/8+Pfy7uvm5eXi4N3dS93c29zc3NjY19bX0tHW09TX2d3e5OTg4uHk5ufm6Ors7vH1+Pn8gYWMlZ2lrLC0uL/J0t7m8Pf9goWGiY6Tlpmfpamsrq+vsbKztRmprbG1ub7CxcfLzc7P0c/PzMzjf4qOj5CShJMIlJWXl5iZm5uEmoWbgJybmpqZmZiXlpaWlZOTk5KSkpGQkI+Ojo2Mi4uKiomJiIeGhoWEhIOCgYGAf358e/Tx7uzq5uPg3NjU0MvHxL23sq6rpqCWi4Pd4YqSmZ6ipaampZGQ39rb2tXR0dDOy8fFv7m3tLStp6OhoZ6bl5WSkIyJh4WDgH/79vLy7enmUuLg4N7c2NnZ19jZ2djV1dTS083M0s/P0tXZ2+Hh3N7d3+Lj4uPl5+ns7/P09n6CiZGYoKWprLC3v8fS2eHn63l7e32BhYeKkJeanZ6fn6Gio6YjoKOnq6+1uLu9wcPExcfFxMLC232JjY6QkpOTlJSVlpiYmJqHm4Ccm5ubnJuampmZmJeWlZWUk5OTkZGQkJCOjY2Mi4qJiYiIh4aFhYODg4GBgYB+fn58e3p47+3r6OXi39zZ1dHNyMTBurWvq6mknpSKg9nch4+Vm5+hoqKhjY3f29za1dLS0tDMyMbAu7m1ta+opKOioJyYlpORjYqIhoSBf/z381bz7+ro5OLh4N7b3Nva2t3d29jY1tTVz83U0dDV2Nze5OTf4eHk5ufl5+rr7O7y9Pb4foKJkJefpKeprLO7wszT29/ic3V1dnl9f4GGjZGUlZaXmJmanZOAy4GagAGBioIBgaN/tH6Sf5OAAgIBABrDxszP0dTY3d/i5OTl5ubj5OyBjZWampqZmoWZBpqbm5ydnomfGZ6fnZ2dnJybm5qamZmYmJeXlpaVlZOTk5GEkICPjo2NjIuLioqKiYiHhYOCgf/++/f08vDt7Orm4t7Z09DOyMG9ubSuq6eglZKtxdbn9P+Cg4OA6KDt6+vp5+Tj4eDc2tXRy8fJxsC4sbCwraqno6CdmpeUkpGPjoyJh4eFhIOB/vv39PHx8fDv7u7u7/Dw7+7v8e/r6+7u7+7u7jXx8fX29vX29vj7/4GDhYiMkZihqa21u8HJ0Nvk7fT5/oKHi42Pk5icoKSorrCytLW1tbi7viWytbq9v8LGy87P0dHS09PR0tp5hY+UlJWUlZWWlZWVlpaYmZmahpsKnJycm5ybmpmZmYSXgJWVlZSTk5KSkZCPjo6NjIuLi4qJiIiHhoaFhYSDgoKBf3589vXy7+zq6Obl49/c2NPOy8jCu7i1sKqnpJ2Sj6nB0uLv+X+AgH7jnOnn6Ofl4d/e3dnX0c7IxMXDvbavrq6rqKWinpuYlZKQjo2LiYaFhYKBgH759vLv7e3t7OvqDurq6+vs6unq7Ovn5+nphOo17e7x8vLx8vHz9vp/gIKFiY6UnaSosLS6wMbQ2ODl6u15foGBg4WJjpKWmp6goaOlpaaorK8lqauxs7W3u8DDxcfIyMnJyMfQdYOOlJOUk5WVlpWVlZaXmJmamoScAZuEnICbnJuamZmZl5eXlpWUlJOSkpGRkI+OjYyLiomJiIiHhoWEhIODg4KBgH9+fXt68fDu6+nm5eLh39vZ1dDKyMa/ubazrqilopuRjqe/0N/s9X1+fnzgm+jm6Ojm4+Hf39vY09DJxcfFv7ewsLCtqqejn52al5KRkI6MioeFhYOBgAV/+vj08oTvEO7t7ezt7u7t7e3v7enp7OuE7TXw8fT19fT19Pb5/H+BgoaJjpOco6eusre8wsvS2d7i5HR4ent8foGFiY2QlZeYm5ycnZ6ipZKAyoGigISBgoCrf6d+lX+VgAICAQAoycvR09Ta3uDi4+Xo6Ojn6Ov5h5Kbn5+fnpybm5qZmZmampubm5ycnYeeAZ2EnAabmpqamZiElwSWlZWUhJOAkpGRkI+Pj42MjIuKiYiIh4aFhIKCgP/8+PTy8O7t7evp5+Ld2dXRzcfDv7u0raupoZqSjIiFhISDgYD9+/n29PPy8fDv7uzo5+Lc19HR087Jwr+9urW2s6+rqKWin52cm5mXk5CPjo2NjYqHhIODgYCAgYGAgIGA//6AgP/8/P86/v78/oCAgIKCgoODhIaHi46PkpifpqyxuMDHzNPb5O31/IGEhomOkJSYm5+lqq+ztLS2t7q5u77Awyq3ub/BwsjMz8/Q0tXV1dTV2eh/i5WampqZl5eWlZSUlJaWl5iYmJmZmpqFmwaampmZmZeEloCUk5OUk5KRkZCQj4+Pjo2Mi4uKiYmIh4aFhIOEg4KAgH9+fPXz8Ozr6efn5uTi39vW09DMyMK+u7ewqaelnpePiYWDgoGBf3759/Xz8PDw7u3s6+nl5N/Z1M3O0MzGv7y7t7Ozsa2opaKfnZqamZeVkI2NjIuLi4iFgoGBgH9+f0d/fn5/f/v5fX77+Pj7+fn4+n5+f4CBgIGBgoOFiYyMj5Wcoqiss7rAxcrR2eHo7Xl8fn+DhIeLjJGXnKCjo6SmqKuqrK6wsgyusLW3uL7CxMXGyMyEyxrO33yJlJmZmZiXlpaVlJSUlZWWmJiYmZmamoWbAZqEmYCXlpaWlZSSk5OSkZCQj4+Ojo2Mi4uJiIiHh4WEhIOBgYGAgH59fHt58O/s6ejl5OPj4d7c2NPPzsnFwLy5ta6opaOclY2JhYOCgYF/fvn49vPx8fHw7+3s6ufm4dvWz9DSzcjBvr25tbWzr6qnpKGenJuamJaRjo6MjIyLiIWCghqCgYB/gYCAf4CA/vx+f/36+v38+/r8f3+AgYWCLYSGio2Mj5Wcoqersri9wsfN1Nzh5XV3eHp9foCDhImPlJeampucnqGgoqSmqJKAyoGlgL1/BH5+f3+Ifp5/mIACAgEAHs7Q1tra3uLl5ebo6+zq6uz0g4yXn6Onp6imoJuamoeZBJqanJyGnYCcnJybnJqampmYmJeXlpaWlJSTk5OSkpKRkZCPjo2NjIuKiYmIh4aFhIOCgYD8+PXz8O/t7Orq6enm4t3a1tPOyca/ubSwrKqloJuUjoqHhoaFg4KA//37+/r5+fn49fPv7Ofm4eDd2dTMxsbBv7y5t7Ovraqop6aloqKgnpybmVGWlZaTkZCOjIyNjY2LjIqKh4qKiYeIjIiHh4eKiouMjo6QkZGTlpicoKassrm/xs3S1t7m7vb7gISIjJCTmJucn6KorLC0t7m7u72/wcTGyMsdvcDGycrN0NLT1NbZ2djY2eJ7hY+ZnZ+goZ+alpWElIWVApaYh5mAmJmYmJiXlpaVlJSTk5OSkpGQj4+Pjo6NjYyLioqJiYiGhYWEg4OCgYB/fn178/Dt6+ro5uXk5OPi39zX09DOycTBu7Wwq6emoZ2YkYyHhYSEg4KAfvv5+Pj39vb19PLw7Ojk497d2tbRycPDv726trSwrauopqSkoqCfnZyamZdRlJOUko+OjIqKi4uLioqJiIaIiIeFhoqGhYWFiIiJioyMjo+PkJSWmZ2iqK60usDGy8/W3OTq7nl9gYSGiY2QkZKVmp2hpKeqq6uusLK0tri6HLO2u7+/w8bIycrN0NDPzs/Yd4OOl5uen5+emZWFlAeVlJWVlZaYh5mAmJiYl5eWlpWVlJOSkpKRkZCPj46OjY2MjIuKiYiHh4WEg4KCgYGAf358fHt57+zq6Obl4+Lh4N/f29jT0M7LxcG+ubSuqaWkoJyXkYuHhISEg4KAfvz6+fn49/f39vTy7urm5uHg3NjUzMXFwb+8uLayr62qp6alpKGgnp2bmphRlZSVkpCPjYyLi4yMi4yKioaJiYiGh4uHhoaHiYmKi42Nj5CPkJSWmZ2iqK2zuL7EyczT2d/m6XZ5foCChIeKiouNkpWYm56goqGkpqiqrK6xkYDLgaiA4n+agAICAQAd1dXb3+Hk5+bo6+rt7/Hw8/+HkZ2mra6sq6ignZqFmQuXl5eYmZubm5ybnIWbE5qampmZmZiYlpaVlZSTk5KSkZCEjxmOjo6NjYyKiYiHhoaGhYOCgP77+vbz8O7thOyA7evp5uTh3dbT08zEvrq0sq+rqqeinJiUkI2LiYaEg4KBgoGAgYKBgf/7+PXw7ern4+Hc2dPNycjDwb+7uLa0s7Gurq2rqqmnpaKgn5+fnZyamZiZm5mXlJSTlJWUk5SUkpSUlZWWl5ibnJ6goKGkqq+1u8DFzNDV2eDo8Pj9gIQah4uPk5ecoKOmqq2xs7a6vb/AwcTGyMvNz9ItxMXLzs/R09TV19fa3d7d4e5/iZWepKSjo6Gal5SUlJOTlJKSkpOVl5eXmJeYhpcvlpaVlZWUlJOSkZGQkI+Ojo2LioqLi4qKiYmIh4aFg4KCgYKBf3189fLx7uvq6OeF5oDk4d/d2tfRzc3Gv7m2sK2qp6akn5qWkY2LiIeDgoGAgIB/f4CAgH/8+PXy7ern5N/e2NbRysbFwL69ubWzsbGuq6yrqaenpaOgnp2enpybmZeWmJmYlpOSkZKUkpCSkpCRkZKTlJSVmZqcnZ6eoaessre7wMbKztLX3+ft8Xp+gBmDh4qNkZWYmp2fo6Snq66vsLG0tri7vb7CHLq7wMTFyMrKzM3N0NPV09fkfIeSnKKioaGgmZaGkw6SkZKTlJeXlpiXmJeXl4SWEZWUlZSUk5KRkJCPj46NjYyKhYkYiIeHhoWEg4KBgH9/f317evDu7ezo5+XkheOA4d7b2dbTzsrJw7y3tK6sqaalo56ZlZCNi4iHhIKBgICBgH+AgYGA/vr39O/s6ebh39rY083Ix8LAv7u3tbOysK2trKqop6akoZ+enp6cm5mYl5mamZeUk5KTlZOSlJSRkpOTlJWVlpmanJ6enqGmq7K2ur/EyM3P1dzj6et3en0ZgIOGiIyPkZOWmJucnqKkpaanqqyusrS1uJGAyYG0gNZ/nIACAgEAL9rd4OPm6Onq7O/x9ff39v2Eipagq7O0sq6oop2amJeXl5aWl5iZmZmYmJiZmpqZhJpVmZmZmJeWlpaVlJSTkpKSkZGQkJCPjY2MjIuKiomIh4aFhIOCgYD//fr39PPw7uzq6+zt7O3u7uvo493V0szGwb67uLSzsK6sp6WgnZqWko6Li4qKiYSIdIeGhIKB//z69fPv7Ojm4dzW0tDPzMnHwry7u7q6uLe2tLKwr62rq6qpqamnpqWnqKaioKOjoJ6doKCfnp+goaOkpKWpq62vs7e7vsPIzNHX29/o8fj/gYSHi46SlpmeoqWprq+ytrm7vsLFxsjMzM3Q0dPVK8nMz9HU1dbX2tzf4uTl5et8goyXoaipqKWgm5eUkpKRkpGQkZKTlJSTk5SFlViXl5aVlJWUk5KSkpGQkI+Ojo6NjIyLi4qJiIiHh4aFhISCgYGAf358e/b08e7s6+ro5uTk5ebl5ubm4+Hc18/Nx8G9ube0sK+sqqijoZ2bl5OQi4mIiIiHhYZzhYOBf/z59/Lw7Onl497Z08/NzMnHxL+5ubi4t7a1s7Gwrq2rqaqop6enpqSjpqajoJ6hoZ6cm56enJycnZ6hoaGipqiqrK+zt7q/w8fM0NTX4Ojv9Xx+gYOGio2QlZibnqGhpKeqra+ztLW3vLu8vsDBxIC/wsbIysvMzdDR1Nja29vieH+JlJ+mpqWjn5qWk5GQkZGQj5CRk5OUk5KTlJSUlZWWlpWUlJOTkpGRkZCPj46OjY2Mi4qKiomIiIaGhYSEg4KAgH59fHx6efLw7uvp6Ojm5OHi4+Pi4+Li393Z1M3KxL+7t7ayr62rqaejoJ2al4CTkIyJiYmIh4aGh4eGhoSCgf/8+fTz7uvn5eDb1dHPzsvJxsG6urm5ube2tLKwrq2rqaqop6eopqWkp6ikoJ+iop+cnJ+fnZydnZ6hoqKip6mqrK+zt7m+wsbLz9LV3eXr8Hp8foCChomMkJOVmJubnaCipKapq6ytsrKztbe4upCAyYG4gNF/noACAgEAH9/i5ejp7Ozt8PP09vb3+oGGjZejrLGysa2po52amJeFlQmWlpeXl5iYmJeFmICZmZiYmJeVlZSUk5OSkpKRkJCPj46NjIuKiomJiIeGhYODgoGA//79+/j18/Hv7uvq6uvr7fD08/Pw6+Pb1MvFwcC9vLq4tbKvraypp6ShnZmXlpWUkpCPj46NjImHhYOBgYD9+Pbz8O3o5uPg3NfU0czHxsXCw8TGxsPCwr+8uk67ure2tra0s7W1tbGusLCvrqytsLCvrq6wsbKzsbS2ubzAxcjKz9TY3ePr8/b7gIOHi42RlJmdoKSnq6+ws7a6vb/CxMjM0NPT1dbX2dwpztHT1tfZ2dre4eLk5OXpeH+Fj5qhpqemo6CclpSSkZCQkI+QkJGSkpKFk4SUgJWVlJSUk5KRkJCPj46NjYyMjIqKiYmIh4aFhISEgoGAf39+fHv29fXz8O7s6uno5uTk5eTm6Ovq6ebj3NTPxsC8u7m4trWyr6ypqKakoZ6al5SUkpGPjY2NjIuKiIaEgoB/fvn18u/t6uXj4N3Z1NHOyMTDw8DAwcPDwL+/vbq4Tri4tbS0tLKxs7Oyrqytrq2rqqutrayrqq2usLCvsbO2uLzAw8XKz9LX3eTr7fF7f4GEh4mNkZSYm52go6Smqa2vsLO0t7q/wsPExsbIy4DEyMvNzs/P0NPW2Nra3OB0fIKMl56jpKShnpuVk5CPjo+Pjo+PkJKSkZKTkpKTk5OUk5SUk5OTkpGQkI+Ojo2NjIuLi4mJiIeGhoSEg4OCgYB+fXx7ennx8vLv7evp5+fn5OHh4uHi5Obl4+Hf2dLMxL65ube2tbOxrquop6WjoYCem5eVlJORj46Njo2Li4mHhYOBgH/8+PXy7+zn5uLf29XT0MrFxMTBwcLEw8G/v726uLi4tbS0tLKxtLOzr62urq2sqqytrqyrqq2vsLCvsbO1uLu/w8XJzdHW2+Po6u15fX+ChIaJjZCUlpibnp6foaWmp6qrrbG1t7i6u7u+wY+AyIG+gMt/oIACAgEAJOPm6evr7vDy8/b29/j7/oKHjZafpq2urauloZ2ZlpSTk5SUlIaVhJYEl5eWloSXgJaVlZWUk5OTkpKRkI6Oj46NjIyLiYiHh4aFhYOCgoGA/v38+vj18/Lx7+3s7Ovr7O/x9Pb49/Pl2tnMx8bEwsC+vLq2s7Owr66sqaajoaCenJqYmJiWlJKQjYuIh4aFg4GA/vv38u/t6ubh4NzZ19bX1dTT0NPX09DOzs7MycbESsLBwcLBwsG+vr+/wL+9v77Aw8HAwL69vL/Bw8jN0NTW2Nre5/H5/YCAgYSIjZCTlpqdoKSorLCxsrW7wMTJysrLz9XY2dzb297hHtHU19na3N3g4eTk5efq7Xp/hY2WnaKjo6GdmpaRj4SOgI2Oj5CRkZCQkZGRkpKTkpKSk5KSkpGRkZCPj4+Ojo2MiouKiYmIh4aFhIOCgoGAf359fHv19PPy8O3s6+rp5+bn5eTl6Onr7Ozr6NzU08jDwsC+u7q4trOwr6ysq6mmpKGfnZyamJaVlZSSkI6LiYaFhYSCgH779/Pv7Oro493bFNjU09PT0tHQztDT0M3MzMvJxsTChr83vbq7vL29vLq8u72/vr28u7q5u72/w8jLztDS1dnh6vH1fHx8gIOGiY2Pk5aYm56hpaWmqa6ytoS5Cb3Ex8jKysrMzx7Iy87Q0NLU1tjb2tzd4OR2fIKJlJufoaGgnJmUkI6FjA+NjY+QkI+QkJCRkZKSkpGEkoCRkZCQkI+Ojo2MjIuJioqIiIeGhYSDgoGBgH99fHt6efHw7+7t6+rp6Obl5OTi4uLk5ebn5eTi2NDRxsHAvry6ube1sq+urKurqaajoJ6enJqYlpWVlJORj4yKh4aGhIKBf/369vDt6+nl393Z1tTU1dTS0s/R1NDOzMzMycfEwkq/v7/AwMC9u7u9vb68u7u7vb6+vLy7urm7vL7CyMrOz9HU2N/o8PN6e3t+gYSHioyPkpSXmpyfn6ChpquusbCvsLS5vL3Av7/CxY+Ax4HCgMV/o4ACAgEAIObq7Ozt7/Dy9fj4+vv9gIGFipCYoaioqaShnZyXk5GRhZIGk5OTlJSThZSDlYaUCZOSkpKTkpGQj4SOgI2Mi4mIh4aGhYWDgoGB//39/Pr49/X08vDv7uzr6+vu8vL2/Pr88OXj19DLyMXFxMC+vLq3trOzsbCvrqupp6Wko6OioJ+enJmWkY6NjIqIhYWDgoD9+vXy8Ozq5+np6Ofl4uHh4uXl493c2tjW08/Oz9DPy8rLy8rKy87Ozs/QOs/Pzs7NysvMzdHV2+Dj5efq8fj8gICChIWIi4yQlJabn6Kkp6uvsrW4u7/Cx83S09LT2N3f4ODh4uQn1Nja293e3+Hk5ufq6+x3en6CiI+Ynp+gnJqWlZCNi4uLjIyMjY2NhI4Kj4+Qj4+QkJGQj4SQgI+Oj46OjYyMi4qJiomJiIeFg4OCgYKBf359e/Tz8/Py7+7t7Ovq6Ojm5eTk5unp6/Dt7+bd29LMx8TBwcC8ubi3tLKvsK6srKqopqSioaCgoJ6dm5mWlI+Mi4qJh4ODgoF/+vfx7+3o5uPm5uXk4t/e3t7h4N/Z2NbV09DNy8vOR8zIx8jIx8bIy8rLzczLy8rJyMXHx8nM0Nbb3eDh5Ovy9nx9foCBg4WHio2PlJeanJ6ho6aprK6xs7e8wMLAwsbMzs7Oz9DSNMzP0dLT1dbZ293f4eLkc3Z7gIWNlpycnZqYlJOOi4mIiYqKiouLjIyNjY2Oj4+Pjo+QkZCFj4COjY6OjYyLi4qJiYmIiIeFg4KBgICAf318e3nv7/Dw7uvr6urp5+Xl5OLi4uPl5ebp5+fh2dfQysXCwL+/uri3trOxr6+urKuqqKakoqGgoKCenZyal5WQjYyLioiEhIOCgPz48/Hv6ufk6Ofm5eTg39/f4uHe2djX1dTQzcvMzkfMyMjHyMfGyMvKy8zMy8vKyMjExsfIy9DU2tzf4OLq8fR7fH6AgIKEhYiKjJGUlpeanJ6go6WnqauvtLe3tre7wcPDxMXHyI6AxoHHgL9/poACAgEAIers7O7t7fLz9ff5+/39/oGDiIuQl5udnpuYlpWSkI+Oj4SQg5GEkoORhJKGk4CSkZCQkI+Ojo2NjY6NjIuJh4eGhYWEg4OBgYD+/fz6+vn39vX08/Hv7u/u7/Dw8vb7+PL07uLW1c/LycfFxMG/vLq5uLi3trSxr62qqKisrayqqKShoZ+cm5mXlJKPjIuJhoSBgf/9/fv6+fn49/b09PDv7vHx7erl4+Pf3N7d2wze3drb2dzc3NjW2dyE3jff3N7i5ujo7O7v8fX3+v3/gIGEhomKjZCSlJidoaSoq66xtbm9v8PHys7R1dnY1tXb4OLj5OboKtnc3N7d3eHj5efp6+zt7nl8gIOIj5OVlpORj46LiomIiYqKiYqLi4yMjISNBoyNjY6NjoWPgI6NjIyMi4qKiYmJiomIhoSCgoGBgIB/fn18evTz8/Ly8O7t7Ozr6uno6Ofn6Ojp7O/s5+nl29HRy8fFw8HAvbu5t7a1tbSzsa+sqqelpaiqqaeloZ6fnZqZl5WSkIyKiYeEgn9//Pr5+Pf19vX08vDw7ezq7e3q5uDf4NvZ2trXR9va1tfW2djY1NLV2Nra2dna19nd4ePi5ujq6+7w8vb4fX6Ag4SGiIqMjZGWmpyfoaSmqaywsrW4ur7AxcjHxcXKz9HS1NXXK9DT09XV1Nja3d/h4+Xm53Z5foGGjJCSk5GPjYyJiIeGh4iIh4iJiYqKiouGjIONhY4qjYyLi4yLiomIh4iJiIaFgoCBgH9/fn18e3p48e/v7u/s6+rp6unn5uXlheSA5unn4+Th2M/PycbFw8G/vLq4trW0tbOzsa+sqqekpKiqqaakoZ+fnZuZmJaTkI2KioiFg4CA/vz7+vn3+Pb19PHx7u3r7e3p5uDe4NzZ29rX2tnW19bY19jU0tXY2dnZ2NjW2Nzg4uHm6Onq7e7x9Pd8fn+Cg4SGiImKjpOXmZwYnZ+go6aqqq6xs7a4u769u7vAxcfJzMzOj4DFgcqAu3+ngAICAQAC6OuE7Bfx8/T1+Pj6+/v9gIOGiIyPkZKRkI+OjoWNBI6Pjo6Ej4KQhI8RkJCQkZKSk5KSkZCQkI+OjYyEi2CKiYeGhoWFhISDg4KBgP/+/fz6+Pf39fT08/Ly8fDu7u/v7vLz7O/u5dva19LPzMjHxsPBv8C+vbu7ube1sq+trbGysrCvrq2pp6Sin6CdnJuZlpOQj4yLiYiHhYSEhIOEgVeA//z59vj49O/t7Ovs6+ro5+fp6eno5+bl4+To6enq6+vs6uzt7+/x9Pj6/YCBgoOEhoqMjpCTlZmcn6Kmqq6wtLe8wMTHys3P0tba3Nzb2tvc3+Lk5OYb2Nze3t7d4uTl5ujp6+zt7nl8gIKFiImLiomIh4eEiASJioqJhYoFi4uLjI2FjiqNjIyMi4qJh4eGh4eGhYOBgYCBgH9/f358e/X19fTx8O7u7ezr6+rq6umF54Dp6eTm5d7U1NLOy8jEw8K/vry8urq4uLa0sq+sqqqtr66trKuppqShn52dm5qYlpOQjo2KiYeGhYOCgoKBf3+Af377+PTy9PPw6urp6Ono5uPi4uXl5uTj4uHf4OPk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9fTz8/Ly8fDv8O/u7Ovp6Ofk4uHh3tvY2dfV0tLQz8/NzcrKx8XGxsXGx8fJyMfIy8rIx8PBwL++vbu5uLi2tLKwrqyrqqmoq6yrqqmno6KhnZmUk5KQj42Mi4qIh4aGhUeGhoWDhIKCg4OEhYWFhoeIiYmJiouLioqMjY+RlJaZm52go6aprbCysrO3ub2+v8HCwsLBxMbJys7PztDR0dLT1NfZ3N3h4jTY3Nzf39/g4eTk5ebn6evt7e3r6uzu8fJ6enp7fH5+fn1+fn5/gIGBgYKDgoKDg4KCgYGBhYIngYCAgIGBgYB/f35+fn19fXx8e/Tx8vP19PLz8vHw7+3s6+vq6urphOiA5uXj4eDd29ra2NXS09LQzs3LysvJyMbFw8HCwsHCw8LFw8PEx8bEw8C+vby7uri2tbWzsa+tq6mop6alp6mop6akoJ+empaRkI+NjIqIiIeFg4ODgoODgoGBgICBgIGBgoKCg4OEhYWFh4eGhoiJioyPkZOVl5qcnaCjpainqKwcr7K0tbe4ubm4u7zAwcXGxcbIxsfIyczO0dLV1i/T19ba29vc3eDf4OHj5efo6enn5ujp7O13eHh5e3x8fHt7fHx9fn9/gICBgICBgYWADYGBgIGBgH9/f4CAgH+FfW98e3t7ennw7e3w8fHv8O/u7ezr6unp5+fn5uXm5eXj4uHf3tvZ2dnX09HS0c/NzcrJysjHxcTCwMHCwcHDwsTDw8THxsXDwL69vLu6uLe1tbOxr62rqainpqaoqainpaOgn56alpGPjo2LiYeIhoSFggmDgYCAf3+Af4CFgTiCg4ODhIWGhYWHiImLjo+Rk5WXmZqcnqCjoqOnqq2vsbS1tra1t7m9vsLDwcLDwsPDxMfJzM3R0ZiAtIH/gLWAAgIBACfj5OLj5ubo6uvs7e3v8fH19vb4+fj7/v///4CAgP+AgYKCgoODg4KEhBKFhYSEhIWGhYWGhoSEhYSDg4OFggSBgYD/hP4K//7+/fz7+vn49oT0AfKE8Vnv7u3s6+zr6unp6Obk4uHf3drY2NbS0dDOzs3JyMnLyMfHx8bFx8fHycrLzMzMysnGxcTDwsC/vbu6ube0s7Kwrq6usLGxsK+tq6imo6CcmJSTkpKSkZCPjoSMRouLiYqKiomIiYqLi4uMjY6Pjo2MjY6OkJKVlpibnaCipairra+xs7W1uLq8vb7AwcLDxcbJy8zNzc7Oz9HS09TU1drb3d8g19jW2Nvb3d/h4uLi5Obn6uzs7e7t7/Hz8/J6enr0e3yEfQN+fn2Ef4WACoGCgYGCgYGBgICEf4R+BX18fPf1hPYJ9fX08/Ly8fDvhO1W6+rq6uno5uXk5OXk5OPi4d/d3NrZ19XT09HOzczKysnFxMXGxMPDwsLBwsLCxcbHyMnIxsXDwsHAv728urm3trSwsK+tq6urra6urayqqKWjoJ2alZGEjwqOjYuLiYiJiYiHhIYxhYSFhoaHh4eIiYqJiIiJiYqMjpCRk5WYm5yeoaOlpqiqrK2wsrS2tri5uru9vsDDxITFC8bIycnLy8vP0NLUJ9LT0tPX19rb3d7e3uDi4+bp6Orr6uvt7u7ueHh473l6fHt7fHx8e4R9hX4Kf4B/gICAf39/foR9hHwEe3p69IXzCfLx8O/v7+7t7ITqAeiE51nl4+Ph4eLi4eHg397c2tnX1dPR0dDNzMvJycjEw8TFw8PDwsHAwcLCxMXHyMnIxsXDwsHAv728urm4trSxsbCtq6urra6urayqqKWjoJ2ZlZCPj46OjYyKioSIAoeGhIUDhIOEhIUphoeHiIeHhoiIiYuMj4+Rk5aYmZudn6GipKeoqayusbO0tba3uLq7vcCGwgrExcXGxsbLy87QmoAEgYGBgKeB/4C8gAICAQAi3d3d4OHk5Obm5ujq6+3w8vP09vX1+Pr7/f//gIGA/v+AgIeBg4KEgwqEhIODg4KDgoKChIFKgoKBgICA/vz9/vz8/Pv7+/r4+fj29vTy8/Lx8PDw7+3t7Ovq6urp6OXk4+Li4eDf3NnY1dPR0M7My8jIyMbExMXGx8fJyszNzs6EzTfMysfIxsTEw8HAwL68u7m3t7a1tre3trW0srCtqqimo6CdmpiXl5aWlpWVlZOTkpKRkZGQkZGRhJI5kZGRj46PkJGUl5iZmpydn6OmqKqrrrCxsrS2uLm6vLy9vsHExsjJysvMz9DQz9HS0tLT1NbY2tzbI9LS0tXW2dnb29vd3+Dj5+nq6+zr6+3v8PH09Hp7evP0enp7hHwTe3x9fX1+fn9/f4B/gH9+f35/foR9Cn5+fXt7e/Tz9PWE8z3y8vLw8PDu7u3s7Ovq6enp6Obl5OPi4+Pj4t/d3Nvb2trZ1tPT0M7My8nH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u7m3uLe3trWzsrGwsLCurKyrqqimpKKhnpybnJybnJybm4SaIZmYlpaWmJmbm5yfn6Cgn5+ho6Slp6ipqqusrrCys7S1tYW2F7e5u7q7vL2+wMHCxMXDxcTExsfJysvNqoABgYuAAYH/gMqAAgIBABPZ2dvb3Nza2dvb3d/k5ujs7/DxhPMa8vHx8vP19vf4+fn49vf5/P39/f79/f38/PqE+zf8/f39/Pz7+vj39/f29/f28vX29fTz8/Lx7/Dw8PHy8vDu7e3s7Onq6efl5ODh4uPj5OXi3dvZhNgk1tXV09HQzc7OzcrIycnJyMXFyMnKzMvNzc7OzM3MyMjLzMnIhMcIxsTEw8LAv72FuyO6ubm5uLe3tra1tbOysK+urKmpqKemo6WmpqWlpqelpqalpoSoAaqFri6vr7CytLO0tbW3uLi5u72+v76+wcHCxMTDw8XGx8fHyMnKzM3Oz87P0dTX1tXXE9DQ0dLS0tHR09PV19ve4OTn6OqE6xTq6enp6+zt7vDw8O/u7vDz9PT09YX0GvLz8/Ly9PT08/P08/Lw7+/v7u7u7ens7ezshOuE6Rrq6+vq5+fn5ubi4+Lg3t3a29zc3d3e29fV04TSJNDPz87My8jJycjFxMXExMTAwMTExcjHycnKysnKycXFx8fFxITDCsLBwL++vbu5t7iEtye2tra1tLSzsrGxsK6tq6qopaWko6KgoqOjoaKio6GioaCho6OjpKaFqQ+qqqusr66vsLCys7O0tbeEuBu5uru8vLy7vL6+v7/AwcHDxcbHxsfJzM/Nzc5JzM3Oz9DQz8/R0dPU2dvd4eTl5+np6Ojn5ubn6Onr7O3t7ezr6+3w8fHx8vLx8vLx8PHx8O/x8fDw8PHx8O7t7ezr6+vq5unr6oTpe+jm5+fm6Onq6ebm5eTk4eHh393b2Nna2tvb29jV09HQ0NHQzs3OzMrKx8fIx8TExcTExMDAw8TFyMfJycrKycnIxcXIx8bFxMTDw8LBwL++vbu4t7e3tre2tba2tbS0s7Kxsa+urauqp6Wko6Khn6GioqGhoaKgoKCfoISiAaSEqC+nqKmpq62trq6vsLGys7S2tre2tri4ubq6ubi5uru7vL29vsDCw8PDxMbJzMrJyv+A/4CCgAICAQAT19bY2Nra2Nra2dna297h5Oru8YbzDPLz9PT19fb3+Pb3+IX6Hv38+vv6+vz8+/v6+Pn49/f19ff39vb19/Xz8vLy84TyYPPz8vHw8O/v7u3q6erq6ero5OPl5eTl5OPk4uLh393a2trW1tXU0c/Qzs7OzczLzMzLysfExcfHyMnKzM3LzM3NzcvLysnJyMbFxcXEw8PCwcDAv7++vLq7vLu8u7u6uoS4ULe1tbSzs7GwsK+urayurq+urq2tra6vrq2tra+xsrOzs7S1tLS1t7e4ubm4ubm3ubu9vr/BwsLDxMTDwcLDw8TExcjKy8zNzc3R09PT1NXVFM/Pz9DS0tDS0tHS0tLV2dzi5ujqh+sR7Ozt7e7u8O3u7/Hy8fLy9PSE8i/08/Lz8fDw8O/v7e3u7+7u7e7t6+rq6uzr6+vs7Ozr6+rq6enn5uPi5OPi4+Hd3IXead3d29za2dbV1NTR0NDPzMrKyMjJyMjGx8fGxcK/wMPDw8XGycnIyMnJycfHxsXFxMLCwcLAv7++vby8u7u6uLe4uLi5uLe3t7a1tbW0srGwr6+trKurqqmpqqurq6qpqaiqqqqpqamrrISuL7Cwr6+wsrOztLSzs7Sxs7a3uLi6u7u8vb27urq6u7u7vb/BwsPExMXJzMzLzc3OFczMzc7Pz87P0M/Q0NHT19nf4+Xn54boCunq6uvr6+zq6+yF74Dy8e/w8PDy8vDw7u3t7ezs6+vs7Ovr6uvq6ejo6Orp6enq6urp6Ofn5ubl5eHh4uLg4d/c29zd3Nzc29vZ2djX1NPT0s/Pz83LyMnHx8jHx8XGx8bFwr/AwsLDxcXIyMfHycnIxsbGxcXEwsLBwsC/v768vLy7urq4t7i4uLm4t0O3t7W1tLS0srGwr66trKuqqaioqqqrqqmoqKipqamoqKipq62ura2vr66ur7CysrOzsrKzsLG0tba3uLm5urq6ube3hLgPubu9v8DBwcLGycnJysvL/4D/gIKAAgIBAEHT0tLU19nZ2tza2t3c3uDg4uPn6uzt7u/x8fL09vb29fT2+Pr7/f37+vj2+Pf29vf3+Pn39/j39vb19vf39/X19IXzhPJM8fHw7+7s7Ozr6+rp6unn6efn6OXl5eTl5OPi4OHi397c2tnZ2dbU09PRz87MzM3NzczLysjHxsfHxsbIysnIysvLysrJyMjEyMrIx4TGB8XEw8LAwMCEvha/vr++vb29u7q5ubm4uLe3tbW0tLOzhLQbtbSzs7Sztba0s7O0tbe2t7e4uLm4ubm6urq7hbohu72+vsHCxMXFxcTExsbFxsXExcfGx8jIys/Q0tLS1NPSN83Ly83P0dHS09LS1dTW2NjZ2t7h5OXn6Onq6+zt7u7t7O7w8vP09fLx8O7w7+7u7/Dx8e/v7+6E7Qbu7u7t7eyH6xfs6+vr6unp5+bm5eXk4+Ph4OLg4eHe34TeP93b2dvb2djW1dTT09HPz87MysnHx8jIyMfHxcTCwcLCwcLExcXExcfHxsbEw8PAw8XDw8LBwsLBv7++vLy8uoe7Mrq6ure3tra1tbS0s7KxsLCvr7Cvr7CxsK+vsK+xsbCurq+xs7Kys7OztLS1tba1tbe2hLUhtre4t7q7vb69vr28vr6+vb28vb6+v7/AwsfJy8vMzczLOsrIyMrNz87Q0dDQ0tLU1dbW2Nve4eLj5Ofn6Orr7Ozq6uvt8PDx8vDv7ezu7ezs7e7v7uzr6+vq6uqE64LqiOlP6urp6Ofn5uTj4+Li4eDg397g39/g3d7e3d3c29rX2drX1tTT0tHR0M7OzcvIx8bGx8fHxsbEw8LBwcHAwcPFxMPFxsbFxcPDwr/DxcPCwoTBCL++vry8vLq6hrs9ubm5t7a2trW1tLOysbCvr66ur66vsLCwrq6vrrCwrq2trrCysbGysrO0s7OztLS0tbSztLOztba2tri5uoS7Frq8vLu7urm6u7q7vL2/xMbJycnKycj/gP+AgoACAgEAYtPT09TW2NjZ2tzd3+Dj4+To6ejn5unp6uzt7O7w8fHx8vP09PX39/f4+Pf29fX2+fn39vT08/Py8vLx8fHy8PLz8vHx7/Dv7+/u7u3t7O3s6+zs6+rp6eno6Ofn5+jm5OXhht8O3t3c3dvZ1tTT1NPS0dGE0D3PzcvJycjHx8jFw8fIycjIycrKy8rIyMfExsjHxsXFxMPEw8PDwsHBwcDAv7+/vr2+vry8vLu6ubm4t7e3hLYUt7e4ubi4ubm4uLm4uLi5urq7u7qGvCe5urq8vr+/vr/CwcLDwsLExsbGx8jHxsjJysnIyMfFxcfKzc/PztCE03bMzMzNz9HR0dPU1dbZ29vb3+Dg397g4eLl5uXn6erq6uvs7e3u7+/v8PDv7u3t7/Hw7+7s6+rq6erq6Onq6unq6+rq6ujp6Onp6efn5+bn5uXm5uXk4+Li4eHg4ODh4N7e29nY2NnY2djX1tfV1NHPzs/Ozc3MhcshycbExcPDwsPAvsLExcTDxcXFxsXDxMLAwsTDwsHBwL/AhL8Xvr29vLy7vLu7urq6ubi4t7e2tbW0tLSFsyK0tLW0tbW1tLS1tbS0tbW2t7a1tre3uLi3tba2t7m6ubi5hrscvb6+vr/AwL/AwsLCwcG/vr6/wsbIx8fJzM3NzDXKysnKzc/Pz9DS0tTW19jY293d29rd3t/i4+Pk5ufn5+jp6uvs7e3t7u7t6+vr7O/u7Ovp6IXnKebm5+fm6Ono5+fm5+bn5+fl5eTj5OLi4+Pj4uHg4N/f3t/f4N7d3drYhNcP2NfW1dbU0tDOzc7NzMvLhMohycfFxMTDwsLCv77Cw8TDw8TExcXEwsPCv8HDwsLBwL++hL8Yvr29vby8u7y7u7q6uri4t7e2tbS0s7OzhbJEs7O0s7S1tLO0tLSzs7S0tba1tLa2tre3trS1tba3uLi3uLq5ubq5ubq8vLy9vr28vr/AwL6+vbu7vL/ExsXFx8rLysr/gP+AgoACAgEAE9LS09PU1NTW19jZ3N7g4OPl5+iG6gLs7YTuMu/v8PDx8fDw8fHy8O/t7e7v7/Dv8PDv7+7v8O/u7O7u7Ozt7u7t7u/t7ezq6+vs6+rphOog6ejn5+bl5eXk49/e3eDf39/e3t3d3Nzc2dfW1dTT09KE0SDPzsvKysjIx8fIxsTFx8bGxsfIycfGxsfHxcPExsbFxITDCcTEw8LBwcLBwYTAUr++vr28vLq7vLu6ubq5urq6u7u8vL28vL28vL29vby8vb6/v72+vr67vL29vsDCxMPBwcPEwsTDxMbHx8jJyMnIyMnKysnKysrLy8zNzs3MzdGE0iHMzM3Nzs7Oz9DR0tXW2Njb3d/g4uPi4uPi5Obo6Ofn6OiH6Q3q6unn5eXn5+jp6OfohOcY6Ojn5efm5eXm6Ofm5+jn5ubk5OTm5eTihONG4uHg4N/f397d3drZ19rZ2dnX19bY1tfW09LR0M/Pzs3NzczMy8nGxsbExMPDxMLAwMLBwsLCxMTDwsLDw8HAwMLCwsC/v4TAAb+EvhC9vby8vL27u7q5uLi3t7i4h7YBt4e4C7e3ubi4t7e4ubm5hLgutre4uLm7vb29u7y9vbu9vL2/v7/AwcHCwcHBw8LCw8PCw8TFxsfGxcbKzMzMyxPJysvKy8zLzc7Pz9LU1dbY2tzehOAb4eDi5OXl5OTl5ufm5+fm5ubn5+Xj4uLk5OXmiuUt4+Tk4uLj5eXk5ebl5OTh4uLj4uHf4ODh4eDf3t7d3d3c3NvY19bZ2NfX1tbVhNYa09HRz8/Ozc3MzMvLysjFxcXExMPDw8K/wMKEwQ7Dw8LBwcLCwb/AwsLBwIS/CcC/v769vb69vYS8Bru6urm4uIS3Bba1trW1hLaGtwu2tri3t7a2t7i4uIS3FbW3t7e4ubu8u7m6u7u6u7q7vb29voW/hMAQwcHAwcLCxMXEwsPIysrJyf+A/4CCgAICAQBC0tPU1NXU1tbX2Nrc29re4eHk5efn6Ojo6uro6uvr6+zu7uzs6+vq6uvr7O3t7/Dw8fHw7+3t7u7u7e7t7u/t6uvrhO0D7u3shOuF6kHp6Obm5efm5ePh4uHg39/g397d3Nzb2tjX19fY2NjX1tXV1NLT0tLRz83MysvJy8rJxsbFx8jHyMXGx8fHxsbFw4fChcAKwcHBwMDAv8C/voS/B76+vby8vL2FvIK9hL8Fvr+/wMCJwTPAv7/AwMHBwsLDxMXFxMTGxMXFxcTFx8fJyMnKzMzLzc3MzMvLy8zOz9DPz9HR0dLR0dJJzM3Oz8/Oz9DR0dPV1dPX2drd3t/g4eHi5OPi4+Tl5eXm5uTk4+Pi4uPj5Obm5+np6unp5+bl5+fn5ufm5+jm5OXl5+fo5+jm5YTkEePj4uLj4eDf397f397c29zbhdo+2NfW1tbV09LS0tPT09LR0dHQzs/Pzs3LycjGx8XHxsXDwsHCw8LDwMHDw8TDwsHAvr+/vr++vr28vby9vb2HvIS7BLq6ubmKuAq5uru7urq6u7u7iLw0u7q6ubq6u7y8vL6+v7++vr++v7+/vr/AwcLBwsPExcXGxcXFxMTExcfIycnIysrLzMvMzCbLzMzNzczOzs/Q0dPT0tXY2Nvc3t7f3+Di4eDh4uPj4+Tk4uHg4ITfDODi4+Tm5ufn5uXk5ITlCObk5ebk4uPjhOUD5uXjhOJO4eDg3+De3dzc293d3NrZ2tnZ2NjZ2NbW1dXU09LR0dLS09PS0dHQz87Pzs7NysnIxsfFx8bEwsHAwsPCw8DBwsPDwsLBwL6/vr6/vr69hLyCvYS8D7u8vLq7u7u6urm5t7i3uIS3g7iEuge5ubq6uru7hLoxu7q6ubi4ubm6uru7vLy+vby8vby9vb28vb+/wcDAwsPDw8TEw8PCwsLExsbIx8fJyYTKAcv/gP+AgoACAgEAhNRI19fV1NTV1dfa2tvd3uDh5OPk5OTj5OPl5ufo6ers6ujn6Ofo6urr6+3t6+3t6uvr6+zs7e7u7vDv7+/w7+/u7u/u7ezs7OvrhOk+6Obl5ubk5OPi4uLf3+De3t/e3d3c29nZ2tjU09TV1NTS0tPU0tDS0tLR0NDPz87NzczKysnHyMnJyMfGxcaExA7CwsLBwsPCwsLBwMC/wYTAhL8Kvr/AwL++vr6/v4i+hMAnwcHBw8PCwsPEw8PEw8HBwcLDw8TDw8TExcXGxcXIx8nIx8fIyMnKhswVy8zMzc3Pz87Oz8/PztDR0dLS0tHSO87Ozs/Q0M/Nzs7O0NPT1NbX2Nrd293d3dzd3N7f3+Hi4+Xj4N/g3+Hi4+Tk5+bl5ubj4+Tk5eXm5+johOlP6unp6Ojp6Obm5eXk4+Li4uHg397e3t3c3Nvb29jY2dfX2djX19bV09PU0s/Pz9DQ0M7OztDOzM7Ozs3NzMzMysnJyMbGxcPDxcTDwsLBwoTAEb6+vr2+v76+vr28vLy9vLy8hLsJurq6u7u7urm5irqEu4O8hL2Fvh29vLy7vb29vr29vr6/v8C/v8LBwsLBwcLCw8TGxoTFFcTFxcbGyMnHx8jJyMjKy8zNzczMzTvNzczNz8/OzMzNzc/R0dPV1dfY29rb29va29rc3d3f4ODi4N3c3dze3+Dh4uTj4uTk4eLi4uTj5Obm5oTnEujn5+bm5+fl5OTj4uHg4N/f3oTcIdra2djY2NbW19XW19bW1dXU0tLT0c7Ozs/Ozs3Nzc/NzIXNE8zMzMrJysjGxsXDw8XEw8LBwcGEwBe+vr69vr++vb29vLu7vLy7u7u6u7q6uYS6Arm4i7kku7u6u7y7u729vLu9vb28vby7u7q7vLy9vLy8vb6+vr2+wMDBhMAFwcHDxMSEwxXCw8PExMbHxcXHx8bGyMrKy8zLysz/gP+AgoACAgEAC9PU1NXV2NnY1tbYhNmA293e3+Df4N/g4N/g4uTl4+Lh4eLl5ufm5+fn6Onp6ejp6Ojp6urq6+vs6uzr7Ovs6+vq7Ovq6Onp6Obo5+fm5eTl4+Lj5ePi4eHg4N/d3+Df3t7c29nZ2NfY2NfV1NXU0tHS0tHRz87NzM3My8vLzMvLzMrIyMfIx8bGxsTFxMMNxMPCwsPDwsPCw8LDwoXBC8DAvr6+vb6/vr69hLwPvb29vr/AwcHBwMHBwcLDhcQFw8XFxcSExQXGxcbGxoTHAsbHhcgNx8jJycnKysvLysrHx4TIEsnLzMzLzM3Oz8/N0NLS09LT0xTOzs7Pz9LS0tDQ0dLT0tLU1tfY2YTYRdnY2dvd3tzb2trb3t/f3+Dh4OLi4+Pi4uHi4+Tk5OXl5eTl5OXl5uXk5OXk4+Li4uHf4eDg397d3tzb293c29ra2dnX1oTYDtfV1NPT0tHS0tHQ0NDPhs0gysnIx8jIxsfHyMjHx8XExMLDw8LBwb/Av76/vr2+vr+GvoK9hLwDu7u6hLkRurm5uLi3uLi4ubm6ury8vL2EvBu9vr6/vr+/vr/AwL/Av7+/wL/AwcDAwcHBwMGFwh3BwsPDw8TExMXEw8DAwcHBwMHDxMXExMbHyMnHy4XNAc4LzM3Nzs7Q0dDPztCE0U7S1NXW19bX1tfX1tfZ29zZ2djX2dvc3dze3t7f4ODg3+Df4OHi4uLj4+Pi4+Li4uPi4uLj4uHg4eDf3d/f3t3c29za2dnb2djY2NfX1dWE1gbV09LR0tGE0ITPDczMzM3NzMnIx8bHx8aGxxTFxMTCw8PBwcG/v7++v769vb6+vYW+Ar28hLuCuoW4Brm4t7e3toS3B7i5ubu7u7yEuwO8vr2EvgG9hL4Bv4W+Bb+/vr/AhL+HwCHBwcHCwsPDwsG+vb6+vr2+wcLCwcLDxMXGxcjLy8zLzM3/gP+AgoACAgEAN9XW1tfZ2NnZ2NfW2NjZ2NjZ29vd3Nzb29vc3d7f3uDh4ePh4eHi5OPl5ubm5OPl5ubl5+jo6euF6jzo6Onp5+jn5ubn5+Xm5+fl5uPj4+Hj5OLh4uHi4N/e3N3c3dzc3Nva29rZ2NfV1dTU0tLR0tLRz87My8uGygzLysrJycfHxcTExMWFxA/DwsHCw8LDxMTFxMTDw8KEwQPAv76Fvwq+vby9vry8uru/hcBHwcHCwsPDwsPCwsTExMXEw8LDxcXGxsjJycjHyMbHycnIycnJyMfIyMfHx8nKycbEw8bHx8jJyMfIyMbIycrMzs/Q0dPT1NQ4z9DQ0dLR0tLR0dDR0tLS0dLU1NbV1dTT1NXV19fW2Nna29na2tvd3d7f39/d3d7g4N7g4eHi5eSE4wbh4eLh4OGF4C/e3+Dg3t/d3N3b3d3b2tvb29nY19bW1dfV1tbV1NXU09LR0NDP0M7NzM3NzMrJx4XGIsXFxsbFxcXEw8LAv7/AwL+/wL+/v769vb69v7+/wMC/vr6FvBK7urm6urm5urm4t7i4uLe2t7qFux68vLy9vr29vr29v7+/wL++vb2/v7/AwsPDwsLCwcKGwyPCwcLBwcDBwsLBv728v7+/wMHAv8C/vsDBwsXHyMnKzM3OzjfNzs7P0dDR0dDPz9DR0dDQ0dLS1NPT0tHS0tPV1dTW19fZ19jY2dvb3N3d3dvb3N7e3N7f3+DjhOE74N/f4N/e39/e3t/e3d7e3tzd29vb2dvb2djZ2dnX1dXU1NPV09TU09LU09HR0M/Pzs7NzMvMzMvJyMeGxQrExcbExcTDwsLAhL8Zvr+/v76+vby8vby9vr6/vr69vLu6uru6uYe4Cre3tre3t7a1trmGuh+7u7y9vLy9vLy+vr6/vr28vL6+vr/BwsLBwMC/wMHChMEBwIS/Hr6+wMC/vbq5vLy8vb29vL28ur2+v8LExcbHysvMzP+A/4CCgAICAQBszc7R0tLT09PS0tPU1dbW19fX2NjX2Nja2tvb2tzb297f39/d3t/g39zc4OHi4eLj5eXm5eXi4uLg4eLi4uHi4uHh4+Hh4uHh4N/e39/d39/f4eHg4N7d3dzc29zb3Nra2dnZ19bW1tTU0tHQhdEIz87Pzs3MzMyEyxXKy8rJx8fHxsfGxcPDw8TDwcC/wcGEwIPBhMAMwcLBwsHAwcHBwL+/h8AVv8DBwcDBwsLDwsPCw8PDxMTDxMXGhMcBxoXHh8gZx8jHx8bGxcPEw8PExsfIycvMysnIyMfHxoTFDcTFxsfJyszNzc7NzM05xcfKy8zMzc3Ly83Nz8/P0NHQ0dHQ0dHT09TU09TU1NbX2NjW19fZ2NbW2drb2tzc397f3t7c29vahNsv2tvb29rc2trb29ra2djZ2dfZ2dnb29rZ2NfW1tbV1tXW1NXU09PS0dHR0M/OzMuFzAjKycnJyMfHx4TGC8XGxcTCw8LBwsLBhb8+vbu7vby7vLu8vby9vLu6u7y9u7y8u7y7u7u6uru7uru6u7u6u7y8u7y9vb69vr2+vr6/v76/wMHCwsHBwcKEwYfChMEmwMC/vb69vb6/wMHCxMXDwsDBwL++vb29vLy9v7/BwsTExcbFxMVewsTHyMnKysrJyMrKzM3Oz87Oz8/Oz8/R0dLS0dLS0tTW1tbV1dXX19TU19jZ2drb3dzd3Nza2dnY2dnZ2tja2trZ29nZ2tnZ2NfW2NfV19jY2dnY19bV1NTU09TU1YTTJtLR0NDQz87My8rLy8vKysjIyMfHxsbFxcXExcTFxMPBwsHBwsHAhb4IvLq6u7u6u7qEuwi6urm6uru6u4a6Hbm5urq5urm6ubm6u7q6u7y7vLy8u729vb6+vb6+hsABwYTAIcHBwMDBwcHAwL+/vr69u7y7u7y9vr/AwcLAv76+vby7uYW6C7y8vr/BwsLDwsHC/4D/gIKAAgIBAATNzc7Qh9Eq0tLU09PU1NTV1tfX2NfW19jY2drb29zc3N3d3t3d3dzc3N7f393d3NvbhN0S29vc3NzZ2tvb297d3N3b3dzchNsg2dnb2tnZ2trb2tva29vZ2tnY2NXU09HS0dDPz87Pzs6EzzDNzczNzczLy8vMzM3My8vJx8fGxsXExMXFw8PExMPDwsHAwcHCwsLDwsPCw8LCwsGIwITBCMLCw8PDxMTFhMaCx4XIA8nIyIXJAcqHyRzGw8PEw8XFxMXFxsbHxsfKysvMzc3Nz8/Ny8zLisoCy8yEywLMzQTFxsbJh8oCy8yFzQPOz8+E0AvP0NHR0tPU1NTV1YbWINXU1dfX19bV1NTU1dbW1dTU1dXV0tPU1NTX1tbW1dbWhdVE1NTV1dPT1NTV1NbV1dXT1NTT0tDOzs3NzMvKysnKycnKycrJyMjHx8jHxsbGx8fIyMfGxcPCwsLBwMDBwb+/wMC/v72EvAe9vr2+vb6+hL0BvIa7Ary7hLwOvb2+vr6/v7/AwMHAwcGEwoTDBMTDw8OGxB/Dw8PAvr2+vb+/vr++v7/Av8HDw8TFxcbGyMjGxMTDh8IFwcHCw8SFwwHFDcLDw8bIx8jHyMjIycqGyw3Nzc7Oz87Nzs/Q0NHShNOG1CvT09PV1dbU1NPS09TV1NTS09TU1NHS09PT1tXV1NTV1NTT09TU09PU09LShNMc1NPU09LT0tHRz87Ny8zLysnIyMnIyMnIycjGx4TGIcTFxcbGx8bFxcTDwsHBwL+/wMC/v7/Avr69vLu7u7y9vIW9BLy8vLuJugW7u7u8u4S9gr6Ev4LAhMEtwsLCwcPCw8LDw8LDwsLCwcG/vLu8u729vL28vr2/vr/BwcLDw8TExsXDwcLBhcCEvwnAwMHBwMDAwcL/gP+AgoACAgEAEc3Nzs7Pz8/Qz8/Ozs7P0NHQhNET0tTW1dbX2NjZ2tra3Nvc29za2ojZL9ra2tnY2NnY2NfY19fX2NfX2dnZ2tnX2NnZ2djY2dfY2NjX19bX1tbW1dTV1NPUhNEM0NDQz8/Oz9DO0NDQhs8Zzs3NzMzKzMzMy8rKycnIycjHyMfGxsbExYTGBMXExMSFxRfExMXEw8LCw8TDwsLDw8LAwcPDwsTExIXFF8bGx8fHyMjIycnIyMjHxsfIx8nJysnIh8kRyMjJyMjIycjKy8zMzc3Nzs6Ez4PQhtEJ0M/Pzs7NzMzMhM0IxcXGxsjHyMiFxwXIycrJyoTLC83Pzs/Q0dHS0tLThdQD09LRidIF09LR0dKE0TTQ0dDR0dDS0tLU0tHR09PT0tPT0tPT09LS0dHQ0dHQz8/Pzs/NzM3My8vLysnJysvKy8vLhsoGycjIyMfFhMcPxsbFxMTEw8PDwsLCwb/AhMEDwL+/icAUv769vb6/vr69vr29u7y+vr2/v7+FwAXBwcHCwoXDEMLCwsHBwsLCw8PExMPDw8SEwxPCwcLBwcHCwsPExcXGxsbHyMjIhckLysrKycrKycjIx8aIxQjDw8PExsXFxoXFFMbHx8fIycnJyszNzc7Oz8/Q0dHRhdIN0dHQ0dDQ0NHQ0NHR0YXQhs8k0NDP0NHR0tHQ0NHS0tHS0tHS0tHR0M/Qz8/Pzs3Ozs3Oy8vLhMoJycnIycrJysrKhskiyMfGxsbExsfGxsXFxMPDxMPDwsLBwcG/wMDBwcHAv76/wIe/FL69vLy9vby9vL28vLq7vL29vr6+hL8YvsDAwMHBwcLBwsLBwcHAwMHBwMLCw8LBhcISwcHAv8C/v7/AwMHCw8PExMTFhMYXx8jHx8jIyMfIx8fGxsTEw8PCwsPDw8L/gP+AgoACAgEACNLR0tLS09TThNQe09LT0tHS0tLR0dHT0tLS09TU1dbV1tbV1dTU09PTh9IT0dHS09TU09LR0tPT09LS09PS0ofTBNLQ0NCEzwXQ0dDPz4bQBdHR0dLRhNIB04TRB9LR0NDR0NCFzx7Ozs7NzMzMy8rKy8rKysnJysnJysrJyMnJyMfIyciFx4TII8fGxsfGx8fGxsfHxsfGx8fGxcbFxcfGx8jHyMnKy8rKycnJhMqCy4TMCsrMzc3MzMvLy82FzAnNzc/OzMzOzcyEzoPPhM4Rz9DQ0NHR0dDR0tHS09LT0tIMy8vMzMvNzs3Nzs7NhMwey8vMzMvLy83My8zNzs3Oz87Pz8/Ozs3Mzc3My8zMhssQzM3NzcvMzMzNzczMzc3LzIXNDM7NzcrKysnJycrKy4TKhsuCzIbNBs7NzM3NzYbMhcqEyRHIx8fGxcTGxcbFxMTFxMTFxYTEBMPCw8OGwhvDw8LCwsHBwsHCwcHBwsHBwsHCwcG/wMDAwcGEwgjDxMXExMPDw4TEgsWExgrExsfHxsbFxcXHhcYfx8fJyMbGyMfGx8jIx8jIyMfIx8fJysrJysvKysrLy4XMAcsGysnKysrLhswLy8rLy8nKysrJycmEygPLzMuEzQrOzc3My8rLy8rJhcoKycnJysvMy8rKyoTLBcrLy8rKhcsDzMzLhMgFx8jIyMmEyITJEMrKy8vMy8vMzMzNzMvLzMyEy4LKhckIyMjIx8fGxsWExBHFxMPDxMPDxMTDwsPCwsHBwoTBAcCFwYTAAb+IwDi/wMC/vr+/v8DAwMHAwMHDw8LCwsHBwsPCwsTExcTFxMLExcbExMPDw8XExcXFxMXFxsbExMbFxIvGEcfIyMfIycnIycnJysvLy8rK/4D/gIKAAgIBAITQB9HR0dLS0tGF0gjR0dHS0tHR0Y3SDNHR0tLS0dHQz9DQ0ITOg8+E0AvPz9DQ0NHR0dDPz4XQg8+E0AbR0dHQ0NCE0QvQ0dHR0NDQ0dHR0IjRhNCGz4fOg82HzgHNhMyCzYvMgsuGyoTJAcqEy4TMF8vMy8zMzMvKy8zMy8rKyszJx8nMzM3NhMwKzc7Ozs/Pzs7OzYTOC8/Ozc3Ozs7Nzs3Nhc4Izc3Nzs7NzcyEzQnMzc3Oz8/P0M8IycnKysrLy8yEy4PMicuJzAHLhMwHy8zMzMvLyoTJBcjHx8fIhMkGysnIycnJhMoCyciEyQnKysnIyMnJycqEywnKysvMzMzLy8yJy4TMA8vMzITLg8qKyYjICMnIx8bGxsfIhscWxsbGx8bGxsXExMXFxcTExMPExMXFxYnGIcfGxcXFxsbFxcTFxcPCw8bHyMfGx8bHx8jIyMnJyMjIx4XIhMeCyITHhciHxwPGx8eExgfHyMjIycnJEMfHyMjJycnKysnKysrLysqEyQbKycnJysuKyoLJhMoDycnIhMcKxsXGxsbHyMfHyIXHBMjJyMiGxwnIyMfGx8fHyMiEyQzIyMnKysrJycrKycmEygXJysrKy4XKhMmHyATHyMjIi8cHxsXExcXGxorFg8SGw4XCRcPEw8TExcTFxMTExcXFxMPDxMTEw8LDxMLAwcTFxsXFxcTFxcbGxsfHxsbGxcbGxsfHxsXFxcbGxcbFxcbGx8bGxcXFxofFBsTFxcXGxoTH/4D/gIKAAgIBAAPOz8+G0IbPitABz4TQhNEL0NHQ0NDR0NDQz8+K0IbPBM7Oz8+F0IXRitAG0dHQ0NDRjtAF0dHS0dGL0IPRhtCFz4LQhM+FzoTNhc6GzYLOiM2IzI7NhM6Cz4fOj82FzojNAszNicwHzc3Nzs7OzYTOgsiRyYbKgsmOyovJgsqGyRLIyMjJysrJycnKysvLy8rKycmUygHJhMqFywPMy8uKyoPLhMqGyYLKhcmFyIXHhciFx4LIiceIxoTHg8aGx4TIgsmIyIjHgsiEx4TIiMeHxgHFhMaIx4PIAcaMx4LIhMeFyIPHisgFycnIyMiLxwHIh8cDxsfHhsiFyQLIx4nIAcmEyAbJyMjJycmEyIXJBcrKysnJisiDyYTIAceIyIXHi8YBx5DGisWDxoXFBMbFxcWExoPHicaExZHGhsWLxIXFhcb/gP+AgoA=");var bs=xi(zu());var Cu=xi(Pi(),1),mi={thetaMin:-1.02,thetaMax:1.02,yMin:-.68,yMax:.68};function bo(i={}){let e=(t,n)=>Number.isFinite(Number(t))?Number(t):n;return{yaw:((e(i.yaw,.28)+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,pitch:po.clamp(e(i.pitch,.28),-.65,1.15),distance:po.clamp(e(i.distance,4.8),3.7,8)}}function Tx(){let i=[],e=[],t=[],n=[];for(let o=0;o<=12;o++){let l=o/12,c=mi.yMin+l*(mi.yMax-mi.yMin),u=.97+(c+.9)/1.83*.03+.003;for(let g=0;g<=64;g++){let f=g/64,m=mi.thetaMin+f*(mi.thetaMax-mi.thetaMin);if(i.push(Math.sin(m)*u,c,Math.cos(m)*u),t.push(Math.sin(m),-.03/1.83,Math.cos(m)),e.push(f,l),o<12&&g<64){let h=o*65+g;n.push(h,h+1,h+64+1,h+1,h+64+2,h+64+1)}}}let a=new rt;return a.setAttribute("position",new Be(i,3)),a.setAttribute("normal",new Be(t,3)),a.setAttribute("uv",new Be(e,2)),a.setIndex(n),a}function Ru(){let i=new Et;i.name="procedural-enamel-cup-v1";let e=new It({color:"#f5f1e6",roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,vertexColors:!0}),t=new It({color:"#163d51",roughness:.26,metalness:0,ior:1.5,clearcoat:.54,clearcoatRoughness:.17}),n=Cu.default.data.cup.profile.map(([h,x])=>new ce(h,x)),s=new Xe(new Ti(n,96),e);s.name="hollow-body";let r=[];for(let h=0;h<s.geometry.attributes.position.count;h++){let x=h%n.length,p=s.geometry.attributes.position.getY(h),d=x>=9?.83+.14*(p+.84)/1.82:1;r.push(d,d,d)}s.geometry.setAttribute("color",new Be(r,3)),i.add(s);let a=new Xe(new Yn(.963,.041,16,128),t);a.rotation.x=Math.PI/2,a.position.y=.98,a.name="rolled-blue-rim",i.add(a);let o=new Xe(new Yn(.905,.02,12,96),e);o.rotation.x=Math.PI/2,o.position.y=-.995,o.name="base-rim",i.add(o);let l=new Ht([[.974,.62,0],[1.14,.68,0],[1.39,.64,0],[1.54,.45,0],[1.57,.2,0],[1.47,-.08,0],[1.26,-.3,0],[.972,-.46,0]].map(h=>new F(...h))),c=new sn(l,64,1,16,!1),u=c.attributes.position;for(let h=0;h<=64;h++){let x=h/64,p=l.getPointAt(x),d=l.getTangentAt(x),b=new F(-d.y,d.x,0),T=Math.exp(-Math.min(x,1-x)*14),y=.13+.042*T,w=.047-.014*T,v=E=>Math.sign(E)*Math.pow(Math.abs(E),.68);for(let E=0;E<=16;E++){let _=E*Math.PI/8,M=p.clone().addScaledVector(b,-v(Math.cos(_))*w);M.z+=v(Math.sin(_))*y,u.setXYZ(h*17+E,M.x,M.y,M.z)}}c.computeVertexNormals();let g=new Xe(c,e);g.name="handle-unprinted",i.add(g);for(let h of[.62,-.46]){let x=new Xe(new Qs(1,16,12),e);x.position.set(.976,h,0),x.scale.set(.036,.105,.185),x.name="enamel-handle-joint",i.add(x)}let f=new It({color:"#ffffff",transparent:!0,roughness:.23,metalness:0,clearcoat:1,clearcoatRoughness:.12,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Ct}),m=new Xe(Tx(),f);return m.name="front-print-region",m.renderOrder=1,i.add(m),i.traverse(h=>{h.isMesh&&h.material===e&&!h.geometry.attributes.color&&h.geometry.setAttribute("color",new Be(new Float32Array(h.geometry.attributes.position.count*3).fill(1),3))}),{group:i,body:s,handle:g,print:m,glaze:e,rim:t}}var Ss=xi(Pi(),1);var Du=xi(Pi(),1),Nu=(i,e,t)=>new F(i,e,t),Iu=i=>i*i;function Pu(i,e=1,t=48,n=t){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let u=i(c/t*2-1,l/n*2-1);if(s.push(u.x,u.y,u.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let g=l*(t+1)+c,f=g+1,m=g+t+1,h=m+1;a.push(...e===1?[g,f,m,f,h,m]:[g,m,f,f,m,h])}}let o=new rt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function wo(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<40;s++){let r=(s/40*2-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function To(i,e,t,n=!1){let s=new Ht(i,!1,"centripetal");return s.closed=n,new Xe(new sn(s,Math.max(24,i.length*2),e,6,n),t)}function Lu(i,e,t,n,s){let r=Math.pow(Math.max(0,(1-i*i)*(1-e*e)),.43),a=i*t/2*(1-.12*(1-e*e)*Math.pow(Math.abs(i),6)),o=e*n/2*(1-.1*(1-i*i)*Math.pow(Math.abs(e),6)),l=(Math.cos(i*21+e*3)*Math.exp(-Iu((Math.abs(e)-.83)*12))+Math.cos(e*19-i*2)*Math.exp(-Iu((Math.abs(i)-.83)*12)))*.01*r;return Nu(a,o,.012+s/2*r+l)}function uc(i,e,t){let n,s;if(e<=.62)n=e*1.6,s=.04*Math.sin(i*4+e*2)+.022*Math.cos(e*8-i*3);else if(e<.8){let a=(e-.62)/.18*Math.PI;n=.992+.15*Math.sin(a),s=.15*(1-Math.cos(a))}else n=.992-(e-.8)*2.45,s=.3+.035*Math.sin(i*5);let r=Math.pow(Math.max(0,(Math.abs(i)-.72)/.28),2);return s-=r*.2+Math.pow(Math.max(0,(-e-.45)/.55),2)*.38,n+=.025*Math.sin(i*5)*Math.pow(Math.abs(e),3),s+=t*.045,Nu(i*1.37*(1-.025*Math.cos(e*4)),n,s)}function Uu(i){let e=Du.default.get(i),[t,n,s]=e.size,r=new Et,a=[],o=[];r.name="sewn-"+i+"-v2";let l=new It({color:"#f5f1e6",roughness:.94,metalness:0,clearcoat:0,sheen:.28,sheenRoughness:.85,sheenColor:"#fff",side:Bt,shadowSide:Ct}),c=l.clone();c.color.multiplyScalar(.88);let g=(p=>{let d=l.clone();return d.color.multiplyScalar(p),o.push({material:d,factor:p}),d})(.78),f=(p,d)=>(d&&(p.name=d),r.add(p),p);function m(p,d,b,T,y=1){let w=f(new Xe(Pu(d,y,64),l.clone()),i+"-"+p);return w.userData.fabricFace=p,w.userData.fabricSize=[b,T],a.push(w),w}function h(p,d,b=!1,T=l){for(let y of b?[0,1,3]:[0,1,2,3]){let w=(v,E)=>{let _=y===0?p(v,-1):y===1?p(1,v):y===2?p(-v,1):p(-1,-v),M=y===0?d(v,-1):y===1?d(1,v):y===2?d(-v,1):d(-1,-v);return _.lerp(M,(E+1)/2)};f(new Xe(Pu(w,1,48,8),T),b?"tote-gusset-"+y:"sewn-gusset-"+y)}}if(i==="cushion"||i==="pillow"){let p=(b,T)=>Lu(b,T,t,n,s),d=(b,T)=>{let y=p(b,T);return y.z=-y.z,y};m("front",p,t,n),m("back",d,t,n,-1),h(p,d),f(To(wo((b,T)=>{let y=p(b,T);return y.z=0,y}),i==="cushion"?.011:.008,c,!0),"stitched-perimeter");for(let b of[-1,1])f(To(wo((T,y)=>{let w=Lu(T,y,t,n,s);return w.z*=b,w},.985),.0035,g,!0),"fine-seam");i==="pillow"?(r.rotation.x=-.82,r.rotation.z=-.06):r.rotation.z=-.065}if(i==="duvet"){let p=(b,T)=>uc(b,T,1),d=(b,T)=>uc(b,T,-1);m("front",p,t,n),m("back",d,t,n,-1),h(p,d),f(To(wo((b,T)=>uc(b,T,0)),.008,c,!0),"bound-duvet-edge"),f(To(wo(p,.985),.003,g,!0),"duvet-hem-stitch"),r.rotation.x=-1.04,r.rotation.z=-.045}let x=f(new Xe(new rt,l));return x.visible=!1,{type:i,group:r,body:a[0],print:x,glaze:l,surfaces:a,trim:c,tints:o,floor:new $t().setFromObject(r).min.y}}var Ao=(i,e,t)=>new F(i,e,t),dc=i=>Math.max(0,Math.min(1,i)),zo=(i,e,t=0)=>new ce(-(.35+t)*Math.cos(Math.PI*i),1.51-((e===1?.43:.09)+t)*Math.sin(Math.PI*i));function Fu(i){let e=new qn,t=zo(0,i);e.moveTo(t.x,t.y);for(let n=1;n<=40;n++){let s=zo(n/40,i);e.lineTo(s.x,s.y)}return e.bezierCurveTo(.53,1.48,.72,1.42,.85,1.33),e.bezierCurveTo(1.02,1.21,1.13,.96,1.23,.78),e.lineTo(1.47,.36),e.lineTo(1.08,.105),e.quadraticCurveTo(1.015,.18,.965,.3),e.bezierCurveTo(.965,-.22,.975,-.95,.99,-1.49),e.quadraticCurveTo(.1,-1.52,-.99,-1.49),e.bezierCurveTo(-.975,-.95,-.965,-.22,-.965,.3),e.quadraticCurveTo(-1.015,.18,-1.08,.105),e.lineTo(-1.47,.36),e.lineTo(-1.23,.78),e.bezierCurveTo(-1.13,.96,-1.02,1.21,-.85,1.33),e.bezierCurveTo(-.72,1.42,-.53,1.48,-.35,1.51),e.closePath(),e}function Li(i,e,t){let n=.965+.025*dc(-e/1.49),s=Math.pow(Math.max(0,1-(i/n)**2),.6),r=.047*Math.exp(-Math.pow((Math.abs(i)-1.17)/.28,2))*dc((e-.05)/.35),a=.002+.11*s+r,o=dc((1.5-e)/1.8),l=.012*Math.sin(i*9.5+e*.65)*o+.005*Math.sin(i*17-e*1.1)*o*o,c=.006*Math.sin(e*8+Math.abs(i)*5)*Math.exp(-Math.pow((Math.abs(i)-.9)/.15,2))*Math.exp(-Math.pow((e-.35)/.4,2));return t*a+l+c}function Eo(i,e,t,n=!1){return new Xe(new sn(new Ht(i,n,"centripetal"),Math.max(48,i.length*2),e,5,n),t)}function Ax(i){let e=i.getPoints(10),t=[];for(let n=0;n<e.length-1;n++){let s=e[n],r=e[n+1],a=Math.ceil(s.distanceTo(r)/.025);for(let o=0;o<a;o++)t.push(s.clone().lerp(r,o/a))}return t}function Ou({group:i,glaze:e,trim:t,stitch:n,add:s,face:r}){i.name="studio-daily-tshirt-v2";for(let u of[1,-1]){let g=Fu(u),f=u===1?"front":"back";r(f,g,2.94,3.1,(y,w)=>Li(y,w,u),u,[.5,.55,.58,.7],4);let m=[],h=[],x=[],p=64;for(let y=0;y<=p;y++)for(let w of[0,.055]){let v=zo(y/p,u,w);if(m.push(v.x,v.y,Li(v.x,v.y,u)+u*.0035),h.push(y/p,w/.055),y<p&&w===0){let E=y*2;x.push(E,E+1,E+2,E+1,E+3,E+2)}}let d=new rt;d.setAttribute("position",new Be(m,3)),d.setAttribute("uv",new Be(h,2)),d.setIndex(x),d.computeVertexNormals(),s(d,t,"tshirt-"+f+"-rib-neck");let b=Array.from({length:65},(y,w)=>{let v=zo(w/64,u,.052);return Ao(v.x,v.y,Li(v.x,v.y,u)+u*.006)});i.add(Eo(b,.0015,n));let T=Array.from({length:65},(y,w)=>{let v=-.985+w/64*1.97,E=-1.455-.012*(1-v*v);return Ao(v,E,Li(v,E,u)+u*.003)});i.add(Eo(T,.0018,n));for(let y of[-1,1]){let w=Array.from({length:25},(E,_)=>{let M=_/24,z=y*(1.44-.36*M),L=.4-.24*M;return Ao(z,L,Li(z,L,u)+u*.003)});i.add(Eo(w,.0018,n));let v=Array.from({length:41},(E,_)=>{let M=_/40,z=y*(.84+.12*M+.022*Math.sin(M*Math.PI)),L=1.33-1.02*M;return Ao(z,L,Li(z,L,u)+u*.003)});i.add(Eo(v,.0016,t))}}let a=Ax(Fu(1)),o=[],l=[];for(let u=0;u<a.length;u++){let g=a[u],f=a[(u+1)%a.length],m=g.clone().add(f).multiplyScalar(.5),h=Math.abs(m.x)>1.07&&m.y<.38&&Math.abs(f.x-g.x)>Math.abs(f.y-g.y)*1.25;if(Math.abs(m.x)<.351&&m.y>1.05||m.y<-1.48||h)continue;let x=o.length/3;for(let[p,d]of[[g,1],[f,1],[g,-1],[f,-1]])o.push(p.x,p.y,Li(p.x,p.y,d));l.push(x,x+1,x+2,x+1,x+3,x+2)}let c=new rt;c.setAttribute("position",new Be(o,3)),c.setIndex(l),c.computeVertexNormals(),s(c,e,"tshirt-sewn-shoulders-and-sides"),i.rotation.z=0}function Bu(i,e=1e-4){e=Math.max(e,Number.EPSILON);let t={},n=i.getIndex(),s=i.getAttribute("position"),r=n?n.count:s.count,a=0,o=Object.keys(i.attributes),l={},c={},u=[],g=["getX","getY","getZ","getW"],f=["setX","setY","setZ","setW"];for(let b=0,T=o.length;b<T;b++){let y=o[b],w=i.attributes[y];l[y]=new w.constructor(new w.array.constructor(w.count*w.itemSize),w.itemSize,w.normalized);let v=i.morphAttributes[y];v&&(c[y]||(c[y]=[]),v.forEach((E,_)=>{let M=new E.array.constructor(E.count*E.itemSize);c[y][_]=new E.constructor(M,E.itemSize,E.normalized)}))}let m=e*.5,h=Math.log10(1/e),x=Math.pow(10,h),p=m*x;for(let b=0;b<r;b++){let T=n?n.getX(b):b,y="";for(let w=0,v=o.length;w<v;w++){let E=o[w],_=i.getAttribute(E),M=_.itemSize;for(let z=0;z<M;z++)y+=`${Math.trunc(_[g[z]](T)*x+p)},`}if(y in t)u.push(t[y]);else{for(let w=0,v=o.length;w<v;w++){let E=o[w],_=i.getAttribute(E),M=i.morphAttributes[E],z=_.itemSize,L=l[E],P=c[E];for(let D=0;D<z;D++){let I=g[D],N=f[D];if(L[N](a,_[I](T)),M)for(let k=0,H=M.length;k<H;k++)P[k][N](a,M[k][I](T))}}t[y]=a,u.push(a),a++}}let d=i.clone();for(let b in i.attributes){let T=l[b];if(d.setAttribute(b,new T.constructor(T.array.slice(0,a*T.itemSize),T.itemSize,T.normalized)),b in c)for(let y=0;y<c[b].length;y++){let w=c[b][y];d.morphAttributes[b][y]=new w.constructor(w.array.slice(0,a*w.itemSize),w.itemSize,w.normalized)}}return d.setIndex(u),d}var bn=(i,e,t)=>new F(i,e,t);function qt(i,e,t,n,s){let r=new qn;return r.moveTo(i+s,e),r.lineTo(i+t-s,e),r.quadraticCurveTo(i+t,e,i+t,e+s),r.lineTo(i+t,e+n-s),r.quadraticCurveTo(i+t,e+n,i+t-s,e+n),r.lineTo(i+s,e+n),r.quadraticCurveTo(i,e+n,i,e+n-s),r.lineTo(i,e+s),r.quadraticCurveTo(i,e,i+s,e),r}function fc(i,e,t,n=!1){return new Xe(new sn(new Ht(i,n,"centripetal"),Math.max(40,i.length*2),e,6,n),t)}function Ex(i,e,t,n,s=1,r=0){let a=new js(i,10).toNonIndexed();for(let m=0;m<r;m++){let h=a.attributes.position,x=[];for(let p=0;p<h.count;p+=3){let d=[0,1,2].map(T=>bn(h.getX(p+T),h.getY(p+T),0)),b=d.map((T,y)=>T.clone().add(d[(y+1)%3]).multiplyScalar(.5));for(let T of[d[0],b[0],b[2],b[0],d[1],b[1],b[2],b[1],d[2],b[0],b[1],b[2]])x.push(T.x,T.y,0)}a.dispose(),a=new rt,a.setAttribute("position",new Be(x,3))}let o=a.attributes.position,l=[];for(let m=0;m<o.count;m++){let h=o.getX(m),x=o.getY(m);o.setZ(m,n(h,x)),l.push(Math.max(0,Math.min(1,.5+s*h/e)),Math.max(0,Math.min(1,.5+x/t)))}a.setAttribute("uv",new Be(l,2));let c=Bu(a);if(a.dispose(),c.computeVertexNormals(),s<0){let m=c.index;for(let h=0;h<m.count;h+=3){let x=m.getX(h+1);m.setX(h+1,m.getX(h+2)),m.setX(h+2,x)}}let u=c.attributes.normal,g=c.attributes.position,f=5e-4;for(let m=0;m<g.count;m++){let h=g.getX(m),x=g.getY(m),p=bn(-(n(h+f,x)-n(h-f,x))/(2*f),-(n(h,x+f)-n(h,x-f))/(2*f),1).normalize().multiplyScalar(s);u.setXYZ(m,p.x,p.y,p.z)}return c}function ku(i){let e=new Et,t=[],n=[];e.name="studio-daily-"+i+"-v1";let s=i==="tshirt",r=new It({color:"#f5f1e6",roughness:s?.94:i==="notebook"?.83:.64,metalness:0,clearcoat:0,sheen:s?.2:0,sheenRoughness:.9,side:Bt,shadowSide:Ct}),a=m=>{let h=r.clone();return h.color.multiplyScalar(m),n.push({material:h,factor:m}),h},o=a(.9),l=a(.74),c=(m,h,x)=>{let p=new Xe(m,h);return p.name=x,e.add(p),p},u=(m,h,x,p,d,b=.006)=>{let T=new oi(m,{depth:h,bevelEnabled:b>0,bevelSegments:3,steps:1,bevelSize:b,bevelThickness:b,curveSegments:12});return T.translate(0,0,x),c(T,p,d)},g=(m,h,x,p,d,b=1,T=[.5,.5,1,1],y=0)=>{let w=c(Ex(h,x,p,d,b,y),r.clone(),i+"-"+m);return w.userData={fabricFace:m,fabricSize:[x,p],localPrintBox:T},t.push(w),w};if(i==="notebook"){let m=qt(-1.02,-1.43,2.04,2.86,.09),h=qt(-.98,-1.385,1.955,2.77,.055),x=new vn({color:"#f2eee0",roughness:1}),p=new vn({color:"#c7c1af",roughness:1});u(h,.25,-.125,x,"notebook-paper-block",.006),u(m,.027,.136,r,"notebook-front-cover"),u(m,.027,-.163,r,"notebook-back-cover"),g("front",m,2.04,2.86,()=>.17,1,[.52,.5,.88,.94]),g("back",m,2.04,2.86,()=>-.17,-1,[.48,.5,.88,.94]);let d=qt(-1.045,-1.422,.16,2.844,.055);u(d,.294,-.147,o,"notebook-bound-spine",.018);for(let T=0;T<20;T++){let y=-.119+T*.0125,w=fc([bn(.985,-1.33,y),bn(.985,0,y),bn(.985,1.33,y)],.0012,p);w.userData.noShadow=!0,e.add(w)}for(let T of[-1.394,1.394])for(let y=0;y<13;y++){let w=fc([bn(-.89,T,-.118+y*.019),bn(.45,T,-.118+y*.019),bn(.94,T,-.118+y*.019)],.001,p);w.userData.noShadow=!0,e.add(w)}for(let T of[-1,1])e.add(fc([bn(-.88,-1.36,T*.171),bn(-.88,0,T*.171),bn(-.88,1.36,T*.171)],.0025,o));let b=qt(.54,-1.55,.065,.2,.005);u(b,.006,-.035,l,"notebook-ribbon",.001)}if(i==="phonecase"){let m=qt(-.76,-1.53,1.52,3.06,.23),h=qt(-.635,.66,.72,.72,.16);m.holes.push(new dn(h.getPoints(12))),u(m,.042,.018,r,"phonecase-back-shell",.004),g("front",m,1.52,3.06,()=>.065,1,[.5,.405,.92,.67]);let x=qt(-.76,-1.53,1.52,3.06,.23);x.holes.push(new dn(qt(-.695,-1.465,1.39,2.93,.19).getPoints(12))),u(x,.2,-.15,o,"phonecase-protective-rim",.009);let p=qt(-.663,.632,.776,.776,.18);p.holes.push(new dn(h.getPoints(12))),u(p,.034,.06,o,"phonecase-camera-lip",.004);for(let[b,T,y]of[[1,.38,.34],[-1,.48,.23],[-1,.12,.23]]){let w=qt(-.022,-y/2,.044,y,.015),v=u(w,.046,-.023,r,"phonecase-button",.003);v.rotation.y=Math.PI/2,v.position.set(b*.767,T,-.055)}c(new yn(.22,.005,.067),new vn({color:"#807d75",roughness:.9}),"phonecase-port").position.set(0,-1.54,-.065)}i==="tshirt"&&Ou({group:e,glaze:r,trim:o,stitch:l,add:c,face:g});let f=c(new rt,r,"hidden-print-contract");return f.visible=!1,{type:i,group:e,body:t[0],print:f,glaze:r,surfaces:t,trim:o,tints:n}}var at=(i,e,t)=>new F(i,e,t),pc=i=>i*i;function yr(i,e=1,t=56,n=64){let s=[],r=[],a=[];for(let l=0;l<=n;l++)for(let c=0;c<=t;c++){let u=i(c/t*2-1,l/n*2-1);if(s.push(u.x,u.y,u.z),r.push(e===1?c/t:1-c/t,l/n),c<t&&l<n){let g=l*(t+1)+c,f=g+1,m=g+t+1,h=m+1;a.push(...e===1?[g,f,m,f,h,m]:[g,m,f,f,m,h])}}let o=new rt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function Di(i,e,t,n=!1){let s=new Ht(i,n,"centripetal");return new Xe(new sn(s,Math.max(48,i.length*2),e,6,n),t)}function Vu(i,e=1){let t=[];for(let n=0;n<4;n++)for(let s=0;s<32;s++){let r=(s/16-1)*e;t.push(i(n===0?r:n===1?e:n===2?-r:-e,n===0?-e:n===1?r:n===2?e:-r))}return t}function Co(i,e,t,n){let s=new Ht(i,!1,"centripetal"),r=[],a=[],o=[],l=112;for(let u=0;u<=l;u++){let g=u/l,f=s.getPoint(g),m=s.getTangent(g),h=at(-m.y,m.x,0).normalize(),x=new F().crossVectors(m,h).normalize();for(let[p,d]of[[-1,-1],[1,-1],[1,1],[-1,1]]){let b=f.clone().addScaledVector(h,p*e/2).addScaledVector(x,d*t/2);r.push(b.x,b.y,b.z),a.push((p+1)/2,g)}if(u<l)for(let p=0;p<4;p++){let d=u*4+p,b=u*4+(p+1)%4;o.push(d,b,d+4,b,b+4,d+4)}}o.push(0,2,1,0,3,2,l*4,l*4+1,l*4+2,l*4,l*4+2,l*4+3);let c=new rt;return c.setAttribute("position",new Be(r,3)),c.setAttribute("uv",new Be(a,2)),c.setIndex(o),c.computeVertexNormals(),new Xe(c,n)}function Gu(i){let e=new Et,t=[],n=[];e.name="studio-sewn-"+i+(i==="backpack"?"-v6":"-v5");let s=new Uint8Array(16384*4);for(let w=0;w<128;w++)for(let v=0;v<128;v++){let E=(w*128+v)*4,_=128+Math.round(24*Math.sin(v*Math.PI/2)+24*Math.sin(w*Math.PI/2)*(Math.floor(v/4)%2?1:-1));s[E]=s[E+1]=s[E+2]=_,s[E+3]=255}let r=new un(s,128,128);r.wrapS=r.wrapT=zn,r.repeat.set(6,6),r.generateMipmaps=!0,r.minFilter=on,r.magFilter=dt,r.needsUpdate=!0;let a=new It({color:"#f5f1e6",roughness:.94,metalness:0,sheen:.22,sheenRoughness:.9,sheenColor:"#ffffff",clearcoat:0,bumpMap:r,bumpScale:.0035,side:Bt,shadowSide:Ct}),o=w=>{let v=a.clone();return v.color.multiplyScalar(w),n.push({material:v,factor:w}),v},l=o(.88),c=o(.72),u=o(.72),g=o(.84),f=new vn({color:"#65655c",roughness:1}),m=new vn({color:"#9c978b",metalness:.72,roughness:.4}),h=(w,v)=>(w.name=v,e.add(w),w),x=(w,v,E,_,M=1,z=[.5,.5,1,1])=>{let L=h(new Xe(yr(v,M),a.clone()),i+"-"+w);return L.userData={fabricFace:w,fabricSize:[E,_],localPrintBox:z},t.push(L),L};function p(w,v,E,_,M,z=0,L=!1){let P=E===0?w(_,-1):E===1?w(1,_):E===2?w(-_,1):w(-1,-_),D=E===0?v(_,-1):E===1?v(1,_):E===2?v(-_,1):v(-1,-_),I=P.lerp(D,(M+1)/2);if(L&&E!==0&&(I.x*=1-.07*Math.pow(((E===1?_:-_)+1)/2,5)*(1-M*M)),z){let N=Math.sin((M+1)*Math.PI/2)*z*Math.sqrt(Math.max(0,1-_*_));E===1||E===3?I.x+=(E===1?1:-1)*N:I.y+=(E===2?1:-1)*N*.55}return I}function d(w,v,E,_=a,M=0){for(let z of E?[0,1,3]:[0,1,2,3]){let L=(P,D)=>p(w,v,z,P,D,M,E);h(new Xe(yr(L,1,56,16),_),i+"-joined-edge-"+z)}}function b(w,v){h(Di(w,.011,f),v+"-tape"),h(Di(w.map(P=>P.clone().add(at(0,0,.009))),.0035,m),v+"-teeth");let E=w[Math.round(w.length*.74)],_=new Et;_.name=v+"-hardware",_.position.copy(E).add(at(0,0,.021)),e.add(_);let M=new Xe(new yn(.045,.036,.021),m);M.name=v+"-slider",_.add(M);let z=qt(-.023,-.116,.046,.106,.013);z.holes.push(new dn(qt(-.01,-.096,.02,.034,.006).getPoints(8)));let L=new Xe(new oi(z,{depth:.005,bevelEnabled:!0,bevelSize:.002,bevelThickness:.002,bevelSegments:2,curveSegments:8}),m);L.name=v+"-flat-pull",L.rotation.x=.11,L.position.z=.016,_.add(L),_.rotation.z=v==="main-zip"?-.18:.16}if(i==="tote"){let w=function(M,z,L){let P=1.035+.08*z,D=M*P*(1-.024*Math.pow(Math.abs(z),8)),I=(z+1)/2,N=z*1.1-.065*(1-M*M)*Math.pow(I,8)+.075*Math.pow(Math.abs(M),8)*Math.pow(1-I,8),k=(Math.exp(-pc((M-.56)*9))+Math.exp(-pc((M+.56)*9)))*I*I,H=.33-.09*Math.pow(Math.abs(M),6)+.03*(1-z*z)+.023*Math.sin(M*12+z*2)*(1-M*M)*(1-z*z)-.024*k;return at(D,N,L*H)},v=(M,z)=>w(M,z,1),E=(M,z)=>w(M,z,-1);x("front",v,2.15,2.2),x("back",E,2.15,2.2,-1),d(v,E,!0);let _=M=>(z,L)=>{let P=w(z*.994,L*.994,M);return P.z-=M*.018,P};for(let M of[1,-1]){h(new Xe(yr(_(M),M),u),"tote-inner-wall");let z=(J,X)=>{let C=w(J,.935+(X+1)*.0325,M);return C.z+=M*.006,C};h(new Xe(yr(z,M,56,4),l),"tote-folded-mouth-hem"),h(Di(Array.from({length:57},(J,X)=>w(X/28-1,.938,M).add(at(0,0,M*.009))),.0022,c),"tote-hem-stitch");let L=w(-.56,.7,M),P=w(.56,.7,M),D=w(-.56,1,M),I=w(.56,1,M),N=M*.34,k=[L.clone().add(at(0,0,M*.009)),D.clone().add(at(0,0,M*.018)),at(-.55,1.48,N+M*.055),at(-.36,1.91,N+M*.045),at(.02,2.02,N),at(.37,1.88,N+M*.02),at(.55,1.47,N+M*.04),I.clone().add(at(0,0,M*.018)),P.clone().add(at(0,0,M*.009))],H=h(Co(k,.125,.022,g),"tote-sewn-handle");H.userData.attachmentPoints=[L.toArray(),P.toArray()];for(let J of[-.56,.56]){let X=[[-.042,.72],[.042,.91],[-.042,.91],[.042,.72],[-.042,.72],[-.042,.91],[.042,.91],[.042,.72]].map(([C,O])=>w(J+C,O,M).add(at(0,0,M*.025)));h(Di(X,.0022,c),"tote-handle-box-stitch")}}d(_(1),_(-1),!0,u);for(let M of[1,-1])for(let z of[-1,1])h(Di(Array.from({length:49},(L,P)=>w(z,P/24-1,M)),.004,l),"tote-side-seam")}if(i==="backpack"){let w=function(P,D,I){let N=1.31-.39*Math.pow(Math.abs(P),4),k=-1.3+.13*Math.pow(Math.abs(P),10),H=k+(D+1)/2*(N-k),J=P*(1.01-.03*D)*(1-.035*Math.pow(Math.abs(D),10)),X=Math.pow(Math.abs(P),8)+.65*Math.pow(Math.abs(D),10),C=Math.pow(Math.max(0,(1-P*P)*(1-D*D)),.7),O=.007*Math.sin(P*15+D*2)*Math.exp(-pc((D+.86)*8))*(1-P*P)+.006*Math.sin(D*9-P)*Math.pow(Math.abs(P),5)*(1-D*D),W=I===1?.34-.07*X+.075*C+O:-.31+.048*X-.016*C;return at(J,H,W)},v=(P,D)=>w(P,D,1),E=(P,D)=>w(P,D,-1);x("front",v,2.02,2.61,1,[.5,.78,.84,.36]),x("back",E,2.02,2.61,-1,[.5,.5,.5,.78]),d(v,E,!1,a,.042);for(let P of[v,E])h(Di(Vu(P),.0035,l,!0),"backpack-panel-seam");let _=(P,D)=>{let I=-.1-.055*Math.pow(Math.abs(P),6),N=-1.12+.07*Math.pow(Math.abs(P),8);return at(P*.81*(1-.075*Math.pow(Math.abs(D),8)),N+(D+1)/2*(I-N),.53-.065*(Math.pow(Math.abs(P),8)+Math.pow(Math.abs(D),8))+.04*Math.pow(Math.max(0,(1-P*P)*(1-D*D)),.65)+.005*Math.sin(P*12+D*3)*(1-P*P)*(1-D*D))},M=(P,D)=>{let I=_(P,D);return I.z=.3,I};x("pocket",_,1.62,1.02,1,[.5,.42,.86,.72]),d(_,M,!1,a,.018),h(Di(Vu(_),.003,l,!0),"backpack-pocket-seam"),b(Array.from({length:57},(P,D)=>_(D/28-1,.73).add(at(0,0,.006))),"pocket-zip");let z=(P,D)=>{let I=_(P,.76+(D+1)*.07);return I.z+=.01+.006*(1-P*P),I};h(new Xe(yr(z,1,56,5),a),"backpack-pocket-zip-flap");let L=[];for(let P=0;P<=20;P++)L.push(p(v,E,3,.05-P/20*1.05,-.2,.042).add(at(-.004,0,0)));for(let P=1;P<=56;P++)L.push(p(v,E,2,1-P/28,-.2,.042).add(at(0,.004,0)));for(let P=1;P<=20;P++)L.push(p(v,E,1,1-P/20*1.05,-.2,.042).add(at(.004,0,0)));b(L,"main-zip");for(let P of[-1,1]){let D=E(P*.44,.84),I=E(P*.62,-.85);h(Co([D,at(P*.53,.65,-.49),at(P*.6,-.04,-.61),at(P*.6,-.61,-.52),I],.22,.045,g),"backpack-padded-shoulder-strap");let N=qt(-.09,-.045,.18,.09,.012);N.holes.push(new dn(qt(-.069,-.026,.138,.052,.006).getPoints(6)));let k=h(new Xe(new oi(N,{depth:.012,bevelEnabled:!1,curveSegments:6}),m),"backpack-strap-adjuster");k.position.set(P*.64,-.75,-.57),h(new Xe(new yn(.018,.06,.016),m),"backpack-adjuster-bar").position.copy(k.position),h(Co([at(P*.62,-.85,-.41),at(P*.66,-1.05,-.46),at(P*.64,-1.2,-.42)],.1,.018,g),"backpack-webbing-tail")}h(Co([at(-.21,1.23,-.1),at(-.2,1.48,-.12),at(-.13,1.61,-.13),at(.13,1.61,-.13),at(.2,1.48,-.12),at(.21,1.23,-.1)],.105,.022,g),"backpack-sewn-carry-loop")}e.updateMatrixWorld(!0);let T=new $t().setFromObject(e);e.position.y=-(T.max.y+T.min.y)/2;let y=h(new Xe(new rt,a),"hidden-print-contract");return y.visible=!1,{type:i,group:e,body:t[0],print:y,glaze:a,surfaces:t,trim:l,tints:n}}function zx(i){let e=Ss.default.get(i),t=96,n=24,s=[],r=[],a=[];for(let l=0;l<=n;l++){let c=l/n*e.printRadius,u=Ss.default.height(i,c)+.004;for(let g=0;g<=t;g++){let f=g/t*Math.PI*2,m=c*Math.cos(f),h=c*Math.sin(f);if(s.push(m,u,h),r.push(.5+m/(2*e.printRadius),.5-h/(2*e.printRadius)),l<n&&g<t){let x=l*(t+1)+g;a.push(x,x+1,x+t+1,x+1,x+t+2,x+t+1)}}}let o=new rt;return o.setAttribute("position",new Be(s,3)),o.setAttribute("uv",new Be(r,2)),o.setIndex(a),o.computeVertexNormals(),o}function Cx(i,e){let t=e.profile,n={plate:[[4,8],[10,14]],bowl:[[4,9],[11,17]],basin:[[3,7],[8,14]]}[i],s=[],r=[],a=c=>(t[c+1][1]-t[c][1])/(t[c+1][0]-t[c][0]),o=(c,u,g)=>{if(c===u)return a(c);if(c===g)return a(c-1);let f=a(c-1),m=a(c);return f*m<=0?0:2*f*m/(f+m)};for(let c=0;c<t.length-1;c++){let[u,g]=t[c],[f,m]=t[c+1],h=n.find(([p,d])=>c>=p&&c<d),x=h?Math.min(7,Math.ceil(Math.hypot(f-u,m-g)/.072)):1;for(let p=0;p<x;p++){let d=p/x,b=d*d*(3-2*d),T=h?g+(m-g)*b+(f-u)*(d*(1-d)**2*o(c,...h)-d*d*(1-d)*o(c+1,...h)):g;s.push(new ce(u+(f-u)*d,T)),r.push(c+d)}}s.push(new ce(...t.at(-1))),r.push(t.length-1);let l=new Ti(s,128);return l.userData.designRows=r,l}function Hu(i="cup"){if(["backpack","tote"].includes(i))return Gu(i);if(["notebook","phonecase","tshirt"].includes(i))return ku(i);if(Ss.default.textile(i))return Uu(i);if(i==="cup")return{...Ru(),type:i,floor:-1.035};if(!Ss.default.data[i])throw Error("\u6A21\u578B\u5C1A\u672A\u63A5\u5165");let e=Ss.default.get(i),t=new Et;t.name="procedural-enamel-"+i+"-v1";let n=new It({color:"#f5f1e6",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12}),s=new It({color:e.rim,roughness:.265,metalness:0,ior:1.48,clearcoat:.55,clearcoatRoughness:.17}),r=new Xe(Cx(i,e),n);r.name=i+"-hollow-body",t.add(r);let a=new Xe(new Yn(e.rimRadius,e.rimTube,16,128),s);a.rotation.x=Math.PI/2,a.position.y=e.rimY,a.name=i+"-rolled-rim",t.add(a);let o=new Xe(new Yn(e.foot,.02,12,96),n);o.rotation.x=Math.PI/2,o.position.y=e.floor+.02,t.add(o);let l=new Xe(zx(i),new It({color:"#fff",roughness:e.roughness,metalness:0,clearcoat:1,clearcoatRoughness:.12,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-1,side:Ct}));return l.name=i+"-interior-print",l.renderOrder=1,t.add(l),{type:i,group:t,body:r,print:l,glaze:n,rim:s,floor:e.floor}}var it=xi(Pi());var Yt=xi(Pi(),1),Rx=["disk","back","wall","belt","ring","wrap","faceFill"],Wu=2*Math.PI,mc=i=>Math.atan2(Math.sin(i),Math.cos(i));function Ix(){let i=8713;function e(l){let c=Float32Array.from({length:l*l},()=>(i=Math.imul(i,1664525)+1013904223>>>0,i/4294967296));return(u,g)=>{let f=u*l,m=g*l,h=Math.floor(f),x=Math.floor(m),p=y=>y*y*(3-2*y),d=p(f-h),b=p(m-x),T=(y,w)=>c[(x+w)%l*l+(h+y)%l];return(1-b)*((1-d)*T(0,0)+d*T(1,0))+b*((1-d)*T(0,1)+d*T(1,1))}}let t=e(6),n=e(19),s=e(43),r=128,a=new Uint8Array(r*r*4);for(let l=0;l<r;l++)for(let c=0;c<r;c++){let u=c/r,g=l/r,f=(l*r+c)*4,m=n(u,g),h=t(u,g);a[f]=255*(.5*h+.34*m+.16*s(u,g)),a[f+1]=255*(.6*h+.4*m),a[f+3]=255}let o=new un(a,r,r);return o.wrapS=o.wrapT=zn,o.magFilter=dt,o.minFilter=on,o.generateMipmaps=!0,o.needsUpdate=!0,o}function Xu(i){let{body:e,print:t,glaze:n,type:s}=i,r=n.clone();e.material=r,t.visible=!1;let a=e.geometry,o=a.parameters.points,l=o.length,c=a.userData.designRows||o.map((M,z)=>z),u=[0];for(let M=1;M<l;M++)u.push(u[M-1]+o[M].distanceTo(o[M-1]));let g=a.attributes.position.count;a.setAttribute("profileRow",new Ft(Float32Array.from({length:g},(M,z)=>c[z%l]),1)),a.setAttribute("profileArc",new Ft(Float32Array.from({length:g},(M,z)=>u[z%l]),1));let f=Yt.default.get(s),m=f.rimRadius-f.rimTube,h=o.map((M,z)=>{if(s==="cup"||c[z]<f.profile.length-f.inner.length)return 1;let L=a.attributes.normal,P=L.getY(z),D=L.getZ(z),I=0;for(let N=0;N<96;N++){let k=(N+.5)/96,H=N*2.39996323,J=Math.sqrt(k),X=Math.sqrt(1-k),C=P*X+D*J*Math.sin(H);if(C<=1e-4)continue;let O=Math.max(0,f.rimY-M.y)/C,W=O*J*Math.cos(H),Z=M.x+O*(D*X-P*J*Math.sin(H));Math.hypot(W,Z)<m&&I++}return I/96});a.setAttribute("apertureLight",new Ft(Float32Array.from({length:g},(M,z)=>h[z%l]),1));let x=Ix(),p={enamelGrain:{value:x},lining:{value:new Ze("#f4f0e4")},enamelInk:{value:null},inkReady:{value:0},printEnabled:{value:1},regionHighlight:{value:0},zoneMode:{value:0},printRows:{value:new ce},fillMetrics:{value:new F},fillWinding:{value:new ce},fillWindow:{value:new ot},limits:{value:new ot},inkTransform:{value:new ot},wallAspect:{value:1}},d,b,T,y;function w(M){if(d=Yt.default.region(s,M.zone),p.printEnabled.value=Yt.default.hasPrint(M)?1:0,Yt.default.isFill(d)){T=u[c.indexOf(d.rows[0])],y=u[c.indexOf(d.rows[1])]-T;let z=Yt.default.fillBasis(d,M),L=Yt.default.fillAspect(d,z,y);p.fillMetrics.value.set(T,1/y,L),p.fillWinding.value.set(...z),p.fillWindow.value.set(...Yt.default.fillWindow(d,M))}b=(d.yaw||0)+(d.around?M.x*Math.PI/60:0),p.zoneMode.value=Rx.indexOf(d.mode),p.printRows.value.set(...d.rows),p.limits.value.set(d.low||0,d.high||1,b,d.span||d.count||1),p.wallAspect.value=d.mode==="wall"?(d.high-d.low)/(d.radius*d.span):1,Yt.default.isFill(d)?p.inkTransform.value.set(M.x/120,-M.y/120,0,1):p.inkTransform.value.set(d.around?0:M.x*3/512,-M.y*3/512,M.rotation*Math.PI/180,M.scale/100)}function v(M){if(!p.printEnabled.value||!M||M.object!==e)return null;let z=M.face,L=Math.min(c[z.a%l],c[z.b%l],c[z.c%l]);if(L<d.rows[0]||L>=d.rows[1])return null;let{x:P,y:D,z:I}=e.worldToLocal(M.point.clone()),N=Math.hypot(P,I),k=Math.atan2(P,I);if(Yt.default.isFill(d)){let C=M.barycoord,W=(C.x*u[z.a%l]+C.y*u[z.b%l]+C.z*u[z.c%l]-T)/y;if(d.mode==="wrap")return{angle:k,y:W};let Z=(1-W)*.5/Math.max(N,1e-4);return{x:P*Z,y:-I*Z}}if(d.mode==="disk"||d.mode==="back")return N<=d.high?{x:.5+P/(2*d.high),y:.5+(d.mode==="back"?I:-I)/(2*d.high)}:null;let J=((d.mode==="ring"?N:D)-d.low)/(d.high-d.low);if(J<0||J>1)return null;let X=mc(k-b);return d.mode==="wall"&&!d.around&&Math.abs(X)>d.span/2?null:{angle:k,y:J}}function E(M){if(M?.object!==e)return null;let z=Math.min(...["a","b","c"].map(H=>c[M.face[H]%l])),{x:L,y:P,z:D}=e.worldToLocal(M.point.clone()),I=Math.hypot(L,D),N=Math.atan2(L,D),k=Object.entries(Yt.default.positions[s]).filter(([,H])=>{let J=Yt.default.region(s,H.local);return z<J.rows[0]||z>=J.rows[1]?!1:J.mode==="disk"||J.mode==="back"?I<=J.high:J.mode==="ring"?I>=J.low&&I<=J.high:J.mode==="belt"?P>=.68&&P<=J.high:J.mode==="wall"?P>=J.low&&P<=J.high&&(J.around||Math.abs(mc(N-(J.yaw||0)))<=J.span/2):!1});return k.find(([,H])=>["ring","belt"].includes(Yt.default.region(s,H.local).mode))?.[0]||k[0]?.[0]||null}r.customProgramCacheKey=()=>"spun-enamel-v4-"+s,r.onBeforeCompile=M=>{Object.assign(M.uniforms,p),M.vertexShader=`attribute float profileRow,profileArc,apertureLight; varying float skyLight; varying vec2 sheetCoord; varying float inkRow; varying vec3 inkPosition;
`+M.vertexShader,M.vertexShader=M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
inkPosition=position; inkRow=profileRow; sheetCoord=vec2(uv.x,profileArc); skyLight=apertureLight;`),M.fragmentShader=`uniform sampler2D enamelInk,enamelGrain; uniform vec3 lining,fillMetrics; uniform vec2 fillWinding; varying float skyLight; varying vec2 sheetCoord; uniform float inkReady,printEnabled,regionHighlight; uniform int zoneMode; uniform vec2 printRows; uniform vec4 limits,inkTransform,fillWindow; uniform float wallAspect; varying float inkRow; varying vec3 inkPosition;
`+M.fragmentShader,M.fragmentShader=M.fragmentShader.replace("#include <color_fragment>",`
   #include <color_fragment>
   float radius=length(inkPosition.xz);
   float angle=atan(inkPosition.x,inkPosition.z)-limits.z;
   float zoneMask=step(printRows.x,inkRow)*step(inkRow,printRows.y);
   float regionEdge=1.0-smoothstep(0.0,.12,min(inkRow-printRows.x,printRows.y-inkRow));
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
    regionEdge=max(regionEdge,1.0-smoothstep(0.0,.02,limits.y-radius));
   }else{
    float v=((zoneMode==4?radius:inkPosition.y)-limits.x)/(limits.y-limits.x);
    uv=vec2(zoneMode==2?0.5+atan(sin(angle),cos(angle))/limits.w:fract(0.5+angle*limits.w/6.2831853),v);
    zoneMask*=step(0.0,v)*step(v,1.0);
    if(zoneMode==2)zoneMask*=step(0.0,uv.x)*step(uv.x,1.0);
    regionEdge=max(regionEdge,1.0-smoothstep(0.0,.025,min(v,1.0-v)));
    if(zoneMode==2)regionEdge=max(regionEdge,1.0-smoothstep(0.0,.02,min(uv.x,1.0-uv.x)));
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
   diffuseColor.rgb=mix(diffuseColor.rgb,pigmentBase,pigment.a*zoneMask*inside*inkReady*printEnabled*0.98);
   diffuseColor.rgb*=1.0+0.011*(enamelRG.g-0.5);
   diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.10,.30,.32),zoneMask*regionHighlight*(.10+.65*regionEdge));

  `),M.fragmentShader=M.fragmentShader.replace("#include <aomap_fragment>",`
   #include <aomap_fragment>
   reflectedLight.indirectDiffuse*=mix(.55,1.0,skyLight);
   reflectedLight.indirectSpecular*=mix(.83,1.0,skyLight);
  `),M.fragmentShader=M.fragmentShader.replace("#include <clearcoat_normal_fragment_maps>",`
   #include <clearcoat_normal_fragment_maps>
   vec3 qx=dFdx(-vViewPosition),qy=dFdy(-vViewPosition);
   vec3 s=cross(qy,normal),t=cross(normal,qx);
   float determinant=dot(qx,s),height=enamelRG.r*.0018;
   vec3 gradient=sign(determinant)*(dFdx(height)*s+dFdy(height)*t)/max(abs(determinant),0.0000001);
   normal=normalize(normal-gradient);
   #ifdef USE_CLEARCOAT
    clearcoatNormal=normalize(clearcoatNormal-gradient*.84);
   #endif
  `),M.fragmentShader=M.fragmentShader.replace("#include <lights_physical_fragment>",`
   #include <lights_physical_fragment>
   material.clearcoatRoughness=clamp(material.clearcoatRoughness+(enamelRG.g-.5)*.05,.12,1.0);
  `)};function _(M,z){if(M.angle===void 0)return(z.x-M.x)*(Yt.default.isFill(d)?120:512/3);let L=mc(z.angle-M.angle);return d.around||d.mode==="wrap"?L*120/Wu:(d.mode==="wall"?L/d.span:L*d.count/Wu)*512/3}return{setPlacement:w,hitUV:v,positionAt:E,setHighlight(M){p.regionHighlight.value=M},dragX:_,dragY:(M,z)=>(M.y-z.y)*(Yt.default.isFill(d)?120:512/3),setTexture(M){p.enamelInk.value=M,p.inkReady.value=M?1:0},dispose(){x.dispose()},syncFinish(){r.color.copy(n.color),r.roughness=n.roughness,r.clearcoat=n.clearcoat,r.ior=n.ior,r.specularIntensity=n.specularIntensity,r.clearcoatRoughness=n.clearcoatRoughness}}}var Zt=xi(Pi(),1);function qu(i){let{type:e,glaze:t,surfaces:n}=i,s={fabricInk:{value:null},fabricReady:{value:0}},r,a=!0,o=n.map(c=>{c.geometry.attributes.printUv||c.geometry.setAttribute("printUv",c.geometry.attributes.uv);let[u,g]=c.userData.fabricSize,f=Math.min(u,g),m={fabricActive:{value:0},fabricLocalBox:{value:new ot(.5,.5,1,1)},fabricHighlight:{value:0},fabricAspect:{value:new ce(u/f,g/f)},fabricMode:{value:0},fabricTransform:{value:new ot(0,0,0,1)},fabricCoverage:{value:new ce(.5,.5)},fabricCount:{value:3}};return c.material.customProgramCacheKey=()=>"surface-print-v2-"+Zt.default.textile(e),c.material.onBeforeCompile=h=>{Object.assign(h.uniforms,s,m),h.vertexShader=`attribute vec2 printUv; varying vec2 fabricUV;
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
    float weave=dot(sin(threadUV*6.28318),fade)*${Zt.default.textile(e)?".006":"0."};diffuseColor.rgb*=${Zt.default.textile(e)?".99":"1."}+weave;
    float edgeAt=max(abs(fabricUV.x-.5),abs(fabricUV.y-.5));
    float halo=smoothstep(.465,.474,edgeAt)*step(edgeAt,.5),edge=smoothstep(.481,.488,edgeAt)*step(edgeAt,.5);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.85,.94,.92),halo*fabricHighlight*.85);
    diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.08,.25,.27),edge*fabricHighlight*.95);
   `)},{mesh:c,own:m}});function l(c){a=Zt.default.hasPrint(c),r=Zt.default.region(e,c.zone);let u=Zt.default.facePlacements(e,c);for(let{mesh:g,own:f}of o){let m=u[g.userData.fabricFace];if(f.fabricActive.value=m?1:0,!m)continue;let h=Zt.default.region(e,m.zone),x=Zt.default.isFill(h)?[.5,.5,1,1]:g.userData.localPrintBox||[.5,.5,1,1];f.fabricLocalBox.value.fromArray(x);let[p,d]=g.userData.fabricSize,b=Math.min(p*x[2],d*x[3]);f.fabricAspect.value.set(p*x[2]/b,d*x[3]/b),f.fabricMode.value=h.mode==="fabricBorder"?2:Zt.default.isFill(h)?1:0,f.fabricTransform.value.set(m.x/120,-m.y/120,m.rotation*Math.PI/180,m.scale/100),f.fabricCoverage.value.set(Zt.default.isFill(h)?Zt.default.coveragePercent(m.coverWidth)/200:.5,Zt.default.isFill(h)?Zt.default.coveragePercent(m.coverHeight)/200:.5),f.fabricCount.value=Zt.default.fillCount(h,m.scale)}}return{setPlacement:l,setHighlight(c){for(let{mesh:u,own:g}of o)g.fabricHighlight.value=u.userData.fabricFace===r?.face?c:0},setTexture(c){s.fabricInk.value=c,s.fabricReady.value=c?1:0},syncFinish(){for(let{mesh:c}of o)c.material.color.copy(t.color),c.material.specularIntensity=t.specularIntensity,c.material.roughness=t.roughness,c.material.clearcoat=t.clearcoat;i.trim!==t&&i.trim.color.copy(t.color).multiplyScalar(.88);for(let{material:c,factor:u}of i.tints||[])c.color.copy(t.color).multiplyScalar(u)},hitUV(c){if(!a||c?.object.userData.fabricFace!==r?.face||!(c.uv1||c.uv))return null;let u=c.uv1||c.uv,g=o.find(f=>f.mesh===c.object)?.own.fabricLocalBox.value;return g?{x:(u.x-g.x)/g.z+.5,y:(u.y-g.y)/g.w+.5}:null},dragX:(c,u)=>(u.x-c.x)*120,dragY:(c,u)=>(c.y-u.y)*120,dispose(){}}}function Yu(){let i=null;function e(){if(!i)return;let h=i;i=null,h.token++,clearTimeout(h.timer),clearTimeout(h.highlightTimer),cancelAnimationFrame(h.frame),h.observer?.disconnect(),h.events.abort(),h.texture?.dispose(),h.ink?.dispose(),h.environment?.dispose();let x=new Set,p=new Set,d=new Set;h.scene?.traverse(b=>{b.shadow?.map?.dispose(),b.geometry&&x.add(b.geometry),b.material&&p.add(b.material)});for(let b of x)b.dispose();for(let b of p){for(let T of Object.values(b))T?.isTexture&&T!==h.texture&&d.add(T);b.dispose()}for(let b of d)b.dispose();h.renderer?.dispose(),h.renderer?.forceContextLoss(),h.renderer?.domElement.remove()}function t(h){let x=h.camera.aspect,p=h.cameraState.pitch,d=Math.tan(19*Math.PI/180)/Math.min(1,x/1.1);if(x>1&&(h.host.id==="cup-host"||h.host.closest(".wb-cover-open"))){let T=h.bounds.height*Math.cos(p)+h.bounds.depth*Math.abs(Math.sin(p)),y=1.3*Math.max(h.bounds.width/x,T)/(2*it.default.get(h.vesselType).camera.distance);d=Math.min(d,y)}let b=2*Math.atan(d)*180/Math.PI;h.camera.fov!==b&&(h.camera.fov=b,h.camera.updateProjectionMatrix())}function n(h){h!==i||h.failed||h.frame||(h.frame=requestAnimationFrame(()=>{if(h.frame=0,h!==i||document.hidden||!h.host.isConnected)return;let x=h.cameraState,p=x.distance*Math.cos(x.pitch);t(h);let d=0;h.camera.position.set(p*Math.sin(x.yaw),d+x.distance*Math.sin(x.pitch),p*Math.cos(x.yaw)),h.camera.lookAt(h.vesselType==="cup"?.27:0,d,0),h.renderer.render(h.scene,h.camera),h.draws++}))}function s(h,x,p=!0){h.cameraState=bo({...h.cameraState,...x}),n(h),p&&h.onCamera({...h.cameraState})}function r(h,x){h===i&&(h.failed=!0,h.token++,clearTimeout(h.timer),h.host.dataset.mode="static",h.onStatus("fallback",x),h.renderer?.domElement.remove(),cancelAnimationFrame(h.frame),h.frame=0)}function a(h){h?.ink&&(clearTimeout(h.highlightTimer),h.ink.setHighlight?.(1),n(h),h.highlightTimer=setTimeout(()=>{h.ink.setHighlight?.(0),n(h)},900))}function o(h){let x=i;if(!x)return;if(x.vesselType!==h.canvas){u(x.host,h,x.onCamera,x.onStatus,x.options);return}if(x.failed||(x.draft=h,!x.cup||!x.ink))return;let p=h.vesselPlacement||it.default.placement(h.canvas),d=h.cupCamera||it.default.regionCamera(h.canvas,p),b=x.zone&&x.zone!==p.zone;x.zone!==p.zone&&(x.zone=p.zone,x.cameraState=bo(d)),x.draft=h,x.ink.setPlacement(p),b&&a(x),x.cup.glaze.color.set(it.default.glazeHex(h.cupMaterial?.color));let T=h.cupMaterial?.finish==="matte";x.cup.glaze.roughness=T?.57:.3+(it.default.get(h.canvas).roughness||.23)*.15,x.cup.glaze.ior=1.48,x.cup.glaze.specularIntensity=.78,x.cup.glaze.clearcoat=T?.16:.5,x.cup.glaze.clearcoatRoughness=T?.36:.17,it.default.textile(h.canvas)&&(x.cup.glaze.roughness=.94,x.cup.glaze.clearcoat=0,x.cup.glaze.specularIntensity=.25),it.default.get(h.canvas).family==="daily"&&(x.cup.glaze.roughness=h.canvas==="notebook"?.83:.64,x.cup.glaze.clearcoat=0,x.cup.glaze.specularIntensity=.38),x.ink.syncFinish(),n(x);let y=JSON.stringify([h.imageId,h.pattern,...Object.keys(window.PatternEditor.defaults).map(w=>h[w])]);if(!x.error&&y===x.textureKey){x.readyToken===x.token&&x.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E");return}x.error=null,x.textureKey=y,x.token++,x.pending={draft:{...h},token:x.token},x.texture||x.onStatus("loading","\u6B63\u5728\u66F4\u65B0\u5668\u7269\u7EB9\u6837\u2026"),x.drawingTexture||l(x)}async function l(h){h.drawingTexture=!0;try{for(;h===i&&!h.failed&&h.pending;){let{draft:x,token:p}=h.pending;h.pending=null;try{let d=await window.PatternTexture.export(x,{size:512,transparent:!0}),b=URL.createObjectURL(d.blob),T=new Image;try{T.src=b,await T.decode()}finally{URL.revokeObjectURL(b)}if(h!==i||h.failed)return;if(x.imageId!==h.draft.imageId||x.pattern!==h.draft.pattern)continue;let y=new Rt(T);y.colorSpace=Nt,y.wrapS=y.wrapT=zn,y.flipY=!0,y.anisotropy=Math.min(4,h.renderer.capabilities.getMaxAnisotropy()),y.needsUpdate=!0;let w=h.texture;h.texture=y,h.ink.setTexture(y),w?.dispose(),h.host.dataset.textureRevision=String(++h.textureRevision),h.readyToken=p,n(h),p===h.token&&h.onStatus("ready","\u4E09\u7EF4\u9884\u89C8 \xB7 \u5355\u6307\u65CB\u8F6C / \u53CC\u6307\u7F29\u653E")}catch(d){h===i&&p===h.token&&(h.error=d,h.ink.setTexture(null),n(h),h.onStatus("error","\u8D34\u56FE\u8BFB\u53D6\u5931\u8D25\uFF1A"+d.message))}}}finally{h.drawingTexture=!1}}function c(h){let{data:x,width:p,height:d,type:b}=new Mo().parse(Au),T=new un(x,p,d,Qt,b);T.mapping=ps,T.flipY=!0,T.colorSpace=Hn,T.minFilter=T.magFilter=dt,T.needsUpdate=!0;let y=new vs(h);try{return y.fromEquirectangular(T)}finally{y.dispose(),T.dispose()}}async function u(h,x,p,d,{force:b=!1,interaction:T=()=>"rotate",onPlacement:y=()=>{},onPosition:w=()=>{}}={}){e();let v={host:h,draft:x,vesselType:x.canvas,options:{force:b,interaction:T,onPlacement:y,onPosition:w},onCamera:p,onStatus:d,cameraState:bo(x.cupCamera||it.default.get(x.canvas).camera),token:0,frame:0,draws:0,textureRevision:0,events:new AbortController};if(i=v,h.dataset.mode="loading",d("loading","\u6B63\u5728\u5EFA\u7ACB"+it.default.get(v.vesselType).name+"\u4E09\u7EF4\u9884\u89C8\u2026"),!b&&(x.cupPreviewMode==="static"||navigator.deviceMemory&&navigator.deviceMemory<=2)){r(v,"\u9759\u6001\u9884\u89C8 \xB7 \u8282\u80FD\u6A21\u5F0F\uFF0C\u4E0D\u53EF\u65CB\u8F6C");return}try{v.renderer=new _o({alpha:!0,antialias:!0,powerPreference:"low-power"}),v.renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.5)),v.renderer.outputColorSpace=Nt,v.renderer.toneMapping=or,v.renderer.toneMappingExposure=it.default.textile(x.canvas)?.95:1.16,v.renderer.domElement.setAttribute("aria-label",it.default.get(x.canvas).name+"\u771F\u5B9E\u4E09\u7EF4\u6A21\u578B\uFF0C\u53EF\u62D6\u52A8\u65CB\u8F6C"),h.prepend(v.renderer.domElement),v.scene=new Fs,v.camera=new Ut(38,1,.1,30),v.cup=Hu(x.canvas),v.ink=it.default.surface(x.canvas)?qu(v.cup):Xu(v.cup),v.scene.add(v.cup.group);let E=new $t().setFromObject(v.cup.group),_=E.getSize(new F);v.bounds={width:_.x,height:_.y,depth:_.z},h.dataset.vesselType=v.vesselType,v.environment=c(v.renderer),v.scene.environment=v.environment.texture,v.scene.environmentRotation.y=0,v.scene.environmentIntensity=it.default.textile(x.canvas)?.48:.86,v.scene.add(new sr(16776180,11709088,.64));let M=new us(16775924,it.default.textile(x.canvas)?1.8:2.35);M.position.set(-3.8,5.6,3.1),M.castShadow=!0,M.shadow.mapSize.set(1024,1024),M.shadow.camera.left=-3,M.shadow.camera.right=3,M.shadow.camera.top=3,M.shadow.camera.bottom=-3,M.shadow.camera.near=.5,M.shadow.camera.far=12,M.shadow.bias=it.default.textile(x.canvas)?1e-4:-2e-4,M.shadow.normalBias=it.default.textile(x.canvas)?.012:.025,M.shadow.radius=10,v.scene.add(M),v.renderer.shadowMap.enabled=!0,v.renderer.shadowMap.type=Ai,v.renderer.shadowMap.autoUpdate=!1,v.renderer.shadowMap.needsUpdate=!0,v.cup.group.traverse(K=>{K.isMesh&&(K.castShadow=K!==v.cup.print&&!K.userData.noShadow,K.receiveShadow=K!==v.cup.handle&&K.name!=="enamel-handle-joint"&&!K.userData.fabricFace)});let z=new us(16776437,.46);z.position.set(3.6,2.3,1.9),v.scene.add(z);let L=document.createElement("canvas");L.width=L.height=128;let P=L.getContext("2d"),D=P.createRadialGradient(64,64,0,64,64,64);D.addColorStop(0,"rgba(43,38,34,.36)"),D.addColorStop(.47,"rgba(43,38,34,.27)"),D.addColorStop(.64,"rgba(43,38,34,.065)"),D.addColorStop(1,"rgba(43,38,34,0)"),P.fillStyle=D,P.fillRect(0,0,128,128);let I=(it.default.get(v.vesselType).foot||.905)*3.55,N=new Xe(new li(I,I),new bi({map:new Gs(L),transparent:!0,depthWrite:!1,toneMapped:!1}));N.rotation.x=-Math.PI/2,N.position.y=E.min.y-.004,v.scene.add(N);let k=new Xe(new li(8,8),new er({opacity:it.default.textile(v.vesselType)?.018:.047,depthWrite:!1}));k.rotation.x=-Math.PI/2,k.position.y=E.min.y-.002,k.receiveShadow=!0,v.scene.add(k),v.floor=[N,k];let H=()=>{let K=h.clientWidth,ae=h.clientHeight;!K||!ae||(v.renderer.setSize(K,ae,!1),v.camera.aspect=K/ae,v.camera.fov=2*Math.atan(Math.tan(19*Math.PI/180)/Math.min(1,v.camera.aspect/1.1))*180/Math.PI,v.camera.updateProjectionMatrix(),n(v))};v.observer=new ResizeObserver(H),v.observer.observe(h),H();let J=new Map,X=0,C=()=>{let K=[...J.values()];return K.length===2?Math.hypot(K[0].x-K[1].x,K[0].y-K[1].y):0},O=v.renderer.domElement,W={signal:v.events.signal},Z=null,be=null,Te=null,He=null,j=null,ee=null,ue=new ar,Le=K=>{let ae=O.getBoundingClientRect();ue.setFromCamera(new ce((K.clientX-ae.left)/ae.width*2-1,-(K.clientY-ae.top)/ae.height*2+1),v.camera);let he=v.cup.group.children.filter(Re=>Re.visible&&Re.isMesh);return ue.intersectObjects(he,!1)[0]},pe=K=>v.ink.hitUV(Le(K)),ke=K=>{let ae=Le(K);if(!ae)return;let he;if(it.default.surface(v.vesselType)){let Re=ae.object.userData.fabricFace,De=it.default.position(v.vesselType,v.draft.vesselPlacement);if(!Re)return;he=it.default.region(v.vesselType,De.local).face===Re?De.id:Object.entries(it.default.positions[v.vesselType]).find(([,We])=>it.default.region(v.vesselType,We.local).face===Re)?.[0]}else he=v.ink.positionAt(ae);he&&w(he)},nt=()=>{if(!Z)return;be={...Z.current},Te=J.size===2?bs.default.pair([...J.values()]):null;let K=[...J.values()][0];He=K?pe({clientX:K.x,clientY:K.y}):null};O.addEventListener("pointerdown",K=>{if(!(J.size>=2||T()==="place"&&!it.default.hasPrint(v.draft.vesselPlacement))){if(J.size)ee=null;else if(ee=T()==="rotate"?{x:K.clientX,y:K.clientY,time:performance.now()}:null,j={...v.cameraState},T()==="place"){let ae={...v.draft.vesselPlacement};Z={original:ae,current:{...ae},changed:!1}}J.set(K.pointerId,{x:K.clientX,y:K.clientY}),O.setPointerCapture(K.pointerId),X=C(),nt(),K.preventDefault()}},W),O.addEventListener("pointermove",K=>{let ae=J.get(K.pointerId);if(ae){if(ee&&Math.hypot(K.clientX-ee.x,K.clientY-ee.y)>6&&(ee=null),J.set(K.pointerId,{x:K.clientX,y:K.clientY}),Z){if(J.size===2&&Te)Z.current=bs.default.pinch(be,Te,bs.default.pair([...J.values()]));else{let he=pe(K);if(!he||!He)return;let Re=be.x+v.ink.dragX(He,he);Z.current={...be,x:Math.round(it.default.region(v.vesselType,v.zone).around||it.default.region(v.vesselType,v.zone).mode==="wrap"?((Re+60)%120+120)%120-60:bs.default.clamp(Re,-60,60)),y:Math.round(bs.default.clamp(be.y+v.ink.dragY(He,he),-60,60))}}Z.changed=!0,y({vesselPlacement:Z.current},!1);return}if(J.size===1)s(v,{yaw:v.cameraState.yaw-(K.clientX-ae.x)*.009,pitch:v.cameraState.pitch+(K.clientY-ae.y)*.008},!1);else{let he=C();X&&he&&s(v,{distance:v.cameraState.distance*X/he},!1),X=he}}},W);let ie=K=>{if(!J.has(K.pointerId))return;if(J.delete(K.pointerId),X=C(),J.size){nt();return}Z?.changed&&y({vesselPlacement:Z.current},!0),Z=null,v.onCamera({...v.cameraState});let ae=ee&&performance.now()-ee.time<500&&Math.hypot(K.clientX-ee.x,K.clientY-ee.y)<=6;ee=null,ae&&ke(K)},le=()=>{ee=null,J.size&&(J.clear(),Z&&y({vesselPlacement:Z.original},!1),Z=null,j&&s(v,j))};O.addEventListener("pointerup",ie,W),O.addEventListener("pointercancel",le,W),O.addEventListener("lostpointercapture",K=>{J.has(K.pointerId)&&le()},W),O.addEventListener("webglcontextlost",K=>{K.preventDefault(),r(v,"\u9759\u6001\u9884\u89C8 \xB7 \u56FE\u5F62\u4E0A\u4E0B\u6587\u4E22\u5931\uFF0C\u53EF\u91CD\u8BD5\u4E09\u7EF4")},W),h.dataset.mode="three",o(v.draft)}catch(E){v.error=E,r(v,"\u9759\u6001\u9884\u89C8 \xB7 \u4E09\u7EF4\u8D44\u6E90\u6682\u4E0D\u53EF\u7528\uFF0C\u53EF\u91CD\u8BD5")}}function g(h){let x=i;!x?.renderer||x.failed||(h==="reset"&&(s(x,it.default.regionCamera(x.vesselType,x.draft.vesselPlacement)),a(x)),h==="in"&&s(x,{distance:x.cameraState.distance*.88}),h==="out"&&s(x,{distance:x.cameraState.distance/.88}),h==="left"&&s(x,{yaw:x.cameraState.yaw-.35}),h==="right"&&s(x,{yaw:x.cameraState.yaw+.35}))}function f(){let h=i;return h?{mode:h.failed?"static":h.cup?"three":"loading",camera:{...h.cameraState},modelId:h.cup?.group.uuid,vesselType:h.vesselType,error:h.error?.message,zone:h.zone,printEnabled:it.default.hasPrint(h.draft.vesselPlacement),printedFaces:it.default.surface(h.vesselType)?Object.keys(it.default.facePlacements(h.vesselType,h.draft.vesselPlacement)):it.default.hasPrint(h.draft.vesselPlacement)?[h.zone]:[],glaze:"#"+h.cup?.glaze.color.getHexString(),meshName:h.cup?.group.name,bodyName:h.cup?.body.name,geometryId:h.cup?.body.geometry.uuid,hasHandle:!!h.cup?.handle,bounds:h.bounds,printRegion:h.vesselType==="cup"?mi:{radius:it.default.get(h.vesselType).printRadius,zone:it.default.get(h.vesselType).zone},handleHasMap:!!h.cup?.handle?.material.map,inkOnBody:!!(h.ink&&h.texture&&!h.cup.print.visible),bodyHasMap:!!h.cup?.body.material.map,textureRevision:h.textureRevision,draws:h.draws,triangles:h.renderer?.info.render.triangles,textures:h.renderer?.info.memory.textures,geometries:h.renderer?.info.memory.geometries}:null}document.addEventListener("visibilitychange",()=>{document.hidden&&i?(cancelAnimationFrame(i.frame),i.frame=0):i?.renderer&&!i.failed&&n(i)}),window.addEventListener("pagehide",e);async function m(h,{transparent:x=!1}={}){let p=i;if(!p?.ink||p.failed||p.vesselType!==h.canvas)throw Error("\u4E09\u7EF4\u9884\u89C8\u5C1A\u672A\u5C31\u7EEA");o(h),p.ink.setHighlight?.(0);let d=p.token;await new Promise((v,E)=>{let _=performance.now(),M=()=>{if(p!==i||p.failed)return E(Error("\u4E09\u7EF4\u9884\u89C8\u5DF2\u5173\u95ED"));if(p.error)return E(p.error);if(p.readyToken===d)return v();if(performance.now()-_>1e4)return E(Error("\u9884\u89C8\u751F\u6210\u8D85\u65F6\uFF0C\u8BF7\u91CD\u8BD5"));setTimeout(M,25)};M()});let b=p.renderer.getSize(new ce),T=p.camera.aspect,y=p.camera.fov,w=document.createElement("canvas");w.width=w.height=640;try{p.renderer.setSize(640,640,!1),p.camera.aspect=1,p.camera.fov=38,p.camera.updateProjectionMatrix();let v=p.cameraState,E=v.distance*Math.cos(v.pitch),_=0;if(p.camera.position.set(E*Math.sin(v.yaw),_+v.distance*Math.sin(v.pitch),E*Math.cos(v.yaw)),p.camera.lookAt(p.vesselType==="cup"?.27:0,_,0),x){p.floor.forEach(I=>I.visible=!1),p.camera.updateMatrixWorld(),p.cup.group.updateWorldMatrix(!0,!0);let z=new F,L=new mt,P=Math.tan(19*Math.PI/180)*.97,D=0;p.cup.group.traverse(I=>{if(!I.isMesh||!I.visible)return;let N=I.geometry.attributes.position;L.multiplyMatrices(p.camera.matrixWorldInverse,I.matrixWorld);for(let k=0;k<N.count;k++)z.fromBufferAttribute(N,k).applyMatrix4(L),D=Math.max(D,z.z+Math.max(Math.abs(z.x),Math.abs(z.y))/P)}),p.camera.translateZ(D)}p.renderer.render(p.scene,p.camera);let M=w.getContext("2d");x||(M.fillStyle="#f4f3ef",M.fillRect(0,0,640,640)),M.drawImage(p.renderer.domElement,0,0,640,640)}finally{p.floor.forEach(v=>v.visible=!0),p.renderer.setSize(b.x,b.y,!1),p.camera.aspect=T,p.camera.fov=y,p.camera.updateProjectionMatrix(),n(p)}return new Promise((v,E)=>w.toBlob(_=>_?v(_):E(Error("\u65E0\u6CD5\u4FDD\u5B58\u9884\u89C8\u56FE")),"image/png"))}return{mount:u,update:o,control:g,dispose:e,diagnostics:f,capture:m}}window.Cup3D={...Yu(),createViewer:Yu};})();
