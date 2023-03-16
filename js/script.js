const foodListArray = ["pane", "nutella", "latte", "acqua", "frutta"];

let i = 0;
const list = document.querySelector("ul")
let foodList = "";
while (i < foodListArray.length) {
    currentFood = foodListArray[i];
    console.log(currentFood);
    foodList += `<li>${currentFood}</li>`;
    i++;
}

list.innerHTML = foodList;