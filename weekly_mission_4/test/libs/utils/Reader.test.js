const Reader = require("./../../../libs/utils/Reader");

describe("Test Reader.js", () => {
    test('Return', () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
      expect(explorers.length).toBe(15);
    });
  });