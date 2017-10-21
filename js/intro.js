import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import renderFooter from './footer.js';
import renderGreetings from "./greetings";

const introTemplate = `
  <div id="intro" class="intro">
    <h1 class="intro__asterisk">*</h1>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </div>
  `;

const prepareIntroScreen = () => {
  const intro = getElementFromTemplate(introTemplate);
  intro.appendChild(renderFooter());
  return intro;
};

const introPrepared = prepareIntroScreen();

const renderIntro = () => {
  const introClone = introPrepared.cloneNode(true);
  const introAsteriskBtn = introClone.querySelector(`.intro__asterisk`);

  if (introAsteriskBtn) {
    introAsteriskBtn.addEventListener(`click`, () => showScreen(renderGreetings()));
  }

  return introClone;
};

export default renderIntro;
