const Calculator = require('../calculator.js');

describe('Calculator', () => {
  //테스트 코드는 독립적으로 작성하는것이 너무나 중요하다, 오브젝트 모델들은 무조건 test, it안에 작성하여 독립적으로 움직이도록 한다.
  //또는 아래의 코드와 같이 beforeEach를 통해 독립적으로 변수를 전달해 줄 수 있다.
  let calculator;
  beforeEach(() => {
    calculator = new Calculator();
  })
  it('초기값이 0으로 노출되는지 확인', () => {
    expect(calculator.value).toBe(0);
  })
  it('set 메서드 잘 작동하는지 확인', () => {
    const num = 3;
    calculator.set(num);
    expect(calculator.value).toBe(num);
  })
  it('clear 메서드 잘 작동하는지 확인', () => {
    const num = 3;
    calculator.set(num);
    calculator.clear();
    expect(calculator.value).toBe(0);
  })
  describe('add 메서드 잘 작동하는지 확인', () => {
    it('단순 더하기 기능', () => {
      const set = 3;
      const num = 3;
      calculator.set(set);
      calculator.add(num);
      expect(calculator.value).toBe(set + num);
    })
    it('100이상 오류 잘 던지는 확인', () => {
      calculator.set(3);
      expect(() => calculator.add(100)).toThrow('Value can not be greater than 100');
    })
  })
  it('subtract 메서드 잘 작동하는지 확인', () => {
    const set = 6;
    const num = 3;
    calculator.set(set);
    calculator.subtract(num);
    expect(calculator.value).toBe(set - num);
  })
  it('multiply 메서드 잘 작동하는지 확인', () => {
    const set = 6;
    const num = 3;
    calculator.set(set);
    calculator.multiply(num);
    expect(calculator.value).toBe(set * num);
  })
  describe('divide 메서드 잘 작동하는지 확인', () => {
    it('0/0 === NaN', () => {
      calculator.set(0);
      calculator.divide(0);
      expect(calculator.value).toBe(NaN);
    })
    it('1/0 === Infinity', () => {
      calculator.set(1);
      calculator.divide(0);
      expect(calculator.value).toBe(Infinity);
    })
    it('4/4 === 1', () => {
      calculator.set(4);
      calculator.divide(4);
      expect(calculator.value).toBe(1);
    })
  })
})