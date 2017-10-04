import {mainScreen} from './main.js';

const showScreen = (newScreen) => {
  while (mainScreen.firstChild) {
    mainScreen.removeChild(mainScreen.firstChild);
  }
  mainScreen.appendChild(newScreen);
};

export {showScreen};
