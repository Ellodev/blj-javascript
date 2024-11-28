const ballContainer = document.getElementById("ball-container");

// Add event listeners to all children
for (let i = 0; i < ballContainer.children.length; i++) {
    ballContainer.children[i].addEventListener("click", changeBall);
}

function changeBall(event) {
    // Ensure the clicked element is the target
    let bild = event.target;

    if (bild.src.indexOf("ball.png") > -1) {
        bild.src = "kreuz.png"; // Change the image
    } else {
        bild.remove(); // Remove the clicked element
        checkStatus(); // Check if the game is over
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
