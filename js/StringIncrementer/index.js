// my solution
function incrementString(str) {
    let number = str.replace(/[^0-9]/g, "");
    if (!number) return str + 1;
    const numLen = number.length;
    return (
        str.slice(0, str.length - numLen) +
        String(parseInt(number) + 1).padStart(numLen, "0")
    );
}

// popular solution
function incrementString(input) {
    return input.replace(/([0-8]?)(9*)$/, function(s, d, ns) {
        return +d + 1 + ns.replace(/9/g, "0");
    });
}
// or
function incrementString(input) {
    if (isNaN(parseInt(input[input.length - 1]))) return input + "1";
    return input.replace(/(0*)([0-9]+$)/, function(match, p1, p2) {
        var up = parseInt(p2) + 1;
        return up.toString().length > p2.length
            ? p1.slice(0, -1) + up
            : p1 + up;
    });
}

// Impression
// none