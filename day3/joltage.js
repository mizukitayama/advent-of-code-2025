const getMaxAndIndex = (line, index, digit) => {
    let max = 0;
    let max_index = 0;
    for (let i = index; i < line.length - digit; i++) {
        if (Number(line.charAt(i)) > max) {
            max = Number(line.charAt(i));
            max_index = i + 1;
        }
    }
    return [max, max_index];
}

const joltage12Sum = (input) => {
    return input.split('\n').reduce((acc, line) => {
        let max = 0;
        let max_index = 0;
        let sum = 0;
        for (let digit = 11; digit >= 0; digit--) {
            [max, max_index] = getMaxAndIndex(line, max_index, digit);
            
            sum += max * (10 ** digit);
        }
        console.log(line, sum)
        acc += sum;
        return acc;
    }, 0)
}

const joltageSum = (input) => {
    return input.split('\n').reduce((acc, line) => {
        let max = 0;
        let max_index = 0;
        let max_2 = 0;
        for (let i = 0; i < line.length - 1; i++) {
            if (Number(line.charAt(i)) > max) {
                max = Number(line.charAt(i));
                max_index = i;
                
            }
        }
        for (let j = max_index + 1; j < line.length - 0; j++) {
            if (Number(line.charAt(j)) > max_2) {
                max_2 = Number(line.charAt(j));
            }
        }
        acc += max * 10 + max_2;
        return acc
    }, 0)
}

module.exports = { joltageSum, joltage12Sum };
