class StubProductClient {
  async fetchItems() {
    return [
      { item: 'milk', available: true },
      { item: 'banana', available: false },
      { item: 'apple', available: false },
    ]
  }
}

module.exports = StubProductClient;