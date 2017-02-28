//Respuesta 1
var demo = function (value) { return value * 2; };
console.log(demo(10));
//Respuesta 2
var defaultName = function (name) {
    if (name === void 0) { name = "Rodry"; }
    console.log("Hi!!!", name);
};
console.log(defaultName());
console.log(defaultName("Cochinilla"));
//Respuesta 3
var dsNumbers = [1, 2, 3];
console.log(Math.max.apply(Math, dsNumbers));
//Respuesta 4
var dsOtherNumbers = [5, 9];
dsOtherNumbers.push.apply(dsOtherNumbers, dsNumbers);
console.log(dsOtherNumbers);
//Respuesta 5
var dsResults = [105, 1.059, 3.89];
var val1 = dsResults[0], val2 = dsResults[1], val3 = dsResults[2];
console.log([val1, val2, val3]);
//Respuesta 6
var userDataObject = { nameUser: "Rodrigo", lastName: "Vazquez" };
var nombreUsuario = userDataObject.nameUser, apellidoUsuario = userDataObject.lastName;
console.log(nombreUsuario, apellidoUsuario);
