"use strict";

let basket = [];
let cotalog =[
    {
        photo:"produkt/415445-102(7).JPG",
        name: "jersey",
        color: "black",
        size: 40,
        prise: 1200,
    },
    {
        photo:"produkt/415445-102(7).JPG",
        name:"jacket",
        color:"red",
        size: 38,
        prise: 1500,

    },
    {
        photo:"produkt/415445-102(7).JPG",
        name:"jeans",
        color:"grin",
        size:42,
        prise:2200,

    },
    {
        photo:"produkt/415445-102(7).JPG",
        name:"T-shirt",
        color:"elowe",
        size: 39,
        prise: 2500,

    },
    {
        photo:"produkt/415445-102(7).JPG",
        name:"belt",
        color:"black",
        size: 27,
        prise: 800,

    }
];
const $wrapCotalog = document.createElement("div");
$wrapCotalog.className = "wrap_cotalog";
document.body.appendChild($wrapCotalog);

const $productList = document.createElement("div");
$productList.className = "product_list";
$wrapCotalog.appendChild($productList);

const $basketList = document.createElement("div");
$basketList.className = "basket_list";
$wrapCotalog.appendChild($basketList);


    for (let i = 0; i < cotalog.length; i++) {

        let $productCart = document.createElement("div");
        $productCart.id = "productcart" + i;
        $productCart.className = "product_cart";
        $productList.appendChild($productCart);
        let $productImgWrap = document.createElement("a");
        $productImgWrap.id = "open_modal" + i;
        $productImgWrap.className = "product_img_wrap";
        $productCart.appendChild($productImgWrap);
        $productImgWrap.addEventListener("click", handleOpenModal);

        function handleOpenModal(event) {
            $modelWindow.style.display = "flex";

        }

        let $modelWindow = document.createElement("div");
        $modelWindow.className = "model_window";
        $productImgWrap.appendChild($modelWindow);
        let $clostModel = document.createElement("button");
        $clostModel.id = "clost_model" + i;
        $clostModel.textContent = "X";
        $modelWindow.appendChild($clostModel);
        $clostModel.addEventListener("click", handleClostModal);

        function handleClostModal(event) {
            $modelWindow.style.display = "none";
            event.stopImmediatePropagation();
        }

        let $modelPhoto = document.createElement("img");
        $modelPhoto.className = "model_photo";
        $modelPhoto.src = cotalog[i].photo;
        $modelWindow.appendChild($modelPhoto);
        let $productImg = document.createElement("img");
        $productImg.className = "product_img";
        $productImg.src = cotalog[i].photo;
        $productImgWrap.appendChild($productImg);
        let $infoProductWrap = document.createElement("div");
        $infoProductWrap.className = "info_product_wrap";
        $productCart.appendChild($infoProductWrap);
        let $infoProduct = document.createElement("div");
        $infoProduct.className = "info_product";
        $infoProductWrap.appendChild($infoProduct);
        let $productName = document.createElement("span");
        $productName.className = "product_name";
        $productName.textContent = cotalog[i].name;
        $infoProduct.appendChild($productName);
        let $productPriseWrap = document.createElement("div");
        $productPriseWrap.className = "product_prise_wrap";
        $infoProductWrap.appendChild($productPriseWrap);
        let $productColor = document.createElement("span");
        $productColor.className = "product_color"
        $productColor.textContent = cotalog[i].color;
        $infoProduct.appendChild($productColor);
        let $productPrise = document.createElement("p");
        $productPrise.className = "product_prise";
        $productPrise.textContent = cotalog[i].prise;
        $productPriseWrap.appendChild($productPrise);
        let $productPriseHot = document.createElement("p");
        $productPriseHot.className = "product_prise_hot";
        $productPriseHot.textContent = cotalog[i].prise_hot;
        $productPriseWrap.appendChild($productPriseHot);
        let $buttonBuy = document.createElement("button");
        $buttonBuy.className = "button_buy";
        $buttonBuy.id = "buttonbuy" + i;
        $buttonBuy.textContent = "Купить";
        $buttonBuy.href = cotalog;
        $productCart.appendChild($buttonBuy);
        $buttonBuy.addEventListener("click", handleButtonBuy);

    }function handleButtonBuy(event) {
        let $bs = this.parentNode.cloneNode(true);
        $basketList.appendChild($bs);

    }





    




