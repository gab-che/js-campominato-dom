let bombs;
const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function(){

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = parseInt(difficulty.value);
    
    bombs = generateBombs(difficultyValue);
    createGrid(difficultyValue);
})

const reset = document.getElementById("reset");
reset.addEventListener("click", function(){
    const emptyCell = document.querySelectorAll(".grid_cell");
    emptyCell.forEach(grid_cell =>{
        grid_cell.classList.remove("bg-info");
    })
})