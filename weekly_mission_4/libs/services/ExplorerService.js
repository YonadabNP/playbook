class ExplorerService {
  constructor() {}

  getInfo() {
    return `Hey there!`;
  }

  static filterByMission(explorers, mission) {
    return explorers.filter((explorer) => explorer.mission == mission);
  }

  static getAmountOfExplorersByMission(explorers, mission) {
    const filteredExplorers = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    if (!filteredExplorers) {
      return 0;
    }
    return filteredExplorers.length;
  }

  static getExplorersUsernamesByMission(explorers, mission) {
    const explorersInNodeToGetUsernames = explorers.filter(
      (explorer) => explorer.mission == mission
    );
    return explorersInNodeToGetUsernames.map(
      (explorer) => explorer.githubUsername
    );
  }
}

module.exports = ExplorerService;
