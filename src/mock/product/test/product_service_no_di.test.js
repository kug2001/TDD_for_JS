const ProductService = require('../product_service_no_di.js');
const ProductClient = require('../product_client.js');
jest.mock('../product_client');

describe('ProductService에서 허용된 유저 정보가 나오는지 확인', () => {
  let productService;
  const fetchItems = jest.fn(async () => [
    { item: 'milk', available: true },
    { item: 'banana', available: false },
    { item: 'apple', available: false },
  ]);
  ProductClient.mockImplementation(() => {
    return {
      fetchItems,
    }
  })
  beforeEach(() => {
    productService = new ProductService();
  })
  it('구입 가능한 목록만 필터 될 수 있도록 테스트', async () => {
    const data = await productService.fetchAvailableItems();
    expect(data).toEqual([{ item: 'milk', available: true }])
  })
})