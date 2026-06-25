// CTA component — final "Don't be shy" with career chair

class SohubCta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="cta-final" id="contact">
        <div class="cta-content">
          <h2 class="cta-headline">Don't<br>be shy</h2>
          <div class="cta-actions">
            <a href="#contact" class="cta-pill cta-pill--dark" data-contact-modal>
              <span class="cta-pill-text">CHAT WITH SOHUB</span>
              <span class="cta-pill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </span>
            </a>
            <a href="#contact" class="cta-pill cta-pill--light">
              <span class="cta-pill-text">BOOK A MEETING</span>
              <span class="cta-pill-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M8 2v4"/>
                  <path d="M16 2v4"/>
                  <rect x="3" y="4" width="18" height="18" rx="2"/>
                  <path d="M3 10h18"/>
                  <path d="M16 14h-4"/>
                  <path d="M14 12v4"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <img src="assets/images/careerChair.png" alt="" class="cta-render" aria-hidden="true">
      </section>
    `;
  }
}

customElements.define('sohub-cta', SohubCta);
