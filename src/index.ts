import { buttons, screen } from "./selectors.js";
import { playSoundClick, setInitialScreenValue } from "./utils.js";
import { convertNumberValue, cleanValue } from './modules/numbers.js';
import { Errors, Strings } from "./constants.js";

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


// buttons.plus?.addEventListener('click', () => handleNumberClick(screen, '7'));
// buttons.minus?.addEventListener('click', () => handleNumberClick(screen, '8'));
// buttons.multiply?.addEventListener('click', () => handleNumberClick(screen, '9'));
// buttons.divide?.addEventListener('click', () => handleNumberClick(screen, '0'));


setInitialScreenValue(screen, calcValue);