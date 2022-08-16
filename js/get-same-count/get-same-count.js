const uniq = require('lodash.uniq');

const getSameCount = (arr1, arr2) => {
    let counter = 0;

    arr1 = uniq(arr1);
    arr2 = uniq(arr2);

    for (let item1 of arr1) {
        for (let item2 of arr2) {
            if (item1 === item2) {
                counter++
            }
        }
    }

    return counter;
}

// Tests

// Общие повторяющиеся элементы: 1, 3, 2
console.log(getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5])); // 3

// Общие повторяющиеся элементы: 4
console.log(getSameCount([1, 4, 4], [4, 8, 4])); // 1

// Общие повторяющиеся элементы: 1, 10
console.log(getSameCount([1, 10, 3], [10, 100, 35, 1])); // 2

// Нет элементов
console.log(getSameCount([], [])); // 0
