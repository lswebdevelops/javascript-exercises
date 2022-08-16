
const people = [
    {
      name: "Carly",
      yearOfBirth: 1942,
      yearOfDeath: 1970,
    },
    {
      name: "Ray",
      yearOfBirth: 1962,
      yearOfDeath: 2011,
    },
    {
      name: "Jane",
      yearOfBirth: 1912,
      yearOfDeath: 1941,
    },
  ]
  
  const findTheOldest = function() {
    let thisYear = new Date().getFullYear();
    // carly
    
    let yearOfBirth =  people[0].yearOfBirth;
    
    let yearOfDeath =  people[0].yearOfDeath;
  if(yearOfDeath === undefined){
    yearOfDeath = thisYear;
  }



    let age = yearOfDeath -yearOfBirth;
  
    // ray
    
    let yearOfBirth2 =  people[1].yearOfBirth;
    
    let yearOfDeath2 =  people[1].yearOfDeath;
    if(yearOfDeath2 === undefined){
        yearOfDeath2 = thisYear;
      }
    
    let age2 = yearOfDeath2 -yearOfBirth2;
    
    
    // Jane
    
    let yearOfBirth3 =  people[2].yearOfBirth;
    
    let yearOfDeath3 =  people[2].yearOfDeath;
    if(yearOfDeath3 === undefined){
        yearOfDeath3 = thisYear;
      }
    
    let age3 = yearOfDeath3 -yearOfBirth3;
    
   
    
   // comparing the ages:
 
   if(people[0].yearOfDeath === undefined || people[1].yearOfDeath === undefined ||  people[2].yearOfDeath === undefined ){
    if(age > age2 && age > age3){
          if(yearOfDeath === thisYear){
              return people[0];
          }
          
      }else if(age2 > age && age2 > age3){
          if(yearOfDeath2 === thisYear){
              return people[1];
          }
       
      }else if(age3 > age && age3 > age2){
          if(yearOfDeath3 === thisYear){
              return people[2];
          }
          
      }
  }
  
  

    if(age > age2 && age > age3){
       return people[0];      
    
    }else if(age2 > age && age2 > age3){
        return people[1];     
    }else if(age3 > age && age3 > age2){
         return people[2];
           
    }
    


  
 
    
};

// // Do not edit below this line
module.exports = findTheOldest;

