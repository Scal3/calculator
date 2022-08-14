const calcContainer: Element | null = document.querySelector('.calculator');

if(!calcContainer) {
  throw new Error('lol we are missing the container');
}

const oneNumber: Element | null = calcContainer.querySelector('.one');
const twoNumber: Element | null = calcContainer.querySelector('.two');
const threeNumber: Element | null = calcContainer.querySelector('.three');
const fourNumber: Element | null = calcContainer.querySelector('.four');
const fiveNumber: Element | null = calcContainer.querySelector('.five');
const sixNumber: Element | null = calcContainer.querySelector('.six');
const sevenNumber: Element | null = calcContainer.querySelector('.seven');
const eightNumber: Element | null = calcContainer.querySelector('.eight');
const nineNumber: Element | null = calcContainer.querySelector('.nine');
const zeroNumber: Element | null = calcContainer.querySelector('.zero');

const dot: Element | null = calcContainer.querySelector('.dot');
const buttonC: Element | null = calcContainer.querySelector('.button-c');

const plus: Element | null = calcContainer.querySelector('.plus');
const minus: Element | null = calcContainer.querySelector('.minus');
const multiply: Element | null = calcContainer.querySelector('.multiply');
const divide: Element | null = calcContainer.querySelector('.divide'); 
const equals: Element | null = calcContainer.querySelector('.grid-equals'); 

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
}


export {
  buttons
}