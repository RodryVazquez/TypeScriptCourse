

//Declaramos la clase
class Person {

    public personName: string;
    private typeProperty: string;
    protected ageProperty: number = 28;

    //Constructor de la clase 
    constructor(personName: string, public userNameProperty: string) {
        this.personName = personName;
    }
    //Metodo que imprime el valor de ageProperty
    printAge() {
        console.log(this.ageProperty);
    }

    //Metodo que asigna el valor de typeProperty
    private setType(value: string) {
        this.typeProperty = value;
        console.log(this.typeProperty);
    }
}
//creamos una constante de tipo Person
const person = new Person("Rodrigo", "It's the name");
console.log(person);
console.log(person.personName, person.userNameProperty);
//Metodos de la clase
console.log(person.printAge());
//console.log(person.setType("Hello Rodry")); // No es accesible al ser privado

//Creamos una nueva clase que herede de Person
class NewPerson extends Person {
    //Sobreescribimos el valor de personName
    //personName: "Rodrigo Vazquez";

    constructor(value:string) {
        super("Rodrigo", value);
        this.ageProperty = 28;
    }
}

//Creamos una constante de NewPerson
const constNewPerson = new NewPerson("Constructor NewPerson");
console.log(constNewPerson);

//Getter y Setters
class  Plant {
    private _species: string;

    set species(value: string) {
        this._species = value;
    }

    get species() {
        return this._species;
    }
}
let plant = new Plant();
plant.species = "Default";
console.log(plant.species);

//Propiedades y metodos estaticos 
class Helpers {
    //Declaramos las variables estaticas
    static PI: number = 3.1416;

    static calcCircunference(dimeter: number): number {
        return this.PI * dimeter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunference(12.88));

//Clases abstractas
abstract class Project {
    projectName: string = "ProjectDefault";
    budget: number = 1000;

    calcBudget() {
        return this.budget;
    }
    abstract changeNameProject(name:string):void;
}

class ItProject extends Project {

    //Implementamos el metodo abstracto
    changeNameProject(name: string): void {
        this.projectName = name;
    }
}

let newProject = new ItProject();
console.log(newProject);
newProject.changeNameProject("Android Studio Project");
console.log(newProject);

//Constructores privados y patron Singleton
class OnlyOne {

    private static instance: OnlyOne = new OnlyOne();
    private number: number;

    constructor() {
        if (OnlyOne.instance) {
            throw new Error("");
        }
        OnlyOne.instance = this;
    }

    static getInstance(): OnlyOne {
        return OnlyOne.instance;
    }

    setDefaultNumber(value: number) {
        this.number = value;
    }

    getNumber() {
        return this.number;
    }
}

let wronInit = new OnlyOne();//Error al iniciar
let rigthInit = OnlyOne.getInstance();
rigthInit.setDefaultNumber(10);
console.log(rigthInit.getNumber());





























