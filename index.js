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