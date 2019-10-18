// my answer
function maskify(cc) {
    if (cc.length < 5) return cc;
    return "#".repeat(cc.length - 4) + cc.slice(cc.length - 4, cc.length);
}

// popular answer
function maskify(cc) {
    return cc.slice(0, -4).replace(/./g, "#") + cc.slice(-4);
}

// impression
/*
Oh regax again! Like this type of problem, better to use regax to code simply and shortly. I'll try next time.
*/