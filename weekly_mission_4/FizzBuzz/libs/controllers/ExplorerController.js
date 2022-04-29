const Reader = require("./../../libs/utils/Reader");
const ExplorerService = require("./../../libs/services/ExplorerService");
const FizzbuzzService = require("./../../libs/services/FizzbuzzService");

class ExplorerController {
    constructor() {}

    static getExplorersByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.filterByMission(explorers, mission);
    }

    static getExplorersUsernamesByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getExplorersUsernamesByMission(explorers, mission);
    }

    static getExplorersAmonutByMission(mission) {
        const explorers = Reader.readJsonFile("./explorers.json");
        return ExplorerService.getAmountOfExplorersByMission(explorers, mission);
    }

    static applyValidationInNumber(score) {
        return FizzbuzzService.applyValidationInNumber(score);
    }    
}

module.exports = ExplorerController;