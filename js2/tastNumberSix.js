"use strict";

let depositAmount = +prompt("Какую сумму внести:");
let lastDigit = depositAmount % 10;
let lastDigit1 = depositAmount % 100;
/**
 * @function defineDeclination выбора склонения слова рубль и возврощения слова в результат.
 */
function defineDeclination(lastDigit){
    switch (lastDigit) {
        case 1:
        return"рубль";
        case 2:
        case 3:
        case 4:
        return "рубля";
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        return "рублей";
    }
}
/**
 * @function defineDeclination1 для исключения(от 11 до 19) выбора склонения слова рубль и возврощения слова в результат.
 */
function defineDeclination1(lastDigit1){
    switch (lastDigit1) {
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        return "рублей";
    }
}
/**
 * Условие при каких обстоятелтствах делать выбор
 */
if (lastDigit1 <= 11 || lastDigit1 >= 19) {
    alert(`Ваш счет пополнен на : ${depositAmount + defineDeclination(lastDigit1)}`);
}else{
    alert(`Ваш счет пополнен на : ${depositAmount + defineDeclination1(lastDigit)}`);
}