const container = document.querySelectorAll(".container");
const arrowRight = document.querySelector(".arrow_right");
const arrowLeft = document.querySelector(".arrow_left");
let x = 0;

arrowRight.addEventListener("click", function() {
    if ( x >= container.length-1 ) {
        return;
    }
    x += 1;

    for (let i = 0; i < container.length; i++) {
        if ( x !== i ) {
            container[i].style.display = "none";
        }
    }
    container[x].style.display = "block";
});

arrowLeft.addEventListener("click", function() {
    if ( x <= 0 ) {
        return;
    }
    x -= 1;

    for (let i = 0; i < container.length; i++) {
        if ( x !== i ) {
            container[i].style.display = "none";
        }
    }
    container[x].style.display = "block";
});