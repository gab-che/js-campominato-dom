const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function(){

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = parseInt(difficulty.value);
    
    createGrid(difficultyValue);
})

/**
 * @param {number} totalCells 100, 81 o 49
 * Genera una griglia di 100, 81 o 49 caselle in un quadrato perfetto 
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

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    const emptyCell = document.querySelectorAll(".grid_cell");
    emptyCell.forEach(grid_cell =>{
        grid_cell.classList.remove("bg-info");
    })
})