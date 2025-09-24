'use strict';
 
// console.log(varX);
// console.log(letX);
// console.log(constX);
 
// var varX = 1;
// let letX = 2;
// const constX = 3;
 
 
// function addDecl(a, b){
//     return a + b;
// }
 
// const addExpr = function(a, b){
//     return a + b;
// };
 
// const addArrow = (a, b) => a + b;
 
// const person = {
//     name: 'Jonas',
//     greet: function(){
//         console.log(`Hello I am ${this.name}`);
//     },
// };
 
// person.greet();
 
// const anotherPerson = { name: 'Sarah' };
 
// //borrow greet function
// anotherPerson.greet = person.greet;
// anotherPerson.greet();
 
// //detached func
// const greetFunction = person.greet;
 
// greetFunction();
 
// const obj = {
//     name: 'Objects',
//     regularMethod: function(){
//         console.log('Regular', this.name);
//     },
//     arrowMethod: () =>{
//         console.log('Arrow: ', this.name);
//     },
// };
 
// obj.regularMethod();
 
// obj.arrowMethod();
 
// const quiz = {
//   name: 'Quiz Object',
//   regularMethod() {
//     console.log('Regular:', this.name);
//   },
//   arrowMethod: () => {
//     console.log('Arrow:', this.name);
//   },
// };
 
// quiz.regularMethod(); // Predict: ?
// quiz.arrowMethod(); // Predict: ?
 
// const timer = {
//     name: 'Timer',
//     start: function(){
//         console.log(`${this.name} starting...`);
 
//         const self = this;
 
//         setTimeout(function() {
//             console.log(`${self.name} is finished.`);
//         }, 1000);
//     },
//     startModern: function (){
//         console.log(`${this.name} starting modern...`);
 
//         setTimeout(() => {
//             console.log(`${this.name} finished modern`);
//         },1500);
//     },
// };
 
// timer.start();
// timer.startModern();
 
// const functionTypes = {
//     regularFunction: function(){
//         console.log('Arguments length: ', arguments.length);
//         console.log('First argument:', arguments[0]);
//     },
 
//     arrowFunction: () => {
//         console.log(arguments);
//         console.log('Arrow function called');
//     },
 
//     modernFunction: (...args) => {
//         console.log('Args Length', args.length);
//         console.log('Firts arg:', args[0]);
//     },
// };
 
// functionTypes.regularFunction('hello', 'world');
// //functionTypes.arrowFunction('test');
// functionTypes.modernFunction('modern', 'approach');
 
 
// let age = 30;
 
// let oldage = age;
 
 
// age = 31;
 
// console.log('age' , age);
// console.log('oldAge', oldage);
 
// const me = { name: 'Harvey', age: 20 };
 
// const friend = me;
 
// friend.name = 'John Doe';
// friend.age = 23;
 
// console.log('Me: ', me);
// console.log('Friend: ', friend);
 
// const original = {
//     name: 'Alice',
//     age: 28,
//     hobbies: ['reading', 'coding'],
// };
 
// const shallowCopy = { ...original };
 
// shallowCopy.name = 'Bob';
// shallowCopy.age = 30;
 
 
// console.log('original: ', original.name);
// console.log('copy name: ', shallowCopy.name);
 
// shallowCopy.hobbies.push('gaming');
 
// console.log(original.hobbies);
// console.log(shallowCopy.hobbies);
 
const deepOriginal = {
    name: 'Charlie',
    age: 32,
    address: {city: 'Paris', country: 'France'},
    hobbies: ['travel', 'photography'],
};
 
const deepCopy = structuredClone (deepOriginal);
 
deepCopy.address.city = 'London';
deepCopy.hobbies.push = ('cooking');
deepCopy.name = 'Lex Sinclair';
 
console.log(deepOriginal);
console.log(deepCopy);