"use strict";

let chessBoard = document.createElement("div");
chessBoard.className = "chessboard";
document.body.appendChild(chessBoard);
let cellField = document.createElement("div");
cellField.className = "cellfield";
chessBoard.appendChild(cellField);
let text = document.createElement("div");
text.className = "letters";
text.innerHTML = "ABCDEFGH";
chessBoard.appendChild(text);
let render =placingBox();
function placingBox() {
    let x =8;
    let y =8;
    for (let i = 0; i < y; i++){
        let nmber = chessBoard.appendChild(document.createElement("li"));
        let row = cellField.appendChild(document.createElement("div"));
        for (let r = 0 ; r< x; r++){
            row.appendChild(document.createElement("span"));
        }
    }
}