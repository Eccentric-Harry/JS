//"use strict"; this statement defines that the following JS code follows the modern version (Strandardized)
// aur agar ye nhi likhe toh har variable ka object type ko mention karna zaroori hai.
console.log("Harinadh");

const accountId = 20168
let accountEmail = "Eccentricharry@gmail.com"
var accountName = "harry"
accountCity = "Palasa"

//accountEmail= "Demo@github.com"
accountName = "Sai"
accountCity = "Visakhapatnam"

let newVar;

// accountId = 1344

/* Prefer not to use var as it has issues 
when dealing with block scope and function scope */

// ; use kar sakte hai koi problem nhi

console.table([accountEmail, accountId,accountName, accountCity])
//console.log(newVar);

// alert( 3 + 3) ye command sirf browser pe kaam karta hai. 

// Let's learn DataTypes:
let name  = "EccentricHarry"
let age = 19
let isLoggedIn = true;

const MaxNum = Number.MAX_SAFE_INTEGER
//console.log(MaxNum)

/* 
PRIMITIVE:
number => The Number type is a double-precision 64-bit binary format IEEE 754 value. It is capable of storing positive floating-point numbers between 2-1074 (Number.MIN_VALUE) and 21024 (Number.MAX_VALUE) as well as negative floating-point numbers between -2-1074 and -21024, but it can only safely store integers in the range -(253 − 1) (Number.MIN_SAFE_INTEGER) to 253 − 1 (Number.MAX_SAFE_INTEGER) 

bigint => bas bade integers ke liye use karte hai. it can easyly store numbers that fall out of range of Max_Safe_Integer and same for Min

string=> ""
boolean => true/false
null=> srtandalone value (empty)
undefined => abhi value define nhi hua hai!
symbol => used to check for uniqueness.

NON-PRIMITIVE:
objects
*/

console.table(typeof MaxNum);
console.table(typeof null);  // the output is object. some say that its a language error.
console.table(typeof undefined); // output is undefined.