Javascript Basics Reminder
Build interactive web application.

Every browsers have Javascript engine that can run JS. Javascript engine in FF and Chrome are Spider Monkey and V8.  

In 2009, R. D took the open source of js engine in chrome and embedded inside c++ program. So Node is c++ program that includes google’s v8, js engine.

So Js can now run on browser and node. Browser and Node provide runtime environment for JS.

- [x] What is Node.js It is one of the JavaScript environments (Web Browser + Node.js). Node is invented by a genius developer Randle in 2009 and he took the open source of JS engine in chrome and embedded C++ program.

- [x] ECMA Script vs Javascript ?
:ECMA Script is just a specification and JS is a programming language.
In 2015, they released EC2015/ES6 and we’re using JS ES6 according to the specification.

- [x] Best Practice : add your script at the end of the body tag.

Javascript Variable
Rule1. Should be meaningful
Rule2. Cannot be a reserved keyword
Rule3. They cannot start with a number
Rule4. They cannot contain space or hyphen (ex. let firstName)
Rule5. They are case-sensitive
 
Javascript Constant
If you need to re-assign variable, use let, and if you don’t want to re-assign, use const.


|Javascript Data Type|
1. Primitives/Value Types.
:String, Number, Boolean, Undefined, Null and Symbol(ES6)

2. Reference Types
Objects, Arrays, Functions

|Static Languages vs Dynamic Languages|
One thing that separates JS from other languages is JS is a dynamic language. A type of variable can change at run-time in JS.

|Javascript Object|
We can reference an Object so the code is cleaner.

|Javascript Arrays|
Argument is the input value and the parameter of the function at the time of declaration.


Let ourApp = http.createServer()

|Argument vs parameter|
greet(“argument”);
Function greet (parameter) {}

|Javascript Object|
: Object contains properties and methods(: when a function is inside object, we call it method)


|Javascript Array|
A collection of items and it has various method to manipulate the array.


|Higher Order Function|
Higher order function is a function that 1)accepts a function as an argument or 2)returns a function.


|Scope and Context in Javascript|
Scope has to do with Variable - Let uses block(-curly bracket of block) scope, whereas Var uses function(-curly bracket of function) scope.!!
Context has to do with Object - 


Javascript Object Oriented Programming
Style of programming or programming paradigm.
OOP: C#, Java, Ruby, Python and Javascript 

4Pillars : Encapsulation, Abstraction, Inheritance, Polymorphism
 In OOP, we combine a group of related functions and variables into unit and we call the unit an Object. &we refer to these variables as ‘Property’ and functions as ‘Method’

localStorage
We group variables and functions into an object and we call it as ‘Encapsulation’

- [x] Why encapsulation is better? : reduce complexity & increase reusability.
one problem that can be solved by encapsulation is that we don’t need to have so many parameters in one function. 
Ex. 
let baseSalary = 50,000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate) {    return baseSalary + (overtime * rate);
}

vs——————————————————————
If we use OOP and group variables and method in one object, we don’t have to use that many of parameters in a function.
: The best functions are those with no parameters.

let employee = {   baseSalary: 50,000,
  overtime: 10,
  rate: 20,
   getWage:function() {    return this.baseSalary + (overtime * rate);
 }
};

- [x] Abstraction : reduce complexity + isolate impact of changes
We can hide some of the properties and method from outside to make those interface simpler, and reduce the impact of the change.
- [x] Inheritance : eliminate redundant code
Inheritance is a mechanism that allows you to eliminate redundant code.
- [x] Polymorphism : refactor ugly switch/case statement
Poly means ‘many’ and morph means ‘form’ so polymorphism means many forms in OOP. In OOP, polymorphism is a technique that allows you to get rid of long ethanol’s or switch and case statements.

1. Javascript Object
Const circle = {} // in Javascript, we call curly brackets as ‘object literal’

:find ‘properties’ and ‘method’ from below object*
const circle = {
    radius: 1,
    location: {
        x:1,
        y:1
    },
    draw: function () {
        console.log('draw');
    }
}


- [x] In Javascript we have Value Type; which is also called Primitives and Reference Types; also called  Objects.
- [x] |Primitives = Value Types| : number, string, boolean, symbol, undefined, null
- [x] |Object = Reference Types| : Object, Array, Function
- [x] Primitives are copied by their value and Objects are copied by their reference.

Let num = 10;

function increase(num) {   num++;
}

increase(num);
console.log(num); —> still 10 bc’ primitives are copied by their value.

Let obj = {value:10};

function increase(obj) {   obj.value++;
}

increase(obj);
console.log(obj) —> obj={value 11};

- [x] We use Constructor function to create an object.
function Circle() {}

const circle = new Circle(argument)

<!-- Factory Function -->
<!-- :It's one way to create an object. With Factory Function, we have defined logic in one place -->
function createCircle(radius){
    return {
        radius,
        draw () {
            console.log('draw');
        }
    };
}

const myCircle = createCircle(1);
<!-- with factory function, we created an object and return the function -->

<!-- Constructor -->
<!-- Camel Notation : oneTwoThree
Pascal Notation : OneTwoThreeFour -->
<!-- :It's another pattern of creating an object. -->
function CreateCircle(radius){
    this.radius = radius;
    this.draw = function() {
        console.log('draw');
    }
}

const circle = new Circle(1)
<!-- new operator (1) creates an empty object and set this to point to the object, (3)return the function  -->
with constructor, we created a new object with new operator and instead of returning the object, we used 'this' keyword and 'pascal naming'.

We can use either way(factory vs constructor) when creating an object with function.


Getters and Setters

const person = {
    firstName: 'Mosh',
    lastName: 'Hamedani',
    get fullName () {
        return `&{person.firstName} ${person.lastName}`;
        },
    set fullName(value) {
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
    }

person.fullName = 'John Smith';






























