const b=document.querySelector('.menu-toggle'),m=document.querySelector('.menu');if(b&&m){b.addEventListener('click',()=>{m.classList.toggle('open');b.setAttribute('aria-expanded',m.classList.contains('open'));});m.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>m.classList.remove('open')));} 
// Human rights page tabs and image lightbox
for (const tab of document.querySelectorAll('.flow-tab')) {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.flow-tab').forEach(x => x.classList.remove('active'));
    document.querySelectorAll('.flow-panel').forEach(x => x.classList.remove('active'));
    tab.classList.add('active');
    const panel = document.getElementById(tab.dataset.target);
    if (panel) panel.classList.add('active');
  });
}
const lightbox = document.querySelector('.lightbox');
const lightboxImage = lightbox?.querySelector('img');
for (const image of document.querySelectorAll('[data-lightbox]')) {
  image.addEventListener('click', () => {
    if (!lightbox || !lightboxImage) return;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
function closeLightbox(){
  if (!lightbox) return;
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
lightbox?.addEventListener('click', e => { if (e.target === lightbox || e.target.closest('.lightbox-close')) closeLightbox(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLightbox(); });
