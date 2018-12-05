"use strict";

let tc = +prompt("укажи температуру в Цельсиях :");
let tf = (9 / 5) * tc + 32;
tf = Math.round(tf);
alert(`Температура в Фарингейтах : ${tf}`);