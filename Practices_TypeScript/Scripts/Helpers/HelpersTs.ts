//Excercise: Problem Code
//Section 2, Lecture 27
//Try to be as explicit as possible and add Types to everything you can!

//Type del objeto bankAccount
type bankAccountType = { money: number, deposit: (value: number) => void };

let bankAccount: bankAccountType = {
    money: 2000,
    deposit(value: number): void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: bankAccountType, hobbies: string[] } = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(1);
console.log(myself);

//Arrow Functions
const addNUmbers = (number1: number, number2: number): number => number1 + number2;
console.log(addNUmbers(10, 3));

const multiplyNumbers = (number1: number, number2: number) => number1 * number2;
console.log(multiplyNumbers(10, 3));

//Arrow Function sin argumentos
const greet = () => {
    console.log("Hello");
};
greet();

const greetFriend = friend => console.log(friend);
console.log(greetFriend("Rodry"));

//Parametros por default
const countDown = (start: number = 20, end:number = start -1): void => {
    console.log(start);
    console.log(end);
    while (start > 0) {
        start--;
    }
    console.log("Done", start);
};
countDown(10);

//Rest & Spread
const numbers = [1, 10, 21, 31];
console.log(Math.max(33, 99, 10));
console.log(Math.max(...numbers));

//Rest
function makeArray(name: string, ...args: number[]) {
    return args;
}
console.log(makeArray("Rodry", 1, 2, 3));

//Destructuring array
const ds = ["Rodry", "Vazquez"];
const [d1, d2] = ds;
console.log(d1, d2);

//Destructuring object
const userData = { userName: "Rodry", age: 27 };
const { userName, age } = userData;
console.log(userName, age);

// Exercise 1 - Maybe use an Arrow Function?
var double = function (value) {
    return value * 2;
};
console.log(double(10));
//Resultado ejercicio 1
const doubleArrowFunction = (value: number) => value * 2;
console.log(doubleArrowFunction(10));

// Exercise 2 - If only we could provide some default values...
var greetExam = function (name) {
    if (name === undefined) { name = "Max"; }
    console.log("Hello, " + name);
};
greetExam("");
greetExam("Anna");

//Resultado ejercicio 2
var greetExamModify = (name: string = "Rodry") => { 
    console.log(`Hello, ${name}`);
};
greetExamModify();
greetExamModify("Cochinilla");

// Exercise 3 - Isn't there a shorter way to get all these Values?
var numbersExams = [-3, 33, 38, 5];
console.log(Math.min.apply(Math, numbers));

//Resultado con operador Spread
console.log(Math.min(...numbersExams));

// Exercise 4 - I have to think about Exercise 3 ...
var newArray = [55, 20];
Array.prototype.push.apply(newArray, numbers);
console.log(newArray);

//Agregamos el arreglo al array nuevo
newArray.push(...numbersExams);
console.log(newArray);











