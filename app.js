
words = words.sort()

const cells = document.getElementsByClassName("cell-text")

let pointer = 0;

let board = [
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined],
    [undefined, undefined, undefined, undefined, undefined]
];

document.addEventListener('click', (event)=>{

    console.log(event, event.target.id)
    cells[pointer].innerHTML = event.target.id
    pointer++;
})

