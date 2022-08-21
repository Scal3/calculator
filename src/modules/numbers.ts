import {Numbers, Strings} from '../constants.js';

const convertNumberValue = (calcValue: string, numberValue: string): string => {
  if(Number(calcValue) <= Numbers.ZERO) {
    calcValue = numberValue;
    return calcValue;
  }

  calcValue = `${calcValue}${numberValue}`;
  return calcValue;
}

const cleanValue = (calcValue: string): string => {
  calcValue = Strings.ZERO;
  return calcValue;
}

export {
  convertNumberValue,
  cleanValue
}