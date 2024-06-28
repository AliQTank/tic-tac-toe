const gridContainer = document.getElementById("gameboard");
const gridBox = gridContainer.children;
// const arrayFromContainer = Array.from(gridContainer);
const arrayFromTheGrids = Array.from(gridBox);

const boxSelected = function(e) {
      const item = e.target;
        if (item.classList = "selected") {} else if (item.classList[0] == "grid-item") {
            item.classList = "selected";
            // console.log(e.target);
        } 
    }

const controlsObject = (() => {
    const boxSelected = (function(e) {
        const item = e.target;
        if (item.classList = "selected") {} else if (item.classList[0] == "grid-item") {
            item.classList = "selected";
            // console.log(e.target);
        } 
    })()
    const getElementIndex = (function(e) {
        const item = e.target;
        var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(e.target);
        console.log(index);
    })()
    const returnElementIndex = ((e) => {
        const item = e.target;
        var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(e.target);
        return index;
    })()
    const newname = (function(e) {
        const item = e.target
        for (let i = 0; i < gridBox.length; i++) {
            if (gridBox[i].classList === "grid-item") {
                console.log(e.target);
            }  
        } 
    })()
    
    return {boxSelected, getElementIndex, returnElementIndex, newname}
})
const getElementIndex = function(e) {
    const item = e.target;
    var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(item);
    console.log(index);
}

const returnElementIndex = (e) => {
    const item = e.target;
    var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(item);
    return index;
}

const newname = function(e) { //NO FUNCIONA
    const item = e.target
    for (let i = 0; i < gridBox.length; i++) {
        if (gridBox[i].classList === "grid-item") {
            console.log(item);
        }  
    } 
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

