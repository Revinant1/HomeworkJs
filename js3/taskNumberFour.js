"use strict";

nextNumber:
for (let d = 2; d <= 100; d++) {
    for (let b = 2; b < d; b++) {
        if (d % b === 0) continue nextNumber;
    }
        console.log( d );
    }