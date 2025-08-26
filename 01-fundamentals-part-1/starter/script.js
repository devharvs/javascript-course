// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// // JavaScript Fundamentals - Part 1
// // We'll write our code here!
// let js = "amazing";
// console.log(40 + 8 + 23 - 10);
// console.log(js);
 
// console.log("== VARIABLES ==");
 
// let firstName = "Jonas";
// console.log(firstName);
 
// let age = 30;
// console.log(age);
// age = 50;
// console.log(age);
 
// const birthYear = 1991;
// console.log(birthYear);
 
// const PI = 3.1415;
// console.log(PI);
 
// var job = "programmer";
// job = "student";
// console.log(job);
 
// const country = "Philippines";
// const language = "Filipino";
 
// age = 25;
// age = 26;
 
// console.log("=== DATA TYPES ===");
 
// // number
// let id = 12345;
// console.log(id); 12345
// console.log(typeof id); 'number'
 
// // String
// let lastName = "Doe";
// console.log(lastName); 'Doe';
// console.log(typeof lastName); 'string'
 
// // boolean
// let javaScriptIsFun = true;
// console.log(javaScriptIsFun); true
// console.log(typeof javaScriptIsFun); 'boolean';
 
// //undefined
// let year;
// console.log(year);
// console.log(typeof year); 'undefined';
 
// let dynamicVariable = 40;
// console.log(dynamicVariable, typeof dynamicVariable); [ 40, 'number' ];
 
// //change to string
// dynamicVariable = " I am now a String ";
// console.log(dynamicVariable, typeof dynamicVariable); ['I am now a String', "string"];
 
// dynamicVariable = true;
// console.log(dynamicVariable, typeof dynamicVariable); [true, 'boolean'];

// //------------------Basic Operators-----------------//
 
console.log("=== MATH OPERATORS ===");
 
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);
 
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
console.log("Math operations:");
console.log("Addition:", 10 + 5);
console.log("Subtraction:", 20 - 8);
console.log("Multiplication:", 4 * 7);
console.log("Division", 15 / 3);
console.log("Exponentiation", 2 ** 3);
 
//Math with Strings!
const firstName = "Jonas";
const lastName = "Doe";
console.log(firstName + " " + lastName);
 
console.log("Hello " + "World" + "!");
 
console.log("=== ASSIGNMENT OPERATORS ===");
 
let x = 10 + 5;
console.log("x starts as:", x);
 
x += 10;
console.log("x starts as:", x);
 
x /= 2;
console.log("x starts as:", x);
 
x++;
console.log("x starts as:", x);
 
x--;
console.log("x starts as:", x);
 
//comparison operators
console.log("=== COMPARISON OPERATORS ===");
 
console.log("Age comparison:");
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);
console.log(ageJonas < 30);
 
console.log("Number comparisons:");
console.log(25 > 20);
console.log(15 < 10);
console.log(18 >= 18);
console.log(16 <= 15);
 
const isFullAge = ageSarah >= 18;
console.log("Sarah is adult:", isFullAge);
 
const isJonasOlder = ageJonas > ageSarah;
console.log("Jonas is older:", isJonasOlder);
 
console.log("Complex comparison:");
console.log(now - 1991 > now - 2018);
 
let z, y;
z = y = 25 - 10 - 5;
console.log(z, y);
 
const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah, averageAge);
 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
 
//MARK BMI
console.log("=== MARK BMI ===");
console.log("Mark's Mass: ", massMark);
console.log("Mark's Height: ", heightMark);
const BMI = massMark / heightMark ** 2;
console.log("Mark's BMI: ", BMI);
 
//JOHN BMI
console.log("=== JOHN BMI ===");
console.log("John's Mass: ", massJohn);
console.log("John's Height: ", heightJohn);
const BMI2 = massJohn / (heightJohn * heightJohn);
console.log("John's BMI: ", BMI2);
 
//WHOSE BMI IS HIGHER
console.log("=== IS MARK'S BMI HIGHER? ===");
const isMarkHigher = BMI > BMI2;
const BMIhigh = isMarkHigher;
console.log(BMIhigh);

