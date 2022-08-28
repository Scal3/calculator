import { Operators, Symbols } from "../constants.js";
import { replaceLastSimbolInStringWithOperator } from "../utils.js";
const convertValueWithOperator = (calcValue, operator) => {
    const lastSymbol = calcValue[calcValue.length - 1];
    if (lastSymbol === Operators.DIVIDE) {
        return replaceLastSimbolInStringWithOperator(calcValue, operator);
    }
    if (lastSymbol === Operators.MINUS) {
        return replaceLastSimbolInStringWithOperator(calcValue, operator);
    }
    if (lastSymbol === Operators.MULTIPLY) {
        return replaceLastSimbolInStringWithOperator(calcValue, operator);
    }
    if (lastSymbol === Operators.PLUS) {
        return replaceLastSimbolInStringWithOperator(calcValue, operator);
    }
    if (lastSymbol === Symbols.DOT) {
        // add handler for 0.23123
        const newVal = calcValue.split('');
        newVal.pop();
        const res = `${newVal.join('')}${operator}`;
        return res;
    }
    // add 0/0 handler
    calcValue = `${calcValue}${operator}`;
    return calcValue;
};
export { convertValueWithOperator, };
