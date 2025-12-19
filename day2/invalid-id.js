const isRepeatedTwice = (num) => {
    const numString = String(num);
    if (numString.length % 2 != 0) return false;

    const half = numString.length / 2;
    return numString.slice(0, half) === numString.slice(half, numString.length)
}

function hasRepeatedPattern(str) {
  return (str + str).slice(1, -1).includes(str);
}

const getInvalidIdSum = (input) => {
    
    return input.split(',').reduce((acc, range) => {
        const [start, end] = range.split('-');
        for (let i = Number(start); i <= Number(end); i++) {
            if (hasRepeatedPattern(String(i))) {
                acc += i;
                console.log(acc);
            }
        }
        return acc;
    }, 0);
}

module.exports = { getInvalidIdSum };
