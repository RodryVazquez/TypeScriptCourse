//Respuesta 1
const demo = (value :number) :number => value * 2;
console.log(demo(10));

//Respuesta 2
const defaultName = (name: string = "Rodry") => {
    console.log("Hi!!!", name);
};
console.log(defaultName());
console.log(defaultName("Cochinilla"));

//Respuesta 3
const dsNumbers = [1, 2, 3];
console.log(Math.max(...dsNumbers));

//Respuesta 4
const dsOtherNumbers = [5, 9];
dsOtherNumbers.push(...dsNumbers);
console.log(dsOtherNumbers);

//Respuesta 5
const dsResults = [105, 1.059, 3.89];
const [val1, val2, val3] = dsResults;
console.log([val1, val2, val3]);

//Respuesta 6
const userDataObject = { nameUser: "Rodrigo", lastName:"Vazquez" };
const { nameUser:nombreUsuario, lastName:apellidoUsuario } = userDataObject;
console.log(nombreUsuario,apellidoUsuario);







