import {showScreen} from './show-screen.js';
import renderIntro from "./intro";

const mainScreen = document.querySelector(`.central`);
showScreen(renderIntro());

export {mainScreen};
