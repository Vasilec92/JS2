class List {
  items = [];

  constructor() {
    // Забираем массив со свойствами товаров, на основе которых будем создавать объекты товароы
    let goods = this.fetchGoods();

    // трансформируем наш массив со свойствами в массив с объектами
    goods = goods.map((cur) => {
      return new GoodItem(cur);
    });

    // поштучно добавляем объекты в наш список
    // ссылка на статью про spread оператор ниже
    this.items.push(...goods);

    // запускаем рендер
    this.render();
  }

  /**
   * Заглушка - имитатор запроса на сервер
   * Возвращает свойства, на основании которых будут создаваться объекты
   **/
  fetchGoods() {
    return [
      {
        name: "Nike",
        price: 150,
        imageUrl: "https://picsum.photos/id/237/150/160",
      },
      {
        name: "Socks",
        price: 15,
        imageUrl: "https://picsum.photos/id/23/150/160",
      },
      {
        name: "Jacket",
        price: 50,
        imageUrl: "https://picsum.photos/id/56/150/160",
      },
      {
        name: "Shoes",
        price: 1500,
        imageUrl: "https://picsum.photos/id/87/150/160",
      },
    ];
  }

  render() {
    // В this.items у нас хранятся объекты GoodItem
    // Проходимся по каждому такому объекту и вызываем у него метод рендера (каждая карточка товара рендерит сама себя)
    this.items.forEach((good) => {
      good.render();
    });
  }
}
