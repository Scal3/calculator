import {Numbers, Strings} from './constants.js';

let calcValue = '0';

const handleNumberClick = (screenSelector: Element | null, numberValue: string): void => {
  if (!screenSelector) {
    throw new Error('kek');
  }

  if(Number(calcValue) <= Numbers.ZERO) {
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

  calcValue = Strings.ZERO;
  screenSelector.textContent = String(calcValue);
}

export {
  handleNumberClick,
  handleClean,
  calcValue
}