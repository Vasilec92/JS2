export default class List {
  items = [];

  constructor(cart) {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    this.fetchGoods()
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        const goods = response.data.map((cur) => {
          return new GoodItem(cur, cart);
        });
        // поштучно добавляем объекты в наш список
        // ссылка на статью про spread оператор ниже
        this.items.push(...goods);

        // запускаем рендер
        this.render();
      });
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/
  fetchGoods() {
    return fetch("./Database/data.json");
  }
  render() {
    // В this.items у нас хранятся объекты GoodItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this.items.forEach((good) => {
      good.render();
    });
  }
}
