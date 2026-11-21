// Navegação acessível: sem dependências externas.
(() => {
  const button = document.getElementById('menu');
  const links = document.getElementById('links');
  if (!button || !links) return;
  const setOpen = (open, restoreFocus = false) => {
    links.classList.toggle('open', open);
    button.setAttribute('aria-expanded', String(open));
    button.textContent = open ? '✕ Fechar' : '☰ Menu';
    if (!open && restoreFocus) button.focus();
  };
  button.addEventListener('click', () => setOpen(!links.classList.contains('open')));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && links.classList.contains('open')) setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (links.classList.contains('open') && !links.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
  links.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setOpen(false)));
  window.addEventListener('resize', () => { if (window.innerWidth > 920 && links.classList.contains('open')) setOpen(false); });
})();
