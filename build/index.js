import { action } from "../node_modules/mobx/lib/mobx.es6.js";
import events from "../build/events.js";
import { store } from "../build/store.js";
// register event system
events();
// register the components
setInterval(action(function tick() {
    store.numClicks += 1;
    document.body.innerHTML = "<h1>this is a test " + store.oddOrEven() + "</h1>";
}), 1000);
console.log(store.chris);
console.log('changing the state');
store.update("chris", "new value");
console.log("changed the state");
console.log(store.chris);
//# sourceMappingURL=index.js.map