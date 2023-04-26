let gridContainer = document.getElementById("grid-container");
let gridBtn = document.getElementById("gridBtn");
let numRow = 16;
let numCol = 16;
let cell
const resetBtn = document.getElementById("resetBtn")

function getUserInput(){
    let userInputWidth = prompt("Enter the number of cells for the with. (Min 1 and Max 100")
    while(userInputWidth  < 1 || userInputWidth  > 100 || !parseInt(userInputWidth)){
        userInputWidth = prompt("Enter a number between 1 and 100 for the with.")
        
    }
    let userInputHeight = prompt("Enter the number of cells for the height. (Min 1 and Max 100")
    while(userInputHeight < 1 || userInputHeight > 100 || !parseInt(userInputHeight)){
        userInputHeight = prompt("Enter a number between 1 and 100 for the height.")
        
    }
    numCol = userInputWidth;
    numRow = userInputHeight;

    setup()
   
}

function makeGrid(numCol,numRow){
    gridContainer.textContent = "";
    for(let i = 0; i < numCol; i++){
        let col = document.createElement("div");
        col.id = "col";

        for(let j = 0; j < numRow; j++){
            cell = document.createElement("div");
            cell.className = "cell";
            
            col.appendChild(cell);
        }
        
        gridContainer.appendChild(col);

    }

}

function paint(){   
    document.querySelectorAll(".cell").forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.backgroundColor = "black"
        })
    })
} 

function reset(){
    numCol = 16;
    numRow = 16;
    setup();
}


gridBtn.addEventListener('click', () => {
    getUserInput()
})

resetBtn.addEventListener('click', ()=> {
    reset()})


function setup() {
    makeGrid(numCol,numRow);
    paint();
}

setup();