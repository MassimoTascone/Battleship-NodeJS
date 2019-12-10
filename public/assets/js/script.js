// Client side
const board = new Board(10,40);
board.createMatrice();
const allChests = [];

// Library JS P5
function setup(){
    createCanvas(board.nbr * board.cellSize, board.nbr * board.cellSize);
};

function draw(){
    background(245, 242, 193);
    board.display();
    allChests.forEach(chest =>{
        chest.display()
    })
};
// Determine on click sur quelle case on se trouve (y, x)
function mousePressed(){
    const x = Math.floor(mouseX/board.cellSize);
    const y = Math.floor(mouseY/board.cellSize);
    if((y >= 0 && y < 10) && (x >= 0 && x < 10)){
        console.log(x,y);
        allChests.push(new Chest(x,y,board.cellSize))
        board.matrice[y][x] = 1;
        console.log(allChests);
        console.log(board.matrice);
    }
    else {
        console.log('Outside of board !');
    }
}
