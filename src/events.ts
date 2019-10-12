import { spy } from "../node_modules/mobx/lib/mobx.es6.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";

const events = () => {
    spy((event) => {
        if (event.type === "action") {
            console.log(`${event.name} with args: ${event.arguments}`);
        }
    })
}

export default events;