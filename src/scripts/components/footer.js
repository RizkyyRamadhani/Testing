class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <footer>
                <p>All data obtained from <a href="https://restaurant-api.dicoding.dev/" target="_blank" rel="noreferrer">Restaurant Dicoding</a></p>
            </footer>
        `;
  }
}

customElements.define('footer-dicoding', Footer);
