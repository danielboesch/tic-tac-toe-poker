const cardId = document.getElementById('inputID')
const cardColor = document.getElementById('inputColor')

function setCard(){
    const suit = document.getElementById(inputID.value)
    // console.log(suit)
    suit.style.color = inputColor.value;
} 
function setReset(){
        const suit = document.querySelectorAll('section')
        for (let i = 0; i < suit.length; i++) {
            suit[i].style.color = 'gray';
            inputID.value = '';
            inputColor.value = '';
        }
    
}