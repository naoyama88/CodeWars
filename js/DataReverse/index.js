// mysolution
function dataReverse(data) {
    let reversedArray = [];
    let children = [];
    for (let i = data.length - 1; i >= 0; i--) {
        children.unshift(data[i]);
        if (i % 8 === 0) {
            reversedArray.push(...children);
            children = [];
        }
    }
    return reversedArray;
}

// popular solution
const dataReverse = data => {
    const bytes = [];
    for (let i = 0; i < data.length; i += 8) {
        bytes.unshift(...data.slice(i, i + 8));
    }
    return bytes;
};

// What I thought
// Oh I could've use i += 8 in for statement and slice data... I didn't notice that
