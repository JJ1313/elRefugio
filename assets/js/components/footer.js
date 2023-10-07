const templateFooter = document.createElement('template')
templateFooter.innerHTML = `
  <style> 
    @import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
    .footer{
      min-height: calc(50vh);
      background-color:var(--color-beige);
      display: grid;
      grid-template-columns: 2fr 1fr 1fr auto;
      justify-content: center;
      z-index: 2;
      gap: 3rem;
    }
    .footer > div{
      min-width: 40px;
      display: flex;
      flex-direction: column;
      justify-content: center; 
    }
    .footer > div:first-child{
      margin-left: 10rem; 
    }
    .footer > div:last-child{
      max-width: 40px;
      margin-right: 10rem;
    }

    .footer > div:nth-child(2),
    .footer > div:nth-child(3){
      & li{
        display: flex;
        align-items: center;
        line-height: 24px;
      }
      & i{
        margin-right: 1rem;
        font-size: 24px;
        line-height: 24px;
        width: 24px;
      }
    }
    h2{
      margin: 0;
      text-align: center;
      color: var(--color-orange);
    }
    h2:nth-child(1){
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: .4rem;
    }
    h2:nth-child(2){
      letter-spacing: .1rem;
      text-transform: uppercase;
      font-size: 3rem;
      font-family: var(--font-secondary);
    }
    li{
      font-family: var(--font-primary);
    }
    ul{
      list-style: none;
      padding: 0;
      min-height: 214px;

      & li:first-child{
        color: var(--color-orange);
        font-family: Poppins;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        margin-bottom: 2rem;
      }

      & li:not(li:first-child){
        margin-bottom: 1rem;
      }
    }
    
    .footer > div:last-child ul{
      display: flex;
      flex-direction: column;
      justify-content: center;    
      gap: 2rem;
      
      & li{
        margin-bottom: 0;
        height: 40px;
        width: 40px;
        text-align:center;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--color-orange);
        border-radius: 20px;
        animation-iteration-count: infinite;
        animation-duration: 2s;
        animation-timing-function: ease-in-out;
      }
      & li:hover{
        animation-name: scaleAnimation;
      }
      & a{
        color: var(--color-white);
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      & i{
        font-size: 25px;
        line-height: 25px;
      }
    }
    @media (max-width: 576px){
      .footer{
        grid-template-columns: 1fr; 
      }
      .footer > div:first-child{
        margin-left: 0; 
        margin-top: 5rem;
      }
      .footer > div:last-child{
        margin-right: 1rem;
        grid-row: 2 / 3;
        width: 100vw;
        height: 40px;

        & ul{
          display: flex;
          flex-direction: row;
          width: 100vw;
          min-height: auto;

          & li{
          }
        }
      }
      .footer > div:nth-child(2),
      .footer > div:nth-child(3){
        padding-inline: 1rem;
      }
    }

    @keyframes scaleAnimation{
      0%   {transform: scale(1);}
      50%  {transform: scale(1.2);}
      100% {transform: scale(1);}
    }

  </style>
  <div class="footer">
    <div>
      <h2>Campamento</h2>
      <h2>El refugio</h2>
    </div>
    <div>
      <ul>
        <li>Ayuda</li>
        <li>Equipo</li>
        <li>Preguntas Frecuentes</li>
        <li>Salud y seguridad</li>
        <li>Descargar programa</li>
      </ul>
    </div>
    <div>
      <ul>
        <li>Contáctanos</li>
        <li><i class="bi bi-geo-alt"></i>Río Blanco, Chile</li>
        <li><i class="bi bi-telephone"></i>+56 9 7766 7917</li>
        <li><i class="bi bi-envelope"></i>campamentoelrefugio@gmail.com</li>
      </ul>
      </div>
      <div>
        <ul>
          <li><a href="#"><i class="bi bi-instagram"></i></a></li>
          <li><a href="#"><i class="bi bi-facebook"></i></a></li>
          <li><a href="#"><i class="bi bi-whatsapp"></i></a></li>
          <li><a href="#"><i class="bi bi-youtube"></i></a></li>
        </ul>
      </div>
  </div>
`

class Footer extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:"open"});
    shadow.append(templateFooter.content.cloneNode(true));
  }
}

customElements.define("footer-comp", Footer);