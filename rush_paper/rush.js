// Name: letters react to hover
var n=document.getElementById('name'),t='Maya Lindqvist';
t.split('').forEach(function(c,i){var s=document.createElement('span');s.className='l';s.textContent=c===' '?'\u00A0':c;s.style.animationDelay=(i*40)+'ms';n.appendChild(s)});
// Wave
document.getElementById('hi').onclick=function(){var w=document.getElementById('wave');w.classList.remove('go');void w.offsetWidth;w.classList.add('go')};
// Theme
var r=document.documentElement,dark=matchMedia('(prefers-color-scheme:dark)').matches;
document.getElementById('theme').onclick=function(){dark=!dark;r.setAttribute('data-theme',dark?'dark':'light')};
// Accordion
document.querySelectorAll('.job>button').forEach(function(b){b.onclick=function(){
  var o=b.getAttribute('aria-expanded')==='true';
  b.setAttribute('aria-expanded',!o);b.nextElementSibling.classList.toggle('open',!o)}});
// Skill filter
var chips=document.querySelectorAll('.chip'),jobs=document.querySelectorAll('.job'),hint=document.getElementById('hint');
chips.forEach(function(c){c.onclick=function(){
  var on=c.getAttribute('aria-pressed')==='true';
  chips.forEach(function(x){x.setAttribute('aria-pressed','false')});
  if(on){jobs.forEach(function(j){j.classList.remove('dim')});hint.textContent='Tap a skill to see where I used it.';return}
  c.setAttribute('aria-pressed','true');var k=0;
  jobs.forEach(function(j){var m=j.dataset.tags.split(' ').indexOf(c.dataset.tag)>-1;j.classList.toggle('dim',!m);if(m)k++});
  hint.textContent='Used in '+k+' of '+jobs.length+' roles.'}});
