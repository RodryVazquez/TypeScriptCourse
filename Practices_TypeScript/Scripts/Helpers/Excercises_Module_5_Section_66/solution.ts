 //Ejercicio 1 Clase
class Car {
    private name: string;
    acceleration: number;

    constructor(name: string) {
        this.name = name;
    }

    honk(): void {
        console.log("Tooooooooot!");
    }

    accelerate(speed: number): void {
        this.acceleration += speed;
    }
}

const car = new Car("BMW");
car.honk();
car.accelerate(10);
console.log(car.acceleration);

//Ejercicio 2 Herencia
class BaseObject {
    width: number = 0;
    length: number =0;
}

class Rectangle extends BaseObject {

    calcSize(value1:number,value2:number):number {
        this.width = value1;
        this.length = value2;
        return this.width * this.length;
    }
}

const rectangle = new Rectangle();
console.log(rectangle.calcSize(5, 2));

//Ejercicio 3 Getter & Setter

class PersonClass {
    _firstName: string = "";

    get firstName() { return this._firstName; }

    set firstName(value:string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = "";
        }
    }
}

const personClass = new PersonClass();
console.log(personClass.firstName);
//Set
personClass.firstName = "Rodry";
//Get
console.log(personClass.firstName);
