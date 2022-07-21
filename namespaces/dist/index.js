"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// / <reference path="utility.ts" />
const myModules_1 = require("./myModules");
const myModules_2 = require("./myModules");
// import * as allMyModules from './myModules';
// const utils = Utility.Taxes;
const user = {
    id: 1,
    name: "Adrian"
};
// console.log( utils.calculateIva( 100 ) );
// console.log( utils.calculatePenaltyIva( 200 ) );
// con primeros imports
console.log(myModules_2.PI);
console.log(user);
console.log((0, myModules_1.generateRandomNumber)());
// con el import de todos mis modulos
// const secondUser: allMyModules.Person = {
//     id: 1,
//     name: "Adrian"
// }
// console.log( allMyModules.PI );
// console.log( secondUser );
// console.log( allMyModules.generateRandomNumber() );
