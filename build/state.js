var State = /** @class */ (function () {
    function State() {
        this.components = [];
    }
    State.prototype.registerComponent = function (component) {
        this.components.push(component);
    };
    State.prototype.getComponents = function () {
        return this.components;
    };
    return State;
}());
export { State };
//# sourceMappingURL=state.js.map