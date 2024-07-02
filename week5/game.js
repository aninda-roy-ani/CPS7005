// get reference
let canvas = document.getElementById("gameCanvas");
let ctx = canvas.getContext("2d");

//gameVariavble
const tileSize = 40;
const rows = canvas.height/tileSize;
const cols = canvas.width/tileSize; 
let flag = 0;

// maze structure
const maze = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

//player
const player = {
    x: 1,
    y: 1,
    colour: "#00f"
}

//target
const target = {
    x: cols - 2,
    y: rows - 2,
    colour: "#dfe889"
}

//render function
function displayMaze() {
    for (let i = 0; i < 15; i++){
        for (let j = 0; j < 15; j++){
            if (maze[i][j] === 0){
                ctx.fillStyle = "#fff";
            }else{
                ctx.fillStyle = "#000";
            }
            ctx.fillRect(j*tileSize, i*tileSize, tileSize, tileSize);
        }
    }
}

function displayPlayer(){
    ctx.fillStyle = player.colour;
    ctx.fillRect(player.x*tileSize, player.y*tileSize, tileSize, tileSize);
}

function displayTarget(){
    ctx.fillStyle = target.colour;
    ctx.fillRect(target.x*tileSize, target.y*tileSize, tileSize, tileSize);
}

// player process
function clearTiles(){
    ctx.fillStyle = "#fff";
    ctx.fillRect(player.x*tileSize, player.y*tileSize, tileSize, tileSize);
}

function checkWin(){
    if(player.x == target.x && player.y == target.y){
        alert("You won!")
    }
}

function movePlayer(event){
    
    clearTiles();

    switch (event.key) {
        case 'ArrowUp':
            newX = player.x;
            newY = player.y - 1;
            if (maze[newY][newX] === 0){
                player.x = newX;
                player.y = newY;
            }
            break;
        case 'ArrowDown':
            newX = player.x;
            newY = player.y + 1;
            if (maze[newY][newX] === 0){
                player.x = newX;
                player.y = newY;
            }
            break;
        case 'ArrowLeft':
            newX = player.x - 1;
            newY = player.y;
            if (maze[newY][newX] === 0){
                player.x = newX;
                player.y = newY;
            }
            break;
        case 'ArrowRight':
            newX = player.x + 1;
            newY = player.y;
            if (maze[newY][newX] === 0){
                player.x = newX;
                player.y = newY;
            }
            break;
    }
    
    displayPlayer();
    checkWin();
}

document.addEventListener('keydown', movePlayer);

displayMaze();
displayPlayer();
displayTarget();
