var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, computed } from "../node_modules/mobx/lib/mobx.es6.js";
var Store = /** @class */ (function () {
    function Store(initialState) {
        this.initalState = {};
        this.numClicks = 0;
        this.chris = "chris";
        this.initalState = initialState;
        for (var key in this.initalState) {
            if (this.initalState.hasOwnProperty(key)) {
                console.log(key + " -> " + this.initalState[key]);
            }
        }
    }
    Store.prototype.oddOrEven = function () {
        return this.numClicks % 2 === 0 ? 'even' : 'odd';
    };
    Store.prototype.update = function (property, value) {
        this[property] = value;
    };
    __decorate([
        observable
    ], Store.prototype, "numClicks");
    __decorate([
        observable
    ], Store.prototype, "chris");
    __decorate([
        computed
    ], Store.prototype, "oddOrEven");
    __decorate([
        computed
    ], Store.prototype, "update");
    return Store;
}());
var store = new Store({ "test": "test" });
export { store };
//# sourceMappingURL=store.js.map