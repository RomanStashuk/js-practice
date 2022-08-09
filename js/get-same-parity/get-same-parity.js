const getSameParity = (arr) => {
    const result = []
    const isEven = (item) => {
        if (item % 2 === 0) return true;
        return false;
    };
    const firstElemEvety = isEven(arr[0]) ? 'even' : 'odd';
    arr.forEach(element => {
        if (firstElemEvety === 'even' && isEven(element)) {
            result.push(element);
        }
        if (firstElemEvety === 'odd' && !isEven(element)) {
            result.push(element);
        }
    });
    return result;
}

console.log(getSameParity([]));        // []
console.log(getSameParity([1, 2, 3])); // [1, 3]
console.log(getSameParity([1, 2, 8])); // [1]
console.log(getSameParity([2, 2, 8])); // [2, 2, 8]
