"use strict";

const arr = [
    [2, 4, 6],
    [1, 5, 10],
    [7, 4, 1],
];

/**
 * Функция возвращает сумму элементов массива.
 * @param {number[]} arr Массив, сумма элементов которого вернет функция.
 * @returns {number} Сумма элементов массива.
 */
function getSumOfElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

// Переменная хранящая индекс массива с максимальной суммой элементов.
let maxSumOfArrayIndex = 0;
// Переменная хранящая максимальную сумму одного из массивов.
let maxSumOfArray = getSumOfElements(arr[maxSumOfArrayIndex]);

for (let i = 1; i < arr.length; i++) {
    let tmpSum = getSumOfElements(arr[i]);
    if (tmpSum > maxSumOfArray) {
        maxSumOfArrayIndex = i;
        maxSumOfArray = tmpSum;
    }
}
console.log(`Массив номер ${maxSumOfArrayIndex} имеет максимальную сумму элементов равную ${maxSumOfArray}`);
let minNumber = arr[maxSumOfArrayIndex][0];
for (let i = 1; i < arr[maxSumOfArrayIndex].length; i++) {
    if (arr[maxSumOfArrayIndex][i] < minNumber) {
        minNumber = arr[maxSumOfArrayIndex][i]
    }
}
console.log(`Минимальное значение элемента в этом массиве равно ${minNumber}`);





