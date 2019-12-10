class Board {
    constructor(nbr, cellSize){
        this.matrice = [];
        this.nbr = nbr;
        this.cellSize = cellSize;
        
    }
    
    createMatrice(){ // fonction pour créer matrice
        for(let i = 0; i< this.nbr ; i++){ 
            const arr = []; // for loop pour créer 10 array vides
            this.matrice.push(arr);
            for (let matis = 0; matis< this.nbr; matis ++){ // une for dans la for pour 10 zéros
                arr.push(0);
            }
        }
        console.log(this.matrice);
    }

    display(){ // fonction pour afficher les céllules 
        this.matrice.forEach((array, i) =>{ // i = y et j = x
            array.forEach((nbr, j) =>{
                switch(nbr){
                    case 0:
                            stroke(255); // changer couleur bordure
                            noFill(); // pour pas remplir 
                            rect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize); // créé les carré en fonction du parametre cellSize
                            break;

                    // case 1:
                    //         fill(205,133,63);
                    //         rect(j * this.cellSize, i * this.cellSize, this.cellSize, this.cellSize);
                    //         break;
                }
            })
        })

    }


}