const gcd = function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
};

const lcm = function(a, b) {
    return (a * b) / gcd(a, b);
};

const lcmOfArray = function(arr) {
    return arr.reduce((acc, num) => lcm(acc, num), arr[0]);
};

module.exports = { lcmOfArray };
