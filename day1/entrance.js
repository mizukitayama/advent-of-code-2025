const isZero = (num) => {
    if (num < 0) {
        num *= -1;
    }
    return num % 100 == 0;
}

const rotateDial = (rotations) => {
    let value = 50
    let count = 0
    rotations.split('\n').forEach(rotation => {
        const abs = Number(rotation.substring(1));
        value += rotation.charAt(0) == "R" ? abs : -abs;
        count += isZero(value) ? 1 : 0;
        console.log("count : ", count);
    })
}

module.exports = { rotateDial };