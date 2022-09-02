import { ErrorsMessages, ErrorsTypes, Operators } from "./constants";
import { handleExeptions } from "./modules/exeptions";
import sound from './assets/click.wav';

// Create sounds off
const playSoundClick = (): void => {
  const audio = new Audio(sound);
  audio.volume = 0.1;
  audio.play();
}

const setInitialScreenValue = (screen: Element | null, calcValue: string): void => {
  if(!screen) {
    return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: ErrorsMessages.SCREEN_IS_LOST });
  }
  
  screen.textContent = calcValue;
}

const handleFindElementBySelector = (findIn: Element | Document, selector: string, errorMessage: string): Element => {
  const element: Element | null = findIn.querySelector(selector);

  if(!element) {
    return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: errorMessage });
  }

  return element;
}

const handleFindSeveralElementsBySelector = (
  findIn: Element | Document, selector: string, errorMessage: string
): NodeListOf<Element> => {
  const elements: NodeListOf<Element> | null = findIn.querySelectorAll(selector);

  if(!elements) {
    return handleExeptions({ type: ErrorsTypes.MISSING_SELECTOR, message: errorMessage });
  }

  return elements;
}

const replaceLastSimbolInStringWithOperator = (calcValue: string, operator: string): string => {
  const newVal = String(calcValue).split('');
  newVal.pop();
  const res = `${newVal.join('')}${operator}`

  return res;
}

const hasTwoDots = (calcValue: string, operator: string): boolean => {
  const splitPattern = /[\s()*/%+-]+/g;
  const calcValueWithoutLastOperator = replaceLastSimbolInStringWithOperator(calcValue, operator);
  const calcValueArr = calcValueWithoutLastOperator.split(splitPattern);
  let res = false;

  calcValueArr.forEach(item => {
    const dots = item.match(/\./g);

    if(!dots) {
      return;
    }

    if(dots.length >= 2) {
      res = true;
    }
  }) 

  return res;
}

const hasOperatorInEndOfString = (calcValue: string): boolean => {
  const calcValueArr = String(calcValue).split('');

  if(calcValueArr[calcValueArr.length - 1] === Operators.DIVIDE 
    || calcValueArr[calcValueArr.length - 1] === Operators.PLUS
    || calcValueArr[calcValueArr.length - 1] === Operators.MINUS
    || calcValueArr[calcValueArr.length - 1] === Operators.MULTIPLY
    ) {
    return true;
  }

  return false;
}

export {
  playSoundClick,
  setInitialScreenValue,
  handleFindElementBySelector,
  handleFindSeveralElementsBySelector,
  replaceLastSimbolInStringWithOperator,
  hasTwoDots,
  hasOperatorInEndOfString
}