let parentDiv = document.querySelector("div");
let childDiv;

for (let index = 0; index < 256; index++) {
    childDiv = document.createElement("div");
    parentDiv.appendChild(childDiv);
    
}



childDiv.addEventListener("mouseover", styleMyButton);

function styleMyButton(e) {
    
    childDiv.classList.add(".hoverStyle");
    e.target.style.backgroundcolor = "black";
 }


 


