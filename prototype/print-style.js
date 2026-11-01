/* Original two-ink fish studies. These illustrate choices; they are never generation inputs. */
(() => {
 'use strict';
 const G=window.PatternGrammar;
 const studies={
  classic:{
   name:'保留经典',description:'保留鱼背、鱼鳍和腹部露白的层次',
   // A rounded back, a forked brush tail and small fin cuts in the belly.
   body:'M12 19Q23 19 36 31Q47 18 63 19C77 18 88 25 97 34Q85 46 67 47Q47 49 35 37Q24 43 12 49Q15 40 23 34Q16 29 12 19ZM38 29Q41 18 50 12Q59 12 68 17Q52 16 38 29Z',
   cuts:'M39 35Q50 41 69 41Q55 47 42 39ZM75 23Q82 31 76 41Q85 34 80 27ZM17 23L32 33L21 28Z',
   accent:'M52 39Q56 32 66 29Q64 38 52 39Z',eye:[87,31]
  },
  modern:{
   name:'现代转译',description:'鱼身归为大色块，用一道留白分出鱼头',
   body:'M13 19L34 33L13 48ZM37 31Q63 7 82 23L97 33L79 44Q61 52 37 36Z',
   cuts:'M76 21L81 23L67 47L64 47Z',
   accent:'M51 46L62 39L61 46L51 52Z',eye:[87,31]
  },
  free:{
   name:'自由融合',description:'拉长鱼尾，把鱼身和鳍重组成回旋的弧线',
   body:'M9 22C23 29 36 23 47 19C64 11 77 12 85 19C67 16 55 24 42 28C29 33 17 33 9 22ZM17 47C23 32 36 33 51 26C66 19 82 12 92 20L99 27Q92 37 83 38C71 39 63 34 56 33Q68 33 77 31C63 27 50 32 38 35Q24 39 17 47Z',
   cuts:'M81 19Q87 23 85 29Q90 23 85 19Z',
   accent:'M48 37Q63 35 72 41Q55 39 40 50Q42 43 48 37Z',eye:[92,24]
  }
 };
 function sample(id,inks){
  const s=studies[id], [main,accent]=inks;
  return `<svg class="ink-study" viewBox="0 0 108 66" aria-hidden="true" focusable="false"><path fill="${main}" d="${s.body}"/><path fill="var(--study-paper)" d="${s.cuts}"/><path fill="${accent}" d="${s.accent}"/><circle cx="${s.eye[0]}" cy="${s.eye[1]}" r="2" fill="var(--study-paper)"/></svg>`;
 }
 function render(d,{open,busy,extra}){
  const reference=G.references[d.sourceMotifId];
  if(!reference)return '';
  const inks=G.printPalette(d.sourceMotifId),direction=studies[d.direction]?d.direction:'classic';
  const option=(action,id,active,description,inside)=>`<button type="button" data-action="${action}" data-id="${id}" aria-pressed="${active}" aria-label="${description}" ${busy?'disabled':''}>${inside}</button>`;
  const variants=Object.entries(studies).map(([id,s])=>option('in-direction',id,direction===id,s.name+'：'+s.description,sample(id,inks)+'<span>'+s.name+'</span>')).join('');
  return `<details class="creation-options print-style" ${open?'open':''}><summary><span class="style-seal">${sample(direction,inks)}</span><span class="style-caption"><b>AI 改编风格</b><small>${reference.study} · ${studies[direction].name}</small></span><svg class="style-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></summary><div class="style-comparison">
   <p class="style-heading" id="style-treatment">创作方向<small>鱼纹示意</small></p><div class="treatment-choices" role="group" aria-labelledby="style-treatment">${variants}</div>${extra}
  </div></details>`;
 }
 const modeNames={gesture:'沿用我的画法',redesign:'搪瓷式重绘'};
 const layoutNames={single:'单幅主纹',sprig:'聚成一簇',rosette:'围成一团',border:'排成一带'};
 function layoutSample(layout,inks){
  const [main,accent]=inks;
  const petal=(x,y,angle,size)=>`<g transform="translate(${x} ${y}) rotate(${angle}) scale(${size})"><path d="M0 0Q-9-4-6-13Q1-10 0 0ZM2-1Q1-12 9-16Q12-7 2-1Z" fill="${main}"/><circle cx="-6" cy="-2" r="2.5" fill="${accent}"/></g>`;
  let marks;
  if(layout==='single')marks=petal(0,12,10,1.6);
  else if(layout==='border')marks=[-25,-9,7,23].map(x=>petal(x,6,30,.83)).join('');
  else if(layout==='rosette')marks=[0,72,144,216,288].map(a=>`<g transform="rotate(${a})">${petal(0,-3,5,.82)}</g>`).join('');
  else marks='<path d="M-19 13Q0 8 18-11" fill="none" stroke="'+main+'" stroke-width="1.5"/>'+petal(-11,10,-24,.72)+petal(0,5,8,1.08)+petal(13,-4,38,.75);
  return `<svg viewBox="-37 -22 74 44" aria-hidden="true">${marks}</svg>`;
 }
 function choice(group,id,label,art,selected,hint=''){
  return `<label class="recipe-choice"><input type="radio" name="${group}" value="${id}" ${selected===id?'checked':''}><span class="recipe-tile">${art}<b>${label}</b>${hint?'<small>'+hint+'</small>':''}</span></label>`;
 }
 function recipeChoices(plan){
  const inks=G.printPalette(plan.reference);
  return '<fieldset class="recipe-choices"><legend>纹样怎么排？</legend><div class="recipe-layout-grid">'+Object.entries(layoutNames).filter(([id])=>plan.technique||id!=='single').map(([id,label])=>choice('pattern-layout',id,label,layoutSample(id,inks),plan.layout)).join('')+'</div></fieldset>';
 }
 window.PrintStyle={render,recipeChoices,modeName:id=>modeNames[id]||modeNames.gesture,name:id=>studies[id]?.name||studies.classic.name};
})();
