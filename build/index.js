import { buttons, screen } from "./selectors.js";
import { hasOperatorInEndOfString, playSoundClick, setInitialScreenValue } from "./utils.js";
import { convertNumberValue, cleanValue } from './modules/numbers.js';
import { Events, Operators, Strings, Symbols } from "./constants.js";
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
    if (hasOperatorInEndOfString(calcValue)) {
        const calcValueArr = String(calcValue).split('');
        calcValueArr.pop();
        const res = calcValueArr.join('');
        calcValue = res;
        return screen.textContent = res;
    }
    const result = eval(calcValue);
    calcValue = result;
    screen.textContent = calcValue;
};
const handleMouseUp = (event) => {
    if (event.target.classList.contains('calculator__button')) {
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
window.addEventListener(Events.MOUSE_UP, handleMouseUp);
window.addEventListener(Events.MOUSE_DOWN, handleMouseDown);
buttons.one.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.ONE));
buttons.two.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.TWO));
buttons.three.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.THREE));
buttons.four.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.FOUR));
buttons.five.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.FIVE));
buttons.six.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.SIX));
buttons.seven.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.SEVEN));
buttons.eight.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.EIGHT));
buttons.nine.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.NINE));
buttons.zero.addEventListener(Events.MOUSE_DOWN, () => handleNumberClick(Strings.ZERO));
buttons.c.addEventListener(Events.MOUSE_DOWN, handleCleanClick);
buttons.dot.addEventListener(Events.MOUSE_DOWN, () => handleOperatorClick(Symbols.DOT));
buttons.plus.addEventListener(Events.MOUSE_DOWN, () => handleOperatorClick(Operators.PLUS));
buttons.minus.addEventListener(Events.MOUSE_DOWN, () => handleOperatorClick(Operators.MINUS));
buttons.multiply.addEventListener(Events.MOUSE_DOWN, () => handleOperatorClick(Operators.MULTIPLY));
buttons.divide.addEventListener(Events.MOUSE_DOWN, () => handleOperatorClick(Operators.DIVIDE));
buttons.equals.addEventListener(Events.MOUSE_DOWN, handleEqualsClick);
setInitialScreenValue(screen, calcValue);
