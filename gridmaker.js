const gridContainer = document.getElementById("gameboard");
const gridBox = gridContainer.children;
// const arrayFromContainer = Array.from(gridContainer);
const arrayFromTheGrids = Array.from(gridBox);

const boxSelected = function(e) {
    const item = e.target;
    if (item.classList == "selected") {} else if (item.classList[0] == "grid-item") {
        item.classList = "selected";
        // console.log(e.target);
    } 
}

const getElementIndex = function(e) {
    const item = e.target;
    var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(item);
    arrayCell[index].innerText = gameBoardObject.retCurrentPlayer() //INSERT CURRENT PLAYER
    console.log(index);
}

const returnElementIndex = (e) => {
    const item = e.target;
    var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(item);
    return index;
}

const ticTacToker = (() => {
    for (let i = 1; i<= 9; i++) {
        const gridItem =  document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("click", getElementIndex);
        gridItem.addEventListener("click", boxSelected);
    }
})()



// arrayFromTheGrids.forEach(element => {
//     if(element.classList === "grid-item") {
//         return arrayFromContainer.indexOf(element);
//     }
// })

