const direction = [
    [-1, -1], [0, -1], [1, -1],
    [-1,  0],          [1, 0],
    [-1,  1], [0,  1], [1, 1],
]
const paperRoll = (input) => {
    let matrix = input.trim().split('\n').map(row => row.split(''));
    let new_matrix = matrix
    const MAX_Y = matrix.length;
    const MAX_X = matrix[0].length;
    let result = 0;
    while (true) {
        let result_tmp = result;
        matrix.forEach((row, y) => {
            row.forEach((_, x) => {
                let count = 0;
                if (matrix[y][x] != '@') return;
                
                for (const [check_y, check_x] of direction) {
                    const [new_y, new_x] = [y + check_y, x + check_x];
                    if (new_y < 0 || new_x < 0 || new_y >= MAX_Y || new_x >= MAX_X) {
                        continue;
                    }
                    
                    if (matrix[new_y][new_x] == '@') {
                        count++;
                    }
                }
                if (count < 4) {
                    result++;
                    new_matrix[y][x] = 'x';
                }
            })
        });
        matrix = new_matrix;

        if (result == result_tmp) {
            break;
        }
    }
    return result;
}

module.exports = { paperRoll };
