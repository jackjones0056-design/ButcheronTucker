const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('.primary-nav');
if(toggle&&nav){
  toggle.addEventListener('click',()=>{
    const open=nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',String(open));
  });
  nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}));
  document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false')}});
}
document.querySelectorAll('.reviews-menu>button').forEach(btn=>btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open')));
const form=document.querySelector('#catering-form');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const d=new FormData(form);
  const mode=d.get('fulfillment')||'';
  const body=[
    'Catering request', '',
    `Full name: ${d.get('name')||''}`,
    `Email: ${d.get('email')||''}`,
    `Phone: ${d.get('phone')||''}`,
    `Date: ${d.get('date')||''}`,
    `Head Count: ${d.get('count')||''}`,
    `Fulfillment: ${mode}`,
    `Address: ${d.get('address')||''}`
  ].join('\n');
  location.href=`mailto:thebutcherontucker@gmail.com?subject=${encodeURIComponent('Catering Request')}&body=${encodeURIComponent(body)}`;
})}
