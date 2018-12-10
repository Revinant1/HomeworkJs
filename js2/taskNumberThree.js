"use strict";

const num = +prompt("число");
const num2 = +prompt ("число");

if  (num > 0 && num2 > 0){
    console.log( num - num2);
} else if (num < 0 && num2 < 0 ) {
    console.log(num * num2);
} else if ( num > 0 && num2 < 0 || num < 0 && num2 > 0 );
    console.log( num + num2 );





