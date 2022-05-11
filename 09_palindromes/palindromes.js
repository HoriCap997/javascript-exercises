const palindromes = function (arr) {
    // Keep only alphabet character
    const onlyAlphabet = arr.replace(/[^a-z]/gi,'').toLowerCase()

    // Check with reverse alphabet only character
    return onlyAlphabet == onlyAlphabet.split('').reverse().join('')  
};

// Do not edit below this line
module.exports = palindromes;
