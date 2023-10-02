const king = document.querySelector('.chess-piece');
const square = document.querySelectorAll('.square');
const info = document.querySelector('#info');

king.addEventListener('dragstart', dragStart);
king.addEventListener('drag', Dragging)


let beingDragged;

function Dragging() {
    info.textContent = 'You are dragging a ' + beingDragged.id

}
function dragStart(e) {
    beingDragged = e.target

}


square.forEach(squares => {
    squares.addEventListener('dragover', DragOver)
    squares.addEventListener('dragenter', DragEnter)
    squares.addEventListener('dragleave', DragLeave)
    squares.addEventListener('drop', DragDrop)
    squares.addEventListener('dragend', DragEnd)

});

function DragEnter(e) {
    e.target.classList.add('highlight');
}


function DragLeave(e) {
    e.target.classList.remove('highlight');

}

function DragOver(e) {
    e.preventDefault();

}

function DragDrop(e) {
    e.target.append(beingDragged)
    e.target.classList.remove('highlight');
}

function DragEnd(e) {
    e.target.classList.add('target')
    setTimeout(() =>
        e.target.classList.remove('target'),
        100)
}


