class Card {
  items = [];

  constructor() {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
  }

  addToCart(obj) {
    this.items.push(obj);
  }

  render() {
    return this.items.map((elm) => console.log(elm));
  }
}
