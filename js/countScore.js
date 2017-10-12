let playerAnswers = [
  {
    answer: `correct`,
    time: 4900
  },
  {
    answer: `incorrect`,
    time: 2700
  },
  {
    answer: `correct`,
    time: 9200
  },
  {
    answer: `incorrect`,
    time: 3500
  },
  {
    answer: `correct`,
    time: 10800
  },
  {
    answer: `correct`,
    time: 2200
  },
  {
    answer: `incorrect`,
    time: 3500
  },
  {
    answer: `correct`,
    time: 1800
  },
  {
    answer: `correct`,
    time: 6800
  },
  {
    answer: `incorrect`,
    time: 1100
  }
];
let playerLives = 3;
let score = 0;
const countScore = (answers, lives) => {

  for (const index in answers) {
    if (answers.hasOwnProperty(index)) {
      let value = answers[index];

      if (value.answer === `correct`) {
        score = score + 100;
      }

      if (value.time < 3000) {
        score = score + 50;
      }

      if (value.time > 10000) {
        score = score - 50;
      }
    }
  }
  score = score + (lives * 50);
  return score;
};

// countScore(playerAnswers, playerLives);

export {playerAnswers, playerLives, score};
