const sum = (num) => {
  const str = num.toString();
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result += +str[i];
  }
  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result > 9) {
    result = sum(result);
  }
  return result;
}

// Tests
console.log(addDigits('128'));
console.log(addDigits('0'));
console.log(addDigits('5'));
console.log(addDigits('10'));
