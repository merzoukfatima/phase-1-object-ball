const gameObject = () => {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
};
const numPointsScored = (playerName) => {
  const object = gameObject();
  for (let objectKey in object) {
    debugger;
    let teamObject = object[objectKey];
    debugger;
    let data = teamObject.players;
    for (let key in data) {
      debugger;
      if (key === playerName) return data[key].points;
    }
  }
  debugger;
};

const shoeSize = (playerName) => {
  const object = gameObject();
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    for (let key in data) {
      debugger;
      if (key === playerName) return data[playerName].shoe;
    }
  }
};
const teamColors = (teamName) => {
  const object = gameObject();
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    debugger;
    if (teamObject.teamName === teamName) return teamObject.colors;
  }
};

const teamNames = () => {
  const object = gameObject();
  const teamNames = [];
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    debugger;
    teamNames.push(teamObject.teamName);
  }
  return teamNames;
};

const playerNumbers = (teamName) => {
  const object = gameObject();
  let playerNumbers = [];
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    debugger;
    if (teamObject.teamName === teamName) {
      let data = teamObject.players;
      for (let key in data) {
        debugger;
        playerNumbers.push(data[key].number);
      }
    }
  }
  return playerNumbers;
};

const playerStats = (playerName) => {
  const object = gameObject();
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    for (let key in data) {
      debugger;
      if (key === playerName) return data[playerName];
    }
  }
};

const bigShoeRebounds = () => {
  const object = gameObject();
  let rebounds;
  let largestShoeSize = 0;
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    for (let key in data) {
      if (data[key].shoe > largestShoeSize) {
        largestShoeSize = data[key].shoe;
        rebounds = data[key].rebounds;
      }
    }
    debugger;
  }
  return rebounds;
};

const mostPointsScored = () => {
  const object = gameObject();
  let playerPoints = 0;
  let playerName = "";
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    for (let key in data) {
      if (data[key].points > playerPoints) {
        debugger;
        playerPoints = data[key].points;
        playerName = key;
      }
    }
  }
  return playerName;
};

const winningTeam = () => {
  const object = gameObject();
  let homePoints = 0;
  let awayPoints = 0;
  let homeTeam = "";
  let awayTeam = "";
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    if (objectKey === "home") {
      homeTeam = teamObject.teamName;
      for (let key in data) {
        debugger;
        homePoints += data[key].points;
      }
    } else {
      awayTeam = teamObject.teamName;
      for (let key in data) {
        debugger;
        awayPoints += data[key].points;
      }
    }
  }
  debugger;
  if (homePoints > awayPoints) return homeTeam;
  else return awayTeam;
};

const playerWithLongestName = () => {
  const object = gameObject();
  let playerName;
  let nameLength = 0;
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    debugger;
    for (let key in data) {
      let name = key.split(" ").join("");
      if (name.length > nameLength) {
        debugger;
        nameLength = name.length;
        playerName = key;
      }
    }
  }
  return playerName;
};

const doesLongNameStealATon = () => {
  const object = gameObject();
  let playerSteals = 0;
  let playerName = "";
  for (let objectKey in object) {
    let teamObject = object[objectKey];
    let data = teamObject.players;
    debugger;
    for (let key in data) {
      if (data[key].steals > playerSteals) {
        debugger;
        playerSteals = data[key].steals;
        playerName = key;
      }
    }
  }
  if (playerName === playerWithLongestName()) return true;
  else return false;
};
