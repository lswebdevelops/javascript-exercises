

const removeFromArray = function(firstArray,...toRemove) {
    let modifiedArray = [...firstArray];
    for (let i = 0; i < toRemove.length; i++) {
        if (modifiedArray.includes(toRemove[i])) {
            modifiedArray.splice(modifiedArray.indexOf(toRemove[i]), 1)
        }    
    }
    return modifiedArray;
};

// Do not edit below this line
module.exports = removeFromArray;




