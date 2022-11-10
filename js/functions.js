/**
 * Genera una griglia di 100, 81 o 49 caselle in un quadrato perfetto 
 * @param {number} totalCells 100, 81 o 49
 */
function createGrid(totalCells){
    const gridContainer = document.querySelector(".grid_container");
    gridContainer.innerHTML = "";
    
    for (i = 0; i < totalCells; i++){
        const newCell = document.createElement("div");
        newCell.classList.add("grid_cell");
        newCell.style.width = `calc(100% / ${Math.sqrt(totalCells)})`;
        newCell.innerHTML = i + 1;

        newCell.addEventListener("click", function(){
            this.classList.toggle("bg-info");
            console.log(this.textContent);
        })

        gridContainer.append(newCell);
    }
}

/**
 * Genera un numero random compreso tra un minimo e un massimo
 * @param {number} min
 * @param {number} max
 */
function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un array con sedici numeri unici (in questo caso rappresentano bombe)
 * @param {number} totalCells
 * @return {Array} bombList
 */
function generateBombs(totalCells){
    const bombList = []

    while (bombList.length < 16){
        const num = randomNumber(1, totalCells);

        if (!bombList.includes(num)){
            bombList.push(num);
        }
    }

    return bombList;
}