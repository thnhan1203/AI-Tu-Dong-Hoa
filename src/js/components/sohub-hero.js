// Hero component — 3D render + tagline

class SohubHero extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="hero" id="home">
        <h1 class="visually-hidden">SOHub — Creative Digital Experiences</h1>
        <img src="assets/images/homeRender.png" alt="" class="hero-render" aria-hidden="true">
        <div class="hero-tagline">
          <div>Your story builds</div>
          <div>our history.</div>
        </div>
        <a href="#work" class="scroll-indicator" aria-label="Scroll to work">
          <span>Scroll</span>
          <span class="arrow">↓</span>
        </a>
      </section>
    `;
  }
}

customElements.define('sohub-hero', SohubHero);
