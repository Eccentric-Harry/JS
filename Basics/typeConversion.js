// let score = 100
// console.log(typeof(score));

// let value = "100"
// console.log(typeof(value))

// let valueInString = Number(value)
// console.log(typeof(valueInString));

// let error = "100abc"
// console.log(error);
// let error_ = Number(error) // number
// console.log(error_); // NaN (Not a Number)
// console.log(typeof(error_)); // number


let check1 = null
let check1_ = Number(check1) // 0
console.log(typeof(check1_));
console.log(check1_);

let check2 = undefined
let check2_ = Number(check2) // NaN
console.log(typeof(check2_));
console.log(check2_);

let check3 = true
let check3_ = Number(check3) // true:1 , false:0
console.log(typeof(check3_));
console.log(check3_);

let check4 = "Harry"
let check4_ = Number(check4) 
console.log(typeof(check4_));
console.log(check4_); // NaN

let isLoggedIn = 1;
let booleanIsLoggesIn = Boolean(isLoggedIn)
console.log(booleanIsLoggesIn); // true
console.log(typeof(booleanIsLoggesIn)); 
// emptyString => false, someString=> true


let number = 33
let stringNumber = String(number)
console.log(typeof(stringNumber));
console.log(stringNumber);

//**************************************OPERATIONS**************************************

console.log("1" + 2);  // 12
console.log(1 + "2");   //12
console.log(1 + 2 + "3"); //33
console.log("1" + 2 + 3);  //123

console.log(+true); //1
console.log(+""); //0