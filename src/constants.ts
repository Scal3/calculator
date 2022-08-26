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

enum ErrorsMessages {
  SCREEN_IS_LOST = 'screen is lost',
  CALCULATOR_CONTAINER_IS_LOST = 'caluclator container is lost'
}

enum ErrorsTypes {
  MISSING_SELECTOR = 'Missing selector',
}

export {
  Strings,
  Numbers,
  ErrorsMessages,
  ErrorsTypes,
  Operators
}