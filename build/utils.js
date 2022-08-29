import { ErrorsMessages, ErrorsTypes, Symbols } from "./constants.js";
import { handleExeptions } from "./modules/exeptions.js";
// Create sounds off
const playSoundClick = () => {
    const audio = new Audio('../assets/click.wav');
    audio.volume = 0.1;
    audio.play();
};
const setInitialScreenValue = (screen, calcValue) => {
    if (!screen) {
        return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: ErrorsMessages.SCREEN_IS_LOST });
    }
    screen.textContent = calcValue;
};
const handleFindElementBySelector = (findIn, selector, errorMessage) => {
    const element = findIn.querySelector(selector);
    if (!element) {
        return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: errorMessage });
    }
    return element;
};
const handleFindSeveralElementsBySelector = (findIn, selector, errorMessage) => {
    const elements = findIn.querySelectorAll(selector);
    if (!elements) {
        return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: errorMessage });
    }
    return elements;
};
const replaceLastSimbolInStringWithOperator = (calcValue, operator) => {
    const newVal = calcValue.split('');
    newVal.pop();
    const res = `${newVal.join('')}${operator}`;
    return res;
};
const hasTwoDots = (calcValue, operator) => {
    const calcValueArr = calcValue.split('');
    calcValueArr.push(operator);
    const filteredCalcValueArr = calcValueArr.filter((item, i, arr) => {
        return item === Symbols.DOT && arr[i - 1] !== Symbols.DOT && arr[i + 1] !== Symbols.DOT && (arr[i + 2] === Symbols.DOT || arr[i + 3] === Symbols.DOT);
    });
    const hasTwoDots = filteredCalcValueArr.length >= 1 ? true : false;
    return hasTwoDots;
};
export { playSoundClick, setInitialScreenValue, handleFindElementBySelector, handleFindSeveralElementsBySelector, replaceLastSimbolInStringWithOperator, hasTwoDots };
