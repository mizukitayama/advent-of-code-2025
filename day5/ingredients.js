const countFreshIDs = (input) => {
    const [rangeRows, _] = input.split(/\n\n+/);
    const ranges = rangeRows
                    .split('\n')
                    .map(row => row.split('-').map(Number))
                    .sort((a, b) => a[0] - b[0])
    
    let count = 0;

    let lastEnd = 0;
    for (const [start, end] of ranges) {
        const countStart = Math.max(start, lastEnd + 1);
        if (end < countStart) continue;
        count += end - countStart + 1;
        lastEnd = Math.max(lastEnd, end);
    }
    return count
}
const countFreshIngredients = (input) => {
    const [rangeRows, idRows] = input.split(/\n\n+/);
    const ranges = rangeRows.split('\n').map(row => {
        return row.split('-');
    });
    
    let freshIngredients = 0;
    idRows.split('\n').forEach(id => {
        for (const range of ranges) {
            if (Number(range[0]) <= Number(id) && Number(id) <= Number(range[1])) {
                freshIngredients++;
                break;
            }
        };
    });
    return freshIngredients;
};

module.exports = { countFreshIngredients, countFreshIDs };
