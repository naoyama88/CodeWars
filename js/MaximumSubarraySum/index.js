// my solution
var maxSequence = function(arr) {
    let max = 0;
    while (arr.length > 0) {
        let total = 0;
        for (let n of arr) {
            total += n;
            max = max >= total ? max : total;
        }
        while (true) {
            let n = arr.shift();
            if (arr.length <= 0 || n < 0) {
                break;
            }
        }
    }
    return max;
};

// popular solution
var maxSequence = function(arr) {
    var min = 0,
        ans = 0,
        i,
        sum = 0;
    for (i = 0; i < arr.length; ++i) {
        sum += arr[i];
        min = Math.min(sum, min);
        ans = Math.max(ans, sum - min);
    }
    return ans;
};
