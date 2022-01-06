const ProductService = require('../product_service.js');
const StubProductClient = require('../test/stub_product_client.js');

describe('stub를 이용한 단위 테스트 확인', () => {
  let productService;
  beforeEach(() => {
    productService = new ProductService(new StubProductClient());
  })
  it('구입 가능한 목록만 필터 될 수 있도록 테스트', async () => {
    const data = await productService.fetchAvailableItems();
    expect(data).toEqual([{ item: 'milk', available: true }])
  })
})