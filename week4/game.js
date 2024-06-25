let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
// Keyboard input
let keys = {};

// Keyboard event listeners
window.addEventListener("keydown", function(event) {
    keys[event.key] = true;
});

window.addEventListener("keyup", function(event) {
    delete keys[event.key];
});

var character = {
    colour: "#f5ed0a",
    x: 200,
    y: 350,
    width: 20,
    height: 20,
    speed: 5
};



function render() {
    // Update character position
    if (keys.ArrowLeft) {
        if (character.x >= 0){
        character.x -= character.speed;
        }else{
            
        }
    }
    else if(keys.ArrowRight) {
        if (character.x <= 800){
        character.x += character.speed;
        }
    }
    else if(keys.ArrowUp) {
        if (character.y >= 0){
        character.y -= character.speed;
        }
    }
    else if(keys.ArrowDown) {
        if (character.y <= 400){
        character.y += character.speed;
        }
    }
    

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw character
    ctx.fillStyle = character.colour;
    ctx.fillRect(character.x, character.y, character.width, character.height);

    // Request next frame
    requestAnimationFrame(render);
}

render();