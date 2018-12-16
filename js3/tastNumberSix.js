"use strict";

let shoppingBasket = [
    ["blouse",2,500],
    ["boots",1,700],
    ["jacket",1,1200]
];
let basketAllItemSumm = shoppingBasketAddition(shoppingBasket);
/**
 *Функция считает сумму содержимого карзины
 *@position - это позиция в масиве
 */
function shoppingBasketAddition(position) {
    let  basketAllItem = 0;
    for (let i = 0; i < position.length; i++){
         basketAllItem = basketAllItem + position[i][1] * position[i][2];
    }
    return basketAllItem;
}
console.log(`Сумма : ${basketAllItemSumm}`);