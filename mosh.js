
//Factory Function : when a javascript literal has more than one method, it is benefitial to use Factory Function using constructor.
function createCircle(radius) {
    
    return {
        radius,
        draw: function () {
            console.log('draw');
        }
    };
}

//Constructor Function
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1); //new operator will create an empty object and it will set 'this' to point to the object and return the object from the constructor function.