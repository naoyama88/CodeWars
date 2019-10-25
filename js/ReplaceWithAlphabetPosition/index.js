// my solution
function alphabetPosition(text) {
    let newText = "";
    for (const c of text) {
        if (c.match(/^[a-z]+$/)) {
            newText += c.charCodeAt(0) - 96 + " ";
        } else if (c.match(/^[A-Z]+$/)) {
            newText += c.charCodeAt(0) - 64 + " ";
        }
    }
    return newText.trim();
}

// popular solution
function alphabetPosition(text) {
    return text
        .toUpperCase()
        .match(/[a-z]/gi)
        .map(c => c.charCodeAt() - 64)
        .join(" ");
}

// what I thought
// first of all, I didn't have to separete upper case and lower case.
// It's good to use charCodeAt. Most of the popular answers use that.
// I should've used array function like filter, map. and also,
// should've treated text as array, I didn't have to add space after char code.