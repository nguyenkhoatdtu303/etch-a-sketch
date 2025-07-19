// hexaCode to be used generate color hexa code
const hexaCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('button');


button.addEventListener('click', () => {
    
    // the limit is 100 so force the user to enter the valid row
    let row = 16;
    do {
        row = parseInt(prompt("Enter rows: "));
    } while (row < 0 || row > 100);

    // remove all the grid so that we can have an empty container for new grids
    deleteGrid();

    generateGrid(row);
});

function generateGrid(row) {
    // create a new container because we will use it to replace the old one
    let gridContainer = document.querySelector('.grid-container');

    // change the size of each div so that use all the space available in container
    let size = 800 / row;

    // row * row because we have to add div in 2 dimensions
    for (let i = 0; i < row*row; i++) {
        let box = document.createElement('div');
        box.classList.add('box');
        box.style.cssText = `width: ${size}px; height: ${size}px;`;

        gridContainer.appendChild(box);

        box.addEventListener('mouseenter', () => {
            box.style.backgroundColor = getColor();
        });
    }
}

function deleteGrid() {
    // get a node list of grids of the container
    // so that we can delete all the grids
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.remove());
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

generateGrid(16);