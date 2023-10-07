const templateNavbar = document.createElement('template');
templateNavbar.innerHTML = `
  <style> 
    @import "./node_modules/bootstrap-icons/font/bootstrap-icons.css";
    nav{
      position: fixed;
      top:0;
      height: var(--navbar-height);
      background-color: var(--color-beige); 
      width: 100%;
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      z-index:100;
      transition: .5s;
      clip-path: inset(0px 0px -10px 0px);
    }
    .burger{
      width: 2.06rem;
      cursor: pointer;
    }
    .burger i{
      color: var(--color-orange);
    }
    .burger img{
      width: 100%;
    }
    .brand{
      margin: 0 0 0 5rem;
      font-family: var(--font-primary);
      font-size: 2rem;
      font-weight: 700;
      letter-spacing: .2rem;
      cursor: pointer;
    }
    .brand a{
      color: var(--color-orange);
      transition: .5s;

    }
    .brand:hover a{
      color: var(--color-orange-light);
      
    }
    ul{
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    .navbar-link{
      text-decoration: none;
      color: var(--color-gray);
      font-family: var(--font-primary);
      font-weight: 600;
      font-size: 1.56rem;
      transition: .2s;
    }
    .navbar-link:hover{
      padding-left: 1.25rem;
      color: var(--color-orange);
    }
    .phone-link{
      text-decoration: none;
      font-family: var(--font-primary);
      font-size: 1rem;
      font-weight: 500;
      color: var(--color-orange);
      margin-left: 1.25rem;
    }
    i{
      font-size: 1.25rem;
      color: var(--color-orange);
    }
    i.bi-youtube{
      font-size:1.56rem;
    }
    i.bi-telephone-fill{
      margin-right: .625rem;
    }
    nav.shadow{
      box-shadow: 0 0 .625rem var(--color-shadow-yellow);
    }
    .navbar-collapsable{
      padding-left: 5rem;
      padding-top: 1.875rem; 
      margin: 0;
      z-index: 100;
      position: fixed;
      width: clamp(21.9rem, 95vw, 25rem);
      height: 100dvh;
      top: 0;
      display: flex;
      flex-direction: column;
      gap: 1.875rem;
      background-color: var(--color-white);
      transition: transform .5s;
      box-shadow: -.625rem 0px 1.875rem var(--color-shadow-yellow);
      clip-path: inset(0px -1.875rem 0px 0px);
    }
    .navbar-collapsable.hidden{
      transform: translateX(calc(-100% - .625rem))
    }
    .navbar{
      width: 100dvw;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: start;
      padding: 0 3.12rem 0;
    }
    .navbar a {
      text-decoration: none;
    }
    .navbar .contact-info{
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-left: auto;
      gap: 1rem;
    }
    .burger-close{
      text-align: center;
      margin-right: 5rem;
      margin-bottom:3.12rem;
      margin-left: auto;
      width: 2rem;
      height: 2rem;
      font-weight: 600;
      font-size: 1.56rem;
      cursor: pointer;
    }
    .burger-close:hover{
      color: var(--color-orange);
    }
    .contact-info li *{
      transition: .5s;
    }
    .contact-info li:hover *{
      color: var(--color-orange-light);
    }
    @media (max-width: 576px){
      .navbar{
        padding-inline: 2rem;
      }
      .brand{
        margin-left: 2.5rem;
      }
      .navbar-collapsable{
        padding-left: 1.5rem;
      }
      .burger-close{
        margin-right: 2rem;
      }
      ul.contact-info{
        display: none!important;
      }
    }
    @media (max-width: 768px){
      ul.contact-info{
        display: none!important;
      }
      .brand{
        margin-inline: auto;
      }
    }
  </style>
  <nav>
    <div class="navbar">
      <div class="burger"><img src="../assets/img/icons/burger-icon.svg"></div>
      <h1 class="brand"><a href="index.html">El REFUGIO</a></h1>
      <ul class="contact-info">
        <li><a href="#" class="social-link"><i class="bi bi-instagram"></i></a></li>
        <li><a href="#" class="social-link"><i class="bi bi-youtube"></i></a></li>
        <li><a href="#" class="phone-link">+56 9 7766 7917</a></li>
      </ul>
    </div>
  </nav>
  <ul class="navbar-collapsable hidden">
    <li class="burger-close">X</li>
    <li class="navbar-item"><a class="navbar-link" href="index.html">Inicio</a></li>
    <li class="navbar-item"><a class="navbar-link" href="nosotros.html">Nosotros</a></li>
    <li class="navbar-item"><a class="navbar-link" href="refugio.html">El Refugio</a></li>
    <li class="navbar-item"><a class="navbar-link" href="galeria.html">Galeria</a></li>
    <li class="navbar-item"><a class="navbar-link" href="preguntas-frecuentes.html">Preguntas frecuentes</a></li>
    <li class="navbar-item"><a class="navbar-link" href="#section-form">Contacto</a></li>
  </ul>
`
class Navbar extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});
    shadow.append(templateNavbar.content.cloneNode(true));
  }
  modifyShadow(){
    if(scrollY > 0){
      this.shadowRoot.querySelector('nav').classList.add('shadow');
    }
    else{
      this.shadowRoot.querySelector('nav').classList.remove('shadow');
    }
  }
  connectedCallback(){
    const burger = this.shadowRoot.querySelector('.burger');
    const navbarCollapsable = this.shadowRoot.querySelector('.navbar-collapsable');
    const burgerClose = this.shadowRoot.querySelector('.burger-close')

    window.addEventListener('scroll',()=>{
      this.modifyShadow();
    });
    burger.addEventListener('click', ()=>{
      navbarCollapsable.classList.remove('hidden');
    });
    burgerClose.addEventListener('click', ()=>{
      navbarCollapsable.classList.add('hidden');
    });

    const btnContacto = this.shadowRoot.querySelector('.navbar-collapsable li:last-child');
    btnContacto.addEventListener('click', ()=>{
      navbarCollapsable.classList.add('hidden');
    });
  }
}

customElements.define("navbar-comp", Navbar);