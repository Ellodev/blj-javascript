window.addEventListener("load", initialize);

function initialize() {
    document.getElementById("add").addEventListener("click", add);
    document.getElementById("remove").addEventListener("click", remove);
}

function add() {
    let ingredients = document.getElementById("ingredients");
    let choice = document.getElementById("choice");
    
    if (ingredients.selectedIndex > -1 ) {
        let selectedOption = ingredients.options[ingredients.selectedIndex];
        choice.appendChild(selectedOption);
    }
}

function remove() {
    let choice = document.getElementById("choice");
    let ingredients = document.getElementById("ingredients");
    
    if (choice.selectedIndex > -1 ) {
        let selectedOption = choice.options[choice.selectedIndex];
        ingredients.appendChild(selectedOption);
    }
}