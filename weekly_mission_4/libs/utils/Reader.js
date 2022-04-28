const fs = require("fs");

class Reader {
  constructor() {}

  getInfo() {
    return `Hey there!`;
  }

  static readJsonFile(path) {
    if (!path || path.length == 0) return "";
    const rawdata = fs.readFileSync(path);
    return JSON.parse(rawdata);
  }
}

module.exports = Reader;
