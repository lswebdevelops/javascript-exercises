// const user = { name: "luciano", surname: "Sardanha", age: 37 };
// console.log(user);

// // const name = user.name;
// // const surname = user.surname;
// // const age = user.age;

// const { name, surname, age } = user;
// console.log(name, age, surname);

// const HIGH_TEMPERATURES = {
//   yesterday: 75,
//   today: 77,
//   tomorrow: 80,
// };

// // Only change code below this line

// const { yesterday, today, tomorrow } = HIGH_TEMPERATURES;

// // Only change code above this line
// console.log(yesterday, today, tomorrow);

// const HIGH_TEMPERATURE2 = {
//   yesterday2: 75,
//   today2: 77,
//   tomorrow2: 80,
// };

// // Only change code below this line

// const { today2: todayTemp } = HIGH_TEMPERATURE2;
// const { tomorrow2: tomorrowTemp } = HIGH_TEMPERATURE2;

// console.log(todayTemp, tomorrowTemp);
// // Only change code above this line


const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Only change code below this line
    
  const {today: highToday} = HIGH_TEMPERATURES;
  const {tomorrow: highTomorrow} = HIGH_TEMPERATURES; 
  
  // Only change code above this line
  console.log(highToday, highTomorrow);