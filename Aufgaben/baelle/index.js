const ballContainer = document.getElementById("ball-container");

for (let i = 0; i < ballContainer.children.length; i++) {
    ballContainer.children[i].addEventListener("click", changeBall);
}

function changeBall(event) {
    let bild = event.target;

    if (bild.src.indexOf("ball.png") > -1) {
        bild.src = "kreuz.png";
    } else {
        bild.remove();
        checkStatus();
    }
}

function checkStatus() {
    if (ballContainer.children.length === 0) {
        const p = document.createElement("p");
        p.innerHTML = "<strong>GAME OVER</strong>";
        p.setAttribute("style", "color:red;");
        document.body.appendChild(p);
    }
}
