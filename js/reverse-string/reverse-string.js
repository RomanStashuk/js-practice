const reverseString = (str) => {
    let result = '';
    let i = str.length - 1;
    while (i >= 0) {
        result += str[i]
      i--;
    }
    return result;
}

// Tests

console.log(reverseString('Hello!'))
