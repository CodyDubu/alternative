var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { action } from "../node_modules/mobx/lib/mobx.es6.js";
import { html, render } from "../node_modules/lit-html/lit-html.js";
import events from "../build/events.js";
import { store } from "../build/store.js";
// register event system
events();
var component = function (store) {
    var test = function () {
        if (store.get("name") === "Alternative") {
            store.update("name", "Chris");
        }
        else {
            store.update("name", "Alternative");
        }
    };
    return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    <div>\n        <h1>Hello ", "</h1>\n        <button @click=\"", "\">Change the name</button>\n        <h2>The state number is <span style=\"color: red\">", "</span></h2>\n    </div>\n"], ["\n    <div>\n        <h1>Hello ", "</h1>\n        <button @click=\"", "\">Change the name</button>\n        <h2>The state number is <span style=\"color: red\">", "</span></h2>\n    </div>\n"])), store.get("name"), test, store.isEven());
};
setInterval(action(function tick() {
    var num = store.get("numClicks");
    store.update("numClicks", num += 1);
    render(component(store), document.body, { eventContext: this });
}), 1000);
var templateObject_1;
//# sourceMappingURL=index.js.map