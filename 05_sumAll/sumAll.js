  const sumAll =function(firstNumber, lastNumber) {

  let f = firstNumber;
  let l = lastNumber;

  if('number' !== typeof(f))
{  return "ERROR";}

if('number' !== typeof(l))
{  return "ERROR";}



    if(f < 0){
        return "ERROR";
    }
    
    if(firstNumber > lastNumber ){
       f =lastNumber;
       l = firstNumber;
    }




    let arr =[]  ;
    while(f < l +1){
        arr.push(f++);
    }
    
   
    
    
    let sum = 0;
    
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    

return sum;
};

 console.log(sumAll(123,1))
// Do not edit below this line
module.exports = sumAll;
