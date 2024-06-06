const gridContainer = document.getElementById("gameboard");
const gridBox = gridContainer.children

const boxSelected = function(e) {
    const item = e.target;
    if (item.classList[0] == "grid-item") {
        item.classList = "selected";
        console.log(e.target);
    } 
}

const boxDisable = function(e) {
    const item = e.target;
}

for (let i = 1; i<= 9; i++) {
    const gridItem =  document.createElement("div");
    gridItem.classList.add("grid-item");
    gridContainer.appendChild(gridItem);
    gridItem.addEventListener("click", boxSelected)
}