
// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if(el){
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      history.replaceState(null, '', '#' + id);
    }
  });
});

// Back to top button
const btn = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) btn.classList.add('show');
  else btn.classList.remove('show');
});
btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
