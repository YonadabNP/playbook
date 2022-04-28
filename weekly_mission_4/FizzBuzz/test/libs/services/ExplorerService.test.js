const Reader = require("./../../../libs/utils/Reader");
const ExplorerService = require("./../../../libs/services/ExplorerService");

describe("Test ExplorerService.js", () => {
    test("Node Explorers", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        // Aplicación del ExplorerService sobre la lista de explorers
        const nodeExplorers = ExplorerService.filterByMission(explorers, "node");
        expect(nodeExplorers.length).toBe(10);
    });

    test("getAmountOfExplorersByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        // Aplicación del ExplorerService sobre la lista de explorers
        const getAmountOfExplorersByMission = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(getAmountOfExplorersByMission).toBe(10);
    });

    test("getExplorersUsernamesByMission", () => {
        const explorers = Reader.readJsonFile("explorers.json"); // esto regresa la lista de explorers del archivo
        // Aplicación del ExplorerService sobre la lista de explorers
        const getExplorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(getExplorersUsernamesByMission.length).toBe(10);
    });

});
