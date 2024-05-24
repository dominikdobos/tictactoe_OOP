import Elem from "./Elem.js";

export default class Jatekter {
  #aktElem = "X";
  #lista = [" ", " ", " ", " ", " ", " ", " ", " ", " "];
  constructor() {
    this.#megjelenit();

    // feliratkozunk a saját lépés eseményre
    $(window).on("lepes", (event) => {
      // console.log(event.detail);
      let id = event.detail;
      this.#beallit(id);
    });
  }

  #beallit(id) {
    this.#lista[id] = this.#aktElem;
    // if (this.#aktElem === "X") {
    //   this.#aktElem = "O";
    // } else {
    //   this.#aktElem = "X";
    // }
    this.#aktElem === "X" ? (this.#aktElem = "O") : (this.#aktElem = "X");
    this.#megjelenit();
  }

  #megjelenit() {
    let szuloElem = $(".jatekter");
    szuloElem.empty();
    this.#lista.forEach((ertek, index) => {
      new Elem(index, ertek, szuloElem);
    });
  }

  #ell() {
    // szorgalmi hf
  }
}
