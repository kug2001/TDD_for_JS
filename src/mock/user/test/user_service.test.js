const UserService = require('../user_service.js');
const userClient = require('../user_client.js');
jest.mock('../user_client');

describe('유저 로그인 서비스의 테스트 코드 작성', () => {
  let userService;
  const login = jest.fn(async (id, password) => {
    if (id && password) {
      return true;
    }
  })
  userClient.mockImplementation(() => {
    return {
      login,
    };
  })
  beforeEach(() => {
    userService = new UserService(userClient());
  })
  it('로그인 메서드 테스트 코드 ', async () => {
    expect(userService.isLogedIn).toBe(false);
    const data = await userService.login('young', '1234');
    expect(data).toBe(true);
    expect(userService.isLogedIn).toBe(true);
  })
})