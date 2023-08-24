"use strict";

require("core-js/modules/es.string.includes.js");
require("core-js/modules/es.array.reduce.js");
// function responderDespues2sec(){
//     return new Promise(resolver=>{
//         setTimeout(() => {
//             resolver('respuesta')
//         }, 2000);
//     })
// }

// async function asyncCall(){
//     console.log('llamando');
//     const resultado = await responderDespues2sec();
//     console.log((resultado));
// }

// fetch('ulr', {method: 'post'})
// .then(()=>{

// })

// asyncCall()

// Ejercicio 3
let str = 'Copa de fútbol';
str.includes('Copa'); // ?
str.includes('Torneo'); // ?

class miClase {
  constructor(a, b) {
    this.result = a + b;
  }
}
const miFuncion = (a, b) => a + b;
const resultado = [1, 2].reduce((a, b) => a + b, 0);
