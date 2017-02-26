var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
//Declaramos la clase
var Person = (function () {
    //Constructor de la clase 
    function Person(personName, userNameProperty) {
        this.userNameProperty = userNameProperty;
        this.ageProperty = 28;
        this.personName = personName;
    }
    //Metodo que imprime el valor de ageProperty
    Person.prototype.printAge = function () {
        console.log(this.ageProperty);
    };
    //Metodo que asigna el valor de typeProperty
    Person.prototype.setType = function (value) {
        this.typeProperty = value;
        console.log(this.typeProperty);
    };
    return Person;
}());
//creamos una constante de tipo Person
var person = new Person("Rodrigo", "It's the name");
console.log(person);
console.log(person.personName, person.userNameProperty);
//Metodos de la clase
console.log(person.printAge());
//console.log(person.setType("Hello Rodry")); // No es accesible al ser privado
//Creamos una nueva clase que herede de Person
var NewPerson = (function (_super) {
    __extends(NewPerson, _super);
    //Sobreescribimos el valor de personName
    //personName: "Rodrigo Vazquez";
    function NewPerson(value) {
        _super.call(this, "Rodrigo", value);
        this.ageProperty = 28;
    }
    return NewPerson;
}(Person));
//Creamos una constante de NewPerson
var constNewPerson = new NewPerson("Constructor NewPerson");
console.log(constNewPerson);
//Getter y Setters
var Plant = (function () {
    function Plant() {
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            this._species = value;
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
plant.species = "Default";
console.log(plant.species);
//Propiedades y metodos estaticos 
var Helpers = (function () {
    function Helpers() {
    }
    Helpers.calcCircunference = function (dimeter) {
        return this.PI * dimeter;
    };
    //Declaramos las variables estaticas
    Helpers.PI = 3.1416;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircunference(12.88));
//Clases abstractas
var Project = (function () {
    function Project() {
        this.projectName = "ProjectDefault";
        this.budget = 1000;
    }
    Project.prototype.calcBudget = function () {
        return this.budget;
    };
    return Project;
}());
var ItProject = (function (_super) {
    __extends(ItProject, _super);
    function ItProject() {
        _super.apply(this, arguments);
    }
    //Implementamos el metodo abstracto
    ItProject.prototype.changeNameProject = function (name) {
        this.projectName = name;
    };
    return ItProject;
}(Project));
var newProject = new ItProject();
console.log(newProject);
newProject.changeNameProject("Android Studio Project");
console.log(newProject);
//Constructores privados y patron Singleton
var OnlyOne = (function () {
    function OnlyOne() {
        if (OnlyOne.instance) {
            throw new Error("");
        }
        OnlyOne.instance = this;
    }
    OnlyOne.getInstance = function () {
        return OnlyOne.instance;
    };
    OnlyOne.prototype.setDefaultNumber = function (value) {
        this.number = value;
    };
    OnlyOne.prototype.getNumber = function () {
        return this.number;
    };
    OnlyOne.instance = new OnlyOne();
    return OnlyOne;
}());
var wronInit = new OnlyOne(); //Error al iniciar
var rigthInit = OnlyOne.getInstance();
rigthInit.setDefaultNumber(10);
console.log(rigthInit.getNumber());
