import {getElementFromTemplate} from './get-element.js';
import {showScreen} from './show-screen.js';
import renderStatsScreen from './stats-screen.js';
import renderGreetings from './greetings.js';
import renderStats from './stats';
import {renderHeader, headerData} from "./header";
import renderFooter from "./footer";

const gameThreeTemplate = `
  <div class="game">
    <p class="game__task">Найдите рисунок среди изображений</p>
    <form class="game__content  game__content--triple">
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option  game__option--selected">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
      <div class="game__option">
        <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
      </div>
    </form>
  `;

const prepareGameThreeScreen = () => {
  const gameThree = getElementFromTemplate(gameThreeTemplate);
  gameThree.prepend(renderHeader());
  const header = gameThree.querySelector(`header`);
  header.appendChild(headerData);
  gameThree.appendChild(renderStats());
  gameThree.appendChild(renderFooter());
  return gameThree;
};

const gameThreePrepared = prepareGameThreeScreen();

const renderGameThree = () => {
  const gameThreeClone = gameThreePrepared.cloneNode(true);
  const backBtn = gameThreeClone.querySelector(`.back`);
  const optionsArray = Array.from(gameThreeClone.querySelectorAll(`.game__option`));

  if (gameThreeClone) {
    optionsArray.forEach(function (element) {
      element.addEventListener(`click`, () => {
        showScreen(renderStatsScreen());
      });
    });
  }
  backBtn.addEventListener(`click`, () => showScreen(renderGreetings()));
  return gameThreeClone;
};


export default renderGameThree;
