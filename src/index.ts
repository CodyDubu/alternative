import { action } from "../node_modules/mobx/lib/mobx.es6.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import events from "../build/events.js";
import { store } from "../build/store.js";


// register event system
events();

const component = (store) => {
    let name = store.get("name");

    const test = () => {
        if (name === "Alternative") {
            store.update("name", "Chris");
        } else {
            store.update("name", "Alternative");
        }
    }

    const isEven = () => {
        return store.get("numClicks") % 2 === 0 ? 'even' : 'odd';
    }
    
    return html`
        <div class="container">
            <h1>Hello ${store.get("name")}</h1>
            <hr>
            <button class="btn btn-primary" @click="${test}">Change the name</button>
            <hr>
            <h2>The state number is <span style="color: red">${isEven()}</span> -> ${store.get("numClicks")}</h2>
        </div>
    `
}

setInterval(action(function tick() {
    let num = store.get("numClicks");
    store.update("numClicks", num += 1);
    render(component(store), document.body);
}), 1000);
