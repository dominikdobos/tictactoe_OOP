export default class Elem {
  #ertek = "";
  #szuloElem;
  #divElem;
  #id = 0;
  constructor(id, ertek, szuloElem) {
    this.#id = id;
    this.#ertek = ertek;
    this.#szuloElem = szuloElem;
    this.#megjelenit();

    this.#divElem = this.#szuloElem.children("div:last-child");

    this.#divElem.on("click", () => {
      console.log(this.#id);
      if (this.#ertek === " ") {
        this.#trigger("lepes");
      }
    });
  }

  #megjelenit() {
    let txt = `<div><p>${this.#ertek}</p></div>`;
    this.#szuloElem.append(txt);
  }

  #trigger(esemenynev) {
    // új eseménynek átadjuk az objektumról az infókat {detail: }
    const e = new CustomEvent(esemenynev, { detail: this.#id });
    window.dispatchEvent(e);
  }
}
