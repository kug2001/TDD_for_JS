class ProductClient {
  fetchItems() {
    return fetch('http://example.com/loing/id+password')
      .then((res) => {
        res.json();
      })
  }
}
module.exports = ProductClient;