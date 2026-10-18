(() => {
'use strict';
const $ = s => document.querySelector(s), $$ = s => [...document.querySelectorAll(s)];
const cfg = window.NAVRYNT_CONFIG || {};
// Cross-project destinations are deployment configuration, never credentials.
for (const link of $$('a[href]')) {
 const value = link.getAttribute('href');
 for (const [oldBase, newBase] of [
  ['https://kaandevs-ops.github.io/navrynt-demo-public/', cfg.publicDemoUrl],
  ['https://kaandevs-ops.github.io/navrynt-website-public/', cfg.projectWebsiteUrl],
  ['https://github.com/kaandevs-ops/navrynt-website-public', cfg.repositoryUrl]
 ]) {
  if (newBase && value.startsWith(oldBase)) { link.href = newBase.replace(/\/$/, '') + '/' + value.slice(oldBase.length).replace(/^\//, ''); break; }
 }
}

const menu = $('.web-menu'), nav = $('#web-navigation'), mobile = matchMedia('(max-width:1000px)');
let menuOpen = false;
function setMenu(open, restore=false){
 menuOpen = Boolean(open && mobile.matches);
 nav?.classList.toggle('open',menuOpen);
 menu?.setAttribute('aria-expanded',String(menuOpen));
 menu?.setAttribute('aria-label',menuOpen?'Close navigation':'Open navigation');
 if(nav) nav.inert = mobile.matches && !menuOpen;
 $('main')?.toggleAttribute('inert',menuOpen);
 $('.web-footer')?.toggleAttribute('inert',menuOpen);
 document.body.style.overflow = menuOpen?'hidden':'';
 if(menuOpen) nav?.querySelector('a')?.focus();
 else if(restore) menu?.focus();
}
if(nav){ setMenu(false); menu?.addEventListener('click',()=>setMenu(!menuOpen)); mobile.addEventListener('change',()=>setMenu(false)); nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>setMenu(false))); }
document.addEventListener('keydown',e=>{
 if(!menuOpen) return;
 if(e.key==='Escape'){e.preventDefault();setMenu(false,true);return;}
 if(e.key==='Tab'){
  const focusables=[...document.querySelectorAll('.web-header a,.web-menu')].filter(el=>el.getClientRects().length && !el.closest('[inert]'));
  const first=focusables[0], last=focusables.at(-1);
  if(e.shiftKey && document.activeElement===first){e.preventDefault();last.focus();}
  else if(!e.shiftKey && document.activeElement===last){e.preventDefault();first.focus();}
 }
});
const records = window.NAVRYNT_RECORDINGS || [];
const tour={id:'tour',title:'NAVRYNT — 24-second product tour',source:'Edited from four original application recordings',date:'16 Oct 2026',scope:'Silent edited tour with chapter titles and scope notes. Source footage is typically 3–4 fps; short clips hold their final frame. Exported at 24 fps without motion interpolation. This is not a continuous live session.',poster:'assets/recordings/aircraft.png',video:'assets/recordings/navrynt-real-product-tour.mp4'};
const getRecord = id => id==='tour'?tour:records.find(r=>r.id===id);
const dialog = $('#media-dialog'), modalVideo = $('#modal-video'), modalImage = $('#modal-image');
let opener;
function showMedia(id, imageOnly, button){
 const r=getRecord(id);if(!r||!dialog)return;
 opener=button;$('#showcase-video')?.pause();
 $('#modal-title').textContent=r.title;
 $('.dialog-top .eyebrow').textContent=id==='tour'?'EDITED TOUR / ACTUAL APPLICATION CAPTURES':'ACTUAL APPLICATION CAPTURE';
 $('#modal-source').textContent=`${r.source} / ${r.date}`;
 $('#modal-scope').textContent=r.scope+' Historical application capture; scope is specific to this run.';
 modalVideo.pause();modalVideo.hidden=imageOnly;modalImage.hidden=!imageOnly;
 $('#modal-play').parentElement.hidden=imageOnly;$('#playback-state').textContent='';
 if(imageOnly){modalVideo.removeAttribute('src');modalVideo.load();modalImage.src=r.poster;modalImage.alt=r.title+' — original application screenshot';}
 else{modalVideo.poster=r.poster;modalVideo.src=r.video;$('#modal-captions').src=id==='tour'?'assets/recordings/navrynt-real-product-tour.vtt':`assets/recordings/${r.id}.vtt`;modalVideo.setAttribute('aria-label',r.title+' recording');modalVideo.load();}
 $('#modal-raw').href=imageOnly?r.poster:r.video;
 dialog.showModal(); document.body.style.overflow='hidden';
}
$$('[data-play]').forEach(b=>b.addEventListener('click',()=>showMedia(b.dataset.play,false,b)));
$$('[data-image]').forEach(b=>b.addEventListener('click',()=>showMedia(b.dataset.image,true,b)));
$('#modal-play')?.addEventListener('click',async()=>{
 if(modalVideo.paused){try{await modalVideo.play();}catch(e){$('#playback-state').textContent='Playback could not start. Use Open original file to view the recording.';}}
 else modalVideo.pause();
});
modalVideo?.addEventListener('play',()=>{$('#modal-play').textContent='Pause recording Ⅱ';$('#playback-state').textContent='Playing actual capture';});
modalVideo?.addEventListener('pause',()=>{$('#modal-play').textContent=modalVideo.ended?'Replay recording ↻':'Play recording ▶';$('#playback-state').textContent=modalVideo.ended?'Recording complete':'Paused';});
$('[data-close-media]')?.addEventListener('click',()=>dialog.close());
dialog?.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom) dialog.close();}});
dialog?.addEventListener('keydown',e=>{
 if(e.key!=='Tab') return;
 const nodes=[...dialog.querySelectorAll('button,a[href],video[controls],[tabindex]')].filter(el=>el.getClientRects().length&&!el.closest('[hidden]'));
 const first=nodes[0],last=nodes.at(-1);
 if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
 else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
});
dialog?.addEventListener('close',()=>{modalVideo.pause();modalVideo.removeAttribute('src');modalVideo.load();document.body.style.overflow='';opener?.focus();});
const showcase=$('#showcase-video');
$$('[data-chapter]').forEach(b=>b.addEventListener('click',()=>{
 const r=getRecord(b.dataset.chapter);if(!r||!showcase)return;
 showcase.pause();showcase.src=r.video;showcase.poster=r.poster;showcase.setAttribute('aria-label',r.title+' recording');showcase.load();
 $('#showcase-label').textContent=r.title.toUpperCase();$('#showcase-source').textContent=`${r.source} / ${r.date}`;$('#showcase-scope').textContent=r.scope;
 $$('[data-chapter]').forEach(x=>{const active=x===b;x.classList.toggle('active',active);x.setAttribute('aria-pressed',String(active));});
}));
const search=$('#recording-search'), filters=$$('[data-filter]');let category='All';
function filterRecords(){
 const query=(search?.value||'').trim().toLowerCase();let count=0;
 $$('.record-card').forEach(card=>{const show=(category==='All'||card.dataset.category===category)&&card.dataset.search.includes(query);card.hidden=!show;if(show)count++;});
 if($('#recording-count'))$('#recording-count').textContent=`${count} recording${count===1?'':'s'}`;
 if($('#no-recordings'))$('#no-recordings').hidden=count>0;
}
filters.forEach(b=>b.addEventListener('click',()=>{category=b.dataset.filter;filters.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));filterRecords();}));
search?.addEventListener('input',filterRecords);
$('#reset-recordings')?.addEventListener('click',()=>{category='All';search.value='';filters.forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.filter==='All')));filterRecords();search.focus();});
})();
