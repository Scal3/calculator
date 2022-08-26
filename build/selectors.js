import { ErrorsMessages } from "./constants.js";
import { handleFindElementBySelector } from "./utils.js";
const calcContainer = handleFindElementBySelector('.calculator', ErrorsMessages.CALCULATOR_CONTAINER_IS_LOST);
const oneNumber = calcContainer.querySelector('.one');
const twoNumber = calcContainer.querySelector('.two');
const threeNumber = calcContainer.querySelector('.three');
const fourNumber = calcContainer.querySelector('.four');
const fiveNumber = calcContainer.querySelector('.five');
const sixNumber = calcContainer.querySelector('.six');
const sevenNumber = calcContainer.querySelector('.seven');
const eightNumber = calcContainer.querySelector('.eight');
const nineNumber = calcContainer.querySelector('.nine');
const zeroNumber = calcContainer.querySelector('.zero');
const dot = calcContainer.querySelector('.dot');
const buttonC = calcContainer.querySelector('.button-c');
const plus = calcContainer.querySelector('.plus');
const minus = calcContainer.querySelector('.minus');
const multiply = calcContainer.querySelector('.multiply');
const divide = calcContainer.querySelector('.divide');
const equals = calcContainer.querySelector('.grid-equals');
const allButtons = calcContainer.querySelectorAll('.calculator__button');
const screen = calcContainer.querySelector('.calculator__screen-symbols');
const buttons = {
    one: oneNumber,
    two: twoNumber,
    three: threeNumber,
    four: fourNumber,
    five: fiveNumber,
    six: sixNumber,
    seven: sevenNumber,
    eight: eightNumber,
    nine: nineNumber,
    zero: zeroNumber,
    dot: dot,
    c: buttonC,
    plus: plus,
    minus: minus,
    multiply: multiply,
    divide: divide,
    equals: equals,
    allButtons: allButtons
};
export { buttons, screen };
