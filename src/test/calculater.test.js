const Calculator = require('../calculator.js');

const calculator = new Calculator();
test('초기값이 0으로 노출되는지 확인', () => {
  expect(calculator).toEqual({ value: 0 });
})