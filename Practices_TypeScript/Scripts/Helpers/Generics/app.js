//Generics
function echo(data) {
    return data;
}
console.log(echo("Rodry"));
console.log(echo(27));
console.log(echo({ firstName: "Rodrigo", age: 28 }));
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Rodry").length);
console.log(betterEcho(28));
console.log(betterEcho({ name: "Rodry", age: 28 }));
//Built-in Generics
var testResults = [2, 1];
testResults.push(-2.99);
console.log(testResults);
//Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Test", "Test2"]);
printAll([1, 2]);
//Generic Types
var echo2 = betterEcho;
console.log(echo2("Hi again"));
//Generic Class
var SimpleMath = (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "Rodry";
simpleMath.multiplyValue = 50;
console.log(simpleMath.calculate());
//# sourceMappingURL=app.js.map