class BuyItem {
  name = "";
  price = 0;
  imageUrl = "";

  // в аргументах применена деструктуризация (ссылка на статью ниже)
  constructor({ name, price, imageUrl }) {
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
  }
  delateItem = () => {
    console.log(this.name);
    console.log("delete");
  };
  render() {
    // находим место куда рендерить
    const placeToRender = document.querySelector(".buy-list");
    if (placeToRender) {
      // создаем блок, в который помещаем информацию о товаре
      const block = document.createElement("div");
      const btn = new Button("delate", this.delateItem.bind(this));
      block.innerHTML = `
      <div class="card"> 
         <div>
            <p>Women's Running Shoe</p>
            <h1>${this.name}</h1>
            <h2>${this.price}$</h2>
            <div class="buttons">
                     
            </div>
         </div>
         <div>
         <img src='${this.imageUrl}'/>
         </div>
      </div>
         `;
      btn.render(block.querySelector(".buttons"));
      // помещаем созданный блок на страницу
      placeToRender.appendChild(block);
    }
  }
}
