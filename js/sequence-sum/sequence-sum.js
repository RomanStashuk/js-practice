const sequenceSum = (begin, end) => {
    if (begin > end) return NaN;
    if (begin === end) return begin;
    return begin + sequenceSum(begin + 1, end)
}


// Tests
console.log(sequenceSum(10, 5)); // NaN
console.log(sequenceSum(4, 4)); // 4
console.log(sequenceSum(-3, 2)); // (-3) + (-2) + (-1) + 0 + 1 + 2 = -3
