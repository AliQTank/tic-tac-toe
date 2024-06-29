const cell = document.getElementsByClassName("grid-item");
const arrayCell = Array.from(cell);// VARIABLE MADE TO MAKE USE OF ARRAY METHODS, HTMLCOLLECTIONS MTHODS ARE VERY LIMITED
const printSelection = document.createElement("p");
const addSpan = printSelection.innerHTML = "<span></span>";
const hiCell = addSpan.innerText = "hi";

const functionToPrintCell = (index) => {
    // const thisSelection = arrayCell[index].appendChild(printSelection);
    arrayCell[index].innerText = "X"

}