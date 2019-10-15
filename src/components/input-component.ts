import { alternative } from "../../build/alternative.js";

const InputComponent = () => {

    const change = (event) => {
        alternative.update("text", event.target.value);
    };
    
    return alternative.html`
        <h4>Hello <span style="color: red; font-family: Permanent Marker">${alternative.get("text") ? alternative.get("text") : "Change me" }</span></h4>
        <input class="form-control" type="text" @keyup="${change}" />
    `
};

export default InputComponent;