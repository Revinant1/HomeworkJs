"use strict";

let name = ("Василий"), admin = (name);
console.log(`Имя Администратора : ${admin}`);
console.log(`Складывает 2 числа и прибовляет строку: ${10 + 10 + "10"}`);
console.log(`Не возможно сложить числа и строку по этому нет матиматических действий : ${10 + "10" + 10}`);
console.log(`Выполнил матиматических действий так кака поставлен унарый + : ${10 + 10 + +"10"}`);
console.log(`Поставлен унарный - происходит деление на -0 : ${ 10 / -""}`);
console.log(`Из за разделителя , а не . не понимает как дробное число по этому результат NaN: ${ 10 / +"2,5"}`);
console.log(`Атрибут DEFER откладывает выполнение скрипта до тех пор, пока вся страница не будет загружена полностью.`);
console.log(`Атрибут ASYNC файл.js будет выполняться без ожидания загрузки веб-страницы. страница не ожидает результата 
выполнения скрипта, а продолжает загружаться как обычно.`);


