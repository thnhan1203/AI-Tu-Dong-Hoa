// Work component — project grid

const PROJECTS = [
  { slug: '1up-nova', label: '1UP Nova', img: 'work-1up-nova.svg' },
  { slug: 'razer', label: 'Razer', img: 'work-razer.png' },
  { slug: 'themis', label: 'Themis', img: 'work-themis.png' },
  { slug: 'aeva-team', label: 'AEVA Team', img: 'work-aeva.svg' },
  { slug: 'chr-innovations', label: 'CHR Innovations', img: 'work-chr.png' },
  { slug: 'profit-saloon', label: 'Profit Saloon', img: 'work-profit.png' },
];

class SohubWork extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="work" id="work">
        <h2 class="section-label">Work</h2>
        <p class="section-intro">
          We are a <span class="intro-emphasis">diligent</span> team, that's passionate about turning ideas into digital realities.
        </p>
        <div class="work-grid">
          ${PROJECTS.map(p => `
            <a href="/work/${p.slug}" class="work-card">
              <img src="assets/images/${p.img}" alt="${p.label} project by SOHub Digital" loading="lazy">
              <span class="work-card-label">${p.label}</span>
            </a>
          `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('sohub-work', SohubWork);
