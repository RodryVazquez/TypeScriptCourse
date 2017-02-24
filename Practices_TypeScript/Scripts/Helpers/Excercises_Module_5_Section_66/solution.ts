 //Ejercicio 1
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

//Ejercicio 2

abstract class BaseObject {
    width: number = 0;
    length: number =0;
}

class Rectangle extends BaseObject {

    rectangleWidth: number;
    rectangleLength: number;

    calcSize(value1:number,value2:number):number {
        this.width = value1;
        this.length = value2;
        return this.width * this.length;
    }
}




