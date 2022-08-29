import { buttons, screen } from "./selectors.js";
import { playSoundClick, setInitialScreenValue } from "./utils.js";
import { convertNumberValue, cleanValue } from './modules/numbers.js';
import { Operators, Strings, Symbols } from "./constants.js";
import { convertValueWithOperator } from "./modules/opetators.js";
let calcValue = '0';
const handleNumberClick = (numberValue) => {
    const value = convertNumberValue(calcValue, numberValue);
    calcValue = value;
    screen.textContent = calcValue;
};
const handleCleanClick = () => {
    const zero = cleanValue(calcValue);
    calcValue = zero;
    screen.textContent = calcValue;
};
const handleOperatorClick = (operator) => {
    const value = convertValueWithOperator(calcValue, operator);
    calcValue = value;
    screen.textContent = calcValue;
};
const handleEqualsClick = () => {
    const result = eval(calcValue);
    calcValue = result;
    screen.textContent = calcValue;
};
const handleMouseUp = (event) => {
    if (event.target.classList.contains('calculator__button')) {
        // Fix bug with no-sound event, when mouseup is outside button
        event.target.classList.remove('calculator__button_without_shadow');
    }
    Array.from(buttons.allButtons).forEach(button => {
        button.classList.remove('calculator__button_without_shadow');
    });
};
const handleMouseDown = (event) => {
    if (event.target.classList.contains('calculator__button')) {
        event.target.classList.add('calculator__button_without_shadow');
        playSoundClick();
    }
};
// MOUSE UP
window.addEventListener('mouseup', handleMouseUp);
// MOUSE DOWN
window.addEventListener('mousedown', handleMouseDown);
buttons.one.addEventListener('click', () => handleNumberClick(Strings.ONE));
buttons.two.addEventListener('click', () => handleNumberClick(Strings.TWO));
buttons.three.addEventListener('click', () => handleNumberClick(Strings.THREE));
buttons.four.addEventListener('click', () => handleNumberClick(Strings.FOUR));
buttons.five.addEventListener('click', () => handleNumberClick(Strings.FIVE));
buttons.six.addEventListener('click', () => handleNumberClick(Strings.SIX));
buttons.seven.addEventListener('click', () => handleNumberClick(Strings.SEVEN));
buttons.eight.addEventListener('click', () => handleNumberClick(Strings.EIGHT));
buttons.nine.addEventListener('click', () => handleNumberClick(Strings.NINE));
buttons.zero.addEventListener('click', () => handleNumberClick(Strings.ZERO));
buttons.c.addEventListener('click', handleCleanClick);
buttons.dot.addEventListener('click', () => handleOperatorClick(Symbols.DOT));
buttons.plus.addEventListener('click', () => handleOperatorClick(Operators.PLUS));
buttons.minus.addEventListener('click', () => handleOperatorClick(Operators.MINUS));
buttons.multiply.addEventListener('click', () => handleOperatorClick(Operators.MULTIPLY));
buttons.divide.addEventListener('click', () => handleOperatorClick(Operators.DIVIDE));
buttons.equals.addEventListener('click', handleEqualsClick);
setInitialScreenValue(screen, calcValue);
