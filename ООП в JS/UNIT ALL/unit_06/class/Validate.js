class Validate {
  constructor(a) {
    this.a = a;
  }

  static isNumber(n) {
    if (typeof n === "number") return true;
    return false;
  }

  static isInt(n) {
    if (typeof n === "number") return Number.isInteger(n);
  }

  static isFloat(n) {
    if (typeof n === "number" && Number.isInteger(n) === false) return true;
    else if (typeof n === "number" && Number.isInteger(n) === true) {
      return false;
    }
  }

  static isChar(str) {
    if (str.length === 1) return true;
    return false;
  }

  static isString(str) {
    if (typeof str === "string") return true;
    return false;
  }

  static isBoolean(b) {
    if (typeof b === "boolean") return true;
    return false;
  }

  static isArray(arr) {
    return Array.isArray(arr);
  }

  static toMoney(n) {
    return n.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1 ");
  }
}
