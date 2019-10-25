// my answer
function digital_root(n) {
    const sN = String(n);
    if (sN.length === 1) return n;
    return digital_root(sN.split('').reduce((a, b) => Number(a) + Number(b), 0));
}

// popular answer
function digital_root(n) {
    return ((n - 1) % 9) + 1;
}
// or
function digital_root(n) {
    if (n < 10) return n;
    return digital_root(n.toString().split("").reduce(function(acc, d) {return acc + +d;}, 0));
}

// what I thought
// mine is almost same as second popular one,
// the difference between mine and first popular one is,, the one is that they think this problem
// as like mathmatic problem. Not literaly like the given problem.
// I should've thought like that.