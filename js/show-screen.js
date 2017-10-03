import {mainScreen} from './main.js';

const showScreen = (newScreen) => {
  mainScreen.innerHTML = ``;
  mainScreen.appendChild(newScreen);
};

export {showScreen};
