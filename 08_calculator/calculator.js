function add (num1, numb2){
  let sum = num1 + numb2;
   let result = typeof(summ);
   console.log(result)

  if(result !== 'number'){

      
}
 return sum;
}

const subtract = function( num1, num2) {
	let result = num1- num2;
  return result;
};

const sum = function(sum) {
	 	   
  const array = sum;
  let summ = 0;
  
  for (let i = 0; i < array.length; i++) {
      summ += array[i];
  }
  return summ;
};

const multiply = function(multiplies) {
   	   
  const array = multiplies;
  let mult = 1;
  
  for (let i = 0; i < array.length; i++) {
      mult *= array[i];
  }
  return mult;
};

const power = function(num, num2) {
  return num ** num2;
	
};

const factorial = function(n) {
	if(n === 1 || n === 0)
  return 1;
  else
  return n * factorial(n-1)
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};



