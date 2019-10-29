// my solution
var uniqueInOrder = function(iterable) {
    if (!iterable) return [];
    iterable = Array.isArray(iterable) ? iterable : iterable.split("");
    if (iterable.length === 1) return iterable;
    let arr = [iterable[0]];
    for (let i = 1; i < iterable.length; i++) {
        if (iterable[i - 1] !== iterable[i]) arr.push(iterable[i]);
    }
    return arr;
};

// popular solution
function uniqueInOrder(it) {
    var result = [];
    var last;

    for (var i = 0; i < it.length; i++) {
        if (it[i] !== last) {
            result.push((last = it[i]));
        }
    }

    return result;
}

// or
var uniqueInOrder=function(iterable){
    return [...iterable].filter((a, i) => a !== iterable[i-1])
}

// what I thought
// I like second popular one. short and cool.
// most popular one is almost same as mine but I didn't know that there is a syntax like "result.push((last = it[i]));"
// this push value to the array and also put value in the variable "last".