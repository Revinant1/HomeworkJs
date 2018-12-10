"use strict";
let vol = +prompt("Введите Число");
let pow = +prompt("Введите значение степени");

/** функция возведения в степень **/
function exponentiation(vol,pow) {
    if ( pow === 1){
        return vol;
    } else {
      return vol * exponentiation(vol , pow - 1)
    }

}
alert(`Вапш ркзультат : ${exponentiation(vol,pow)}`);