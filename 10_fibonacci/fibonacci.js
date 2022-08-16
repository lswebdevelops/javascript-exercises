

const fibonacci = function(n) {

   
    if(n < 1){
        return "OOPS";
    
    }
    else if(n == 1){
        return 1;
    }
    else
    {
    
        function fibonacciArray (n) {
      
            let fib = [0, 1];
            let data = [];
            
            for(let i = 2; i <= n; i++) {
              fib[i] = fib[i - 1] + fib[i - 2]; 
              data.push(fib[i]);
            }
            
            return data;
          }
        
    let result = fibonacciArray(n);
    
    let lastItem = result.slice(-1).pop();
    console.log(`The result of the fibonacci of ${n} in ${lastItem}`)
    return lastItem;
    
        }
    
    }
    console.log(fibonacci(-25));
    

// Do not edit below this line
module.exports = fibonacci;