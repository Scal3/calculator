import { Numbers } from "../constants.js";

const convertValueWithOperator = (calcValue: string, operator: string): string => {
  // if(Number(calcValue) <= Numbers.ZERO) {
  //   calcValue = numberValue;
  //   return calcValue;
  // }

  calcValue = `${calcValue}${operator}`;
  return calcValue;
}


export {
  convertValueWithOperator,

}