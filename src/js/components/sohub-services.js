// Services component — 4 stacked dark cards

const SERVICES = [
  {
    title: ['Brand', 'Identities'],
    tags: ['Logo', 'Typography', 'Color Palette', 'Voice & Tone', 'Guidelines'],
    body: 'Our team will assist in developing a brand identity that captures your values and resonates with your audience.',
  },
  {
    title: ['Smart', 'Development'],
    tags: ['Web Development', 'App Development', 'UI/UX Design', 'Interactions', 'CMS'],
    body: 'Our team will work closely with you to create a digital product that meets your business goals and exceeds your expectations.',
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
            <article class="service-card service-card--${i + 1}">
              <h3>${s.title[0]} <br>${s.title[1]}</h3>
              <ul class="service-tags">
                ${s.tags.map(t => `<li>${t}</li>`).join('')}
              </ul>
              <p>${s.body}</p>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  }
}

customElements.define('sohub-services', SohubServices);
