//global vairables:
var bomberman = document.getElementById("bomberman");
var speed = 6; //pixels per animation frame
var keyDown = false;

//setup
bomberman.style.top = "300px";
bomberman.style.left = "150px";

//the event listeners
document.addEventListener("keydown", handleKeydown);
document.addEventListener("keyup", handleKeyup);

//event handlers
function handleKeydown(e){ console.log(e);
		//e is the event object with data that originally come from the OS
    if (e.keyCode === 37) keyDown = "left";
    else if (e.keyCode === 38) keyDown = "up";
    else if (e.keyCode === 39) keyDown = "right";
    else if (e.keyCode === 40) keyDown = "down";
    else keyDown = false;
}
function handleKeyup(e){
		keyDown = false;
}

//loop once every animation frame (60 fps, usually)
loop();
function loop(){
		if (keyDown){
    		//actually move bomberman
    		if (keyDown === "left"){
        		var newLeft = parseInt(bomberman.style.left, 10) - speed;
            bomberman.style.left = newLeft + "px";
        }
        else if (keyDown === "up"){
        		var newTop = parseInt(bomberman.style.top, 10) - speed;
            bomberman.style.top = newTop + "px";
        }
        else if (keyDown === "right"){
        		var newLeft = parseInt(bomberman.style.left, 10) + speed;
            bomberman.style.left = newLeft + "px";
        }
        else if (keyDown === "down"){
        		var newTop = parseInt(bomberman.style.top, 10) + speed;
            bomberman.style.top = newTop + "px";
        }
    }
    //every time the screen needs to refresh (redraw), we run the loop function
    //refresh is up to 60 times per second
    requestAnimationFrame(loop);
}
