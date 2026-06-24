// Header component — site header with mobile nav toggle

class SohubHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="site-header">
        <div class="header-inner">
          <a href="/" class="logo">sohub</a>
          <button class="nav-toggle" aria-label="Toggle menu" aria-expanded="false">
            <span>MENU</span>
            <span class="nav-toggle-icon" aria-hidden="true">
              <span></span><span></span>
            </span>
          </button>
          <nav class="site-nav" id="site-nav">
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#services">Services</a>
          </nav>
          <a href="#contact" class="header-cta">CHAT WITH SOHUB</a>
        </div>
      </header>
    `;
    this._setupNav();
  }

  _setupNav() {
    const toggle = this.querySelector('.nav-toggle');
    const nav = this.querySelector('.site-nav');
    if (!toggle || !nav) return;

    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      nav.classList.toggle('open', !open);
    });

    nav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        toggle.setAttribute('aria-expanded', 'false');
        nav.classList.remove('open');
      });
    });
  }
}

customElements.define('sohub-header', SohubHeader);
