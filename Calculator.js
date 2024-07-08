// script.js
function clearDisplay() {
    document.getElementById('display').innerText = '0';
}

function backspace() {
    const display = document.getElementById('display');
    const currentText = display.innerText;
    if (currentText.length > 1) {
        display.innerText = currentText.slice(0, -1);
    } else {
        display.innerText = '0';
    }
}
function appendToDisplay(value) {
    const display = document.getElementById('display');
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.innerText = eval(display.innerText.replace(/×/g, '*').replace(/÷/g, '/'));
    } catch (e) {
        display.innerText = 'Error';
    }
}

