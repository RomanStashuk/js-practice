const getTotalAmount = (arr, currency) => {
    let result = 0;
    for (const item of arr) {
        const str = item.slice(0, 3);
        if (str !== currency) {
            continue
        }
        result += +item.slice(4);
    }
    return result
}

const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
console.log(getTotalAmount(money1, 'usd')) // 16

const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money2, 'eur')) // 135

const money3 = [
  'eur 10', 'rub 50', 'eur 5', 'rub 10', 'rub 10', 'eur 100', 'rub 200',
];
console.log(getTotalAmount(money3, 'rub')) // 270
