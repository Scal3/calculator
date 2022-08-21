const convertValueWithOperator = (calcValue, operator) => {
    // if(Number(calcValue) <= Numbers.ZERO) {
    //   calcValue = numberValue;
    //   return calcValue;
    // }
    calcValue = `${calcValue}${operator}`;
    return calcValue;
};
export { convertValueWithOperator, };
