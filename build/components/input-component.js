var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { alternative } from "../../build/alternative.js";
var InputComponent = function () {
    var change = function (event) {
        alternative.update("text", event.target.value);
    };
    return alternative.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <h4>Hello <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        <input class=\"form-control\" type=\"text\" @keyup=\"", "\" />\n    "], ["\n        <h4>Hello <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        <input class=\"form-control\" type=\"text\" @keyup=\"", "\" />\n    "])), alternative.get("text") ? alternative.get("text") : "Change me", change);
};
export default InputComponent;
var templateObject_1;
//# sourceMappingURL=input-component.js.map