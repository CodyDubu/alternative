function parser(value) : Array<string> {
    let regex = new RegExp(/\{\{(.*?)}}/gi);
    let props = value.match(regex);
    return props;
}

function buildElement(template : string, values: Array<string>) : void {
    let variableMatches = parser(template);
    let props = parseProps(variableMatches, values);

    // deliver parsed results
    document.body.innerHTML = props.toString();
}

function parseProps(variables : Array<string>, values : Array<string>) : Array<string> {
    let parsedArray : Array<string> = [];

    for (let x = 0; x < variables.length; x++) {
        let ele =  variables[x].substring(2, variables[x].length - 2);
        ele = values[x];
        parsedArray.push(ele);
    }

    return parsedArray;
}

buildElement(`<h1>Hello {{world}}</h1>`, ['test']);
