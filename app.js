
const difference = new Date() - new Date('01/01/2022');
const days = Math.ceil(difference / (1000 * 3600 * 24));


const word = words[days]



const cells = document.getElementsByClassName("cell-text")
const cellSquares = document.getElementsByClassName("cell")

let pointer = 0;
let pointer_limit = 0;
let green_cells = 0


function print_cell(i) {
    setTimeout(() => {
        cellSquares[pointer - 5 + i].style.animation = "flip 0.5s linear";
        if(word[i] == cells[pointer - 5 + i].innerHTML) {
            cellSquares[pointer - 5 + i].style.backgroundColor = "#6aaa64";  green_cells++;
        }
        else if(word.includes(cells[pointer - 5 + i].innerHTML)) cellSquares[pointer - 5 + i].style.backgroundColor = "#c9b458";
        else cellSquares[pointer - 5 + i].style.backgroundColor = "#787c7e";
        cellSquares[pointer - 5 + i].style.color = "white";         
        
        if(green_cells >= 5) win()

    }, 400 * i);

}

function win(){
    console.log('win') // GAME OVER LOGIC
}

function wordExists(){
    console.log(words)
    if( words.includes(cells[pointer - 5].innerHTML + cells[pointer - 4].innerHTML + cells[pointer - 3].innerHTML 
        + cells[pointer - 2].innerHTML + cells[pointer - 1].innerHTML ) ) return true;
    else{
        //popup 'Not a word list'
        cellSquares[pointer - 5].style.animation = 'horizontal-shaking 0.4s'
        cellSquares[pointer - 4].style.animation = 'horizontal-shaking 0.4s'
        cellSquares[pointer - 3].style.animation = 'horizontal-shaking 0.4s'
        cellSquares[pointer - 2].style.animation = 'horizontal-shaking 0.4s'
        cellSquares[pointer - 1].style.animation = 'horizontal-shaking 0.4s'
        return false;
    }
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
            
            green_cells = 0
            if(pointer % 5 == 0 && wordExists()){
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

