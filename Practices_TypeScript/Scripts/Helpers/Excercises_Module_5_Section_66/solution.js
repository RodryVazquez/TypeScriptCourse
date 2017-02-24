var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Ejercicio 1
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
//Ejercicio 2
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
        _super.apply(this, arguments);
    }
    Rectangle.prototype.calcSize = function (value1, value2) {
        this.width = value1;
        this.length = value2;
        return this.width * this.length;
    };
    return Rectangle;
}(BaseObject));
//# sourceMappingURL=solution.js.map