// my solution
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

// popular solution
const printerError = s => `${s.replace(/[a-m]/gi, "").length}/${s.length}`;

// What I thought
// I guessed that I should've used unicode for like using loop, but the popular answer was different.
// it's really impressive! Oh I should've used replace and regex!