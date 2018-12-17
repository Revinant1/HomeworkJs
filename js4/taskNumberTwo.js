"use strict";

let basket = {
    item:{
        name: "blouse",
        quantity: 2,
        price: 500,
    },
    item1:{
        name: "boots",
        quantity: 3,
        price: 1200,
    },
    item2:{
        name: "jacket",
        quantity: 2,
        price: 700,
    },
    basketSum: 0,
};

let  basketSamAll = basketDiscoverSum(basket)

function basketDiscoverSum(basket){
    for(let position in basket){
        if (position != "basketSum"){
            basket.basketSum = basket.basketSum + basket[position].quantity * basket[position].price;
        }

    }

    return basket.basketSum;
}
console.log(basket.basketSum);
