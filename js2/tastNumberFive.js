"use strict";

/**
 * Создаю переменую  .
 * @function mathOperation Вызываю в переменной функция с нужным действием.
 */
const difference5 = (mathOperation(12,8,"difference"));
console.log(`Я получил вычитание: ${difference5}`);
const composition5 = mathOperation(11,10,"composition");
console.log(`Я получил умножение: ${composition5}`);
const result5 = mathOperation(7,2,"result");
console.log(`Я получил сложение: ${result5}`);
const quotient5 = mathOperation(9,3,"quotient");
console.log(`Я получил деление: ${quotient5}`);
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