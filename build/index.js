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
    var name = store.get("name");
    var test = function () {
        if (name === "Alternative") {
            store.update("name", "Chris");
        }
        else {
            store.update("name", "Alternative");
        }
    };
    var isEven = function () {
        return store.get("numClicks") % 2 === 0 ? 'even' : 'odd';
    };
    return html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div class=\"container\">\n            <h1>Hello ", "</h1>\n            <hr>\n            <button class=\"btn btn-primary\" @click=\"", "\">Change the name</button>\n            <hr>\n            <h2>The state number is <span style=\"color: red\">", "</span> -> ", "</h2>\n        </div>\n    "], ["\n        <div class=\"container\">\n            <h1>Hello ", "</h1>\n            <hr>\n            <button class=\"btn btn-primary\" @click=\"", "\">Change the name</button>\n            <hr>\n            <h2>The state number is <span style=\"color: red\">", "</span> -> ", "</h2>\n        </div>\n    "])), store.get("name"), test, isEven(), store.get("numClicks"));
};
setInterval(action(function tick() {
    var num = store.get("numClicks");
    store.update("numClicks", num += 1);
    render(component(store), document.body);
}), 1000);
var templateObject_1;
//# sourceMappingURL=index.js.map