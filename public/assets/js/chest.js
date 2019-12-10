class Chest {
    constructor(x, y, cellSize){
        this.x = x;
        this.y = y;
        this.cellSize = cellSize;
    }
    
    display(){
        let image = ('assets/img/')
        fill(0);
        rect(this.x * this.cellSize, this.y * this.cellSize, this.cellSize, this.cellSize)
    }
}