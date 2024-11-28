let bool2 = true;

setInterval(function () {
    bool2 = !bool2;
    zeichneSchachbrett(bool2);
}, 1500);

function zeichneSchachbrett(bool2) {
    let result = '';
    let bool = bool2;

    for (let x = 0; x < 8; x++) {
        for (let y = 0; y < 8; y++) {
            if (bool) {
                result += "<div class='black'></div>";
            } else {
                result += "<div class='white'></div>";
            }
            bool = !bool;
        }
        bool = !bool;
    }

    document.getElementsByTagName("body")[0].innerHTML = result;
}
