import { ErrorsTypes } from "./constants.js";
import { handleExeptions } from "./modules/exeptions.js";
// Create sounds off
const playSoundClick = () => {
    const audio = new Audio('../assets/click.wav');
    audio.volume = 0.1;
    audio.play();
};
const setInitialScreenValue = (screen, calcValue) => {
    if (!screen) {
        throw new Error('kek');
    }
    screen.textContent = calcValue;
};
const handleFindElementBySelector = (selector, errorMessage) => {
    const element = document.querySelector(selector);
    if (!element) {
        return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: errorMessage });
    }
    return element;
};
export { playSoundClick, setInitialScreenValue, handleFindElementBySelector };
