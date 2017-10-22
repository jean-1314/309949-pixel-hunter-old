import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import renderGameThree from './game-3.js';
import renderGreetings from './greetings.js';
import renderStats from './stats';
import {renderHeader, headerData} from "./header";
import renderFooter from "./footer";

const gameTwoTemplate = `
  <div class="game">
    <p class="game__task">Угадай, фото или рисунок?</p>
    <form class="game__content  game__content--wide">
      <div class="game__option">
        <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
        <label class="game__answer  game__answer--photo">
          <input name="question1" type="radio" value="photo">
          <span>Фото</span>
        </label>
        <label class="game__answer  game__answer--wide  game__answer--paint">
          <input name="question1" type="radio" value="paint">
          <span>Рисунок</span>
        </label>
      </div>
    </form>
  `;

const prepareGameTwoScreen = () => {
  const gameTwo = getElementFromTemplate(gameTwoTemplate);
  gameTwo.prepend(renderHeader());
  const header = gameTwo.querySelector(`header`);
  header.appendChild(headerData);
  gameTwo.appendChild(renderStats());
  gameTwo.appendChild(renderFooter());
  return gameTwo;
};

const gameTwoPrepared = prepareGameTwoScreen();

const renderGameTwo = () => {
  const gameTwoClone = gameTwoPrepared.cloneNode(true);
  const backBtn = gameTwoClone.querySelector(`.back`);
  const questionArray = Array.from(gameTwoClone.querySelectorAll(`[name*='question']`));

  if (gameTwoClone) {
    questionArray.forEach(function (element) {
      element.addEventListener(`change`, () => {
        showScreen(renderGameThree());
      });
    });
  }

  backBtn.addEventListener(`click`, () => showScreen(renderGreetings()));
  return gameTwoClone;
};
export default renderGameTwo;
