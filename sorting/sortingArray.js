// create an array of integers:
const arr = [1, 3, 5, 33, 82, 2, 5];

function ascendingSorting(list){
    const newArray = [];

    // loop through array 
    for(let i = 0; i < list.length; i ++){
        for(let j = i + 1 ; j < list.length; j ++){
            // swap the elements if they are in the wrong order 
            if(list[i] > list[j]){
                let temp = list[i];
                list[i] = list[j];
                list[j] = temp;
            }
        }

    }
    newArray.push(...list)
    return newArray
}
function printUnique(item){
    let unique = [];
    for(let i = 0; i < item.length; i ++){
        if(unique.indexOf(item[i]) === -1){
            unique.push(item[i]);
        }
    }
    return unique;
}
console.log(`Ascending printing: ${ascendingSorting(arr)}`);
console.log(`Ascending unique printing: ${printUnique(ascendingSorting(arr))}`);


