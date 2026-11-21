const screens=[...document.querySelectorAll('.screen')];
function show(id){screens.forEach(s=>s.classList.toggle('active',s.id===id));const el=document.getElementById(id);if(el)el.scrollTop=0;}
document.getElementById('open-envelope').addEventListener('click',()=>show('floral-screen'));
document.getElementById('reveal-flowers').addEventListener('click',()=>show('bouquet-screen'));
document.getElementById('explore-bouquet').addEventListener('click',()=>document.getElementById('flower-list').scrollIntoView({behavior:'smooth',block:'start'}));
document.getElementById('scroll-hint').addEventListener('click',()=>document.getElementById('flower-list').scrollIntoView({behavior:'smooth',block:'start'}));
document.querySelectorAll('.flower-item').forEach((item)=>item.addEventListener('click',()=>{item.classList.toggle('chosen');}));
document.getElementById('to-letter').addEventListener('click',()=>{show('letter-screen');revealNext();});
let shown=0;const lines=[...document.querySelectorAll('.reveal-line')];
function revealNext(){if(shown<lines.length){lines[shown].classList.add('shown');shown++;}const b=document.getElementById('next-line');b.textContent=shown>=lines.length?'Mensagem completa ♡':'Toque para continuar';if(shown>=lines.length)b.disabled=true;}
document.getElementById('next-line').addEventListener('click',revealNext);
document.getElementById('restart').addEventListener('click',()=>{shown=0;lines.forEach(p=>p.classList.remove('shown'));const b=document.getElementById('next-line');b.disabled=false;b.textContent='Toque para continuar';show('envelope-screen');});
