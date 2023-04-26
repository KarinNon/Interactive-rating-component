var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
var num3 = document.getElementById("num3");
var num4 = document.getElementById("num4");
var num5 = document.getElementById("num5");

var score = 0;

function setColor() {
    num1.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
    num2.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
    num3.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
    num4.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
    num5.style.backgroundColor = "hsla(216, 12%, 54%, 0.1)";
}

for (var i = 1; i <= 5; i++) {
    document.getElementById("num" + i).addEventListener("mouseover", () => {
        document.getElementById("num" + i).style.backgroundColor = "orange";
        document.getElementById("num" + i).style.color = "white";
    })
}

num1.addEventListener("click", () => {
    score = 1;
    setColor();
    num1.style.backgroundColor = "hsl(216, 12%, 54%)";
    num1.style.color = "white";
})

num2.addEventListener("click", () => {
    score = 2;
    setColor();
    num2.style.backgroundColor = "hsl(216, 12%, 54%)";
    num2.style.color = "white";
})

num3.addEventListener("click", () => {
    score = 3;
    setColor();
    num3.style.backgroundColor = "hsl(216, 12%, 54%)";
    num3.style.color = "white";
})

num4.addEventListener("click", () => {
    score = 4;
    setColor();
    num4.style.backgroundColor = "hsl(216, 12%, 54%)";
    num4.style.color = "white";
})

num5.addEventListener("click", () => {
    score = 5;
    output.innerHTML = score;
    setColor();
    num5.style.backgroundColor = "hsl(216, 12%, 54%)";
    num5.style.color = "white";
})

// GO TO NEXT PAGE
var submit = document.getElementById("submit");
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var output = document.getElementById("output")

submit.addEventListener("click", () => {
    if (score > 0) {
        page1.style.display = "none";
        page2.style.display = "block";
        output.innerHTML = "You selected " + score + " out of 5";
    }
})
