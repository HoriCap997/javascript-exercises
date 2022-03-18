const leapYears = function(years){
    return (years % 4 === 0 && (years % 100 !==0 || years % 400 ===0 ))
}

/* My solution
const leapYears = function(years) {
    if (years % 4 == 0 && years % 100 != 0){
        return true;
    }
    else if (years % 100 == 0 && years % 400 == 0){
        return true;
    }
    else{
        return false;
    }


};
*/

// Do not edit below this line
module.exports = leapYears;
