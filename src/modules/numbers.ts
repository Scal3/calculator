import {Numbers, Strings, Symbols} from '../constants';

const convertNumberValue = (calcValue: string, numberValue: string): string => {
  const valArr = String(calcValue).split('');
  const lastSymbol = valArr[valArr.length - 1];

  if(lastSymbol === Symbols.DOT) {
    calcValue = `${calcValue}${numberValue}`;
    return calcValue;
  }

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