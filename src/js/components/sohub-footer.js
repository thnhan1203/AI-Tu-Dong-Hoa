// Footer component — site footer with back-to-top

class SohubFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer class="site-footer">
        <img src="assets/images/footerRender.png" alt="" class="footer-render" aria-hidden="true">
        <div class="footer-inner">
          <div class="footer-brand">
            <span class="footer-logo">SOHub Digital</span>
            <p class="footer-tagline">Award-Winning<br>Digital Agency</p>
          </div>
          <div class="footer-cols">
            <div class="footer-col">
              <h4>STUDIO</h4>
              <a href="#work">Work</a>
            </div>
            <div class="footer-col">
              <h4>WORK</h4>
              <a href="#work">Projects</a>
            </div>
            <div class="footer-col">
              <h4>CONTACT</h4>
              <a href="#contact">Get in touch</a>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <p>© SOHub Digital</p>
          <div class="socials">
            <a href="https://linkedin.com" aria-label="LinkedIn">in</a>
            <a href="https://instagram.com" aria-label="Instagram">ig</a>
            <a href="https://x.com" aria-label="Twitter">x</a>
          </div>
          <a href="#contact" class="footer-chat">CHAT WITH SOHUB</a>
          <button class="back-to-top" aria-label="Back to top">GO UP ↑</button>
        </div>
      </footer>
    `;
    this._setupBackToTop();
  }

  _setupBackToTop() {
    const btn = this.querySelector('.back-to-top');
    btn?.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

customElements.define('sohub-footer', SohubFooter);
