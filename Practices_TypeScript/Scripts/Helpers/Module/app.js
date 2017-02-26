"use strict";
//Es necesario instalar SystemJS
var Demo = require("./circle");
var Demo2 = require("./rectangle");
console.log(Demo.Pi);
console.log(Demo.calculateDimeter(10));
console.log(Demo2.calculateRectangle(10, 3));
