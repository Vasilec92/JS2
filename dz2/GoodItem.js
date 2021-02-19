class GoodItem {
  name = "";
  price = 0;
  imageUrl = "";

  // в аргументах применена деструктуризация (ссылка на статью ниже)
  constructor({ name, price, imageUrl }) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  addToCart = () => {
    console.log(this);
    const buy = new BuyItem({ ...this });
    card.addToCart({ ...buy });
    console.log(buy);
    console.log(card);
    buy.render();
    console.log("add");
  };
  render() {
    // находим место куда рендерить
    const placeToRender = document.querySelector(".goods-list");
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement("div");
      const btn = new Button("Add to card", this.addToCart.bind(this));
      block.innerHTML = `
      <div class="containerCard">
         <div class="images">
            <img class='img' src='${this.imageUrl}'/>
         </div> 
         <div class="product">
            <p>Women's Running Shoe</p>
            <h1>${this.name}</h1>
            <h2>${this.price}$</h2>
            <p class="desc">Description.</p>
            <div class="buttons">
                     
            </div>
         </div>
      </div>
         `;
      btn.render(block.querySelector(".buttons"));
      // помещаем созданный блок на страницу
      placeToRender.appendChild(block);
    }
  }
}
