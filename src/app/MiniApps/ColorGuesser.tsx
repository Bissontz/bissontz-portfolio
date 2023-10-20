

function randomColor(){
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}

function generateColors(num: number){
    let colors = [];
    for(let i=0; i<num; i++){
        colors.push(randomColor())
    }
    return colors;
}

function winGame(){

}

function loseGame(){

}