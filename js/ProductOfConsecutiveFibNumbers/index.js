// my solution
function productFib(prod) {
    let i = 0;
    while (true) {
        const fib1 = fib(i);
        const fib2 = fib(i + 1);
        if (fib1 * fib2 === prod) {
            return [fib1, fib2, true];
        } else if (fib1 * fib2 < prod) {
            i++;
            continue;
        } else {
            return [fib1, fib2, false];
        }
    }
}

const fib = n => {
    switch (n) {
        case 0:
            return 0;
        case 1:
            return 1;
        case 2:
            return 1;
        case 3:
            return 2;
        case 4:
            return 3;
        case 5:
            return 5;
        case 6:
            return 8;
        case 7:
            return 13;
        case 8:
            return 21;
        case 9:
            return 34;
        case 10:
            return 55;
        case 11:
            return 89;
        case 12:
            return 144;
        default:
            return fib(n - 1) + fib(n - 2);
    }
};

// popular solution

function productFib(prod) {
    var n = 0;
    var nPlus = 1;
    while (n * nPlus < prod) {
        nPlus = n + nPlus;
        n = nPlus - n;
    }
    return [n, nPlus, n * nPlus === prod];
}

// what I thought
// I could've reduced if statement in productFib