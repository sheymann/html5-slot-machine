const cache = {};

export default class Symbol {
  constructor(name = Symbol.random()) {
    this.name = name;

    if (cache[name]) {
      this.img = cache[name].cloneNode();
    } else {
      this.img = new Image();
      this.img.src = require(`../assets/symbols/${name}.svg`).default;

      cache[name] = this.img;
    }
  }

  static preload() {
    Symbol.symbols.forEach((symbol) => new Symbol(symbol));
  }

  static get symbols() {
    return [
      "001-stegosaurus",
      "002-dinosaur",
      "003-dinosaur",
      "014-dinosaur",
      "017-dinosaur",
      "018-dinosaur",
      "019-dinosaur",
      "024-dinosaur",
      "028-dinosaur",
      "029-dinosaur",
      "030-dinosaur",
      "013-pterodactyl",
      "015-pterodactyl",
      "020-pterodactyl",
      "025-pterodactyl",
      "009-stegosaurus",
      "022-stegosaurus",
      "023-tyrannosaurus-rex",
      "026-triceratops",
      "itsagirl-dino", // boy/girl
    ];
  }

  static random() {
    return this.symbols[Math.floor(Math.random() * (this.symbols.length - 1))]; // exclude the last image
  }

  static getGender() {
    return this.symbols[this.symbols.length - 1]; // idx of boy/girl
  }
}
