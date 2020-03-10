let parentDiv = document.querySelector("div");
let childDiv;
generateGrid(256);
let myBoxes = document.getElementsByClassName("boxes");
paintBoxes();



function generateGrid(gridSize){
    for (let index = 0; index < gridSize; index++) {

        childDiv = document.createElement("div");
        childDiv.classList.add("boxes");
        parentDiv.appendChild(childDiv);
        
    }
}


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Grid Buttons ////////////
let btn16 = document.querySelector(".grid16");
let btn32 = document.querySelector(".grid32");
let btn64 = document.querySelector(".grid64");
let btn8 = document.querySelector(".grid8");



btn8.addEventListener("click", ()=> {

    clearGrid();

    while(myBoxes.length > 0){
        myBoxes[0].remove();
    }
    document.getElementsByClassName("grid")[0].style = "grid-template-columns: repeat(8 ,1fr)";
    generateGrid(64);
    paintBoxes();
});

btn16.addEventListener("click", ()=> {
    
    clearGrid();


    while(myBoxes.length > 0){
        myBoxes[0].remove();
    }
    document.getElementsByClassName("grid")[0].style = "grid-template-columns: repeat(16 ,1fr)";
    generateGrid(256);
    paintBoxes();
    
});

btn32.addEventListener("click", ()=> {

    clearGrid();

    while(myBoxes.length > 0){
        myBoxes[0].remove();
    }
    document.getElementsByClassName("grid")[0].style = "grid-template-columns: repeat(32 ,1fr)";
    generateGrid(1024);
    paintBoxes();
});
btn64.addEventListener("click", ()=> {

    clearGrid();

    while(myBoxes.length > 0){
        myBoxes[0].remove();
    }
    document.getElementsByClassName("grid")[0].style = "grid-template-columns: repeat(64 ,1fr)";
    generateGrid(4096);
    paintBoxes();
});


////// Drawing function ///////

function paintBoxes(){
for (let i = 0; i < myBoxes.length; i++) {

        myBoxes[i].addEventListener("mouseenter", function(e) {
            if (e.ctrlKey) {
                myBoxes[i].style.backgroundColor = "orange";
            }
        });
    }
}

//////   Clearing the grid!!!     /////////////
    let clearButton = document.querySelector("button");
    clearButton.addEventListener("click", clearGrid);

function clearGrid(){

        for (let i = 0; i < myBoxes.length; i++) {
        
            myBoxes[i].style.backgroundColor = "white";
    }
    }






 


