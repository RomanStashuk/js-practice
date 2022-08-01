const smallestDivisor = (n) => {
    let divisorCount = (divisor) => {
        if (n % divisor === 0) {
            return divisor;
        }
        return divisorCount(divisor + 1);
    }
    return divisorCount(2)
}

// Tests
console.log(smallestDivisor(15));
