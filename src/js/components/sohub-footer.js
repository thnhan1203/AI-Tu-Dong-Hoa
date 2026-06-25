// Footer component — large brand lockup, render, socials, and nav tray

const FOOTER_LOGO_SVG = `<svg viewBox="0 0 833 231" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M130.362 111.848H98.7917C98.1253 97.3753 85.2974 87.5045 66.5554 87.5045C49.4585 87.5045 36.943 96.0634 36.943 108.225C36.943 125.009 51.7492 127.633 70.4912 131.257C93.5231 135.526 134.297 142.44 134.297 181.256C134.297 210.536 106.663 230.59 67.8465 230.59C29.0297 230.59 1.06237 209.869 0.75 179.924H33.6527C34.3191 195.375 48.7921 205.579 68.8461 205.579C87.5881 205.579 101.082 196.708 101.082 183.214C101.082 166.429 84.9642 163.805 66.5346 160.515C42.1907 156.892 3.70704 149.666 3.70704 111.494C3.70704 82.2151 29.3629 62.8066 67.201 62.8066C105.039 62.8066 130.362 82.8815 130.362 111.827V111.848Z"/><path d="M314.893 146.709C314.893 195.397 278.7 230.59 228.7 230.59C178.701 230.59 142.195 195.397 142.195 146.709C142.195 98.0215 178.701 62.8281 228.7 62.8281C278.7 62.8281 314.893 98.0215 314.893 146.709ZM176.743 146.709C176.743 178.612 198.463 201.311 228.388 201.311C258.313 201.311 280.366 178.612 280.366 146.709C280.366 114.806 258.646 92.1074 228.388 92.1074C198.13 92.1074 176.743 115.139 176.743 146.709Z"/><path d="M479.025 128.3V227.633H445.144V132.902C445.144 106.913 429.359 89.816 405.015 89.816C380.671 89.816 363.908 106.913 363.908 132.902V227.633H330.359V0H363.908V90.1284C374.424 72.6983 392.52 62.8275 414.886 62.8275C452.058 62.8275 479.025 89.1496 479.025 128.279V128.3Z"/><path d="M644.828 160.849C644.828 202.29 614.903 230.59 571.151 230.59C527.399 230.59 497.141 202.311 497.141 160.849V65.7852H530.689V160.849C530.689 186.172 546.474 202.623 570.818 202.623C595.162 202.623 611.28 186.172 611.28 160.849V65.7852H644.828V160.849Z"/><path d="M832.328 145.73C832.328 195.396 796.468 230.59 746.469 230.59C696.469 230.59 660.609 195.396 660.609 146.709V0H694.158V88.1501C706.985 72.6983 727.06 62.8275 750.738 62.8275C798.426 62.8275 832.307 98.0209 832.307 145.73H832.328ZM797.78 146.709C797.78 115.139 776.081 92.1067 746.136 92.1067C716.19 92.1067 694.158 115.139 694.158 146.709C694.158 178.278 715.878 201.31 746.136 201.31C776.394 201.31 797.78 178.612 797.78 146.709Z"/></svg>`;
const STAR_SVG = `<svg width="100%" viewBox="0 0 44 44" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.6094 43.9991V22.582" stroke-width="2"></path><path d="M4.75391 35.8655L19.8966 20.7207" stroke-width="2"></path><path d="M0 19.6074H21.4171" stroke-width="2"></path><path d="M8.13672 4.75195L23.2815 19.8946" stroke-width="2"></path><path d="M24.3906 0V21.4171" stroke-width="2"></path><path d="M39.2481 8.13477L24.1055 23.2795" stroke-width="2"></path><path d="M43.9991 24.3926H22.582" stroke-width="2"></path><path d="M35.8635 39.2481L20.7188 24.1055" stroke-width="2"></path></svg>`;
const ARROW_RIGHT_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>`;
const ARROW_UP_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 19V5"></path><path d="m6 11 6-6 6 6"></path></svg>`;
const LINKEDIN_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.94 8.98H3.72V20h3.22V8.98ZM7.16 5.57c0-1.02-.78-1.8-1.96-1.8-1.17 0-1.94.78-1.94 1.8 0 1 .75 1.8 1.9 1.8h.02c1.2 0 1.98-.8 1.98-1.8ZM20.74 13.68c0-3.38-1.8-4.96-4.2-4.96-1.94 0-2.8 1.06-3.28 1.8V8.98h-3.22c.04 1.04 0 11.02 0 11.02h3.22v-6.16c0-.34.02-.66.12-.9.26-.66.86-1.34 1.86-1.34 1.32 0 1.84 1 1.84 2.46V20h3.22v-6.32h.44Z"></path></svg>`;
const INSTAGRAM_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="5"></rect><circle cx="12" cy="12" r="3.4"></circle><path d="M17.5 6.8h.01"></path></svg>`;
const X_SVG = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14.22 10.16 22.02 1h-1.85l-6.78 7.96L7.98 1H1.74l8.18 12.02L1.74 23h1.85l7.15-8.38L16.46 23h6.24l-8.48-12.84Zm-2.53 2.96-.83-1.2L4.27 2.4h2.82l5.33 7.7.83 1.2 6.92 10h-2.82l-5.66-8.18Z"></path></svg>`;

class SohubFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <div class="footer-hero" aria-hidden="true">
          <div class="footer-wordmark">${FOOTER_LOGO_SVG}</div>
          <img src="assets/images/footerRender.png" alt="" class="footer-render">
        </div>

        <div class="footer-card">
          <div class="footer-brand">
            <p class="footer-logo">&copy; SOHub Digital</p>
            <p class="footer-tagline">Award-Winning Digital Agency</p>
          </div>
          <div class="socials" aria-label="Social links">
            <a href="https://linkedin.com" aria-label="LinkedIn">${LINKEDIN_SVG}</a>
            <span class="social-separator" aria-hidden="true">${STAR_SVG}</span>
            <a href="https://instagram.com" aria-label="Instagram">${INSTAGRAM_SVG}</a>
            <span class="social-separator" aria-hidden="true">${STAR_SVG}</span>
            <a href="https://x.com" aria-label="X">${X_SVG}</a>
          </div>
        </div>

        <div class="footer-nav">
          <nav class="footer-links" aria-label="Footer navigation">
            <a href="#studio" class="footer-pill">Studio <span class="footer-arrow footer-arrow--right" aria-hidden="true">${ARROW_RIGHT_SVG}</span></a>
            <a href="#work" class="footer-pill">Work <span class="footer-arrow footer-arrow--right" aria-hidden="true">${ARROW_RIGHT_SVG}</span></a>
            <a href="#contact" class="footer-pill" data-contact-modal>Contact <span class="footer-arrow footer-arrow--right" aria-hidden="true">${ARROW_RIGHT_SVG}</span></a>
          </nav>
          <button class="back-to-top" aria-label="Back to top">
            <span>Go up</span>
            <span class="footer-arrow footer-arrow--up" aria-hidden="true">${ARROW_UP_SVG}</span>
          </button>
        </div>
      </footer>
    `;
    this._setupBackToTop();
    this._setupFooterReveal();
  }

  _setupBackToTop() {
    const btn = this.querySelector('.back-to-top');
    btn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  _setupFooterReveal() {
    const nav = this.querySelector('.footer-nav');
    if (!nav || !('IntersectionObserver' in window)) {
      this.classList.add('is-footer-nav-visible');
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        this.classList.toggle('is-footer-nav-visible', entry.isIntersecting);
      });
    }, {
      rootMargin: '0px 0px -8% 0px',
      threshold: 0.2,
    });

    observer.observe(nav);
  }
}

customElements.define('sohub-footer', SohubFooter);
