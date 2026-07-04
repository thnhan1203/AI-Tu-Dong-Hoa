// Contact modal — shared form for chat/contact triggers
// Submits JSON payload to window.SOHUB_CONFIG.sheetsEndpoint (Apps Script Web App).

const ARROW_RIGHT_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path></svg>`;
const ARROW_LEFT_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M19 12H5"></path><path d="m11 6-6 6 6 6"></path></svg>`;

class SohubContactModal extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title" aria-hidden="true">
        <div class="contact-modal-backdrop" data-contact-close></div>
        <form class="contact-modal-card" novalidate data-state="idle">
          <p class="contact-modal-kicker">Join us</p>
          <h2 class="contact-modal-title" id="contact-modal-title">
            Since we're pals now, spill the beans<br>about yourself!
          </h2>

          <div class="contact-form-grid">
            <label class="contact-field" data-field="fullName">
              <span>Full Name</span>
              <input name="fullName" type="text" autocomplete="name" required>
              <small></small>
            </label>

            <label class="contact-field" data-field="email">
              <span>Email</span>
              <input name="email" type="email" autocomplete="email" required>
              <small></small>
            </label>

            <label class="contact-field contact-field--wide" data-field="portfolio">
              <span>Portfolio Link</span>
              <input name="portfolio" type="url" inputmode="url">
              <small></small>
            </label>

            <label class="contact-field contact-field--wide contact-field--message" data-field="application">
              <span>Application</span>
              <textarea name="application" required></textarea>
              <small></small>
            </label>
          </div>

          <p class="contact-modal-status" role="status" aria-live="polite"></p>

          <div class="contact-modal-actions">
            <button class="contact-action contact-action--back" type="button" data-contact-close>
              <span class="contact-action-icon" aria-hidden="true">${ARROW_LEFT_SVG}</span>
              <span>Go back</span>
            </button>
            <button class="contact-action contact-action--submit" type="submit">
              <span class="contact-action-label">Submit</span>
              <span class="contact-action-spinner" aria-hidden="true"></span>
              <span class="contact-action-icon" aria-hidden="true">${ARROW_RIGHT_SVG}</span>
            </button>
          </div>
        </form>
      </div>
    `;

    this.modal = this.querySelector('.contact-modal');
    this.form = this.querySelector('.contact-modal-card');
    this.status = this.querySelector('.contact-modal-status');
    this.submitButton = this.querySelector('.contact-action--submit');
    this.previousFocus = null;
    this._setupEvents();
  }

  open() {
    this.previousFocus = document.activeElement;
    this.modal?.setAttribute('aria-hidden', 'false');
    this.classList.add('is-open');
    document.body.classList.add('contact-modal-open');
    this._setState('idle');
    this.querySelector('input[name="fullName"]')?.focus();
  }

  close() {
    this.modal?.setAttribute('aria-hidden', 'true');
    this.classList.remove('is-open');
    document.body.classList.remove('contact-modal-open');
    this._setState('idle');
    this.form?.reset();
    this.querySelectorAll('.contact-field.has-error').forEach(f => f.classList.remove('has-error'));
    this.previousFocus?.focus?.();
  }

  _setupEvents() {
    this.addEventListener('click', (event) => {
      if (event.target.closest('[data-contact-close]')) this.close();
    });

    this.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') this.close();
    });

    this.form?.addEventListener('submit', (event) => {
      event.preventDefault();
      if (this._validate()) this._submit();
    });

    this.form?.addEventListener('input', (event) => {
      const field = event.target.closest('.contact-field');
      if (field?.classList.contains('has-error')) this._validateField(field);
    });
  }

  _setState(state) {
    this.form?.setAttribute('data-state', state);
    if (this.status) this.status.textContent = '';
    if (this.submitButton) {
      this.submitButton.disabled = state === 'loading' || state === 'success';
    }
  }

  _collectPayload() {
    const data = new FormData(this.form);
    const payload = {};
    for (const [key, value] of data.entries()) {
      payload[key] = typeof value === 'string' ? value.trim() : value;
    }
    payload.submittedAt = new Date().toISOString();
    return payload;
  }

  async _submit() {
    const endpoint = window.SOHUB_CONFIG?.sheetsEndpoint?.trim();
    if (!endpoint) {
      this._showError('Submission is not configured yet. Set window.SOHUB_CONFIG.sheetsEndpoint in js/config.js.');
      return;
    }

    this._setState('loading');
    const payload = this._collectPayload();

    try {
      await fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify(payload)
      });
      this._setState('success');
      if (this.status) this.status.textContent = 'Thanks! We will get back to you soon.';
      setTimeout(() => this.close(), 1600);
    } catch (err) {
      console.error('Contact form submit failed', err);
      this._showError('Could not send your message. Please try again.');
    }
  }

  _showError(message) {
    this._setState('error');
    if (this.status) this.status.textContent = message;
  }

  _validate() {
    return Array.from(this.querySelectorAll('.contact-field'))
      .map(field => this._validateField(field))
      .every(Boolean);
  }

  _validateField(field) {
    const control = field.querySelector('input, textarea');
    const message = field.querySelector('small');
    const name = control?.name;
    const value = control?.value.trim() || '';
    let error = '';

    if (name === 'fullName' && value.length < 3) {
      error = 'Your full name must be at least 3 characters long';
    }

    if (name === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      error = 'Please provide a valid email address';
    }

    if (name === 'portfolio' && value && !this._isValidUrl(value)) {
      error = 'Please provide a valid portfolio link';
    }

    if (name === 'application' && value.length < 10) {
      error = 'Please tell us a little more about your application';
    }

    field.classList.toggle('has-error', Boolean(error));
    if (message) message.textContent = error;
    return !error;
  }

  _isValidUrl(value) {
    try {
      const url = new URL(value);
      return url.protocol === 'http:' || url.protocol === 'https:';
    } catch {
      return false;
    }
  }
}

customElements.define('sohub-contact-modal', SohubContactModal);

window.addEventListener('DOMContentLoaded', () => {
  const modal = document.createElement('sohub-contact-modal');
  document.body.appendChild(modal);

  document.addEventListener('click', (event) => {
    const trigger = event.target.closest('[data-contact-modal]');
    if (!trigger) return;
    event.preventDefault();
    modal.open();
  });
});