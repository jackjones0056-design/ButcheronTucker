const header=document.querySelector('#site-header');
const toggle=document.querySelector('.nav-toggle');
const nav=document.querySelector('#primary-nav');

function setNav(open){
  nav.classList.toggle('open',open);
  toggle.setAttribute('aria-expanded',String(open));
  toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');
}

toggle.addEventListener('click',()=>setNav(!nav.classList.contains('open')));
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>setNav(false)));
document.addEventListener('keydown',event=>{if(event.key==='Escape')setNav(false)});
document.addEventListener('click',event=>{if(nav.classList.contains('open')&&!header.contains(event.target))setNav(false)});

const tabs=[...document.querySelectorAll('[role="tab"]')];
const panels=[...document.querySelectorAll('[role="tabpanel"]')];
function activateTab(tab,focus=true){
  const target=tab.dataset.tab;
  tabs.forEach(item=>item.setAttribute('aria-selected',String(item===tab)));
  panels.forEach(panel=>{const active=panel.dataset.panel===target;panel.hidden=!active;panel.classList.toggle('active',active)});
  if(focus) tab.focus();
}

tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>activateTab(tab,false));
  tab.addEventListener('keydown',event=>{
    let next=index;
    if(event.key==='ArrowRight')next=(index+1)%tabs.length;
    else if(event.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;
    else if(event.key==='Home')next=0;
    else if(event.key==='End')next=tabs.length-1;
    else return;
    event.preventDefault();
    activateTab(tabs[next]);
  });
});