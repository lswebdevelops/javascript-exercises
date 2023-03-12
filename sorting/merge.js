// variable of array of integers:
const arr = [3,42, 234,2,253,51,1,98,87,8,18];
// merge sorting an array using recursion
// create a function to merge items.
function mergeSort(list){
    // check if array has just 1 or zero items
    if(list.length <= 1){
        return list
    }
    // create a variable that represents half of the array
    let middleIndex = Math.ceil(list.length/ 2);
    // pick the left part
    const leftPart = list.splice(0, middleIndex);
    // pich the right part
    const rightPart = list.splice(-middleIndex);
    // merge the items from left and right using merge function declared below
    return merge(mergeSort(leftPart), mergeSort(rightPart));
}
// function merging left and right
function merge(left, right){
    // variable result to store the items sorted.
    let result = [];
    // while we have a length of left and right do..
   while(left.length && right.length){
       // if the leftiest  item in the array is less or iquals to the [0] item of the r.array
        if(left[0] <= right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
   }
   // concatenate the left/right result
    return result.concat(left, right)
}

 // prints it to the console: 
console.log(mergeSort(arr));
