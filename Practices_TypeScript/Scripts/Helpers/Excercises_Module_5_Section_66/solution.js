var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//Ejercicio 1 Clase
var Car = (function () {
    function Car(name) {
        this.name = name;
    }
    Car.prototype.honk = function () {
        console.log("Tooooooooot!");
    };
    Car.prototype.accelerate = function (speed) {
        this.acceleration += speed;
    };
    return Car;
}());
var car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.acceleration);
//Ejercicio 2 Herencia
var BaseObject = (function () {
    function BaseObject() {
        this.width = 0;
        this.length = 0;
    }
    return BaseObject;
}());
var Rectangle = (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Rectangle.prototype.calcSize = function (value1, value2) {
        this.width = value1;
        this.length = value2;
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
var rectangle = new Rectangle();
console.log(rectangle.calcSize(5, 2));
//Ejercicio 3 Getter & Setter
var PersonClass = (function () {
    function PersonClass() {
        this._firstName = "";
    }
    Object.defineProperty(PersonClass.prototype, "firstName", {
        get: function () { return this._firstName; },
        set: function (value) {
            if (value.length > 3) {
                this._firstName = value;
            }
            else {
                this._firstName = "";
            }
        },
        enumerable: true,
        configurable: true
    });
    return PersonClass;
}());
var personClass = new PersonClass();
console.log(personClass.firstName);
//Set
personClass.firstName = "Rodry";
//Get
console.log(personClass.firstName);
//# sourceMappingURL=solution.js.map