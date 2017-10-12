import assert from 'assert';
import {playerAnswers, playerLives, score} from '../countScore.js';

const countScore = (answers, lives) => {
  return score;
}

mocha.setup(`tdd`);

const assert = chai.assert;

suite(`Calculate Score Function Test`, () => {
  test(`fewer answers`, () => {
    assert(countScore());
  });
});
