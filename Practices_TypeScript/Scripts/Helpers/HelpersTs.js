//Excercise: Problem Code
//Section 2, Lecture 27
//Try to be as explicit as possible and add Types to everything you can!
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var bankAccount = {
    money: 2000,
    deposit: function (value) {
        this.money += value;
    }
};
var myself = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};
myself.bankAccount.deposit(1);
console.log(myself);
//Arrow Functions
var addNUmbers = function (number1, number2) { return number1 + number2; };
console.log(addNUmbers(10, 3));
var multiplyNumbers = function (number1, number2) { return number1 * number2; };
console.log(multiplyNumbers(10, 3));
//Arrow Function sin argumentos
var greet = function () {
    console.log("Hello");
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
console.log(greetFriend("Rodry"));
//Parametros por default
var countDown = function (start, end) {
    if (start === void 0) { start = 20; }
    if (end === void 0) { end = start - 1; }
    console.log(start);
    console.log(end);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countDown(10);
//Rest & Spread
var numbers = [1, 10, 21, 31];
console.log(Math.max(33, 99, 10));
console.log(Math.max.apply(Math, numbers));
//Rest
function makeArray(name) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return args;
}
console.log(makeArray("Rodry", 1, 2, 3));
//Destructuring array
var ds = ["Rodry", "Vazquez"];
var d1 = ds[0], d2 = ds[1];
console.log(d1, d2);
//Destructuring object
var userData = { userName: "Rodry", age: 27 };
var userName = userData.userName, age = userData.age;
console.log(userName, age);
//Clases
var Person = (function () {
    function Person(personName, userNameProperty) {
        this.userNameProperty = userNameProperty;
        this.ageProperty = 28;
        this.personName = personName;
    }
    Person.prototype.printAge = function () {
        console.log(this.ageProperty);
    };
    Person.prototype.setType = function (value) {
        this.typeProperty = value;
        console.log(this.typeProperty);
    };
    return Person;
}());
var person = new Person("Rodrigo", "Cochinilla");
console.log(person);
console.log(person.personName, person.userNameProperty);
console.log(person.printAge());
console.log(person.setType("Hello Rodry"));
//Herencia
var Rodry = (function (_super) {
    __extends(Rodry, _super);
    function Rodry() {
        _super.apply(this, arguments);
    }
    return Rodry;
}(Person));
var rodry = new Rodry("value1", "value2");
console.log(rodry);
//# sourceMappingURL=HelpersTs.js.map