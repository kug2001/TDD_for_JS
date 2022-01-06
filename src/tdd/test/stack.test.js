const Stack = require('../stack.js');

describe('---- Stack을 위한 테스트 코드 작성 ----', () => {
  let stack;
  beforeEach(() => {
    stack = new Stack();
  })
  it('현재 메모리의 사이즈를 확인하는 테스트', () => {
    expect(stack.size()).toBe(0);
  })
  it('Push을 위한 테스트 코드 작성', () => {
    stack.push('bob');
    stack.push('young');
    stack.push('jayden');
    expect(stack.memory).toEqual(['bob', 'young', 'jayden']);
    expect(stack.size()).toBe(3);
  })
  it('Pop을 위한 테스트 코드 작성', () => {
    stack.push('bob');
    stack.push('young');
    expect(stack.pop()).toBe('young');
    expect(stack.memory).toEqual(['bob']);
    expect(stack.size()).toBe(1);
  })
  it('Pop의 에러코드 확인 테스트 코드 작성', () => {
    stack.push('bob');
    stack.push('young');
    stack.pop();
    stack.pop();
    expect(() => stack.pop()).toThrow('error');
  })
})