"use strict";


let numberall = +prompt(`Введите номер 6 цифр Билета. И узнай счастливый ли он:`);
let number6 = numberall % 10;
let number5 = Math.floor(numberall / 10) % 10;
let number4 = Math.floor(numberall / 100) % 10;
let number3 = Math.floor(numberall / 1000) % 10;
let number2 = Math.floor(numberall / 10000) % 10;
let number1 = Math.floor(numberall / 100000) % 10;
let sum1 = number1 + number2 + number3;
let sum2 = number4 + number5 + number6;
if (sum1 == sum2) {
    alert (`Ваш билет счастливый`);
}
if (sum1 != sum2) {
    alert(`Повезет в другой раз`);
}


