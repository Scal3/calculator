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
var Errors;
(function (Errors) {
    Errors["SCREEN_IS_LOST"] = "Screen is lost";
    Errors["CALCULATOR_CONTAINER_IS_LOST"] = "Caluclator container is lost";
})(Errors || (Errors = {}));
export { Strings, Numbers, Errors, Operators };
