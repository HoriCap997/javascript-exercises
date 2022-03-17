const sumAll = function(...args) {
    // Define total variable
    let total = 0; 
    // Check condition if argument 1 and argument 2 are integer and positive number
    if (Number.isInteger(args[0]) && Number.isInteger(args[1]) && args[0]>0 && args[1]>0){
        // Loop through the number
        for (i=Math.min.apply(null, args); i<=Math.max.apply(null, args);i++){
            // Add all together
            total+=i; 
        }
    }
    else{
        total='ERROR';
    }
    return total;

};

/*
Alternate Solution 
const sumAll = function(min, max) {
  if (!Number.isInteger(min) || !Number.isInteger(max)) return "ERROR";
  if (min < 0 || max < 0) return "ERROR";
  if (min > max) {
    const temp = min;
    min = max;
    max = temp;
  }
  let sum = 0;
  for (let i = min; i < max + 1; i++) {
    sum += i;
  }
  return sum;
};
*/

// Do not edit below this line
module.exports = sumAll;
