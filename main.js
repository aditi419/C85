canvas  = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");


BG_Images_Array = [ "MovingRoverPic1.jpeg", "Pic2.jpeg", "Pic3.jpeg", "Pic4.jpeg"];
random_Number = Math.floor(Math.random()*4);

backgroundImage = BG_Images_Array[random_Number];
console.log("backgroundImage number = " + backgroundImage);
roverImage = "rover.png";


rover_x = 10;
rover_y = 10;
rover_height = 90;
rover_width = 100;

function add() {
    backgroundImage_Tag = new Image();
    backgroundImage_Tag.onload = uploadBackground;
    backgroundImage_Tag.src = backgroundImage;

    roverImage_Tag = new Image();
    roverImage_Tag.onload = uploadroverImage;
    roverImage_Tag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImage_Tag, 0, 0, canvas.width, canvas.height);
}

function uploadroverImage() {
    ctx.drawImage(roverImage_Tag, rover_x, rover_y, rover_width, rover_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed == "37") {
       Left();
       console.log("Left");
    }

    if (keyPressed == "38") {
        Up();
        console.log("up");
    }

    if (keyPressed == "39") {
        Right();
        console.log("right");
    }

    if (keyPressed == "40") {
        Down();
        console.log("down");
    }
}

function Left() {
    if (rover_x >= 0) {
        rover_x = rover_x - 10;
        console.log("When left arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadroverImage();
    }
}

function Up() {
    if (rover_y >= 0) {
        rover_y = rover_y - 10;
        console.log("When up arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadroverImage();
    }
}

function Down() {
    if (rover_y <= 800) {
        rover_y = rover_y + 10;
        console.log("When down arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadroverImage();
    }
}

function Right() {
    if (rover_x <= 600) {
        rover_x = rover_x + 10;
        console.log("When right arrow is pressed, x = " + rover_x + "y = " + rover_y);
        uploadBackground();
        uploadroverImage();
    }
}