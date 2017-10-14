import {timer} from '../timer.js';
import assert from 'assert';

suite(`Test timer:`, () => {
  test(`negative amount of seconds`, () => {
    assert(timer(-5) === false);
  });
  test(`data type other than number`, () => {
    assert(timer([1, 2, 3]) === false);
    assert(timer({1: 1, 2: 2}) === false);
    assert(timer(null) === false);
    assert(timer(`thirty`) === false);
    assert(timer(true) === false);
  });
});
