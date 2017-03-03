
//Generics
function echo(data: any) {
    return data;
}

console.log(echo("Rodry"));
console.log(echo(27));
console.log(echo({ firstName: "Rodrigo", age: 28 }));

function betterEcho<T>(data : T) {
    return data;
}
console.log(betterEcho("Rodry").length);
console.log(betterEcho(28));
console.log(betterEcho({name:"Rodry",age:28}));

//Built-in Generics
const testResults: Array<number> = [2, 1];
testResults.push(-2.99);
console.log(testResults);

//Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Test", "Test2"]);
printAll<number>([1, 2]);

//Generic Types
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Hi again"));

//Generic Class
class SimpleMath<T extends number | string, U extends  number | string> {
    baseValue: T;
    multiplyValue: U;

    calculate() : number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "Rodry";
simpleMath.multiplyValue = 50;
console.log(simpleMath.calculate());





