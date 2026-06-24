// Header component — accurate to sohub.digital structure
// Logo left, CHAT pill + MENU pill right, slide-down nav panel from MENU

const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'Studio', href: '#studio' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

class SohubHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="header-inner">
          <a href="/" class="logo">sohub</a>
          <div class="header-actions">
            <a href="#contact" class="header-cta">
              <span class="header-cta-text">CHAT WITH SOHUB</span>
              <span class="header-cta-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
            </a>
            <button class="menu-toggle" type="button" aria-expanded="false" aria-label="Toggle menu">
              <span class="menu-toggle-text">Menu</span>
              <span class="menu-toggle-icon" aria-hidden="true">
                <span class="menu-toggle-line"></span>
                <span class="menu-toggle-dot"></span>
              </span>
            </button>
          </div>
        </div>
        <nav class="nav-panel" id="nav-panel" aria-hidden="true">
          ${NAV_ITEMS.map(item => `
            <a href="${item.href}" class="nav-link">${item.label}</a>
          `).join('')}
        </nav>
      </header>
    `;
    this._setupMenu();
  }

  _setupMenu() {
    const toggle = this.querySelector('.menu-toggle');
    const panel = this.querySelector('.nav-panel');
    const label = toggle.querySelector('.menu-toggle-text');
    if (!toggle || !panel || !label) return;

    const setState = (open) => {
      toggle.setAttribute('aria-expanded', String(open));
      panel.classList.toggle('open', open);
      panel.setAttribute('aria-hidden', String(!open));
      label.textContent = open ? 'Close' : 'Menu';
    };

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      setState(!open);
    });

    panel.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => setState(false));
    });
  }
}

customElements.define('sohub-header', SohubHeader);
