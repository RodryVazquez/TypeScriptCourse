//Interfaces
interface NamedPerson {
    firstName: string;
    //Parametro opcional
    age?: number;
    //Parametro en el que se desconce el Key
    [propertyName: string]: any;
    //Metodo
    setPersonInfo(lastName: string): void;
}

function setPersonInfo(person: NamedPerson) {
    console.log("Iam " + person.firstName);
    console.log("and this are my languages " + person.languages);
}

function changeName(person: NamedPerson) {
    person.firstName = "Cochinilla";
}

//Por medio de un objeto
const object = {
    firstName: "Rodrigo",
    languages: ["Spanish", "English"],
    setPersonInfo(lastName: string) {
        console.log("My lastName is " + lastName + " but I'm " + this.firstName);
    }
};

//setPersonInfo({ firstName: "Rodry", age: 28 });
changeName(object);
setPersonInfo(object);
object.setPersonInfo("Vazquez");

//Tambien podemos utilizar clases
class PersonC implements NamedPerson {
    //Sobreescribimos al menos las variables necesarias de la interface
    firstName: string;
    //Variable adicional
    worker: string;
    //Metodo
    setPersonInfo(work: string) {
        console.log("Iam " + this.firstName + " " + work);
    }
}

const myPerson = new PersonC();
myPerson.firstName = "rodrigo";
myPerson.worker = "Developer";

setPersonInfo(myPerson);
myPerson.setPersonInfo(myPerson.worker);

//Function Types

interface DoubleValueCal {
    (number1: number, number2: number): number;
}

let myDoubleFunction: DoubleValueCal;

myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
}

console.log(myDoubleFunction(1, 2));



 
