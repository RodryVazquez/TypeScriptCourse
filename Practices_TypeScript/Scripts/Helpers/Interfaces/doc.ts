//Interfaces
interface INamedPerson {
    firstName: string;
    //Parametro opcional
    age?: number;
    //Parametro en el que se desconce el Key
    [propertyName: string]: any;
    //Metodo
    setPersonInfo(lastName: string): void;
}

function setPersonInfo(person: INamedPerson) {
    console.log("Iam " + person.firstName);
    console.log("and this are my languages " + person.languages);
}

function changeName(person: INamedPerson) {
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
class PersonC implements INamedPerson {
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
interface IDoubleValueCal {
    (number1: number, number2: number): number;
}

let myDoubleFunction: IDoubleValueCal;
myDoubleFunction = (value1: number, value2: number) => (value1 + value2) * 2;
console.log(myDoubleFunction(1, 2));

//Herencia en interface
interface IOldPerson extends INamedPerson {
    age:number;
}

const oldPerson: IOldPerson = {
    //Ahora la edad es requerida
    age: 27,
    firstName: "Rodry Again",
    setPersonInfo(lastName: string)
    {
        console.log("Hello!!");
    }
};
console.log(oldPerson);


 
