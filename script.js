let gridContainer = document.getElementById("grid-container");
let inputBtn = document.getElementById("inputBtn");


let numRow = 16;
let numCol = 16;
let cell


function getUserInput(){
    let userInputWidth = prompt("Enter the number of cells for the width. (Min 1 and Max 100)")
    while(userInputWidth  < 1 || userInputWidth  > 100 || !parseInt(userInputWidth)){
        userInputWidth = prompt("Enter a number between 1 and 100 for the width.")
        
    }
    let userInputHeight = prompt("Enter the number of cells for the height. (Min 1 and Max 100)")
    while(userInputHeight < 1 || userInputHeight > 100 || !parseInt(userInputHeight)){
        userInputHeight = prompt("Enter a number between 1 and 100 for the height.")
        
    }
    numCol = userInputWidth;
    numRow = userInputHeight;

    setup()  
}

function makeGrid(numCol,numRow){
    gridContainer.textContent = "";
    let cellWidth = gridContainer.clientWidth / numCol;
    let cellHeight = gridContainer.clientHeight / numRow;

    for(let i = 0; i < numCol; i++){
        let col = document.createElement("div");
        col.id = "col";

        for(let j = 0; j < numRow; j++){
            cell = document.createElement("div");
            cell.className = "cell";
            
            cell.style.width = `${cellWidth}px`;
            cell.style.height = `${cellHeight}px`;

            col.appendChild(cell);
        };
        gridContainer.appendChild(col);
    };
};

function black(){   
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black"
        });
    });
} ;


function reset(){
    numCol = 16;
    numRow = 16;
    setup();
};


inputBtn.addEventListener('click', () => {
    getUserInput()
});

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener('click', () => {
    reset()
});


let blackBtn = document.getElementById("blackBtn");
blackBtn.addEventListener('click', () => {
    black();
});


let rainbowBtn = document.getElementById("rainbowBtn");
rainbowBtn.addEventListener('click', () => {
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = randomColor();
        });
    });
});



function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};


function setup() {
    makeGrid(numCol,numRow);
    black();
};

setup();