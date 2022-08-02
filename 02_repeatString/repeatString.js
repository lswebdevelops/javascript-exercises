 const repeatString = function(string, num) {
    let repeatStrings="";
    
        if(num >=0){
            while(num >0){
      repeatStrings += string;
      num --;
    }
    }else{
        repeatStrings = "ERROR";
    }


    return repeatStrings;
    
};
const number = Math.floor(Math.random() * 10)
    num =number;
repeatString('', num);
// Do not edit below this line
module.exports = repeatString;
