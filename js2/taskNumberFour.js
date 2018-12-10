"use strict";

/**
 * Создаю переменую .
 * Применяю функция сложения.
 */
const sam = result( 2,5);
console.log(`Сложение: ${sam}`);
function result(z,w){
    return (z + w);
}
/**
 * Создаю переменую .
 * Применяю функция вычитания.
 */
const difference1 =  difference(30,20);
console.log(`Вычитание: ${difference1}`);
function difference(z,w) {
    return (z - w);
}
/**
 * Создаю переменую .
 * Применяю функция умножения.
 */
const composition1 = composition(5,3);
console.log(`Умножениие: ${composition1}`);
function composition(z,w) {
    return (z * w);
}
/**
 * Создаю переменую .
 * Применяю функция деления.
 */
const quotient1 = quotient(12,2);
console.log(`Деление: ${quotient1}`);
function quotient(z,w) {
    return (z / w);
}





