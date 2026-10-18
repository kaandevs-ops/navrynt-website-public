(() => {
'use strict';
const search=document.querySelector('#catalogue-search');
if(!search)return;
const category=document.querySelector('#catalogue-category');
const evidence=document.querySelector('#catalogue-evidence');
const reset=document.querySelector('#catalogue-reset');
const status=document.querySelector('#catalogue-count');
const empty=document.querySelector('#catalogue-empty');
const cards=[...document.querySelectorAll('.feature-card')];
const groups=[...document.querySelectorAll('[data-feature-group]')];
const normalize=value=>value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu,'').replace(/ı/g,'i');
const haystacks=new Map(cards.map(card=>[card,normalize(card.dataset.featureSearch).split(/[^\p{L}\p{N}]+/u).filter(Boolean)]));
let language='en';
function filter(){
 const terms=normalize(search.value.trim()).split(/\s+/).filter(Boolean);
 let count=0;
 for(const card of cards){
  const visible=(category.value==='all'||category.value===card.dataset.featureCategory)&&(evidence.value==='all'||evidence.value===card.dataset.featureEvidence)&&terms.every(term=>haystacks.get(card).some(word=>word.startsWith(term)));
  card.hidden=!visible;if(visible)count++;
 }
 for(const group of groups)group.hidden=![...group.querySelectorAll('.feature-card')].some(card=>!card.hidden);
 empty.hidden=count>0;
 status.textContent=language==='tr'?`${cards.length} özellikten ${count} tanesi gösteriliyor`:`${count} of ${cards.length} documented entries`;
}
function setLanguage(next){
 language=next==='tr'?'tr':'en';
 document.documentElement.lang=language;
 document.title=language==='tr'?'NAVRYNT tüm özellikler — gereksinimler ve kanıt':'All NAVRYNT features — scope, requirements and evidence';
 document.documentElement.dataset.catalogueLanguage=language;
 for(const button of document.querySelectorAll('[data-feature-lang]'))button.setAttribute('aria-pressed',String(button.dataset.featureLang===language));
 for(const option of document.querySelectorAll('[data-option-en]'))option.textContent=language==='tr'?option.dataset.optionTr:option.dataset.optionEn;
 search.placeholder=language==='tr'?'Örn. iris, uydu, yedek':'e.g. iris, satellite, backup';
 const url=new URL(location.href);if(language==='tr')url.searchParams.set('lang','tr');else url.searchParams.delete('lang');
 history.replaceState(null,'',url.pathname+url.search+url.hash);filter();
}
search.addEventListener('input',filter);category.addEventListener('change',filter);evidence.addEventListener('change',filter);
reset.addEventListener('click',()=>{search.value='';category.value='all';evidence.value='all';filter();search.focus();});
for(const button of document.querySelectorAll('[data-feature-lang]'))button.addEventListener('click',()=>setLanguage(button.dataset.featureLang));
function revealAnchor(){
 if(!location.hash.startsWith('#feature-'))return;
 const card=document.getElementById(location.hash.slice(1));
 if(card?.classList.contains('feature-card')&&card.hidden){search.value='';category.value='all';evidence.value='all';filter();card.scrollIntoView();}
}
window.addEventListener('hashchange',revealAnchor);
setLanguage(new URLSearchParams(location.search).get('lang'));revealAnchor();
})();
