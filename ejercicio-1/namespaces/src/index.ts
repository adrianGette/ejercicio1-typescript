// / <reference path="utility.ts" />
import { Person, generateRandomNumber } from './myModules';
import { PI as piNumber } from './myModules';
// import * as allMyModules from './myModules';

// const utils = Utility.Taxes;

const user: Person = {
    id: 1,
    name: "Adrian"
}

// console.log( utils.calculateIva( 100 ) );
// console.log( utils.calculatePenaltyIva( 200 ) );

// con primeros imports
console.log( piNumber );
console.log( user );
console.log( generateRandomNumber() );


// con el import de todos mis modulos
// const secondUser: allMyModules.Person = {
//     id: 1,
//     name: "Adrian"
// }
// console.log( allMyModules.PI );
// console.log( secondUser );
// console.log( allMyModules.generateRandomNumber() );