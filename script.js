let body = document.querySelector('body');
// hexaCode to be used generate color hexa code
const hexaCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('button');


button.addEventListener('click', () => {
    
    // the limit is 100 so force the user to enter the valid row
    let row = 16;
    do {
        row = parseInt(prompt("Enter rows: "));
    } while (row > 100);

    // remove the current grid so that we can add a new grid at this position
    let container = document.querySelector('.grid-container');
    container.remove();

    generateGrid(row);

    // call this function for the new grid
    changeColor();
});

// assign the boxes in parameters so that we can invoke in a new grid
// which has different size
function changeColor(boxes = document.querySelectorAll('.box')) {
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getColor();
        });
    });
}
// recall this function for the defaut grid
changeColor();


function generateGrid(row) {
    // create a new container because we will use it to replace the old one
    let container = document.createElement('div');
    container.className = 'grid-container';

    // change the size of each div so that use all the space available in container
    let size = 800 / row;

    // row * row because we have to add div in 2 dimensions
    for (let i = 0; i < row*row; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.cssText = `width: ${size}px; height: ${size}px;`;

        container.appendChild(div);
    }

    // append the new container at the position of the old one
    body.appendChild(container);
}

function getRandomIndex() {
    return Math.floor(Math.random() * hexaCode.length);
}

function getColor() {
    let colorCode = '#';
    
    // color hexa code have 6 characters so we will iterate 6 times
    // each time we get a random characters so finally we will get a random color code
    for (let i = 0; i < 6; i++) {
        let index = getRandomIndex();
        colorCode += hexaCode[index];
    }

    return colorCode;
}
