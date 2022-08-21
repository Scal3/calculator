import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";
import { calcValue, handleClean, handleNumberClick } from './numbers.js';
import { Strings } from "./constants.js";

const setInitialScreenValue = () => {
  if (!screen) {
    throw new Error('kek');
  }
  
  screen.textContent = String(calcValue);
}


// MOUSE UP
window.addEventListener('mouseup', (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    // Fix bug with no-sound event, when mouseup is outside button
    playSoundClick();
    event.target.classList.remove('calculator__button_without_shadow');
  }

  buttons.allButtons.forEach(button => {
    button.classList.remove('calculator__button_without_shadow');
  });

});

// MOUSE DOWN
window.addEventListener('mousedown', (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    event.target.classList.add('calculator__button_without_shadow');
  }
});


buttons.one?.addEventListener('click', () => handleNumberClick(screen, Strings.ONE));
buttons.two?.addEventListener('click', () => handleNumberClick(screen, Strings.TWO));
buttons.three?.addEventListener('click', () => handleNumberClick(screen, Strings.THREE));
buttons.four?.addEventListener('click', () => handleNumberClick(screen, Strings.FOUR));
buttons.five?.addEventListener('click', () => handleNumberClick(screen, Strings.FIVE));
buttons.six?.addEventListener('click', () => handleNumberClick(screen, Strings.SIX));
buttons.seven?.addEventListener('click', () => handleNumberClick(screen, Strings.SEVEN));
buttons.eight?.addEventListener('click', () => handleNumberClick(screen, Strings.EIGHT));
buttons.nine?.addEventListener('click', () => handleNumberClick(screen, Strings.NINE));
buttons.zero?.addEventListener('click', () => handleNumberClick(screen, Strings.ZERO));

buttons.c?.addEventListener('click', () => handleClean(screen));
// buttons.dot?.addEventListener('click', () => handleClean(screen)); // will think about how it work...


// buttons.plus?.addEventListener('click', () => handleNumberClick(screen, '7'));
// buttons.minus?.addEventListener('click', () => handleNumberClick(screen, '8'));
// buttons.multiply?.addEventListener('click', () => handleNumberClick(screen, '9'));
// buttons.divide?.addEventListener('click', () => handleNumberClick(screen, '0'));


setInitialScreenValue();