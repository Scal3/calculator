import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";

let calcValue = '0';

if (!screen) {
  throw new Error('kek');
}

screen.textContent = String(calcValue);

// const execute = (value: string) => {
//   eval(value);
// }

// const addValue = (initialValue: string, value: string) => {
//   initialValue + value;
// }

const getFirstValue = () => {

}

const addOperator = () => {

}

const getSecondValue = () => {

}

const execute = () => {

}

const resetInitialValue = () => {
  calcValue = '0';
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


  // if (event.target.classList.contains('grid-equals')) {
  //   execute(initialValue);
  // }

  // if (event.target.classList.contains('one')) {
  //   const value = '1';
  //   addValue(initialValue, value);
  // }
});

// MOUSE DOWN
window.addEventListener('mousedown', (event: any) => {
  if (event.target.classList.contains('calculator__button')) {
    event.target.classList.add('calculator__button_without_shadow');
  }
});





const handleNumberClick = (screenSelector: Element | null, numberValue: string): void => {
  if (!screenSelector) {
    throw new Error('kek');
  }

  if(Number(calcValue) <= 0) {
    calcValue = numberValue;
    screenSelector.textContent = String(calcValue);
    return;
  }

  calcValue = `${calcValue}${numberValue}`;
  screenSelector.textContent = String(calcValue);
}

const handleClean = (screenSelector: Element | null): void => {
  if (!screenSelector) {
    throw new Error('kek');
  }

  calcValue = `0`;
  screenSelector.textContent = String(calcValue);
}



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




