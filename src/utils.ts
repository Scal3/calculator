import { ErrorsMessages, ErrorsTypes } from "./constants.js";
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

export {
  playSoundClick,
  setInitialScreenValue,
  handleFindElementBySelector,
  handleFindSeveralElementsBySelector
}