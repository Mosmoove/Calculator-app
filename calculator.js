let total = 0;
let buffer = "0";
let prevOperator; // previous operator
/* JavaScript Code */
const calcScreen = document.querySelector('.screen');

 const buttonClick = (value) => {
    if(isNaN(value)) {
        handleSymbol(value);
    } else {
        handleNumber(value);
    }
    calcScreen.innerText = buffer;
 }

 const handleSymbol = (symbol) => {
 switch(symbol) {
    case 'AC': 
        buffer = '0';
        total = 0;
        break;
    case '=': 
        if(prevOperator === null) {
            return;
        }
        flushOperation(parseInt(buffer));
        prevOperator = null;
        buffer = total;
        total = 0;
        break;
    case '←': 
        if(buffer.length === 1) {
            buffer = '0';
        } else {
            buffer = buffer.substring(0, buffer.length - 1);
        }
        break;
    case '+': 
    case '−':
    case '×':
    case '÷':
        handleMath(symbol);
        break;
    }
    
 }

 const handleMath = (symbol) => {
    if(buffer === '0') {
        return;
    }
    const intBuffer = parseInt(buffer);

    if(total === 0) {
        total = intBuffer;
    } else {
        flushOperation(intBuffer);
    }
    prevOperator = symbol;
    buffer = '0';
 }

 const flushOperation = (intBuffer) => {
    if(prevOperator === '+') {
        total += intBuffer;
    } else if(prevOperator === '-') {
        total -= intBuffer;
    } else if(prevOperator === '×') {
        total *= intBuffer;
    } else if(prevOperator === '÷') {
        total /= intBuffer;
    } 
 }

 const handleNumber = (numberString) => {
    if(buffer === '0') {
        buffer = numberString;
    } else {
        buffer += numberString;
    }
 }

 const init = () => {
    const allCalcButtons = document.querySelector('.calc-buttons');
    allCalcButtons.addEventListener('click', (e) => {
       buttonClick(e.target.innerText);
    });
 }

 init();
