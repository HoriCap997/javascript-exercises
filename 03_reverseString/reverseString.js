const reverseString = function(word) {
    return word.split('').reverse().join('');
};

/* My solution
const reverseString = function(word) {
    let wordReverse ='';
    for (i=word.length-1; i>-1; i--){
        wordReverse += word[i]
    }
    return wordReverse;
};
*/

// Do not edit below this line
module.exports = reverseString;
