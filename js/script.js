let bombs;
let leftCol;
let rightCol;
let cellsPerRow;
let score = 0;
let sec = 0;
const scoreEl = document.getElementById("score");
const gridGenerator = document.getElementById("grid_generator");

gridGenerator.addEventListener("click", function () {

    const difficulty = document.querySelector("[name='difficulty']");
    const difficultyValue = parseInt(difficulty.value);
    cellsPerRow = Math.sqrt(difficultyValue);
    score = 0;
    scoreEl.innerHTML = "";
    bombs = generateBombs(difficultyValue);
    createGrid(difficultyValue);

    const sideColumns = sideColumnsNumbers(difficultyValue);
    leftCol = sideColumns.leftCol;
    rightCol = sideColumns.rightCol;

    console.log(bombs);
    const smileyButton = document.querySelector(".game_display button");
    if (smileyButton.classList.contains("btn_sad")) {
        smileyButton.classList.remove("btn_sad");
        smileyButton.classList.add("btn_happy");
    }
})