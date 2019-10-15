var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, computed } from "../node_modules/mobx/lib/mobx.es6.js";
import { html } from "../node_modules/lit-html/lit-html.js";
import { render } from "../node_modules/lit-html/lit-html.js";
import { initialState } from "../build/initialState.js";
var Alternative = /** @class */ (function () {
    // TODO dynamically iterate over props to assign values passed in.
    function Alternative(initialState) {
        this.components = [];
        this.html = html;
        this.state = observable.map();
        for (var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                this.state.set(key, initialState[key]);
            }
        }
    }
    Alternative.prototype.registerComponent = function (component) {
        this.components.push(component);
        for (var x = 0; x < this.components.length; x++) {
            render(this.components[x].component(this.state.get(this.components[x].values)), document.querySelector(this.components[x].id));
        }
    };
    Alternative.prototype.getComponents = function () {
        return this.components;
    };
    Alternative.prototype.update = function (property, value) {
        this.state.set(property, value);
        for (var x = 0; x < this.components.length; x++) {
            render(this.components[x].component(this.state.get(this.components[x].values)), document.querySelector(this.components[x].id));
        }
        return;
    };
    Alternative.prototype.get = function (property) {
        return this.state.get(property);
    };
    __decorate([
        computed
    ], Alternative.prototype, "update");
    __decorate([
        computed
    ], Alternative.prototype, "get");
    return Alternative;
}());
var alternative = new Alternative(initialState);
export { alternative };
//# sourceMappingURL=alternative.js.map