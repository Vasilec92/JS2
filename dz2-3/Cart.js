class Cart {
  items = [];

  constructor() {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
  }

  addToCart(obj) {
    this.items.push(obj);
  }

  render() {
    document.querySelector(".buy-list").innerHTML = "";
    return this.items.forEach((BuyItem) => {
      BuyItem.render();
    });
  }
}
