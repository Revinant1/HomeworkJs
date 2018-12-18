"use strict";
/**
 * @numObj - переменная вызывающая фуенцию.
 */
let numObj = numToObj();

/**
 * @numToObj - функция запрашивает числа от 0 - 999 чесла и определяет сотни десятки и еденици
 */
function numToObj() {
    let inputNumber = +prompt('Введите число от 0 до 999');
    let arrNumber = inputNumber + "";
    let objNumber = {};

    if (arrNumber.length == 3) {
        objNumber['hundreds'] = +arrNumber[0];
        objNumber['tens'] = +arrNumber[1];
        objNumber['units'] = +arrNumber[2];
        console.log(objNumber);
        return objNumber;
    }
    else if (arrNumber.length == 2){
        objNumber['tens'] = +arrNumber[0];
        objNumber['units'] = +arrNumber[1];
        console.log(objNumber);
        return objNumber;
    }
    else if (arrNumber.length == 1){
        objNumber['units'] = +arrNumber[0];
        console.log(objNumber);
        return objNumber;
    }
    else if (arrNumber.length > 3) {
        console.log("Ошибка! Вы ввели недопустимое кол-во символов");
        return objNumber;
    }

    }

