const arr = [1, 3, 5, 33, 82, 2, 5];

function ascendingSorting(list){
    const newArray = [];
    for(let i = 0; i < list.length; i++) {
        for(let j = i + 1; j < list.length; j++) {
          if(list[i] > list[j]) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      newArray.push(...list);
      return newArray;
      
}
function descendingSorting(list){
    const newArray = [];
    for(let i = 0; i < list.length; i++) {
        for(let j = i + 1; j < list.length; j++) {
          if(list[i] < list[j]) {
            let temp = list[i];
            list[i] = list[j];
            list[j] = temp;
          }
        }
      }
      newArray.push(...list);
      return newArray;
      
}


console.log(`Ascending sorted: ${ascendingSorting(arr)}`);;
console.log(`Descending sorted: ${descendingSorting(arr)}`);;


// now using a better tecnic 

function sortingArray(list){
    list.sort(function(a, b){
        return a - b;
    });
    return list;
}


console.log(`Sorting array using a-b method: ${sortingArray(arr)}`);

