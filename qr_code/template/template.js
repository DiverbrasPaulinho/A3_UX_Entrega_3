const template = document.createElement('template')

template.innerHTML = `
        <style>
            @import "../template/style.css";
        </style>

        <div class="template_container">
            <header class="template_header">
                <article class="template_icon template_header-icon">
                    <img
                        src="../../assets/interrogacao.svg"
                        alt="icone de duvidas"
                    />
                    <span>Duvidas</span>
                </article>
                <h1>TOP</h1>
                <article class="template_icon template_header-icon">
                    <img src="../../assets/lupa.svg" alt="icone de busca" />
                    <span>Pesquisar</span>
                </article>
            </header>

            <main class="template_main">
                <slot name="main"> </slot>
            </main>
            
            <footer class="template_footer">
                <article class="template_icon template_footer-icon">
                    <img src="../../assets/relogio.svg" alt="Icone Histórico" />
                    <span>Histórico</span>
                </article>
                <article class="template_icon template_footer-icon">
                    <img src="../../assets/home.svg" alt="Icone Home" />
                    <span>Pagina Inicial</span>
                </article>
                <article class="template_icon template_footer-icon person-icon">
                    <img src="../../assets/conta.svg" alt="Icone Usuário" />
                    <span>Minha Conta</span>
                </article>
            </footer>
        </div>
`


customElements.define('layout-template',
  class extends HTMLElement {
    constructor() {
      super();
      let templateContent = template.content;
      const shadowRoot = this.attachShadow({
          mode: 'open'
        })
        .appendChild(templateContent.cloneNode(true));
    }
  })