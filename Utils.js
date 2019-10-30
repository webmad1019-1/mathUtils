let UtilsDani = {
  randomFloat(min, max) {
    if (typeof min !== "number" || typeof max !== "number") {
      throw new TypeError("Wrong value as argument");
    }
    return Math.random() * (max - min) + min;
  },
  randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
};
