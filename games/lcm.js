const gcd = (a, b) => {
    return b === 0 ? a : gcd(b, a % b);
};

const lcm = (a, b) => (a * b) / gcd(a, b);

const lcmOfArray = (arr) => arr.reduce((acc, num) => lcm(acc, num), arr[0]);

module.exports = { lcmOfArray };
