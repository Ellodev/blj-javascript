ul = document.getElementById('aufgaben');

refreshElements();

function refreshElements() {
    for (let i = 0; i < ul.children.length; i++) {
        ul.children[i].firstElementChild.addEventListener("click", () => markTaskComplete(i))
    }
}

function markTaskComplete(i) {
    ul.children[i].classList.remove('offen');
    ul.children[i].classList.add("erledigt");
}

button = document.getElementById("button");

button.addEventListener("click", (e) => {addNewTask(document.getElementById("input").value);});

function addNewTask(i) {
    ul.appendChild(document.createElement("li"))
    const newLi = ul.lastElementChild;
    newLi.innerHTML = i;
    newLi.classList.add('offen');
    newLi.appendChild(document.createElement("a"));
    const newLink = newLi.lastElementChild;
    newLink.innerHTML = " erledigt";
    newLink.setAttribute("href", "#")
    refreshElements();
}

document.getElementById("everything").addEventListener("click", (e) => {finishedEverything()});

function finishedEverything() {
    for (let i = 0; i < ul.children.length; i++) {
        markTaskComplete(i);
    }
}