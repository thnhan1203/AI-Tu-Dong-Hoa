// CTA component — final "Don't be shy" with career chair

class SohubCta extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="cta-final" id="contact">
        <div class="cta-content">
          <h2 class="cta-headline">Don't<br>be shy</h2>
          <div class="cta-actions">
            <a href="#contact" class="cta-link">Chat with SOHub</a>
            <a href="#contact" class="btn-primary">BOOK A MEETING</a>
          </div>
        </div>
        <img src="assets/images/careerChair.png" alt="" class="cta-render" aria-hidden="true">
      </section>
    `;
  }
}

customElements.define('sohub-cta', SohubCta);
