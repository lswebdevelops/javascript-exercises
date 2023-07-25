// const user = {
//   johnDoe: {
//     age: 34,
//     email: "johnDoe@freeCodeCamp.com",
//   },
// };

// const {
//   johnDoe: { age, email },
// } = user;
// const {
//   johnDoe: { age: userAge, email: userEmail },
// } = user;

// console.log(age, email);
// console.log(userAge, userEmail);

// const LOCAL_FORECAST = {
//   yesterday: { low: 61, high: 75 },
//   today: { low: 64, high: 77 },
//   tomorrow: { low: 68, high: 80 },
// };

// // Only change code below this line

// const {
//   today: { low: lowToday },
// } = LOCAL_FORECAST;
// const {
//   today: { high: highToday },
// } = LOCAL_FORECAST;

// // Only change code above this line


// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1 2 


let [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);

[a,b,,c] = [c,a,,b]

console.log(a,b,c);


