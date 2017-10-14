const informTimeout = () => {
  /* eslint-disable no-console */
  console.log(`Время вышло`);
};

const timer = (seconds) => {

  if (typeof seconds !== `number` || seconds <= 0) {
    return false;
  }

  let tick = () => {
    seconds--;
    if (seconds > 0) {
      setTimeout(tick, 1000);
    } else {
      informTimeout();
    }
  };
  tick();

  return {

  };
};

timer(5);

export {informTimeout, timer};
