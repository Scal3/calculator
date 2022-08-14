import { buttons, screen } from "./selectors.js";
import { playSoundClick } from "./utils.js";
const initialValue = '1+1';
if (!screen) {
    throw new Error('kek');
}
screen.textContent = initialValue;
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
const skip = () => {
};
window.addEventListener('mouseup', (event) => {
    if (event.target.classList.contains('calculator__button')) {
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
window.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('calculator__button')) {
        event.target.classList.add('calculator__button_without_shadow');
    }
});
