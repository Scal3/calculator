let calcValue = '0';
const handleNumberClick = (screenSelector, numberValue) => {
    if (!screenSelector) {
        throw new Error('kek');
    }
    if (Number(calcValue) <= 0) {
        calcValue = numberValue;
        screenSelector.textContent = String(calcValue);
        return;
    }
    calcValue = `${calcValue}${numberValue}`;
    screenSelector.textContent = String(calcValue);
};
const handleClean = (screenSelector) => {
    if (!screenSelector) {
        throw new Error('kek');
    }
    calcValue = `0`;
    screenSelector.textContent = String(calcValue);
};
export { handleNumberClick, handleClean, calcValue };
