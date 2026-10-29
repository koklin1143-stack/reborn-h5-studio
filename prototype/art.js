/* Original vector interpretations for this prototype. These are design sketches,
   not authenticated collection images or production-ready enamel artwork. */
(() => {
  'use strict';
  let sequence = 0;
  const C = {blue:'#245b71',red:'#ba6555',green:'#748879',gold:'#c5a067',paper:'#fffdf7'};
  const palette = [
    {id:'white',color:'#f9faf7',rim:'#245b71',name:'经典白'},
    {id:'cream',color:'#f2e9db',rim:'#245b71',name:'暖米白'},
    {id:'blue',color:'#dce7e5',rim:'#245b71',name:'浅搪瓷蓝'}
  ];
  const names = {magpie:'喜鹊花枝',peony:'牡丹花开',happiness:'双喜记忆'};
  const icons={back:'<path d="m15 18-6-6 6-6"/>',arrow:'<path d="m9 18 6-6-6-6"/>',home:'<path d="m3 10 9-7 9 7v10H3z"/><path d="M9 20v-7h6v7"/>',pen:'<path d="m12 19 7-7 3 3-7 7-4 1zM19 12l-2-2 2-2 2 2"/><path d="M3 21h6"/>',user:'<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3-7 8-7s8 3 8 7"/>',heart:'<path d="M20 7c-1-4-6-4-8 0-2-4-7-4-8 0-1 4 3 7 8 12 5-5 9-8 8-12z"/>',plus:'<path d="M12 5v14M5 12h14"/>',upload:'<path d="M12 17V3m0 0-5 5m5-5 5 5M4 15v5h16v-5"/>',check:'<path d="m5 12 4 4L19 6"/>',file:'<path d="M6 3h9l4 4v14H6zM15 3v5h4M9 12h7M9 16h6"/>',clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l4 3"/>',layers:'<path d="m2 9 10-6 10 6-10 6zM2 14l10 6 10-6"/>',award:'<circle cx="12" cy="9" r="6"/><path d="m8 14-2 8 6-3 6 3-2-8"/>',spark:'<path d="m12 2 2 7 7 3-7 2-2 8-2-8-7-2 7-3z"/>',info:'<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 7h.01"/>',trash:'<path d="M4 6h16M8 6V4h8v2m2 0-1 15H7L6 6M10 10v7M14 10v7"/>',mic:'<rect x="9" y="3" width="6" height="12" rx="3"/><path d="M5 11a7 7 0 0 0 14 0M12 18v4m-4 0h8"/>',gift:'<rect x="3" y="9" width="18" height="12" rx="1"/><path d="M3 13h18M12 9v12M12 9c-6 0-9-2-7-5s7 5 7 5zm0 0c6 0 9-2 7-5s-7 5-7 5z"/>',recycle:'<path d="m9 3 3-1 3 5M8 7 6 11l-4-2M5 9l3-6 3 1M19 10l3 5-4 1M22 15l-3 5-3-1M17 21h-7l1-4M10 21H4l1-4"/>',move:'<path d="M12 3v18M3 12h18m-9-9-3 3m3-3 3 3M3 12l3-3m-3 3 3 3m15-3-3-3m3 3-3 3m-6 6-3-3m3 3 3-3"/>'};
function ic(n,size=20){return `<svg class="ic" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[n]||icons.info}</svg>`}

  function blossom(x,y,s=1) {
    return `<g transform="translate(${x} ${y}) scale(${s})" fill="${C.red}">${[0,72,144,216,288].map(a=>`<path d="M0 2C-8-1-10-11-5-15C1-21 11-13 7-6C6-2 3 1 0 2Z" transform="rotate(${a})"/>`).join('')}<g fill="${C.paper}"><circle r="3.4"/><circle cx="-4" cy="-3" r="1.1"/><circle cx="4" cy="-3" r="1.1"/><circle cy="5" r="1.1"/></g><circle r="1.5" fill="${C.gold}"/></g>`;
  }
  function magpie() {
    return `<g stroke-linecap="round" stroke-linejoin="round">
      <g fill="none" stroke="${C.green}"><path d="M-70 39C-39 24-8 25 20 24C45 23 61 10 72-8" stroke-width="2.8"/><path d="M24 23C26 4 37-12 49-32M43 6C57 7 66 2 75-5M-30 29C-44 18-52 14-65 14" stroke-width="1.6"/></g>
      <g fill="${C.green}"><path d="M27 9C12 2 13-10 13-14C29-14 35-5 27 9Z"/><path d="M45 6C51-8 63-11 71-8C69 4 56 10 45 6Z"/><path d="M-44 22C-58 26-65 20-70 12C-55 9-48 12-44 22Z"/><path d="M36-8C32-20 36-29 42-34C50-23 47-14 36-8Z"/></g>
      <g stroke="${C.gold}" stroke-width="1.6" fill="none"><path d="M-18 10L-16 25L-23 29M-16 25L-9 27M-6 10L-2 23L-9 27M-2 23L4 25"/></g>
      <path d="M-34-5C-39 16-48 34-67 52C-47 49-24 28-17 8Z" fill="${C.blue}"/>
      <path d="M-34 7C-41 22-50 35-57 42" fill="none" stroke="#8ba6ad" stroke-width="2"/>
      <path d="M-27-34C-12-42 6-35 11-19C15-7 6 8-7 12C-21 16-37 6-40-8C-44-20-36-29-27-34Z" fill="${C.blue}"/>
      <path d="M-27-25C-11-30 7-16 5-5C3 6-9 11-18 5C-27-1-31-15-27-25Z" fill="${C.paper}"/>
      <path d="M-28-31C-12-36 1-30 1-18C2-11-4-6-17-2C-15-14-22-25-28-31Z" fill="${C.blue}"/>
      <path d="M-23-26C-17-23-13-18-12-11M-18-29C-11-25-7-20-6-14" stroke="#7595a1" stroke-width="1.25" fill="none"/>
      <path d="M-9-29C-13-41-5-52 7-48C18-45 20-34 12-26L4-22Z" fill="${C.blue}"/>
      <path d="M15-39L30-35L16-32Z" fill="${C.gold}"/>
      <circle cx="9.5" cy="-39" r="1.7" fill="${C.paper}"/>
      <path d="M-5-46L-11-52M1-48L-1-54" stroke="${C.blue}" stroke-width="1.5"/>
      ${blossom(48,-40,.85)}${blossom(68,-15,.55)}${blossom(24,-21,.35)}
      <g fill="${C.gold}"><circle cx="66" cy="-48" r="1.5"/><circle cx="36" cy="-58" r="1.2"/><circle cx="4" cy="38" r="1.2"/></g>
    </g>`;
  }
  function peony() {
    return `<g stroke-linecap="round" stroke-linejoin="round">
      <path d="M0 17C-3 33 0 51 0 66M0 47C-15 36-28 35-46 33M0 55C12 40 24 35 45 36" fill="none" stroke="${C.green}" stroke-width="2"/>
      <g fill="${C.green}"><path d="M-2 43C-18 24-42 21-58 29C-49 47-29 52-2 43Z"/><path d="M0 54C14 29 35 28 53 35C43 54 24 62 0 54Z"/><path d="M-3 31C-11 22-23 20-30 24C-25 35-14 39-3 31Z"/></g>
      <g stroke="#536f64" stroke-width="1.05" fill="none"><path d="M-5 43L-45 31M6 51L42 38M-25 37L-29 30M26 44L29 36"/></g>
      <g transform="translate(0 -13)">
        <path d="M-45-14C-58-19-57-32-44-33C-47-47-35-54-24-45C-17-61-4-60 3-48C13-61 28-56 29-43C45-45 55-34 45-22C61-17 59-3 44 3C51 15 42 25 30 22C26 36 10 36 1 27C-11 41-25 36-28 25C-45 31-57 21-48 9C-66 6-62-9-45-14Z" fill="#f1d2c6" stroke="${C.red}" stroke-width="1.3"/>
        <g fill="none" stroke="${C.red}" stroke-width="1" opacity=".65"><path d="M-42-29C-35-17-27-12-18-11M-23-42C-22-25-14-19-10-17M3-46C-3-30 0-23 4-16M28-39C18-27 17-20 17-13M43-20C28-18 22-11 20-4M42 4C27-1 19 2 15 9M28 21C18 12 11 11 6 13M2 26C5 15 0 10-4 7M-28 22C-15 17-12 10-12 5M-46 5C-31 4-24-1-21-7"/></g>
        <path d="M-33-19C-42-31-28-41-17-32C-9-47 7-46 12-33C27-42 40-28 31-16C44-7 35 8 23 5C20 20 3 22-3 10C-16 25-34 15-29 2C-45 3-46-13-33-19Z" fill="#e5ac99" stroke="${C.red}" stroke-width="1.2"/>
        <path d="M-20-17C-25-28-12-33-5-23C2-35 17-29 14-18C28-18 29-3 16 0C17 13 1 15-4 5C-15 15-28 7-22-4C-34-10-29-21-20-17Z" fill="#d98d77" stroke="${C.red}" stroke-width="1.1"/>
        <path d="M-8-16C-15-23-3-29 3-20C13-25 21-15 12-9C17 2 4 7-1-1C-13 4-18-7-8-10Z" fill="${C.red}"/>
        <g fill="${C.gold}"><circle cx="2" cy="-11" r="4.3"/><circle cx="-4" cy="-15" r="1.5"/><circle cx="8" cy="-16" r="1.4"/><circle cx="8" cy="-7" r="1.3"/><circle cx="-3" cy="-5" r="1.3"/></g>
      </g>
      <path d="M52-29C59-40 63-43 67-42C71-37 68-32 61-28Z" fill="${C.red}"/>
      <path d="M43 19C50 3 51-11 59-29" fill="none" stroke="${C.green}" stroke-width="1.4"/>
      <path d="M51-5C59-15 67-14 72-11C66-2 58 0 51-5Z" fill="${C.green}"/>
    </g>`;
  }
  function happiness() {
    // Vector construction keeps the decorative double-xi independent of local fonts.
    const xi = `<path d="M-22-55H22V-49H-22ZM-3-64H3V-38H-3ZM-22-42H22V-36H-22ZM-13-7L-5-1L-9 3L-17-3ZM13-7L17-3L9 3L5-1ZM-23 5H23V11H-23Z"/><path d="M-18-30H18V-12H-18ZM-12-24V-18H12V-24Z" fill-rule="evenodd"/><path d="M-19 17H19V43H-19ZM-12 24V36H12V24Z" fill-rule="evenodd"/>`;
    return `<g stroke-linecap="round" stroke-linejoin="round">
      <circle cy="-5" r="72" fill="none" stroke="${C.red}" stroke-width="1.15" opacity=".68"/>
      <circle cy="-5" r="65.5" fill="none" stroke="${C.gold}" stroke-width=".8"/>
      <g fill="${C.red}" transform="translate(0 2) scale(.82)"><g transform="translate(-29 0)">${xi}</g><g transform="translate(29 0)">${xi}</g></g>
      <g fill="${C.green}"><path d="M-48 52C-62 48-66 40-64 32C-51 32-44 40-48 52Z"/><path d="M-42 57C-43 43-34 39-29 41C-24 50-30 57-42 57Z"/><path d="M48 52C62 48 66 40 64 32C51 32 44 40 48 52Z"/><path d="M42 57C43 43 34 39 29 41C24 50 30 57 42 57Z"/></g>
      <path d="M-56 43C-40 65-20 71 0 70C20 71 40 65 56 43" fill="none" stroke="${C.gold}" stroke-width="1.6"/>
      <g fill="${C.red}"><circle cy="69" r="3.4"/><circle cx="-11" cy="68" r="2"/><circle cx="11" cy="68" r="2"/></g>
    </g>`;
  }
  function motif(type='magpie') {return type==='peony'?peony():type==='happiness'?happiness():magpie();}
  function disk(type='magpie') {
    const id='plate-'+(++sequence);
    return `<svg viewBox="0 0 220 200" role="img" aria-label="${names[type] || names.magpie}搪瓷纹样示意"><defs><linearGradient id="${id}-glaze" x1="0" x2="1" y2="1"><stop stop-color="#fffef9"/><stop offset="1" stop-color="#edf0e8"/></linearGradient></defs><ellipse cx="110" cy="104" rx="86" ry="83" fill="#203c45" opacity=".07"/><circle cx="110" cy="99" r="83" fill="url(#${id}-glaze)" stroke="${C.blue}" stroke-width="4"/><circle cx="110" cy="99" r="76.5" fill="none" stroke="${C.blue}" stroke-width=".7" opacity=".45"/><circle cx="110" cy="99" r="70" fill="none" stroke="${C.gold}" stroke-width=".7" opacity=".5"/><g transform="translate(110 99) scale(.79)">${motif(type)}</g></svg>`;
  }
  function panel(type='magpie') {
    return `<svg viewBox="0 0 300 280" role="img" aria-label="${names[type] || names.magpie} · 创作示意纹样"><circle cx="150" cy="137" r="107" fill="${C.paper}" opacity=".48"/><circle cx="150" cy="137" r="114" fill="none" stroke="${type==='happiness'?C.red:C.blue}" stroke-width=".7" opacity=".16"/><g transform="translate(150 139) scale(1.43)">${motif(type)}</g></svg>`;
  }
  function cup(w={}) {
    const {pattern='magpie',cup:color='white',source='museum'}=w;
    const scale=Number.isFinite(Number(w.scale))?Math.max(40,Math.min(160,Number(w.scale))):100;
    const offset=Number.isFinite(Number(w.x ?? w.offset))?Math.max(-60,Math.min(60,Number(w.x ?? w.offset))):0; const shiftY=Number(w.y)||0, rotation=Number(w.rotation)||0;
    const p=palette.find(x=>x.id===color)||palette[0], id='cup-'+(++sequence);
    const image=typeof w.image==='string'&&/^(?:data:image\/(?:jpeg|png|webp|gif);base64,[a-z0-9+/=]+|blob:[a-z0-9:/.-]+)$/i.test(w.image)?w.image:'';
    const artwork=source==='own' ? image ? `<image href="${image}" x="-54" y="-48" width="108" height="96" preserveAspectRatio="xMidYMid meet"/>` : `<g fill="none" stroke="#7d9aa4" stroke-width="1.6"><rect x="-43" y="-33" width="86" height="66" rx="5" stroke-dasharray="4 4"/><path d="M-29 20L-8-2L6 10L23-12L35 2"/><circle cx="-22" cy="-17" r="5"/></g>` : motif(pattern);
    const highlight=color==='cream'?'#fff7e8':color==='blue'?'#edf4f0':'#fffefa';
    return `<svg viewBox="0 0 340 280" role="img" aria-label="搪瓷杯创作预览"><defs>
      <linearGradient id="${id}-glaze" x1="0" y1="0" x2="1" y2="0"><stop stop-color="${p.color}"/><stop offset=".3" stop-color="${highlight}"/><stop offset=".68" stop-color="${p.color}"/><stop offset="1" stop-color="${p.color}"/></linearGradient>
      <linearGradient id="${id}-inside" x1="0" y1="0" x2="0" y2="1"><stop stop-color="#ccd8d6"/><stop offset=".78" stop-color="${highlight}"/></linearGradient>
      <clipPath id="${id}-mask"><path d="M62 68L69 214C72 235 243 235 247 214L254 68Z"/></clipPath>
    </defs>
    <ellipse cx="170" cy="244" rx="101" ry="10" fill="#244855" opacity=".09"/>
    <path d="M249 99C302 78 326 114 307 153C295 178 275 187 249 176" fill="none" stroke="${p.rim}" stroke-width="17"/>
    <path d="M249 99C302 78 326 114 307 153C295 178 275 187 249 176" fill="none" stroke="${highlight}" stroke-width="12"/>
    <path d="M62 68L69 214C72 235 243 235 247 214L254 68Z" fill="url(#${id}-glaze)" stroke="#b5c5c3" stroke-width="1.25"/>
    <path d="M72 209C100 224 218 227 244 209" fill="none" stroke="#b7c8c5" stroke-width="1.1" opacity=".55"/>
    <g clip-path="url(#${id}-mask)"><g transform="translate(${158+offset} ${151+shiftY}) rotate(${rotation}) scale(${scale/118})">${artwork}</g><path d="M78 91L82 201" fill="none" stroke="#fff" stroke-width="8" opacity=".34" stroke-linecap="round"/></g>
    <ellipse cx="158" cy="68" rx="97" ry="21" fill="${p.rim}"/>
    <ellipse cx="158" cy="67" rx="90" ry="15.3" fill="url(#${id}-inside)"/>
    <path d="M76 67C99 48 216 48 241 67" fill="none" stroke="#fdfdf7" stroke-width="1.4" opacity=".65"/>
    <path d="M65 72C94 94 222 94 251 72" fill="none" stroke="${p.rim}" stroke-width="3.4"/>
    <path d="M72 215C103 232 213 232 243 215" fill="none" stroke="#a1b5b4" stroke-width="1" opacity=".5"/>
    </svg>`;
  }
  window.Art={cup,disk,icon:ic,palette,panel,motif};
})();
