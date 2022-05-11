// const fibonacci = function(n) {
//     return Array.from({length:n}).reduce(
//         (acc, val, i) => acc.concat( i>1 ? acc[i-1] + acc[i-2] : i),
//         []
//     )
// };

const fibonacci = function(num){
    const n = parseInt(num)
    return n < 0? 'OOPS'
            : n <=2 ? 1
            : fibonacci (n-1) + fibonacci(n-2)
}

// Do not edit below this line
module.exports = fibonacci;
