var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
import { buttons, screen } from "./selectors.js";
import { playSoundClick, setInitialScreenValue } from "./utils.js";
import { convertNumberValue, cleanValue } from './modules/numbers.js';
import { Errors, Strings } from "./constants.js";
let calcValue = '0';
const handleNumberClick = (numberValue) => {
    if (!screen) {
        throw new Error(Errors.SCREEN_IS_LOST);
    }
    const value = convertNumberValue(calcValue, numberValue);
    calcValue = value;
    screen.textContent = calcValue;
};
const handleCleanClick = () => {
    if (!screen) {
        throw new Error(Errors.SCREEN_IS_LOST);
    }
    const zero = cleanValue(calcValue);
    calcValue = zero;
    screen.textContent = calcValue;
};
const handleMouseUp = (event) => {
    if (event.target.classList.contains('calculator__button')) {
        // Fix bug with no-sound event, when mouseup is outside button
        playSoundClick();
        event.target.classList.remove('calculator__button_without_shadow');
    }
    buttons.allButtons.forEach(button => {
        button.classList.remove('calculator__button_without_shadow');
    });
};
const handleMouseDown = (event) => {
    if (event.target.classList.contains('calculator__button')) {
        event.target.classList.add('calculator__button_without_shadow');
    }
};
// MOUSE UP
window.addEventListener('mouseup', handleMouseUp);
// MOUSE DOWN
window.addEventListener('mousedown', handleMouseDown);
(_a = buttons.one) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => handleNumberClick(Strings.ONE));
(_b = buttons.two) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => handleNumberClick(Strings.TWO));
(_c = buttons.three) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => handleNumberClick(Strings.THREE));
(_d = buttons.four) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => handleNumberClick(Strings.FOUR));
(_e = buttons.five) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => handleNumberClick(Strings.FIVE));
(_f = buttons.six) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => handleNumberClick(Strings.SIX));
(_g = buttons.seven) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => handleNumberClick(Strings.SEVEN));
(_h = buttons.eight) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => handleNumberClick(Strings.EIGHT));
(_j = buttons.nine) === null || _j === void 0 ? void 0 : _j.addEventListener('click', () => handleNumberClick(Strings.NINE));
(_k = buttons.zero) === null || _k === void 0 ? void 0 : _k.addEventListener('click', () => handleNumberClick(Strings.ZERO));
(_l = buttons.c) === null || _l === void 0 ? void 0 : _l.addEventListener('click', handleCleanClick);
// buttons.dot?.addEventListener('click', () => handleClean(screen)); // will think about how it work...
// buttons.plus?.addEventListener('click', () => handleNumberClick(screen, '7'));
// buttons.minus?.addEventListener('click', () => handleNumberClick(screen, '8'));
// buttons.multiply?.addEventListener('click', () => handleNumberClick(screen, '9'));
// buttons.divide?.addEventListener('click', () => handleNumberClick(screen, '0'));
setInitialScreenValue(screen, calcValue);
