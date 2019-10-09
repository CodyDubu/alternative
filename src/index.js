function parser(value) {
    var regex = new RegExp(/\{\{(.*?)}}/gi);
    var props = value.match(regex);
    return props;
}
function buildElement(template, values) {
    var variableMatches = parser(template);
    var props = parseProps(variableMatches, values);
    // deliver parsed results
    document.body.innerHTML = props.toString();
}
function parseProps(variables, values) {
    var parsedArray = [];
    for (var x = 0; x < variables.length; x++) {
        var ele = variables[x].substring(2, variables[x].length - 2);
        ele = values[x];
        parsedArray.push(ele);
    }
    return parsedArray;
}
buildElement("<h1>Hello {{world}}</h1>", ['test']);
//# sourceMappingURL=index.js.map