// SOHub clone — minimal JS: mobile menu, smooth scroll, back-to-top

(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.getElementById('site-nav');
  const backToTop = document.querySelector('.back-to-top');

  // Mobile menu toggle
  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    nav?.classList.toggle('open', !open);
  });

  // Close mobile menu on nav link click
  nav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      toggle?.setAttribute('aria-expanded', 'false');
      nav.classList.remove('open');
    });
  });

  // Back-to-top
  backToTop?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
