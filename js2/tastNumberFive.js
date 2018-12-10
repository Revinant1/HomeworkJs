"use strict";


/**
 * Создаю переменую  .
 * @function mathOperation Вызываю в переменной функция с нужным действием.
 */
const difference1 = (mathOperation(12,8,"difference"));
console.log(`Я получил вычитание: ${difference1}`);
const composition1 = mathOperation(11,10,"composition");
console.log(`Я получил умножение: ${composition1}`);
const result1 = mathOperation(7,2,"result");
console.log(`Я получил сложение: ${result1}`);
const quotient1 = mathOperation(9,3,"quotient");
console.log(`Я получил деление: ${quotient1}`);
/**
 * @function result сложения.
 */
function result(e,f){
    return (e + f);
}
/**
 * @function difference функция выситания.
 */
function difference(e,f) {
    return (e - f);
}
/**
 * @function composition функция умножения.
 */
function composition(e,f) {
    return (e * f);
}
/**
 * @function quotient функция деления.
 */
function quotient(e,f) {
    return (e / f);
}
/**
 * @function mathOperation подбора вызываемого дейчтвия (+,-,*,/) к @arg (a) и (b) .
 */
function mathOperation(e,f,operator) {
    switch(e,f,operator) {
        case "difference":
        return difference(e, f);
        case "result":
        return result(e,f);
        case "quotient":
        return quotient(e,f);
        case "composition":
        return composition(e,f);
    }
}