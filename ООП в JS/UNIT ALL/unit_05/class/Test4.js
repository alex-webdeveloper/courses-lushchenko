class Test4 extends Test2 {
  set testProp(a) {
    this._testProp = a * 10;
  }

  get testProp() {
    return this._testProp;
  }

  set testValue(n) {
    this._testValue = n;
  }

  get testValue() {
    if (this._testValue > 100) return this._testValue;
    return false;
  }
}
