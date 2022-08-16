const palindromes = function (str) {
  
         // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); 
    
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); 

 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); 
    
      // taking commas off string;

  
  
    
//taking Symbols  off string;
let withoutSymbols = str.replaceAll(/!|\.|\,|\ |\?|\#|\-|\+|\_|\'/g,'');


let  reverseWithoutSymbols = joinArray.replaceAll(/!|\.|\,|\ |\?|\#|\-|\+|\_|\'/g,'');
      
    let finalStr = withoutSymbols.toLowerCase();
    let finalReverseStr = reverseWithoutSymbols.toLowerCase();
 // returning the reversed string
// console.log(finalStr);
// console.log(finalReverseStr);
 //Step 4.comparing if they are palindromes
 /*
 A palindrome is a string that is spelled the same both forwards and backwards, usually without considering punctuation or word breaks:
*/

if(finalStr === finalReverseStr ){ return true;}return false;


};

console.log(palindromes('Animal loots foliated detail of stool lamina.'))
// Do not edit below this line
module.exports = palindromes;
