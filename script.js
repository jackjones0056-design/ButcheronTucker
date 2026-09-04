const menuToggle = document.querySelector('.menu-toggle');
const navlinks = document.querySelector('.navlinks');
if(menuToggle && navlinks){
  menuToggle.addEventListener('click',()=>{
    const open = navlinks.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded',String(open));
  });
  document.addEventListener('keydown',e=>{ if(e.key==='Escape'){ navlinks.classList.remove('open'); menuToggle.setAttribute('aria-expanded','false'); }});
  navlinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navlinks.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
}
document.querySelectorAll('.navdrop>button').forEach(btn=>{
  btn.addEventListener('click',()=>btn.parentElement.classList.toggle('open'));
});
const cateringForm = document.querySelector('#catering-form');
if(cateringForm){
  cateringForm.addEventListener('submit',e=>{
    e.preventDefault();
    const f = new FormData(cateringForm);
    const lines = [
      'Catering request from website','',
      `Name: ${f.get('name')||''}`,
      `Email: ${f.get('email')||''}`,
      `Phone: ${f.get('phone')||''}`,
      `Event date: ${f.get('date')||''}`,
      `Head count: ${f.get('count')||''}`,
      `Fulfillment: ${f.get('fulfillment')||''}`,
      `Address: ${f.get('address')||''}`,'',
      `Notes: ${f.get('notes')||''}`
    ];
    location.href=`mailto:thebutcherontucker@gmail.com?subject=${encodeURIComponent('Catering Inquiry')}&body=${encodeURIComponent(lines.join('\n'))}`;
  });
}
