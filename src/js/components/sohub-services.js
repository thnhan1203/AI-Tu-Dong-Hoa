// Services component — 4 stacked dark cards with scroll reveal animation

const STAR_SVG = `<svg width="100%" viewBox="0 0 44 44" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M19.6094 43.9991V22.582" stroke-width="2"></path><path d="M4.75391 35.8655L19.8966 20.7207" stroke-width="2"></path><path d="M0 19.6074H21.4171" stroke-width="2"></path><path d="M8.13672 4.75195L23.2815 19.8946" stroke-width="2"></path><path d="M24.3906 0V21.4171" stroke-width="2"></path><path d="M39.2481 8.13477L24.1055 23.2795" stroke-width="2"></path><path d="M43.9991 24.3926H22.582" stroke-width="2"></path><path d="M35.8635 39.2481L20.7188 24.1055" stroke-width="2"></path></svg>`;

const SERVICES = [
  {
    title: ['Brand', 'Identities'],
    tags: ['Logo', 'Typography', 'Color Palette', 'Voice & Tone', 'Guidelines'],
    body: 'Our team will assist in developing a brand identity that captures your values and resonates with your audience.',
  },
  {
    title: ['Smart', 'Development'],
    tags: ['Web Development', 'App Development', 'UI/UX Design', 'Interactions', 'CMS'],
    body: 'Our team will work closely with you, taking the time to understand your vision and feedback in order to bring your ideas to life. We’ll provide regular updates and ensure that the final product surpasses your expectations.',
  },
  {
    title: ['Marketing', 'Campaigns'],
    tags: ['Digital Marketing', 'SEO', 'Social Media', 'Content Creation', 'Email Marketing'],
    body: 'At SOHub, we recognize the importance of a well-rounded digital marketing strategy that combines various channels and techniques to reach your target audience effectively.',
  },
  {
    title: ['3D', 'Visualization'],
    tags: ['Architecture', 'Engineering', 'Construction', 'Interior Design', 'Product Design'],
    body: 'Our company specializes in 3D visualization services that bring your ideas to life with stunning realism and accuracy.',
  },
];

class SohubServices extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <section class="services" id="services">
        <h2 class="section-label">Services</h2>
        <p class="section-intro">
          We are an <span class="intro-emphasis">unusual</span> digital agency focusing on transforming your vision into a captivating digital experience.
        </p>
        <div class="service-stack">
          ${SERVICES.map((s, i) => `
            <article class="service-card service-card--${i + 1}" data-service-card>
              <h3 class="service-title">
                <span class="service-title-line">${s.title[0]}</span>
                <span class="service-title-line service-title-line--dim">${s.title[1]}</span>
              </h3>
              <ul class="service-tags">
                ${s.tags.map(t => `<li>${t}</li>`).join('')}
              </ul>
              <div class="service-body">
                <span class="service-star" aria-hidden="true">${STAR_SVG}</span>
                <p>${s.body}</p>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
    this._setupReveal();
  }

  _setupReveal() {
    const cards = this.querySelectorAll('[data-service-card]');
    if (!cards.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(c => observer.observe(c));
  }
}

customElements.define('sohub-services', SohubServices);
