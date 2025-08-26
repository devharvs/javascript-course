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
 
// console.log("=== MATH OPERATORS ===");
 
// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);
 
// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
 
// console.log("Math operations:");
// console.log("Addition:", 10 + 5);
// console.log("Subtraction:", 20 - 8);
// console.log("Multiplication:", 4 * 7);
// console.log("Division", 15 / 3);
// console.log("Exponentiation", 2 ** 3);
 
// //Math with Strings!
// const firstName = "Jonas";
// const lastName = "Doe";
// console.log(firstName + " " + lastName);
 
// console.log("Hello " + "World" + "!");
 
// console.log("=== ASSIGNMENT OPERATORS ===");
 
// let x = 10 + 5;
// console.log("x starts as:", x);
 
// x += 10;
// console.log("x starts as:", x);
 
// x /= 2;
// console.log("x starts as:", x);
 
// x++;
// console.log("x starts as:", x);
 
// x--;
// console.log("x starts as:", x);
 
// //comparison operators
// console.log("=== COMPARISON OPERATORS ===");
 
// console.log("Age comparison:");
// console.log(ageJonas > ageSarah);
// console.log(ageSarah >= 18);
// console.log(ageJonas < 30);
 
// console.log("Number comparisons:");
// console.log(25 > 20);
// console.log(15 < 10);
// console.log(18 >= 18);
// console.log(16 <= 15);
 
// const isFullAge = ageSarah >= 18;
// console.log("Sarah is adult:", isFullAge);
 
// const isJonasOlder = ageJonas > ageSarah;
// console.log("Jonas is older:", isJonasOlder);
 
// console.log("Complex comparison:");
// console.log(now - 1991 > now - 2018);
 
// let z, y;
// z = y = 25 - 10 - 5;
// console.log(z, y);
 
// const averageAge = (ageJonas + ageSarah) / 2;
// console.log(ageJonas, ageSarah, averageAge);
 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// //MARK BMI
// console.log("=== MARK BMI ===");
// console.log("Mark's Mass: ", massMark);
// console.log("Mark's Height: ", heightMark);
// const BMI = massMark / heightMark ** 2;
// console.log("Mark's BMI: ", BMI);
 
// //JOHN BMI
// console.log("=== JOHN BMI ===");
// console.log("John's Mass: ", massJohn);
// console.log("John's Height: ", heightJohn);
// const BMI2 = massJohn / (heightJohn * heightJohn);
// console.log("John's BMI: ", BMI2);
 
// //WHOSE BMI IS HIGHER
// console.log("=== IS MARK'S BMI HIGHER? ===");
// const isMarkHigher = BMI > BMI2;
// const BMIhigh = isMarkHigher;
// console.log(BMIhigh);

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;
 
// const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
// console.log(jonas);
 
// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);
 
// console.log(`I'm ${2037 - 1991} years old`);
// console.log(`Math works: ${2 + 3} equals five`);
// console.log(`Comparisons too: ${5 > 3}`);
// console.log(`Just a regular string...`);
 
 
// const age = 16;
 
// if(age >= 18){
//     console.log("Sarah can start driving license 🚗");
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }
 
// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));
 
// const massMark = 78;
// const heightMark = 1.69;
// const massJohn = 92;
// const heightJohn = 1.95;
 
// console.log("=== TRUTHY ===");
// //MARK BMI
// console.log("=== MARK BMI ===");
// console.log("Mark's Mass: ", massMark);
// console.log("Mark's Height: ", heightMark);
// const BMIMark = massMark / heightMark ** 2;
// console.log("Mark's BMI: ", BMIMark);
 
// //JOHN BMI
// console.log("=== JOHN BMI ===");
// console.log("John's Mass: ", massJohn);
// console.log("John's Height: ", heightJohn);
// const BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log("John's BMI: ", BMIJohn);
 
// //WHOSE BMI IS HIGHER
// console.log("=== IS MARK'S BMI HIGHER? ===");
// const isMarkHigher = BMIMark > BMIJohn;
// const BMIhigh = isMarkHigher;
// if(isMarkHigher){
//     const aveBMI = BMIMark - BMIJohn;
//     console.log(`Mark's BMI ${BMIMark} is undeniably higher than John's BMI ${BMIJohn}! You are lacking ${aveBMI} average compared to Mark.`);
// }else{
//     console.log(`Mark's BMi is not higher than John. John Wins!`);
// }


