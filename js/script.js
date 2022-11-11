let bombs;
let score = 0;
const scoreEl = document.getElementById("score");
const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function(){

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = parseInt(difficulty.value);
    score = 0;
    scoreEl.innerHTML = "";
    bombs = generateBombs(difficultyValue);
    createGrid(difficultyValue);
})