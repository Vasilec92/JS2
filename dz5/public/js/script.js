(() => {
  "use strict";
  const e = new (class {
    constructor() {
      var e, t;
      (t = []),
        (e = "items") in this
          ? Object.defineProperty(this, e, {
              value: t,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (this[e] = t);
    }
    addToCart(e) {
      this.items.push(e);
    }
    render() {
      return (
        (document.querySelector(".buy-list").innerHTML = ""),
        this.items.forEach((e) => {
          e.render();
        })
      );
    }
  })();
  new (class {
    constructor(e) {
      var t, r;
      (r = []),
        (t = "items") in this
          ? Object.defineProperty(this, t, {
              value: r,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (this[t] = r),
        this.fetchGoods()
          .then((e) => e.json())
          .then((t) => {
            const r = t.data.map((t) => new GoodItem(t, e));
            this.items.push(...r), this.render();
          });
    }
    fetchGoods() {
      return fetch("./Database/data.json");
    }
    render() {
      this.items.forEach((e) => {
        e.render();
      });
    }
  })(e);
})();