// type conversion and coercion
const inputYear = "1991";
console.log(Number(inputYear), inputYear); 
console.log(Number(inputYear) + 18); 

console.log(Number("Jonas")); //Not a number
console.log(typeof NaN);

console.log(String(23), 23);
console.log(typeof String(23));

//Automatic type coercion
console.log(`I am ` + 23 + ` years old`);
console.log(`23` - `10` - 3);
console.log(`23` / `2`);
console.log(`23` * `2`);

let n =`1` + 1;
console.log(n);

n = n - 1;
console.log(n);

// type conversion - explicit/manual (recommended)
// type coercion - implicit/automatic (javascript does itself)


// Equality - Strict
const age = "18";
if(age === 18) console.log("You just became an adult :D (strict)");
if(age == 18) console.log("You just becamse an adult :D (loose)");

console.log(`18` === 18);
console.log(`18` == 18);
console.log(18 === 18);

// why == can be dangerous
console.log(`0` == 0);
console.log(0 == false);
console.log(`0` == false);
console.log(null == undefined); //special case

console.log(`` == 0);
console.log(`    ` == 0);

//best practice
const favourite = Number(prompt(`What's your favourite number?`));
console.log(favourite);
1

if (favourite === 23) {
  console.log("Cool! 23 is an amazing number!");
} else if (favourite === 7) {
  console.log("7 is also a cool number");
} else if (favourite === 9) {
  console.log("9 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}

if (favourite !== 23) console.log("Why not 23?");

//Test equality operators
const userInput = `25`;
console.log(userInput === 25);
console.log(userInput === `0`);
console.log(userInput === ` `);

//Logical operators
const hasDriversLicense = false; //A
const hasGoodVision = true; //B
console.log(`AND Operator: ${hasDriversLicense && hasGoodVision}`);
console.log(`OR Operator: ${hasDriversLicense || hasGoodVision}`);
console.log(`NOT Operator: ${!hasDriversLicense}`);

const isTired = false;
console.log(hasDriversLicense && hasGoodVision && !isTired);

if (hasDriversLicense && hasGoodVision || !isTired) {
  console.log(`Harvey is able to drive!`);
}else {
  console.log(`Someone else should drive...`);
}

// const age = 20;
// const hasPermission = true;
// const hasExperience = false;

// if ((age >= 18 || hasPermission) && hasExperience) {
//   console.log("Approved to drive");
// } else {
//   console.log("Not approved to drive");
// }

// console.log(["Age 20, permission true, experience: false: "]
//     `Age = 20, permission true, experience: false: `,
//     (age >= 18 || hasPermission) && hasExperience
// );

let age1;
let hasID;
let isVIP;


function canEnter(age1, hasID, isVIP) {
  if ((age1 >= 21 && hasID) || isVIP) {
    console.log(`Age: ${age1}, ID: ${hasID}, VIP: ${isVIP} = Allowed to enter.`);
  } else {
    console.log(`Age: ${age1}, ID: ${hasID}, VIP: ${isVIP} = Not allowed to enter.`);
  }
}

// The Conditional (Ternary) Operator

const age2 = 23;
// Basic ternary: condition ? valueIfTrue : valueIfFalse
const drink = age2 >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine` : `water` }`);

////////////////////////////////////
// Coding Challenge #4

const bill = 40; // Test with 275, 40, and 430

// Step 1: Create the tip calculation using ternary operator
// Rule: 15% if between 50-300, otherwise 20%
// Hint: bill >= 50 && bill <= 300

const tip = (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.20;

// Step 2: Create beautiful output with template literal
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// Expected outputs:
// Bill 275: "The bill was 275, the tip was 41.25, and the total value 316.25"
// Bill 40:  "The bill was 40, the tip was 8, and the total value 48"
// Bill 430: "The bill was 430, the tip was 86, and the total value 516"