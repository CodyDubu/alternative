import { spy } from "../node_modules/mobx/lib/mobx.es6.js";
var events = function () {
    spy(function (event) {
        if (event.type === "action") {
            // console.log(`${event.name} with args: ${event.arguments}`);
        }
    });
};
export default events;
//# sourceMappingURL=events.js.map