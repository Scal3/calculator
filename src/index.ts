import './styles/index.css';
import { buttons, screen, calcContainer } from "./selectors";
import { hasOperatorInEndOfString, playSoundClick, setInitialScreenValue } from "./utils";
import { convertNumberValue, cleanValue } from './modules/numbers';
import { Events, htmlClasses, Operators, Strings, Symbols } from "./constants";
import { convertValueWithOperator } from "./modules/opetators";

let calcValue = '0';


const handleNumberClick = (numberValue: string): void => {
  if(calcValue.length >= 13) {
    screen.textContent = calcValue;
    return;
  }

  const value = convertNumberValue(calcValue, numberValue);
  calcValue = value;
  screen.textContent = calcValue;
}

const handleCleanClick = (): void => {
  const zero = cleanValue(calcValue);
  calcValue = zero;
  screen.textContent = calcValue;
}

const handleOperatorClick = (operator: string): void => {
  if(calcValue.length >= 13) {
    screen.textContent = calcValue;
    return;
  }

  const value = convertValueWithOperator(calcValue, operator);
  calcValue = value;
  screen.textContent = calcValue;
}

const handleEqualsClick = (): string | void => {
  if(hasOperatorInEndOfString(calcValue)) {
    const calcValueArr = String(calcValue).split('');
    calcValueArr.pop();
    const res = calcValueArr.join('');
    calcValue = res;
    return screen.textContent = res;
  }

  try {
    const result = eval(calcValue);
    const test = Number(result).toFixed(2);
    calcValue = String(test);
    screen.textContent = calcValue;
  } catch(error: any) {
    console.log(error); // !!!!!!!!!!!!
  }
}

const handleMouseUp = (event: any): void => {
  if (event.target.classList.contains('calculator__button')) {
    event.target.classList.remove('calculator__button_without_shadow');
  }

  Array.from(buttons.allButtons).forEach(button => {
    button.classList.remove('calculator__button_without_shadow');
  });

}

const handleMouseDown = (event: any): void => {
  if (event.target.classList.contains('calculator__button')) {
    event.target.classList.add('calculator__button_without_shadow');
    playSoundClick();
  }
}

const handleButtonsClick = (event: any) => {
  if(event.target.classList.contains(htmlClasses.ONE)) handleNumberClick(Strings.ONE)
  if(event.target.classList.contains(htmlClasses.TWO)) handleNumberClick(Strings.TWO)
  if(event.target.classList.contains(htmlClasses.THREE)) handleNumberClick(Strings.THREE)
  if(event.target.classList.contains(htmlClasses.FOUR)) handleNumberClick(Strings.FOUR)
  if(event.target.classList.contains(htmlClasses.FIVE)) handleNumberClick(Strings.FIVE)
  if(event.target.classList.contains(htmlClasses.SIX)) handleNumberClick(Strings.SIX)
  if(event.target.classList.contains(htmlClasses.SEVEN)) handleNumberClick(Strings.SEVEN)
  if(event.target.classList.contains(htmlClasses.EIGHT)) handleNumberClick(Strings.EIGHT)
  if(event.target.classList.contains(htmlClasses.NINE)) handleNumberClick(Strings.NINE)
  if(event.target.classList.contains(htmlClasses.ZERO)) handleNumberClick(Strings.ZERO)
  if(event.target.classList.contains(htmlClasses.PLUS)) handleOperatorClick(Operators.PLUS)
  if(event.target.classList.contains(htmlClasses.MINUS)) handleOperatorClick(Operators.MINUS)
  if(event.target.classList.contains(htmlClasses.MULTIPLY)) handleOperatorClick(Operators.MULTIPLY)
  if(event.target.classList.contains(htmlClasses.DIVIDE)) handleOperatorClick(Operators.DIVIDE)
  if(event.target.classList.contains(htmlClasses.DOT)) handleOperatorClick(Symbols.DOT)
  if(event.target.classList.contains(htmlClasses.BUTTON_C)) handleCleanClick()
  if(event.target.classList.contains(htmlClasses.EQUALS)) handleEqualsClick()
}


window.addEventListener(Events.MOUSE_UP, handleMouseUp);
window.addEventListener(Events.MOUSE_DOWN, handleMouseDown);
calcContainer.addEventListener(Events.MOUSE_DOWN , handleButtonsClick);


setInitialScreenValue(screen, calcValue);