const cities = ['moscow', 'london', 'berlin', 'porto'];
const getElement = (arr, index, defaultValue = null) => {
    return arr[index] ?? defaultValue;
}

// Tests
console.log(getElement(cities, 1));
console.log(getElement(cities, 4))
console.log(getElement(cities, 10, 'paris'))
console.log(getElement(cities, -1, 'oops'))
