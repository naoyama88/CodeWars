function printerError(s) {
    let count = 0;
    for (let c of s) {
        if (!isCorrect(c)) {
            count++;
        }
    }
    return `${count}/${s.length}`;
}

function isCorrect(char) {
    switch (char) {
        case "a":
        case "b":
        case "c":
        case "d":
        case "e":
        case "f":
        case "g":
        case "h":
        case "i":
        case "j":
        case "k":
        case "l":
        case "m":
            return true;
        default:
            return false;
    }
}
