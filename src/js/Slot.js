import Reel from "./Reel.js";
import Symbol from "./Symbol.js";

export default class Slot {
  constructor(domElement, config = {}) {
    Symbol.preload();

    this.currentSymbols = [
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
    ];

    this.nextSymbols = [
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
      ["002-dinosaur", "002-dinosaur", "002-dinosaur"],
    ];

    this.container = domElement;

    this.reels = Array.from(this.container.getElementsByClassName("reel")).map(
      (reelContainer, idx) =>
        new Reel(reelContainer, idx, this.currentSymbols[idx])
    );

    this.spinButton = document.getElementById("spin");
    this.spinButton.addEventListener("click", () => this.spin());

    if (config.inverted) {
      this.container.classList.add("inverted");
    }
  }

  spin() {
    this.onSpinStart();

    this.currentSymbols = this.nextSymbols;
    this.nextSymbols = [
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.random(), Symbol.random()],
      [Symbol.random(), Symbol.getGender(), Symbol.random()], // hardcode boy/girl
    ];

    return Promise.all(
      this.reels.map((reel) => {
        reel.renderSymbols(this.nextSymbols[reel.idx]);
        return reel.spin();
      })
    ).then(() => this.onSpinEnd());
  }

  onSpinStart() {
    this.spinButton.disabled = true;

    console.log("SPIN START");
  }

  onSpinEnd() {
    this.spinButton.disabled = false;

    console.log("SPIN END");
  }
}
