const templateForm = document.createElement('template');
templateForm.innerHTML = `
  <style>
    @import "../assets/css/styles.css";
    .section{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 4rem
    }
    label{
      display: none;
    }
    form{
      display: flex;
      justify-content: start;
      height: 20rem;
    }
    .input-group{
      width: 840px;
      max-width: 90vw;
      height:40px;
    }
    input{
      padding-left: .8rem;
      color: var(--color-black);
      margin-bottom: 1.5rem;    
      width: inherit;
      max-width: inherit;
      height: 100%;
      font-family: var(--font-primary);
      font-size: 16px;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0px;
      text-align: left;
      border: none;
      border-radius: 5px;
    }
    ::placeholder {
      color: var(--color-gray);
      opacity: 1;
    }
    
    ::-ms-input-placeholder {
      color: var(--color-gray);
    }
    input:focus{
      outline: solid 3px var(--color-beige);
      border: var(--color-orange);
    }
    .section-text{
      margin-inline: 6rem;
      margin-bottom: 3rem;
      margin-top: 0rem;
    }
    #button-submit{
      width: 100%;
      height: 40px;
      font-family: var(--font-primary);
      font-size: 14px;
      font-weight: 700;
      line-height: 16px;
      letter-spacing: 0em;
      text-align: center;

    }
  </style>
  <section class="section">
    <h2 class="section-title">¿Quieres ser parte del campamento?</h2>
    <p class="section-text">¡Aventuras increíbles, amigos divertidos y naturaleza esperan! Únete a nuestro campamento y vive el verano de tus sueños.
    </p>
    <form >
      <div class="input-group">
        <label for="name">Nombre</label>
        <input type="text" placeholder="Nombre y apellido" name="name">
      <div>
      <div class="input-group">
        <label for="phone">Teléfono</label>
        <input type="text" placeholder="Número de teléfono" name="phone">
      <div>
      <div class="input-group">
        <label for="mail">Nombre</label>
        <input type="text" placeholder="Correo electrónico" name="mail">
      <div>
      <button id="button-submit" class="button" type="submit">Contactar</button>
    </form>
  </section>
`
class Form extends HTMLElement{
  constructor(){
    super();
    const shadow = this.attachShadow({mode:'open'});
    shadow.append(templateForm.content.cloneNode(true));
  }
}
customElements.define('form-comp', Form);