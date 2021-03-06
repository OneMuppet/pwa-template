class TqCard extends HTMLElement {

  constructor() {
    super()
    this._data;
    this.render = this.render.bind(this)
    this.attachShadow({ mode: 'open' })
    this.render()
  }

  connectedCallback() {
  }
  disconnectedCallback() {
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
        .card {
          margin: var(--space-s);
          padding: 0;
          color: var(--dark);
          background: #fff;
          height: 400px;
          width: 320px;
          position: relative;
        }
        .body {
          padding: var(--space-s);
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          background: rgba(255,255,255,0.75);
          font-size: 16px;
          height: 130px;
        }
        ::slotted(h3) {
          margin: 0;
          padding: 0;
          font-size: 28px;
        }
        ::slotted(img) {
          box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.2);
          width: 100%;
          height: 400px;
          object-fit: cover;
          border: 1px solid rgba(255,255,255,0.3);
          box-sizing: border-box;
        }
        /* Small screens */
        @media only screen and (max-width: 600px) {
          .card {
            margin: 0 0 var(--space-s) 0;
            width: 100%;
          }
        }
      </style>
      <div class="card">
        <slot name="img"></slot>
        <div class="body">
          <slot name="title"></slot>
          <slot name="body"></slot>
        </div>
      </div>
    `
  }
}
export default customElements.define('tq-card', TqCard)
