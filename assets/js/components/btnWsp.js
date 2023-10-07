const templateBtnWsp = document.createElement('template');
templateBtnWsp.innerHTML = `
  <style>
    @import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";
    #btn-wsp{
      position: fixed;
      right: 20px;
      bottom: 20px;
      z-index: 100;
      width: 50px;
      height: 50px;
      line-height: 50px;
    }
    a{
      color: var(--color-green);
    }
    i{
      font-size: 50px;
      width: inherit;
      height: inherit;
    }
  </style>
  <div id="btn-wsp">
    <a href="#"><i class="bi bi-whatsapp"></i></a>
  </div>
` 
class BtnWsp extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});
    shadow.append(templateBtnWsp.content.cloneNode(true));
  }

}
customElements.define("btn-wsp-comp", BtnWsp);