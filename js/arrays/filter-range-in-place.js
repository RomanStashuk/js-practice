// let arr = [5, 3, 8, 1];

// const filterRangeInPlace = (arr, a, b) => {
//     arr = arr.filter(element => (element >=a && element <= b))
// }

// filterRangeInPlace(arr, 2, 4);

// console.log(arr);

function copySorted(arr) {
    let result = arr.sort();
  return result
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

console.log( sorted );
console.log( arr );
