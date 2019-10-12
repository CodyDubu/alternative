var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { observable } from "../node_modules/mobx/lib/mobx.es6.js";
import * as store from "../build/store.js";
var State = /** @class */ (function () {
    function State() {
        var _this = this;
        this.getState = function () {
            return _this.store();
        };
        this.updateState = function (newState) {
            return __assign(__assign({}, _this.store()), newState);
        };
        this.store = observable(store);
    }
    State.getInstance = function () {
        if (!State.instance) {
            State.instance = new State();
        }
        return State.instance;
    };
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map