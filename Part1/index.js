let board = [];

function play(clickedId) {
    let playerSpan = document.getElementById('player')
    let boxClicked = document.getElementById(clickedId)



    if (playerSpan.innerText === 'X'){
        playerSpan.innerText = 'O';
        boxClicked.innerText = 'X';
        board[clickedId] = 'X';
    } else { 
        playerSpan.innerText = 'X';
        boxClicked.innerText = 'O';
        board[clickedId] = 'O';
    }

    let topLeft = board[0];
    let topCenter = board[1];
    let topRight = board[2];
    
    let middleLeft = board[3];
    let middleCenter = board[4];
    let middleRight = board[5];
    
    let btmLeft = board[6];
    let btmCenter = board[7];
    let btmRight = board[8];

    if (topLeft !== undefined && topLeft === topCenter && topCenter === topRight){
        alert(`Winner is ${topLeft}`)
    }
    if (middleLeft !== undefined && middleLeft === middleCenter && middleCenter === middleRight){
        alert(`Winner is ${middleLeft}`)
    }
    if (btmLeft !== undefined && btmLeft === btmCenter && btmCenter === btmRight){
        alert(`Winner is ${btmLeft}`)
    }
    if (topLeft !== undefined && topLeft === middleLeft && middleLeft === btmLeft){
        alert(`Winner is ${topLeft}`)
    }
    if (topCenter !== undefined && topCenter === middleCenter && middleCenter === btmCenter){
        alert(`Winner is ${topCenter}`)
    }
    if (topRight !== undefined && topRight === middleRight && middleRight === btmRight){
        alert(`Winner is ${topRight}`)
    }
    if (topLeft !== undefined && topLeft === middleCenter && middleCenter === btmRight){
        alert(`Winner is ${topLeft}`)
    }
    if (topRight !== undefined && topRight === middleCenter && middleCenter === btmLeft){
        alert(`Winner is ${topRight}`)
    }
}

    function reset(){
        
    }

