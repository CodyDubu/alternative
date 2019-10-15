import { alternative } from "../../build/alternative.js";

const CounterComponent = (clicks) => {

    const isEven = () => {
        return clicks % 2 === 0 ? 'even' : 'odd';
    }

    return alternative.html`
        <div>
            <h4>The state number is <span style="color: red; font-family: Permanent Marker">${isEven()}</span> -> <span style="color: red; font-family: Permanent Marker">${clicks}</span></h4>
        </div>
    `
};

export default CounterComponent;