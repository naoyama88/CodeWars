// my solution
function appeared(map, n, k) {
    if (map.has(k) && map.get(k) < n) {
        map.set(k, map.get(k) + 1);
        return true;
    } else if (!map.has(k)) {
        map.set(k, 1);
        return true;
    } else {
        return false;
    }
}

function deleteNth(arr, n) {
    const map = new Map();
    return arr.filter(k => appeared(map, n, k));
}

// popular solution
function deleteNth(arr, x) {
    var cache = {};
    return arr.filter(function(n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;
    });
};

// What I thought
// Both of them are doing almost same things.
// The difference is using map or using object.
// but it seems that popular one is simplar than mine
// And, the structure of my appeared function could be more simpler