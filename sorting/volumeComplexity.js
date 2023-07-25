const arr = [3,42, 234,2,253,51,1,98,87,8,18];
function sumArr(arr){

let sum = 0;
arr.forEach((number) =>{
    sum += number;
});
console.log(sum);
}

sumArr(arr)
