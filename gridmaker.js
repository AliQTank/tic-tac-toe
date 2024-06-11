const gridContainer = document.getElementById("gameboard");
const gridBox = gridContainer.children;
// const arrayFromContainer = Array.from(gridContainer);
const arrayFromTheGrids = Array.from(gridBox);

const boxSelected = function(e) {
    const item = e.target;
    if (item.classList[0] == "grid-item") {
        item.classList = "selected";
        // console.log(e.target);
    } 
}

const getElementIndex = function(e) {
    const item = e.target;
    var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(e.target);
    console.log(index);
}

const newname = function(e) {
    const item = e.target
    for (let i = 0; i < gridBox.length; i++) {
        if (gridBox[i].classList === "grid-item") {
            console.log(e.target);
        }  
    } 
}

for (let i = 1; i<= 9; i++) {
    const gridItem =  document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener("click", boxSelected);
    gridItem.addEventListener("click", getElementIndex);
}

// arrayFromTheGrids.forEach(element => {
//     if(element.classList === "grid-item") {
//         return arrayFromContainer.indexOf(element);
//     }
// })

