var body = document.getElementById('body');
body.addEventListener('click', addImg);


function addImg(events) {
    console.log('yes');
    //create img
    //add an img
    //add an img based on mouse pos
    var newImg = document.createElement('img');
    newImg.src = "img/chicken.png";
    var x = event.pageX;
    var y = event.pageY;
    newImg.style.left = x + "px";
    newImg.style.top = y + "px";
    newImg.classList.add('img');
    body.appendChild(newImg);
}

var panel = document.getElementsByClassName('panel');
for (var i = 0; i < panel.length; i++) {
    panel[i].addEventListener("mouseenter", function() {
        this.style.color = "yellow";
        this.style.fontStyle = "oblique";
    })
    panel[i].addEventListener("mouseout", function() {
        this.style.color = "black";
        this.style.fontStyle = "normal";
    })
}
