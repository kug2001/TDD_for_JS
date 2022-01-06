const fetchProduct = require('../async.js');

describe('비동기 함수 테스트', () => {
  it('성공 테스트', () => {
    return fetchProduct()
      .then((data) => {
        expect(data).toEqual({ "item": "Milk", "price": 200 })
      })
  })
  it('실패 테스트', () => {
    return fetchProduct('error')
      .catch((err) => {
        expect(err).toMatch('network error');
      })
  })
  it('resolve 성공 테스트', () => {
    return expect(fetchProduct()).resolves.toEqual({ "item": "Milk", "price": 200 });
  })
  it('reject 성공 테스트', () => {
    return expect(fetchProduct('error')).rejects.toMatch('network error');
  })
})