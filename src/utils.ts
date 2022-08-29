import { ErrorsMessages, ErrorsTypes, Symbols } from "./constants.js";
import { handleExeptions } from "./modules/exeptions.js";

// Create sounds off
const playSoundClick = () => {
  const audio = new Audio('../assets/click.wav');
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
  const newVal = calcValue.split('');
  newVal.pop();
  const res = `${newVal.join('')}${operator}`

  return res;
}

const hasTwoDots = (calcValue: string, operator: string): boolean => {
  const calcValueArr = calcValue.split('');
  calcValueArr.push(operator);
  const filteredCalcValueArr = calcValueArr.filter((item, i, arr) => {
    return item === Symbols.DOT && arr[i-1] !== Symbols.DOT && arr[i+1] !== Symbols.DOT && (arr[i+2] === Symbols.DOT || arr[i+3] === Symbols.DOT)
  });
  const hasTwoDots = filteredCalcValueArr.length >= 1 ? true : false;

  return hasTwoDots;
}

export {
  playSoundClick,
  setInitialScreenValue,
  handleFindElementBySelector,
  handleFindSeveralElementsBySelector,
  replaceLastSimbolInStringWithOperator,
  hasTwoDots
}