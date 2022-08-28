import { ErrorsMessages, ErrorsTypes } from "./constants.js";
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
export { playSoundClick, setInitialScreenValue, handleFindElementBySelector, handleFindSeveralElementsBySelector, replaceLastSimbolInStringWithOperator };
