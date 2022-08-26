import { classSelectors, ErrorsMessages } from "./constants.js";
import { handleFindElementBySelector, handleFindSeveralElementsBySelector } from "./utils.js";
const calcContainer = handleFindElementBySelector(document, classSelectors.CALCULATOR_CONTAINER, ErrorsMessages.CALCULATOR_CONTAINER_IS_LOST);
const oneNumber = handleFindElementBySelector(calcContainer, classSelectors.ONE, ErrorsMessages.SELECTOR_NOT_FOUND);
const twoNumber = handleFindElementBySelector(calcContainer, classSelectors.TWO, ErrorsMessages.SELECTOR_NOT_FOUND);
const threeNumber = handleFindElementBySelector(calcContainer, classSelectors.THREE, ErrorsMessages.SELECTOR_NOT_FOUND);
const fourNumber = handleFindElementBySelector(calcContainer, classSelectors.FOUR, ErrorsMessages.SELECTOR_NOT_FOUND);
const fiveNumber = handleFindElementBySelector(calcContainer, classSelectors.FIVE, ErrorsMessages.SELECTOR_NOT_FOUND);
const sixNumber = handleFindElementBySelector(calcContainer, classSelectors.SIX, ErrorsMessages.SELECTOR_NOT_FOUND);
const sevenNumber = handleFindElementBySelector(calcContainer, classSelectors.SEVEN, ErrorsMessages.SELECTOR_NOT_FOUND);
const eightNumber = handleFindElementBySelector(calcContainer, classSelectors.EIGHT, ErrorsMessages.SELECTOR_NOT_FOUND);
const nineNumber = handleFindElementBySelector(calcContainer, classSelectors.NINE, ErrorsMessages.SELECTOR_NOT_FOUND);
const zeroNumber = handleFindElementBySelector(calcContainer, classSelectors.ZERO, ErrorsMessages.SELECTOR_NOT_FOUND);
const dot = handleFindElementBySelector(calcContainer, classSelectors.DOT, ErrorsMessages.SELECTOR_NOT_FOUND);
const buttonC = handleFindElementBySelector(calcContainer, classSelectors.BUTTON_C, ErrorsMessages.SELECTOR_NOT_FOUND);
const plus = handleFindElementBySelector(calcContainer, classSelectors.PLUS, ErrorsMessages.SELECTOR_NOT_FOUND);
const minus = handleFindElementBySelector(calcContainer, classSelectors.MINUS, ErrorsMessages.SELECTOR_NOT_FOUND);
const multiply = handleFindElementBySelector(calcContainer, classSelectors.MULTIPLY, ErrorsMessages.SELECTOR_NOT_FOUND);
const divide = handleFindElementBySelector(calcContainer, classSelectors.DIVIDE, ErrorsMessages.SELECTOR_NOT_FOUND);
const equals = handleFindElementBySelector(calcContainer, classSelectors.EQUALS, ErrorsMessages.SELECTOR_NOT_FOUND);
const screen = handleFindElementBySelector(calcContainer, classSelectors.SCREEN, ErrorsMessages.SELECTOR_NOT_FOUND);
const allButtons = handleFindSeveralElementsBySelector(calcContainer, classSelectors.SCREEN, ErrorsMessages.SELECTOR_NOT_FOUND);
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
