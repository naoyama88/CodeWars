// popular solution
function sortArray(array) {
    const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
    return array.map((x) => x % 2 ? odd.shift() : x);
}

// my solution
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

// What I thought
// my solution was
//   1, if the array was empty then return empty array
//   2, store the index of the array which value has even number
//   3, store the odd numbers
//   4, sort the odd numbers array
//   5, if the index of new array is in the array which has even numbers, then put the value of the even numbers array
//   6, if the index of new array is in the array which has odd numbers, then shift the value of the array
//   7, return new array

// but the popular solution is
// 1, store odd numbers in the array using filter function
// 2, sort it
// 3, if the value of the array is even then shift the value of odd numbers array to new array
// 4, if the value of the array is odd number then just remain the odd number
