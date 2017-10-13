import {playerAnswers, playerLives, countScore} from '../countScore.js';
import assert from 'assert';
mocha.setup(`tdd`);

suite(`Calculate Score Function Test`, () => {
  test(`fewer answers`, () => {
    assert(countScore(playerAnswers, playerLives) === -1);
  });
});

