/**
 * Genera una griglia in un quadrato perfetto 
 * @param {number} totalCells numero selezionato dall'utente
 */
function createGrid(totalCells) {
    const gridContainer = document.querySelector(".grid_container");
    gridContainer.innerHTML = "";
    gridContainer.classList.remove("d-none");

    for (i = 0; i < totalCells; i++) {
        const newCell = document.createElement("div");
        newCell.classList.add("grid_cell");
        newCell.style.width = `calc(100% / ${cellsPerRow})`;
        newCell.dataset.numCell = i + 1;

        newCell.addEventListener("click", onCellClick);

        gridContainer.append(newCell);
    }
}

/**
 * Genera un numero random compreso tra un minimo e un massimo
 * @param {number} min
 * @param {number} max
 */
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Genera un array con sedici numeri unici (in questo caso rappresentano bombe)
 * @param {number} totalCells
 * @return {Array} bombList
 */
function generateBombs(totalCells) {
    const bombList = []

    while (bombList.length < 16) {
        const num = randomNumber(1, totalCells);

        if (!bombList.includes(num)) {
            bombList.push(num);
        }
    }

    return bombList;
}

/**
 * Confronta array bombe con numeri celle;
 * se utente clicca su bomba, cella diventa rossa, altrimenti blu
 */
function onCellClick() {
    // timer();
    const numCell = +this.dataset.numCell;
    if (bombs.includes(numCell)) {

        for (i = 0; i < bombs.length; i++) {
            const allBombs = document.querySelector(`.grid_container :nth-child(${bombs[i]})`);
            allBombs.classList.add("click_lose");
        }

        scoreEl.innerHTML = `${score}  <br> Game over`;
        const allCells = document.querySelectorAll(".grid_cell");
        allCells.forEach(grid_cell => {
            grid_cell.classList.add("disabled");
        });

        const smileyButton = document.querySelector(".btn_happy");
        smileyButton.classList.remove("btn_happy");
        smileyButton.classList.add("btn_sad");
    }

    else {
        this.classList.toggle("click_win");
        score += 1;
        checkNearbyBombs(numCell, this);
    }
}

/**
 * Controlla se ci sono bombe negli offset vicini alla casella cliccata
 * @param {number} numCell numero cella cliccata
 */
function checkNearbyBombs(numCell, clickedCell){
    let nearBombs = 0;

    const offsets = {
        'topleft': Math.abs(-1 -cellsPerRow),
        'top': Math.abs(-cellsPerRow),
        'topright': Math.abs(1 -cellsPerRow),
        'left': Math.abs(-1),
        'right': 1,
        'bottomleft': Math.abs(-1 + cellsPerRow),
        'bottom': + cellsPerRow,
        'bottomright': 1 + cellsPerRow
    };

    
    for(const offset in offsets){
        switch(offset){
            case 'topleft':
                if(numCell - cellsPerRow > 0 && !leftCol.includes(numCell)){
                    if(bombs.includes(numCell - offsets['topleft'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'top':
                if(numCell - cellsPerRow > 0){
                    if(bombs.includes(numCell - offsets['top'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'topright':
                if(numCell - cellsPerRow > 0 && !rightCol.includes(numCell)){
                    if(bombs.includes(numCell - offsets['topright'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'left':
                if(!leftCol.includes(numCell)){
                    if(bombs.includes(numCell - offsets['left'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'right':
                if(!rightCol.includes(numCell)){
                    if(bombs.includes(numCell + offsets['right'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'bottomleft':
                if(!leftCol.includes(numCell) && numCell + cellsPerRow <= Math.pow(cellsPerRow, 2)){
                    if(bombs.includes(numCell + offsets['bottomleft'])){
                        nearBombs +=1;
                    };
                }
                break;
            case 'bottom':
                if(numCell + cellsPerRow <= Math.pow(cellsPerRow, 2)){
                    if(bombs.includes(numCell + offsets['bottom'])){
                        nearBombs +=1;
                    }
                }
                break;
            case 'bottomright':
                if(!rightCol.includes(numCell) && numCell + cellsPerRow <= Math.pow(cellsPerRow, 2)){
                    if(bombs.includes(numCell + offsets['bottomright'])){
                        nearBombs +=1;
                    }
                }
                break;
        }
    }
    if(nearBombs > 0){
        clickedCell.innerText = nearBombs;
        if(nearBombs == 1){
            clickedCell.classList.add('');
        }
    }
}

/**
 * Restituisce oggetto con numeri colonna sx e dx
 * @param {number} totalCells numero totale celle
 * @return {Object} sideColumns
 */
function sideColumnsNumbers(totalCells) {
    const leftCol = [];
    const rightCol = [];
    for (i = 1; i < totalCells; i++) {
        if (i % cellsPerRow === 1) {
            leftCol.push(i);
        } else if (i % cellsPerRow === 0) {
            rightCol.push(i);
        }
    }

    return { leftCol, rightCol }
}

// /**
//  * Timer
//  */
// function timer(){
//     let sec = 00;
//     const timer = setInterval(function(){
//         document.getElementById("timer").innerHTML=`00:${sec}`;
//         sec++;
//     }, 1000);
// }