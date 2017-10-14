import {playerAnswers, playerLives, countScore} from '../countScore.js';
import assert from 'assert';

suite(`Calculate Score Function Test:`, () => {
  test(`fewer answers`, () => {
    assert(countScore(playerAnswers, playerLives) === -1);
  });
  test(`all answers are correct and neither slow nor fast`, () => {
    assert(countScore(playerAnswers, playerLives) === 1150);
  });
  test(`4 answers are incorrect, 3 slow, 4 fast, 1 life`, () => {
    assert(countScore(playerAnswers, playerLives) === 700);
  });
});

