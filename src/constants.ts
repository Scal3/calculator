enum Strings {
  ZERO = '0',
  ONE = '1',
  TWO = '2',
  THREE = '3',
  FOUR = '4',
  FIVE = '5',
  SIX = '6',
  SEVEN = '7',
  EIGHT = '8',
  NINE = '9',
}

enum Numbers {
  ZERO = 0,
}

enum Operators {
  PLUS = '+',
  MINUS = '-',
  MULTIPLY = '*',
  DIVIDE = '/'
}

const classSelectors = {
  ONE: '.one',
  TWO: '.two',
  THREE: '.three',
  FOUR: '.four',
  FIVE: '.five',
  SIX: '.six',
  SEVEN: '.seven',
  EIGHT: '.eight',
  NINE: '.nine',
  ZERO: '.zero',
  DOT: '.dot',
  BUTTON_C: '.button-c',
  PLUS: '.plus',
  MINUS: '.minus',
  MULTIPLY: '.multiply',
  DIVIDE: '.divide',
  EQUALS: '.grid-equals',
  ALL_BUTTONS: '.calculator__button',
  SCREEN: '.calculator__screen-symbols',
  CALCULATOR_CONTAINER: '.calculator',
}

enum ErrorsMessages {
  SCREEN_IS_LOST = 'screen is lost',
  CALCULATOR_CONTAINER_IS_LOST = 'caluclator container is lost',
  SELECTOR_NOT_FOUND = 'selector not found'
}

enum ErrorsTypes {
  MISSING_SELECTOR = 'Missing selector',
}

export {
  Strings,
  Numbers,
  ErrorsMessages,
  ErrorsTypes,
  Operators,
  classSelectors
}