// common head
class CommonHead extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="styles.css">
            `
    }
}
customElements.define('common-head', CommonHead)

// common header
class CommonHeader extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <img class="logo" src="images/original/logo.png"/>
            <h1 class="title">Fondazione Armonia e Rispetto (ETS)</h1>
            <nav>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="chi_siamo.html">Chi siamo</a></li>
                <li><a href="missione.html">Missione</a></li>
                <li><a href="valori.html">Valori</a></li>
                <li><a href="in_concreto.html">In Concreto</a></li>
                <li><a href="progetti.html">Progetti</a></li>
                <li><a href="eventi.html">Eventi</a></li>
                <li><a href="contatti.html">Contatti</a></li>
                <li><a href="dona_ora.html">Dona ora</a></li>
            </ul>
            </nav>
            `
    }
}
customElements.define('common-header', CommonHeader)

// commo footer
class CommonFooter extends HTMLElement {
    connectedCallback() {
        this.outerHTML = `
            <hr/>
            FONDAZIONE ARMONIA E RISPETTO ETS strada Castelvecchio 21 - 10024 Moncalieri  (TO) - tel. 379/1908704
            <br>
            Iscritta al Registro Unico del Terzo Settore Atto DD 1104/A2202A/2024 - Codice Fiscale 94090600019
        `
    }
}
customElements.define('common-footer', CommonFooter)
