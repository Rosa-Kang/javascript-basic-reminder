let name = 'Rosa';
let age = 30;
let isApproved = false;
let selectedColor = null;

let person = {
    name: 'Rosa',
    age: 20
};

name = 12;
let answer = typeof name;

person['name'] = 'Chris';

console.log(answer);
console.log(person.name);

let selectedColors = ['red', 'sky-blue'];

console.log(selectedColors);
let realType = typeof (selectedColors);
console.log(realType);

function greet(name) {
    return 'Hello ' + name;
}

console.log(greet('Chris'));

function square(num) {
  return num * num;
}

console.log(square(89));

//*JS object
let cat = { // opening of our object
name: 'Fluffy',
age: 4, 
eyeColor: 'Blue',
food: {
favorite: 'Tuna',
leastFavorite: 'Oranges'
},
meow() {
alert('Meooowwwww')
} //body of the method
} //closing of our object

// // |Webbrowser’s built in method|
// document.addEventListener('click', clickHandler)

// function clickHanlder () {
//   alert('Clicked Here')
// }

// JS Array
let myWords = ['red', 'orange', 'black'];
myWords.splice(0, 1);
console.log(myWords);

//Making decisions
// let strawberryCount = 20;

// if (strawberryCount > 9) {
//   document.write("congrats!");
// } else {
//   document.write("sorry, we do not ship orders that small.");
// }

// //while () {} for(){}
// for (n = 0; n < 501; n++) {
//   document.write("there are " + n + "strawberries.<br>");
// }

// //higher order function
// //1: accepts function as an argument
// document.addEventListener("click", clickHandler);

// function clickHandler(){
//   alert('Click event happened');
// }

// //2:returns function
// function createMultiplier(multiplier) {
//   return function (x) {
//     return x * multiplier;
//   }
// }

// let doubleMe = createMultiplier(2);
// let tripleMe = createMultiplier(3);
// let quadrupleMe = createMultiplier(4);

// document.write(quadrupleMe(5));

//Returning vs Mutating
let array = ['a', 'b', 'c', 'f'];

array.push('e'); //mutated array with push method
console.log(array); //now the array has changed.
