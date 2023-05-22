class Content extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <main  tabindex="0" id="mainContent"></main>
        `;
  }
}

customElements.define('content-resto', Content);
