// my solution
function arrayTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) continue;
        total += arr[i];
    }
    return total;
}

function queueTime(customers, n) {
    const tills = new Array(n);
    let seconds = 0;
    while (arrayTotal(tills) + arrayTotal(customers) > 0) {
        for (let i = 0; i < tills.length; i++) {
            if (tills[i] > 0) {
                tills[i]--;
            } else if (customers.length > 0) {
                tills[i] = customers.shift();
                tills[i]--;
            }
        }
        seconds++;
    }
    return seconds;
}

// popular solution
function queueTime(customers, n) {
    var w = new Array(n).fill(0);
    for (let t of customers) {
        let idx = w.indexOf(Math.min(...w));
        w[idx] += t;
    }
    return Math.max(...w);
}

// what I thought
// when it comes to treating numbers, I can consider to use Math class to operate numbers.
// like using regax when use charactors.
// and the popular solution is different from mine cause the concept of the logib is opposite.
// Mine is going to decrement each time like exactly what happen in real.
// but the popular one is going to increase numbers to the value in array which has the minimum of all value in array.
// It's kind of swiching idea from real into Mathmatics..