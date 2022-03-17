const repeatString = function(word,times) {
    let words= '';
    if (times<0){
        return "ERROR";
    }
    for (let i=0; i<times; i++){ 
        words+=word;
    }
    return words;
};

/* Another Solution
const repeatString = function(word,number) {
    const words= new Array();
    if (number<0){
        return "ERROR";
    }
    for (let i=number; i>0; i--){ 
        words.push(word);
    }
    return words.join("");
};
*/
// Do not edit below this line
module.exports = repeatString;
