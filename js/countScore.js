let playerAnswers = [
  {
    answer: `correct`,
    time: `normal`
  },
  {
    answer: `incorrect`,
    time: `fast`
  },
  {
    answer: `correct`,
    time: `normal`
  },
  {
    answer: `incorrect`,
    time: `fast`
  },
  {
    answer: `correct`,
    time: `slow`
  },
  {
    answer: `correct`,
    time: `fast`
  },
  {
    answer: `incorrect`,
    time: `normal`
  },
  {
    answer: `correct`,
    time: `fast`
  },
  {
    answer: `correct`,
    time: `normal`
  },
  {
    answer: `incorrect`,
    time: `fast`
  }
];
let playerLives = 3;

const countScore = (answers, lives) => {
  let score = 0;
  for (const index in answers) {
    if (answers.hasOwnProperty(index)) {
      let value = answers[index];
      switch (value) {
        case `correct`:
          score = score + 100;
          break;
        case `fast`:
          score = score + 50;
          break;
        case `slow`:
          score = score - 50;
          break;
      }
    }
  }
  score = lives * 50;
  return score;
};

countScore(playerAnswers, playerLives);
