var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { alternative } from "../../build/alternative.js";
var CounterComponent = function (clicks) {
    var isEven = function () {
        return clicks % 2 === 0 ? 'even' : 'odd';
    };
    return alternative.html(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        <div>\n            <h4>The state number is <span style=\"color: red; font-family: Permanent Marker\">", "</span> -> <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        </div>\n    "], ["\n        <div>\n            <h4>The state number is <span style=\"color: red; font-family: Permanent Marker\">", "</span> -> <span style=\"color: red; font-family: Permanent Marker\">", "</span></h4>\n        </div>\n    "])), isEven(), clicks);
};
export default CounterComponent;
var templateObject_1;
//# sourceMappingURL=counter-component.js.map