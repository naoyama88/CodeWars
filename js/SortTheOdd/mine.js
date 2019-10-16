function sortArray(array) {
    // Return a sorted array.
    if (array === []) return [];
    let fixedIndexes = [];
    let oddsArray = [];
    for (let i in array) {
        if (array[i] === 0 || array[i] % 2 === 0) {
            fixedIndexes.push(i);
        } else {
            oddsArray.push(array[i]);
        }
    }
    oddsArray.sort(function(a, b) {
        return a - b;
    });
    let newArray = [];
    for (let i in array) {
        if (fixedIndexes.includes(i)) {
            newArray.push(array[i]);
        } else {
            newArray.push(oddsArray.shift());
        }
    }
    return newArray;
}
