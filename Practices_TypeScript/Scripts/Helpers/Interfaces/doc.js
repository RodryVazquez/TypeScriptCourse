function setPersonInfo(person) {
    console.log("Iam " + person.firstName);
    console.log("and this are my languages " + person.languages);
}
function changeName(person) {
    person.firstName = "Cochinilla";
}
//Por medio de un objeto
var object = {
    firstName: "Rodrigo",
    languages: ["Spanish", "English"],
    setPersonInfo: function (lastName) {
        console.log("My lastName is " + lastName + " but I'm " + this.firstName);
    }
};
//setPersonInfo({ firstName: "Rodry", age: 28 });
changeName(object);
setPersonInfo(object);
object.setPersonInfo("Vazquez");
//Tambien podemos utilizar clases
var PersonC = (function () {
    function PersonC() {
    }
    //Metodo
    PersonC.prototype.setPersonInfo = function (work) {
        console.log("Iam " + this.firstName + " " + work);
    };
    return PersonC;
}());
var myPerson = new PersonC();
myPerson.firstName = "rodrigo";
myPerson.worker = "Developer";
setPersonInfo(myPerson);
myPerson.setPersonInfo(myPerson.worker);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(1, 2));
