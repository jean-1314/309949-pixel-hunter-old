import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import renderGameTwo from './game-2.js';
import renderGreetings from './greetings.js';
import renderStats from './stats';
import {renderHeader, headerData} from "./header";
import renderFooter from "./footer";

const gameOneTemplate = `
  <div class="game">
    <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
    <form class="game__content">
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
        <label class="game__answer game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
      <div class="game__option">
        <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
        <label class="game__answer  game__answer--photo">
          <input name="question2" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--paint">
          <input name="question2" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  </div>
  `;

const prepareGameOneScreen = () => {
  const gameOne = getElementFromTemplate(gameOneTemplate);
  gameOne.prepend(renderHeader());
  const header = gameOne.querySelector(`header`);
  header.appendChild(headerData);
  gameOne.appendChild(renderStats());
  gameOne.appendChild(renderFooter());
  return gameOne;
};

const gameOnePrepared = prepareGameOneScreen();

const renderGameOne = () => {
  const gameOneClone = gameOnePrepared.cloneNode(true);
  const backBtn = gameOneClone.querySelector(`.back`);
  const questionArray = Array.from(gameOneClone.querySelectorAll(`[name*='question']`));
  const questionOneArray = Array.from(gameOneClone.querySelectorAll(`[name='question1']`));
  const questionTwoArray = Array.from(gameOneClone.querySelectorAll(`[name='question2']`));
  const checked = (elem) => {
    return elem.checked;
  };

  if (gameOneClone) {
    questionArray.forEach(function (element) {
      element.addEventListener(`change`, () => {
        if (questionOneArray.some(checked) && questionTwoArray.some(checked)) {
          showScreen(renderGameTwo());
        }
      });
    });
  }

  backBtn.addEventListener(`click`, () => showScreen(renderGreetings()));
  return gameOneClone;
};
export default renderGameOne;
