import {getElementFromTemplate} from './get-element.js';
import {renderHeader} from "./header";
import renderFooter from "./footer";
import {gameInstance} from "./game-core";

const rulesTemplate = `
  <div class="rules">
    <h1 class="rules__title">Правила</h1>
    <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
      src="img/photo_icon.png" width="16" height="16"> или рисунок <img
      src="img/paint_icon.png" width="16" height="16" alt="">.<br>
      Фотографиями или рисунками могут быть оба изображения.<br>
      На каждую попытку отводится 30 секунд.<br>
      Ошибиться можно не более 3 раз.<br>
      <br>
      Готовы?
    </p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </div>
  `;

const prepareRulesScreen = () => {
  const rules = getElementFromTemplate(rulesTemplate);
  rules.appendChild(renderFooter());
  rules.appendChild(renderHeader());
  return rules;
};

const rulesPrepared = prepareRulesScreen();

const renderRules = () => {
  const rulesClone = rulesPrepared.cloneNode(true);
  const rulesInput = rulesClone.querySelector(`.rules__input`);
  const rulesBtn = rulesClone.querySelector(`.rules__button`);
  const backBtn = rulesClone.querySelector(`.back`);

  rulesInput.addEventListener(`input`, () => {
    rulesBtn.disabled = rulesInput.value === ``;
  });

  rulesBtn.addEventListener(`click`, () => gameInstance.initGame(rulesInput.value));
  backBtn.addEventListener(`click`, () => gameInstance.greetings());

  return rulesClone;
};

export default renderRules;
