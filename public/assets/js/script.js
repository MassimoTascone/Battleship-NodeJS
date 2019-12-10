// Client side
const board = new Board(10,30);
board.createMatrice();
const allChests = [];

// P5
function setup(){
    createCanvas(board.nbr * board.cellSize, board.nbr * board.cellSize);
};

function draw(){
    background(120);
    board.display();
    allChests.forEach(chest =>{
        chest.display()
    })
};

function mousePressed(){
    const x = Math.floor(mouseX/board.cellSize);
    const y = Math.floor(mouseY/board.cellSize);
    console.log(x,y);
    allChests.push(new Chest(x,y,board.cellSize))
    board.matrice[y][x] = 1;
    console.log(allChests);
    console.log(board.matrice);



    // const chest = new Chest();

}
