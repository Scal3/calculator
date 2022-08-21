import { Numbers, Strings } from '../constants.js';
const convertNumberValue = (calcValue, numberValue) => {
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
