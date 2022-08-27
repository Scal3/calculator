var Strings;
(function (Strings) {
    Strings["ZERO"] = "0";
    Strings["ONE"] = "1";
    Strings["TWO"] = "2";
    Strings["THREE"] = "3";
    Strings["FOUR"] = "4";
    Strings["FIVE"] = "5";
    Strings["SIX"] = "6";
    Strings["SEVEN"] = "7";
    Strings["EIGHT"] = "8";
    Strings["NINE"] = "9";
})(Strings || (Strings = {}));
var Numbers;
(function (Numbers) {
    Numbers[Numbers["ZERO"] = 0] = "ZERO";
})(Numbers || (Numbers = {}));
var Operators;
(function (Operators) {
    Operators["PLUS"] = "+";
    Operators["MINUS"] = "-";
    Operators["MULTIPLY"] = "*";
    Operators["DIVIDE"] = "/";
})(Operators || (Operators = {}));
var Symbols;
(function (Symbols) {
    Symbols["DOT"] = ".";
})(Symbols || (Symbols = {}));
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
};
var ErrorsMessages;
(function (ErrorsMessages) {
    ErrorsMessages["SCREEN_IS_LOST"] = "screen is lost";
    ErrorsMessages["CALCULATOR_CONTAINER_IS_LOST"] = "caluclator container is lost";
    ErrorsMessages["SELECTOR_NOT_FOUND"] = "selector not found";
})(ErrorsMessages || (ErrorsMessages = {}));
var ErrorsTypes;
(function (ErrorsTypes) {
    ErrorsTypes["MISSING_SELECTOR"] = "Missing selector";
})(ErrorsTypes || (ErrorsTypes = {}));
export { Strings, Numbers, ErrorsMessages, ErrorsTypes, Operators, Symbols, classSelectors };
