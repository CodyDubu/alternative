import { alternative } from "../../build/alternative.js";

const ButtonComponent = (name) => {

    const onClick = () => {

        if (name === "Alternative") {
            return alternative.update("name", "Chris");
        } 
        
        return alternative.update("name", "Alternative");
    };
    
    return alternative.html`
        <h4>Hello <span style="color: red; font-family: Permanent Marker">${name}</span></h4>
        <button class="btn btn-secondary" @click="${onClick}">change the name</button>
    `
};

export default ButtonComponent;