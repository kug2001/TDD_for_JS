const check = require('../check.js');

describe('check 함수 테스트', () => {
  let onSuccess;
  let onFail
  beforeEach(() => {
    onSuccess = jest.fn();
    onFail = jest.fn();
  })
  it('predicate()가 True일 때', () => {
    check(() => true, onSuccess, onFail);
    // expect(onSuccess.mock.calls.length).toBe(1);
    expect(onSuccess).toHaveBeenCalledTimes(1);
    // expect(onSuccess.mock.calls[0][0]).toBe('yes');
    expect(onSuccess).toHaveBeenCalledWith('yes');
    // expect(onFail.mock.calls.length).toBe(0);
    expect(onFail).toHaveBeenCalledTimes(0);
  })
  it('predicate()가 false일 때', () => {
    check(() => false, onSuccess, onFail);
    expect(onSuccess).toHaveBeenCalledTimes(0);
    expect(onFail).toHaveBeenCalledWith('no');
    expect(onFail).toHaveBeenCalledTimes(1);
  })
})