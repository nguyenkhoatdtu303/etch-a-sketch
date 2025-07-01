let boxes =  document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('mouseenter', () => {
        box.style.backgroundColor = 'black';
    })
})
