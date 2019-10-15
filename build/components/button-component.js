var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { alternative } from "../../build/alternative.js";
var ButtonComponent = function (name) {
    var onClick = function () {
        if (name === "Alternative") {
            return alternative.update("name", "Chris");
        }
        return alternative.update("name", "Alternative");
    };
    return alternative.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <h4>Hello <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        <button class=\"btn btn-secondary\" @click=\"", "\">change the name</button>\n    "], ["\n        <h4>Hello <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        <button class=\"btn btn-secondary\" @click=\"", "\">change the name</button>\n    "])), name, onClick);
};
export default ButtonComponent;
var templateObject_1;
//# sourceMappingURL=button-component.js.map