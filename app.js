
words = words.sort()

const cells = document.getElementsByClassName("cell-text")
const cellSquares = document.getElementsByClassName("cell")

let pointer = 0;
let pointer_limit = 0;

word = 'magic'


function print_cell(i) {
    setTimeout(() => {
        cellSquares[pointer - 5 + i].style.animation = "flip 0.5s linear";
        if(word[i] == cells[pointer - 5 + i].innerHTML) cellSquares[pointer - 5 + i].style.backgroundColor = "#6aaa64";
        else if(word.includes(cells[pointer - 5 + i].innerHTML)) cellSquares[pointer - 5 + i].style.backgroundColor = "#c9b458";
        else cellSquares[pointer - 5 + i].style.backgroundColor = "#787c7e";
        cellSquares[pointer - 5 + i].style.color = "white";             
    }, 400 * i);

}

document.addEventListener('click', (event)=>{

    if(event.target.id != ''){
        if(event.target.id == 'back'){
            if( pointer > pointer_limit){
                pointer--;
                cells[pointer].innerHTML = ''
                console.log(cells[pointer].innerHTML)
            }
        }
        else if(event.target.id == 'enter'){
            if(pointer % 5 == 0){
                for(let i = 0; i < 5; i++){
                    print_cell(i);
                }
                pointer_limit += 5; 
            }
        }
        else{
            if( pointer < pointer_limit + 5){
                console.log(cells[pointer].innerHTML)
                cells[pointer].innerHTML = event.target.id
                pointer++;        
            }
        }
    }

})

