const gridContainer = document.getElementById("gameboard");
const gridBox = gridContainer.children;
// const arrayFromContainer = Array.from(gridContainer);
const arrayFromTheGrids = Array.from(gridBox);

/* // FUNCTION UNVIVERSALCONTROLER NOT WORKING
const universalControler = (e) => {
    const item = e.target;
    const boxSelected = () => {
        if (item.classList == "selected") {} else if (item.classList[0] == "grid-item") {
            item.classList = "selected";
            // console.log(e.target);
        }
    }
    const getElementIndex = () => {
        let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
        console.log(index); 
    }
    const returnElementIndex = () => {
        let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
        return index;

    }
    const executerFunction = () => {
        let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
        console.log(gameBoardObject.gameStatus.gameInProgress().chooseBoardLocation(index)); 
    }
    const functionToPrintCell = () => {
        let index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
        arrayCell[index].innerText = gameBoardObject.retCurrentPlayer();

    }
    return {boxSelected, getElementIndex, returnElementIndex, executerFunction, functionToPrintCell}
}
*/


const boxSelected = function(e) {
    const item = e.target;
    if (item.classList == "selected") {} else if (item.classList[0] == "grid-item") {
        item.classList = "selected";
        // console.log(e.target);
    } 
}

const getElementIndex = function(e) {
    const item = e.target;
    var index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    console.log(index);
}

const returnElementIndex = (e) => {
    const item = e.target;
    var index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    return index;
}

const executerFunction = (e) => {
    const item = e.target;
    var index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    console.log(gameBoardObject.gameStatus.gameInProgress().chooseBoardLocation(index));        
}

const functionToPrintCell = (e) => {
    const item = e.target;
    var index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    arrayCell[index].innerText = gameBoardObject.retCurrentPlayer();
}

const cleanVisualgameBoard = () => {
    // const item = e.target;
    // var index = Array.prototype.slice.call(item.parentElement.children).indexOf(item);
    for (let oneCell of arrayCell) {
        oneCell.innerText = "";               
    }
}

const takeOffClass = () => {
    for (let oneCell of arrayCell) {
        oneCell.classList.remove("selected");
        oneCell.classList.add("grid-item");        
    }
}

const ticTacToker = (() => {
    for (let i = 1; i<= 9; i++) {
        const gridItem =  document.createElement("div");
        gridItem.classList.add("grid-item");
        gridContainer.appendChild(gridItem);
        gridItem.addEventListener("click", getElementIndex);
        gridItem.addEventListener("click", boxSelected);
        gridItem.addEventListener("click", functionToPrintCell);
        gridItem.addEventListener("click", executerFunction);
    }
})()



// arrayFromTheGrids.forEach(element => {
//     if(element.classList === "grid-item") {
//         return arrayFromContainer.indexOf(element);
//     }
// })

