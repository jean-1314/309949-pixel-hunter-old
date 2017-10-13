let playerAnswers = [
  {
    answer: `correct`,
    time: 24900
  },
  {
    answer: `correct`,
    time: 1900
  },
  {
    answer: `incorrect`,
    time: 24900
  },
  {
    answer: `correct`,
    time: 1900
  },
  {
    answer: `correct`,
    time: 24900
  },
  {
    answer: `incorrect`,
    time: 1900
  },
  {
    answer: `correct`,
    time: 1900
  },
  {
    answer: `incorrect`,
    time: 14900
  },
  {
    answer: `incorrect`,
    time: 14900
  },
  {
    answer: `correct`,
    time: 14900
  }
];
let playerLives = 1;

const countScore = (answers, lives) => {
  let score = 0;
  for (const index in answers) {
    if (answers.hasOwnProperty(index)) {
      let value = answers[index];

      if (value.answer === `correct`) {
        score = score + 100;
      }

      if (value.time < 10000) {
        score = score + 50;
      }

      if (value.time > 20000) {
        score = score - 50;
      }
    }
  }

  score = score + (lives * 50);
  if (answers.length < 10) {
    score = -1;
  }
  return score;
};

countScore(playerAnswers, playerLives);

export {playerAnswers, playerLives, countScore};
