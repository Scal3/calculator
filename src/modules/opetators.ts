import { Numbers, Operators, Symbols } from "../constants.js";
import { hasTwoDots, replaceLastSimbolInStringWithOperator } from "../utils.js";

const convertValueWithOperator = (calcValue: string, operator: string): string => {
  if(hasTwoDots(calcValue, operator)) {
    return calcValue;
  }

  const lastSymbol = calcValue[calcValue.length - 1];

  switch(lastSymbol) {
    case Operators.DIVIDE: 
      return replaceLastSimbolInStringWithOperator(calcValue, operator);
    case Operators.MINUS: 
      return replaceLastSimbolInStringWithOperator(calcValue, operator);
    case Operators.MULTIPLY: 
      return replaceLastSimbolInStringWithOperator(calcValue, operator);
    case Operators.PLUS: 
      return replaceLastSimbolInStringWithOperator(calcValue, operator);
    case Symbols.DOT: 
      return replaceLastSimbolInStringWithOperator(calcValue, operator);
    default:
      calcValue = `${calcValue}${operator}`;
      return calcValue;
  }
}


export {
  convertValueWithOperator,

}