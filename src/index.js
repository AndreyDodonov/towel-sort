module.exports = function towelSort(matrix) {

  if (!matrix || matrix.length === 0) {
    return [];
}
return matrix.reduce((prev, curr, idx) => {
    if (idx === 1 || idx % 2 !== 0) {
        return [...prev, ...curr.reverse()];
    } else {
        return [...prev, ...curr];
    }
});
};