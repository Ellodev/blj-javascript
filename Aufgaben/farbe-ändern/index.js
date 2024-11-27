document.getElementById("background-color").addEventListener("change", function () {setBackgroundColor()})
function setBackgroundColor() {
    let backgroundColor = document.getElementById("background-color").value;
    document.body.style.backgroundColor = backgroundColor;
}

document.getElementById("text-color").addEventListener("change", function () {setTextColor()})
function setTextColor() {
    let textColor = document.getElementById("text-color").value;
    document.body.style.color = textColor;
}