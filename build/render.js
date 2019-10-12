var _this = this;
var render = new WeakMap();
var Render = function () {
    var self = {
    // initial private values
    };
    render.set(this, self);
};
Render.prototype.render = function (html) {
    var self = render.get(_this);
    return html;
};
export { Render };
//# sourceMappingURL=render.js.map