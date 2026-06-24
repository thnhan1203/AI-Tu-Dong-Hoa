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
          <a href="/" class="logo" aria-label="sohub">
            <svg viewBox="0 0 833 231" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M130.362 111.848H98.7917C98.1253 97.3753 85.2974 87.5045 66.5554 87.5045C49.4585 87.5045 36.943 96.0634 36.943 108.225C36.943 125.009 51.7492 127.633 70.4912 131.257C93.5231 135.526 134.297 142.44 134.297 181.256C134.297 210.536 106.663 230.59 67.8465 230.59C29.0297 230.59 1.06237 209.869 0.75 179.924H33.6527C34.3191 195.375 48.7921 205.579 68.8461 205.579C87.5881 205.579 101.082 196.708 101.082 183.214C101.082 166.429 84.9642 163.805 66.5346 160.515C42.1907 156.892 3.70704 149.666 3.70704 111.494C3.70704 82.2151 29.3629 62.8066 67.201 62.8066C105.039 62.8066 130.362 82.8815 130.362 111.827V111.848Z" fill="currentColor"/>
              <path d="M314.893 146.709C314.893 195.397 278.7 230.59 228.7 230.59C178.701 230.59 142.195 195.397 142.195 146.709C142.195 98.0215 178.701 62.8281 228.7 62.8281C278.7 62.8281 314.893 98.0215 314.893 146.709ZM176.743 146.709C176.743 178.612 198.463 201.311 228.388 201.311C258.313 201.311 280.366 178.612 280.366 146.709C280.366 114.806 258.646 92.1074 228.388 92.1074C198.13 92.1074 176.743 115.139 176.743 146.709Z" fill="currentColor"/>
              <path d="M479.025 128.3V227.633H445.144V132.902C445.144 106.913 429.359 89.816 405.015 89.816C380.671 89.816 363.908 106.913 363.908 132.902V227.633H330.359V0H363.908V90.1284C374.424 72.6983 392.52 62.8275 414.886 62.8275C452.058 62.8275 479.025 89.1496 479.025 128.279V128.3Z" fill="currentColor"/>
              <path d="M644.828 160.849C644.828 202.29 614.903 230.59 571.151 230.59C527.399 230.59 497.141 202.311 497.141 160.849V65.7852H530.689V160.849C530.689 186.172 546.474 202.623 570.818 202.623C595.162 202.623 611.28 186.172 611.28 160.849V65.7852H644.828V160.849Z" fill="currentColor"/>
              <path d="M832.328 145.73C832.328 195.396 796.468 230.59 746.469 230.59C696.469 230.59 660.609 195.396 660.609 146.709V0H694.158V88.1501C706.985 72.6983 727.06 62.8275 750.738 62.8275C798.426 62.8275 832.307 98.0209 832.307 145.73H832.328ZM797.78 146.709C797.78 115.139 776.081 92.1067 746.136 92.1067C716.19 92.1067 694.158 115.139 694.158 146.709C694.158 178.278 715.878 201.31 746.136 201.31C776.394 201.31 797.78 178.612 797.78 146.709Z" fill="currentColor"/>
            </svg>
          </a>
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
    this._setupScroll();
  }

  disconnectedCallback() {
    window.removeEventListener('scroll', this._onScroll);
  }

  _setupScroll() {
    let ticking = false;
    this._onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          this.classList.toggle('is-scrolled', window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', this._onScroll, { passive: true });
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
