function parser(value) : Array<string> {
    let regex = new RegExp(/\{\{(.*?)}}/gi);
    let test = value.match(regex);
    return test;
}

function buildElement(template : string, value: Array<string>) : void {
    let variableMatches = parser(template);
    document.body.innerHTML = template;
}

buildElement(`<h1>Hello {{world}}</h1>`, ['test']);
