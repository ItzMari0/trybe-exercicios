const button = document.querySelector('#button');
const reset = document.querySelector('#reset');
let clickCount = 0;

function clickCounter() {
    display(++clickCount);
}

display = (val) => {
    document.getElementById('contador').innerHTML = val -1; 
}

reset.addEventListener('onclick', resetCounter())

function resetCounter() {
    clickCount = 0;
    display(clickCount + 1);
}

button.addEventListener('onclick', clickCounter());