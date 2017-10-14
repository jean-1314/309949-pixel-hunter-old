import {timer} from '../timer.js';
import assert from 'assert';

suite(`Test timer:`, () => {
  test(`time decreases`, () => {
    assert(timer.tick() === true);
  });
});
