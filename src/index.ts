import { action } from "../node_modules/mobx/lib/mobx.es6.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import events from "../build/events.js";
import { store } from "../build/store.js";


// register event system
events();

const component = (store) => {
    const test = () => {
        if (store.get("name") === "Alternative") {
            store.update("name", "Chris");
        } else {
            store.update("name", "Alternative");
        }
    }
    
    return html`
    <div>
        <h1>Hello ${store.get("name")}</h1>
        <button @click="${test}">Change the name</button>
        <h2>The state number is <span style="color: red">${store.isEven()}</span></h2>
    </div>
`
}

setInterval(action(function tick() {
    let num = store.get("numClicks");
    store.update("numClicks", num += 1);
    render(component(store), document.body, {eventContext: this});
}), 1000);
