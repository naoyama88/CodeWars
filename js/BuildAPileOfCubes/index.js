// my answer
function findNb(m) {
    let total = 0;
    for (let n = 0; total <= m; n++) {
        total += n ** 3;
        if (total === m) return n;
    }
    return -1;
}

// popular answer
function findNb(m) {
    var n = 0;
    while (m > 0) m -= (++n) ** 3;
    return m ? -1 : n;
}

// what I thought
// In my opinion, this popular one is too much short, if this is for code golf, this could be evaluated well,
// but it's little hard to read, I can't understand unless I see the code carefully.