// my solution
function strIncludesInArray(str, array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].includes(str)) {
            return true;
        }
    }
    return false;
}

function inArray(array1, array2) {
    const newArray = [];
    for (const val of array1) {
        if (strIncludesInArray(val, array2) && newArray.indexOf(val) === -1) {
            newArray.push(val);
        }
    }

    return newArray.sort();
}

// most popular solution
function inArray(arr1, arr2) {
    return arr1.filter(function(needle) {
        return arr2.some(function(haystack) {
            return haystack.indexOf(needle) > -1;
        });
    })
    .sort();
}


// impression
/*
I didn't know the array function "some",
I learned the difference between "array.prototype.fileter" and "array.prototype.some".
"Filter" returns array that has value which was checked through the test function
"Some" returns true, if at least one of the values in array pass the test, then else returns false.

I guess this might be easy function, just I didn't know. I realized that I have to write more code and learn
*/