const ftoc = function(fTemp) {
  
  // C = 5/9 x (F-32)

 let f_to_C = 0;
 f_to_C = 5/9 * (fTemp - 32);

 let roundedC = Math.round(f_to_C *10)/10 ;
 
 return roundedC;


};
console.log(ftoc(303));



const ctof = function(cTemp) {

  //F = 1.8 C + 32  or F = 9/5 C + 32

  let c_to_F = 0;
  c_to_F = 9/5 * cTemp + 32 ;

   let roundedF = Math.round(c_to_F *10)/10 ;
 
  return roundedF;
};


console.log(ctof(1545));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};




