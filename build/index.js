var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";
let calcValue = '0';
if (!screen) {
    throw new Error('kek');
}
screen.textContent = String(calcValue);
// const execute = (value: string) => {
//   eval(value);
// }
// const addValue = (initialValue: string, value: string) => {
//   initialValue + value;
// }
const getFirstValue = () => {
};
const addOperator = () => {
};
const getSecondValue = () => {
};
const execute = () => {
};
const resetInitialValue = () => {
    calcValue = '0';
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
    // if (event.target.classList.contains('grid-equals')) {
    //   execute(initialValue);
    // }
    // if (event.target.classList.contains('one')) {
    //   const value = '1';
    //   addValue(initialValue, value);
    // }
});
// MOUSE DOWN
window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('calculator__button')) {
        event.target.classList.add('calculator__button_without_shadow');
    }
});
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
(_a = buttons.one) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => handleNumberClick(screen, '1'));
(_b = buttons.two) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => handleNumberClick(screen, '2'));
(_c = buttons.three) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => handleNumberClick(screen, '3'));
(_d = buttons.four) === null || _d === void 0 ? void 0 : _d.addEventListener('click', () => handleNumberClick(screen, '4'));
(_e = buttons.five) === null || _e === void 0 ? void 0 : _e.addEventListener('click', () => handleNumberClick(screen, '5'));
(_f = buttons.six) === null || _f === void 0 ? void 0 : _f.addEventListener('click', () => handleNumberClick(screen, '6'));
(_g = buttons.seven) === null || _g === void 0 ? void 0 : _g.addEventListener('click', () => handleNumberClick(screen, '7'));
(_h = buttons.eight) === null || _h === void 0 ? void 0 : _h.addEventListener('click', () => handleNumberClick(screen, '8'));
(_j = buttons.nine) === null || _j === void 0 ? void 0 : _j.addEventListener('click', () => handleNumberClick(screen, '9'));
(_k = buttons.zero) === null || _k === void 0 ? void 0 : _k.addEventListener('click', () => handleNumberClick(screen, '0'));
(_l = buttons.c) === null || _l === void 0 ? void 0 : _l.addEventListener('click', () => handleClean(screen));
