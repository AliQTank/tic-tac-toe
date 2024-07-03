const cell = document.getElementsByClassName("grid-item");
const arrayCell = Array.from(cell);// VARIABLE MADE TO MAKE USE OF ARRAY METHODS, HTMLCOLLECTIONS MTHODS ARE VERY LIMITED
const printSelection = document.createElement("p");
const addSpan = printSelection.innerHTML = "<span></span>";
const hiCell = addSpan.innerText = "hi";

const functionToPrintCell = (index) => {
    // const item = e.target;
    // var index = Array.prototype.slice.call(e.target.parentElement.children).indexOf(item);  
    arrayCell[index].innerText = "X"

}