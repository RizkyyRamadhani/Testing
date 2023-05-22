class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a class="skip" tabindex="0" href="#">Skip to Content</a>
        <header class="header">
            <div class="header-title">
                <h1>Resto Apps</h1>
            </div>  
            <button id="menu" class="hamburger" tabindex="0">☰</button>
                <nav id="drawer" class="nav">
                    <ul class="nav__list">
                        <li class="nav__item" ><a href="#/home" >Home</a></li>
                        <li class="nav__item"><a href="#/Favorite">Favorite</a></li>
                        <li class="nav__item"><a href="https://www.instagram.com/rizkyyyramadhaniii/?hl=id">About</a></li>
                    </ul>
                </nav>
        </header>
        `;
  }
}

customElements.define('header-bar', Header);
