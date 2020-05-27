import { LitElement, html, css, unsafeCSS } from 'lit-element/lit-element';

export class ClicksButton extends LitElement{
    constructor(){
        super();
        this.count = 0;
    }

    /**
     * Método que retorna el nombre del componente
     */
    static get is(){
        return 'button-clicks';
    }

    /**
     * Método para definir las variables
     */
    static get properties(){
        return{
            count: {type: Number},
            activo: {type: Boolean}
        }
    }

    //Template string
    //Asociar manejadores de eventos en el template

    //Es una función Javascript que sirve para volcar el HTML generado con los templates dentro de la página. 
    //Este método simplemente devuelve el template que se debe mostrar cuando se usa el componente
    render(){
        return html `

        <link href="css/bootstrap.css" rel="stylesheet">
        <link href="css/style.css" rel="stylesheet">

        <div class="container">
            <div id="contenedor">
                    <h1>Contador de Clicks!!</h1>
                    <h3>Total de clicks: ${this.count}</h3>
                    <button id="botonClic" @click="${this._incremento}">CLICK ME !!</button>
            </div>
            <div id="contenedor">
            ${this.activo ? html `<p>Gracias por tus CLICKS!!</p>`: html `<p>Muy pocos clicks!!</p>`}
            </div>
        </div>
        `;
    }

    _incremento(){
        this.count++;
        if(this.count > 10){
            this.activo = true;
        }
    }

}
//Se define el componente para que los navegadores lo entiendan
//Pertenece al estandar de los web components
//(nombre del componente, clase)
customElements.define(ClicksButton.is, ClicksButton);

//https://desarrolloweb.com/manuales/manual-litelement.html