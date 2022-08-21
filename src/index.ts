import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";
import { calcValue, handleClean, handleNumberClick } from './numbers.js';

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


buttons.one?.addEventListener('click', () => handleNumberClick(screen, '1'));
buttons.two?.addEventListener('click', () => handleNumberClick(screen, '2'));
buttons.three?.addEventListener('click', () => handleNumberClick(screen, '3'));
buttons.four?.addEventListener('click', () => handleNumberClick(screen, '4'));
buttons.five?.addEventListener('click', () => handleNumberClick(screen, '5'));
buttons.six?.addEventListener('click', () => handleNumberClick(screen, '6'));
buttons.seven?.addEventListener('click', () => handleNumberClick(screen, '7'));
buttons.eight?.addEventListener('click', () => handleNumberClick(screen, '8'));
buttons.nine?.addEventListener('click', () => handleNumberClick(screen, '9'));
buttons.zero?.addEventListener('click', () => handleNumberClick(screen, '0'));

buttons.c?.addEventListener('click', () => handleClean(screen));


setInitialScreenValue();