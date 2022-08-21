var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";
import { calcValue, handleClean, handleNumberClick } from './numbers.js';
import { Strings } from "./constants.js";
const setInitialScreenValue = () => {
    if (!screen) {
        throw new Error('kek');
    }
    screen.textContent = String(calcValue);
};
// MOUSE UP
window.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('calculator__button')) {
        // Fix bug with no-sound event, when mouseup is outside button
        playSoundClick();
        event.target.classList.remove('calculator__button_without_shadow');
    }
    buttons.allButtons.forEach(button => {
        button.classList.remove('calculator__button_without_shadow');
    });
});
// MOUSE DOWN
window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('calculator__button')) {
        event.target.classList.add('calculator__button_without_shadow');
    }
});
(_a = buttons.one) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => handleNumberClick(screen, Strings.ONE));
(_b = buttons.two) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => handleNumberClick(screen, Strings.TWO));
(_c = buttons.three) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => handleNumberClick(screen, Strings.THREE));
(_d = buttons.four) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => handleNumberClick(screen, Strings.FOUR));
(_e = buttons.five) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => handleNumberClick(screen, Strings.FIVE));
(_f = buttons.six) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => handleNumberClick(screen, Strings.SIX));
(_g = buttons.seven) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => handleNumberClick(screen, Strings.SEVEN));
(_h = buttons.eight) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => handleNumberClick(screen, Strings.EIGHT));
(_j = buttons.nine) === null || _j === void 0 ? void 0 : _j.addEventListener('click', () => handleNumberClick(screen, Strings.NINE));
(_k = buttons.zero) === null || _k === void 0 ? void 0 : _k.addEventListener('click', () => handleNumberClick(screen, Strings.ZERO));
(_l = buttons.c) === null || _l === void 0 ? void 0 : _l.addEventListener('click', () => handleClean(screen));
// buttons.dot?.addEventListener('click', () => handleClean(screen)); // will think about how it work...
// buttons.plus?.addEventListener('click', () => handleNumberClick(screen, '7'));
// buttons.minus?.addEventListener('click', () => handleNumberClick(screen, '8'));
// buttons.multiply?.addEventListener('click', () => handleNumberClick(screen, '9'));
// buttons.divide?.addEventListener('click', () => handleNumberClick(screen, '0'));
setInitialScreenValue();
