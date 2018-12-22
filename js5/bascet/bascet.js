"use strict";

let basket =
 [
    {
    name: "blouse",
    quantity: 2,
    price: 500,
},
{
    name: "boots",
    quantity: 3,
    price: 1200,
},
{
    name: "jacket",
    quantity: 2,
    price: 700,
}

];

let $basketBox = document.createElement("div");
$basketBox.id = "basketBox";
document.body.appendChild($basketBox);



let basketSamAll = basketDiscoverSum(basket);
let basketList = basketOutput(basket);

function basketOutput(basket) {
    for (let j = 0; j < basket.length; j++){
        let $itemList = document.createElement("div");
        $itemList.classList.toggle("item-cart");
        $basketBox.appendChild($itemList);

        let $itemName = document.createElement("div");
        $itemName.textContent = "Вид :"+ " " + basket[j].name;
        $itemList.appendChild($itemName);

        let $itemQuantity = document.createElement("div");
        $itemQuantity.textContent = "Количество :"+ " " + basket[j].quantity;
        $itemList.appendChild($itemQuantity);

        let $itemPrice = document.createElement("div");
        $itemPrice.textContent = "Цена :"+ " " + basket[j].price;
        $itemList.appendChild($itemPrice);
    }

}

function basketDiscoverSum(basket) {
    let basketSum = 0;
    if (basket.length === 0) {
        const $basketBoxIsEmpty = document.createElement("span");
        $basketBoxIsEmpty.innerHTML = "В корзине пусто";
        $basketBox.appendChild($basketBoxIsEmpty);
    } else {
        for (let i = 0; i < basket.length; i++) {
                basketSum = basketSum + basket[i].quantity * basket[i].price;
            }
            let $basketSum = document.createElement("span");
            $basketSum.textContent = "В корзине товаров на :" + " " + basketSum + " " + "Рублей";
            $basketBox.appendChild($basketSum);
        }
}


