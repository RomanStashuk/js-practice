const smallestDivisor = (n) => {
    const iter = (d) => {
        if (d > n / 2) return n;
        if (n % d === 0) return d;
        return iter(++d);
    }
    return iter(2);
}

// Tests
console.log(smallestDivisor(7));
