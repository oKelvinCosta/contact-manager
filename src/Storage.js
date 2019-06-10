// ------- MODO 1 ---------
// Só para helper mesmo
import React, { Component } from "react";

export default class Storage extends Component {
  kel = "kel";

  // Inserir dados no Storage
  static setStorage = (key, json) => {
    localStorage.setItem(key, json);
  };
  // Puxar dados do Storage
  static getStorage = key => {
    return JSON.parse(localStorage.getItem(key));
  };
  // Verificar existencia do Storage
  static existStorage = key => {
    return localStorage.getItem(key) ? true : false;
  };
}

// ------- MODO 2 ---------

// export default Storage;

//  Inserir dados no Storage
// const setStorage = (key, json) => {
//   localStorage.setItem(key, json);
// };
// // Puxar dados do Storage
// const getStorage = key => {
//   return localStorage.getItem(key);
// };
// // Verificar existencia do Storage
// const existStorage = key => {
//   return localStorage.getItem(key) ? true : false;
// };

// export default { setStorage, getStorage, existStorage };

// ------- MODO 3 ---------
// O melhor modo

// const helpers = {
//   helper1: function(){

//   },
//   helper2: function(param1){

//   },
//   helper3: function(param1, param2){

//   }
// }

// export default helpers;

// import helpers from './helpers';
// and use like this:

// helpers.helper1();
// helpers.helper2('value1');
// helpers.helper3('value1', 'value2');
