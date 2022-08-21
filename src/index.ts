import { buttons, screen } from "./selectors.js";
import { playSoundClick, setInitialScreenValue } from "./utils.js";
import { convertNumberValue, cleanValue } from './modules/numbers.js';
import { Errors, Operators, Strings } from "./constants.js";
import { convertValueWithOperator } from "./modules/opetators.js";

let calcValue = '0';


const handleNumberClick = (numberValue: string) => {
  if(!screen) {
    throw new Error(Errors.SCREEN_IS_LOST);
  }

  const value = convertNumberValue(calcValue, numberValue);
  calcValue = value;
  screen.textContent = calcValue;
}

const handleCleanClick = () => {
  if(!screen) {
    throw new Error(Errors.SCREEN_IS_LOST);
  }

  const zero = cleanValue(calcValue);
  calcValue = zero;
  screen.textContent = calcValue;
}

const handleOperatorClick = (operator: string) => {
  if(!screen) {
    throw new Error(Errors.SCREEN_IS_LOST);
  }

  const value = convertValueWithOperator(calcValue, operator);
  calcValue = value;
  screen.textContent = calcValue;
}

const handleEqualsClick = () => {
  if(!screen) {
    throw new Error(Errors.SCREEN_IS_LOST);
  }

  const result = eval(calcValue);
  calcValue = result;
  screen.textContent = calcValue;
}

const handleMouseUp = (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    // Fix bug with no-sound event, when mouseup is outside button
    playSoundClick();
    event.target.classList.remove('calculator__button_without_shadow');
  }

  buttons.allButtons.forEach(button => {
    button.classList.remove('calculator__button_without_shadow');
  });
}

const handleMouseDown = (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    event.target.classList.add('calculator__button_without_shadow');
  }
}


// MOUSE UP
window.addEventListener('mouseup', handleMouseUp);

// MOUSE DOWN
window.addEventListener('mousedown', handleMouseDown);

buttons.one?.addEventListener('click', () => handleNumberClick(Strings.ONE));
buttons.two?.addEventListener('click', () => handleNumberClick(Strings.TWO));
buttons.three?.addEventListener('click', () => handleNumberClick(Strings.THREE));
buttons.four?.addEventListener('click', () => handleNumberClick(Strings.FOUR));
buttons.five?.addEventListener('click', () => handleNumberClick(Strings.FIVE));
buttons.six?.addEventListener('click', () => handleNumberClick(Strings.SIX));
buttons.seven?.addEventListener('click', () => handleNumberClick(Strings.SEVEN));
buttons.eight?.addEventListener('click', () => handleNumberClick(Strings.EIGHT));
buttons.nine?.addEventListener('click', () => handleNumberClick(Strings.NINE));
buttons.zero?.addEventListener('click', () => handleNumberClick(Strings.ZERO));

buttons.c?.addEventListener('click', handleCleanClick);
// buttons.dot?.addEventListener('click', () => handleClean(screen)); // will think about how it work...


buttons.plus?.addEventListener('click', () => handleOperatorClick(Operators.PLUS));
buttons.minus?.addEventListener('click', () => handleNumberClick(Operators.MINUS));
buttons.multiply?.addEventListener('click', () => handleNumberClick(Operators.MULTIPLY));
buttons.divide?.addEventListener('click', () => handleNumberClick(Operators.DIVIDE));
buttons.equals?.addEventListener('click', handleEqualsClick);


setInitialScreenValue(screen, calcValue);