// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.
const removeFromArray = function(...args) {
    const array = args[0]
    return array.filter(val=>!args.includes(val))
}

/*
const removeFromArray = function(...args) {
    // Assign the first argument (The Array) to a variable
    const arr = arguments[0];
    // Declare new variable to store
    let newArr = [];
    // Use forEach to go through array
    arr.forEach((item) => {
    // push every element into the new array
    // UNLESS it is included in the function arguments
    // so we create a new array with every item, except those that should be removed
        if (!args.includes(item)){
            newArr.push(item);
        }
    });
    return newArr;
    
}
*/



/* Own Solution
const removeFromArray = function(arr,number) {
    // Loop through the arguments list
    for (let a=1; a<arguments.length; a++){
        // If arguments exist in array
        if (arr.includes(arguments[a])){
            // Remove the arguments from array
            arr.splice(arr.indexOf(arguments[a]),1); 
            }
        } 

    return arr;
   
};
*/
// Do not edit below this line
module.exports = removeFromArray;
