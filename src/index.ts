import { alternative } from "../build/alternative.js";
import CounterComponent from "../build/components/counter-component.js";
import ButtonComponent from "../build/components/button-component.js";
import InputComponent from "../build/components/input-component.js";

alternative.registerComponent({ component: ButtonComponent, values: "name", id: "#button"});
alternative.registerComponent({ component: CounterComponent, values: "numClicks", id: "#counter" });
alternative.registerComponent({ component: InputComponent, values: "numClicks", id: "#input" });

setInterval(() => {
    let num = alternative.get("numClicks");
    alternative.update("numClicks", num += 1);
}, 1000);

