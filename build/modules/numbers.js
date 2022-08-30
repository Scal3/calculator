import { Numbers, Strings, Symbols } from '../constants.js';
const convertNumberValue = (calcValue, numberValue) => {
    const valArr = String(calcValue).split('');
    const lastSymbol = valArr[valArr.length - 1];
    if (lastSymbol === Symbols.DOT) {
        calcValue = `${calcValue}${numberValue}`;
        return calcValue;
    }
    if (Number(calcValue) <= Numbers.ZERO) {
        calcValue = numberValue;
        return calcValue;
    }
    calcValue = `${calcValue}${numberValue}`;
    return calcValue;
};
const cleanValue = (calcValue) => {
    calcValue = Strings.ZERO;
    return calcValue;
};
export { convertNumberValue, cleanValue };
