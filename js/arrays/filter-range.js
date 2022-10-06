let arr = [5, 3, 8, 1];

const filterRange = (arr, a, b) => {
    return arr.filter(element => (element >= a && element <= b))
}

console.log(filterRange(arr, 1, 4));
console.log(arr)
