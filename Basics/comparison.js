let num = "02"
let conNum = Number(num)
console.log(conNum);
console.log(typeof(conNum));

console.log(2 > 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0); //true
console.log(null == 0);//true (NaN pe convert karta hai)
console.log(null >= 0); // true 
// the reason is that equality comparisons and less than or greater than work differently. less than or greater than converts the null value to int and then comparison.

// all these comparisons have no sertainity ie. unpredictable outputs.

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false


// === also checks the data type

console.log("2" == 2); // true
console.log("2" === 2); // false