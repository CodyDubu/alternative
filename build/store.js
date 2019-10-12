var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { observable, computed } from "../node_modules/mobx/lib/mobx.es6.js";
var Store = /** @class */ (function () {
    function Store(initialState) {
        this.state = observable.map();
        for (var key in initialState) {
            if (initialState.hasOwnProperty(key)) {
                this.state.set(key, initialState[key]);
            }
        }
    }
    Store.prototype.isEven = function () {
        return this.state.get("numClicks") % 2 === 0 ? 'even' : 'odd';
    };
    Store.prototype.update = function (property, value) {
        return this.state.set(property, value);
    };
    Store.prototype.get = function (property, callback) {
        if (callback) {
            return callback(this.state.get(property));
        }
        return this.state.get(property);
    };
    __decorate([
        computed
    ], Store.prototype, "isEven");
    __decorate([
        computed
    ], Store.prototype, "update");
    __decorate([
        computed
    ], Store.prototype, "get");
    return Store;
}());
var store = new Store({ name: "Alternative", numClicks: 0 });
export { store };
//# sourceMappingURL=store.js.map