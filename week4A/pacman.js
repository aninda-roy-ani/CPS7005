const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 40;
const rows = canvas.height / tileSize;
const cols = canvas.width / tileSize;

const clearColour = "#fff";
const foodColour = "#f0f";
const wallColour = "#000";
const playerColour = "#ff0";
const ghost1Colour = "#f00";

const maze = [
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
    [2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
    [2, 1, 2, 1, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 1, 2, 1, 2],
    [2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2],
    [2, 1, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 1, 2],
	[2, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 2],
	[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
];

let player = {
    x: 10,
    y: 9,
    colour: playerColour
};

let ghost1 = {
	x: 9,
	y: 5,
	colour: ghost1Colour,
	change_x: 0,
	change_y: -1
}


function drawMaze() {
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
			if (maze[row][col] === 2) {
                ctx.fillStyle = wallColour;
            }
            else if (maze[row][col] === 1) {
                ctx.fillStyle = foodColour;
            } 
			else {
                ctx.fillStyle = clearColour;
            }
            ctx.fillRect(col * tileSize, row * tileSize, tileSize, tileSize);
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = player.colour;
    ctx.fillRect(player.x * tileSize, player.y * tileSize, tileSize, tileSize);
}

function drawGhost1() {
    ctx.fillStyle = ghost1.colour;
    ctx.fillRect(ghost1.x * tileSize, ghost1.y * tileSize, tileSize, tileSize);
}

function clearTile(x, y) {
	if (maze[y][x] == 1) {
		ctx.fillStyle = foodColour;
	}
	else if (maze[y][x] == 0) {
		ctx.fillStyle = clearColour;
	}
    ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
}

function movePlayer(event) {
    clearTile(player.x, player.y);

    switch (event.key) {
        case 'ArrowUp':
            if (maze[player.y - 1][player.x] === 0 || maze[player.y - 1][player.x] === 1) player.y--;
            break;
        case 'ArrowDown':
            if (maze[player.y + 1][player.x] === 0 || maze[player.y + 1][player.x] === 1) player.y++;
            break;
        case 'ArrowLeft':
            if (maze[player.y][player.x - 1] === 0 || maze[player.y][player.x - 1] === 1) player.x--;
            break;
        case 'ArrowRight':
            if (maze[player.y][player.x + 1] === 0 || maze[player.y][player.x + 1] === 1) player.x++;
            break;
    }

    drawPlayer();
	maze[player.y][player.x] = 0;
}

function moveGhost1() {
	clearTile(ghost1.x, ghost1.y);
	
	if (ghost1.change_y == -1) {
		if (maze[ghost1.y - 1][ghost1.x] != 2) {
			ghost1.y--;
		}
		else if (maze[ghost1.y][ghost1.x - 1] != 2) {
			ghost1.change_y = 0;
			ghost1.change_x = -1;
			ghost1.x--;
		}
		else if (maze[ghost1.y][ghost1.x + 1] != 2) {
			ghost1.change_y = 0;
			ghost1.change_x = 1;
			ghost1.x++;
		}
		else {
			ghost1.change_y = 1;
			ghost1.y++;
		}
	}
	
	else if (ghost1.change_y == 1) {
		if (maze[ghost1.y + 1][ghost1.x] != 2) {
			ghost1.y++;
		}
		else if (maze[ghost1.y][ghost1.x + 1] != 2) {
			ghost1.change_y = 0;
			ghost1.change_x = 1;
			ghost1.x++;
		}
		else if (maze[ghost1.y][ghost1.x - 1] != 2) {
			ghost1.change_y = 0;
			ghost1.change_x = -1;
			ghost1.x--;
		}
		else {
			ghost1.change_y = -1;
			ghost1.y--;
		}
	}
	
	else if (ghost1.change_x == -1) {
		if (maze[ghost1.y][ghost1.x - 1] != 2) {
			ghost1.x--;
		}
		else if (maze[ghost1.y - 1][ghost1.x] != 2) {
			ghost1.change_y = -1;
			ghost1.change_x = 0;
			ghost1.y--;
		}
		else if (maze[ghost1.y + 1][ghost1.x] != 2) {
			ghost1.change_y = 1;
			ghost1.change_x = 0;
			ghost1.y++;
		}
		else {
			ghost1.change_x = 1;
			ghost1.x++;
		}
	}
	
	else if (ghost1.change_x == 1) {
		if (maze[ghost1.y][ghost1.x + 1] != 2) {
			ghost1.x++;
		}
		else if (maze[ghost1.y + 1][ghost1.x] != 2) {
			ghost1.change_y = 1;
			ghost1.change_x = 0;
			ghost1.y++;
		}
		else if (maze[ghost1.y - 1][ghost1.x] != 2) {
			ghost1.change_y = -1;
			ghost1.change_x = 0;
			ghost1.y--;
		}
		else {
			ghost1.change_x = -1;
			ghost1.x--;
		}
	}
	
	drawGhost1();
}


function render() {
	ctx.clearRect (0 , 0 , canvas.width , canvas.height);
	drawMaze();
	drawPlayer();
	drawGhost1();
}


document.addEventListener('keydown', movePlayer);

render();

setInterval(moveGhost1, 100);