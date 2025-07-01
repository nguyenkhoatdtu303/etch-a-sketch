let boxes = document.querySelectorAll('.box');
let body = document.querySelector('body');
const hexaCode = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const button = document.querySelector('button');


button.addEventListener('click', () => {
    let row = 16;
    do {
        row = parseInt(prompt("Enter rows: "));
    } while (row > 100);

    let container = document.querySelector('.grid-container');
    container.remove();
    generateGrid(row);

})

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = getColor();
    })
})

function generateGrid(row) {
    let container = document.createElement('div');
    container.className = 'grid-container';

    let size = 800 / row;
    for (let i = 0; i < row*row; i++) {
        let div = document.createElement('div');
        div.classList.add('box');
        div.style.cssText = `width: ${size}px; height: ${size}px;`;

        container.appendChild(div);
    }

    body.appendChild(container);
}

function getRandomIndex() {
    return Math.floor(Math.random() * hexaCode.length);
}

function getColor() {
    let colorCode = '#';
    
    for (let i = 0; i < 6; i++) {
        let index = getRandomIndex();
        colorCode += hexaCode[index];
    }

    return colorCode;
}