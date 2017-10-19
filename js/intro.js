import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import greetings from './greetings.js';
import footer from './footer.js';

const intro = getElementFromTemplate(
    `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
  ${footer}
  `
);

const introAsteriskBtn = intro.querySelector(`.intro__asterisk`);

if (introAsteriskBtn) {
  introAsteriskBtn.addEventListener(`click`, () => showScreen(greetings));
}

export default intro;
