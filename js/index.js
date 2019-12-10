//hover over button to italicize and change color
//click to enter home page

var welcome = document.getElementById('welcome');
welcome.addEventListener("mouseover", HoverAnimation);
welcome.addEventListener("mouseout", RemoveAnimation);

function RemoveAnimation(){
    welcome.style.color = "#bebebe";
    welcome.style.fontStyle = "normal";
    welcome.style.fontSize = "100px";
    welcome.style.left = "calc(50% - 300px)";
    welcome.style.top = "calc(50% - 50px)";
}

function HoverAnimation(){
    welcome.style.color = "yellow";
    welcome.style.fontStyle = "oblique";
    welcome.style.fontSize = "200px";
    welcome.style.left = "calc(50% - 600px)";
    welcome.style.top = "calc(50% - 100px)";
}

RemoveAnimation();
HoverAnimation();



var button = document.getElementById('button');
button.addEventListener("click", drawrects);

//first, get 10 shapes to the html pages, make each clickable
// function that adds circle to container, make circle clickable (function 2)
// 10 circles

//first step: 2 functions that add circle/rect to container, make circle/rect clickable

function makeRect2() {
    //appending to circle container
    // creating a div
    // assigning the div to a css style
    // add to the document
    //make circle clickable
    var rect2 = document.createElement('div');
    rect2.classList.add('rect2');
    var container = document.getElementById('container');
    container.appendChild(rect2);
    console.log("rect2 made");
    rect2.addEventListener("click", makeRect2);
}

function makeRect() {
    //appending the div to container
    // creating a div
    // assigning the div to a css style
    // add to the document
    //make circle clickable
    var rect = document.createElement('div');
    rect.classList.add('rect');
    var container = document.getElementById('container');
    container.appendChild(rect);
    console.log("rect made");
    rect.addEventListener("click", makeRect);
}

function drawrects() {
    for (i = 0; i < 4; i++) {
        // check even/odd
        if (i % 2 == 0) {
            makeRect2();
        } else {
            makeRect();
        }
    }
}
