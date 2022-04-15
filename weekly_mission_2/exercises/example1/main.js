const repo = {
  name: "LaunchX",
  author: "carlogilmar",
  language: "JavaScript",
  numberOfCommits: 100,
  stars: 199,
  forks: 299,
  issues_open: 10,
  issues_close: 10,
  getTotalIssues: function () {
    return this.issues_open + this.issues_close;
  },
  getGeneralInfo: function () {
    return `This repository ${this.name} was created by ${this.author}`;
  },
};

console.log("-------- repo ------------");
console.log("Nombre del repo: " + repo.name);
console.log("Issues totales: " + repo.getTotalIssues());
console.log(repo.getGeneralInfo());

// Objeto Issue

const Issue = {
  title: "Title 1",
  repositoryNameAssociated: "yonadabNP",
  status: "active",
  numberOfComments: 100,
  labels: ['Label1', 'Label2','Label3'],
  author: "YNP",
  dateCreated: "01/01/2020",
  lastUpdated: "13/04/2022",
  getTitleAndAuthor: function () {
    return `${this.title} - ${this.author}`;
  },
  getGeneralInfo: function () {
    return `This issue '${this.title}' was created by ${this.author}`;
  },
};

console.log("-------- Issue ------------");
console.log("Nombre del issue: " + Issue.title);
console.log("Titulo y autor: " + Issue.getTitleAndAuthor());
console.log("Informacion General: " + Issue.getGeneralInfo());

// Objeto PullRequest

const PullRequest = {
  title: "PR_1",
  branchName: "Branch1",
  dateCreated: "01/01/2020",
  status: "Active",
  repositoryNameAssociated: "LaunchX",
  getTitleAndAuthor: function () {
    return `Title: '${this.title}' - Repository name: '${this.repositoryNameAssociated}'`;
  },
  getStatus: function () {
    return `Current Status is '${this.status}' for Branch Name '${this.branchName}'}`;
  },
};

console.log("-------- PullRequest ------------");
console.log("Nombre del PullRequest: " + PullRequest.title);
console.log("Titulo y autor: " + PullRequest.getTitleAndAuthor());
console.log("Estatus: " + PullRequest.getStatus());